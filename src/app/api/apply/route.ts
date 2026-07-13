import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Pool } from 'pg';
import { pushDriverLeadToGhl } from '@/lib/ghl';

const LEAD_SITE = 'rogue-carrier-site';

// schema.table — must be set in env, validated at module load
const LEADS_TABLE = process.env.LEADS_TABLE;
const TABLE_RE = /^[a-z_][a-z0-9_]*\.[a-z_][a-z0-9_]*$/i;
if (LEADS_TABLE && !TABLE_RE.test(LEADS_TABLE)) {
  throw new Error(`Invalid LEADS_TABLE format: ${LEADS_TABLE}`);
}

// Singleton pool across warm invocations.
// We strip ?sslmode=... from the connection string because `pg` parses it from
// the URL and enforces cert verification, overriding our explicit ssl option.
// Railway's PG proxy uses a self-signed cert chain.
let pool: Pool | null = null;
function getPool(): Pool | null {
  if (!pool && process.env.DATABASE_URL) {
    const cleaned = process.env.DATABASE_URL.replace(/([?&])sslmode=[^&]*(&|$)/g, (_m, p1, p2) =>
      p1 === '?' && p2 === '' ? '' : p1 === '?' ? '?' : p2,
    );
    pool = new Pool({
      connectionString: cleaned,
      ssl: { rejectUnauthorized: false },
      max: 3,
      idleTimeoutMillis: 10_000,
    });
  }
  return pool;
}

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(process.env.RESEND_API_KEY);
}

interface ApplyRequest {
  formType: 'quick' | 'full';
  name?: string;
  firstName?: string;
  lastName?: string;
  phone: string;
  email?: string;
  experience?: string;
  cdl?: string;
  currentLocation?: string;
  availability?: string;
  smsConsent?: boolean;
}

async function insertLead(request: Request, data: ApplyRequest, fullName: string | undefined): Promise<void> {
  const p = getPool();
  if (!p || !LEADS_TABLE) return;
  const ua = request.headers.get('user-agent');
  const xff = request.headers.get('x-forwarded-for');
  const ip = xff ? xff.split(',')[0].trim() : null;
  const extra: Record<string, unknown> = {};
  if (data.formType) extra.form_type = data.formType;
  if (data.firstName) extra.first_name = data.firstName;
  if (data.lastName) extra.last_name = data.lastName;
  if (data.experience) extra.experience = data.experience;
  if (data.cdl) extra.cdl = data.cdl;
  if (data.currentLocation) extra.current_location = data.currentLocation;
  if (data.availability) extra.availability = data.availability;
  const extraJson = Object.keys(extra).length ? JSON.stringify(extra) : null;
  await p.query(
    `INSERT INTO ${LEADS_TABLE}
       (name, phone, email, service_slug, service_name, city_slug, city_name, message, source, page, user_agent, ip, site, extra)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14::jsonb)`,
    [
      fullName || null,
      data.phone || null,
      data.email || null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      ua,
      ip,
      LEAD_SITE,
      extraJson,
    ],
  );
}

export async function POST(request: Request) {
  try {
    const data: ApplyRequest = await request.json();

    const fullName =
      data.formType === 'quick'
        ? data.name
        : `${data.firstName} ${data.lastName}`;

    const rows = [
      ['Name', fullName],
      ['Phone', data.phone],
      ['Email', data.email || '—'],
      ['CDL Class A', data.cdl === 'yes' ? 'Yes' : 'No'],
      ['Experience', data.experience || '—'],
      ['SMS Consent', data.smsConsent ? 'Yes' : 'No'],
    ];

    if (data.formType === 'full') {
      rows.push(
        ['Location', data.currentLocation || '—'],
        ['Availability', data.availability || '—'],
      );
    }

    const tableRows = rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:8px 12px;font-weight:600;color:#555;border-bottom:1px solid #eee">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${value}</td></tr>`,
      )
      .join('');

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#1a1a1a;padding:20px;text-align:center">
          <h1 style="color:#e31837;margin:0;font-size:24px">New Driver Application</h1>
          <p style="color:#999;margin:4px 0 0;font-size:14px">${data.formType === 'quick' ? 'Quick Pre-Screen' : 'Full Application'} • roguecarrierinc.com</p>
        </div>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">${tableRows}</table>
        <div style="margin-top:20px;padding:16px;background:#f8f8f8;border-radius:8px;text-align:center">
          <a href="tel:${data.phone}" style="color:#e31837;font-weight:600;font-size:18px">${data.phone}</a>
        </div>
      </div>
    `;

    const send = getResend().emails.send({
      from: 'Rogue Carrier Website <noreply@roguecarrierinc.com>',
      to: [
        'iana@roguecarrierinc.com',
        'gaby@roguecarrierinc.com',
        'al.pshen.marketing@gmail.com',
      ],
      subject: `New Driver Application: ${fullName} — ${data.phone}`,
      html,
    });

    const ghlPush = pushDriverLeadToGhl({
      fullName: fullName || '',
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      formType: data.formType,
      cdl: data.cdl,
      experience: data.experience,
      currentLocation: data.currentLocation,
      availability: data.availability,
      smsConsent: data.smsConsent,
    });

    const [, pgResult, ghlResult] = await Promise.allSettled([send, insertLead(request, data, fullName), ghlPush]);
    if (pgResult.status === 'rejected') {
      console.error('pg insert failed:', pgResult.reason);
    }
    if (ghlResult.status === 'rejected') {
      console.error('GHL push failed:', ghlResult.reason);
    }
    await send;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Apply API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send notification' },
      { status: 500 },
    );
  }
}

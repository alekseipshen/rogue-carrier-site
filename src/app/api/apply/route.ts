import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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

    await getResend().emails.send({
      from: 'Rogue Carrier Website <noreply@roguecarrierinc.com>',
      to: 'hr@roguecarrierinc.com',
      subject: `New Driver Application: ${fullName} — ${data.phone}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Apply API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send notification' },
      { status: 500 },
    );
  }
}

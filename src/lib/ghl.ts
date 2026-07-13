/**
 * Pushes driver applications into the Rogue Carrier sub-account of Zolver (GHL)
 * so recruiters work leads from the CRM pipeline (with SMS follow-up) instead of
 * email alone. Email via Resend stays as the delivery backup.
 *
 * Location / pipeline / field IDs are fixed for this sub-account
 * (see Clients/Rogue Carrier/ghl-config.json in the workspace).
 * Only the API token comes from env: GHL_API_TOKEN.
 */

const GHL_BASE = 'https://services.leadconnectorhq.com';
const LOCATION_ID = 'Eofpb1rKBtaX4WHRxkU2';
const DRIVER_PIPELINE_ID = 'hxknGuAe0ZxFOtvWIN0x'; // "Driver Recruitment"
const STAGE_NEW_APPLICATION = '55ff8c0f-8046-48b5-97c9-23d5ae41a57f';

const FIELDS = {
  position: 'N6NQKjkFbvW3ZYtOdEJz',
  formType: 'R6zN69e5knHbSZ6XV2wh',
  cdlClassA: 'dl5u25PINJNXX6UCqth4',
  experience: 'XksEO0FLlXUJYe6n9sV4',
  currentLocation: 'p7AZ2ec5IReaMTt4JNVl',
  availability: 'ymAp7KzbRnZy2gfPIl0s',
  smsConsent: 'DQucOFvSwh80ROIOkHWq',
};

export interface DriverLead {
  fullName: string;
  firstName?: string;
  lastName?: string;
  phone: string;
  email?: string;
  formType?: string;
  cdl?: string;
  experience?: string;
  currentLocation?: string;
  availability?: string;
  smsConsent?: boolean;
}

function toE164(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return phone;
}

async function ghlPost(token: string, path: string, body: unknown): Promise<Record<string, unknown>> {
  const res = await fetch(`${GHL_BASE}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Version: '2021-07-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    throw new Error(`GHL ${path} failed: ${res.status} ${(await res.text()).slice(0, 300)}`);
  }
  return res.json();
}

export async function pushDriverLeadToGhl(lead: DriverLead): Promise<void> {
  const token = process.env.GHL_API_TOKEN;
  if (!token) return; // CRM push not configured — never block the application

  let firstName = lead.firstName;
  let lastName = lead.lastName;
  if (!firstName && lead.fullName) {
    const [first, ...rest] = lead.fullName.trim().split(/\s+/);
    firstName = first;
    lastName = rest.join(' ') || undefined;
  }

  const tags = ['driver-lead', 'website-form'];
  if (lead.smsConsent) tags.push('sms-consent');

  const customFields = [
    { id: FIELDS.position, field_value: 'CDL A Driver' },
    { id: FIELDS.smsConsent, field_value: lead.smsConsent ? 'yes' : 'no' },
  ];
  if (lead.formType) customFields.push({ id: FIELDS.formType, field_value: lead.formType });
  if (lead.cdl) customFields.push({ id: FIELDS.cdlClassA, field_value: lead.cdl });
  if (lead.experience) customFields.push({ id: FIELDS.experience, field_value: lead.experience });
  if (lead.currentLocation) customFields.push({ id: FIELDS.currentLocation, field_value: lead.currentLocation });
  if (lead.availability) customFields.push({ id: FIELDS.availability, field_value: lead.availability });

  const upsert = await ghlPost(token, '/contacts/upsert', {
    locationId: LOCATION_ID,
    firstName,
    lastName,
    phone: toE164(lead.phone),
    email: lead.email || undefined,
    source: 'roguecarrierinc.com',
    tags,
    customFields,
  });

  const contactId = (upsert.contact as { id?: string } | undefined)?.id;
  if (!contactId) throw new Error('GHL upsert returned no contact id');

  await ghlPost(token, '/opportunities/', {
    locationId: LOCATION_ID,
    pipelineId: DRIVER_PIPELINE_ID,
    pipelineStageId: STAGE_NEW_APPLICATION,
    contactId,
    name: `${lead.fullName} — CDL Driver`,
    status: 'open',
  });
}

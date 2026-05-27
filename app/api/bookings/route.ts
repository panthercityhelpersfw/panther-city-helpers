import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/site";
import { getResend } from "@/lib/resend";

export const runtime = "nodejs";

type BookingPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  vehicle?: string;
  addressArea?: string;
  preferredTime?: string;
  notes?: string;
  consent?: boolean;
  website?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function field(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e6e6e6;color:#666;font-size:13px;">${label}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e6e6e6;color:#111;font-size:14px;font-weight:600;">${escapeHtml(value || "Not provided")}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  let payload: BookingPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const normalized = {
    name: clean(payload.name),
    email: clean(payload.email),
    phone: clean(payload.phone),
    service: clean(payload.service),
    vehicle: clean(payload.vehicle),
    addressArea: clean(payload.addressArea),
    preferredTime: clean(payload.preferredTime),
    notes: clean(payload.notes),
  };

  const requiredFields: Array<keyof typeof normalized> = [
    "name",
    "email",
    "phone",
    "service",
    "addressArea",
    "preferredTime",
  ];

  const missing = requiredFields.filter((key) => !normalized[key]);
  if (missing.length > 0 || !payload.consent) {
    return NextResponse.json(
      { message: "Please complete the required booking fields." },
      { status: 400 },
    );
  }

  const resend = getResend();
  if (!resend) {
    return NextResponse.json(
      {
        message:
          "Booking email is not configured yet. Add RESEND_API_KEY in Vercel to enable submissions.",
      },
      { status: 503 },
    );
  }

  const toEmail = process.env.BOOKING_TO_EMAIL || CONTACT_EMAIL;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ||
    "Panther City Bookings <onboarding@resend.dev>";

  const html = `
    <div style="background:#080808;padding:28px;font-family:Arial,sans-serif;">
      <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #d4a017;">
        <div style="background:#0d0d0d;color:#fff;padding:24px 26px;">
          <p style="margin:0 0 8px;color:#d4a017;text-transform:uppercase;letter-spacing:2px;font-size:12px;">New booking request</p>
          <h1 style="margin:0;font-size:26px;line-height:1.1;">Panther City Detailing</h1>
        </div>
        <table style="border-collapse:collapse;width:100%;">
          ${field("Name", normalized.name)}
          ${field("Email", normalized.email)}
          ${field("Phone", normalized.phone)}
          ${field("Service", normalized.service)}
          ${field("Vehicle / project", normalized.vehicle)}
          ${field("Area", normalized.addressArea)}
          ${field("Preferred time", normalized.preferredTime)}
          ${field("Notes", normalized.notes)}
        </table>
        <div style="padding:20px 26px;color:#555;font-size:13px;line-height:1.5;">
          This request came from the on-site booking form. Reply directly to the customer at ${escapeHtml(normalized.email)}.
        </div>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: normalized.email,
    subject: `New booking request: ${normalized.service}`,
    html,
  });

  if (error) {
    return NextResponse.json(
      { message: "The request could not be emailed. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Request sent. We will follow up soon.",
  });
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, area, message, company } = body ?? {};

    // Honeypot — silently accept bot submissions
    if (company) return NextResponse.json({ ok: true });

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }
    if (String(message).length > 3000 || String(name).length > 100) {
      return NextResponse.json({ error: "Message too long." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey || !to) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
      return NextResponse.json({ error: "Email is not configured yet." }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0D1526;padding:24px;border-radius:12px 12px 0 0">
          <h1 style="color:#EEF1F6;margin:0;font-size:20px">New website enquiry</h1>
          <p style="color:#8B94A6;margin:6px 0 0;font-size:13px">rcrenovations.co.uk</p>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;padding:24px;border-radius:0 0 12px 12px">
          <table style="width:100%;font-size:14px;color:#111">
            <tr><td style="padding:6px 0;color:#6b7280;width:110px">Name</td><td style="padding:6px 0"><strong>${escapeHtml(String(name))}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Phone</td><td style="padding:6px 0"><a href="tel:${escapeHtml(String(phone))}">${escapeHtml(String(phone))}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(String(email))}">${escapeHtml(String(email))}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Service</td><td style="padding:6px 0">${escapeHtml(String(service || "Not specified"))}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Area</td><td style="padding:6px 0">${escapeHtml(String(area || "Not specified"))}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
          <p style="font-size:14px;color:#111;white-space:pre-wrap">${escapeHtml(String(message))}</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: `RC Renovations Website <${from}>`,
      to: [to],
      replyTo: String(email),
      subject: `New enquiry: ${service || "General"} — ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send. Please call us instead." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

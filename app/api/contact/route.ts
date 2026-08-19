import { NextResponse } from "next/server";
import { Resend } from "resend";
import { renderBusinessEmail, renderCustomerEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, area, message, company } = body ?? {};

    // Honeypot: silently accept bot submissions
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

    const enquiry = {
      name: String(name),
      phone: String(phone),
      email: String(email),
      service: service ? String(service) : undefined,
      area: area ? String(area) : undefined,
      message: String(message),
    };

    const fromHeader = `RC Renovations <${from}>`;
    const businessRecipients = to.split(",").map((s) => s.trim()).filter(Boolean);

    const [businessResult, customerResult] = await Promise.allSettled([
      resend.emails.send({
        from: fromHeader,
        to: businessRecipients,
        replyTo: enquiry.email,
        subject: `New enquiry: ${enquiry.service || "General"} from ${enquiry.name}`,
        html: renderBusinessEmail(enquiry),
      }),
      resend.emails.send({
        from: fromHeader,
        to: [enquiry.email],
        replyTo: businessRecipients[0],
        subject: "We've received your enquiry, RC Renovations",
        html: renderCustomerEmail(enquiry),
      }),
    ]);

    const businessFailed = businessResult.status === "rejected" || businessResult.value.error;
    if (businessFailed) {
      console.error(
        "Resend business email error:",
        businessResult.status === "rejected" ? businessResult.reason : businessResult.value.error,
      );
      return NextResponse.json({ error: "Failed to send. Please call us instead." }, { status: 502 });
    }

    const customerFailed = customerResult.status === "rejected" || customerResult.value.error;
    if (customerFailed) {
      // The enquiry made it to us, so don't fail the request, just log it.
      console.error(
        "Resend customer confirmation error:",
        customerResult.status === "rejected" ? customerResult.reason : customerResult.value.error,
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

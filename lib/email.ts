import { site } from "@/lib/site";

export const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const colors = {
  midnight: "#070B14",
  panel: "#0D1526",
  edge: "#1A2540",
  royal: "#1C4FB8",
  bright: "#2E6BE6",
  steel: "#C7CDD8",
  mist: "#8B94A6",
  snow: "#EEF1F6",
};

const logoUrl = `${site.url}/logo-circle.png`;

/** Shared dark, on-brand shell used by every outgoing email. */
function shell(previewText: string, bodyHtml: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(site.name)}</title>
  </head>
  <body style="margin:0;padding:0;background:${colors.midnight};">
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0;">
      ${escapeHtml(previewText)}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${colors.midnight};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${colors.panel};border:1px solid ${colors.edge};border-radius:16px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;">
            <tr>
              <td style="background:linear-gradient(135deg,${colors.royal} 0%,${colors.bright} 50%,#163E93 100%);background-color:${colors.royal};padding:32px 32px 26px;text-align:center;">
                <img src="${logoUrl}" width="60" height="60" alt="${escapeHtml(site.name)}" style="display:block;margin:0 auto 14px;border-radius:50%;" />
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:17px;font-weight:bold;color:#ffffff;letter-spacing:1px;text-transform:uppercase;">
                  RC&nbsp;Renovations
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:22px 32px;border-top:1px solid ${colors.edge};">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.7;color:${colors.mist};">
                  RC Renovations &middot; Joinery &amp; Renovations, Glasgow &amp; Lanarkshire<br />
                  <a href="tel:${site.phoneHref}" style="color:${colors.steel};text-decoration:none;">${escapeHtml(site.phone)}</a>
                  &nbsp;&middot;&nbsp;
                  <a href="mailto:${site.email}" style="color:${colors.steel};text-decoration:none;">${escapeHtml(site.email)}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function detailRow(label: string, value: string, href?: string) {
  const content = href
    ? `<a href="${href}" style="color:${colors.snow};text-decoration:none;">${escapeHtml(value)}</a>`
    : `<span style="color:${colors.snow};">${escapeHtml(value)}</span>`;
  return `
    <tr>
      <td style="padding:9px 0;border-bottom:1px solid ${colors.edge};font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${colors.mist};width:110px;vertical-align:top;">${label}</td>
      <td style="padding:9px 0;border-bottom:1px solid ${colors.edge};font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;vertical-align:top;">${content}</td>
    </tr>`;
}

function button(label: string, href: string) {
  return `<a href="${href}" style="display:inline-block;background:${colors.bright};background-color:${colors.bright};color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;letter-spacing:0.5px;text-transform:uppercase;text-decoration:none;padding:13px 24px;border-radius:8px;">${escapeHtml(label)}</a>`;
}

export type Enquiry = {
  name: string;
  phone: string;
  email: string;
  service?: string;
  area?: string;
  message: string;
};

/** Notification email sent to the business when a new enquiry comes in. */
export function renderBusinessEmail(enquiry: Enquiry) {
  const { name, phone, email, service, area, message } = enquiry;
  const body = `
    <h1 style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:20px;color:${colors.snow};">New website enquiry</h1>
    <p style="margin:0 0 22px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${colors.mist};">Submitted via rcrenovations.co.uk</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;">
      ${detailRow("Name", name)}
      ${detailRow("Phone", phone, `tel:${phone}`)}
      ${detailRow("Email", email, `mailto:${email}`)}
      ${detailRow("Service", service || "Not specified")}
      ${detailRow("Area", area || "Not specified")}
    </table>
    <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${colors.mist};">Message</p>
    <p style="margin:0 0 26px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${colors.snow};white-space:pre-wrap;">${escapeHtml(message)}</p>
    <div>
      ${button(`Call ${name.split(" ")[0]}`, `tel:${phone}`)}
    </div>
    <p style="margin:20px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${colors.mist};">
      Reply directly to this email to respond to ${escapeHtml(name)}.
    </p>
  `;
  return shell(`New enquiry from ${name}`, body);
}

/** Confirmation email sent back to the customer who submitted the form. */
export function renderCustomerEmail(enquiry: Enquiry) {
  const { name, service, area, message } = enquiry;
  const firstName = name.split(" ")[0];
  const body = `
    <h1 style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:20px;color:${colors.snow};">Thanks, ${escapeHtml(firstName)} &mdash; we've got your enquiry</h1>
    <p style="margin:0 0 22px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.65;color:${colors.steel};">
      We've received your details and will be in touch shortly, usually the same working day, to arrange a free survey and fixed written quote.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:26px;background:${colors.midnight};border:1px solid ${colors.edge};border-radius:10px;">
      <tr>
        <td style="padding:16px 18px;">
          <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${colors.mist};">Service</p>
          <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:${colors.snow};">${escapeHtml(service || "Not specified")}</p>
          <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${colors.mist};">Area</p>
          <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:${colors.snow};">${escapeHtml(area || "Not specified")}</p>
          <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${colors.mist};">Your message</p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${colors.snow};white-space:pre-wrap;">${escapeHtml(message)}</p>
        </td>
      </tr>
    </table>
    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${colors.mist};">Need to reach us sooner?</p>
    <div>
      ${button(`Call ${site.phone}`, `tel:${site.phoneHref}`)}
      &nbsp;&nbsp;
      ${button("WhatsApp Us", site.whatsappHref)}
    </div>
    <p style="margin:26px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${colors.mist};">
      We only use your details to respond to your enquiry. No mailing lists, no spam.
    </p>
  `;
  return shell("We've received your enquiry, we'll be in touch shortly", body);
}

import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RC Renovations collects, uses and protects your personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16">
      <div className="container-site max-w-3xl">
        <Reveal>
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-sm text-mist">Last updated: 30 August 2026</p>

          <div className="mt-10 space-y-8 leading-relaxed text-mist">
            <div>
              <h2 className="font-display text-xl font-bold text-snow">1. Who we are</h2>
              <p className="mt-3">
                {site.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a joinery and
                renovation business based in {site.address.locality}, {site.address.region}, covering{" "}
                {site.areaServed.slice(0, 4).join(", ")} and the surrounding areas. This policy explains
                how we collect and use personal data when you visit {site.url} or contact us for a quote.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">2. What we collect</h2>
              <p className="mt-3">When you use our enquiry form, call, email or message us, we may collect:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Your name, phone number and email address</li>
                <li>Your property area/location and details of the job you&apos;re enquiring about</li>
                <li>Any other information you choose to include in your message</li>
              </ul>
              <p className="mt-3">
                We do not knowingly collect sensitive personal data, and we don&apos;t require you to
                create an account to use this site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">3. How we use your data</h2>
              <p className="mt-3">We use the information you provide to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Respond to your enquiry and arrange a free survey or quote</li>
                <li>Communicate with you about a project you&apos;ve asked us to quote or carry out</li>
                <li>Keep basic records for invoicing, warranty and legal purposes</li>
              </ul>
              <p className="mt-3">
                We do not sell your data, and we do not use it for marketing mailing lists. The legal
                basis for this processing is your consent (submitting the form) and our legitimate
                interest in responding to enquiries about our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">4. Sharing your data</h2>
              <p className="mt-3">
                Enquiry form submissions are sent via our email delivery provider (Resend) directly to
                our inbox. We don&apos;t share your data with any other third party, except where
                required by law, or with trades we coordinate on your specific project once you&apos;ve
                instructed us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">5. Cookies</h2>
              <p className="mt-3">
                This site uses only strictly necessary cookies/local storage required for it to function
                (for example, remembering that you&apos;ve dismissed the cookie notice). We do not
                currently run analytics or advertising cookies. If that changes, we&apos;ll update this
                policy and our cookie banner accordingly.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">6. How long we keep data</h2>
              <p className="mt-3">
                We keep enquiry and job-related data for as long as reasonably needed to deliver the
                service, meet accounting/legal obligations, and handle any warranty query, after which
                it is deleted or anonymised.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">7. Your rights</h2>
              <p className="mt-3">
                Under UK GDPR you have the right to access, correct, delete or restrict use of your
                personal data, and to object to how it&apos;s processed. To exercise any of these rights,
                contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">8. Contact us</h2>
              <p className="mt-3">
                For any privacy questions or requests, email{" "}
                <a href={`mailto:${site.email}`} className="text-bright hover:underline">{site.email}</a>{" "}
                or call{" "}
                <a href={`tel:${site.phoneHref}`} className="text-bright hover:underline">{site.phone}</a>.
                You also have the right to complain to the Information Commissioner&apos;s Office (ICO)
                at ico.org.uk.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

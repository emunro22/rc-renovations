import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for quotes, bookings and work carried out by RC Renovations.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="py-16">
      <div className="container-site max-w-3xl">
        <Reveal>
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm text-mist">Last updated: 30 August 2026</p>

          <div className="mt-10 space-y-8 leading-relaxed text-mist">
            <div>
              <h2 className="font-display text-xl font-bold text-snow">1. About us</h2>
              <p className="mt-3">
                These terms apply to any quote, survey or work carried out by {site.legalName}
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;), based in {site.address.locality}, covering{" "}
                {site.areaServed.slice(0, 4).join(", ")} and the surrounding areas. By requesting a
                quote or instructing us to carry out work, you agree to these terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">2. Quotes</h2>
              <p className="mt-3">
                Quotes are provided in writing following a free survey, and are based on the scope of
                work discussed at that visit. Quotes are typically valid for 30 days unless stated
                otherwise. If, once work has started, previously hidden issues are uncovered (for
                example rot, unsafe wiring or non-standard joist spacing), we will stop, explain the
                issue and agree any additional cost with you in writing before proceeding.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">3. Bookings and scheduling</h2>
              <p className="mt-3">
                Start dates are agreed in advance and confirmed before work begins. While we work hard to
                keep to agreed programmes, dates may occasionally shift due to factors outside our
                control (for example weather, third-party trades, or supplier lead times), and we&apos;ll
                give you as much notice as possible if this happens.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">4. Payment</h2>
              <p className="mt-3">
                Payment terms (deposit, stage payments and final balance) are set out in your written
                quote or contract for the specific job. Materials may require a deposit or supply
                payment in advance. Final balances are due on completion and sign-off of the work,
                unless otherwise agreed.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">5. Cancellations</h2>
              <p className="mt-3">
                If you need to cancel or postpone confirmed work, please give us as much notice as
                possible. Where materials have already been ordered or site time booked specifically for
                your job, reasonable costs already incurred may be chargeable.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">6. Guarantee</h2>
              <p className="mt-3">
                Our workmanship is guaranteed for a minimum of 12 months from completion, covering
                defects arising from the work we carried out. This doesn&apos;t cover wear and tear,
                misuse, or issues caused by other trades or work outside our contract. Manufacturer
                warranties on materials and fittings (such as kitchen units or composite decking) are
                passed on separately in line with the manufacturer&apos;s own terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">7. Site access and conduct</h2>
              <p className="mt-3">
                You agree to provide reasonable access to the property for the agreed working hours, and
                to keep the work area reasonably clear. We carry appropriate public liability insurance
                and take care to protect your property, but ask that valuables be moved from the
                immediate work area before we start.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">8. Liability</h2>
              <p className="mt-3">
                Nothing in these terms limits our liability for death or personal injury caused by
                negligence, or for fraud. Beyond that, our liability is limited to the value of the
                contract for the relevant job, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">9. Governing law</h2>
              <p className="mt-3">
                These terms are governed by the law of Scotland, and any dispute will be subject to the
                jurisdiction of the Scottish courts.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-snow">10. Contact us</h2>
              <p className="mt-3">
                Questions about these terms? Email{" "}
                <a href={`mailto:${site.email}`} className="text-bright hover:underline">{site.email}</a>{" "}
                or call{" "}
                <a href={`tel:${site.phoneHref}`} className="text-bright hover:underline">{site.phone}</a>.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

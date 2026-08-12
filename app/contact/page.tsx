import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Free Quotes Glasgow & Lanarkshire",
  description:
    "Get a free, fixed written quote from RC Renovations. Call, email or use our enquiry form, we cover Glasgow, Hamilton, Bothwell and all of Lanarkshire.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr,1.15fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Get your <span className="steel-text">free quote</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-mist">
              Tell us about the job and we&apos;ll arrange a free survey. Fixed written quotes,
              usually within 48 hours, and no obligation whatsoever.
            </p>

            <div className="mt-10 space-y-5">
              <a href={`tel:${site.phoneHref}`} className="card flex items-center gap-4 !p-5 hover:border-bright">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-sheen">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-mist">Call us</span>
                  <span className="font-display font-bold text-snow">{site.phone}</span>
                </span>
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-4 !p-5 hover:border-bright"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 9.3c0-.5.4-.9.8-.9h.7c.3 0 .6.2.7.5l.5 1.4c.1.3 0 .6-.2.8l-.5.5c.4.9 1.2 1.7 2.1 2.1l.5-.5c.2-.2.5-.3.8-.2l1.4.5c.3.1.5.4.5.7v.7c0 .4-.4.8-.9.8-3.1 0-6.4-3.3-6.4-6.4z"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-mist">WhatsApp us</span>
                  <span className="font-display font-bold text-snow">{site.phone}</span>
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="card flex items-center gap-4 !p-5 hover:border-bright">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-sheen">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#fff" strokeWidth="2" />
                    <path d="M3 7l9 6 9-6" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-mist">Email us</span>
                  <span className="block break-all font-display font-bold text-snow">{site.email}</span>
                </span>
              </a>
              <div className="card !p-5">
                <span className="block text-sm text-mist">Opening hours</span>
                <span className="font-display font-bold text-snow">Mon – Sat, 8am – 6pm</span>
                <p className="mt-1 text-sm text-mist">Covering Glasgow, Lanarkshire &amp; surrounding areas</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

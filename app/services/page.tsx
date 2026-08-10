import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Joinery & Renovation Services Glasgow & Lanarkshire",
  description:
    "Our full range of joinery and renovation services across Glasgow and Lanarkshire — kitchens, bathrooms, extensions, loft conversions, bespoke joinery and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-edge py-16">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Everything under <span className="steel-text">one roof</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-mist">
              Joinery is our trade; renovation is our business. Whatever the project, you deal with one firm,
              one quote and one standard of finish.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link href={`/services/${s.slug}`} className="card group block h-full">
                <h2 className="font-display text-xl font-bold group-hover:text-bright">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">{s.short}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-steel">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bright" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-block font-display text-xs font-bold uppercase tracking-wider text-bright">
                  View service →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand heading="Not sure which service you need?" sub="Describe the job in plain terms and we'll tell you exactly what's involved — no jargon, no obligation." />
    </>
  );
}

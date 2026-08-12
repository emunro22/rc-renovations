import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Areas We Cover | Joiners in Glasgow, Hamilton, Bothwell & Lanarkshire",
  description:
    "RC Renovations covers Glasgow, Hamilton, Bothwell, Motherwell, East Kilbride, Uddingston, Blantyre, Cambuslang, Rutherglen and across Lanarkshire. Free quotes, no travel charges.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <section className="border-b border-edge py-16">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Areas we cover</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Local joiners across <span className="steel-text">Glasgow &amp; Lanarkshire</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-mist">
              We work throughout the Greater Glasgow area with no travel charges, from West End tenements
              to Lanarkshire villages. Pick your area to see what we do near you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.03}>
              <Link href={`/areas/${l.slug}`} className="card group block h-full">
                <h2 className="font-display text-xl font-bold group-hover:text-bright">{l.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">{l.intro}</p>
                <span className="mt-4 inline-block font-display text-xs font-bold uppercase tracking-wider text-bright">
                  Joiners in {l.name} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand heading="Don't see your area?" sub="We cover more than what's listed here. If you're within reach of Glasgow or Lanarkshire, get in touch and we'll almost certainly cover you." />
    </>
  );
}

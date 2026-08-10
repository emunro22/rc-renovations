import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "About Us | Joiners & Renovation Specialists",
  description:
    "RC Renovations is a joinery-led renovation firm covering Glasgow and Lanarkshire — time-served tradesmen, fixed quotes and a finish we put our name to.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Joinery first",
    text: "We're joiners by trade, not project managers with a phone. The person quoting your job is the person standing behind the work.",
  },
  {
    title: "Fixed quotes, kept",
    text: "The price in writing is the price you pay. If we uncover something unforeseen, we stop, show you and agree it before proceeding.",
  },
  {
    title: "Tidy sites",
    text: "Dust sheets down, tools away, floors swept — every single day. Your home stays a home while we work in it.",
  },
  {
    title: "Straight talking",
    text: "If something's not worth doing, we'll say so. If a cheaper option gets the same result, we'll tell you about it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-edge py-16">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1.3fr,0.7fr]">
          <Reveal>
            <p className="eyebrow">About us</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              A trade firm with <span className="steel-text">a craftsman&apos;s standards</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
              RC Renovations is a joinery-led renovation firm working across Glasgow and Lanarkshire.
              We built this business the old-fashioned way — one recommended job at a time — and we protect
              that reputation on every project, whether it&apos;s hanging a single door or refurbishing a whole house.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-mist">
              Our joiners are time-served, our electricians and plumbers are trades we&apos;ve worked with for years,
              and every job runs to a written quote and an agreed programme. No surprises, no disappearing acts,
              no &ldquo;that&apos;ll be extra&rdquo; halfway through.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto">
            <Logo size={280} className="shadow-2xl ring-1 ring-white/10 sm:hidden" />
            <Logo size={320} className="hidden shadow-2xl ring-1 ring-white/10 sm:block" />
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">How we work</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card h-full">
                  <h3 className="font-display text-xl font-bold text-bright">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Let's talk about your project" />
    </>
  );
}

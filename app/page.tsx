import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import WorkSlideshow from "@/components/WorkSlideshow";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

const steps = [
  {
    title: "Free survey & quote",
    text: "We visit, measure and listen to what you want, then send a fixed written quote — usually within 48 hours.",
  },
  {
    title: "Agreed plan & dates",
    text: "You get a clear start date and timeline before any work begins. No vague promises, no disappearing acts.",
  },
  {
    title: "The work, done right",
    text: "Time-served joiners on the tools, trusted trades coordinated by us, and a site kept tidy every day.",
  },
  {
    title: "Walkthrough & sign-off",
    text: "We walk the finished job with you and don't consider it done until you're completely happy.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section className="roofline border-t border-edge py-20" id="services">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Joinery &amp; renovation services
            </h2>
            <p className="mt-4 max-w-2xl text-mist">
              From a single door to a whole-house refurbishment — one firm, one point of contact, one standard of finish.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link href={`/services/${s.slug}`} className="card group block h-full">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden className="text-bright">
                    <path d="M4 18 L16 6 L28 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 18 v8 h16 v-8" stroke="#C7CDD8" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <h3 className="mt-4 font-display text-lg font-bold group-hover:text-bright">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{s.short}</p>
                  <span className="mt-4 inline-block font-display text-xs font-bold uppercase tracking-wider text-bright">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WorkSlideshow />

      {/* Process */}
      <section className="border-t border-edge bg-panel py-20">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Straightforward from first call to final walkthrough
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative rounded-xl border border-edge bg-midnight p-7">
                  <span className="steel-text font-display text-4xl font-extrabold">{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-edge py-20">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">What customers say</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Word of mouth built this business
            </h2>
            <div className="mt-4 flex items-center gap-2 text-sm text-steel">
              <div className="flex gap-0.5 text-bright" aria-hidden>
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <span>
                {site.reviews.ratingValue.toFixed(1)} · {site.reviews.reviewCount} Google reviews
              </span>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="card h-full">
                  <div className="flex gap-1 text-bright" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-steel">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-semibold text-snow">{t.name}</span>
                    <span className="text-mist"> — Google review</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="border-t border-edge bg-panel py-20">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Where we work</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Covering Glasgow, Lanarkshire &amp; beyond
            </h2>
            <p className="mt-4 max-w-2xl text-mist">
              Based between Glasgow and Lanarkshire, we cover the whole area with no travel charges.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {locations.map((l) => (
                <Link
                  key={l.slug}
                  href={`/areas/${l.slug}`}
                  className="rounded-full border border-edge bg-midnight px-5 py-2.5 font-display text-sm font-semibold text-steel transition-colors hover:border-bright hover:text-white"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}

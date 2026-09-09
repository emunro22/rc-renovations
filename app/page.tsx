import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import WorkSlideshow from "@/components/WorkSlideshow";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { getPlaceDetails } from "@/lib/places";
import { site } from "@/lib/site";

const homeFaqs = [
  {
    q: "What areas do you cover?",
    a: `We cover Glasgow and the whole of Lanarkshire, including ${site.areaServed
      .slice(1, 7)
      .join(", ")} and surrounding areas, with no travel charges.`,
  },
  {
    q: "How much does a renovation or joinery job cost?",
    a: "Every job is priced individually after a free survey, so we can give you a fixed written quote rather than a vague estimate. Get in touch with a few details and we'll arrange a visit.",
  },
  {
    q: "How quickly can I get a quote?",
    a: "We aim to get a fixed written quote to you within 48 hours of the free survey. For smaller jobs we can sometimes quote the same day.",
  },
  {
    q: "Are you insured and do you guarantee your work?",
    a: "Yes, we carry public liability insurance and guarantee our workmanship for a minimum of 12 months from completion. Full details are in our terms and conditions.",
  },
  {
    q: "Do you handle the whole project, including other trades?",
    a: "Yes. As a joinery-led firm we coordinate trusted electricians, plumbers and plasterers as part of the job, so you deal with one point of contact rather than juggling several trades yourself.",
  },
];

const steps = [
  {
    title: "Free survey & quote",
    text: "We visit, measure and listen to what you want, then send a fixed written quote, usually within 48 hours.",
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

export default async function HomePage() {
  const place = await getPlaceDetails();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero />

      {/* Scroll cue */}
      <section className="border-t border-edge py-3">
        <div className="container-site flex items-center justify-center gap-2 text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-steel">
            Joinery and renovation services
          </p>
          <a
            href="#services"
            aria-label="Scroll to joinery and renovation services"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-edge text-steel transition-colors hover:border-bright hover:text-bright animate-bounce"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <WorkSlideshow />

      {/* Services */}
      <section className="roofline scroll-mt-20 border-t border-edge py-20" id="services">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Joinery &amp; renovation services
            </h2>
            <p className="mt-4 max-w-2xl text-mist">
              From a single door to a whole-house refurbishment: one firm, one point of contact, one standard of finish.
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
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-steel">
              <div className="flex gap-0.5 text-bright" aria-hidden>
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5">
                {place.ratingValue.toFixed(1)} · {place.reviewCount} reviews on
                {/* Google attribution: required when Places API data is shown without a Google map. */}
                <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden className="shrink-0">
                  <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2 5.1-4.4 6.7v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.2z" />
                  <path fill="#34A853" d="M24 46c6 0 11-2 14.5-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.6-3.9-12.3-9.1H4.3v5.7C7.8 41 15.3 46 24 46z" />
                  <path fill="#FBBC05" d="M11.7 28.2c-.4-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-5.7H4.3A22 22 0 0 0 2 24c0 3.6.9 6.9 2.3 9.9l7.4-5.7z" />
                  <path fill="#EA4335" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 30 2 24 2 15.3 2 7.8 7 4.3 14.1l7.4 5.7c1.7-5.2 6.6-9.1 12.3-9.1z" />
                </svg>
                <span className="sr-only">Google</span>
              </span>
              <a
                href={place.mapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs font-bold uppercase tracking-wider text-bright hover:underline"
              >
                Read them on Google →
              </a>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {place.reviews.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08}>
                <figure className="card h-full">
                  <div className="flex gap-1 text-bright" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-steel">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 text-sm">
                    {t.authorPhoto && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={t.authorPhoto}
                        alt=""
                        width={32}
                        height={32}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-8 w-8 shrink-0 rounded-full object-cover"
                      />
                    )}
                    <span>
                      <span className="block font-semibold text-snow">{t.name}</span>
                      <span className="block text-xs text-mist">
                        Google review{t.relativeTime ? ` · ${t.relativeTime}` : ""}
                      </span>
                    </span>
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

      {/* FAQ */}
      <section className="border-t border-edge py-20">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {homeFaqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group rounded-xl border border-edge bg-panel p-5 open:border-royal">
                  <summary className="cursor-pointer list-none font-display font-semibold text-snow marker:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {f.q}
                      <span className="text-bright transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

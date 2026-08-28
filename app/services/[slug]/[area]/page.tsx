import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { services, getService } from "@/lib/services";
import { locations, getLocation } from "@/lib/locations";
import { site } from "@/lib/site";

type Props = { params: { slug: string; area: string } };

export function generateStaticParams() {
  return services.flatMap((s) => locations.map((l) => ({ slug: s.slug, area: l.slug })));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  const loc = getLocation(params.area);
  if (!service || !loc) return {};

  const title = `${service.title} in ${loc.name}`;
  const description = `${service.short} Covering ${loc.name} and nearby areas including ${loc.landmarks
    .slice(0, 3)
    .join(", ")}. Free fixed quotes, usually within 48 hours.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/${loc.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/services/${service.slug}/${loc.slug}`,
    },
  };
}

export default function ServiceAreaPage({ params }: Props) {
  const service = getService(params.slug);
  const loc = getLocation(params.area);
  if (!service || !loc) notFound();

  const localFaq = {
    q: `Do you do ${service.title.toLowerCase()} near ${loc.name}?`,
    a: `Yes. ${service.title} is work we carry out regularly across ${loc.name}, including ${loc.landmarks
      .slice(0, 3)
      .join(", ")}. Get in touch for a free survey and a fixed written quote, usually arranged within 48 hours.`,
  };
  const faqs = [...service.faqs, localFaq];

  const otherServicesHere = services.filter((s) => s.slug !== service.slug).slice(0, 6);
  const otherAreasForService = locations.filter((l) => l.slug !== loc.slug).slice(0, 8);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${service.title} in ${loc.name}`,
        provider: { "@id": `${site.url}/#business` },
        areaServed: { "@type": "Place", name: loc.name },
        description: `${service.short} Serving ${loc.name}.`,
        url: `${site.url}/services/${service.slug}/${loc.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `${site.url}/services/${service.slug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: loc.name,
            item: `${site.url}/services/${service.slug}/${loc.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-edge py-16">
        <div className="container-site">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-mist">
              <Link href="/" className="hover:text-bright">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-bright">Services</Link>
              <span className="mx-2">/</span>
              <Link href={`/services/${service.slug}`} className="hover:text-bright">{service.title}</Link>
              <span className="mx-2">/</span>
              <span className="text-steel">{loc.name}</span>
            </nav>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="steel-text">{service.title}</span> in {loc.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
              {loc.intro} We bring the same standard to every {service.title.toLowerCase()} project across{" "}
              {loc.name}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
              <a href={`tel:${site.phoneHref}`} className="btn-ghost">Call {site.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site grid gap-12 lg:grid-cols-[1.4fr,1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold">
                {service.title} across {loc.name}
              </h2>
              <p className="mt-5 leading-relaxed text-steel">{service.body[0]}</p>
              <p className="mt-5 leading-relaxed text-steel">{loc.local[0]}</p>
            </Reveal>

            {(loc.local[1] || service.body[1]) && (
              <Reveal delay={0.06}>
                <h2 className="mt-12 font-display text-2xl font-bold">
                  Local knowledge, {loc.name} craftsmanship
                </h2>
                {loc.local[1] && <p className="mt-5 leading-relaxed text-steel">{loc.local[1]}</p>}
                {service.body[1] && <p className="mt-5 leading-relaxed text-steel">{service.body[1]}</p>}
              </Reveal>
            )}

            <Reveal delay={0.1}>
              <h2 className="mt-12 font-display text-2xl font-bold">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-edge bg-panel p-5 open:border-royal">
                    <summary className="cursor-pointer list-none font-display font-semibold text-snow marker:hidden">
                      <span className="flex items-center justify-between gap-4">
                        {f.q}
                        <span className="text-bright transition-transform group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>

          <aside>
            <Reveal delay={0.05}>
              <div className="card sticky top-24">
                <h2 className="font-display text-lg font-bold">What&apos;s included</h2>
                <ul className="mt-4 space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-steel">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-0.5 shrink-0">
                        <path d="M2 9l4 4 8-9" stroke="#2E6BE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <hr className="my-5 border-edge" />
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-mist">
                  Covering {loc.name}
                </h3>
                <ul className="mt-3 space-y-2">
                  {loc.landmarks.map((lm) => (
                    <li key={lm} className="flex items-center gap-2.5 text-sm text-steel">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-bright">
                        <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      {lm}
                    </li>
                  ))}
                </ul>

                <hr className="my-5 border-edge" />
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-mist">
                  Other services in {loc.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {otherServicesHere.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/${loc.slug}`}
                      className="rounded-full border border-edge px-3 py-1 text-xs text-steel hover:border-bright hover:text-white"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>

                <hr className="my-5 border-edge" />
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-mist">
                  {service.title} in other areas
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {otherAreasForService.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/services/${service.slug}/${l.slug}`}
                      className="rounded-full border border-edge px-3 py-1 text-xs text-steel hover:border-bright hover:text-white"
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CTABand
        heading={`Need ${service.title.toLowerCase()} in ${loc.name}?`}
        sub="Free surveys and fixed written quotes across the area, usually within 48 hours of your call."
      />
    </>
  );
}

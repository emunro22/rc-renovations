import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { locations, getLocation } from "@/lib/locations";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = getLocation(params.slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/areas/${loc.slug}` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `${site.url}/areas/${loc.slug}`,
    },
  };
}

export default function AreaPage({ params }: Props) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  const popular = loc.popularServices
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Joinery & Renovations in ${loc.name}`,
        provider: { "@id": `${site.url}/#business` },
        areaServed: { "@type": "Place", name: loc.name },
        description: loc.metaDescription,
        url: `${site.url}/areas/${loc.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Areas", item: `${site.url}/areas` },
          { "@type": "ListItem", position: 3, name: loc.name, item: `${site.url}/areas/${loc.slug}` },
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
              <Link href="/areas" className="hover:text-bright">Areas</Link>
              <span className="mx-2">/</span>
              <span className="text-steel">{loc.name}</span>
            </nav>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Joiners &amp; Renovations in <span className="steel-text">{loc.name}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">{loc.intro}</p>
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
              <h2 className="font-display text-2xl font-bold">Working in {loc.name}</h2>
              {loc.local.map((p) => (
                <p key={p.slice(0, 30)} className="mt-5 leading-relaxed text-steel">{p}</p>
              ))}
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-12 font-display text-2xl font-bold">Popular in {loc.name}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {popular.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="card group block">
                    <h3 className="font-display font-bold group-hover:text-bright">{s.title}</h3>
                    <p className="mt-2 text-sm text-mist">{s.short}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <aside>
            <Reveal delay={0.05}>
              <div className="card sticky top-24">
                <h2 className="font-display text-lg font-bold">Covering</h2>
                <ul className="mt-4 space-y-2.5">
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
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-mist">Nearby areas</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {locations
                    .filter((l) => l.slug !== loc.slug)
                    .slice(0, 6)
                    .map((l) => (
                      <Link
                        key={l.slug}
                        href={`/areas/${l.slug}`}
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

      <CTABand heading={`Need a joiner in ${loc.name}?`} sub="Free surveys and fixed written quotes across the area — usually within 48 hours of your call." />
    </>
  );
}

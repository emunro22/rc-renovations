import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { services, getService } from "@/lib/services";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        provider: { "@id": `${site.url}/#business` },
        areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
        description: service.metaDescription,
        url: `${site.url}/services/${service.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
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
          { "@type": "ListItem", position: 3, name: service.title, item: `${site.url}/services/${service.slug}` },
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
              <span className="text-steel">{service.title}</span>
            </nav>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="steel-text">{service.title}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">{service.intro}</p>
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
              {service.body.map((p) => (
                <p key={p.slice(0, 30)} className="mb-5 leading-relaxed text-steel">{p}</p>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-10 font-display text-2xl font-bold">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {service.faqs.map((f) => (
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
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-mist">Available in</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {locations.map((l) => (
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

      <CTABand heading={`Planning a ${service.title.toLowerCase()} project?`} />
    </>
  );
}

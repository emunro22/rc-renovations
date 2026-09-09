import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import ReviewCard from "@/components/ReviewCard";
import { getPlaceDetails } from "@/lib/places";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Reviews | Joiners in Glasgow & Lanarkshire",
  description:
    "Read genuine Google reviews for RC Renovations, rated 5.0 by customers across Glasgow and Lanarkshire for kitchens, bathrooms, flooring, decking and bespoke joinery.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Customer Reviews | RC Renovations",
    description:
      "Genuine Google reviews for RC Renovations, joiners and renovation specialists covering Glasgow and Lanarkshire.",
    url: `${site.url}/reviews`,
  },
};

export default async function ReviewsPage() {
  const place = await getPlaceDetails();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Reviews", item: `${site.url}/reviews` },
    ],
  };

  const written = place.reviews.filter((r) => r.quote).length;
  const popularServices = services.slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="border-b border-edge py-16">
        <div className="container-site">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-mist">
              <Link href="/" className="hover:text-bright">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-steel">Reviews</span>
            </nav>
            <p className="eyebrow mt-5">Customer reviews</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Rated <span className="steel-text">{place.ratingValue.toFixed(1)} out of 5</span> on Google
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-mist">
              Every review below was left by a real customer on our Google Business Profile. We do not
              write them, edit them or pick which ones show: they are pulled straight from Google.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5 text-bright" aria-hidden>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm text-steel">
                  {place.reviewCount} ratings on
                  {/* Google attribution: required when Places API data is shown without a Google map. */}
                  <svg width="15" height="15" viewBox="0 0 48 48" aria-hidden className="shrink-0">
                    <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2 5.1-4.4 6.7v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.2z" />
                    <path fill="#34A853" d="M24 46c6 0 11-2 14.5-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.6-3.9-12.3-9.1H4.3v5.7C7.8 41 15.3 46 24 46z" />
                    <path fill="#FBBC05" d="M11.7 28.2c-.4-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-5.7H4.3A22 22 0 0 0 2 24c0 3.6.9 6.9 2.3 9.9l7.4-5.7z" />
                    <path fill="#EA4335" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 30 2 24 2 15.3 2 7.8 7 4.3 14.1l7.4 5.7c1.7-5.2 6.6-9.1 12.3-9.1z" />
                  </svg>
                  <span className="sr-only">Google</span>
                </span>
              </div>

              <a
                href={place.mapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Leave us a review
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {place.reviews.map((review, i) => (
              <Reveal key={review.id} delay={i * 0.06}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-mist">
              Google shares up to {place.reviews.length} of our most recent reviews through its API, and{" "}
              {written} of those include written feedback. Our full history of {place.reviewCount} ratings
              is on{" "}
              <a
                href={place.mapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-bright underline decoration-bright/40 underline-offset-2 hover:decoration-bright"
              >
                our Google Business Profile
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-edge bg-panel py-16">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">What customers hire us for</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              The work behind the reviews
            </h2>
            <p className="mt-4 max-w-2xl text-mist">
              Most of our work comes from recommendations. These are the jobs we are asked for most often
              across Glasgow and Lanarkshire.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card group block"
              >
                <h3 className="font-display font-bold leading-snug group-hover:text-bright">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.short}</p>
              </Link>
            ))}
          </div>

          <Reveal>
            <div className="mt-10">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-mist">
                Areas we cover
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/areas/${l.slug}`}
                    className="rounded-full border border-edge px-4 py-1.5 text-sm text-steel transition-colors hover:border-royal hover:text-bright"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/gallery" className="btn-ghost">See our recent work</Link>
              <Link href="/blog" className="btn-ghost">Renovation advice</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand heading="Want work you'd review like this?" />
    </>
  );
}

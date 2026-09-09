import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { getPlaceDetails } from "@/lib/places";

export default async function SchemaOrg() {
  const place = await getPlaceDetails();

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description:
      "Joinery and renovation specialists covering Glasgow and Lanarkshire. Kitchens, bathrooms, extensions, loft conversions and bespoke joinery.",
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/logo.png`,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHours: site.openingHours,
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    sameAs: [site.social.instagram, place.mapsUri],
    contactPoint: [
      { "@type": "ContactPoint", contactType: "customer service", telephone: site.phoneHref, areaServed: "GB" },
      { "@type": "ContactPoint", contactType: "customer service", url: site.whatsappHref, contactOption: "TollFree" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: place.ratingValue,
      reviewCount: place.reviewCount,
      bestRating: 5,
    },
    review: place.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.quote,
      ...(r.publishTime ? { datePublished: r.publishTime.slice(0, 10) } : {}),
      publisher: { "@type": "Organization", name: "Google" },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Joinery & Renovation Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

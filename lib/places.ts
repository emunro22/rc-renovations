import { site } from "@/lib/site";

/**
 * Google Places API (New) — live Google Business Profile reviews.
 *
 * Docs: https://developers.google.com/maps/documentation/places/web-service/place-details
 * The key is read server-side only and never reaches the browser: every consumer of
 * getPlaceDetails() is a React Server Component.
 */

export const PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJCe0iSMhK9GkR4t5Bmg_qBgU";

const FIELD_MASK = [
  "id",
  "displayName",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews",
].join(",");

// Re-fetch once a day. Google's terms require review data to be kept fresh rather
// than stored indefinitely, and a daily revalidate keeps the static pages cheap.
const REVALIDATE_SECONDS = 60 * 60 * 24;

export type PlaceReview = {
  id: string;
  name: string;
  rating: number;
  quote: string;
  publishTime?: string;
  relativeTime?: string;
  authorPhoto?: string;
  authorUri?: string;
  reviewUri?: string;
};

export type PlaceDetails = {
  ratingValue: number;
  reviewCount: number;
  reviews: PlaceReview[];
  mapsUri: string;
  live: boolean;
};

/**
 * Last-known-good snapshot of the Google Business Profile, used only when the
 * Places API is unreachable or GOOGLE_PLACES_API_KEY is not configured, so the
 * homepage and its aggregateRating schema never render empty.
 */
const FALLBACK: PlaceDetails = {
  ratingValue: site.reviews.ratingValue,
  reviewCount: site.reviews.reviewCount,
  mapsUri: site.googleReviewsUrl,
  live: false,
  reviews: [
    {
      id: "fallback-jude-higgins",
      name: "Jude Higgins",
      rating: 5,
      quote:
        "Excellent quality work from start to finish. Turned up on time, kept everything tidy, and delivered exactly what was promised. Would definitely use again",
    },
    {
      id: "fallback-nathan-boyd",
      name: "Nathan Boyd",
      rating: 5,
      quote:
        "Did a great job on my fence and decking. He was professional, efficient, and delivered high-quality, sturdy work that looks excellent. Everything was finished neatly and on time.",
    },
    {
      id: "fallback-ross-radford",
      name: "Ross Radford",
      rating: 5,
      quote:
        "Ryan recently did my flooring and skirting boards. Arrived on time, very friendly and left no mess. Great service and would highly recommend",
    },
    {
      id: "fallback-luke-lickrish",
      name: "Luke Lickrish",
      rating: 5,
      quote: "Top quality work at a very fair price totally recommend",
    },
    {
      id: "fallback-jamie-mcvey",
      name: "Jamie Mcvey",
      rating: 5,
      quote: "",
    },
  ],
};

type ApiReview = {
  name?: string;
  rating?: number;
  publishTime?: string;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  googleMapsUri?: string;
};

type ApiResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: ApiReview[];
};

function normalise(raw: ApiReview, index: number): PlaceReview | null {
  const quote = (raw.originalText?.text ?? raw.text?.text ?? "")
    .replace(/\s*\n+\s*/g, " ")
    .trim();
  const name = raw.authorAttribution?.displayName?.trim();

  // Google returns rating-only reviews with no body text. We keep them (they are real
  // ratings) and let the UI render the stars without inventing words for the customer.
  if (!name) return null;

  return {
    id: raw.name ?? `review-${index}`,
    name,
    rating: raw.rating ?? 5,
    quote,
    publishTime: raw.publishTime,
    relativeTime: raw.relativePublishTimeDescription,
    authorPhoto: raw.authorAttribution?.photoUri,
    authorUri: raw.authorAttribution?.uri,
    reviewUri: raw.googleMapsUri,
  };
}

export async function getPlaceDetails(): Promise<PlaceDetails> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return FALLBACK;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": FIELD_MASK,
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error(`[places] Place Details failed: ${res.status} ${res.statusText}`);
      return FALLBACK;
    }

    const data = (await res.json()) as ApiResponse;
    const reviews = (data.reviews ?? [])
      .map(normalise)
      .filter((r): r is PlaceReview => r !== null);

    if (!reviews.length) return FALLBACK;

    return {
      ratingValue: data.rating ?? FALLBACK.ratingValue,
      reviewCount: data.userRatingCount ?? FALLBACK.reviewCount,
      reviews,
      mapsUri: data.googleMapsUri ?? FALLBACK.mapsUri,
      live: true,
    };
  } catch (err) {
    console.error("[places] Place Details request threw:", err);
    return FALLBACK;
  }
}

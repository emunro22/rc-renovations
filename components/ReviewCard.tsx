import type { PlaceReview } from "@/lib/places";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-bright" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, j) => (
        <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * A single Google review. Reviews left as a star rating with no words render the
 * rating on its own rather than putting invented text in the customer's mouth.
 */
export default function ReviewCard({ review }: { review: PlaceReview }) {
  return (
    <figure className="card flex h-full flex-col">
      <Stars rating={review.rating} />

      {review.quote ? (
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-steel">
          &ldquo;{review.quote}&rdquo;
        </blockquote>
      ) : (
        <p className="mt-4 flex-1 text-sm leading-relaxed text-mist">
          Rated {review.rating} out of 5 on Google, without a written review.
        </p>
      )}

      <figcaption className="mt-4 flex items-center gap-3 text-sm">
        {review.authorPhoto && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={review.authorPhoto}
            alt=""
            width={32}
            height={32}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-8 w-8 shrink-0 rounded-full object-cover"
          />
        )}
        <span>
          <span className="block font-semibold text-snow">{review.name}</span>
          <span className="block text-xs text-mist">
            Google review{review.relativeTime ? ` · ${review.relativeTime}` : ""}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

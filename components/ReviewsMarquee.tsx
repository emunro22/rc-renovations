"use client";

import { useEffect, useRef, useState } from "react";
import type { PlaceReview } from "@/lib/places";
import ReviewCard from "@/components/ReviewCard";

/**
 * Continuously scrolling review strip.
 *
 * The track holds two identical copies of the review list and animates across
 * exactly one copy's width, so the loop point is seamless. Duration is derived
 * from the number of cards to keep the pixel speed constant regardless of how
 * many reviews Google returns.
 *
 * Falls back to a plain scrollable row when the visitor prefers reduced motion.
 */
export default function ReviewsMarquee({
  reviews,
  secondsPerCard = 7,
}: {
  reviews: PlaceReview[];
  secondsPerCard?: number;
}) {
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (!reviews.length) return null;

  const duration = reviews.length * secondsPerCard;

  if (reduceMotion) {
    return (
      <div className="-mx-4 overflow-x-auto px-4 pb-4">
        <div className="flex w-max gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="w-[300px] shrink-0 sm:w-[340px]">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="marquee group relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="marquee-track flex w-max gap-6"
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[0, 1].map((copy) =>
          reviews.map((review) => (
            <div
              key={`${copy}-${review.id}`}
              className="w-[300px] shrink-0 sm:w-[340px]"
              // The second copy exists purely to make the loop seamless.
              aria-hidden={copy === 1 || undefined}
            >
              <ReviewCard review={review} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

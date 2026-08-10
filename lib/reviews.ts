export type Review = {
  name: string;
  rating: number;
  quote: string;
  source: "Google";
};

// Verbatim (trimmed where Google truncates with "...") 5-star Google reviews.
// Aggregate rating/review count lives in lib/site.ts and should be kept in sync
// with the total number of reviews on the Google Business Profile.
export const reviews: Review[] = [
  {
    name: "Luke Lickrish",
    rating: 5,
    quote: "Top quality work at a very fair price, totally recommend.",
    source: "Google",
  },
  {
    name: "Ross Radford",
    rating: 5,
    quote:
      "Ryan recently did my flooring and skirting boards. Arrived on time, very friendly and left no mess. Great service and would highly recommend.",
    source: "Google",
  },
  {
    name: "Jude Higgins",
    rating: 5,
    quote:
      "Excellent quality work from start to finish. Turned up on time, kept everything tidy, and delivered exactly what was promised. Would definitely use again.",
    source: "Google",
  },
  {
    name: "Nathan Boyd",
    rating: 5,
    quote:
      "Did a great job on my fence and decking. He was professional, efficient, and delivered high-quality, sturdy work…",
    source: "Google",
  },
];

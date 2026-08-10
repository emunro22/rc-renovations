export type GalleryCategory =
  | "Extensions & New Builds"
  | "Decking"
  | "Flooring"
  | "Internal Doors"
  | "Bespoke Joinery"
  | "Roofing & Carpentry";

export type GalleryImage = {
  /** Path under /public — drop the matching photo in at this exact path and it goes live automatically. */
  src: string;
  alt: string;
  category: GalleryCategory;
  area?: string;
};

export const galleryCategories: GalleryCategory[] = [
  "Extensions & New Builds",
  "Decking",
  "Flooring",
  "Internal Doors",
  "Bespoke Joinery",
  "Roofing & Carpentry",
];

// Drop real project photos into /public/gallery/<category-folder>/ using these
// exact filenames and they'll replace the placeholder tiles automatically —
// no code changes needed. See /public/gallery/README.txt.
export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/extensions/timber-frame-two-storey-build.jpg",
    alt: "Two-storey timber frame extension under construction",
    category: "Extensions & New Builds",
  },
  {
    src: "/gallery/extensions/rear-extension-deck-frame.jpg",
    alt: "Deck sub-frame being built beneath a rear house extension with glass balcony",
    category: "Extensions & New Builds",
  },
  {
    src: "/gallery/extensions/grey-cladding-dormer.jpg",
    alt: "Grey composite cladding fitted around dormer window openings",
    category: "Extensions & New Builds",
  },

  {
    src: "/gallery/decking/composite-decking-bifold-doors.jpg",
    alt: "Grey composite decking finished beneath bi-fold doors",
    category: "Decking",
  },
  {
    src: "/gallery/decking/composite-decking-garden-path.jpg",
    alt: "Curved grey composite decking path through a landscaped garden",
    category: "Decking",
  },
  {
    src: "/gallery/decking/black-composite-decking-two-storey.jpg",
    alt: "Black composite decking wrapping a two-storey house with glass balustrade balcony",
    category: "Decking",
  },

  {
    src: "/gallery/flooring/herringbone-lvt-living-room.jpg",
    alt: "Light grey herringbone LVT flooring being laid in a living room",
    category: "Flooring",
  },
  {
    src: "/gallery/flooring/herringbone-hallway-entrance.jpg",
    alt: "Herringbone flooring finished in a hallway entrance",
    category: "Flooring",
  },
  {
    src: "/gallery/flooring/walnut-herringbone-parquet.jpg",
    alt: "Dark walnut herringbone parquet flooring in a hallway",
    category: "Flooring",
  },

  {
    src: "/gallery/doors/grey-woodgrain-internal-doors.jpg",
    alt: "Grey woodgrain internal doors fitted with black lever handles",
    category: "Internal Doors",
  },
  {
    src: "/gallery/doors/glazed-internal-door-detail.jpg",
    alt: "Glazed grey internal door with vision panel and black handle",
    category: "Internal Doors",
  },
  {
    src: "/gallery/doors/door-hinge-fitting-detail.jpg",
    alt: "Close-up of a black hinge being fitted to a new internal door",
    category: "Internal Doors",
  },
  {
    src: "/gallery/doors/door-handle-detail.jpg",
    alt: "Black lever door handle on a grey woodgrain internal door",
    category: "Internal Doors",
  },

  {
    src: "/gallery/joinery/fitted-wardrobe-sloped-ceiling.jpg",
    alt: "Bespoke fitted wardrobe built into a sloped attic ceiling",
    category: "Bespoke Joinery",
  },
  {
    src: "/gallery/joinery/wall-panelling-hallway.jpg",
    alt: "Wall panelling and wainscoting fitted in a hallway with herringbone flooring",
    category: "Bespoke Joinery",
  },
  {
    src: "/gallery/joinery/feature-wall-panelling-bedroom.jpg",
    alt: "Feature wall panelling installed in a bedroom",
    category: "Bespoke Joinery",
  },

  {
    src: "/gallery/roofing/roof-trusses-loft-conversion.jpg",
    alt: "Roof trusses installed as part of a loft conversion",
    category: "Roofing & Carpentry",
  },
  {
    src: "/gallery/roofing/new-door-frame-first-fix.jpg",
    alt: "New timber door frame and first-fix electrics in a renovated room",
    category: "Roofing & Carpentry",
  },
];

export function imagesByCategory(category: GalleryCategory) {
  return galleryImages.filter((i) => i.category === category);
}

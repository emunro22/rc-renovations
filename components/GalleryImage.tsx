"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Renders a project photo filling its parent (which must be `relative`).
 * Until the real file exists at `src` (see /public/gallery/README.txt) this
 * falls back to a branded placeholder tile instead of a broken image icon.
 */
export default function GalleryImage({
  src,
  alt,
  category,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  category?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-edge to-midnight">
        <svg
          width="48"
          height="48"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden
          className="text-royal opacity-60"
        >
          <path d="M4 18 L16 6 L28 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 18 v8 h16 v-8" stroke="#C7CDD8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-midnight/80 px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-bright">
            {category}
          </span>
        )}
      </div>
    );
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        onError={() => setFailed(true)}
      />
      {category && (
        <span className="absolute left-4 top-4 rounded-full bg-midnight/80 px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-bright">
          {category}
        </span>
      )}
    </>
  );
}

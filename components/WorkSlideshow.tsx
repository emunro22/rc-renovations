"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import GalleryImage from "./GalleryImage";
import Reveal from "./Reveal";
import { galleryImages } from "@/lib/gallery";

const slides = galleryImages.slice(0, 8);

export default function WorkSlideshow() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative overflow-hidden border-t border-edge">
      {/* Background slideshow — kept light so the photos read clearly, with just
          enough of a gradient at the base for the text to stay legible. */}
      <div aria-hidden className="absolute inset-0">
        {slides.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <GalleryImage src={img.src} alt="" priority={i === 0} />
          </div>
        ))}
        <div className="absolute inset-0 bg-midnight/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-transparent to-transparent" />
      </div>

      <div className="container-site relative flex min-h-[520px] flex-col justify-end py-16 sm:min-h-[600px] sm:py-20">
        <Reveal>
          <p className="eyebrow">Our work</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            See the finish for yourself
          </h2>
          <p className="mt-4 max-w-xl text-mist">
            Extensions, decking, flooring, doors and bespoke joinery — a selection of jobs completed
            across Glasgow and Lanarkshire.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
            <div className="flex gap-1.5" role="tablist" aria-label="Featured project photos">
              {slides.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show photo ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-bright" : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

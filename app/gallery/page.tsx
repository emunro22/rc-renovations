import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import GalleryImage from "@/components/GalleryImage";
import { galleryCategories, imagesByCategory } from "@/lib/gallery";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work | Renovation & Joinery Projects",
  description:
    "Recent joinery and renovation projects by RC Renovations across Glasgow and Lanarkshire — extensions, decking, flooring, internal doors and bespoke joinery.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-edge py-16">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Our work</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Recent <span className="steel-text">projects</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-mist">
              A selection of recent jobs across Glasgow and Lanarkshire. Every one quoted in writing,
              delivered on programme and signed off by a happy customer.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {galleryCategories.map((c) => (
                <a
                  key={c}
                  href={`#${slugify(c)}`}
                  className="shrink-0 rounded-full border border-edge bg-panel px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-steel transition-colors hover:border-bright hover:text-white"
                >
                  {c}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {galleryCategories.map((category, ci) => {
        const images = imagesByCategory(category);
        if (images.length === 0) return null;
        return (
          <section
            key={category}
            id={slugify(category)}
            className={`scroll-mt-24 py-14 ${ci % 2 === 1 ? "bg-panel" : ""}`}
          >
            <div className="container-site">
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{category}</h2>
              </Reveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((img, i) => (
                  <Reveal key={img.src} delay={i * 0.04}>
                    <article className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-edge bg-panel transition-colors hover:border-royal">
                      <GalleryImage src={img.src} alt={img.alt} />
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-edge py-10">
        <div className="container-site">
          <p className="text-center text-sm text-mist">
            Project photos are being added regularly — follow{" "}
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel hover:text-bright"
            >
              @rc_renovations_
            </a>{" "}
            on Instagram for the latest before &amp; afters.
          </p>
        </div>
      </section>

      <CTABand heading="Want your project on this page?" />
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

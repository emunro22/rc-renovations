import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Renovation & Joinery Blog | Glasgow & Lanarkshire",
  description:
    "Practical renovation advice from RC Renovations: flooring, decking, loft conversions and budgeting guidance for homeowners in Glasgow and Lanarkshire.",
  alternates: { canonical: "/blog" },
};

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="border-b border-edge py-16">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Blog</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Renovation <span className="steel-text">advice &amp; guides</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-mist">
              Straight-talking guides on flooring, decking, loft conversions and budgeting, written from
              real jobs across Glasgow and Lanarkshire.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link href={`/blog/${p.slug}`} className="card group flex h-full flex-col">
                <span className="eyebrow">{p.category}</span>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug group-hover:text-bright">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-mist">
                  <time dateTime={p.date}>{dateFmt.format(new Date(p.date))}</time>
                  <span className="font-display font-bold uppercase tracking-wider text-bright">Read more →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand heading="Got a project in mind?" />
    </>
  );
}

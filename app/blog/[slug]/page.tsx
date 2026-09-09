import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import RichText from "@/components/RichText";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = post.relatedService ? getService(post.relatedService) : undefined;
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Drop the customer pull-quote a little under halfway through the article.
  const quoteAfterIndex = Math.max(1, Math.floor(post.body.length * 0.45));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: site.name },
        publisher: { "@id": `${site.url}/#business` },
        mainEntityOfPage: `${site.url}/blog/${post.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article>
        <section className="border-b border-edge py-16">
          <div className="container-site max-w-3xl">
            <Reveal>
              <nav aria-label="Breadcrumb" className="text-sm text-mist">
                <Link href="/" className="hover:text-bright">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="hover:text-bright">Blog</Link>
              </nav>
              <p className="eyebrow mt-5">{post.category}</p>
              <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-4 text-sm text-mist">
                <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time> · RC Renovations
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-14">
          <div className="container-site grid gap-12 lg:grid-cols-[1.4fr,1fr]">
            <Reveal className="max-w-none">
              <div>
                {post.body.map((para, i) => (
                  <Fragment key={i}>
                    {para.startsWith("## ") ? (
                      <h2 className="mt-10 font-display text-xl font-bold text-snow first:mt-0">
                        {para.replace("## ", "")}
                      </h2>
                    ) : (
                      <p className="mt-5 leading-relaxed text-steel first:mt-0">
                        <RichText text={para} />
                      </p>
                    )}
                    {post.testimonial && i === quoteAfterIndex && (
                      <figure className="my-10 rounded-lg border-l-2 border-bright bg-panel p-6">
                        <div className="flex gap-1 text-bright" aria-label="5 out of 5 stars">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <svg key={j} width="15" height="15" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                              <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="mt-4 font-display text-lg font-semibold leading-snug text-snow">
                          &ldquo;{post.testimonial.quote}&rdquo;
                        </blockquote>
                        <figcaption className="mt-4 text-sm text-mist">
                          <span className="font-semibold text-steel">{post.testimonial.name}</span>
                          {" · "}
                          {post.testimonial.context}
                        </figcaption>
                        <a
                          href={site.googleReviewsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block font-display text-xs font-bold uppercase tracking-wider text-bright hover:underline"
                        >
                          See all our Google reviews →
                        </a>
                      </figure>
                    )}
                  </Fragment>
                ))}
              </div>
            </Reveal>

            <aside>
              <Reveal delay={0.05}>
                <div className="card sticky top-24">
                  <h2 className="font-display text-lg font-bold">Talk to us</h2>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    Free surveys and fixed written quotes across Glasgow and Lanarkshire, usually within 48 hours.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
                    <a href={`tel:${site.phoneHref}`} className="btn-ghost">Call {site.phone}</a>
                  </div>
                  {related && (
                    <>
                      <hr className="my-5 border-edge" />
                      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-mist">
                        Related service
                      </h3>
                      <Link
                        href={`/services/${related.slug}`}
                        className="mt-3 block font-display text-sm font-semibold text-bright hover:underline"
                      >
                        {related.title} →
                      </Link>
                    </>
                  )}
                  {post.relatedLinks && post.relatedLinks.length > 0 && (
                    <>
                      <hr className="my-5 border-edge" />
                      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-mist">
                        Explore next
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {post.relatedLinks.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className="text-sm text-steel hover:text-bright hover:underline">
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <hr className="my-5 border-edge" />
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-mist">
                    Rated 5.0 on Google
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    Every job we quote is priced after a free survey, and our workmanship is guaranteed.
                  </p>
                  <a
                    href={site.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-display text-sm font-semibold text-bright hover:underline"
                  >
                    Read our Google reviews →
                  </a>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        {otherPosts.length > 0 && (
          <section className="border-t border-edge bg-panel py-14">
            <div className="container-site">
              <Reveal>
                <h2 className="font-display text-2xl font-bold">More from the blog</h2>
              </Reveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {otherPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="card group block">
                    <span className="eyebrow">{p.category}</span>
                    <h3 className="mt-3 font-display font-bold leading-snug group-hover:text-bright">{p.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTABand heading="Ready to start your project?" />
    </>
  );
}

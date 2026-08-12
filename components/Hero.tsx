"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Hero() {
  const reduce = useReducedMotion();
  const up = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] as const },
  });

  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow + roofline linework backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 75% -10%, rgba(28,79,184,0.35), transparent 65%), radial-gradient(600px 400px at 10% 110%, rgba(46,107,230,0.12), transparent 60%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-1/2 hidden -translate-y-1/2 opacity-[0.07] lg:block"
        width="700"
        height="700"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#C7CDD8"
        strokeWidth="0.6"
      >
        <path d="M10 60 L50 20 L90 60" />
        <path d="M18 60 L50 28 L82 60" />
        <path d="M26 60 L50 36 L74 60" />
        <rect x="42" y="44" width="16" height="16" />
      </svg>

      {/* Centered logo watermark, behind the text — mobile only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-[0.16] lg:hidden"
      >
        <Logo size={400} className="sm:hidden" />
        <Logo size={540} className="hidden sm:block" />
      </div>

      <div className="container-site relative flex max-w-7xl flex-col items-start gap-12 pb-20 pt-8 md:pb-28 md:pt-12 lg:grid lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <div>
          <motion.p {...up(0)} className="eyebrow">
            Joinery &middot; Renovations &middot; Glasgow &amp; Lanarkshire
          </motion.p>
          <motion.h1
            {...up(0.1)}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Built properly.
            <br />
            <span className="steel-text">Finished beautifully.</span>
          </motion.h1>
          <motion.p {...up(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Kitchens, bathrooms, extensions and bespoke joinery by time-served tradesmen.
            Fixed written quotes, one point of contact, and work we&apos;re proud to put our name to.
          </motion.p>
          <motion.div {...up(0.3)} className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn-ghost">
              Call {site.phone}
            </a>
          </motion.div>
          <motion.ul {...up(0.4)} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-steel">
            {["Fixed written quotes", "Fully insured", "Time-served joiners"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M2 9l4 4 8-9" stroke="#2E6BE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.21, 0.6, 0.35, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-royal/30 blur-3xl" />
          <Logo size={420} priority className="shadow-2xl ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}

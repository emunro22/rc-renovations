"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/gallery", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-midnight/90 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="RC Renovations home">
          <Logo size={40} priority className="sm:hidden" />
          <Logo size={44} priority className="hidden sm:block" />
          <span className="truncate font-display text-base font-800 tracking-tight sm:text-lg">
            <span className="steel-text font-extrabold">RC</span>{" "}
            <span className="text-snow font-bold">Renovations</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-display text-[13px] font-semibold uppercase tracking-wider transition-colors ${
                pathname === l.href ? "text-bright" : "text-steel hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RC Renovations on Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-edge text-steel transition-colors hover:border-bright hover:text-bright"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
            </svg>
          </a>
          <a href={`tel:${site.phoneHref}`} className="btn-primary !px-5 !py-2.5">
            {site.phone}
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RC Renovations on Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-edge text-steel transition-colors hover:border-bright hover:text-bright"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
            </svg>
          </a>
          <button
            className="rounded-md border border-edge p-2.5 text-steel"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-edge bg-panel xl:hidden"
            aria-label="Mobile"
          >
            <div className="container-site flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 font-display text-sm font-semibold uppercase tracking-wider ${
                    pathname === l.href ? "bg-edge text-bright" : "text-steel"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a href={`tel:${site.phoneHref}`} className="btn-primary mt-3">
                Call {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-2"
              >
                WhatsApp Us
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-2 flex items-center justify-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

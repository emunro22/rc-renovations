import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-panel">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={48} />
            <span className="font-display text-lg font-bold">
              <span className="steel-text">RC</span> Renovations
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Joinery and renovation specialists covering Glasgow, Lanarkshire and surrounding areas.
            Fixed written quotes, time-served tradesmen and work we put our name to.
          </p>
          <div className="mt-5 space-y-1 text-sm text-steel">
            <p>
              <a href={`tel:${site.phoneHref}`} className="hover:text-bright">{site.phone}</a>
            </p>
            <p>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-bright">
                WhatsApp us
              </a>
            </p>
            <p className="break-all">
              <a href={`mailto:${site.email}`} className="hover:text-bright">{site.email}</a>
            </p>
            <p className="text-mist">Glasgow, Scotland</p>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RC Renovations on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-steel transition-colors hover:border-bright hover:text-bright"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message RC Renovations on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-steel transition-colors hover:border-bright hover:text-bright"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 9.3c0-.5.4-.9.8-.9h.7c.3 0 .6.2.7.5l.5 1.4c.1.3 0 .6-.2.8l-.5.5c.4.9 1.2 1.7 2.1 2.1l.5-.5c.2-.2.5-.3.8-.2l1.4.5c.3.1.5.4.5.7v.7c0 .4-.4.8-.9.8-3.1 0-6.4-3.3-6.4-6.4z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-snow">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-mist transition-colors hover:text-bright">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-snow">Areas We Cover</h3>
          <ul className="mt-4 space-y-2.5">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/areas/${l.slug}`} className="text-sm text-mist transition-colors hover:text-bright">
                  Joiners in {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-snow">Company</h3>
          <ul className="mt-4 space-y-2.5">
            <li><Link href="/about" className="text-sm text-mist hover:text-bright">About Us</Link></li>
            <li><Link href="/gallery" className="text-sm text-mist hover:text-bright">Our Work</Link></li>
            <li><Link href="/blog" className="text-sm text-mist hover:text-bright">Blog</Link></li>
            <li><Link href="/contact" className="text-sm text-mist hover:text-bright">Get a Free Quote</Link></li>
          </ul>
          <Link href="/contact" className="btn-primary mt-6">Free Quote</Link>
        </div>
      </div>

      <div className="border-t border-edge py-5">
        <div className="container-site flex flex-col items-center justify-between gap-3 text-xs text-mist sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-bright">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-bright">Terms &amp; Conditions</Link>
          </div>
          <p>
            Website by{" "}
            <a href="https://munrostudio.co.uk" className="text-steel hover:text-bright" rel="noopener">
              MunroStudio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

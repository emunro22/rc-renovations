"use client";

import { site } from "@/lib/site";

export default function FloatingContact() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex justify-end gap-3 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:right-6 sm:left-auto sm:px-0 sm:pb-6"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${site.phoneHref}`}
        aria-label={`Call RC Renovations on ${site.phone}`}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-sheen text-white shadow-glow transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message RC Renovations on WhatsApp"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_40px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"
            fill="#fff"
            fillOpacity="0.001"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 9.3c0-.5.4-.9.8-.9h.7c.3 0 .6.2.7.5l.5 1.4c.1.3 0 .6-.2.8l-.5.5c.4.9 1.2 1.7 2.1 2.1l.5-.5c.2-.2.5-.3.8-.2l1.4.5c.3.1.5.4.5.7v.7c0 .4-.4.8-.9.8-3.1 0-6.4-3.3-6.4-6.4z"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  );
}

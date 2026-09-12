"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "rc-cookie-consent";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// GA4 sets cookies, so it is injected only once the visitor has accepted and
// never on page load. The cookieless Vercel analytics runs either way, which is
// what keeps a decline from leaving us with no numbers at all.
function loadGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || document.getElementById("ga4-script")) return;

  const loader = document.createElement("script");
  loader.id = "ga4-script";
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(loader);

  const config = document.createElement("script");
  config.id = "ga4-config";
  config.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
  `;
  document.head.appendChild(config);
}

export default function CookieConsent({
  onHeightChange,
}: {
  onHeightChange?: (height: number) => void;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let shouldShow = true;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      shouldShow = !stored;
      if (stored === "accepted") loadGoogleAnalytics();
    } catch {
      shouldShow = true;
    }
    setVisible(shouldShow);
    // Only run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!visible || !ref.current) {
      onHeightChange?.(0);
      return;
    }
    const el = ref.current;
    const report = () => onHeightChange?.(el.offsetHeight);
    report();
    const observer = new ResizeObserver(report);
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function dismiss(value: "accepted" | "necessary-only") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage unavailable, still hide the banner for this visit
    }
    if (value === "accepted") loadGoogleAnalytics();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-edge bg-panel/97 backdrop-blur"
    >
      <div className="container-site flex flex-col items-center gap-4 py-5 sm:flex-row sm:justify-between">
        <p className="text-sm leading-relaxed text-mist">
          We use only strictly necessary cookies to make this site work. Read our{" "}
          <Link href="/privacy" className="text-bright hover:underline">Privacy Policy</Link> for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => dismiss("necessary-only")}
            className="rounded-md border border-edge px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-steel transition-colors hover:border-bright hover:text-white"
          >
            Necessary only
          </button>
          <button type="button" onClick={() => dismiss("accepted")} className="btn-primary !px-4 !py-2.5 text-xs">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

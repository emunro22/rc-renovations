"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "rc-cookie-consent";

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
      shouldShow = !localStorage.getItem(STORAGE_KEY);
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

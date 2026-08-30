"use client";

import { useState } from "react";
import FloatingContact from "./FloatingContact";
import CookieConsent from "./CookieConsent";

export default function ChromeOverlays() {
  const [bannerHeight, setBannerHeight] = useState(0);

  return (
    <>
      <FloatingContact liftBy={bannerHeight ? bannerHeight + 12 : 0} />
      <CookieConsent onHeightChange={setBannerHeight} />
    </>
  );
}

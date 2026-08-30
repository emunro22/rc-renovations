import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import ChromeOverlays from "@/components/ChromeOverlays";
import { site } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "RC Renovations | Joiners Glasgow & Lanarkshire",
    template: "%s | RC Renovations",
  },
  description:
    "RC Renovations: trusted joiners and renovation specialists covering Glasgow, Hamilton, Bothwell and Lanarkshire. Kitchens, bathrooms, extensions and bespoke joinery. Free fixed quotes.",
  keywords: [
    "joiners Glasgow",
    "renovations Glasgow",
    "joinery Lanarkshire",
    "kitchen fitters Glasgow",
    "bathroom renovation Hamilton",
    "bespoke joinery Bothwell",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: "RC Renovations | Joiners Glasgow & Lanarkshire",
    description:
      "Trusted joiners and renovation specialists covering Glasgow and Lanarkshire. Kitchens, bathrooms, extensions and bespoke joinery.",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "RC Renovations logo" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  other: {
    // Local SEO / geo-targeting signals for search engines and AI answer engines.
    "geo.region": "GB-SCT",
    "geo.placename": site.address.locality,
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <SchemaOrg />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChromeOverlays />
      </body>
    </html>
  );
}

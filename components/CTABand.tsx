import Link from "next/link";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTABand({
  heading = "Ready to start your project?",
  sub = "Tell us what you have in mind and we'll arrange a free survey and fixed written quote — usually within 48 hours.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="border-t border-edge bg-blue-sheen">
      <div className="container-site py-16 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">{sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-white px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-royal transition-transform hover:scale-[1.03]"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center rounded-md border border-white/40 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Call {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

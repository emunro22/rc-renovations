"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-sheen">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 13l5 5L20 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">Enquiry sent</h3>
        <p className="mt-2 text-mist">
          Thanks, we&apos;ve got your details and will be in touch shortly, usually the same working day.
        </p>
      </motion.div>
    );
  }

  const input =
    "w-full rounded-md border border-edge bg-midnight px-4 py-3 text-snow placeholder:text-mist/60 focus:border-bright focus:outline-none focus:ring-1 focus:ring-bright";

  return (
    <form onSubmit={onSubmit} action="/api/contact" method="post" className="card space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-steel">Name</label>
          <input id="name" name="name" required maxLength={100} placeholder="Your name" className={input} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-steel">Phone</label>
          <input id="phone" name="phone" type="tel" required maxLength={30} placeholder="07xxx xxxxxx" className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-steel">Email</label>
        <input id="email" name="email" type="email" required maxLength={150} placeholder="you@email.com" className={input} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-steel">Service</label>
          <select id="service" name="service" className={input} defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other / not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="area" className="mb-1.5 block text-sm font-semibold text-steel">Your area</label>
          <input id="area" name="area" maxLength={100} placeholder="e.g. Hamilton, Bothwell" className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-steel">Tell us about the job</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={3000}
          placeholder="What would you like done? Rough sizes, timescales and anything else useful."
          className={input}
        />
      </div>

      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {status === "error" && (
        <p className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}, or call us directly instead.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send Enquiry"}
      </button>
      <p className="text-center text-xs text-mist">
        We only use your details to respond to your enquiry. No mailing lists, no spam.
      </p>
    </form>
  );
}

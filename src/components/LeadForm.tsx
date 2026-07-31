"use client";

import { useState } from "react";
import { PLATFORMS } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function LeadForm({
  source,
  dark = false,
  compact = false,
}: {
  source: string;
  dark?: boolean;
  compact?: boolean;
}) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    setError("");
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        phone: fd.get("phone"),
        monthlyRevenue: fd.get("monthlyRevenue"),
        message: fd.get("message"),
        company_website: fd.get("company_website"),
        platforms,
        source,
      }),
    }).catch(() => null);
    if (res?.ok) {
      setState("sent");
      window.gtag?.("event", "generate_lead", { form_source: source });
    } else {
      setState("error");
      const data = await res?.json().catch(() => null);
      setError(data?.error || "Something went wrong. Email us at sales@emerchantbooks.com and we’ll reply the same day.");
    }
  }

  if (state === "sent") {
    return (
      <div className={`rounded-xl border p-6 text-center ${dark ? "border-brand-500/40 bg-navy-800 text-white" : "border-brand-500/40 bg-brand-50"}`}>
        <p className="text-lg font-semibold">Got it. We&rsquo;ll reply within one business day.</p>
        <p className={`mt-2 text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>
          Want to talk sooner? Call us at <a className="font-medium underline" href="tel:+14692941807">(469) 294-1807</a>.
        </p>
      </div>
    );
  }

  const input = `w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
    dark
      ? "border-navy-700 bg-navy-800 text-white placeholder-slate-400"
      : "border-slate-300 bg-white text-slate-900 placeholder-slate-400"
  }`;
  const label = `mb-1.5 block text-xs font-semibold uppercase tracking-wide ${dark ? "text-slate-300" : "text-slate-600"}`;

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {!compact && (
        <div>
          <span className={label}>Where do you sell?</span>
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((p) => {
              const on = platforms.includes(p);
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlatforms(on ? platforms.filter((x) => x !== p) : [...platforms, p])}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    on
                      ? "border-brand-500 bg-brand-500 text-white"
                      : dark
                        ? "border-navy-700 bg-navy-800 text-slate-300 hover:border-brand-500"
                        : "border-slate-300 bg-white text-slate-600 hover:border-brand-500"
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={`${source}-name`}>Name</label>
          <input id={`${source}-name`} name="name" required maxLength={200} placeholder="Jane Smith" className={input} />
        </div>
        <div>
          <label className={label} htmlFor={`${source}-email`}>Email</label>
          <input id={`${source}-email`} name="email" type="email" required maxLength={200} placeholder="jane@yourstore.com" className={input} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={`${source}-phone`}>Phone (optional)</label>
          <input id={`${source}-phone`} name="phone" maxLength={50} placeholder="(555) 123-4567" className={input} />
        </div>
        <div>
          <label className={label} htmlFor={`${source}-rev`}>Monthly sales</label>
          <select id={`${source}-rev`} name="monthlyRevenue" className={input} defaultValue="">
            <option value="" disabled>Select range</option>
            <option>$100K-$250K/mo</option>
            <option>$250K-$850K/mo</option>
            <option>$850K-$2.5M/mo</option>
            <option>Over $2.5M/mo</option>
            <option>Under $100K/mo (join waitlist)</option>
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label className={label} htmlFor={`${source}-msg`}>Anything we should know? (optional)</label>
          <textarea id={`${source}-msg`} name="message" rows={3} maxLength={3000} placeholder="Behind on books? Switching from another firm? Selling from outside the US?" className={input} />
        </div>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full rounded-lg bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Talk to a Partner"}
      </button>

      {state === "error" && <p className="text-sm text-red-500">{error}</p>}
      <p className={`text-center text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
        No commitment. A partner replies within one business day.
      </p>
    </form>
  );
}

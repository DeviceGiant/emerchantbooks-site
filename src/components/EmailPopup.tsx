"use client";

import { useEffect, useState } from "react";

/** Sitewide lead-magnet popup: fires once per visitor after 22s or 55% scroll. */
export default function EmailPopup() {
  const [show, setShow] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    if (localStorage.getItem("emb-magnet")) return;
    const fire = () => {
      if (!localStorage.getItem("emb-magnet-shown")) {
        localStorage.setItem("emb-magnet-shown", "1");
        setShow(true);
      }
    };
    const t = setTimeout(fire, 22000);
    const onScroll = () => {
      if (window.scrollY > document.body.scrollHeight * 0.55) fire();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("sending");
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: (fd.get("email") as string).split("@")[0], email: fd.get("email"), magnet: true, source: "magnet-popup" }),
    }).catch(() => null);
    localStorage.setItem("emb-magnet", "1");
    setState("sent");
  }

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/75 p-4" onClick={() => setShow(false)}>
      <div className="w-full max-w-lg rounded-2xl bg-white p-7 shadow-2xl sm:p-9" onClick={(e) => e.stopPropagation()}>
        {state === "sent" ? (
          <div className="text-center">
            <p className="text-2xl font-bold text-navy-900">Check your inbox</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              The checklist is on its way. Work through it this week; most sellers find their first leak in section
              one. When you want us to run it for you, the books teardown is free.
            </p>
            <button onClick={() => setShow(false)} className="mt-6 rounded-lg bg-navy-900 px-6 py-2.5 text-sm font-bold text-white">Done</button>
          </div>
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Free checklist · 5-minute read</p>
            <p className="mt-2 text-2xl font-bold leading-tight text-navy-900">
              Find the money leaking out of your ecommerce books
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              The <strong className="text-navy-900">27-Point Ecommerce Money Leak Checklist</strong>: the exact
              checks our accountants run on every new client&rsquo;s books. Sellers routinely find thousands in
              unclaimed FBA reimbursements, miscategorized COGS and overpaid sales tax. Free, instant, keep it
              forever.
            </p>
            <form onSubmit={submit} className="mt-5 flex gap-2">
              <input
                name="email" type="email" required placeholder="you@yourstore.com"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button disabled={state === "sending"} className="shrink-0 rounded-lg bg-brand-500 px-5 py-3 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-60">
                {state === "sending" ? "…" : "Send It"}
              </button>
            </form>
            <p className="mt-3 text-center text-xs text-slate-400">No spam. One useful email, then only what you ask for.</p>
            <button onClick={() => setShow(false)} className="mx-auto mt-3 block text-xs text-slate-400 underline">No thanks, my books are perfect</button>
          </>
        )}
      </div>
    </div>
  );
}

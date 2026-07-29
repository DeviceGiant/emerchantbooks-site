"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** Mobile sticky CTA bar + one-time desktop exit-intent prompt. */
export default function StickyBar() {
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("emb-exit-shown")) return;
    function onLeave(e: MouseEvent) {
      if (e.clientY <= 0 && !sessionStorage.getItem("emb-exit-shown")) {
        sessionStorage.setItem("emb-exit-shown", "1");
        setShowExit(true);
      }
    }
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  return (
    <>
      {/* mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-navy-800 bg-navy-900 px-4 py-3 lg:hidden">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-white">First month free</p>
          <p className="truncate text-[11px] text-slate-400">Books by the 15th, in your QuickBooks</p>
        </div>
        <Link href="/contact/" className="shrink-0 rounded-lg bg-brand-500 px-4 py-2 text-sm font-bold text-white">
          Get Started
        </Link>
      </div>

      {/* desktop exit-intent */}
      {showExit && (
        <div className="fixed inset-0 z-50 hidden items-center justify-center bg-navy-950/70 p-4 lg:flex" onClick={() => setShowExit(false)}>
          <div className="max-w-md rounded-2xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <p className="text-2xl font-bold text-navy-900">Before you go: your first month is free</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We do a full month of your books at no cost, in your own QuickBooks or Xero file, so you can judge the
              work before paying anything. No contract, no card required.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/contact/"
                onClick={() => setShowExit(false)}
                className="flex-1 rounded-lg bg-brand-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-brand-600"
              >
                Claim My Free Month
              </Link>
              <button onClick={() => setShowExit(false)} className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-medium text-slate-600">
                No thanks
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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
          <p className="truncate text-xs font-semibold text-white">For $100K+/mo ecommerce brands</p>
          <p className="truncate text-[11px] text-slate-400">Day-10 close guarantee · published pricing</p>
        </div>
        <Link href="/contact/" className="shrink-0 rounded-lg bg-brand-500 px-4 py-2 text-sm font-bold text-white">
          Talk to Us
        </Link>
      </div>

      {/* desktop exit-intent */}
      {showExit && (
        <div className="fixed inset-0 z-50 hidden items-center justify-center bg-navy-950/70 p-4 lg:flex" onClick={() => setShowExit(false)}>
          <div className="max-w-md rounded-2xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <p className="text-2xl font-bold text-navy-900">Would your books survive diligence?</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Our Diligence Readiness Assessment scores your books against the 40 points buyers and lenders actually
              check, and quantifies every gap in dollars. $2,500, ten business days, credited in full against onboarding.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/contact/"
                onClick={() => setShowExit(false)}
                className="flex-1 rounded-lg bg-brand-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-brand-600"
              >
                Learn About the Assessment
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

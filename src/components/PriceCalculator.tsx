"use client";

import Link from "next/link";
import { useState } from "react";

type Answers = {
  revenue: string;
  channels: string;
  inventory: string;
  payroll: string;
  behind: string;
};

const DEFAULTS: Answers = { revenue: "", channels: "1", inventory: "none", payroll: "no", behind: "0" };

function quote(a: Answers) {
  const ch = parseInt(a.channels, 10);
  let plan = "";
  let base = 0;
  let offer = "";
  if (a.revenue === "under25") {
    plan = "Books Lite";
    base = ch >= 2 || a.inventory !== "none" ? 249 : 149;
    offer = "First month free, no card required";
  } else if (a.revenue === "25to100") {
    plan = "Full-Service";
    base = 599;
    offer = "Free 30-day trial + 90-day money-back guarantee";
  } else if (a.revenue === "100to250") {
    plan = "Foundation";
    base = 1250;
    offer = "Free books audit + video teardown, then first month free";
  } else if (a.revenue === "250to850") {
    plan = "Command";
    base = 3500;
    offer = "Free books audit + video teardown, then first month free";
  } else {
    plan = "Exit-Grade";
    base = 7500;
    offer = "Start with the $2,500 Exit-Ready Assessment (credited)";
  }
  let price = base;
  if (ch > 3) price += (ch - 3) * 250;
  if (a.inventory === "multi") price += base >= 1250 ? 400 : 200;
  else if (a.inventory === "basic" && base < 1250) price += 100;
  if (a.payroll === "yes") price += 100;

  const behindMonths = a.behind === "1-3" ? 2 : a.behind === "4-12" ? 8 : a.behind === "12+" ? 14 : 0;
  const catchup = behindMonths ? Math.round((price * 0.65 * behindMonths) / 50) * 50 : 0;
  return { plan, price, catchup, offer };
}

const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600";
const input = "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-brand-500";

export default function PriceCalculator() {
  const [a, setA] = useState<Answers>(DEFAULTS);
  const set = (k: keyof Answers) => (e: React.ChangeEvent<HTMLSelectElement>) => setA({ ...a, [k]: e.target.value });
  const q = a.revenue ? quote(a) : null;

  return (
    <div className="rounded-2xl border border-navy-800 bg-navy-900 p-6 sm:p-8">
      <p className="text-xl font-bold text-white">Know your exact price in 60 seconds</p>
      <p className="mt-1.5 text-sm text-slate-300">
        Five questions, one honest number, right here on the page. No &ldquo;book a call to find out.&rdquo;
      </p>

      <div className="mt-6 grid gap-4 rounded-xl bg-white p-5 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <label className={label} htmlFor="calc-rev">Monthly revenue</label>
          <select id="calc-rev" className={input} value={a.revenue} onChange={set("revenue")}>
            <option value="" disabled>Select…</option>
            <option value="under25">Under $25K</option>
            <option value="25to100">$25K–$100K</option>
            <option value="100to250">$100K–$250K</option>
            <option value="250to850">$250K–$850K</option>
            <option value="over850">Over $850K</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="calc-ch">Sales channels</label>
          <select id="calc-ch" className={input} value={a.channels} onChange={set("channels")}>
            <option value="1">1 (or brick-and-mortar)</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="calc-inv">Inventory</label>
          <select id="calc-inv" className={input} value={a.inventory} onChange={set("inventory")}>
            <option value="none">None / dropship</option>
            <option value="basic">One location</option>
            <option value="multi">Multi-warehouse / 3PL</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="calc-pay">Payroll</label>
          <select id="calc-pay" className={input} value={a.payroll} onChange={set("payroll")}>
            <option value="no">No employees</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="calc-behind">Months behind</label>
          <select id="calc-behind" className={input} value={a.behind} onChange={set("behind")}>
            <option value="0">Up to date</option>
            <option value="1-3">1–3</option>
            <option value="4-12">4–12</option>
            <option value="12+">12+</option>
          </select>
        </div>
      </div>

      {q && (
        <div className="mt-5 rounded-xl border border-brand-500/40 bg-navy-800 p-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">{q.plan} plan</p>
              <p className="mt-1 text-4xl font-bold text-white">
                ${q.price.toLocaleString()}<span className="text-base font-medium text-slate-400">/mo</span>
              </p>
              {q.catchup > 0 && (
                <p className="mt-1 text-sm text-slate-300">
                  + one-time catch-up estimate: <strong className="text-white">${q.catchup.toLocaleString()}</strong> (flat, quoted exactly before we start)
                </p>
              )}
              <p className="mt-2 text-sm font-medium text-brand-500">{q.offer}</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact/" className="rounded-lg bg-brand-500 px-5 py-3 text-sm font-bold text-white hover:bg-brand-600">
                Claim This Offer
              </Link>
              <Link href="/contact/" className="rounded-lg border border-slate-500 px-5 py-3 text-sm font-medium text-slate-200 hover:border-white">
                Book a 15-min Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

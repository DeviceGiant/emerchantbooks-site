import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBand, FaqBlock } from "@/components/Sections";

export const metadata: Metadata = {
  title: { absolute: "Bookkeeping Pricing for Ecommerce Sellers | eMerchant Books" },
  description:
    "Transparent monthly bookkeeping pricing from $229/mo, tiered by order volume and channels. No quote gate, no annual contract, first month free.",
  alternates: { canonical: "/pricing/" },
};

const TIERS = [
  {
    name: "Starter",
    price: "$229",
    for: "One channel, up to 300 orders/mo",
    features: [
      "1 sales channel reconciled",
      "QuickBooks or Xero (your file)",
      "Settlement-accurate revenue",
      "COGS on inventory movement",
      "P&L, balance sheet, cash flow by the 15th",
      "Email + text support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$429",
    for: "Up to 3 channels, up to 1,500 orders/mo",
    features: [
      "Everything in Starter",
      "Up to 3 channels with per-channel P&L",
      "A2X / Link My Books managed for you",
      "Monthly video walkthrough of your numbers",
      "Sales tax liability tracking + nexus flags",
      "WhatsApp access to your bookkeeper",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "$749",
    for: "Up to 6 channels, up to 5,000 orders/mo",
    features: [
      "Everything in Growth",
      "Multi-warehouse / 3PL inventory accounting",
      "Multi-currency support",
      "Quarterly margin review call",
      "Priority month-end close (target the 10th)",
      "CPA coordination at year end included",
    ],
    highlight: false,
  },
  {
    name: "Custom",
    price: "Let's talk",
    for: "Higher volume, NetSuite, multi-entity, international",
    features: [
      "NetSuite and multi-entity closes",
      "International seller compliance stack",
      "Catch-up and cleanup projects (flat quote)",
      "Aggregator / lender-ready reporting",
      "Dedicated senior bookkeeper",
    ],
    highlight: false,
  },
];

const FAQS = [
  {
    q: "Why do you price by orders instead of expenses or revenue?",
    a: "Because order volume is what actually drives bookkeeping work. Expense-based tiers punish you for spending on inventory and ads, which is how growing sellers get surprise price jumps at other firms. Your order count is visible to both of us, so pricing stays predictable.",
  },
  {
    q: "Is the first month really free?",
    a: "Yes. We do a full month of your bookkeeping at no cost, in your own file, before you pay anything. If the work doesn't convince you, walk away and keep it. No card required to start.",
  },
  {
    q: "What's not included in these prices?",
    a: "Tax return filing (we prepare the books and coordinate with a CPA, yours or ours), sales tax filing subscriptions like TaxJar or Avalara, and your own QuickBooks or Xero subscription. Catch-up projects for existing backlogs are quoted separately at a discounted rate. No other surprises, and no 'complexity fees' appearing on month three.",
  },
  {
    q: "What happens if my volume grows past my tier?",
    a: "We tell you before anything changes, and the next tier applies from the following month. No retroactive charges, no mid-month surprises, and moving down works the same way in reverse.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "No. Month-to-month, cancel with 30 days' notice, and your file goes with you fully intact because it was always yours. Annual prepayment traps are how firms with bad service keep clients. We'd rather earn the renewal monthly.",
  },
];

export default function Pricing() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/pricing/", label: "Pricing" }]} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900">Transparent pricing, priced by order volume</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            No quote gate. No discovery-call gauntlet. No annual contract. The first month is free on every plan, and
            every plan works inside your own QuickBooks or Xero file.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                t.highlight ? "border-brand-500 bg-white shadow-xl ring-2 ring-brand-500/20" : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">
                  Most popular
                </span>
              )}
              <p className="font-bold text-navy-900">{t.name}</p>
              <p className="mt-3 text-4xl font-bold text-navy-900">
                {t.price}
                {t.price.startsWith("$") && <span className="text-base font-medium text-slate-500">/mo</span>}
              </p>
              <p className="mt-2 text-sm text-slate-500">{t.for}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-brand-500" aria-hidden>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact/"
                className={`mt-7 rounded-lg px-4 py-3 text-center text-sm font-bold ${
                  t.highlight ? "bg-brand-500 text-white hover:bg-brand-600" : "bg-navy-900 text-white hover:bg-navy-800"
                }`}
              >
                Start With a Free Month
              </Link>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
          <p>
            <strong className="text-navy-900">How we compare:</strong> specialist ecommerce firms typically start at
            $395–$995/mo, several won&rsquo;t take clients under $1M in revenue, and most hide pricing behind a sales
            call. Generalists are cheaper but book your deposits as revenue. We built the middle that should have
            existed: specialist work at a price a growing seller can justify.
          </p>
        </div>
      </section>

      <FaqBlock faqs={FAQS} title="Pricing FAQs" />
      <CtaBand source="pricing-bottom" heading="Not sure which tier fits?" sub="Tell us your channels and rough order volume. We'll answer with an exact number, not a sales sequence, within one business day." />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { CtaBand, FaqBlock, Guarantees, TrustBar } from "@/components/Sections";
import { pageImage } from "@/content/images";

export const metadata: Metadata = {
  title: { absolute: "Ecommerce Bookkeeping Services for Amazon, eBay & Shopify Sellers | eMerchant Books" },
  description:
    "Done-for-you ecommerce bookkeeping in your own QuickBooks or Xero. Settlement-accurate books for Amazon, eBay, Shopify, Walmart and Etsy sellers, closed by the 15th, from $229/mo.",
  alternates: { canonical: "/" },
  openGraph: {
    images: [{ url: "/images/ecommerce-bookkeeping-services-desk.webp", width: 1600, height: 900, alt: "Ecommerce bookkeeping workspace" }],
  },
};

const PLATFORM_CARDS = [
  { href: "/amazon-bookkeeping-services/", name: "Amazon", blurb: "Settlement reports, FBA fees, reserves and reimbursements, mapped properly." },
  { href: "/shopify-bookkeeping-services/", name: "Shopify", blurb: "Multi-gateway payouts, gift cards and COGS without connector chaos." },
  { href: "/ebay-bookkeeping-services/", name: "eBay", blurb: "Managed payments rebuilt to gross, labels and promoted listings tracked." },
  { href: "/walmart-bookkeeping-services/", name: "Walmart", blurb: "WFS fees and settlements reconciled, channel margins you can compare." },
  { href: "/etsy-bookkeeping-services/", name: "Etsy", blurb: "Payment account untangled, materials COGS for makers." },
];

const STEPS = [
  { n: "1", title: "Tell us where you sell", body: "Two minutes on the form. We reply within one business day with a plan and an exact monthly price. No discovery-call gauntlet." },
  { n: "2", title: "We connect and clean up", body: "Week one we plug into your channels and your QuickBooks or Xero file, fix the chart of accounts, and quote any backlog at a discounted catch-up rate." },
  { n: "3", title: "Books by the 15th, every month", body: "Reconciled channels, real COGS, honest margins, and a short video walkthrough. Questions answered by your bookkeeper over text or WhatsApp." },
];

const HOME_FAQS = [
  {
    q: "What does an ecommerce bookkeeping service cost?",
    a: "Our plans start at $229/mo and scale with order volume and channel count. Specialist competitors typically start between $395 and $995 per month, and several have $1M+ revenue minimums. Full rate card is on the pricing page; the first month is free either way.",
  },
  {
    q: "Why does ecommerce need a specialist bookkeeper?",
    a: "Marketplace payouts arrive net of fees, refunds and reserves. A generalist books the deposit as revenue, which understates sales, hides fees and breaks your 1099-K reconciliation. Specialists rebuild the underlying activity from settlement reports. That single difference decides whether your P&L means anything.",
  },
  {
    q: "Do you work in my accounting software or yours?",
    a: "Yours. QuickBooks Online, Xero, FreshBooks or NetSuite, under your ownership. When Bench collapsed in December 2024, about 12,000 businesses were locked out of books they didn't own. That can't happen here, structurally.",
  },
  {
    q: "Can you help if I'm months behind?",
    a: "Yes, that's a catch-up project at a discounted rate with a fixed quote before we start. Most catch-ups finish in one to three weeks, and then monthly service keeps the backlog from ever rebuilding.",
  },
  {
    q: "I'm not in the US but sell on US platforms. Can you help?",
    a: "Yes, that's a core practice for us, not an exception. Monthly bookkeeping plus the non-resident compliance stack: Form 5472, pro-forma 1120, W-8 guidance and EIN/ITIN coordination. See the international sellers page.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-block rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-500">
              First month free · No contract · From $229/mo
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Ecommerce bookkeeping that knows what a settlement report is
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Done-for-you books for Amazon, eBay, Shopify, Walmart and Etsy sellers. We rebuild every payout into
              real sales, fees and refunds inside <strong className="text-white">your own QuickBooks or Xero file</strong>,
              closed by the 15th of every month.
            </p>
            <ul className="mt-7 space-y-2.5 text-sm text-slate-300">
              <li>✓ Settlement-accurate revenue, never &ldquo;deposit = sales&rdquo;</li>
              <li>✓ Real COGS on inventory movement, not purchase dates</li>
              <li>✓ You own the file. Leave anytime, keep everything</li>
              <li>✓ US sellers and international sellers on US platforms</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-navy-700 bg-navy-800 p-6 shadow-2xl sm:p-8">
            <p className="text-lg font-bold text-white">Get your free month</p>
            <p className="mb-5 mt-1 text-sm text-slate-400">Exact quote within one business day.</p>
            <LeadForm source="home-hero" dark />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* The problem */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-navy-900">Your deposit is not your revenue</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          A $50,000 Amazon deposit can hide $78,500 in gross sales, $27,000 in fees and $4,000 in refunds. Book the
          deposit as sales, the way generalist bookkeepers do, and your margins are fiction, your 1099-K won&rsquo;t
          match your return, and every decision runs on bad numbers.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          We only do ecommerce. Reading settlement reports is the job.
        </p>
        <Image
          src={pageImage("home-team").src}
          alt={pageImage("home-team").alt}
          width={1600}
          height={900}
          className="mx-auto mt-10 rounded-2xl border border-slate-200 shadow-sm"
        />
      </section>

      {/* Platform cards */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-navy-900">Every channel you sell on, reconciled</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Most firms build for one or two platforms. We treat all of yours as first-class, with per-channel P&L so
            you know where the margin actually is.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PLATFORM_CARDS.map((p) => (
              <Link key={p.href} href={p.href} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-500 hover:shadow-md">
                <p className="font-bold text-navy-900 group-hover:text-brand-600">{p.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.blurb}</p>
                <p className="mt-3 text-xs font-semibold text-brand-600">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy-900">Four promises, in writing</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Each one exists because sellers told us where the last firm failed them.
        </p>
        <div className="mt-10">
          <Guarantees />
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-navy-900">How it works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {s.n}
                </span>
                <p className="mt-2 font-bold text-navy-900">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/pricing/" className="font-semibold text-brand-600 hover:underline">
              See transparent pricing →
            </Link>
          </p>
        </div>
      </section>

      {/* International strip */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600">International sellers</p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900">Selling on US platforms from abroad?</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Foreign-owned single-member LLCs face a $25,000 penalty for one missed Form 5472, and most US
              bookkeepers won&rsquo;t even take non-resident clients. We combine marketplace-grade monthly bookkeeping
              with the full non-resident compliance stack: 5472, pro-forma 1120, W-8 guidance, EIN and ITIN
              coordination.
            </p>
            <Link href="/international-sellers/" className="mt-6 inline-block rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white hover:bg-navy-800">
              Bookkeeping for International Sellers →
            </Link>
          </div>
          <div className="rounded-xl bg-navy-900 p-8 text-white">
            <p className="text-4xl font-bold text-brand-500">$25,000</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              The IRS penalty for a foreign-owned US LLC that misses Form 5472. Per form. Per year. Even with zero US
              tax owed. One seller we studied was hit for $50,000 across two missed years before finding help.
            </p>
          </div>
        </div>
      </section>

      <FaqBlock faqs={HOME_FAQS} />
      <CtaBand source="home-bottom" />
    </>
  );
}

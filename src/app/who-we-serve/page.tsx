import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBand } from "@/components/Sections";

export const metadata: Metadata = {
  title: { absolute: "Who We Serve: Every Platform, Marketplace & Seller Type | eMerchant Books" },
  description:
    "Ecommerce bookkeeping for every seller type: Amazon, Shopify, eBay, Walmart, Etsy, WooCommerce, Square, resellers on Poshmark and Whatnot, refurbishers, content creators and international sellers.",
  alternates: { canonical: "/who-we-serve/" },
  openGraph: {
    title: "Who We Serve | eMerchant Books",
    description:
      "Bookkeeping built per platform: marketplaces, storefronts, recommerce, resellers, content creators, international sellers and DFW locals.",
    url: "/who-we-serve/",
  },
};

type Item = { href: string; anchor: string; desc: string };

const GROUPS: { heading: string; blurb: string; items: Item[] }[] = [
  {
    heading: "Marketplaces",
    blurb:
      "Settlement-level accounting for the big five. Every deposit rebuilt to gross sales, fees and refunds, every 1099-K tied out.",
    items: [
      {
        href: "/amazon-bookkeeping-services/",
        anchor: "Amazon bookkeeping services",
        desc: "FBA fees, reserves, reimbursements and 40+ settlement transaction types, mapped correctly.",
      },
      {
        href: "/shopify-bookkeeping-services/",
        anchor: "Shopify bookkeeping services",
        desc: "Multi-gateway payouts, gift cards and discounts reconciled into one honest P&L.",
      },
      {
        href: "/ebay-bookkeeping-services/",
        anchor: "eBay bookkeeping services",
        desc: "Managed payments rebuilt: final value fees, labels, promoted listings and disputes.",
      },
      {
        href: "/walmart-bookkeeping-services/",
        anchor: "Walmart Marketplace bookkeeping",
        desc: "Walmart settlements and WFS fees, without the copy-pasted Amazon chart of accounts.",
      },
      {
        href: "/etsy-bookkeeping-services/",
        anchor: "Etsy bookkeeping and accounting",
        desc: "The payment-account tangle untangled, plus materials COGS for makers.",
      },
    ],
  },
  {
    heading: "Storefronts",
    blurb:
      "Own your store, own your books. Gateway-by-gateway reconciliation for platforms with no settlement report to lean on.",
    items: [
      {
        href: "/woocommerce-bookkeeping-services/",
        anchor: "WooCommerce bookkeeping services",
        desc: "Stripe, PayPal and Square payouts reconciled to order data, with a QuickBooks setup that stays clean.",
      },
      {
        href: "/square-bookkeeping-services/",
        anchor: "Square bookkeeping services",
        desc: "POS plus online in one file: fees, instant transfers, cash drawers and Square loan repayments booked right.",
      },
      {
        href: "/monthly-ecommerce-bookkeeping/",
        anchor: "BigCommerce and other carts",
        desc: "BigCommerce, Squarespace Commerce and the rest get the same monthly close under our core service.",
      },
    ],
  },
  {
    heading: "Recommerce & Refurbishers",
    blurb:
      "Graded devices, grading disputes, warranty reserves and per-unit COGS. Almost nobody writes about this. We sell on these platforms ourselves.",
    items: [
      {
        href: "/bookkeeping-tips/back-market-reebelo-seller-bookkeeping/",
        anchor: "Back Market and Reebelo seller accounting",
        desc: "The refurbisher's guide: commissions, dispute repricing, warranty tails and per-grade unit costing.",
      },
      {
        href: "/monthly-ecommerce-bookkeeping/",
        anchor: "Monthly bookkeeping for recommerce sellers",
        desc: "Settlement posting for platforms without connectors, plus per-channel P&L across every marketplace.",
      },
    ],
  },
  {
    heading: "Resellers",
    blurb:
      "Poshmark, Mercari, Depop, StockX, GOAT, Whatnot, Facebook Marketplace: one inventory pool, six fee mazes, a stack of 1099-Ks.",
    items: [
      {
        href: "/reseller-bookkeeping-services/",
        anchor: "Reseller bookkeeping services",
        desc: "Sourcing-run COGS, per-platform P&L and 1099-K tie-outs across every resale platform you sell on.",
      },
      {
        href: "/bookkeeping-tips/reseller-taxes-bookkeeping-guide/",
        anchor: "Reseller taxes: the complete guide",
        desc: "1099-K thresholds, hobby vs business, thrift-run COGS and platform-by-platform fee notes.",
      },
      {
        href: "/bookkeeping-tips/ebay-seller-bookkeeping-problems/",
        anchor: "eBay reseller bookkeeping problems",
        desc: "The eleven problems managed payments creates for resellers, with the fix for each.",
      },
    ],
  },
  {
    heading: "Content Creators",
    blurb:
      "OnlyFans, Patreon, YouTube, Twitch, TikTok. Multi-platform income, nothing withheld, and an accountant who won't flinch.",
    items: [
      {
        href: "/content-creator-accounting-services/",
        anchor: "Accounting for content creators",
        desc: "Per-stream income tracking, quarterly estimates, S-corp timing and 1099 tie-outs, judgment-free.",
      },
      {
        href: "/bookkeeping-tips/onlyfans-taxes-bookkeeping-guide/",
        anchor: "OnlyFans taxes and bookkeeping",
        desc: "The 1099-NEC from Fenix, the 20% fee, deductions that hold up, and the S-corp math.",
      },
      {
        href: "/bookkeeping-tips/content-creator-bookkeeping/",
        anchor: "Content creator bookkeeping guide",
        desc: "Every income stream, gifted products, deductions and the mixed-account mess, solved.",
      },
      {
        href: "/bookkeeping-tips/tiktok-shop-seller-bookkeeping/",
        anchor: "TikTok Shop bookkeeping",
        desc: "Creator commissions, settlement lag and fee changes for creators who also sell products.",
      },
    ],
  },
  {
    heading: "International Sellers",
    blurb:
      "Non-US residents selling on US platforms through US LLCs. Most firms won't take you. This is a core practice for us.",
    items: [
      {
        href: "/international-sellers/",
        anchor: "Bookkeeping for international sellers",
        desc: "Marketplace-grade monthly books plus the full non-resident compliance stack, from a US team.",
      },
      {
        href: "/bookkeeping-tips/form-5472-foreign-owned-llc-guide/",
        anchor: "Form 5472 for foreign-owned LLCs",
        desc: "The $25,000-penalty form every foreign owner of a US LLC must know, explained.",
      },
    ],
  },
  {
    heading: "Local: Dallas–Fort Worth",
    blurb:
      "A real DFW practice, not a distributed brand with a local landing page. Meet us in person if you want to.",
    items: [
      {
        href: "/ecommerce-accountant-dallas/",
        anchor: "Ecommerce accountant in Dallas",
        desc: "Local ecommerce accounting for DFW sellers, with the same specialist depth as our national work.",
      },
    ],
  },
];

export default function WhoWeServe() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/who-we-serve/", label: "Who We Serve" }]} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Every platform, first-class</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight text-navy-900">
          Who we serve: bookkeeping built per platform, not copy-pasted across them
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
          Most ecommerce accounting firms build for Shopify and Amazon and treat everything else as an edge case.
          We treat every channel as a first-class citizen, because each one nets its fees differently, settles on
          its own schedule, and breaks books in its own way. Find yours below.
        </p>

        <div className="mt-12 space-y-14">
          {GROUPS.map((g) => (
            <div key={g.heading}>
              <h2 className="text-2xl font-bold text-navy-900">{g.heading}</h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">{g.blurb}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((item) => (
                  <Link
                    key={`${g.heading}-${item.href}`}
                    href={item.href}
                    className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-500 hover:shadow-md"
                  >
                    <p className="font-semibold text-navy-900 group-hover:text-brand-600">{item.anchor}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-slate-50 p-6">
          <p className="font-semibold text-navy-900">Don&rsquo;t see your platform?</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
            We've reconciled channels most bookkeepers have never heard of. If it has payouts and fees, we can build
            the settlement discipline for it. <Link href="/contact/" className="font-medium text-brand-600 hover:underline">Tell us what you sell on</Link>{" "}
            or check our <Link href="/pricing/" className="font-medium text-brand-600 hover:underline">published pricing</Link>.
          </p>
        </div>
      </section>

      <CtaBand
        source="who-we-serve-bottom"
        heading="Whatever you sell on, start with the free teardown"
        sub="We rebuild your most recent month properly, every platform included, and send you a 10-minute video of what we found. No card, and you keep everything either way."
      />
    </>
  );
}

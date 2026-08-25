import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { CtaBand, FaqBlock, Guarantees, TrustBar } from "@/components/Sections";
import { pageImage } from "@/content/images";
import { og } from "@/lib/og";

const TITLE = "Ecommerce Accounting for $100K+/mo Sellers | eMerchant Books";
const DESCRIPTION =
  "The ecommerce accounting firm for Amazon, Shopify and multi-channel brands doing $100K+ a month. Exit-grade accrual books, closed by day 10.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: og(TITLE, DESCRIPTION, "/", pageImage("home")),
};

const PLATFORM_CARDS = [
  { href: "/amazon-bookkeeping-services/", name: "Amazon", blurb: "Settlement reports, FBA fees, reserves and reimbursements, mapped properly." },
  { href: "/shopify-bookkeeping-services/", name: "Shopify", blurb: "Multi-gateway payouts, gift cards and COGS without connector chaos." },
  { href: "/ebay-bookkeeping-services/", name: "eBay", blurb: "Managed payments rebuilt to gross, labels and promoted listings tracked." },
  { href: "/walmart-bookkeeping-services/", name: "Walmart", blurb: "WFS fees and settlements reconciled, channel margins you can compare." },
  { href: "/etsy-bookkeeping-services/", name: "Etsy", blurb: "Payment account untangled, every channel held to the same standard." },
];

const PILLARS = [
  {
    title: "Accounting",
    body: "Accrual books with true landed-cost COGS, tariffs capitalized correctly, channel-level P&L, closed by the 10th business day. Guaranteed in writing, or the month is 50% off.",
    href: "/monthly-ecommerce-bookkeeping/",
    cta: "Monthly accounting",
  },
  {
    title: "Controller & Exit Prep",
    body: "SKU and contribution-margin truth, 13-week cash-flow forecasts, lender-ready reporting packs, and a maintained addback schedule so your books are diligence-passable at any moment.",
    href: "/ecommerce-tax-services/",
    cta: "Finance & tax services",
  },
  {
    title: "Integrations & Ops Engineering",
    body: "The pillar no accounting firm has: we build custom integrations, workflow automation and ops tooling. ERP to 3PL to marketplace glue, custom reporting, the software your ops team keeps wishing existed.",
    href: "/custom-integrations/",
    cta: "Custom integrations",
  },
];

const STEPS = [
  { n: "1", title: "Diligence Readiness Assessment", body: "The front door: $2,500, ten business days. We score your books against a 40-point buyer-and-lender checklist and quantify the gap in dollars. Credited in full against onboarding." },
  { n: "2", title: "Fix what it found", body: "Accrual conversion, COGS rebuild, catch-up, chart restructure. Fixed quote, no hourly meter, done in your own QuickBooks, Xero or NetSuite file." },
  { n: "3", title: "Closed by day 10, every month", body: "Reconciled channels, real margins, a close memo, and answers from your accountant over text or WhatsApp. If a buyer or lender calls, your books are ready." },
];

const HOME_FAQS = [
  {
    q: "Who is eMerchant Books for?",
    a: "Ecommerce sellers doing $100K+ a month on Amazon, Shopify, eBay, Walmart, Etsy or a mix. Our process is built for the complexity that starts at seven figures: multi-channel settlements, inventory financing, real landed-cost COGS, and books that survive lender or buyer diligence. Under $100K/mo, we'll point you to a vetted starter bookkeeper and a free close checklist, and take over when you cross the line.",
  },
  {
    q: "What does it cost?",
    a: "Foundation (accounting) from $1,250/mo for brands doing $100K-$250K a month. Command (plus controller work) from $3,500/mo for $250K-$850K/mo. Exit-Grade (plus senior-controller exit preparation) from $7,500/mo. The full rate card is public on our pricing page. We're the only ecommerce-exclusive firm that publishes pricing; everyone else makes you book a call to hear a number.",
  },
  {
    q: "What is the Diligence Readiness Assessment?",
    a: "A $2,500, ten-business-day audit of your books against the 40 points buyers and lenders actually check: accrual COGS, addback provability, working-capital schedules, channel P&L, 1099-K reconciliation. You get a scored report and the dollar cost of each gap. The fee is credited in full if you onboard. Sellers with messy books lose $50,000 to $500,000 at exit; the assessment is how you find out before a buyer does.",
  },
  {
    q: "Do you work in my accounting software or yours?",
    a: "Yours. QuickBooks Online, Xero or NetSuite, under your ownership. When Bench collapsed, about 12,000 businesses were locked out of books they didn't own. That can't happen here, structurally.",
  },
  {
    q: "Why does the day-10 close guarantee matter?",
    a: "Because late books are the #1 reason sellers fire accounting firms: financing falls through and decisions run on stale numbers. The strongest promise any competitor makes is 'books by the 10th' as a feature of their top tier. Ours is a written guarantee on every tier: miss the 10th business day and that month is half price.",
  },
  {
    q: "Can you also build custom integrations and automation?",
    a: "Yes, and no other accounting firm can. We build custom integrations, workflow automations and ops tooling: connecting your ERP, 3PL, marketplaces and internal systems, custom reporting, and the operational glue software vendors don't sell. Accounting tells you what happened; our engineering work fixes the process that made it happen.",
  },
  {
    q: "What is the best ecommerce bookkeeping service?",
    a: "The best ecommerce bookkeeping service is a specialist that works only with online sellers, does real accrual inventory accounting, and leaves you owning your own file. Judge any firm on four points: settlement-level marketplace reconciliation, true landed-cost COGS, a guaranteed close date, and published pricing. We built eMerchant Books to win on all four, and we're the only ecommerce-exclusive firm that puts its rate card on the site so you can verify.",
  },
  {
    q: "How much do ecommerce bookkeeping services cost?",
    a: "Across the industry, specialist ecommerce bookkeeping runs $500 to $15,000 a month depending on revenue and channel count. Our published tiers: Foundation from $1,250/mo for $100K-$250K/mo brands, Command from $3,500/mo, Exit-Grade from $7,500/mo. Smaller sellers start at $149/mo on Books Lite. Be wary of quotes under $400/mo for a seven-figure brand; at that price nobody is reconciling settlements.",
  },
  {
    q: "Do I need an accountant for my online business?",
    a: "Once you hold inventory or sell on more than one channel, yes. Marketplace deposits aren't revenue, cash-basis books misstate any business with inventory, and the IRS computer-matches your 1099-Ks against what you file. Under about $25K a month, software plus a quarterly review can carry you. Past $100K a month, the cost of DIY errors is usually a multiple of a specialist's fee.",
  },
  {
    q: "What's the difference between a bookkeeper and an accountant for ecommerce?",
    a: "A bookkeeper records and reconciles the monthly transactions; an accountant interprets them, builds accrual adjustments and financial statements, and a CPA files taxes from the result. In ecommerce the line blurs, because the recording itself takes judgment: settlement rebuilds and landed-cost COGS are accounting work, not data entry. We staff both roles on every engagement and coordinate with your CPA at year end.",
  },
  {
    q: "Can you catch up my books if I'm behind?",
    a: "Yes. Catch-up bookkeeping is a standard project here: months or years rebuilt from bank feeds, settlement reports and platform exports, quoted flat and in writing before we start, at a discount to monthly rates. Most catch-ups finish in one to three weeks. Then monthly service takes over so you never fall behind again.",
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
              $100K+/mo brands only · Published pricing · Day-10 close guarantee
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              The ecommerce accounting firm for $100K+/mo sellers
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Exit-grade accrual books, true landed-cost COGS and channel-level P&L for established Amazon, Shopify
              and multi-channel brands, in <strong className="text-white">your own QuickBooks, Xero or NetSuite
              file</strong>, closed by the 10th business day. Guaranteed in writing.
            </p>
            <ul className="mt-7 space-y-2.5 text-sm text-slate-300">
              <li>✓ Books that pass buyer and lender diligence, any month</li>
              <li>✓ Tariffs capitalized into landed cost, not buried in opex</li>
              <li>✓ You own the file. Leave anytime, keep everything</li>
              <li>✓ Plus custom integrations and ops engineering no CPA firm offers</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-navy-700 bg-navy-800 p-6 shadow-2xl sm:p-8">
            <p className="text-lg font-bold text-white">Talk to the firm</p>
            <p className="mb-5 mt-1 text-sm text-slate-400">Tell us your channels and revenue. A partner replies within one business day.</p>
            <LeadForm source="home-hero" dark />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* The problem */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-navy-900">At $100K+ a month, average books get expensive</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          A 2% COGS error on $3M in sales is $60,000 of fiction in your margins. Working capital overstated by the
          typical 20 to 40% comes out of your sale price dollar for dollar. And buyers walk away from a third of
          deals over financial-operations problems the seller didn&rsquo;t know they had.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          We keep your books at the standard buyers, lenders and your own decisions deserve. That&rsquo;s the whole firm.
        </p>
        <Image
          src={pageImage("home-team").src}
          alt={pageImage("home-team").alt}
          width={1600}
          height={900}
          className="mx-auto mt-10 rounded-2xl border border-slate-200 shadow-sm"
        />
      </section>

      {/* Three pillars */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-navy-900">Three things, done properly</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xl font-bold text-navy-900">{p.title}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.body}</p>
                <Link href={p.href} className="mt-5 text-sm font-semibold text-brand-600 hover:underline">
                  {p.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform cards */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy-900">Every channel you sell on, reconciled</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Settlement-level accounting on all of it, with per-channel P&L so you know where the margin actually is.
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
      </section>

      {/* Guarantees */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-navy-900">Four promises, in writing</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Each one exists because established sellers told us where the last firm failed them.
          </p>
          <div className="mt-10">
            <Guarantees />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy-900">How engagements start</h2>
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
            See the full published rate card →
          </Link>
        </p>
      </section>

      {/* International strip */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600">International sellers</p>
              <h2 className="mt-2 text-3xl font-bold text-navy-900">Running a $100K+/mo US operation from abroad?</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Foreign-owned single-member LLCs face a $25,000 penalty for one missed Form 5472, and most US firms
                won&rsquo;t take non-resident clients at all. We pair the same exit-grade marketplace accounting with
                the full non-resident compliance stack: 5472, pro-forma 1120, W-8 guidance, EIN and ITIN coordination.
              </p>
              <Link href="/international-sellers/" className="mt-6 inline-block rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white hover:bg-navy-800">
                Accounting for International Sellers →
              </Link>
            </div>
            <div className="rounded-xl bg-navy-900 p-8 text-white">
              <p className="text-4xl font-bold text-brand-500">$25,000</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                The IRS penalty for a foreign-owned US LLC that misses Form 5472. Per form. Per year. Even with zero
                US tax owed. One seller we studied was hit for $50,000 across two missed years before finding help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqBlock faqs={HOME_FAQS} />
      <CtaBand source="home-bottom" />
    </>
  );
}

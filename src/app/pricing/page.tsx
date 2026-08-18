import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBand, FaqBlock } from "@/components/Sections";
import PriceCalculator from "@/components/PriceCalculator";
import { pageImage } from "@/content/images";
import { og } from "@/lib/og";

const TITLE = "Published Pricing for $100K+/mo Ecommerce Brands | eMerchant Books";
const DESCRIPTION =
  "The only ecommerce-exclusive accounting firm with published pricing. Foundation $1,250/mo, Command $3,500/mo, Exit-Grade $7,500/mo. $100K+/mo revenue required.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/pricing/" },
  openGraph: og(TITLE, DESCRIPTION, "/pricing/", pageImage("pricing")),
};

const TIERS = [
  {
    name: "Foundation",
    price: "$1,250",
    for: "$100K-$250K/mo revenue · accounting",
    features: [
      "Accrual books, true landed-cost COGS",
      "Tariffs capitalized per ASC 330, not buried in opex",
      "Channel-level P&L, every marketplace reconciled",
      "Closed by day 10: or that month is 50% off",
      "Monthly close memo + video walkthrough",
      "Dual-track: accrual books, cash-basis tax where allowed",
      "Sales tax nexus monitoring (filings +$150/state/mo)",
      "Your QuickBooks or Xero file, owned by you",
    ],
    fineprint: "+$250/mo per channel beyond 3 · multi-entity +40%",
    highlight: false,
  },
  {
    name: "Command",
    price: "$3,500",
    for: "$250K-$850K/mo revenue · + controller",
    features: [
      "Everything in Foundation",
      "Controller review on every close",
      "SKU + contribution-margin reporting (CM2/CM3 by channel)",
      "13-week cash-flow forecast, maintained",
      "Inventory, AP and AR aging schedules",
      "Lender-ready reporting pack",
      "Quarterly strategy call",
    ],
    fineprint: "Inventory financing and 3PL complexity welcome",
    highlight: true,
  },
  {
    name: "Exit-Grade",
    price: "$7,500",
    for: "$850K+/mo or selling within 36 months · + exit prep",
    features: [
      "Everything in Command",
      "Senior controller: monthly executive review of your numbers",
      "Budget vs actual + NWC management",
      "Maintained addback schedule",
      "Annual data-room refresh",
      "Buyer, broker and lender liaison",
      "Diligence-passable at any moment, as a standard",
      "NetSuite fully supported",
    ],
    fineprint: "For brands where the books ARE the valuation",
    highlight: false,
  },
];

const FAQS = [
  {
    q: "Why do you require $100K+ a month in revenue?",
    a: "Because our process, accrual inventory accounting, landed-cost COGS, channel-level closes, controller review, is built for operating complexity that doesn't exist below seven figures, and diluting it downmarket would make us worse at the job you'd hire us for. Under $100K/mo: take our free close checklist, use a vetted starter bookkeeper we can introduce you to, and come back when you cross the line. We never fire existing clients for a soft quarter; the gate applies at intake, on your recent monthly run rate.",
  },
  {
    q: "What is the Diligence Readiness Assessment?",
    a: "The usual way engagements start: $2,500, ten business days. We score your books against a 40-point checklist of what buyers and lenders actually verify (accrual COGS, addback provability, NWC schedules, channel P&L, 1099-K ties) and quantify each gap in dollars. The fee is credited in full against onboarding. Context: a buyer-side QoE runs $25,000 to $50,000, and unprepared books routinely cost sellers $50,000 to $500,000 at exit.",
  },
  {
    q: "Why is your pricing public when every competitor's is hidden?",
    a: "Because hidden pricing is a tax on your time, and sellers know it: quote-only firms get described as 'overcharging' in every seller forum. Publishing the rate card pre-qualifies both sides. The number you see is the number, adjusted only for the fine print listed on each tier.",
  },
  {
    q: "What's not included?",
    a: "Tax return filing (we prepare tax-ready books and coordinate with a CPA, yours or one from our partner network), sales tax filing subscriptions, your accounting software license, and catch-up projects for existing backlogs, which are quoted flat at a discount before we start. Custom integrations and ops engineering are scoped separately. No surprise 'complexity fees' ever appear mid-engagement.",
  },
  {
    q: "How does the day-10 guarantee actually work?",
    a: "Your prior month's reconciled P&L, balance sheet and cash flow are delivered by the 10th business day. If we miss it for any reason that isn't missing information we've chased in writing, that month's fee is 50% off, automatically. No competitor guarantees a close date at all.",
  },
  {
    q: "Do I have to sign an annual contract?",
    a: "No. Month-to-month, 30 days' notice, and your file leaves with you fully intact because it was always yours. Annual prepayment traps are how firms with bad service keep clients.",
  },
  {
    q: "How much does an ecommerce bookkeeper cost per month?",
    a: "For brands past $100K a month, expect $1,000 to $15,000 a month across the specialist market, depending on channels and complexity. Our card: Foundation $1,250/mo, Command $3,500/mo, Exit-Grade $7,500/mo, each with the adjustments printed on the tier. Smaller sellers pay $149 to $249/mo on Books Lite. A quote far below those bands usually means categorized deposits, not reconciled settlements.",
  },
  {
    q: "Is outsourced ecommerce accounting worth the price?",
    a: "For sellers past $100K a month, almost always. A single 2% COGS error on $3M of revenue is $60,000 of fictional margin, and unprepared books cost sellers $50,000 to $500,000 at exit. Set against $15,000 to $42,000 a year in fees, the math isn't close. Under that size, start with Books Lite or a good starter bookkeeper and graduate up.",
  },
  {
    q: "Are there setup or onboarding fees?",
    a: "No separate setup fee. Most engagements start with the $2,500 Diligence Readiness Assessment, and that fee is credited in full against onboarding, so the assessment effectively costs nothing if you join. If your books need catch-up work or an accrual conversion first, that project is quoted flat, in writing, before anything begins.",
  },
  {
    q: "Can I change tiers as my revenue changes?",
    a: "Yes, at any month boundary. Brands usually enter at Foundation, move to Command when contribution-margin reporting and cash-flow forecasting start to matter, and step up to Exit-Grade when a sale is within 36 months. Moving down works the same way. Everything is month-to-month, so a tier change is an email, not a renegotiation.",
  },
];

export default function Pricing() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/pricing/", label: "Pricing" }]} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900">Published pricing. Yes, really.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We&rsquo;re the only ecommerce-exclusive accounting firm that puts its rate card on the website. Every
            tier is month-to-month, works in your own QuickBooks, Xero or NetSuite file, and carries the day-10
            close guarantee.
          </p>
          <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-navy-800 bg-navy-900 p-5 text-left">
            <p className="text-sm font-bold text-white">Our specialist practice serves sellers doing $100K+ a month.</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
              Smaller operation? You&rsquo;re not turned away: Books Lite ($149/mo, first month free) and our DFW
              full-service practice cover every earlier stage, and you graduate into the specialist tiers as you
              grow. Every plan below shows its real price.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <PriceCalculator />
        </div>

        <h2 className="mt-14 text-center text-2xl font-bold text-navy-900">Specialist ecommerce tiers ($100K+/mo)</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                t.highlight ? "border-brand-500 bg-white shadow-xl ring-2 ring-brand-500/20" : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">
                  Most common
                </span>
              )}
              <p className="font-bold text-navy-900">{t.name}</p>
              <p className="mt-3 text-4xl font-bold text-navy-900">
                {t.price}
                <span className="text-base font-medium text-slate-500">/mo from</span>
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
              <p className="mt-4 text-xs text-slate-500">{t.fineprint}</p>
              <Link
                href="/contact/"
                className={`mt-5 rounded-lg px-4 py-3 text-center text-sm font-bold ${
                  t.highlight ? "bg-brand-500 text-white hover:bg-brand-600" : "bg-navy-900 text-white hover:bg-navy-800"
                }`}
              >
                Start With the Assessment
              </Link>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-center text-2xl font-bold text-navy-900">Plans for every earlier stage</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
          Same discipline, right-sized. AI does the entry work; a named accountant reviews and signs every close.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { name: "DIY + Review", price: "$99/qtr", who: "You keep your own QuickBooks", items: ["Quarterly review, fixes and certification of your file", "Written punch list of what to change", "Priority upgrade path when you outgrow DIY"], offer: "First review half price" },
            { name: "Books Lite", price: "$149-249/mo", who: "Simple businesses under $25K/mo", items: ["AI-automated feeds + human-reviewed monthly close", "P&L and balance sheet with a 3-minute video summary", "Year-end tax-ready package and 1099s"], offer: "First month free, no card" },
            { name: "Local Full-Service (DFW)", price: "$299-1,200/mo", who: "Dallas-Fort Worth businesses, POS and brick-and-mortar welcome", items: ["A/P, A/R, payroll coordination, sales tax filings", "POS-to-QuickBooks data flow, organized A to Z", "We move you free: 3 months of catch-up + handled handoff"], offer: "Free 30-day trial + 90-day money-back guarantee" },
            { name: "International Starter", price: "$499/mo", who: "Non-US sellers entering US platforms", items: ["US bookkeeping + sales-tax registrations and filings", "Form 5472 / pro-forma 1120 coordination", "Graduates into specialist tiers as you scale"], offer: "Free 20-min US Launch Compliance Check" },
          ].map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-bold text-navy-900">{t.name}</p>
              <p className="mt-1 text-2xl font-bold text-navy-900">{t.price}</p>
              <p className="mt-1 text-xs text-slate-500">{t.who}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-700">
                {t.items.map((f) => (
                  <li key={f} className="flex items-start gap-2"><span className="mt-0.5 text-brand-500" aria-hidden>✓</span>{f}</li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">{t.offer}</p>
              <Link href="/contact/" className="mt-4 rounded-lg bg-navy-900 px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-navy-800">Start Here</Link>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-brand-500/40 bg-brand-50 p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-lg font-bold text-navy-900">Diligence Readiness Assessment: $2,500</p>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">
                Ten business days. Your books scored against the 40 points buyers and lenders actually check, with
                every gap quantified in dollars. Credited in full against onboarding.
              </p>
            </div>
            <Link href="/contact/" className="rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white hover:bg-navy-800">
              Book the Assessment
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
          <p>
            <strong className="text-navy-900">Market context:</strong> comparable specialist firms charge $1,500 to
            $15,000/mo for these bands, quoted only after a sales call. Custom integrations and ops-engineering work
            is scoped per project alongside any tier.
          </p>
        </div>
      </section>

      <FaqBlock faqs={FAQS} title="Pricing FAQs" />
      <CtaBand source="pricing-bottom" heading="Not sure which tier fits?" sub="Tell us your channels and monthly revenue. A partner answers with a specific recommendation, not a sales sequence, within one business day." />
    </>
  );
}

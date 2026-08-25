import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, FaqBlock } from "@/components/Sections";
import { og } from "@/lib/og";

const DESCRIPTION =
  "The exact 27 checks our accountants run on every new client's books: unclaimed FBA reimbursements, COGS errors, fee creep, sales tax overpayments. Free.";

export const metadata: Metadata = {
  title: "27-Point Money Leak Checklist (Free)",
  description: DESCRIPTION,
  alternates: { canonical: "/money-leak-checklist/" },
  openGraph: og("The 27-Point Ecommerce Money Leak Checklist | eMerchant Books", DESCRIPTION, "/money-leak-checklist/"),
};

const SECTIONS: { title: string; why: string; items: string[] }[] = [
  {
    title: "Marketplace money they owe you",
    why: "Amazon and Walmart lose, damage and mis-handle inventory constantly. Reimbursement is your money; unclaimed, it expires.",
    items: [
      "Pull the FBA inventory adjustments report: any lost or damaged units without a matching reimbursement in the last 18 months?",
      "Check reimbursements against your own claim log: were any auto-reimbursed at below your actual cost?",
      "Refunded orders where the buyer never returned the item past the 45-day window: was the refund reversed?",
      "Removal orders: did every removed unit actually arrive back?",
      "Chargebacks and A-to-Z claims: were any debited twice, once by the claim and once by a refund?",
    ],
  },
  {
    title: "Fee creep",
    why: "Platforms change fee schedules quietly. Sellers who never audit fees fund those changes.",
    items: [
      "Spot-check 10 SKUs: does the referral fee % Amazon charged match the published rate for that category?",
      "FBA fees: measure and re-verify the size tier of your 5 highest-volume SKUs (mis-measurement is common and refundable)",
      "Storage fees: any SKU quietly crossing into long-term storage that should be removed or repriced?",
      "Are you paying for marketplace subscriptions, tools or software seats nobody uses anymore?",
      "Payment processing: is your blended rate on direct channels above 3%? That's negotiable.",
    ],
  },
  {
    title: "COGS and inventory truth",
    why: "The most expensive section. COGS errors silently misprice every product you sell.",
    items: [
      "Is inventory purchased this quarter sitting in COGS instead of on the balance sheet?",
      "Do your COGS include inbound freight and duties (landed cost), or just the supplier invoice?",
      "Tariffs paid in 2025-2026: expensed when paid, or capitalized into inventory the way lenders and buyers expect?",
      "Pick your best-selling SKU: can you state its true landed cost within 5%? Now check what the books say.",
      "Shrinkage: when did you last reconcile system inventory to a physical or FBA count?",
    ],
  },
  {
    title: "Revenue and settlement accuracy",
    why: "If deposits are booked as revenue, everything downstream is fiction, including your tax return.",
    items: [
      "Does gross revenue in your books tie to your 1099-K within rounding distance? (The IRS checks this by computer.)",
      "Are refunds shown separately from sales, or netted invisibly?",
      "Is sales tax collected sitting in a liability account, or inflating your revenue?",
      "Gift cards sold but not redeemed: revenue (wrong) or liability (right)?",
      "Do the last 3 marketplace settlements reconcile to the penny against payouts received?",
    ],
  },
  {
    title: "Sales tax and compliance leaks",
    why: "Both directions leak: exposure you don't know about, and tax you're paying that you don't owe.",
    items: [
      "Are you registered anywhere marketplace facilitator laws already cover, filing returns you may not need?",
      "Direct-channel (Shopify) sales: any state where you've crossed economic nexus without registering?",
      "Foreign-owned LLC: was Form 5472 filed every year? (Penalty: $25,000 per missed year.)",
      "Are quarterly estimated taxes based on real profit, or last year's guess?",
    ],
  },
  {
    title: "Cash flow blind spots",
    why: "Profitable sellers die of cash flow. These three checks are the early-warning system.",
    items: [
      "Reserves: how much of 'your' money is Amazon currently holding, and is it in your cash forecast?",
      "Can you state contribution margin per channel within 60 seconds? If not, which channel is quietly unprofitable?",
      "Inventory buys for Q4: funded from margin, or from money that was meant for taxes?",
    ],
  },
];

const CHECKLIST_FAQS = [
  {
    q: "How do I find errors in my books?",
    a: "Work this checklist top to bottom with your accounting file open. The fastest single check: tie your books' gross revenue to your 1099-Ks. If they don't match within rounding, deposits are being booked as revenue, and every number downstream of that is wrong. After that, spot-check fees on ten SKUs and confirm inventory bought this quarter isn't sitting in COGS.",
  },
  {
    q: "How much money do sellers lose to bookkeeping errors?",
    a: "More than the bookkeeping would cost, usually by a wide margin. A 2% COGS error on $3M in sales is $60,000 of misstated margin. Unclaimed FBA reimbursements typically run 1-3% of revenue. And at exit, unprepared books cost sellers $50,000 to $500,000 off the price. Most new clients find their first four-figure leak in section one of this list.",
  },
  {
    q: "What's the most common bookkeeping mistake ecommerce sellers make?",
    a: "Booking marketplace deposits as revenue. A deposit is gross sales minus fees, refunds and reserves, so booking it as income understates revenue and hides your fees entirely. It also breaks the 1099-K match the IRS runs by computer. Nearly every generalist-kept file we audit has this error, and it's the first thing we fix.",
  },
  {
    q: "How often should I audit my ecommerce books for leaks?",
    a: "Run the full 27 points quarterly, and three of them monthly: settlement-to-payout reconciliation, the running 1099-K tie, and reimbursement claims, because Amazon's claim windows expire. If your books close by the 10th every month, most of this happens automatically and the checklist becomes verification instead of discovery.",
  },
];

export default function Checklist() {
  return (
    <>
      <section className="bg-navy-900 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-500">Free tool · keep it forever</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white">The 27-Point Ecommerce Money Leak Checklist</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            The exact checks our accountants run in week one on every new client&rsquo;s books. Print it, work
            through it with your own file open, and total up what you find. Most sellers find their first leak in
            section one.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {SECTIONS.map((s, i) => (
          <div key={s.title} className="mb-10">
            <h2 className="text-2xl font-bold text-navy-900">{i + 1}. {s.title}</h2>
            <p className="mt-2 text-sm italic text-slate-500">{s.why}</p>
            <ul className="mt-4 space-y-3">
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700">
                  <span className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border-2 border-brand-500" aria-hidden />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-2xl border border-brand-500/40 bg-brand-50 p-7">
          <h2 className="text-2xl font-bold text-navy-900">Found something? That's the point.</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            Every item on this list is a symptom of the same root cause: books built by generalists. Here&rsquo;s
            the fastest fix, and it costs you nothing to see it:
          </p>
          <div className="mt-5 rounded-xl bg-white p-6">
            <p className="font-bold text-navy-900">The Free Ecommerce Books Teardown</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>✓ We rebuild your most recent month of books properly ($1,250 value)</li>
              <li>✓ A 10-minute recorded video walking through every leak we find, with dollar figures ($500 value)</li>
              <li>✓ Your 27-point score, done by us instead of you</li>
              <li>✓ You keep all of it, even if we never speak again</li>
            </ul>
            <p className="mt-4 text-sm font-semibold text-slate-700">
              No card. No contract. If we don&rsquo;t find money or errors worth multiples of our fee, you&rsquo;ll
              know your books are genuinely clean, which is worth knowing before a lender or buyer checks.
            </p>
            <Link href="/contact/" className="mt-5 inline-block rounded-lg bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600">
              Claim My Free Teardown
            </Link>
          </div>
        </div>
      </section>

      <FaqBlock faqs={CHECKLIST_FAQS} title="Money leak questions, answered" />

      <CtaBand source="checklist-bottom" />
    </>
  );
}

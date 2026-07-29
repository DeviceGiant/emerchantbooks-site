import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, FaqBlock } from "@/components/Sections";

export const metadata: Metadata = {
  title: "FAQ — Ecommerce Bookkeeping Questions Answered",
  description:
    "Straight answers on pricing, software, catch-up work, sales tax, international sellers and how our ecommerce bookkeeping service works.",
  alternates: { canonical: "/faq/" },
};

const FAQS = [
  {
    q: "What exactly do I get every month?",
    a: "Reconciled books across every channel, settlement-accurate revenue and fees, true landed-cost COGS, a P&L, balance sheet and cash flow statement delivered by the 10th business day (guaranteed in writing), a monthly close memo, and an accountant you can text.",
  },
  {
    q: "How much does it cost?",
    a: "Foundation starts at $1,250/mo ($1M-$3M brands), Command at $3,500/mo ($3M-$10M, adds controller work), Exit-Grade at $7,500/mo (adds fractional CFO). The full rate card is public on our pricing page, which no other ecommerce-exclusive firm offers. Most engagements start with the $2,500 Diligence Readiness Assessment, credited against onboarding.",
  },
  {
    q: "Which platforms do you support?",
    a: "Amazon (FBA, FBM, multi-marketplace), Shopify, eBay, Walmart, Etsy, TikTok Shop and WooCommerce, plus Stripe, PayPal and Square on the payments side. Multi-channel consolidation with per-channel P&L is the standard setup.",
  },
  {
    q: "Which accounting software do you work in?",
    a: "QuickBooks Online, Xero, FreshBooks and NetSuite, always in your subscription under your ownership, with A2X or Link My Books handling marketplace settlement data.",
  },
  {
    q: "Do you replace my CPA?",
    a: "No, we make your CPA's job easy. We deliver tax-ready books and coordinate directly with them at year end. If you don't have a CPA, we'll introduce you to one from our partner network who knows ecommerce.",
  },
  {
    q: "I'm months (or years) behind. Can you fix that?",
    a: "Yes. Catch-up projects are quoted flat, billed at a discount to monthly rates, and most finish in one to three weeks. Then monthly service keeps it from happening again.",
  },
  {
    q: "Do you work with sellers outside the US?",
    a: "Yes, it's a core practice. Non-resident owners of US LLCs get the same marketplace bookkeeping plus Form 5472/1120 coordination, W-8 guidance and EIN/ITIN help. See the international sellers page.",
  },
  {
    q: "Cash or accrual accounting?",
    a: "Accrual with real inventory accounting, because cash-basis books misstate any business that holds inventory. If you've been on cash basis, we handle the transition.",
  },
  {
    q: "How do you handle sales tax?",
    a: "Collected tax is tracked as a liability, never revenue. Marketplace facilitator laws mean Amazon and Walmart remit most marketplace sales tax; for direct channels we flag nexus exposure and coordinate with filing tools like TaxJar or Avalara or your filing provider.",
  },
  {
    q: "What happens if I cancel?",
    a: "You give 30 days' notice and keep everything: the QuickBooks or Xero file is yours, the history is yours, the attachments are yours. No exit fees, no data hostage situation, because we never held your data to begin with.",
  },
  {
    q: "How is my data kept secure?",
    a: "Bank and platform connections run through read-only feeds and official integrations; we never hold your banking credentials. Access is least-privilege accountant access you grant and can revoke anytime.",
  },
  {
    q: "Who does the actual work?",
    a: "A dedicated bookkeeper who only works on ecommerce clients, with review by a senior. You get their direct line, and you'll notice the difference the first time you ask a question about a settlement report and get a real answer.",
  },
];

export default function Faq() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/faq/", label: "FAQ" }]} />
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
        <h1 className="text-center text-4xl font-bold text-navy-900">Frequently asked questions</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          Straight answers. If yours isn&rsquo;t here, call us at (469) 294-1807 and a bookkeeper (not a sales rep) picks up.
        </p>
      </section>
      <FaqBlock faqs={FAQS} title="" />
      <CtaBand source="faq-bottom" />
    </>
  );
}

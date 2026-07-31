import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, FaqBlock } from "@/components/Sections";

export const metadata: Metadata = {
  title: "FAQ ,  Ecommerce Bookkeeping Questions Answered",
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
    a: "Foundation starts at $1,250/mo ($100K-$250K/mo brands), Command at $3,500/mo ($250K-$850K/mo, adds controller work), Exit-Grade at $7,500/mo (adds senior-controller exit preparation). The full rate card is public on our pricing page, which no other ecommerce-exclusive firm offers. Most engagements start with the $2,500 Diligence Readiness Assessment, credited against onboarding.",
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
  {
    q: "How do I switch bookkeepers without losing my history?",
    a: "Grant us access and we handle the rest: we review the existing file, take it over (or rebuild it if it's unusable), collect statements and platform access, and map the chart of accounts to ecommerce reality. You don't have to confront your current bookkeeper until we've verified everything transfers cleanly. Most switches finish in two to three weeks, and your history stays intact because the file is yours.",
  },
  {
    q: "Is outsourced bookkeeping worth it for an ecommerce business?",
    a: "If you hold inventory or sell on multiple channels, yes, and usually earlier than sellers think. Owners who keep their own books tend to misstate COGS, book deposits as revenue and overpay at tax time; any one of those errors typically costs more than a year of service. The honest comparison isn't outsourcing versus free. It's outsourcing versus your hours plus your error rate.",
  },
  {
    q: "Should I hire a virtual bookkeeper or a local one?",
    a: "Hire for ecommerce expertise first, location second. A virtual bookkeeper who understands settlement reports beats a local generalist who doesn't, every time. We happen to be both: the work runs in the cloud for sellers nationwide, and DFW clients can meet us in person in Plano. What matters is that the person doing your books knows your platforms, not their zip code.",
  },
  {
    q: "How long does onboarding take?",
    a: "Two to three weeks for most sellers: access granted in the first few days, chart of accounts and settlement mapping in week one, then the first close run in parallel with your old process. If catch-up work is needed, it runs first and is quoted flat. Your first guaranteed day-10 close lands on the first full month after onboarding wraps.",
  },
  {
    q: "Can I try the service before I commit?",
    a: "Yes. The Free Ecommerce Books Teardown rebuilds your most recent month properly and sends you a 10-minute recorded video of every error and margin leak we found, no card required. You keep the work either way. It's a better test than any sales call, because you see actual work done on your actual books.",
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

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs, CtaBand, FaqBlock, Guarantees } from "@/components/Sections";
import { SITE } from "@/lib/site";
import { pageImage } from "@/content/images";

export const metadata: Metadata = {
  title: { absolute: "Ecommerce Accountant in Dallas–Fort Worth | eMerchant Books" },
  description:
    "Plano-based accounting firm for DFW ecommerce sellers doing $100K+ a month. Bookkeeping services in Dallas, Plano and Frisco with exit-grade books and a day-10 close guarantee.",
  alternates: { canonical: "/ecommerce-accountant-dallas/" },
};

const FAQS = [
  {
    q: "Do you meet clients in person in Dallas?",
    a: "Yes. We're based in Plano and meet DFW clients in person for onboarding, quarterly reviews and exit-planning sessions. For a firm holding your financials, sitting across a table matters, and it's something the fully-remote national firms can't offer.",
  },
  {
    q: "Which areas do you serve locally?",
    a: "The whole DFW metroplex: Dallas, Plano, Frisco, McKinney, Allen, Richardson, Addison, Carrollton, Irving, Arlington and Fort Worth. Most work happens in your cloud accounting file either way; local just means real meetings when they help.",
  },
  {
    q: "I run a wholesale or hybrid operation, not just marketplaces. Can you handle that?",
    a: "Yes. DFW has one of the country's densest wholesale and distribution corridors, and several of our processes were built around exactly that: inventory-heavy operations selling B2B and B2C across marketplaces, storefronts and wholesale channels at once.",
  },
  {
    q: "Do you take brick-and-mortar businesses, or only ecommerce?",
    a: "Locally, both. The national practice is ecommerce-only with a $100K/mo revenue floor, but our Dallas office serves established DFW brick-and-mortar and hybrid businesses: retail on Square, Clover, Toast or Shopify POS, wholesale showrooms, inventory-heavy service businesses. We organize everything your operation produces into a clean QuickBooks file, A to Z, quoted flat.",
  },
  {
    q: "What does a Dallas ecommerce bookkeeper cost?",
    a: "Our published rate card applies everywhere: Foundation from $1,250/mo for brands doing $100K-$250K a month, Command from $3,500/mo, Exit-Grade from $7,500/mo. Generic Dallas bookkeeping services run $300-800/mo but book your marketplace deposits as revenue, which costs far more than the difference at tax time or diligence.",
  },
  {
    q: "Do you handle Texas franchise tax?",
    a: "We keep the books franchise-tax ready and coordinate the filing with your CPA. Texas has no state income tax, but franchise tax applies above the no-tax-due threshold, and marketplace sellers routinely misreport revenue on it by using deposit totals. Ours tie to gross.",
  },
];

export default function DallasPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/ecommerce-accountant-dallas/", label: "Dallas–Fort Worth" }]} />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-12 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Dallas · Plano · Frisco · Fort Worth</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-navy-900">
            The ecommerce accountant Dallas sellers actually needed
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            eMerchant Books is a Plano-based accounting firm built exclusively for ecommerce brands doing $100K+ a
            month. Exit-grade accrual books, true landed-cost COGS and channel-level P&L, closed by the 10th
            business day, in your own QuickBooks, Xero or NetSuite file. And because we&rsquo;re local, onboarding
            and quarterly reviews can happen across a real table.
          </p>
          <Image
            src={pageImage("about-us").src}
            alt="eMerchant Books ecommerce accounting office in Plano, Texas"
            width={1600}
            height={900}
            priority
            className="mt-7 rounded-2xl border border-slate-200 shadow-sm"
          />

          <h2 className="mt-12 text-2xl font-bold text-navy-900">Why DFW sellers end up with us</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
            <p>
              Dallas–Fort Worth is one of the biggest ecommerce and wholesale corridors in the country: FBA
              operations in Frisco garages that grew into Carrollton warehouses, wholesale distributors in Irving
              running marketplace channels on the side, DTC brands in Deep Ellum. What the metroplex doesn&rsquo;t
              have is accounting firms that understand any of it. The typical Dallas bookkeeper quotes $400/mo,
              books your Amazon deposits as revenue, and finds out what a settlement report is at tax time.
            </p>
            <p>
              We only do ecommerce. Settlement reconciliation, FBA inventory valuation, multi-channel COGS and
              marketplace 1099-K ties are the everyday work, not the exception. If you&rsquo;re doing $100K+ a
              month from anywhere in the metroplex, you can sit down with the people who keep your books, this
              week.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">Brick-and-mortar and hybrid DFW businesses: you're welcome here too</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
            <p>
              Our national practice is ecommerce-only, but the Dallas office runs a local practice alongside it for
              established brick-and-mortar and hybrid businesses: retail stores on Square, Clover or Shopify POS,
              wholesale showrooms, service businesses with real inventory. The work is the same discipline applied
              locally, taking whatever your operation produces, POS exports, register tapes, supplier invoices,
              spreadsheets, bank feeds, and organizing all of it into a clean QuickBooks or Xero file, A to Z.
            </p>
            <p>
              That includes the unglamorous parts local businesses actually need: document and receipt capture,
              A/P and A/R, cash reconciliation for cash-heavy operations, sales tax filings, payroll coordination,
              and a year-end package your CPA will thank you for. Local engagements are quoted flat after a short
              look at your systems, and the day-10 close guarantee applies to every file we keep.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">Local, with a specialist's toolkit</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "In-person onboarding and quarterly reviews in DFW",
              "Exit-grade accrual books, day-10 close guarantee",
              "Amazon, Shopify, eBay, Walmart, Etsy and wholesale channels",
              "Texas franchise tax handled correctly for marketplace revenue",
              "QuickBooks, Xero and NetSuite, in your own file",
              "Custom integrations and ops engineering for local warehouses",
              "Published pricing from $1,250/mo",
              "Diligence Readiness Assessment: $2,500, credited at onboarding",
            ].map((d) => (
              <li key={d} className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <span className="mt-0.5 text-brand-500" aria-hidden>✓</span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <p className="text-lg font-bold text-navy-900">Talk to a local partner</p>
            <p className="mb-5 mt-1 text-sm text-slate-500">For DFW brands doing $100K+/mo. Reply within one business day.</p>
            <LeadForm source="dallas-page" />
          </div>
          <div className="mt-6 rounded-xl bg-navy-900 p-6 text-sm leading-relaxed text-slate-300">
            <p className="font-semibold text-white">Visit or call</p>
            <p className="mt-2">{SITE.address.street}, {SITE.address.city}, TX {SITE.address.zip}</p>
            <p className="mt-1"><a href={SITE.phoneHref} className="underline hover:text-white">{SITE.phone}</a> · {SITE.hours}</p>
            <p className="mt-3 text-slate-400">Serving Dallas, Plano, Frisco, McKinney, Allen, Richardson, Addison, Carrollton, Irving, Arlington and Fort Worth.</p>
          </div>
        </aside>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Guarantees />
        </div>
      </section>

      <FaqBlock faqs={FAQS} title="Dallas ecommerce accounting FAQs" />
      <CtaBand source="dallas-bottom" heading="DFW's specialist, at a published price" sub="Tell us your channels and monthly revenue. If a face-to-face makes sense, we'll set one up in Plano or come to you." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "eMerchant Books",
            url: "https://emerchantbooks.com/ecommerce-accountant-dallas/",
            telephone: "+14692941807",
            email: SITE.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: SITE.address.street,
              addressLocality: SITE.address.city,
              addressRegion: "TX",
              postalCode: SITE.address.zip,
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 33.0752, longitude: -96.8236 },
            areaServed: ["Dallas", "Plano", "Frisco", "McKinney", "Allen", "Richardson", "Addison", "Carrollton", "Irving", "Arlington", "Fort Worth"],
            priceRange: "From $1,250/mo",
            openingHours: "Mo-Fr 09:00-17:00",
            description: "Plano-based ecommerce accounting firm for DFW sellers doing $100K+ a month: exit-grade books, landed-cost COGS, day-10 close guarantee.",
          }),
        }}
      />
    </>
  );
}

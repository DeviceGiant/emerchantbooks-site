import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs, CtaBand, FaqBlock, Guarantees } from "@/components/Sections";
import { SITE } from "@/lib/site";
import { pageImage } from "@/content/images";

export const metadata: Metadata = {
  title: { absolute: "Bookkeeping Services in Fort Worth, TX | eMerchant Books" },
  description:
    "Bookkeeping services for Fort Worth and Tarrant County: ecommerce brands, Alliance-corridor distribution and local retail. Accrual books, day-10 close guarantee, in-person option.",
  alternates: { canonical: "/bookkeeping-services-fort-worth/" },
};

const FAQS = [
  {
    q: "Do you meet Fort Worth clients in person?",
    a: "Yes. We come to you. Onboarding and quarterly reviews happen at your warehouse, shop or office anywhere in Tarrant County, or over a table midway. Most month-to-month work runs in your cloud accounting file, but when you're handing someone your financials, meeting the actual humans matters.",
  },
  {
    q: "Which parts of Tarrant County do you cover?",
    a: "All of it: Fort Worth proper, the Alliance corridor and Haslet, Keller, North Richland Hills, Hurst-Euless-Bedford, Arlington, Mansfield, Benbrook and Burleson, plus Weatherford next door. Distance never changes the service; it just changes where we park.",
  },
  {
    q: "Do I need a CPA in Fort Worth or a bookkeeper?",
    a: "Usually both, doing different jobs. A bookkeeper builds the monthly books; a CPA files returns and advises on tax strategy from those books. We're the bookkeeping-led side: we produce accrual financials your CPA can file from without redoing anything, and we coordinate with Fort Worth CPAs weekly. If you don't have one, we'll refer you to firms we already work well with.",
  },
  {
    q: "What do bookkeeping services in Fort Worth cost?",
    a: "Ecommerce engagements follow our published rate card: Foundation from $1,250/mo for brands doing $100K-$250K a month, with Books Lite at $149/mo for smaller sellers. Local brick-and-mortar and warehouse engagements are quoted flat after a short look at your systems, typically in the same range as a competent Fort Worth bookkeeper but with inventory and channel accounting handled correctly.",
  },
  {
    q: "Can you handle a distribution or 3PL-heavy operation?",
    a: "That's the work we're built for. Multi-location inventory valuation, landed costs on inbound containers, marketplace settlements and B2B invoicing in one set of books. If your product moves through an Alliance-area warehouse before it hits a customer's porch, your books have exactly the problems we specialize in.",
  },
  {
    q: "Do you take Fort Worth retail and brick-and-mortar businesses?",
    a: "Yes. Alongside the national ecommerce practice, we run a local practice for established Tarrant County businesses: retail on Square, Clover, Toast or Shopify POS, showrooms, service businesses with real inventory. We take whatever your operation produces, register exports, supplier invoices, bank feeds, receipts, and organize it into a clean QuickBooks or Xero file, A to Z.",
  },
  {
    q: "Do you do QuickBooks cleanup in Fort Worth?",
    a: "Yes. Fort Worth cleanups usually start the same way: deposits booked as revenue, inventory expensed on purchase, accounts unreconciled for years. We rebuild the file properly, with settlement-level revenue and landed-cost COGS, quoted flat before we start. If the old file is beyond saving, we'll say so honestly and start a clean one with your history preserved.",
  },
  {
    q: "I searched 'bookkeeper near me' from Keller. Do you cover that?",
    a: "Yes. Keller, Haslet and the whole Alliance corridor sit inside our regular Fort Worth rounds, and onboarding happens at your location. The monthly work runs in your cloud accounting file, so 'near me' matters most on day one and at quarterly reviews. For both of those, we drive to you.",
  },
  {
    q: "Can you take over from my current Fort Worth bookkeeper?",
    a: "Yes, and you don't have to have the awkward conversation first. Grant us access, we review what's there, and we'll tell you plainly whether the file is worth keeping or needs a rebuild. The handoff itself takes two to three weeks. Everything stays in a QuickBooks or Xero file you own, so nothing gets held hostage by the old firm.",
  },
  {
    q: "Do you handle payroll and sales tax for Tarrant County businesses?",
    a: "Both, as part of local full-service engagements. We coordinate payroll through your provider (Gusto, ADP or QuickBooks Payroll), file Texas sales tax returns, and keep collected tax in a liability account where it belongs. Marketplace sellers get nexus monitoring too, since facilitator laws cover some of your channels and not others.",
  },
];

export default function FortWorthPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/bookkeeping-services-fort-worth/", label: "Fort Worth" }]} />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-12 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Fort Worth · Alliance · Keller · Arlington · Tarrant County</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-navy-900">
            Bookkeeping services in Fort Worth for businesses that move inventory
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Fort Worth ships things. Product flows through the Alliance corridor, down I-35W, out of Haslet
            fulfillment centers and Meacham-area warehouses, and the books behind those operations need more than
            transaction categorizing. We&rsquo;re an accounting firm that does inventory accounting properly:
            accrual books, landed-cost COGS and channel-level P&L, closed by the 10th business day, with a partner
            who&rsquo;ll drive to your dock.
          </p>
          <Image
            src={pageImage("bookkeeping-services-fort-worth").src}
            alt={pageImage("bookkeeping-services-fort-worth").alt}
            width={1600}
            height={900}
            priority
            className="mt-7 rounded-2xl border border-slate-200 shadow-sm"
          />

          <h2 className="mt-12 text-2xl font-bold text-navy-900">An accountant Fort Worth operators don&rsquo;t have to train</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
            <p>
              Tarrant County built one of the biggest logistics footprints in Texas: BNSF intermodal, the air cargo
              hub at Alliance, row after row of distribution space from Haslet down through south Fort Worth. A lot
              of businesses in that footprint sell online, wholesale, or both, and their bookkeeping needs are
              specific. Settlement reports instead of simple deposits. Inventory in three places at once.
              Containers with freight and tariffs that belong in unit costs, not in a lump expense.
            </p>
            <p>
              Most accounting firms in Fort Worth are generalists, and generalists book the Amazon deposit as
              revenue and call it a day. We do the opposite work: <Link href="/monthly-ecommerce-bookkeeping/" className="font-medium text-brand-600 underline">monthly bookkeeping</Link> built
              on settlement-level detail, inventory valued the way a lender or buyer would value it, and books that
              tie to your 1099-Ks. If the last two years are a mess, <Link href="/catch-up-bookkeeping-services/" className="font-medium text-brand-600 underline">catch-up bookkeeping</Link> is
              quoted flat, in writing, before we start.
            </p>
            <p>
              And it isn&rsquo;t remote-only. We&rsquo;re a DFW firm, based in Plano with a practice on both sides of
              the metroplex; the east-side story is on our <Link href="/ecommerce-accountant-dallas/" className="font-medium text-brand-600 underline">Dallas ecommerce accountant</Link> page,
              and the home office serves Collin County through our <Link href="/bookkeeping-services-plano-frisco/" className="font-medium text-brand-600 underline">Plano and Frisco practice</Link>.
              East of the Trinity, the corridor from Arlington up to the airport has its own page:{" "}
              <Link href="/bookkeeping-services-arlington-irving/" className="font-medium text-brand-600 underline">accounting in Arlington, Irving and the mid-cities</Link>.
              For Fort Worth clients, onboarding and quarterly reviews happen at your place. Warehouse walkthroughs
              included, and honestly encouraged; we learn more about a company&rsquo;s inventory accounting from
              twenty minutes on the floor than from a month of emails.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">Local retail and brick-and-mortar: the other half of our Fort Worth practice</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
            <p>
              Fort Worth&rsquo;s commercial character isn&rsquo;t only warehouses. It&rsquo;s shops in the
              Stockyards selling to two million visitors a year, Magnolia Avenue storefronts, Camp Bowie merchants
              who&rsquo;ve been there thirty years. For established Tarrant County brick-and-mortar and hybrid
              businesses we run a local bookkeeping practice: Square, Clover, Toast and Shopify POS
              reconciliation, A/P and A/R, cash handling for cash-heavy counters, sales tax filings, payroll
              coordination and a year-end package your CPA can file from directly.
            </p>
            <p>
              A retailer who also sells online gets one set of books covering both, with the storefront and each
              online channel visible separately, set up in <Link href="/quickbooks-for-ecommerce/" className="font-medium text-brand-600 underline">QuickBooks built for ecommerce</Link> rather
              than a default file. That hybrid picture is where generic bookkeeping breaks down first, and
              it&rsquo;s the picture more Fort Worth retail lives in every year.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">What a Fort Worth engagement includes</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "In-person onboarding anywhere in Tarrant County",
              "Accrual books with landed-cost COGS, closed by day 10",
              "Marketplace, storefront, wholesale and POS channels in one file",
              "Multi-location inventory: FBA, 3PLs, your own warehouse",
              "Texas franchise tax numbers that tie to gross, not deposits",
              "QuickBooks or Xero, in your own file that you keep",
              "Published ecommerce pricing; local work quoted flat",
              "Free Ecommerce Books Teardown before any commitment",
            ].map((d) => (
              <li key={d} className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <span className="mt-0.5 text-brand-500" aria-hidden>✓</span>
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-slate-600">
            Pricing is public: the full rate card is on our <Link href="/pricing/" className="font-medium text-brand-600 underline">pricing page</Link>, from
            $149/mo Books Lite to specialist tiers, and the first conversation is a free teardown of your current
            books, not a sales call.
          </p>
        </div>

        <aside className="lg:sticky lg:top-24 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <p className="text-lg font-bold text-navy-900">Talk to a bookkeeper who knows Fort Worth</p>
            <p className="mb-5 mt-1 text-sm text-slate-500">Ecommerce, distribution or local retail. Reply within one business day.</p>
            <LeadForm source="fort-worth-page" />
          </div>
          <div className="mt-6 rounded-xl bg-navy-900 p-6 text-sm leading-relaxed text-slate-300">
            <p className="font-semibold text-white">Reach us</p>
            <p className="mt-2">{SITE.address.street}, {SITE.address.city}, TX {SITE.address.zip}</p>
            <p className="mt-1"><a href={SITE.phoneHref} className="underline hover:text-white">{SITE.phone}</a> · {SITE.hours}</p>
            <p className="mt-3 text-slate-400">
              Serving Fort Worth, the Alliance corridor, Haslet, Keller, North Richland Hills, Hurst, Euless,
              Bedford, Arlington, Mansfield, Benbrook, Burleson and Weatherford. Dallas-side clients:{" "}
              <Link href="/ecommerce-accountant-dallas/" className="underline hover:text-white">start here</Link>.
            </p>
          </div>
        </aside>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Guarantees />
        </div>
      </section>

      <FaqBlock faqs={FAQS} title="Fort Worth bookkeeping FAQs" />
      <CtaBand source="fort-worth-bottom" heading="Books built for how Fort Worth does business" sub="Tell us what you sell and where it ships from. We'll take a free look at your current books and meet you anywhere in Tarrant County." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "eMerchant Books",
            url: "https://emerchantbooks.com/bookkeeping-services-fort-worth/",
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
            geo: { "@type": "GeoCoordinates", latitude: 32.7555, longitude: -97.3308 },
            areaServed: ["Fort Worth", "Haslet", "Keller", "North Richland Hills", "Hurst", "Euless", "Bedford", "Arlington", "Mansfield", "Benbrook", "Burleson", "Weatherford"],
            priceRange: "From $149/mo",
            openingHours: "Mo-Fr 09:00-17:00",
            description: "Bookkeeping services for Fort Worth and Tarrant County: ecommerce brands, Alliance-corridor distribution and local retail, with accrual books and a day-10 close guarantee.",
          }),
        }}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs, CtaBand, FaqBlock, Guarantees } from "@/components/Sections";
import { SITE } from "@/lib/site";
import { pageImage } from "@/content/images";
import { og } from "@/lib/og";

const TITLE = "Plano Bookkeeper | Bookkeeping Services in Plano & Frisco";
const DESCRIPTION =
  "Bookkeeper in Plano, TX serving Frisco, McKinney, Allen and Richardson. Ecommerce and small business bookkeeping services, same-day meetings, day-10 close.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/bookkeeping-services-plano-frisco/" },
  openGraph: og(TITLE, DESCRIPTION, "/bookkeeping-services-plano-frisco/", pageImage("about-us")),
};

const FAQS = [
  {
    q: "Can I actually meet my accountant in Plano?",
    a: "Yes, often the same day you call. Our office is in Plano at 7700 Windrose, minutes from Legacy West, so onboarding, quarterly reviews and just-need-to-talk sessions happen across a real table. Clients in Frisco, McKinney, Allen and Richardson are a short drive out; we'll come to you if that's easier.",
  },
  {
    q: "What does a bookkeeper in Plano, TX cost?",
    a: "Our rate card is public. Ecommerce engagements start at $1,250/mo for brands doing $100K-$250K a month, with Books Lite at $149/mo for smaller sellers, and local brick-and-mortar work is quoted flat after a short look at your systems. A generalist bookkeeper in Collin County runs $300-800/mo; the difference buys you inventory accounting done right, which usually pays for itself at tax time.",
  },
  {
    q: "Do you serve McKinney and Allen, or just Plano and Frisco?",
    a: "All of North DFW: Plano, Frisco, McKinney, Allen and Richardson are the core, and we have clients in Prosper, Celina and The Colony too. An accountant in McKinney or Allen is fifteen to twenty minutes from our office, so distance never changes the service.",
  },
  {
    q: "Do I need a bookkeeper or a CPA in Plano?",
    a: "Usually both, doing different jobs. We build the monthly accrual books; a CPA files returns from them. Our books arrive tax-ready, so your CPA bills fewer hours, and if you don't have one we'll connect you with Collin County firms we already coordinate with every month.",
  },
  {
    q: "Is it ecommerce only, or do you take local Plano businesses?",
    a: "Both, locally. The national practice is ecommerce-only with a $100K/mo floor, but our Plano office also serves established North DFW brick-and-mortar and hybrid businesses: retail on Square or Shopify POS, med spas and clinics with product revenue, wholesale operations. Everything lands in a clean QuickBooks or Xero file you own, quoted flat.",
  },
  {
    q: "Do you do QuickBooks cleanup in Plano and Frisco?",
    a: "Yes, constantly. The typical cleanup here is a fast-growing Frisco brand whose file didn't keep up: deposits as revenue, inventory in one lump, gateways never reconciled. We rebuild it to accrual with landed-cost COGS, quoted flat after a short look. Bring the file to the Plano office and we'll open it together this week.",
  },
  {
    q: "I searched 'small business accountant near me' from Frisco. How close are you?",
    a: "Ten to fifteen minutes from most of Frisco. The office is at 7700 Windrose in Plano, near Legacy West, and we treat Frisco, McKinney and Allen as home territory rather than a service radius. Same-day meetings are usually possible, and we'll come to your location when that's easier.",
  },
  {
    q: "How do I switch accountants in Plano without losing my books?",
    a: "You won't lose anything, because the work lives in your own QuickBooks or Xero file. Grant us access, we review the file's condition, take over the monthly close, and coordinate the handoff with your old firm if you'd like the buffer. Most Collin County switches complete inside three weeks with zero gaps in the record.",
  },
  {
    q: "I'm looking for a bookkeeper who can start this month. How fast is onboarding?",
    a: "Two to three weeks from first meeting to a live monthly close, faster if your file is clean. We meet at the Plano office or your location, get access to your QuickBooks or Xero file and sales channels in week one, and take over the current month while we review what came before. If the books are behind, catch-up runs alongside at a flat quote.",
  },
  {
    q: "Do you handle sales tax for Collin County businesses?",
    a: "Yes. Texas sales tax filings, correct local rates for Plano, Frisco, McKinney and Allen addresses, and nexus monitoring for anything you sell into other states. Collected tax sits in a liability account, never revenue, and marketplace-facilitator channels are separated from direct sales so you don't remit tax Amazon already remitted.",
  },
];

export default function PlanoFriscoPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/bookkeeping-services-plano-frisco/", label: "Plano & Frisco" }]} />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-12 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Plano · Frisco · McKinney · Allen · Richardson</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-navy-900">
            Bookkeeping services in Plano, TX, from a bookkeeper you can walk in on
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Our headquarters is in Plano, ten minutes from Legacy West. That makes us the rare specialist firm
            where &ldquo;meet your bookkeeper&rdquo; means today, not a Zoom slot next Thursday. Accrual books
            with landed-cost COGS, closed by the 10th business day, in your own QuickBooks, Xero or NetSuite
            file, built by people you can sit across from.
          </p>
          <Image
            src={pageImage("about-us").src}
            alt="eMerchant Books accounting office in Plano, Texas, serving Frisco, McKinney and Allen"
            width={1600}
            height={900}
            priority
            className="mt-7 rounded-2xl border border-slate-200 shadow-sm"
          />

          <h2 className="mt-12 text-2xl font-bold text-navy-900">North DFW is our home turf, not a service area</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
            <p>
              The corridor from Legacy West up the tollway to Frisco has become one of the densest stretches of
              headquarters and new business in America, and the businesses forming around it don&rsquo;t look
              like the ones Collin County&rsquo;s bookkeepers were built for. Ecommerce brands run out of
              Frisco home offices doing seven figures. Product companies started by corporate operators who left
              a Legacy Park tower to build their own thing. Retail concepts opening second locations in McKinney
              and Allen while their online store outgrows both.
            </p>
            <p>
              Those businesses have inventory, channels and settlement reports, and the typical
              &ldquo;bookkeeping services Plano TX&rdquo; result quotes them $400 a month to book deposits as
              revenue. We do the opposite: <Link href="/monthly-ecommerce-bookkeeping/" className="font-medium text-brand-600 underline">monthly bookkeeping</Link> built
              from settlement-level detail, true landed-cost COGS, and channel P&amp;L that shows which side of
              the business earns. If the books are already a mess,{" "}
              <Link href="/catch-up-bookkeeping-services/" className="font-medium text-brand-600 underline">catch-up bookkeeping</Link> gets
              quoted flat, in writing, before we touch anything.
            </p>
            <p>
              We cover the rest of the metroplex from here too: the wider east-side story is on our{" "}
              <Link href="/ecommerce-accountant-dallas/" className="font-medium text-brand-600 underline">Dallas ecommerce accountant</Link> page,
              Tarrant County has its own practice at{" "}
              <Link href="/bookkeeping-services-fort-worth/" className="font-medium text-brand-600 underline">bookkeeping services in Fort Worth</Link>,
              and everything between the downtowns, Arlington through Denton, is covered on our{" "}
              <Link href="/bookkeeping-services-arlington-irving/" className="font-medium text-brand-600 underline">mid-cities bookkeeping</Link> page.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">Same-day and in person, because the office is here</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
            <p>
              Every remote firm says they&rsquo;re responsive. We&rsquo;re fifteen minutes away. When a Frisco
              client got a state notice on a Tuesday morning, the documents were on our conference table that
              afternoon, not scanned into a portal queue. Onboarding happens face to face, quarterly reviews
              happen face to face, and when something confusing lands in your mailbox, you can hand it to a
              human who has actually read your books.
            </p>
            <p>
              For an accountant in Frisco, McKinney or Allen, that proximity cuts both ways: we&rsquo;ll come
              walk your stockroom or warehouse, because twenty minutes on the floor teaches us more about your
              inventory accounting than a month of email. The day-to-day still runs in the cloud, in{" "}
              <Link href="/quickbooks-for-ecommerce/" className="font-medium text-brand-600 underline">QuickBooks set up for ecommerce</Link> or
              Xero, in a file you own and keep if you ever leave.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">Searching &ldquo;bookkeeping services near me&rdquo; from Plano or Frisco?</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
            <p>
              Here&rsquo;s what you&rsquo;ll find, and where we fit. Most results for &ldquo;bookkeeper near me&rdquo; in
              Collin County are solo practitioners and franchise offices doing bank-feed categorization for $300 to
              $800 a month. That&rsquo;s fine for a law practice or a landscaper. It falls apart the first month a
              business has inventory, a marketplace settlement or a second sales channel, which describes most of the
              companies growing along the tollway.
            </p>
            <p>
              We&rsquo;re a business bookkeeper, not a personal one. If you&rsquo;re looking for a personal bookkeeper
              near me to handle household bills and a 1040, a tax storefront will serve you better and cheaper. If
              you&rsquo;re looking for a bookkeeper for an operating business in Plano, Frisco, McKinney, Allen or
              Richardson, the monthly work is the full list: bank and credit card reconciliation, accounts payable and
              receivable, sales tax filings at the correct local rates, payroll coordination with Gusto or ADP, the{" "}
              <Link href="/glossary/month-end-close/" className="font-medium text-brand-600 underline">month-end close</Link>,
              and a year-end package your CPA files from directly. Everything lands in a QuickBooks Online or Xero file
              you own.
            </p>
            <p>
              The honest test for anyone you&rsquo;re considering: ask how they&rsquo;d book a $50,000 Amazon deposit,
              and whether they post COGS when you buy inventory or when you sell it. A Plano bookkeeper who answers
              &ldquo;as revenue&rdquo; and &ldquo;when you buy it&rdquo; will cost you far more than the fee difference
              at tax time.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">What a Plano or Frisco engagement includes</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Same-day in-person meetings at our Plano office",
              "Accrual books with landed-cost COGS, closed by day 10",
              "Ecommerce, retail POS and wholesale channels in one file",
              "Texas franchise tax figures that tie to gross, not deposits",
              "QuickBooks, Xero or NetSuite, in your own file",
              "On-site visits across Frisco, McKinney, Allen and Richardson",
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
            The full rate card is on our <Link href="/pricing/" className="font-medium text-brand-600 underline">pricing page</Link>, and
            the first conversation is a free teardown of your current books. Bring them to the office, or
            we&rsquo;ll open the file together over coffee anywhere between Richardson and McKinney.
          </p>
        </div>

        <aside className="lg:sticky lg:top-24 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <p className="text-lg font-bold text-navy-900">Talk to a bookkeeper down the road</p>
            <p className="mb-5 mt-1 text-sm text-slate-500">Plano, Frisco, McKinney, Allen or Richardson. Reply within one business day.</p>
            <LeadForm source="plano-frisco-page" />
          </div>
          <div className="mt-6 rounded-xl bg-navy-900 p-6 text-sm leading-relaxed text-slate-300">
            <p className="font-semibold text-white">Visit the Plano office</p>
            <p className="mt-2">{SITE.address.street}, {SITE.address.city}, TX {SITE.address.zip}</p>
            <p className="mt-1"><a href={SITE.phoneHref} className="underline hover:text-white">{SITE.phone}</a> · {SITE.hours}</p>
            <p className="mt-3 text-slate-400">
              Serving Plano, Frisco, McKinney, Allen and Richardson. Elsewhere in the metroplex? See{" "}
              <Link href="/ecommerce-accountant-dallas/" className="underline hover:text-white">Dallas</Link> or{" "}
              <Link href="/bookkeeping-services-fort-worth/" className="underline hover:text-white">Fort Worth</Link>.
            </p>
          </div>
        </aside>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Guarantees />
        </div>
      </section>

      <FaqBlock faqs={FAQS} title="Plano and Frisco bookkeeping FAQs" />
      <CtaBand
        source="plano-frisco-bottom"
        heading="Your bookkeeper, ten minutes up the tollway"
        sub="Tell us what you sell and where. We'll take a free look at your current books and, if it helps, put a meeting on the calendar at the Plano office this week."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "eMerchant Books",
            url: "https://emerchantbooks.com/bookkeeping-services-plano-frisco/",
            image: "https://emerchantbooks.com/images/about-ecommerce-accounting-firm-office.webp",
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
            geo: { "@type": "GeoCoordinates", latitude: 33.0198, longitude: -96.6989 },
            areaServed: ["Plano", "Frisco", "McKinney", "Allen", "Richardson"],
            priceRange: "From $149/mo",
            openingHours: "Mo-Fr 09:00-17:00",
            description:
              "Plano bookkeeper and accounting firm serving Frisco, McKinney, Allen and Richardson: ecommerce and small business bookkeeping services with same-day in-person meetings, accrual books and a day-10 close guarantee.",
          }),
        }}
      />
    </>
  );
}

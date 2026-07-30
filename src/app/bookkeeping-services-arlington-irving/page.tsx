import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs, CtaBand, FaqBlock, Guarantees } from "@/components/Sections";
import { SITE } from "@/lib/site";
import { pageImage } from "@/content/images";

export const metadata: Metadata = {
  title: { absolute: "Accountant in Arlington, Irving & Denton | eMerchant Books" },
  description:
    "Bookkeeping and accounting for Arlington, Irving, Grand Prairie, Denton and the DFW mid-cities: ecommerce sellers, airport-corridor distributors and local shops. Accrual books, day-10 close.",
  alternates: { canonical: "/bookkeeping-services-arlington-irving/" },
};

const FAQS = [
  {
    q: "I'm searching for an accountant in Arlington, TX. Is that you?",
    a: "If your business has inventory, channels or more than one revenue stream, yes. We're a DFW accounting firm with a bookkeeping-led practice covering Arlington, Grand Prairie and the mid-cities: accrual books, sales tax filings, and a year-end package your CPA files from directly. Onboarding happens at your shop or warehouse, not over a portal. If all you need is a personal 1040, a tax storefront will cost you less; we're built for operating businesses.",
  },
  {
    q: "Do you work with Denton businesses, including ones near the university?",
    a: "Yes, and Denton is a practice we like. The square and the blocks around UNT and TWU are full of first-location businesses: coffee shops, print and merch operations, music retail, boutiques run on Square or Shopify POS. We set those books up right the first time, handle the seasonal swings a college town brings, and if your side hustle online store becomes the main event, the file is already built for it. We drive up I-35E for onboarding and quarterly reviews.",
  },
  {
    q: "What does an accountant in Irving or Las Colinas cost?",
    a: "Ecommerce engagements follow our published rate card: Foundation from $1,250/mo for brands doing $100K-$250K a month, Books Lite at $149/mo for smaller sellers. Local Irving and Las Colinas engagements are quoted flat after a short look at your systems. A generalist mid-cities bookkeeper runs $300-800/mo; the difference buys settlement-level marketplace accounting and inventory valued the way a lender would value it.",
  },
  {
    q: "Can you handle a distribution business near DFW Airport?",
    a: "That's the center of our practice, not the edge of it. Freight forwarders, importers and wholesale distributors around DFW Airport, Grapevine and Coppell deal with landed costs, in-transit inventory and B2B terms alongside marketplace channels. We build one set of accrual books that carries all of it: container costs in unit COGS, multi-warehouse inventory, marketplace settlements tied to 1099-Ks.",
  },
  {
    q: "Which mid-cities do you actually cover?",
    a: "Arlington, Irving, Grand Prairie, Denton, Carrollton, Garland, Grapevine and Lewisville are the core, and everything between them. We're based in Plano, so nothing on this list is more than about forty minutes out. Distance never changes the service or the price; it changes which highway we take.",
  },
];

export default function ArlingtonIrvingPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/bookkeeping-services-arlington-irving/", label: "Arlington & Mid-Cities" }]} />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-12 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Arlington · Irving · Grand Prairie · Denton · Carrollton · Garland · Grapevine · Lewisville</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-navy-900">
            Bookkeeping &amp; accounting in Arlington, Irving &amp; the DFW mid-cities
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            The mid-cities are where DFW actually does its work. Freight lands at the airport, moves through
            Grand Prairie and Garland warehouses, and sells from Arlington storefronts and Irving offices, and
            none of that commerce belongs to either downtown. We keep books for it: accrual financials with
            landed-cost COGS, closed by the 10th business day, for ecommerce sellers and local operators alike.
          </p>
          <Image
            src={pageImage("about-us").src}
            alt="eMerchant Books accountants serving Arlington, Irving, Denton and the DFW mid-cities"
            width={1600}
            height={900}
            priority
            className="mt-7 rounded-2xl border border-slate-200 shadow-sm"
          />

          <h2 className="mt-12 text-2xl font-bold text-navy-900">The corridor between the downtowns is our kind of client</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
            <p>
              Look at a freight map of the metroplex and the mid-cities light up. DFW Airport moves more cargo
              than almost any field in the country, and the distribution spine that feeds it runs straight
              through this territory: air freight and customs brokers in Grapevine and Coppell, warehouse rows
              along 161 in Grand Prairie, wholesale operations in Garland and Carrollton, importers in
              Lewisville working the I-35E corridor. Businesses like these don&rsquo;t have simple books. They
              have containers whose freight and duty belong in unit costs, inventory sitting in three buildings
              at once, and marketplace settlements that look nothing like the deposits hitting the bank.
            </p>
            <p>
              An accountant in Irving, TX who mostly files 1040s can&rsquo;t do much with that. We can,
              because it&rsquo;s our whole practice: <Link href="/monthly-ecommerce-bookkeeping/" className="font-medium text-brand-600 underline">monthly bookkeeping</Link> built
              on settlement-level detail, channel P&amp;L that shows whether the wholesale side or the Amazon
              side earns, and books that tie to your 1099-Ks at year end. Behind on the books? {" "}
              <Link href="/catch-up-bookkeeping-services/" className="font-medium text-brand-600 underline">Catch-up bookkeeping</Link> gets
              quoted flat, in writing, before we start. Las Colinas is part of this practice too; the office
              towers hold plenty of product companies and founder-run operations whose inventory never gets
              within ten miles of the building.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">A small business accountant for Arlington, TX storefronts</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
            <p>
              Arlington built an economy on people showing up: the stadiums, the theme parks, and the miles of
              retail, restaurants and service businesses that feed off ten million visitors a year. That
              revenue is seasonal, cash-heavy and split across POS systems, which is exactly where generic
              bookkeeping falls apart. Our local practice takes established Arlington and Grand Prairie
              businesses whole: Square, Clover, Toast and Shopify POS reconciliation, A/P and A/R, sales tax
              filings, payroll coordination, and a clean QuickBooks or Xero file you own. A shop that also
              sells online gets both sides in one set of books, set up in{" "}
              <Link href="/quickbooks-for-ecommerce/" className="font-medium text-brand-600 underline">QuickBooks built for ecommerce</Link> so
              the storefront and each channel stay visible separately.
            </p>
            <p>
              Denton anchors the other end of the territory with a different character: a courthouse square of
              independent businesses and two universities feeding it customers and founders. First real
              bookkeeper for a growing Denton shop, or an accountant in Denton, TX for a maker brand that
              outgrew a spreadsheet, that&rsquo;s work we take gladly. Small files get our attention because
              small files become the interesting ones.
            </p>
            <p>
              We&rsquo;re a Plano firm with a practice across the whole metroplex, and we come to you.
              Dallas-side sellers have their own page at{" "}
              <Link href="/ecommerce-accountant-dallas/" className="font-medium text-brand-600 underline">ecommerce accountant in Dallas</Link>,
              the west side lives at{" "}
              <Link href="/bookkeeping-services-fort-worth/" className="font-medium text-brand-600 underline">bookkeeping services in Fort Worth</Link>,
              and Collin County is covered from{" "}
              <Link href="/bookkeeping-services-plano-frisco/" className="font-medium text-brand-600 underline">the Plano office</Link>.
              This page is for everyone in between.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">What a mid-cities engagement includes</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "In-person onboarding in Arlington, Irving, Denton or anywhere between",
              "Accrual books with landed-cost COGS, closed by day 10",
              "Marketplace, storefront, wholesale and POS channels in one file",
              "Multi-warehouse inventory across the airport corridor",
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
            The full rate card is on our <Link href="/pricing/" className="font-medium text-brand-600 underline">pricing page</Link>, from
            $149/mo Books Lite up. The first conversation is a free teardown of your current books, at your
            place of business or over a table anywhere in the mid-cities.
          </p>
        </div>

        <aside className="lg:sticky lg:top-24 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <p className="text-lg font-bold text-navy-900">Talk to an accountant who covers the mid-cities</p>
            <p className="mb-5 mt-1 text-sm text-slate-500">Arlington to Denton, ecommerce or local. Reply within one business day.</p>
            <LeadForm source="midcities-page" />
          </div>
          <div className="mt-6 rounded-xl bg-navy-900 p-6 text-sm leading-relaxed text-slate-300">
            <p className="font-semibold text-white">Reach us</p>
            <p className="mt-2">{SITE.address.street}, {SITE.address.city}, TX {SITE.address.zip}</p>
            <p className="mt-1"><a href={SITE.phoneHref} className="underline hover:text-white">{SITE.phone}</a> · {SITE.hours}</p>
            <p className="mt-3 text-slate-400">
              Serving Arlington, Irving, Grand Prairie, Denton, Carrollton, Garland, Grapevine and Lewisville.
              Closer to a downtown? See{" "}
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

      <FaqBlock faqs={FAQS} title="Arlington, Irving and mid-cities accounting FAQs" />
      <CtaBand
        source="midcities-bottom"
        heading="Books for the part of DFW that does the shipping"
        sub="Tell us what you sell and where it sits. We'll take a free look at your current books and meet you anywhere from Arlington to Denton."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "eMerchant Books",
            url: "https://emerchantbooks.com/bookkeeping-services-arlington-irving/",
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
            geo: { "@type": "GeoCoordinates", latitude: 32.7357, longitude: -97.1081 },
            areaServed: ["Arlington", "Irving", "Grand Prairie", "Denton", "Carrollton", "Garland", "Grapevine", "Lewisville"],
            priceRange: "From $149/mo",
            openingHours: "Mo-Fr 09:00-17:00",
            description:
              "Bookkeeping and accounting for Arlington, Irving, Grand Prairie, Denton and the DFW mid-cities: ecommerce sellers, airport-corridor distribution and local storefronts, with accrual books and a day-10 close guarantee.",
          }),
        }}
      />
    </>
  );
}

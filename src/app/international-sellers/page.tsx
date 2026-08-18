import type { Metadata } from "next";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs, CtaBand, FaqBlock, Guarantees } from "@/components/Sections";
import { pageImage } from "@/content/images";
import { og } from "@/lib/og";

const TITLE = "Bookkeeping for International Sellers | eMerchant Books";
const DESCRIPTION =
  "US bookkeeping for international sellers: marketplace-grade monthly books plus Form 5472, pro-forma 1120, W-8 and EIN/ITIN coordination.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/international-sellers/" },
  openGraph: og(TITLE, DESCRIPTION, "/international-sellers/", pageImage("international-sellers")),
};

const FAQS = [
  {
    q: "I'm not a US citizen but own a US LLC that sells on Amazon. What do I need to file?",
    a: "A foreign-owned single-member LLC files a pro-forma Form 1120 with Form 5472 every year, even with no US tax owed, plus BOI reporting where applicable and any state obligations. Whether you owe US income tax is a separate question that depends on your home country's treaty and whether your activity rises to a US trade or business. We keep the books and coordinate the filings; a partner CPA signs the returns.",
  },
  {
    q: "What happens if I never filed Form 5472?",
    a: "The penalty is $25,000 per missed form per year, and it applies even when zero tax is owed. If you're behind, don't panic and don't keep waiting: there are reasonable-cause paths for first-time and voluntary corrections, and clean books make that case far stronger. We can rebuild past years as a catch-up project.",
  },
  {
    q: "Can you get me an EIN or ITIN without a US Social Security Number?",
    a: "An EIN, yes, without an SSN via the fax/mail route, and we coordinate the paperwork. ITINs go through a Certifying Acceptance Agent when needed. Both take longer than US applicants experience, so we start them early in onboarding.",
  },
  {
    q: "Amazon's tax interview is asking for a W-8BEN or W-9. Which one?",
    a: "It depends on how your entity is treated for US tax purposes: a foreign individual or foreign entity generally provides a W-8 variant, while a US LLC treated as a US person provides a W-9. Getting it wrong causes withholding or account problems. We walk you through the right answer for your structure before you submit.",
  },
  {
    q: "Why not just use doola or a formation platform's bookkeeping?",
    a: "Formation platforms are good at forming companies. Their bookkeeping tiers are software-first add-ons, and their marketplace accounting is shallow: no settlement rebuilds, no real COGS. doola's filings-only tier runs $1,999/yr. We deliver actual monthly marketplace bookkeeping plus filing coordination, usually for less total cost, in a QuickBooks or Xero file you own.",
  },
  {
    q: "Do you understand marketplace payouts, or just the compliance side?",
    a: "Marketplace bookkeeping is our core business for US clients too. You get the same settlement-level Amazon, Shopify, eBay, Walmart and Etsy accounting our domestic sellers get, with the non-resident stack layered on top. That combination is exactly what's missing in this market: filing shops don't do books, and bookkeeping firms don't take non-residents.",
  },
  {
    q: "Can a non-US resident hire a US bookkeeper?",
    a: "Yes, nothing legally prevents it. The real obstacle is that most US firms decline non-resident clients because the compliance layer (5472, W-8s, ITINs) is unfamiliar to them. We take non-residents as a core practice. You need a US entity or marketplace account for us to keep books on, read-only access to your platforms and bank, and a WhatsApp number. Citizenship never comes into it.",
  },
  {
    q: "How much does US accounting cost for foreign sellers?",
    a: "Our International Starter plan is $499/mo and covers US bookkeeping plus sales-tax registrations and 5472/1120 coordination. Sellers past $100K a month move onto the standard published tiers from $1,250/mo. For comparison: a formation platform's filings-only tier runs about $1,999/yr with no real books, and a filing shop plus a separate bookkeeper lands around $2,800 to $6,000/yr, done by two teams that never talk.",
  },
  {
    q: "Do you work with sellers in my time zone?",
    a: "Almost certainly. Our clients run US stores from Europe, the Middle East, South Asia and East Asia, and the workflow is built for the gap: questions answered over WhatsApp asynchronously, close memos recorded on video you watch when you wake up, and live calls scheduled inside the overlap window. You'll never take a 3 a.m. call to get an answer.",
  },
  {
    q: "Do I need a US bank account for the bookkeeping to work?",
    a: "No, though it helps. We keep books from whatever your money runs through: Mercury or Relay if you have US banking, Payoneer or Wise if you don't, plus the marketplace settlement data itself. If you're still setting up, we'll tell you which structure makes bookkeeping and 5472 reporting cleanest before you commit to one.",
  },
];

export default function InternationalSellers() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/international-sellers/", label: "International Sellers" }]} />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-12 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">For non-US residents selling on US platforms</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-navy-900">
            US bookkeeping and compliance for international sellers
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            You built a US LLC to sell on Amazon, Walmart or Shopify from abroad. Then you discovered the hard part:
            most US bookkeepers won&rsquo;t take non-resident clients, the formation platform&rsquo;s
            &ldquo;bookkeeping&rdquo; is an app with a chatbot, and somewhere in the fine print is a form called 5472
            with a $25,000 penalty attached.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            We&rsquo;re a US-based firm that does both halves properly: marketplace-grade monthly bookkeeping, the
            same settlement-level work our American clients get, plus coordination of the entire non-resident
            compliance stack.
          </p>
          <Image
            src={pageImage("international-sellers").src}
            alt={pageImage("international-sellers").alt}
            width={1600}
            height={900}
            priority
            className="mt-7 rounded-2xl border border-slate-200 shadow-sm"
          />

          <h2 className="mt-12 text-2xl font-bold text-navy-900">The traps that catch foreign sellers</h2>
          <div className="mt-6 space-y-5">
            <div className="rounded-xl border-l-4 border-red-400 bg-red-50/60 p-5">
              <p className="font-semibold text-navy-900">The $25,000 form nobody told you about</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                A foreign-owned single-member US LLC must file Form 5472 with a pro-forma 1120 annually, even with
                zero US tax owed. Miss it and the penalty is $25,000 per form, per year. We've studied a case of a
                seller hit for $50,000 across two missed years. Filing it requires books that can state your
                related-party transactions, which is bookkeeping, not just a form.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-red-400 bg-red-50/60 p-5">
              <p className="font-semibold text-navy-900">Contradictory advice about whether you owe US tax</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                Ask three CPAs whether FBA inventory creates a US trade or business and you'll get three answers.
                The honest answer depends on your facts and your country's treaty. We keep your books clean enough
                that whichever position your tax advisor takes, the numbers behind it hold up.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-red-400 bg-red-50/60 p-5">
              <p className="font-semibold text-navy-900">Paperwork that assumes you have an SSN</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                EIN applications, ITIN routes, W-8BEN versus W-8BEN-E versus W-9 in the Amazon tax interview, sales
                tax registrations that want an SSN field filled. Each has a non-resident path; each is slower and
                easier to get wrong. We've walked sellers through all of them.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">What the package includes</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Monthly settlement-accurate bookkeeping, all channels",
              "Your own QuickBooks or Xero file, owned by you",
              "Form 5472 + pro-forma 1120 preparation coordination",
              "W-8/W-9 guidance for platform tax interviews",
              "EIN without SSN, ITIN via CAA when needed",
              "Related-party transaction tracking (5472's core input)",
              "Sales tax registration and filing coordination",
              "Books closed by day 10, questions answered on WhatsApp",
            ].map((d) => (
              <li key={d} className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <span className="mt-0.5 text-brand-500" aria-hidden>✓</span>
                {d}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">How we compare on total cost</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-300 text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">Option</th>
                  <th className="py-3 pr-4">What you get</th>
                  <th className="py-3">Typical cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-3 pr-4 font-medium">Formation platform (e.g. doola)</td>
                  <td className="py-3 pr-4">Filings bundle; software-first bookkeeping only at top tier</td>
                  <td className="py-3">$1,999-$2,999/yr</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Filing shop + separate bookkeeper</td>
                  <td className="py-3 pr-4">5472 filed ($399-$999) but books done by someone who's never seen a settlement report</td>
                  <td className="py-3">$2,800-$6,000/yr combined</td>
                </tr>
                <tr className="bg-brand-50/60">
                  <td className="py-3 pr-4 font-bold text-navy-900">eMerchant Books</td>
                  <td className="py-3 pr-4">Real marketplace bookkeeping + full compliance coordination, one team</td>
                  <td className="py-3 font-semibold">From $1,250/mo, published rate card</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <p className="text-lg font-bold text-navy-900">Talk to a US team that takes non-residents</p>
            <p className="mb-5 mt-1 text-sm text-slate-500">Tell us your country, entity and platforms. Reply within one business day.</p>
            <LeadForm source="international-sellers" />
          </div>
          <div className="mt-6 rounded-xl bg-navy-900 p-6 text-sm leading-relaxed text-slate-300">
            <p className="font-semibold text-white">Already behind on 5472s?</p>
            <p className="mt-2">
              Don&rsquo;t wait for the letter. Past years can be rebuilt and reasonable-cause relief exists. The
              sooner the books are clean, the stronger your case.
            </p>
          </div>
        </aside>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Guarantees />
        </div>
      </section>

      <FaqBlock faqs={FAQS} title="International seller FAQs" />
      <CtaBand
        source="international-bottom"
        heading="Get compliant and get real books, in one move"
        sub="We'll scope your compliance backlog honestly, quote it flat, and never bill you hourly for answering a question. Published pricing, month-to-month, in a file you own."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Bookkeeping for International Sellers on US Platforms",
            provider: {
              "@type": "AccountingService",
              name: "eMerchant Books",
              url: "https://emerchantbooks.com",
              image: "https://emerchantbooks.com/images/about-ecommerce-accounting-firm-office.webp",
              telephone: "+14692941807",
              address: { "@type": "PostalAddress", streetAddress: "7700 Windrose", addressLocality: "Plano", addressRegion: "TX", postalCode: "75024", addressCountry: "US" },
            },
            areaServed: "Worldwide",
            description:
              "Monthly marketplace bookkeeping plus non-resident US compliance coordination (Form 5472, pro-forma 1120, W-8, EIN/ITIN) for foreign owners of US LLCs.",
            url: "https://emerchantbooks.com/international-sellers/",
          }),
        }}
      />
    </>
  );
}

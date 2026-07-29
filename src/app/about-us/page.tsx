import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs, CtaBand, Guarantees } from "@/components/Sections";
import { SITE } from "@/lib/site";
import { pageImage } from "@/content/images";

export const metadata: Metadata = {
  title: "About Us — Ecommerce Bookkeeping Specialists",
  description:
    "eMerchant Books is a Texas-based bookkeeping firm that works only with ecommerce sellers. 15+ years in ecommerce, specialist tools, and books you always own.",
  alternates: { canonical: "/about-us/" },
};

export default function About() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/about-us/", label: "About Us" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-4xl font-bold text-navy-900">The bookkeeping firm that only does ecommerce</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          eMerchant Books exists because of a conversation that happens thousands of times a year: a seller asks
          their bookkeeper a question about settlement reports, reserves or FBA fees, and gets a blank look back.
          &ldquo;My CPA doesn&rsquo;t know what Amazon is&rdquo; is a real quote from a real seller forum, and it
          describes most of the industry.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          We went the other way. No restaurants, no law firms, no landscapers. Every client sells online, so every
          process, template and tool we run is built for marketplace payouts, multi-channel COGS and the reports
          platforms actually produce. Fifteen-plus years of ecommerce experience means your edge cases are our
          routine cases.
        </p>
        <Image
          src={pageImage("about-us").src}
          alt={pageImage("about-us").alt}
          width={1600}
          height={900}
          className="mt-8 rounded-2xl border border-slate-200 shadow-sm"
        />

        <h2 className="mt-12 text-2xl font-bold text-navy-900">What we believe</h2>
        <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
          <p>
            <strong className="text-navy-900">Your books belong to you.</strong> We work in your QuickBooks or Xero
            file, under your login and ownership. The industry learned in December 2024 what happens when a
            bookkeeping platform holding your ledger shuts down overnight. We made that failure structurally
            impossible: there's nothing of yours on our side to lose.
          </p>
          <p>
            <strong className="text-navy-900">Deadlines are guarantees.</strong> Books closed by the 10th business
            day, monthly, in writing, or that month is 50% off. Financial statements that arrive six weeks late are history lessons, and you can't run a
            business on history lessons.
          </p>
          <p>
            <strong className="text-navy-900">Pricing belongs on the website.</strong> Most specialist firms hide
            pricing behind a sales call. Ours is on the pricing page, starting at $1,250/mo, tiered by revenue band.
            If we're not the right fit, you find out in two minutes instead of two calls.
          </p>
          <p>
            <strong className="text-navy-900">Focus beats volume.</strong> We work exclusively with sellers doing
            $1M+ in trailing-twelve-month revenue, including international sellers on US platforms that most firms
            won&rsquo;t touch. The gate isn&rsquo;t snobbery; it&rsquo;s what lets us hold an exit-grade standard on
            every file instead of running a bookkeeping assembly line. And unlike the roll-ups consolidating this
            industry, we&rsquo;re independent and intend to stay that way.
          </p>
          <p>
            <strong className="text-navy-900">Accounting firms should be able to build.</strong> Sellers run on
            software glued together with exports and hope. We employ engineers, so beyond the books we build custom
            integrations, workflow automation and ops tooling. No other firm in this market can.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-navy-900">Where we are</h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          We&rsquo;re based in {SITE.address.city}, Texas, and work with sellers across the US and worldwide. Reach
          us at <a className="font-medium text-brand-600 hover:underline" href={SITE.phoneHref}>{SITE.phone}</a>, at{" "}
          <a className="font-medium text-brand-600 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>, or
          through the <Link href="/contact/" className="font-medium text-brand-600 hover:underline">contact page</Link>.
          {" "}Hours are {SITE.hours}, and existing clients reach their bookkeeper directly by text or WhatsApp.
        </p>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Guarantees />
        </div>
      </section>

      <CtaBand source="about-bottom" />
    </>
  );
}

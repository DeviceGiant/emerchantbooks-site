import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBand } from "@/components/Sections";
import { ARTICLES } from "@/content/articles";
import { og } from "@/lib/og";

const DESCRIPTION =
  "Practical accounting and tax guides for Amazon, eBay, Shopify, Walmart and Etsy sellers: 1099-K, COGS, chart of accounts, Form 5472 and more.";

export const metadata: Metadata = {
  title: "Ecommerce Bookkeeping Tips & Tax Guides",
  description: DESCRIPTION,
  alternates: { canonical: "/bookkeeping-tips/" },
  openGraph: og("Bookkeeping Tips for Ecommerce Sellers | eMerchant Books", DESCRIPTION, "/bookkeeping-tips/"),
};

export default function BlogIndex() {
  const articles = [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <Breadcrumbs items={[{ href: "/bookkeeping-tips/", label: "Bookkeeping Tips" }]} />

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h1 className="text-4xl font-bold text-navy-900">Bookkeeping tips for ecommerce sellers</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Plain-English guides to the accounting and tax questions sellers actually ask. No fluff, real numbers.
        </p>

        <div className="mt-10 space-y-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/bookkeeping-tips/${a.slug}/`}
              className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-500 hover:shadow-md"
            >
              <p className="text-xs text-slate-500">
                {new Date(a.date + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {a.readMinutes} min read
              </p>
              <h2 className="mt-2 text-xl font-bold text-navy-900">{a.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.excerpt}</p>
              <p className="mt-3 text-sm font-semibold text-brand-600">Read the guide →</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand source="blog-index" />
    </>
  );
}

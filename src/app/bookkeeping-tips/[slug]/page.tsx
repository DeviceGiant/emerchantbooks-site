import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand } from "@/components/Sections";
import { ARTICLES, getArticle } from "@/content/articles";
import { pageImage } from "@/content/images";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: { absolute: a.metaTitle },
    description: a.metaDescription,
    alternates: { canonical: `/bookkeeping-tips/${a.slug}/` },
    openGraph: {
      title: a.metaTitle,
      description: a.metaDescription,
      type: "article",
      publishedTime: a.date,
      images: pageImage(a.slug) ? [{ url: pageImage(a.slug).src, width: 1600, height: 900, alt: pageImage(a.slug).alt }] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/bookkeeping-tips/", label: "Bookkeeping Tips" },
          { href: `/bookkeeping-tips/${a.slug}/`, label: a.title },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-xs text-slate-500">
          {new Date(a.date + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {a.readMinutes} min read
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-navy-900">{a.title}</h1>
        {pageImage(a.slug) && (
          <Image
            src={pageImage(a.slug).src}
            alt={pageImage(a.slug).alt}
            width={1600}
            height={900}
            priority
            className="mt-7 rounded-2xl border border-slate-200 shadow-sm"
          />
        )}
        <div
          className="prose-emb mt-8 space-y-5 leading-relaxed text-slate-700 [&_a]:font-medium [&_a]:text-brand-600 [&_a]:underline [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy-900 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-navy-900 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_td]:border [&_td]:border-slate-200 [&_td]:p-2.5 [&_th]:border [&_th]:border-slate-200 [&_th]:bg-slate-50 [&_th]:p-2.5 [&_th]:text-left [&_ul]:space-y-1.5"
          dangerouslySetInnerHTML={{ __html: a.html }}
        />
      </article>

      <CtaBand source={`article-${a.slug}`} heading="Want this handled for you?" sub="Exit-grade books for $100K+/mo brands in your own QuickBooks, Xero or NetSuite, closed by day 10, guaranteed. Start with the $2,500 Diligence Readiness Assessment." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            datePublished: a.date,
            author: { "@type": "Organization", name: "eMerchant Books" },
            publisher: { "@type": "Organization", name: "eMerchant Books", url: "https://emerchantbooks.com" },
            mainEntityOfPage: `https://emerchantbooks.com/bookkeeping-tips/${a.slug}/`,
            description: a.metaDescription,
          }),
        }}
      />
    </>
  );
}

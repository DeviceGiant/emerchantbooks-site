import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand } from "@/components/Sections";
import { GLOSSARY, getGlossaryTerm } from "@/content/glossary";

export function generateStaticParams() {
  return GLOSSARY.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getGlossaryTerm(slug);
  if (!t) return {};
  return {
    title: { absolute: `What Is ${t.term}? | eMerchant Books` },
    description: t.definition.length > 155 ? `${t.definition.slice(0, 152).trimEnd()}...` : t.definition,
    alternates: { canonical: `/glossary/${t.slug}/` },
  };
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getGlossaryTerm(slug);
  if (!t) notFound();
  const related = t.related.map((r) => getGlossaryTerm(r)).filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/glossary/", label: "Glossary" },
          { href: `/glossary/${t.slug}/`, label: t.term },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-4xl font-bold leading-tight text-navy-900">{t.term}</h1>

        <p className="mt-6 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 text-lg leading-relaxed text-navy-900">
          {t.definition}
        </p>

        <div
          className="mt-8 space-y-5 leading-relaxed text-slate-600 [&_a]:font-medium [&_a]:text-brand-600 [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: t.body }}
        />

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="font-bold text-navy-900">Where this shows up in our work</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            This isn&rsquo;t textbook material for us; it&rsquo;s the day-to-day of keeping seller books right.
            See how we handle it in practice:
          </p>
          <Link
            href={t.serviceLink.href}
            className="mt-4 inline-block rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600"
          >
            {t.serviceLink.label} &rarr;
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Related terms</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/glossary/${r.slug}/`}
                  className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-navy-900 hover:border-brand-500 hover:text-brand-600"
                >
                  {r.term}
                </Link>
              ))}
            </div>
          </div>
        )}

        <p className="mt-10 text-sm text-slate-500">
          <Link href="/glossary/" className="font-medium text-brand-600 underline">&larr; Back to the full glossary</Link>
        </p>
      </article>

      <CtaBand
        source={`glossary-${t.slug}`}
        heading="Wondering if your books get this right?"
        sub="The free Ecommerce Books Audit answers that in 3 business days: one clean month of books plus a recorded teardown of every error we found. Keep it all either way."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: t.term,
            description: t.definition,
            url: `https://emerchantbooks.com/glossary/${t.slug}/`,
            inDefinedTermSet: {
              "@type": "DefinedTermSet",
              name: "Ecommerce Accounting Glossary",
              url: "https://emerchantbooks.com/glossary/",
            },
          }),
        }}
      />
    </>
  );
}

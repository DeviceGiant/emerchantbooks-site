import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBand } from "@/components/Sections";
import { GLOSSARY } from "@/content/glossary";

export const metadata: Metadata = {
  title: { absolute: "Ecommerce Accounting Glossary | eMerchant Books" },
  description:
    "Plain-English definitions of 40 ecommerce accounting terms: settlement reports, landed cost, SDE, quality of earnings, sales tax nexus and more, each with a worked example.",
  alternates: { canonical: "/glossary/" },
};

function groupByLetter() {
  const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
  const groups = new Map<string, typeof sorted>();
  for (const t of sorted) {
    const first = t.term[0].toUpperCase();
    const letter = /[A-Z]/.test(first) ? first : "#";
    const list = groups.get(letter) ?? [];
    list.push(t);
    groups.set(letter, list);
  }
  // "#" (numeric terms like 1099-K, 3PL) first, then A-Z
  return [...groups.entries()].sort((a, b) => {
    if (a[0] === "#") return -1;
    if (b[0] === "#") return 1;
    return a[0].localeCompare(b[0]);
  });
}

export default function GlossaryIndexPage() {
  const groups = groupByLetter();
  return (
    <>
      <Breadcrumbs items={[{ href: "/glossary/", label: "Glossary" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-4xl font-bold leading-tight text-navy-900">Ecommerce Accounting Glossary</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Every term on this page comes up in real conversations with sellers: on a diligence call, in an IRS
          notice, or in the fine print of a marketplace payout. Each entry gives you the answer first, then why
          it matters for an ecommerce business, with actual numbers instead of hand-waving. If a definition
          raises a question about your own books, the entry points you to the service or guide that goes deeper.
        </p>

        <div className="mt-12 space-y-10">
          {groups.map(([letter, terms]) => (
            <div key={letter}>
              <h2 className="border-b border-slate-200 pb-2 text-2xl font-bold text-brand-600">{letter}</h2>
              <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {terms.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/glossary/${t.slug}/`} className="font-medium text-navy-900 underline decoration-slate-300 underline-offset-2 hover:text-brand-600 hover:decoration-brand-600">
                      {t.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        source="glossary-index"
        heading="Definitions are free. So is the first look at your books."
        sub="If any of these terms made you wonder whether your own books hold up, the free Ecommerce Books Audit will tell you: one clean month of books plus a recorded teardown of what we found, no commitment."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Ecommerce Accounting Glossary",
            url: "https://emerchantbooks.com/glossary/",
            description:
              "Plain-English definitions of ecommerce accounting terms for online sellers, from settlement reports to quality of earnings.",
            hasDefinedTerm: GLOSSARY.map((t) => ({
              "@type": "DefinedTerm",
              name: t.term,
              url: `https://emerchantbooks.com/glossary/${t.slug}/`,
            })),
          }),
        }}
      />
    </>
  );
}

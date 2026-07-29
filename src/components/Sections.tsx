import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { GUARANTEES, PLATFORMS, SOFTWARE } from "@/lib/site";

export function TrustBar() {
  return (
    <div className="border-y border-slate-200 bg-slate-50 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 text-sm font-medium text-slate-500 sm:px-6">
        <span className="text-xs uppercase tracking-wider text-slate-400">We work where you sell</span>
        {PLATFORMS.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </div>
      <div className="mx-auto mt-2 flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 text-sm font-medium text-slate-500 sm:px-6">
        <span className="text-xs uppercase tracking-wider text-slate-400">And the tools you use</span>
        {SOFTWARE.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}

export function Guarantees({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-6 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
      {GUARANTEES.map((g) => (
        <div key={g.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <p className="mt-4 font-bold text-navy-900">{g.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{g.body}</p>
        </div>
      ))}
    </div>
  );
}

export function CtaBand({ source, heading, sub }: { source: string; heading?: string; sub?: string }) {
  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white">{heading || "We'll do last month's books free, and show you what your bookkeeper missed"}</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            {sub ||
              "The free Ecommerce Books Audit: connect read-only access and within 3 business days you get a clean month of books plus a 10-minute recorded teardown of every margin leak, COGS error and sales-tax risk we found. Keep it all, even if you never hire us."}
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
            <li>✓ Books closed by day 10, guaranteed in writing</li>
            <li>✓ Everything stays in your QuickBooks, Xero or NetSuite file</li>
            <li>✓ Published pricing, month-to-month, no lock-in</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-navy-700 bg-navy-800 p-6 sm:p-8">
          <LeadForm source={source} dark />
        </div>
      </div>
    </section>
  );
}

export function FaqBlock({ faqs, title = "Frequently asked questions" }: { faqs: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-3xl font-bold text-navy-900">{title}</h2>
      <div className="mt-10 space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900">
              {f.q}
              <span className="text-brand-500 transition group-open:rotate-45" aria-hidden>+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 text-sm text-slate-500 sm:px-6">
      <ol className="flex flex-wrap gap-1.5">
        <li>
          <Link href="/" className="hover:text-navy-900">Home</Link>
        </li>
        {items.map((it, i) => (
          <li key={it.href} className="flex gap-1.5">
            <span aria-hidden>/</span>
            {i === items.length - 1 ? (
              <span className="text-navy-900">{it.label}</span>
            ) : (
              <Link href={it.href} className="hover:text-navy-900">{it.label}</Link>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://emerchantbooks.com/" }].concat(
              items.map((it, i) => ({
                "@type": "ListItem",
                position: i + 2,
                name: it.label,
                item: `https://emerchantbooks.com${it.href}`,
              }))
            ),
          }),
        }}
      />
    </nav>
  );
}

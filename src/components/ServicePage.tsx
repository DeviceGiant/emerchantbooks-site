import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs, CtaBand, FaqBlock, Guarantees } from "@/components/Sections";
import type { ServiceContent } from "@/content/services";
import { pageImage } from "@/content/images";

export default function ServicePage({ s }: { s: ServiceContent }) {
  return (
    <>
      <Breadcrumbs items={[{ href: `/${s.slug}/`, label: s.crumb }]} />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-12 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h1 className="text-4xl font-bold leading-tight text-navy-900">{s.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{s.lead}</p>
          {pageImage(s.slug) && (
            <Image
              src={pageImage(s.slug).src}
              alt={pageImage(s.slug).alt}
              width={1600}
              height={900}
              priority
              className="mt-7 rounded-2xl border border-slate-200 shadow-sm"
            />
          )}
          {s.intro.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-slate-600">{p}</p>
          ))}

          <h2 className="mt-12 text-2xl font-bold text-navy-900">{s.painHeading}</h2>
          <div className="mt-6 space-y-5">
            {s.pains.map((p) => (
              <div key={p.title} className="rounded-xl border-l-4 border-red-400 bg-red-50/60 p-5">
                <p className="font-semibold text-navy-900">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">What we do every month</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {s.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <span className="mt-0.5 text-brand-500" aria-hidden>✓</span>
                {d}
              </li>
            ))}
          </ul>

          {s.body.map((sec) => (
            <div key={sec.h2}>
              <h2 className="mt-12 text-2xl font-bold text-navy-900">{sec.h2}</h2>
              {sec.paras.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-slate-600">{p}</p>
              ))}
            </div>
          ))}

          {s.related.length > 0 && (
            <div className="mt-12 rounded-xl bg-slate-50 p-6">
              <p className="font-semibold text-navy-900">Related services</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.related.map((r) => (
                  <Link key={r.href} href={r.href} className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-brand-500 hover:text-brand-600">
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <p className="text-lg font-bold text-navy-900">Get a custom quote</p>
            <p className="mb-5 mt-1 text-sm text-slate-500">First month free. Reply within one business day.</p>
            <LeadForm source={s.slug} />
          </div>
        </aside>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Guarantees />
        </div>
      </section>

      <FaqBlock faqs={s.faqs} title={s.faqTitle} />
      <CtaBand source={`${s.slug}-bottom`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.h1,
            provider: { "@type": "AccountingService", name: "eMerchant Books", url: "https://emerchantbooks.com" },
            areaServed: "US",
            description: s.metaDescription,
            url: `https://emerchantbooks.com/${s.slug}/`,
          }),
        }}
      />
    </>
  );
}

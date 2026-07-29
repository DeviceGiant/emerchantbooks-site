import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs } from "@/components/Sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Get Your Free Month",
  description:
    "Get a custom bookkeeping quote within one business day. Call (469) 294-1807 or send the form. First month free, no contract.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/contact/", label: "Contact" }]} />

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-navy-900">Let&rsquo;s look at your books</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Tell us where you sell and roughly how many orders you do. You&rsquo;ll get a reply from a real
            bookkeeper within one business day with an exact monthly price and, if you want it, your first month
            free.
          </p>

          <div className="mt-8 space-y-4 text-slate-700">
            <p>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Phone</span>
              <a href={SITE.phoneHref} className="text-lg font-semibold text-navy-900 hover:text-brand-600">{SITE.phone}</a>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Email</span>
              <a href={`mailto:${SITE.email}`} className="text-lg font-semibold text-navy-900 hover:text-brand-600">{SITE.email}</a>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Office</span>
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Hours</span>
              {SITE.hours}
            </p>
          </div>

          <div className="mt-8 rounded-xl bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
            <p className="font-semibold text-navy-900">What happens after you submit</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5">
              <li>We look at your channels and volume (no access needed yet)</li>
              <li>You get an exact quote and an honest fit assessment</li>
              <li>If you want to proceed, onboarding starts with your free month</li>
            </ol>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <p className="text-lg font-bold text-navy-900">Get your quote</p>
          <p className="mb-5 mt-1 text-sm text-slate-500">Two minutes. No card, no commitment.</p>
          <LeadForm source="contact-page" />
        </div>
      </section>
    </>
  );
}

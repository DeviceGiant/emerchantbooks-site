import Link from "next/link";
import { SITE } from "@/lib/site";

const COLS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
      { href: "/catch-up-bookkeeping-services/", label: "Catch-Up & Cleanup" },
      { href: "/ecommerce-tax-services/", label: "Ecommerce Tax Services" },
      { href: "/international-sellers/", label: "International Sellers" },
      { href: "/pricing/", label: "Pricing" },
    ],
  },
  {
    heading: "Platforms",
    links: [
      { href: "/amazon-bookkeeping-services/", label: "Amazon Bookkeeping" },
      { href: "/shopify-bookkeeping-services/", label: "Shopify Bookkeeping" },
      { href: "/ebay-bookkeeping-services/", label: "eBay Bookkeeping" },
      { href: "/walmart-bookkeeping-services/", label: "Walmart Bookkeeping" },
      { href: "/etsy-bookkeeping-services/", label: "Etsy Bookkeeping" },
    ],
  },
  {
    heading: "Software",
    links: [
      { href: "/quickbooks-for-ecommerce/", label: "QuickBooks for Ecommerce" },
      { href: "/xero-for-ecommerce/", label: "Xero for Ecommerce" },
      { href: "/netsuite-bookkeeping/", label: "NetSuite Bookkeeping" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about-us/", label: "About Us" },
      { href: "/faq/", label: "FAQ" },
      { href: "/bookkeeping-tips/", label: "Bookkeeping Tips" },
      { href: "/contact/", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <p className="text-lg font-bold text-white">
              eMerchant<span className="text-brand-500">Books</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Done-for-you bookkeeping for Amazon, eBay, Shopify, Walmart and Etsy sellers. Your books, your
              QuickBooks or Xero file, closed by the 15th.
            </p>
            <div className="mt-5 space-y-1.5 text-sm">
              <p><a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a></p>
              <p><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></p>
              <p>{SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
              <p>{SITE.hours}</p>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">{col.heading}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-navy-800 pt-6 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} eMerchant Books. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

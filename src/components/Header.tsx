"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  {
    label: "Services",
    items: [
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
      { href: "/catch-up-bookkeeping-services/", label: "Catch-Up & Cleanup" },
      { href: "/ecommerce-tax-services/", label: "Ecommerce Tax" },
      { href: "/international-sellers/", label: "International Sellers" },
      { href: "/custom-integrations/", label: "Integrations & Ops Engineering" },
    ],
  },
  {
    label: "Platforms",
    items: [
      { href: "/amazon-bookkeeping-services/", label: "Amazon" },
      { href: "/shopify-bookkeeping-services/", label: "Shopify" },
      { href: "/ebay-bookkeeping-services/", label: "eBay" },
      { href: "/walmart-bookkeeping-services/", label: "Walmart" },
      { href: "/etsy-bookkeeping-services/", label: "Etsy" },
    ],
  },
  {
    label: "Software",
    items: [
      { href: "/quickbooks-for-ecommerce/", label: "QuickBooks" },
      { href: "/xero-for-ecommerce/", label: "Xero" },
      { href: "/netsuite-bookkeeping/", label: "NetSuite" },
    ],
  },
  { label: "Pricing", href: "/pricing/" },
  { label: "Blog", href: "/bookkeeping-tips/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-800 bg-navy-900/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-0.5 text-xl font-bold text-white">
          eMerchant<span className="text-brand-500">Books</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            "items" in item && item.items ? (
              <div key={item.label} className="group relative">
                <button className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:text-white">
                  {item.label} <span aria-hidden className="text-xs">▾</span>
                </button>
                <div className="invisible absolute left-0 top-full w-56 rounded-xl border border-navy-700 bg-navy-800 p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  {item.items.map((sub) => (
                    <Link key={sub.href} href={sub.href} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-navy-700 hover:text-white">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href!} className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:text-white">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={SITE.phoneHref} className="text-sm font-medium text-slate-200 hover:text-white">
            (469) 294-1807
          </a>
          <Link href="/contact/" className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-bold text-white hover:bg-brand-600">
            Book an Assessment
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-slate-200 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy-800 bg-navy-900 px-4 pb-6 pt-2 lg:hidden">
          {NAV.map((item) =>
            "items" in item && item.items ? (
              <div key={item.label}>
                <button
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  className="flex w-full items-center justify-between py-2.5 text-left text-sm font-semibold text-white"
                >
                  {item.label} <span className="text-xs">{expanded === item.label ? "▴" : "▾"}</span>
                </button>
                {expanded === item.label &&
                  item.items.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setOpen(false)} className="block py-2 pl-4 text-sm text-slate-300">
                      {sub.label}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link key={item.label} href={item.href!} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-semibold text-white">
                {item.label}
              </Link>
            )
          )}
          <Link href="/contact/" onClick={() => setOpen(false)} className="mt-4 block rounded-lg bg-brand-500 px-4 py-3 text-center text-sm font-bold text-white">
            Book an Assessment
          </Link>
          <a href={SITE.phoneHref} className="mt-3 block text-center text-sm text-slate-300">
            Call (469) 294-1807
          </a>
        </nav>
      )}
    </header>
  );
}

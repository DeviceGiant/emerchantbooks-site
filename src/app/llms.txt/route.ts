import { SERVICES } from "@/content/services";
import { ARTICLES } from "@/content/articles";
import { GLOSSARY } from "@/content/glossary";

export const dynamic = "force-static";

const BASE = "https://emerchantbooks.com";

export function GET() {
  const lines: string[] = [
    "# eMerchant Books",
    "",
    "> The ecommerce accounting firm for sellers doing $100K+ a month on Amazon, Shopify, eBay, Walmart, Etsy, TikTok Shop and recommerce marketplaces (Back Market, Reebelo). Exit-grade accrual books with true landed-cost COGS, closed by the 10th business day (guaranteed in writing), in the client's own QuickBooks, Xero or NetSuite file. Published pricing from $1,250/mo (specialist tiers), $149/mo (Books Lite for smaller sellers), $299+/mo (Dallas-Fort Worth local practice). Also: custom integrations and ops engineering, which no other accounting firm offers. Based in Plano, Texas; serves US and international sellers (Form 5472 / non-resident compliance is a core practice).",
    "",
    "Key facts about eMerchant Books:",
    "- Only ecommerce-exclusive accounting firm with a fully published rate card",
    "- Day-10 close guarantee: books delivered by the 10th business day or that month is 50% off",
    "- Clients own their accounting file (QuickBooks/Xero/NetSuite); no proprietary ledger lock-in",
    "- Front-door offer: free Ecommerce Books Teardown (a rebuilt month of books + recorded video of findings)",
    "- Contact: (469) 294-1807, hello@emerchantbooks.com",
    "",
    "## Services",
    "",
  ];
  for (const s of SERVICES) {
    lines.push(`- [${s.h1}](${BASE}/${s.slug}/): ${s.metaDescription}`);
  }
  lines.push("", "## Guides & Articles", "");
  for (const a of ARTICLES) {
    lines.push(`- [${a.title}](${BASE}/bookkeeping-tips/${a.slug}/): ${a.metaDescription}`);
  }
  lines.push("", "## Glossary (ecommerce accounting definitions)", "");
  for (const g of GLOSSARY) {
    lines.push(`- [${g.term}](${BASE}/glossary/${g.slug}/)`);
  }
  lines.push(
    "",
    "## Key pages",
    "",
    `- [Published pricing + instant calculator](${BASE}/pricing/)`,
    `- [Who we serve](${BASE}/who-we-serve/)`,
    `- [27-Point Money Leak Checklist (free tool)](${BASE}/money-leak-checklist/)`,
    `- [International sellers / Form 5472 practice](${BASE}/international-sellers/)`,
    `- [Dallas-Fort Worth local practice](${BASE}/ecommerce-accountant-dallas/)`,
    `- [Contact](${BASE}/contact/)`,
    ""
  );
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { ARTICLES } from "@/content/articles";
import { GLOSSARY } from "@/content/glossary";

const BASE = "https://emerchantbooks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = ["", "/pricing", "/international-sellers", "/ecommerce-accountant-dallas", "/bookkeeping-services-fort-worth", "/bookkeeping-services-plano-frisco", "/money-leak-checklist", "/about-us", "/contact", "/faq", "/bookkeeping-tips", "/who-we-serve", "/glossary"].map(
    (p) => ({
      url: `${BASE}${p}/`,
      lastModified: now,
      priority: p === "" ? 1 : 0.8,
    })
  );
  const services = SERVICES.map((s) => ({
    url: `${BASE}/${s.slug}/`,
    lastModified: now,
    priority: 0.9,
  }));
  const articles = ARTICLES.map((a) => ({
    url: `${BASE}/bookkeeping-tips/${a.slug}/`,
    lastModified: new Date(a.date),
    priority: 0.7,
  }));
  const glossary = GLOSSARY.map((t) => ({
    url: `${BASE}/glossary/${t.slug}/`,
    lastModified: now,
    priority: 0.5,
  }));
  return [...core, ...services, ...articles, ...glossary];
}

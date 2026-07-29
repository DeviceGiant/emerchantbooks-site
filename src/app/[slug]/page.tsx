import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { SERVICES, getService } from "@/content/services";
import { pageImage } from "@/content/images";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/${s.slug}/` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `/${s.slug}/`,
      images: pageImage(s.slug) ? [{ url: pageImage(s.slug).src, width: 1600, height: 900, alt: pageImage(s.slug).alt }] : undefined,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  return <ServicePage s={s} />;
}

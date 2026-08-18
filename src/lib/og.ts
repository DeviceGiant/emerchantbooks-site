import type { Metadata } from "next";

const DEFAULT_IMAGE = {
  src: "/images/ecommerce-bookkeeping-services-desk.webp",
  alt: "eMerchant Books ecommerce accounting",
};

/** Complete Open Graph block for a page: title, description, url, siteName, type and a sized image. */
export function og(title: string, description: string, path: string, image?: { src: string; alt: string }) {
  return {
    title,
    description,
    url: path,
    siteName: "eMerchant Books",
    type: "website",
    images: [
      {
        url: image?.src ?? DEFAULT_IMAGE.src,
        width: 1600,
        height: 900,
        alt: image?.alt ?? DEFAULT_IMAGE.alt,
      },
    ],
  } satisfies NonNullable<Metadata["openGraph"]>;
}

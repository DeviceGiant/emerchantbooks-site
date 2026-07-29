import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Ecommerce Bookkeeping Services for Amazon, eBay & Shopify Sellers | eMerchant Books",
    template: "%s | eMerchant Books",
  },
  description:
    "Done-for-you bookkeeping for Amazon, eBay, Shopify, Walmart and Etsy sellers. Your QuickBooks or Xero, books closed by the 15th, from $229/mo. First month free.",
  openGraph: {
    siteName: "eMerchant Books",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "eMerchant Books",
  url: SITE.url,
  telephone: "+14692941807",
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
  areaServed: ["US", "Worldwide"],
  priceRange: "From $229/mo",
  openingHours: "Mo-Fr 09:00-17:00",
  description:
    "Ecommerce bookkeeping for Amazon, eBay, Shopify, Walmart and Etsy sellers, in the client's own QuickBooks or Xero file.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-16 lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gtagId}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE.gtagId}');`}
        </Script>
      </body>
    </html>
  );
}

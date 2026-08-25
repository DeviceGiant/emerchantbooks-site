import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import EmailPopup from "@/components/EmailPopup";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Ecommerce Accounting for $100K+/mo Sellers | eMerchant Books",
    template: "%s | eMerchant Books",
  },
  description:
    "The ecommerce accounting firm for Amazon, Shopify and multi-channel brands doing $100K+ a month. Exit-grade books, closed by day 10, at a published price.",
  openGraph: {
    siteName: "eMerchant Books",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: { google: "9aSna9Fa689KvtU-wKy-qHex8mmfjTXBGtBF4CIAnOQ" },
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "eMerchant Books",
  url: SITE.url,
  image: "https://emerchantbooks.com/images/about-ecommerce-accounting-firm-office.webp",
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
  priceRange: "From $1,250/mo",
  openingHours: "Mo-Fr 09:00-17:00",
  description:
    "The ecommerce accounting firm for $100K+/mo sellers: exit-grade accrual books, landed-cost COGS and custom ops integrations, in the client's own QuickBooks, Xero or NetSuite file.",
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
        <EmailPopup />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="yDbtQqjLLqSaMNVgaVYeig" strategy="afterInteractive" />
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

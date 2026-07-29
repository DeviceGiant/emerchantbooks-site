/** Central image registry: SEO-named files in /public/images + descriptive alt text. */
export const IMAGES: Record<string, { src: string; alt: string }> = {
  // service pages (keyed by slug)
  "monthly-ecommerce-bookkeeping": {
    src: "/images/monthly-bookkeeping-close-checklist.webp",
    alt: "Completed monthly bookkeeping close packet with financial reports on an accountant's desk",
  },
  "catch-up-bookkeeping-services": {
    src: "/images/catch-up-bookkeeping-paper-stack.webp",
    alt: "Stack of receipts and bank statements being organized for catch-up bookkeeping",
  },
  "amazon-bookkeeping-services": {
    src: "/images/amazon-seller-accountant-settlement-review.webp",
    alt: "Accountant reviewing Amazon settlement report spreadsheets beside a shipping box",
  },
  "shopify-bookkeeping-services": {
    src: "/images/shopify-bookkeeping-storefront-analytics.webp",
    alt: "Laptop showing Shopify store analytics on a bookkeeper's desk",
  },
  "ebay-bookkeeping-services": {
    src: "/images/ebay-bookkeeping-reseller-workspace.webp",
    alt: "eBay reseller workspace with shipping scale and padded mailers ready for bookkeeping",
  },
  "walmart-bookkeeping-services": {
    src: "/images/walmart-marketplace-accounting-warehouse.webp",
    alt: "Walmart Marketplace fulfillment boxes beside a calculator and accounting laptop",
  },
  "etsy-bookkeeping-services": {
    src: "/images/etsy-bookkeeping-maker-studio.webp",
    alt: "Etsy maker studio with craft materials and laptop showing shop bookkeeping",
  },
  "quickbooks-for-ecommerce": {
    src: "/images/quickbooks-ecommerce-setup-screen.webp",
    alt: "QuickBooks Online accounting software configured for an ecommerce business",
  },
  "xero-for-ecommerce": {
    src: "/images/xero-ecommerce-multicurrency-desk.webp",
    alt: "Multi-currency ecommerce accounting desk with globe and foreign banknotes for Xero bookkeeping",
  },
  "netsuite-bookkeeping": {
    src: "/images/netsuite-accounting-finance-office.webp",
    alt: "Corporate finance office running NetSuite accounting dashboards",
  },
  "ecommerce-tax-services": {
    src: "/images/ecommerce-tax-accountant-documents.webp",
    alt: "Ecommerce tax accountant's desk with organized tax documents and calculator",
  },
  "custom-integrations": {
    src: "/images/custom-integrations-ops-engineering.webp",
    alt: "Ecommerce operations engineering workstation with code and workflow diagrams beside shipping boxes",
  },
  // standalone pages
  home: {
    src: "/images/ecommerce-bookkeeping-services-desk.webp",
    alt: "Ecommerce bookkeeping workspace with financial charts and shipping boxes",
  },
  "home-team": {
    src: "/images/ecommerce-accounting-team-review.webp",
    alt: "Ecommerce accounting team reviewing financial statements together",
  },
  "international-sellers": {
    src: "/images/international-seller-us-llc-compliance.webp",
    alt: "Passport and US compliance documents for an international seller's US LLC",
  },
  pricing: {
    src: "/images/ecommerce-bookkeeping-pricing-meeting.webp",
    alt: "Transparent bookkeeping pricing proposal on a meeting table",
  },
  "about-us": {
    src: "/images/about-ecommerce-accounting-firm-office.webp",
    alt: "eMerchant Books ecommerce accounting firm office",
  },
  contact: {
    src: "/images/contact-ecommerce-bookkeeper-consultation.webp",
    alt: "Phone and notebook ready for an ecommerce bookkeeping consultation",
  },
  // articles (keyed by article slug)
  "how-much-does-ecommerce-bookkeeping-cost": {
    src: "/images/article-bookkeeping-cost-calculator.webp",
    alt: "Calculator and dollar bills illustrating ecommerce bookkeeping costs",
  },
  "amazon-seller-taxes-guide": {
    src: "/images/article-amazon-seller-taxes-forms.webp",
    alt: "Tax forms and shipping box representing Amazon seller taxes",
  },
  "amazon-1099-k-explained": {
    src: "/images/article-1099k-reconciliation-desk.webp",
    alt: "Comparing two spreadsheets with a magnifying glass, 1099-K reconciliation concept",
  },
  "ecommerce-chart-of-accounts": {
    src: "/images/article-chart-of-accounts-organized.webp",
    alt: "Neatly organized file folders representing an ecommerce chart of accounts",
  },
  "quality-of-earnings-report-guide": {
    src: "/images/article-quality-of-earnings-review.webp",
    alt: "Analyst reviewing a bound quality of earnings report with financial charts",
  },
  "amazon-seller-bookkeeping-problems": {
    src: "/images/amazon-seller-accountant-settlement-review.webp",
    alt: "Amazon seller bookkeeping problems: reviewing settlement report spreadsheets beside a shipping box",
  },
  "form-5472-foreign-owned-llc-guide": {
    src: "/images/article-form-5472-international-mail.webp",
    alt: "Official document, passport and airmail envelope for Form 5472 foreign-owned LLC filing",
  },
  "tiktok-shop-seller-bookkeeping": {
    src: "/images/ecommerce-bookkeeping-services-desk.webp",
    alt: "TikTok Shop seller's bookkeeping desk with financial charts and shipping boxes ready for settlement reconciliation",
  },
  "content-creator-bookkeeping": {
    src: "/images/contact-ecommerce-bookkeeper-consultation.webp",
    alt: "Phone and notebook on a content creator's desk, set up for tracking influencer income and taxes",
  },
  "ebay-seller-bookkeeping-problems": {
    src: "/images/ebay-bookkeeping-reseller-workspace.webp",
    alt: "eBay reseller workspace with shipping scale and padded mailers, where managed payments bookkeeping problems start",
  },
  "walmart-seller-bookkeeping-problems": {
    src: "/images/walmart-marketplace-accounting-warehouse.webp",
    alt: "Walmart Marketplace fulfillment boxes next to a calculator and laptop during a WFS settlement review",
  },
  "shopify-bookkeeping-problems": {
    src: "/images/shopify-bookkeeping-storefront-analytics.webp",
    alt: "Laptop showing Shopify store analytics beside bookkeeping records of multi-gateway payouts",
  },
  "back-market-reebelo-seller-bookkeeping": {
    src: "/images/custom-integrations-ops-engineering.webp",
    alt: "Refurbished electronics operations workstation with shipping boxes, where Back Market and Reebelo settlements get posted",
  },
  // new service pages
  "reseller-bookkeeping-services": {
    src: "/images/ebay-bookkeeping-reseller-workspace.webp",
    alt: "Reseller's packing station with shipping scale and mailers, ready for multi-platform bookkeeping across Poshmark, Mercari and eBay",
  },
  "woocommerce-bookkeeping-services": {
    src: "/images/shopify-bookkeeping-storefront-analytics.webp",
    alt: "Laptop showing online store analytics on a bookkeeper's desk during a WooCommerce gateway reconciliation",
  },
  "square-bookkeeping-services": {
    src: "/images/catch-up-bookkeeping-paper-stack.webp",
    alt: "Stack of receipts and statements being reconciled against Square transfer reports for a retail seller's books",
  },
  "content-creator-accounting-services": {
    src: "/images/contact-ecommerce-bookkeeper-consultation.webp",
    alt: "Phone and notebook on a desk during a content creator's accounting consultation about platform income and quarterly taxes",
  },
  // new articles
  "reseller-taxes-bookkeeping-guide": {
    src: "/images/article-bookkeeping-cost-calculator.webp",
    alt: "Calculator and cash on a reseller's desk while working out taxes and sourcing costs across resale platforms",
  },
  "onlyfans-taxes-bookkeeping-guide": {
    src: "/images/ecommerce-tax-accountant-documents.webp",
    alt: "Organized tax documents and calculator prepared for a content creator's quarterly estimates and 1099 filing",
  },
  // hub page
  "who-we-serve": {
    src: "/images/ecommerce-accounting-team-review.webp",
    alt: "Accounting team reviewing books for sellers across marketplaces, storefronts, resale platforms and creator platforms",
  },
};

export function pageImage(key: string) {
  return IMAGES[key];
}

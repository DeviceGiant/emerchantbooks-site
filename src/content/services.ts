export type ServiceContent = {
  slug: string;
  crumb: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  intro: string[];
  painHeading: string;
  pains: { title: string; body: string }[];
  deliverables: string[];
  body: { h2: string; paras: string[] }[];
  related: { href: string; label: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
};

const STANDARD_DELIVERABLES = [
  "Every sales channel reconciled to the penny",
  "Settlement deposits split into sales, fees, refunds and reserves",
  "COGS booked on inventory movement, not purchases",
  "P&L, balance sheet and cash flow by the 15th",
  "Sales tax collected kept out of your revenue",
  "Monthly video walkthrough of your numbers",
  "Text or WhatsApp access to your bookkeeper",
  "Clean handoff file for your CPA at tax time",
];

export const SERVICES: ServiceContent[] = [
  {
    slug: "monthly-ecommerce-bookkeeping",
    crumb: "Monthly Bookkeeping",
    metaTitle: "Monthly Ecommerce Bookkeeping Services | eMerchant Books",
    metaDescription:
      "Done-for-you monthly bookkeeping for ecommerce sellers. Your QuickBooks or Xero, books closed by the 15th, from $229/mo. First month free.",
    h1: "Monthly bookkeeping built for ecommerce sellers",
    lead: "Accurate, accrual-based books for your Amazon, Shopify, eBay, Walmart and Etsy channels, delivered in your own QuickBooks or Xero file by the 15th of every month. From $229/mo.",
    intro: [
      "Most bookkeepers treat an ecommerce business like a coffee shop with a website. They book the Amazon deposit as revenue, guess at COGS, and hand you a P&L that's off by thousands. We only do ecommerce, so your books reflect what actually happened: gross sales, marketplace fees, refunds, reserves, and the inventory you actually sold.",
      "You keep full ownership of your accounting file. If you ever leave, everything stays with you. That's not how Bench worked out for 12,000 businesses, and it's not how the proprietary-ledger platforms work today.",
    ],
    painHeading: "What goes wrong with generalist bookkeepers",
    pains: [
      {
        title: "The deposit-equals-revenue mistake",
        body: "A $50,000 Amazon deposit isn't $50,000 of sales. It's roughly $78,500 of sales minus $27,000 in fees and $4,000 in refunds, held back by reserves. Book the deposit as revenue and your margins, your tax return, and every decision built on them are wrong.",
      },
      {
        title: "COGS booked when you buy, not when you sell",
        body: "Expensing a bulk inventory purchase in the month you paid for it makes that month look terrible and the next six look artificially great. Lenders and buyers see through it. So does the IRS.",
      },
      {
        title: "Books that show up in week six",
        body: "Numbers you get 45 days late are trivia, not information. You can't fix an ad campaign or a cash crunch you learn about six weeks after it happened.",
      },
    ],
    deliverables: STANDARD_DELIVERABLES,
    body: [
      {
        h2: "How onboarding works",
        paras: [
          "Week one, we connect your channels and accounting file, review your chart of accounts, and fix the structure if it needs it. Most sellers' files need it. We set up A2X or Link My Books to pull settlement data straight from each marketplace so nothing depends on manual exports.",
          "From then on it's a monthly rhythm: we reconcile everything as statements land, close the month, and send you a short video walking through what changed and why. Questions go to a real bookkeeper over text or WhatsApp, not a ticket queue.",
        ],
      },
      {
        h2: "Transparent pricing, priced by order volume",
        paras: [
          "Plans start at $229/mo and scale with order volume and channel count, never with your expenses. You can see the full rate card on our pricing page. No quote-gate, no discovery-call gauntlet, no annual contract.",
          "Your first month is free. We'd rather show you clean books than tell you about them.",
        ],
      },
    ],
    related: [
      { href: "/catch-up-bookkeeping-services/", label: "Catch-Up Bookkeeping" },
      { href: "/pricing/", label: "Pricing" },
      { href: "/amazon-bookkeeping-services/", label: "Amazon Bookkeeping" },
      { href: "/international-sellers/", label: "International Sellers" },
    ],
    faqTitle: "Monthly bookkeeping FAQs",
    faqs: [
      {
        q: "How much does ecommerce bookkeeping cost per month?",
        a: "Our plans start at $229/mo for a single channel with modest volume and scale with orders and channels. Specialist competitors typically start between $395 and $995 per month, and several won't take you at all under $1M or even $3M in revenue. The full rate card is on our pricing page.",
      },
      {
        q: "Do you use my QuickBooks account or yours?",
        a: "Yours. We work inside your QuickBooks Online or Xero subscription, under your ownership. If you ever cancel, you keep every transaction, report and attachment. Nothing is held hostage.",
      },
      {
        q: "Cash or accrual accounting?",
        a: "Accrual, with proper inventory accounting. Cash-basis books systematically misstate an inventory business, which matters as soon as you want a loan, an aggregator conversation, or an accurate margin number.",
      },
      {
        q: "When are my books ready each month?",
        a: "By the 15th. That's a commitment, not a goal. Most months they're ready earlier; marketplace settlement timing sets the floor.",
      },
      {
        q: "What if my books are months behind right now?",
        a: "That's a catch-up project, and we do those at a discounted rate before your monthly service starts. Most catch-ups take one to three weeks depending on how many months and channels are involved.",
      },
    ],
  },
  {
    slug: "catch-up-bookkeeping-services",
    crumb: "Catch-Up & Cleanup",
    metaTitle: "Catch-Up & Cleanup Bookkeeping for Ecommerce | eMerchant Books",
    metaDescription:
      "Months or years behind on your books? We rebuild ecommerce books channel by channel: settlements, COGS, sales tax. Fixed quote, discounted rate, fast turnaround.",
    h1: "Catch-up and cleanup bookkeeping for ecommerce sellers",
    lead: "Behind on your books, or sitting on books you don't trust? We rebuild them month by month, settlement by settlement, and hand you a clean file your CPA can actually use.",
    intro: [
      "Falling behind is normal. You were busy running the business, the DIY spreadsheet stopped keeping up, or a previous bookkeeper left a mess that made things worse than nothing. It only becomes a real problem when tax season, a loan application, or a potential buyer shows up and the books can't answer basic questions.",
      "We do catch-up work at a discounted rate compared to monthly service, with a fixed quote before we start. No hourly meter running.",
    ],
    painHeading: "Why ecommerce catch-up is different",
    pains: [
      {
        title: "You can't just categorize bank transactions",
        body: "A year of Amazon deposits tells you almost nothing about that year's sales. Real catch-up means pulling every settlement report and rebuilding gross sales, fees, refunds and reserves for each period. Skipping that step is how the last bookkeeper got it wrong.",
      },
      {
        title: "Old inventory errors compound",
        body: "If COGS was booked on purchases, every month since is misstated. We rebuild inventory movement so your margins are real, which usually changes the profit picture more than sellers expect. Sometimes in your favor.",
      },
      {
        title: "The 1099-K mismatch problem",
        body: "The IRS gets a 1099-K showing your gross sales. If your return was filed off net deposits, those numbers don't match, and mismatches are what trigger letters. Clean books make the reconciliation obvious.",
      },
    ],
    deliverables: [
      "Fixed quote based on months, channels and transaction volume",
      "Every settlement report pulled and rebuilt",
      "COGS reconstructed from inventory movement",
      "Sales tax collected separated from revenue",
      "Duplicate and miscategorized transactions fixed",
      "Bank, credit card and payment processor reconciliation",
      "Clean year-end package for your CPA",
      "Written summary of what we found and fixed",
    ],
    body: [
      {
        h2: "How long does catch-up take?",
        paras: [
          "One to three weeks for most projects. A single-channel Shopify store that's six months behind is quick. A three-channel seller two years behind with an inventory mess takes longer. We give you a timeline with the quote and report progress as we go.",
          "If you're up against a tax deadline, say so. We can usually prioritize the periods your CPA needs first.",
        ],
      },
      {
        h2: "What happens after the catch-up",
        paras: [
          "Most clients roll straight into monthly service so the backlog never rebuilds, and the first monthly month is free. But there's no obligation. If you just need clean books handed back, that's a fine outcome too, and everything lives in your own QuickBooks or Xero file either way.",
        ],
      },
    ],
    related: [
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
      { href: "/ecommerce-tax-services/", label: "Ecommerce Tax Services" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "Catch-up bookkeeping FAQs",
    faqs: [
      {
        q: "How much does catch-up bookkeeping cost?",
        a: "It depends on months behind, number of channels, and transaction volume, so we quote each project flat after a quick look at your accounts. Catch-up months are billed at a discount to our monthly rate. You'll know the full price before we start.",
      },
      {
        q: "My previous bookkeeper's work is wrong. Can you fix it instead of starting over?",
        a: "We audit what exists first. Sometimes it's salvageable and we correct specific errors; sometimes rebuilding from settlement reports is faster and more reliable. We'll tell you which, and why, before quoting.",
      },
      {
        q: "Can you work with my CPA?",
        a: "Yes, and we'd rather. We deliver the exact package they need, answer their questions directly, and stay out of their lane on tax strategy.",
      },
      {
        q: "How far back can you go?",
        a: "As far as the data exists. Marketplace settlement history, bank statements and processor exports typically cover several years. Multi-year rebuilds are common before a sale or an audit.",
      },
    ],
  },
  {
    slug: "amazon-bookkeeping-services",
    crumb: "Amazon Bookkeeping",
    metaTitle: "Amazon Bookkeeping Services & Seller Accounting | eMerchant Books",
    metaDescription:
      "Bookkeeping for Amazon sellers by people who read settlement reports. FBA fees, reserves, refunds and COGS done right in your QuickBooks or Xero. From $229/mo.",
    h1: "Amazon bookkeeping by people who actually read settlement reports",
    lead: "Your Amazon deposit is not your revenue. We rebuild every settlement into real sales, fees, refunds and reserves inside your own QuickBooks or Xero file, so your margins finally mean something.",
    intro: [
      "Amazon pays you every two weeks in a lump that mixes last period's sales with this period's refunds, a dozen fee types, reserve holds and the occasional reimbursement. A bookkeeper who doesn't sell on Amazon sees one deposit. We see the 40-plus transaction types underneath it.",
      "That difference is why sellers leave generalists. As one r/FulfillmentByAmazon seller put it: \"My CPA doesn't know what Amazon is, so sometimes it's harder asking related questions.\" You shouldn't have to teach your bookkeeper your own business.",
    ],
    painHeading: "The three Amazon accounting mistakes we fix constantly",
    pains: [
      {
        title: "Deposits booked as sales",
        body: "A $50,000 deposit can hide $78,500 in gross sales, $27,000 in fees and $4,000 in refunds. Booked wrong, your revenue is understated, your fee visibility is zero, and your 1099-K won't match your return.",
      },
      {
        title: "FBA fees treated as one blob",
        body: "Referral fees, FBA fulfillment, storage, long-term storage, ad spend and reimbursements each tell you something different about the business. Lumped into 'Amazon fees,' they tell you nothing. We break them out so you can see which products actually make money.",
      },
      {
        title: "Reserves ignored until they bite",
        body: "Amazon's rolling reserve means money you earned isn't money you have. We track unavailable balances so your cash flow statement matches reality, which matters most exactly when cash is tight.",
      },
    ],
    deliverables: [
      "Every settlement report reconciled via A2X",
      "40+ Amazon transaction types mapped correctly",
      "FBA fee breakdown by category",
      "Reserve and unavailable-balance tracking",
      "Reimbursement and refund reconciliation",
      "COGS on inventory movement, with FBA inventory valuation",
      "Multi-marketplace support (US, CA, MX and beyond)",
      "P&L, balance sheet and cash flow by the 15th",
    ],
    body: [
      {
        h2: "Built for FBA, FBM and hybrid sellers",
        paras: [
          "FBA sellers get inventory tracking across Amazon's warehouses, including inbound shipments and Amazon's own lost-and-damaged reimbursements, which most sellers never fully collect. FBM and hybrid sellers get shipping-cost allocation so fulfillment expense lands on the right products.",
          "Selling wholesale, private label or arbitrage changes how COGS should work, and we set the file up accordingly instead of forcing one template on every model.",
        ],
      },
      {
        h2: "What this looks like at tax time",
        paras: [
          "Your CPA gets a clean accrual file where gross sales tie to the 1099-K, fees are documented, and inventory has a defensible valuation. Returns get filed without the March scramble, and if the IRS ever asks a question, the answer is a report away.",
          "Not a US resident? We're one of the few firms that pairs Amazon-grade bookkeeping with non-resident compliance. See our international sellers page.",
        ],
      },
    ],
    related: [
      { href: "/international-sellers/", label: "International Sellers" },
      { href: "/walmart-bookkeeping-services/", label: "Walmart Bookkeeping" },
      { href: "/quickbooks-for-ecommerce/", label: "QuickBooks for Ecommerce" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "Amazon bookkeeping FAQs",
    faqs: [
      {
        q: "Do I need an accountant for my Amazon business?",
        a: "Once you're past roughly $10k/mo in sales, yes, or at least a bookkeeper who knows marketplaces. Below that, disciplined DIY with A2X can work. Past it, the cost of getting settlements, COGS and sales tax wrong grows faster than our fee.",
      },
      {
        q: "What software do you use for Amazon bookkeeping?",
        a: "A2X or Link My Books to translate settlement reports, feeding your own QuickBooks Online or Xero file. No proprietary ledger, no lock-in, no export problem if you ever leave.",
      },
      {
        q: "Can you handle multiple Amazon marketplaces?",
        a: "Yes. US, Canada, Mexico and international marketplaces, each mapped separately with currency conversion handled properly, so you can see profitability per marketplace instead of one blended number.",
      },
      {
        q: "Do you work with new sellers?",
        a: "Yes. Unlike firms with $1M or $3M revenue minimums, our plans start at $229/mo. Getting the file structured right in year one is far cheaper than rebuilding it in year three.",
      },
      {
        q: "My last bookkeeper just categorized the deposits. How bad is it?",
        a: "Common, and fixable. We rebuild past periods from settlement reports as a catch-up project, then keep it right going forward. You'll likely discover your real margins for the first time.",
      },
    ],
  },
  {
    slug: "shopify-bookkeeping-services",
    crumb: "Shopify Bookkeeping",
    metaTitle: "Shopify Bookkeeping Services & Accounting | eMerchant Books",
    metaDescription:
      "Shopify accountant service for DTC brands: payouts, multi-gateway reconciliation, COGS and sales tax in your own QuickBooks or Xero. From $229/mo, first month free.",
    h1: "Shopify bookkeeping for stores that take margins seriously",
    lead: "Shopify Payments, PayPal, Klarna, gift cards, refunds and chargebacks, reconciled into one honest P&L in your own QuickBooks or Xero file.",
    intro: [
      "A Shopify store looks simpler to account for than a marketplace business. It isn't. Revenue arrives through three or four gateways on different payout schedules, discounts and gift cards muddy gross sales, and the official Shopify-QuickBooks connector is notorious for quietly mangling inventory and COGS.",
      "We reconcile each gateway's payouts to Shopify's own reports, so what your books say matches what your dashboard says, and both match your bank.",
    ],
    painHeading: "Where Shopify books go wrong",
    pains: [
      {
        title: "Gateway soup",
        body: "Shopify Payments settles daily-ish, PayPal holds funds, buy-now-pay-later providers pay on their own schedule. Each needs its own reconciliation. Mix them into one 'sales' line and you'll chase phantom discrepancies forever.",
      },
      {
        title: "The connector problem",
        body: "Auto-sync apps push order-level noise into QuickBooks until the file is unusable, and the inventory/COGS sync breaks in ways that are expensive to unwind. We use summary-level posting that stays reconcilable.",
      },
      {
        title: "Discounts, returns and gift cards inflating revenue",
        body: "Gross versus net matters. Gift card sales aren't revenue until redeemed, and a 30%-off sale that looks great in the dashboard can be margin-negative once fees and returns land. Your books should show that before you run the next one.",
      },
    ],
    deliverables: [
      "Every gateway reconciled: Shopify Payments, PayPal, BNPL, more",
      "Payout-to-bank tie-out every month",
      "Gift card and store credit liability tracking",
      "Discount and refund reporting that keeps gross sales honest",
      "COGS on inventory movement with 3PL support",
      "Sales tax collected kept out of revenue",
      "Ad spend broken out by channel",
      "P&L, balance sheet and cash flow by the 15th",
    ],
    body: [
      {
        h2: "For DTC brands, dropshippers and hybrid sellers",
        paras: [
          "A brand holding inventory in a 3PL needs landed-cost tracking and monthly inventory valuation. A dropshipper needs supplier-payment matching so COGS lands in the same month as the sale. A hybrid Shopify-plus-Amazon seller needs both, plus channel-level profitability. We set the file up for the business you actually run.",
          "If you also sell on marketplaces, we consolidate everything into one set of books with per-channel P&L, which is the number that tells you where to put next quarter's effort.",
        ],
      },
      {
        h2: "Why not just use the Shopify P&L?",
        paras: [
          "Shopify's analytics are sales analytics, not accounting. They don't know about your inventory purchases, payroll, software stack, or the loan payment. The dashboard answers 'how are sales?' Your books answer 'am I making money?' Those are different questions with different stakes.",
        ],
      },
    ],
    related: [
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
      { href: "/etsy-bookkeeping-services/", label: "Etsy Bookkeeping" },
      { href: "/xero-for-ecommerce/", label: "Xero for Ecommerce" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "Shopify bookkeeping FAQs",
    faqs: [
      {
        q: "Do I need a bookkeeper for my Shopify store?",
        a: "If you're doing more than about $10k/mo or holding inventory, yes. The gateway reconciliation and COGS work is where DIY books quietly fall apart, usually discovered at tax time.",
      },
      {
        q: "QuickBooks or Xero for Shopify?",
        a: "Both work well. QuickBooks Online is stronger for US sales tax handling; Xero is often cleaner for multi-currency. We work in whichever you have, and if you're starting fresh we'll recommend based on your setup, not a partnership commission.",
      },
      {
        q: "Can you handle my 3PL and inventory?",
        a: "Yes. We track inventory across locations including 3PLs, book landed costs properly, and run monthly valuation so COGS reflects what actually shipped.",
      },
      {
        q: "What about Shopify's built-in tax reports?",
        a: "Useful, not sufficient. Shopify tracks what it collected, but nexus analysis, filings and remittance still have to happen. We keep collected tax out of your revenue and work alongside sales tax filing tools or your filing provider.",
      },
    ],
  },
  {
    slug: "ebay-bookkeeping-services",
    crumb: "eBay Bookkeeping",
    metaTitle: "eBay Bookkeeping Services & Seller Accounting | eMerchant Books",
    metaDescription:
      "One of the few firms with a real eBay bookkeeping service: managed payments, fee breakdowns, refunds and 1099-K reconciliation in your QuickBooks or Xero.",
    h1: "eBay bookkeeping, done by a firm that didn't forget eBay exists",
    lead: "Most ecommerce accounting firms build for Shopify and Amazon and treat eBay as an afterthought. We reconcile eBay managed payments properly: fees, refunds, shipping labels, promoted listings and all.",
    intro: [
      "Look at the big ecommerce bookkeeping firms and count how many have an eBay page. Almost none. Meanwhile eBay sellers deal with managed-payments payouts that net out fees before the money ever hits the bank, per-order shipping labels bought inside eBay, promoted listing charges, and a 1099-K that reports gross while the bank shows net.",
      "We treat eBay as a first-class channel, whether it's your whole business or one of five.",
    ],
    painHeading: "The eBay-specific traps",
    pains: [
      {
        title: "Net payouts hiding gross activity",
        body: "eBay deducts final value fees, per-order fees, label costs and promoted listing charges before paying out. Book the payout and you've understated both revenue and expenses, and your 1099-K reconciliation breaks.",
      },
      {
        title: "Refunds and disputes crossing periods",
        body: "A January sale refunded in February, with a fee credit landing in March, needs to be tracked across all three months or your margins swing randomly. This is exactly the kind of tedium that's our job.",
      },
      {
        title: "Mixed personal-and-business selling history",
        body: "Lots of eBay businesses grew out of personal accounts. We help draw the line cleanly so business books reflect the business, which matters the moment the 1099-K arrives.",
      },
    ],
    deliverables: [
      "Managed payments payouts rebuilt to gross activity",
      "Final value, insertion and per-order fees broken out",
      "Promoted listings spend tracked as advertising",
      "Shipping label costs matched to orders",
      "Refund, dispute and fee-credit tracking across periods",
      "1099-K to books reconciliation",
      "COGS for resellers, including sourcing-cost tracking",
      "P&L, balance sheet and cash flow by the 15th",
    ],
    body: [
      {
        h2: "Built for resellers too",
        paras: [
          "A lot of eBay businesses are resale: thrift sourcing, liquidation pallets, trading cards, refurbished electronics. Resale COGS is its own discipline. Sourcing runs where one receipt covers fifty future listings need cost allocation that stands up later, and we've built exactly that for resellers.",
          "If you also sell on Amazon, Walmart or your own site, everything consolidates into one set of books with per-channel profitability.",
        ],
      },
      {
        h2: "Why specialists skip eBay, and why we don't",
        paras: [
          "eBay sellers skew smaller than Shopify brands, so firms with $1M minimums built their marketing elsewhere. Our plans start at $229/mo precisely because the sub-$1M seller is who we built for. An eBay business doing $300k a year deserves books as good as a venture-backed DTC brand's.",
        ],
      },
    ],
    related: [
      { href: "/amazon-bookkeeping-services/", label: "Amazon Bookkeeping" },
      { href: "/walmart-bookkeeping-services/", label: "Walmart Bookkeeping" },
      { href: "/catch-up-bookkeeping-services/", label: "Catch-Up Bookkeeping" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "eBay bookkeeping FAQs",
    faqs: [
      {
        q: "How do I do bookkeeping for eBay sales?",
        a: "The short version: rebuild gross activity from eBay's transaction reports rather than booking net payouts, track fees by type, match label costs to orders, and keep COGS on inventory movement. Or have us do it from $229/mo.",
      },
      {
        q: "Does my eBay 1099-K match my bank deposits?",
        a: "No, and it shouldn't. The 1099-K reports gross payments; deposits are net of fees, labels and refunds. Books built from transaction reports reconcile the two, which is what keeps an IRS mismatch letter from becoming a project.",
      },
      {
        q: "I sell on eBay part-time. Is this worth it?",
        a: "Above roughly $2k/mo in sales, usually yes, especially since the 1099-K threshold now catches nearly everyone. Below that, a disciplined spreadsheet may be fine, and we'll tell you so.",
      },
      {
        q: "Can you handle eBay stores with thousands of small orders?",
        a: "Yes. We post summary-level, reconciled entries rather than per-order noise, so volume doesn't degrade your accounting file.",
      },
    ],
  },
  {
    slug: "walmart-bookkeeping-services",
    crumb: "Walmart Bookkeeping",
    metaTitle: "Walmart Marketplace Bookkeeping & Accounting | eMerchant Books",
    metaDescription:
      "Bookkeeping for Walmart Marketplace sellers: settlement reconciliation, WFS fees, refunds and per-channel P&L in your own QuickBooks or Xero file.",
    h1: "Walmart Marketplace bookkeeping without the guesswork",
    lead: "Walmart settlements, WFS fees and referral charges reconciled properly, whether Walmart is your main channel or your fastest-growing experiment.",
    intro: [
      "Walmart Marketplace has grown into the second marketplace for thousands of Amazon-first sellers, and its accounting is its own animal: different settlement cadence, different fee structure, WFS storage and fulfillment charges, and reports that don't look like Amazon's. Most bookkeeping firms don't even mention Walmart on their sites.",
      "We reconcile Walmart the way we reconcile Amazon: settlement by settlement, fee by fee, into your own QuickBooks or Xero file.",
    ],
    painHeading: "Walmart accounting pitfalls",
    pains: [
      {
        title: "Copy-pasting your Amazon setup",
        body: "Walmart's referral rates, payment timing and fee taxonomy differ from Amazon's. A chart of accounts cloned from your Amazon mapping produces subtly wrong numbers that are hard to spot and harder to trust.",
      },
      {
        title: "WFS costs disappearing into the void",
        body: "Walmart Fulfillment Services charges for storage and fulfillment need to be broken out to know whether WFS actually beats your 3PL. Blended, the comparison is impossible.",
      },
      {
        title: "Multi-channel sellers with single-channel books",
        body: "If Walmart revenue lands in the same bucket as Amazon revenue, you can't see that one channel is growing at 40% margin while the other stalls at 12%. Channel-level P&L is the whole point of clean multi-channel books.",
      },
    ],
    deliverables: [
      "Walmart settlement reports reconciled monthly",
      "Referral and commission fees broken out",
      "WFS storage and fulfillment cost tracking",
      "Refund and adjustment reconciliation",
      "Per-channel P&L across Walmart, Amazon and the rest",
      "COGS on inventory movement across warehouses",
      "Sales tax collected kept out of revenue",
      "Books closed by the 15th, every month",
    ],
    body: [
      {
        h2: "Usually part of a multi-channel picture",
        paras: [
          "Most Walmart sellers we work with are Amazon or Shopify sellers who expanded. The valuable question isn't 'what did Walmart pay us,' it's 'is Walmart worth the effort compared to doubling down elsewhere.' Books with per-channel margins answer it with numbers instead of vibes.",
          "Expansion inventory also complicates COGS: same SKU, multiple warehouses, multiple fee structures. We keep the valuation coherent across all of it.",
        ],
      },
    ],
    related: [
      { href: "/amazon-bookkeeping-services/", label: "Amazon Bookkeeping" },
      { href: "/shopify-bookkeeping-services/", label: "Shopify Bookkeeping" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "Walmart bookkeeping FAQs",
    faqs: [
      {
        q: "How is Walmart Marketplace accounting different from Amazon?",
        a: "Different settlement cadence, different fee names and rates, and WFS instead of FBA. The principles are the same, the mappings aren't. Each channel gets its own reconciliation against its own reports.",
      },
      {
        q: "Can you consolidate Walmart with my other channels?",
        a: "Yes. One accounting file, per-channel P&L, one monthly close. That's the standard setup for every multi-channel client.",
      },
      {
        q: "Do you support Walmart Fulfillment Services (WFS)?",
        a: "Yes, including breaking out WFS fees so you can compare WFS economics against FBA or a 3PL per SKU.",
      },
    ],
  },
  {
    slug: "etsy-bookkeeping-services",
    crumb: "Etsy Bookkeeping",
    metaTitle: "Etsy Bookkeeping & Accounting for Shops | eMerchant Books",
    metaDescription:
      "Etsy accountant service for serious shops: payment account reconciliation, fee breakdowns, materials COGS for makers, and clean books in QuickBooks or Xero.",
    h1: "Etsy bookkeeping for shops that outgrew the spreadsheet",
    lead: "Etsy's payment account is a running tangle of sales, fees, ads, refunds and deposits. We turn it into clean books, whether you make what you sell or source it.",
    intro: [
      "Etsy's fee structure nickels a shop a dozen ways: listing fees, transaction fees, payment processing, Offsite Ads (which you can't opt out of past $10k), Etsy Ads, shipping labels. The payment account nets everything continuously, so deposits have almost no relationship to any period's sales.",
      "Makers add a second layer: materials-based COGS. Pricing handmade work without knowing your true cost per piece is how shops stay busy and broke.",
    ],
    painHeading: "Etsy-specific accounting problems",
    pains: [
      {
        title: "The payment account black box",
        body: "Sales go in, fees come out, ads come out, refunds come out, deposits leave on your schedule. Reconstructing what happened in a month requires Etsy's CSVs and patience. We have both.",
      },
      {
        title: "Offsite Ads fees on some orders and not others",
        body: "A 12-15% fee that only hits ad-attributed orders makes per-order profitability wildly uneven. We track it as the marketing cost it is, so you can see what Offsite Ads actually costs you.",
      },
      {
        title: "Materials COGS for makers",
        body: "The beads, fabric, glaze and packaging you bought in bulk need to become a per-item cost. We build a materials costing approach that's accurate enough to price by and simple enough to maintain.",
      },
    ],
    deliverables: [
      "Etsy payment account fully reconciled monthly",
      "All fee types broken out: listing, transaction, processing, ads",
      "Offsite Ads cost tracking by attribution",
      "Materials-based COGS for handmade sellers",
      "Purchased-inventory COGS for resellers and POD",
      "Sales tax and VAT collected kept out of revenue",
      "Multi-channel consolidation if you also sell elsewhere",
      "Books closed by the 15th",
    ],
    body: [
      {
        h2: "For makers, vintage sellers and print-on-demand",
        paras: [
          "A jewelry maker, a vintage reseller and a POD shop have three different COGS problems. Materials allocation, per-piece sourcing costs, and printer invoices matched to orders. We've set up all three, and the setup determines whether your margins are knowledge or folklore.",
          "Shops that grow usually add Shopify or a wholesale channel next. Your books come with us, one file, per-channel P&L, no re-platforming.",
        ],
      },
    ],
    related: [
      { href: "/shopify-bookkeeping-services/", label: "Shopify Bookkeeping" },
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "Etsy bookkeeping FAQs",
    faqs: [
      {
        q: "Do I need bookkeeping for my Etsy shop?",
        a: "Once Etsy is real income, roughly $1,500/mo and up, yes. The 1099-K threshold means the IRS already sees your gross sales; your books should be able to explain them.",
      },
      {
        q: "How do I figure out COGS for handmade items?",
        a: "Break each product into materials cost per unit, based on what you actually pay in bulk, plus direct packaging. We build and maintain that costing with you so it updates when supply prices move.",
      },
      {
        q: "Etsy is my side business. Is this overkill?",
        a: "Maybe, and we'll say so if it is. Some side shops are fine with a well-built spreadsheet and a year-end cleanup. When you cross into needing monthly books, our smallest plan starts at $229/mo.",
      },
    ],
  },
  {
    slug: "quickbooks-for-ecommerce",
    crumb: "QuickBooks for Ecommerce",
    metaTitle: "QuickBooks for Ecommerce & Amazon Sellers | eMerchant Books",
    metaDescription:
      "QuickBooks Online set up and run properly for ecommerce: A2X integration, marketplace-ready chart of accounts, inventory and sales tax. Managed by specialists.",
    h1: "QuickBooks Online, set up the way ecommerce actually works",
    lead: "QuickBooks can handle a multi-channel ecommerce business beautifully. Out of the box, it's set up for none of it. We configure it right and run it for you.",
    intro: [
      "QuickBooks Online is the default accounting file for US small business, and it's what most sellers already have. The problem is never QuickBooks; it's the setup. A default chart of accounts has no idea what a settlement, a reserve, or an FBA storage fee is, and the app-store connectors that promise to fix that mostly flood the file with order-level junk.",
      "We set up QBO with a marketplace-ready chart of accounts, summary-level posting through A2X, and clean class or location tracking per channel. Then we do the monthly work in your file, under your ownership.",
    ],
    painHeading: "Common QuickBooks-for-ecommerce failures",
    pains: [
      {
        title: "Connector chaos",
        body: "Per-order sync apps create thousands of tiny transactions, duplicate customers and unreconcilable balances. Files like that eventually get abandoned and restarted. Summary posting keeps the file fast, clean and auditable.",
      },
      {
        title: "A chart of accounts that can't answer questions",
        body: "'Sales' and 'Fees' as single accounts means no channel margins, no fee visibility, no useful reports. Our COA template breaks out what matters and nothing that doesn't.",
      },
      {
        title: "Inventory half-tracked",
        body: "QBO's native inventory works for simple cases and collapses for multi-warehouse marketplace sellers. We implement the right pattern for your size, from periodic valuation to a connected inventory tool.",
      },
    ],
    deliverables: [
      "Ecommerce chart of accounts, set up or rebuilt",
      "A2X or Link My Books configured per channel",
      "Class/location tracking for per-channel P&L",
      "Bank feeds, rules and receipt capture configured",
      "Inventory approach matched to your scale",
      "Sales tax agency setup done right",
      "Monthly bookkeeping in your file, closed by the 15th",
      "Your QBO subscription, your data, always",
    ],
    body: [
      {
        h2: "Already on QuickBooks? We fix, not restart",
        paras: [
          "Most clients arrive with an existing QBO file that's 70% right. We audit it, fix the structure, clean the backlog if there is one, and keep the history. Starting a new file is the last resort, not the sales pitch.",
          "If you're choosing software today: QBO is the safe default for US sellers, and it's what your future CPA, lender or buyer expects to open.",
        ],
      },
    ],
    related: [
      { href: "/xero-for-ecommerce/", label: "Xero for Ecommerce" },
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
      { href: "/amazon-bookkeeping-services/", label: "Amazon Bookkeeping" },
    ],
    faqTitle: "QuickBooks for ecommerce FAQs",
    faqs: [
      {
        q: "Which QuickBooks plan do I need for ecommerce?",
        a: "Usually Plus, for class tracking and inventory. Advanced only makes sense at serious scale. We'll tell you if you're overpaying for features you don't use; plenty of sellers are.",
      },
      {
        q: "Should Amazon connect to QuickBooks directly?",
        a: "Not with a per-order sync app. Use A2X-style summary posting that mirrors settlement reports. It's reconcilable, compact, and matches what Amazon actually paid you.",
      },
      {
        q: "Is QuickBooks Self-Employed enough for a marketplace seller?",
        a: "No. It has no balance sheet, no inventory and no real COGS. It's built for freelancers. Sellers need QBO proper, almost always Plus.",
      },
      {
        q: "Can you take over my existing messy QuickBooks file?",
        a: "Yes, that's most of our onboarding work. We audit, fix and keep your history rather than nuking the file, unless it's genuinely beyond saving, and then we'll show you why before doing anything.",
      },
    ],
  },
  {
    slug: "xero-for-ecommerce",
    crumb: "Xero for Ecommerce",
    metaTitle: "Xero for Ecommerce & Amazon Sellers | eMerchant Books",
    metaDescription:
      "Xero bookkeeping for ecommerce sellers: A2X integration, multi-currency, marketplace chart of accounts. One of the few US firms fluent in both Xero and QBO.",
    h1: "Xero for ecommerce, run by a firm fluent in it",
    lead: "Xero is a first-class accounting platform for ecommerce, especially multi-currency businesses. We're one of the few US ecommerce bookkeeping firms that supports it as an equal to QuickBooks.",
    intro: [
      "Plenty of US firms are QuickBooks-only; LedgerGurus, for example, won't touch Xero. But if you're already on Xero, or you sell across currencies and countries where Xero's multi-currency handling shines, switching platforms just to hire a bookkeeper is backwards.",
      "We run Xero and QBO side by side across our client base and treat both as first-class. Your books, your Xero subscription, our monthly work.",
    ],
    painHeading: "What trips up ecommerce sellers on Xero",
    pains: [
      {
        title: "US sales tax needs deliberate setup",
        body: "Xero's US sales tax handling is more manual than QBO's. Set up correctly with the right tax rates and tracking, it works fine; set up casually, collected tax leaks into revenue. We set it up correctly.",
      },
      {
        title: "Bank rules that half-match marketplace deposits",
        body: "Auto-matching a marketplace payout to a revenue account is the Xero version of the deposit-equals-revenue mistake. Payouts should clear against A2X-posted settlement summaries, not straight to sales.",
      },
      {
        title: "Multi-currency done halfway",
        body: "Selling on Amazon UK from the US, or holding EUR balances, needs consistent currency treatment or your margins move with exchange rates in ways that aren't real. Xero handles this well when the file is set up for it.",
      },
    ],
    deliverables: [
      "Xero ecommerce chart of accounts, set up or rebuilt",
      "A2X or Link My Books feeding settlement summaries",
      "Multi-currency configuration and revaluation",
      "Tracking categories for per-channel P&L",
      "Bank rules that reconcile instead of guess",
      "US sales tax setup done deliberately",
      "Monthly close in your file by the 15th",
      "Clean handoff to your CPA at year end",
    ],
    body: [
      {
        h2: "Xero or QuickBooks? An honest answer",
        paras: [
          "If you're US-only and your CPA lives in QuickBooks, QBO is the path of least resistance. If you're multi-currency, selling internationally, or coming from a country where Xero is standard (UK, Australia, New Zealand), Xero is often the better tool and there's no reason to switch. We support both, so our recommendation isn't a sales pitch.",
          "International sellers using a US LLC to sell on American platforms often arrive with Xero already. We're built for exactly that combination; see our international sellers service.",
        ],
      },
    ],
    related: [
      { href: "/quickbooks-for-ecommerce/", label: "QuickBooks for Ecommerce" },
      { href: "/international-sellers/", label: "International Sellers" },
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
    ],
    faqTitle: "Xero for ecommerce FAQs",
    faqs: [
      {
        q: "Is Xero good for Amazon sellers?",
        a: "Yes, paired with A2X for settlement posting. The accounting quality ends up identical to a well-run QBO file. The choice comes down to sales tax workflow, currency needs, and what your accountant prefers.",
      },
      {
        q: "Most US bookkeepers told me to switch to QuickBooks. Do I have to?",
        a: "No, they just don't support Xero. We do. Migrating platforms mid-growth costs weeks and risks history; if Xero fits your business, keep it.",
      },
      {
        q: "Can Xero handle US sales tax for ecommerce?",
        a: "Yes, with deliberate setup, and marketplace facilitator laws mean the platforms remit most marketplace sales tax anyway. Direct-channel sales need proper rates and filings, which we coordinate.",
      },
    ],
  },
  {
    slug: "netsuite-bookkeeping",
    crumb: "NetSuite Bookkeeping",
    metaTitle: "NetSuite Bookkeeping for Ecommerce Brands | eMerchant Books",
    metaDescription:
      "Outsourced NetSuite bookkeeping for ecommerce: month-end close, marketplace reconciliation and inventory accounting for brands that graduated from QBO.",
    h1: "NetSuite bookkeeping for ecommerce brands",
    lead: "You moved to NetSuite for inventory depth and multi-entity control. We handle the monthly accounting work inside it, with the marketplace fluency your ERP consultant doesn't have.",
    intro: [
      "Brands usually land on NetSuite somewhere past $5M, when QuickBooks starts creaking under multi-entity structures, serious inventory, or an aggregator's due-diligence checklist. What they discover is that NetSuite expertise and ecommerce accounting expertise rarely live in the same person. The implementation partner knows saved searches; they've never read an Amazon settlement report.",
      "We bring the marketplace side: channel reconciliation, settlement accounting, and COGS discipline, executed inside your NetSuite instance.",
    ],
    painHeading: "Where NetSuite ecommerce accounting breaks down",
    pains: [
      {
        title: "ERP power, spreadsheet habits",
        body: "Companies pay for NetSuite and still reconcile marketplaces in Excel because nobody set up the flow. We build the monthly close process so the ERP does what you bought it for.",
      },
      {
        title: "Item-level chaos from channel sprawl",
        body: "Same SKU on four channels with different fees and fulfillment paths needs coherent item and location structure, or margins by channel are fiction. This is setup work most implementations skip.",
      },
      {
        title: "Close cycles that drag for weeks",
        body: "A NetSuite close that lands in week four defeats the point of an ERP. Our target is the same as every client: closed by the 15th, usually sooner.",
      },
    ],
    deliverables: [
      "Monthly close managed end to end in NetSuite",
      "Marketplace settlements reconciled per channel",
      "Inventory and COGS accounting with landed costs",
      "Multi-entity and intercompany support",
      "Channel-level P&L reporting",
      "Sales tax data coordination with your filing stack",
      "Audit-ready workpapers each close",
      "Direct collaboration with your controller or CPA",
    ],
    body: [
      {
        h2: "Where we fit alongside your team",
        paras: [
          "NetSuite clients usually have some finance staff. We slot in as the execution layer: the reconciliations, the close checklist, the channel accounting. Your controller keeps strategy and approvals; your CPA keeps tax. Nobody pays CFO rates for bookkeeping work.",
          "If you're mid-migration from QuickBooks, we can run the old file, support the cutover mapping, and pick up the new instance without a gap in your monthly closes.",
        ],
      },
    ],
    related: [
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
      { href: "/ecommerce-tax-services/", label: "Ecommerce Tax Services" },
      { href: "/contact/", label: "Talk to Us" },
    ],
    faqTitle: "NetSuite bookkeeping FAQs",
    faqs: [
      {
        q: "Do you replace our NetSuite implementation partner?",
        a: "No, different job. They configure and customize the system; we do the recurring accounting work inside it. We'll happily flag configuration gaps we find, and we find them often.",
      },
      {
        q: "We're outgrowing QuickBooks. Should we move to NetSuite?",
        a: "Sometimes. Multi-entity structures, deep inventory needs and acquirer expectations push toward it. Plenty of $10M sellers also run great on QBO Plus with a good inventory tool. We'll give you the honest read since we work in both.",
      },
      {
        q: "What does NetSuite bookkeeping cost?",
        a: "More than QBO bookkeeping, less than a full-time senior accountant. Pricing depends on entities, channels and close scope, so it's quoted per engagement. Still month-to-month, still your system and your data.",
      },
    ],
  },
  {
    slug: "ecommerce-tax-services",
    crumb: "Ecommerce Tax Services",
    metaTitle: "Ecommerce Tax Accountant & CPA Services | eMerchant Books",
    metaDescription:
      "Tax-season-ready ecommerce accounting: 1099-K reconciliation, sales tax coordination, CPA-ready books and non-resident filings. Books and tax that finally agree.",
    h1: "Ecommerce tax services built on books that are actually right",
    lead: "Tax problems are usually bookkeeping problems discovered in April. We keep the books tax-ready all year, coordinate sales tax, and work with your CPA or bring one in.",
    intro: [
      "Every ecommerce tax horror story starts the same way: the return was built on bad books. Gross sales that don't match the 1099-K. COGS with no inventory support. Sales tax collected and booked as income. The CPA can only file what the books say, and by tax season it's expensive to say something different.",
      "Our tax work starts twelve months before the deadline: accrual books where the 1099-K ties out, inventory valuation that survives scrutiny, and collected tax sitting in a liability account where it belongs.",
    ],
    painHeading: "The expensive ecommerce tax mistakes",
    pains: [
      {
        title: "1099-K mismatch letters",
        body: "Marketplaces report your gross sales to the IRS. Returns filed off net deposits understate revenue, the computers notice, and the letter that follows costs more to resolve than a year of bookkeeping.",
      },
      {
        title: "Sales tax treated as revenue, or ignored",
        body: "Marketplace facilitator laws mean Amazon and Walmart remit most marketplace sales tax, but your Shopify sales are on you, and nexus can exist in states you've never visited via FBA warehouses. We keep the bookkeeping side clean and coordinate with filing tools for the rest.",
      },
      {
        title: "Foreign owners missing Form 5472",
        body: "A foreign-owned single-member US LLC that skips Form 5472 faces a $25,000 penalty per form, per year, even with zero US tax owed. We've seen sellers hit for $50,000 across two missed years. Our international practice exists for exactly this.",
      },
    ],
    deliverables: [
      "Accrual books that tie to every 1099-K",
      "Year-end CPA package: statements, GL, inventory support",
      "Sales tax collected tracked as liability, always",
      "Nexus exposure flagged as your footprint grows",
      "Coordination with TaxJar, Avalara or your filing provider",
      "Form 5472/1120 coordination for foreign-owned LLCs",
      "Quarterly estimated-tax number support",
      "Direct line to your CPA, or an introduction to ours",
    ],
    body: [
      {
        h2: "We do the books-side of tax. Deliberately.",
        paras: [
          "Bookkeeping firms that casually bolt on tax filing tend to do both halves averagely. We keep the boundary honest: we make the numbers right and tax-ready, coordinate filings, and partner with CPAs (yours or ours) for returns and strategy. You get specialists at both layers instead of one firm being mediocre at two jobs.",
          "For international sellers, that coordination includes the non-resident stack: pro-forma 1120 with Form 5472, W-8 forms for platform tax interviews, and ITIN or EIN paperwork. Details on the international sellers page.",
        ],
      },
    ],
    related: [
      { href: "/international-sellers/", label: "International Sellers" },
      { href: "/catch-up-bookkeeping-services/", label: "Catch-Up Bookkeeping" },
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
    ],
    faqTitle: "Ecommerce tax FAQs",
    faqs: [
      {
        q: "Do you file my tax return?",
        a: "We prepare tax-ready books and coordinate with a CPA who files, either yours or one from our partner network. That separation keeps both jobs done by specialists, and it means our monthly price isn't hiding a mediocre tax add-on.",
      },
      {
        q: "Do I owe sales tax in other states?",
        a: "Possibly. Marketplace sales are mostly handled by facilitator laws, but direct-channel sales create obligations where you have nexus, and FBA inventory placement can create it without you doing anything. We flag exposure as your books show your footprint growing.",
      },
      {
        q: "What does my CPA get at year end?",
        a: "Financial statements, general ledger, 1099-K reconciliation, inventory valuation support and answers to their questions, directly from us so you're not playing telephone in March.",
      },
      {
        q: "I'm not a US resident but sell on US platforms. What do I file?",
        a: "Typically a pro-forma 1120 with Form 5472 for a foreign-owned single-member LLC, plus whatever your home country requires. The 5472 penalty for skipping it is $25,000. See our international sellers page; this is a core practice area for us, not an exception.",
      },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

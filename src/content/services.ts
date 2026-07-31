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
  "P&L, balance sheet and cash flow by the 10th business day",
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
      "Monthly accrual accounting for $100K+/mo ecommerce brands. Landed-cost COGS, channel P&L, books closed by the 10th business day, guaranteed. Published pricing from $1,250/mo.",
    h1: "Monthly accounting built for $100K+/mo ecommerce brands",
    lead: "Accrual books with true landed-cost COGS for your Amazon, Shopify, eBay, Walmart and Etsy channels, closed in your own QuickBooks, Xero or NetSuite file by the 10th business day. Guaranteed in writing.",
    intro: [
      "Most bookkeepers treat an ecommerce business like a coffee shop with a website. They book the Amazon deposit as revenue, guess at COGS, and hand you a P&L that's off by thousands. We only do ecommerce, so your books reflect what actually happened: gross sales, marketplace fees, refunds, reserves, and the inventory you actually sold.",
      "You keep full ownership of your accounting file. If you ever leave, everything stays with you. That's not how Bench worked out for 12,000 businesses, and it's not how the proprietary-ledger platforms work today.",
      "The work is fully remote, so compare us the way you'd compare any outsourced ecommerce bookkeeping firm or online bookkeeping service: who owns the file, when do the books close, and what does it cost. Our answers are you, the 10th business day, and it's printed on the pricing page.",
          "Sellers usually find us searching for an accountant for ecommerce who does the monthly work properly: 1099-K ties that actually match, books kept clean month after month, and a cleanup path if the file arrives messy. That's the job, and it's all we do.",
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
        h2: "Published pricing, which no ecommerce-exclusive firm does",
        paras: [
          "Foundation starts at $1,250/mo for brands doing $100K-$250K a month and the full rate card is public on our pricing page. Every specialist competitor at this tier hides pricing behind a sales call, and sellers notice. No quote-gate, no annual contract, month-to-month.",
          "The usual front door is our Diligence Readiness Assessment: $2,500, ten business days, a 40-point score of your books against what buyers and lenders actually check, credited in full against onboarding.",
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
        q: "How much does ecommerce accounting cost at the $100K+/mo level?",
        a: "Our Foundation tier starts at $1,250/mo for brands doing $100K-$250K a month, Command at $3,500/mo adds controller-level work for $250K-$850K/mo, and Exit-Grade at $7,500/mo adds senior-controller exit preparation. The full rate card is public on our pricing page, which no ecommerce-exclusive competitor offers. Market context: comparable firms run $1,500 to $15,000/mo, quoted only after a sales call.",
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
        a: "By the 10th business day, guaranteed in writing: if we miss it, that month's fee is 50% off. Most months they're ready earlier; marketplace settlement timing sets the floor.",
      },
      {
        q: "What if my books are months behind right now?",
        a: "That's a catch-up project, and we do those at a discounted rate before your monthly service starts. Most catch-ups take one to three weeks depending on how many months and channels are involved.",
      },
      {
        q: "How do I hire a bookkeeper for my ecommerce business?",
        a: "Start with a hard look at the last three months of books, which is what our Diligence Readiness Assessment does in ten business days for $2,500, credited in full against onboarding. Screening any firm? Ask three things: do they work from settlement reports or bank feeds, do they book COGS on inventory movement, and do you keep the file if you leave. A wrong answer on any of those costs real money later.",
      },
      {
        q: "What does a monthly ecommerce bookkeeping service include?",
        a: "Every channel reconciled from settlement reports, COGS booked on inventory movement, sales tax kept out of revenue, and a P&L, balance sheet and cash flow delivered by the 10th business day. Add a monthly video walkthrough and a bookkeeper you can text. It's full outsourced bookkeeping for ecommerce, not software with a support inbox.",
      },
      {
        q: "Is virtual bookkeeping safe for a seven-figure store?",
        a: "It's the norm at this level. Searching 'ecommerce accountant near me' mostly surfaces generalists, because the specialists work remotely. The work happens inside your own QuickBooks, Xero or NetSuite file with read-level channel access, so nothing sensitive lives on our side. The real risk is a proprietary ledger you can't export. Ask Bench's 12,000 stranded customers how that ended.",
      },
      {
        q: "What's the best accounting software for an ecommerce business?",
        a: "QuickBooks Online Plus for most US sellers, Xero if you're multi-currency, NetSuite once multi-entity structures or acquirer diligence demand it. The setup matters more than the software: A2X-style settlement posting and a marketplace-ready chart of accounts fix more problems than switching platforms ever will. We work in all three.",
      },
      {
        q: "When should I switch from DIY bookkeeping to a service?",
        a: "When the cost of an error passes the cost of the service, which for most sellers happens between $50K and $100K a month. At that size a 2% COGS mistake is $12,000 to $24,000 a year of fiction in your margins, more than a year of bookkeeping fees. Already there and behind? Start with catch-up, then go monthly.",
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
      "Sellers call this work different things: bookkeeping cleanup services, historical bookkeeping, a QuickBooks cleanup, getting caught up before tax season. Same job. We rebuild what's missing and fix what's wrong, at a discounted rate compared to monthly service, with a fixed quote before we start. No hourly meter running.",
          "This is outsourced catch-up at its most practical: a bookkeeper for the backlog you've been avoiding, an accountant for the questions the backlog raises, and online bookkeeping discipline afterward so it never rebuilds.",
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
          "Most clients roll straight into monthly service so the backlog never rebuilds, with the catch-up fee credited against your Diligence Readiness Assessment if you started there. But there's no obligation. If you just need clean books handed back, that's a fine outcome too, and everything lives in your own QuickBooks or Xero file either way.",
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
      {
        q: "Can you clean up my books before tax season?",
        a: "Yes, and the earlier you start, the more options you have. A single-channel cleanup begun in January is comfortably done for a March deadline; a multi-year, multi-channel rebuild begun in March means your CPA files an extension. Extensions are fine. Filing off wrong books is the expensive choice.",
      },
      {
        q: "What's the difference between catch-up and cleanup bookkeeping?",
        a: "Catch-up fills months that were never done; cleanup fixes months that were done wrong. Most ecommerce projects are both: the DIY era is missing and the previous-bookkeeper era is wrong. We quote them together after looking at your file, and the deliverable is the same either way: books you and your CPA can trust.",
      },
      {
        q: "Do I need clean books to get a loan or line of credit?",
        a: "Yes. Lenders ask for financial statements, and inventory lenders specifically check whether COGS ties to actual inventory movement. Books built off bank deposits get applications declined or priced worse. A catch-up project before you apply typically takes one to three weeks, which is faster than most underwriting anyway.",
      },
      {
        q: "Will years of messy books trigger an IRS audit?",
        a: "Messy books don't trigger audits; mismatches do. The IRS computer compares your 1099-Ks to your return, and net-deposit bookkeeping guarantees those numbers disagree. Rebuilding from settlement reports makes gross sales tie to the forms, which keeps the matching program quiet. If a letter already arrived, clean books are how you answer it.",
      },
      {
        q: "Can you catch up books across multiple sales channels?",
        a: "Yes, that's most of our catch-up work: Amazon plus Shopify plus eBay, each rebuilt from its own settlement reports into one accounting file with per-channel numbers. Channel count mostly affects the quote, not the feasibility, and single-channel projects simply finish faster.",
      },
      {
        q: "Who is this catch-up bookkeeping service for?",
        a: "Ecommerce and marketplace sellers, which is the whole firm's focus. If the backlog belongs to a restaurant or a law practice, a generalist will serve you better. If it's two years of Amazon settlements, a gateway tangle and an inventory question nobody can answer, that's exactly the mess we rebuild every month.",
      },
    ],
  },
  {
    slug: "amazon-bookkeeping-services",
    crumb: "Amazon Bookkeeping",
    metaTitle: "Amazon Bookkeeping Services & Seller Accounting | eMerchant Books",
    metaDescription:
      "Amazon accounting for $100K+/mo sellers by people who read settlement reports. FBA fees, reserves, refunds and landed-cost COGS done right in your own QuickBooks, Xero or NetSuite.",
    h1: "Amazon bookkeeping by people who actually read settlement reports",
    lead: "Your Amazon deposit is not your revenue. We rebuild every settlement into real sales, fees, refunds and reserves inside your own QuickBooks or Xero file, so your margins finally mean something.",
    intro: [
      "Amazon pays you every two weeks in a lump that mixes last period's sales with this period's refunds, a dozen fee types, reserve holds and the occasional reimbursement. A bookkeeper who doesn't sell on Amazon sees one deposit. We see the 40-plus transaction types underneath it.",
      "That difference is why sellers leave generalists. As one r/FulfillmentByAmazon seller put it: \"My CPA doesn't know what Amazon is, so sometimes it's harder asking related questions.\" You shouldn't have to teach your bookkeeper your own business. That's the gap dedicated Amazon bookkeeping services close: a bookkeeper for Amazon sellers who already knows what a reserve hold is, works in your file, and never needs the acronyms explained.",
          "Whether you call it bookkeeping for Amazon sellers, outsourced Amazon accounting, or online bookkeeping with someone who reads settlement reports, the work is the same and it's our core practice.",
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
      "P&L, balance sheet and cash flow by the 10th business day",
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
        a: "At seven figures, yes, and specifically one who knows marketplaces. The cost of getting settlements, COGS and sales tax wrong scales with your volume: a 2% COGS error on $3M in sales is $60,000 of fiction in your margins, and it compounds at financing or exit time.",
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
        q: "Do you work with new or small Amazon sellers?",
        a: "No. We work exclusively with sellers doing $100K+ a month in revenue, because our process is built for the operating complexity that starts there: multi-channel settlements, inventory financing, real COGS. Under $100K/mo, join our waitlist and we'll introduce you to a vetted starter bookkeeper, then take over when you cross seven figures.",
      },
      {
        q: "My last bookkeeper just categorized the deposits. How bad is it?",
        a: "Common, and fixable. We rebuild past periods from settlement reports as a catch-up project, then keep it right going forward. You'll likely discover your real margins for the first time.",
      },
      {
        q: "How much does Amazon bookkeeping cost?",
        a: "Our Foundation tier starts at $1,250/mo for sellers doing $100K to $250K a month, and the full rate card is public on our pricing page. Specialist Amazon accounting firms typically run $1,500 to $15,000 a month, quoted only after a sales call. We're month-to-month with no annual contract, and catch-up months bill at a discount to the monthly rate.",
      },
      {
        q: "What does an Amazon accountant do that a regular bookkeeper doesn't?",
        a: "Reads settlement reports. That one habit drives everything else: gross sales rebuilt from the 40-plus transaction types, fees broken out by category, reserves tracked as money you've earned but don't hold, and COGS tied to FBA inventory movement. A generalist categorizes deposits. An Amazon accountant reconstructs what the deposits are hiding.",
      },
      {
        q: "How do I record Amazon sales in QuickBooks?",
        a: "Post each settlement as a summary entry: gross sales, refunds, each fee category and the reserve change, with the deposit clearing the balance. A2X or Link My Books automates exactly that. Don't let a per-order sync app import thousands of transactions, and don't book deposits straight to a sales account. We set the mapping up during onboarding and run it monthly.",
      },
      {
        q: "Can you clean up my existing Amazon books?",
        a: "Yes, and it's how most clients start: we rebuild past periods from settlement reports, fix COGS, and reconcile every 1099-K, with a flat quote before we begin. Most cleanup projects take one to three weeks. Monthly service afterward keeps the backlog from ever rebuilding.",
      },
      {
        q: "Cash or accrual accounting for Amazon sellers?",
        a: "Accrual, without much debate at your size. Amazon's two-week settlement lag and rolling reserves mean cash-basis books put January's sales in February and hide money you've earned. Accrual with real inventory accounting is also what lenders, aggregators and the IRS expect from a seven-figure seller.",
      },
    ],
  },
  {
    slug: "shopify-bookkeeping-services",
    crumb: "Shopify Bookkeeping",
    metaTitle: "Shopify Bookkeeping Services & Accounting | eMerchant Books",
    metaDescription:
      "Shopify accounting for $100K+/mo DTC brands: multi-gateway reconciliation, landed-cost COGS and channel P&L in your own QuickBooks, Xero or NetSuite. Closed by day 10, guaranteed.",
    h1: "Shopify bookkeeping for stores that take margins seriously",
    lead: "Shopify Payments, PayPal, Klarna, gift cards, refunds and chargebacks, reconciled into one honest P&L in your own QuickBooks or Xero file.",
    intro: [
      "A Shopify store looks simpler to account for than a marketplace business. It isn't. Revenue arrives through three or four gateways on different payout schedules, discounts and gift cards muddy gross sales, and the official Shopify-QuickBooks connector is notorious for quietly mangling inventory and COGS.",
      "We reconcile each gateway's payouts to Shopify's own reports, so what your books say matches what your dashboard says, and both match your bank. That reconciliation is the core of our Shopify bookkeeping service and the exact piece DIY setups skip. Hire a bookkeeper for a Shopify store without asking about gateway tie-outs and you'll get pretty reports built on the wrong revenue number.",
          "If you've been searching for a Shopify bookkeeper who actually understands the platform, that's the whole practice here. We handle outsourced bookkeeping for Shopify sellers end to end: online bookkeeping in your own file, accounting for Shopify Payments and every other gateway, 1099-K reconciliation at year end, and a Shopify accounting workflow your CPA can rely on. Bookkeeping for Shopify stores is not a sideline for us, and hiring an accountant for Shopify shouldn't mean teaching them the platform on your invoice.",
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
      "P&L, balance sheet and cash flow by the 10th business day",
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
        a: "At $100K+ a month with inventory, unquestionably. The gateway reconciliation and COGS work is where DIY and generalist books quietly fall apart, usually discovered at tax time, or worse, in diligence when a buyer reprices the deal over it.",
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
      {
        q: "How much does Shopify bookkeeping cost?",
        a: "From $1,250/mo at the $100K-$250K monthly revenue tier, published on our pricing page instead of hidden behind a demo call. That's full monthly accounting: every gateway reconciled, COGS on inventory movement, per-channel P&L if you also sell on marketplaces, closed by the 10th business day. Month-to-month, no annual contract.",
      },
      {
        q: "What does a Shopify accountant do each month?",
        a: "Reconciles every gateway's payouts to Shopify's reports and your bank, books COGS from what actually shipped, tracks gift card liabilities, keeps collected sales tax out of revenue, and closes the file by the 10th business day with a video walkthrough. Your dashboard tells you sales. Your accountant tells you profit.",
      },
      {
        q: "How do I record Shopify sales in QuickBooks?",
        a: "Summary entries per gateway payout: gross sales, discounts, refunds and fees, with the deposit clearing the balance and gift cards parked in a liability account until redeemed. A2X or Link My Books posts it automatically. Per-order sync apps are the thing to avoid; they're the top reason Shopify QuickBooks files get abandoned and restarted.",
      },
      {
        q: "Can you clean up my Shopify books?",
        a: "Yes. If a connector app flooded your file or a previous bookkeeper booked payouts as revenue, we rebuild the affected months from gateway and Shopify reports at a flat quote, usually in one to three weeks. Cleanup then rolls into monthly service so the mess doesn't come back.",
      },
      {
        q: "Cash or accrual for a Shopify store?",
        a: "Accrual, because you carry inventory. Cash books expense a $60,000 stock order the month you pay for it, which wrecks that month's margin and flatters the next six. Accrual matches cost to the sale, which is the number you price by, borrow against, and eventually sell the company on.",
      },
      {
        q: "When should a Shopify store hire a bookkeeper?",
        a: "Once you're carrying real inventory and running more than one payment gateway, generally around $50K to $100K a month. Below that, disciplined DIY can hold. Above it, gateway reconciliation and COGS work take hours you don't have and punish errors you can't see. Most clients hire us about a year later than they wish they had.",
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
      "We treat eBay as a first-class channel, whether it's your whole business or one of five. Sellers usually land here after searching for eBay bookkeeping services or a bookkeeper for eBay sellers and finding almost nothing built for them. Fine by us. It's a specialty worth owning.",
          "If you've looked for outsourced eBay bookkeeping or an online bookkeeping service that doesn't treat eBay as an afterthought, this page is the answer to that search.",
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
      "P&L, balance sheet and cash flow by the 10th business day",
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
          "eBay sellers skew smaller than Shopify brands, so most specialist firms never built for the platform at all, and the seven-figure eBay operations that do exist get treated like edge cases. They're our clients. A $2M eBay reseller has settlement, COGS and 1099-K complexity every bit as real as a DTC brand's, and books that deserve the same standard.",
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
        a: "The short version: rebuild gross activity from eBay's transaction reports rather than booking net payouts, track fees by type, match label costs to orders, and keep COGS on inventory movement. Or have us do it as part of a multi-channel engagement.",
      },
      {
        q: "Does my eBay 1099-K match my bank deposits?",
        a: "No, and it shouldn't. The 1099-K reports gross payments; deposits are net of fees, labels and refunds. Books built from transaction reports reconcile the two, which is what keeps an IRS mismatch letter from becoming a project.",
      },
      {
        q: "I sell on eBay part-time. Is this worth it?",
        a: "We work with sellers doing $100K+ a month across their channels, so part-time eBay alone usually isn't a fit. If eBay is one channel of a larger operation, it absolutely is, and it gets the same settlement-level treatment as the rest.",
      },
      {
        q: "Can you handle eBay stores with thousands of small orders?",
        a: "Yes. We post summary-level, reconciled entries rather than per-order noise, so volume doesn't degrade your accounting file.",
      },
      {
        q: "How much does eBay bookkeeping cost?",
        a: "From $1,250/mo for operations doing $100K to $250K a month across channels, with the full rate card on our pricing page. eBay-heavy businesses aren't priced differently from Amazon or Shopify ones; the work is settlement rebuilds either way. Catch-up months bill at a discount, and everything is month-to-month.",
      },
      {
        q: "Do I need an accountant for my eBay business?",
        a: "At six or seven figures, yes. eBay's netted payouts mean DIY books almost always understate both revenue and expenses, and the 1099-K reports gross, so the mismatch is built in. An eBay accountant who rebuilds from transaction reports fixes that and shows real per-item margins, which changes what you source next.",
      },
      {
        q: "What's the best accounting software for eBay sellers?",
        a: "QuickBooks Online, with eBay activity posted as summarized, reconciled entries from transaction reports. Xero works just as well if you're already on it. Spreadsheets hold up surprisingly long for listings and sourcing, but they can't produce the balance sheet a lender wants or the 1099-K reconciliation the IRS effectively demands.",
      },
      {
        q: "How should eBay fees be recorded in my books?",
        a: "By type, not as one lump: final value fees, per-order fees, promoted listings as advertising, shipping labels matched to orders. Each tells you something different. Promoted listings creeping from 2% to 8% of sales is a marketing decision you can only catch if the books keep it separate.",
      },
      {
        q: "Cash or accrual for eBay sellers?",
        a: "Accrual once inventory is significant, which for a reseller it always is. Sourcing costs need to sit in inventory until items sell, or every heavy sourcing month looks like a loss and every selling-down month looks like a windfall. Accrual also puts multi-month refund chains in the right periods.",
      },
      {
        q: "Can you clean up my eBay books?",
        a: "Yes. eBay keeps transaction-level history we can rebuild from, so even multi-year cleanups are routine: gross activity restored, fees broken out, label costs matched, every 1099-K reconciled. Flat quote before we start, one to three weeks for most projects, and monthly service after if you want it to stay fixed.",
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
      "We reconcile Walmart the way we reconcile Amazon: settlement by settlement, fee by fee, into your own QuickBooks or Xero file. That makes this one of the few real Walmart bookkeeping services around: a bookkeeper for Walmart Marketplace sellers who works the channel's own reports every month, not an Amazon template with the logo swapped.",
          "Sellers find us searching for an accountant for Walmart Marketplace, outsourced Walmart bookkeeping, or just online bookkeeping that understands WFS. All three land in the same place: settlement-level books, done monthly.",
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
      "Books closed by the 10th business day, guaranteed",
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
      {
        q: "How much does Walmart Marketplace bookkeeping cost?",
        a: "From $1,250/mo as part of our standard tiers, which cover all your channels rather than Walmart alone. The full rate card is public on our pricing page, month-to-month, no annual contract. Since nearly every Walmart seller we serve also runs Amazon or Shopify, pricing keys off total monthly revenue across channels.",
      },
      {
        q: "Do I need a bookkeeper for my Walmart Marketplace business?",
        a: "If Walmart has grown past experiment size, yes, and specifically one who reconciles Walmart's own settlement reports. The common failure is bolting Walmart onto an Amazon-shaped setup, which produces plausible-looking numbers that don't survive reconciliation. Clean per-channel books are also what tell you whether Walmart deserves more inventory next quarter.",
      },
      {
        q: "How do I record Walmart sales in QuickBooks?",
        a: "Summary entries per settlement: gross sales, referral fees, WFS charges, refunds and adjustments, with the deposit clearing the entry. A2X supports Walmart, which is what we typically configure. Booking Walmart deposits straight to revenue understates sales by your whole fee load and breaks the 1099-K tie-out.",
      },
      {
        q: "Does Walmart Marketplace send a 1099-K?",
        a: "Yes, reporting gross sales, while your deposits arrive net of fees and refunds. Books that rebuild gross activity reconcile the two; books built on deposits can't. That reconciliation is a standard January deliverable in our Walmart bookkeeping work, not an extra.",
      },
      {
        q: "Can you catch up my Walmart books?",
        a: "Yes. Walmart's settlement history covers what a rebuild needs: gross sales, fee detail, WFS charges, refunds. Catch-up is quoted flat, billed at a discount to monthly rates, and typically done in one to three weeks alongside whatever other channels need the same treatment.",
      },
      {
        q: "Cash or accrual for Walmart sellers?",
        a: "Accrual. Walmart's settlement lag shifts cash-basis sales into the wrong periods, and inventory sitting in WFS needs real inventory accounting or your margins are guesses. Every seller we work with runs accrual books; it's also what financing and diligence require.",
      },
      {
        q: "Is WFS or FBA better for my margins?",
        a: "Your books should answer that, not a forum thread. With WFS fees broken out and per-channel P&L in place, you can compare fulfillment cost per unit on the same SKU across both programs. We set the books up so that comparison is a report you can pull, and the answer genuinely differs by SKU size and velocity.",
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
      "Makers add a second layer: materials-based COGS. Pricing handmade work without knowing your true cost per piece is how shops stay busy and broke. An Etsy accountant earns the fee by fixing both layers: the payment-account rebuild and the per-piece costing. That's what our Etsy bookkeeping service does, monthly, in a file you own.",
          "Makers usually get here searching for a bookkeeper for Etsy sellers or an accountant for a handmade business, and most arrive with a backlog. Outsourced, online bookkeeping with a catch-up first is the standard path, and the materials costing survives the transition.",
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
      "Books closed by the 10th business day",
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
        a: "For the sellers we serve, Etsy is usually one channel of a $100K+/mo multi-channel operation, and yes, it needs real books: the IRS already sees your gross sales via the 1099-K, and buyers in diligence will ask about every channel, including the small ones.",
      },
      {
        q: "How do I figure out COGS for handmade items?",
        a: "Break each product into materials cost per unit, based on what you actually pay in bulk, plus direct packaging. We build and maintain that costing with you so it updates when supply prices move.",
      },
      {
        q: "Etsy is my side business. Is this overkill?",
        a: "If Etsy is a side business, we're probably not your firm yet: we work with $100K+/mo operations. Join the waitlist and take our free close checklist, and we'll be here when the business crosses seven figures.",
      },
      {
        q: "How much does Etsy bookkeeping cost?",
        a: "Our specialist tiers start at $1,250/mo, priced on total revenue across your channels, with the full rate card on our pricing page. For most clients Etsy is one channel of a larger operation, so there's no separate Etsy fee: the shop gets the same settlement-level treatment as everything else, inside one monthly close.",
      },
      {
        q: "What does an Etsy accountant do?",
        a: "Rebuilds the payment account into gross sales, fees by type, ad costs and refunds, then ties deposits to the bank. For makers, they also maintain materials costing so each piece carries a real cost. The output is a P&L that says what the shop earns, which Etsy's own stats can't, because they don't know your costs.",
      },
      {
        q: "How do I record Etsy sales in QuickBooks?",
        a: "Monthly summary entries built from Etsy's CSVs: gross sales, then listing, transaction, processing and ad fees each to their own account, refunds separate, deposits clearing the balance. Never book deposits as revenue; the payment account nets so much activity that deposits barely correlate with any month's sales. We run this rebuild every month.",
      },
      {
        q: "Does Etsy report my sales to the IRS?",
        a: "Yes, on a 1099-K showing gross sales for the year. Your bank deposits will run thousands lower after fees, ads and refunds, and a return filed off deposits won't match the form. Books that rebuild gross activity reconcile the two, which is what keeps the IRS matching program from generating a letter.",
      },
      {
        q: "What's the best accounting software for an Etsy shop?",
        a: "QuickBooks Online for most US shops, Xero if you're multi-currency or outside the US. Either works once Etsy activity is posted as monthly summaries instead of per-order noise. The software choice matters less than the discipline of rebuilding the payment account monthly, which is the step shops skip.",
      },
      {
        q: "Can you clean up my Etsy books?",
        a: "Yes. Etsy's CSV history lets us rebuild past months completely: gross sales, every fee type, Offsite Ads costs, refunds and deposit tie-outs. Cleanup is quoted flat and billed at a discount to monthly rates. Multi-year rebuilds ahead of a tax deadline or a loan application are common.",
      },
      {
        q: "Cash or accrual for an Etsy shop?",
        a: "Accrual once inventory or materials spending is significant. Expensing a bulk materials order the month you buy it makes that month look bad and the next several look better than they were. Accrual with per-piece costing shows the real margin on each sale, which is the number you should price from.",
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
      "We set up QBO with a marketplace-ready chart of accounts, summary-level posting through A2X, and clean class or location tracking per channel. Then we do the monthly work in your file, under your ownership. That's the difference between buying software and hiring a QuickBooks bookkeeping service that knows ecommerce: the setup is right, and someone accountable does the monthly work.",
          "Plenty of sellers want a bookkeeper for QuickBooks specifically: an accountant for the file they already own, outsourced monthly upkeep, online bookkeeping that keeps 1099-K reconciliation tight, and a catch-up when the file arrives behind. That's this service.",
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
      "Monthly bookkeeping in your file, closed by the 10th business day",
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
      {
        q: "How much does QuickBooks bookkeeping for ecommerce cost?",
        a: "From $1,250/mo for sellers doing $100K to $250K a month, with the full rate card public on our pricing page, plus your own QBO subscription paid to Intuit. Setup or rebuild work folds into onboarding rather than surprise line items. Month-to-month, and the file stays yours if you ever leave.",
      },
      {
        q: "Do I need a bookkeeper if I have QuickBooks?",
        a: "QuickBooks is a filing cabinet, not a bookkeeper. It won't rebuild settlements, book COGS on inventory movement, or keep collected sales tax out of revenue; someone has to do that work inside it. At $100K+ a month, that someone should be a specialist, because the ecommerce-specific work is exactly the part QBO can't automate.",
      },
      {
        q: "How do I record marketplace sales in QuickBooks Online?",
        a: "Summary journal entries that mirror each settlement report: gross sales, fees by type, refunds, reserves, deposit clearing the balance. A2X or Link My Books posts them automatically once mapped. That single pattern, settlement-mirroring summaries instead of per-order sync, decides whether a QBO file stays reconcilable for years or collapses in months.",
      },
      {
        q: "Can you set up QuickBooks for my ecommerce business from scratch?",
        a: "Yes: marketplace-ready chart of accounts, A2X mapping per channel, class or location tracking for per-channel P&L, bank feeds and rules, sales tax agencies, and an inventory approach that fits your size. Setup alone is a scoped project; most clients then have us run the file monthly, which is where the setup pays off.",
      },
      {
        q: "Do you offer QuickBooks cleanup services?",
        a: "Constantly. Connector wreckage, deposit-as-revenue history, duplicate customers, half-tracked inventory: we audit the file, quote the cleanup flat, and fix it while keeping your history. Most cleanups take one to three weeks. Nuking the file and starting over is the last resort, not the default recommendation.",
      },
      {
        q: "QuickBooks Online or Desktop for an ecommerce seller?",
        a: "Online. The integration ecosystem that makes ecommerce accounting work, from A2X to inventory tools to multi-user access for your bookkeeper and CPA, is built for QBO, and Intuit has been steering Desktop toward retirement for years. If you're on Desktop today, migration is a solved problem we handle inside onboarding.",
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
      "We run Xero and QBO side by side across our client base and treat both as first-class. Your books, your Xero subscription, our monthly work. If you've been hunting for a Xero bookkeeper for ecommerce, or a Xero accounting firm that won't open with a QuickBooks migration pitch, that gap is exactly what we fill.",
          "If you're searching for an accountant for Xero, outsourced Xero bookkeeping, or online bookkeeping that keeps your 1099-K reconciliation clean without forcing a platform switch, you've found the rare US firm that does it.",
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
      "Monthly close in your file by the 10th business day",
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
      {
        q: "How much does Xero bookkeeping for ecommerce cost?",
        a: "The same as our QuickBooks engagements: from $1,250/mo at the $100K-$250K monthly tier, with the rate card public on our pricing page, month-to-month. There's no Xero surcharge because there's no Xero learning curve on our side; we run it daily across the client base.",
      },
      {
        q: "How do I record Amazon sales in Xero?",
        a: "Post each settlement as a summarized entry from A2X: gross sales, fees by category, refunds and reserve movements, with the payout clearing against it. The Xero-specific trap is a bank rule that auto-codes marketplace deposits to a sales account; it rebuilds the deposit-equals-revenue mistake automatically, so we remove those first.",
      },
      {
        q: "Can you migrate me from QuickBooks to Xero, or the other way?",
        a: "Yes, both directions, though we'll tell you first if the migration isn't worth it, and often it isn't. When it is, we bring balances, open items and comparative history across, validate a parallel month, and keep the close running through the cutover so there's no gap in your numbers.",
      },
      {
        q: "Do I need a Xero-certified bookkeeper for my ecommerce business?",
        a: "You need one fluent in ecommerce first and Xero second; certification badges don't teach settlement accounting. The rare combination is a bookkeeper who knows what an Amazon reserve is and how Xero's tracking categories, multi-currency and bank rules should be built around it. That combination is this service.",
      },
      {
        q: "Do you offer Xero cleanup or catch-up services?",
        a: "Yes. Half-matched bank rules, collected tax leaking into revenue, multi-currency drift: we rebuild the affected months from settlement and gateway reports at a flat quote, usually in one to three weeks. Xero's audit trail keeps every fix transparent, and monthly service afterward keeps the file clean.",
      },
      {
        q: "Cash or accrual in Xero for an ecommerce business?",
        a: "Accrual, with inventory accounting. Xero handles it well: settlement summaries land in the right periods, COGS follows inventory movement, and revaluation keeps foreign-currency balances honest. When your CPA wants a cash-basis view for the return, that's one click; the books themselves should stay accrual.",
      },
      {
        q: "Is Xero better than QuickBooks for international sellers?",
        a: "Often, yes. Xero's multi-currency handling is cleaner, and sellers from the UK, Australia and New Zealand usually arrive already fluent in it. A non-resident running a US LLC on American marketplaces with a Xero file is a combination we support end to end, including Form 5472 coordination on the tax side.",
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
      "We bring the marketplace side: channel reconciliation, settlement accounting, and COGS discipline, executed inside your NetSuite instance. Call it outsourced NetSuite accounting with marketplace fluency built in: the monthly close run by people who've actually read the settlement reports feeding it.",
          "Brands come to us wanting a bookkeeper for NetSuite's monthly grind, an accountant for the marketplace side their implementation partner skipped, online bookkeeping discipline inside an ERP, 1099-K ties at year end, and a catch-up when closes have drifted. How much does it cost? Less than a senior hire, quoted per engagement.",
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
        body: "A NetSuite close that lands in week four defeats the point of an ERP. Our target is the same as every client: closed by the 10th business day, usually sooner.",
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
      {
        q: "How is outsourced NetSuite bookkeeping different from hiring a staff accountant?",
        a: "A staff accountant runs $75K to $95K plus benefits and typically knows NetSuite or marketplaces, rarely both. Outsourced NetSuite accounting gets you the close, the channel reconciliations and the workpapers for less than one salary, with coverage that doesn't take PTO. Most clients keep a controller for judgment and hand us the execution.",
      },
      {
        q: "Can you clean up a messy NetSuite instance?",
        a: "The accounting side, yes: unreconciled channel activity, COGS drift, item-mapping chaos, closes that stopped happening. We rebuild the affected periods and stand up a repeatable close process. Deep platform reconfiguration stays with your implementation partner, and we hand them a specific punch list rather than vague complaints.",
      },
      {
        q: "How do you record Amazon and Shopify sales in NetSuite?",
        a: "Summarized settlement-level entries per channel, mapped to your item and location structure, with payouts clearing against them. Depending on the instance that's a connector, a scheduled import, or entries we build from settlement reports directly. What we won't do is let order-level sync flood the GL; that pattern hurts in NetSuite too.",
      },
      {
        q: "How fast should a NetSuite month-end close be?",
        a: "The 10th business day, the same target we hold for every client. If your close currently lands in week four, the fix is usually process, not platform: a close checklist, reconciliations that run all month instead of piling up, and channel data arriving summarized. Most engagements shorten the close by a week or more.",
      },
      {
        q: "Do you support multi-entity NetSuite setups?",
        a: "Yes. Intercompany transactions, consolidated reporting and per-entity closes are standard in our NetSuite work. Multi-entity is usually why brands bought NetSuite in the first place, and it's where spreadsheet workarounds hurt most. Holding-company-plus-operating-company structures ahead of an exit are a pattern we see often.",
      },
      {
        q: "Can you work alongside our controller or CFO?",
        a: "That's the standard shape of the engagement: your controller keeps approvals, judgment and board reporting; we run the reconciliations, close checklist and channel accounting underneath. CFOs like it because the close stops depending on one overloaded person, and nobody pays controller rates for bookkeeping hours.",
      },
      {
        q: "What do audit-ready workpapers actually include?",
        a: "A reconciliation for every material balance-sheet account, settlement tie-outs per channel, inventory valuation support with landed costs, and a close checklist showing who did what and when. When a lender, auditor or acquirer asks a question, the answer is a workpaper, not an archaeology project. That's the deliverable every single close.",
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
      "Our tax work starts twelve months before the deadline: accrual books where the 1099-K ties out, inventory valuation that survives scrutiny, and collected tax sitting in a liability account where it belongs. If you went looking for an ecommerce tax accountant because last April went badly, the books are almost always where the fix starts, and a tax accountant for online sellers is only as good as the file underneath them.",
          "Sellers land here searching for a bookkeeper for tax season, bookkeeping for an audit that's suddenly real, or outsourced online bookkeeping that keeps QuickBooks tax-ready all year instead of rebuilt every April. Prevention is the product.",
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
      {
        q: "How much do ecommerce tax services cost?",
        a: "The books side is built into monthly service, from $1,250/mo with the rate card public on our pricing page. Return preparation is billed by the CPA who files, yours or one we introduce, typically a few thousand dollars for an ecommerce entity. Two specialist layers, each priced in the open, instead of one blended fee hiding a mediocre add-on.",
      },
      {
        q: "Do I need an ecommerce tax accountant, or is my local CPA enough?",
        a: "Keep your CPA; give them better inputs. Most tax-season pain comes from books that don't tie to the 1099-Ks or support COGS, not from the CPA's tax knowledge. If your CPA has never seen a settlement report, we cover that gap all year and hand over a clean file. And if you want a CPA who knows ecommerce cold, we'll introduce one.",
      },
      {
        q: "Cash or accrual for ecommerce taxes?",
        a: "Keep the books accrual and let your CPA pick the return's method; the IRS allows either for most sellers under roughly $30M in revenue. Accrual books convert down to a cash-basis return easily. Cash books can't convert up without a rebuild, and they misstate an inventory business all year no matter what the return says.",
      },
      {
        q: "What triggers IRS attention for ecommerce sellers?",
        a: "Mismatches, mostly: returns that don't tie to 1099-K gross, COGS with no inventory support, and year-over-year swings the filings don't explain. The matching is automated, so 'they probably won't notice' isn't a strategy. Books that reconcile to every form are the boring, effective defense, and boring is exactly the goal.",
      },
      {
        q: "Can you get my books tax-ready before this year's deadline?",
        a: "Usually, if you start now. A catch-up project runs one to three weeks for most sellers, and we can prioritize the periods your CPA needs first. If the calendar truly doesn't allow it, an extension filed on clean books beats an on-time return built on wrong ones; the extension is free, while the amended return is not.",
      },
      {
        q: "How do quarterly estimated taxes work for an ecommerce seller?",
        a: "Four payments a year, based on either 90% of this year's tax or the safe harbor of 100% of last year's (110% at higher incomes). The hard part isn't the rule; it's knowing your actual profit mid-year, which is precisely what monthly accrual books give you. We keep the estimate number current and your CPA blesses it.",
      },
    ],
  },
  {
    slug: "custom-integrations",
    crumb: "Integrations & Ops Engineering",
    metaTitle: "Custom Integrations & Ops Automation for Ecommerce | eMerchant Books",
    metaDescription:
      "The accounting firm that also builds: custom integrations, workflow automation and ops tooling for ecommerce brands doing $100K+ a month. ERP, 3PL, marketplace and reporting glue.",
    h1: "Custom integrations and ops engineering, from your accounting firm",
    lead: "We're the accounting firm that also writes software. Custom integrations, workflow automation and operations tooling for $100K+/mo brands whose tool stack stopped fitting off-the-shelf connectors.",
    intro: [
      "Every established seller runs a stack: marketplaces, an ERP or accounting file, a 3PL or WMS, repricers, a returns pipeline, spreadsheets gluing it together. Somewhere around $100K a month the off-the-shelf connectors stop covering the gaps, and the ops team starts burning hours on exports, re-keying and reconciliation scripts someone's cousin wrote in 2022.",
      "No other accounting firm can fix that; they don't employ engineers. We do. And because we also keep your books, the integrations we build are accounting-aware from day one: the data lands clean, reconciled and audit-ready instead of creating the next mess. If you've priced this work with dev shops or gone searching for ecommerce automation help, the difference here is simple: the people building your pipelines also close your books.",
          "Ops teams find this page searching for automation help their bookkeeper for daily processes can't build and their accountant for month-end can't script. We do both: outsourced engineering with online bookkeeping context, 1099 data flows included, catch-up data rebuilds when systems drifted, and a flat quote for how much before anything starts.",
],
    painHeading: "The gaps we get hired to close",
    pains: [
      {
        title: "Systems that don't talk",
        body: "Your 3PL knows inventory, your ERP knows cost, your marketplace knows sales, and nothing agrees at month end. We build the sync layer with reconciliation built in, so one number is the number.",
      },
      {
        title: "Manual workflows eating your team",
        body: "Order routing, PO creation, returns triage, settlement downloads, reprice-and-relist loops: if a person does it in a browser every day, it can usually be automated in a week and paid back in a month.",
      },
      {
        title: "Reporting your tools refuse to produce",
        body: "SKU-level contribution margin across channels, landed cost by container, channel cohort dashboards, exec scorecards. Off-the-shelf analytics stops where your questions start. Custom reporting picks up from there.",
      },
    ],
    deliverables: [
      "Custom marketplace/ERP/3PL integrations built and maintained",
      "Workflow automation for daily ops processes",
      "Custom dashboards and reporting on your real data",
      "Settlement and payout data pipelines, accounting-aware",
      "Inventory sync with reconciliation checks built in",
      "Migration support (QBO to NetSuite, 3PL changes, replatforms)",
      "Scoped fixed-fee projects, documented and handed over",
      "Ongoing support retainer if you want it, not required",
    ],
    body: [
      {
        h2: "Why an accounting firm is the right builder",
        paras: [
          "Generic dev shops build what you spec and leave when it ships. The problem is that ops integrations live or die on accounting details the spec never mentions: fee mapping, refund timing, inventory valuation, cutoff discipline. We carry those requirements in by default because your month-end close depends on them, and we're the ones doing it.",
          "Projects are scoped fixed-fee with a written spec, built, documented and handed over. You own the code, the same way you own your books.",
        ],
      },
      {
        h2: "Where this pairs with accounting engagements",
        paras: [
          "Integration clients don't have to be accounting clients, but the pairing is where the payoff is: the same team that closes your books by day 10 also owns the pipelines feeding them, so data problems get fixed at the source instead of patched every month. For Exit-Grade clients, clean automated data flows are themselves a diligence asset; buyers pay for operations that run without the founder's spreadsheets.",
        ],
      },
    ],
    related: [
      { href: "/netsuite-bookkeeping/", label: "NetSuite Bookkeeping" },
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Accounting" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "Integrations & ops engineering FAQs",
    faqs: [
      {
        q: "What does a custom integration project cost?",
        a: "Scoped fixed-fee after a short discovery. Small automations run low four figures; multi-system integration projects run five. You get the number in writing before anything is built, and there's no obligation to be an accounting client.",
      },
      {
        q: "What systems have you worked with?",
        a: "Marketplace APIs (Amazon SP-API, Walmart, eBay, Shopify), QuickBooks, Xero, NetSuite, common 3PL/WMS platforms, and the long tail of internal tools and spreadsheets that actually run ecommerce companies. If it has an API or an export, it can usually be wired in.",
      },
      {
        q: "Who owns and maintains what you build?",
        a: "You own the code and the documentation outright. Maintenance is an optional retainer; several clients run what we built with no ongoing involvement from us at all.",
      },
      {
        q: "Can you fix the integration mess a previous developer left?",
        a: "Usually, and we'll tell you honestly when a rebuild beats a repair. The audit is the same either way: map what exists, find where the data breaks, and quote the fix flat.",
      },
      {
        q: "How long does a custom integration project take?",
        a: "Small automations ship in one to two weeks; multi-system integrations typically run four to eight. Discovery sets the timeline in writing along with the fixed fee. We'd rather scope small, ship, and extend than sell a six-month roadmap on day one, so the first working piece usually lands fast.",
      },
      {
        q: "Can you automate our settlement downloads and month-end data pulls?",
        a: "Yes, and it's one of the most common builds: settlement and payout reports pulled automatically from every channel, normalized, and landed where your close process needs them, with reconciliation checks that flag mismatches instead of hiding them. It's the difference between a close that starts on day one and one that starts with three days of downloads.",
      },
      {
        q: "We already have developers. Why hire you for this?",
        a: "Your developers know your product; they usually don't know settlement accounting, fee mapping or cutoff discipline, and integration bugs in those areas surface as month-end mysteries rather than stack traces. We either build the accounting-critical pieces ourselves or spec them precisely for your team. Several clients use us exactly that way.",
      },
      {
        q: "Can you connect our 3PL to QuickBooks or NetSuite?",
        a: "Yes. Inventory movements, receipts and fulfillment costs flow from the 3PL into the accounting file with reconciliation checks built in, so the sync is trustworthy rather than merely automatic. That pipeline turns monthly landed-cost COGS into a report instead of a spreadsheet project, and it's a build we've done repeatedly.",
      },
      {
        q: "Custom dashboard or an off-the-shelf BI tool?",
        a: "Off-the-shelf BI runs $50 to $500 a month forever and still needs someone to model your data. A scoped custom dashboard is a one-time fixed fee, owned outright, built on your real reconciled numbers. Which wins depends on the ask, and we'll say so honestly when a $30/mo tool covers it.",
      },
    ],
  },
  {
    slug: "reseller-bookkeeping-services",
    crumb: "Reseller Bookkeeping",
    metaTitle: "Reseller Bookkeeping Services: Poshmark, Mercari, Depop, StockX, Whatnot | eMerchant Books",
    metaDescription:
      "Bookkeeping for resellers on Poshmark, Mercari, Depop, StockX, GOAT, Whatnot, Facebook Marketplace and eBay: 1099-K tie-outs, sourcing-run COGS and per-platform fee tracking in your own QuickBooks.",
    h1: "Reseller bookkeeping for people who sell on everything",
    lead: "Poshmark, Mercari, Depop, StockX, GOAT, Whatnot, Facebook Marketplace, eBay: every platform nets a different fee stack on a different schedule, and every one sends its own 1099-K. We turn the whole tangle into clean books, sourcing runs included.",
    intro: [
      "Reseller accounting is harder than most ecommerce accounting, not easier. A DTC brand buys 5,000 identical units with one invoice. You buy a $400 bin lot that yields 60 sellable one-of-one items, list them across four platforms, and get paid net of four different fee structures. Generalist bookkeepers don't have a category for that. We built one.",
      "Whether you flip sneakers on StockX and GOAT, clothes on Poshmark and Depop, or run live Whatnot auctions three nights a week, the same three jobs decide whether your numbers mean anything: gross sales rebuilt per platform, sourcing costs allocated to the items they produced, and January's stack of 1099-Ks tied to the books. That's what reseller bookkeeping services from a specialist look like: books built around sourcing runs and platform payouts, not a coffee-shop template with extra rows.",
          "Call it an accountant for resellers, outsourced reseller bookkeeping, or online bookkeeping for flippers: the work is sourcing-run COGS, platform fee reconciliation, and 1099-K sanity, done monthly by people who know the platforms.",
],
    painHeading: "The reseller problems generalist bookkeepers can't handle",
    pains: [
      {
        title: "The 1099-K panic",
        body: "Most reselling businesses grew out of a personal account, so the 1099-K that arrives reports your garage-sale history and your business inventory in one gross number. Filed wrong, you either pay tax on your own used furniture or claim business deductions against personal stuff. We separate the streams so each dollar gets its correct treatment, documented.",
      },
      {
        title: "One thrift receipt, fifty future listings",
        body: "A $85 thrift run produces nine items that sell over the next eight months on three platforms. Expense the receipt when you paid it and every month's profit reflects how much you sourced, not how much you sold. Real reseller COGS means allocating sourcing costs to items at intake and recognizing them as each item sells.",
      },
      {
        title: "Five platforms, five fee mazes",
        body: "Poshmark takes a flat $2.95 under $15 and 20% above it. StockX charges a seller fee plus 3% processing that drops as your level rises. Whatnot stacks an 8% commission on top of payment processing. Mercari rewrote its fee model twice in 2024 alone. Blend it all into one 'selling fees' line and you can't tell which platform actually pays you best.",
      },
      {
        title: "Live selling breaks normal bookkeeping",
        body: "A three-hour Whatnot stream can produce 240 sales, a dozen giveaways and a stack of bundle deals. Giveaways are marketing cost that looks like shrinkage, bundles scramble per-item pricing, and per-order posting would flood any accounting file. We post summary-level per stream night, with giveaway costs booked as the marketing they are.",
      },
    ],
    deliverables: [
      "Every platform's payouts rebuilt to gross sales, fees and refunds",
      "Sourcing-run costs allocated across the items they produced",
      "Per-platform P&L: Poshmark vs eBay vs StockX vs Whatnot",
      "1099-K reconciliation for every platform that sends one",
      "Personal-item sales separated from business inventory",
      "Shipping label costs matched to the right platform",
      "Death-pile tracking and aged-inventory write-downs",
      "Books closed by the 10th business day in your own QuickBooks",
    ],
    body: [
      {
        h2: "Sourcing-run COGS, the heart of reseller accounting",
        paras: [
          "The method matters more than the tool. For lots and bulk runs, we allocate cost across sellable items at intake: by count when items are similar, by expected resale value when they're not, with the junk portion written off immediately. A $250 pallet with 40 sellable units carries $6.25 per unit; the vintage jacket from the $85 thrift run carries its own share. From then on, each sale recognizes its real cost, dead inventory shows its real loss, and you can finally answer whether bin lots or thrift racks earn more per sourcing hour.",
          "That answer is worth actual money every weekend you go sourcing, and it's the number gut feel gets wrong most often. Sellers who track it usually discover one sourcing channel subsidizing another.",
        ],
      },
      {
        h2: "Built for the platforms nobody else supports",
        paras: [
          "Look for a bookkeeping firm with a Poshmark page or a Whatnot page. There aren't many, because specialist firms built for Shopify brands and treat resale platforms as rounding errors. Meanwhile the platforms themselves offer little accounting tooling: no A2X connector, exports that change format, payouts that mix sale proceeds with shipping credits. We do the settlement rebuild manually where tooling doesn't exist, the same way we do for refurbished-electronics marketplaces.",
          "Most resellers we work with run four to six platforms off one inventory pool. Everything consolidates into one set of books with per-platform margins, which is the report that tells you where the next hour of listing effort should go.",
        ],
      },
    ],
    related: [
      { href: "/bookkeeping-tips/reseller-taxes-bookkeeping-guide/", label: "Reseller Taxes & Bookkeeping Guide" },
      { href: "/ebay-bookkeeping-services/", label: "eBay Bookkeeping" },
      { href: "/catch-up-bookkeeping-services/", label: "Catch-Up Bookkeeping" },
      { href: "/bookkeeping-tips/back-market-reebelo-seller-bookkeeping/", label: "Back Market & Reebelo Guide" },
      { href: "/who-we-serve/", label: "Who We Serve" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "Reseller bookkeeping FAQs",
    faqs: [
      {
        q: "Do I have to pay taxes on my Poshmark, Mercari or Depop sales?",
        a: "If you're sourcing items to resell for profit, yes: that's a business, and net profit is taxable plus 15.3% self-employment tax, whether or not a 1099-K arrives. Selling your own used things at less than you paid isn't taxable income, but it may still show up in a 1099-K and needs to be reported correctly to avoid an IRS mismatch. Our reseller taxes guide covers the whole picture.",
      },
      {
        q: "How do I track COGS from thrift stores and garage sales?",
        a: "Keep every receipt, photograph the haul, and allocate the run's cost across the sellable items at intake, by count or by expected resale value. Cash buys with no receipt need a log entry made the same day: date, place, items, amount. We set up and maintain this allocation as part of the monthly work, and it's the difference between real margins and guesses.",
      },
      {
        q: "I sell on six platforms. Can you consolidate all of them?",
        a: "Yes, that's the standard reseller setup: one QuickBooks file, per-platform income and fee accounts, one monthly close. Poshmark, Mercari, Depop, StockX, GOAT, Whatnot, Facebook Marketplace, eBay and Amazon all land in the same books with their own margin lines.",
      },
      {
        q: "What does a bookkeeper for resellers cost?",
        a: "Our Books Lite tier runs $149 to $249 a month for growing resellers, and our specialist tiers start at $1,250/mo when you're doing $100K+ a month across platforms. The full rate card is public on our pricing page. Either way it's month-to-month, in a QuickBooks file you own.",
      },
      {
        q: "I got a 1099-K on my personal account and I'm panicking. What now?",
        a: "Don't ignore it: the IRS gets a copy. The fix is books that split business flips from personal-item sales, report each correctly, and reconcile to the form's gross number. If you've never kept books, that's a catch-up project, and it's much cheaper before a mismatch notice than after.",
      },
      {
        q: "Do I need a bookkeeper for my reselling business?",
        a: "Once reselling stops being pocket money, yes. The 1099-Ks arrive whether you're ready or not, sourcing-run COGS is genuinely hard to DIY, and five fee mazes hide which platform actually pays you. A bookkeeper for resellers earns the fee the first January you don't spend rebuilding a year of sales from screenshots.",
      },
      {
        q: "What's the best accounting software for resellers?",
        a: "QuickBooks Online, with platform activity posted as summarized monthly entries and sourcing runs tracked in a simple intake log we help you keep. Reseller apps handle listings and crosslisting well, but few produce real financial statements. The software is the easy part; the cost-allocation method is what most setups get wrong.",
      },
      {
        q: "Cash or accrual for resellers?",
        a: "Accrual for the books, because inventory is the whole business: sourcing costs sit in inventory until items sell, so monthly margins are real. Your CPA may still file the return cash-basis where allowed. Books that expense every sourcing run on purchase can't tell a good month from a big shopping weekend.",
      },
      {
        q: "Can you catch up several years of reselling books?",
        a: "Yes. Platform transaction histories go back years, and bank records fill the sourcing side where receipts are thin. We rebuild each platform's gross activity, allocate sourcing costs, separate personal-item sales and tie out every 1099-K, with a flat quote up front. Pre-audit and pre-mortgage rebuilds are both common.",
      },
      {
        q: "How do I record Poshmark, Mercari or Whatnot sales in QuickBooks?",
        a: "Summarized monthly entries per platform, built from each platform's own sales and fee reports: gross sales, fees by type, refunds and shipping labels, with payouts clearing against them. None of these platforms has an A2X-style connector, so the rebuild is manual. That's fine. It's our manual work, done monthly.",
      },
    ],
  },
  {
    slug: "woocommerce-bookkeeping-services",
    crumb: "WooCommerce Bookkeeping",
    metaTitle: "WooCommerce Bookkeeping & Accounting Services | eMerchant Books",
    metaDescription:
      "WooCommerce accounting done properly: Stripe, PayPal and Square payouts reconciled to orders, self-hosted refund tracking, and a QuickBooks integration that doesn't wreck your file.",
    h1: "WooCommerce bookkeeping for stores that own their stack",
    lead: "You chose WordPress for control and lower fees. The cost is that nothing reconciles itself: Stripe, PayPal and Square each pay on their own schedule, and there's no native accounting layer at all. We close that gap every month.",
    intro: [
      "WooCommerce runs a quarter of the world's online stores and has no built-in bookkeeping story. Shopify sellers at least get one payments dashboard; a WooCommerce store typically runs two or three gateways at once, each netting its own fees before payout, plus whatever the plugin stack does to order data along the way.",
      "We reconcile each gateway's payouts back to your WooCommerce order data, so your books, your admin dashboard and your bank finally agree, in a QuickBooks or Xero file you own. It's a dedicated WooCommerce bookkeeping service from a firm that treats self-hosted stores as first-class, not as Shopify with extra steps.",
          "Store owners get here searching for an accountant for WooCommerce, outsourced WooCommerce bookkeeping, or online bookkeeping that can untangle gateway sprawl and 1099-K reporting across processors. Same destination: clean monthly books in your own file.",
],
    painHeading: "Where WooCommerce books go wrong",
    pains: [
      {
        title: "Gateway sprawl",
        body: "Stripe settles on a rolling schedule net of 2.9% plus 30 cents, PayPal holds funds and charges differently for cross-border, Square runs its own cadence. Three gateways means three separate reconciliations against three fee structures. Booked as one 'sales' line from the bank feed, your revenue is understated and your processing costs are invisible.",
      },
      {
        title: "No native accounting sync",
        body: "There's no official WooCommerce accounting integration, so sellers install sync plugins that push every order into QuickBooks individually. The result is thousands of transactions that never match the netted payouts, duplicate customers, and a file that eventually gets abandoned. Summary-level posting per gateway payout is the pattern that stays reconcilable.",
      },
      {
        title: "Plugin data you can't fully trust",
        body: "A checkout plugin update changes how discounts export. A tax plugin double-counts one state for a quarter. Self-hosted means data quality is your problem, and books built on unvalidated exports inherit every glitch. We cross-check order data against gateway records monthly, which is how those bugs get caught while they're small.",
      },
      {
        title: "Refunds you process yourself",
        body: "On a marketplace, refunds flow through one settlement pipe. On WooCommerce you might refund through the order screen, through Stripe directly, or partially through either, and each path hits your records differently. Untracked, refunds inflate revenue and hide your true return rate.",
      },
    ],
    deliverables: [
      "Stripe, PayPal, Square and other gateways each reconciled to payout",
      "Gateway fees broken out per processor",
      "Order-data cross-checks against gateway records monthly",
      "Refund and chargeback tracking across every refund path",
      "COGS on inventory movement, with 3PL support",
      "Sales tax collected kept out of revenue",
      "Multi-channel consolidation if you also sell on marketplaces",
      "Books closed by the 10th business day in your own file",
    ],
    body: [
      {
        h2: "The WooCommerce QuickBooks integration question",
        paras: [
          "Sellers searching for a WooCommerce QuickBooks integration usually mean 'make this automatic.' The honest answer: automatic per-order sync is the thing that ruins WooCommerce accounting files. The setup that works posts each gateway's payout as one summarized entry, gross sales, fees, refunds, with the deposit clearing against it. Order-level detail stays in WooCommerce where it belongs; the accounting file stays clean, fast and reconcilable.",
          "We build that mapping once during onboarding, validate it against a full month of payouts, then run it monthly. If a previous setup left per-order wreckage in your QuickBooks file, cleaning it up is a catch-up project we do constantly.",
        ],
      },
      {
        h2: "WooCommerce plus marketplaces",
        paras: [
          "Most WooCommerce stores we serve also sell on Amazon or eBay, and the whole point of clean multi-channel books is comparing them: your own site might net 3% in processing where Amazon takes 15% in fees, but Amazon brings the traffic. Per-channel P&L turns that trade-off from a debate into a report, and it lives in the same monthly close.",
        ],
      },
    ],
    related: [
      { href: "/shopify-bookkeeping-services/", label: "Shopify Bookkeeping" },
      { href: "/square-bookkeeping-services/", label: "Square Bookkeeping" },
      { href: "/quickbooks-for-ecommerce/", label: "QuickBooks for Ecommerce" },
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
      { href: "/who-we-serve/", label: "Who We Serve" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "WooCommerce bookkeeping FAQs",
    faqs: [
      {
        q: "How do I connect WooCommerce to QuickBooks?",
        a: "Not with a per-order sync plugin, which floods the file with unreconcilable noise. Post each gateway's payouts as summarized entries instead: gross sales, fees and refunds in their own accounts, deposit clearing the balance. We set that structure up as part of onboarding and run it monthly.",
      },
      {
        q: "Which payment gateways do you support?",
        a: "Stripe, PayPal, Square, WooPayments, Authorize.net and the long tail. Each gateway gets its own reconciliation against its own payout reports; that's the core of the service, not an add-on.",
      },
      {
        q: "My plugin stack changed mid-year and the data's a mess. Fixable?",
        a: "Almost always. Gateway records are the ground truth: Stripe and PayPal keep complete transaction history, so we rebuild the affected months from processor data and reconcile back to whatever the store data shows. That's a catch-up project with a flat quote before we start.",
      },
      {
        q: "Do you also handle sales tax for a WooCommerce store?",
        a: "The bookkeeping side, yes: collected tax stays in a liability account and never inflates revenue, and we flag nexus exposure as your footprint grows. Unlike marketplace sales, your own site's sales tax is fully your obligation, so we coordinate with TaxJar, Avalara or your filing provider for registrations and remittance.",
      },
      {
        q: "How much does WooCommerce bookkeeping cost?",
        a: "From $1,250/mo at the $100K-$250K monthly revenue tier, with the full rate card public on our pricing page. Multi-gateway reconciliation is the core of the service, not an add-on. Month-to-month, no annual contract, and cleanup projects are quoted flat at a discount to monthly rates.",
      },
      {
        q: "Do I need a bookkeeper for my WooCommerce store?",
        a: "At real volume, yes, and arguably sooner than a Shopify seller does, because nothing on WooCommerce reconciles itself. Three gateways, plugin-dependent data and self-processed refunds mean DIY books drift quietly until tax season exposes them. A bookkeeper who reconciles each gateway monthly catches that drift while it's still small.",
      },
      {
        q: "Cash or accrual for a WooCommerce store?",
        a: "Accrual, because you carry inventory. Expensing stock purchases when paid wrecks monthly margins in both directions, and gateway settlement lag shifts revenue across periods on cash books. Accrual books also convert cleanly to a cash-basis return if that's how your CPA prefers to file.",
      },
      {
        q: "What's the best accounting software for WooCommerce?",
        a: "QuickBooks Online or Xero, fed by summarized per-gateway payout entries rather than a per-order sync plugin. Both handle multi-gateway stores well once the posting pattern is right. WooCommerce accounting plugins mostly automate the wrong pattern, which is why so many files we inherit need cleanup first.",
      },
      {
        q: "Can you clean up my WooCommerce books?",
        a: "Yes, and gateway records make it reliable: Stripe, PayPal and Square keep complete transaction history, so we rebuild affected months from processor data even when the store data is questionable. Flat quote before we start, one to three weeks for most projects, and monthly service afterward if you want it kept clean.",
      },
      {
        q: "Do you handle WooCommerce subscription revenue?",
        a: "Yes. Renewals through WooCommerce Subscriptions bring failed payments, prorations and dunning, so revenue needs to be recognized as earned and payouts reconciled against renewal batches. Booked as plain sales, involuntary churn hides inside topline noise. We break subscription revenue out so both numbers stay visible.",
      },
    ],
  },
  {
    slug: "square-bookkeeping-services",
    crumb: "Square Bookkeeping",
    metaTitle: "Square Bookkeeping & Accounting Services | eMerchant Books",
    metaDescription:
      "Bookkeeping for Square sellers: processing fees broken out, instant transfers reconciled, Square loan repayments booked correctly, and POS plus online sales in one honest P&L.",
    h1: "Square bookkeeping for sellers who run POS and online together",
    lead: "Square nets its fees before the money lands, deducts loan repayments off the top, and blends your counter sales with your website. We keep all three straight, in your own QuickBooks file.",
    intro: [
      "Square is the rare platform that runs a retail counter, an online store, invoices and a lending product through one account, which is convenient everywhere except your books. The deposit that hits your bank has already absorbed processing fees, instant-transfer charges and a slice of your Square loan, and no bank feed will ever untangle that for you.",
      "We rebuild Square activity from its transaction and transfer reports: gross sales by channel, fees broken out, loan repayments split correctly, cash sales reconciled to actual deposits. If you've searched for Square bookkeeping services or an accountant who actually understands Square Loans, that's the specific service on this page, monthly, in a QuickBooks file you own.",
          "Whether you searched for an accountant for Square sellers, outsourced Square bookkeeping, or online bookkeeping that reconciles POS and web sales together, this is that practice.",
],
    painHeading: "The Square-specific accounting traps",
    pains: [
      {
        title: "Fees netted before deposit",
        body: "Square takes roughly 2.6% plus 10 cents on card-present sales and 2.9% plus 30 cents online, deducted before payout. Book deposits as revenue and you understate sales by your entire processing cost, which on $60,000 a month is around $1,700 of invisible expense, every month.",
      },
      {
        title: "Instant transfers scrambling reconciliation",
        body: "Instant and same-day transfers carry their own fee and break the tidy one-deposit-per-day pattern: three partial transfers on a busy Saturday, each net of different activity. Books that match deposits to days stop reconciling. Books built from Square's transfer reports don't care.",
      },
      {
        title: "Square loan repayments hiding in payouts",
        body: "Square Loans collects a fixed percentage of daily card sales before you're paid. Sellers routinely book the reduced deposits as revenue, which understates sales and hides the repayment entirely. Worse, the repayment isn't an expense: principal reduces the loan liability and only the fixed fee portion is a financing cost. Booked wrong, both your P&L and your balance sheet lie.",
      },
      {
        title: "One 'Square' number hiding two businesses",
        body: "A retail counter doing $45,000 a month and an online store doing $15,000 have different margins, different fees and different growth stories. Blended into one income line, you can't see that one is funding the other. We split POS from online so each channel shows its own P&L.",
      },
    ],
    deliverables: [
      "Square transfers rebuilt to gross sales, fees and adjustments",
      "Processing fees broken out by channel and card type",
      "Instant-transfer fees tracked separately",
      "Square Loans split: principal to liability, fees to financing cost",
      "POS vs online channel P&L",
      "Cash sales reconciled from drawer to deposit",
      "Sales tax collected kept out of revenue",
      "Books closed by the 10th business day in your own QuickBooks",
    ],
    body: [
      {
        h2: "Square Capital and Square Loans, booked right",
        paras: [
          "The loan is where Square books most often go wrong. Proceeds arrive and get booked as income; repayments vanish inside reduced payouts; a year later the P&L shows phantom revenue and no financing cost, and the balance sheet shows no loan at all. The correct pattern is simple once set up: proceeds credit a loan liability, each day's withholding splits between principal and the fixed fee, and your books always show exactly what you still owe. That number matters, because Square's repayment eats your daily cash flow and lenders will ask about it.",
        ],
      },
      {
        h2: "Cash sales, the part software can't see",
        paras: [
          "Retail Square sellers take cash, and cash recorded in the POS never appears in a Square deposit. If nobody reconciles the drawer to the bank, cash sales drift: recorded but never deposited, deposited but never recorded, or quietly spent on supplies. We reconcile POS-recorded cash against actual bank deposits monthly, which keeps revenue complete and keeps the IRS conversation boring. For a business with real cash volume, this is the control that matters most.",
        ],
      },
    ],
    related: [
      { href: "/woocommerce-bookkeeping-services/", label: "WooCommerce Bookkeeping" },
      { href: "/shopify-bookkeeping-services/", label: "Shopify Bookkeeping" },
      { href: "/quickbooks-for-ecommerce/", label: "QuickBooks for Ecommerce" },
      { href: "/catch-up-bookkeeping-services/", label: "Catch-Up Bookkeeping" },
      { href: "/who-we-serve/", label: "Who We Serve" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "Square bookkeeping FAQs",
    faqs: [
      {
        q: "Does Square integrate with QuickBooks?",
        a: "There's an official connector, and like most per-transaction syncs it posts noisy data that's hard to reconcile, especially with instant transfers and loan withholding in the mix. We post summary-level entries from Square's own reports instead: cleaner file, penny-perfect reconciliation, and the loan handled correctly.",
      },
      {
        q: "How should Square loan repayments be recorded?",
        a: "Proceeds as a loan liability, never income. Daily withholding splits between principal (reducing the liability) and the fixed fee (a financing cost). Your books then show true revenue, true financing cost and the real remaining balance, which is what a lender or buyer will want to see.",
      },
      {
        q: "Can you split my retail location from my online store?",
        a: "Yes, that's standard setup: POS and online each get their own revenue and fee tracking, so you see each channel's real margin. Multiple locations work the same way.",
      },
      {
        q: "My Square deposits never match my sales reports. Why?",
        a: "Because deposits are net of processing fees, instant-transfer fees, refunds, chargebacks and any loan withholding, and transfer timing crosses days. The fix isn't staring harder at the bank feed; it's books built from Square's transfer and transaction reports, where every deposit ties out to the penny.",
      },
      {
        q: "How much does Square bookkeeping cost?",
        a: "From $1,250/mo at the $100K-$250K monthly revenue tier, with the rate card public on our pricing page, month-to-month. That covers the full Square rebuild: fees broken out, loans split correctly, POS and online separated, cash reconciled. Smaller sellers can start on our Books Lite tier at $149 to $249 a month.",
      },
      {
        q: "Do I need a bookkeeper for my Square business?",
        a: "If you run POS plus online, take cash, or have a Square loan outstanding, yes. Each of those is a place where deposits-as-revenue bookkeeping fails silently, and a loan booked wrong misstates the P&L and the balance sheet at the same time. A bookkeeper who rebuilds from Square's reports keeps all three honest.",
      },
      {
        q: "Does Square send a 1099-K?",
        a: "Yes, reporting gross card sales, while your deposits arrive net of processing fees, instant-transfer charges, refunds and any loan withholding. Cash sales add a second gap, since they never touch a Square deposit at all. Books rebuilt from Square's reports tie the 1099-K, the POS and the bank together, which is the January you want.",
      },
      {
        q: "How do I record Square sales in QuickBooks?",
        a: "Summarized entries from Square's transfer reports: gross sales by channel, fees, refunds, loan withholding split between principal and financing cost, with deposits clearing the balance. The official connector posts per-transaction noise that breaks down once instant transfers and loans enter the picture, so we post from the reports instead.",
      },
      {
        q: "Can you catch up my Square books?",
        a: "Yes. Square's transaction and transfer history covers everything a rebuild needs, including historical loan withholding, which is usually where DIY books went wrong first. Flat quote, one to three weeks for most projects, and if there's a loan involved we reconstruct the liability so it finally matches what Square says you owe.",
      },
      {
        q: "Cash or accrual for a Square seller?",
        a: "Accrual if you carry inventory, which most retail Square sellers do, and it handles the loan correctly: withholding splits between liability and financing cost instead of vanishing into net deposits. A pure service business on Square can defensibly run cash-basis. We'll tell you which fits, not just default to habit.",
      },
    ],
  },
  {
    slug: "content-creator-accounting-services",
    crumb: "Content Creator Accounting",
    metaTitle: "Accountant for Content Creators & Influencers | eMerchant Books",
    metaDescription:
      "Accounting for creators on OnlyFans, Patreon, YouTube, Twitch and TikTok: 1099 tie-outs, quarterly estimates, S-corp timing and payout reconciliation. Professional and judgment-free.",
    h1: "Accounting for content creators, run like the business it is",
    lead: "OnlyFans, Patreon, YouTube, Twitch, TikTok, brand deals: creator income arrives from everywhere with nothing withheld. We track every stream, keep the quarterly estimates honest, and never make you explain your content.",
    intro: [
      "A working creator's money is messier than most small businesses': seven income streams, three different 1099 forms, platforms that take their cut before you see a dollar, and zero tax withheld on any of it. The IRS treats every dollar as self-employment income the moment it's earned, whether or not a form ever arrives. That's the case for hiring an accountant for content creators before the first big year, not after it, and it's why bookkeeping for influencers is now its own discipline instead of a footnote.",
      "One more thing, said plainly: if you're an OnlyFans creator, you've probably been declined by a firm or made to feel like a liability. Not here. Creator platforms are legal businesses with real accounting needs, and we serve them the way we serve any other client: professionally, discreetly, and without commentary.",
          "Creators usually arrive searching for a bookkeeper for OnlyFans or YouTube income, outsourced creator bookkeeping, or online bookkeeping that handles multi-platform 1099s without judgment. How much does it cost? Published tiers, starting where your revenue actually is.",
],
    painHeading: "The creator problems we fix every month",
    pains: [
      {
        title: "Six income streams, three kinds of paperwork",
        body: "Brand deals arrive on 1099-NECs, platform payouts through processors arrive on 1099-Ks reporting gross before fees, and foreign brands and small deals arrive with no form at all. Every one is taxable. Books that track income by stream and payer are what make January reconcilable instead of terrifying.",
      },
      {
        title: "Nothing is withheld, and April knows it",
        body: "A creator netting $100,000 of profit owes $30,000 to $37,000 between income tax and 15.3% self-employment tax, due quarterly. Miss the estimates and penalties accrue even if you pay in full at filing. We calculate the safe-harbor number and keep a tax percentage moving to a separate account with every payout.",
      },
      {
        title: "Deductions with no paper trail",
        body: "Cameras, lighting, editing software, the home studio, contractor editors, agency commissions: all legitimate, all lost without documentation. And the reverse problem is just as expensive: everyday clothing and grooming claimed as business expenses is the deduction pattern that draws audits. We keep the list defensible in both directions.",
      },
      {
        title: "Payouts that don't match your dashboard",
        body: "OnlyFans holds 20% before payout. Twitch splits sub revenue. YouTube AdSense pays on its own cycle. Agencies deduct their percentage before wiring brand-deal money. If your books record what hit the bank, you're understating income and losing deductions at the same time, and your 1099s won't tie to anything.",
      },
    ],
    deliverables: [
      "Every income stream tracked in its own account",
      "Platform fees and agency commissions broken out, gross to net",
      "1099-NEC and 1099-K tie-out every January",
      "Quarterly estimated tax numbers, calculated and calendared",
      "Deduction documentation that survives scrutiny",
      "Gifted products and comped trips logged at fair market value",
      "S-corp payroll coordination once the math says switch",
      "Books closed by the 10th business day, questions answered by text",
    ],
    body: [
      {
        h2: "The S-corp question, answered with math instead of hype",
        paras: [
          "Every creator with a growing channel hears 'you need an S-corp' from someone. Sometimes true: elect S-corp status, pay yourself a defensible salary, and profit above it escapes the 15.3% self-employment tax. A creator clearing $140,000 with a $70,000 salary saves roughly $9,000 a year, net of the added costs. Below about $60,000 to $80,000 of steady profit, payroll runs, a separate return and state fees usually eat the savings.",
          "The timing matters as much as the threshold, because the election, the payroll setup and a reasonable-salary study all have to be in place before the savings are real. We run the numbers with your actual profit, not a TikTok rule of thumb, and coordinate the switch with your CPA when it clears.",
        ],
      },
      {
        h2: "Judgment-free is a policy here, not a slogan",
        paras: [
          "Adult-content creators get dropped by accountants, flagged by banks, and lectured by professionals who happily serve liquor stores and casinos. Meanwhile they're running six-figure businesses with chargebacks, platform fee accounting, international fan payments and real quarterly tax exposure. We treat that as what it is: a client profile we know well. Your engagement is confidential, your paperwork says what any business paperwork says, and the only thing we'll ever ask about your content is which platform pays out through which processor.",
        ],
      },
    ],
    related: [
      { href: "/bookkeeping-tips/onlyfans-taxes-bookkeeping-guide/", label: "OnlyFans Taxes & Bookkeeping Guide" },
      { href: "/bookkeeping-tips/content-creator-bookkeeping/", label: "Content Creator Bookkeeping Guide" },
      { href: "/bookkeeping-tips/tiktok-shop-seller-bookkeeping/", label: "TikTok Shop Bookkeeping" },
      { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Bookkeeping" },
      { href: "/who-we-serve/", label: "Who We Serve" },
      { href: "/pricing/", label: "Pricing" },
    ],
    faqTitle: "Content creator accounting FAQs",
    faqs: [
      {
        q: "Do you work with OnlyFans creators?",
        a: "Yes, as a core client type, not an exception we tolerate. Payout reconciliation net of the 20% platform fee, chargeback tracking, quarterly estimates, S-corp timing and a 1099-NEC tie-out every January, handled with the same discretion as every engagement. Our OnlyFans taxes guide covers the full picture if you want to see how we think first.",
      },
      {
        q: "When should a creator switch to an S-corp?",
        a: "When steady profit clears roughly $60,000 to $80,000 a year, the payroll-tax savings usually outrun the added costs, often by $5,000 to $10,000 annually at low six figures. It's a math decision we run with your real numbers before anything gets filed.",
      },
      {
        q: "What can I actually deduct as a creator?",
        a: "Equipment, editing software and subscriptions, a genuinely exclusive home studio space, contractors, agency commissions, the business share of phone and internet, and travel whose primary purpose is content. Not everyday clothing, general grooming or the family trip with one vlog attached. The paper trail is what makes a deduction real, and building it is part of the monthly work.",
      },
      {
        q: "What does an accountant for content creators cost?",
        a: "Books Lite starts at $149 to $249 a month for growing creators; specialist tiers start at $1,250/mo for six-figure-a-month operations. The rate card is public on our pricing page, it's month-to-month, and your QuickBooks file is yours.",
      },
      {
        q: "I've never paid quarterly estimates. Am I in trouble?",
        a: "Probably less than you fear, and the fix is mechanical: catch up the books, compute the safe-harbor amount (100% of last year's tax, 110% at higher incomes), and start paying on schedule. Penalties for past quarters are typically interest-scale, not catastrophe-scale. The expensive move is staying frozen for another year.",
      },
      {
        q: "Do I need an LLC or S-corp before hiring a creator accountant?",
        a: "No. Plenty of clients start as sole proprietors, and the books work the same way. The entity question comes later, with math: an LLC adds liability separation cheaply, and the S-corp election starts paying for itself around $60,000 to $80,000 of steady profit. Clean bookkeeping comes first, because every entity decision depends on knowing real profit.",
      },
      {
        q: "How do I do bookkeeping for YouTube and Twitch income?",
        a: "Track each stream in its own income account at gross, with platform cuts and fees booked as expenses: AdSense payments, Twitch sub splits, bits, sponsorship invoices, affiliate payouts. Recording only what hits the bank understates income and erases deductions at the same time. We build that stream-by-stream structure and reconcile it monthly against each platform's reports.",
      },
      {
        q: "Are gifted products and comped trips taxable?",
        a: "Usually yes, when they're payment for content: a $2,000 camera sent in exchange for a review is $2,000 of income at fair market value, and brands increasingly issue 1099s for exactly that. Unsolicited freebies with no obligation attached are murkier. We log gifted items at fair market value as they arrive, so January isn't a guessing game.",
      },
      {
        q: "Can you clean up years of untracked creator income?",
        a: "Yes. Platform dashboards, processor records and bank history let us rebuild past years stream by stream, separate personal from business, and tie the totals to every 1099 that was issued, with a flat quote before we start. Creators usually call after a scary letter or before a mortgage application. Earlier is cheaper.",
      },
      {
        q: "What's the best accounting software for content creators?",
        a: "QuickBooks Online, with each income stream in its own account and a dedicated business bank account feeding it. Spreadsheets break the first month a brand deal, an agency commission and a platform payout all land at once. The structure matters more than the software, and building and running it is the service.",
      },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

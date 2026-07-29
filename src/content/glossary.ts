export type GlossaryTerm = {
  slug: string;
  term: string;
  /** Answer-first definition, 60-100 words. Plain text. */
  definition: string;
  /** 2-3 paragraphs of HTML: why it matters to ecommerce sellers + a concrete example. */
  body: string;
  /** Slugs of related glossary terms. */
  related: string[];
  serviceLink: { href: string; label: string };
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "settlement-report",
    term: "Settlement Report",
    definition:
      "A settlement report is the statement a marketplace issues with each payout, breaking the deposit into gross sales, refunds, fees, reserves and adjustments. Amazon issues one every two weeks; Shopify Payments produces payout reports daily. It's the source document for ecommerce bookkeeping, because the bank deposit alone tells you almost nothing: a single Amazon deposit can bundle two weeks of sales, thirty fee types, refunds and a reserve hold into one number.",
    body: "<p>Most generalist bookkeepers record the deposit as revenue and move on. That's the single most common error we find in seller books. Say your Amazon settlement shows $100,000 in gross sales, $8,000 in refunds, $15,000 in fees and a $2,000 reserve hold. The deposit is $75,000. Book that as revenue and you've understated sales by 25%, hidden $15,000 of fees you should be managing, and your books no longer tie to the <a href='/glossary/1099-k/'>1099-K</a> Amazon files with the IRS, which reports the gross.</p><p>Settlement-level bookkeeping means every payout is broken back into its components and reconciled to the penny. It's tedious, which is why so few firms do it, and it's the foundation of everything else: accurate margins, clean sales tax numbers and books a buyer can trust. It's the core of our <a href='/monthly-ecommerce-bookkeeping/'>monthly ecommerce bookkeeping</a> service, and the reason <a href='/amazon-bookkeeping-services/'>Amazon bookkeeping</a> is its own discipline.</p>",
    related: ["1099-k", "reconciliation", "rolling-reserve", "gross-merchandise-value"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "marketplace-facilitator",
    term: "Marketplace Facilitator",
    definition:
      "A marketplace facilitator is a platform, like Amazon, Walmart, Etsy or eBay, that the law requires to collect and remit sales tax on behalf of its third-party sellers. Every US state with a sales tax now has a facilitator law, so the marketplace handles tax on those orders. The catch: facilitator laws only cover marketplace sales. Your Shopify or WooCommerce orders are still your responsibility wherever you have nexus.",
    body: "<p>Facilitator laws killed most of the sales tax panic for pure marketplace sellers, but they created a new trap for multi-channel brands. Say you do $60,000 a month on Amazon and $25,000 a month on Shopify. Amazon collects and remits tax on its share automatically. The Shopify share is on you in every state where you've crossed a nexus threshold, and states don't send reminders. They send assessments, with penalties and interest attached.</p><p>There's a second wrinkle: in some states, marketplace sales still count toward your <a href='/glossary/economic-nexus/'>economic nexus</a> threshold even though the marketplace remits the tax, which can force a registration for your direct channel sooner than you'd expect. And a few states, Washington's <a href='/glossary/b-and-o-tax/'>B&amp;O tax</a> being the classic example, tax gross receipts separately from sales tax, and the facilitator doesn't pay that for you. Our <a href='/ecommerce-tax-services/'>ecommerce tax services</a> sort out which states actually need a registration and which don't, so you're not over-filing either.</p>",
    related: ["sales-tax-nexus", "economic-nexus", "b-and-o-tax"],
    serviceLink: { href: "/ecommerce-tax-services/", label: "Ecommerce Tax Services" },
  },
  {
    slug: "1099-k",
    term: "1099-K",
    definition:
      "Form 1099-K is the IRS information return that marketplaces and payment processors file to report your gross payment volume for the year. Gross means before refunds, fees, chargebacks and reserves, so the number is always bigger than what hit your bank. After several years of shifting thresholds, Congress restored the original trigger in 2025: more than $20,000 in payments and more than 200 transactions. Established sellers get one from every platform they sell on.",
    body: "<p>The 1099-K matters because the IRS computer-matches it against your return. If Amazon reports $1.2 million gross and your books show the $890,000 that actually landed in the bank, that's a $310,000 gap the IRS can see. It doesn't mean you owe tax on the gap, refunds and fees are deductible, but you have to be able to reconcile it, line by line, and deposit-based books can't.</p><p>Multi-channel sellers collect a stack of these forms: one from Amazon, one from Shopify Payments, one from PayPal, one from Walmart. Each reports gross, each on its own calendar, and together they should tie to the gross revenue in your books. When they don't, the fix runs through <a href='/glossary/settlement-report/'>settlement reports</a>, not bank statements. We wrote a full breakdown in our guide to the <a href='/bookkeeping-tips/amazon-1099-k-explained/'>Amazon 1099-K</a>, and tying books to 1099-Ks is standard practice in our <a href='/ecommerce-tax-services/'>tax work</a>.</p>",
    related: ["settlement-report", "gross-merchandise-value", "reconciliation"],
    serviceLink: { href: "/ecommerce-tax-services/", label: "Ecommerce Tax Services" },
  },
  {
    slug: "cogs",
    term: "COGS (Cost of Goods Sold)",
    definition:
      "COGS is the direct cost of the products you sold during a period: what you paid for the units plus what it cost to get them sellable, including inbound freight, duties and prep. Under accrual accounting, COGS is recognized when the unit sells, not when you bought the inventory. That timing rule is what makes ecommerce margins readable, and it's the number most often wrong in seller books.",
    body: "<p>The common mistake is expensing inventory when you buy it. Do that and a $80,000 October stock-up makes October look like a disaster and December look like a miracle, when in reality your margin was steady the whole quarter. Buyers, lenders and the IRS all expect COGS matched to sales, and a set of books that can't do it fails diligence fast.</p><p>Concrete version: you sell 5,000 units in a month at $30 each, $150,000 in revenue. Each unit carries a <a href='/glossary/landed-cost/'>landed cost</a> of $11.40, so COGS is $57,000 and gross margin is 62%. If instead you expensed a $95,000 purchase order that month, your P&amp;L would show a 37% margin and you'd draw exactly the wrong conclusions about pricing and ad spend.</p><p>We walk through the full calculation, with the accrual mechanics, in our <a href='/bookkeeping-tips/cogs-formula-ecommerce-guide/'>ecommerce COGS formula guide</a>, and true landed-cost COGS is built into every <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a> engagement.</p>",
    related: ["landed-cost", "gross-margin", "inventory-valuation", "fifo"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "landed-cost",
    term: "Landed Cost",
    definition:
      "Landed cost is the full cost of getting one unit into sellable condition: the supplier's unit price plus its share of inbound freight, customs duties and tariffs, insurance, and prep or inspection fees. It's the number that belongs in COGS and inventory valuation. Most sellers who track costs at all track only the invoice price, which understates true cost by 20-40% for imported goods and quietly overstates every margin on the P&amp;L.",
    body: "<p>Here's why the gap is so dangerous. A widget costs $6.00 from your supplier. Its share of ocean freight is $1.10, the tariff adds $0.90, and inbound prep is $0.35. Landed cost: $8.35, which is 39% above invoice. Price the product off the $6.00 and a listing you believe earns a 55% gross margin actually earns 38%. Multiply that error across a catalog and ad budget, and you're scaling SKUs that barely break even.</p><p>Landed cost also moves. Freight rates swing, tariff schedules change, and a product that penciled out in January can be underwater by June with nobody noticing, because the invoice price never changed. That's why we recalculate landed costs per receiving, not once a year. The mechanics of allocating freight and duty across a container are covered in our <a href='/bookkeeping-tips/cogs-formula-ecommerce-guide/'>COGS formula guide</a>, and it's standard in our <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>.</p>",
    related: ["cogs", "fifo", "weighted-average-cost", "unit-economics"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "accrual-accounting",
    term: "Accrual Accounting",
    definition:
      "Accrual accounting records revenue when it's earned and costs when they're incurred, regardless of when cash moves. For an ecommerce business, the part that matters most is matching: COGS hits the P&amp;L when the unit sells, not when you paid the supplier. It's the standard for any inventory business, the format every buyer and lender requires, and the only way monthly margins mean anything.",
    body: "<p>Cash-basis books swing with your purchasing calendar instead of your performance. Stock up for Q4 in October and cash books show a brutal October loss followed by a December profit that's partly fiction. Accrual books show what actually happened: steady margin, inventory converted to sales. When you're deciding whether to raise prices, cut a SKU or push ad spend, only one of those pictures is usable.</p><p>The stakes get higher at exit. Every acquirer and every <a href='/glossary/quality-of-earnings/'>quality of earnings</a> team works from accrual financials, and sellers who show up with cash-basis books either pay for a rushed conversion mid-deal or watch the price get retraded. Converting two years of history after the fact is exactly the work our <a href='/catch-up-bookkeeping-services/'>catch-up bookkeeping</a> service exists for; keeping it accrual from the start is cheaper. Our take on what buyers actually check is in the <a href='/bookkeeping-tips/quality-of-earnings-report-guide/'>QoE report guide</a>.</p>",
    related: ["cash-basis-accounting", "cogs", "month-end-close", "quality-of-earnings"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "cash-basis-accounting",
    term: "Cash Basis Accounting",
    definition:
      "Cash basis accounting records revenue when money lands and expenses when money leaves. It's simple, it matches your bank account, and for a small service business it's often fine. For a business that buys inventory before selling it, it's misleading: profit becomes a function of when you paid suppliers rather than what you earned, and margins jump around with every purchase order.",
    body: "<p>The failure mode is easy to see with numbers. A seller doing a steady $120,000 a month places a $150,000 inventory order in September. Cash books: September shows a $60,000 loss, November shows a $70,000 profit, and neither number describes the business. An owner reading those statements might panic in September and overspend in November. The margin never actually moved.</p><p>One nuance worth knowing: your books and your tax return don't have to use the same method. Plenty of sellers keep accrual books for management and exit-readiness while their CPA files on a permitted method that defers some tax. What doesn't work is running the whole business on cash books and hoping to fix it later; the conversion gets more expensive every month. If you're already there, <a href='/catch-up-bookkeeping-services/'>catch-up bookkeeping</a> rebuilds the history, and our guide to <a href='/bookkeeping-tips/how-much-does-ecommerce-bookkeeping-cost/'>what ecommerce bookkeeping costs</a> covers what the switch involves.</p>",
    related: ["accrual-accounting", "cash-flow-statement", "cogs"],
    serviceLink: { href: "/catch-up-bookkeeping-services/", label: "Catch-Up Bookkeeping" },
  },
  {
    slug: "chart-of-accounts",
    term: "Chart of Accounts",
    definition:
      "The chart of accounts is the organized list of every account your transactions post to: revenue accounts, cost accounts, assets, liabilities and equity. It's the skeleton of your books. A default QuickBooks chart gives you one Sales account and one lump of expenses; an ecommerce chart breaks revenue and fees out by channel, structures COGS properly, and puts inventory, reserves and sales tax liability where a reader can find them.",
    body: "<p>The chart decides what questions your books can answer. With one Sales line, \"which channel actually makes money?\" is unanswerable. With channel-level accounts, it takes one glance: Amazon revenue $85,000 against $19,000 of Amazon fees, Shopify revenue $40,000 against $5,200 of processing and app costs. We've onboarded sellers who discovered their \"best\" channel netted 12% while the neglected one netted 28%, purely because the chart finally separated them.</p><p>Getting it right early is cheap; restructuring 18 months of miscoded history is not. We published our full template, with the reasoning behind each account, in the <a href='/bookkeeping-tips/ecommerce-chart-of-accounts/'>ecommerce chart of accounts guide</a>, and setting it up correctly inside your own file is part of <a href='/quickbooks-for-ecommerce/'>QuickBooks for ecommerce</a> onboarding.</p>",
    related: ["profit-and-loss-statement", "reconciliation", "month-end-close"],
    serviceLink: { href: "/quickbooks-for-ecommerce/", label: "QuickBooks for Ecommerce" },
  },
  {
    slug: "contribution-margin",
    term: "Contribution Margin",
    definition:
      "Contribution margin is revenue minus all variable costs: landed COGS, marketplace and payment fees, outbound shipping, and advertising cost per order. It's what each order contributes toward fixed costs and profit. Gross margin tells you if the product works; contribution margin tells you if the order works, after the platform and the ad auction take their cut. It's the number that should govern ad spend.",
    body: "<p>Run the math on a typical DTC order. Average order value $40. Landed COGS $14, payment and platform fees $2.60, shipping $5.40, ad cost per order $11. Contribution margin: $7, or 17.5%. That's a workable business. Now let the ad cost creep to $18, which happens quietly as auctions tighten, and contribution margin goes to negative $4. Every additional order now costs you $4, and \"scaling\" means losing money faster.</p><p>Sellers who only watch blended P&amp;L profit catch this months late, because strong back-catalog SKUs mask the bleeders. Contribution margin at the SKU and channel level catches it the month it starts. That requires real <a href='/glossary/landed-cost/'>landed costs</a> and fees mapped per channel, which is exactly the structure our <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a> builds, with SKU-level detail available through <a href='/custom-integrations/'>custom integrations</a> when the catalog is large.</p>",
    related: ["unit-economics", "gross-margin", "net-profit-margin", "landed-cost"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "gross-margin",
    term: "Gross Margin",
    definition:
      "Gross margin is revenue minus COGS, expressed as a percentage of revenue. It measures how much of each sales dollar survives the cost of the product itself, before fees, shipping, ads and overhead. For ecommerce the honest version requires landed-cost COGS on an accrual basis; computed any other way, the number is decoration. Healthy DTC brands typically run 55-70%; wholesale-sourced marketplace sellers often run 35-50%.",
    body: "<p>Gross margin is the ceiling on everything below it. A brand at 60% gross has room for fees, shipping and a real ad budget and can still net 15%. A brand at 35% gross has almost no room; every downstream cost fights over a thin slice, and the business only works with cheap logistics and organic demand.</p><p>The trap is measurement error, not the metric. Book Amazon deposits as revenue and margin looks worse than it is; leave freight and tariffs out of COGS and it looks better than it is. We regularly meet sellers convinced they run 58% who actually run 44% once <a href='/glossary/landed-cost/'>landed costs</a> are in. That 14-point gap changes what the ad budget should be, which SKUs deserve reorders, and what the business is worth. The fix is mechanical: correct COGS, covered in our <a href='/bookkeeping-tips/cogs-formula-ecommerce-guide/'>COGS guide</a>, inside proper <a href='/monthly-ecommerce-bookkeeping/'>monthly books</a>.</p>",
    related: ["cogs", "contribution-margin", "net-profit-margin", "landed-cost"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "net-profit-margin",
    term: "Net Profit Margin",
    definition:
      "Net profit margin is the bottom line, net profit divided by revenue, after every cost: COGS, fees, shipping, advertising, payroll, software and overhead. It's the truest single measure of whether the business works. Established ecommerce brands typically land between 8% and 15%; under 5% usually means a margin leak somewhere upstream, and over 20% usually means a strong brand with organic demand or under-invested growth.",
    body: "<p>Net margin is where every upstream error surfaces. A seller doing $2 million a year at 8% takes home $160,000. Find three points of leak, unclaimed <a href='/glossary/fba-reimbursement/'>FBA reimbursements</a>, mispriced shipping, a fee increase nobody noticed, and the same revenue produces $220,000. At typical exit multiples, those three points are also worth several hundred thousand dollars of enterprise value, which is why buyers scrutinize this number hardest.</p><p>The practical problem is that most sellers can't see net margin monthly, because their books close late or not at all. By the time the annual tax return reveals the number, the leak has run for a year. A disciplined <a href='/glossary/month-end-close/'>month-end close</a> puts a real net margin in front of you by day 10 of the following month. That cadence, plus channel-level detail, is the core promise of our <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>, and our published <a href='/pricing/'>pricing</a> is built around it.</p>",
    related: ["gross-margin", "contribution-margin", "profit-and-loss-statement", "month-end-close"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "inventory-valuation",
    term: "Inventory Valuation",
    definition:
      "Inventory valuation is the dollar value of your unsold stock, carried as an asset on the balance sheet at cost, not at what you'll sell it for. The valuation method you choose, FIFO or weighted average cost for most sellers, determines how costs flow into COGS as units sell. Get the valuation wrong and both your profit and your taxes are wrong, in whichever direction the error runs.",
    body: "<p>Valuation errors are silent because inventory sits in places you don't see: FBA warehouses, a <a href='/glossary/3pl/'>3PL</a>, a container on the water. A seller who thinks they hold $220,000 of stock but actually holds $180,000, after shrinkage, unrecorded disposals and lost units, is overstating assets by $40,000 and overstating profit by the same amount, since missing inventory eventually has to flow through COGS. That surprise tends to surface at the worst moments: a lender's field exam or a buyer's diligence.</p><p>The discipline is periodic reconciliation of book inventory to physical and platform counts, valued at true <a href='/glossary/landed-cost/'>landed cost</a>. For multi-location operations we tie FBA, 3PL and warehouse counts monthly. It's part of <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>, and for larger operations running <a href='/netsuite-bookkeeping/'>NetSuite</a>, the valuation lives directly in the ERP.</p>",
    related: ["fifo", "weighted-average-cost", "balance-sheet", "cogs"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "fifo",
    term: "FIFO (First In, First Out)",
    definition:
      "FIFO is an inventory valuation method that assumes the oldest units on hand are the ones sold first, so the oldest costs flow into COGS and ending inventory carries the most recent costs. It usually matches how physical stock actually moves, it's accepted everywhere, and it's the default choice for most ecommerce sellers. Its one quirk: when supplier costs are rising, FIFO shows higher margins than what replacing the stock will cost you.",
    body: "<p>Example: you bought 1,000 units at $8 in March, then 1,000 more at $10 in May after a freight increase. You sell 1,200 units in June. Under FIFO, COGS is 1,000 × $8 plus 200 × $10, so $10,000, and the 800 units left on the shelf are valued at $10 each. Your P&amp;L shows the margin earned on the cheap batch, which is real, but your next reorder happens at $10 or worse.</p><p>That gap matters for pricing. Sellers who price off FIFO margins during cost inflation feel profitable right up until the cheap layers run out, then margins compress with no price change to blame. The fix isn't abandoning FIFO; it's watching replacement cost alongside it, which is easy when <a href='/glossary/landed-cost/'>landed costs</a> are tracked per receiving. Method choice and layer tracking are set up during onboarding for <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>, and our <a href='/bookkeeping-tips/cogs-formula-ecommerce-guide/'>COGS guide</a> shows the flow end to end.</p>",
    related: ["weighted-average-cost", "inventory-valuation", "cogs", "landed-cost"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "weighted-average-cost",
    term: "Weighted Average Cost",
    definition:
      "Weighted average cost (WAC) is an inventory valuation method that blends the cost of all units on hand into one average, recalculated with each purchase, and charges that average to COGS as units sell. Where FIFO tracks cost layers, WAC smooths them. It suits sellers with many SKUs, frequent small receivings, or commingled stock where matching a sale to a specific purchase batch is impractical.",
    body: "<p>The mechanics are simple. You hold 1,000 units carried at $8.00, then receive 500 more at a landed cost of $11.00. New average: (1,000 × $8 + 500 × $11) ÷ 1,500 = $9.00. Every unit sold from that point charges $9.00 to COGS until the next receiving shifts the average again. No layers to track, no question of which batch shipped.</p><p>The trade-off is resolution. WAC mutes cost spikes, which keeps margins stable on paper but can delay your noticing that the latest container came in 25% more expensive. For a 40-SKU brand reordering monthly, that smoothing is usually a feature; for a 3-SKU brand where one tariff change moves everything, FIFO's sharper signal may serve better. Either way the method must be applied consistently, and the average must be built on true <a href='/glossary/landed-cost/'>landed cost</a>, not invoice price. We set the method and maintain it as part of <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>.</p>",
    related: ["fifo", "inventory-valuation", "landed-cost", "cogs"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "sales-tax-nexus",
    term: "Sales Tax Nexus",
    definition:
      "Sales tax nexus is a connection with a state significant enough that the state can require you to register, collect and remit its sales tax. It comes in two flavors: physical nexus, created by inventory, employees, offices or contractors in the state, and economic nexus, created by crossing a sales threshold. For FBA sellers the big one is inventory: Amazon moving your stock into a state's warehouse creates physical nexus there whether you asked or not.",
    body: "<p>Nexus is where ecommerce sellers accumulate invisible liability. An FBA seller's inventory routinely spreads across 20-plus states within months of enrolling, and each of those states has a claim. Marketplace facilitator laws blunt the damage, Amazon remits tax on its own orders, but they don't erase registration obligations everywhere, they don't cover your Shopify sales in those states, and a few states levy gross receipts taxes like Washington's <a href='/glossary/b-and-o-tax/'>B&amp;O</a> that the marketplace never pays for you.</p><p>The right response is triage, not panic: figure out where real dollars are at stake, register there, and skip the states where exposure is trivial. Registering everywhere costs more in filing fees than the tax. We run that analysis inside our <a href='/ecommerce-tax-services/'>ecommerce tax services</a>, and our state guides for <a href='/bookkeeping-tips/washington-sales-tax-ecommerce-guide/'>Washington</a> and <a href='/bookkeeping-tips/florida-sales-tax-ecommerce-guide/'>Florida</a> show how different the rules can be.</p>",
    related: ["economic-nexus", "marketplace-facilitator", "b-and-o-tax"],
    serviceLink: { href: "/ecommerce-tax-services/", label: "Ecommerce Tax Services" },
  },
  {
    slug: "economic-nexus",
    term: "Economic Nexus",
    definition:
      "Economic nexus is sales tax nexus created purely by sales volume into a state, no physical presence required. It became law nationwide after the Supreme Court's 2018 Wayfair decision. The most common threshold is $100,000 in annual sales into the state; some states use $250,000 or $500,000, and many have dropped their old 200-transaction tests. Cross the threshold and you're required to register and collect on your direct-channel sales.",
    body: "<p>Economic nexus is why a Texas Shopify brand with no warehouse outside Dallas can owe registrations in a dozen states. Sell $130,000 of product into California in a rolling year and California expects you registered and collecting. Sell $40,000 into a $100,000-threshold state and you're fine there, for now. The thresholds reset and roll, so this is a monitoring problem, not a one-time checkup.</p><p>Two details trip sellers up. First, some states count marketplace sales toward the threshold even though the <a href='/glossary/marketplace-facilitator/'>marketplace facilitator</a> remits the tax on those orders, so your Amazon volume can push your Shopify channel over the line. Second, crossing a sales tax threshold sometimes triggers other obligations, like income or <a href='/glossary/franchise-tax/'>franchise tax</a> filings, on a separate set of rules. We track thresholds from your actual channel data as part of <a href='/ecommerce-tax-services/'>ecommerce tax services</a>, since the books already know where every order shipped.</p>",
    related: ["sales-tax-nexus", "marketplace-facilitator", "franchise-tax"],
    serviceLink: { href: "/ecommerce-tax-services/", label: "Ecommerce Tax Services" },
  },
  {
    slug: "form-5472",
    term: "Form 5472",
    definition:
      "Form 5472 is an IRS information return required when a US corporation is 25% or more foreign-owned, or when a foreign person owns a US single-member LLC. It reports transactions between the company and its foreign owner: capital contributions, loans, payments back and forth. No tax is due with it, but the penalty for not filing is $25,000, and a foreign-owned LLC must attach it to a pro forma Form 1120 even when the LLC owes no US tax at all.",
    body: "<p>This form is the most expensive surprise in international ecommerce. The typical case: a seller in the UK or Pakistan forms a Wyoming LLC to sell on Amazon US, is told correctly that a single-member LLC is \"disregarded\" for tax, and concludes no filing is needed. Wrong. The disregarded entity still owes Form 5472 every year it has reportable transactions with its owner, and simply funding the LLC's bank account counts. Miss it and the penalty starts at $25,000 per year, per form.</p><p>Filing is not hard once you know: a pro forma 1120 cover page, the 5472 itself, and a record of owner transactions, which clean books produce automatically. We cover the whole requirement in our <a href='/bookkeeping-tips/form-5472-foreign-owned-llc-guide/'>Form 5472 guide</a>, and compliance for foreign-owned sellers, this form included, is the core of our <a href='/international-sellers/'>international sellers</a> practice.</p>",
    related: ["ein", "itin", "w-8ben"],
    serviceLink: { href: "/international-sellers/", label: "International Sellers" },
  },
  {
    slug: "ein",
    term: "EIN (Employer Identification Number)",
    definition:
      "An EIN is the nine-digit federal tax ID the IRS issues to a business entity. Despite the name, you don't need employees to need one: it's required to open a US business bank account, complete marketplace tax interviews, file entity returns and hire later. For ecommerce sellers it's also the number your 1099-Ks are matched against. Foreign owners can get an EIN without a Social Security Number by filing Form SS-4 by fax or mail.",
    body: "<p>For US-based sellers the EIN is a ten-minute online application and rarely causes trouble. The friction is on the international side. A foreign owner can't use the online tool, so the path is Form SS-4 with \"Foreign\" on line 7b, faxed to the IRS, with a response that typically takes one to two weeks by fax and considerably longer by mail. Every downstream step, bank account, Amazon tax interview, payment processor onboarding, queues behind that number, so it's the first thing to file after forming the entity.</p><p>One recurring mix-up: the EIN identifies the entity, while an <a href='/glossary/itin/'>ITIN</a> identifies a foreign individual. A foreign-owned LLC often needs the first and not the second. We walk through who needs what, and the exact SS-4 mechanics, in our <a href='/bookkeeping-tips/ein-tax-id-number-guide-sellers/'>EIN guide for sellers</a>, and handle the whole setup sequence for <a href='/international-sellers/'>international sellers</a>.</p>",
    related: ["itin", "w-8ben", "form-5472"],
    serviceLink: { href: "/international-sellers/", label: "International Sellers" },
  },
  {
    slug: "itin",
    term: "ITIN (Individual Taxpayer Identification Number)",
    definition:
      "An ITIN is a nine-digit tax ID the IRS issues to individuals who need to file US taxes but aren't eligible for a Social Security Number, typically non-resident foreign owners of US businesses. It's applied for on Form W-7, usually alongside the tax return that creates the need. Common misconception worth clearing up front: you do not need an ITIN to form an LLC, get an EIN, or start selling on US marketplaces.",
    body: "<p>Foreign sellers get told they need an ITIN far more often than they actually do, frequently by services selling ITIN applications. The genuine triggers: you personally must file a US return such as a 1040-NR because your activity created US-taxable income, you need to claim tax treaty benefits that require an ID, or a partnership you own must report your share. A foreign owner of a disregarded LLC selling on Amazon often files <a href='/glossary/form-5472/'>Form 5472</a> with an EIN and never needs an ITIN at all.</p><p>When one is genuinely required, timing matters: W-7 applications ride along with a return and take roughly 7 to 11 weeks, longer in peak season, and require certified identity documents. Applying without a qualifying reason gets rejected and wastes months. Sorting the EIN-versus-ITIN question is one of the first things we settle for <a href='/international-sellers/'>international sellers</a>, before anyone pays for paperwork they don't need.</p>",
    related: ["ein", "w-8ben", "form-5472"],
    serviceLink: { href: "/international-sellers/", label: "International Sellers" },
  },
  {
    slug: "w-8ben",
    term: "W-8BEN",
    definition:
      "Form W-8BEN certifies to a US payer that you're a foreign person, so they apply the correct US withholding to your income, anywhere from 0% to 30% depending on income type and tax treaty. Individuals file W-8BEN; foreign companies file the W-8BEN-E variant. Amazon, payment processors and US brands collecting it from you aren't being difficult: without a valid form on file they're required to withhold 30% by default.",
    body: "<p>Every foreign seller meets this form in a marketplace tax interview. For straightforward sales of goods there's usually no US withholding to reduce, the form simply documents your foreign status so the platform doesn't treat you as a US taxpayer or apply backup withholding. Where the treaty fields earn real money is on royalty and service income: a UK author on KDP, for example, claims the US-UK treaty rate of 0% on royalties instead of losing 30% off the top. On $80,000 of royalties, a correctly completed form keeps $24,000 that a blank one would forfeit.</p><p>Details that bite: the form expires at the end of the third calendar year after signing, so platforms will re-ask and suspend payouts if ignored; and filing as the wrong entity type, individual versus company, causes mismatches with your <a href='/glossary/ein/'>EIN</a> or <a href='/glossary/itin/'>ITIN</a> that stall verification. We handle marketplace tax interviews start to finish for <a href='/international-sellers/'>international sellers</a>.</p>",
    related: ["itin", "ein", "form-5472"],
    serviceLink: { href: "/international-sellers/", label: "International Sellers" },
  },
  {
    slug: "addback",
    term: "Addback",
    definition:
      "An addback is an expense added back to reported profit when calculating what a business really earns for a buyer: SDE or adjusted EBITDA. Classic addbacks include the owner's salary, personal expenses run through the business, one-time costs like a lawsuit or a rebrand, and above-market rent paid to yourself. Every dollar of defensible addback raises the sale price by the full multiple, which is why buyers challenge them and why documentation decides which ones survive.",
    body: "<p>The math is why addbacks matter so much. Suppose your P&amp;L shows $300,000 of net profit, and you also paid yourself an $80,000 salary and ran $15,000 of personal travel through the business. Properly documented, those become addbacks, and the earnings a buyer prices is $395,000. At a 3.5x multiple, that's $332,500 of additional sale price from paperwork. Undocumented, a diligence team strikes them, and the same business sells for a third less.</p><p>\"Defensible\" is the operative word. An addback survives when it's tagged in the books as it happens, with the invoice attached, not reconstructed from memory two weeks before a letter of intent. That's why we maintain a running addback schedule inside every set of books we keep, one of the habits that makes books exit-grade. The full buyer's-eye view is in our <a href='/bookkeeping-tips/quality-of-earnings-report-guide/'>quality of earnings guide</a>, and the schedule itself is standard in <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>.</p>",
    related: ["sde", "ebitda", "quality-of-earnings"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "sde",
    term: "SDE (Seller's Discretionary Earnings)",
    definition:
      "SDE is net profit plus the owner's salary and benefits plus one-time and personal expenses, the total economic benefit one working owner takes from the business. It's the standard earnings measure for owner-operated businesses selling for under roughly $5 million, and the number your multiple gets applied to. Ecommerce brands typically trade at 2.5x to 4.5x SDE depending on growth, channel mix and how defensible the brand is.",
    body: "<p>SDE exists because small-business P&amp;Ls are shaped by owner choices. One owner pays herself $150,000; another pays himself nothing and takes distributions. Their net profits differ wildly while the businesses are identical. SDE normalizes that: net profit $220,000, plus $90,000 owner salary, plus $12,000 of <a href='/glossary/addback/'>addbacks</a> gives $322,000 of SDE. At 3.2x, the asking price is just over $1 million.</p><p>Because every SDE dollar is worth three or four at exit, the cheapest value-creation work a seller can do is making SDE provable: accrual books, a maintained addback schedule and clean channel-level statements. Buyers pay premium multiples for numbers they can verify quickly and discount everything they have to reconstruct. The difference between claimed SDE and provable SDE is usually the difference between the multiple you were quoted and the one you close at. What verification looks like is covered in our <a href='/bookkeeping-tips/quality-of-earnings-report-guide/'>QoE report guide</a>.</p>",
    related: ["addback", "ebitda", "quality-of-earnings"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "ebitda",
    term: "EBITDA",
    definition:
      "EBITDA is earnings before interest, taxes, depreciation and amortization: operating profit with financing and non-cash charges stripped out, so businesses with different debt loads and asset bases can be compared. It's the earnings measure for larger deals, typically once earnings pass roughly $1 million and the business runs with management rather than on the owner's back. Adjusted EBITDA adds back one-time items, and market salaries get subtracted for roles the owner fills.",
    body: "<p>The practical question for a seller is SDE versus EBITDA, because the two measures value the owner's labor oppositely. SDE adds your salary back; EBITDA charges the business a market salary for your replacement. A brand producing $900,000 of SDE where the owner does a $150,000-a-year job shows roughly $750,000 of adjusted EBITDA. Smaller buyers price the first number; funds and strategics price the second, usually at a higher multiple, 4x to 7x against SDE's 2.5x to 4.5x, which is why deals near the crossover get modeled both ways.</p><p>EBITDA-based buyers also bring EBITDA-grade scrutiny: a <a href='/glossary/quality-of-earnings/'>quality of earnings</a> review, monthly accrual statements, and a hard look at whether inventory accounting is real. Cash-basis books don't survive that process. Building financials that hold up is the point of exit-grade bookkeeping, and the buyer's checklist is laid out in our <a href='/bookkeeping-tips/quality-of-earnings-report-guide/'>QoE guide</a>.</p>",
    related: ["sde", "addback", "quality-of-earnings-ratio"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "quality-of-earnings",
    term: "Quality of Earnings (QoE)",
    definition:
      "A quality of earnings review is the accounting investigation a buyer runs before closing an acquisition. An outside firm rebuilds your reported earnings from source documents, settlement reports, bank statements, inventory records, and tests whether the profit is real, recurring and correctly measured. The output, a QoE report, either confirms the earnings the price was based on or gives the buyer ammunition to retrade. More ecommerce deals die or get repriced here than anywhere else.",
    body: "<p>QoE teams know exactly where seller books are weak, and they check those spots first: revenue booked from deposits instead of settlements, COGS without landed costs, <a href='/glossary/addback/'>addbacks</a> with no documentation, inventory that doesn't reconcile. Every finding becomes leverage. A brand priced at 4x on $500,000 of claimed earnings that survives QoE at $410,000 just lost $360,000 of price, and that outcome is common, not rare.</p><p>The defense is boring and effective: accrual books that tie to <a href='/glossary/settlement-report/'>settlement reports</a> and 1099-Ks, a maintained addback schedule, and monthly inventory reconciliation, kept current for the two to three years a buyer will examine. Books like that turn QoE from a threat into a confirmation. We wrote up the whole process, including what the review costs and how long it takes, in our <a href='/bookkeeping-tips/quality-of-earnings-report-guide/'>quality of earnings report guide</a>, and cleaning up history before a sale is what <a href='/catch-up-bookkeeping-services/'>catch-up bookkeeping</a> is for.</p>",
    related: ["quality-of-earnings-ratio", "addback", "accrual-accounting", "net-working-capital"],
    serviceLink: { href: "/catch-up-bookkeeping-services/", label: "Catch-Up Bookkeeping" },
  },
  {
    slug: "quality-of-earnings-ratio",
    term: "Quality of Earnings Ratio",
    definition:
      "The quality of earnings ratio is cash flow from operations divided by net income. At or above 1.0, the business collects its reported profit in cash, which is what buyers and lenders want to see. Well below 1.0, profit is accumulating in receivables or inventory rather than the bank, and the earnings deserve skepticism. It's a one-line screen analysts run before deciding how hard to dig into the underlying accounting.",
    body: "<p>Example: a brand reports $400,000 of net income while its cash flow statement shows $150,000 from operations, a ratio of 0.38. That doesn't prove anything is wrong, but it demands an explanation. For ecommerce the innocent answer is often inventory: a growing seller plows profit into stock, and the cash shows up when the stock sells through. The bad answers include channel-stuffed revenue, under-accrued refunds, or COGS that's simply understated.</p><p>Sustained low ratios are what turn a routine <a href='/glossary/quality-of-earnings/'>quality of earnings</a> review adversarial, because the reviewer now has a reason to rebuild everything. Sellers with clean accrual books and a coherent inventory story can explain a 0.6 in one meeting; sellers with deposit-based books cannot. The ratio only exists if your books produce a real <a href='/glossary/cash-flow-statement/'>cash flow statement</a> monthly, which is part of what a proper <a href='/monthly-ecommerce-bookkeeping/'>monthly close</a> delivers.</p>",
    related: ["quality-of-earnings", "cash-flow-statement", "ebitda"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "working-capital",
    term: "Working Capital",
    definition:
      "Working capital is current assets minus current liabilities: cash, inventory, receivables and reserves, less payables, credit cards and short-term debt. It's the fuel that funds the gap between paying for inventory and collecting from customers. For ecommerce that gap is long, often 60 to 150 days from supplier deposit to marketplace payout, which is why fast-growing profitable sellers run out of cash: growth demands working capital faster than profit supplies it.",
    body: "<p>Put numbers on the trap. A brand doing $200,000 a month at a 12% net margin generates $24,000 of monthly profit. To double revenue, it needs roughly double the inventory in the pipeline, and if inventory on hand plus on order runs $350,000, doubling means finding another $350,000, which is fourteen months of profit. The business is profitable and cash-starved at the same time. That's not mismanagement; it's arithmetic, and it's why inventory brands raise debt to grow.</p><p>Managing it starts with seeing it: a current <a href='/glossary/balance-sheet/'>balance sheet</a>, inventory valued correctly, and a cash forecast built off real payment terms. Lenders underwriting inventory lines ask for exactly those documents, and books that produce them quickly get better terms. That visibility is a standing output of <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>, with the cash timing covered in the <a href='/glossary/cash-flow-statement/'>cash flow statement</a>.</p>",
    related: ["net-working-capital", "cash-flow-statement", "inventory-valuation", "balance-sheet"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "net-working-capital",
    term: "Net Working Capital",
    definition:
      "Net working capital, in the M&A sense, is the normalized level of working capital a seller must deliver with the business at closing. Buyer and seller negotiate a peg, usually the trailing twelve-month average, and the purchase price adjusts dollar-for-dollar for any shortfall or excess at close. It exists so a seller can't quietly drain inventory and stretch payables before handing over the keys, and it's one of the least understood levers in deal economics.",
    body: "<p>Sellers fixate on the headline multiple and lose real money here. Say the peg is set at $350,000 based on your trailing average, but your inventory naturally peaks pre-Q4 at $500,000. Close in October without negotiating seasonality into the peg and you just donated $150,000 of inventory to the buyer inside the same price. The reverse works too: sellers who understand the mechanism time closings and negotiate seasonal pegs, and keep six figures that others give away.</p><p>Your negotiating position is only as good as your balance sheet history. A clean monthly <a href='/glossary/balance-sheet/'>balance sheet</a> with reconciled <a href='/glossary/inventory-valuation/'>inventory</a> lets you argue for the right peg with data; books rebuilt during diligence leave the buyer's QoE team to set it for you. The working capital fight is covered in our <a href='/bookkeeping-tips/quality-of-earnings-report-guide/'>quality of earnings guide</a>.</p>",
    related: ["working-capital", "quality-of-earnings", "balance-sheet"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "rolling-reserve",
    term: "Rolling Reserve",
    definition:
      "A rolling reserve is a slice of your payouts, commonly 5% to 15%, that a payment processor or marketplace holds back for a fixed window, typically 90 to 180 days, as protection against future refunds and chargebacks. As each holding period expires, that tranche releases while new sales feed the next one, so a steady balance of your money sits permanently with the processor. New accounts, high-risk categories and sudden volume spikes attract them most.",
    body: "<p>The bookkeeping error is treating reserve withholding as an expense or, worse, never recording it because it \"isn't in the bank.\" Reserve balances are your asset, a receivable from the processor, and they belong on the balance sheet. A seller processing $150,000 a month against a 10% six-month rolling reserve has roughly $90,000 of their own cash parked off-balance-sheet if the books only track deposits. That's revenue understated, assets understated, and a nasty surprise for anyone forecasting cash.</p><p>Reserves also compound the cash strain that inventory already creates: money you've earned but can't spend on the next purchase order. Getting them visible is a <a href='/glossary/settlement-report/'>settlement report</a> exercise, since every hold and release appears there, and it's part of standard <a href='/glossary/reconciliation/'>reconciliation</a> in our <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>. High-chargeback categories should also read our note on <a href='/glossary/chargeback/'>chargebacks</a>, since the ratio drives the reserve terms.</p>",
    related: ["chargeback", "settlement-report", "cash-flow-statement"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "chargeback",
    term: "Chargeback",
    definition:
      "A chargeback is a payment reversal a customer obtains through their card issuer rather than by asking you for a refund. You lose the sale amount, pay a fee of roughly $15 to $25, usually eat the product, and take a hit to your chargeback ratio. That ratio is the number that matters: sustained rates near 1% of transactions put you in card-network monitoring programs, bring fines, and trigger reserves or account termination.",
    body: "<p>The full cost of one chargeback runs well past the fee. A disputed $80 order costs the $80, a $20 fee, the product and its shipping, plus the labor of fighting it, easily $130 all-in, and won disputes are the minority. At any real volume the ratio threat outweighs the individual losses: a processor watching disputes climb toward 1% will impose a <a href='/glossary/rolling-reserve/'>rolling reserve</a> long before it terminates you, freezing 10% of payouts while you fix the root cause.</p><p>In the books, chargebacks are contra revenue with the fees expensed separately, never netted invisibly into deposits, because the trend is diagnostic. When we break them out by channel during a monthly close, spikes point somewhere specific: a fraud wave, a delivery problem, a billing descriptor customers don't recognize. They arrive in the <a href='/glossary/settlement-report/'>settlement reports</a>, so books built on settlements catch them automatically, part of our <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a> discipline.</p>",
    related: ["rolling-reserve", "settlement-report", "reconciliation"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "reconciliation",
    term: "Reconciliation",
    definition:
      "Reconciliation is proving your books against independent records: bank statements, settlement reports, payout data, inventory counts. Every balance is matched to its source and every difference explained. In ecommerce the workhorse is settlement-to-deposit reconciliation, tying what the marketplace says you earned to what the bank says you received, penny for penny. It's the control that separates books you can trust from books that merely look finished.",
    body: "<p>Unreconciled books drift, and the drift always hides something. A real example pattern from onboarding: a seller's QuickBooks showed Amazon income $14,000 higher than settlements supported. The reconciliation surfaced a stack of missed refunds, a reserve hold recorded as revenue, and $1,800 of <a href='/glossary/fba-reimbursement/'>FBA reimbursements</a> Amazon owed but the seller had never claimed. Every one of those was invisible from the bank feed.</p><p>Reconciliation is also what diligence actually is: a buyer's QoE team reconciles your claimed revenue to settlements and 1099-Ks, and books that have been reconciled monthly sail through while books reconciled never come apart in week one. It's the least glamorous work in accounting and the most valuable, which is why every account in a <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a> engagement is reconciled before the close is called done, on the timeline our <a href='/glossary/month-end-close/'>month-end close</a> guarantee commits to.</p>",
    related: ["settlement-report", "month-end-close", "fba-reimbursement"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "month-end-close",
    term: "Month-End Close",
    definition:
      "The month-end close is the process that turns a month of transactions into finished financial statements: reconcile every account, post COGS and accruals, value inventory, review for anomalies, then lock the period so nothing moves afterward. A closed month is final; a merely categorized month is a draft. Speed matters as much as accuracy, because statements delivered six weeks late describe a business that no longer exists. Our standard is the 10th business day.",
    body: "<p>The cost of a slow close is bad decisions made on stale numbers. A seller scaling ad spend in March off December's last-closed P&amp;L is flying on instruments from three months ago; if contribution margin slipped in January, the overspend runs undetected for a quarter. Close by day 10 and the feedback loop tightens to days: February's real margins are on the table while February's decisions are still fresh enough to correct.</p><p>Locking the period is the underrated half. When prior months stay editable, a stray edit in June silently changes January's numbers, and suddenly reports don't match what you sent the bank. Closed periods are why your trailing-twelve-month statements stay consistent through a loan application or a sale process. The day-10 close is the guarantee at the center of our <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>, and it's written into our published <a href='/pricing/'>pricing</a>: miss it and the month is half price.</p>",
    related: ["reconciliation", "accrual-accounting", "profit-and-loss-statement"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "profit-and-loss-statement",
    term: "Profit and Loss Statement",
    definition:
      "The profit and loss statement, or income statement, reports what a business earned over a period: revenue at the top, then COGS, then operating expenses, down to net profit. It answers \"did we make money last month?\" For an ecommerce operation the useful version is channel-level, revenue and fees broken out per marketplace and storefront, on an accrual basis. A single blended Sales line hides exactly the comparisons an owner needs.",
    body: "<p>A channel P&amp;L changes decisions in the first month you have one. Real shape of the numbers: total revenue $140,000 looks fine blended; broken out, Amazon shows $85,000 of revenue carrying $21,000 of fees and returns while Shopify shows $55,000 carrying $7,000. Suddenly the question isn't \"how do we grow?\" but \"why are we pushing ad dollars at the channel that keeps 12 cents of every dollar instead of the one that keeps 26?\"</p><p>Two things make a P&amp;L trustworthy: revenue built from <a href='/glossary/settlement-report/'>settlement reports</a> rather than deposits, and COGS matched to sales under <a href='/glossary/accrual-accounting/'>accrual accounting</a>. Without both, the statement is a guess with formatting. The structure comes from the <a href='/glossary/chart-of-accounts/'>chart of accounts</a>, which we covered in detail in our <a href='/bookkeeping-tips/ecommerce-chart-of-accounts/'>chart of accounts guide</a>; producing the statement by day 10 monthly is the core deliverable of <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>.</p>",
    related: ["balance-sheet", "cash-flow-statement", "chart-of-accounts", "gross-margin"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "balance-sheet",
    term: "Balance Sheet",
    definition:
      "The balance sheet is a snapshot of what the business owns, owes and is worth at a moment in time: assets on one side, liabilities and equity on the other, always in balance. For ecommerce sellers it's where the big hidden numbers live: inventory value, reserve balances held by processors, sales tax collected but not yet remitted, and supplier debt. It's the statement sellers ignore and the one lenders and buyers read first.",
    body: "<p>The P&amp;L can look great while the balance sheet tells the real story. A seller shows $250,000 of trailing profit, but the balance sheet reveals $180,000 of credit card and supplier debt, a $40,000 sales tax liability accruing since the nexus study never happened, and inventory carried at a value nobody has verified in a year. Net position: fragile. Every lender underwriting an inventory line and every buyer's diligence team starts here, precisely because it can't be dressed up the way a P&amp;L can.</p><p>A balance sheet is only as good as its reconciliations: <a href='/glossary/inventory-valuation/'>inventory</a> tied to counts, <a href='/glossary/rolling-reserve/'>reserves</a> tied to processor statements, liabilities complete. Books that skip those steps technically have a balance sheet, but it fails the first time someone checks a number against reality. Keeping it real is a monthly discipline inside <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>, and it's the foundation for the <a href='/glossary/working-capital/'>working capital</a> conversations that decide loan terms and deal prices.</p>",
    related: ["profit-and-loss-statement", "cash-flow-statement", "working-capital", "inventory-valuation"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "cash-flow-statement",
    term: "Cash Flow Statement",
    definition:
      "The cash flow statement reconciles profit to cash: it starts from net income and shows where money actually went, split into operating, investing and financing activities. It answers the question the P&amp;L can't: \"we made $30,000 last month, so why is the bank account down?\" For inventory businesses the answer usually lives in the operating section, where cash sinks into stock and reserves long before sales convert it back.",
    body: "<p>Profitable-but-broke is the defining ecommerce condition, and this statement is where it becomes legible. A brand earns $35,000 in a month; the cash flow statement shows $60,000 went into new inventory, $8,000 got trapped in a <a href='/glossary/rolling-reserve/'>rolling reserve</a>, and a $10,000 loan payment went out. Net cash: down $43,000 in a profitable month. Nothing is wrong, but an owner who can't see that decomposition either panics or, worse, keeps spending as if profit were cash.</p><p>Sophisticated readers use it as a lie detector too: the <a href='/glossary/quality-of-earnings-ratio/'>quality of earnings ratio</a> compares operating cash flow to net income, and persistent gaps flag aggressive accounting. Producing a real cash flow statement monthly requires a reconciled <a href='/glossary/balance-sheet/'>balance sheet</a>, which is why deposit-based books can't generate one. It ships as part of the standard statement package in <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>.</p>",
    related: ["quality-of-earnings-ratio", "working-capital", "balance-sheet"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "3pl",
    term: "3PL (Third-Party Logistics)",
    definition:
      "A 3PL is a third-party logistics provider that stores your inventory and picks, packs and ships your orders, the independent alternative or complement to Amazon FBA. Sellers use 3PLs to fulfill Shopify and wholesale orders, escape FBA storage limits and fees, or diversify away from Amazon dependency. Accounting-wise the key fact: inventory at a 3PL is still your asset, and 3PL invoices need splitting into distinct cost types rather than one lump.",
    body: "<p>The books go wrong at a 3PL in two places. First, the inventory: stock in their warehouse belongs on your balance sheet at landed cost, reconciled monthly against their system counts, because 3PL shrinkage and miscounts are real and nobody refunds what you never notice. Second, the invoice: a typical 3PL bill mixes storage (a holding cost), pick-and-pack (a per-order fulfillment cost) and freight (shipping). Lump them together and your per-order economics are wrong; split them and you can actually compare the 3PL against FBA. A seller shipping 3,000 orders a month at $2.80 pick-and-pack plus $1,900 storage can put a real number next to Amazon's fee schedule and decide with data.</p><p>There's a tax angle too: your inventory sitting in a 3PL's state creates physical <a href='/glossary/sales-tax-nexus/'>nexus</a> there, same as FBA stock does. Multi-location inventory and fee-split accounting are standard inside <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>, with data feeds automated through <a href='/custom-integrations/'>custom integrations</a> when the 3PL has an API.</p>",
    related: ["fba-reimbursement", "inventory-valuation", "sales-tax-nexus"],
    serviceLink: { href: "/custom-integrations/", label: "Custom Integrations" },
  },
  {
    slug: "fba-reimbursement",
    term: "FBA Reimbursement",
    definition:
      "An FBA reimbursement is money Amazon pays you back for inventory it lost or damaged in its warehouses, customer returns never actually returned, and fee overcharges from wrong weights or dimensions. Amazon reimburses some of it automatically and quietly misses the rest, and claim windows have shrunk to as little as 60 days for some claim types. For most FBA sellers, recoverable amounts run 1% to 3% of FBA revenue, real money left on the table by default.",
    body: "<p>Scale the percentage and the stakes get obvious: a seller doing $600,000 a year through FBA is typically owed $6,000 to $18,000 annually across lost inbound units, warehouse damage, un-returned returns and fee errors. None of it arrives without an audit trail. Finding it means reconciling inventory movements report by report, exactly the work a bank feed never surfaces, and with the shortened deadlines, money not claimed inside the window is simply gone.</p><p>Bookkeeping treatment matters too: reimbursements are recovery of inventory cost, which offsets COGS or shrinkage, not a happy little \"other income\" line. Booked wrong, they inflate revenue and distort margins on the affected SKUs. Reimbursement review rides along naturally with settlement-level <a href='/glossary/reconciliation/'>reconciliation</a>, one of the ways specialist <a href='/amazon-bookkeeping-services/'>Amazon bookkeeping</a> pays for itself, and the recovered cash usually covers a meaningful share of the bookkeeping fee.</p>",
    related: ["reconciliation", "settlement-report", "3pl"],
    serviceLink: { href: "/amazon-bookkeeping-services/", label: "Amazon Bookkeeping Services" },
  },
  {
    slug: "b-and-o-tax",
    term: "B&O Tax",
    definition:
      "Washington's Business and Occupation (B&O) tax is a tax on gross receipts, not profit. Retailers pay 0.471% of gross Washington sales, with no deduction for product costs, fees or anything else; you owe it even in a money-losing year. It's separate from sales tax, so a marketplace facilitator collecting Washington sales tax on your orders does nothing about your B&O bill. Several other states run similar gross receipts taxes, like Ohio's CAT and Texas's franchise tax.",
    body: "<p>B&O catches ecommerce sellers precisely because facilitator laws taught everyone to stop thinking about Washington. Your FBA inventory in Amazon's Washington warehouses creates nexus, Amazon remits the sales tax, and everything feels handled, but the B&O obligation on your gross Washington receipts remains yours. A seller with $500,000 of annual Washington sales owes about $2,355 in retailing B&O. Small enough to ignore, until several years of non-filing turn into an assessment with penalties and interest, and Washington does find marketplace sellers.</p><p>The mitigation is knowing your numbers: Washington offers a small business credit that phases out as receipts grow, and sellers under the filing thresholds may owe nothing, but you only know by running the math on real state-level sales data, which settlement-based books produce as a byproduct. The full picture, thresholds and all, is in our <a href='/bookkeeping-tips/washington-sales-tax-ecommerce-guide/'>Washington sales tax guide</a>, and multi-state exposure review is part of <a href='/ecommerce-tax-services/'>ecommerce tax services</a>.</p>",
    related: ["sales-tax-nexus", "economic-nexus", "franchise-tax"],
    serviceLink: { href: "/ecommerce-tax-services/", label: "Ecommerce Tax Services" },
  },
  {
    slug: "franchise-tax",
    term: "Franchise Tax",
    definition:
      "Franchise tax is a state tax on the privilege of doing business there, computed on margin, net worth or a flat fee depending on the state, and unrelated to franchising. The one most sellers meet is Texas's: it applies above a no-tax-due threshold of roughly $2.47 million in annual revenue, computed on \"margin\" with a choice of deduction methods. Delaware charges its famous flat-fee version, which is why every Delaware LLC owes something annually regardless of activity.",
    body: "<p>The classic marketplace-seller mistake on Texas franchise tax is using bank deposits as revenue. The report asks for gross revenue, the same figure your <a href='/glossary/1099-k/'>1099-Ks</a> reflect, and deposits understate that by the 15% to 25% the marketplace withheld in fees. A seller whose deposits total $2.3 million but whose gross is $2.9 million isn't under the no-tax-due threshold; they're over it, misfiled, and accruing exposure. Books built from <a href='/glossary/settlement-report/'>settlement reports</a> produce the right number automatically.</p><p>When tax is due, Texas lets you compute margin as total revenue times 70%, or revenue minus COGS, or revenue minus compensation, whichever is least, and for inventory businesses the COGS method usually wins, which makes accurate landed-cost COGS a direct tax saver. Out-of-state sellers aren't exempt either: Texas applies a $500,000 economic nexus threshold to the franchise tax. Getting the report right is routine work inside our <a href='/ecommerce-tax-services/'>ecommerce tax services</a>.</p>",
    related: ["b-and-o-tax", "economic-nexus", "1099-k"],
    serviceLink: { href: "/ecommerce-tax-services/", label: "Ecommerce Tax Services" },
  },
  {
    slug: "gross-merchandise-value",
    term: "Gross Merchandise Value (GMV)",
    definition:
      "GMV is the total value of merchandise sold through a channel over a period, before refunds, cancellations, fees and discounts come out. It's a volume metric, not revenue: useful for measuring channel scale and growth, quoted constantly in ecommerce press and investor decks, and 15% to 30% larger than the net revenue that belongs on your P&L. Confusing the two is how sellers accidentally overstate their business, to others and to themselves.",
    body: "<p>The gap between GMV and revenue is structural. A brand with $3 million of GMV might net out to $2.4 million of accounting revenue after $250,000 of refunds and cancellations and various discounts, and take home far less after fees. Lenders and buyers know this, which is why a pitch built on GMV gets discounted on sight, while a seller who states GMV and net revenue side by side, with the bridge between them, reads as someone who knows their numbers.</p><p>GMV does have one bookkeeping job: it's the family of gross figures your <a href='/glossary/1099-k/'>1099-K</a> reports, so the bridge from gross volume down to net revenue is exactly what an IRS matching notice or a diligence request asks you to produce. Books built from <a href='/glossary/settlement-report/'>settlement reports</a> maintain that bridge automatically, every month, as part of <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>.</p>",
    related: ["1099-k", "settlement-report", "net-profit-margin"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
  {
    slug: "unit-economics",
    term: "Unit Economics",
    definition:
      "Unit economics is the profit math of a single unit or order: selling price minus landed cost, channel fees, fulfillment and shipping, and advertising cost per order, leaving contribution profit. It's the business in miniature. If the unit math works, scale multiplies profit; if it doesn't, scale multiplies losses. Every pricing, reorder and kill-the-SKU decision is a unit economics question, and every input comes straight from the books.",
    body: "<p>Worked example, one SKU on Amazon: price $34.99. Landed cost $9.80, referral fee $5.25, FBA fulfillment $6.10, ad cost per unit $6.50. Contribution: $7.34 a unit, about 21% of price. Now Amazon raises fulfillment $0.75 and freight adds $0.60 to landed cost: contribution drops to $5.99, an 18% profit cut from two small changes nobody announced together. Sellers who maintain unit math catch this the month it happens; sellers who watch only the blended P&amp;L find out at year-end, after thousands of units shipped at the thinner margin.</p><p>The discipline lives or dies on input quality: true <a href='/glossary/landed-cost/'>landed costs</a> per receiving, fees split by channel, ad spend mapped to SKUs. Those are bookkeeping outputs, which is why unit economics is downstream of a clean <a href='/glossary/cogs/'>COGS</a> process, walked through in our <a href='/bookkeeping-tips/cogs-formula-ecommerce-guide/'>COGS formula guide</a>, and maintained monthly in <a href='/monthly-ecommerce-bookkeeping/'>monthly bookkeeping</a>.</p>",
    related: ["contribution-margin", "landed-cost", "cogs", "gross-margin"],
    serviceLink: { href: "/monthly-ecommerce-bookkeeping/", label: "Monthly Ecommerce Bookkeeping" },
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY.find((t) => t.slug === slug);
}

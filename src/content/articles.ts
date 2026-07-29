export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readMinutes: number;
  excerpt: string;
  /** HTML body. Headings start at h2. */
  html: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "how-much-does-ecommerce-bookkeeping-cost",
    title: "How Much Does Ecommerce Bookkeeping Cost in 2026?",
    metaTitle: "How Much Does Ecommerce Bookkeeping Cost? (2026 Prices)",
    metaDescription:
      "Real 2026 prices for ecommerce bookkeeping: DIY, freelancers, specialist firms and what drives cost. Includes actual published rates from 8 providers.",
    date: "2026-07-28",
    readMinutes: 7,
    excerpt: "Between $149 and $1,250+ a month depending on scale, with wide variation that comes down to five factors. Here are the actual numbers firms publish, and the ones they hide.",
    html: `
<p>Short answer: a specialist ecommerce bookkeeping service in 2026 runs between $229 and $995 per month for a small-to-midsize seller, and the wide range comes down to five factors covered below. Generalist bookkeepers charge less. They also tend to book your Amazon deposits as revenue, which is why sellers end up switching.</p>

<h2>What firms actually charge in 2026</h2>
<p>Published entry prices, gathered July 2026:</p>
<table>
<thead><tr><th>Provider</th><th>Entry price</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>eMerchant Books</td><td>$1,250/mo ($100K+/mo brands); Books Lite $149/mo</td><td>Ecommerce specialist, published rate card, free books audit</td></tr>
<tr><td>Finaloop</td><td>$245/mo</td><td>Proprietary ledger, DTC-focused, price rises with revenue</td></tr>
<tr><td>Xendoo</td><td>$395/mo</td><td>Generalist with ecommerce vertical, tiered by monthly expenses</td></tr>
<tr><td>EcomBalance</td><td>"from $499/mo"</td><td>Specialist, but final price requires a quote call</td></tr>
<tr><td>Acuity</td><td>~$599/mo</td><td>Pricing not published</td></tr>
<tr><td>Bean Ninjas</td><td>$995/mo</td><td>Specialist, published pricing, 7-figure focus</td></tr>
<tr><td>LedgerGurus</td><td>Not published</td><td>Generally requires ~$3M+ annual revenue</td></tr>
<tr><td>Freelance bookkeeper</td><td>$300–$800/mo</td><td>Quality varies enormously; ecommerce skills rare</td></tr>
</tbody>
</table>
<p>Notice how many rows say "not published" or "requires a call." Hidden pricing usually means the number depends on how the sales conversation goes. When comparing, always ask what the price becomes at your order volume next year, not just today.</p>

<h2>The five factors that actually drive your price</h2>
<p><strong>1. Number of sales channels.</strong> Each marketplace or cart adds its own settlement reports, fee structures and reconciliation work. Amazon-only is the cheapest case. Amazon plus Shopify plus eBay plus Walmart roughly doubles the monthly work, not quadruples it, but it's real.</p>
<p><strong>2. Order volume.</strong> More orders means more refunds, disputes, adjustments and edge cases, even with summary-level posting. Most honest pricing scales on this. Watch out for firms that price on <em>expenses</em> instead: growing sellers get punished for inventory purchases and ad spend.</p>
<p><strong>3. Inventory complexity.</strong> Dropshipping is simple. FBA plus a 3PL plus a warehouse means multi-location inventory valuation, landed costs and shrinkage tracking. This is often the difference between a $300 engagement and a $700 one.</p>
<p><strong>4. State of your books today.</strong> A clean file costs nothing extra. Twelve months of deposit-as-revenue bookkeeping needs a catch-up project first, typically quoted flat. Get that quote in writing before signing the monthly agreement.</p>
<p><strong>5. Accrual vs cash books.</strong> Accrual with real COGS costs more than cash-basis category-sorting because it's more work. It's also the only version that tells an inventory business the truth. If a low quote assumes cash basis, you're not comparing the same product.</p>

<h2>What DIY actually costs</h2>
<p>QuickBooks Online Plus runs about $99/mo, A2X about $29–$89/mo, and the average seller spends 5 to 15 hours a month doing the work. At even $30/hour of your time, DIY costs $250 to $600 a month before the error risk. DIY makes sense under roughly $10k/mo in sales. Past that, the math flips fast, because the expensive part of bookkeeping isn't the subscription, it's getting COGS and settlement accounting wrong for a year.</p>

<h2>The costs of bad bookkeeping (the number nobody quotes)</h2>
<p>A 1099-K that doesn't match your filed return can trigger an IRS notice; resolving one typically costs more in professional fees than a year of bookkeeping. A lender or aggregator that can't verify your margins discounts your valuation or walks. And a mispriced product line can quietly lose money for years. Cheap books that are wrong are the most expensive option on this page.</p>

<h2>Bottom line</h2>
<p>Budget $400–$1,500/mo for real specialist work depending on scale and inventory complexity, more at controller depth. Insist on: accrual books, settlement-level reconciliation, transparent pricing, your own QuickBooks or Xero file, and no annual contract. Our <a href="/pricing/">full rate card is public</a>, from $149/mo Books Lite to specialist tiers, and the books audit is free.</p>
`,
  },
  {
    slug: "amazon-seller-taxes-guide",
    title: "Amazon Seller Taxes: What You Actually Owe in 2026",
    metaTitle: "Amazon Seller Taxes Explained (2026 Guide)",
    metaDescription:
      "Income tax, sales tax, 1099-K matching and deductions for Amazon sellers, explained plainly. What Amazon handles for you and what's still your problem.",
    date: "2026-07-28",
    readMinutes: 9,
    excerpt: "Amazon handles most sales tax for you now. Income tax, 1099-K matching and inventory accounting are still your problem. Here's the whole picture in plain English.",
    html: `
<p>Do Amazon sellers pay taxes? Yes, on profit, like any business. But Amazon selling has three tax layers that confuse people because they work completely differently: income tax, sales tax, and the 1099-K information return that ties them together. Here's each one, plainly.</p>

<h2>Layer 1: Income tax on your profit</h2>
<p>You owe federal (and usually state) income tax on net profit: revenue minus cost of goods sold minus expenses. Sole proprietors and single-member LLCs report it on Schedule C; the profit also picks up 15.3% self-employment tax. S-corps and partnerships file their own returns and pass income through.</p>
<p>The part sellers get wrong isn't the form, it's the inputs. Your revenue is your <em>gross sales</em>, not your deposits. Your COGS is the cost of inventory you <em>sold</em>, not inventory you bought. Get those two right and the rest is arithmetic. Get them wrong and you're either overpaying tax or filing a return that contradicts the 1099-K Amazon sent the IRS.</p>

<h2>Layer 2: Sales tax (mostly Amazon's job now)</h2>
<p>Marketplace facilitator laws in every sales-tax state make Amazon collect and remit sales tax on marketplace orders. For most FBA sellers, that means the sales tax on Amazon orders is genuinely handled.</p>
<p>What's still yours:</p>
<ul>
<li><strong>Direct-channel sales.</strong> Your Shopify store's sales tax is your responsibility wherever you have nexus.</li>
<li><strong>Registration obligations.</strong> Some states still expect registered sellers to file returns (often zero-due) even when Amazon remits.</li>
<li><strong>Nexus from FBA inventory.</strong> Amazon placing your inventory in a state's warehouse can create physical nexus there. It matters mainly if you also sell direct.</li>
<li><strong>Bookkeeping hygiene.</strong> Sales tax that flows through your account must sit in a liability account, not revenue. Booked as revenue, it inflates your sales and your tax bill.</li>
</ul>

<h2>Layer 3: The 1099-K, where returns go to die</h2>
<p>Amazon reports your <strong>gross</strong> payment volume to the IRS on Form 1099-K. Gross means before fees, refunds, and everything else. Your bank deposits are net. The gap between them is routinely 25–35% of gross.</p>
<p>If your return shows revenue that looks like your deposits, the IRS computer sees a mismatch against the 1099-K and mismatches generate notices. The fix is books built from settlement reports, where gross sales tie to the 1099-K and fees are properly deducted as expenses. Same tax owed, no letter.</p>

<h2>Deductions Amazon sellers commonly miss</h2>
<ul>
<li><strong>Amazon's fee zoo:</strong> referral, FBA fulfillment, storage, long-term storage, removal fees. All deductible, all invisible if you book net deposits.</li>
<li><strong>Ad spend</strong> (Sponsored Products et al.), often netted out of settlements and never surfaced.</li>
<li><strong>Inventory shrinkage:</strong> lost and damaged units Amazon didn't reimburse.</li>
<li><strong>Home office, mileage to source inventory, software subscriptions, education.</strong> Ordinary rules, commonly skipped.</li>
<li><strong>Reimbursements handled backwards:</strong> Amazon lost-inventory reimbursements aren't revenue windfalls; they offset inventory losses.</li>
</ul>

<h2>Quarterly estimated taxes</h2>
<p>Profitable sellers generally owe quarterly estimates (April, June, September, January). The safe-harbor rule of paying 100% of last year's tax (110% for higher incomes) avoids penalties even if you're growing. This is the single easiest tax problem to prevent and the most common one new sellers hit.</p>

<h2>Non-US sellers on Amazon.com</h2>
<p>Different rulebook entirely: W-8 forms in the tax interview, Form 5472 for foreign-owned LLCs (a $25,000 penalty if skipped), and treaty questions about whether US income tax applies at all. We cover it on our <a href="/international-sellers/">international sellers page</a>.</p>

<h2>What to do before year end</h2>
<p>Reconcile your books to your settlement reports, count or value your inventory as of December 31, pull your annual 1099-K when it drops, and hand your CPA a file where those three things agree. If they don't agree, fix the books before filing, not after the letter. That's the service we provide, starting with <a href="/catch-up-bookkeeping-services/">a catch-up</a> if you're behind.</p>
`,
  },
  {
    slug: "amazon-1099-k-explained",
    title: "Amazon 1099-K: Why It Doesn't Match Your Deposits (And What To Do)",
    metaTitle: "Amazon 1099-K Explained: Gross vs Deposits",
    metaDescription:
      "Your Amazon 1099-K reports gross sales; your bank shows net deposits. Here's how to reconcile them, what the IRS checks, and how to avoid a mismatch notice.",
    date: "2026-07-28",
    readMinutes: 6,
    excerpt: "The 1099-K says $487,000. Your bank says $342,000. Neither is wrong, and understanding the gap is the difference between a clean filing and an IRS notice.",
    html: `
<p>Every January, Amazon sellers open their 1099-K and have the same reaction: "I never received this much money." Correct. You didn't. The 1099-K reports <strong>gross payment volume</strong>, before Amazon's fees, refunds and adjustments. Your bank received what was left. Both numbers are right; they're just answering different questions.</p>

<h2>What's actually in the 1099-K number</h2>
<p>Box 1a is unadjusted gross sales processed through Amazon: product sales, shipping charged to buyers, gift wrap, and sales tax collected in some configurations. It does not subtract referral fees, FBA fees, storage, refunds, chargebacks, or advertising deducted from settlements.</p>
<p>A seller whose 1099-K says $487,000 might have had $28,000 in refunds, $73,000 in referral fees, $41,000 in FBA fees and $12,000 in ads netted from payouts, and banked around $333,000. That gap is normal. What matters is being able to show it.</p>

<h2>Why the IRS cares</h2>
<p>The IRS matches information returns against filed returns by computer. If Amazon says $487,000 gross and your Schedule C reports $340,000 of revenue because someone summed the deposits, the computer flags roughly $147,000 of "unreported income." The notice that follows (typically a CP2000) is resolvable, but it costs professional fees, months of correspondence, and occasionally a proposed tax bill computed as if the entire gap were profit.</p>

<h2>The right way to report it</h2>
<p>Report gross revenue that ties to the 1099-K, then deduct what Amazon kept:</p>
<ul>
<li>Gross sales: $487,000 (matches 1099-K, computer is happy)</li>
<li>Returns and allowances: $28,000</li>
<li>Amazon fees (referral, FBA, storage): $114,000 as expenses</li>
<li>Advertising: $12,000</li>
</ul>
<p>Same taxable profit as the "deposits" method when done right, zero mismatch. The catch: you can only produce these numbers from settlement reports, not from your bank feed. That's the whole argument for marketplace-aware bookkeeping.</p>

<h2>Common 1099-K complications</h2>
<p><strong>Multiple marketplaces:</strong> Amazon issues per payment entity; eBay, Walmart, Etsy and PayPal each send their own. Every one needs to tie to your books individually.</p>
<p><strong>Sales tax in the gross figure:</strong> depending on configuration, facilitator-collected tax may appear in gross. Your books should show it as a pass-through liability, and your reconciliation should document the difference.</p>
<p><strong>Mid-year business changes:</strong> switched from sole prop to LLC or changed bank accounts, and the 1099-K may span entities. Get bookkeeping help before filing, not after.</p>
<p><strong>Personal account thresholds:</strong> the reporting threshold has dropped low enough that casual sellers get 1099-Ks now. Selling used personal items at a loss isn't taxable profit, but it still needs to be reported correctly to avoid the mismatch flag.</p>

<h2>The five-minute self-check</h2>
<p>Take last year's 1099-K. Open your filed Schedule C (or P&L). If gross receipts are within rounding distance of Box 1a, you're fine. If gross receipts look like your bank deposits instead, your filing method has a mismatch problem, and it's worth fixing the books before the IRS asks. <a href="/catch-up-bookkeeping-services/">That's a catch-up project</a>, and it's much cheaper before the notice than after.</p>
`,
  },
  {
    slug: "ecommerce-chart-of-accounts",
    title: "The Ecommerce Chart of Accounts That Actually Answers Questions",
    metaTitle: "Ecommerce Chart of Accounts (With Full Template)",
    metaDescription:
      "A chart of accounts built for marketplace sellers: per-channel revenue, fee breakdowns, real COGS structure. Copy the full template into QuickBooks or Xero.",
    date: "2026-07-28",
    readMinutes: 8,
    excerpt: "Default QuickBooks gives you 'Sales' and 'Fees.' Here's the account structure that shows channel margins, fee creep and real product costs, ready to copy.",
    html: `
<p>Your chart of accounts decides which questions your books can answer. With QuickBooks' default COA, "how were sales?" gets an answer. "Which channel makes money?" and "why did margins drop in March?" do not. Here's the structure we set up for marketplace sellers, and you're welcome to copy it.</p>

<h2>The design principle: one level of useful detail</h2>
<p>Bad COAs fail in both directions. Five accounts tell you nothing; three hundred accounts never get categorized consistently and tell you less. The rule: break out an account only if you'll make a different decision based on its balance. Channel-level revenue? Different decisions. Separate accounts for blue pens and black pens? No.</p>

<h2>Revenue: by channel, gross and honest</h2>
<ul>
<li>4010 Sales – Amazon</li>
<li>4020 Sales – Shopify</li>
<li>4030 Sales – eBay</li>
<li>4040 Sales – Walmart</li>
<li>4050 Sales – Etsy</li>
<li>4910 Refunds &amp; Returns (contra-revenue, also by channel if volume justifies)</li>
<li>4920 Discounts &amp; Promotions (contra-revenue)</li>
</ul>
<p>Gross sales by channel, refunds shown separately. Netting refunds into sales hides your return rate, and your return rate is a product-quality dashboard.</p>

<h2>COGS: the section everyone gets wrong</h2>
<ul>
<li>5010 Cost of Goods Sold (recognized on sale, not purchase)</li>
<li>5020 Inbound Freight &amp; Duties (landed cost)</li>
<li>5030 Inventory Shrinkage &amp; Write-offs</li>
<li>5040 Fulfillment Supplies (boxes, tape, labels if you self-fulfill)</li>
</ul>
<p>And on the balance sheet: 1310 Inventory. Purchases go <em>to the balance sheet first</em>, then move to COGS as units sell. That single discipline separates books a lender trusts from books they don't.</p>

<h2>Marketplace fees: itemized, because they creep</h2>
<ul>
<li>6010 Referral / Commission Fees – by channel</li>
<li>6020 FBA / Fulfillment Fees</li>
<li>6030 Storage Fees (watch long-term storage separately if FBA)</li>
<li>6040 Payment Processing (Shopify Payments, PayPal, Stripe)</li>
<li>6050 Marketplace Subscriptions (Pro accounts, store fees)</li>
<li>6060 Shipping Labels Purchased</li>
</ul>
<p>Fees are most sellers' second-largest cost after inventory, and platforms raise them a percentage point at a time. Itemized accounts make the creep visible while it's still an email to your account manager instead of a margin crisis.</p>

<h2>Advertising: split by platform</h2>
<ul>
<li>6110 Advertising – Amazon PPC</li>
<li>6120 Advertising – Meta</li>
<li>6130 Advertising – Google</li>
<li>6140 Advertising – Other (TikTok, influencers, Etsy/Offsite ads)</li>
</ul>
<p>Blended ad spend can't tell you where the next dollar should go. Split it.</p>

<h2>Operating expenses: standard, with two ecommerce additions</h2>
<p>The usual (software, payroll, rent, insurance, professional fees), plus: <strong>6210 3PL Fees</strong> if you use one, and <strong>2250 Sales Tax Payable</strong> as a liability so collected tax never touches revenue. If a bookkeeper ever books sales tax as income, that's your cue to keep interviewing.</p>

<h2>Per-channel P&amp;L without duplicate accounts</h2>
<p>In QuickBooks Online Plus, use Classes for channels; in Xero, Tracking Categories. Revenue accounts stay clean, and every expense that's channel-specific gets tagged, giving you a true margin picture per channel. This is the report that tells you Walmart is worth doubling down on, or isn't.</p>

<h2>Setting this up</h2>
<p>Building this into a fresh file takes an afternoon. Restructuring a live file with history takes more care: account merges, remapped A2X postings, and reclassifying enough history that trends stay comparable. We do both as part of onboarding, and the <a href="/quickbooks-for-ecommerce/">QuickBooks setup</a> is included in every plan. Or take this template and build it yourself; either way, stop running a marketplace business on "Sales" and "Fees."</p>
`,
  },
  {
    slug: "form-5472-foreign-owned-llc-guide",
    title: "Form 5472 for Foreign-Owned LLCs: The $25,000 Form Every International Seller Must Know",
    metaTitle: "Form 5472 Guide for Foreign-Owned LLCs (2026)",
    metaDescription:
      "Non-US owner of a US LLC? Form 5472 is mandatory even with zero US tax owed, and the penalty is $25,000. Who files, what it reports, deadlines and fixes.",
    date: "2026-07-28",
    readMinutes: 8,
    excerpt: "If a non-US person owns a US LLC, Form 5472 is due every year even with zero tax owed. The penalty for missing it is $25,000 per form. Here's the whole picture.",
    html: `
<p>If you're a non-US resident who formed a US LLC to sell on Amazon, Walmart or Shopify, one form matters more than every other piece of US paperwork combined: <strong>Form 5472</strong>, filed with a pro-forma Form 1120. It's due every year even if you owe zero US tax, and the penalty for not filing starts at <strong>$25,000 per form, per year</strong>.</p>
<p>That's not a scare-marketing number. It's the statutory penalty, it's assessed automatically, and we've studied a case of a seller with a Wyoming LLC who was hit for $50,000 across two missed years despite owing no tax at all.</p>

<h2>Who has to file</h2>
<p>A US LLC with a single foreign owner (person or company) is a "foreign-owned disregarded entity," and since 2017 these entities file Form 5472 annually if they had any <em>reportable transactions</em> with the foreign owner or related parties. Reportable transactions are broad: you funding the LLC's bank account counts. The LLC paying you back counts. In practice, nearly every active foreign-owned single-member LLC has reportable transactions every year and therefore files every year.</p>
<p>Multi-member LLCs taxed as partnerships and LLCs that elected corporate taxation have different filing profiles, but foreign ownership triggers reporting in those structures too. If a non-US person owns 25% or more, assume forms are due until a professional confirms otherwise.</p>

<h2>What the form actually reports</h2>
<p>Not your profit. Form 5472 is an information return about money moving between the LLC and its foreign owner: capital contributions, distributions, loans, payments for services, rent, royalties. The IRS uses it to see cross-border flows. The pro-forma 1120 that wraps it is mostly a cover page.</p>
<p>Here's the part sellers miss: to report those transactions accurately, you need books that actually track them. "I moved money between my personal account and the LLC whenever" is how reportable transactions get missed and forms get filed wrong. The 5472 is, quietly, a bookkeeping requirement.</p>

<h2>Deadlines and mechanics</h2>
<ul>
<li><strong>Due date:</strong> April 15 for calendar-year entities, extendable to October 15 with Form 7004.</li>
<li><strong>How it's filed:</strong> the pro-forma 1120 + 5472 goes by mail or fax to a dedicated IRS unit. It cannot be e-filed through consumer tax software, which is why DIY sellers miss it: TurboTax never mentions it.</li>
<li><strong>You need an EIN.</strong> Foreign owners without an SSN get one via the mail/fax route (Form SS-4). Start early; it takes weeks.</li>
<li><strong>Records:</strong> keep books sufficient to establish the reported transactions. That's a statutory requirement, not advice.</li>
</ul>

<h2>Already missed a year (or three)?</h2>
<p>Don't wait for the penalty notice, and don't dissolve the LLC hoping it goes away (dissolution has its own final-year filing requirements). There are real paths: late filings with reasonable-cause statements succeed regularly for first-time, voluntary corrections, especially when supported by clean books that show no tax was avoided. The worst position is the seller who knew and kept waiting; the second-worst is filing late forms with reconstructed numbers that don't hold up. Rebuild the books first, then file.</p>

<h2>The other forms in the non-resident stack</h2>
<p>The 5472 travels with a family: W-8BEN or W-8BEN-E for platform tax interviews (get the wrong one and platforms may withhold), BOI reporting where applicable, state annual reports and franchise taxes, sales tax registrations, and, depending on your country's treaty and your activity, a 1040-NR or treaty-position filing. Whether you owe US income tax at all is the famous "engaged in a US trade or business" question, on which reasonable professionals disagree; what nobody disagrees about is that the 5472 is due regardless.</p>

<h2>Getting this handled</h2>
<p>The cheap route is a filing shop ($399–$999 per year) that files the form using whatever numbers you give them, plus a separate bookkeeper who has never seen an Amazon settlement report. The expensive route is a formation platform's $1,999/yr compliance bundle with software-first books underneath. The route we built: <a href="/international-sellers/">marketplace-grade monthly bookkeeping plus coordination of the full compliance stack</a>, so the numbers on the form come from books that can defend them. From $229/mo, first month free, and your books live in your own QuickBooks or Xero file either way.</p>
`,
  },
  {
    slug: "quality-of-earnings-report-guide",
    title: "Quality of Earnings Report: What It Is, What It Costs, and How to Pass One",
    metaTitle: "Quality of Earnings Report Explained (Cost, Example, How to Pass)",
    metaDescription:
      "What a quality of earnings (QoE) report is, what it costs ($5K-$35K), what's inside one, and how ecommerce sellers pass QoE analysis without losing 20-40% of their sale price.",
    date: "2026-07-29",
    readMinutes: 11,
    excerpt: "A QoE report is the financial exam your business takes before someone buys it. Here's what's inside one, what it costs, and the eight things that make ecommerce sellers fail it.",
    html: `
<p>A quality of earnings report (QoE) is an independent analysis of how real your profits are. When someone offers to buy your business, their diligence team produces one to answer a single question: if we own this company next year, does the money keep showing up? It examines revenue quality, expense completeness, owner addbacks, and working capital, and it is the document that most often reprices or kills a deal.</p>
<p>If you sell online and ever plan to exit, raise debt, or take on a partner, understanding QoE analysis now is worth real money later. Sellers who show up prepared protect their multiple. Sellers who don't routinely lose 20 to 40% of the outcome, or the deal itself.</p>

<h2>What a quality of earnings report actually contains</h2>
<p>A typical QoE report runs 30 to 80 pages. The core sections:</p>
<ul>
<li><strong>Adjusted EBITDA (or SDE) analysis.</strong> The headline. The analyst starts from your reported profit and adjusts it: removing one-time events, normalizing owner compensation, and testing every addback you claimed. This adjusted figure, not your P&amp;L's bottom line, is what the purchase price gets multiplied against.</li>
<li><strong>Revenue quality.</strong> Concentration by channel, customer and SKU; refund and chargeback rates; whether revenue is recognized correctly (gross vs net, gift cards, marketplace settlement timing). For ecommerce: does gross revenue tie to the 1099-Ks and settlement reports? A gap here is a red flag with a spotlight on it.</li>
<li><strong>Proof of margins.</strong> COGS tested against inventory movement, not purchase invoices. If cost of goods was booked when you paid suppliers, your monthly margins are noise, and the analyst rebuilds them, on the buyer's assumptions, not yours.</li>
<li><strong>Working capital analysis.</strong> What level of inventory, receivables and payables the business needs to operate. The buyer sets a working capital "peg" from this section; inventory-heavy brands routinely overstate working capital by 20 to 40%, and the difference comes out of the purchase price dollar for dollar.</li>
<li><strong>Proof-of-cash.</strong> Bank statements reconciled against reported revenue and expenses, month by month. This is where deposit-based bookkeeping falls apart in front of an audience.</li>
</ul>

<h2>What does a quality of earnings report cost?</h2>
<p>Depends on who orders it and the size of the business:</p>
<table>
<thead><tr><th>Type</th><th>Typical cost</th><th>Ordered by</th></tr></thead>
<tbody>
<tr><td>Buy-side QoE, boutique firm (SMB deals)</td><td>$5,000-$15,000</td><td>Buyer</td></tr>
<tr><td>Buy-side QoE, regional CPA firm</td><td>$25,000-$35,000</td><td>Buyer</td></tr>
<tr><td>Sell-side QoE ("reverse diligence")</td><td>$10,000-$30,000</td><td>Seller, before going to market</td></tr>
<tr><td>QoE-lite / diligence readiness assessment</td><td>$2,500-$7,500</td><td>Seller, 12-36 months before selling</td></tr>
</tbody>
</table>
<p>The buyer usually pays for the buy-side report. What the seller pays for, voluntarily or not, is being unprepared for it. The asymmetry is the whole argument for sell-side preparation: a $2,500 readiness assessment against a documented $50,000-to-$500,000 range of value lost to messy books.</p>

<h2>Quality of earnings vs. an audit</h2>
<p>An audit asks "do these statements follow accounting standards?" A QoE asks "how much recurring, transferable profit does this business really produce?" You can pass an audit and fail a QoE. Audits accept your accounting policies if consistently applied; QoE analysts re-cut the numbers the way a skeptical buyer would. For small-business deals, buyers almost never request audits. They always do QoE work.</p>

<h2>A quality of earnings example: what analysis actually looks like</h2>
<p>A sample from an ecommerce deal, simplified. Seller reports $850,000 EBITDA. The QoE adjustments:</p>
<ul>
<li>+$120,000 owner salary addback (accepted, market rate documented at $60,000, so +$60,000 survives)</li>
<li>-$85,000: COGS understated because Q4 inventory purchases were expensed in January (accrual restatement)</li>
<li>-$40,000: revenue included sales tax collected in three states</li>
<li>-$25,000: "one-time" ad-agency fee claimed as addback, rejected: it recurred in two of three years</li>
<li>-$30,000: unreconciled difference between 1099-K gross and reported revenue, treated conservatively</li>
</ul>
<p>Adjusted EBITDA: $730,000. At a 4x multiple, that seller just lost $480,000 of purchase price, and every adjustment except the salary was a bookkeeping quality problem, not a business problem.</p>

<h2>The 8 things that make ecommerce sellers fail QoE analysis</h2>
<ol>
<li><strong>Cash-basis books.</strong> Brokers won't even list some businesses without accrual conversion. Cash-basis COGS "goes up and down like a seesaw" and depresses your calculated earnings.</li>
<li><strong>Deposits booked as revenue.</strong> Settlement deposits are net of fees and refunds; the analyst rebuilds gross, and every discrepancy reads as a misstatement.</li>
<li><strong>Unprovable addbacks.</strong> If you can't show a receipt and a clean ledger entry, the addback dies, and your multiple applies to the lower number.</li>
<li><strong>Inventory games.</strong> No physical counts, no landed-cost tracking, tariffs expensed instead of capitalized. Inventory is both a margin input and a working-capital input; errors hit twice.</li>
<li><strong>Sales tax in revenue.</strong> Instantly found, instantly adjusted, and it makes every other number suspect.</li>
<li><strong>Commingled personal spending.</strong> Legitimate as addbacks in principle, toxic in volume.</li>
<li><strong>Revenue that doesn't tie to the 1099-K.</strong> The computer-matching problem, in front of a human analyst.</li>
<li><strong>No monthly closes.</strong> If the books were written once a year at tax time, monthly trends, seasonality and working-capital patterns can't be verified, and unverifiable means discounted.</li>
</ol>

<h2>How to prepare: the 12-to-36-month runway</h2>
<p>QoE preparation is mostly just running real accounting, early enough that history exists when you need it. In order: convert to accrual with proper inventory (buyers want 24-36 months of accrual history, so start 3 years before you want to sell); reconcile every channel monthly with settlement-level detail; maintain an addback schedule as things happen rather than reconstructing at deal time; document related-party anything; and get a sell-side readiness review before the buyer's team shows up, because finding your own problems is dramatically cheaper than having them found.</p>
<p>This is exactly what our <a href="/pricing/">Exit-Grade service</a> maintains monthly, and what our <a href="/contact/">$2,500 Exit-Ready Assessment</a> scores in ten business days (credited in full if we end up doing the work). If a sale is even a maybe within three years, the assessment tells you today what a buyer's QoE team would say, while there's still time to fix it.</p>

<h2>Quality of earnings FAQ</h2>
<p><strong>What is a quality of earnings report in one sentence?</strong> An independent analysis of how much recurring, transferable profit a business actually generates, produced during the due diligence phase of a sale or financing.</p>
<p><strong>Who prepares QoE reports?</strong> CPA firms and specialist transaction-advisory boutiques, independent of both parties even when one side pays.</p>
<p><strong>How long does one take?</strong> Three to six weeks for SMB deals, longer if the books need reconstruction, which is the polite way diligence timelines die.</p>
<p><strong>Do I need one to sell a business under $1M?</strong> A formal QoE, often not. QoE-style scrutiny, always: every serious buyer runs the same checks informally, and broker vetting applies the same standards.</p>
`,
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

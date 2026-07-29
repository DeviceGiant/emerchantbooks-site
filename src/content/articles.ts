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
<p><strong>1. Number of sales channels.</strong> Each marketplace or cart adds its own settlement reports, fee structures and reconciliation work. Amazon-only is the cheapest case. Amazon plus Shopify plus eBay plus Walmart roughly doubles the monthly work, not quadruples it, but it's real. Each platform brings its own problem list; our guides to <a href="/bookkeeping-tips/shopify-bookkeeping-problems/">Shopify</a>, <a href="/bookkeeping-tips/ebay-seller-bookkeeping-problems/">eBay</a> and <a href="/bookkeeping-tips/tiktok-shop-seller-bookkeeping/">TikTok Shop</a> bookkeeping show what that work involves.</p>
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
<p>If your return shows revenue that looks like your deposits, the IRS computer sees a mismatch against the 1099-K and mismatches generate notices. The fix is books built from settlement reports, where gross sales tie to the 1099-K and fees are properly deducted as expenses. Same tax owed, no letter. The trap isn't Amazon-specific either: <a href="/bookkeeping-tips/tiktok-shop-seller-bookkeeping/">TikTok Shop sellers</a> and <a href="/bookkeeping-tips/content-creator-bookkeeping/">content creators</a> paid through payment platforms get the same gross-figure 1099-Ks.</p>

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
<p><strong>Multiple marketplaces:</strong> Amazon issues per payment entity; eBay, Walmart, Etsy and PayPal each send their own. Every one needs to tie to your books individually. TikTok Shop's version arrives with creator commissions already netted from payouts (<a href="/bookkeeping-tips/tiktok-shop-seller-bookkeeping/">covered here</a>), and <a href="/bookkeeping-tips/content-creator-bookkeeping/">creators paid through PayPal or Venmo</a> hit the same gross-versus-net wall.</p>
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
<p>In QuickBooks Online Plus, use Classes for channels; in Xero, Tracking Categories. Revenue accounts stay clean, and every expense that's channel-specific gets tagged, giving you a true margin picture per channel. This is the report that tells you Walmart is worth doubling down on, or isn't. If your channels include <a href="/bookkeeping-tips/shopify-bookkeeping-problems/">Shopify's multi-gateway payouts</a> or <a href="/bookkeeping-tips/walmart-seller-bookkeeping-problems/">Walmart's WFS fee taxonomy</a>, those guides cover the extra accounts each one needs.</p>

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
<li><strong>Deposits booked as revenue.</strong> Settlement deposits are net of fees and refunds; the analyst rebuilds gross, and every discrepancy reads as a misstatement. It's <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">the most common Amazon bookkeeping problem</a> for a reason.</li>
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
  {
    slug: "amazon-seller-bookkeeping-problems",
    title: "Amazon Seller Bookkeeping: The 9 Problems That Wreck Sellers' Books",
    metaTitle: "Amazon Seller Bookkeeping: 9 Problems That Wreck Your Books",
    metaDescription:
      "The 9 Amazon bookkeeping problems that ruin sellers' numbers: settlement reports, FBA fees, reserves, reimbursements, 1099-K mismatches and COGS. With fixes.",
    date: "2026-07-29",
    readMinutes: 9,
    excerpt: "Amazon bookkeeping fails in predictable ways: deposits booked as sales, fee blobs, ignored reserves, unclaimed reimbursements. Here are all nine problems and the fix for each.",
    html: `
<p>Amazon seller bookkeeping goes wrong in nine predictable ways. We know because fixing them is most of our onboarding work: nearly every Amazon seller's books arrive with at least three of these problems, and the expensive ones hide until tax season, a loan application, or a buyer's diligence team finds them. Here's the complete list, why each happens, and the fix.</p>

<h2>1. The deposit is booked as revenue</h2>
<p>The classic. Amazon pays every two weeks; the bookkeeper categorizes the deposit as "Amazon sales" and moves on. But a settlement deposit is gross sales minus referral fees, FBA fees, refunds, ad spend and reserve holds. A $50,000 deposit can hide $78,500 of actual sales. Book the net number and your revenue is understated, your fees are invisible, and your 1099-K reconciliation is broken before the year ends.</p>
<p><strong>Fix:</strong> post from settlement reports, not bank deposits, via A2X or Link My Books, so gross sales, each fee type and refunds land in their own accounts and the deposit just clears the balance.</p>

<h2>2. FBA fees treated as one blob</h2>
<p>Referral fees, FBA fulfillment, monthly storage, long-term storage, removal fees, ad spend: each says something different about your business. Lumped into "Amazon fees," they say nothing. Sellers running 15% referral categories with creeping storage costs literally cannot see which products are profitable.</p>
<p><strong>Fix:</strong> a chart of accounts that itemizes fee types. Ten minutes of setup, permanent visibility. Our free <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">ecommerce chart of accounts template</a> includes the full breakdown.</p>

<h2>3. Reserves ignored until cash gets tight</h2>
<p>Amazon's rolling reserve means money you earned isn't money you have. Sellers who don't track unavailable balances think they have more cash than they do, then a reserve increase lands during Q4 inventory buying and the "profitable" business can't pay a supplier.</p>
<p><strong>Fix:</strong> book reserves as a receivable so the balance sheet shows the truth: earned, not yet paid.</p>

<h2>4. Unclaimed FBA reimbursements</h2>
<p>Amazon loses and damages inventory constantly, and reimburses far from automatically. Claims expire, auto-reimbursements come in below your real cost, and refunded orders where the buyer never returned the item quietly become free products. For a seller doing $200K/mo this is commonly thousands per year of unclaimed money.</p>
<p><strong>Fix:</strong> monthly reconciliation of inventory adjustments against reimbursements. It's section one of our <a href="/money-leak-checklist/">27-Point Money Leak Checklist</a> for a reason: it's where sellers find money fastest.</p>

<h2>5. COGS booked on purchase date, not sale date</h2>
<p>Expense a $60,000 inventory order in March and your books show a disastrous March and six artificially great months after it. Lenders discount books like that on sight; buyers reprice deals over it; and your real per-unit margins are unknowable all year.</p>
<p><strong>Fix:</strong> inventory goes to the balance sheet, COGS gets recognized as units sell. This is the accrual-with-inventory discipline that separates books a bank trusts from books it doesn't.</p>

<h2>6. Landed cost that isn't landed</h2>
<p>If COGS is just the supplier invoice, your margins are overstated by freight, duties and, since the 2025-2026 tariff rounds, a lot more than they used to be. Sellers discover their "30% margin" product is a 19% margin product, usually after the reorder.</p>
<p><strong>Fix:</strong> capitalize freight and duties into inventory cost (ASC 330 treatment). Lenders and buyers now specifically ask how tariffs are being accounted for.</p>

<h2>7. Sales tax booked as income</h2>
<p>Marketplace facilitator laws mean Amazon remits most marketplace sales tax, but the tax still flows through settlement data, and sloppy books let it inflate revenue. That means overstated income, overstated tax, and a mess for whoever files your return.</p>
<p><strong>Fix:</strong> collected tax goes to a liability account, always. If your P&L revenue includes sales tax, your books have this problem today.</p>

<h2>8. The 1099-K mismatch</h2>
<p>Amazon reports your gross payment volume to the IRS. If your return shows revenue that looks like deposits, the IRS computer sees the gap and mismatch notices follow. The gap between gross and net is routinely 25 to 35% of sales, so this isn't a rounding issue.</p>
<p><strong>Fix:</strong> books built from settlement reports tie to the 1099-K by construction. Full walkthrough in our <a href="/bookkeeping-tips/amazon-1099-k-explained/">Amazon 1099-K guide</a>.</p>

<h2>9. Multi-marketplace numbers blended into one</h2>
<p>Selling on Amazon US, Canada and Mexico, or Amazon plus Walmart and eBay, with all revenue in one account means you can't see that one channel runs 40% margins while another quietly loses money on every order. The blended average hides both.</p>
<p><strong>Fix:</strong> per-channel P&L via classes or tracking categories, so every marketplace defends its own economics. The other channels' quirks run deep enough that we wrote separate guides: <a href="/bookkeeping-tips/walmart-seller-bookkeeping-problems/">Walmart's settlement cadence and WFS fees</a>, <a href="/bookkeeping-tips/ebay-seller-bookkeeping-problems/">eBay's managed payments netting</a>, and <a href="/bookkeeping-tips/tiktok-shop-seller-bookkeeping/">TikTok Shop's creator commissions</a> each break books in their own way.</p>

<h2>What clean Amazon books look like</h2>
<p>Gross sales that tie to settlement reports and the 1099-K. Fees itemized by type. Reserves visible on the balance sheet. Reimbursements reconciled monthly. COGS on inventory movement with true landed cost. Sales tax in a liability account. Per-channel margins. Closed by the 10th business day, every month.</p>
<p>That's the standard our <a href="/amazon-bookkeeping-services/">Amazon bookkeeping service</a> maintains for $100K+/mo sellers, and the fastest way to see how far your books are from it costs nothing: our free books teardown rebuilds your most recent month properly and sends you a 10-minute video of every problem on this list we found in your file, with dollar figures. <a href="/contact/">Claim it here</a>, no card, keep everything.</p>
`,
  },
  {
    slug: "tiktok-shop-seller-bookkeeping",
    title: "TikTok Shop Bookkeeping: Taxes, Fees and Settlements Explained",
    metaTitle: "TikTok Shop Bookkeeping & Taxes: A Seller's Guide",
    metaDescription:
      "How TikTok Shop settlements, creator commissions, sample fees and the 1099-K actually work in your books, plus fixes for the mistakes most sellers make.",
    date: "2026-07-29",
    readMinutes: 11,
    excerpt: "TikTok Shop pays you weeks after the sale, nets out creator commissions before you see a dime, and changes its fees faster than any platform in ecommerce. Here's how to keep books that survive it.",
    html: `
<p>TikTok Shop bookkeeping breaks the moment you treat your payouts as revenue, because a TikTok Shop payout is what's left after referral fees, creator commissions, refunds and adjustments, and that gap is routinely 25 to 40% of your actual sales. TikTok Shop accounting done right starts from the settlement data, not the bank deposit. Here's how the platform actually moves money, the specific problems it creates in your books, and the fix for each one.</p>

<h2>Problem 1: TikTok pays you long after the sale</h2>
<p>On most marketplaces the delay between sale and payout is annoying. On TikTok Shop it's structural. An order doesn't settle when it's placed. It settles after the item is delivered and the return window closes, which means a sale on March 28 can hit your bank in mid-April. Sellers who book revenue when the cash lands are recording March sales in April, every single month, and their monthly P&amp;L is fiction. Ad spend from a big March push lands in March; the revenue it generated lands in April; the books show a terrible March and a great April, and neither is true.</p>
<p><strong>The fix:</strong> book revenue from TikTok's settlement and order data on the date the sale happened, and carry unsettled orders as a receivable. Your balance sheet then shows the truth: money earned, not yet paid. When the payout arrives, it clears the receivable instead of getting double-counted as new income.</p>

<h2>Problem 2: TikTok seller fees change faster than your books</h2>
<p>TikTok Shop launched in the US with a promotional referral fee of 2% plus $0.30 per order. In April 2024 it jumped to 6%. By July 2024 it was 8%, and category-based schedules followed. No other major platform has moved its take rate that fast. Sellers who priced products against a 2% fee watched six points of margin evaporate in one season, and plenty of them didn't notice for months because their books lumped everything into one "TikTok fees" line, or worse, never showed fees at all because they booked net deposits.</p>
<p>Run the number on a $30 product: at 2% plus $0.30 the fee was $0.90. At 8% plus $0.30 it's $2.70. That's $1.80 a unit, and on 3,000 orders a month it's $5,400 in monthly margin that disappeared without a single line changing on a deposit-based P&amp;L.</p>
<p><strong>The fix:</strong> an itemized fee account for TikTok referral fees, reviewed monthly against your margin targets. When the platform changes its schedule again, and it will, you'll see it in week one instead of quarter three. Fee creep is item one on our free <a href="/money-leak-checklist/">27-Point Money Leak Checklist</a> because it's the leak sellers find fastest.</p>

<h2>Problem 3: Creator commissions eat margins invisibly</h2>
<p>The affiliate program is why TikTok Shop works and why TikTok Shop books get ugly. You set a commission, typically 10 to 20%, that creators earn on sales they drive. TikTok deducts it before paying you, alongside the referral fee. So a $40 sale with an 8% referral fee and a 15% creator commission pays out roughly $30.50 before shipping and refunds. If your unit cost is $14 and fulfillment runs $5, that "40 dollar sale" cleared about $11.50, not $26.</p>
<p>Now the bookkeeping problem: because the commission is netted out before payout, sellers who book deposits never see it. Their books show no affiliate marketing expense at all, on a channel where affiliate commissions are frequently the single largest cost after inventory. You can't evaluate whether 15% commission is buying you profitable growth if the 15% never appears anywhere.</p>
<p><strong>The fix:</strong> creator commissions get their own expense account, posted from settlement data, separate from referral fees and separate from paid ads. Then you can actually answer the question that matters: what's my margin on affiliate-driven orders versus organic ones, and should the commission be 10% instead of 15%? At 3,000 orders a month, five points of commission is real money. On $120,000 of monthly sales it's $6,000. And if you earn these commissions rather than pay them, the tax picture flips entirely; our <a href="/bookkeeping-tips/content-creator-bookkeeping/">content creator bookkeeping guide</a> covers that half, and our <a href="/content-creator-accounting-services/">content creator accounting service</a> handles it monthly.</p>

<h2>Problem 4: Sample fees look like shrinkage</h2>
<p>Getting creators to make content usually means sending free samples. Physically, inventory leaves your warehouse and never comes back. If your books don't handle it deliberately, those units show up as mystery shrinkage, your inventory counts drift, and your COGS gets quietly wrong.</p>
<p>Say you ship 200 samples a month at a $14 unit cost. That's $2,800 of inventory walking out the door. Booked as nothing, it corrupts your inventory balance. Booked as COGS, it drags down your product margins and hides what it really is.</p>
<p><strong>The fix:</strong> samples move out of inventory at cost and into a marketing expense account. Your inventory stays accurate, your product margins stay clean, and your P&amp;L shows what creator seeding actually costs, which lets you judge whether $2,800 a month of samples is generating more than $2,800 of margin. Sometimes it isn't, and you'd want to know.</p>

<h2>Problem 5: Refunds land in a different month than the sale</h2>
<p>TikTok Shop's return policies favor the buyer, and its refund timing sprawls. A December sale can produce a January refund, which TikTok nets out of a January payout that also contains January sales. Deposit-based books smear this into nonsense: December looks better than it was, January looks worse, and your true return rate, one of the best product-quality signals you have, is invisible.</p>
<p><strong>The fix:</strong> refunds post to a contra-revenue account in the period they occur, from settlement data, so gross sales, refunds and net revenue each tell their own story. A return rate that creeps from 3% to 6% is a product or listing problem you want flagged in a monthly close, not discovered in an annual panic.</p>

<h2>Problem 6: The TikTok Shop 1099-K won't match your bank</h2>
<p>Every January, TikTok Shop sellers get a 1099-K reporting gross payment volume to the IRS, and every January some of them panic because the number is far bigger than anything they received. That's how it's supposed to work. The 1099-K is gross; your payouts are net of referral fees, creator commissions, refunds and adjustments. A seller whose 1099-K says $480,000 might have banked $310,000 and both numbers are correct.</p>
<p>The danger is filing a return whose revenue looks like your deposits. The IRS computer matches your return against the 1099-K, sees a six-figure gap, and generates a notice that treats the gap as unreported income. Resolving one costs more in professional fees than a year of bookkeeping.</p>
<p><strong>The fix:</strong> books built from settlements report gross revenue that ties to the 1099-K, with fees, commissions and refunds properly deducted below it. Same profit, same tax, zero mismatch. The mechanics are identical to the Amazon version, which we walk through in our <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-K guide</a>.</p>

<h2>Problem 7: Sales tax passes through your numbers</h2>
<p>TikTok Shop is a marketplace facilitator, so it collects and remits sales tax on your orders in the states that require it. Good news for compliance, quiet trap for bookkeeping: the tax still flows through your settlement data, and sloppy books let it inflate revenue. If your P&amp;L revenue includes sales tax, you're overstating income and potentially paying income tax on money that was never yours.</p>
<p><strong>The fix:</strong> collected tax posts to a liability account, always, and your registration obligations for any direct-channel sales (<a href="/bookkeeping-tips/shopify-bookkeeping-problems/">your Shopify store</a>, for instance) get handled separately. Facilitator laws cover the marketplace, not your whole business.</p>

<h2>Problem 8: Viral spikes wreck your inventory costing</h2>
<p>This one is unique to TikTok. One video hits and you sell 90 days of inventory in a week. Then you're air-freighting a rush reorder at $4.10 a unit landed instead of $0.60 by sea, and selling those units at the same retail price. If your books use one blended "cost" for the SKU, set back when everything came by boat, your margin on the entire viral batch is overstated and you won't know what the spike actually earned you.</p>
<p>Sellers make real decisions off that bad number: they raise ad spend on a product that's suddenly making $3.50 less per unit, or they green-light another air-freight reorder that loses money.</p>
<p><strong>The fix:</strong> landed cost tracked per purchase batch, freight and duties capitalized into inventory, and COGS recognized at the actual cost of the units sold. It's more work than one static cost field. It's also the only way to know whether going viral made you money or just made you busy.</p>

<h2>TikTok Shop taxes beyond the 1099-K</h2>
<p>Profit from TikTok Shop is ordinary business income. Sole proprietors and single-member LLCs report it on Schedule C, where it also picks up 15.3% self-employment tax, and a profitable seller generally owes quarterly estimated payments in April, June, September and January. The safe-harbor rule, paying 100% of last year's tax (110% at higher incomes), avoids penalties even if you're growing fast, which on this platform you might be. If TikTok is one of several channels, remember each platform sends its own 1099-K, and each needs to tie to your books individually. The rest of the marketplace income-tax picture, deductions included, is in our <a href="/bookkeeping-tips/amazon-seller-taxes-guide/">seller taxes guide</a>.</p>

<h2>TikTok Shop plus everything else: the multi-channel blend</h2>
<p>Few sellers run TikTok Shop alone. It's usually the third or fourth channel, layered on top of Amazon, a Shopify store, maybe Walmart, and each platform settles differently, reports differently and sends its own 1099-K. Blend them into one revenue account and you lose the question that matters most at the portfolio level: which channel earns the best margin on the next unit of inventory? TikTok's fee stack, referral plus creator commission, can take 23% of a sale where Amazon would take 15% and your own site would take 3%, yet TikTok might still win on volume and customer-acquisition cost. Without per-channel books that's a debate. With them it's a report.</p>
<p><strong>The fix:</strong> per-channel P&amp;L via classes in QuickBooks Online or tracking categories in Xero, the same structure multi-marketplace Amazon sellers need, and their <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">nine bookkeeping problems</a> have a guide of their own worth reading before you copy any of their setup.</p>

<h2>Getting TikTok Shop into QuickBooks properly</h2>
<p>There's no official TikTok Shop QuickBooks integration, and the third-party apps that sync every order individually will flood your file with thousands of tiny transactions that never match your payouts. The setup that works is settlement-summary posting: A2X added TikTok Shop support, Link My Books handles it too, and either one posts each settlement as a single summarized entry, gross sales, refunds, referral fees, creator commissions, sales tax to its liability account, with the payout clearing against a receivable.</p>
<p>If you're wondering how to record TikTok Shop sales in QuickBooks manually, it's the same shape as a journal entry: debit the bank for the payout, debit fee and commission expense accounts, debit refunds, credit gross sales, credit the sales tax liability. Doable by hand at low volume. Past a few hundred orders a month, use A2X for TikTok Shop or Link My Books and spend the hours somewhere that earns money. The tool only helps if the account mapping underneath is right, though. A perfectly synced settlement posted into a chart of accounts with one "TikTok" line still tells you nothing.</p>

<h2>What clean TikTok Shop books look like</h2>
<p>Gross sales booked on order dates that tie to settlement data and the 1099-K. Referral fees, creator commissions, sample costs and refunds each in their own account (the structure is in our free <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">ecommerce chart of accounts template</a>). Unsettled orders on the balance sheet as a receivable. Sales tax in a liability account. Landed cost by batch, so viral-spike margins are real. Closed by the 10th business day each month, because on a platform that changes its fees this fast, quarterly hindsight is expensive.</p>

<h2>When to hire an accountant for TikTok Shop sellers</h2>
<p>The honest threshold: once you're past roughly $15,000 a month in sales, running creator affiliates, or selling on more than one channel, DIY books start costing more in errors than a bookkeeper for TikTok Shop costs in fees. The settlement lag, the commission netting and the fee changes are exactly the kind of detail that's cheap to handle monthly and expensive to reconstruct at tax time.</p>
<p>Our <a href="/monthly-ecommerce-bookkeeping/">TikTok Shop bookkeeping services</a> handle settlement-level reconciliation, creator commission tracking and the 1099-K tie-out as part of every plan, with <a href="/pricing/">published pricing</a> from $149/mo. Not sure your books have these problems? Our free teardown answers that: we rebuild your most recent month properly and send you a 10-minute video of what we found, with dollar figures attached. <a href="/contact/">Claim it here</a>. No card, and you keep everything either way.</p>
`,
  },
  {
    slug: "content-creator-bookkeeping",
    title: "Content Creator Bookkeeping: Taxes, Deductions and Every Income Stream",
    metaTitle: "Content Creator Bookkeeping & Taxes (2026 Guide)",
    metaDescription:
      "Brand deals, AdSense, affiliate, UGC and gifted products: how creator income actually gets taxed, which deductions hold up, and when to hire an accountant.",
    date: "2026-07-29",
    readMinutes: 12,
    excerpt: "Creator income arrives from six directions with three different tax forms and sometimes none at all. Here's the bookkeeping that keeps influencers out of trouble and the deductions that actually survive.",
    html: `
<p>Content creator bookkeeping has one core problem: your income arrives from six directions, on different schedules, under different tax forms, and sometimes with no form at all, while the IRS treats every dollar of it as self-employment income the moment it's earned. Creators don't get in trouble for making money. They get in trouble for not tracking it. Here's how influencer taxes actually work, stream by stream, and the bookkeeping that keeps the whole thing boring in the best way.</p>

<h2>Problem 1: Six income streams, none of them labeled</h2>
<p>A working creator's monthly income might look like this: a $4,500 brand deal paid by wire, $1,200 of YouTube AdSense, $800 in TikTok Creator Rewards, $650 of Amazon affiliate commissions, $1,500 in UGC fees from a brand that never posts your face, $300 in tips and channel memberships, and $250 of merch profit. Seven streams, seven payment processors, seven deposit patterns. Dumped into one "income" row, that's $9,200 you can't analyze. Which stream grew? Which one pays best per hour of work? Is UGC quietly becoming half your business? No idea.</p>
<p><strong>The fix:</strong> track each stream in its own income account. This takes minutes to set up and changes how you run the business, because creators price better when they can see that brand deals pay $450 an hour and merch pays $19. It also makes January painless, since each stream's 1099 can be checked against its own number. And if one of your streams is selling products through TikTok Shop, that's a seller-side bookkeeping world of its own; our <a href="/bookkeeping-tips/tiktok-shop-seller-bookkeeping/">TikTok Shop bookkeeping guide</a> covers it.</p>

<h2>Problem 2: 1099-NEC, 1099-K, or no form at all</h2>
<p>Creator income shows up on different paperwork depending on who pays and how:</p>
<ul>
<li><strong>1099-NEC:</strong> what a brand or agency sends when they paid you $600 or more directly for services. Brand deals and UGC fees usually land here.</li>
<li><strong>1099-K:</strong> what payment platforms send for payments processed through them. PayPal, Venmo business, and merch platforms report gross volume, before their fees.</li>
<li><strong>1099-MISC:</strong> some platform royalty and bonus programs.</li>
<li><strong>Nothing:</strong> a $500 brand deal under the threshold, a foreign brand that doesn't file US forms, tips on some platforms. Still taxable. All of it.</li>
</ul>
<p>Two traps live here. First, the same dollars can feel double-reported: a brand pays you through PayPal, the brand sends a 1099-NEC and PayPal's gross flows into a 1099-K, and if your books can't show which is which, you may pay tax twice on the same money or get flagged for reporting less than the forms suggest. Second, creators assume no form means no tax. The IRS doesn't. Your books are the record of what you actually earned; the 1099s are just cross-checks.</p>
<p><strong>The fix:</strong> books that record income when it's earned, by stream and by payer, so every form that arrives in January ties to something and every dollar without a form is already counted. The gross-versus-net mechanics of the 1099-K trip up creators the same way they trip up sellers; our <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-K guide</a> walks the reconciliation.</p>

<h2>Problem 3: Gifted products are income</h2>
<p>The PR box is not free. When a brand sends you a $1,300 laptop in exchange for coverage, that's barter: you earned $1,300 of taxable income at fair market value, same as if they'd paid cash and you'd bought the laptop. Same logic for gifted trips with deliverables attached. A $3,500 press trip with two required posts is $3,500 of income, and the brand may well 1099 you for it whether or not you realized it counted.</p>
<p>Unsolicited freebies with no strings sit in grayer territory, but the moment there's an agreed deliverable, it's compensation.</p>
<p><strong>The fix:</strong> log gifted products and trips with their fair market value when they arrive, in their own income account. If the item is genuinely a business tool, a camera you'll shoot on for years, you may also get a deduction that offsets some of it. Tracked, this is manageable. Untracked, it's the audit finding that reprices your whole return.</p>

<h2>Problem 4: Nobody withheld anything</h2>
<p>Every dollar above arrives with zero tax withheld, and self-employment tax adds 15.3% on top of income tax. A creator netting $100,000 of profit can owe $30,000 to $37,000 between the two, and the IRS wants it quarterly: April, June, September and January. Miss the estimates and penalties accrue even if you pay in full at filing.</p>
<p><strong>The fix:</strong> the safe harbor. Pay 100% of last year's total tax through estimates (110% if your prior-year AGI topped $150,000) and you're penalty-proof even in a blow-up year. Mechanically: move 25 to 30% of every payout into a separate tax savings account the day it lands, then quarterly payments stop being emergencies. This is the single most common problem we fix for creators, and the easiest.</p>

<h2>Problem 5: Deductions, the real list</h2>
<p>Creators overpay taxes by missing legitimate deductions and then, occasionally, torch their credibility by claiming absurd ones. The ones that hold up:</p>
<ul>
<li><strong>Equipment:</strong> cameras, lenses, lighting, microphones, computers. A $2,800 camera body is deductible, often in full the year you buy it under Section 179 or bonus depreciation.</li>
<li><strong>Home studio:</strong> a room or defined space used regularly and exclusively for content qualifies for the home office deduction, either the simplified rate or the actual-expense percentage of rent, utilities and internet.</li>
<li><strong>Software and subscriptions:</strong> editing suites, scheduling tools, stock music, cloud storage.</li>
<li><strong>Contractors:</strong> your editor, thumbnail designer, VA. If you paid any of them $600 or more, you owe them a 1099-NEC, which surprises creators who've only ever received the form.</li>
<li><strong>Phone and internet:</strong> the business-use percentage, documented, not 100% unless it truly is.</li>
<li><strong>Travel:</strong> when the primary purpose is business, a shoot, a conference, a brand activation. Flights, lodging and 50% of meals.</li>
<li><strong>Props and set materials, education, agency and management commissions.</strong> That 20% your agency takes off a $10,000 deal is a $2,000 deduction. Book the gross deal and the commission separately or your books understate both.</li>
</ul>
<p>The ones that don't hold up: everyday clothing (even worn on camera), haircuts and general grooming, the family vacation with one vlog attached, and meals with friends recast as collabs. The IRS has seen every version. The test is ordinary and necessary for the business, and the paper trail is what wins or loses it. Our free <a href="/money-leak-checklist/">money leak checklist</a> covers the documentation habit that makes deductions stick.</p>

<h2>Problem 6: Sole prop, LLC, or S-corp?</h2>
<p>Default answer: you're a sole proprietor the day you earn creator income, and for many creators that's fine. An LLC adds liability protection and cleaner separation but changes nothing about your taxes by itself, a single-member LLC still files Schedule C and still pays self-employment tax on all profit.</p>
<p>The S-corp election is where real tax money appears, at the right size. Elect S-corp status, pay yourself a reasonable salary, and the remaining profit distributes without self-employment tax. A creator with $140,000 of profit paying themselves a defensible $70,000 salary saves roughly $9,000 a year in payroll taxes, net of the extra costs. Below about $60,000 to $80,000 of steady profit, those extra costs, payroll runs, a separate tax return, state fees, usually eat the savings. This is a math decision, not a vibe decision, and it's one an accountant for content creators should run with your actual numbers before you file anything. Subscription-platform creators have an extra layer here (the 20% platform cut, chargebacks, the Fenix 1099-NEC), which our <a href="/bookkeeping-tips/onlyfans-taxes-bookkeeping-guide/">OnlyFans taxes and bookkeeping guide</a> covers in full.</p>

<h2>Problem 7: Gross deals, net deposits</h2>
<p>Creator payments arrive net of somebody's cut more often than not. Affiliate networks pay after holding periods and reversals for returned orders. Brand-deal marketplaces and agencies deduct their percentage before the wire goes out. If your books record what hit the bank, you're understating income and losing the deduction for the cut at the same time, which is the exact mistake ecommerce sellers make with marketplace deposits, wearing different clothes.</p>
<p>Run the numbers: a $10,000 brand deal through an agency at 20% lands as $8,000. Book $8,000 of income and you've understated revenue by $2,000 and skipped a $2,000 commission deduction. The tax result nets out the same, but your books no longer match the 1099-NEC the brand files for $10,000, and now the IRS matching computer has an opinion about you.</p>
<p><strong>The fix:</strong> record deals at gross with commissions and platform fees as expenses, and reconcile affiliate dashboards against actual payouts quarterly, because reversals are income you booked that never arrived.</p>

<h2>Problem 8: No invoices, no paper trail, no proof</h2>
<p>Brand deals negotiated in DMs, deliverables agreed by voice note, payment by Zelle. It works until it doesn't: a brand disputes what was owed, a 1099-NEC arrives with a number you can't verify, or an audit asks you to substantiate income from a chat thread that scrolled away two phones ago.</p>
<p><strong>The fix:</strong> invoice every deal, even the $300 ones, and keep a one-tab deal tracker: brand, deliverables, gross fee, agency cut, invoice date, paid date. Thirty seconds per deal. When a 1099 comes in wrong, and they do come in wrong, the tracker is how you get it corrected instead of paying tax on someone else's typo.</p>

<h2>Problem 9: State taxes follow you around</h2>
<p>Creator income is generally taxed by the state where you live and work, not where the platform sits, and that gets interesting the year you move mid-contract, split the year between two states, or spend three months filming from a friend's place across the country. Nothing withholds state tax for you, so the quarterly-estimate math has a state layer in most states, and a mid-year move can mean two states each expecting a piece of the same year.</p>
<p><strong>The fix:</strong> note where you were when income was earned in the deal tracker during any year you relocate, and split the estimates before the move rather than at filing. Planned, it's a ten-minute conversation with an accountant for influencers. Unplanned, it's an amended-return project.</p>

<h2>QuickBooks for content creators: what works and what you'll outgrow</h2>
<p>QuickBooks Self-Employed for influencers is a common starting point, and it's fine at the start: it separates business from personal, tracks mileage, estimates quarterly taxes. But it has no balance sheet, limited income categorization, and no way to model an S-corp payroll, so creators outgrow it faster than they expect, usually around the time brand deals get serious or the S-corp conversation starts. It also can't produce the per-stream P&amp;L that makes creator books useful.</p>
<p>The upgrade path is QuickBooks Online with a chart of accounts built for creator income: one income account per stream, agency commissions and platform fees broken out, a gifted-income account, and classes if you run multiple channels or a podcast alongside. Set up once, it answers the questions that matter: which stream is growing, what your real hourly rate is per stream, and what number the quarterly estimate should be based on. We set this up as part of onboarding, the same way we do for <a href="/quickbooks-for-ecommerce/">ecommerce QuickBooks files</a>.</p>

<h2>The mixed-account mess</h2>
<p>The most common state of creator books we see: one personal checking account containing DoorDash dinners, rent, a wire from a brand, AdSense, and a camera purchase, with tax season handled by scrolling and vibes. Every problem above gets harder inside that account, and if the IRS ever looks, commingling weakens the business character of everything in it.</p>
<p><strong>The fix:</strong> a dedicated business checking account and card, today, even as a sole prop. All income lands there; all business spending leaves from there; you pay yourself by transfer. This one habit does more for creator bookkeeping than any app.</p>

<h2>When to hire an accountant for content creators</h2>
<p>Rules of thumb that hold up: hire help when creator income passes roughly $5,000 a month, when a quarterly estimate surprises you, when the S-corp math might apply, or when gifted income and multi-platform 1099s make January feel dangerous. Below that, a clean separate account and disciplined tracking may be enough. Past it, professional bookkeeping services for content creators cost less than the missed deductions and penalty interest they prevent, usually by a wide margin. What that help costs across the market, with real published numbers, is in our <a href="/bookkeeping-tips/how-much-does-ecommerce-bookkeeping-cost/">bookkeeping cost guide</a>.</p>
<p>Our <a href="/content-creator-accounting-services/">accounting service for content creators</a> handles per-stream income tracking, quarterly estimate math and year-end 1099 tie-out, with <a href="/pricing/">published pricing</a> from $149/mo and no annual contract. Want proof before commitment? We'll rebuild your most recent month free and send a 10-minute video of what we found, missed deductions included. <a href="/contact/">Grab the free teardown here</a>.</p>
`,
  },
  {
    slug: "ebay-seller-bookkeeping-problems",
    title: "eBay Seller Bookkeeping: 11 Problems Managed Payments Creates",
    metaTitle: "eBay Seller Bookkeeping: 11 Managed Payments Problems",
    metaDescription:
      "Net payouts vs gross sales, labels bought inside eBay, promoted listings, dispute timing and thrift-sourced COGS: the eBay bookkeeping problems, with fixes.",
    date: "2026-07-29",
    readMinutes: 11,
    excerpt: "eBay's managed payments buried your fees, your shipping labels and your ad spend inside the payout. Here are the eleven bookkeeping problems that creates and how resellers fix each one.",
    html: `
<p>eBay bookkeeping went wrong for most sellers the day managed payments arrived, because eBay now deducts final value fees, shipping labels, promoted listings charges, refunds and disputes before the payout ever reaches your bank, and a bank feed shows you none of it. Book the deposits as sales and your revenue is understated by 15 to 25%, your costs are invisible, and your 1099-K won't match your return. Here are the eleven problems, in the order they usually bite, and the fix for each.</p>

<h2>1. The payout is not your sales number</h2>
<p>Under managed payments, a $1,000 week of gross sales might pay out $780 after final value fees around 13%, a couple of shipping labels, an ad fee and one refund. Sellers who record the $780 as revenue understate sales by $220 and record zero expenses. Multiply by 52 weeks and a $52,000 gross year books as $40,560 with no visible costs. Every downstream number, margins, tax return, loan application, inherits the error.</p>
<p><strong>The fix:</strong> post from eBay's financial statements and transaction reports, not the bank feed. Gross sales, each fee type, labels, refunds and holds each go to their own account, and the payout just clears the receivable. This is the foundation everything else in this article sits on.</p>

<h2>2. Shipping labels bought inside eBay disappear</h2>
<p>Buying labels through eBay is cheaper and convenient, and it makes your postage invisible to deposit-based books, because label costs are netted out of payouts rather than charged to your card. A reseller shipping 400 packages a month at an average $6.80 label is spending $2,720 a month on postage that never appears as an expense line anywhere. Their books overstate profit by exactly that amount until tax time surprises them, or worse, understate it if they guessed postage from memory.</p>
<p><strong>The fix:</strong> a dedicated shipping expense account fed from eBay's transaction detail, so postage shows up as the real cost it is. Postage is many resellers' third-largest cost after inventory and fees. It deserves a line, and watching it monthly is how you catch the slow drift from $6.80 to $7.60 an average label that eats 2% of margin without a decision ever being made.</p>

<h2>3. Promoted listings quietly become your biggest ad budget</h2>
<p>Promoted listings charges are deducted from payouts too, and because sellers set the ad rate once and forget it, the spend grows with sales while remaining invisible. We see eBay sellers spending 5 to 12% of gross on promoted listings who, when asked their monthly ad budget, answer "we don't really advertise." On $30,000 a month of sales, an 8% average ad rate is $2,400 a month, $28,800 a year, unexamined.</p>
<p><strong>The fix:</strong> promoted listings get their own expense account, separate from final value fees, and a monthly look: which listings carry rates you set during a slow week a year ago? Ad spend you can see is a strategy. Ad spend you can't is a leak, and it's one of the first checks in our <a href="/money-leak-checklist/">27-Point Money Leak Checklist</a>.</p>

<h2>4. Refunds and disputes land months after the sale</h2>
<p>A November sale, a December return request, a January dispute resolution: eBay claws the money back whenever the case closes, netted against whatever payout happens to be passing by. Deposit-based books smear the clawback into the wrong month and bury it inside a smaller-looking deposit. Sellers lose track of their true return rate, and month-over-month numbers stop meaning anything. Payment disputes are worse: the money exits when the dispute opens, may return if you win, and a $20 dispute fee appears if you lose.</p>
<p><strong>The fix:</strong> refunds post to a contra-revenue account dated when they occur, disputes get tracked as receivables while pending, and your return rate becomes a number you actually watch. A creeping return rate is a listing-accuracy problem announcing itself early. Books that surface it are cheaper than the feedback score damage that announces it late. For scale: a store doing $25,000 a month typically carries $700 to $1,200 of monthly refund and dispute activity, and the useful number is the rate and its direction, not the dollar figure in any single month.</p>

<h2>5. The 1099-K reports gross, and your books say net</h2>
<p>eBay sends the IRS a 1099-K reporting your gross payment volume: sales before fees, labels, ads and refunds. If your filed return shows revenue resembling your deposits, the IRS computer sees a gap, and a $52,000-gross seller reporting $40,560 looks like someone hiding $11,440 of income. The mismatch notices that follow cost more to resolve than a year of bookkeeping.</p>
<p><strong>The fix:</strong> gross revenue that ties to the 1099-K, with fees, labels, ads and refunds deducted as the expenses they are. Same profit, same tax owed, no letter. Full mechanics in our <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-K guide</a>, and yes, the logic is identical across marketplaces.</p>

<h2>6. Mixed personal and business selling history</h2>
<p>Most eBay businesses started as a person clearing out a closet, and the account history shows it: your old golf clubs sold next to inventory you bought to flip. Tax treatment differs completely. Personal items sold at a loss aren't deductible losses and aren't taxable income, but they still appear in your 1099-K gross, while inventory flips are ordinary business income. Blend them and you either pay tax on your own garage sale or claim business deductions against personal stuff, both wrong.</p>
<p><strong>The fix:</strong> separate the streams in your books, personal-item sales tagged and documented (what it was, roughly what you paid, what it sold for), business inventory tracked properly. Cleaner still: a dedicated business account going forward, personal selling kept out of it entirely.</p>

<h2>7. Reseller COGS: what did that thrift-store item actually cost?</h2>
<p>This is the problem unique to resellers. You bought a $400 bin lot that yielded 60 sellable items, spent $85 at a thrift store on nine pieces, and paid $250 for a liquidation pallet where a third of the units were junk. What's the cost of the vintage jacket that just sold for $75? Sellers who can't answer default to guessing, or to expensing purchases when they happen, which makes every month's profit a function of how much sourcing you did rather than how much you sold.</p>
<p><strong>The fix:</strong> per-item or per-lot cost allocation at intake. For lots, divide the lot cost across sellable items, by count when items are similar, by expected resale value when they're not, and write off the junk portion immediately. The $250 pallet with 40 sellable units carries $6.25 of cost per unit. Now the $75 jacket shows its real margin, dead inventory shows its real loss, and your books can finally answer whether bin lots or thrift racks earn more per sourcing hour. That answer is worth actual money every weekend you go sourcing. And resellers who feed phones and electronics into refurbished marketplaces face a deeper version of the same problem, per-grade unit costing, which we cover in our <a href="/bookkeeping-tips/back-market-reebelo-seller-bookkeeping/">Back Market and Reebelo accounting guide</a>. Selling the same inventory across Poshmark, Mercari or Whatnot too? Our <a href="/reseller-bookkeeping-services/">reseller bookkeeping service</a> runs this allocation across every platform at once, and our <a href="/bookkeeping-tips/reseller-taxes-bookkeeping-guide/">reseller taxes guide</a> covers the 1099-K and hobby-versus-business rules that come with it.</p>

<h2>8. Store fees, international fees and the small-print stack</h2>
<p>Store subscriptions ($27.95 to $2,999 a month depending on tier), international transaction fees, regulatory operating fees, below-standard-performance surcharges, promoted listings advanced: eBay's fee taxonomy keeps growing, and each line has its own logic. Lumped into one "eBay fees" account, they can't be evaluated. Is the Anchor store tier still worth it at your current listing count? Is the international fee telling you to price differently overseas? One blob can't say.</p>
<p><strong>The fix:</strong> itemized fee accounts, reviewed monthly. Ten minutes of chart-of-accounts setup buys permanent visibility, and our free <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">ecommerce chart of accounts template</a> includes the full eBay breakdown.</p>

<h2>9. Sales tax riding through your payouts</h2>
<p>eBay is a marketplace facilitator, so it collects and remits sales tax on nearly all US orders. Handled, but not invisible: the collected tax rides through your transaction reports and, depending on setup, into your gross figures. Books that don't strip it into a liability account overstate revenue by every collected dollar, and your 1099-K reconciliation gains one more moving part, since collected tax can appear in reported gross depending on the year and configuration.</p>
<p><strong>The fix:</strong> facilitator-collected tax to a pass-through liability account at posting time, with a note in the year-end reconciliation documenting the treatment. Sell anywhere off-eBay and your own nexus obligations are separate, and still yours.</p>

<h2>10. Death piles and dead stock nobody counted</h2>
<p>Every reseller knows the death pile: sourced inventory that hasn't been listed, sometimes for a year. On the books it's still inventory, your money sitting in totes, and if it was expensed at purchase it has distorted every month since. The flip side is dead stock: listed items that will never sell at the booked value. A $6.25-per-unit pallet allocation is honest at intake and a fiction two years later when the last 15 units are unsellable.</p>
<p><strong>The fix:</strong> a periodic count, even a rough one, quarterly, plus a write-down policy for aged inventory. It changes sourcing behavior too: when the books show $9,000 of eighteen-month-old inventory earning nothing, the next bin-lot decision gets sharper. Your inventory number is also the first thing a lender checks, and "we've never counted" is not an answer that gets funded.</p>

<h2>11. International sales and the currency wrinkle</h2>
<p>Sell internationally through eBay's shipping programs and the buyer-side complexity mostly disappears, but the accounting wrinkles stay: international transaction fees stacked on final value fees, currency conversion at eBay's rate before payout, and cross-border refunds that take the scenic route through your reports. None of it is hard. All of it is invisible in a bank feed.</p>
<p><strong>The fix:</strong> international fees on their own line, settlement reports carrying the currency math, and a quarterly look at the fee line once international passes about 10% of sales. It's a pricing input, not a shrug.</p>

<h2>The 20-minute monthly close for eBay sellers</h2>
<p>Once the structure above exists, maintenance is short: post the settlement summaries, confirm the clearing account zeroed out, review fee and ad lines against last month, check the return rate, log inventory write-downs, file the month's reports. Twenty minutes, maybe thirty in December. Sellers who do this every month never meet the year-end reconstruction project. Sellers who don't, fund ours.</p>

<h2>Getting eBay into QuickBooks properly</h2>
<p>The eBay QuickBooks integration question has a short answer: don't sync orders one by one. Per-order sync apps create a transaction for every sale that never matches the netted payouts, and the file becomes an unreconcilable mess within months. The setup that works is settlement-summary posting. Link My Books' eBay connection is built for exactly this, and A2X supports eBay as well: each payout posts as one summarized entry with gross sales, final value fees, label costs, ad fees, refunds and tax in their own accounts, and the bank deposit reconciles to the penny.</p>
<p>If you'd rather know how to record eBay sales in QuickBooks manually, the journal shape is: debit bank for the payout, debit fee, shipping and ad expense accounts, debit refunds, credit gross sales, credit the sales tax liability for facilitator-collected tax. Fine at 50 orders a month. At 500, automate it, and make sure the account mapping underneath is the itemized structure above, because a connector posting into a two-line chart of accounts automates nothing useful.</p>

<h2>When to hire a bookkeeper for eBay sellers</h2>
<p>If eBay is a side hustle under about $2,000 a month, a spreadsheet and discipline can work. Past roughly $10,000 a month, or the moment reseller COGS, disputes and a 1099-K enter the picture, an eBay seller accountant stops being a luxury: the problems above compound monthly, and reconstructing a year of netted payouts costs multiples of what maintaining them would have. Sellers running eBay alongside Amazon inherit both platforms' problems at once; the Amazon side has <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">nine of its own</a>.</p>
<p>Our <a href="/ebay-bookkeeping-services/">eBay bookkeeping services</a> handle managed-payments reconciliation, label and ad-fee breakouts, lot-cost COGS and the 1099-K tie-out, with <a href="/pricing/">published pricing</a> and no annual contract. The fastest way to see what your current books are missing costs nothing: we rebuild your most recent month free and send you a 10-minute video of every problem we found, dollar figures included. <a href="/contact/">Claim the free teardown</a>.</p>
`,
  },
  {
    slug: "walmart-seller-bookkeeping-problems",
    title: "Walmart Marketplace Bookkeeping: The Problems Amazon Habits Cause",
    metaTitle: "Walmart Marketplace Bookkeeping Problems (+ Fixes)",
    metaDescription:
      "Walmart's settlement cadence, WFS fees and reports work differently than Amazon's. The bookkeeping problems that causes for sellers, and how to fix each one.",
    date: "2026-07-29",
    readMinutes: 10,
    excerpt: "Most Walmart sellers came from Amazon and brought their bookkeeping with them. That's the mistake. Walmart's settlements, fees and reports all work differently, and books built on Amazon assumptions get quietly wrong.",
    html: `
<p>Walmart Marketplace bookkeeping fails for one main reason: almost every Walmart seller came from Amazon and assumed the accounting would transfer. It doesn't. Walmart settles on a different cadence, names and structures its fees differently, reports refunds differently, and runs WFS on a fee taxonomy that only half-resembles FBA. Books built on Amazon assumptions get quietly wrong in Walmart-specific ways, and "quietly" is the expensive part. Here are the problems, and the fix for each.</p>

<h2>Problem 1: Walmart's settlement cadence isn't Amazon's</h2>
<p>Amazon pays roughly every 14 days on a rolling settlement. Walmart runs its own cycle: settlements close on Walmart's schedule, new sellers sit through longer payment holds, and the deposit that lands is net of referral fees, WFS charges, refunds, ad spend and adjustments. Sellers who learned to live with Amazon's rhythm assume the Walmart deposit maps to sales the same way, book it as revenue, and inherit every problem that comes with net-deposit accounting: understated sales, invisible fees, and a month boundary that never lines up with reality.</p>
<p>The holds deserve their own mention. New Walmart sellers can wait a couple of weeks past the normal cycle for early payouts to release, and sellers planning inventory buys against "Walmart money" that hasn't released yet discover the difference between earned and available at the worst possible moment, usually mid-purchase-order. Cash planning needs the receivable on the books, not a guess.</p>
<p>The cross-month cut is nastier than it sounds. A settlement spanning January 28 to February 10 lands in one February deposit. Book it all as February and January is understated, February overstated, and your month-over-month trend is noise. For a seller doing $60,000 a month, a mistimed settlement can move $25,000 of revenue into the wrong month. Try explaining a swing that size to a lender reading your trailing twelve months, or to yourself when deciding whether last month's price change worked.</p>
<p><strong>The fix:</strong> post from Walmart's settlement reports with revenue recognized in the period it was earned, unsettled amounts carried as a receivable, and the deposit clearing against it. Reconstructing this at year-end from deposits alone is miserable. Doing it monthly is routine.</p>

<h2>Problem 2: WFS fees are not FBA fees with a different logo</h2>
<p>Walmart Fulfillment Services looks like FBA from a distance: they store, pick, pack, ship. Up close the fee taxonomy differs in ways that break copied-over books. WFS charges a fulfillment fee based on shipping weight and dimensions with its own tier boundaries and its own peak-season surcharges, monthly storage per cubic foot with a different rate calendar than Amazon's, and its own oversize and apparel adjustments. There's no one-to-one mapping to FBA's fee names, and a chart of accounts with "FBA fees" as the only fulfillment line has nowhere honest to put any of it.</p>
<p>Why it matters in dollars: a product that ships profitably through FBA can lose money in WFS at the same retail price, because it crosses a WFS weight tier it didn't cross at Amazon or eats a storage rate difference across Q4. Sellers who blend both programs into one "fulfillment fees" account cannot see which network is cheaper for which SKU. On a 5,000-order month, a $0.40 average per-unit difference is $2,000 a month riding on a question your books can't answer.</p>
<p><strong>The fix:</strong> WFS fees get their own accounts, fulfillment, storage, and surcharges, parallel to but separate from your Amazon set. Then per-SKU fulfillment cost by network becomes a report instead of a guess.</p>

<h2>Problem 3: The copy-your-Amazon-chart-of-accounts trap</h2>
<p>The most common setup mistake in Walmart seller accounting: duplicating the Amazon chart of accounts and pointing Walmart's numbers into it. Referral fees land in accounts named for Amazon's rate table even though Walmart's category percentages differ (most categories 8 to 15%, with different boundaries than Amazon's). Walmart Connect ad spend gets dumped into "Amazon PPC." Walmart's refund handling, which flows through settlements on its own logic, gets forced into accounts shaped for Amazon's. The books still balance. They just stop meaning anything, because every line mixes two platforms with different economics.</p>
<p>The killer question a blended file can't answer: is Walmart actually profitable for you? Walmart's referral fee on your category might be lower than Amazon's, while your ad cost per order runs higher because Walmart Connect auctions behave differently. Net-net, which channel deserves next quarter's inventory bet? Sellers with blended books answer with a feeling. Feelings about margins are how channels lose money for years.</p>
<p><strong>The fix:</strong> per-channel accounts and a per-channel P&amp;L, via classes in QuickBooks Online or tracking categories in Xero. Same account structure shape, separate lines per platform, so Walmart defends its own economics every month. Our free <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">ecommerce chart of accounts template</a> shows the full structure. And if the Amazon side of your books carries problems of its own, fix those in the same pass; <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">the nine most common are here</a>.</p>

<h2>Problem 4: Refunds and adjustments on Walmart's rules</h2>
<p>Walmart's customer-friendly return policies mean refunds flow back through settlements weeks after the sale, sometimes with the referral fee credited back, sometimes with adjustments that arrive in a later cycle. Keep-it refunds, where the customer is refunded without returning the item, hit both revenue and inventory. Books that only see deposits net all of this into oblivion: your true return rate is invisible, refunded referral fees never get matched to the fees they reverse, and inventory counts drift from keep-it refunds nobody recorded.</p>
<p><strong>The fix:</strong> refunds to a contra-revenue account in the period they happen, fee reversals matched against fee expense, and keep-it refunds triggering an inventory write-off. Your return rate by channel is a product-quality dashboard. On Walmart, where listing content standards differ from Amazon's, a return-rate gap between the two channels is usually a listing problem you can fix in an afternoon, once you can see it.</p>

<h2>Problem 5: The 1099-K and sales tax, Walmart edition</h2>
<p>Walmart reports your gross payment volume to the IRS on its own 1099-K, before fees, refunds and everything netted from settlements. If your books were built from deposits, your filed revenue won't tie to it, and the gap reads as unreported income to the IRS matching computer. Meanwhile Walmart, as a marketplace facilitator, collects and remits sales tax on your marketplace orders, and that tax still passes through settlement data where sloppy books let it inflate revenue.</p>
<p><strong>The fix:</strong> the same discipline as every marketplace, applied per-platform: gross revenue that ties to each 1099-K individually, sales tax in a liability account, and a reconciliation you can hand a CPA. One marketplace's mismatch can flag the whole return. The mechanics are in our <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-K guide</a>.</p>

<h2>Problem 6: Walmart Connect spend hiding in settlements</h2>
<p>Walmart Connect advertising can be deducted from your settlement payouts, which means deposit-based books show no Walmart ad spend at all. Sellers scaling Walmart with sponsored placements routinely spend 6 to 10% of Walmart gross on ads they've never seen as a line item. On $50,000 a month of Walmart sales, that's $3,000 to $5,000 monthly, invisible, and unjudgeable: you can't compute a real ACOS for a channel whose ad spend isn't booked.</p>
<p><strong>The fix:</strong> Walmart Connect gets its own advertising account, separate from Amazon PPC and everything else, fed from settlement detail. Ad spend per channel against margin per channel is the report that decides where the next dollar goes. Hidden ad spend is also one of the first checks on our free <a href="/money-leak-checklist/">27-Point Money Leak Checklist</a>.</p>

<h2>Problem 7: WFS inventory losses and reimbursements</h2>
<p>Hand inventory to any fulfillment network and some of it gets lost, damaged or mis-received. WFS is no exception, and like Amazon, Walmart reimburses on its own schedule, at its own valuation, netted into settlements where deposit-based books never see it. Unclaimed reimbursements are pure margin leak: a seller cycling $40,000 of inventory through WFS monthly might see a few hundred dollars of discrepancies a month, $2,000 to $4,000 a year, and either recover it by reconciling or donate it by not noticing.</p>
<p><strong>The fix:</strong> monthly reconciliation of inventory adjustments against reimbursements received, the same discipline FBA demands, run per network. And reimbursements aren't revenue windfalls; they offset inventory losses, or the books are wrong twice.</p>

<h2>Problem 8: One inventory pool, two fulfillment networks</h2>
<p>Most Walmart sellers ship the same SKUs through FBA and WFS, and the accounting has to follow units across both: what's at Amazon, what's at Walmart, what's in transit from the 3PL to each, and what every unit cost. Books carrying one blended inventory number can't value either network's stock, can't spot shrinkage by location, and can't answer the restock question that actually drives cash: which network needs the next purchase order?</p>
<p><strong>The fix:</strong> inventory sub-accounts by location, movements booked as transfers, and a monthly tie-out of each network's inventory report against the books. Fifteen extra minutes a month, and it turns inventory from a guess back into a number.</p>

<h2>What Walmart doesn't charge, and what that does to lazy books</h2>
<p>Walmart Marketplace has no monthly subscription fee, which sounds like a bookkeeping non-event but changes the reconciliation habit. Amazon sellers are used to predictable fixed charges anchoring the fee account; Walmart's costs are almost entirely variable, commissions, WFS activity and ads that scale with volume. A month where Walmart fees double might be growth or might be an error, and flat-account books can't tell you which. Category referral rates also differ from Amazon's in both directions, so a product line whose margin transferred fine can sit next to one whose margin quietly didn't.</p>
<p><strong>The fix:</strong> a monthly fee review that rate-checks a sample of orders against Walmart's published category schedule. Sellers catch genuine billing errors this way more often than you'd expect, and mispriced listings even more often.</p>

<h2>The monthly close, Walmart edition</h2>
<p>A Walmart channel adds five recurring steps to the close: post settlement summaries for every cycle touching the month, accrue revenue for the settlement spanning month-end, tie WFS inventory to the books, reconcile reimbursements, and review the per-channel P&amp;L against Amazon's. Run monthly, it's under an hour. Skipped until year-end, it's a reconstruction project that costs four figures and still ends with estimates where numbers should be. If your Walmart channel has never had this treatment, that's <a href="/catch-up-bookkeeping-services/">a catch-up project</a>, cheaper now than after the 1099-K lands.</p>

<h2>Getting Walmart Marketplace into QuickBooks properly</h2>
<p>There's no native Walmart QuickBooks integration worth using, and per-order sync apps do to Walmart books what they do everywhere: thousands of transactions that never match the netted settlement deposits. The working setup is settlement-summary posting. A2X's Walmart connection posts each settlement as one summarized entry, gross sales, referral fees, WFS charges, refunds, ad spend, sales tax liability, mapped to your accounts, and Link My Books handles Walmart too. The deposit then reconciles exactly, every cycle.</p>
<p>For sellers asking how to record Walmart Marketplace sales in QuickBooks by hand: pull the settlement report, and post one journal per settlement, debit bank for the payout, debit each fee and ad account, debit refunds, credit gross sales, credit sales tax payable. Manageable at low volume, tedious at scale, and either way the value lives in the account mapping. A2X pointed at a copied Amazon chart of accounts just automates Problem 3.</p>

<h2>When to hire an accountant for Walmart sellers</h2>
<p>The moment Walmart becomes a real second channel, roughly $10,000 a month, or the day you turn on WFS, the bookkeeping workload doubles in a way that generalist bookkeepers and Amazon-only setups don't handle: two settlement systems, two fee taxonomies, two 1099-Ks, one blended mess unless someone builds it right. Add a <a href="/bookkeeping-tips/shopify-bookkeeping-problems/">Shopify DTC channel</a> with its multi-gateway payouts and the case gets stronger still. An accountant for Walmart sellers earns their fee mostly by making the per-channel answer visible: which platform is actually growing your profit, not just your revenue.</p>
<p>Our <a href="/walmart-bookkeeping-services/">Walmart Marketplace bookkeeping services</a> handle settlement reconciliation, WFS fee breakouts and true per-channel P&amp;L alongside your Amazon books, with <a href="/pricing/">published pricing</a> and no annual contract. Or start with the free teardown: we rebuild your most recent month, both channels, and send a 10-minute video of what we found, with dollar figures. <a href="/contact/">Claim it here</a>.</p>
`,
  },
  {
    slug: "shopify-bookkeeping-problems",
    title: "Shopify Bookkeeping Problems: Payout Soup, Connector Chaos, Gift Cards",
    metaTitle: "Shopify Bookkeeping Problems: Payouts, Connectors, Fixes",
    metaDescription:
      "Multi-gateway payouts, per-order sync apps that wreck QuickBooks, gift card liabilities and inflated revenue: Shopify's real bookkeeping problems, with fixes.",
    date: "2026-07-29",
    readMinutes: 11,
    excerpt: "Shopify hands you clean dashboards and a bookkeeping mess underneath: four payment gateways, sync apps that flood QuickBooks, gift cards booked as revenue. Here's each problem and its fix.",
    html: `
<p>Shopify bookkeeping is harder than marketplace bookkeeping, not easier, because Shopify isn't one payment system. A typical store gets paid through Shopify Payments, PayPal, and one or two buy-now-pay-later providers at the same time, each with its own fees, payout schedule and refund path, while the most popular QuickBooks sync apps quietly wreck the books underneath. Here are the nine problems that show up in nearly every Shopify file we open, and the fix for each.</p>

<h2>Problem 1: The multi-gateway payout soup</h2>
<p>One store, one dashboard, four money pipes. Shopify Payments deposits on its own rolling schedule, minus 2.9% plus 30 cents (or your plan's rate). PayPal holds its own balance and pays out when you tell it to, minus roughly 3.5%. Shop Pay Installments and other BNPL orders pay through the provider at a steeper rate, often 5 to 6%, on yet another schedule. A $10,000 sales day arrives in your bank as five deposits over nine days, from three sources, each net of different fees. And the BNPL slice is growing: stores routinely see 15 to 25% of checkout volume go through installment options, which means a quarter of revenue now carries roughly double the processing cost of a card payment. That's a margin fact worth seeing on its own line, not blended into "merchant fees."</p>
<p>Books built from the bank feed can't survive this. The bookkeeper sees a $2,847 Shopify deposit, a $1,530 PayPal transfer and a $912 BNPL payout and has no way to tie any of them to orders, fees or refunds. So they book deposits as revenue, and now sales are understated by the fee stack, timing is smeared across payout schedules, and reconciliation is theater.</p>
<p><strong>The fix:</strong> per-gateway clearing accounts. Sales post at gross into a clearing account per gateway, fees post as expenses, and each deposit clears its gateway's account, which should regularly hit zero. When it doesn't, something's missing, and the clearing balance tells you where to look. This structure is twenty minutes of setup and it's the difference between reconciling and guessing. Note that Shopify Payments also reports your gross volume to the IRS on a 1099-K, so the gross-versus-net discipline here is the same one in our <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-K guide</a>.</p>

<h2>Problem 2: The per-order connector that wrecks QuickBooks files</h2>
<p>Search for a Shopify QuickBooks integration and the top results, including the official connector, sync every order as its own transaction. At 2,000 orders a month that's 24,000 transactions a year injected into your file: individual sales receipts that never match the netted payouts, duplicate customers by the thousand, fees missing or dumped wherever, refunds as orphaned credit memos. We've opened QuickBooks files with 80,000 connector-created transactions and a reconciliation that hasn't balanced in two years. At that point the file is often cheaper to rebuild than repair, and rebuilds are real money: a year of catch-up runs four figures.</p>
<p><strong>The fix:</strong> summary posting instead of per-order sync. A2X for Shopify posts each payout as one summarized entry, gross sales, discounts, refunds, fees, gift cards, sales tax, mapped to your chart of accounts, per gateway, and Link My Books does the same. The Shopify Xero integration story is identical: Xero's native connection has the same per-order weakness, and the same summary-posting tools fix it. Your file stays small, your deposits reconcile to the penny, and your P&amp;L reads like a business instead of a transaction dump. If a connector already trashed your file, that's <a href="/catch-up-bookkeeping-services/">a catch-up project</a>, and the sooner it's rebuilt the cheaper it is.</p>

<h2>Problem 3: Gift cards booked as revenue</h2>
<p>Selling a $100 gift card feels like a $100 sale. It isn't. It's a $100 loan from your customer: cash in, liability recorded, revenue recognized only when the card is redeemed. Shopify stores that book gift card sales as revenue overstate income now and double-count it at redemption, and the error compounds every holiday season. A store selling $15,000 of gift cards each December and booking them as sales overstates December revenue by $15,000, understates January through March (when redemptions arrive already counted), and carries no liability on the balance sheet for the $4,000 of cards that never get redeemed at all. Every year the store runs this way, the error stacks another layer, and untangling three Decembers after the fact is genuinely painful.</p>
<p>That missing liability matters beyond accuracy: unredeemed balances are subject to state escheatment rules in some states, and a buyer's diligence team will find the gift card error in about ten minutes, then wonder what else is wrong.</p>
<p><strong>The fix:</strong> gift card sales credit a liability account, redemptions move liability to revenue, and breakage gets recognized on a defensible policy. A2X and Link My Books both split gift card activity correctly if mapped right, which is precisely the kind of mapping a shopify accountant sets up once and you stop thinking about.</p>

<h2>Problem 4: Discounts and returns inflating your revenue</h2>
<p>Shopify's reports offer gross sales, discounts, returns and net sales, and every sync setup picks a lane. Plenty pick wrong, booking gross sales as revenue while discounts and returns vanish into the netting. A store showing $80,000 of "revenue" might have given $9,000 in discounts and taken $6,000 of returns: real revenue $65,000. The inflated number flows into margin calculations, ad-spend decisions and, at the worst possible moment, a lender or buyer conversation where the story deflates by 19% under scrutiny.</p>
<p>The subtler cost is operational. Discounts as a visible contra-revenue line tell you what your promotions actually cost: that a 15%-off code run for three weeks bought $22,000 of sales for $3,300 of margin. Returns as their own line tell you a product problem is developing while it's one SKU, not a quarter. Netted away, both signals are gone.</p>
<p><strong>The fix:</strong> gross sales, discounts and returns each in their own account, every month. Your net revenue is still net; you just get to see why. This is one of the checks on our free <a href="/money-leak-checklist/">27-Point Money Leak Checklist</a>, because discount creep is one of the most common leaks we find.</p>

<h2>Problem 5: 3PL inventory nobody's books can see</h2>
<p>DTC brands outgrow the garage fast, and inventory moves to a 3PL, or two, plus a container on the water and a reserve at the factory. The bookkeeping question, what inventory do you own and what did it cost, gets harder exactly when it starts to matter. Common failure mode: inventory purchases expensed when paid, so the balance sheet shows no inventory at all while $130,000 of stock sits at the 3PL; or a stale inventory number carried for a year while shrinkage, 3PL receiving discrepancies and un-capitalized freight quietly diverge from reality.</p>
<p>Cash-basis COGS also destroys your monthly story: the month you paid for a container looks catastrophic, the months you sold it look brilliant, and neither is true. Lenders discount books like that on sight.</p>
<p><strong>The fix:</strong> purchases to the balance sheet, COGS recognized as units sell, freight and duties capitalized into landed cost, and a monthly tie-out between your books and the 3PL's inventory report. The 3PL report disagreeing with your books by 4% is normal and findable, receiving discrepancies, miscounts, unreported damage. Disagreeing by 4% for a year, uninvestigated, is a five-figure write-off waiting for year-end.</p>

<h2>Problem 6: Sales tax across states, sitting in your revenue</h2>
<p>Unlike marketplace orders, your Shopify store's sales tax is your problem: nexus tracking as you cross state thresholds, registration, collection settings, filing. The bookkeeping half is simpler but botched constantly: tax collected flows in with order payments, and books that don't separate it book it as revenue, overstating income by every collected dollar and turning filing time into archaeology.</p>
<p><strong>The fix:</strong> collected tax to a liability account at posting time (A2X and Link My Books both do this when mapped correctly), and a monthly check that the liability balance covers what's owed across your registered states. Owing tax you collected but spent is a uniquely self-inflicted cash crisis.</p>

<h2>Problem 7: Chargebacks, the refund with a penalty attached</h2>
<p>A chargeback isn't a refund. The money leaves immediately, a $15 fee leaves with it, the order might still ship if you missed the alert, and if you win the dispute weeks later only some of it comes back. Books that lump chargebacks in with refunds miss the fee, miss the pending state, and miss the pattern, and the pattern is the point: a chargeback rate creeping toward 1% threatens the Shopify Payments account itself. That's an existential number hiding in a bookkeeping detail.</p>
<p><strong>The fix:</strong> chargebacks in their own contra-revenue account with fees separated, pending disputes tracked as receivables, and the rate on your monthly one-page report. On 2,000 orders a month, the gap between 0.3% and 0.8% is ten extra chargebacks, roughly $900 with fees and product cost, and one processor warning email you'd rather not get.</p>

<h2>Problem 8: Shopify Capital, the loan that looks like income</h2>
<p>Take a Shopify Capital advance and $40,000 appears in your bank account. It isn't income. It's debt, repaid as a daily percentage of sales that quietly shrinks every payout until the total is met. Books that recorded the advance as income overstate revenue by the entire amount; books that miss the daily remittances overstate every payout afterward. Both errors are common because the repayments hide inside deposits.</p>
<p><strong>The fix:</strong> the advance to a liability account, daily remittances split between liability paydown and financing cost, and the true cost computed once, because a 1.1 factor rate on a fast-repaying advance is a far higher effective APR than it looks. Financing decisions deserve a real number.</p>

<h2>Problem 9: Multi-currency selling and the conversion gap</h2>
<p>Turn on international markets and a new gap opens: the order shows in the buyer's currency, Shopify Payments converts at its rate with a conversion fee inside, and the payout lands in dollars that match no order total anywhere. Multiply by a few hundred international orders a month and revenue, fees and reconciliation all drift together.</p>
<p><strong>The fix:</strong> revenue booked in your home currency from settlement data, conversion fees on their own expense line (A2X handles the translation in its summary posting), and a quarterly review of that line once international passes about 15% of sales. Repricing international markets to cover conversion costs is a decision worth making on purpose instead of by erosion. On $20,000 a month of international volume, a 1.5% conversion fee is $3,600 a year, which is either priced in or coming out of margin.</p>

<h2>What clean Shopify books look like</h2>
<p>Gross sales, discounts and returns each visible, by month. Per-gateway clearing accounts that zero out. Fees itemized by gateway. Gift cards on the balance sheet as a liability. Inventory at landed cost, tied to the 3PL monthly, with COGS on sale. Sales tax in a liability account. A file small enough to open fast and clean enough to hand a lender without a preamble, built on the account structure in our free <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">ecommerce chart of accounts template</a>. That's the standard, and it's achievable for any store, usually within one catch-up cycle.</p>

<h2>When to hire a bookkeeper for your Shopify store</h2>
<p>DIY with a well-mapped A2X setup is workable to roughly $20,000 a month if you enjoy it. Add a second gateway, a 3PL, gift cards, serious BNPL volume or a <a href="/bookkeeping-tips/tiktok-shop-seller-bookkeeping/">TikTok Shop channel</a> beside the store, and the hours climb past what the work is worth, which is when shopify bookkeeping services stop being an expense and start being margin: the leaks above, fee creep, discount creep, 3PL shrinkage, unredeemed liabilities, are each worth more than the monthly fee once someone's actually watching them.</p>
<p>Our <a href="/shopify-bookkeeping-services/">Shopify accounting services</a> set up the gateway clearing structure, the A2X or Link My Books mapping and the monthly 3PL tie-out, then close your books by the 10th business day every month, with <a href="/pricing/">published pricing</a> from $149/mo. Want to see your file's problems first? We rebuild your most recent month free and send a 10-minute video of what we found, with dollar figures on each item. <a href="/contact/">Claim the free teardown here</a>.</p>
`,
  },
  {
    slug: "back-market-reebelo-seller-bookkeeping",
    title: "Back Market and Reebelo Seller Accounting: A Refurbisher's Guide",
    metaTitle: "Back Market & Reebelo Seller Accounting Guide",
    metaDescription:
      "Commissions, grading disputes, warranty reserves and per-unit COGS for graded devices: the accounting guide for Back Market and Reebelo sellers.",
    date: "2026-07-29",
    readMinutes: 12,
    excerpt: "Nobody writes about recommerce accounting, so refurbishers copy new-goods bookkeeping and get burned by grading disputes, warranty tails and lot-cost COGS. Here's the guide, from people who sell on these platforms.",
    html: `
<p>Selling on Back Market or Reebelo breaks normal ecommerce bookkeeping in three specific places: your COGS is per-unit and per-grade instead of per-SKU, your refund exposure runs twelve months instead of thirty days, and a grading dispute can reprice a sale weeks after you booked it. Almost nothing written about ecommerce accounting covers any of this, so refurbished electronics sellers copy new-goods bookkeeping and get quietly wrong numbers. We sell on these platforms ourselves, so this is the guide we wished existed: how the money actually moves, and how to book it.</p>

<h2>How Back Market and Reebelo actually pay you</h2>
<p>Both platforms work the same basic way: you list refurbished devices by model, storage, carrier status and cosmetic grade, the platform takes a commission when you sell, and you receive a net payout on the platform's cycle. Back Market's commission varies by category and seller agreement, roughly 10% for many electronics, plus payment processing, and Reebelo runs its own category-based commission tiers. On a $339 iPhone sale with a 10% commission and payment fees, your payout is around $300 before shipping.</p>
<p>The bookkeeping problem is the same one every marketplace creates, with a recommerce twist. The payout is net of commissions, refunds and dispute adjustments, so booking deposits as revenue understates sales and hides your costs. But on Back Market and Reebelo, the adjustments netted against a payout include grading-dispute refunds and warranty claims from sales that happened months ago, so a single deposit can mix this week's sales with February's problems. Deposit-based books can't untangle that even in principle.</p>
<p><strong>The fix:</strong> post gross sales, commissions, refunds and adjustments separately from the platform's payout and transaction reports, carry unsettled amounts as a receivable, and let deposits clear the receivable. It's the same settlement discipline we describe for <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">Amazon settlement reports</a>, applied to platforms that don't hand you an A2X integration to do it.</p>

<h2>Grading disputes: when the sale gets repriced after the fact</h2>
<p>Here's the problem unique to recommerce. You ship a Grade A device. The buyer says the battery reads 84% or there's a scratch you'd call within-grade, and opens a claim. Depending on the platform's process you eat a full return, a partial refund to keep the sale alive, or a warranty replacement. Whichever way it goes, a sale you booked at $339 three weeks ago just became a $339 sale minus a $45 partial refund, or a return that comes back to you as a now-Grade-B device worth $40 less than the one you shipped.</p>
<p>Books that treat these as ordinary refunds miss two things. First, the timing: the adjustment lands in a different month than the sale, so monthly margins wobble for reasons nobody can name. Second, the information: a rising dispute rate on one model, or one grader on your bench, is the single most valuable quality signal a refurb operation has, and it's invisible if disputes blend into generic refunds.</p>
<p><strong>The fix:</strong> a dedicated contra-revenue account for grading adjustments and partial refunds, separate from full returns, tracked by month. And when a returned device gets re-graded downward, book the write-down: the unit came back worth less, and pretending it's still Grade A inventory overstates your balance sheet. A 3% dispute rate on 800 monthly units at an average $38 adjustment is $912 a month; at 6% it's $1,824, and the difference between those two numbers is usually one fixable process problem, if your books surface it.</p>

<h2>Warranty reserves: your refund window is a year long</h2>
<p>Back Market requires at least a twelve-month warranty on US sales, and Reebelo sales carry long warranty coverage too. That changes your accounting posture completely. A new-goods seller's refund exposure mostly dies after 30 days. Yours runs a full year: the device you sold in March can become a claim in November, and a month of sales isn't really "done" for twelve more months.</p>
<p>Sellers who ignore this run profitable-looking months followed by mystery-bad ones, because claims from strong past months land on weak current ones. The businesses that price and plan correctly think in reserves: if history says 2.5 to 4% of revenue eventually comes back as warranty cost, that cost belongs to the month of the sale, not the month of the claim.</p>
<p><strong>The fix:</strong> accrue a warranty reserve monthly, a percentage of revenue based on your actual trailing claim history, and charge real claims against the reserve. Selling $80,000 a month with a 3% expected claim rate, you'd accrue $2,400 monthly; actual claims then hit the reserve, not the current month's P&amp;L. Your margins stop lying about months that haven't finished aging yet, and pricing decisions get made against true, warranty-loaded costs. This is standard accounting for manufacturers and almost nobody applies it in recommerce, which is exactly why the sellers who do can price a point sharper and know they're still profitable.</p>

<h2>Per-unit COGS for graded devices: the heart of recommerce accounting</h2>
<p>A refurbisher's cost question is harder than a retailer's. What did the iPhone 13 you just sold actually cost? If you bought it as a single trade-in for $210, put in a $28 battery and twenty minutes of bench time, the answer is roughly $245 landed. If it came out of a 100-unit carrier lot you paid $9,500 for, the answer requires allocation, and "lot cost divided by 100" is wrong, because the lot graded out as 30 Grade A, 40 Grade B, 20 Grade C and 10 parts-only units, and those aren't worth the same.</p>
<p><strong>The fix</strong> is per-unit costing, allocated by expected resale value at grading time. Spread the $9,500 across units in proportion to what each grade sells for, so the Grade A units carry more cost than the parts units, then capitalize refurb parts and repair labor into each unit that gets work. Now every device carries a real cost through to sale, dead units show real losses instead of hiding in an average, and you can finally answer the sourcing question that decides the whole business: are carrier lots, buyback programs or trade-ins delivering the cheapest cost per sellable Grade A unit? Track devices by IMEI or serial and the audit trail comes free, which also matters when a lender or buyer asks how you value inventory. We walk through the account structure that supports this in our <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">ecommerce chart of accounts template</a>, with the recommerce additions being an inventory sub-account per grade and a refurb-parts capitalization account.</p>

<h2>BuyBox competition: track margin per model per grade, or bleed</h2>
<p>Back Market's BuyBox works like Amazon's: the best offer on a given model, grade and spec wins the sale, and prices race downward whenever supply is long. Sellers chase the box a dollar at a time, and because a refurbisher's costs vary unit by unit, it's genuinely easy to win sales that lose money. The $299 BuyBox price that's profitable on units you sourced at $210 is a loss on the batch you bought at $265 during a tight month.</p>
<p><strong>The fix:</strong> margin reporting per model, per grade, per sourcing channel, monthly. Not per SKU in the retail sense, per grade line: iPhone 13 128GB Grade A is a different P&amp;L line than the same phone in Grade B, because it sells for $60 more and cost you different money. When the report shows Grade C units of a model averaging 4% margin after commission, shipping, warranty reserve and dispute rate, you stop chasing that BuyBox and route those units to a different channel, or to parts. Sellers without this report compete on gut feel against sellers who have it. Over a year, that's the whole ballgame.</p>

<h2>Multi-marketplace consolidation: Back Market plus everything else</h2>
<p>Almost no refurbisher sells on one platform. The same inventory pool feeds Back Market, Reebelo, eBay, Amazon Renewed and Swappa, each with different commissions, different buyer behavior, different dispute and return profiles, and its own 1099-K. Blended books hide the differences, and the differences are the strategy: one channel's higher commission can still net you more per unit once you count its lower dispute rate and cheaper fulfillment path. That answer changes device by device and grade by grade.</p>
<p><strong>The fix:</strong> per-channel P&amp;L through classes or tracking categories, with each marketplace carrying its own commission, refund, dispute and ad accounts, plus the per-grade costing above so the same unit is comparable across channels. eBay deserves special care because its managed-payments netting creates <a href="/bookkeeping-tips/ebay-seller-bookkeeping-problems/">its own set of bookkeeping problems</a>, and it's usually a refurbisher's second-biggest channel. Each platform's 1099-K then ties to its own gross revenue line, which is the same discipline covered in our <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-K reconciliation guide</a>, multiplied by however many marketplaces you run.</p>

<h2>Parts harvesting and scrap: the last mile of COGS</h2>
<p>Not every unit sells as a device. Parts-only units get harvested, the screen into one repair, the board into another, and the cost you allocated to that unit has to follow the parts. The clean method: move the unit's cost into a parts inventory account at harvest, then relieve it as parts get consumed in refurbs or sold outright. Scrap payments from recyclers are income, small but real, and battery and board disposal has costs worth tracking too. Skip all of this and your refurb-parts costs double-count against the devices that received them, quietly overstating repair costs and understating device margins, which then corrupts the per-grade pricing decisions above.</p>

<h2>Sales tax, 1099-Ks and the compliance stack</h2>
<p>Back Market and Reebelo act as marketplace facilitators for US sales tax, collecting and remitting on your orders, so the bookkeeping job is keeping collected tax out of revenue and in a pass-through liability account. Each platform also reports your gross volume on its own 1099-K, which will not match your net payouts, by design. Run three or four recommerce channels and that's three or four gross-versus-net reconciliations every January, one more reason the settlement discipline below isn't optional. International sellers running US entities carry a further filing stack; our <a href="/bookkeeping-tips/form-5472-foreign-owned-llc-guide/">Form 5472 guide</a> covers the $25,000 mistake in it.</p>

<h2>How to record Back Market sales in QuickBooks</h2>
<p>There's no A2X or Link My Books connector for Back Market or Reebelo, so anyone searching for how to record Back Market sales in QuickBooks lands on the honest answer: manual settlement posting. Export the platform's payout and transaction reports, and post one summarized journal per payout cycle: debit the bank for the payout, debit commission expense, debit refunds and grading adjustments (their own account, per above), credit gross sales, credit the sales tax liability where the platform collects as a facilitator, with the receivable carrying anything unsettled. Build it as a repeatable monthly template and it's an hour per platform per month. Skip it and book deposits, and every number in this article becomes unknowable.</p>
<p>This missing-integration gap is, frankly, why recommerce sellers hire us earlier than other sellers do: the platforms most worth selling on have the least tooling support, and the manual work has to be done right every month or the file drifts.</p>

<h2>When to hire an accountant for Back Market and Reebelo sellers</h2>
<p>If you're moving more than about 150 devices a month, running more than two marketplaces, or making sourcing decisions on gut feel because your unit costs are a mystery, professional Back Market seller accounting will pay for itself out of the first mispriced lot it catches. Warranty reserves, per-grade margin reporting and multi-channel consolidation aren't nice-to-haves at that scale; they're the difference between a refurb operation that knows its numbers and one that discovers them at tax time. Generalist bookkeepers won't build this. Most have never seen a grading dispute. And if your operation leans more reseller than refurbisher, one-of-one finds flipped across Poshmark, eBay and Whatnot rather than graded phone lots, our <a href="/reseller-bookkeeping-services/">reseller bookkeeping service</a> and <a href="/bookkeeping-tips/reseller-taxes-bookkeeping-guide/">reseller taxes guide</a> cover that side of the trade.</p>
<p>Our <a href="/monthly-ecommerce-bookkeeping/">recommerce bookkeeping services</a> handle settlement posting for platforms without connectors, per-unit COGS for graded devices, warranty reserve accounting and per-channel P&amp;L across every marketplace you sell on, with <a href="/pricing/">published pricing</a> and no annual contract. Our free <a href="/money-leak-checklist/">27-Point Money Leak Checklist</a> covers the recommerce-specific leaks too. And the free teardown applies here like everywhere: we rebuild your most recent month, disputes, reserves and all, and send you a 10-minute video of what we found with dollar figures attached. <a href="/contact/">Claim it here</a>.</p>
`,
  },
  {
    slug: "reseller-taxes-bookkeeping-guide",
    title: "Reseller Taxes & Bookkeeping: The Complete Guide (Poshmark, Mercari, Depop, StockX, Whatnot)",
    metaTitle: "Reseller Taxes & Bookkeeping: The Complete Guide",
    metaDescription:
      "1099-K thresholds, hobby vs business, thrift-run COGS and per-platform notes for Poshmark, Mercari, Depop, StockX, GOAT, Whatnot and Facebook Marketplace. Written for resellers.",
    date: "2026-07-29",
    readMinutes: 13,
    excerpt: "Reselling across Poshmark, Mercari, Depop, StockX and Whatnot means five fee structures, five 1099-Ks, and COGS that starts at a thrift store. Here's the whole tax and bookkeeping picture, platform by platform.",
    html: `
<p>Reseller taxes come down to one sentence: if you buy things to sell for profit, your net profit is taxable business income plus 15.3% self-employment tax, whether or not any platform sends you a form. Everything else, the 1099-K thresholds, the hobby rules, the garage-sale exception, decides how you report it, not whether you owe it. Here's the complete picture for people selling on Poshmark, Mercari, Depop, StockX, GOAT, Whatnot, Facebook Marketplace and eBay, including the bookkeeping that makes all of it manageable.</p>

<h2>The 1099-K: what the thresholds actually are now</h2>
<p>The 1099-K is the form payment platforms file with the IRS reporting your gross payment volume. After years of whiplash (the threshold was scheduled to drop to $600, then got delayed, then phased), the 2025 law change restored the federal threshold to $20,000 and 200 transactions. So a casual seller who moved $4,000 of clothes on Poshmark may not get a federal form this year.</p>
<p>Don't relax yet, for three reasons. First, states set their own thresholds, and several are dramatically lower: Virginia, Maryland and Massachusetts report at $600, Illinois at $1,000 and four transactions, New Jersey at $1,000. Sell from one of those states and the form arrives regardless of federal rules. Second, platforms can report below the threshold, and some do. Third, and most important: <strong>taxability never depended on the form.</strong> Profit from reselling was taxable when the threshold was $20,000, taxable when it was headed to $600, and taxable today. The 1099-K changes what the IRS can see, not what you owe.</p>
<p>One more thing the form does: it reports <em>gross</em>. Fees, refunds, shipping labels, none of it is subtracted. Your bank deposits will always be smaller than the 1099-K, and if your tax return reports revenue that looks like your deposits, the IRS matching computer flags the gap. The mechanics of fixing that are the same across every platform, and we walk through them in our <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-K reconciliation guide</a>.</p>

<h2>Hobby, business, or selling your own stuff? Three different tax treatments</h2>
<p>Everything you sell online falls into one of three buckets, and mixing them up is the single most expensive reseller mistake.</p>
<p><strong>Selling personal items at a loss.</strong> You paid $900 for a couch, sold it for $250 on Facebook Marketplace. No taxable income, and no deductible loss either (losses on personal-use property don't count). But if that sale flowed through a platform that 1099-Ks you, it still has to be reported and zeroed out correctly on your return, or the gross number reads as unreported income.</p>
<p><strong>Selling personal items at a gain.</strong> The vintage guitar you bought for $300 in 2009 and sold for $1,400 is a capital gain of $1,100. Held over a year, it's a long-term gain; collectibles have their own rate rules. Occasional, genuine, and different paperwork than business income.</p>
<p><strong>Reselling for profit.</strong> Sourcing at thrift stores, bins, pallets or retail specifically to flip is a business, full stop. Profit goes on Schedule C, picks up self-employment tax, and unlocks the deductions: sourcing costs, mileage to the bins, shipping supplies, platform fees, the works. The IRS hobby rules exist for activities run without a profit motive, and hobby classification is the worst of both worlds: income taxable, expenses not deductible. If you source regularly, track your numbers and try to make money, you're a business, and you want to be, because the deductions are real money.</p>
<p>Most working resellers have all three buckets in one account history: the old golf clubs, the appreciated collectible, and four hundred flips. Books that tag which is which are what let you file each correctly instead of paying business tax on your own garage sale.</p>

<h2>Reseller COGS: what did that thrift find actually cost?</h2>
<p>Cost of goods sold is where reseller bookkeeping either works or collapses, because your inventory doesn't come with invoices. It comes as a $6.49 price sticker, a $400 bin lot, or a $250 liquidation pallet where a third of the units are junk. Two rules make it work:</p>
<p><strong>Rule one: COGS is recognized when the item sells, not when you buy it.</strong> Expense your sourcing runs as they happen and every month's "profit" just reflects how hard you sourced. Heavy sourcing month, terrible margins; no sourcing month, fake-great margins. Lenders see through it, and so will you the first time you try to make a real decision with those numbers. Purchases go to inventory; cost moves to COGS at sale.</p>
<p><strong>Rule two: allocate lots at intake.</strong> One receipt covering fifty future listings needs to be split when the items enter inventory, not reconstructed a year later:</p>
<ul>
<li><strong>Similar items, by count.</strong> A $250 pallet yielding 40 sellable units is $6.25 per unit, with the junk written off immediately.</li>
<li><strong>Mixed items, by expected resale value.</strong> An $85 thrift run producing a $120 jacket and eight $15 shirts shouldn't allocate cost evenly. Weight it by what things will sell for, so the jacket carries more of the $85 than a shirt does.</li>
<li><strong>Cash buys with no receipt:</strong> log them the same day. Date, place, items, amount. A garage-sale purchase log kept contemporaneously holds up; one reconstructed at tax time doesn't.</li>
</ul>
<p>Do this and every sale shows a real margin, dead inventory shows a real loss, and you learn which sourcing channel actually earns more per hour, bins or racks or pallets. Skip it and your margins are folklore. The account structure that supports it is in our free <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">ecommerce chart of accounts template</a>.</p>

<h2>Platform by platform: fees, payouts and gotchas</h2>
<p>Every platform nets its fees differently, and books that lump "selling fees" into one line can't tell you which platform pays best for your inventory. The quick tour:</p>
<p><strong>Poshmark taxes and fees.</strong> The simplest structure in resale: $2.95 flat on sales under $15, 20% above. Simple doesn't mean cheap; 20% is one of the highest take rates going, offset by Poshmark covering shipping labels through buyer-paid shipping. Poshmark payouts are net, its 1099-K is gross, and the 20% between them is your deduction to capture.</p>
<p><strong>Mercari taxes and fees.</strong> Mercari has rewritten its fee model more than once in recent years, dropping seller fees, adding buyer-side fees, then reversing course. That's exactly why itemized fee tracking matters: when a platform changes its take rate mid-year, blended books hide it, and you keep pricing against fees that no longer exist.</p>
<p><strong>Depop taxes and fees.</strong> Depop dropped its 10% US selling fee in mid-2024, leaving payment processing around 3.3% plus 45 cents. Sellers who moved inventory toward Depop after that change made a smart margin move; sellers whose books couldn't show per-platform margins never noticed there was a move to make. Depop's 1099-K works like everyone else's: gross, reconciled against your net payouts.</p>
<p><strong>StockX taxes and fees.</strong> StockX charges a seller fee that starts around 9% and steps down as your seller level rises, plus 3% payment processing. For sneaker and streetwear flippers, per-item COGS is usually clean (you know what you paid for each pair), but volume sellers hit the same 1099-K gross-versus-net gap, and StockX's level system means your fee rate changes over time, which your books should reflect rather than average away.</p>
<p><strong>GOAT.</strong> Commission plus a regional seller fee, netted from payouts. Most StockX sellers cross-list here, which makes per-platform margin tracking the interesting number: same shoe, two fee stacks, one answer about where to sell the next pair.</p>
<p><strong>Whatnot.</strong> Live selling: an 8% commission plus payment processing, deducted before payout, on volume that looks like nothing else in resale. A three-hour stream can produce 240 low-dollar sales, giveaways and bundles. Giveaways are marketing expense that looks like missing inventory; bundles need their allocated costs; and per-order bookkeeping would drown you. Summary posting per stream night, with a giveaway log, is the pattern that works.</p>
<p><strong>Facebook Marketplace taxes.</strong> The wrinkle here is that many sales happen off-platform in cash, which never generates a 1099-K but is exactly as taxable as everything else. Checkout sales get fees netted and reported; local cash sales rely entirely on your own records. Mixed cash-and-checkout selling is where contemporaneous logging earns its keep, because "the IRS can't see it" and "I don't owe tax on it" are very different sentences.</p>
<p><strong>eBay.</strong> The deepest fee stack in resale: final value fees around 13%, per-order fees, store subscriptions, promoted listings, international fees, and shipping labels bought inside the platform, all netted from payouts. eBay's managed payments creates enough bookkeeping problems that <a href="/bookkeeping-tips/ebay-seller-bookkeeping-problems/">we wrote eleven of them up separately</a>, and our <a href="/ebay-bookkeeping-services/">eBay bookkeeping service</a> exists because of them.</p>

<h2>Inventory when every item is one of one</h2>
<p>Retail inventory systems assume SKUs: buy 500, sell them down, reorder. Resale inventory is 900 unique items, each with its own cost, condition and story. What works is item-level tracking with modest ambitions: an ID or listing number, what it cost (allocated per above), when it was sourced, where it's listed, and what it sold for. A spreadsheet does this fine into the thousands of items; inventory apps built for resellers do it with less typing.</p>
<p>Two disciplines keep it honest. Count periodically, even roughly, because death piles (sourced, never listed) and dead stock (listed, never selling) are both your money sitting in totes, and if they were expensed at purchase they've been distorting every month since. And write down aged inventory: the $6.25-per-unit allocation that was honest at intake is fiction two years later when the last fifteen units are unsellable. A quarterly look plus a write-down policy changes sourcing behavior more than any lecture, because the books start showing what that eighteen-month-old tote actually earned: nothing.</p>
<p>Resellers who feed phones and electronics into refurbished marketplaces have a deeper version of this problem, per-grade unit costing, which our <a href="/bookkeeping-tips/back-market-reebelo-seller-bookkeeping/">Back Market and Reebelo guide</a> covers.</p>

<h2>Self-employment tax and quarterly estimates</h2>
<p>Reselling profit on Schedule C picks up 15.3% self-employment tax on top of income tax, and nothing is withheld from a Poshmark payout. A reseller netting $40,000 of profit can owe $10,000 to $13,000 combined, due in quarterly estimates in April, June, September and January, not in one April surprise. The safe harbor keeps it simple: pay 100% of last year's total tax through estimates (110% if prior-year income topped $150,000) and you're penalty-proof even in a growth year. Mechanically, moving 25 to 30% of every payout into a separate tax account the day it lands turns quarterly payments from emergencies into transfers. The broader income-tax picture for platform sellers, deductions included, is in our <a href="/bookkeeping-tips/amazon-seller-taxes-guide/">seller taxes guide</a>.</p>

<h2>The monthly bookkeeping system that keeps all of this sane</h2>
<p>Once the structure exists, maintenance is short. Monthly: post each platform's payout summaries (gross sales, fees by type, refunds, labels), reconcile deposits, log the month's sourcing runs with allocations, record giveaways and write-downs, and glance at per-platform margins against last month. Quarterly: rough inventory count, estimated tax payment, and a check on fee lines for platform changes. January: tie every 1099-K to its platform's gross revenue line, already reconciled, and hand your CPA a file that answers questions instead of raising them.</p>
<p>That's maybe two hours a month of disciplined work, or it's ours to do. What it prevents is the year-end reconstruction: fifty-two weeks of netted payouts across six platforms, a shoebox of thrift receipts, and a 1099-K stack that doesn't match anything, rebuilt under deadline. We do those projects constantly as <a href="/catch-up-bookkeeping-services/">catch-up work</a>, and every one of them cost more than maintenance would have.</p>

<h2>When to hire a reseller bookkeeper</h2>
<p>Honest thresholds: under roughly $2,000 a month across platforms, a spreadsheet and discipline genuinely work. Past $5,000 to $10,000 a month, or the moment you're sourcing weekly, running three or more platforms, or staring at a 1099-K that includes personal sales, the math flips: reseller bookkeeping done professionally costs less than the mispriced sourcing, missed deductions and mismatch-notice risk of winging it. And if you've got employees, a warehouse, or serious Whatnot volume, it stopped being optional a while ago.</p>
<p>Our <a href="/reseller-bookkeeping-services/">reseller bookkeeping service</a> handles every platform above: payout rebuilds, sourcing-run COGS, per-platform P&L and the January 1099-K tie-out, with <a href="/pricing/">published pricing</a> from $149/mo and no annual contract. Want proof before you commit? We'll rebuild your most recent month free, all platforms, and send you a 10-minute video of what we found, missed deductions and mystery fees included. <a href="/contact/">Claim the free teardown here</a>. Our free <a href="/money-leak-checklist/">27-Point Money Leak Checklist</a> covers the fastest leaks to check yourself in the meantime.</p>
`,
  },
  {
    slug: "onlyfans-taxes-bookkeeping-guide",
    title: "OnlyFans Taxes & Bookkeeping: What Creators Actually Need",
    metaTitle: "OnlyFans Taxes & Bookkeeping: What Creators Need",
    metaDescription:
      "How OnlyFans income is taxed: the 1099-NEC from Fenix, the 20% fee, quarterly estimates, deductions that hold up, LLC vs S-corp, and chargebacks. Professional, judgment-free.",
    date: "2026-07-29",
    readMinutes: 12,
    excerpt: "OnlyFans income is self-employment income, taxed at up to 40%+ combined, with nothing withheld and a 1099-NEC arriving every January. Here's the complete tax and bookkeeping picture, handled professionally.",
    html: `
<p>OnlyFans income is self-employment income. You owe regular income tax plus 15.3% self-employment tax on your net profit, nothing is withheld from your payouts, and every January a 1099-NEC arrives from Fenix Internet LLC (OnlyFans' payment entity) if you earned $600 or more. That's the whole framework in one paragraph. The rest of this guide is the detail that decides whether you handle it cheaply and calmly or expensively and in a panic, written the way we work with creators: professionally, concretely, and without commentary about the content.</p>

<h2>The 1099-NEC from Fenix Internet</h2>
<p>OnlyFans doesn't send tax forms under its own name. US creators get a 1099-NEC from Fenix Internet LLC, which confuses people every year ("who is Fenix and why do they say they paid me?"). Same company, and the IRS gets a copy of everything on it.</p>
<p>Three things to know about the form. First, the $600 threshold: earn less and no form arrives, but the income is taxable anyway, from dollar one. Second, it reports what Fenix paid you, so it needs to reconcile against your bank deposits and your creator dashboard, and those three numbers rarely line up by accident: payout timing crosses year-end, chargebacks claw earnings back, and the platform fee sits between your gross and your net. Third, check which figure the form actually reports against your dashboard before filing. Your books should show your gross earnings, the 20% platform fee, and your net payouts as three separate numbers that tie to each other, so whatever the 1099-NEC says, you can reconcile to it exactly and never deduct the platform fee twice (or, just as bad, never deduct it at all).</p>
<p>Creators who also get paid through PayPal, CashApp or other processors may receive 1099-Ks on top of the NEC, and the same dollars can appear to be reported twice. Books that track income by payer are what untangle that; the gross-versus-net mechanics are the same ones in our <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-K guide</a>.</p>

<h2>The 20% platform fee, booked correctly</h2>
<p>OnlyFans keeps 20% of everything: subscriptions, tips, PPV, customs. On $10,000 of monthly fan spending, you receive $8,000. Small bookkeeping decision, real consequences: record $8,000 of income and the fee vanishes from your books, understating both your revenue and your expenses, and leaving nothing to reconcile against the dashboard. Record $10,000 gross with a $2,000 platform-fee expense and your books match reality, your true cost of doing business on the platform is visible, and the January tie-out takes minutes.</p>
<p>Why visibility matters: 20% is a bigger take rate than Amazon charges most sellers. Creators earning $150,000 net are paying OnlyFans $37,500 a year. Seeing that number monthly is what prompts the questions that grow margins, like whether customs and off-platform brand work (with their different economics) deserve more of your hours.</p>

<h2>What you'll actually owe: run the numbers once</h2>
<p>A creator netting $100,000 of profit (after the platform fee and expenses) owes roughly $14,100 in self-employment tax, plus federal income tax that lands somewhere around $13,000 to $17,000 depending on filing status and deductions, plus state income tax in most states. Call it $30,000 to $37,000 all-in. The number isn't the scary part; the scary part is that no one withheld a cent of it, so an unprepared creator meets the whole figure at once in April.</p>
<p>The fix costs nothing: move 25 to 30% of every payout into a separate savings account the day it lands. The money was never yours; moving it immediately just makes that true in your bank accounts instead of only on your tax return.</p>

<h2>Quarterly estimated taxes</h2>
<p>The IRS wants that tax during the year, in estimated payments due April, June, September and January. Skip them and penalties accrue even if you pay in full at filing. The safe harbor makes it manageable: pay 100% of last year's total tax through estimates (110% if prior-year AGI topped $150,000) and you're penalty-proof, even if this year explodes past it. First profitable year, with no prior-year number to anchor on? Estimate from actual quarterly profit, which requires books that can state your quarterly profit, which is rather the theme of this guide.</p>

<h2>Deductions: what holds up and what doesn't</h2>
<p>Creators overpay by missing real deductions, and occasionally torch a return by claiming indefensible ones. The list that survives scrutiny:</p>
<ul>
<li><strong>Content production costs:</strong> cameras, lenses, lighting, microphones, tripods, backdrops, props and set materials. A $2,800 camera is commonly deductible in full the year you buy it under Section 179 or bonus depreciation.</li>
<li><strong>The home studio:</strong> a space used regularly and exclusively for content qualifies for the home office deduction, simplified rate or actual-expense percentage of rent and utilities. The exclusivity part is the test people fail; a corner that's genuinely a set qualifies, your bedroom generally doesn't just because you film there.</li>
<li><strong>Software and subscriptions:</strong> editing tools, scheduling apps, cloud storage, the business share of your phone and internet, documented.</li>
<li><strong>Wardrobe, carefully:</strong> everyday clothing isn't deductible even if worn on camera; that rule is old and firmly settled. Items that are genuinely costumes or unsuitable for street wear, bought for shoots, can qualify. Keep them separate and keep receipts, because this line gets looked at.</li>
<li><strong>Contractors and services:</strong> your editor, photographer, VA or chat manager. Pay any individual $600+ in a year and you owe <em>them</em> a 1099-NEC, which surprises creators who've only ever received one.</li>
<li><strong>Agency and management cuts:</strong> if a manager takes 30% of a $12,000 month, book $12,000 gross and $3,600 of commission expense. Netting it hides income the IRS may see reported at gross.</li>
<li><strong>Health insurance premiums</strong> for self-employed creators, and retirement contributions (a solo 401(k) or SEP-IRA shelters real money at six-figure profits).</li>
</ul>
<p>Documentation is what makes any of this real: business card, business account, receipts captured as they happen. Our free <a href="/money-leak-checklist/">money leak checklist</a> includes the documentation habits that make deductions stick.</p>

<h2>LLC, S-corp, or nothing yet?</h2>
<p>You're a sole proprietor by default the day you earn creator income, and at modest profit that's fine. An LLC changes your taxes not at all by itself, but creators have a reason beyond liability to form one that most businesses don't: <strong>privacy</strong>. An LLC lets business registrations, payment accounts and 1099s carry a business name rather than your legal name, which matters when your legal name is the thing you keep separate from your work.</p>
<p>The S-corp election is the actual tax lever. Once steady profit clears roughly $60,000 to $80,000, electing S-corp status and paying yourself a defensible salary lets profit above the salary escape the 15.3% self-employment tax. A creator with $140,000 of profit and a $70,000 salary saves roughly $9,000 a year net of the added costs (payroll runs, a separate return, state fees). Below the threshold, those costs eat the savings. It's arithmetic, not identity, and it should be run on your real numbers before anything gets filed; that's a thing an <a href="/content-creator-accounting-services/">accountant for content creators</a> does in an afternoon.</p>

<h2>Chargebacks: the revenue that un-happens</h2>
<p>Fans dispute charges, banks side with cardholders, and OnlyFans claws the money back out of your future earnings. Bookkeeping-wise a chargeback is contra-revenue, dated when it happens, in its own account rather than blended into net deposits. Tracked that way, two useful things appear: your true chargeback rate (a spike sometimes traces to one content type or promotion, which is fixable), and clean explanations for why payouts don't match gross earnings in any given month. Untracked, chargebacks just make your income look mysteriously jumpy and your reconciliation impossible.</p>

<h2>Multi-platform creators: OnlyFans plus everything else</h2>
<p>Few creators run OnlyFans alone. Add Fansly, Patreon, YouTube, Twitch, brand deals and affiliate income and you've got half a dozen payers, each with its own fee structure, payout schedule and tax form (or none). Each stream belongs in its own income account, gross, with its platform's fees broken out. That's what makes January reconcilable, and it's also what shows you your real hourly rate per stream, which is the number that should decide where next month's effort goes. The full multi-stream playbook, gifted products and state-tax wrinkles included, is in our <a href="/bookkeeping-tips/content-creator-bookkeeping/">content creator bookkeeping guide</a>, and if you also sell products through TikTok Shop, <a href="/bookkeeping-tips/tiktok-shop-seller-bookkeeping/">that's its own bookkeeping world</a>.</p>

<h2>The mixed-account problem</h2>
<p>The most common state of creator finances we see: everything in one personal checking account, rent next to payouts next to camera gear, with tax season handled by scrolling. Every problem in this guide gets harder in that account, and commingling weakens the business character of everything in it if anyone ever looks. The fix is one errand: open a dedicated business checking account, point Fenix payouts at it, run every business expense through it, and pay yourself by transfer. This single habit does more for creator bookkeeping than any app, and it's also step one toward the privacy separation above.</p>

<h2>Four OnlyFans tax myths that cost creators money</h2>
<p><strong>"OnlyFans doesn't report to the IRS."</strong> It does. Fenix Internet files the 1099-NEC with the IRS, not just with you, and the matching computer compares it against your return automatically. Creators who skip filing because "nobody knows" are usually the easiest mismatch case the IRS processes all year.</p>
<p><strong>"I made under $600, so it's tax-free."</strong> The $600 figure is the form threshold, not a tax exemption. Income is taxable from the first dollar; below $600 you just don't get the paperwork reminder. (You generally must file once self-employment earnings pass $400, because self-employment tax kicks in there.)</p>
<p><strong>"It's just a side thing, so it's a hobby."</strong> Careful what you wish for: hobby classification means the income is still taxable but the expenses aren't deductible. If you create content regularly and try to make money at it, you're a business, and business treatment is what gets you the camera, studio and platform-fee deductions.</p>
<p><strong>"I can write off rent, meals and my whole wardrobe since I'm always in content mode."</strong> The always-on-camera argument has lost in court for decades. Deductions follow the ordinary-and-necessary test plus documentation, and inflated lifestyle write-offs are precisely the pattern that turns a routine return into an examined one. The defensible list above is long enough; use it.</p>

<h2>If you haven't filed for a year (or three)</h2>
<p>This is common in this industry, more common than anyone admits, and it's fixable. The sequence matters: rebuild the books first, then file, because returns filed from guesses tend to overstate tax (missed deductions) or invite scrutiny (numbers that don't tie to the 1099-NECs on file). Rebuilding is mechanical when the records exist, and they do: Fenix payout history, bank statements and platform dashboards cover everything needed to reconstruct gross earnings, fees, chargebacks and expenses for past years. Penalties for late filing are real but they compound with delay, and the IRS is measurably easier on people who show up voluntarily with clean numbers than on people it has to find. We handle the rebuild side as <a href="/catch-up-bookkeeping-services/">catch-up bookkeeping</a> and coordinate the filings with a CPA who has seen creator returns before.</p>

<h2>Why creators need an accountant who won't flinch</h2>
<p>Here's the part nobody puts on their website: OnlyFans creators get refused by accounting firms, dropped by banks and payment processors, and lectured by professionals who happily serve bars and gun shops. The result is predictable: creators running six-figure businesses do their own taxes badly, or trust a friend-of-a-friend, or just don't file, and every one of those paths costs multiples of what professional help would have.</p>
<p>We serve OnlyFans creators as a core client type. That means payout reconciliation net of the 20% fee, chargeback tracking, quarterly estimate math, S-corp timing and the January Fenix tie-out, handled with the same discretion as any engagement, in a QuickBooks file you own. No commentary, no moral audit, no surprise offboarding email. What professional bookkeeping costs across the market is in our <a href="/bookkeeping-tips/how-much-does-ecommerce-bookkeeping-cost/">cost guide</a>; our own <a href="/pricing/">published pricing</a> starts at $149/mo with no annual contract.</p>
<p>If you want proof before commitment, take the free teardown: we rebuild your most recent month properly, fee accounting, chargebacks and all, and send you a 10-minute video of what we found, missed deductions included. <a href="/contact/">Claim it here</a>. You keep everything either way, and nobody will ever make you explain your business.</p>
`,
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

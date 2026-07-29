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
<p>QuickBooks Online Plus runs $115/mo at 2026 list price (<a href="/bookkeeping-tips/quickbooks-online-pricing-ecommerce/">full plan-by-plan breakdown here</a>), A2X about $29–$89/mo, and the average seller spends 5 to 15 hours a month doing the work. At even $30/hour of your time, DIY costs $250 to $600 a month before the error risk. DIY makes sense under roughly $10k/mo in sales. Past that, the math flips fast, because the expensive part of bookkeeping isn't the subscription, it's getting COGS and settlement accounting wrong for a year.</p>

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
<p>The state-by-state details vary more than sellers expect. Washington bills you a <a href="/bookkeeping-tips/washington-sales-tax-ecommerce-guide/">gross-receipts B&amp;O tax even when Amazon collects everything</a>, while Florida ignores your marketplace volume entirely and has <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">a surtax cap most rate calculators miss</a>. If you ship into either state, those two guides are worth ten minutes.</p>

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
<p>And on the balance sheet: 1310 Inventory. Purchases go <em>to the balance sheet first</em>, then move to COGS as units sell. That single discipline separates books a lender trusts from books they don't. If the mechanics behind it are fuzzy, <a href="/bookkeeping-tips/cogs-formula-ecommerce-guide/">our COGS formula guide</a> works through the math with real landed-cost numbers.</p>

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
<li><strong>You need an EIN.</strong> Foreign owners without an SSN get one via the mail/fax route (Form SS-4); <a href="/bookkeeping-tips/ein-tax-id-number-guide-sellers/">our tax ID guide</a> walks through the exact steps. Start early; it takes weeks.</li>
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
  {
    slug: "florida-sales-tax-ecommerce-guide",
    title: "Florida Sales Tax for Ecommerce Sellers (2026 Guide)",
    metaTitle: "Florida Sales Tax for Ecommerce Sellers (2026 Guide)",
    metaDescription:
      "Florida's 6% rate plus county surtaxes, the $100K economic nexus threshold, marketplace rules, FBA warehouse nexus, and how to register without an SSN.",
    date: "2026-07-29",
    readMinutes: 12,
    excerpt: "Florida charges 6% plus a county surtax, makes Amazon collect for you, and sets economic nexus at $100,000 in taxable sales. Here's the whole system, including the parts sellers get wrong.",
    html: `
<p>Florida sales tax is 6% at the state level, plus a county surtax of 0% to 2% depending on where your customer takes delivery. Remote sellers must register once they pass $100,000 in taxable Florida sales in the previous calendar year, and marketplaces like Amazon and Walmart collect on your behalf. That's the system in three sentences. The details underneath are where ecommerce sellers get hurt, so let's walk through all of them.</p>

<h2>The rate: 6% state, plus your customer's county</h2>
<p>The statewide rate is 6%. On top of it, most Florida counties levy a discretionary sales surtax between 0.5% and 1.5% (the law allows up to 2%). Miami-Dade and Broward sit at 7% combined. Several counties charge more, a few charge nothing extra at all, and rates change as county referendums pass and expire. The Florida Department of Revenue publishes the current surtax table as Form DR-15DSS each December; pull the new one every January because counties do move.</p>
<p>For an ecommerce order shipped to a Florida address, you charge the rate of the county where the customer takes delivery. Ship to Jacksonville and Orlando on the same day and you'll collect two different totals on identical carts. Any serious cart or tax engine (Shopify Tax, TaxJar, Avalara) handles this lookup automatically. Spreadsheet-based rate tables don't, and that's the first place DIY sellers drift out of compliance.</p>

<h2>The $5,000 surtax cap almost nobody applies</h2>
<p>Here's a Florida quirk that generic calculators miss: the county surtax only applies to the first $5,000 of a single sale of tangible personal property. Sell a $9,000 item into a 1% surtax county and the surtax applies to $5,000 of it, not all $9,000. The 6% state portion applies to the full price either way.</p>
<p>For sellers of furniture, machinery, watches, collectibles or anything else with big single-item tickets, this cap is real money in your customer's favor, and over-collecting is its own compliance problem: tax collected from a customer must be remitted or refunded, never kept. If your platform can't apply the cap, you need to know which orders it affects.</p>

<h2>Economic nexus: the $100,000 threshold</h2>
<p>Since July 1, 2021, a remote seller with no physical presence in Florida must register and collect once <strong>taxable</strong> sales delivered into Florida exceed $100,000 in the <strong>previous calendar year</strong>. Three details matter more than the headline number:</p>
<ul>
<li><strong>It counts taxable sales, not gross sales.</strong> Exempt sales (groceries, most resale transactions with a valid certificate) don't count toward the threshold.</li>
<li><strong>There's no transaction count.</strong> Unlike states that used a 200-transaction trigger, Florida only looks at dollars. 5,000 small orders totaling $80,000 create no obligation.</li>
<li><strong>Marketplace sales don't count toward your own threshold.</strong> If Amazon sells $300,000 of your product into Florida, that volume belongs to Amazon's collection obligation, not yours. Your threshold is measured on direct sales: your Shopify store, your own site, B2B invoices you ship yourself.</li>
</ul>
<p>That last point is why plenty of seven-figure FBA sellers legitimately have no Florida registration: their direct channel into Florida stays under $100K. Measure it every January, and measure it on taxable direct sales only. If you can't produce that number by channel and by state, your books aren't giving you what a multichannel seller needs; it's one of the first things we build into <a href="/monthly-ecommerce-bookkeeping/">a proper monthly close</a>.</p>

<h2>Marketplace facilitator rules: what Amazon handles, what it doesn't</h2>
<p>Also since July 2021, marketplace facilitators over $100,000 in Florida sales must collect and remit tax on every marketplace order, including yours. Amazon, Walmart, eBay, Etsy and TikTok Shop all do. For marketplace orders into Florida, the tax is genuinely handled.</p>
<p>What stays on your plate:</p>
<ul>
<li><strong>Your direct channel.</strong> Shopify, WooCommerce, BigCommerce, wholesale: if you have nexus, collection is yours.</li>
<li><strong>Reporting hygiene if you're registered.</strong> A registered seller with only marketplace sales still files, reporting the marketplace volume as exempt or excluded per the DR-15 instructions rather than skipping returns. Unfiled returns on an open account generate estimated assessments, which are always wrong in the state's favor.</li>
<li><strong>Your books.</strong> Facilitator-collected tax flows through your settlement reports and can inflate revenue if your bookkeeping posts deposits as sales. The tax belongs in a liability or pass-through account, never in income. It's one of the nine problems in our <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">Amazon bookkeeping guide</a>, and it quietly overstates revenue on every report you'll ever hand a lender.</li>
</ul>

<h2>FBA inventory in Florida: physical nexus</h2>
<p>Amazon operates more than a dozen Florida fulfillment centers (Lakeland, Jacksonville, Ruskin and Ocala among them), and inventory sitting in one of them is a physical presence. Physical nexus has no dollar threshold: one pallet in Lakeland technically creates an obligation from dollar one of your direct sales.</p>
<p>Since Amazon already collects on marketplace orders, FBA nexus matters in practice when you also sell direct. The common trap looks like this: a seller does $60,000 of Shopify sales into Florida, under the economic threshold, and assumes they're fine. But their FBA inventory has been rotating through Ruskin all year, so nexus exists anyway and those Shopify orders needed collection. Check your Inventory Event Detail report in Seller Central; where Amazon stores your goods is a fact, not a choice you made.</p>

<h2>Registering, including without an SSN</h2>
<p>You register with the Florida Department of Revenue on Form DR-1. Online registration is free; the paper route costs $5. You'll get a Certificate of Registration and a resale certificate, and the state assigns your filing frequency.</p>
<p>International sellers: Florida's online application assumes a US identity, but you don't need an SSN to register. A foreign-owned company registers with its EIN using the paper DR-1, and getting that EIN without an SSN is a fax-and-phone process we've mapped in our <a href="/bookkeeping-tips/ein-tax-id-number-guide-sellers/">tax ID guide for sellers</a>. Foreign-owned single-member LLCs should also already be filing Form 5472 federally (<a href="/bookkeeping-tips/form-5472-foreign-owned-llc-guide/">the $25,000-penalty form</a>); if that's news, fix it before the state registrations. Our <a href="/international-sellers/">international sellers practice</a> coordinates the whole stack.</p>
<p>One honest warning: register prospectively, not retroactively, without advice. If you crossed the threshold two years ago, registering today can invite questions about the gap. Florida offers voluntary disclosure with penalty relief for exactly this situation, and it generally beats quietly registering and hoping. Talk to someone first; our <a href="/ecommerce-tax-services/">ecommerce tax services</a> team handles these conversations weekly.</p>

<h2>Filing: frequencies, deadlines and the collection allowance</h2>
<p>Florida assigns filing frequency by how much tax you collect per year:</p>
<table>
<thead><tr><th>Annual tax collected</th><th>Filing frequency</th></tr></thead>
<tbody>
<tr><td>More than $1,000</td><td>Monthly</td></tr>
<tr><td>$501 to $1,000</td><td>Quarterly</td></tr>
<tr><td>$101 to $500</td><td>Semiannual</td></tr>
<tr><td>$100 or less</td><td>Annual</td></tr>
</tbody>
</table>
<p>Returns go in on Form DR-15. They're due the 1st of the month after the period and late after the 20th, and electronic payments must be initiated a business day early to land on time. Sellers who paid $5,000 or more in the prior state fiscal year must file and pay electronically.</p>
<p>Now the pleasant surprise: Florida pays you to file on time. E-file and e-pay punctually and you keep a <strong>collection allowance of 2.5% of the first $1,200 of tax due, up to $30 per return</strong>. It's small, it's free, and it's an easy $360 a year for a monthly filer who simply doesn't miss deadlines. The stick is bigger than the carrot, though: late returns cost 10% of the tax due with a $50 minimum, plus floating interest, and a $50 minimum applies even to a late zero-due return.</p>

<h2>What's changed recently</h2>
<p>Two updates worth knowing in 2026. First, Florida repealed its sales tax on commercial rent effective October 1, 2025. If you lease a warehouse, office or retail space in Florida, that line item (2% at the end) came off your rent bill; make sure your landlord actually removed it. Second, Florida keeps expanding its sales tax holidays (back-to-school, disaster preparedness and others), during which certain products ship tax-free. Your tax engine should handle holidays automatically; manual setups routinely over-collect during them.</p>
<p>And the perennial good news: Florida has no personal state income tax. Your Florida sales tax obligations are about your customers' location, not yours, but sellers relocating to Florida for the income tax picture should know the sales tax side is middle-of-the-road: not as simple as a no-sales-tax state, far simpler than <a href="/bookkeeping-tips/washington-sales-tax-ecommerce-guide/">Washington, where a second tax hides behind the sales tax</a>.</p>

<h2>Is shipping taxable in Florida?</h2>
<p>Sometimes, and the rule is specific enough to get wrong. Shipping charges are exempt when two things are both true: the charge is separately stated on the invoice, and the customer had a real option to avoid it (picking the goods up, arranging their own carrier). If delivery is mandatory, which it is for essentially every ecommerce order, the shipping charge is part of the sales price and taxable at the same rate as the goods.</p>
<p>In practice: that $6.99 shipping line on your Shopify orders into Florida should be collecting tax. "Free shipping" sidesteps the question entirely, since there's no charge to tax, which is one more quiet argument for building shipping into your price. Handling charges follow the same logic. If your cart's Florida tax settings exempt shipping by default, you've been under-collecting, and under-collected tax comes out of your margin, not your customer's pocket.</p>

<h2>Buying inventory tax-free: the resale certificate</h2>
<p>Registration comes with a genuine benefit: the Florida Annual Resale Certificate (DR-13). Hand it to suppliers and you buy inventory for resale without paying sales tax on the purchase. Florida reissues it every year, so calendar the renewal; suppliers will reject last year's certificate.</p>
<p>Two rules keep it clean. Only use it for goods you'll actually resell. Packaging that ships with the product qualifies; your office chair and label printer don't. And when you pull inventory out for personal use, giveaways or influencer seeds, you owe use tax on your cost of those units. It's a small line on the DR-15 that auditors love checking precisely because nobody bothers with it. Your books should already be moving those units out of inventory at cost (that's ordinary <a href="/bookkeeping-tips/cogs-formula-ecommerce-guide/">COGS discipline</a>), so the use-tax number falls out of a report instead of a guess.</p>
<p>Keep exemption certificates from your own wholesale customers with the same seriousness. In a Florida audit, an untaxed B2B sale without a certificate on file becomes your tax, plus penalty, plus interest. Three years of records is the standard audit window; keep five to be comfortable.</p>

<h2>If Florida writes to you first</h2>
<p>Florida's Department of Revenue runs discovery programs, and marketplace data makes them easy: the state knows who ships meaningful volume into Florida. The usual opener is a nexus questionnaire asking about your inventory locations, sales channels and Florida volume. Don't ignore it (that converts a questionnaire into an assessment) and don't answer it casually either, because your answers set the scope of everything after. Answering with settlement-level books behind you is a 30-minute exercise; answering from bank statements is how sellers end up over-conceding nexus they never had. Loop in <a href="/ecommerce-tax-services/">a specialist</a> before you reply, and if registration turns out to be owed, negotiate it through voluntary disclosure rather than the questionnaire when the option still exists.</p>

<h2>Florida sales tax FAQ</h2>
<p><strong>What is the Florida sales tax rate in 2026?</strong> 6% statewide, plus a county surtax of 0% to 2%. Most orders land at 7% or 7.5% combined depending on the delivery county.</p>
<p><strong>Are groceries and clothing taxable in Florida?</strong> Most groceries are exempt; clothing is fully taxable. Florida has no year-round clothing exemption, only the occasional holiday, which trips up apparel sellers who assume it works like Pennsylvania or Minnesota.</p>
<p><strong>Are digital products and SaaS taxable in Florida?</strong> Generally no. Electronically delivered software and digital goods with nothing tangible attached sit outside Florida's sales tax, which makes it one of the friendlier states for digital sellers. Washington takes <a href="/bookkeeping-tips/washington-sales-tax-ecommerce-guide/">exactly the opposite position</a>, so don't generalize from one state to the next.</p>
<p><strong>I only sell through Amazon FBA. Do I need to register in Florida?</strong> If FBA inventory sits in a Florida warehouse, you have physical nexus and technically should register even though Amazon collects the tax on your orders. Many marketplace-only sellers register and file simple returns reporting the facilitator-handled volume; some accept the risk and don't. Know which choice you're making and why, ideally with advice.</p>
<p><strong>Do I charge Florida tax on orders shipped out of Florida?</strong> No. Florida tax applies to Florida deliveries. An order shipped from your Tampa warehouse to Georgia is Georgia's question, not Florida's.</p>

<h2>The bookkeeping that makes all of this easy</h2>
<p>Every Florida obligation above gets answered by the same three numbers: direct taxable sales into Florida by calendar year, marketplace sales into Florida (for reporting, not collecting), and tax collected sitting in a liability account. Books that post settlement-level detail produce those numbers in minutes. Books that post bank deposits as revenue can't produce them at all, which turns a 20-minute DR-15 into an archaeology project, and turns our <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-K reconciliation</a> into guesswork too.</p>
<p>That's the real pitch for doing this right: not fear of an audit, just the fact that clean channel-level books make every state's rules mechanical. If yours can't answer the three questions, our free Ecommerce Books Teardown will show you exactly where the gaps are; <a href="/contact/">request one here</a> and we'll go through your file with you. And if sales tax is the whole headache, <a href="/ecommerce-tax-services/">our tax services page</a> covers how we handle registrations, filings and the bookkeeping underneath them as one job.</p>
`,
  },
  {
    slug: "washington-sales-tax-ecommerce-guide",
    title: "Washington Sales Tax for Ecommerce Sellers (2026 Guide)",
    metaTitle: "Washington Sales Tax for Ecommerce Sellers (2026)",
    metaDescription:
      "Washington's 6.5% rate plus local taxes, destination sourcing, the $100K nexus threshold, and the B&O tax that hits sellers even when Amazon collects everything.",
    date: "2026-07-29",
    readMinutes: 12,
    excerpt: "Washington layers a gross-receipts B&O tax on top of one of the country's highest sales tax rates, and it's owed even on marketplace sales Amazon already handled. Here's the full picture.",
    html: `
<p>Washington sales tax starts at 6.5% and climbs past 10% in much of the Seattle metro once local rates stack on. Remote sellers owe collection once they pass $100,000 in gross Washington sales. And then comes the part almost every out-of-state seller misses: Washington also charges a <strong>business and occupation (B&amp;O) tax</strong> on your gross receipts, and it's your bill even when Amazon collected every cent of the sales tax. Sellers who learn about B&amp;O from a Department of Revenue letter are the rule, not the exception. Let's make sure you're not one of them.</p>

<h2>The rates: 6.5% state, up to 10.6% combined</h2>
<p>The state rate is 6.5%. Cities, counties and transit districts add local rates on top, producing combined rates from about 7.5% in rural areas to 10.35% in Seattle and 10.6% in a few King and Snohomish County cities, among the highest in the country. There is no Washington equivalent of Florida's surtax cap; the full combined rate applies to the whole price.</p>
<p>Washington is strictly <strong>destination-based</strong> for interstate sellers: you charge the rate where the customer takes delivery, down to the specific address, because rates change at city and district lines. The state's Tax Rate Lookup tool (and its free GIS API) resolves any address to the right rate and location code. That location code matters later: your return reports collected tax by code so the state can route the local share, which is why Washington returns are genuinely tedious by hand and why an automated tax engine earns its fee here faster than in most states.</p>

<h2>Shipping is taxable here</h2>
<p>Unlike states with carve-outs for separately stated freight, Washington taxes delivery charges whenever the sale itself is taxable. The $5.99 shipping line on a taxable order into Tacoma gets taxed at Tacoma's full combined rate, separately stated or not. If your cart's Washington settings exempt shipping, you're under-collecting on every order, and the shortfall is yours to absorb. Sales for resale and other exempt sales carry their shipping exemption with them, so wholesale freight stays untaxed.</p>

<h2>Economic nexus: $100,000, measured on gross</h2>
<p>You establish economic nexus once your <strong>cumulative gross receipts</strong> into Washington exceed $100,000 in the current or prior calendar year. Note the word gross: unlike <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">Florida, which counts only taxable sales</a>, Washington counts everything, including marketplace sales, wholesale sales and exempt sales. Amazon doing $90,000 of your Washington volume plus $15,000 through your Shopify store puts you over the line even though your direct channel alone never would.</p>
<p>Washington dropped its old 200-transaction test back in 2019, so dollars are the only trigger. Crossing the threshold obligates you to register, collect sales tax on your direct retail sales, and, this is the trap, pay B&amp;O on the whole gross.</p>

<h2>The B&amp;O tax: the bill nobody expects</h2>
<p>Washington has no corporate or personal income tax. Instead it taxes <strong>gross receipts</strong> through the B&amp;O tax. Not profit. Gross. There are no deductions for inventory cost, ad spend, marketplace fees or anything else, which makes it a fundamentally different animal from income tax: you can lose money and still owe it.</p>
<p>The classifications that matter to sellers:</p>
<table>
<thead><tr><th>Classification</th><th>Rate</th><th>Applies to</th></tr></thead>
<tbody>
<tr><td>Retailing</td><td>0.471%</td><td>Sales to consumers, including your marketplace and direct-channel retail sales</td></tr>
<tr><td>Wholesaling</td><td>0.484%</td><td>Sales for resale, with a reseller permit on file</td></tr>
<tr><td>Service &amp; other activities</td><td>1.5% and up</td><td>Services; 2025 legislation pushed rates higher for larger service businesses</td></tr>
</tbody>
</table>
<p>Run the numbers and B&amp;O is small per dollar: $500,000 of Washington retail sales owes about $2,355 under retailing. What makes it dangerous is that nobody budgets for it, it applies to marketplace sales you thought were "handled," and unfiled periods pile up penalties (up to 29% of the tax) plus interest until the total stops being small. We've seen sellers open a DOR letter covering four years of unreported marketplace gross; none of the individual years hurt, the stack did.</p>
<p>The relief valve: Washington's <strong>small business B&amp;O credit</strong> phases out the tax for low gross volumes, roughly the first $7,000-and-change per month of retailing gross for a monthly filer. Below that, the return still gets filed but the B&amp;O line nets to zero. Above it, you pay. Either way, the obligation to file exists, and "I owed nothing so I didn't file" is not a position the DOR accepts.</p>

<h2>Marketplace sales: Amazon collects the sales tax, you still owe the B&amp;O</h2>
<p>Washington was the first state in the country to force marketplace collection: Amazon has been collecting Washington sales tax on marketplace orders since January 1, 2018, and every major platform followed. So the sales tax on your FBA, Walmart, eBay, Etsy and TikTok Shop orders into Washington genuinely is collected and remitted by the platform.</p>
<p>Here's how it actually flows on your combined excise return, because this is where sellers file wrong:</p>
<ul>
<li><strong>Retailing B&amp;O:</strong> report your full Washington gross, including marketplace sales. This tax is yours; no facilitator pays it for you.</li>
<li><strong>Retail sales tax:</strong> report the same gross, then take the deduction for "retail sales tax collected by facilitator" so you're not remitting tax the platform already remitted. Your direct-channel sales get no such deduction; you collect and remit those yourself.</li>
</ul>
<p>Getting this right requires knowing your Washington gross by channel, which is a bookkeeping question before it's a tax question. Books that post settlement-level detail (the fix for <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">the deposit-as-revenue problem</a>) produce state-by-state gross from a report. Books built on bank deposits can't, and reconstructing Washington gross from two years of settlement CSVs at letter time is exactly as fun as it sounds. The same discipline is what keeps your federal numbers tied to <a href="/bookkeeping-tips/amazon-1099-k-explained/">the 1099-K</a>, so it pays for itself twice.</p>

<h2>FBA inventory in Washington</h2>
<p>Amazon's home state is dense with fulfillment centers (Kent, Sumner, DuPont, Spokane and more), and inventory in any of them is physical presence, with no dollar threshold attached. The practical consequence mirrors the economic-nexus one: register, pay B&amp;O on your Washington gross, and collect on direct sales from dollar one. If FBA has been placing your inventory in Washington for years and you've never registered, don't just quietly start filing; Washington runs a voluntary disclosure program that limits lookback to four years and waives the 29% penalty, and it's the better door to walk through. That's a conversation for <a href="/ecommerce-tax-services/">our tax services team</a> before it's a form.</p>

<h2>Registering, including without an SSN</h2>
<p>Registration is a Business License Application with the Department of Revenue (about $90, one time), which issues your UBI number and opens your excise tax account. You'll declare your estimated volume, and the DOR assigns a filing frequency from it.</p>
<p>International sellers can register: the application accepts an EIN in place of an SSN, and a foreign entity without any US tax ID should get the EIN first via the fax-and-phone route in <a href="/bookkeeping-tips/ein-tax-id-number-guide-sellers/">our tax ID guide</a>. Expect the process to take a few weeks end to end. If you're a foreign-owned LLC, keep the federal side in view too; Washington registrations have a way of surfacing during the diligence our <a href="/international-sellers/">international sellers page</a> describes, usually right next to a missed Form 5472.</p>
<p>Physical presence works the old-fashioned ways too, not just through FBA racks. An employee working from a Spokane home office, a rep who visits Washington retail buyers, inventory at a Kent 3PL, even regular trade-show selling in Seattle can each establish nexus on their own, threshold or no threshold. Remote teams make this one sneaky: plenty of sellers acquired Washington nexus the day a customer-service hire moved to Vancouver, and found out two years later. Keep a simple state-by-state list of where your people, inventory and property sit, and revisit it when anything moves.</p>
<p>Registered businesses also get a <strong>reseller permit</strong>, Washington's version of a resale certificate, so you can buy inventory tax-free for resale. Unlike most states, the DOR issues it (you apply, they can decline), and it renews on a two-or-four-year cycle. Use tax applies when you pull inventory for personal use or promo giveaways, same as everywhere.</p>

<h2>Filing: the combined excise tax return</h2>
<p>Washington bundles sales tax and B&amp;O into one <strong>combined excise tax return</strong>, filed through MyDOR. Frequencies and due dates:</p>
<table>
<thead><tr><th>Frequency</th><th>Due date</th></tr></thead>
<tbody>
<tr><td>Monthly</td><td>25th of the following month</td></tr>
<tr><td>Quarterly</td><td>Last day of the month after the quarter ends</td></tr>
<tr><td>Annual</td><td>April 15</td></tr>
</tbody>
</table>
<p>The DOR assigns your frequency based on estimated tax and adjusts it as your volume changes. Returns are due even for zero-activity periods once the account is open; skipping "nothing happened" periods is the most common way small sellers rack up late-filing penalties on tax they never owed. E-filing is required, and the return wants that by-location-code breakdown of collected tax, which your tax engine or settlement-level books should be producing for you.</p>
<p>One more small levy for completeness: Washington's litter tax (0.015%) applies to sellers of certain product categories like food, beverages and toiletries. It's pocket change, it lives on the same return, and knowing it exists is most of the work.</p>
<p>Keep your support records five years: settlement reports, the by-state sales detail behind each return, reseller permits from wholesale customers, and the location-code breakdowns. Washington's standard audit window is four years plus the current year, and DOR audits are famously data-driven; they'll ask for your marketplace reports and run the math themselves. An audit where your filed numbers regenerate from your books in an afternoon ends quickly. The other kind doesn't.</p>

<h2>A worked example: what a typical seller actually owes</h2>
<p>Say you're a Texas-based brand doing $900,000 a year nationally: $70,000 of Washington marketplace sales through Amazon and $15,000 direct through Shopify, so $85,000 of Washington gross this year, but $102,000 last year. Last year's number put you over the threshold, so you're in the system. Here's the annual damage:</p>
<ul>
<li><strong>Sales tax on marketplace orders:</strong> $0 out of pocket. Amazon collected and remitted it.</li>
<li><strong>Sales tax on the $15,000 of Shopify orders:</strong> collected from customers at each delivery address, roughly $1,400 at typical combined rates, remitted on your returns. Cost to you if you collected properly: nothing. Cost if your cart wasn't set up: the full $1,400 out of margin.</li>
<li><strong>Retailing B&amp;O on $85,000 gross:</strong> about $400 before the small business credit, likely less after it.</li>
<li><strong>The filing itself:</strong> four quarterly combined excise returns, maybe an hour each with clean books.</li>
</ul>
<p>Total real cost: a few hundred dollars and a few hours, <em>if</em> handled on time. The same facts discovered by the DOR after three silent years: back B&amp;O, uncollected direct-channel sales tax you now eat yourself, penalties near 29%, and interest. Washington compliance is cheap; Washington non-compliance compounds.</p>

<h2>Washington sales tax FAQ</h2>
<p><strong>What is the sales tax rate in Seattle?</strong> 10.35% combined as of 2026: the 6.5% state rate plus Seattle-area local rates. A few nearby cities run 10.6%.</p>
<p><strong>Are digital products taxable in Washington?</strong> Yes, broadly. Washington taxes digital products, streamed and downloaded goods, and much of what other states leave alone, and its 2025 legislation extended retail sales tax deeper into services (advertising, IT and others). Digital and hybrid sellers should assume taxable until proven otherwise, the reverse of <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">Florida's posture</a>.</p>
<p><strong>Is the B&amp;O tax deductible on my federal return?</strong> Yes. State gross-receipts taxes are an ordinary business expense, deductible like any other. It softens the sting a little; it doesn't excuse not filing.</p>
<p><strong>I sell only through Amazon. Do I really owe Washington anything?</strong> If you're over the $100,000 gross threshold or have FBA inventory in the state: yes, retailing B&amp;O on your Washington marketplace gross, filed on the combined excise return, even though Amazon remitted all the sales tax. This is the single most common Washington surprise for out-of-state sellers.</p>
<p><strong>Are groceries taxable in Washington?</strong> Most food and food ingredients are exempt, but prepared foods, soft drinks and dietary supplements are taxable. Supplement sellers take note: your product is taxable here even though it feels like "food."</p>

<h2>Washington vs Florida: a tale of two audits</h2>
<p>Put this guide next to <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">our Florida guide</a> and the contrast is instructive. Florida measures only your direct taxable sales, ignores marketplace volume for your threshold, and even pays you a small allowance for filing on time. Washington measures gross everything, keeps a second tax running underneath the one the platforms handle, and wants the paperwork regardless of whether money is due. Neither is hard once your books produce channel-level, state-level gross on demand. Both are miserable without that, which is the actual lesson: multistate sales tax is a reporting problem wearing a tax costume.</p>

<h2>Getting it handled</h2>
<p>If you're past $100K into Washington, the to-do list is short: register, set your direct channels to collect at destination rates, report marketplace gross under retailing B&amp;O with the facilitator deduction, and file on your assigned cycle. If there are unfiled years behind you, voluntary disclosure first. And if your books can't tell you your Washington gross by channel in five minutes, that's the root problem: it's the kind of gap our free Ecommerce Books Teardown catches immediately (<a href="/contact/">request one here</a>), and fixing it is the first week of <a href="/monthly-ecommerce-bookkeeping/">a proper monthly bookkeeping engagement</a>. State tax filings, including combined excise returns, are part of <a href="/ecommerce-tax-services/">our ecommerce tax services</a>; the books and the returns are one job done right, not two done separately.</p>
`,
  },
  {
    slug: "quickbooks-online-pricing-ecommerce",
    title: "QuickBooks Online Pricing 2026: What Ecommerce Sellers Actually Need",
    metaTitle: "QuickBooks Online Pricing 2026 for Ecommerce Sellers",
    metaDescription:
      "Every QuickBooks Online plan's 2026 price, why most sellers need Plus, the hidden costs (payroll, A2X, annual hikes), and when Advanced is a waste of $275.",
    date: "2026-07-29",
    readMinutes: 11,
    excerpt: "Plus at $115/mo is the right plan for almost every seller, Advanced is usually $160/mo of features you won't open, and the subscription is the smallest line in your real QuickBooks budget.",
    html: `
<p>Short version: QuickBooks Online costs $38 to $275 a month at 2026 list prices, most ecommerce sellers need the <strong>Plus plan at $115/mo</strong>, and the subscription itself is the smallest line in your real QuickBooks budget once payroll, connector apps and setup enter the picture. Here's every number, what actually matters for a seller, and where the money hides.</p>

<h2>Do you need QuickBooks at all yet?</h2>
<p>Honest answer: not on day one. A seller doing a couple thousand a month with one channel can run on a disciplined spreadsheet and a separate business bank account, and many should, because software recording wrong numbers is worse than a simple sheet recording right ones. The crossover comes fast, though: a second channel, the first 1099-K, an inventory order big enough to matter, or the moment you want monthly margins you'd act on. Past roughly $10,000 a month in sales, the spreadsheet stops being a system and starts being a liability, and that's when the plan question below becomes worth twenty minutes of your attention.</p>

<h2>QuickBooks Online pricing in 2026</h2>
<p>Current US list prices, per month:</p>
<table>
<thead><tr><th>Plan</th><th>Price/mo</th><th>Users</th><th>The one-line verdict for sellers</th></tr></thead>
<tbody>
<tr><td>Solopreneur</td><td>$25</td><td>1</td><td>Not real double-entry books; skip it</td></tr>
<tr><td>Simple Start</td><td>$38</td><td>1</td><td>Workable for a brand-new, single-channel side hustle</td></tr>
<tr><td>Essentials</td><td>$75</td><td>3</td><td>Adds bills and multicurrency, still no channel tracking</td></tr>
<tr><td>Plus</td><td>$115</td><td>5</td><td>The seller plan: classes, locations, inventory, budgets</td></tr>
<tr><td>Advanced</td><td>$275</td><td>25</td><td>Overkill until you're a finance team, not a founder</td></tr>
</tbody>
</table>
<p>Intuit usually offers 50% off for the first three months <em>or</em> a 30-day free trial, not both. Take the discount, not the trial: you'll spend the first month setting up either way, and the discount is worth about $172 on Plus. Prices are per company file, so a second brand in its own LLC means a second subscription, full price. Multi-brand operators sometimes try to dodge that by running two businesses in one file with classes; don't. Separate legal entities need separate files, or you've built commingled books that no lender, buyer or tax preparer will enjoy untangling.</p>
<p>One more number worth knowing: the trajectory. Plus was $90 in 2023, $99 in 2024, and $115 now. Intuit raises prices roughly annually, a point or two above inflation, and grandfathering is temporary. Budget for the line to creep.</p>

<h2>Why Plus is the plan for almost every seller</h2>
<p>The feature that decides it is <strong>class and location tracking</strong>, which only exists from Plus up. Classes are how a multichannel seller gets a per-channel P&amp;L out of QuickBooks: tag transactions Amazon, Shopify, eBay or Walmart, and you can finally answer "which channel actually makes money after fees and ads?" Without classes you get one blended P&amp;L, which is how sellers spend a year scaling a channel that loses money on every order. Our <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">ecommerce chart of accounts guide</a> shows the full structure classes plug into.</p>
<p>Plus also brings inventory tracking, purchase orders and budgets. Honest note on the inventory feature: sellers running A2X or Link My Books usually post summary journal entries and track inventory outside QuickBooks (or in a dedicated tool like Cin7), because QBO's native inventory can't handle FBA's reality of multi-warehouse stock, removals and reimbursements. You still want Plus, for the classes, the budgets and the headroom; just don't expect the built-in inventory module to run an FBA operation. The COGS math it's supposed to automate is worth understanding yourself either way; <a href="/bookkeeping-tips/cogs-formula-ecommerce-guide/">our COGS formula guide</a> covers it with worked numbers.</p>

<h2>When the cheaper plans are enough</h2>
<p><strong>Simple Start ($38)</strong> holds up for a single-channel seller doing a few thousand a month who wants clean books and nothing else: one bank feed, an A2X connection, basic reports. You'll outgrow it at the moment you add a second channel or want to see margins by anything.</p>
<p><strong>Essentials ($75)</strong> earns its extra $37 in exactly two situations: you need to track and schedule supplier bills (real accounts payable, not just paying on receipt), or you need multicurrency because you sell on Amazon Canada or UK and want those settlements in native currency. If neither applies, Essentials is a strange middle child: too much for a starter, still no classes. Sellers who need multicurrency plus channel tracking need both Essentials' and Plus's features, which means Plus, since it includes everything downstream.</p>
<p><strong>Solopreneur ($25)</strong> deserves its own warning. It's the renamed Self-Employed product: no balance sheet, no real chart of accounts, no path to upgrade your data into a proper QBO file. For anyone holding inventory it can't do the one thing your books exist to do, which is track it. The $13/mo you save versus Simple Start will cost you a full re-setup later.</p>

<h2>When Advanced is worth $275, and when it's $160 of shelf-ware</h2>
<p>Advanced is Plus with higher limits and finance-team features: 25 users, custom roles and permissions, workflow automation, batch transactions, revenue recognition schedules, automated backups, priority support and Intuit's analytics layer. Genuinely useful, at the right scale.</p>
<p>The honest trigger points for upgrading are the <strong>usage limits</strong>, not the features. Plus caps you at 40 combined classes and locations, 250 accounts in your chart, and 5 users. A seller running 6 channels with sub-brands, three warehouses and a bookkeeper, a controller and two staff hits those walls; that's who Advanced is for. A founder-run brand doing even $5M through three channels usually sits nowhere near them. If you're upgrading for "better reporting," know that the reporting you actually want (channel contribution margin, real COGS, cash runway) comes from how the file is built and closed, not from the analytics tab. We keep eight-figure brands on Plus with no strain; the plan is rarely the constraint.</p>

<h2>The hidden costs: where the real money goes</h2>
<p>The subscription is a third or less of what QuickBooks actually costs a working seller. The rest:</p>
<ul>
<li><strong>Payroll.</strong> QuickBooks Payroll starts around $50/mo plus $6 per employee for Core, and roughly doubles for Premium. Two founders on payroll (hello, S-corp) is about $62/mo before Premium features. It's also where Intuit's bundle discounts quietly expire a year in; check the renewal price, not the promo.</li>
<li><strong>QuickBooks Payments.</strong> Card rates run roughly 3% on invoiced and keyed transactions, 1% on ACH. Most ecommerce money never touches it (your platforms and gateways already processed the payment), so ignore the cross-sell unless you invoice wholesale customers, where 1% ACH is actually reasonable.</li>
<li><strong>The connector you can't skip.</strong> A2X runs about $29 to $89/mo for most sellers (more at high order volume), Link My Books somewhat less. This is the non-negotiable one: without settlement-level posting, marketplace deposits land as revenue and you inherit <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">the whole problem list</a>, including books that can't survive a 1099-K match.</li>
<li><strong>Inventory software, if you need it.</strong> Cin7, Finale and friends start around $99/mo and climb fast. Only multi-warehouse, multi-channel operations need them; a single-channel FBA brand can run on spreadsheets plus discipline for a long time.</li>
<li><strong>The person driving.</strong> Software categorizes; it doesn't reconcile settlements, value inventory or close months. DIY costs your hours, and <a href="/bookkeeping-tips/how-much-does-ecommerce-bookkeeping-cost/">specialist bookkeeping costs real money</a>. Either way it dwarfs the subscription, which is why picking a plan to save $40 while your COGS is wrong is optimizing the wrong line.</li>
</ul>
<p>A realistic all-in stack for a two-channel, seven-figure seller doing it themselves: Plus $115 + A2X $69 + payroll $62 = about $246/mo before anyone touches the books. That's the number to compare against outsourcing, not $115. (Our own rate card is <a href="/pricing/">published here</a>, software included in every plan, if you want the comparison.)</p>

<h2>QuickBooks Online vs Xero on price</h2>
<p>Xero's US plans run $20 (Early), $47 (Growing) and $80 (Established), so the honest comparison, Xero Growing at $47 versus QBO Plus at $115, looks like a $68/mo win for Xero. Read the fine print first: Early caps invoices and bills to a handful a month (it's a trial pretending to be a tier), and Xero's tracking categories, its answer to classes, allow only two active categories versus enough class headroom on Plus for channels, brands and warehouses at once. Xero counters with unlimited users on every plan, versus five on Plus.</p>
<p>Our take after running hundreds of seller files on both: pick based on your accountant and your integrations, not the $68. Both connect to A2X, both produce clean accrual books in skilled hands, and a well-built file in either beats a default file in the other by a mile. We work in both (<a href="/quickbooks-for-ecommerce/">QuickBooks setup</a>, <a href="/xero-for-ecommerce/">Xero for ecommerce</a>), and multicurrency-heavy international sellers sometimes fit Xero a bit better, US-centric marketplace sellers QBO.</p>

<h2>How to actually pay less for QuickBooks</h2>
<p>Four legitimate levers, in order of value:</p>
<ul>
<li><strong>Buy it through your accountant.</strong> Firms carry wholesale billing that discounts subscriptions for the life of the engagement, not just three months. If you're paying retail while also paying a bookkeeper, ask why. (Software is included in <a href="/pricing/">our plans</a>; the subscription line disappears entirely.)</li>
<li><strong>Take the 50% promo, skip the trial.</strong> Worth about $172 on Plus over three months, and you'll be mid-setup for most of a trial anyway.</li>
<li><strong>Audit the add-ons annually.</strong> The typical seller file we inherit carries at least one zombie subscription: a payroll module for a company with no employees, an apps stack with two tools doing one job, Payments enabled and unused. Intuit doesn't call to suggest you downgrade.</li>
<li><strong>Don't over-plan.</strong> Advanced "to be safe" is $1,920 a year of safety you can buy later with one click. Upgrades are instant; there's no penalty for starting at Plus.</li>
</ul>
<p>The lever that isn't worth it: hunting resold licenses or regional pricing tricks. Files end up in billing limbo, and moving a company file out of a mismanaged subscription is a support-ticket saga you don't want attached to your books.</p>

<h2>What about QuickBooks Desktop?</h2>
<p>Functionally over for new buyers: Intuit stopped selling most Desktop products to new US subscribers in 2024, and the remaining Enterprise line starts north of $140/mo on subscription. If you're an existing Desktop holdout, the migration decision has been made for you; the only question is timing. The good news for sellers is that the ecommerce tooling (A2X, Link My Books, every cart integration) is built cloud-first anyway, so QBO is where you'd want to be regardless of Intuit's roadmap.</p>

<h2>Sales tax inside QuickBooks: know what it is and isn't</h2>
<p>QBO's automated sales tax calculates rates on invoices you create inside QuickBooks. It does not calculate, collect or file tax for your Shopify or marketplace orders; your channels do the collecting, and QuickBooks just needs to record collected tax as a liability rather than income. Sellers who buy a plan expecting it to "handle sales tax" are expecting the wrong product. What handles multistate complexity is your cart's tax engine plus correct bookkeeping, and for the state-side rules themselves, start with our <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">Florida</a> and <a href="/bookkeeping-tips/washington-sales-tax-ecommerce-guide/">Washington</a> guides to see how different two states can be.</p>

<h2>QuickBooks Online pricing FAQ</h2>
<p><strong>How much is QuickBooks Online per month?</strong> $38 (Simple Start), $75 (Essentials), $115 (Plus) or $275 (Advanced) at 2026 US list prices, before promotional discounts.</p>
<p><strong>Is there a free version of QuickBooks?</strong> No. There's a 30-day trial, and Intuit offers discounted subscriptions through accounting firms (ask your bookkeeper; ours come with the engagement). Free alternatives like Wave exist but lack class tracking and the connector ecosystem sellers depend on, so the savings tend to be repaid later as migration work.</p>
<p><strong>Can I downgrade plans later?</strong> Upgrades are one click. Downgrades are possible but constrained: if you've used features the lower plan lacks (classes, inventory items, extra users), you'll have to unwind them first. Practical translation: start at Plus if you know you'll need it within six months; start lower only if you genuinely might stay small.</p>
<p><strong>Which QuickBooks plan do I need for Amazon FBA?</strong> Plus, in almost every case: classes for channel P&amp;L and headroom for the accounts a real seller file needs. Pair it with a settlement connector or you'll have expensive software recording wrong numbers.</p>
<p><strong>Does QuickBooks track inventory for FBA?</strong> Not well. QBO's inventory module assumes you control the warehouse; FBA's removals, reimbursements, multi-warehouse splits and lost units break its assumptions. Track quantities in Seller Central or dedicated software, value inventory monthly in the books, and use QBO for what it's good at: the ledger.</p>

<h2>The cost that dwarfs all of it: a badly set up file</h2>
<p>Whatever plan you buy, QuickBooks arrives as an empty shell with a generic chart of accounts, and a default file records an ecommerce business wrong: deposits as revenue, fees invisible, no COGS discipline, sales tax in income. Twelve months of that costs more to unwind (<a href="/bookkeeping-tips/how-much-does-ecommerce-bookkeeping-cost/">catch-up projects are quoted flat, and they're not small</a>) than a decade of the price difference between plans.</p>
<p>So spend the money in this order: correct plan (usually Plus), settlement connector, proper chart of accounts, monthly close discipline. The first is $115; the other three are where books become an asset. Our <a href="/quickbooks-for-ecommerce/">QuickBooks for ecommerce service</a> covers setup through monthly close, in your file, which you keep if you ever leave. Not sure what state your current file is in? The free Ecommerce Books Teardown will tell you plainly; <a href="/contact/">request one here</a> and bring your ugliest month.</p>
`,
  },
  {
    slug: "cogs-formula-ecommerce-guide",
    title: "COGS Formula for Ecommerce: Calculate It Right (With Examples)",
    metaTitle: "COGS Formula for Ecommerce (With Worked Examples)",
    metaDescription:
      "The COGS formula with worked marketplace examples: landed cost, tariffs, periodic vs perpetual, the errors that wreck seller margins, and per-SKU math.",
    date: "2026-07-29",
    readMinutes: 11,
    excerpt: "Beginning inventory plus purchases minus ending inventory. Four words each, and most sellers still get it wrong, because the hard part is what goes into 'purchases' and when. Worked examples inside.",
    html: `
<p>The COGS formula is: <strong>beginning inventory + purchases during the period − ending inventory = cost of goods sold</strong>. That's the whole thing. What you paid for the units you actually sold this period, no more, no less. The formula takes ten seconds to learn; the reasons seller margins are still wrong live in the three inputs, so this guide works through each one with real numbers, including landed cost, tariffs, and the per-SKU math that tells you whether a product deserves to exist.</p>

<h2>Why the formula exists at all</h2>
<p>Because what you <em>bought</em> this period and what you <em>sold</em> this period are different things. Buy $60,000 of inventory in March and sell a third of it, and your March cost isn't $60,000; it's the cost of the units that went out the door. The rest is an asset sitting on your balance sheet, waiting.</p>
<p>The formula backs into that number by counting what's left. Start with what you had, add what you bought, subtract what remains: whatever's missing must have been sold (or lost, more on that later). This is the matching principle doing its job: revenue from a unit and the cost of that unit land in the same month, so your margin means something. Break the matching and every monthly P&amp;L you produce is fiction; buy-month profits crater, sell-month profits soar, and neither is true.</p>

<h2>Worked example 1: a quarter of FBA sales</h2>
<p>A seller runs one product line. On April 1, inventory on hand cost $42,000. During Q2 they received two POs totaling $55,000 in landed inventory. On June 30, a count (well, FBA inventory reports plus the 3PL's numbers) shows $38,500 of inventory remaining at cost.</p>
<table>
<thead><tr><th>Input</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Beginning inventory (Apr 1)</td><td>$42,000</td></tr>
<tr><td>+ Purchases (landed, received in Q2)</td><td>$55,000</td></tr>
<tr><td>− Ending inventory (Jun 30)</td><td>$38,500</td></tr>
<tr><td><strong>= COGS for Q2</strong></td><td><strong>$58,500</strong></td></tr>
</tbody>
</table>
<p>Against $150,000 of gross Q2 sales, that's a 39% product cost, a 61% gross margin before fees and ads. Notice what made the calculation possible: a real beginning number, purchases recorded at landed cost when <em>received</em> (not when paid for), and an actual ending count. Miss any one and the output is a guess wearing a percent sign.</p>

<h2>Landed cost: what belongs in "purchases"</h2>
<p>The most common ecommerce COGS error isn't the formula, it's feeding it factory price alone. Your true unit cost is <strong>landed cost</strong>: everything it took to get the unit to sellable condition at your warehouse or the FBA dock.</p>
<ul>
<li><strong>Factory/supplier price</strong> (after any volume discounts actually received)</li>
<li><strong>Inbound freight</strong>: ocean or air, port fees, drayage, and inbound placement or freight to FBA</li>
<li><strong>Duties and tariffs</strong>: at 2026 tariff levels on Chinese goods this is often the second-largest component, not a rounding error</li>
<li><strong>Customs brokerage and inspection fees</strong></li>
<li><strong>Prep and packaging</strong>: polybagging, labeling, kitting, inserts that ship with the product</li>
</ul>
<p>What stays out: selling fees, storage fees, outbound shipping to customers, and advertising. Those are real costs, but they're selling expenses, not product cost; mixing them into COGS makes your gross margin useless as a product-pricing signal. (Where each belongs in your ledger is exactly what <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">our ecommerce chart of accounts</a> lays out account by account.)</p>

<h2>Worked example 2: landed cost with a tariff, down to per-SKU margin</h2>
<p>You order 2,000 units of a kitchen gadget at $6.50 FOB. Ocean freight and drayage run $2,400. The goods carry a 30% combined tariff rate, applied to the $13,000 customs value: $3,900. Brokerage is $250, and FBA prep adds $0.35 a unit ($700).</p>
<table>
<thead><tr><th>Component</th><th>Total</th><th>Per unit</th></tr></thead>
<tbody>
<tr><td>Factory cost (2,000 × $6.50)</td><td>$13,000</td><td>$6.50</td></tr>
<tr><td>Freight + drayage</td><td>$2,400</td><td>$1.20</td></tr>
<tr><td>Tariff (30% of customs value)</td><td>$3,900</td><td>$1.95</td></tr>
<tr><td>Brokerage</td><td>$250</td><td>$0.13</td></tr>
<tr><td>Prep</td><td>$700</td><td>$0.35</td></tr>
<tr><td><strong>Landed cost</strong></td><td><strong>$20,250</strong></td><td><strong>$10.13</strong></td></tr>
</tbody>
</table>
<p>The "$6.50 product" costs $10.13, a 56% difference. Now finish the job, because landed cost is only half of per-SKU truth. Selling at $29.99 on Amazon: referral fee $4.50 (15%), FBA fulfillment $6.10, and say $2.40 of ad spend per unit sold. Contribution: $29.99 − $10.13 − $4.50 − $6.10 − $2.40 = <strong>$6.86 a unit</strong>, about 23% of price. The seller who prices off the $6.50 thinks they're making $19 a unit and can't figure out where the bank balance went. Run this table for every SKU quarterly; it's the single highest-value spreadsheet in ecommerce, and it's the margin math behind our <a href="/money-leak-checklist/">money leak checklist</a>.</p>
<p>Tariff note: tariffs are part of inventory cost, capitalized and expensed as units sell, not a lump expense in the month the container lands. Expensing a $3,900 tariff hit in receipt month understates that month's profit and overstates the next several. At current tariff rates this error is big enough to distort quarterly results all by itself, and it's one of the first adjustments <a href="/bookkeeping-tips/quality-of-earnings-report-guide/">a quality of earnings analyst</a> makes when a buyer looks at your books.</p>

<h2>Periodic vs perpetual: two ways to run the formula</h2>
<p><strong>Periodic</strong> is the formula as written: count inventory at period end, back into COGS. It's simple and it's what most sellers under a few million in revenue actually run, with "counts" assembled from FBA inventory reports, 3PL records and a warehouse walk. Its weakness: COGS only exists when you count, and everything missing gets labeled "sold," including what was actually lost or stolen.</p>
<p><strong>Perpetual</strong> updates inventory and COGS on every sale: each order posts revenue and simultaneously moves that unit's cost from inventory to COGS. This is what inventory software (Cin7, Finale) or a well-configured A2X-plus-costs setup approximates. You get real-time margins and month-end closes without a full count, and physical counts become a verification step that surfaces shrinkage as its own line instead of hiding it in COGS.</p>
<p>Practical guidance: run periodic honestly (monthly, from reports, consistently) until SKU count and channel count make it painful, then graduate. A monthly periodic calculation done well beats a perpetual system fed garbage costs. What you can't do is neither, which is the December-only-count regime most DIY files are secretly running; it produces one true COGS number a year and eleven months of noise. A real <a href="/monthly-ecommerce-bookkeeping/">monthly close</a> does this arithmetic every month, which is most of the reason monthly financials from a specialist are believable and year-end reconstructions aren't.</p>

<h2>FIFO, weighted average, and why your costs need a method</h2>
<p>When you buy the same SKU at different prices (and with tariffs moving, you do), which cost leaves inventory when a unit sells? <strong>FIFO</strong> assumes oldest units sell first, so current inventory carries recent costs. <strong>Weighted average</strong> blends all purchases into one per-unit cost that updates with each receipt; it's what most inventory software defaults to and it smooths out purchase-price swings. LIFO exists, requires IRS commitment, and almost no ecommerce seller should touch it. Pick one, use it consistently, and don't switch because this quarter's answer looks better; consistency is half of what makes the number auditable.</p>
<p>A quick illustration of why it matters: you hold 500 units bought at $9.40 and receive 1,000 more at $11.20 after a tariff bump. Sell 800 units this month. FIFO charges $7,760 to COGS (500 at $9.40, 300 at $11.20); weighted average charges $8,480 (800 at the blended $10.60). Same units, same cash spent, a $720 difference in this month's reported profit, all of it timing. Neither is wrong. Flip-flopping between them is.</p>
<p>One bookkeeping housekeeping rule ties the whole formula together: this period's beginning inventory must equal last period's ending inventory, always. If someone "adjusts" an opening balance to make a month look right, every COGS number after it inherits the lie. When beginning and ending don't chain cleanly across months, that's the first thing to fix, and it's usually the fingerprint of books kept on a cash basis being massaged toward accrual once a year.</p>

<h2>The errors that wreck seller COGS</h2>
<ul>
<li><strong>Expensing inventory when purchased.</strong> The big one. Cash-basis "COGS" makes buy months look terrible and sell months look great, and it's the first thing lenders and buyers reject. Purchases go to the balance sheet; the formula moves them to COGS as units sell.</li>
<li><strong>Factory price as unit cost.</strong> As example 2 showed, that's a 30 to 60% understatement of true cost in the tariff era.</li>
<li><strong>Ignoring returns.</strong> A resellable return goes back into inventory at cost, reversing its COGS. A destroyed return stays in COGS (and belongs in your margin math as a defect cost). Netting refunds against revenue while leaving COGS alone double-hits your margin.</li>
<li><strong>Amazon reimbursements booked as revenue.</strong> When Amazon loses your inventory and pays you, that offsets inventory at cost; booking it as sales overstates revenue and leaves ghost units in your counts. One of the nine classics in <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">our Amazon bookkeeping problems guide</a>.</li>
<li><strong>Shrinkage hiding inside COGS.</strong> Under periodic, lost and stolen units silently inflate COGS. Break shrinkage into its own account when counts reveal it; a 2% shrink trend is an operations problem you can't fix if you can't see it.</li>
<li><strong>Samples and giveaways left in inventory.</strong> Units pulled for influencers, photos or personal use come out of inventory at cost, to marketing or draws, not COGS. (They can also trigger use tax; see <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">our Florida guide</a> for how states treat withdrawn inventory.)</li>
</ul>

<h2>The monthly COGS entry, step by step</h2>
<p>Here's the actual mechanical routine, for the periodic method most sellers run. Once a month, after the channels are reconciled:</p>
<ul>
<li><strong>1. Value ending inventory.</strong> Pull FBA inventory (units by SKU) from Seller Central, your 3PL's stock report, and your own warehouse count. Multiply units by landed cost per SKU. Say it totals $71,200.</li>
<li><strong>2. Check the inventory account's book balance.</strong> Beginning balance plus the month's capitalized purchases. Say the books show $79,300.</li>
<li><strong>3. Post the adjustment.</strong> The $8,100 difference is what left inventory: debit COGS $8,100, credit Inventory $8,100. If counts show some of it wasn't sold but lost, split the debit between COGS and shrinkage.</li>
<li><strong>4. Sanity-check the margin.</strong> COGS divided by the month's gross sales should sit near your expected blended product cost. A month that swings from 38% to 51% with no pricing change means a missed PO, a bad count, or units valued at factory instead of landed cost. Investigate before closing, not at year end.</li>
</ul>
<p>Fifteen minutes with good inputs. The inputs are the job: per-SKU landed costs maintained as containers arrive, and purchases capitalized instead of expensed. That routine, run every month without fail, is a core piece of <a href="/monthly-ecommerce-bookkeeping/">our monthly close</a>, and it's why our clients' margin trends are worth reading.</p>

<h2>COGS for resellers: sourcing without invoices</h2>
<p>Thrift, arbitrage and liquidation sellers run the same formula with a messier "purchases" input: garage-sale cash buys, estate lots, pallets bought sight unseen. The rules don't change, but the discipline does. Every sourcing trip needs a record (date, place, amount, what was bought), cash withdrawals need to map to purchases, and lot buys need a cost allocation across the units that came out of the pallet, usually in proportion to expected resale value. A $400 pallet that yields 30 sellable units at wildly different price points shouldn't carry $13.33 per unit; allocate by value and your per-item margins stop lying. The full tax picture for that business model is in <a href="/bookkeeping-tips/reseller-taxes-bookkeeping-guide/">our reseller taxes guide</a>, and it's the daily bread of our <a href="/reseller-bookkeeping-services/">reseller bookkeeping service</a>.</p>

<h2>COGS formula FAQ</h2>
<p><strong>Is COGS an expense?</strong> Functionally yes: it reduces income on the P&amp;L. It's presented as its own section above operating expenses because gross profit (revenue minus COGS) is the number that tells you whether the products themselves work before overhead enters the picture.</p>
<p><strong>Does COGS include shipping?</strong> Inbound shipping (freight to you or to FBA), yes, it's part of landed cost. Outbound shipping to customers, no, that's a fulfillment expense. The direction of the truck decides.</p>
<p><strong>Are Amazon fees part of COGS?</strong> No. Referral and FBA fees are selling expenses. Some sellers track a separate "cost per unit sold including fees" for pricing decisions, which is useful management math, but keep it out of the COGS line in your books.</p>
<p><strong>Can COGS be higher than revenue?</strong> Yes, and it means you sold below cost: liquidation, clearance, or a pricing mistake. A month of negative gross margin on a SKU is information; a year of it unnoticed is a bookkeeping failure.</p>
<p><strong>What's a good gross margin for ecommerce?</strong> After true landed COGS: private-label DTC brands typically want 65% or better, marketplace-first brands often run 40% to 60%, and resale and arbitrage models live lower and win on turns. If your "gross margin" is 80%, check whether freight and tariffs actually made it into your unit costs before celebrating.</p>

<h2>COGS and your taxes</h2>
<p>COGS is a deduction against revenue, which makes it the largest single number on most sellers' returns and the one the IRS expects you to support with inventory records. Inflating it by deducting unsold inventory purchases is both wrong and self-defeating (you're borrowing next year's deduction, badly). The Schedule C and 1120 both walk through the formula explicitly: beginning inventory, purchases, ending inventory. If your books already run the formula monthly, tax season is copying numbers; the wider tax picture for marketplace sellers is in <a href="/bookkeeping-tips/amazon-seller-taxes-guide/">our Amazon seller taxes guide</a>.</p>

<h2>Getting the machinery built</h2>
<p>Everything above is arithmetic once three pieces of machinery exist: purchases recorded at landed cost, an inventory asset account that's reconciled to reality monthly (with <a href="/quickbooks-for-ecommerce/">QuickBooks configured to support it</a>), and a consistent costing method. Building that machinery, then running it every month, is the core of what we do; it's included in <a href="/pricing/">every plan on our rate card</a>. If you'd like to know whether your current COGS number is close to true, the free Ecommerce Books Teardown answers exactly that, with your own numbers; <a href="/contact/">request one here</a>.</p>
`,
  },
  {
    slug: "ein-tax-id-number-guide-sellers",
    title: "Tax ID Numbers for Ecommerce Sellers: EIN, ITIN, SSN Explained",
    metaTitle: "EIN, ITIN or SSN? Tax ID Numbers for Ecommerce Sellers",
    metaDescription:
      "Which tax ID your ecommerce business needs and when: EIN vs ITIN vs SSN, getting an EIN without an SSN, marketplace tax interviews, and sole prop vs LLC.",
    date: "2026-07-29",
    readMinutes: 11,
    excerpt: "A US sole prop can sell on their SSN, an LLC almost always wants an EIN, and international sellers can get an EIN with no SSN at all. Here's every tax ID, who needs which, and the exact steps.",
    html: `
<p>Here's the answer most sellers are looking for: a US sole proprietor can legally sell using just their SSN, an LLC or corporation should get an <strong>EIN</strong> (free, from the IRS, in minutes if you have an SSN), and an international seller can get an EIN with <strong>no SSN and no ITIN</strong> through a fax-and-phone process that costs nothing but patience. The ITIN, which people constantly confuse with a business tax ID, is a personal number most sellers never need. Now the details, because the details are where marketplaces suspend accounts and the IRS sends letters.</p>

<h2>The three numbers, in one table</h2>
<table>
<thead><tr><th>Number</th><th>What it is</th><th>Who it identifies</th><th>How you get it</th></tr></thead>
<tbody>
<tr><td>SSN</td><td>Social Security number</td><td>A US citizen or authorized resident, personally</td><td>Social Security Administration</td></tr>
<tr><td>EIN</td><td>Employer Identification Number</td><td>A business entity (or a sole prop who requests one)</td><td>IRS, free, Form SS-4 or online</td></tr>
<tr><td>ITIN</td><td>Individual Taxpayer Identification Number</td><td>A person who must file US taxes but can't get an SSN</td><td>IRS, Form W-7 with identity documents</td></tr>
</tbody>
</table>
<p>All three are TINs (taxpayer identification numbers), which is the umbrella term tax forms use. When Amazon's tax interview asks for your TIN, it's asking for whichever of these applies to you, and matching the right number to the right situation is the entire game.</p>

<h2>Which one your business actually needs</h2>
<p><strong>US sole proprietor, no employees:</strong> your SSN is legally sufficient. Get an EIN anyway. It's free, takes ten minutes, and means your SSN stops appearing on every W-9 you hand a supplier, wholesale customer or platform. Identity theft aside, an EIN is required the moment you hire an employee, and having one already makes wholesale applications and business banking smoother.</p>
<p><strong>Single-member LLC (US owner):</strong> the IRS treats it as a disregarded entity, so taxes flow to your personal return either way. But banks require an EIN to open the business account that keeps your liability protection meaningful, and payroll requires one. In practice, every LLC should have its own EIN from day one.</p>
<p><strong>Multi-member LLC, partnership, S-corp or C-corp:</strong> an EIN is mandatory, full stop. These entities file their own returns and can't do it on anyone's SSN.</p>
<p><strong>Foreign-owned single-member LLC:</strong> an EIN is mandatory even with zero employees and zero US tax owed, because the LLC must file Form 5472 annually, and the 5472 requires an EIN. Missing that filing costs $25,000 per year; <a href="/bookkeeping-tips/form-5472-foreign-owned-llc-guide/">our Form 5472 guide</a> covers the whole obligation. If you formed a Wyoming or Delaware LLC from abroad and nobody mentioned the 5472, put this paragraph at the top of your list.</p>

<h2>Getting an EIN with an SSN: ten minutes, zero dollars</h2>
<p>The IRS online EIN application (weekdays, roughly 7am to 10pm Eastern) issues the number instantly. You'll name a <strong>responsible party</strong>, the human who controls the entity, and that person's SSN or ITIN goes on the application. Two rules trip people: the responsible party must be an individual, not another company, and the IRS issues only one EIN per responsible party per day, which matters if you're spinning up multiple LLCs.</p>
<p>And it is <strong>free</strong>. The formation mills charging $75 to $300 for "EIN filing service" are charging you to type your own answers into a free government form. The only people with a legitimate reason to pay for help are foreign owners navigating the no-SSN route, and even that is doable solo.</p>

<h2>Getting an EIN without an SSN: the international route</h2>
<p>No SSN, no ITIN, no US address: you can still get an EIN, directly from the IRS. The online tool won't work for you (it demands an SSN or ITIN), so the path is Form SS-4 by fax or phone:</p>
<ul>
<li><strong>Fill out Form SS-4</strong> for the entity. On line 7b, where it asks for the responsible party's SSN or ITIN, write "Foreign". That's the officially sanctioned move, not a trick.</li>
<li><strong>Fax it</strong> to the IRS's international EIN unit (the current fax number is on the SS-4 instructions). Faxed applications with a return fax number typically come back in roughly a week or two; mail takes a month or more.</li>
<li><strong>Or phone it in:</strong> international applicants can call the IRS international EIN line (also listed in the SS-4 instructions; it's a Pennsylvania number, +1 267 941 1099, not toll-free) and receive the EIN during the call. Have the completed SS-4 in front of you; the agent walks through it line by line. Budget for hold time and US business hours.</li>
</ul>
<p>Total cost: a fax and a phone call. The "EIN for foreigners, $250" services are filling out this same form; some are competent, some file wrong entity types, and none are necessary. Once the EIN exists, it unlocks the rest of the stack: the marketplace tax interview, a US business bank account, and state registrations like <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">Florida's paper DR-1</a> or <a href="/bookkeeping-tips/washington-sales-tax-ecommerce-guide/">Washington's business license</a>, both of which accept an EIN in place of an SSN. Setting up this whole sequence for non-US sellers is the daily work of our <a href="/international-sellers/">international sellers practice</a>.</p>

<h2>The ITIN: probably not needed, occasionally essential</h2>
<p>The ITIN gets oversold to international sellers as a must-have. It isn't. You do not need an ITIN to get an EIN, form an LLC, open many business bank accounts, or pass a marketplace tax interview as a foreign person (that's a W-8BEN, no US TIN required in most treaty situations, though providing your home-country TIN gets you treaty rates).</p>
<p>When you genuinely need one: you personally must file a US return, most commonly a 1040-NR because your LLC's activity created US-taxable income, or you're claiming treaty benefits that require a US TIN on a withholding form. Then it's Form W-7, filed with a return, with certified identity documents, and six to ten weeks of waiting. The order matters: EIN first (fast, unlocks business operations), ITIN later if and only if a filing requires it. A good advisor decides the "if"; whether a foreign seller's marketplace income is US-taxable at all is a real analysis, not a checkbox, and it's covered in <a href="/bookkeeping-tips/amazon-seller-taxes-guide/">our Amazon seller taxes guide</a>.</p>

<h2>Marketplace tax interviews: where the wrong number gets expensive</h2>
<p>Every platform (Amazon, Walmart, eBay, Etsy, TikTok Shop, PayPal, Stripe) makes you complete a tax interview so they can file information returns. US persons complete a W-9; foreign persons a W-8BEN or W-8BEN-E. Three failure modes we see constantly:</p>
<ul>
<li><strong>Name/TIN mismatch.</strong> The platform runs your name and TIN against IRS records. A single-member LLC that enters the LLC's name with the owner's SSN (or the owner's name with the LLC's EIN) fails matching. The rule for a disregarded LLC on a W-9: the <em>owner's</em> name on line 1, the LLC name on line 2, and either the owner's SSN or the LLC's EIN works, but the name on line 1 has to match whichever number you give. Fail matching twice and platforms start <strong>24% backup withholding</strong> or freeze payouts.</li>
<li><strong>Foreign owner completing a W-9.</strong> A foreign person who forms a US LLC is still a foreign person; a single-member US LLC with a foreign owner generally certifies foreign status (W-8BEN through to the owner), not a W-9. Getting this wrong misstates your status to the IRS, in writing.</li>
<li><strong>Stale interviews after restructuring.</strong> Sole prop in 2023, LLC in 2024, S-corp election in 2026, and the marketplace still reports under your SSN. Now your <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-K</a> lands on the wrong taxpayer and your returns don't reconcile. Redo the tax interview the same week the entity changes.</li>
</ul>

<p>One number serves every platform, by the way. Sellers sometimes ask whether Walmart or TikTok Shop needs "its own" EIN: no. One entity, one EIN, entered identically in every tax interview. What multiplies is the interviews themselves, and keeping them consistent is the point; five platforms reporting the same TIN with the same name is what makes your <a href="/bookkeeping-tips/amazon-seller-taxes-guide/">annual tax filing</a> reconcile in one pass instead of five.</p>

<h2>Sole prop vs LLC: what changes for your tax IDs</h2>
<p>Forming an LLC doesn't change your income tax (a single-member LLC is disregarded; profit still lands on your Schedule C), but it does reshuffle your identifiers. The LLC gets its own EIN. The bank account moves to the LLC's name and EIN. The marketplace tax interview gets redone. Your suppliers get new W-9s. And if you later elect S-corp status, the LLC needs its own EIN regardless of what you used before, because it's now filing its own return, plus payroll accounts, because you're now an employee of your own company.</p>
<p>Two more transitions with EIN consequences: a sole prop who incorporates needs a new EIN (the corporation is a new taxpayer), and a single-member LLC that adds a member becomes a partnership, also a new-EIN event. The EIN follows the taxpayer, not the brand name.</p>

<h2>Don't confuse federal IDs with state ones</h2>
<p>The EIN is federal. States issue their own registrations on top: sales tax permits (like <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">Florida's</a> and <a href="/bookkeeping-tips/washington-sales-tax-ecommerce-guide/">Washington's</a>), state withholding accounts once you run payroll, and state entity registrations. "I have an EIN" and "I'm registered to collect sales tax in the states where I have nexus" are entirely different sentences, and sellers regularly have the first while assuming it covers the second. It doesn't; state registration is its own project, and it's part of what <a href="/ecommerce-tax-services/">our ecommerce tax services</a> handle.</p>

<h2>The order of operations for a new seller</h2>
<p>Sequencing saves weeks. For a US founder: form the LLC, get the EIN online the same day (the LLC must exist first; the application asks for its legal name and formation state), open the bank account with the formation documents and EIN letter, then complete the marketplace tax interview with the new entity before the first sale settles. Done in that order, it's a one-week project and every 1099-K ever issued lands on the right taxpayer.</p>
<p>For an international founder the same chain runs longer, so start earlier: LLC formation (a few days), EIN by fax or phone (one to three weeks), bank or fintech account (days to weeks, and the EIN letter is the gating document), then the tax interview, then state registrations as nexus develops. Two months of calendar time is a realistic budget, and the EIN sits on the critical path for everything. The classic mistake is launching on a personal account "temporarily" while the paperwork catches up; six months later the books hold a tangle of personal and business activity that costs real money to unpick, and the platform is still reporting under the wrong identity.</p>

<h2>Keeping the EIN's paperwork straight afterward</h2>
<p>The IRS mails a CP 575 confirmation letter when it issues your EIN. Scan it and keep it forever; banks, wholesale suppliers and platforms ask for it, and the IRS never reissues it. Lose it and the replacement is a 147C verification letter, requested by phone, which takes a call and patience but works. Two ongoing duties come with the number: if your responsible party changes (a partner buys you out, ownership transfers), Form 8822-B is due within 60 days, and if the business address changes, the same form updates it. Neither is hard; both are the kind of thing that surfaces as a problem years later when IRS mail goes to an apartment you left in 2024.</p>
<p>What doesn't require a new EIN, despite persistent internet folklore: moving states, changing your DBA or brand name, adding a new sales channel, or switching banks. The EIN tracks the taxpayer. As long as the entity and its tax classification are the same, the number rides along.</p>

<h2>Tax ID FAQ for sellers</h2>
<p><strong>How long does it take to get an EIN?</strong> Minutes online with an SSN or ITIN. Without one: same-day by phone if you get through, a week or two by fax, a month-plus by mail.</p>
<p><strong>Does an EIN cost anything?</strong> No. The IRS charges nothing, ever. Anyone charging you is charging for typing.</p>
<p><strong>Can I sell on Amazon without an SSN?</strong> Yes. Foreign sellers complete the tax interview with a W-8BEN, no US TIN required in most cases, and a US LLC owned by a foreign person runs on an EIN obtained without any SSN.</p>
<p><strong>Is an EIN the same as a business license or a sales tax permit?</strong> No on both. The EIN is federal identification; licenses and sales tax permits are state and local registrations you obtain separately, where your operations require them.</p>
<p><strong>Do I need an ITIN to open a US bank account?</strong> Usually not for a business account: banks and fintechs generally want the LLC's formation documents, the EIN letter and your passport. Requirements vary by institution, which is why this step is worth asking about before you pick a bank.</p>

<h2>The 15-minute checkup</h2>
<p>Pull up three things: your marketplace tax interview, your bank account title, and last year's 1099-Ks. All three should show the same name and the same TIN, and that pair should match your current entity. If they don't agree, you've found this year's cleanup project, and it's dramatically cheaper to fix before the IRS's matching computers or a platform's compliance team find it first. Whether you're a US reseller who leveled up from <a href="/bookkeeping-tips/reseller-taxes-bookkeeping-guide/">hobby to business</a> or an international founder with a Delaware LLC and a compliance stack you inherited from a YouTube video, we'll look at the whole picture in a free Ecommerce Books Teardown; <a href="/contact/">request one here</a>.</p>
`,
  },
  {
    slug: "tariff-accounting-ecommerce-guide",
    title: "Tariff Accounting for Ecommerce Sellers: The 2026 Guide",
    metaTitle: "Tariff Accounting for Ecommerce Sellers (2026 Guide)",
    metaDescription:
      "How to account for tariff costs: capitalizing duties into inventory under ASC 330, landed cost per SKU by country of origin, booking tariff refunds, and the repricing math.",
    date: "2026-07-30",
    readMinutes: 12,
    excerpt: "Duties are inventory cost, not a shipping expense. Here's the accounting that keeps margins honest when tariffs move: landed cost per SKU, refund booking, repricing math and a cash plan for duty payments.",
    html: `
<p>Import duties are part of your inventory cost. Under ASC 330 they get capitalized into the value of the goods you bought, sit on the balance sheet until those units sell, and hit your P&amp;L through cost of goods sold. They're not a shipping expense, not an "other cost," and not a lump you can dump into whatever month you happened to pay Customs. That one rule, applied consistently, is the difference between books that show what tariffs did to your margins and books that just show a scary freight number.</p>
<p>In 2026 the difference is real money. Duty rates that sat at 3% for a decade now run 10% to 30%-plus depending on product and country, the $800 de minimis exemption that let small direct-import parcels skip duty entirely is gone as of August 2025, and every importer we work with is paying Customs more this year than in any prior year of their business. Here's the full accounting picture: capitalize vs expense, landed cost per SKU, refunds, repricing math, and the cash plan for duty payments.</p>

<h2>Capitalize or expense? ASC 330 already answered it</h2>
<p>Accounting standards treat inventory cost as everything "directly or indirectly incurred in bringing an article to its existing condition and location." Duties qualify on the plainest reading: the goods legally can't reach your warehouse without them. So do inbound freight, brokerage fees, and merchandise processing fees. All of it belongs in inventory, then flows to COGS as units sell.</p>
<p>Watch what happens when a seller expenses duties instead. Say you land a container in March with $40,000 of duty on it, and the goods sell evenly over the next five months. Expensed, March shows a $40,000 hit against sales that mostly haven't happened yet: margins crater, and the owner spends a week hunting for a problem that doesn't exist. April through August then show margins several points better than reality, because those months sell duty-loaded inventory that carries no duty cost on paper. Every month is wrong. The year total is right, which is exactly why the error survives: the tax return looks fine while every operating decision made off monthly numbers gets made on fiction.</p>
<p>Capitalized, the same $40,000 rides with the units. March margin is normal. Each sale from that container carries its true cost. Your gross margin line finally answers the question you're actually asking: are we still making money on this product at the new duty rate?</p>

<h2>Why lenders and buyers check this line first</h2>
<p>Diligence teams learned fast that tariffs are where 2025-era books lie. A <a href="/bookkeeping-tips/quality-of-earnings-report-guide/">quality of earnings analyst</a> looking at an importer now tests duty treatment almost immediately, for two reasons. First, expensed tariffs make monthly margins volatile, and volatile margins get discounted or rebuilt on the buyer's assumptions rather than yours. Second, expensing duties understates the inventory number on your balance sheet, which understates working capital, and the working capital peg moves purchase price dollar for dollar.</p>
<p>Lenders run the same check from the other direction. An inventory-backed line of credit advances against inventory value; if your $500,000 of inventory is really $560,000 once duties are capitalized properly, you've been leaving borrowing capacity on the table. And if it's booked at $560,000 without support, expect the field exam to haircut it. Either way, the seller with per-SKU landed costs and a consistent capitalization policy gets believed, and belief is what both lenders and buyers are pricing.</p>
<p>Doing this properly generally requires accrual books with a real inventory asset, which is its own project if you're on cash basis today. Our <a href="/bookkeeping-tips/cash-to-accrual-conversion-guide/">cash to accrual conversion guide</a> walks through that step by step.</p>

<h2>The tax side: Section 263A and the small-seller exemption</h2>
<p>Tax law mostly agrees with GAAP here. Section 263A (the uniform capitalization rules) requires resellers to capitalize duties and inbound freight into inventory for tax purposes. There's a small-business exemption for taxpayers under roughly $31 million in average annual gross receipts (the threshold adjusts for inflation), which covers most sellers reading this. But exemption from UNICAP doesn't mean "expense whatever you like": if you account for inventory at all, duties that attach to specific goods belong in the cost of those goods, and the IRS's book-conformity rules for small taxpayers point your tax treatment back at your books anyway.</p>
<p>The practical takeaway: capitalize duties in your books, let the tax treatment follow, and stop maintaining two theories of what your inventory cost. Your CPA will thank you, and so will whoever eventually reads the file.</p>

<h2>Landed cost per SKU, by country of origin</h2>
<p>Landed cost accounting is the operational half of this. The formula per unit:</p>
<p><strong>Landed cost = supplier unit price + allocated inbound freight + duty (HTS rate x customs value) + brokerage and entry fees, divided down to the unit.</strong></p>
<p>Country of origin is now the biggest swing in that formula, which means the same SKU can carry two different landed costs in the same warehouse. Here's a real-shaped example for a kitchen gadget with an $8.00 FOB price:</p>
<table>
<thead><tr><th>Cost component</th><th>Sourced from China</th><th>Sourced from Vietnam</th></tr></thead>
<tbody>
<tr><td>Supplier unit price (FOB)</td><td>$8.00</td><td>$8.60</td></tr>
<tr><td>Duty (rate x customs value)</td><td>$2.40 (30%)</td><td>$0.86 (10%)</td></tr>
<tr><td>Freight + brokerage per unit</td><td>$0.95</td><td>$1.10</td></tr>
<tr><td><strong>Landed cost per unit</strong></td><td><strong>$11.35</strong></td><td><strong>$10.56</strong></td></tr>
</tbody>
</table>
<p>The Vietnam supplier quotes 7.5% higher and still wins by 79 cents a unit. You cannot see that from supplier invoices, and you can't see it from a books file where duty sits in one undifferentiated expense account. Sourcing decisions in 2026 are landed-cost decisions, full stop.</p>
<p>Track it at the SKU-and-origin level: when you receive a shipment, allocate the entry's total duty and freight across the units on it (by value for duty, by weight or cubes for freight), and record that batch's landed cost. Inventory software handles this natively; a disciplined spreadsheet handles it fine at smaller scale. What doesn't handle it is nothing, which is the most common system we see. The mechanics of turning landed cost into monthly COGS are in our <a href="/bookkeeping-tips/cogs-formula-ecommerce-guide/">COGS formula guide</a>.</p>

<h2>Where tariffs live in your chart of accounts</h2>
<p>Two accounts do the work. On the balance sheet, inventory (1310 in <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">our chart of accounts template</a>) holds capitalized duty as part of item cost. In COGS, an account like 5020 Inbound Freight &amp; Duties receives the duty portion as goods sell, so you can watch duty as a percent of COGS trend over time instead of losing it inside blended product cost.</p>
<p>A workable monthly routine for sellers without inventory software: post duty payments to inventory when paid, then release them to 5020 in proportion to units sold from the affected receipts. It's one journal entry a month once the landed-cost sheet exists. Crude allocation beats no allocation by a mile; the sin isn't imprecision, it's expensing on payment date.</p>

<h2>Accounting for tariff refunds</h2>
<p>Tariff refunds went from an obscure topic to a live one, because sellers now have three ways money comes back from Customs:</p>
<ul>
<li><strong>Duty drawback.</strong> Export goods you imported (or destroy them under supervision) and you can recover 99% of the duty paid. For ecommerce that mostly means international sales fulfilled from US inventory and returns you re-export. Claims can reach back years, and at 2026 duty rates the math that wasn't worth the paperwork at 3% often is at 25%.</li>
<li><strong>Corrections and protests.</strong> Misclassified HTS codes and overstated customs values get fixed through post-summary corrections (available for roughly 300 days after entry) or protests (180 days after liquidation). Classification reviews are finding real money this year; a two-point rate difference on a year of imports adds up.</li>
<li><strong>Litigation outcomes.</strong> Court challenges to specific tariff programs have periodically produced refunds for importers who paid under them and preserved their rights. Whether that applies to you is a customs-counsel question, not a bookkeeping one, but the accounting below still governs the day a check arrives.</li>
</ul>
<p>How to book a refund: it is not revenue. If the related units are still in inventory, reduce inventory (the goods now cost less). If they've sold, credit COGS in the period the refund becomes both probable and reasonably estimable, which for most sellers means when the claim is approved, not when it's filed. Don't book hoped-for refunds early; accounting treats contingent gains with a raised eyebrow, and so does every diligence analyst. Booked as revenue instead, a refund inflates your top line and overstates the very margin problem the tariff created, so the books lie twice.</p>
<p>The prerequisite for every refund path is the same paper trail: entry summaries tied to receipts tied to per-SKU landed costs. Sellers who kept that trail file drawback claims from a report. Sellers who didn't pay a consultant to reconstruct it for a cut of the recovery.</p>

<h2>The repricing math: what a tariff actually does to your price</h2>
<p>Now the decision the accounting exists to support. Take that China-sourced gadget: landed cost went from $8.95 pre-tariff to $11.35, a $2.40 increase. It sells for $24.99 on Amazon with a 15% referral fee and $6.50 of fulfillment cost. The temptation is to raise price by $2.40. That's wrong, because every added dollar of price gives 15 cents back to the marketplace.</p>
<p>To recover a $2.40 cost increase through price, divide by one minus the fee percentage: $2.40 / 0.85 = <strong>$2.82</strong>. New price $27.81, call it $27.99. Check the margins: before, $24.99 brought $3.79 of contribution after referral fee, fulfillment and landed cost. At $27.99 with the tariffed cost, contribution lands within a few cents of the same dollar figure. Your margin <em>percentage</em> still falls (same dollars on a bigger price), which matters if you steer by percentages, and your conversion rate at $27.99 is a real question the accounting can't answer. But at least you're deciding with the true numbers instead of discovering the gap at year end.</p>
<p>Run this SKU by SKU, not storewide. Products from low-tariff origins may need no change, and a blanket 10% price increase quietly donates margin on some SKUs while under-recovering on the ones that got hit. That per-SKU visibility is the entire payoff of landed cost accounting, and skipping the price response is one of the leaks our <a href="/money-leak-checklist/">money leak checklist</a> makes sellers check for a reason.</p>

<h2>Cash-flow planning for duty payments</h2>
<p>Here's the part the P&amp;L hides: capitalized or not, duty is cash out the door months before the related revenue shows up. Duties are generally due within about ten days of entry, or consolidated to the following month if you're on a periodic monthly statement with your broker. A $60,000 container at a 25% rate means writing a $15,000 check while the goods are still on a truck to the warehouse, weeks before a single unit sells and longer before the marketplace pays out.</p>
<p>Plan it like the real liability it is:</p>
<ul>
<li><strong>Build a duty calendar from your PO schedule.</strong> Each planned shipment's estimated duty (customs value x current rate) goes on the cash forecast at its expected entry date. When rates move, the forecast moves with the next PO, not the next surprise.</li>
<li><strong>Get on a periodic monthly statement</strong> if you're not; consolidating entries to one payment date simplifies both cash timing and reconciliation.</li>
<li><strong>Price deferral options against your cost of cash.</strong> Bonded warehouses and foreign-trade zones defer duty until goods leave the facility, which converts a lump at entry into payments matched to sell-through. The fees only pencil at meaningful volume, but at 25% rates they pencil far sooner than they used to.</li>
<li><strong>Hold a duty reserve.</strong> A seller importing $80,000 a month at blended 20% needs roughly $16,000 of monthly cash earmarked before ads, payroll or draws. Sellers who skip this end up funding Customs on a credit card at 24% interest, which is a worse tariff.</li>
</ul>

<h2>What to do this quarter</h2>
<p>The list is short. Get duties out of your expense accounts and into inventory with a consistent policy. Build the per-SKU, per-origin landed cost sheet, then reprice the SKUs the math says to reprice. Pull your last twelve months of entry summaries and look for drawback and classification money. Put next quarter's duty on the cash forecast.</p>
<p>If your books currently show tariffs as one growing lump in a freight account, that's fixable, and it's the kind of thing our free Books Teardown catches in the first pass; <a href="/contact/">request one here</a> and we'll show you what your real margins look like with duty where it belongs. Landed cost tracking and duty-aware COGS are standard in <a href="/monthly-ecommerce-bookkeeping/">our monthly bookkeeping plans</a>, and if lost import paperwork is part of the story, that's what <a href="/catch-up-bookkeeping-services/">a catch-up project</a> is for. Tariffs are expensive enough without your books making them look worse than they are.</p>
`,
  },
  {
    slug: "cash-to-accrual-conversion-guide",
    title: "Cash to Accrual Conversion: Step-by-Step for Ecommerce",
    metaTitle: "Cash to Accrual Conversion for Ecommerce (Step-by-Step)",
    metaDescription:
      "How to convert cash basis books to accrual: AR, AP, inventory and deferred revenue adjustments with a worked example, IRS Form 3115 basics, and the dual-track option.",
    date: "2026-07-30",
    readMinutes: 11,
    excerpt: "Lenders and buyers won't take cash-basis books seriously, and for an inventory business they're right not to. Here's the conversion, adjustment by adjustment, with real numbers.",
    html: `
<p>Cash to accrual conversion means restating your books so revenue is recorded when earned and costs when incurred, instead of when money moved. For an ecommerce business the work comes down to five adjustments: accounts receivable, accounts payable, inventory, deferred revenue, and prepaids. None of them is hard individually. Done together and carried forward consistently, they turn a cash ledger into financial statements a lender, buyer or broker will actually rely on.</p>
<p>And that's usually why sellers show up asking. Nobody converts for fun; they convert because a broker said "we can't list you without 24 months of accrual financials," or a lender's underwriter bounced the package, or a buyer's diligence team started rebuilding the numbers themselves. Better to do it on your schedule than theirs.</p>

<h2>Why cash basis fails an inventory business</h2>
<p>Cash books record inventory purchases as expenses when paid. So the month you buy a container, profit collapses; the months you sell it down, profit looks fantastic. A seller stocking up in September for Q4 shows a disastrous September and a heroic November, when the underlying business did nothing of the kind. Cost of goods "goes up and down like a seesaw," as one broker we work with puts it, and nobody can compute your real margin from it, including you.</p>
<p>Accrual fixes the timing on both sides. Sales count when the order is earned (not when Amazon deposits two weeks later), and inventory cost counts when units sell (not when you paid the supplier). The result is a margin line that means something, month after month. That's the property every outside reader is checking for, and it's also how you catch your own problems: a real margin slide in March looks exactly like a purchase-timing artifact on cash books, and only one of them deserves a panic. A <a href="/bookkeeping-tips/quality-of-earnings-report-guide/">quality of earnings analyst</a> lists cash-basis books among the top reasons ecommerce deals reprice, and brokers routinely won't take an inventory business to market without the conversion done.</p>

<h2>The five adjustments, in order</h2>
<p><strong>1. Accounts receivable (and settlements in transit).</strong> Find money you've earned but not received at the conversion date. For marketplace sellers this is mostly the settlement pipeline: orders shipped whose payout hasn't landed, plus reserves Amazon is holding. Book it as a receivable and as revenue. A seller with a two-week Amazon settlement cycle typically has one to two weeks of sales sitting here at any month end, which is not a small number.</p>
<p><strong>2. Accounts payable.</strong> The mirror image: bills for goods and services received but unpaid. Supplier invoices on terms, the freight bill that arrived yesterday, the December ad spend Meta will charge in January. Book the liability and the expense (or inventory, for goods) now.</p>
<p><strong>3. Inventory.</strong> The big one for ecommerce, and the one that moves profit the most. Count or value what you own at the conversion date, including goods in transit you've paid for and stock sitting at FBA and 3PLs, valued at landed cost (product plus freight plus duties, per <a href="/bookkeeping-tips/tariff-accounting-ecommerce-guide/">our tariff accounting guide</a>). That value comes off expenses and onto the balance sheet as an asset. From then on, purchases go to inventory first and move to COGS as units sell, using the <a href="/bookkeeping-tips/cogs-formula-ecommerce-guide/">standard COGS formula</a>.</p>
<p><strong>4. Deferred revenue.</strong> Money received for things you haven't delivered: gift cards outstanding, preorders, subscription boxes paid in advance. Cash books call this revenue; accrual calls it a liability until you ship. Most sellers have a little of this. Some (preorder-heavy brands, subscription businesses) have a lot, and it's the adjustment buyers check hardest because it's literally revenue you'd be selling them twice.</p>
<p><strong>5. Prepaids and accruals.</strong> The annual software subscription you paid in January covers twelve months, so eleven of them are an asset at the end of month one. Insurance, annual marketplace fees, and retainers work the same way. On the flip side, accrue expenses you've incurred but haven't been billed for. This adjustment is smaller than the others and still worth doing; it's what makes month twelve comparable to month one.</p>

<h2>A worked example with real numbers</h2>
<p>Meet a Shopify-plus-Amazon seller closing 2025 on cash basis, converting as of December 31. Cash books show: deposits of $610,000, inventory purchases expensed of $310,000, other expenses of $255,000, for a reported profit of $45,000.</p>
<table>
<thead><tr><th>Adjustment</th><th>Amount</th><th>Effect on profit</th></tr></thead>
<tbody>
<tr><td>Settlements in transit + reserves at Dec 31</td><td>$24,000 receivable</td><td>+$24,000</td></tr>
<tr><td>Prior-year equivalent already collected in January</td><td>$16,000</td><td>-$16,000</td></tr>
<tr><td>Ending inventory on hand at landed cost</td><td>$95,000 asset</td><td>+$95,000</td></tr>
<tr><td>Beginning inventory (Jan 1, 2025)</td><td>$60,000</td><td>-$60,000</td></tr>
<tr><td>Unpaid supplier and freight invoices at Dec 31</td><td>$22,000 payable</td><td>-$22,000</td></tr>
<tr><td>Gift cards sold, not yet redeemed</td><td>$4,000 liability</td><td>-$4,000</td></tr>
<tr><td>Prepaid annual software (11 months remaining)</td><td>$3,300 asset</td><td>+$3,300</td></tr>
</tbody>
</table>
<p>Accrual profit: $45,000 + $24,000 - $16,000 + $95,000 - $60,000 - $22,000 - $4,000 + $3,300 = <strong>$65,300</strong>. This seller was more profitable than their cash books admitted, by 45%, mostly because they'd been stocking inventory ahead of growth and expensing it. At a typical 3.5x SDE multiple, that reporting difference is worth roughly $70,000 of purchase price. It cuts the other way too: a seller drawing down inventory shows the opposite swing, and finding that out during diligence instead of before is how deals die.</p>
<p>One more step makes the statements marketplace-grade: replace deposit-based revenue with gross sales, fees and refunds from settlement reports, so your top line ties to the 1099-K instead of the bank feed. That's the same fix behind <a href="/bookkeeping-tips/amazon-1099-k-explained/">the 1099-K mismatch problem</a> and most of <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">the classic Amazon bookkeeping failures</a>, and there's no point converting to accrual while leaving net deposits masquerading as revenue.</p>

<h2>Form 3115: the tax side of switching</h2>
<p>Changing your books doesn't require IRS permission. Changing your <em>tax accounting method</em> does, and that's Form 3115, Application in Change in Accounting Method. The good news: the overall cash-to-accrual change qualifies as an automatic change, meaning no user fee and no advance approval; you file the form with your tax return for the year of change and send a duplicate copy to the IRS separately.</p>
<p>The interesting mechanic is the Section 481(a) adjustment, which catches up the cumulative difference between methods so nothing is double-counted or skipped. If the switch increases your income (common when there's inventory to capitalize), the IRS lets you spread that catch-up over four tax years; if it decreases income, you take the whole deduction in year one. Timing the year of change around a big inventory build or drawdown is legitimate planning, and it's a conversation to have with your tax preparer before year end, not at filing time. This is squarely CPA territory; our job is delivering books clean enough that the 3115 numbers fall out of a report, and coordinating with the preparer is part of <a href="/ecommerce-tax-services/">our ecommerce tax services</a>.</p>

<h2>The dual-track option: accrual books, cash tax return</h2>
<p>Here's the part many sellers don't realize: you don't have to change your tax method to fix your books. Businesses under the small-business gross receipts threshold (about $31 million average annual receipts, inflation-adjusted) may generally file on cash basis even while keeping accrual books. Plenty of our clients run exactly this dual track: accrual financials for management, lenders and an eventual sale, converted to cash at year end for the return, because cash-basis filing usually defers tax for a growing seller.</p>
<p>That year-end step is the accrual to cash conversion, and it's the same five adjustments run in reverse: pull out the receivables, payables and accruals, and (subject to the inventory rules your preparer applies) restate the inventory effect. Direction matters for the sign of each adjustment and nothing else; a bookkeeper who can run the conversion one way can run it the other, and keeping both working papers in the file means either audience (a buyer wanting accrual, the IRS wanting your elected method) gets a documented bridge instead of a shrug.</p>
<p>One caution on the dual track: pick a lane per audience and stay in it. Sellers who hand a lender accrual statements one quarter and cash statements the next, without labeling either, manufacture exactly the credibility problem the conversion was meant to solve. Every report that leaves the building should say which basis it's on. If you've searched for an accrual to cash conversion worksheet, this is what it does: a column of book numbers, a column of reversing adjustments, a column of tax-basis results. We're building a free downloadable conversion worksheet that runs both directions with the marketplace-specific rows built in; it'll live on this site shortly. Until then, the tables above are the blueprint, and the Teardown below gets you the answers with a human attached.</p>

<h2>Common conversion mistakes</h2>
<ul>
<li><strong>Converting revenue but not COGS.</strong> Accrual sales against cash-basis inventory expensing is the worst of both worlds: a bigger top line with the same seesaw margins.</li>
<li><strong>Leaving sales tax in revenue.</strong> Collected tax is a liability at every step of this process. It's a five-figure restatement at diligence time if it's been riding in your top line.</li>
<li><strong>Forgetting reserves and in-transit settlements.</strong> Marketplace holds are receivables; skipping them understates every December and overstates every January.</li>
<li><strong>Doing it once and drifting back.</strong> A conversion isn't a report, it's a method. It only has value if next month closes on the same basis, which is an argument for building it into <a href="/monthly-ecommerce-bookkeeping/">a monthly close routine</a> rather than treating it as a annual heroic effort.</li>
<li><strong>Converting only the latest year.</strong> Brokers and buyers want 24 to 36 months of comparable accrual history. Converting 2026 while 2024 and 2025 stay cash-basis gives them a trend line that breaks in the middle, which is barely better than no trend line. Rebuilding those prior periods is standard <a href="/catch-up-bookkeeping-services/">catch-up work</a>.</li>
</ul>

<h2>Questions sellers ask about the conversion</h2>
<p><strong>Can't QuickBooks just toggle between cash and accrual?</strong> The report toggle is the most common misconception in this whole topic. QuickBooks' cash/accrual switch only re-times invoices and bills you actually entered; it cannot invent an inventory asset, accrue a payable nobody recorded, or split gross sales out of a lump deposit. If your file was built cash-style (deposits in, payments out), toggling the report to "accrual" changes almost nothing and proves less. The conversion is real accounting work on the underlying records, not a report setting.</p>
<p><strong>How long does it take?</strong> For a seller under a few million in revenue with reasonably complete records, converting the current year is days of work, not months. What stretches the timeline is history: rebuilding 24 months of settlement-level detail, or reconstructing inventory counts nobody took. The inventory count is the one input we can't conjure; if you've never counted, the first count sets the anchor and estimates fill backward from purchase records.</p>
<p><strong>Who actually requires accrual books?</strong> Business brokers, as a listing condition for inventory businesses. Buyers and their QoE teams, always. Lenders vary: small credit lines may not ask, SBA-scale acquisition financing and inventory-backed facilities will. And you, arguably most of all, because you're the one making pricing and purchasing decisions off the monthly numbers every week.</p>
<p><strong>Do I have to file Form 3115 if only my books change?</strong> No. The 3115 governs your tax method. Keep filing on cash while your books go accrual and there's no method change to report, just the year-end conversion working paper your preparer keeps.</p>
<p><strong>Is monthly accrual bookkeeping much more expensive?</strong> Somewhat, because it's more work: settlement postings, inventory movement, accrual entries each month. The market rates in <a href="/bookkeeping-tips/how-much-does-ecommerce-bookkeeping-cost/">our cost guide</a> show the spread. Against a five-figure valuation swing at exit or a declined loan, it's the cheapest line item in the story.</p>

<h2>What it costs and where to start</h2>
<p>A conversion is a bounded project: scoped from the state of your file, priced flat, done once, then maintained. The place to start is knowing exactly what's between your books and accrual-grade, and that's precisely what our free Books Teardown tells you; <a href="/contact/">request one here</a> and we'll walk your file and hand you the gap list. If the goal is a sale or financing, our <a href="/pricing/">Exit-Grade tier</a> maintains the converted books month over month so the history exists when the buyer shows up. The sellers who do this two years early sell from a position of strength. The ones who do it during diligence pay for it twice.</p>
`,
  },
  {
    slug: "amazon-fba-reimbursement-guide",
    title: "Amazon FBA Reimbursements: Claim Every Dollar (2026)",
    metaTitle: "Amazon FBA Reimbursements: Claim Every Dollar (2026)",
    metaDescription:
      "What Amazon owes FBA sellers, the shortened claim windows, manual claims vs 20-25% reimbursement services, and how to book reimbursements so they don't distort your margins.",
    date: "2026-07-30",
    readMinutes: 11,
    excerpt: "Amazon loses, damages and mis-measures seller inventory constantly, and auto-reimbursement doesn't catch all of it. What's claimable, the deadlines that got short, and how to book the money correctly.",
    html: `
<p>Amazon owes most FBA sellers money right now. Warehouses lose and damage inventory, customers get refunds for items they never send back, and fee calculations run on wrong dimensions, and while Amazon reimburses much of this automatically, audits of seller accounts routinely surface unclaimed money equal to 1% to 3% of annual FBA revenue. On $800,000 of FBA sales, that's $8,000 to $24,000, sitting behind reports most sellers never open.</p>
<p>The catch: the window to claim it has gotten short. Amazon cut its claim deadlines dramatically in late 2024, and changed how much it pays in 2025. Here's the current state of play: what's reimbursable, the deadlines, DIY vs paying a service, and (the part everyone skips) how to book the money so it doesn't wreck your margins twice.</p>

<h2>What Amazon actually owes you for</h2>
<ul>
<li><strong>Inventory lost in the warehouse.</strong> Units that disappear from your inventory ledger without a sale, removal or disposal to explain them.</li>
<li><strong>Inventory damaged by Amazon.</strong> Warehouse-damaged units, including damage during Amazon's own handling and transfers between fulfillment centers.</li>
<li><strong>Customer refunds without returns.</strong> Amazon refunds the buyer instantly; the buyer has a return window to actually send the item back. When it never arrives, you're owed a reimbursement, and this category alone is often the biggest bucket.</li>
<li><strong>Returns mishandled.</strong> Items returned in unsellable condition but graded sellable (or vice versa), wrong items returned to your inventory, refunds issued for more than the order amount.</li>
<li><strong>Inbound shipment discrepancies.</strong> You ship 500 units, Amazon receives 488, and the 12 never get reconciled.</li>
<li><strong>Disposals and removals gone wrong.</strong> Inventory destroyed without permission, or lost in transit during a removal order.</li>
<li><strong>Fee overcharges.</strong> Fulfillment fees computed on wrong weights or dimensions, sometimes for months across thousands of units. Not a reimbursement in the inventory sense, but claimable money in the same workflow, and re-measurement requests fix it going forward.</li>
</ul>

<h2>The deadlines: everything got shorter</h2>
<p>For years sellers could claim up to 18 months back, which made "do a big cleanup annually" a workable strategy. That era ended in October 2024. The windows now run roughly like this: claims for inventory lost or damaged in fulfillment centers must be filed within <strong>60 days</strong>; customer-return claims sit in a window that opens after the return deadline passes and closes about <strong>105 days after the refund</strong>; removal-order claims run from 15 to 75 days after shipment creation; inbound discrepancies keep a longer window with a required waiting period while Amazon finishes receiving. Check the current policy in Seller Central before relying on any of these numbers, because Amazon shortened them once with modest notice and can do it again.</p>
<p>The strategic consequence is bigger than the details: <strong>reimbursement recovery is now a monthly discipline, not an annual cleanup.</strong> Money not claimed inside the window isn't late, it's gone. A seller who reconciles quarterly forfeits every 60-day claim from the first two months of the quarter, permanently, which is exactly the kind of quiet leak our <a href="/money-leak-checklist/">money leak checklist</a> exists to catch.</p>

<h2>What auto-reimbursement misses, and the 2025 payout change</h2>
<p>Amazon does auto-reimburse many warehouse losses, and in 2025 it moved to paying claims based on your product's <strong>manufacturing cost</strong> rather than its sale price. Amazon estimates that cost itself unless you tell it otherwise, and its estimates skew low. You can supply your own figures through the manufacturing-cost settings in Seller Central, and you should: a seller whose true unit cost is $14 collecting auto-reimbursements at Amazon's $9 estimate donates $5 per lost unit indefinitely.</p>
<p>This is where reimbursements connect to landed cost. Your defensible number comes from purchase invoices, freight allocations, and the duty tracking covered in <a href="/bookkeeping-tips/tariff-accounting-ecommerce-guide/">our tariff accounting guide</a>. At 2026 duty rates, the gap between "factory invoice price" and true cost is wider than it's ever been, and Amazon isn't going to include your tariffs in its estimate voluntarily. Documented landed cost also means claim disputes end quickly: you attach the invoice trail, they pay.</p>
<p>Beyond low valuations, auto-reimbursement has coverage gaps: refund-no-return cases that resolve wrong, grading errors, inbound shrinkage below Amazon's attention threshold, fee mis-measurement. The gaps are exactly why the audit-and-claim workflow exists.</p>

<h2>The manual claim workflow</h2>
<p>The raw material is three reports in Seller Central: the <strong>Inventory Ledger</strong> (every movement of every unit), the <strong>Reimbursements report</strong> (what Amazon already paid), and the FBA customer returns report. The monthly pass looks like this:</p>
<ol>
<li>Pull the inventory ledger and isolate unreconciled events: lost, damaged, and disposed units that lack a matching reimbursement or recovery.</li>
<li>Cross-reference refunds against returns: every refund older than the return window without a received return and without a reimbursement is a claim.</li>
<li>Compare received quantities to shipped quantities on inbound shipments past their reconciliation window.</li>
<li>File cases through Seller Central's fulfillment help flow, one issue type per case, with the ledger extract and (where relevant) cost documentation attached.</li>
<li>Log claim IDs and chase anything unresolved after two weeks. Persistence changes outcomes; first-response denials on legitimate claims are common and often reverse on appeal with the same evidence restated.</li>
</ol>
<p>Budget two to three hours a month for a mid-six-figure account. It's dull work with a triple-digit hourly rate attached, which is a rare combination.</p>
<p>Two habits raise your win rate substantially. Keep an evidence pack per SKU: supplier invoice, freight allocation, and the manufacturing-cost figure you filed with Amazon, so any claim attaches proof in one step instead of a scavenger hunt. And write case notes like someone else will read them, because someone will: claims get transferred between Amazon associates, and a case that restates the facts cleanly (shipment ID, event date, ledger line, amount) survives the handoff, while "see previous message" dies in it. Sellers treat claim-writing as customer service; it's closer to small-claims litigation, and the tidy filer wins.</p>

<h2>Reimbursement services vs DIY</h2>
<p>An industry exists to do this for you: Getida, Seller Investigators, Refunds Manager, Carbon6 and a dozen others, all on contingency, typically <strong>20% to 25% of recovered funds</strong> (a few advertise lower headline rates with narrower coverage). No recovery, no fee. They're competent at what they do, and for a seller with a big back catalog and zero internal process, the first sweep usually finds real money and the fee is fair value.</p>
<p>Two honest caveats. First, the services work from the same reports you have; there's no privileged access, so what you're buying is diligence and case-handling stamina, not secret data. Second, at 25% the arithmetic turns against you as your own process improves: a seller recovering $20,000 a year pays $5,000 for roughly 30 hours of work they could increasingly do in-house. Our usual advice: let a service run the historical sweep, then bring the monthly discipline inside, either DIY or bundled with your bookkeeping, since the person reconciling your settlements is already staring at the relevant reports. That's exactly how our <a href="/amazon-bookkeeping-services/">Amazon bookkeeping service</a> treats it: reimbursement review is part of the monthly close, not a separate industry.</p>

<h2>How to book reimbursements (not as revenue)</h2>
<p>Here's the accounting mistake that undoes the good work: reimbursements land inside your settlement deposits, and books that post deposits as sales quietly count reimbursements as revenue. They're not revenue. Nobody bought anything. A reimbursement is compensation for an inventory loss, and the clean booking runs through your shrinkage account:</p>
<ul>
<li>When units go missing or get destroyed, your inventory accounting records the loss: credit inventory, debit shrinkage (5030 in <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">our chart of accounts</a>).</li>
<li>When the reimbursement arrives, it offsets that shrinkage: debit cash (via the settlement), credit shrinkage.</li>
<li>The net of the two is your true unrecovered loss, which is a number worth watching: it's the scorecard for this whole process.</li>
</ul>
<p>Booked as revenue instead, you inflate sales, overstate shrinkage, and hand yourself a top line that no longer ties to gross marketplace sales, which resurrects <a href="/bookkeeping-tips/amazon-1099-k-explained/">the 1099-K mismatch problem</a> from a different direction. It also matters at exit: a <a href="/bookkeeping-tips/quality-of-earnings-report-guide/">quality of earnings analyst</a> will strip reimbursements out of revenue in an afternoon, and finding them there makes every other line suspect. Reimbursements sitting correctly against shrinkage, with a documented monthly recovery process, reads as operational maturity. Same money, opposite signal.</p>
<p>One nuance: when Amazon reimburses at your cost, the credit fully offsets the inventory loss. It doesn't replace the profit you'd have earned selling the unit; that margin is simply gone, which is one more reason the manufacturing-cost figure you feed Amazon should be your full landed cost rather than a bare factory price.</p>

<h2>What an audit actually finds: a worked example</h2>
<p>Here's the shape of a first-time audit on a real-scale account: a seller doing $600,000 a year through FBA, three years in, never audited, decent operations. Twelve months back (where windows still allowed) plus the current claimable period turned up:</p>
<table>
<thead><tr><th>Category</th><th>Found</th></tr></thead>
<tbody>
<tr><td>Refunds issued, item never returned</td><td>$4,100</td></tr>
<tr><td>Warehouse-lost units, never auto-reimbursed</td><td>$2,600</td></tr>
<tr><td>Inbound shipment shortfalls</td><td>$1,800</td></tr>
<tr><td>Fee overcharges from wrong dimensions</td><td>$1,450</td></tr>
<tr><td>Warehouse-damaged units, unresolved</td><td>$1,200</td></tr>
<tr><td><strong>Total recovered</strong></td><td><strong>$11,150</strong></td></tr>
</tbody>
</table>
<p>That's 1.9% of annual revenue, right in the typical band. Through a 25% contingency service, $2,788 of it goes to the service; run in-house as part of the monthly close, the whole amount stays. Either beats the third option, which is what this seller had been doing: nothing, at a cost of about $900 a month in quiet forfeitures. The dimension-fee find is worth a special mention because it compounds: a wrong measurement doesn't just owe you back-fees, it overcharges every future unit until someone requests a re-measure. Fixing it was worth more going forward than the claim itself.</p>

<h2>FBA reimbursement FAQ</h2>
<p><strong>Are reimbursements taxable income?</strong> They net against the inventory losses they compensate, so booked correctly there's no windfall to tax: the loss deduction shrinks by the recovery. Booked as revenue, you'll overpay tax on money that was never profit, one more argument for the shrinkage-offset treatment above.</p>
<p><strong>Do reimbursements show up on my 1099-K?</strong> No. The 1099-K reports gross buyer payments; reimbursements arrive inside settlements but aren't sales. They're one of the standard reconciling items between your settlement activity and the 1099-K figure, which is why the reconciliation needs line-level care.</p>
<p><strong>Can I still claim losses from last year?</strong> Almost certainly not; the old 18-month lookback is gone and expired windows don't reopen. The rational response is to grieve briefly and set up the monthly cycle so it never happens again.</p>
<p><strong>Is it worth filing a $14 claim?</strong> Individually, marginal. As a policy, yes: the workflow finds claims in batches, small ones ride along with big ones, and Amazon's error rate doesn't confine itself to cheap SKUs. Sellers who set a "worth my time" floor tend to discover the floor was hiding a pattern.</p>
<p><strong>Will filing lots of claims hurt my account?</strong> Legitimate, well-documented claims are a normal part of the FBA relationship; Amazon's own policies invite them. What draws trouble is sloppy or duplicative claims, which is another reason evidence-first beats volume-first.</p>

<h2>The monthly reconciliation workflow, end to end</h2>
<p>Pulling it together, the routine we run for clients looks like: reconcile settlements to gross sales, fees and refunds (the fix for <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">the nine classic Amazon bookkeeping problems</a>); tie inventory ledger movements to the books' inventory balance; flag and file every claimable event inside its window; post reimbursements received against shrinkage; and report unrecovered shrinkage as its own line so it can't hide. Sellers who run this loop keep the leak near zero and their COGS honest per <a href="/bookkeeping-tips/cogs-formula-ecommerce-guide/">the COGS formula</a>. Sellers who don't fund Amazon's error rate out of margin, at a landed cost that tariffs just made 20% more expensive.</p>
<p>If you've never audited your account, the historical sweep plus a monthly process is a solved problem: it's built into <a href="/monthly-ecommerce-bookkeeping/">our monthly bookkeeping plans</a>, and the free Books Teardown will tell you whether reimbursements are being booked as revenue right now (they usually are); <a href="/contact/">request one here</a>. Amazon runs the best logistics network on earth and still misplaces a measurable slice of everything it touches; the sellers who get paid for that are simply the ones who check. Amazon's own error rate is the one expense line you can actually send back.</p>
`,
  },
  {
    slug: "texas-sales-tax-ecommerce-guide",
    title: "Texas Sales Tax for Ecommerce Sellers (2026 Guide)",
    metaTitle: "Texas Sales Tax for Ecommerce Sellers (2026)",
    metaDescription:
      "Texas sales tax for online sellers: 6.25% plus local up to 8.25%, the $500K economic nexus threshold, the single local rate election, marketplace rules and franchise tax.",
    date: "2026-07-30",
    readMinutes: 12,
    excerpt: "Texas charges 6.25% plus local taxes up to 8.25%, sets economic nexus at $500,000 (the most generous threshold in the country), and offers remote sellers a flat-rate shortcut most never use. Here's the whole system.",
    html: `
<p>Texas sales tax is 6.25% at the state level, with local jurisdictions adding up to 2% for a maximum combined rate of 8.25%. Remote sellers owe collection once their Texas revenue passes <strong>$500,000 in the preceding twelve months</strong>, the highest economic nexus threshold in the country. Marketplaces collect for you, remote sellers can elect a single flat local rate instead of tracking hundreds of jurisdictions, and there's no personal income tax waiting behind any of it, though a franchise tax is. That's the system in four sentences; the details are where the money is.</p>

<h2>The rate: 6.25% state, capped at 8.25% combined</h2>
<p>The state takes 6.25%. Cities, counties, transit authorities and special purpose districts can stack up to 2% more, and state law hard-caps the combined rate at 8.25%. Most urban Texas (Houston, Dallas, San Antonio, Austin) sits right at the cap; rural deliveries can come in lower. Compared with states where combined rates float past 10%, the cap makes Texas pleasantly predictable: you'll never charge more than 8.25%, period.</p>
<p>Which local rate applies is the interesting part. Texas is origin-based for in-state sellers in many cases: a Texas business collects local tax based on its own place of business for orders it fulfills there, one of the few big states that still works this way. Remote sellers with no Texas location charge based on the delivery address instead, unless they take the flat-rate election below. If you're a Texas-based seller shipping from a Texas warehouse, get the sourcing configured correctly in your cart, because origin sourcing done wrong in either direction is a classic audit finding.</p>

<h2>Economic nexus: $500,000, and what counts toward it</h2>
<p>Since October 2019, a remote seller must register once total Texas revenue exceeds $500,000 in the preceding twelve calendar months. Three points sellers get wrong:</p>
<ul>
<li><strong>It's a rolling twelve months,</strong> not a calendar year. You re-measure as each month closes, and the obligation kicks in on the first day of the fourth month after the month you cross.</li>
<li><strong>It counts gross revenue,</strong> including marketplace sales, taxable and exempt alike. Amazon volume counts toward whether you cross, even though Amazon handles the tax on those orders.</li>
<li><strong>There's no transaction count.</strong> Half a million dollars is the only trigger. Compare that to the $100,000 thresholds in <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">Florida</a> and <a href="/bookkeeping-tips/washington-sales-tax-ecommerce-guide/">Washington</a>: Texas gives remote sellers five times the runway.</li>
</ul>
<p>If you sell only through marketplaces that certify they're collecting (Amazon, Walmart, eBay, Etsy all do), you generally don't need your own permit even above the threshold. The moment you add a direct channel, Shopify or otherwise, the calculus changes and the permit question is live. Measuring all of this requires knowing your Texas revenue by channel on demand, which is a books problem before it's a tax problem; it's a standard report out of <a href="/monthly-ecommerce-bookkeeping/">a proper monthly close</a>.</p>

<h2>The single local use tax rate: the shortcut most remote sellers miss</h2>
<p>Here's a genuinely seller-friendly feature almost nobody uses. Instead of computing the exact local rate for every delivery address, a remote seller can elect to collect one flat <strong>single local use tax rate</strong> statewide, published annually by the Comptroller. It has held at 1.75% in recent years, making a flat 8% combined on every Texas order. You elect it by notifying the Comptroller (Form 01-799), and it stays in effect for the calendar year.</p>
<p>Who wins with the election: sellers on platforms with clumsy rate handling, sellers invoicing B2B orders by hand, anyone who'd rather reconcile one rate than 1,500 jurisdictions. Who doesn't: if most of your deliveries go to sub-8% jurisdictions, the flat rate slightly over-collects from those customers, and a tax engine that already resolves addresses perfectly makes the election unnecessary. It's an option, not an obligation, but you should know it exists before you pay for jurisdiction-level automation you might not need.</p>

<h2>Marketplace rules: handled, mostly</h2>
<p>Marketplace providers above $500,000 in Texas revenue must collect and remit on all marketplace sales, so the tax on your Amazon, Walmart, eBay, Etsy and TikTok Shop orders into Texas is genuinely handled. What remains yours: collection on direct channels once you have nexus, keeping marketplace-collected tax out of your revenue line (it arrives inside settlement gross and inflates sales if your books post deposits as income, one of the recurring themes in <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">our Amazon bookkeeping guide</a>), and, if you hold a permit, reporting marketplace volume correctly on your return rather than skipping filings. Zero-due returns still have to be filed; Texas assesses a $50 late-filing penalty even when no tax is owed.</p>

<h2>Physical nexus: FBA inventory and everything else</h2>
<p>Amazon operates a long list of Texas fulfillment centers across the Dallas-Fort Worth, Houston, San Antonio and El Paso metros, and inventory sitting in one is physical presence with no dollar threshold attached. Same for a 3PL in Grand Prairie, an employee in Austin, or booth selling at Canton's flea markets. The practical pattern mirrors other states: marketplace orders are collected for you regardless, so FBA-created nexus matters mainly when you also sell direct. A seller doing $200,000 of Shopify sales into Texas, comfortably under $500,000, still owes collection from dollar one if their FBA stock has been rotating through Wilmer all year. Check where Amazon actually stores your goods; it's a report, not a guess.</p>

<h2>Filing: frequencies, the 20th, and two discounts</h2>
<p>Returns are due the 20th of the month after the period. The Comptroller assigns frequency by volume: monthly for most active sellers, quarterly and annual for smaller accounts. Two features are unusually generous:</p>
<ul>
<li><strong>Timely filing discount:</strong> file and pay on time and keep 0.5% of the tax due.</li>
<li><strong>Prepayment discount:</strong> prepay your estimated liability and take another 1.25%.</li>
</ul>
<p>Combined that's 1.75% of your tax liability back for being organized, real money for a high-volume seller and one of the better deals any state offers. The flip side: late filing costs $50 plus penalties of 5% to 10% of tax due, and Texas is quick with estimated assessments on silent accounts. Registration itself is free, done online through the Comptroller, and international sellers can register with an EIN rather than an SSN; getting that EIN without an SSN is its own fax-and-phone process, mapped in <a href="/bookkeeping-tips/ein-tax-id-number-guide-sellers/">our tax ID guide</a>, and the rest of the non-resident stack lives on <a href="/international-sellers/">our international sellers page</a>.</p>

<h2>The franchise tax: what "no income tax" actually costs</h2>
<p>Texas famously has no personal or corporate income tax. What it has instead is the <strong>franchise tax</strong>, a margin tax on entities doing business in Texas, and remote sellers keep discovering it the hard way because it uses its own $500,000 economic nexus threshold: cross it in Texas receipts and you owe a franchise tax filing even with no physical presence, entirely separate from sales tax.</p>
<p>The saving grace is the no-tax-due threshold: entities under about $2.47 million in annualized revenue (indexed every two years) owe no franchise tax, and since 2024 they don't even file the No-Tax-Due Report anymore, just an information report (the Public Information Report for LLCs and corporations). Above the threshold, retailers and wholesalers pay 0.375% of taxable margin, half the general rate, and the margin calculation itself (revenue minus the best of several deductions, including cost of goods sold) rewards sellers whose <a href="/bookkeeping-tips/cogs-formula-ecommerce-guide/">COGS records are clean</a>. Reports are due May 15. If you're an out-of-state LLC over $500,000 in Texas receipts and this paragraph is news, that's a catch-up conversation for <a href="/ecommerce-tax-services/">our tax services team</a> before the Comptroller starts it.</p>

<h2>The no-income-tax angle for sellers</h2>
<p>For the seller personally, Texas residency means no state tax on your business profit, your salary, or your eventual exit, which is why so many ecommerce operators relocate here (we're Texans ourselves, so we've heard every version of the move story). Two clarifications keep it honest. First, your customers' states don't care where you live: sales tax obligations follow delivery, and moving to Texas changes none of your Florida or Washington analysis. Second, federal tax doesn't move an inch; the full picture of what a seller owes stays as described in <a href="/bookkeeping-tips/amazon-seller-taxes-guide/">our Amazon seller taxes guide</a>. Texas removes one layer, not the cake.</p>

<h2>A worked example: what a typical remote seller owes Texas</h2>
<p>Say you're an Oklahoma-based brand doing $530,000 into Texas over the trailing twelve months: $450,000 through Amazon and $80,000 direct through Shopify. You're over $500,000, so you're in the system. The annual picture:</p>
<ul>
<li><strong>Sales tax on Amazon orders:</strong> $0 out of pocket. Amazon collects and remits as the marketplace provider.</li>
<li><strong>Sales tax on the Shopify orders:</strong> you elect the single local rate and collect a flat 8% at checkout, about $6,400 across the year, remitted on monthly returns. Cost to you if collected properly: nothing but setup time. Cost if your cart wasn't configured: the full $6,400 out of margin, because uncollected tax doesn't transfer to customers retroactively.</li>
<li><strong>The discounts:</strong> filing on time keeps 0.5% of the tax, prepaying adds 1.25%. Call it $110 a year back for punctuality. Small, but it's the only state money you'll ever be paid for paperwork besides Florida's.</li>
<li><strong>Franchise tax:</strong> $530,000 of Texas receipts crosses the franchise nexus line too, but sits far below the $2.47 million no-tax-due threshold. You owe an information report in May and zero dollars.</li>
<li><strong>The filings:</strong> twelve sales tax returns, one information report, maybe three hours a year with clean channel-level books.</li>
</ul>
<p>Total real cost: a few hours and rounding error. The same facts ignored for three years: back tax on the direct channel that you now eat yourself, $50-per-return late penalties, 5% to 10% penalty on the tax, interest, and an estimated assessment computed in the Comptroller's favor. Texas compliance is about as cheap as multistate compliance gets; the expensive version is exclusively self-inflicted.</p>

<h2>Texas sales tax FAQ</h2>
<p><strong>What is the Texas sales tax rate in 2026?</strong> 6.25% state plus up to 2% local, capped at 8.25% combined. Most metro deliveries land at the cap.</p>
<p><strong>Is shipping taxable in Texas?</strong> Generally yes. If the sale is taxable, delivery and handling charges are part of the taxable price, separately stated or not. Configure your cart accordingly; exempting shipping under-collects on every order.</p>
<p><strong>Are groceries and clothing taxable?</strong> Most unprepared food is exempt; clothing is taxable, with an August back-to-school holiday exempting items under $100. Dietary supplements are exempt in Texas, a pleasant surprise for supplement brands used to other states.</p>
<p><strong>Are digital products and SaaS taxable in Texas?</strong> Largely yes. Texas taxes digital goods that would be taxable in physical form, and taxes data processing services (a category that captures a lot of SaaS) on 80% of the charge. Digital sellers should assume taxable until a specific exemption says otherwise.</p>
<p><strong>I only sell through Amazon. Do I need a Texas permit?</strong> Generally no, if every channel is a certifying marketplace, even above $500,000. Watch the franchise tax threshold separately, and revisit the moment you open a direct channel or place inventory in Texas.</p>
<p><strong>Can I buy inventory tax-free in Texas?</strong> Yes, with a resale certificate (Form 01-339), which any permitted seller can issue to suppliers for goods genuinely bought for resale. The usual rules apply: packaging that ships with the product qualifies, your office equipment doesn't, and inventory you pull for personal use or promo giveaways owes use tax on your cost. Keep certificates from your own wholesale customers on file too; in an audit, an untaxed B2B sale without one becomes your tax plus penalty plus interest, four years back.</p>

<h2>The bookkeeping that makes Texas easy</h2>
<p>Every obligation above resolves to three numbers your books should produce on demand: rolling twelve-month Texas revenue (all channels), direct-channel Texas sales by delivery jurisdiction, and tax collected sitting in a liability account where it belongs. Settlement-level books produce them in minutes; deposit-based books can't produce them at all. If yours are the second kind, our free Books Teardown will show you the gap precisely, <a href="/contact/">request one here</a>, and registrations, elections and filings are all part of <a href="/ecommerce-tax-services/">our ecommerce tax services</a>. Texas is the easiest big state to comply with, but only from books that know what happened.</p>
`,
  },
  {
    slug: "california-sales-tax-ecommerce-guide",
    title: "California Sales Tax for Ecommerce Sellers (2026 Guide)",
    metaTitle: "California Sales Tax for Ecommerce Sellers (2026)",
    metaDescription:
      "California sales tax for online sellers: the 7.25% base rate, district taxes past 10%, the $500K threshold, CDTFA registration, marketplace rules and the FBA back-tax saga.",
    date: "2026-07-30",
    readMinutes: 12,
    excerpt: "California starts at 7.25%, stacks district taxes past 10% in some cities, and sets its threshold at $500,000 including marketplace sales. Plus the FBA back-tax saga every Amazon seller should know about.",
    html: `
<p>California sales tax starts at 7.25%, the highest base rate in the country, and district taxes push combined rates past 10% in parts of the Bay Area and Los Angeles County. Remote sellers must register with the CDTFA once total California sales exceed <strong>$500,000</strong> in the current or preceding calendar year, marketplace sales included. Marketplaces collect on their own orders, districts add genuine complexity, and hanging over all of it is the FBA back-tax saga, the most aggressive state enforcement campaign ecommerce has seen. Here's the whole system, piece by piece.</p>

<h2>The rate: what's inside 7.25%</h2>
<p>The statewide base is 7.25%: 6% state, plus a mandatory 1.25% local portion (the Bradley-Burns rate) that goes to cities and counties. That's the floor everywhere in California; no address pays less. On top sit <strong>district taxes</strong>, voter-approved add-ons ranging from 0.10% to 1.5% or more each, and they stack. Combined rates run 7.25% in the few district-free areas to 10.25% in much of LA County and up to 10.75% in a handful of Alameda County cities. Rates shift as districts pass and expire, so use the CDTFA's address-level lookup (or a tax engine that does), not a county table from last year.</p>

<h2>District taxes: the complexity that's actually yours</h2>
<p>Districts are where California differs from a simple destination-rate state. Technically, a seller must collect a given district's tax only if "engaged in business" in that district; sales into other districts obligate the <em>customer</em> to self-report use tax, which consumers essentially never do. Sellers used to thread this needle district by district. AB 147 ended the game for anyone at scale: once your statewide sales pass $500,000, you're deemed engaged in business in <strong>every</strong> district and must collect the full combined rate at every delivery address.</p>
<p>The compliance load shows up on the return: California wants collected tax allocated by district on Schedule A, which for a seller shipping statewide means an allocation across dozens of jurisdictions every period. This is the single best argument in any state for automated rate calculation, and equally for books that can regenerate the by-district detail when the CDTFA asks. Hand-built spreadsheets survive contact with most states; California's Schedule A is not most states.</p>

<h2>Economic nexus: $500,000, marketplace sales included</h2>
<p>The threshold is $500,000 of total combined sales of tangible personal property delivered into California in the current or preceding calendar year. No transaction count, and unlike <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">Florida's taxable-sales-only test</a>, California counts everything: marketplace sales, direct sales, exempt sales, wholesale. Amazon doing $450,000 of your California volume plus $80,000 through Shopify puts you over, even though Amazon handles its share of the tax. Same headline number as <a href="/bookkeeping-tips/texas-sales-tax-ecommerce-guide/">Texas</a>, measured differently: Texas looks at the preceding twelve months rolling; California uses calendar years, current or prior.</p>
<p>Cross it and the obligations come as a pair: register with the CDTFA, and collect at full combined rates in every district (the AB 147 rule above). For a marketplace-only seller, registration can still technically be required while actual collection is nearly all handled by the platforms; the return mostly reports facilitator-collected volume. Tedious, not expensive, and skipping it invites the letters discussed below.</p>

<h2>Marketplace facilitator rules</h2>
<p>Since October 2019, marketplaces over the threshold (Amazon, Walmart, eBay, Etsy, TikTok Shop, all of them) collect and remit on marketplace orders into California, and the facilitator, not you, is the retailer of record for those sales. What stays on your plate is the familiar list: your direct channels once you're over $500,000 or otherwise engaged in business here; keeping facilitator-collected tax out of your revenue line (it flows through settlements and inflates sales on deposit-based books, the core failure in <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">our Amazon bookkeeping problems guide</a>); and filing whatever returns your open account requires, on time, even at zero due. California's penalties run 10% of tax for late filing with interest on top, and the CDTFA issues estimated assessments against silent accounts with the state's usual optimism.</p>

<h2>The FBA saga: how California chased warehouse inventory</h2>
<p>This history matters because it explains every scary letter an FBA seller has ever received. California's position, dating to the mid-2010s under the CDTFA's predecessor, was that inventory sitting in an in-state Amazon warehouse gave the seller physical nexus, and therefore an obligation to have been registered and collecting, reaching back to whenever the inventory first arrived. Amazon handed over seller data under legal demand, and the CDTFA mailed tens of thousands of letters demanding registration and back taxes, in some cases claiming up to eight years of liability from sellers who'd never set foot in California and had no idea which warehouse Amazon chose for their goods.</p>
<p>The campaign produced litigation (the Online Merchants Guild fight), legislative patches, and eventually partial relief: marketplace collection from October 2019 mooted the go-forward issue, and later guidance and settlement programs softened lookback for many sellers. But the CDTFA never formally abandoned the theory, old assessments still exist, and the lesson generalizes: <strong>where a marketplace stores your inventory is a fact with tax consequences, and states can get the data.</strong> If a pre-2019 California exposure letter is sitting in your drawer, that's a case for professional help through <a href="/ecommerce-tax-services/">our tax services team</a>, not a form to fill out casually; limitation periods and settlement postures make the order of operations matter.</p>
<p>Today's practical FBA picture is calmer: marketplace orders are collected by Amazon, so in-state inventory mainly matters if you also sell direct, where it creates collection obligations from dollar one regardless of the $500,000 test. Amazon's California footprint is enormous, so assume your FBA stock is in state unless your reports say otherwise.</p>

<h2>Registering with the CDTFA</h2>
<p>Registration is free, done online through the CDTFA's portal, and issues a seller's permit per location (remote sellers register as a single out-of-state location). You'll be asked for projected sales, which drives filing frequency: quarterly is the default for most, monthly for large accounts, annual for tiny ones, and sellers averaging $17,000 or more per month in taxable sales get quarterly prepayments layered on, a cash-flow wrinkle worth planning for. Returns are due the last day of the month following the period, ten days later than Texas's 20th, and there's no California equivalent of Florida's collection allowance or Texas's timely-filing discount: compliance here pays nothing but avoided penalties.</p>
<p>International sellers can register: the CDTFA accepts foreign businesses, and the practical prerequisite is a US EIN, which non-residents get through the fax-and-phone process in <a href="/bookkeeping-tips/ein-tax-id-number-guide-sellers/">our tax ID guide</a>. Foreign-owned LLCs should have the federal house in order first, Form 5472 above all; the full stack is on <a href="/international-sellers/">our international sellers page</a>.</p>
<p>With the permit comes a resale certificate, so you buy inventory tax-free for resale, and the matching use-tax duty when you pull inventory for personal use, giveaways or influencer seeding: those units come out at cost and the use tax gets reported. Auditors check it precisely because nobody bothers, and clean inventory records make it a report instead of an estimate.</p>

<h2>A worked example: what a typical remote seller owes California</h2>
<p>Take a Texas-based brand doing $520,000 into California this year: $430,000 through Amazon and $90,000 direct through Shopify. Over the $500,000 line, so the obligations attach. The annual picture:</p>
<ul>
<li><strong>Sales tax on Amazon orders:</strong> $0 out of pocket; Amazon is the retailer of record and remits it all.</li>
<li><strong>Sales tax on Shopify orders:</strong> collected at each delivery address's full combined rate under the AB 147 rule, roughly $8,100 across the year at typical blended rates, then allocated by district on Schedule A and remitted quarterly. Collected properly, it costs you checkout configuration and filing time. Collected wrong (say, at 7.25% flat into a 9.5% district), the shortfall comes out of your margin, order after order.</li>
<li><strong>Prepayments:</strong> only if your taxable direct sales average $17,000 or more a month. At $7,500 a month, this seller files plain quarterly returns.</li>
<li><strong>The filings:</strong> four returns with district schedules, maybe five hours a year with books that produce by-district detail automatically, an unpleasant weekend per quarter without them.</li>
</ul>
<p>Total real cost of compliance: modest and predictable. The alternative compounds the way state problems always do: an eight-year lookback applies to sellers who never filed, versus three years for those who did, which is among the strongest arguments in any state for registering once the threshold is genuinely crossed.</p>

<h2>If the CDTFA writes to you first</h2>
<p>California finds sellers; it doesn't wait for them. Marketplace data, customs records and FBA inventory reports all feed discovery, and the standard opener is a letter or questionnaire about your California activity: inventory locations, channels, sales volume, dates. Three rules for that moment. Don't ignore it; silence converts a questionnaire into an estimated assessment, computed generously in the state's favor. Don't answer it casually either, because your answers define the scope of everything that follows, including how many years are on the table. And know your leverage before responding: out-of-state sellers who come forward through voluntary disclosure generally get the lookback capped at three years with penalty relief, an option that can evaporate once the state initiates contact, which is exactly why the order of operations matters. Answering with settlement-level books behind you is a half-hour exercise; answering from bank statements is how sellers concede nexus and years they never owed. Get <a href="/ecommerce-tax-services/">a specialist</a> into the conversation before your first reply, not after your second.</p>

<h2>California sales tax FAQ</h2>
<p><strong>What is the California sales tax rate in 2026?</strong> 7.25% minimum statewide; combined rates with district taxes commonly run 8.75% to 10.25%, topping out around 10.75%. Always resolve the rate by delivery address, not by city name; district lines don't follow zip codes.</p>
<p><strong>Is shipping taxable in California?</strong> Not if you do it right: separately stated shipping at your actual cost, sent by common carrier, is exempt. Charge $7 flat when the label cost $5.20 and the markup portion is taxable. Handling is taxable, and combined "shipping and handling" lines are presumed taxable. This is the fussiest shipping rule of any state we cover; configure it deliberately.</p>
<p><strong>Are digital products and SaaS taxable in California?</strong> Generally no. Electronically delivered software and digital goods with nothing tangible attached sit outside the sales tax, same friendly posture as <a href="/bookkeeping-tips/florida-sales-tax-ecommerce-guide/">Florida</a> and the opposite of <a href="/bookkeeping-tips/washington-sales-tax-ecommerce-guide/">Washington</a>.</p>
<p><strong>Are groceries and clothing taxable?</strong> Most food products for home consumption are exempt; clothing is fully taxable at any price, unlike states with apparel exemptions or holidays.</p>
<p><strong>I only sell through Amazon FBA. Do I owe California anything?</strong> Amazon collects the tax on your marketplace orders. Whether you personally must register turns on inventory presence and your total California volume; many marketplace-only sellers over the threshold register and file simple facilitator-reported returns, and anyone with pre-2019 FBA history in the state should know the saga above before responding to any CDTFA mail.</p>
<p><strong>What if I drop back under $500,000 next year?</strong> The threshold tests the current and preceding calendar year, so falling below it for a full cycle can end the collection obligation prospectively, but not automatically: the permit stays open, and open permits owe returns, until you close or update the account with the CDTFA. Sellers who quietly stop filing because "we're under the line now" collect late notices on zero-due periods, which is the most avoidable penalty in the whole system. Measure every January, and if the answer changes, tell the state rather than assuming it noticed.</p>

<h2>The bookkeeping that survives a CDTFA audit</h2>
<p>California audits are thorough and data-driven: they'll want marketplace reports, by-district sales detail, resale certificates from wholesale customers, and books whose revenue ties to settlements and <a href="/bookkeeping-tips/amazon-1099-k-explained/">1099-Ks</a> rather than bank deposits. The three-year standard lookback (eight if you never filed) rewards sellers whose monthly close already produces state-and-district-level gross by channel; that's a first-week deliverable of <a href="/monthly-ecommerce-bookkeeping/">a real monthly bookkeeping engagement</a>. If your books can't tell you your California sales by channel for last year in five minutes, start with our free Books Teardown, <a href="/contact/">request one here</a>, and we'll show you exactly where the gaps are before the state does.</p>
`,
  },
  {
    slug: "etsy-seller-bookkeeping-problems",
    title: "Etsy Bookkeeping: 8 Problems That Wreck Shop Finances",
    metaTitle: "Etsy Bookkeeping: 8 Problems That Wreck Shop Finances",
    metaDescription:
      "The 8 Etsy bookkeeping problems that ruin makers' numbers: payment account netting, six fee types, Offsite Ads, materials COGS, the 1099-K and multi-channel selling. With fixes.",
    date: "2026-07-30",
    readMinutes: 11,
    excerpt: "Etsy nets its fees out before you ever see the money, charges six different fee types, and takes 12% or 15% on some orders but not others. Here are the eight problems that wreck shop books, with the fix for each.",
    html: `
<p>Etsy bookkeeping fails the same way for almost every shop: the deposit hits the bank, the seller books it as sales, and from that moment the books understate revenue, hide fees, and can't compute a margin. Multiply that by six fee types, an advertising charge that hits some orders and not others, and the materials accounting that handmade goods require, and you get books that can't answer whether the shop actually makes money. Here are the eight problems we see in Etsy shops' books, and the fix for each.</p>

<h2>Problem 1: The payment account nets everything before you see it</h2>
<p>Etsy doesn't charge fees separately; it runs everything through your Etsy Payments account. Sales flow in, then listing fees, transaction fees, processing fees, ad charges, label costs and refunds all come out of the balance, and whatever's left lands in your bank on your deposit schedule. Sell $1,000 in a week and the deposit might be $840. Book that $840 as sales and you've understated revenue by 16% and recorded zero deductible fees; run a slow week where fees exceed sales and Etsy charges your card, producing a "negative deposit" your bank feed can't classify at all.</p>
<p><strong>The fix:</strong> book gross sales, fees and refunds from the monthly Etsy Payment account CSV, and treat the deposit as what it is: a transfer of the remaining balance. It's the same gross-versus-net discipline Amazon sellers need for <a href="/bookkeeping-tips/amazon-seller-bookkeeping-problems/">settlement accounting</a>, at friendlier volume.</p>

<h2>Problem 2: Six fee types, one blurry expense line</h2>
<p>The current Etsy fee stack for a US shop: $0.20 listing fees (per listing, renewing every four months and on every sale), a 6.5% transaction fee on the item price <em>plus shipping and gift wrap</em>, payment processing at 3% plus $0.25, Offsite Ads at 12% or 15% on attributed orders, a 2.5% currency conversion fee where it applies, optional Etsy Plus at $10 a month, and a one-time setup fee for new shops. Booked as one "Etsy fees" blob, you can't see that transaction fees scale with revenue while listing fees scale with catalog size, or that your effective total take is drifting from 11% toward 17% as Offsite Ads bite harder.</p>
<p><strong>The fix:</strong> separate accounts for transaction/processing fees, listing fees, and advertising, per <a href="/bookkeeping-tips/ecommerce-chart-of-accounts/">our chart of accounts template</a>. Fee creep is visible in an itemized ledger and invisible in a blob, and Etsy's take as a percent of gross is a number every shop should track quarterly.</p>

<h2>Problem 3: Offsite Ads hits some orders and not others</h2>
<p>Offsite Ads is Etsy advertising your listings on Google, Facebook and elsewhere, then charging you 15% of any attributed order (12% once your trailing twelve-month revenue passes $10,000, at which point participation also stops being optional; the fee caps at $100 per order). The bookkeeping problem is its randomness: two identical $60 orders, one costing you $9 more than the other because of where the buyer clicked. Shops that budget advertising as a steady percent get surprised, and shops that don't isolate the charge can't tell whether Offsite Ads orders are profitable at all, which for low-margin items at 15% they sometimes aren't.</p>
<p><strong>The fix:</strong> book Offsite Ads to its own advertising account and check the math per affected order once a quarter. If a $12 item nets negative after a 15% ad fee, that's a pricing decision waiting for data, and the mandatory-participation threshold means "just turn it off" stops being an option right as your volume makes it matter.</p>

<h2>Problem 4: Materials COGS, the maker's version of inventory accounting</h2>
<p>A maker's cost of goods is built, not bought: fabric, clasps, glaze, lumber, resin, packaging. The IRS treats handmade inventory like any other: materials are inventory when purchased and cost of goods sold when the finished piece sells, which means valuing raw materials, works in progress and finished goods, at least at year end. Expensing every Michaels run on purchase date overstates costs in stock-up months and understates them later, the same seesaw that plagues resellers, just measured in beads.</p>
<p>And the rule that stings: <strong>your own labor is not COGS</strong> for a sole proprietor. The forty hours in a quilt never touches the books as a cost; you're paid through profit. Price accordingly.</p>
<p><strong>The fix:</strong> a per-product materials cost sheet (the handmade equivalent of a landed-cost sheet), a year-end count of materials and finished goods, and COGS computed with <a href="/bookkeeping-tips/cogs-formula-ecommerce-guide/">the standard formula</a>. It's an afternoon per quarter, and it's the difference between knowing a product line's margin and guessing it.</p>

<h2>Problem 5: Sales tax looks handled, and mostly is</h2>
<p>Etsy is a marketplace facilitator, so it collects and remits sales tax on Etsy orders in every state with a sales tax. Genuinely handled, with two leftovers. First, the collected tax shows up in your payment account flows, and books that don't strip it out inflate gross sales. Second, the moment you sell anywhere else (craft fairs, your own site), that channel's tax is yours, measured under each state's rules: thresholds run from $100,000 in most states to $500,000 in <a href="/bookkeeping-tips/texas-sales-tax-ecommerce-guide/">Texas</a> and <a href="/bookkeeping-tips/california-sales-tax-ecommerce-guide/">California</a>, and in-person sales at a Texas fair are taxable from the first dollar with no threshold at all.</p>
<p><strong>The fix:</strong> tax collected by Etsy stays out of revenue entirely; tax you collect directly sits in a liability account until remitted. Never in income, ever.</p>

<h2>Problem 6: The 1099-K whiplash</h2>
<p>Etsy 1099-K rules have changed direction three times in five years, and 2025 legislation settled them back where they started: the federal threshold is <strong>$20,000 and 200 transactions</strong> again. But several states set their own, far lower triggers ($600 in Virginia, Maryland and Massachusetts among others, around $1,000 in New Jersey and Illinois), and Etsy issues forms accordingly. So whether a form arrives depends on where you live, and either way the form reports <strong>gross</strong> sales, before every fee and refund, the same trap that catches <a href="/bookkeeping-tips/amazon-1099-k-explained/">Amazon sellers every January</a>.</p>
<p><strong>The fix:</strong> report gross, deduct fees, and never file from deposits. And remember the form is informational: no 1099-K doesn't mean no taxable income. A profitable shop owes tax at $6,000 of sales exactly as it does at $60,000, quarterly estimates included; hobby-versus-business classification is its own question with its own rules, covered in <a href="/bookkeeping-tips/content-creator-bookkeeping/">our creator bookkeeping guide</a> for the side-income crowd.</p>

<h2>Problem 7: Multi-channel makers with one pile of records</h2>
<p>The successful maker's arc: Etsy first, then craft fairs on Square, then a Shopify site, then maybe wholesale to local boutiques on invoices. Each channel has its own fees, its own payout rhythm, its own tax posture, and shops that pour it all into one undifferentiated ledger can't answer the only strategic question that matters: which channel is worth the next hour? Etsy's 17% all-in take versus Shopify's 3% processing looks damning until you price in the traffic Etsy brings and the ads Shopify needs, and only channel-level books can run that comparison honestly.</p>
<p><strong>The fix:</strong> revenue and fees by channel, one inventory pool, and channel tagging on shared costs, the same architecture Shopify sellers and <a href="/bookkeeping-tips/reseller-taxes-bookkeeping-guide/">multi-platform resellers</a> need. Square and fair sales also mean handling your own sales tax at in-person rates, one more reason the channels can't share a shoebox.</p>

<h2>Problem 8: Bookkeeping once a year, at tax time</h2>
<p>The most common Etsy bookkeeping system is a January spreadsheet marathon over twelve months of cold records: mystery deposits, a shoebox of materials receipts, and an Offsite Ads total nobody can reconstruct per order. Annual bookkeeping means every pricing decision all year ran on instinct, every quarterly estimate was a guess, and problems compounded for months before anyone saw them (ask the shops that found out in January that their bestseller lost money all fall).</p>
<p><strong>The fix:</strong> a monthly close, even a light one: post the Etsy CSV, reconcile the payment account, update the materials sheet, glance at margin by product line. Two hours a month, and January becomes a non-event. The monthly rhythm has a side benefit nobody advertises: it's when you notice the anomalies worth money, like a refund rate creeping up on one product (a supplier quality problem surfacing) or a listing quietly renewing $6 a month in fees on items that stopped selling in March. Yearly books can't catch what monthly eyes would.</p>

<h2>What Etsy actually keeps: a $1,000 month, itemized</h2>
<p>Numbers make the netting problem concrete. Here's a plausible month for a small US shop: 25 orders averaging $40 including shipping charged, one $40 refund, three orders attributed to Offsite Ads at the 15% tier:</p>
<table>
<thead><tr><th>Line</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Gross sales (25 orders, incl. shipping charged)</td><td>$1,000.00</td></tr>
<tr><td>Transaction fees (6.5% of item + shipping)</td><td>-$65.00</td></tr>
<tr><td>Payment processing (3% + $0.25 x 25)</td><td>-$36.25</td></tr>
<tr><td>Listing fees (30 listings at $0.20)</td><td>-$6.00</td></tr>
<tr><td>Offsite Ads (15% of $120 attributed)</td><td>-$18.00</td></tr>
<tr><td>Shipping labels purchased</td><td>-$95.00</td></tr>
<tr><td>Refund issued</td><td>-$40.00</td></tr>
<tr><td><strong>Deposited to bank</strong></td><td><strong>$739.75</strong></td></tr>
</tbody>
</table>
<p>Etsy's take before labels and the refund is $125.25, about 12.5% of gross, and it climbs toward 17% for shops with heavier Offsite Ads attribution. Book the $739.75 as sales and every one of those lines vanishes: revenue understated by 26%, zero deductible fees on the books, and a "profit margin" that's really just a deposit ratio. Book the gross and the lines separately and you can see, for instance, that labels ran 9.5% of sales this month, which is a shipping-price conversation worth having. The CSV has every number; the whole game is posting them.</p>

<h2>Etsy taxes FAQ</h2>
<p><strong>Are Etsy fees tax deductible?</strong> All of them: listing, transaction, processing, Offsite Ads, subscriptions, labels. But only if your books capture them, which deposit-based books don't. Shops that record net deposits routinely overpay income tax by deducting nothing Etsy kept.</p>
<p><strong>Does Etsy report my sales to the IRS?</strong> Above the federal 1099-K threshold ($20,000 and 200 transactions), yes, and above much lower thresholds in several states. Below the thresholds, no form is issued, but the income is just as taxable and marketplace data is just as discoverable.</p>
<p><strong>Do I owe quarterly estimated taxes on my shop?</strong> If the shop is profitable enough that you'll owe $1,000 or more at filing, generally yes: four payments a year, with a safe harbor pegged to last year's tax. It's the most commonly skipped obligation among makers who crossed from hobby scale to business scale mid-year.</p>
<p><strong>Is my shop a hobby or a business?</strong> It matters more than people think: business losses can offset other income, hobby losses can't, and hobby income is still taxable with no deductions against it. Profit motive, regular activity and businesslike records are the factors, and ironically, keeping real books is itself evidence in your favor.</p>
<p><strong>Does Etsy collect sales tax for me?</strong> On Etsy orders, yes, in every state with a marketplace facilitator law, which is now all of the sales tax states. Fairs and your own website remain your job.</p>

<h2>When to hire it out (and what it costs)</h2>
<p>DIY is the right answer for a small shop: under roughly $3,000 a month in sales, a spreadsheet plus the monthly routine above genuinely suffices. Past that, and certainly once multiple channels or quarterly estimates enter the picture, the hours and the error risk start costing more than help does; the full market pricing is in <a href="/bookkeeping-tips/how-much-does-ecommerce-bookkeeping-cost/">our bookkeeping cost guide</a>, and our own rates start at $149 a month for Books Lite. We built <a href="/etsy-bookkeeping-services/">a bookkeeping service specifically for Etsy sellers</a>: gross-not-net revenue from the payment CSV, every fee type itemized, materials COGS handled, channels separated, books in your own QuickBooks or Xero file.</p>
<p>Not sure which side of the line you're on? Two free tools answer it: our <a href="/money-leak-checklist/">money leak checklist</a> takes ten minutes and flags the expensive gaps (Offsite Ads math and fee creep are perennial finds for Etsy shops), and the free Books Teardown goes deeper: we'll walk your actual books with you and show you what they're hiding; <a href="/contact/">request one here</a>. A shop that knows its numbers prices with confidence, raises prices when materials costs say to, and drops the products that only felt profitable. Pricing is where handmade businesses live or die, and pricing runs on books.</p>
`,
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

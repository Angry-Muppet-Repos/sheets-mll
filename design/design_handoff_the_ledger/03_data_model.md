# 03 · Data Model — The Ledger v1

## Transaction types
| Type | In Revenue? | In Expenses? | Notes |
|---|---|---|---|
| Revenue | ✓ | — | Carries Client/Stream, not Category |
| Expense | — | ✓ | Carries Category |
| Transfer | — | — | Between own accounts; transfers INTO the Tax Escrow account feed _Engine row 40 |
| Owner | — | — | Draws/contributions. NEVER in profit. Shown as info lines only |

Amounts are signed: negative = money out, positive = money in. Months YYYY-MM (hidden helper col, same derivation as Foundation).

## 20 fixed expense categories → Schedule C map
| # | Category | Sch C line |
|---|---|---|
| 1 | Advertising & Marketing | Line 8 |
| 2 | Platform & Payment Fees | Line 10 (Commissions & fees) |
| 3 | Contract Labor | Line 11 |
| 4 | Materials & Supplies (COGS) | Part III — see note |
| 5 | Insurance | Line 15 |
| 6 | Legal & Professional | Line 17 |
| 7 | Office Expense | Line 18 |
| 8 | Shipping & Postage | Line 18 / 27a |
| 9 | Rent (workspace/equip) | Line 20 |
| 10 | Repairs & Maintenance | Line 21 |
| 11 | Supplies | Line 22 |
| 12 | Taxes & Licenses | Line 23 |
| 13 | Travel | Line 24a |
| 14 | Meals (50% note) | Line 24b |
| 15 | Utilities | Line 25 |
| 16 | Software & Subscriptions | Line 27a (Other) |
| 17 | Education & Training | Line 27a (Other) |
| 18 | Home Office | Form 8829 |
| 19 | Bank & Merchant Fees | Line 27a (Other) |
| 20 | Misc | Line 27a (Other) |

COGS note (Categories tab caption): "Materials & Supplies totals what you spent on materials. Full inventory accounting (Schedule C Part III) is out of scope — if you carry significant inventory, track it with your accountant."

Meals note: "Most business meals are 50% deductible — the P&L shows what you spent; your tax pro applies the limit."

## Set-aside presets (replaces Foundation's budget profiles in _Config)
| id | name | % | blurb |
|---|---|---|---|
| standard | Standard | 25% | The common rule of thumb for most solo operators. |
| conservative | Conservative | 30% | Higher-bracket or state-tax-heavy. Sleep-at-night setting. |
| lean | Lean | 20% | Low bracket, big deductions, or W-2 withholding elsewhere covering part of the bill. |
| custom | Custom | — | You set the % in the yellow cell. |

## Named ranges (cc_ prefix, Foundation convention)
`cc_engine_months` (B1:Y1) · `cc_dashboard_month` (Dashboard N4) · `cc_tx_categories` (Categories names incl. custom + system rows) · `cc_clients_list` (Clients names) · `cc_accounts_list` · `cc_keyword_rules` · `cc_mileage_ytd` (Mileage deduction total) · `cc_tax_year` · `cc_setaside_pct` (resolved % after preset/custom logic) · `cc_escrow_balance`

## Quarter math
Quarter sums = SUMPRODUCT over `_Engine` row 37 (NetProfit) columns where the YYYY-MM header's year = `cc_tax_year` and month ∈ quarter. Build month-match helper flags in a hidden Tax Center row; do not inline 12-condition formulas per card.

## Verbatim disclaimer (Tax Center, both build modes, never reworded)
> "These are planning estimates from your own numbers — not tax advice and not a filing. Rates, brackets, SE-tax caps, and deduction rules change and vary by situation. Confirm your actual estimated payments with a tax professional or IRS Form 1040-ES."

## Keyword-rule seed list (Categories cols E–G — starter set, ~60 rules)
Platform & Payment Fees: ETSY, ETSY FEE, SHOPIFY, STRIPE FEE, PAYPAL FEE, SQUARE FEE, EBAY FEE, AMAZON SELLER, GUMROAD
Software & Subscriptions: ADOBE, CANVA, FIGMA, NOTION, DROPBOX, GOOGLE WORKSPACE, GSUITE, MICROSOFT 365, ZOOM, QUICKBOOKS, MAILCHIMP, CONVERTKIT, SQUARESPACE, WIX, GODADDY, NAMECHEAP, OPENAI, ANTHROPIC, MIDJOURNEY
Shipping & Postage: USPS, UPS, FEDEX, PIRATE SHIP, SHIPSTATION, STAMPS.COM, DHL
Advertising & Marketing: FACEBOOK ADS, META ADS, GOOGLE ADS, ETSY ADS, PINTEREST ADS, TIKTOK ADS
Contract Labor: UPWORK, FIVERR, 99DESIGNS
Materials & Supplies (COGS): ULINE, MICHAELS, JOANN, HOBBY LOBBY, PRINTFUL, PRINTIFY
Office Expense: STAPLES, OFFICE DEPOT, AMZN, AMAZON
Travel: DELTA, UNITED, SOUTHWEST, MARRIOTT, HILTON, AIRBNB
Meals: STARBUCKS, RESTAURANT, DOORDASH, CAFE
Bank & Merchant Fees: SERVICE FEE, MONTHLY FEE, WIRE FEE, OVERDRAFT
Taxes & Licenses: IRS, FRANCHISE TAX, LLC FEE, STATE OF
Revenue (Type rule): ETSY DEPOSIT, SHOPIFY PAYOUT, STRIPE PAYOUT, PAYPAL TRANSFER IN, SQUARE DEPOSIT, DIRECT DEPOSIT
Owner (Type rule): OWNER DRAW, MEMBER DRAW, PERSONAL, ATM WITHDRAWAL, VENMO, ZELLE, CASH APP

## Schedule C / IRS facts that MUST be flagged for verification at build time
The mileage rate (default 0.70), the SE-tax constants (0.9235 × 15.3%), and the quarterly due dates are correct as commonly published but must be re-verified against current IRS guidance during the build, and the mileage rate must remain a yellow editable cell — never hardcoded into formulas.

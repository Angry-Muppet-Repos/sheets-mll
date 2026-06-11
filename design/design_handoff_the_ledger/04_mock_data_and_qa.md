# 04 · Mock Data Story — The Ledger v1

Fictional solo seller **Maya Chen** (fictional — never a real name on public screenshots). Sells digital planners on Etsy and does freelance brand design. Mock window: **Jan 2026 – Jun 2026** (Q1 complete, Q2 in progress — the story lands two weeks before the Jun 15 due date).

## Streams (Clients tab)
| Name | Type | Fee % |
|---|---|---|
| Etsy Shop | Platform | 9.5 |
| Brightline Studio | Client | — |
| Hawthorn & Co. | Client | — |
| Affiliate Links | Affiliate | — |

## Accounts (5)
Biz Checking (Novo) $6,840 · **Tax Escrow (Ally)** $2,400 · Biz Credit Card −$1,180 · PayPal Balance $640 · Square Balance $210

## The arc (~380 transactions)
- Revenue ramps: $4,200 (Jan) → $6,900 (Jun). Etsy ≈ 55%, freelance ≈ 40%, affiliate trickle.
- **The visible problem:** Maya set aside taxes in January and February, then stopped. Q1 recommended set-aside ≈ $3,450 (25% of ≈ $13.8K Q1 net profit); she paid $2,400. Q2 is on pace for ≈ $4,100 recommended with **$0 paid and $2,400 sitting in escrow against ≈ $5,150 recommended YTD** → Tax Center shows the gap in Forest-panel daylight, Q1 card chips "Over," Q2 counting down to Jun 15.
- **Secondary leak:** Software & Subscriptions creep $85 → $240/mo (Adobe, Canva Pro, Notion, ConvertKit, Midjourney, two she forgot) and Platform & Payment Fees scaling with revenue — margin slides 71% → 58%. Trends tab tells it; AI Insights mock copy names it.
- Owner draws $2,500/mo — visible as info lines, provably absent from profit.
- 4–6 open invoices: two Paid, one Sent (due next week), one Sent and past due (Hawthorn & Co., $1,800 — drives the Overdue card).
- Mileage log: ~14 entries (post office runs, client meetings, craft-supply trips), ≈ 310 miles.

## Mock AI Insights (Dashboard, mock build only)
- ['ESCROW', 'Q2 estimated taxes due Jun 15. Escrow holds $2,400 against $5,150 recommended — $2,750 short.']
- ['SUBS', 'Software is up $85 → $240/mo. Six tools added since January.']
- ['WIN', 'Margin held above 55% even as fees scaled. Pricing is working.']

For listing screenshots: lead with **Tax Center** (the gap), then Dashboard, P&L, Invoices, Trends.

---

# 05 · QA Checklist — The Ledger v1 (run on the built workbook)

## Setup
- [ ] Fresh Google Sheet → Extensions → Apps Script → paste `ColumnCo_Ledger_v1.gs` → save → refresh → 💳 Column & Co. menu appears
- [ ] Setup → Build workbook (mock data) completes; tab strip order matches spec

## Mock build — figures
- [ ] Dashboard Jun 2026: Revenue ≈ $6,900, margin ≈ 58%, KPI deltas are live (change month → deltas change)
- [ ] P&L Month view = Dashboard figures; Quarter view Q1 net profit ≈ $13.8K; YTD reconciles to Q1+Q2-to-date
- [ ] Owner draws appear on the P&L caption line and in NO profit figure (delete an Owner row → profit unchanged)
- [ ] Tax Center: Q1 card Paid $2,400 vs recommended ≈ $3,450 → "Over" chip; escrow gap ≈ $2,750; switching preset Standard→Conservative moves every recommended figure
- [ ] Invoices: Outstanding/Overdue/Paid-this-month cards reconcile to the table; Hawthorn row paints overdue
- [ ] Mileage total ≈ 310 mi and the deduction shows in Tax Center's detail panel
- [ ] Trends: 6/12/24 toggle works; subscription creep visible in category sparklines
- [ ] Apply Theme across ≥3 palettes — even cutoffs, yellow inputs preserved, disclaimer still legible

## Import path (mock build)
- [ ] Paste test CSV (incl. an ETSY DEPOSIT credit, a VENMO debit, an ADOBE charge, a transfer to Tax Escrow) → Import
- [ ] Credit lands in Review block with stream dropdown; VENMO auto-flags Type=Owner; ADOBE auto-categorizes Software & Subscriptions; escrow transfer raises _Engine row 40 and the Tax Center escrow figure
- [ ] Re-import same CSV → all skipped as duplicates; Uncategorized Merchants block offers keyword-rule saves

## Blank build
- [ ] Setup → Build workbook (blank): NO Maya Chen anywhere — Clients, Accounts, Invoices, Mileage, Transactions empty; _Schema has no demo-buyer line
- [ ] Dashboard/P&L/Tax Center show $0/em-dash states, zero #ERROR!/#N/A/#REF! anywhere (walk every tab)
- [ ] Tax Center disclaimer present; mileage rate yellow and editable; all dropdowns functional with empty registries
- [ ] AI Insights shows the instructional (non-mock) copy

/* =====================================================================
   COLUMN & CO. — THE LEDGER v1 · MOCK DATA
   Fictional solo seller Maya Chen · June 2026 view (two weeks before
   the Jun 15 estimated-tax due date — the product's hero moment).

   Story figures are locked against design_handoff_the_ledger/04:
   Q1 net $13,790 (≈$13.8K) · Q1 recommended $3,448 vs paid $2,400 ·
   escrow $2,400 vs $5,147 recommended YTD → gap $2,747 (≈$2,750) ·
   margin 71.0% → 58.0% · Jun revenue $6,900.
   ===================================================================== */

window.CC_DATA = {
  buyer: { name: 'Maya Chen', biz: 'Chen Studio', month: 'June 2026' },

  // 6 months Jan–Jun 2026: revenue, expenses, net profit, margin %
  months: [
    { label: 'Jan 2026', short: 'Jan', revenue: 6400, expenses: 1856, net: 4544, margin: 71.0 },
    { label: 'Feb 2026', short: 'Feb', revenue: 6700, expenses: 2077, net: 4623, margin: 69.0 },
    { label: 'Mar 2026', short: 'Mar', revenue: 6900, expenses: 2277, net: 4623, margin: 67.0 },
    { label: 'Apr 2026', short: 'Apr', revenue: 5500, expenses: 2090, net: 3410, margin: 62.0 },
    { label: 'May 2026', short: 'May', revenue: 5600, expenses: 2212, net: 3388, margin: 60.5 },
    { label: 'Jun 2026', short: 'Jun', revenue: 6900, expenses: 2898, net: 4002, margin: 58.0 },
  ],

  // Clients & income streams (Clients tab registry, rows 10–21)
  streams: [
    { name: 'Etsy Shop',         type: 'Platform',  fee: 9.5 },
    { name: 'Brightline Studio', type: 'Client',    fee: null },
    { name: 'Hawthorn & Co.',    type: 'Client',    fee: null },
    { name: 'Affiliate Links',   type: 'Affiliate', fee: null },
  ],

  // Accounts registry — exactly one Tax Escrow row (the Tax Center reads it)
  accounts: [
    { name: 'Biz Checking (Novo)', type: 'Checking',          balance: 6840 },
    { name: 'Tax Escrow (Ally)',   type: 'Tax Escrow',        balance: 2400 },
    { name: 'Biz Credit Card',     type: 'Credit',            balance: -1180 },
    { name: 'PayPal Balance',      type: 'Payment Processor', balance: 640 },
    { name: 'Square Balance',      type: 'Payment Processor', balance: 210 },
  ],

  // Tax Center — 2026 figures verified against IRS Notice 2026-10 + 1040-ES
  tax: {
    year: 2026,
    preset: 'Standard',              // Standard 25% / Conservative 30% / Lean 20% / Custom
    setaside_pct: 25,
    effective_income_rate: 15,
    mileage_rate: 0.725,             // IRS standard rate 2026 — yellow editable cell
    quarters: [
      { q: 'Q1', due: 'Apr 15', net: 13790, recommended: 3448, paid: 2400, status: 'over' },
      { q: 'Q2', due: 'Jun 15', net: 10800, recommended: 2700, paid: 0,    status: 'over', current: true },
      { q: 'Q3', due: 'Sep 15', net: 0,     recommended: 0,    paid: 0,    status: 'ahead' },
      { q: 'Q4', due: 'Jan 15 ’27', net: 0, recommended: 0,    paid: 0,    status: 'ahead' },
    ],
    // Escrow strip — computed over complete months (Jan–May): you escrow
    // on banked profit; the quarter cards carry the live in-month pace.
    escrow: { recommended_ytd: 5147, balance: 2400, gap: 2747 },
    // Estimate detail (YTD through May, mileage as a reducing line)
    detail: {
      net_ytd: 20588, mileage_deduction: 225, adjusted: 20363,
      se_earnings: 18805, se_tax: 2877, income_tax: 3054, total: 5931,
    },
  },

  // Dashboard — Top Spending (Jun) vs the Monthly Target column on Categories
  top_spending: [
    { cat: 'Platform & Payment Fees',    spent: 460, budget: 400, status: 'over' },
    { cat: 'Materials & Supplies (COGS)', spent: 420, budget: 450, status: 'on' },
    { cat: 'Advertising & Marketing',    spent: 380, budget: 350, status: 'fair' },
    { cat: 'Shipping & Postage',         spent: 360, budget: 400, status: 'on' },
    { cat: 'Contract Labor',             spent: 350, budget: 400, status: 'on' },
    { cat: 'Software & Subscriptions',   spent: 240, budget: 150, status: 'over' },
    { cat: 'Home Office',                spent: 120, budget: 120, status: 'on' },
    { cat: 'Utilities',                  spent:  90, budget: 100, status: 'on' },
  ],

  snapshot: {
    revenue: 6900, expenses: 2898, net: 4002, margin: 58.0,
    invoices_outstanding: 4000, escrow_balance: 2400, transactions: 64,
  },

  // Donut — Jun expenses, top 11 categories + Other (sums to 2,898)
  breakdown: [
    { cat: 'Platform & Payment Fees', amount: 460 },
    { cat: 'Materials & Supplies',    amount: 420 },
    { cat: 'Advertising & Marketing', amount: 380 },
    { cat: 'Shipping & Postage',      amount: 360 },
    { cat: 'Contract Labor',          amount: 350 },
    { cat: 'Software & Subscriptions', amount: 240 },
    { cat: 'Misc',                    amount: 170 },
    { cat: 'Home Office',             amount: 120 },
    { cat: 'Office Expense',          amount: 95 },
    { cat: 'Utilities',               amount: 90 },
    { cat: 'Meals',                   amount: 80 },
    { cat: 'Other',                   amount: 133 },  // Education 60 + Insurance 45 + Bank fees 28
  ],

  ai_insights: [
    { tag: 'ESCROW', text: 'Q2 estimated taxes due Jun 15. Escrow holds $2,400 against $5,150 recommended — $2,750 short.' },
    { tag: 'SUBS',   text: 'Software is up $85 → $240/mo. Six tools added since January.' },
    { tag: 'WIN',    text: 'Margin held above 55% even as fees scaled. Pricing is working.' },
  ],

  // P&L — Month view (Jun 2026). Revenue by stream + all 20 fixed categories
  // (zero rows show $0 — a P&L shows its lines). schc = Schedule C line.
  pnl: {
    period: 'June 2026',
    revenue: [
      { name: 'Etsy Shop',         amount: 3795 },
      { name: 'Brightline Studio', amount: 1860 },
      { name: 'Hawthorn & Co.',    amount: 900 },
      { name: 'Affiliate Links',   amount: 345 },
    ],
    revenue_total: 6900,
    expenses: [
      { cat: 'Advertising & Marketing',     schc: 'Line 8',        amount: 380 },
      { cat: 'Platform & Payment Fees',     schc: 'Line 10',       amount: 460 },
      { cat: 'Contract Labor',              schc: 'Line 11',       amount: 350 },
      { cat: 'Materials & Supplies (COGS)', schc: 'Part III',      amount: 420 },
      { cat: 'Insurance',                   schc: 'Line 15',       amount: 45 },
      { cat: 'Legal & Professional',        schc: 'Line 17',       amount: 0 },
      { cat: 'Office Expense',              schc: 'Line 18',       amount: 95 },
      { cat: 'Shipping & Postage',          schc: 'Line 18 / 27a', amount: 360 },
      { cat: 'Rent (workspace/equip)',      schc: 'Line 20',       amount: 0 },
      { cat: 'Repairs & Maintenance',       schc: 'Line 21',       amount: 0 },
      { cat: 'Supplies',                    schc: 'Line 22',       amount: 0 },
      { cat: 'Taxes & Licenses',            schc: 'Line 23',       amount: 0 },
      { cat: 'Travel',                      schc: 'Line 24a',      amount: 0 },
      { cat: 'Meals (50% note)',            schc: 'Line 24b',      amount: 80 },
      { cat: 'Utilities',                   schc: 'Line 25',       amount: 90 },
      { cat: 'Software & Subscriptions',    schc: 'Line 27a',      amount: 240 },
      { cat: 'Education & Training',        schc: 'Line 27a',      amount: 60 },
      { cat: 'Home Office',                 schc: 'Form 8829',     amount: 120 },
      { cat: 'Bank & Merchant Fees',        schc: 'Line 27a',      amount: 28 },
      { cat: 'Misc',                        schc: 'Line 27a',      amount: 170 },
    ],
    expenses_total: 2898,
    net: 4002, margin: 58.0, owner_draws: 2500,
  },

  // Invoices — 5 rows. Overdue is DERIVED (Status ≠ Paid AND due < today).
  invoices: [
    { num: 1001, client: 'Brightline Studio', desc: 'Brand refresh — phase 2',  issued: 'Apr 28', due: 'May 12', amount: 2400, status: 'Paid', paid: 'May 14' },
    { num: 1002, client: 'Hawthorn & Co.',    desc: 'Packaging design',         issued: 'May 14', due: 'May 28', amount: 1800, status: 'Sent', paid: '', overdue: true },
    { num: 1003, client: 'Brightline Studio', desc: 'Summer campaign assets',   issued: 'Jun 5',  due: 'Jun 19', amount: 2200, status: 'Sent', paid: '' },
    { num: 1004, client: 'Hawthorn & Co.',    desc: 'Logo variations',          issued: 'May 22', due: 'Jun 5',  amount: 950,  status: 'Paid', paid: 'Jun 5' },
    { num: 1005, client: 'Brightline Studio', desc: 'Q3 retainer (draft)',      issued: 'Jun 11', due: 'Jun 25', amount: 1500, status: 'Draft', paid: '' },
  ],
  invoice_cards: { outstanding: 4000, overdue: 1800, paid_this_month: 950 },

  // Mileage — 14 entries, 310 miles · deduction = 310 × $0.725 = $224.75
  mileage: [
    { date: 'Jan 9',  purpose: 'Post office run',                    miles: 9 },
    { date: 'Jan 21', purpose: 'Client meeting · Brightline Studio', miles: 24 },
    { date: 'Feb 6',  purpose: 'Supply pickup · Uline',              miles: 26 },
    { date: 'Feb 17', purpose: 'Post office run',                    miles: 9 },
    { date: 'Feb 26', purpose: 'Client meeting · Hawthorn & Co.',    miles: 32 },
    { date: 'Mar 10', purpose: 'Post office run',                    miles: 9 },
    { date: 'Mar 19', purpose: 'Client meeting · Brightline Studio', miles: 24 },
    { date: 'Mar 31', purpose: 'Materials run · Michaels',           miles: 19 },
    { date: 'Apr 9',  purpose: 'Post office run',                    miles: 9 },
    { date: 'Apr 22', purpose: 'Design expo · convention center',    miles: 58 },
    { date: 'May 7',  purpose: 'Client meeting · Hawthorn & Co.',    miles: 32 },
    { date: 'May 18', purpose: 'Supply pickup · Uline',              miles: 26 },
    { date: 'Jun 3',  purpose: 'Post office run',                    miles: 9 },
    { date: 'Jun 10', purpose: 'Client meeting · Brightline Studio', miles: 24 },
  ],
  mileage_totals: { miles: 310, deduction: 224.75 },

  // The 24 in-sheet palettes — verbatim from the Foundation _Config
  palettes: [
    { id: 'light',         name: 'Light',           primary: '#1C3D2E', mid: '#2D5C45', accent: '#C5A95A', bg: '#FAF8F2', zebra: '#EEF2EC', dark: '#111827', accentLight: '#F0EBD8' },
    { id: 'warm-greige',   name: 'Warm Greige',     primary: '#3D2B1F', mid: '#5C4033', accent: '#C8873A', bg: '#FAF6F1', zebra: '#F0E8DC', dark: '#1C1009', accentLight: '#F5E6D3' },
    { id: 'cool-slate',    name: 'Cool Slate',      primary: '#1E3A5F', mid: '#2D5282', accent: '#64748B', bg: '#F8FAFC', zebra: '#EFF6FF', dark: '#0F2440', accentLight: '#E2E8F0' },
    { id: 'sage',          name: 'Sage',            primary: '#2D4A3E', mid: '#3D6455', accent: '#8FAF7E', bg: '#F4F9F1', zebra: '#EAF4E3', dark: '#1A2E25', accentLight: '#E8F5E0' },
    { id: 'espresso',      name: 'Espresso',        primary: '#2C1810', mid: '#4A2C1A', accent: '#C8873A', bg: '#FAF5F0', zebra: '#F0E5D8', dark: '#120A04', accentLight: '#F5E6D3' },
    { id: 'maize-navy',    name: 'Maize & Navy',    primary: '#003366', mid: '#004080', accent: '#FFCB05', bg: '#F5F8FF', zebra: '#E8F0FF', dark: '#001A33', accentLight: '#FFF5B0' },
    { id: 'scarlet-gray',  name: 'Scarlet & Gray',  primary: '#BB0000', mid: '#CC0000', accent: '#808080', bg: '#F9F9F9', zebra: '#EFEFEF', dark: '#2C0000', accentLight: '#E8E8E8' },
    { id: 'orange-navy',   name: 'Orange & Navy',   primary: '#002D6D', mid: '#003D94', accent: '#F47920', bg: '#F5F8FF', zebra: '#E8F0FF', dark: '#001540', accentLight: '#FFE4C4' },
    { id: 'green-gold',    name: 'Green & Gold',    primary: '#154734', mid: '#1A5C43', accent: '#CBA135', bg: '#F3FAF5', zebra: '#E5F5EA', dark: '#0A2419', accentLight: '#FFF3C0' },
    { id: 'purple-gold',   name: 'Purple & Gold',   primary: '#4A1C7C', mid: '#5E2499', accent: '#FFC72C', bg: '#FAF5FF', zebra: '#F3E8FF', dark: '#280D45', accentLight: '#FFF5B5' },
    { id: 'crimson-white', name: 'Crimson & White', primary: '#9B1B30', mid: '#B52238', accent: '#FFFFFF', bg: '#FFF8F9', zebra: '#FFE8EC', dark: '#4A0010', accentLight: '#F5F5F5' },
    { id: 'garnet-gold',   name: 'Garnet & Gold',   primary: '#782F40', mid: '#9B3B52', accent: '#CBA135', bg: '#FFF8F5', zebra: '#FFE8DC', dark: '#3D0A1A', accentLight: '#FFF3C0' },
    { id: 'forest-white',  name: 'Forest & White',  primary: '#154733', mid: '#1E6048', accent: '#FFFFFF', bg: '#F4FBF6', zebra: '#E8F5EC', dark: '#0A2819', accentLight: '#F0FFF4' },
    { id: 'royal-gold',    name: 'Royal & Gold',    primary: '#002D72', mid: '#003D9C', accent: '#B5A642', bg: '#F0F5FF', zebra: '#E0ECFF', dark: '#001040', accentLight: '#F5F0C0' },
    { id: 'silver-black',  name: 'Silver & Black',  primary: '#1A1A1A', mid: '#2D2D2D', accent: '#A8A9AD', bg: '#F5F5F5', zebra: '#EBEBEB', dark: '#000000', accentLight: '#E8E8E8' },
    { id: 'midnight',      name: 'Midnight',        primary: '#0B1F3A', mid: '#142E55', accent: '#14B8A6', bg: '#F0F4F8', zebra: '#E2E8F0', dark: '#050E1C', accentLight: '#99F6E4' },
    { id: 'burgundy',      name: 'Burgundy',        primary: '#5C0A1A', mid: '#7A0E22', accent: '#E8D5B5', bg: '#FAF5F0', zebra: '#F0E6DA', dark: '#2E0510', accentLight: '#F5E8D5' },
    { id: 'mocha',         name: 'Mocha',           primary: '#5C3A21', mid: '#7A4F2D', accent: '#D4A574', bg: '#FAF3EA', zebra: '#F0E2CE', dark: '#2E1D10', accentLight: '#F0DCC2' },
    { id: 'indigo-blush',  name: 'Indigo & Blush',  primary: '#2E1F6B', mid: '#3D2A8C', accent: '#EAB0B8', bg: '#F7F4FA', zebra: '#ECE5F5', dark: '#170F36', accentLight: '#F8DEE3' },
    { id: 'pine-brass',    name: 'Pine & Brass',    primary: '#1F3A2E', mid: '#2E5544', accent: '#B8964A', bg: '#F2F8F4', zebra: '#E1F0E7', dark: '#0E1D17', accentLight: '#E8D9A8' },
    { id: 'ocean-coral',   name: 'Ocean & Coral',   primary: '#0F4858', mid: '#166075', accent: '#F47B6A', bg: '#F0F8FA', zebra: '#DCEFF2', dark: '#062430', accentLight: '#FBC8BD' },
    { id: 'charcoal-mint', name: 'Charcoal & Mint', primary: '#2C2C2E', mid: '#44444A', accent: '#A8D5BA', bg: '#F5F5F5', zebra: '#E8E8E8', dark: '#161617', accentLight: '#D0EAD9' },
    { id: 'olive-cream',   name: 'Olive & Cream',   primary: '#3D4A1F', mid: '#56672E', accent: '#C8B27A', bg: '#F7F4E8', zebra: '#ECE5D0', dark: '#1E2410', accentLight: '#E8D9A8' },
    { id: 'custom',        name: 'Custom',          primary: '#1B2A4A', mid: '#2C3E6B', accent: '#C8873A', bg: '#F3F4F6', zebra: '#EEF0F5', dark: '#111827', accentLight: '#F5D9B0' },
  ],

  // Bottom tab strip — 13 visible (the spec's 15 minus hidden _Config/_Schema)
  tabs: [
    { id: 'start',     label: 'Start Here' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'pnl',       label: 'P&L' },
    { id: 'tax',       label: 'Tax Center' },
    { id: 'trends',    label: 'Trends' },
    { id: 'invoices',  label: 'Invoices' },
    { id: 'mileage',   label: 'Mileage' },
    { id: 'tx',        label: 'Transactions' },
    { id: 'import',    label: 'Bank Import Guide' },
    { id: 'clients',   label: 'Clients' },
    { id: 'accounts',  label: 'Accounts' },
    { id: 'cats',      label: 'Categories' },
    { id: 'engine',    label: '_Engine', system: true },
  ],

  // Tax Center disclaimer — ships verbatim, both build modes, never reworded
  disclaimer: 'These are planning estimates from your own numbers — not tax advice and not a filing. Rates, brackets, SE-tax caps, and deduction rules change and vary by situation. Confirm your actual estimated payments with a tax professional or IRS Form 1040-ES.',
};

/**
 * Column & Co. — The Foundation v2.1
 * 00 · Constants — single source of truth for the whole build.
 *
 * Brand colors, type tokens, the 16 in-sheet palettes, the 10 budget
 * profiles, the 20-category list, and the Marcus & Elena Brooks mock data.
 * Mirrors data/palettes.json, data/profiles.json, and reference/data.js
 * from the design handoff. Keep in sync if those change.
 */

// ── Product identity ──────────────────────────────────────────────────
var CC = {
  VERSION: 'v2.1',
  BRAND: 'Column & Co.',
  PRODUCT: 'The Foundation',
  TAGLINE: 'LIFE,  ORGANIZED.',
  FOOTER: 'The Foundation v2.1  ·  columnandco.com  ·  Do not distribute without license',
  MENU_TITLE: '💳 Column & Co.'
};

// ── Brand colors (locked — never themed) ──────────────────────────────
var BRAND = {
  FOREST: '#1C3D2E',
  FOREST_HI: '#1F4734',   // hand-picked +3% lightness for the LLM code block
  CANOPY: '#2D5C45',
  GOLD: '#C5A95A',
  CREAM: '#F0EBD8',
  PARCHMENT: '#FAF8F2',
  YELLOW: '#FFFDE7',      // every buyer-editable cell
  GREEN_ZONE: '#E5F5EA',  // bank import paste zone
  GARNET: '#832F30',
  // status chip fills
  CHIP_ON_BG: '#E5F5EA',
  CHIP_FAIR_BG: '#FFF3C0',
  CHIP_OVER_BG: '#FFE5E5',
  // text opacities expressed as solid hexes over parchment (Sheets has no per-text alpha)
  BODY: '#4B5F54',        // ~Forest @ 75%
  CAPTION: '#8D9990',     // ~Forest @ 50%
  HAIRLINE: '#DCE3DD',    // ~Forest @ 12%
  PARCHMENT_60: '#9DA79F' // footer text ~Parchment @ 60% over Forest -> light
};

// Fonts — Sheets-native fallbacks for Playfair Display / Jost.
// Documented in _Schema so the buyer knows the substitution.
var FONT = {
  DISPLAY: 'Lora',   // Playfair Display -> Lora (closest native serif)
  BODY: 'Roboto'     // Jost -> Roboto (closest native geometric-ish)
};

// ── 12-segment donut ramp (Forest -> Canopy -> Gold -> Garnet) ─────────
var DONUT_RAMP = [
  '#1C3D2E', '#2D5C45', '#3E7E5C', '#5C9D72', '#8FAF7E', '#C5A95A',
  '#D4B86C', '#C8873A', '#A65B30', '#832F30', '#6B2528', '#4A1A1C'
];

// ── 20 categories (locked order — shared everywhere) ──────────────────
var CATEGORIES = [
  'Housing', 'Food & Dining', 'Transportation', 'Shopping',
  'Utilities', 'Entertainment', 'Subscriptions', 'Personal Care',
  'Gifts & Donations', 'Health & Medical', 'Insurance', 'Savings',
  'Debt Payments', 'Education', 'Travel', 'Pets',
  'Childcare', 'Business', 'Taxes', 'Misc'
];

// User-defined categories: 5 yellow slots on the Categories tab the
// buyer can name (e.g. "Vacation 2026"). Flow through Transactions
// dropdown, Engine SUMIFS rows, and Monthly Budget rows automatically.
var CUSTOM_CATEGORY_SLOTS = 5;

// ── 16 in-sheet palettes (product feature) ────────────────────────────
var PALETTES = [
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
  { id: 'custom',        name: 'Custom',          primary: '#1B2A4A', mid: '#2C3E6B', accent: '#C8873A', bg: '#F3F4F6', zebra: '#EEF0F5', dark: '#111827', accentLight: '#F5D9B0' }
];
var PALETTE_BY_ID = (function () { var m = {}; PALETTES.forEach(function (p) { m[p.id] = p; }); return m; })();
var DEFAULT_PALETTE = 'light';

// ── 10 budget profiles (targets in CATEGORIES order) ──────────────────
var PROFILES = {
  'dave-ramsey':   { name: 'Dave Ramsey',   sub: 'Envelopes · Baby Steps',                                 income: 10230, save: 15, blurb: 'The Ramsey Method: big slices for housing and food, every dollar named, aggressive debt snowball, 3–6 month emergency fund.', targets: [2400, 900, 800, 250, 360, 150, 60, 150, 250, 200, 450, 1500, 1500, 0, 0, 100, 0, 0, 0, 160] },
  '50-30-20':      { name: '50/30/20',      sub: 'Needs · Wants · Savings',                                income: 10230, save: 20, blurb: "Senator Warren's rule. 50% needs, 30% wants, 20% savings + debt.", targets: [2400, 750, 650, 620, 380, 400, 180, 200, 300, 200, 450, 1500, 550, 100, 400, 150, 0, 0, 0, 700] },
  'fire':          { name: 'FIRE',          sub: 'Financial Independence · Retire Early',                  income: 10230, save: 54, blurb: 'Optimized for a 50%+ savings rate. Lean fixed costs, minimal discretionary, max retirement and brokerage contributions.', targets: [1800, 500, 400, 200, 340, 100, 30, 80, 150, 150, 400, 5200, 300, 0, 200, 80, 0, 0, 0, 300] },
  'zero-based':    { name: 'Zero-Based',    sub: 'Every dollar gets a job · YNAB-style',                   income: 10230, save: 28, blurb: 'Income minus expenses equals zero. Nothing left unassigned. Room for travel, education, eating out, plus disciplined savings.', targets: [2400, 750, 600, 500, 380, 240, 120, 200, 300, 200, 450, 2200, 700, 50, 300, 130, 0, 0, 0, 710] },
  'anti-budget':   { name: 'Anti-Budget',   sub: 'Paula Pant · Save first, spend the rest',                income: 10230, save: 25, blurb: "Pay yourself 20% off the top into savings + retirement. Don't track the rest by category — if savings happens automatically, the spending takes care of itself.", targets: [2200, 700, 550, 600, 360, 350, 150, 180, 300, 200, 420, 2050, 500, 100, 400, 130, 0, 0, 0, 1040] },
  'kakeibo':       { name: 'Kakeibo',       sub: 'Japanese 4-bucket · Needs · Wants · Culture · Unexpected', income: 10230, save: 25, blurb: 'A 100-year-old Japanese mindful-money practice. Four buckets — survival, optional, culture & growth, and the unexpected.', targets: [2200, 750, 550, 350, 360, 300, 90, 150, 250, 200, 420, 2200, 400, 300, 350, 100, 0, 0, 0, 1260] },
  'new-parent':    { name: 'New Parent',    sub: 'Young family · childcare + 529 priority',                income: 10230, save: 13, blurb: 'Childcare is now the second-largest line. Health & medical and insurance climb. Discretionary compresses, and a 529 contribution lands under Education.', targets: [2400, 900, 550, 350, 380, 100, 80, 120, 150, 350, 550, 1100, 500, 200, 100, 80, 1800, 0, 0, 520] },
  'self-employed': { name: 'Self-Employed', sub: '1099 · 25% tax set-aside · biz expenses',                income: 10230, save: 16, blurb: 'Built for freelancers, contractors, and Etsy sellers. A quarter of every dollar earned is escrowed for quarterly taxes. Business pulls a real line.', targets: [1900, 600, 450, 250, 320, 150, 100, 120, 150, 200, 700, 1200, 400, 150, 200, 80, 0, 600, 2560, 100] },
  'hcol-renter':   { name: 'HCOL Renter',   sub: 'High-cost city · 40% housing · student loans',           income: 10230, save: 9,  blurb: 'For NYC, SF, Seattle, Boston, DC. Rent eats 40%. Student-loan payments get a serious line. Less car, less stuff, more transit.', targets: [4100, 800, 350, 300, 280, 200, 100, 150, 100, 150, 280, 900, 1100, 50, 300, 80, 0, 0, 0, 990] },
  'custom':        { name: 'Custom',        sub: 'You set every target',                                   income: 10230, save: 18, blurb: 'Click any yellow cell to edit. Totals update live. Build a profile that matches your real life — then save it as your personal default.', targets: [2400, 650, 600, 500, 380, 240, 120, 200, 300, 180, 400, 1800, 700, 50, 250, 120, 0, 0, 0, 200] }
};
var PROFILE_ORDER = [
  'dave-ramsey', '50-30-20', 'fire', 'zero-based', 'anti-budget',
  'kakeibo', 'new-parent', 'self-employed', 'hcol-renter', 'custom'
];
var DEFAULT_PROFILE = 'dave-ramsey';

// ── Mock data — Marcus & Elena Brooks (reference/data.js) ─────────────
var MOCK = {
  buyer: { name: 'Marcus & Elena Brooks', month: 'May 2026' },
  // 24 months Jun 2024 – May 2026 (income, expenses, net, savings_rate)
  months_24: [
    ['Jun 2024', 9820, 5840, 3980, 40.5], ['Jul 2024', 9870, 5910, 3960, 40.1],
    ['Aug 2024', 9900, 5950, 3950, 39.9], ['Sep 2024', 9940, 5880, 4060, 40.8],
    ['Oct 2024', 9970, 6010, 3960, 39.7], ['Nov 2024', 9985, 6090, 3895, 39.0],
    ['Dec 2024', 10010, 6150, 3860, 38.6], ['Jan 2025', 10045, 6020, 4025, 40.1],
    ['Feb 2025', 10060, 5980, 4080, 40.6], ['Mar 2025', 10080, 6090, 3990, 39.6],
    ['Apr 2025', 10095, 6160, 3935, 39.0], ['May 2025', 10100, 6240, 3860, 38.2],
    ['Jun 2025', 10110, 6210, 3900, 38.6], ['Jul 2025', 10115, 6280, 3835, 37.9],
    ['Aug 2025', 10118, 6210, 3908, 38.6], ['Sep 2025', 10120, 6020, 4100, 40.5],
    ['Oct 2025', 10122, 6160, 3962, 39.1], ['Nov 2025', 10120, 6055, 4065, 40.2],
    ['Dec 2025', 10120, 6094, 4026, 39.8], ['Jan 2026', 10180, 6420, 3760, 36.9],
    ['Feb 2026', 10200, 6612, 3588, 35.2], ['Mar 2026', 10215, 6740, 3475, 34.0],
    ['Apr 2026', 10220, 6905, 3315, 32.4], ['May 2026', 10230, 6980, 3250, 31.8]
  ],
  // current-month top spending [cat, spent, budget, status]
  top_spending: [
    ['Housing', 2400, 2400, 'on'], ['Food & Dining', 922, 650, 'over'],
    ['Shopping', 618, 500, 'over'], ['Transportation', 540, 600, 'on'],
    ['Utilities', 360, 380, 'on'], ['Gifts & Donations', 280, 300, 'on'],
    ['Entertainment', 255, 240, 'fair'], ['Personal Care', 180, 200, 'on']
  ],
  snapshot: { income: 10230, expenses: 6980, net: 3250, savings_rate: 31.8, avg_daily: 225, transactions: 76, largest_expense: 2400 },
  // current-month breakdown [cat, amount] (donut, 12 segments)
  breakdown: [
    ['Housing', 2400], ['Food & Dining', 922], ['Transportation', 540], ['Shopping', 618],
    ['Utilities', 360], ['Entertainment', 255], ['Subscriptions', 180], ['Personal Care', 180],
    ['Gifts & Donations', 280], ['Health & Medical', 165], ['Insurance', 220], ['Misc', 860]
  ],
  // goals [name, type, target, current, deadline, status, note]
  goals: [
    ['Emergency Fund', 'Savings Target', 22000, 22800, 'Dec 2026', 'on', '3–4 months expenses. At 3.3 months — almost there.'],
    ['Japan Trip Fund', 'Savings Target', 5000, 1700, 'Sep 2026', 'fair', 'Set a transfer rule: $200/mo to Ally Savings labeled Travel.'],
    ['Amex Gold Payoff', 'Debt Payoff', 1840, 1840, 'Dec 2026', 'fair', 'Starting balance $1,850. Pay $100 extra/mo above minimum.'],
    ['Food & Dining', 'Spending Limit', 650, 922, 'Monthly', 'over', 'Biggest leak. Cut delivery apps — cook 4 nights/week.'],
    ['Shopping', 'Spending Limit', 500, 618, 'Monthly', 'over', 'Amazon rule: 24-hour wait before buying.'],
    ['Entertainment', 'Spending Limit', 240, 255, 'Monthly', 'fair', 'Streaming + events. Currently on track.'],
    ['Monthly Savings Rate', 'Savings Rate', 20, 31.8, 'Ongoing', 'on', 'Goal: 20%+. Currently crushing it at 31.8%.']
  ],
  health: {
    composite: 72, grade: 'Good',
    // [name, value, score, weight, status, bench]
    indicators: [
      ['Savings Rate', '31.8%', 88, 25, 'on', '≥ 20% of income saved'],
      ['Expense-to-Income', '68.2%', 74, 20, 'on', '≤ 80% of income spent'],
      ['Emergency Fund', '3.3 mo', 80, 20, 'on', '≥ 3 months of expenses'],
      ['Budget Adherence', '6 of 8', 50, 20, 'fair', '≥ 80% categories on budget'],
      ['Debt-to-Income', '14.5%', 92, 15, 'on', '≤ 36% debt payments']
    ],
    biggest_opportunity: 'Food & Dining is 42% over budget — cutting it to plan lifts composite from 72 to ~78.',
    delta_from: 72, delta_to: 78
  },
  net_worth: {
    total: 222640, assets: 244100, liabilities: 21460, change_mo: 3250,
    // [name, type, owner, balance]
    budget_accounts: [
      ['Chase Joint Checking', 'Checking', 'Joint', 7200],
      ['Elena Checking', 'Checking', 'Elena', 2400],
      ['Marcus Checking', 'Checking', 'Marcus', 3100],
      ['Ally Savings', 'Savings', 'Joint', 22800],
      ['Ally Sinking Fund', 'Savings', 'Joint', 6400],
      ['Amex Gold Card', 'Credit', 'Marcus', -1840],
      ['Chase Sapphire Card', 'Credit', 'Elena', -1320],
      ['Marcus Auto Loan', 'Loan', 'Marcus', -18600]
    ],
    // [name, type, value]
    investments: [
      ['Marcus 401(k)', '401(k)', 98500],
      ['Elena 403(b)', '403(b)', 41200],
      ['Joint Brokerage', 'Brokerage', 27800],
      ['Marcus Roth IRA', 'Roth IRA', 19400],
      ['Elena Roth IRA', 'Roth IRA', 15600]
    ],
    // 6-month net-worth history for hero sparkline
    history: [213100, 215400, 217500, 219390, 220890, 222640]
  },
  ai_insights: [
    ['LEAK', 'Dining is creeping up — $380 → $922/mo. That’s $9.7K/yr if it holds.'],
    ['SUBS', '12 active subscriptions. You added 9 in the last 6 months.'],
    ['WIN', 'Emergency fund healthy at 3.3 months.']
  ]
};

// ── Tab names + order (the bottom strip) ──────────────────────────────
var TABS = {
  START: 'Start Here', TRENDS: 'Trends', DASHBOARD: 'Dashboard',
  BUDGET: 'Monthly Budget', HEALTH: 'Health Score', GOALS: 'Goals',
  TX: 'Transactions', IMPORT: 'Bank Import Guide', NETWORTH: 'Net Worth',
  ACCOUNTS: 'Accounts', CATEGORIES: 'Categories', ENGINE: '_Engine',
  CONFIG: '_Config', SCHEMA: '_Schema'
};
var TAB_ORDER = [
  TABS.START, TABS.TRENDS, TABS.DASHBOARD, TABS.BUDGET, TABS.HEALTH,
  TABS.GOALS, TABS.TX, TABS.IMPORT, TABS.NETWORTH, TABS.ACCOUNTS,
  TABS.CATEGORIES, TABS.ENGINE, TABS.CONFIG, TABS.SCHEMA
];
var SYSTEM_TABS = [TABS.ENGINE, TABS.CONFIG, TABS.SCHEMA];

// ── Layout constants ──────────────────────────────────────────────────
var GRID_COLS = 12;            // A..L content grid for presentation tabs
var CHROME_LAST_ROW = 4;       // rows 1-2 forest, 3 canopy, 4 gold rule
var CONTENT_START_ROW = 6;     // first content row (row 5 is a 24px spacer)

// Default account name input + paste zone placeholder for Bank Import
var DEFAULT_PASTE_CSV =
  'Date,Description,Amount\n' +
  '05/12/2026,WHOLE FOODS MARKET #347,-87.42\n' +
  '05/12/2026,STARBUCKS STORE 4421,-6.75\n' +
  '05/11/2026,DIRECT DEPOSIT - ACME CO,4250.00\n' +
  '05/11/2026,NETFLIX.COM,-15.49\n' +
  '05/10/2026,SHELL OIL 575421,-52.18';

// Default keyword rules for auto-categorization [keyword, category, note]
// Matcher is longest-keyword-wins (see categorize_), so order is not load-bearing.
// Keep entries UPPERCASE — descriptions are uppercased before matching.
var KEYWORD_RULES = [
  // Food & Dining — chains + generic grocery/restaurant patterns
  ['WHOLE FOODS', 'Food & Dining', ''], ['TRADER JOE', 'Food & Dining', ''],
  ['SAFEWAY', 'Food & Dining', ''], ['KROGER', 'Food & Dining', ''],
  ['STARBUCKS', 'Food & Dining', ''], ['CHIPOTLE', 'Food & Dining', ''],
  ['DOORDASH', 'Food & Dining', ''], ['UBER EATS', 'Food & Dining', ''],
  ['MCDONALD', 'Food & Dining', ''], ['RESTAURANT', 'Food & Dining', ''],
  ['COSTCO', 'Food & Dining', ''], ['ALDI', 'Food & Dining', ''],
  ['PUBLIX', 'Food & Dining', ''], ['MEIJER', 'Food & Dining', ''],
  ['GROCERY', 'Food & Dining', ''], ['MARKET', 'Food & Dining', ''],
  ['DELI', 'Food & Dining', ''], ['PIZZA', 'Food & Dining', ''],
  ['CAFE', 'Food & Dining', ''], ['COFFEE', 'Food & Dining', ''],
  ['GRUBHUB', 'Food & Dining', ''], ['INSTACART', 'Food & Dining', ''],
  // Transportation — gas + rideshare + transit
  ['SHELL', 'Transportation', ''], ['CHEVRON', 'Transportation', ''],
  ['EXXON', 'Transportation', ''], ['MOBIL', 'Transportation', ''],
  ['BP ', 'Transportation', ''], ['SPEEDWAY', 'Transportation', ''],
  ['UBER EATS', 'Food & Dining', ''],   // longest-match guarantees this beats UBER
  ['UBER', 'Transportation', ''], ['LYFT', 'Transportation', ''],
  ['PARKING', 'Transportation', ''], ['TOLL', 'Transportation', ''],
  ['AUTO REPAIR', 'Transportation', ''], ['CAR WASH', 'Transportation', ''],
  // Travel
  ['DELTA AIR', 'Travel', ''], ['UNITED AIR', 'Travel', ''],
  ['AMERICAN AIR', 'Travel', ''], ['SOUTHWEST AIR', 'Travel', ''],
  ['MARRIOTT', 'Travel', ''], ['HILTON', 'Travel', ''],
  ['AIRBNB', 'Travel', ''], ['EXPEDIA', 'Travel', ''],
  ['HOTEL', 'Travel', ''], ['BOOKING.COM', 'Travel', ''],
  // Subscriptions
  ['NETFLIX', 'Subscriptions', ''], ['SPOTIFY', 'Subscriptions', ''],
  ['HULU', 'Subscriptions', ''], ['DISNEY PLUS', 'Subscriptions', ''],
  ['APPLE.COM/BILL', 'Subscriptions', ''], ['AUDIBLE', 'Subscriptions', ''],
  ['AMAZON PRIME', 'Subscriptions', ''],   // longest-match beats AMAZON
  ['HBO', 'Subscriptions', ''], ['PARAMOUNT', 'Subscriptions', ''],
  ['YOUTUBE', 'Subscriptions', ''], ['DROPBOX', 'Subscriptions', ''],
  // Shopping
  ['AMAZON', 'Shopping', ''], ['TARGET', 'Shopping', ''],
  ['WALMART', 'Shopping', ''], ['BEST BUY', 'Shopping', ''],
  ['ETSY', 'Shopping', ''], ['EBAY', 'Shopping', ''],
  ['HOME DEPOT', 'Shopping', ''], ['LOWES', 'Shopping', ''],
  ['IKEA', 'Shopping', ''], ['MACY', 'Shopping', ''],
  // Utilities
  ['COMCAST', 'Utilities', ''], ['XFINITY', 'Utilities', ''],
  ['PG&E', 'Utilities', ''], ['CON EDISON', 'Utilities', ''],
  ['VERIZON', 'Utilities', ''], ['AT&T', 'Utilities', ''],
  ['T-MOBILE', 'Utilities', ''], ['SPECTRUM', 'Utilities', ''],
  ['CONSUMERS ENERGY', 'Utilities', ''], ['DTE ENERGY', 'Utilities', ''],
  ['ENERGY', 'Utilities', ''], ['ELECTRIC', 'Utilities', ''],
  ['WATER DEPT', 'Utilities', ''], ['GAS COMPANY', 'Utilities', ''],
  ['INTERNET', 'Utilities', ''],
  // Insurance
  ['GEICO', 'Insurance', ''], ['STATE FARM', 'Insurance', ''],
  ['PROGRESSIVE', 'Insurance', ''], ['ALLSTATE', 'Insurance', ''],
  ['FARMERS INS', 'Insurance', ''], ['USAA', 'Insurance', ''],
  ['NATIONWIDE', 'Insurance', ''], ['LIBERTY MUTUAL', 'Insurance', ''],
  // Health & Medical
  ['CVS', 'Health & Medical', ''], ['WALGREENS', 'Health & Medical', ''],
  ['KAISER', 'Health & Medical', ''], ['RITE AID', 'Health & Medical', ''],
  ['PHARMACY', 'Health & Medical', ''], ['MEDICAL', 'Health & Medical', ''],
  ['DENTIST', 'Health & Medical', ''], ['HOSPITAL', 'Health & Medical', ''],
  ['CLINIC', 'Health & Medical', ''], ['COPAY', 'Health & Medical', ''],
  ['DOCTOR', 'Health & Medical', ''],
  // Personal Care
  ['LA FITNESS', 'Personal Care', ''], ['PLANET FIT', 'Personal Care', ''],
  ['SEPHORA', 'Personal Care', ''], ['ULTA', 'Personal Care', ''],
  ['SALON', 'Personal Care', ''], ['BARBER', 'Personal Care', ''],
  ['HAIRCUT', 'Personal Care', ''],
  // Pets
  ['PETCO', 'Pets', ''], ['CHEWY', 'Pets', ''], ['PETSMART', 'Pets', ''],
  ['VET ', 'Pets', ''],
  // Entertainment
  ['AMC ', 'Entertainment', ''], ['REGAL CINEMAS', 'Entertainment', ''],
  ['CINEMARK', 'Entertainment', ''], ['TICKETMASTER', 'Entertainment', ''],
  ['EVENTBRITE', 'Entertainment', ''], ['STEAM', 'Entertainment', ''],
  ['PLAYSTATION', 'Entertainment', ''], ['XBOX', 'Entertainment', ''],
  // Housing — mortgage / rent / property
  ['MORTGAGE', 'Housing', ''], ['PLANET HOME', 'Housing', ''],
  ['RENT', 'Housing', ''], ['LANDLORD', 'Housing', ''],
  ['HOA ', 'Housing', ''], ['PROPERTY TAX', 'Housing', ''],
  ['ROCKET MORTGAGE', 'Housing', ''],
  // Debt Payments — credit card + loan ACH patterns
  ['CCPYMT', 'Debt Payments', ''], ['CRCARDPMT', 'Debt Payments', ''],
  ['CARD PMT', 'Debt Payments', ''], ['CARD PAYMENT', 'Debt Payments', ''],
  ['CC PAYMENT', 'Debt Payments', ''], ['LOAN PMT', 'Debt Payments', ''],
  ['LOAN PAYMENT', 'Debt Payments', ''], ['AUTO LOAN', 'Debt Payments', ''],
  ['STUDENT LOAN', 'Debt Payments', ''], ['CAPITAL ONE - CR', 'Debt Payments', ''],
  ['WELLS FARGO CARD', 'Debt Payments', ''], ['DISCOVER PMT', 'Debt Payments', ''],
  // Taxes
  ['FRANCHISE TAX', 'Taxes', ''], ['STATE TAX', 'Taxes', ''],
  ['IRS', 'Taxes', ''], ['TAX PAYMENT', 'Taxes', ''],
  // Childcare
  ['DAYCARE', 'Childcare', ''], ['PRESCHOOL', 'Childcare', ''],
  ['CHILDCARE', 'Childcare', ''], ['KINDERCARE', 'Childcare', ''],
  // Education
  ['UNIVERSITY', 'Education', ''], ['TUITION', 'Education', ''],
  ['SCHOOL DISTRICT', 'Education', ''], ['COURSERA', 'Education', ''],
  ['UDEMY', 'Education', ''],
  // Business
  ['SQUARE INC', 'Business', ''], ['STRIPE', 'Business', ''],
  ['SHOPIFY', 'Business', ''], ['QUICKBOOKS', 'Business', ''],
  ['MAILCHIMP', 'Business', ''], ['ADOBE', 'Business', ''],
  // Income — ACH / payroll / treasury / benefits
  ['DIRECT DEPOSIT', 'Income', ''], ['DIRECT DEP', 'Income', ''],
  ['PAYROLL', 'Income', ''], ['INTEREST PAYMENT', 'Income', ''],
  ['CREDIT INTEREST', 'Income', ''], ['INTEREST CREDIT', 'Income', ''],
  ['DIVIDEND', 'Income', ''], ['REFUND', 'Income', ''],
  ['VA COMP', 'Income', ''], ['VA COMPENSATION', 'Income', ''],
  ['SSA', 'Income', ''], ['TREAS 310', 'Income', ''],
  ['TAX REFUND', 'Income', ''], ['ACH CREDIT', 'Income', ''],
  // Transfers (peer-to-peer fallthrough)
  ['VENMO', 'Misc', ''], ['ZELLE', 'Misc', '']
];

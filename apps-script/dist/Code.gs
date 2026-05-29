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
/**
 * Column & Co. — The Foundation v2.1
 * 01 · Helpers — styling utilities + the theme registry.
 *
 * Tab builders call these to stay terse. The theme registry records which
 * ranges are "themable" so applyTheme() can repaint the content area
 * without ever touching the locked brand chrome.
 */

// Accumulated during a build, then persisted to Document Properties.
// Shape: { sheetName: { bg:[a1..], zebra:[a1..], section:[a1..], primaryFill:[a1..], accent:[a1..] } }
var THEME_MAP = {};

function themable_(sheetName, role, a1) {
  if (!THEME_MAP[sheetName]) THEME_MAP[sheetName] = {};
  if (!THEME_MAP[sheetName][role]) THEME_MAP[sheetName][role] = [];
  THEME_MAP[sheetName][role].push(a1);
}

function persistThemeMap_() {
  PropertiesService.getDocumentProperties()
    .setProperty('cc_theme_map', JSON.stringify(THEME_MAP));
}

function columnLetterToNumber_(letter) {
  var col = 0;
  for (var i = 0; i < letter.length; i++) {
    col = col * 26 + (letter.charCodeAt(i) - 64);
  }
  return col;
}

/**
 * setCell_ — style a single cell or range in one call.
 * opts: { value, formula, font, size, bold, italic, color, bg, h, v,
 *         wrap, format, merge (a1 to merge with), letterSpacing(unused) }
 */
function setCell_(sheet, a1, opts) {
  opts = opts || {};
  var rng = sheet.getRange(opts.merge ? (a1 + ':' + opts.merge) : a1);
  if (opts.merge) rng.merge();
  if (opts.formula != null) rng.setFormula(opts.formula);
  else if (opts.value != null) rng.setValue(opts.value);
  if (opts.font) rng.setFontFamily(opts.font);
  if (opts.size) rng.setFontSize(opts.size);
  if (opts.bold != null) rng.setFontWeight(opts.bold ? 'bold' : 'normal');
  if (opts.italic != null) rng.setFontStyle(opts.italic ? 'italic' : 'normal');
  if (opts.color) rng.setFontColor(opts.color);
  if (opts.bg) rng.setBackground(opts.bg);
  if (opts.h) rng.setHorizontalAlignment(opts.h);
  if (opts.v) rng.setVerticalAlignment(opts.v);
  if (opts.wrap != null) rng.setWrap(opts.wrap);
  if (opts.format) rng.setNumberFormat(opts.format);
  return rng;
}

// Section label: UPPERCASE tracked-out gold-on-cream divider.
function sectionLabel_(sheet, a1, mergeTo, text) {
  var rng = setCell_(sheet, a1, {
    value: text, merge: mergeTo, font: FONT.BODY, size: 10, bold: true,
    color: BRAND.GOLD, bg: BRAND.CREAM, h: 'left', v: 'middle'
  });
  themable_(sheet.getName(), 'section', rng.getA1Notation());
  return rng;
}

// Tab title block: Playfair-style title + one-line description.
function titleRow_(sheet, lastColLetter, name, desc) {
  var r = CONTENT_START_ROW;
  setCell_(sheet, 'A' + r, {
    value: name, merge: lastColLetter + r, font: FONT.DISPLAY, size: 28,
    bold: true, color: BRAND.FOREST, h: 'left', v: 'bottom'
  });
  setCell_(sheet, 'A' + (r + 1), {
    value: desc, merge: lastColLetter + (r + 1), font: FONT.BODY, size: 13,
    color: BRAND.BODY, h: 'left', v: 'top'
  });
  sheet.setRowHeight(r, 38);
  sheet.setRowHeight(r + 1, 22);
  return r + 3; // next free content row (one spacer row)
}

/**
 * KPI card — a 3-row merged block: tracked label, big value, sub-caption.
 * Returns nothing; caller positions via top-left a1 and a width in columns.
 */
function kpiCard_(sheet, topLeftA1, widthCols, label, valueOrFormula, sub, accentColor) {
  var cell = sheet.getRange(topLeftA1);
  var r = cell.getRow(), c = cell.getColumn();
  var labelRng = sheet.getRange(r, c, 1, widthCols).merge();
  var valRng = sheet.getRange(r + 1, c, 1, widthCols).merge();
  var subRng = sheet.getRange(r + 2, c, 1, widthCols).merge();

  labelRng.setValue(label).setFontFamily(FONT.BODY).setFontSize(10).setFontWeight('bold')
    .setFontColor(BRAND.CAPTION).setBackground(BRAND.PARCHMENT)
    .setVerticalAlignment('middle').setHorizontalAlignment('left');
  if (typeof valueOrFormula === 'string' && valueOrFormula.charAt(0) === '=') valRng.setFormula(valueOrFormula);
  else valRng.setValue(valueOrFormula);
  valRng.setFontFamily(FONT.DISPLAY).setFontSize(22).setFontWeight('bold')
    .setFontColor(accentColor || BRAND.FOREST).setBackground(BRAND.PARCHMENT)
    .setVerticalAlignment('middle').setHorizontalAlignment('left');
  subRng.setValue(sub).setFontFamily(FONT.BODY).setFontSize(11)
    .setFontColor(BRAND.CAPTION).setBackground(BRAND.PARCHMENT)
    .setVerticalAlignment('top').setHorizontalAlignment('left');

  // hairline frame
  sheet.getRange(r, c, 3, widthCols)
    .setBorder(true, true, true, true, false, false, BRAND.HAIRLINE, SpreadsheetApp.BorderStyle.SOLID);
  // top accent rule
  sheet.getRange(r, c, 1, widthCols)
    .setBorder(true, null, null, null, null, null, accentColor || BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  var sheetName = sheet.getName();
  themable_(sheetName, 'bg', sheet.getRange(r, c, 3, widthCols).getA1Notation());
}

/**
 * Status chip conditional formatting on a range whose cells read
 * "On Track" / "Fair" / "Over". Applies fills + text colors.
 */
function statusChipCF_(sheet, a1) {
  var rng = sheet.getRange(a1);
  var rules = sheet.getConditionalFormatRules();
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('On Track').setBackground(BRAND.CHIP_ON_BG).setFontColor(BRAND.CANOPY)
    .setRanges([rng]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Fair').setBackground(BRAND.CHIP_FAIR_BG).setFontColor(BRAND.GOLD)
    .setRanges([rng]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Over').setBackground(BRAND.CHIP_OVER_BG).setFontColor(BRAND.GARNET)
    .setRanges([rng]).build());
  sheet.setConditionalFormatRules(rules);
  rng.setHorizontalAlignment('center').setFontWeight('bold').setFontSize(10).setFontFamily(FONT.BODY);
}

function statusText_(status) {
  return status === 'on' ? 'On Track' : status === 'fair' ? 'Fair' : 'Over';
}
function statusColor_(status) {
  return status === 'on' ? BRAND.CANOPY : status === 'fair' ? BRAND.GOLD : BRAND.GARNET;
}

// SPARKLINE bar formula string (status-colored).
function sparkBar_(valueRef, maxRef, color) {
  return '=SPARKLINE(' + valueRef + ', {"charttype","bar";"max",' + maxRef +
    ';"color1","' + color + '"})';
}
// SPARKLINE line formula string.
function sparkLine_(rangeRef, color) {
  return '=SPARKLINE(' + rangeRef + ', {"charttype","line";"color","' + color + '";"linewidth",2})';
}

// Set several column widths at once: widths is an array starting at col 1.
function setColWidths_(sheet, widths) {
  for (var i = 0; i < widths.length; i++) sheet.setColumnWidth(i + 1, widths[i]);
}

function money_(n) {
  var neg = n < 0; n = Math.abs(Math.round(n));
  var s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (neg ? '−$' : '$') + s;
}
/**
 * Column & Co. — The Foundation v2.1
 * 02 · Brand chrome — the non-negotiable 3-row letterhead + footer.
 *
 * Rows 1-2  Forest header  (nameplate left, breadcrumb right)
 * Row 3     Canopy sub-band (optional gold tracked sub-label, right)
 * Row 4     Harvest Gold accent rule — exactly 3px
 * Row 5     spacer
 * Chrome is LOCKED — applyTheme() never repaints it.
 */

function chrome_(sheet, tabName, lastColLetter, subLabel) {
  var lastCol = columnLetterToNumber_(lastColLetter);
  var splitCol = Math.max(2, lastCol - 3);
  var name = sheet.getName();

  // Row 1-2 Forest header. Left = nameplate, right = breadcrumb.
  var left = sheet.getRange(1, 1, 2, splitCol - 1).merge();
  left.setBackground(BRAND.FOREST).setVerticalAlignment('middle')
    .setHorizontalAlignment('left').setFontColor(BRAND.PARCHMENT)
    .setFontFamily(FONT.DISPLAY).setFontSize(20).setFontWeight('bold')
    .setValue('  ' + CC.BRAND);
  themable_(name, 'primary', left.getA1Notation());

  var right = sheet.getRange(1, splitCol, 2, lastCol - splitCol + 1).merge();
  right.setBackground(BRAND.FOREST).setVerticalAlignment('middle')
    .setHorizontalAlignment('right').setFontColor(BRAND.PARCHMENT)
    .setFontFamily(FONT.BODY).setFontSize(11)
    .setValue(CC.PRODUCT + ' ' + CC.VERSION + '  ·  ' + tabName + '  ');
  themable_(name, 'primary', right.getA1Notation());

  sheet.setRowHeight(1, 30);
  sheet.setRowHeight(2, 30);

  // Row 3 — Canopy sub-band + optional gold tracked sub-label (right).
  var band = sheet.getRange(3, 1, 1, lastCol).merge();
  band.setBackground(BRAND.CANOPY).setVerticalAlignment('middle')
    .setHorizontalAlignment('right').setFontColor(BRAND.GOLD)
    .setFontFamily(FONT.BODY).setFontSize(9).setFontWeight('bold')
    .setValue(subLabel ? (subLabel + '  ') : '');
  themable_(name, 'mid', band.getA1Notation());
  sheet.setRowHeight(3, 26);

  // Row 4 — Harvest Gold accent rule, exactly 3px.
  var rule = sheet.getRange(4, 1, 1, lastCol).merge();
  rule.setBackground(BRAND.GOLD);
  themable_(name, 'accent', rule.getA1Notation());
  sheet.setRowHeight(4, 3);

  // Row 5 — spacer.
  sheet.getRange(5, 1, 1, lastCol).setBackground(BRAND.PARCHMENT);
  sheet.setRowHeight(5, 18);
}

// Footer — thin Forest bar with the brand line at the given row.
function footer_(sheet, row, lastColLetter) {
  var lastCol = columnLetterToNumber_(lastColLetter);
  var bar = sheet.getRange(row, 1, 1, lastCol).merge();
  bar.setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT_60)
    .setFontFamily(FONT.BODY).setFontSize(10)
    .setHorizontalAlignment('center').setVerticalAlignment('middle')
    .setValue(CC.FOOTER);
  themable_(sheet.getName(), 'primary', bar.getA1Notation());
  sheet.setRowHeight(row, 28);
}

// Paint the content region background (themable bg) from row 5 to endRow.
function paintContentBg_(sheet, endRow, lastColLetter) {
  var lastCol = columnLetterToNumber_(lastColLetter);
  var a1 = sheet.getRange(5, 1, endRow - 4, lastCol).getA1Notation();
  sheet.getRange(a1).setBackground(BRAND.PARCHMENT);
  themable_(sheet.getName(), 'bg', a1);
}
/**
 * Column & Co. — The Foundation v2.1
 * 03 · Build orchestrator.
 *
 * buildWorkbook(mode) constructs the entire 14-tab workbook from scratch:
 * brand chrome, all tabs, named ranges, seeded hidden sheets, mock data.
 *   mode = 'mock'  → ships Marcus & Elena Brooks pre-populated (demo)
 *   mode = 'blank' → editable cells cleared for a real buyer
 *
 * Run once from the Apps Script editor (or the 💳 Column & Co. ▸ Setup menu)
 * against an empty bound spreadsheet.
 */

function buildMockWorkbook()  { buildWorkbook('mock'); }
function buildBlankWorkbook() { buildWorkbook('blank'); }

function buildWorkbook(mode) {
  mode = (mode === 'blank') ? 'blank' : 'mock';
  var ss = SpreadsheetApp.getActive();
  THEME_MAP = {};

  // 1. Create/clear every sheet up front so cross-tab formulas resolve.
  var sheets = {};
  TAB_ORDER.forEach(function (name) { sheets[name] = getOrCreateSheet_(ss, name); });

  // 2. Hidden data + system sheets first.
  buildConfig_(sheets[TABS.CONFIG]);
  buildSchema_(sheets[TABS.SCHEMA]);
  buildCategories_(sheets[TABS.CATEGORIES], mode);
  buildAccounts_(sheets[TABS.ACCOUNTS], mode);
  buildTransactions_(sheets[TABS.TX], mode);
  buildEngine_(sheets[TABS.ENGINE], mode);

  // 3. Presentation + action tabs.
  buildStartHere_(sheets[TABS.START]);
  buildTrends_(sheets[TABS.TRENDS], mode);
  buildDashboard_(sheets[TABS.DASHBOARD], mode);
  buildMonthlyBudget_(sheets[TABS.BUDGET], mode);
  buildHealthScore_(sheets[TABS.HEALTH], mode);
  buildGoals_(sheets[TABS.GOALS], mode);
  buildBankImport_(sheets[TABS.IMPORT]);
  buildNetWorth_(sheets[TABS.NETWORTH], mode);

  // 4. Named ranges (catalog from 06_data_model.md, trimmed to what's wired).
  setNamedRanges_(ss);

  // 5. Order, color, hide. Remove any stray sheets (e.g. default Sheet1).
  reorderTabs_(ss);
  ss.getSheets().forEach(function (sh) {
    if (TAB_ORDER.indexOf(sh.getName()) === -1) {
      try { ss.deleteSheet(sh); } catch (e) {}
    }
  });
  SYSTEM_TABS.forEach(function (n) { ss.getSheetByName(n).hideSheet(); });

  // 6. Persist build state.
  persistThemeMap_();
  var dp = PropertiesService.getDocumentProperties();
  dp.setProperty('cc_active_palette', DEFAULT_PALETTE);
  dp.setProperty('cc_active_profile', DEFAULT_PROFILE);
  dp.setProperty('cc_build_mode', mode);
  dp.deleteProperty('cc_first_open');

  // 7. Land on Start Here.
  sheets[TABS.START].activate();
  ss.toast('Built The Foundation ' + CC.VERSION + ' (' + mode + ' data)', CC.BRAND, 5);
}

function getOrCreateSheet_(ss, name) {
  var sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  // Fully unmerge the whole grid first — clear() does NOT remove merges, and
  // leftover merges from a prior build collide with the new chrome merges.
  try { sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).breakApart(); } catch (e) {}
  // Same story for data validations: clear() leaves them in place, so dropdowns
  // from a previous build (e.g. the old Review Income block) would linger.
  sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).clearDataValidations();
  sh.clear();
  sh.clearConditionalFormatRules();
  sh.getCharts().forEach(function (c) { sh.removeChart(c); });
  sh.setHiddenGridlines(true);
  return sh;
}

function reorderTabs_(ss) {
  for (var i = 0; i < TAB_ORDER.length; i++) {
    var sh = ss.getSheetByName(TAB_ORDER[i]);
    ss.setActiveSheet(sh);
    ss.moveActiveSheet(i + 1);
  }
}

function setNamedRanges_(ss) {
  var defs = {
    'cc_active_palette':  TABS.CONFIG + '!B40',
    'cc_active_profile':  TABS.CONFIG + '!B41',
    'cc_palettes':        TABS.CONFIG + '!A3:I18',
    'cc_profiles':        TABS.CONFIG + '!C22:X31',
    'cc_categories':      TABS.CATEGORIES + '!A11:A35',
    'cc_tx_categories':   TABS.CATEGORIES + '!A11:A37',
    'cc_keyword_rules':   TABS.CATEGORIES + '!E11:G200',
    'cc_budget_income':   TABS.BUDGET + '!C13',
    'cc_budget_targets':  TABS.BUDGET + '!F17:F41',
    'cc_engine_months':   TABS.ENGINE + '!B1:Y1',
    'cc_engine_data':     TABS.ENGINE + '!B2:Y30',
    'cc_dashboard_month': TABS.DASHBOARD + '!N4',
    'cc_trends_window':   TABS.TRENDS + '!N7',
    'cc_health_composite':TABS.HEALTH + '!B9',
    'cc_accounts_list':   TABS.ACCOUNTS + '!A10:A21'
  };
  Object.keys(defs).forEach(function (name) {
    try { ss.setNamedRange(name, ss.getRange(defs[name])); } catch (e) {}
  });
}
/**
 * Column & Co. — The Foundation v2.1
 * 04 · Data + system tabs: _Config, _Schema, Categories, Accounts,
 *      Transactions, _Engine.
 *
 * _Engine is formula-driven (SUMIFS over Transactions) so every view
 * updates automatically as the buyer imports — the cross-tab guarantee
 * in the QA checklist. The mock variant seeds a realistic 6-month ledger
 * so the demo shows real numbers through the same formulas.
 */

// ── _Config — palette table, profile table, active selections ─────────
function buildConfig_(sheet) {
  sheet.getRange('A1').setValue('palettes');
  var palHdr = ['id', 'name', 'primary', 'mid', 'accent', 'bg', 'zebra', 'dark', 'accentLight'];
  sheet.getRange(2, 1, 1, palHdr.length).setValues([palHdr]).setFontWeight('bold');
  var palRows = PALETTES.map(function (p) {
    return [p.id, p.name, p.primary, p.mid, p.accent, p.bg, p.zebra, p.dark, p.accentLight];
  });
  sheet.getRange(3, 1, palRows.length, palHdr.length).setValues(palRows);

  sheet.getRange('C20').setValue('profiles');
  var profHdr = ['id', 'name', 'sub', 'blurb', 'income'].concat(CATEGORIES);
  sheet.getRange(21, 3, 1, profHdr.length).setValues([profHdr]).setFontWeight('bold');
  var profRows = PROFILE_ORDER.map(function (id) {
    var p = PROFILES[id];
    return [id, p.name, p.sub, p.blurb, p.income].concat(p.targets);
  });
  sheet.getRange(22, 3, profRows.length, profHdr.length).setValues(profRows);

  sheet.getRange('A40').setValue('active_palette'); sheet.getRange('B40').setValue(DEFAULT_PALETTE);
  sheet.getRange('A41').setValue('active_profile'); sheet.getRange('B41').setValue(DEFAULT_PROFILE);
}

// ── _Schema — LLM-readable plain-English description (the wedge) ───────
function buildSchema_(sheet) {
  var lines = [
    'The Foundation v2.1 — Workbook Schema for AI assistants',
    '========================================================',
    '',
    "This workbook tracks a household's budget. Demo buyer: Marcus & Elena Brooks.",
    '',
    'Tabs:',
    '  • Transactions — every transaction. Columns: Date, Description, Amount',
    '    (negative = expense, positive = income), Category, Account, Counter-Account, Notes, Month.',
    '  • Accounts — register of bank accounts, credit cards, savings, and loans.',
    '  • Categories — 20 spending categories + keyword rules for auto-categorization.',
    '  • Monthly Budget — current targets per category, from one of 10 profiles',
    '    (Dave Ramsey, 50/30/20, FIRE, Zero-Based, Anti-Budget, Kakeibo,',
    '     New Parent, Self-Employed, HCOL Renter, Custom).',
    '  • Goals — 4 goal types (Savings Target, Debt Payoff, Spending Limit, Savings Rate).',
    '  • Net Worth — total assets minus total liabilities.',
    '  • Dashboard, Trends, Health Score — read-only views over the data.',
    '  • _Engine — pre-aggregated per-month x per-category sums. 24-month window.',
    '',
    'Conventions:',
    '  • Months in Transactions.Month are formatted YYYY-MM.',
    '  • Amounts: negative = expense, positive = income.',
    '  • Status chips: "On Track" if spent <= budget, "Fair" if <= 110%, "Over" otherwise.',
    '  • Health Score: 5 indicators weighted 25/20/20/20/15, summing to a 0-100 composite.',
    '  • Fonts: Playfair Display is substituted with Lora, Jost with Roboto (Sheets-native).',
    '',
    'For analysis, query the Transactions sheet. Typical questions:',
    '  • Which categories drifted over budget for 3+ months in a row?',
    "  • What's the trajectory of dining/subscriptions/shopping over 6 months?",
    '  • Which subscriptions should they cancel?',
    '  • How would changing X affect the Health Score?'
  ];
  sheet.getRange(1, 1, lines.length, 1).setValues(lines.map(function (l) { return [l]; }));
  sheet.getRange(1, 1, lines.length, 1).setFontFamily('Roboto Mono').setFontSize(10);
  sheet.setColumnWidth(1, 720);
}

// ── Categories — 20-category list + ~50 keyword rules ─────────────────
function buildCategories_(sheet, mode) {
  chrome_(sheet, TABS.CATEGORIES, 'H');
  var r = titleRow_(sheet, 'H', 'Categories',
    'The 20 spending categories and the keyword rules that auto-tag your imports.');

  sectionLabel_(sheet, 'A' + r, 'C' + r, 'CATEGORY LIST · 20 FIXED + 5 CUSTOM SLOTS');
  r += 1;
  sheet.getRange(r, 1, 1, 3).setValues([['Category Name', 'Type', 'Monthly Target']])
    .setFontWeight('bold').setFontColor(BRAND.BODY).setFontFamily(FONT.BODY).setFontSize(10);
  // 20 fixed categories (locked names)
  sheet.getRange(r + 1, 1, 20, 1).setValues(CATEGORIES.map(function (c) { return [c]; }));
  sheet.getRange(r + 1, 2, 20, 1).setValue('Expense');
  for (var i = 0; i < 20; i++) {
    sheet.getRange(r + 1 + i, 3).setFormula("='" + TABS.BUDGET + "'!F" + (17 + i)).setNumberFormat('$#,##0');
  }
  // zebra (fixed rows only)
  for (var z = 0; z < 20; z++) {
    if (z % 2 === 1) {
      var a1 = sheet.getRange(r + 1 + z, 1, 1, 3).getA1Notation();
      sheet.getRange(a1).setBackground(PALETTE_BY_ID.light.zebra);
      themable_(sheet.getName(), 'zebra', a1);
    }
  }
  // 5 custom slots — yellow editable name, default Expense type, Monthly
  // Target pulled from Monthly Budget rows 37-41 (added by buildMonthlyBudget_).
  var customStart = r + 1 + 20;   // row 31
  for (var cs = 0; cs < CUSTOM_CATEGORY_SLOTS; cs++) {
    var crow = customStart + cs;
    sheet.getRange(crow, 1).setBackground(BRAND.YELLOW)
      .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
    sheet.getRange(crow, 2).setValue('Expense').setFontColor(BRAND.CAPTION);
    sheet.getRange(crow, 3).setFormula("='" + TABS.BUDGET + "'!F" + (37 + cs)).setNumberFormat('$#,##0');
  }
  // System rows — Income / Transfer (locked, included so dropdowns can pick them up)
  var sysStart = customStart + CUSTOM_CATEGORY_SLOTS;   // row 36
  sheet.getRange(sysStart, 1, 2, 1).setValues([['Income'], ['Transfer']]).setFontColor(BRAND.CAPTION);
  sheet.getRange(sysStart, 2, 2, 1).setValues([['Income'], ['Transfer']]).setFontColor(BRAND.CAPTION);

  // Keyword rules region (cols E-G) — start at row 9 so it clears the
  // title row (rows 6-7 are merged full-width by titleRow_).
  sectionLabel_(sheet, 'E9', 'G9', 'KEYWORD RULES · AUTO-CATEGORIZATION');
  var kr = 10;
  sheet.getRange(kr, 5, 1, 3).setValues([['Keyword', 'Category', 'Note']])
    .setFontWeight('bold').setFontColor(BRAND.BODY).setFontFamily(FONT.BODY).setFontSize(10);
  sheet.getRange(kr + 1, 5, KEYWORD_RULES.length, 3).setValues(KEYWORD_RULES);
  // Category column (F): dropdown sourced from cc_tx_categories so custom
  // slot names + Income/Transfer all show up. Covers the whole reserved region.
  var ruleCatRange = SpreadsheetApp.getActive().getRangeByName('cc_tx_categories') ||
    sheet.getRange('A11:A37');
  var ruleCatVal = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ruleCatRange, true)
    .setAllowInvalid(false).build();
  sheet.getRange(kr + 1, 6, 190, 1).setDataValidation(ruleCatVal);

  footer_(sheet, kr + KEYWORD_RULES.length + 3, 'H');
  setColWidths_(sheet, [150, 90, 110, 24, 150, 130, 200, 40]);
  applyCategoryValidation_(sheet, r + 1);
}

function applyCategoryValidation_(sheet, firstRow) {
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Expense', 'Income', 'Transfer'], true).build();
  sheet.getRange(firstRow, 2, 20, 1).setDataValidation(rule);
}

// ── Accounts — register feeding Net Worth + Transactions dropdown ─────
function buildAccounts_(sheet, mode) {
  chrome_(sheet, TABS.ACCOUNTS, 'H');
  var r = titleRow_(sheet, 'H', 'Accounts',
    'Every account you track. Current balances feed Net Worth automatically.');

  var hdr = ['Account Name', 'Type', 'Owner', 'Starting Balance', 'Current Balance', 'Last Updated', 'Notes'];
  sheet.getRange(r, 1, 1, hdr.length).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 1, hdr.length).getA1Notation());

  var firstRow = r + 1;
  var rows = (mode === 'mock')
    ? MOCK.net_worth.budget_accounts.map(function (a) {
        return [a[0], a[1], a[2], a[3], a[3], new Date(2026, 4, 1), ''];
      })
    : [];
  var capacity = Math.max(rows.length, 12);
  if (rows.length) sheet.getRange(firstRow, 1, rows.length, 7).setValues(rows);
  sheet.getRange(firstRow, 4, capacity, 2).setNumberFormat('$#,##0');
  sheet.getRange(firstRow, 6, capacity, 1).setNumberFormat('mmm d, yyyy');

  // yellow input cells: starting + current balance
  sheet.getRange(firstRow, 4, capacity, 2).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);

  // validations
  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Checking', 'Savings', 'Credit', 'Loan', 'Investment'], true).build();
  sheet.getRange(firstRow, 2, capacity, 1).setDataValidation(typeRule);
  var ownerRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Joint', 'Marcus', 'Elena'], true).build();
  sheet.getRange(firstRow, 3, capacity, 1).setDataValidation(ownerRule);

  // Footer parked at row 45 so it can never fall inside cc_accounts_list
  // (currently A10:A21) and leak the brand line into the account dropdown.
  footer_(sheet, 45, 'H');
  setColWidths_(sheet, [200, 110, 90, 130, 130, 120, 200]);
}

// ── Transactions — the ledger (mock: generated 6-month ledger) ────────
function buildTransactions_(sheet, mode) {
  chrome_(sheet, TABS.TX, 'G');
  var r = titleRow_(sheet, 'G', 'Transactions',
    'Your ledger. Import a CSV or type by hand. Feeds every other tab.');

  var hdr = ['Date', 'Description', 'Amount', 'Category', 'Account', 'Notes', 'Month'];
  var headerRow = r;
  sheet.getRange(headerRow, 1, 1, 7).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(headerRow, 1, 1, 7).getA1Notation());
  SpreadsheetApp.flush();  // commit chrome merges before freezing
  try { sheet.setFrozenRows(headerRow); } catch (e) {}

  var firstData = headerRow + 1;
  var ledger = (mode === 'mock') ? generateMockLedger_() : [];
  if (ledger.length) {
    sheet.getRange(firstData, 1, ledger.length, 6).setValues(ledger);
  }

  // capacity: 5000 rows
  var lastRow = firstData + 4999;
  sheet.getRange(firstData, 1, 5000, 1).setNumberFormat('mmm d, yyyy');
  sheet.getRange(firstData, 3, 5000, 1).setNumberFormat('$#,##0.00');
  // Month formula column G across full capacity
  sheet.getRange(firstData, 7, 5000, 1)
    .setFormulaR1C1('=IF(RC1="","",TEXT(RC1,"yyyy-mm"))');

  // dropdowns — pull from cc_tx_categories so custom slot names appear automatically
  var catRange = SpreadsheetApp.getActive().getRangeByName('cc_tx_categories') ||
    SpreadsheetApp.getActive().getRange("'" + TABS.CATEGORIES + "'!A11:A37");
  var catList = SpreadsheetApp.newDataValidation()
    .requireValueInRange(catRange, true).build();
  sheet.getRange(firstData, 4, 5000, 1).setDataValidation(catList);
  var acctRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(SpreadsheetApp.getActive().getRangeByName('cc_accounts_list') ||
      SpreadsheetApp.getActive().getRange("'" + TABS.ACCOUNTS + "'!A10:A21"), true).build();
  sheet.getRange(firstData, 5, 5000, 1).setDataValidation(acctRule);

  setColWidths_(sheet, [110, 280, 110, 150, 170, 200, 90]);
  sheet.hideColumns(7); // Month is a helper column
}

// Build a realistic 6-month ledger (Dec 2025 – May 2026) whose monthly
// category sums reproduce the mock story so the formula-driven _Engine
// shows the right numbers.
function generateMockLedger_() {
  var rows = [];
  var months = MOCK.months_24.slice(18); // last 6 = Dec25..May26
  var accounts = ['Chase Joint Checking', 'Amex Gold Card', 'Chase Sapphire Card', 'Elena Checking', 'Marcus Checking'];
  // category spend weights from the current-month breakdown
  var breakdownMap = {}; MOCK.breakdown.forEach(function (b) { breakdownMap[b[0]] = b[1]; });
  var totalBreakdown = MOCK.breakdown.reduce(function (s, b) { return s + b[1]; }, 0);

  for (var m = 0; m < months.length; m++) {
    var label = months[m][0];                 // e.g. 'May 2026'
    var parts = label.split(' ');
    var monthIdx = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(parts[0]);
    var year = Number(parts[1]);
    var income = months[m][1], expenses = months[m][2];

    // income — one direct-deposit row
    rows.push([new Date(year, monthIdx, 1), 'DIRECT DEPOSIT - ACME CO', income, 'Income', 'Chase Joint Checking', '']);

    // expenses — distribute across categories by breakdown weight, scaled to this month's total
    CATEGORIES.forEach(function (cat, ci) {
      var weight = (breakdownMap[cat] || 0) / totalBreakdown;
      if (weight <= 0) return;
      var amt = Math.round(expenses * weight);
      if (amt <= 0) return;
      var desc = mockMerchant_(cat);
      var acct = accounts[(ci + m) % accounts.length];
      var day = 3 + (ci % 24);
      rows.push([new Date(year, monthIdx, day), desc, -amt, cat, acct, '']);
    });
  }
  return rows;
}

function mockMerchant_(cat) {
  var map = {
    'Housing': 'GREYSTONE PROPERTY MGMT', 'Food & Dining': 'WHOLE FOODS MARKET #347',
    'Transportation': 'SHELL OIL 575421', 'Shopping': 'AMAZON.COM*RT4D9',
    'Utilities': 'COMCAST XFINITY', 'Entertainment': 'AMC THEATRES #88',
    'Subscriptions': 'NETFLIX.COM', 'Personal Care': 'SEPHORA #221',
    'Gifts & Donations': 'RED CROSS DONATION', 'Health & Medical': 'CVS PHARMACY #4471',
    'Insurance': 'GEICO AUTO', 'Savings': 'TRANSFER TO ALLY SAVINGS',
    'Debt Payments': 'CHASE CARD PAYMENT', 'Education': 'COURSERA SUBSCRIPTION',
    'Travel': 'DELTA AIR LINES', 'Pets': 'CHEWY.COM', 'Childcare': 'BRIGHT HORIZONS',
    'Business': 'ADOBE CREATIVE CLOUD', 'Taxes': 'IRS EFTPS PAYMENT', 'Misc': 'VENMO PAYMENT'
  };
  return map[cat] || 'MISC PURCHASE';
}

// ── _Engine — formula-driven aggregation (SUMIFS over Transactions) ───
function buildEngine_(sheet, mode) {
  // Row 1: 24 month headers (YYYY-MM), Jun24..May26
  var monthCodes = MOCK.months_24.map(function (m) {
    var parts = m[0].split(' ');
    var mi = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(parts[0]) + 1;
    return parts[1] + '-' + ('0' + mi).slice(-2);
  });
  sheet.getRange('A1').setValue('metric \\ month').setFontWeight('bold');
  sheet.getRange(1, 2, 1, 24).setValues([monthCodes]).setFontWeight('bold');

  // Rows 2-21: 20 fixed categories. Each cell SUMIFS expenses (abs) for that month+cat.
  var txAmount = "'" + TABS.TX + "'!$C:$C";
  var txCat = "'" + TABS.TX + "'!$D:$D";
  var txMonth = "'" + TABS.TX + "'!$G:$G";
  for (var i = 0; i < CATEGORIES.length; i++) {
    var row = 2 + i;
    sheet.getRange(row, 1).setValue(CATEGORIES[i]);
    for (var c = 0; c < 24; c++) {
      var col = 2 + c;
      var colL = columnToLetter_(col);
      sheet.getRange(row, col).setFormula(
        '=ABS(SUMIFS(' + txAmount + ',' + txCat + ',$A' + row + ',' + txMonth + ',' + colL + '$1))'
      );
    }
  }
  // Rows 22-26: 5 custom-category slots. Col A reads the user-typed name from
  // the Categories tab — when blank, SUMIFS matches nothing and the row stays 0.
  for (var cs = 0; cs < CUSTOM_CATEGORY_SLOTS; cs++) {
    var crow = 22 + cs;
    sheet.getRange(crow, 1).setFormula("='" + TABS.CATEGORIES + "'!A" + (31 + cs));
    for (var cc = 0; cc < 24; cc++) {
      var ccol = 2 + cc;
      var ccolL = columnToLetter_(ccol);
      sheet.getRange(crow, ccol).setFormula(
        '=IF($A' + crow + '="",0,ABS(SUMIFS(' + txAmount + ',' + txCat + ',$A' + crow + ',' + txMonth + ',' + ccolL + '$1)))'
      );
    }
  }
  // Rows 27-30: Income, Expenses, NetCashFlow, SavingsRate
  sheet.getRange(27, 1).setValue('Income');
  sheet.getRange(28, 1).setValue('Expenses');
  sheet.getRange(29, 1).setValue('NetCashFlow');
  sheet.getRange(30, 1).setValue('SavingsRate');
  for (var c2 = 0; c2 < 24; c2++) {
    var colL2 = columnToLetter_(2 + c2);
    // Income = SUMIFS positive amounts where category = Income
    sheet.getRange(27, 2 + c2).setFormula(
      '=SUMIFS(' + txAmount + ',' + txCat + ',"Income",' + txMonth + ',' + colL2 + '$1)');
    // Expenses = sum of all category rows 2..26 (20 fixed + 5 custom)
    sheet.getRange(28, 2 + c2).setFormula('=SUM(' + colL2 + '2:' + colL2 + '26)');
    sheet.getRange(29, 2 + c2).setFormula('=' + colL2 + '27-' + colL2 + '28');
    sheet.getRange(30, 2 + c2).setFormula(
      '=IF(' + colL2 + '27=0,0,' + colL2 + '29/' + colL2 + '27)').setNumberFormat('0.0%');
  }
  sheet.getRange(2, 2, 28, 24).setNumberFormat('$#,##0');
  sheet.getRange(30, 2, 1, 24).setNumberFormat('0.0%');
}

function columnToLetter_(col) {
  var letter = '';
  while (col > 0) { var m = (col - 1) % 26; letter = String.fromCharCode(65 + m) + letter; col = Math.floor((col - 1) / 26); }
  return letter;
}
/**
 * Column & Co. — The Foundation v2.1
 * 05 · View tabs: Start Here, Dashboard, Trends, Health Score, Net Worth.
 *
 * _Engine month columns: B..Y = 24 months (Jun24..May26). The current
 * mock month (May 2026) is column Y (index 23, 0-based). Views read the
 * active month via the cc_dashboard_month cell so the month pills re-drive
 * every figure.
 */

var ENG = "'" + '_Engine' + "'";       // qualified sheet ref
var CUR_MONTH_COL = 25;                 // Y — May 2026
var CUR_MONTH_IDX = 23;                 // 0-based

// ── Start Here ────────────────────────────────────────────────────────
function buildStartHere_(sheet) {
  chrome_(sheet, TABS.START, 'L', 'SETUP GUIDE');
  var r = CONTENT_START_ROW;

  setCell_(sheet, 'A' + r, { value: 'Open it. Add your information. Get clear.',
    merge: 'L' + r, font: FONT.DISPLAY, size: 26, bold: true, color: BRAND.FOREST, v: 'bottom' });
  sheet.setRowHeight(r, 40);
  setCell_(sheet, 'A' + (r + 1), {
    value: 'A budget system you own. No subscription, no third party holding your data. Pick a theme, add your accounts, import a CSV — and get clear.',
    merge: 'L' + (r + 1), font: FONT.BODY, size: 13, color: BRAND.BODY, wrap: true, v: 'top' });
  sheet.setRowHeight(r + 1, 36);

  // Choose Your Theme — 16 tiles in an 8x2 grid (each tile = swatch + name)
  r += 3;
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'CHOOSE YOUR THEME · 16 PALETTES · APPLY VIA 💳 COLUMN & CO. ▸ APPLY THEME');
  r += 1;
  var tileTop = r;
  for (var i = 0; i < PALETTES.length; i++) {
    var p = PALETTES[i];
    var rowBlock = Math.floor(i / 8);     // 0 or 1
    var colInRow = i % 8;                  // 0..7
    var topRow = tileTop + rowBlock * 3;
    var col = 1 + colInRow + (colInRow > 0 ? 0 : 0); // one column per tile (A..H)
    // swatch (3 stacked stripe via 1 cell filled primary, with name beneath)
    sheet.getRange(topRow, col).setBackground(p.primary);
    sheet.getRange(topRow + 1, col).setBackground(p.accent);
    setCell_(sheet, sheet.getRange(topRow + 2, col).getA1Notation(),
      { value: p.name, font: FONT.BODY, size: 8, color: BRAND.BODY, h: 'center', wrap: true });
  }
  sheet.setColumnWidths(1, 8, 78);

  // Setup guide — 5 steps
  r = tileTop + 7;
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'SETUP GUIDE · 5 STEPS');
  r += 1;
  var steps = [
    ['1', 'Install the Script', 'Extensions → Apps Script → paste the ColumnCo file. A 💳 Column & Co. menu appears.'],
    ['2', 'Set Up Accounts', 'Add every bank account, card, and savings account. Enter current balances.'],
    ['3', 'Import Transactions', 'Type the account name in C6 of Bank Import. Paste your bank CSV. Run Import.'],
    ['4', 'Set Your Goals', 'Pick a Type, a Category or Account, a Target. Progress tracks automatically.'],
    ['5', 'Explore Your Data', 'Dashboard, Trends, Health Score, and Net Worth update as you import.']
  ];
  for (var s = 0; s < 5; s++) {
    var c0 = 1 + s * 2; // each step spans ~2 cols (A-B, C-D, ...)
    setCell_(sheet, sheet.getRange(r, c0).getA1Notation(),
      { value: steps[s][0], merge: sheet.getRange(r, c0 + 1).getA1Notation(),
        font: FONT.DISPLAY, size: 18, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'center', v: 'middle' });
    themable_(sheet.getName(), 'primary', sheet.getRange(r, c0, 1, 2).getA1Notation());
    setCell_(sheet, sheet.getRange(r + 1, c0).getA1Notation(),
      { value: steps[s][1], merge: sheet.getRange(r + 1, c0 + 1).getA1Notation(),
        font: FONT.DISPLAY, size: 12, italic: true, color: BRAND.FOREST, h: 'left', v: 'middle' });
    setCell_(sheet, sheet.getRange(r + 2, c0).getA1Notation(),
      { value: steps[s][2], merge: sheet.getRange(r + 2, c0 + 1).getA1Notation(),
        font: FONT.BODY, size: 10, color: BRAND.BODY, wrap: true, v: 'top' });
  }
  sheet.setRowHeight(r + 2, 56);

  // LLM-ready callout — full-bleed Forest panel (paint, don't pre-merge)
  r += 4;
  sheet.getRange(r, 1, 5, 12).setBackground(BRAND.FOREST).setVerticalAlignment('top');
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 5, 12).getA1Notation());
  setCell_(sheet, 'A' + r, { value: 'Ask Claude or ChatGPT to read your sheet.', merge: 'F' + r,
    font: FONT.DISPLAY, size: 18, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST });
  setCell_(sheet, 'A' + (r + 1), {
    value: 'A hidden _Schema tab documents every column for an AI. Copy the prompt, paste it in your assistant, attach your sheet. You get insights in seconds.',
    merge: 'F' + (r + 2), font: FONT.BODY, size: 12, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });
  var code = sheet.getRange(r, 7, 5, 6).merge();
  code.setBackground(BRAND.FOREST_HI).setFontFamily('Roboto Mono').setFontSize(10)
    .setFontColor(BRAND.CREAM).setWrap(true).setVerticalAlignment('middle').setHorizontalAlignment('left')
    .setValue('Find every category where I\'m trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel.');
  themable_(sheet.getName(), 'primary', code.getA1Notation());

  footer_(sheet, r + 6, 'L');
  setColWidths_(sheet, [78, 78, 78, 78, 78, 78, 78, 78, 70, 70, 70, 70]);
}

// ── Dashboard ─────────────────────────────────────────────────────────
function buildDashboard_(sheet, mode) {
  chrome_(sheet, TABS.DASHBOARD, 'L', 'VIEWING MONTH · MAY 2026');
  // Replace the static breadcrumb with a live formula so it tracks N4.
  sheet.getRange('A3').setFormula(
    '="VIEWING MONTH · "&UPPER(TEXT(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),"mmm yyyy"))&"  "');
  var r = titleRow_(sheet, 'L', 'Dashboard',
    'Your money at a glance. Updated automatically as transactions come in.');

  // active month index cell (named cc_dashboard_month) at N4 — set in build
  sheet.getRange('N4').setValue(CUR_MONTH_IDX);
  sheet.getRange('N3').setValue('active_month_idx (0-23)').setFontColor(BRAND.CAPTION).setFontSize(8);

  // Month label + 6 pills
  setCell_(sheet, 'A' + r, {
    formula: '=TEXT(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),"mmmm yyyy")',
    merge: 'C' + r, font: FONT.DISPLAY, size: 26, bold: true, color: BRAND.FOREST });
  var pillMonths = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  for (var i = 0; i < 6; i++) {
    var col = 6 + i;
    setCell_(sheet, sheet.getRange(r, col).getA1Notation(), {
      value: pillMonths[i], font: FONT.BODY, size: 11, bold: true, h: 'center', v: 'middle',
      bg: BRAND.FOREST, color: BRAND.PARCHMENT });
    themable_(sheet.getName(), 'primary', sheet.getRange(r, col).getA1Notation());
  }
  // CF: paint inactive pills cream (active pill = the one whose column matches N4-12).
  var pillRange = sheet.getRange(r, 6, 1, 6);
  var inactiveRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=COLUMN()<>$N$4-12')
    .setBackground(BRAND.CREAM).setFontColor(BRAND.BODY).setBold(true)
    .setRanges([pillRange]).build();
  sheet.setConditionalFormatRules(sheet.getConditionalFormatRules().concat([inactiveRule]));
  r += 2;

  // KPI row — 4 cards (3 cols each)
  var incF = '=INDEX(' + ENG + '!$B$27:$Y$27,1,N4+1)';
  var expF = '=INDEX(' + ENG + '!$B$28:$Y$28,1,N4+1)';
  var netF = '=INDEX(' + ENG + '!$B$29:$Y$29,1,N4+1)';
  var srF  = '=INDEX(' + ENG + '!$B$30:$Y$30,1,N4+1)';
  kpiCard_(sheet, 'A' + r, 3, 'TOTAL INCOME', incF, 'vs last month +0.1%', BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'TOTAL EXPENSES', expF, 'vs last month +1.1%', BRAND.GARNET);
  kpiCard_(sheet, 'G' + r, 3, 'NET CASH FLOW', netF, 'vs last month −$65', BRAND.FOREST);
  kpiCard_(sheet, 'J' + r, 3, 'SAVINGS RATE', srF, 'goal: 20%+ — crushing it', BRAND.GOLD);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 10).setNumberFormat('0.0%');
  r += 4;

  // Top spending table (left, cols A-H) + Month Snapshot (right, I-L)
  sectionLabel_(sheet, 'A' + r, 'H' + r, 'TOP SPENDING');
  sheet.getRange('A' + r).setFormula(
    '="TOP SPENDING · "&UPPER(TEXT(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),"mmm yyyy"))');
  sectionLabel_(sheet, 'I' + r, 'L' + r, 'MONTH SNAPSHOT');
  r += 1;
  sheet.getRange(r, 1, 1, 5).setValues([['Category', 'Spent', 'Budget', '% of Budget', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var tsStart = r + 1;
  for (var t = 0; t < MOCK.top_spending.length; t++) {
    var row = MOCK.top_spending[t]; var rr = tsStart + t;
    sheet.getRange(rr, 1).setValue(row[0]);
    sheet.getRange(rr, 2).setValue(row[1]).setNumberFormat('$#,##0');
    sheet.getRange(rr, 3).setValue(row[2]).setNumberFormat('$#,##0');
    sheet.getRange(rr, 4).setFormula('=B' + rr + '/C' + rr).setNumberFormat('0%');
    sheet.getRange(rr, 5).setFormula('=IF(B' + rr + '<=C' + rr + ',"On Track",IF(B' + rr + '<=C' + rr + '*1.1,"Fair","Over"))');
    // pacing bar in col G via sparkline
    sheet.getRange(rr, 6, 1, 2).merge();
    sheet.getRange(rr, 6).setFormula('=SPARKLINE(B' + rr + ',{"charttype","bar";"max",C' + rr + ';"color1","' + BRAND.FOREST + '"})');
    if (t % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 5).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  statusChipCF_(sheet, sheet.getRange(tsStart, 5, MOCK.top_spending.length, 1).getA1Notation());

  // Month snapshot
  var snap = [['Income', MOCK.snapshot.income], ['Expenses', MOCK.snapshot.expenses], ['Net', MOCK.snapshot.net],
    ['Savings Rate', MOCK.snapshot.savings_rate / 100], ['Avg Daily Spend', MOCK.snapshot.avg_daily],
    ['Transactions', MOCK.snapshot.transactions], ['Largest Expense', MOCK.snapshot.largest_expense]];
  for (var sI = 0; sI < snap.length; sI++) {
    var sr = tsStart + sI;
    setCell_(sheet, sheet.getRange(sr, 9).getA1Notation(), { value: snap[sI][0], merge: sheet.getRange(sr, 10).getA1Notation(), font: FONT.BODY, size: 11, color: BRAND.BODY });
    var vcell = sheet.getRange(sr, 11, 1, 2).merge();
    vcell.setValue(snap[sI][1]).setFontFamily(FONT.BODY).setFontWeight('bold').setFontColor(BRAND.FOREST).setHorizontalAlignment('right');
    if (sI === 3) vcell.setNumberFormat('0.0%'); else if (sI !== 5) vcell.setNumberFormat('$#,##0');
  }
  r = tsStart + Math.max(MOCK.top_spending.length, snap.length) + 2;

  // Spending Breakdown (donut, native chart) + AI Insights panel
  sectionLabel_(sheet, 'A' + r, 'F' + r, 'SPENDING BREAKDOWN');
  sectionLabel_(sheet, 'G' + r, 'L' + r, 'AI INSIGHTS');
  r += 1;
  // donut data block (hidden-ish, cols A-B)
  var bdStart = r;
  sheet.getRange(bdStart, 1, MOCK.breakdown.length, 2).setValues(MOCK.breakdown);
  sheet.getRange(bdStart, 2, MOCK.breakdown.length, 1).setNumberFormat('$#,##0');
  buildDonut_(sheet, bdStart, MOCK.breakdown.length);

  // AI insights — Forest-on-cream, 3 callouts
  for (var a = 0; a < MOCK.ai_insights.length; a++) {
    var ar = bdStart + a * 2;
    setCell_(sheet, sheet.getRange(ar, 7).getA1Notation(), { value: MOCK.ai_insights[a][0], merge: sheet.getRange(ar, 12).getA1Notation(),
      font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, h: 'left', v: 'middle' });
    themable_(sheet.getName(), 'primary', sheet.getRange(ar, 7, 1, 6).getA1Notation());
    setCell_(sheet, sheet.getRange(ar + 1, 7).getA1Notation(), { value: MOCK.ai_insights[a][1], merge: sheet.getRange(ar + 1, 12).getA1Notation(),
      font: FONT.BODY, size: 12, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });
    themable_(sheet.getName(), 'primary', sheet.getRange(ar + 1, 7, 1, 6).getA1Notation());
    sheet.setRowHeight(ar + 1, 34);
  }

  r = bdStart + Math.max(MOCK.breakdown.length, 7) + 2;
  footer_(sheet, r, 'L');
  setColWidths_(sheet, [120, 80, 80, 90, 70, 50, 60, 60, 110, 90, 70, 70]);
}

function buildDonut_(sheet, dataStartRow, n) {
  var range = sheet.getRange(dataStartRow, 1, n, 2);
  var chart = sheet.newChart().asPieChart().setOption('pieHole', 0.6)
    .addRange(range).setPosition(dataStartRow, 1, 0, 0)
    .setOption('legend', { position: 'right' })
    .setOption('colors', DONUT_RAMP)
    .setOption('title', '')
    .setOption('width', 320).setOption('height', 240)
    .setNumHeaders(0).build();
  sheet.insertChart(chart);
}

// ── Trends ────────────────────────────────────────────────────────────
function buildTrends_(sheet, mode) {
  chrome_(sheet, TABS.TRENDS, 'L');
  var r = titleRow_(sheet, 'L', 'Trends',
    'Six months in, twenty-four months out. Where your money has gone.');

  // window selector (cc_trends_window at N7) + 3 pills.
  // Pills sit at cols J-L (10-12), to the right of the 3 KPI cards which
  // occupy A-I (3 cards × 3 cols). kpiCard_ renders after this, so anything
  // in cols A-I would get clobbered when the AVG NET card merges G:I.
  sheet.getRange('N7').setValue(6);
  sheet.getRange('N6').setValue('window (6/12/24)').setFontColor(BRAND.CAPTION).setFontSize(8);
  var wins = [6, 12, 24];
  for (var i = 0; i < 3; i++) {
    var active = (wins[i] === 6);
    setCell_(sheet, sheet.getRange(r, 10 + i).getA1Notation(), { value: wins[i] + ' mo',
      font: FONT.BODY, size: 11, bold: true, h: 'center', v: 'middle',
      bg: active ? BRAND.FOREST : BRAND.CREAM, color: active ? BRAND.PARCHMENT : BRAND.BODY });
    if (active) themable_(sheet.getName(), 'primary', sheet.getRange(r, 10 + i).getA1Notation());
  }

  // KPI strip — averages over the window
  var avg = function (row) {
    return '=AVERAGE(INDEX(' + ENG + '!$B$' + row + ':$Y$' + row + ',1,24-N7+1):INDEX(' + ENG + '!$B$' + row + ':$Y$' + row + ',1,24))';
  };
  kpiCard_(sheet, 'A' + r, 3, 'AVG INCOME', avg(27), 'over selected window', BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'AVG EXPENSES', avg(28), 'over selected window', BRAND.GARNET);
  kpiCard_(sheet, 'G' + r, 3, 'AVG NET', avg(29), 'over selected window', BRAND.FOREST);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('$#,##0');
  r += 4;

  // Income vs Expenses combo chart (uses _Engine rows 27-28 last 6 months)
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'INCOME vs EXPENSES · SAVINGS RATE');
  r += 1;
  buildTrendsChart_(sheet, r);
  r += 12;

  // Category sparkline table — 20 fixed + 5 custom slots (custom slots show
  // a blank name + flat sparkline until the buyer types a slot name on Categories).
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'CATEGORY TRENDS · LAST 6 MONTHS');
  r += 1;
  sheet.getRange(r, 1, 1, 4).setValues([['Category', 'Sparkline (6 mo)', 'Last Month', 'Δ vs first']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var start = r + 1;
  var totalCats = CATEGORIES.length + CUSTOM_CATEGORY_SLOTS;   // 25 rows
  for (var c = 0; c < totalCats; c++) {
    var er = 2 + c;             // engine row for this category
    var rr = start + c;
    if (c < CATEGORIES.length) {
      sheet.getRange(rr, 1).setValue(CATEGORIES[c]);
    } else {
      // custom-slot row — name comes from the engine's col A (which itself
      // pulls from Categories tab), so a slot rename propagates here too.
      sheet.getRange(rr, 1).setFormula('=' + ENG + '!A' + er).setFontStyle('italic');
    }
    sheet.getRange(rr, 2, 1, 1).setFormula(
      '=SPARKLINE(' + ENG + '!T' + er + ':Y' + er + ',{"charttype","line";"color","' + BRAND.FOREST + '";"linewidth",2})');
    sheet.getRange(rr, 3).setFormula('=' + ENG + '!Y' + er).setNumberFormat('$#,##0');
    sheet.getRange(rr, 4).setFormula('=IFERROR(' + ENG + '!Y' + er + '-' + ENG + '!T' + er + ',0)').setNumberFormat('+$#,##0;−$#,##0');
    if (c % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 4).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  footer_(sheet, start + totalCats + 2, 'L');
  setColWidths_(sheet, [140, 180, 90, 90, 60, 60, 60, 60, 70, 70, 70, 70]);
}

function buildTrendsChart_(sheet, atRow) {
  // pull last-6 month labels + income/expenses into a small block for the chart
  var labels = MOCK.months_24.slice(18).map(function (m) { return [m[0].replace(' 20', " '")]; });
  var inc = MOCK.months_24.slice(18).map(function (m) { return [m[1]]; });
  var exp = MOCK.months_24.slice(18).map(function (m) { return [m[2]]; });
  // stash in far columns (P,Q,R) for the chart source
  sheet.getRange(atRow, 16, 1, 3).setValues([['Month', 'Income', 'Expenses']]);
  sheet.getRange(atRow + 1, 16, 6, 1).setValues(labels);
  sheet.getRange(atRow + 1, 17, 6, 1).setValues(inc);
  sheet.getRange(atRow + 1, 18, 6, 1).setValues(exp);
  var range = sheet.getRange(atRow, 16, 7, 3);
  var chart = sheet.newChart().asColumnChart()
    .addRange(range).setPosition(atRow, 1, 0, 0)
    .setOption('colors', [BRAND.FOREST, BRAND.CANOPY])
    .setOption('legend', { position: 'top' })
    .setOption('width', 720).setOption('height', 220)
    .build();
  sheet.insertChart(chart);
}

// ── Health Score ──────────────────────────────────────────────────────
function buildHealthScore_(sheet, mode) {
  chrome_(sheet, TABS.HEALTH, 'L');
  var r = titleRow_(sheet, 'L', 'Health Score',
    'A composite 0–100 across five weighted indicators. Where you stand, and what to fix first.');

  // hero composite (Playfair big number)
  var h = MOCK.health;
  setCell_(sheet, 'B' + r, { value: h.composite, merge: 'C' + (r + 1),
    font: FONT.DISPLAY, size: 64, bold: true, color: BRAND.FOREST, h: 'center', v: 'middle' });
  setCell_(sheet, 'B' + (r + 2), { value: h.grade, merge: 'C' + (r + 2),
    font: FONT.DISPLAY, size: 16, italic: true, color: BRAND.GOLD, h: 'center' });

  // box-drawing scale + pip
  var scale = '0 ─── Critical ─── 45 ─── Needs Work ─── 60 ─── Fair ─── 75 ─── Good ─── 90 ─── Excellent ─── 100';
  setCell_(sheet, 'E' + r, { value: scale, merge: 'L' + r, font: 'Roboto Mono', size: 10, color: BRAND.BODY, v: 'middle' });
  var pip = repeatStr_(' ', Math.round(h.composite / 100 * 64)) + '▼';
  setCell_(sheet, 'E' + (r + 1), { value: pip, merge: 'L' + (r + 1), font: 'Roboto Mono', size: 10, color: BRAND.CANOPY });
  r += 3;

  // 5 indicator rows
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'INDICATORS · 5 WEIGHTED MEASURES');
  r += 1;
  sheet.getRange(r, 1, 1, 6).setValues([['Indicator', 'Value', 'Benchmark', 'Weight', 'Score (0–100)', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var start = r + 1;
  for (var i = 0; i < h.indicators.length; i++) {
    var ind = h.indicators[i]; var rr = start + i;
    sheet.getRange(rr, 1).setValue(ind[0]);
    sheet.getRange(rr, 2).setValue(ind[1]);
    sheet.getRange(rr, 3, 1, 1); sheet.getRange(rr, 3).setValue(ind[5]);
    sheet.getRange(rr, 4).setValue(ind[3] / 100).setNumberFormat('0%');
    sheet.getRange(rr, 5).setFormula('=SPARKLINE(' + ind[2] + ',{"charttype","bar";"max",100;"color1","' + BRAND.FOREST + '"})');
    sheet.getRange(rr, 6).setValue(statusText_(ind[4]));
    if (i % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 6).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  statusChipCF_(sheet, sheet.getRange(start, 6, h.indicators.length, 1).getA1Notation());
  r = start + h.indicators.length + 1;

  // Biggest Opportunity callout — Forest panel + delta arrow (paint, don't pre-merge)
  sheet.getRange(r, 1, 3, 12).setBackground(BRAND.FOREST).setVerticalAlignment('middle');
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 3, 12).getA1Notation());
  setCell_(sheet, 'A' + r, { value: '⚡ BIGGEST OPPORTUNITY', merge: 'D' + r,
    font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, v: 'middle' });
  setCell_(sheet, 'E' + r, { value: h.delta_from + ' → ' + h.delta_to, merge: 'F' + r,
    font: FONT.DISPLAY, size: 18, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'center', v: 'middle' });
  setCell_(sheet, 'A' + (r + 1), { value: h.biggest_opportunity, merge: 'L' + (r + 2),
    font: FONT.BODY, size: 13, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });

  // composite cell for named range cc_health_composite at B9 — ensure value present
  sheet.getRange('B9').setValue(h.composite);
  footer_(sheet, r + 4, 'L');
  setColWidths_(sheet, [150, 90, 200, 70, 130, 80, 60, 60, 60, 60, 60, 60]);
}

// ── Net Worth ─────────────────────────────────────────────────────────
function buildNetWorth_(sheet, mode) {
  chrome_(sheet, TABS.NETWORTH, 'L');
  var r = CONTENT_START_ROW;
  var nw = MOCK.net_worth;

  // Hero Forest panel (rows r..r+5) — paint, don't pre-merge
  sheet.getRange(r, 1, 6, 12).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 6, 12).getA1Notation());
  setCell_(sheet, 'A' + r, { value: 'TOTAL NET WORTH', merge: 'F' + r, font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST });
  setCell_(sheet, 'A' + (r + 1), { value: nw.total, merge: 'F' + (r + 2), font: FONT.DISPLAY, size: 48, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, v: 'middle' });
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  setCell_(sheet, 'A' + (r + 3), { value: '+' + money_(nw.change_mo) + ' this month', merge: 'F' + (r + 3), font: FONT.BODY, size: 12, color: BRAND.GOLD, bg: BRAND.FOREST });
  // sparkline of 6-month history (right)
  sheet.getRange(r + 1, 8, 6, 1).setValues(nw.history.map(function (v) { return [v]; }));
  sheet.hideColumns(8);
  setCell_(sheet, 'I' + r, { value: 'NET WORTH · 6 MO', merge: 'L' + r, font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST });
  var spark = sheet.getRange(r + 1, 9, 1, 4).merge();
  spark.setFormula(sparkLine_('H' + (r + 1) + ':H' + (r + 6), BRAND.GOLD)).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', spark.getA1Notation());
  // asset / liability cards
  setCell_(sheet, 'I' + (r + 3), { value: 'Assets ' + money_(nw.assets) + '   ·   Liabilities ' + money_(nw.liabilities),
    merge: 'L' + (r + 4), font: FONT.DISPLAY, size: 14, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'middle' });
  r += 7;

  // Budget accounts (left) + investments (right)
  sectionLabel_(sheet, 'A' + r, 'F' + r, 'BUDGET ACCOUNTS · AUTO FROM ACCOUNTS TAB');
  sectionLabel_(sheet, 'G' + r, 'L' + r, 'INVESTMENTS · MANUAL ENTRY');
  r += 1;
  sheet.getRange(r, 1, 1, 4).setValues([['Account', 'Type', 'Owner', 'Balance']]).setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  sheet.getRange(r, 7, 1, 3).setValues([['Account', 'Type', 'Value']]).setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var ba = nw.budget_accounts, inv = nw.investments;
  var ds = r + 1;
  // pull budget accounts from Accounts tab (auto)
  for (var i = 0; i < ba.length; i++) {
    var rr = ds + i; var ar = 10 + i; // Accounts data starts row 10
    sheet.getRange(rr, 1).setFormula("='" + TABS.ACCOUNTS + "'!A" + ar);
    sheet.getRange(rr, 2).setFormula("='" + TABS.ACCOUNTS + "'!B" + ar);
    sheet.getRange(rr, 3).setFormula("='" + TABS.ACCOUNTS + "'!C" + ar);
    sheet.getRange(rr, 4).setFormula("='" + TABS.ACCOUNTS + "'!E" + ar).setNumberFormat('$#,##0');
  }
  for (var j = 0; j < inv.length; j++) {
    var jr = ds + j;
    sheet.getRange(jr, 7).setValue(inv[j][0]);
    sheet.getRange(jr, 8).setValue(inv[j][1]);
    sheet.getRange(jr, 9).setValue(inv[j][2]).setNumberFormat('$#,##0').setBackground(BRAND.YELLOW);
  }
  // net-worth total cell named range cc_networth_total at D6 area — store at far cell
  footer_(sheet, ds + Math.max(ba.length, inv.length) + 2, 'L');
  setColWidths_(sheet, [160, 90, 80, 110, 24, 24, 160, 90, 110, 60, 60, 60]);
}

function repeatStr_(s, n) { var o = ''; for (var i = 0; i < n; i++) o += s; return o; }
/**
 * Column & Co. — The Foundation v2.1
 * 06 · Action tabs: Monthly Budget, Goals, Bank Import Guide.
 */

// Cell contract shared with 12_profile.gs (all internal — change together
// with setNamedRanges_ and buildCategories_ if you move these).
var BUDGET_NAME_CELL   = 'A7';   // active profile display name
var BUDGET_SUB_CELL    = 'A9';   // sub
var BUDGET_BLURB_CELL  = 'A10';  // blurb
var BUDGET_INCOME_CELL = 'C13';  // monthly income input
var BUDGET_PICKER_CELL = 'C14';  // active profile id
var BUDGET_TARGETS_FIRST_ROW = 17;  // C17..C36 targets, B17..B36 categories
var BUDGET_SAVINGS_ROW = 28;     // Savings is category index 11 -> row 28

// Bank Import cell contract
var IMPORT_ACCOUNT_CELL = 'C10';
var IMPORT_PASTE_ANCHOR = 'A12';            // top-left of the unmerged paste grid
var IMPORT_PASTE_ROW_COUNT = 50;            // 50 rows × 8 cols = paste capacity
var IMPORT_PASTE_COL_COUNT = 8;
var IMPORT_PASTE_LAST_ROW = 12 + IMPORT_PASTE_ROW_COUNT - 1;   // 61
var REVIEW_INCOME_HEADER_ROW = 64;
var REVIEW_INCOME_FIRST_ROW  = 65;
var REVIEW_INCOME_ROW_COUNT  = 20;
var UNCAT_SECTION_ROW = 87;       // section label
var UNCAT_HEADER_ROW  = 88;
var UNCAT_FIRST_ROW   = 89;
var UNCAT_ROW_COUNT   = 20;

// ── Monthly Budget ────────────────────────────────────────────────────
// Columns: B Category · C Preset% (locked) · D Override% (yellow editable)
// · E Target% (= override or preset) · F Target$ (= Target% × income) · G Δ% · H Share
function buildMonthlyBudget_(sheet, mode) {
  chrome_(sheet, TABS.BUDGET, 'L', 'PICK A PROFILE · TWEAK ANY CATEGORY');

  // Hero (left) — section label, profile name/sub/blurb (written by writeProfileToBudget_)
  sectionLabel_(sheet, 'A6', 'F6', 'DESIRED FINANCIAL PROFILE');
  setCell_(sheet, BUDGET_NAME_CELL, { merge: 'F8', font: FONT.DISPLAY, size: 28, bold: true, color: BRAND.FOREST, v: 'bottom' });
  setCell_(sheet, BUDGET_SUB_CELL, { merge: 'F9', font: FONT.BODY, size: 11, bold: true, color: BRAND.GOLD });
  setCell_(sheet, BUDGET_BLURB_CELL, { merge: 'F11', font: FONT.BODY, size: 13, color: BRAND.BODY, wrap: true, v: 'top' });
  sheet.setRowHeight(11, 36);

  // income + picker input cells
  setCell_(sheet, 'A13', { value: 'Monthly income', font: FONT.BODY, size: 11, bold: true, color: BRAND.BODY });
  setCell_(sheet, 'A14', { value: 'Active profile', font: FONT.BODY, size: 9, color: BRAND.CAPTION });
  sheet.getRange(BUDGET_INCOME_CELL)
    .setFormula("=INDEX('" + TABS.ENGINE + "'!$B$27:$Y$27,1,24)")
    .setNumberFormat('$#,##0').setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(BUDGET_PICKER_CELL).setFontColor(BRAND.CAPTION).setFontSize(9);

  // hero KPI cards (right, cols H-L) at row 6 — % is the primary unit
  kpiCard_(sheet, 'H6', 2, 'PRESET TOTAL', '=SUM(C17:C41)',
    '="$"&TEXT(SUM(C17:C41)*$C$13,"#,##0")&" of $"&TEXT($C$13,"#,##0")', BRAND.FOREST);
  kpiCard_(sheet, 'J6', 3, 'WITH OVERRIDES', '=SUM(E17:E41)',
    '="$"&TEXT(SUM(F17:F41),"#,##0")&" · "&IF(ABS(SUM(E17:E41)-SUM(C17:C41))<0.0005,"on preset",IF(SUM(E17:E41)>SUM(C17:C41),TEXT(SUM(E17:E41)-SUM(C17:C41),"0.0%")&" above preset",TEXT(SUM(C17:C41)-SUM(E17:E41),"0.0%")&" below preset"))', BRAND.GOLD);
  sheet.getRange(7, 8).setNumberFormat('0.0%');
  sheet.getRange(7, 10).setNumberFormat('0.0%');

  // Category targets table
  sectionLabel_(sheet, 'A15', 'F15', 'CATEGORY TARGETS · 20 FIXED + 5 CUSTOM');
  setCell_(sheet, 'G15', { value: 'PRESET LOCKED · TYPE A % INTO OVERRIDE TO TWEAK', merge: 'L15',
    font: FONT.BODY, size: 9, bold: true, color: BRAND.GOLD, bg: BRAND.CREAM, h: 'right', v: 'middle' });
  sheet.getRange(16, 2, 1, 7).setValues([['Category', 'Preset %', 'Override %', 'Target %', 'Target $', 'Δ %', 'Share']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  for (var i = 0; i < CATEGORIES.length; i++) {
    var rr = BUDGET_TARGETS_FIRST_ROW + i;
    sheet.getRange(rr, 2).setValue(CATEGORIES[i]).setFontFamily(FONT.BODY).setFontSize(11).setFontColor(BRAND.BODY);
    // Preset % col (locked, cream — themable as section so it follows palette)
    sheet.getRange(rr, 3).setNumberFormat('0.0%').setBackground(BRAND.CREAM).setFontColor(BRAND.CAPTION);
    themable_(sheet.getName(), 'section', sheet.getRange(rr, 3).getA1Notation());
    // Override % col (yellow editable always)
    sheet.getRange(rr, 4).setNumberFormat('0.0%').setBackground(BRAND.YELLOW)
      .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
    // Target % — effective percentage (override if present, else preset)
    sheet.getRange(rr, 5).setFormula('=IF(D' + rr + '="",C' + rr + ',D' + rr + ')')
      .setNumberFormat('0.0%').setFontWeight('bold');
    // Target $ — Target % × income
    sheet.getRange(rr, 6).setFormula('=E' + rr + '*$C$13').setNumberFormat('$#,##0').setFontWeight('bold');
    // Δ % from preset (signed)
    sheet.getRange(rr, 7).setFormula('=IF(D' + rr + '="",0,D' + rr + '-C' + rr + ')')
      .setNumberFormat('+0.0%;−0.0%;"—"');
    // Share bar based on Target $
    sheet.getRange(rr, 8).setFormula(
      '=SPARKLINE(F' + rr + ',{"charttype","bar";"max",MAX($F$17:$F$41);"color1",SWITCH(B' + rr +
      ',"Savings","' + BRAND.GOLD + '","Debt Payments","' + BRAND.GARNET + '","' + BRAND.FOREST + '")})');
  }
  // 5 custom-slot rows (37-41). Category name is a formula reading Categories!A31..A35.
  // Override / Target / Δ behave identically — blank slot name renders a blank row.
  for (var cs = 0; cs < CUSTOM_CATEGORY_SLOTS; cs++) {
    var crr = BUDGET_TARGETS_FIRST_ROW + 20 + cs;   // 37..41
    sheet.getRange(crr, 2).setFormula("='" + TABS.CATEGORIES + "'!A" + (31 + cs))
      .setFontFamily(FONT.BODY).setFontSize(11).setFontColor(BRAND.BODY).setFontStyle('italic');
    sheet.getRange(crr, 3).setNumberFormat('0.0%').setBackground(BRAND.CREAM).setFontColor(BRAND.CAPTION);
    themable_(sheet.getName(), 'section', sheet.getRange(crr, 3).getA1Notation());
    sheet.getRange(crr, 4).setNumberFormat('0.0%').setBackground(BRAND.YELLOW)
      .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
    sheet.getRange(crr, 5).setFormula('=IF(D' + crr + '="",C' + crr + ',D' + crr + ')')
      .setNumberFormat('0.0%').setFontWeight('bold');
    sheet.getRange(crr, 6).setFormula('=E' + crr + '*$C$13').setNumberFormat('$#,##0').setFontWeight('bold');
    sheet.getRange(crr, 7).setFormula('=IF(D' + crr + '="",0,D' + crr + '-C' + crr + ')')
      .setNumberFormat('+0.0%;−0.0%;"—"');
    sheet.getRange(crr, 8).setFormula(
      '=IF(B' + crr + '="","",SPARKLINE(F' + crr + ',{"charttype","bar";"max",MAX($F$17:$F$41);"color1","' + BRAND.GOLD + '"}))');
  }

  // Δ column color: red over preset, green under preset, neutral at zero/blank
  var rules = sheet.getConditionalFormatRules();
  var deltaRange = sheet.getRange('G17:G41');
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThan(0).setFontColor(BRAND.GARNET).setRanges([deltaRange]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(0).setFontColor(BRAND.CANOPY).setRanges([deltaRange]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo(0).setFontColor(BRAND.CAPTION).setRanges([deltaRange]).build());
  sheet.setConditionalFormatRules(rules);

  // Footer summary bar (Forest)
  var sumRow = BUDGET_TARGETS_FIRST_ROW + 20 + 1;
  sheet.getRange(sumRow, 1, 1, 12).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', sheet.getRange(sumRow, 1, 1, 12).getA1Notation());
  var parts = [
    ['MONTHLY INCOME', '=' + BUDGET_INCOME_CELL, '$#,##0'],
    ['PRESET TOTAL', '=SUM(C17:C36)*$C$13', '$#,##0'],
    ['WITH OVERRIDES', '=SUM(F17:F36)', '$#,##0'],
    ['SAVINGS RATE', '=E' + BUDGET_SAVINGS_ROW, '0.0%']
  ];
  for (var p = 0; p < 4; p++) {
    var c0 = 1 + p * 3;
    setCell_(sheet, sheet.getRange(sumRow, c0).getA1Notation(), { value: parts[p][0],
      merge: sheet.getRange(sumRow, c0 + 2).getA1Notation(), font: FONT.BODY, size: 9, bold: true,
      color: BRAND.GOLD, bg: BRAND.FOREST, h: 'left', v: 'middle' });
  }
  var valRow = sumRow + 1;
  for (var q = 0; q < 4; q++) {
    var cc = 1 + q * 3;
    var vc = sheet.getRange(valRow, cc, 1, 3).merge();
    vc.setFormula(parts[q][1]).setNumberFormat(parts[q][2]).setFontFamily(FONT.DISPLAY).setFontSize(18)
      .setFontWeight('bold').setFontColor(BRAND.PARCHMENT).setBackground(BRAND.FOREST).setHorizontalAlignment('left');
  }
  sheet.getRange(valRow, 1, 1, 12).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', sheet.getRange(valRow, 1, 1, 12).getA1Notation());

  setCell_(sheet, 'A' + (valRow + 1), { value: "Override cells take a % of income. Target $ feeds Dashboard, Health Score, and Categories.",
    merge: 'L' + (valRow + 1), font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION });

  footer_(sheet, valRow + 3, 'L');
  setColWidths_(sheet, [40, 160, 80, 95, 80, 100, 80, 90, 80, 80, 80, 80]);

  // seed the default profile
  writeProfileToBudget_(sheet, DEFAULT_PROFILE);
}

// ── Goals ─────────────────────────────────────────────────────────────
function buildGoals_(sheet, mode) {
  chrome_(sheet, TABS.GOALS, 'L');
  var r = titleRow_(sheet, 'L', 'Goals',
    'Pick a type, a target, a deadline. Progress tracks automatically as transactions come in.');

  var hdr = ['Goal Name', 'Type', 'Target', 'Current', '% Complete', 'Deadline', 'Status', 'Note'];
  sheet.getRange(r, 1, 1, 8).setValues([hdr]).setFontWeight('bold').setBackground(BRAND.FOREST)
    .setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 1, 8).getA1Notation());
  var start = r + 1;
  var goals = (mode === 'mock') ? MOCK.goals : [];
  for (var i = 0; i < Math.max(goals.length, 7); i++) {
    var rr = start + i;
    if (i < goals.length) {
      var g = goals[i];
      sheet.getRange(rr, 1).setValue(g[0]);
      sheet.getRange(rr, 2).setValue(g[1]);
      sheet.getRange(rr, 3).setValue(g[2]).setNumberFormat(g[1] === 'Savings Rate' ? '0"%"' : '$#,##0');
      sheet.getRange(rr, 4).setValue(g[3]).setNumberFormat(g[1] === 'Savings Rate' ? '0.0"%"' : '$#,##0');
      sheet.getRange(rr, 5).setFormula('=SPARKLINE(D' + rr + ',{"charttype","bar";"max",C' + rr +
        ';"color1",IF(D' + rr + '/C' + rr + '>1,"' + BRAND.GARNET + '",IF(D' + rr + '/C' + rr + '>0.85,"' + BRAND.GOLD + '","' + BRAND.FOREST + '"))})');
      sheet.getRange(rr, 6).setValue(g[4]);
      sheet.getRange(rr, 7).setValue(statusText_(g[5]));
      sheet.getRange(rr, 8).setValue(g[6]).setFontColor(BRAND.BODY).setWrap(true);
    }
    if (i % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 8).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Savings Target', 'Debt Payoff', 'Spending Limit', 'Savings Rate'], true).build();
  sheet.getRange(start, 2, 7, 1).setDataValidation(typeRule);
  statusChipCF_(sheet, sheet.getRange(start, 7, 7, 1).getA1Notation());

  // Forecast strip — Forest panel: gold label row + brand-voice copy row
  var fr = start + Math.max(goals.length, 7) + 1;
  setCell_(sheet, 'A' + fr, { value: 'FORECAST', merge: 'L' + fr,
    font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, v: 'middle' });
  themable_(sheet.getName(), 'primary', sheet.getRange(fr, 1, 1, 12).getA1Notation());
  setCell_(sheet, 'A' + (fr + 1), {
    value: 'Japan Trip Fund hits target by Oct 2026 — one month late. Bump the monthly transfer from $200 to $275 and you hit September.',
    merge: 'L' + (fr + 2), font: FONT.BODY, size: 13, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'middle' });
  themable_(sheet.getName(), 'primary', sheet.getRange(fr + 1, 1, 2, 12).getA1Notation());

  footer_(sheet, fr + 4, 'L');
  setColWidths_(sheet, [170, 130, 90, 90, 120, 90, 80, 220, 60, 60, 60, 60]);
}

// ── Bank Import Guide ─────────────────────────────────────────────────
function buildBankImport_(sheet) {
  chrome_(sheet, TABS.IMPORT, 'L');
  var r = titleRow_(sheet, 'L', 'Bank Import Guide', 'Paste a CSV. We figure out the rest. After import, the cursor jumps to whichever step still needs you.');

  // 5-step row, 12 cols total: 3+2+2+2+3. Steps 1-3 are static; steps 4-5
  // show a live pending count that flips to ✓ when the queue is empty.
  var dRev = REVIEW_INCOME_FIRST_ROW;                                   // 65
  var dRevEnd = REVIEW_INCOME_FIRST_ROW + REVIEW_INCOME_ROW_COUNT - 1;  // 84
  var dUnc = UNCAT_FIRST_ROW;                                           // 89
  var dUncEnd = UNCAT_FIRST_ROW + UNCAT_ROW_COUNT - 1;                  // 108
  var reviewCountFormula =
    '=IF(COUNTA(A' + dRev + ':A' + dRevEnd + ')=0,"4",' +
    'IF(COUNTA(A' + dRev + ':A' + dRevEnd + ')=COUNTA(D' + dRev + ':D' + dRevEnd + '),"✓",' +
    'COUNTA(A' + dRev + ':A' + dRevEnd + ')-COUNTA(D' + dRev + ':D' + dRevEnd + ')))';
  var uncatCountFormula =
    '=IF(COUNTA(A' + dUnc + ':A' + dUncEnd + ')=0,"5",' +
    'IF(COUNTA(A' + dUnc + ':A' + dUncEnd + ')=COUNTA(E' + dUnc + ':E' + dUncEnd + '),"✓",' +
    'COUNTA(A' + dUnc + ':A' + dUncEnd + ')-COUNTA(E' + dUnc + ':E' + dUncEnd + ')))';

  var steps = [
    { digit: '1', label: 'Pick account (C10)',     digitCol: 1, labelStart: 2, labelEnd: 3 },
    { digit: '2', label: 'Paste CSV below',        digitCol: 4, labelStart: 5, labelEnd: 5 },
    { digit: '3', label: 'Run Import',             digitCol: 6, labelStart: 7, labelEnd: 7 },
    { digit: reviewCountFormula, label: 'Review Income ↓', digitCol: 8, labelStart: 9, labelEnd: 9 },
    { digit: uncatCountFormula,  label: 'Save merchant rules ↓', digitCol: 10, labelStart: 11, labelEnd: 12 }
  ];
  for (var s = 0; s < steps.length; s++) {
    var st = steps[s];
    var digitA1 = sheet.getRange(r, st.digitCol).getA1Notation();
    var digitOpts = {
      font: FONT.DISPLAY, size: 16, bold: true, color: BRAND.PARCHMENT,
      bg: BRAND.FOREST, h: 'center', v: 'middle'
    };
    if (String(st.digit).charAt(0) === '=') digitOpts.formula = st.digit;
    else digitOpts.value = st.digit;
    setCell_(sheet, digitA1, digitOpts);
    themable_(sheet.getName(), 'primary', digitA1);

    var labelStartA1 = sheet.getRange(r, st.labelStart).getA1Notation();
    var labelEndA1 = sheet.getRange(r, st.labelEnd).getA1Notation();
    setCell_(sheet, labelStartA1, {
      value: st.label,
      merge: st.labelEnd > st.labelStart ? labelEndA1 : null,
      font: FONT.BODY, size: 11, color: BRAND.BODY, wrap: true, v: 'middle'
    });
  }
  sheet.setRowHeight(r, 40);

  // account name input — dropdown sourced from the Accounts list so the
  // buyer doesn't retype it. Named range may not exist yet (setNamedRanges_
  // runs after this build); fall back to the literal A10:A41 range.
  setCell_(sheet, 'A' + (r + 2), { value: 'Account name', font: FONT.BODY, size: 11, bold: true, color: BRAND.BODY });
  sheet.getRange(IMPORT_ACCOUNT_CELL).setValue('Chase Joint Checking').setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(IMPORT_ACCOUNT_CELL + ':E10').merge();
  var ss = SpreadsheetApp.getActive();
  var acctRange = ss.getRangeByName('cc_accounts_list') ||
    ss.getRange("'" + TABS.ACCOUNTS + "'!A10:A21");
  var acctRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(acctRange, true).setAllowInvalid(false).build();
  sheet.getRange(IMPORT_ACCOUNT_CELL).setDataValidation(acctRule);

  // paste zone caption (row 11) + unmerged grid (A12:H61)
  setCell_(sheet, 'A11', { value: 'Paste your CSV anywhere below — the first non-empty row is treated as the header.  New account? Use 💳 → Add Account… first.',
    merge: 'L11', font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION });
  var zone = sheet.getRange(IMPORT_PASTE_ANCHOR + ':H' + IMPORT_PASTE_LAST_ROW);
  zone.setBackground(BRAND.GREEN_ZONE).setFontFamily('Roboto Mono').setFontSize(10)
    .setHorizontalAlignment('left').setVerticalAlignment('middle').setWrap(false)
    .setBorder(true, true, true, true, true, true, BRAND.HAIRLINE, SpreadsheetApp.BorderStyle.SOLID);

  // Review Income block — 20 rows of pre-validated review capacity
  var sec = REVIEW_INCOME_HEADER_ROW - 1;  // row 63 section label
  sectionLabel_(sheet, 'A' + sec, 'L' + sec, 'REVIEW INCOME · CONFIRM POSITIVE-AMOUNT ROWS');
  sheet.getRange(REVIEW_INCOME_HEADER_ROW, 1, 1, 5)
    .setValues([['Date', 'Description', 'Amount', 'Income?', 'Notes']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var ynRule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], true).build();
  sheet.getRange(REVIEW_INCOME_FIRST_ROW, 4, REVIEW_INCOME_ROW_COUNT, 1).setDataValidation(ynRule);

  // Uncategorized Merchants block — turn any Misc row into a rule with a
  // single dropdown pick. Populated by importTransactions after each import.
  sectionLabel_(sheet, 'A' + UNCAT_SECTION_ROW, 'L' + UNCAT_SECTION_ROW,
    'UNCATEGORIZED MERCHANTS · PICK A CATEGORY TO ADD A RULE');
  sheet.getRange(UNCAT_HEADER_ROW, 1, 1, 6)
    .setValues([['Sample Description', 'Hits', 'Sample Amount', 'Keyword', 'Category', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  // Sample Amount column (C): currency, locked.
  sheet.getRange(UNCAT_FIRST_ROW, 3, UNCAT_ROW_COUNT, 1)
    .setNumberFormat('$#,##0.00;[red]-$#,##0.00')
    .setFontFamily('Roboto Mono').setFontSize(10).setHorizontalAlignment('right');
  // Keyword column (D): yellow, editable.
  sheet.getRange(UNCAT_FIRST_ROW, 4, UNCAT_ROW_COUNT, 1).setBackground(BRAND.YELLOW)
    .setFontFamily('Roboto Mono').setFontSize(10);
  // Category column (E): yellow + dropdown (pulls from cc_tx_categories so
  // routing a Misc merchant straight into a custom slot works).
  sheet.getRange(UNCAT_FIRST_ROW, 5, UNCAT_ROW_COUNT, 1).setBackground(BRAND.YELLOW);
  var uncatRange = SpreadsheetApp.getActive().getRangeByName('cc_tx_categories') ||
    SpreadsheetApp.getActive().getRange("'" + TABS.CATEGORIES + "'!A11:A37");
  var uncatRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(uncatRange, true).setAllowInvalid(false).build();
  sheet.getRange(UNCAT_FIRST_ROW, 5, UNCAT_ROW_COUNT, 1).setDataValidation(uncatRule);

  var captionRow = UNCAT_FIRST_ROW + UNCAT_ROW_COUNT + 1;
  setCell_(sheet, 'A' + captionRow, { value: 'Sniffs headers from Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex. Duplicates (same date + description + amount) are skipped on re-import. Picking a Category above saves a keyword rule and reapplies it to past Misc rows.',
    merge: 'L' + captionRow, font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION, wrap: true });

  footer_(sheet, captionRow + 2, 'L');
  setColWidths_(sheet, [220, 50, 130, 130, 110, 80, 80, 80, 60, 60, 60, 60]);

  // Pin chrome + step pills + account-name input so the buyer always sees
  // the 5 steps (and the live pending counts on 4 & 5) while scrolling the
  // paste / review / uncategorized grids below.
  SpreadsheetApp.flush();
  try { sheet.setFrozenRows(10); } catch (e) {}
}
/**
 * Column & Co. — The Foundation v2.1
 * 10 · Menu + triggers (onOpen / onEdit / onSelectionChange).
 */

function onOpen() {
  buildMenu_();
  hideSystemTabs_();
  var dp = PropertiesService.getDocumentProperties();
  if (!dp.getProperty('cc_first_open')) {
    var start = SpreadsheetApp.getActive().getSheetByName(TABS.START);
    if (start) start.activate();
    dp.setProperty('cc_first_open', 'true');
  }
}

function buildMenu_() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu(CC.MENU_TITLE);
  menu.addItem('Add Account…', 'addAccount');
  menu.addSeparator();
  menu.addItem('Import Bank Transactions', 'importTransactions');
  menu.addItem('Clear Paste Zone', 'clearPasteZone');
  menu.addItem('Recategorize Ledger from Rules', 'recategorizeAll');
  menu.addSeparator();
  menu.addSubMenu(buildThemeMenu_());
  menu.addSubMenu(buildProfileMenu_());
  menu.addSeparator();
  menu.addItem('Renumber Ledger', 'renumberLedger');
  menu.addSeparator();
  menu.addItem('Help…', 'openHelpSidebar');
  menu.addSeparator();
  menu.addSubMenu(ui.createMenu('Setup')
    .addItem('Build workbook (mock data)', 'buildMockWorkbook')
    .addItem('Build workbook (blank)', 'buildBlankWorkbook'));
  menu.addToUi();
}

function hideSystemTabs_() {
  var ss = SpreadsheetApp.getActive();
  SYSTEM_TABS.forEach(function (n) {
    var sh = ss.getSheetByName(n);
    if (sh) sh.hideSheet();
  });
}

function onEdit(e) {
  if (!e || !e.range) return;
  var sheet = e.range.getSheet();
  var name = sheet.getName();

  // Accounts: stamp Last Updated (col F) when Current Balance (col E) changes
  if (name === TABS.ACCOUNTS && e.range.getColumn() === 5 && e.range.getRow() >= 10) {
    sheet.getRange(e.range.getRow(), 6).setValue(new Date());
  }

  // Bank Import — Uncategorized block: picking a Category in col E saves a
  // keyword rule from col D and reapplies it to past Misc rows.
  if (name === TABS.IMPORT && e.range.getColumn() === 5 &&
      e.range.getRow() >= UNCAT_FIRST_ROW &&
      e.range.getRow() < UNCAT_FIRST_ROW + UNCAT_ROW_COUNT) {
    var row = e.range.getRow();
    var keyword = String(sheet.getRange(row, 4).getValue() || '').trim().toUpperCase();
    var category = String(e.range.getValue() || '').trim();
    if (keyword && category) {
      addKeywordRule_(keyword, category);
      var touched = recategorizeWhereDesc_(keyword, category);
      sheet.getRange(row, 6).setValue('Rule saved ✓ · ' + touched + ' row' + (touched === 1 ? '' : 's') + ' updated')
        .setFontColor(BRAND.CANOPY).setFontStyle('italic');
    }
  }

  // Monthly Budget: auto-save Override-column edits (% of income) to the active profile.
  // Normalize bare numbers > 1 — typing "10" in a percent cell stores 10 (= 1000%);
  // assume the buyer meant 10% and rewrite as 0.10.
  if (name === TABS.BUDGET && e.range.getColumn() === 4 &&
      e.range.getRow() >= BUDGET_TARGETS_FIRST_ROW && e.range.getRow() <= BUDGET_TARGETS_FIRST_ROW + 19) {
    var v = e.range.getValue();
    if (typeof v === 'number' && v > 1) {
      e.range.setValue(v / 100);
    }
    var pid = String(sheet.getRange(BUDGET_PICKER_CELL).getValue() || '');
    if (pid) saveOverrides_(pid);
  }
}

function onSelectionChange(e) {
  if (!e || !e.range) return;
  var sheet = e.range.getSheet();
  var name = sheet.getName();
  var a1 = e.range.getA1Notation();

  // Dashboard month pills (row of 6 at the month-selector row)
  if (name === TABS.DASHBOARD) {
    var col = e.range.getColumn();
    var row = e.range.getRow();
    // pills sit in the title+3 row across cols F..K
    if (col >= 6 && col <= 11) {
      var idx = 18 + (col - 6); // Dec25..May26 => engine indices 18..23
      sheet.getRange('N4').setValue(idx);
    }
  }

  // Trends window pills (cols J/K/L on the title row)
  if (name === TABS.TRENDS) {
    var c = e.range.getColumn();
    if (c >= 10 && c <= 12) {
      sheet.getRange('N7').setValue([6, 12, 24][c - 10]);
    }
  }
}
/**
 * Column & Co. — The Foundation v2.1
 * 11 · Theme engine. applyTheme(id) repaints the content area using the
 * theme map recorded at build time. The 3-row brand chrome is never in
 * the map, so it stays locked in Forest / Canopy / Gold.
 */

function buildThemeMenu_() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Apply Theme');
  var active = PropertiesService.getDocumentProperties().getProperty('cc_active_palette') || DEFAULT_PALETTE;
  PALETTES.forEach(function (p) {
    var label = (p.id === active ? '✓ ' : '   ') + p.name;
    menu.addItem(label, '_applyTheme_' + sanitizeId_(p.id));
  });
  return menu;
}

function applyTheme(paletteId) {
  var pal = PALETTE_BY_ID[paletteId];
  if (!pal) throw new Error('Unknown palette: ' + paletteId);
  var ss = SpreadsheetApp.getActive();
  var raw = PropertiesService.getDocumentProperties().getProperty('cc_theme_map');
  var map = raw ? JSON.parse(raw) : {};

  Object.keys(map).forEach(function (sheetName) {
    var sh = ss.getSheetByName(sheetName);
    if (!sh) return;
    var roles = map[sheetName];
    paintRole_(sh, roles.bg, pal.bg);
    paintRole_(sh, roles.zebra, pal.zebra);
    paintRole_(sh, roles.section, pal.accentLight);
    paintRole_(sh, roles.primary, pal.primary);
    paintRole_(sh, roles.mid,     pal.mid);
    paintRole_(sh, roles.accent,  pal.accent);
  });

  PropertiesService.getDocumentProperties().setProperty('cc_active_palette', paletteId);
  var cfg = ss.getSheetByName(TABS.CONFIG);
  if (cfg) cfg.getRange('B40').setValue(paletteId);
  buildMenu_(); // refresh the checkmark
  ss.toast('Theme applied: ' + pal.name, CC.BRAND, 3);
}

function paintRole_(sheet, a1List, color) {
  if (!a1List) return;
  a1List.forEach(function (a1) {
    try { sheet.getRange(a1).setBackground(color); } catch (e) {}
  });
}

function sanitizeId_(id) { return id.replace(/[^a-z0-9]/gi, '_'); }

// Zero-arg menu wrappers (Apps Script menus can't pass args)
function _applyTheme_light()         { applyTheme('light'); }
function _applyTheme_warm_greige()   { applyTheme('warm-greige'); }
function _applyTheme_cool_slate()    { applyTheme('cool-slate'); }
function _applyTheme_sage()          { applyTheme('sage'); }
function _applyTheme_espresso()      { applyTheme('espresso'); }
function _applyTheme_maize_navy()    { applyTheme('maize-navy'); }
function _applyTheme_scarlet_gray()  { applyTheme('scarlet-gray'); }
function _applyTheme_orange_navy()   { applyTheme('orange-navy'); }
function _applyTheme_green_gold()    { applyTheme('green-gold'); }
function _applyTheme_purple_gold()   { applyTheme('purple-gold'); }
function _applyTheme_crimson_white() { applyTheme('crimson-white'); }
function _applyTheme_garnet_gold()   { applyTheme('garnet-gold'); }
function _applyTheme_forest_white()  { applyTheme('forest-white'); }
function _applyTheme_royal_gold()    { applyTheme('royal-gold'); }
function _applyTheme_silver_black()  { applyTheme('silver-black'); }
function _applyTheme_custom()        { applyTheme('custom'); }
/**
 * Column & Co. — The Foundation v2.1
 * 12 · Budget-profile engine. Writes the canonical Preset column and
 * loads per-profile Overrides from Document Properties. Every profile is
 * customizable via the Override column; each profile's overrides are
 * stored under `cc_overrides_<profileId>` so switching profiles never
 * loses your tweaks.
 */

function buildProfileMenu_() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Apply Budget Profile');
  var active = PropertiesService.getDocumentProperties().getProperty('cc_active_profile') || DEFAULT_PROFILE;
  PROFILE_ORDER.forEach(function (id) {
    var label = (id === active ? '✓ ' : '   ') + PROFILES[id].name;
    menu.addItem(label, '_applyProfile_' + sanitizeId_(id));
  });
  menu.addSeparator();
  menu.addItem('Clear overrides for current profile…', 'clearCurrentOverrides');
  return menu;
}

/**
 * Seed the Monthly Budget tab for a given profile.
 *  • Preset column (C17:C36) ← PROFILES[id].targets / income (as fractions)
 *  • Override column (D17:D36) ← saved cc_overrides_<id> as fractions (blank if none)
 *  Target % (E), Target $ (F), Δ % (G) are formulas and update automatically.
 */
function writeProfileToBudget_(sheet, profileId) {
  var p = PROFILES[profileId];
  if (!p) throw new Error('Unknown profile: ' + profileId);

  sheet.getRange(BUDGET_PICKER_CELL).setValue(profileId);
  // BUDGET_INCOME_CELL is a live formula pointing at the engine — leave it
  // alone so picking a profile doesn't blow away the actual-from-TX value.
  sheet.getRange(BUDGET_NAME_CELL).setValue(p.name);
  sheet.getRange(BUDGET_SUB_CELL).setValue(p.sub);
  sheet.getRange(BUDGET_BLURB_CELL).setValue(p.blurb);

  // Preset column — canonical $ targets converted to % of income
  var presetPct = p.targets.map(function (v) {
    return [p.income > 0 ? v / p.income : 0];
  });
  sheet.getRange(BUDGET_TARGETS_FIRST_ROW, 3, presetPct.length, 1)
    .setValues(presetPct)
    .setNumberFormat('0.0%');

  // Override column — per-profile saved tweaks (fractions), or blank
  var saved = _loadOverrides_(profileId);
  var overrideVals = CATEGORIES.map(function (cat) {
    var v = saved && saved[cat];
    return [(v === 0 || (v && !isNaN(Number(v)))) ? Number(v) : ''];
  });
  sheet.getRange(BUDGET_TARGETS_FIRST_ROW, 4, overrideVals.length, 1)
    .setValues(overrideVals)
    .setNumberFormat('0.0%');
}

function applyProfile(profileId) {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName(TABS.BUDGET);
  if (!sheet) throw new Error('Missing sheet: ' + TABS.BUDGET);

  writeProfileToBudget_(sheet, profileId);

  PropertiesService.getDocumentProperties().setProperty('cc_active_profile', profileId);
  var cfg = ss.getSheetByName(TABS.CONFIG);
  if (cfg) cfg.getRange('B41').setValue(profileId);
  buildMenu_();
  ss.toast('Profile applied: ' + PROFILES[profileId].name, CC.BRAND, 3);
}

/**
 * Snapshot the current Override column (D17:D36) as the saved overrides
 * for `profileId`. Values are fractions (0.10 = 10%). Called by onEdit
 * when the user types into an override cell.
 */
function saveOverrides_(profileId) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(TABS.BUDGET);
  var values = sheet.getRange(BUDGET_TARGETS_FIRST_ROW, 4, CATEGORIES.length, 1).getValues();
  var overrides = {};
  for (var i = 0; i < CATEGORIES.length; i++) {
    var v = values[i][0];
    if (v !== '' && v !== null && !isNaN(Number(v))) {
      overrides[CATEGORIES[i]] = Number(v);
    }
  }
  PropertiesService.getDocumentProperties()
    .setProperty('cc_overrides_' + profileId, JSON.stringify(overrides));
}

/** Menu item: wipe overrides for the currently-active profile. */
function clearCurrentOverrides() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName(TABS.BUDGET);
  var pid = String(sheet.getRange(BUDGET_PICKER_CELL).getValue() || '');
  if (!pid) return;
  var p = PROFILES[pid];
  var resp = ui.alert('Clear overrides',
    'Wipe all overrides for ' + (p ? p.name : pid) + '? Preset stays; only your tweaks are cleared.',
    ui.ButtonSet.YES_NO);
  if (resp !== ui.Button.YES) return;
  PropertiesService.getDocumentProperties().deleteProperty('cc_overrides_' + pid);
  sheet.getRange(BUDGET_TARGETS_FIRST_ROW, 4, CATEGORIES.length, 1).clearContent();
  ss.toast('Overrides cleared for ' + (p ? p.name : pid), CC.BRAND, 3);
}

function _loadOverrides_(profileId) {
  var raw = PropertiesService.getDocumentProperties()
    .getProperty('cc_overrides_' + profileId);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch (e) { return null; }
}

// Zero-arg menu wrappers (Apps Script menus can't pass arguments)
function _applyProfile_dave_ramsey()    { applyProfile('dave-ramsey'); }
function _applyProfile_50_30_20()       { applyProfile('50-30-20'); }
function _applyProfile_fire()           { applyProfile('fire'); }
function _applyProfile_zero_based()     { applyProfile('zero-based'); }
function _applyProfile_anti_budget()    { applyProfile('anti-budget'); }
function _applyProfile_kakeibo()        { applyProfile('kakeibo'); }
function _applyProfile_new_parent()     { applyProfile('new-parent'); }
function _applyProfile_self_employed()  { applyProfile('self-employed'); }
function _applyProfile_hcol_renter()    { applyProfile('hcol-renter'); }
function _applyProfile_custom()         { applyProfile('custom'); }
/**
 * Column & Co. — The Foundation v2.1
 * 13 · Bank CSV import, paste-zone clearing, ledger maintenance, help.
 */

function importTransactions() {
  var ss = SpreadsheetApp.getActive();
  var imp = ss.getSheetByName(TABS.IMPORT);
  var tx = ss.getSheetByName(TABS.TX);
  if (!imp || !tx) return;

  var account = String(imp.getRange(IMPORT_ACCOUNT_CELL).getValue() || '').trim();
  if (!account) { ss.toast('Type an account name in C10 first.', CC.BRAND, 4); return; }

  // Account-name validation against the Accounts list (cc_accounts_list)
  var acctNamed = ss.getRangeByName('cc_accounts_list');
  if (acctNamed) {
    var accounts = acctNamed.getValues()
      .map(function (r) { return String(r[0] || '').trim(); })
      .filter(Boolean);
    if (accounts.indexOf(account) === -1) {
      ss.toast('Account "' + account + '" not in Accounts list. Add it there or fix C10.', CC.BRAND, 6);
      return;
    }
  }

  // Read the paste zone. If A12 contains a multi-line string the buyer
  // pasted plain text — use the legacy CSV-text path. Otherwise read the
  // unmerged 50×8 grid that tabular paste lands into.
  var firstCell = imp.getRange(12, 1).getValue();
  var rowsAsArrays;
  if (typeof firstCell === 'string' && firstCell.indexOf('\n') !== -1) {
    // Legacy text paste: A12 contains the whole CSV as one string.
    var lines = String(firstCell).split(/\r?\n/).filter(function (l) { return l.trim() !== ''; });
    rowsAsArrays = lines.map(parseCsvLine_);
  } else {
    var raw = imp.getRange(12, 1, IMPORT_PASTE_ROW_COUNT, IMPORT_PASTE_COL_COUNT).getValues();
    rowsAsArrays = raw
      .map(function (r) { return r.map(function (c) { return c === null ? '' : c; }); })
      .filter(function (r) { return r.some(function (c) { return String(c).trim() !== ''; }); });
  }
  if (rowsAsArrays.length < 2) {
    ss.toast('Paste a CSV into the green zone first (header row + at least one data row).', CC.BRAND, 5);
    return;
  }

  var header = rowsAsArrays[0].map(function (c) { return String(c); });
  var cols = sniffColumns_(header);
  if (cols.amount < 0 || cols.date < 0) {
    ss.toast('Could not detect Date/Amount columns. Supported headers: Date, Description/Memo/Payee, Amount (or Debit/Credit pair).', CC.BRAND, 6);
    return;
  }

  // Build existing-row dedup index from the live ledger.
  var tz = ss.getSpreadsheetTimeZone();
  var dedupKey = function (d, desc, amt) {
    var ds = (d instanceof Date) ? Utilities.formatDate(d, tz, 'yyyy-MM-dd') : String(d || '').trim();
    return ds + '|' + String(desc || '').trim() + '|' + Number(amt).toFixed(2);
  };
  var seen = {};
  var existing = readExistingTx_(tx);
  for (var e = 0; e < existing.length; e++) {
    seen[dedupKey(existing[e][0], existing[e][1], existing[e][2])] = true;
  }

  var rules = loadKeywordRules_(ss);
  var out = [], income = [], miscDescs = [], skipped = 0, misc = 0;
  for (var i = 1; i < rowsAsArrays.length; i++) {
    var f = rowsAsArrays[i];
    if (!f || f.length < 2) continue;
    var date = parseDate_(f[cols.date]);
    var desc = String(f[cols.desc] != null ? f[cols.desc] : '').trim();
    var amount = parseAmount_(f, cols);
    if (amount === null) continue;
    var key = dedupKey(date, desc, amount);
    if (seen[key]) { skipped++; continue; }
    seen[key] = true;
    var category;
    if (amount > 0) {
      category = 'Income';
    } else {
      category = categorize_(desc, rules);
      if (category === 'Misc') { misc++; miscDescs.push({ desc: desc, amount: amount }); }
    }
    out.push([date, desc, amount, category, account, '']);
    if (amount > 0) income.push([date, desc, amount]);
  }
  if (!out.length && !skipped) { ss.toast('No valid rows parsed.', CC.BRAND, 4); return; }

  if (out.length) {
    var firstEmpty = findFirstEmptyTxRow_(tx);
    tx.getRange(firstEmpty, 1, out.length, 6).setValues(out);
  }

  // Refresh the Review Income block (REVIEW_INCOME_FIRST_ROW × 5 cols).
  imp.getRange(REVIEW_INCOME_FIRST_ROW, 1, REVIEW_INCOME_ROW_COUNT, 5).clearContent();
  var shown = 0;
  if (income.length) {
    shown = Math.min(income.length, REVIEW_INCOME_ROW_COUNT);
    imp.getRange(REVIEW_INCOME_FIRST_ROW, 1, shown, 3).setValues(income.slice(0, shown));
    imp.getRange(REVIEW_INCOME_FIRST_ROW, 1, shown, 1).setNumberFormat('mmm d, yyyy');
    imp.getRange(REVIEW_INCOME_FIRST_ROW, 3, shown, 1).setNumberFormat('$#,##0.00');
  }

  // Refresh the Uncategorized Merchants block — group Misc descs by suggested
  // keyword, sort by hit count, write up to UNCAT_ROW_COUNT rows.
  imp.getRange(UNCAT_FIRST_ROW, 1, UNCAT_ROW_COUNT, 6).clearContent();
  if (miscDescs.length) {
    var groups = {};
    for (var m = 0; m < miscDescs.length; m++) {
      var d = miscDescs[m].desc;
      var amt = miscDescs[m].amount;
      var k = suggestKeyword_(d);
      if (!k) continue;
      if (!groups[k]) groups[k] = { sample: d, sampleAmt: amt, hits: 0, keyword: k };
      groups[k].hits++;
    }
    var rows = Object.keys(groups).map(function (k) { return groups[k]; })
      .sort(function (a, b) { return b.hits - a.hits; })
      .slice(0, UNCAT_ROW_COUNT);
    if (rows.length) {
      var grid = rows.map(function (g) { return [g.sample, g.hits, g.sampleAmt, g.keyword, '', '']; });
      imp.getRange(UNCAT_FIRST_ROW, 1, rows.length, 6).setValues(grid);
      imp.getRange(UNCAT_FIRST_ROW, 3, rows.length, 1).setNumberFormat('$#,##0.00;[red]-$#,##0.00');
    }
  }

  renumberLedger();

  // Jump cursor to whichever review queue still needs the buyer. Without
  // this, Review Income (row 64) and Uncategorized (row 87) live below the
  // paste zone and are easy to miss.
  imp.activate();
  if (income.length > 0) {
    imp.setActiveRange(imp.getRange(REVIEW_INCOME_HEADER_ROW, 1));
  } else if (miscDescs.length > 0) {
    imp.setActiveRange(imp.getRange(UNCAT_SECTION_ROW, 1));
  }

  var parts = ['Imported ' + out.length];
  if (skipped) parts.push(skipped + ' duplicates skipped');
  if (misc) parts.push(misc + ' fell to Misc');
  if (income.length) parts.push(income.length + ' income row' + (income.length === 1 ? '' : 's') + ' for review');
  if (income.length > REVIEW_INCOME_ROW_COUNT) {
    parts.push('(' + (income.length - REVIEW_INCOME_ROW_COUNT) + ' beyond the review block)');
  }
  ss.toast(parts.join(' · '), CC.BRAND, 6);
}

function readExistingTx_(tx) {
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  var headerRow = 9;
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) return [];
  return tx.getRange(headerRow + 1, 1, lastRow - headerRow, 3).getValues()
    .filter(function (r) { return r[0] !== '' && r[0] !== null; });
}

function clearPasteZone() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.alert('Clear Paste Zone', 'Empty the paste zone?', ui.ButtonSet.YES_NO);
  if (resp !== ui.Button.YES) return;
  var imp = SpreadsheetApp.getActive().getSheetByName(TABS.IMPORT);
  var zone = imp.getRange(12, 1, IMPORT_PASTE_ROW_COUNT, IMPORT_PASTE_COL_COUNT);
  zone.clearContent();
  zone.setBackground(BRAND.GREEN_ZONE);
}

function renumberLedger() {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  var headerRow = CONTENT_START_ROW + 3; // titleRow occupies 6-7, header at 9
  // Find the actual header row by scanning col A for 'Date'
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var firstData = headerRow + 1;

  tx.getRange(firstData, 1, 5000, 1).setNumberFormat('mmm d, yyyy');
  tx.getRange(firstData, 3, 5000, 1).setNumberFormat('$#,##0.00');
  tx.getRange(firstData, 7, 5000, 1).setFormulaR1C1('=IF(RC1="","",TEXT(RC1,"yyyy-mm"))');

  var catRange = ss.getRangeByName('cc_tx_categories') ||
    ss.getRange("'" + TABS.CATEGORIES + "'!A11:A37");
  var catList = SpreadsheetApp.newDataValidation()
    .requireValueInRange(catRange, true).build();
  tx.getRange(firstData, 4, 5000, 1).setDataValidation(catList);
  ss.toast('Ledger formats refreshed', CC.BRAND, 3);
}

// ── Add Account (menu item) ───────────────────────────────────────────
// Prompts for an account name and appends it to the Accounts list with
// sensible defaults so the buyer doesn't have to leave Bank Import to
// register a new account. Direct editing on the Accounts tab still works.
function addAccount() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.getActive();
  var acct = ss.getSheetByName(TABS.ACCOUNTS);
  if (!acct) { ui.alert('Accounts tab not found.'); return; }

  var resp = ui.prompt('Add Account',
    'Account name (e.g. "Chase Joint Checking"):', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var name = String(resp.getResponseText() || '').trim();
  if (!name) return;

  var range = ss.getRangeByName('cc_accounts_list') || acct.getRange('A10:A21');
  var vals = range.getValues();
  var target = -1;
  for (var i = 0; i < vals.length; i++) {
    if (!vals[i][0]) { target = range.getRow() + i; break; }
    if (String(vals[i][0]).trim().toLowerCase() === name.toLowerCase()) {
      ui.alert('"' + name + '" is already in the Accounts list.');
      return;
    }
  }
  if (target === -1) {
    ui.alert('Accounts list is full. Add capacity in buildAccounts_.');
    return;
  }
  acct.getRange(target, 1).setValue(name);
  acct.getRange(target, 2).setValue('Checking');
  acct.getRange(target, 3).setValue('Joint');
  acct.getRange(target, 6).setValue(new Date());
  acct.activate();
  acct.getRange(target, 4).activate();
  ss.toast('Added "' + name + '" — fill in the starting balance →', CC.BRAND, 4);
}

function openHelpSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Help').setTitle('Column & Co. · Help');
  SpreadsheetApp.getUi().showSidebar(html);
}

// ── CSV + parsing helpers ─────────────────────────────────────────────
function parseCsvLine_(line) {
  var out = [], cur = '', inQ = false;
  for (var i = 0; i < line.length; i++) {
    var ch = line[i];
    if (ch === '"') { if (inQ && line[i + 1] === '"') { cur += '"'; i++; } else inQ = !inQ; }
    else if (ch === ',' && !inQ) { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out.map(function (s) { return s.trim(); });
}

function sniffColumns_(header) {
  var lower = header.map(function (h) { return h.toLowerCase(); });
  var find = function (keys) {
    for (var k = 0; k < keys.length; k++) {
      for (var i = 0; i < lower.length; i++) if (lower[i].indexOf(keys[k]) !== -1) return i;
    }
    return -1;
  };
  return {
    date: find(['date', 'posting date', 'transaction date']),
    desc: find(['description', 'memo', 'payee', 'name']),
    amount: find(['amount', 'debit']),
    debit: find(['debit']),
    credit: find(['credit'])
  };
}

function parseAmount_(fields, cols) {
  // Banks with split debit/credit columns
  if (cols.debit >= 0 && cols.credit >= 0 && cols.debit !== cols.credit) {
    var d = cleanNum_(fields[cols.debit]), c = cleanNum_(fields[cols.credit]);
    if (d) return -Math.abs(d);
    if (c) return Math.abs(c);
    return null;
  }
  var v = cleanNum_(fields[cols.amount]);
  return v === null ? null : v;
}

function cleanNum_(s) {
  if (s == null) return null;
  s = String(s).replace(/[$,\s]/g, '');
  if (s === '') return null;
  var paren = /^\(.*\)$/.test(s);
  s = s.replace(/[()]/g, '');
  var n = Number(s);
  if (isNaN(n)) return null;
  return paren ? -n : n;
}

function parseDate_(s) {
  var d = new Date(s);
  return isNaN(d.getTime()) ? s : d;
}

// Longest-keyword-wins. Removes the historical "AMAZON PRIME before AMAZON"
// ordering trap — load order no longer matters; the most specific keyword
// always wins.
function categorize_(desc, rules) {
  var up = (desc || '').toUpperCase();
  var best = null;
  for (var i = 0; i < rules.length; i++) {
    var k = rules[i].keyword;
    if (k && up.indexOf(k) !== -1) {
      if (!best || k.length > best.keyword.length) best = rules[i];
    }
  }
  return best ? best.category : 'Misc';
}

// Heuristic: strip standalone digits, ACH/PMT cruft, and reduce to the first
// two words. Buyer can edit the suggestion before picking a category.
function suggestKeyword_(desc) {
  var s = String(desc || '').toUpperCase()
    .replace(/[#0-9][#0-9\-]+.*$/, '')
    .replace(/\s*-\s*(ACH|PMT|PAYMENT|PAYROLL|DIRECT|DEPOSIT|CRCARDPMT|CCPYMT).*$/, '')
    .replace(/[^A-Z0-9\s\.\!\&\-]/g, ' ')
    .trim();
  var parts = s.split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).join(' ');
}

// Append a new rule to Categories!E:G. If the keyword already exists, just
// update its category (still keeps the buyer's note column).
function addKeywordRule_(keyword, category) {
  var ss = SpreadsheetApp.getActive();
  var cats = ss.getSheetByName(TABS.CATEGORIES);
  if (!cats) return;
  var existing = cats.getRange('E11:G200').getValues();
  var key = String(keyword || '').toUpperCase().trim();
  for (var i = 0; i < existing.length; i++) {
    var k = String(existing[i][0] || '').toUpperCase().trim();
    if (k === key) {
      cats.getRange(11 + i, 6).setValue(category);
      return;
    }
    if (!k) {
      cats.getRange(11 + i, 5, 1, 3).setValues([[key, category, '(added from Bank Import)']]);
      return;
    }
  }
}

// Find every TX row whose description contains `keyword` and whose category
// is currently 'Misc', and rewrite the category. Returns the count touched.
function recategorizeWhereDesc_(keyword, category) {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  if (!tx) return 0;
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  var headerRow = 9;
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) return 0;
  var n = lastRow - headerRow;
  var descCol = tx.getRange(headerRow + 1, 2, n, 1).getValues();
  var catCol  = tx.getRange(headerRow + 1, 4, n, 1).getValues();
  var key = String(keyword || '').toUpperCase().trim();
  var touched = 0;
  for (var r = 0; r < n; r++) {
    if (String(catCol[r][0]) === 'Misc' &&
        String(descCol[r][0] || '').toUpperCase().indexOf(key) !== -1) {
      catCol[r][0] = category;
      touched++;
    }
  }
  if (touched) tx.getRange(headerRow + 1, 4, n, 1).setValues(catCol);
  return touched;
}

// Menu item: walk every Misc row in the ledger and reapply rules. Used after
// the buyer edits keyword rules by hand in the Categories tab.
function recategorizeAll() {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  if (!tx) return;
  var rules = loadKeywordRules_(ss);
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  var headerRow = 9;
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) { ss.toast('Ledger is empty.', CC.BRAND, 3); return; }
  var n = lastRow - headerRow;
  var descCol = tx.getRange(headerRow + 1, 2, n, 1).getValues();
  var catCol  = tx.getRange(headerRow + 1, 4, n, 1).getValues();
  var touched = 0;
  for (var r = 0; r < n; r++) {
    if (String(catCol[r][0]) === 'Misc') {
      var c = categorize_(descCol[r][0], rules);
      if (c && c !== 'Misc') { catCol[r][0] = c; touched++; }
    }
  }
  if (touched) tx.getRange(headerRow + 1, 4, n, 1).setValues(catCol);
  ss.toast(touched ? ('Recategorized ' + touched + ' row' + (touched === 1 ? '' : 's')) : 'No Misc rows matched any rule.', CC.BRAND, 4);
}

function loadKeywordRules_(ss) {
  var cats = ss.getSheetByName(TABS.CATEGORIES);
  var values = cats.getRange('E11:F200').getValues();
  var rules = [];
  values.forEach(function (row) {
    if (row[0]) rules.push({ keyword: String(row[0]).toUpperCase(), category: row[1] || 'Misc' });
  });
  return rules;
}

function findFirstEmptyTxRow_(tx) {
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  var headerRow = 9;
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var colA = tx.getRange(headerRow + 1, 1, 5000, 1).getValues();
  for (var r = 0; r < colA.length; r++) { if (!colA[r][0]) return headerRow + 1 + r; }
  return headerRow + 1;
}

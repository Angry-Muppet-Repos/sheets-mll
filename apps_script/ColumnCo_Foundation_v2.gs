/**
 * Column & Co. — The Foundation v2.1
 * 00 · Constants — single source of truth for the whole build.
 *
 * Brand colors, type tokens, the 24 in-sheet palettes, the 10 budget
 * profiles, the 20 fixed categories + 5 custom slots, and the Marcus &
 * Elena Brooks mock data.
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

// ── 24 in-sheet palettes (product feature) ────────────────────────────
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
  { id: 'midnight',      name: 'Midnight',        primary: '#0B1F3A', mid: '#142E55', accent: '#14B8A6', bg: '#F0F4F8', zebra: '#E2E8F0', dark: '#050E1C', accentLight: '#99F6E4' },
  { id: 'burgundy',      name: 'Burgundy',        primary: '#5C0A1A', mid: '#7A0E22', accent: '#E8D5B5', bg: '#FAF5F0', zebra: '#F0E6DA', dark: '#2E0510', accentLight: '#F5E8D5' },
  { id: 'mocha',         name: 'Mocha',           primary: '#5C3A21', mid: '#7A4F2D', accent: '#D4A574', bg: '#FAF3EA', zebra: '#F0E2CE', dark: '#2E1D10', accentLight: '#F0DCC2' },
  { id: 'indigo-blush',  name: 'Indigo & Blush',  primary: '#2E1F6B', mid: '#3D2A8C', accent: '#EAB0B8', bg: '#F7F4FA', zebra: '#ECE5F5', dark: '#170F36', accentLight: '#F8DEE3' },
  { id: 'pine-brass',    name: 'Pine & Brass',    primary: '#1F3A2E', mid: '#2E5544', accent: '#B8964A', bg: '#F2F8F4', zebra: '#E1F0E7', dark: '#0E1D17', accentLight: '#E8D9A8' },
  { id: 'ocean-coral',   name: 'Ocean & Coral',   primary: '#0F4858', mid: '#166075', accent: '#F47B6A', bg: '#F0F8FA', zebra: '#DCEFF2', dark: '#062430', accentLight: '#FBC8BD' },
  { id: 'charcoal-mint', name: 'Charcoal & Mint', primary: '#2C2C2E', mid: '#44444A', accent: '#A8D5BA', bg: '#F5F5F5', zebra: '#E8E8E8', dark: '#161617', accentLight: '#D0EAD9' },
  { id: 'olive-cream',   name: 'Olive & Cream',   primary: '#3D4A1F', mid: '#56672E', accent: '#C8B27A', bg: '#F7F4E8', zebra: '#ECE5D0', dark: '#1E2410', accentLight: '#E8D9A8' },
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
  // goals [name, type, source, target, deadline] — Current/Status/Note/%Complete
  // are formulas now; see buildGoals_ for the per-type logic.
  goals: [
    ['Emergency Fund',       'Savings Target', 'Ally Savings',       22000, 'Dec 2026'],
    ['Japan Trip Fund',      'Savings Target', 'Ally Sinking Fund',   5000, 'Sep 2026'],
    ['Amex Gold Payoff',     'Debt Payoff',    'Amex Gold Card',      1840, 'Dec 2026'],
    ['Food & Dining',        'Spending Limit', 'Food & Dining',        650, 'Monthly'],
    ['Shopping',             'Spending Limit', 'Shopping',             500, 'Monthly'],
    ['Entertainment',        'Spending Limit', 'Entertainment',        240, 'Monthly'],
    ['Monthly Savings Rate', 'Savings Rate',   '',                    0.20, 'Ongoing']
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
  STAGE: '_ImportStage', CONFIG: '_Config', SCHEMA: '_Schema'
};
var TAB_ORDER = [
  TABS.START, TABS.TRENDS, TABS.DASHBOARD, TABS.BUDGET, TABS.HEALTH,
  TABS.GOALS, TABS.TX, TABS.IMPORT, TABS.NETWORTH, TABS.ACCOUNTS,
  TABS.CATEGORIES, TABS.ENGINE, TABS.STAGE, TABS.CONFIG, TABS.SCHEMA
];
var SYSTEM_TABS = [TABS.ENGINE, TABS.STAGE, TABS.CONFIG, TABS.SCHEMA];

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

// Grow the grid to at least rows × cols BEFORE writing past the 1,000×26
// default — out-of-grid writes surface as the opaque "Service Spreadsheets
// failed while accessing document" error. (Backported from the siblings.)
function ensureGrid_(sheet, rows, cols) {
  var maxR = sheet.getMaxRows();
  if (rows > maxR) sheet.insertRowsAfter(maxR, rows - maxR);
  var maxC = sheet.getMaxColumns();
  if (cols > maxC) sheet.insertColumnsAfter(maxC, cols - maxC);
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
  if (typeof sub === 'string' && sub.charAt(0) === '=') subRng.setFormula(sub);
  else subRng.setValue(sub);
  subRng.setFontFamily(FONT.BODY).setFontSize(11)
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

// ── Engine month helpers ──────────────────────────────────────────────
// _Engine is a 24-column rolling window. Its row-1 headers are 'YYYY-MM'
// strings ending in the anchor's calendar month. The helpers below are
// the single source of truth — buildEngine_ writes them, rollEngineForward_
// reads/rewrites them, onOpen/importTransactions watch them.

// 'YYYY-MM' for the given Date's calendar month.
function monthCodeOfDate_(d) {
  var y = d.getFullYear();
  var m = d.getMonth() + 1;
  return y + '-' + (m < 10 ? '0' + m : '' + m);
}

// Returns 24 'YYYY-MM' strings, oldest first, newest = anchor's calendar
// month. So index 23 is the anchor month, index 0 is 23 months earlier.
function monthCodesEndingAt_(anchorDate) {
  var codes = [];
  var y = anchorDate.getFullYear();
  var m = anchorDate.getMonth();   // 0-based
  for (var i = 23; i >= 0; i--) {
    var dy = y, dm = m - i;
    while (dm < 0) { dm += 12; dy -= 1; }
    var mm = dm + 1;
    codes.push(dy + '-' + (mm < 10 ? '0' + mm : '' + mm));
  }
  return codes;
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
  // A rebuild is destructive — wipe stale per-profile overrides too so
  // re-selecting a profile after rebuild doesn't repopulate D from a
  // prior session's typing.
  clearAllSavedOverrides_();

  // 1. Create/clear every sheet up front so cross-tab formulas resolve.
  var sheets = {};
  TAB_ORDER.forEach(function (name) { sheets[name] = getOrCreateSheet_(ss, name); });

  // 2. Hidden data + system sheets first.
  buildConfig_(sheets[TABS.CONFIG]);
  buildSchema_(sheets[TABS.SCHEMA], mode);
  buildCategories_(sheets[TABS.CATEGORIES], mode);
  buildAccounts_(sheets[TABS.ACCOUNTS], mode);
  buildTransactions_(sheets[TABS.TX], mode);
  buildEngine_(sheets[TABS.ENGINE], mode);
  buildImportStage_(sheets[TABS.STAGE], mode);   // helper grid feeds Bank Import

  // 3. Presentation + action tabs.
  buildStartHere_(sheets[TABS.START]);
  buildTrends_(sheets[TABS.TRENDS], mode);
  buildDashboard_(sheets[TABS.DASHBOARD], mode);
  buildMonthlyBudget_(sheets[TABS.BUDGET], mode);
  buildHealthScore_(sheets[TABS.HEALTH], mode);
  buildGoals_(sheets[TABS.GOALS], mode);
  buildBankImport_(sheets[TABS.IMPORT], mode);
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
  // The profiles block reaches column AA (27) — past a fresh sheet's 26-col
  // default. Without this, a from-scratch build dies with the opaque
  // "Service Spreadsheets failed" error (caught by verify_foundation.js).
  ensureGrid_(sheet, 60, 28);
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
function buildSchema_(sheet, mode) {
  var lines = [
    'The Foundation v2.1 — Workbook Schema for AI assistants',
    '────────────────────────────────────────────────────────',
    '',
    (mode === 'mock')
      ? "This workbook tracks a household's budget. Demo buyer: Marcus & Elena Brooks."
      : "This workbook tracks a household's budget.",
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
  // 5 custom slots — yellow editable name AND yellow editable Type dropdown,
  // Monthly Target pulled from Monthly Budget rows 37-41 (added by buildMonthlyBudget_).
  // Default Type 'Expense' is pre-filled but the buyer can change to Income or
  // Transfer; the dropdown is wired by applyCategoryValidation_ below.
  var customStart = r + 1 + 20;   // row 31
  for (var cs = 0; cs < CUSTOM_CATEGORY_SLOTS; cs++) {
    var crow = customStart + cs;
    sheet.getRange(crow, 1).setBackground(BRAND.YELLOW)
      .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
    sheet.getRange(crow, 2).setValue('Expense').setBackground(BRAND.YELLOW)
      .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
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
  // 20 fixed categories + 5 custom slots — every editable category row
  // needs the Type dropdown so the buyer can mark a custom slot as
  // Income or Transfer instead of the default Expense.
  sheet.getRange(firstRow, 2, 20 + CUSTOM_CATEGORY_SLOTS, 1).setDataValidation(rule);
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
        return [a[0], a[1], a[2], a[3], a[3], new Date(), ''];
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
  // sheet.clear() (via chrome_) does not remove a basic filter, and a
  // second createFilter() throws. Tear down any prior filter first.
  var existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();
  // 5,000-row log — grow past the fresh sheet's 1,000-row default first.
  ensureGrid_(sheet, 5012, 8);

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

  // Per-column filter icons on the header row. Spans all 7 cols (incl. the
  // hidden Month helper, so unhiding G lets a power user filter by yyyy-mm).
  sheet.getRange(headerRow, 1, 1 + 5000, 7).createFilter();
}

// Build a realistic 6-month ledger ending in today's calendar month, with
// monthly category sums that reproduce the mock story (MOCK.months_24's
// trailing 6 entries). We borrow the figures, but slide the *dates* to
// the trailing 6 months ending today — so the demo always lines up with
// the rolling engine window regardless of when the buyer runs Build.
function generateMockLedger_() {
  var rows = [];
  var monthFigures = MOCK.months_24.slice(18); // 6 [label, income, expenses, …] rows
  var accounts = ['Chase Joint Checking', 'Amex Gold Card', 'Chase Sapphire Card', 'Elena Checking', 'Marcus Checking'];
  // category spend weights from the current-month breakdown
  var breakdownMap = {}; MOCK.breakdown.forEach(function (b) { breakdownMap[b[0]] = b[1]; });
  var totalBreakdown = MOCK.breakdown.reduce(function (s, b) { return s + b[1]; }, 0);

  // Trailing 6 (year, monthIdx) pairs ending in today's calendar month,
  // oldest first — so they line up positionally with monthFigures, which
  // is also oldest-first.
  var today = new Date();
  var monthDates = [];
  for (var k = 5; k >= 0; k--) {
    var d = new Date(today.getFullYear(), today.getMonth() - k, 1);
    monthDates.push({ year: d.getFullYear(), monthIdx: d.getMonth() });
  }

  for (var m = 0; m < monthFigures.length; m++) {
    var year = monthDates[m].year;
    var monthIdx = monthDates[m].monthIdx;
    var income = monthFigures[m][1], expenses = monthFigures[m][2];

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
  rows.sort(function (a, b) { return b[0] - a[0]; });
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
  // Row 1: 24 rolling-window month headers (YYYY-MM) ending in today's
  // calendar month. Column Y is always "this month"; column B is 23
  // months earlier. The downstream views reference $B..$Y by position,
  // so rolling the window forward is a single setValues on row 1.
  var monthCodes = monthCodesEndingAt_(new Date());
  sheet.getRange('A1').setValue('metric \\ month').setFontWeight('bold');
  // Force text format BEFORE setValues — otherwise some locales auto-parse
  // "2026-05" to a date, which then breaks DATEVALUE() chains downstream.
  sheet.getRange(1, 2, 1, 24).setNumberFormat('@').setValues([monthCodes]).setFontWeight('bold');

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

// ── Re-anchor the engine's rolling 24-month window ────────────────────
// Rewrites _Engine!B1:Y1 to end in anchorDate's calendar month. Every
// downstream SUMIFS references row 1 by position, so the aggregation
// re-targets the new months automatically — no formula rewrite needed.
// Idempotent: re-running with the same anchor is a no-op.
// Returns true if the window actually shifted, false if it was already
// anchored correctly (caller decides whether to toast).
function rollEngineForward_(anchorDate) {
  var ss = SpreadsheetApp.getActive();
  var eng = ss.getSheetByName(TABS.ENGINE);
  if (!eng) return false;
  var newCodes = monthCodesEndingAt_(anchorDate);
  var current = eng.getRange(1, 2, 1, 24).getValues()[0];
  var same = true;
  for (var i = 0; i < 24; i++) {
    if (String(current[i]) !== newCodes[i]) { same = false; break; }
  }
  if (same) return false;
  eng.getRange(1, 2, 1, 24).setNumberFormat('@').setValues([newCodes]);
  return true;
}

// Returns the 'YYYY-MM' currently in _Engine!Y1, or '' if engine missing.
function lastEngineMonthCode_() {
  var ss = SpreadsheetApp.getActive();
  var eng = ss.getSheetByName(TABS.ENGINE);
  if (!eng) return '';
  return String(eng.getRange(1, 25).getValue() || '');
}
/**
 * Column & Co. — The Foundation v2.1
 * 05 · View tabs: Start Here, Dashboard, Trends, Health Score, Net Worth.
 *
 * _Engine month columns: B..Y = a rolling 24-month window ending in the
 * current calendar month (anchored at build, re-anchored on import or on
 * open if today is past). Column Y is always "this month"; column B is
 * 23 months earlier. Views read the active month via the cc_dashboard_month
 * cell so the Dashboard month pills re-drive every figure.
 */

var ENG = "'" + '_Engine' + "'";       // qualified sheet ref
var CUR_MONTH_COL = 25;                 // Y — newest engine month
var CUR_MONTH_IDX = 23;                 // 0-based — Y is the active default

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

  // Choose Your Theme — 24 tiles in a 12x2 grid (one tile per column, A..L)
  r += 3;
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'CHOOSE YOUR THEME · 24 PALETTES · APPLY VIA 💳 COLUMN & CO. ▸ APPLY THEME');
  r += 1;
  var tileTop = r;
  var TILES_PER_ROW = 12;
  for (var i = 0; i < PALETTES.length; i++) {
    var p = PALETTES[i];
    var rowBlock = Math.floor(i / TILES_PER_ROW);
    var colInRow = i % TILES_PER_ROW;
    var topRow = tileTop + rowBlock * 3;
    var col = 1 + colInRow;
    sheet.getRange(topRow, col).setBackground(p.primary);
    sheet.getRange(topRow + 1, col).setBackground(p.accent);
    setCell_(sheet, sheet.getRange(topRow + 2, col).getA1Notation(),
      { value: p.name, font: FONT.BODY, size: 8, color: BRAND.BODY, h: 'center', wrap: true });
  }
  sheet.setColumnWidths(1, 12, 62);

  // Setup guide — 6 steps spanning A..L (2 cols each)
  r = tileTop + 7;
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'SETUP GUIDE · 6 STEPS');
  r += 1;
  var steps = [
    ['1', 'Install the Script', 'Extensions → Apps Script → paste the ColumnCo file. A 💳 Column & Co. menu appears.'],
    ['2', 'Set Up Accounts', 'Add every bank account, card, and savings account. Enter current balances.'],
    ['3', 'Pick Your Profile', 'Open Monthly Budget. Choose one of 10 budget profiles or tweak any category % in yellow.'],
    ['4', 'Import Transactions', 'Type the account name in C6 of Bank Import. Paste your bank CSV. Run Import.'],
    ['5', 'Set Your Goals', 'Pick a Type, a Category or Account, a Target. Progress tracks automatically.'],
    ['6', 'Explore Your Data', 'Dashboard, Trends, Health Score, and Net Worth update as you import.']
  ];
  for (var s = 0; s < steps.length; s++) {
    var c0 = 1 + s * 2; // each step spans 2 cols: (A-B), (C-D), ..., (K-L)
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
    font: FONT.DISPLAY, size: 18, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true });
  setCell_(sheet, 'A' + (r + 1), {
    value: 'A hidden _Schema tab documents every column for an AI. Copy the prompt, paste it in your assistant, attach your sheet. You get insights in seconds.',
    merge: 'F' + (r + 4), font: FONT.BODY, size: 12, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });
  var code = sheet.getRange(r, 7, 5, 6).merge();
  code.setBackground(BRAND.FOREST_HI).setFontFamily('Roboto Mono').setFontSize(10)
    .setFontColor(BRAND.CREAM).setWrap(true).setVerticalAlignment('middle').setHorizontalAlignment('left')
    .setValue('Find every category where I\'m trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel.');
  themable_(sheet.getName(), 'primary', code.getA1Notation());
  // Tall enough rows that the 18pt headline can wrap and the 10pt mono
  // prompt has room for its 6-7 wrapped lines.
  sheet.setRowHeight(r, 32);
  sheet.setRowHeight(r + 1, 24);
  sheet.setRowHeight(r + 2, 24);
  sheet.setRowHeight(r + 3, 24);
  sheet.setRowHeight(r + 4, 24);

  footer_(sheet, r + 6, 'L');
  setColWidths_(sheet, [78, 78, 78, 78, 78, 78, 78, 78, 70, 70, 70, 70]);
}

// ── Dashboard ─────────────────────────────────────────────────────────
function buildDashboard_(sheet, mode) {
  chrome_(sheet, TABS.DASHBOARD, 'L', 'VIEWING MONTH');
  // Replace the static breadcrumb with a live formula so it tracks N4.
  sheet.getRange('A3').setFormula(
    '="VIEWING MONTH · "&UPPER(TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),INDEX(cc_engine_months,1,N4+1)),"mmm yyyy"))&"  "');
  var r = titleRow_(sheet, 'L', 'Dashboard',
    'Your money at a glance. Updated automatically as transactions come in.');

  // Active month index cell (named cc_dashboard_month) at N4. Seeded with
  // a formula that picks the newest engine column with non-zero income
  // (so a buyer building blank lands on whatever they imported), else
  // falls back to column Y (= newest engine month = "this month").
  sheet.getRange('N4').setFormula(
    '=IFERROR(LARGE(ARRAYFORMULA(IF(' + ENG + '!$B$27:$Y$27>0,COLUMN(' + ENG +
    '!$B$27:$Y$27)-2)),1),23)');
  sheet.getRange('N3').setValue('active_month_idx (0-23)').setFontColor(BRAND.CAPTION).setFontSize(8);

  // Month label + 6 pills. Pill labels are formulas reading the last 6
  // engine headers, so the pills auto-shift when the engine rolls forward.
  setCell_(sheet, 'A' + r, {
    formula: '=TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),INDEX(cc_engine_months,1,N4+1)),"mmmm yyyy")',
    merge: 'C' + r, font: FONT.DISPLAY, size: 26, bold: true, color: BRAND.FOREST });
  for (var i = 0; i < 6; i++) {
    var col = 6 + i;
    var engineIdx = 19 + i;  // pills represent engine columns 19..24 (T..Y)
    var pillCellA1 = sheet.getRange(r, col).getA1Notation();
    setCell_(sheet, pillCellA1, {
      formula: '=TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,' + engineIdx +
        ')&"-01"),INDEX(cc_engine_months,1,' + engineIdx + ')),"mmm")',
      font: FONT.BODY, size: 11, bold: true, h: 'center', v: 'middle',
      bg: BRAND.FOREST, color: BRAND.PARCHMENT });
    themable_(sheet.getName(), 'primary', pillCellA1);
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
  // Sub-lines are live vs-last-month deltas (the old hardcoded mock strings
  // leaked into the blank build and were wrong in the mock too). N4=0 means
  // no previous month; a zero previous denominator shows an em-dash.
  var incPrev = 'INDEX(' + ENG + '!$B$27:$Y$27,1,N4)';
  var expPrev = 'INDEX(' + ENG + '!$B$28:$Y$28,1,N4)';
  var netPrev = 'INDEX(' + ENG + '!$B$29:$Y$29,1,N4)';
  var incCur  = 'INDEX(' + ENG + '!$B$27:$Y$27,1,N4+1)';
  var expCur  = 'INDEX(' + ENG + '!$B$28:$Y$28,1,N4+1)';
  var netCur  = 'INDEX(' + ENG + '!$B$29:$Y$29,1,N4+1)';
  var incSub = '=IF(N4=0,"first month",IF(' + incPrev + '=0,"vs last month —","vs last month "&TEXT((' + incCur + '-' + incPrev + ')/' + incPrev + ',"+0.0%;-0.0%;0.0%")))';
  var expSub = '=IF(N4=0,"first month",IF(' + expPrev + '=0,"vs last month —","vs last month "&TEXT((' + expCur + '-' + expPrev + ')/' + expPrev + ',"+0.0%;-0.0%;0.0%")))';
  var netSub = '=IF(N4=0,"first month","vs last month "&TEXT(' + netCur + '-' + netPrev + ',"+$#,##0;-$#,##0;$0"))';
  kpiCard_(sheet, 'A' + r, 3, 'TOTAL INCOME', incF, incSub, BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'TOTAL EXPENSES', expF, expSub, BRAND.GARNET);
  kpiCard_(sheet, 'G' + r, 3, 'NET CASH FLOW', netF, netSub, BRAND.FOREST);
  kpiCard_(sheet, 'J' + r, 3, 'SAVINGS RATE', srF, 'goal: 20%+', BRAND.GOLD);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 10).setNumberFormat('0.0%');
  r += 4;

  // Top spending table (left, cols A-H) + Month Snapshot (right, I-L)
  sectionLabel_(sheet, 'A' + r, 'H' + r, 'TOP SPENDING');
  sheet.getRange('A' + r).setFormula(
    '="TOP SPENDING · "&UPPER(TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),INDEX(cc_engine_months,1,N4+1)),"mmm yyyy"))');
  sectionLabel_(sheet, 'I' + r, 'L' + r, 'MONTH SNAPSHOT');
  r += 1;
  sheet.getRange(r, 1, 1, 5).setValues([['Category', 'Spent', 'Budget', '% of Budget', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var tsStart = r + 1;
  var TOP_N = 8;
  // Live ranking: pull the top 8 spent values from _Engine for the active month,
  // each row's Category is the matching engine row's label.
  var monthCol = 'cc_dashboard_month+1';
  var actualsCol = 'INDEX(_Engine!$B$2:$Y$26,,' + monthCol + ')';
  for (var t = 0; t < TOP_N; t++) {
    var rank = t + 1;
    var rr = tsStart + t;
    sheet.getRange(rr, 1).setFormula(
      '=IFERROR(INDEX(_Engine!$A$2:$A$26,MATCH(LARGE(' + actualsCol + ',' + rank + '),' + actualsCol + ',0)),"")');
    sheet.getRange(rr, 2).setFormula('=IFERROR(LARGE(' + actualsCol + ',' + rank + '),0)').setNumberFormat('$#,##0');
    sheet.getRange(rr, 3).setFormula("=IFERROR(VLOOKUP(A" + rr + ",'Monthly Budget'!$B$17:$F$41,5,FALSE),0)").setNumberFormat('$#,##0');
    sheet.getRange(rr, 4).setFormula('=IFERROR(B' + rr + '/C' + rr + ',0)').setNumberFormat('0%');
    sheet.getRange(rr, 5).setFormula(
      '=IF(A' + rr + '="","",IF(C' + rr + '=0,"—",IF(B' + rr + '<=C' + rr + ',"On Track",IF(B' + rr + '<=C' + rr + '*1.1,"Fair","Over"))))');
    sheet.getRange(rr, 6, 1, 2).merge();
    sheet.getRange(rr, 6).setFormula(
      '=IF(A' + rr + '="","",SPARKLINE(B' + rr + ',{"charttype","bar";"max",MAX(B' + rr + ',C' + rr + ');"color1","' + BRAND.FOREST + '"}))');
    if (t % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 5).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  statusChipCF_(sheet, sheet.getRange(tsStart, 5, TOP_N, 1).getA1Notation());

  // Month snapshot — all live formulas keyed off cc_dashboard_month + the TX ledger.
  // Active-month code (e.g. "2026-05") drives SUMIFS/COUNTIFS over TX!G (the
  // hidden Month helper col on Transactions).
  var monthCode = 'INDEX(cc_engine_months,1,' + monthCol + ')';
  var snap = [
    ['Income',          '=IFERROR(INDEX(_Engine!$B$27:$Y$27,1,' + monthCol + '),0)',                          '$#,##0'],
    ['Expenses',        '=IFERROR(INDEX(_Engine!$B$28:$Y$28,1,' + monthCol + '),0)',                          '$#,##0'],
    ['Net',             '=IFERROR(INDEX(_Engine!$B$29:$Y$29,1,' + monthCol + '),0)',                          '$#,##0'],
    ['Savings Rate',    '=IFERROR(INDEX(_Engine!$B$30:$Y$30,1,' + monthCol + '),0)',                          '0.0%'],
    ['Avg Daily Spend', '=IFERROR(-SUMIFS(Transactions!$C:$C,Transactions!$G:$G,' + monthCode +
                          ',Transactions!$C:$C,"<0")/DAY(EOMONTH(IFERROR(DATEVALUE(' + monthCode +
                          '&"-01"),' + monthCode + '),0)),0)',                                                 '$#,##0'],
    ['Transactions',    '=COUNTIFS(Transactions!$G:$G,' + monthCode + ',Transactions!$C:$C,"<>0")',            '#,##0'],
    ['Largest Expense', '=IFERROR(-MINIFS(Transactions!$C:$C,Transactions!$G:$G,' + monthCode + '),0)',        '$#,##0']
  ];
  for (var sI = 0; sI < snap.length; sI++) {
    var sr = tsStart + sI;
    setCell_(sheet, sheet.getRange(sr, 9).getA1Notation(), { value: snap[sI][0], merge: sheet.getRange(sr, 10).getA1Notation(), font: FONT.BODY, size: 11, color: BRAND.BODY });
    var vcell = sheet.getRange(sr, 11, 1, 2).merge();
    vcell.setFormula(snap[sI][1]).setNumberFormat(snap[sI][2])
      .setFontFamily(FONT.BODY).setFontWeight('bold').setFontColor(BRAND.FOREST).setHorizontalAlignment('right');
  }
  r = tsStart + Math.max(TOP_N, snap.length) + 2;

  // Spending Breakdown (donut, native chart) + AI Insights panel
  sectionLabel_(sheet, 'A' + r, 'F' + r, 'SPENDING BREAKDOWN');
  sectionLabel_(sheet, 'G' + r, 'L' + r, 'AI INSIGHTS');
  r += 1;
  // Donut data lives off-screen in cols N-O so it doesn't leak below the chart.
  // Labels are static; values are LIVE from _Engine for the active month
  // (the old static MOCK.breakdown values leaked into the blank build).
  var bdStart = r;
  var BD_COL = 14;
  for (var bd = 0; bd < MOCK.breakdown.length; bd++) {
    var cat = MOCK.breakdown[bd][0];
    var engRow = CATEGORIES.indexOf(cat) + 2;  // _Engine category rows = 2..21
    sheet.getRange(bdStart + bd, BD_COL).setValue(cat);
    sheet.getRange(bdStart + bd, BD_COL + 1).setFormula(
      '=IFERROR(INDEX(_Engine!$B$' + engRow + ':$Y$' + engRow + ',1,cc_dashboard_month+1),0)');
  }
  sheet.getRange(bdStart, BD_COL + 1, MOCK.breakdown.length, 1).setNumberFormat('$#,##0');
  buildDonut_(sheet, bdStart, MOCK.breakdown.length, BD_COL);

  // AI insights — Forest-on-cream, 3 callouts. Mock shows the Marcus & Elena
  // story; blank shows honest instructional copy (insights are not
  // auto-generated — the buyer asks their LLM via _Schema and pastes findings).
  var insights = (mode === 'mock') ? MOCK.ai_insights : [
    ['ASK', 'Attach this sheet to Claude or ChatGPT and ask where the money leaks. The hidden _Schema tab does the explaining.'],
    ['PASTE', 'Drop the best findings here so they stare back at you all month.'],
    ['START', 'Import a CSV first — insights need data to find.']
  ];
  for (var a = 0; a < insights.length; a++) {
    var ar = bdStart + a * 2;
    setCell_(sheet, sheet.getRange(ar, 7).getA1Notation(), { value: insights[a][0], merge: sheet.getRange(ar, 12).getA1Notation(),
      font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, h: 'left', v: 'middle' });
    themable_(sheet.getName(), 'primary', sheet.getRange(ar, 7, 1, 6).getA1Notation());
    setCell_(sheet, sheet.getRange(ar + 1, 7).getA1Notation(), { value: insights[a][1], merge: sheet.getRange(ar + 1, 12).getA1Notation(),
      font: FONT.BODY, size: 12, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });
    themable_(sheet.getName(), 'primary', sheet.getRange(ar + 1, 7, 1, 6).getA1Notation());
    sheet.setRowHeight(ar + 1, 34);
  }

  r = bdStart + Math.max(MOCK.breakdown.length, 7) + 2;
  footer_(sheet, r, 'L');
  setColWidths_(sheet, [120, 80, 80, 90, 70, 50, 60, 60, 110, 90, 70, 70]);
}

function buildDonut_(sheet, dataStartRow, n, dataCol) {
  var range = sheet.getRange(dataStartRow, dataCol || 1, n, 2);
  var chart = sheet.newChart().asPieChart().setOption('pieHole', 0.6)
    .addRange(range).setPosition(dataStartRow, 1, 0, 0)
    .setOption('legend', { position: 'right', textStyle: { fontSize: 11 } })
    .setOption('colors', DONUT_RAMP)
    .setOption('title', '')
    .setOption('width', 460).setOption('height', 260)
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
    setCell_(sheet, sheet.getRange(r, 10 + i).getA1Notation(), { value: wins[i] + ' mo',
      font: FONT.BODY, size: 11, bold: true, h: 'center', v: 'middle',
      bg: BRAND.FOREST, color: BRAND.PARCHMENT });
    themable_(sheet.getName(), 'primary', sheet.getRange(r, 10 + i).getA1Notation());
  }
  // CF: paint inactive pills cream. Pill values are "6 mo"/"12 mo"/"24 mo"; N7 holds the int.
  var winRange = sheet.getRange(r, 10, 1, 3);
  var winInactive = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=' + sheet.getRange(r, 10).getA1Notation() + '<>$N$7&" mo"')
    .setBackground(BRAND.CREAM).setFontColor(BRAND.BODY).setBold(true)
    .setRanges([winRange]).build();
  sheet.setConditionalFormatRules(sheet.getConditionalFormatRules().concat([winInactive]));

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
      '=IF(SUM(' + ENG + '!T' + er + ':Y' + er + ')=0,"",SPARKLINE(' + ENG + '!T' + er + ':Y' + er + ',{"charttype","line";"color","' + BRAND.FOREST + '";"linewidth",2}))');
    sheet.getRange(rr, 3).setFormula('=IF(SUM(' + ENG + '!T' + er + ':Y' + er + ')=0,"",' + ENG + '!Y' + er + ')').setNumberFormat('$#,##0');
    sheet.getRange(rr, 4).setFormula('=IF(SUM(' + ENG + '!T' + er + ':Y' + er + ')=0,"",IFERROR(' + ENG + '!Y' + er + '-' + ENG + '!T' + er + ',0))').setNumberFormat('+$#,##0;−$#,##0');
    if (c % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 4).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  footer_(sheet, start + totalCats + 2, 'L');
  setColWidths_(sheet, [140, 180, 90, 90, 60, 60, 60, 60, 70, 70, 70, 70]);
}

function buildTrendsChart_(sheet, atRow) {
  // Live chart data: last 6 months read straight from _Engine. Engine cols
  // T..Y = engine indices 19..24 = the most-recent 6 months.
  sheet.getRange(atRow, 16, 1, 3).setValues([['Month', 'Income', 'Expenses']]);
  for (var i = 0; i < 6; i++) {
    var rr = atRow + 1 + i;
    var engineCol = 19 + i;  // 1-based col index inside _Engine!B:Y
    var monthCell = 'INDEX(_Engine!$B$1:$Y$1,1,' + engineCol + ')';
    // Month label as "mmm yyyy". Falls back to raw value if DATEVALUE can't parse.
    sheet.getRange(rr, 16).setFormula(
      '=TEXT(IFERROR(DATEVALUE(' + monthCell + '&"-01"),' + monthCell + '),"mmm yyyy")');
    sheet.getRange(rr, 17).setFormula('=INDEX(_Engine!$B$27:$Y$27,1,' + engineCol + ')');
    sheet.getRange(rr, 18).setFormula('=INDEX(_Engine!$B$28:$Y$28,1,' + engineCol + ')');
  }
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

  var MIDX = 'cc_dashboard_month+1';
  var start = r + 5;  // indicators occupy rows start..start+4 (14..18 with r=9)

  // Has-data gate (hidden col N): active month income+expenses. When 0, the
  // composite/grade/statuses show "—" instead of the misleading 55/F +
  // contradictory chips an empty workbook produced.
  sheet.getRange('N9').setFormula(
    '=IFERROR(INDEX(_Engine!$B$27:$Y$27,1,' + MIDX + ')+INDEX(_Engine!$B$28:$Y$28,1,' + MIDX + '),0)');

  // Hero composite — weighted avg of N{start}:N{start+4} (D holds fractions summing to 1)
  setCell_(sheet, 'B' + r, {
    formula: '=IF($N$9=0,"—",IFERROR(ROUND(SUMPRODUCT(N' + start + ':N' + (start + 4) + ',D' + start + ':D' + (start + 4) + '),0),0))',
    merge: 'C' + (r + 1), font: FONT.DISPLAY, size: 64, bold: true, color: BRAND.FOREST, h: 'center', v: 'middle' });
  // 64pt needs room — bump the merged hero rows so the digits don't clip.
  sheet.setRowHeight(r, 48);
  sheet.setRowHeight(r + 1, 48);
  setCell_(sheet, 'B' + (r + 2), {
    formula: '=IF($N$9=0,"—",IF(B9>=90,"A",IF(B9>=80,"B",IF(B9>=70,"C",IF(B9>=60,"D","F")))))',
    merge: 'C' + (r + 2), font: FONT.DISPLAY, size: 16, italic: true, color: BRAND.GOLD, h: 'center' });
  sheet.setRowHeight(r + 2, 26);

  // box-drawing scale + pip
  var scale = '0 ─── Critical ─── 45 ─── Needs Work ─── 60 ─── Fair ─── 75 ─── Good ─── 90 ─── Excellent ─── 100';
  setCell_(sheet, 'E' + r, { value: scale, merge: 'L' + r, font: 'Roboto Mono', size: 10, color: BRAND.BODY, v: 'middle' });
  setCell_(sheet, 'E' + (r + 1), {
    formula: '=IF($N$9=0,"▼",REPT(" ",ROUND(B9/100*64,0))&"▼")',
    merge: 'L' + (r + 1), font: 'Roboto Mono', size: 10, color: BRAND.CANOPY });
  r += 3;

  // 5 indicator rows
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'INDICATORS · 5 WEIGHTED MEASURES');
  r += 1;
  sheet.getRange(r, 1, 1, 6).setValues([['Indicator', 'Value', 'Benchmark', 'Weight', 'Score (0–100)', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);

  var names   = ['Savings Rate', 'Expense-to-Income', 'Emergency Fund', 'Budget Adherence', 'Debt-to-Income'];
  var benches = ['≥ 20% of income saved', '≤ 80% of income spent', '≥ 3 months of expenses', '≥ 80% categories on budget', '≤ 36% debt payments'];
  var weights = [0.25, 0.20, 0.20, 0.20, 0.15];
  var fmts    = ['0.0%', '0.0%', '0.0" mo"', '@', '0.0%'];

  for (var i = 0; i < 5; i++) {
    var rr = start + i;
    sheet.getRange(rr, 1).setValue(names[i]);
    sheet.getRange(rr, 3).setValue(benches[i]);
    sheet.getRange(rr, 4).setValue(weights[i]).setNumberFormat('0%');
    sheet.getRange(rr, 5).setFormula('=SPARKLINE(N' + rr + ',{"charttype","bar";"max",100;"color1","' + BRAND.FOREST + '"})');
    sheet.getRange(rr, 2).setNumberFormat(fmts[i]);

    var valueF, scoreF, statusF;
    if (i === 0) {
      valueF  = '=IFERROR(INDEX(_Engine!$B$30:$Y$30,1,' + MIDX + '),0)';
      scoreF  = '=MAX(0,MIN(100,B' + rr + '*500))';
      statusF = '=IF($N$9=0,"—",IF(B' + rr + '>=0.2,"On Track",IF(B' + rr + '>=0.1,"Fair","Over")))';
    } else if (i === 1) {
      valueF  = '=IFERROR(INDEX(_Engine!$B$28:$Y$28,1,' + MIDX + ')/INDEX(_Engine!$B$27:$Y$27,1,' + MIDX + '),0)';
      scoreF  = '=MAX(0,MIN(100,(1-B' + rr + ')*250))';
      statusF = '=IF($N$9=0,"—",IF(B' + rr + '<=0.8,"On Track",IF(B' + rr + '<=0.9,"Fair","Over")))';
    } else if (i === 2) {
      valueF  = '=IFERROR((SUMIFS(Accounts!E10:E21,Accounts!B10:B21,"Checking")+SUMIFS(Accounts!E10:E21,Accounts!B10:B21,"Savings"))/INDEX(_Engine!$B$28:$Y$28,1,' + MIDX + '),0)';
      scoreF  = '=MAX(0,MIN(100,B' + rr + '/6*100))';
      statusF = '=IF($N$9=0,"—",IF(B' + rr + '>=3,"On Track",IF(B' + rr + '>=1,"Fair","Over")))';
    } else if (i === 3) {
      // BA helpers in hidden cols O (on count) and P (total count) at this row.
      sheet.getRange(rr, 15).setFormula(
        "=SUMPRODUCT((INDEX(_Engine!$B$2:$Y$26,," + MIDX + ")<='Monthly Budget'!F17:F41)*('Monthly Budget'!B17:B41<>\"\"))");
      sheet.getRange(rr, 16).setFormula(
        "=SUMPRODUCT(('Monthly Budget'!B17:B41<>\"\")*1)");
      valueF  = '=IF($N$9=0,"—",O' + rr + '&" of "&P' + rr + ')';
      scoreF  = '=IFERROR(O' + rr + '/P' + rr + '*100,0)';
      statusF = '=IF($N$9=0,"—",IF(IFERROR(O' + rr + '/P' + rr + ',0)>=0.8,"On Track",IF(IFERROR(O' + rr + '/P' + rr + ',0)>=0.6,"Fair","Over")))';
    } else {
      valueF  = '=IFERROR(INDEX(_Engine!$B$14:$Y$14,1,' + MIDX + ')/INDEX(_Engine!$B$27:$Y$27,1,' + MIDX + '),0)';
      scoreF  = '=MAX(0,MIN(100,(0.36-B' + rr + ')/0.36*100))';
      statusF = '=IF($N$9=0,"—",IF(B' + rr + '<=0.36,"On Track",IF(B' + rr + '<=0.45,"Fair","Over")))';
    }
    sheet.getRange(rr, 2).setFormula(valueF);
    sheet.getRange(rr, 14).setFormula(scoreF);
    sheet.getRange(rr, 6).setFormula(statusF);

    if (i % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 6).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  statusChipCF_(sheet, sheet.getRange(start, 6, 5, 1).getA1Notation());
  r = start + 5 + 1;

  // Biggest Opportunity callout — Forest panel + dynamic delta + dynamic text
  sheet.getRange(r, 1, 3, 12).setBackground(BRAND.FOREST).setVerticalAlignment('middle');
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 3, 12).getA1Notation());
  setCell_(sheet, 'A' + r, { value: '⚡ BIGGEST OPPORTUNITY', merge: 'D' + r,
    font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, v: 'middle' });

  // Opportunity helpers in hidden cols Q (category name) and R (positive overage).
  for (var bi = 0; bi < 25; bi++) {
    var br = 17 + bi;
    sheet.getRange(br, 17).setFormula("='Monthly Budget'!B" + br);
    sheet.getRange(br, 18).setFormula(
      "=IFERROR(MAX(0,INDEX(_Engine!$B$2:$Y$26," + (bi + 1) + "," + MIDX + ")-'Monthly Budget'!F" + br + "),0)");
  }

  setCell_(sheet, 'E' + r, {
    formula: '=IF($N$9=0,"—",B9&" → "&ROUND(B9+IF(MAX(R17:R41)>0,6,0),0))',
    merge: 'F' + r, font: FONT.DISPLAY, size: 18, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'center', v: 'middle' });
  setCell_(sheet, 'A' + (r + 1), {
    formula: '=IF($N$9=0,"Import your first CSV — the score starts when the data does.",IF(MAX(R17:R41)=0,"On budget across the board this month — keep it up.",INDEX(Q17:Q41,MATCH(MAX(R17:R41),R17:R41,0))&" is $"&TEXT(MAX(R17:R41),"#,##0")&" over budget. Trimming to plan lifts composite by ~6 points."))',
    merge: 'L' + (r + 2), font: FONT.BODY, size: 13, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });

  footer_(sheet, r + 4, 'L');
  setColWidths_(sheet, [150, 90, 200, 70, 130, 80, 60, 60, 60, 60, 60, 60]);
  sheet.hideColumns(14, 5);  // N (scores), O+P (BA helpers), Q+R (opportunity helpers)
}

// ── Net Worth ─────────────────────────────────────────────────────────
function buildNetWorth_(sheet, mode) {
  chrome_(sheet, TABS.NETWORTH, 'L');
  var r = CONTENT_START_ROW;
  var nw = MOCK.net_worth;

  // Hero Forest panel (rows r..r+5) — paint, don't pre-merge
  sheet.getRange(r, 1, 6, 12).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 6, 12).getA1Notation());
  // Investments live in cells I{INV_START}:I{INV_START+inv.length-1} once the
  // budget-accounts/investments block below renders. Net Worth = sum of
  // account balances + sum of investments. I15:I30 is a deliberately wide
  // range so growth doesn't break the formulas.
  var INV_START = CONTENT_START_ROW + 9;  // r=6 → hero 6..11 → +7 to row 13 → header 14 → data 15
  var INV_END   = INV_START + 15;
  var invSum    = 'SUM($I$' + INV_START + ':$I$' + INV_END + ')';
  var acctSum   = 'SUM(Accounts!$E$10:$E$21)';
  var assetsF   = 'SUMIF(Accounts!$E$10:$E$21,">0")+' + invSum;
  var liabF     = 'ABS(SUMIF(Accounts!$E$10:$E$21,"<0"))';
  var ncfF      = 'IFERROR(INDEX(_Engine!$B$29:$Y$29,1,cc_dashboard_month+1),0)';

  setCell_(sheet, 'A' + r, { value: 'TOTAL NET WORTH', merge: 'F' + r, font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST });
  setCell_(sheet, 'A' + (r + 1), {
    formula: '=' + acctSum + '+' + invSum,
    merge: 'F' + (r + 2), font: FONT.DISPLAY, size: 48, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, v: 'middle' });
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  // 48pt characters need ~60px of vertical room — default row height clips the top of the $.
  sheet.setRowHeight(r + 1, 36);
  sheet.setRowHeight(r + 2, 36);
  // Sub-line tracks NetCashFlow for the active month — an honest approximation
  // of monthly net-worth movement (excludes investment-only gains/losses).
  setCell_(sheet, 'A' + (r + 3), {
    formula: '=TEXT(' + ncfF + ',"+$#,##0;-$#,##0;$0")&" this month"',
    merge: 'F' + (r + 3), font: FONT.BODY, size: 12, color: BRAND.GOLD, bg: BRAND.FOREST });
  // 6-month history sparkline stays static — making this live requires a
  // monthly balance-snapshot mechanism we don't have yet. Demo only; the
  // blank build gets zeros (flat line) instead of mock history.
  var hist = (mode === 'mock') ? nw.history : [0, 0, 0, 0, 0, 0];
  sheet.getRange(r + 1, 8, 6, 1).setValues(hist.map(function (v) { return [v]; }));
  sheet.hideColumns(8);
  setCell_(sheet, 'I' + r, { value: 'NET WORTH · 6 MO', merge: 'L' + r, font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST });
  var spark = sheet.getRange(r + 1, 9, 1, 4).merge();
  spark.setFormula(sparkLine_('H' + (r + 1) + ':H' + (r + 6), BRAND.GOLD)).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', spark.getA1Notation());
  // Assets / Liabilities — stacked 2-line text built inline so the merge can stay narrow.
  setCell_(sheet, 'I' + (r + 3), {
    formula: '="Assets $"&TEXT(' + assetsF + ',"#,##0")&CHAR(10)&"Liabilities $"&TEXT(' + liabF + ',"#,##0")',
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
  var BA_ROWS = 12;   // mirror the full Accounts capacity (rows 10-21)
  var INV_ROWS = 8;   // manual-entry capacity; mock fills the first 5
  // pull budget accounts from Accounts tab (auto) — IF-wrapped so empty
  // registry rows render blank instead of a column of $0s in the blank build.
  for (var i = 0; i < BA_ROWS; i++) {
    var rr = ds + i; var ar = 10 + i; // Accounts data starts row 10
    var aRef = "'" + TABS.ACCOUNTS + "'!A" + ar;
    sheet.getRange(rr, 1).setFormula('=IF(' + aRef + '="","",' + aRef + ')');
    sheet.getRange(rr, 2).setFormula('=IF(' + aRef + '="","",' + "'" + TABS.ACCOUNTS + "'!B" + ar + ')');
    sheet.getRange(rr, 3).setFormula('=IF(' + aRef + '="","",' + "'" + TABS.ACCOUNTS + "'!C" + ar + ')');
    sheet.getRange(rr, 4).setFormula('=IF(' + aRef + '="","",' + "'" + TABS.ACCOUNTS + "'!E" + ar + ')').setNumberFormat('$#,##0');
  }
  // investments — yellow manual-entry rows in both modes; values mock-only.
  for (var j = 0; j < INV_ROWS; j++) {
    var jr = ds + j;
    sheet.getRange(jr, 7, 1, 3).setBackground(BRAND.YELLOW);
    if (mode === 'mock' && j < inv.length) {
      sheet.getRange(jr, 7).setValue(inv[j][0]);
      sheet.getRange(jr, 8).setValue(inv[j][1]);
      sheet.getRange(jr, 9).setValue(inv[j][2]);
    }
    sheet.getRange(jr, 9).setNumberFormat('$#,##0');
  }
  // net-worth total cell named range cc_networth_total at D6 area — store at far cell
  footer_(sheet, ds + Math.max(BA_ROWS, INV_ROWS) + 2, 'L');
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

// ── Bank Import v2 cell contract (07_bank_import_v2.md) ──────────────
// Two-zone 26-col grid: text cols A..L (widths as before) · M gutter ·
// N..Y = twelve month cells for the coverage strips · Z margin. Every
// block below is anchored here — onEdit, the step pills, and the import
// flows all derive from IMP2, never from literals.
var IMP2 = {
  LAST_COL: 26, LAST_LETTER: 'Z',
  MON_FIRST: 14, MON_COUNT: 12,            // N..Y, oldest → newest
  PILL_ROW: 9,
  STATUS_ROW: 11,                           // 11-12: inbox status lines
  FILES_LABEL: 14, FILES_HEADER: 15, FILES_FIRST: 16, FILES_COUNT: 20,     // ..35
  REVIEW_LABEL: 37, REVIEW_HEADER: 38, REVIEW_FIRST: 39, REVIEW_COUNT: 15, // ..53
  COV_LABEL: 55, COV_MONTHS_ROW: 56, COV_FIRST: 57, COV_COUNT: 12,         // ..68
  REC_LABEL: 70, REC_HEADER: 71, REC_FIRST: 72, REC_COUNT: 12, REC_MONTHS: 6, // inputs B..G
  RECIPE_LABEL: 85, RECIPE_HEADER: 86, RECIPE_FIRST: 87, RECIPE_COUNT: 10, // ..96
  PASTE_LABEL: 98, PASTE_ACCOUNT_ROW: 99,
  CAPTION_ROW: 199, FOOTER_ROW: 201, GRID_ROWS: 205
};
// legacy paste-path anchors (fallback flow keeps working, relocated)
var IMPORT_ACCOUNT_CELL = 'C99';
var IMPORT_PASTE_FIRST_ROW = 101;
var IMPORT_PASTE_ANCHOR = 'A101';           // top-left of the unmerged paste grid
var IMPORT_PASTE_ROW_COUNT = 50;            // 50 rows × 8 cols = paste capacity
var IMPORT_PASTE_COL_COUNT = 8;
var IMPORT_PASTE_LAST_ROW = IMPORT_PASTE_FIRST_ROW + IMPORT_PASTE_ROW_COUNT - 1;   // 150
var REVIEW_INCOME_SECTION_ROW = 152;
var REVIEW_INCOME_HEADER_ROW = 153;
var REVIEW_INCOME_FIRST_ROW  = 154;
var REVIEW_INCOME_ROW_COUNT  = 20;          // ..173
var UNCAT_SECTION_ROW = 176;      // section label
var UNCAT_HEADER_ROW  = 177;
var UNCAT_FIRST_ROW   = 178;
var UNCAT_ROW_COUNT   = 20;                 // ..197

// _ImportStage layout (hidden): staged rows + per-file meta + the live
// SUMIFS helper grid the coverage/reconcile surfaces read.
var STAGE = {
  ROWS_HEADER: 1, ROWS_FIRST: 2, ROWS_CAP: 4000,
  // staged row cols: A date · B desc · C amount(signed) · D account ·
  // E category · F source file · G status (NEW/DUP/REVIEW/PENDING) · H pair id
  META_COL: 10, META_FIRST: 2, META_CAP: 20,   // J.. file meta: name·recipe·account·rows·span·new·dup·review·fileId
  HELP_FIRST: 4200,                             // helper grid top row
  HELP_MONTHS: 13                               // prior + 12 months per account
};

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
    'Pick a type, a source, a target. Current and Status track live from your data.');

  var hdr = ['Goal Name', 'Type', 'Source', 'Target', 'Current', '% Complete', 'Deadline', 'Status', 'Note'];
  sheet.getRange(r, 1, 1, 9).setValues([hdr]).setFontWeight('bold').setBackground(BRAND.FOREST)
    .setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 1, 9).getA1Notation());
  var start = r + 1;
  var goals = (mode === 'mock') ? MOCK.goals : [];
  var rowCount = Math.max(goals.length, 7);

  // Hidden helper: union of Accounts + Categories names for the Source dropdown.
  // Spills from M{start}; FILTER drops blanks (custom-slot rows, empty account rows).
  // IFERROR-wrapped — an empty Accounts registry (blank build) made FILTER
  // return #N/A and killed the whole spill.
  sheet.getRange(start, 13).setFormula(
    '={IFERROR(FILTER(cc_accounts_list,LEN(cc_accounts_list)>0),{""});IFERROR(FILTER(cc_tx_categories,LEN(cc_tx_categories)>0),{""})}');

  for (var i = 0; i < rowCount; i++) {
    var rr = start + i;
    if (i < goals.length) {
      var g = goals[i];
      sheet.getRange(rr, 1).setValue(g[0]);                 // A: name
      sheet.getRange(rr, 2).setValue(g[1]);                 // B: type
      sheet.getRange(rr, 3).setValue(g[2]).setBackground(BRAND.YELLOW); // C: source
      sheet.getRange(rr, 4).setValue(g[3]).setBackground(BRAND.YELLOW); // D: target
      sheet.getRange(rr, 7).setValue(g[4]);                 // G: deadline
    } else {
      // Empty seed rows still get yellow on Source/Target/Note so the buyer
      // sees where to type.
      sheet.getRange(rr, 3).setBackground(BRAND.YELLOW);
      sheet.getRange(rr, 4).setBackground(BRAND.YELLOW);
    }
    sheet.getRange(rr, 9).setBackground(BRAND.YELLOW).setWrap(true); // I: note (always editable)

    // Per-row number format: Savings Rate uses %, all others $.
    var fmt = '=IF($B' + rr + '="Savings Rate","0.0%","$#,##0")';
    // Apps Script doesn't accept formula-as-format, so we just set both based on
    // mock data here. When the buyer changes Type later, they'll need to adjust
    // the format manually OR we set both formats unconditionally to a smart one.
    // Use a per-row check at build time:
    var isRate = (i < goals.length && goals[i][1] === 'Savings Rate');
    sheet.getRange(rr, 4).setNumberFormat(isRate ? '0.0%' : '$#,##0');
    sheet.getRange(rr, 5).setNumberFormat(isRate ? '0.0%' : '$#,##0');

    // E: Current — type-aware live formula.
    sheet.getRange(rr, 5).setFormula(
      '=IFS(' +
        '$B' + rr + '="Spending Limit", IFERROR(INDEX(_Engine!$B$2:$Y$26,MATCH($C' + rr + ',_Engine!$A$2:$A$26,0),cc_dashboard_month+1),""),' +
        '$B' + rr + '="Savings Target", IFERROR(VLOOKUP($C' + rr + ',Accounts!$A$10:$E$21,5,FALSE),""),' +
        '$B' + rr + '="Debt Payoff", IFERROR(VLOOKUP($C' + rr + ',Accounts!$A$10:$D$21,4,FALSE)-VLOOKUP($C' + rr + ',Accounts!$A$10:$E$21,5,FALSE),""),' +
        '$B' + rr + '="Savings Rate", IFERROR(INDEX(_Engine!$B$30:$Y$30,1,cc_dashboard_month+1),0),' +
        'TRUE,"")');

    // F: % Complete — sparkline bar, type-aware color (high=good for save/debt/rate; high=bad for spend).
    sheet.getRange(rr, 6).setFormula(
      '=IFERROR(SPARKLINE($E' + rr + ',{"charttype","bar";"max",$D' + rr + ';"color1",' +
        'IF(OR($B' + rr + '="Savings Target",$B' + rr + '="Debt Payoff",$B' + rr + '="Savings Rate"),' +
          'IF($E' + rr + '/$D' + rr + '>=1,"' + BRAND.FOREST + '",IF($E' + rr + '/$D' + rr + '>=0.75,"' + BRAND.GOLD + '","' + BRAND.GARNET + '")),' +
          'IF($E' + rr + '/$D' + rr + '>1,"' + BRAND.GARNET + '",IF($E' + rr + '/$D' + rr + '>0.85,"' + BRAND.GOLD + '","' + BRAND.FOREST + '"))' +
        ')}),"")');

    // H: Status — type-aware.
    sheet.getRange(rr, 8).setFormula(
      '=IFS(' +
        'OR($B' + rr + '="",$E' + rr + '="",$D' + rr + '=""),"",' +
        '$B' + rr + '="Spending Limit", IF($E' + rr + '<=$D' + rr + ',"On Track",IF($E' + rr + '<=$D' + rr + '*1.1,"Fair","Over")),' +
        '$B' + rr + '="Savings Target", IF($E' + rr + '>=$D' + rr + ',"On Track",IF($E' + rr + '>=$D' + rr + '*0.75,"Fair","Over")),' +
        '$B' + rr + '="Debt Payoff", IF($E' + rr + '>=$D' + rr + ',"On Track",IF($E' + rr + '>=$D' + rr + '*0.75,"Fair","Over")),' +
        '$B' + rr + '="Savings Rate", IF($E' + rr + '>=0.2,"On Track",IF($E' + rr + '>=0.1,"Fair","Over")),' +
        'TRUE,"")');

    // N (hidden): forecast gap helper — positive remaining $ for incomplete Savings Target goals only.
    sheet.getRange(rr, 14).setFormula(
      '=IF(AND($B' + rr + '="Savings Target",ISNUMBER($E' + rr + '),$E' + rr + '<$D' + rr + '),$D' + rr + '-$E' + rr + ',0)');

    if (i % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 9).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }

  // Type dropdown
  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Savings Target', 'Debt Payoff', 'Spending Limit', 'Savings Rate'], true).build();
  sheet.getRange(start, 2, rowCount, 1).setDataValidation(typeRule);

  // Source dropdown — union of accounts + categories, sourced from hidden col M.
  var sourceRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sheet.getRange(start, 13, 50, 1), true).setAllowInvalid(true).build();
  sheet.getRange(start, 3, rowCount, 1).setDataValidation(sourceRule);

  statusChipCF_(sheet, sheet.getRange(start, 8, rowCount, 1).getA1Notation());

  // Forecast strip — Forest panel with a live formula picking the biggest-gap
  // Savings Target goal and projecting months at current NetCashFlow pace.
  var fr = start + rowCount + 1;
  setCell_(sheet, 'A' + fr, { value: 'FORECAST', merge: 'L' + fr,
    font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, v: 'middle' });
  themable_(sheet.getName(), 'primary', sheet.getRange(fr, 1, 1, 12).getA1Notation());

  var gapRange = 'N' + start + ':N' + (start + rowCount - 1);
  var nameRange = 'A' + start + ':A' + (start + rowCount - 1);
  var ncf = 'INDEX(_Engine!$B$29:$Y$29,1,cc_dashboard_month+1)';
  setCell_(sheet, 'A' + (fr + 1), {
    formula: '=IF(MAX(' + gapRange + ')<=0,"All Savings Target goals met — pick a new target!",' +
      'IF(' + ncf + '<=0,"Negative cash flow this month — trim before adding a new goal.",' +
      'INDEX(' + nameRange + ',MATCH(MAX(' + gapRange + '),' + gapRange + ',0))&" hits target in ~"&' +
      'ROUND(MAX(' + gapRange + ')/' + ncf + ',0)&" months at current pace ($"&TEXT(' + ncf + ',"#,##0")&"/mo saved)."))',
    merge: 'L' + (fr + 2), font: FONT.BODY, size: 13, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'middle' });
  themable_(sheet.getName(), 'primary', sheet.getRange(fr + 1, 1, 2, 12).getA1Notation());

  footer_(sheet, fr + 4, 'L');
  setColWidths_(sheet, [140, 110, 130, 80, 80, 110, 90, 80, 180, 60, 60, 60]);
  sheet.hideColumns(13, 2);  // M (source union) + N (forecast gaps)
}

// ── Bank Import Guide ─────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════
// Bank Import v2 — the de-friction core (07_bank_import_v2.md).
// Drop a folder of exports → one scan → one append. Coverage map answers
// "did everything get in"; reconciliation proves it against statements;
// dedupe is account-scoped (v1 silently dropped the same charge appearing
// on two different cards). The legacy paste zone survives as a fallback.
// ═══════════════════════════════════════════════════════════════════════

// ── Recipe library — best-effort header signatures for common US banks.
// detect.h = sorted lowercased header names joined '|'; detect.f = filename
// regex fallback. map values are HEADER NAMES (robust to column order);
// amount either {amt} or {debit, credit}. flip = export reports charges as
// positives (card convention) so v2 negates. Signatures marked (unverified)
// are best-effort from common exports — the teach-me table (Bank Import
// tab) safely covers anything that misses, so a wrong signature degrades
// to generic sniffing, never to bad data.
var IMPORT_RECIPES = [
  { id: 'chase-card',    f: /chase/i,      h: 'amount|category|memo|post date|transaction date|type', map: { date: 'Transaction Date', desc: 'Description', amt: 'Amount' }, flip: false },
  { id: 'chase-acct',    f: /chase/i,      h: 'amount|balance|check or slip #|description|details|posting date|type', map: { date: 'Posting Date', desc: 'Description', amt: 'Amount' }, flip: false },
  { id: 'amex-card',     f: /amex|american.?express/i, h: 'amount|date|description', map: { date: 'Date', desc: 'Description', amt: 'Amount' }, flip: true },
  { id: 'discover-card', f: /discover/i,   h: 'amount|category|description|post date|trans. date', map: { date: 'Trans. Date', desc: 'Description', amt: 'Amount' }, flip: true },
  { id: 'boa-acct',      f: /bank.?of.?america|boa/i, h: 'amount|date|description|running bal.', map: { date: 'Date', desc: 'Description', amt: 'Amount' }, flip: false },
  { id: 'capone-card',   f: /capital.?one/i, h: 'card no.|category|credit|debit|description|posted date|transaction date', map: { date: 'Transaction Date', desc: 'Description', debit: 'Debit', credit: 'Credit' }, flip: false },
  { id: 'wells-acct',    f: /wells/i,      h: '', map: null, flip: false, positional: ['date', 'amt', null, null, 'desc'] },   // headerless 5-col export
  { id: 'citi-card',     f: /citi/i,       h: 'credit|debit|description|member name|status|date', map: { date: 'Date', desc: 'Description', debit: 'Debit', credit: 'Credit' }, flip: false },
  { id: 'usaa-acct',     f: /usaa/i,       h: 'amount|balance|category|date|description|original description|status', map: { date: 'Date', desc: 'Description', amt: 'Amount' }, flip: false },
  { id: 'ally-acct',     f: /ally/i,       h: ' amount| description|date|time|type', map: { date: 'Date', desc: ' Description', amt: ' Amount' }, flip: false },
  { id: 'apple-card',    f: /apple/i,      h: 'amount (usd)|category|clearing date|description|merchant|purchased by|transaction date|type', map: { date: 'Transaction Date', desc: 'Merchant', amt: 'Amount (USD)' }, flip: true },
  { id: 'sofi-acct',     f: /sofi/i,       h: 'amount|current balance|date|description|status|type', map: { date: 'Date', desc: 'Description', amt: 'Amount' }, flip: false },
  { id: 'chime-acct',    f: /chime/i,      h: 'amount|date|description|settlement date|type', map: { date: 'Date', desc: 'Description', amt: 'Amount' }, flip: false },
  { id: 'pnc-acct',      f: /pnc/i,        h: 'amount|category|date|description|transaction type', map: { date: 'Date', desc: 'Description', amt: 'Amount' }, flip: false },
  { id: 'usbank-acct',   f: /us.?bank/i,   h: 'amount|date|memo|name|transaction', map: { date: 'Date', desc: 'Name', amt: 'Amount' }, flip: false },
  { id: 'truist-acct',   f: /truist/i,     h: 'amount|check number|date|description|transaction type', map: { date: 'Date', desc: 'Description', amt: 'Amount' }, flip: false },
  { id: 'fidelity',      f: /fidelity/i,   h: 'amount|balance|date|description|type', map: { date: 'Date', desc: 'Description', amt: 'Amount' }, flip: false },
  { id: 'schwab',        f: /schwab/i,     h: 'balance|date|deposit|description|type|withdrawal', map: { date: 'Date', desc: 'Description', debit: 'Withdrawal', credit: 'Deposit' }, flip: false },
  { id: 'venmo',         f: /venmo/i,      h: 'amount (fee)|amount (total)|datetime|from|funding source|id|note|status|to|type', map: { date: 'Datetime', desc: 'Note', amt: 'Amount (total)' }, flip: false },
  { id: 'paypal',        f: /paypal/i,     h: 'amount|currency|date|name|status|time|time zone|type', map: { date: 'Date', desc: 'Name', amt: 'Amount' }, flip: false }
];

function headerSig_(headers) {
  return headers.map(function (h) { return String(h).toLowerCase().trim(); })
    .filter(Boolean).sort().join('|');
}

// find the recipe for a parsed file: exact signature → filename → buyer
// teach-me rows → null (generic sniffing takes over).
function detectRecipe_(headers, filename, sheet) {
  var sig = headerSig_(headers);
  for (var i = 0; i < IMPORT_RECIPES.length; i++) {
    if (IMPORT_RECIPES[i].h && IMPORT_RECIPES[i].h === sig) return IMPORT_RECIPES[i];
  }
  // buyer recipes (teach-me table): [bank, headerContains, dateH, descH, amtH, debitH, creditH, flip?]
  if (sheet) {
    var rows = sheet.getRange(IMP2.RECIPE_FIRST, 1, IMP2.RECIPE_COUNT, 8).getValues();
    for (var b = 0; b < rows.length; b++) {
      var rr = rows[b];
      if (!rr[0] || !rr[1]) continue;
      if (sig.indexOf(String(rr[1]).toLowerCase().trim()) === -1) continue;
      var map = { date: rr[2], desc: rr[3] };
      if (rr[5] || rr[6]) { map.debit = rr[5]; map.credit = rr[6]; } else { map.amt = rr[4]; }
      return { id: 'buyer:' + rr[0], map: map, flip: String(rr[7]).toLowerCase() === 'yes' };
    }
  }
  for (var j = 0; j < IMPORT_RECIPES.length; j++) {
    if (IMPORT_RECIPES[j].f && IMPORT_RECIPES[j].f.test(filename) && IMPORT_RECIPES[j].h) return IMPORT_RECIPES[j];
  }
  return null;
}

// normalize one parsed CSV (array-of-arrays incl. header) into
// [{date, desc, amount}] using a recipe, or generic sniffing when null.
function normalizeCsv_(rows, recipe) {
  if (!rows.length) return { rows: [], flip: false };
  var out = [], flip = recipe ? !!recipe.flip : false;
  var header = rows[0].map(String);
  var start = 1, idx;
  if (recipe && recipe.positional) {
    idx = { date: recipe.positional.indexOf('date'), desc: recipe.positional.indexOf('desc'), amount: recipe.positional.indexOf('amt'), debit: -1, credit: -1 };
    start = 0;   // headerless export
  } else if (recipe && recipe.map) {
    var find = function (name) {
      if (name == null || name === '') return -1;
      for (var i = 0; i < header.length; i++) if (header[i].toLowerCase().trim() === String(name).toLowerCase().trim()) return i;
      return -1;
    };
    idx = { date: find(recipe.map.date), desc: find(recipe.map.desc), amount: find(recipe.map.amt), debit: find(recipe.map.debit), credit: find(recipe.map.credit) };
  } else {
    idx = sniffColumns_(header);
  }
  if (idx.date < 0 || (idx.amount < 0 && idx.debit < 0)) return { rows: null, flip: flip };   // undetectable
  for (var r = start; r < rows.length; r++) {
    var f = rows[r];
    if (!f || f.length < 2) continue;
    var amount = parseAmount_(f, { amount: idx.amount, debit: idx.debit, credit: idx.credit });
    if (amount === null) continue;
    if (flip) amount = -amount;
    var date = parseDate_(f[idx.date]);
    if (!(date instanceof Date)) continue;                      // strict for the bulk path
    var desc = String(idx.desc >= 0 ? f[idx.desc] : '').trim();
    out.push({ date: date, desc: desc, amount: amount });
  }
  return { rows: out, flip: flip };
}

// account-scoped exact key — THE dedupe-bug fix. Both import paths use it.
function txKey_(account, date, desc, amount) {
  var tz = SpreadsheetApp.getActive().getSpreadsheetTimeZone();
  var ds = (date instanceof Date) ? Utilities.formatDate(date, tz, 'yyyy-MM-dd') : String(date || '').trim();
  return String(account || '').trim() + '|' + ds + '|' +
    String(desc || '').toUpperCase().replace(/\s+/g, ' ').trim() + '|' + Number(amount).toFixed(2);
}

// near-duplicate: same account + amount, dates within 2 days, similar desc.
function nearDupe_(a, b) {
  if (a.account !== b.account) return false;
  if (Number(a.amount).toFixed(2) !== Number(b.amount).toFixed(2)) return false;
  var da = a.date instanceof Date ? a.date.getTime() : 0, db = b.date instanceof Date ? b.date.getTime() : 0;
  if (Math.abs(da - db) > 2 * 86400000) return false;
  var ta = String(a.desc).toUpperCase().split(/\s+/).filter(Boolean);
  var tb = String(b.desc).toUpperCase().split(/\s+/).filter(Boolean);
  if (!ta.length || !tb.length) return true;
  var hit = 0;
  for (var i = 0; i < ta.length; i++) if (tb.indexOf(ta[i]) !== -1) hit++;
  return hit / Math.max(ta.length, tb.length) >= 0.5;
}

// existing-ledger keys + row objects (for dedupe + near-dupe checks)
function readLedgerForDedupe_(tx) {
  var last = tx.getLastRow();
  if (last <= 9) return { keys: {}, rows: [] };
  var vals = tx.getRange(10, 1, last - 9, 5).getValues();   // A date B desc C amt D cat E account
  var keys = {}, rows = [];
  for (var i = 0; i < vals.length; i++) {
    if (vals[i][0] === '' || vals[i][0] == null) continue;
    var o = { date: vals[i][0], desc: vals[i][1], amount: vals[i][2], account: vals[i][4] };
    rows.push(o);
    keys[txKey_(o.account, o.date, o.desc, o.amount)] = true;
  }
  return { keys: keys, rows: rows };
}

// ── Inbox plumbing ────────────────────────────────────────────────────
var INBOX_FOLDER_NAME = 'Column & Co. — Bank Inbox';
var INBOX_DONE_NAME = 'Imported ✓';

function ensureInboxFolder_() {
  var dp = PropertiesService.getDocumentProperties();
  var id = dp.getProperty('cc_inbox_folder_id');
  if (id) {
    try { return DriveApp.getFolderById(id); } catch (e) { /* re-create below */ }
  }
  var it = DriveApp.getFoldersByName(INBOX_FOLDER_NAME);
  var folder = it.hasNext() ? it.next() : DriveApp.createFolder(INBOX_FOLDER_NAME);
  dp.setProperty('cc_inbox_folder_id', folder.getId());
  return folder;
}
function inboxDoneFolder_(inbox) {
  var it = inbox.getFoldersByName(INBOX_DONE_NAME);
  return it.hasNext() ? it.next() : inbox.createFolder(INBOX_DONE_NAME);
}
function whereIsMyInbox() {
  var folder = ensureInboxFolder_();
  SpreadsheetApp.getActive().toast('Your Bank Inbox folder in Drive: "' + folder.getName() + '" — drop every bank export there, then 💳 → Scan Bank Inbox. ' + folder.getUrl(), CC.BRAND, 12);
}

// filename → account guess: exact account-name token or its last-4 digits
function guessAccount_(filename, accounts) {
  var lower = String(filename).toLowerCase();
  for (var i = 0; i < accounts.length; i++) {
    var name = String(accounts[i]).toLowerCase();
    if (!name) continue;
    if (lower.indexOf(name.replace(/\s+/g, '')) !== -1 || lower.indexOf(name) !== -1) return accounts[i];
    var first = name.split(/\s+/)[0];
    if (first && first.length >= 4 && lower.indexOf(first) !== -1) return accounts[i];
  }
  return '';
}

// ── Scan — parse everything in the inbox onto _ImportStage ───────────
function scanBankInbox() {
  var ss = SpreadsheetApp.getActive();
  var imp = ss.getSheetByName(TABS.IMPORT), stage = ss.getSheetByName(TABS.STAGE), tx = ss.getSheetByName(TABS.TX);
  if (!imp || !stage || !tx) return;
  var folder = ensureInboxFolder_();
  var dp = PropertiesService.getDocumentProperties();
  var acctMap = {};
  try { acctMap = JSON.parse(dp.getProperty('cc_inbox_account_map') || '{}'); } catch (e) {}
  var acctRange = ss.getRangeByName('cc_accounts_list');
  var accounts = (acctRange ? acctRange.getValues() : []).map(function (r) { return String(r[0] || '').trim(); }).filter(Boolean);

  // previous FILES-table account assignments survive a rescan
  var prevFiles = imp.getRange(IMP2.FILES_FIRST, 1, IMP2.FILES_COUNT, 3).getValues();
  prevFiles.forEach(function (r) { if (r[0] && r[2]) acctMap[String(r[0])] = String(r[2]); });

  // clear stage + preview surfaces
  stage.getRange(STAGE.ROWS_FIRST, 1, STAGE.ROWS_CAP, 8).clearContent();
  stage.getRange(STAGE.META_FIRST, STAGE.META_COL, STAGE.META_CAP, 9).clearContent();
  imp.getRange(IMP2.FILES_FIRST, 1, IMP2.FILES_COUNT, 12).clearContent();
  imp.getRange(IMP2.REVIEW_FIRST, 1, IMP2.REVIEW_COUNT, 12).clearContent();

  var ledger = readLedgerForDedupe_(tx);
  var it = folder.getFiles();
  var files = [];
  while (it.hasNext()) files.push(it.next());
  files = files.slice(0, IMP2.FILES_COUNT);

  var stagedAll = [], meta = [], review = [], seenBatch = {};
  files.forEach(function (file, fi) {
    var name = file.getName(), lower = name.toLowerCase();
    if (/\.pdf$/.test(lower)) { meta.push([name, '—', '', 0, '', 0, 0, 0, 'PDF — convert first (see caption below)']); return; }
    if (/\.(xlsx|xls)$/.test(lower)) { meta.push([name, '—', '', 0, '', 0, 0, 0, 'Open in Sheets → File → Download → CSV']); return; }
    if (!/\.(csv|txt|tsv)$/.test(lower)) { meta.push([name, '—', '', 0, '', 0, 0, 0, 'skipped (not a CSV)']); return; }
    var text = file.getBlob().getDataAsString();
    var delim = (text.indexOf('\t') !== -1 && text.indexOf(',') === -1) ? '\t' : ',';
    var rows = text.split(/\r?\n/).filter(function (l) { return l.trim() !== ''; })
      .map(function (l) { return delim === ',' ? parseCsvLine_(l) : l.split('\t').map(function (s) { return s.trim(); }); });
    var recipe = detectRecipe_(rows.length ? rows[0].map(String) : [], name, imp);
    var norm = normalizeCsv_(rows, recipe);
    if (norm.rows === null) { meta.push([name, 'unknown format', '', 0, '', 0, 0, 0, 'teach a recipe below, then rescan']); return; }
    var account = acctMap[name] || guessAccount_(name, accounts);
    // card-sign sanity: >90% positive rows on an amount column is suspicious
    var pos = norm.rows.filter(function (r) { return r.amount > 0; }).length;
    var signFlag = (!norm.flip && norm.rows.length >= 10 && pos / norm.rows.length > 0.9) ? ' · check signs?' : '';
    var minD = null, maxD = null, nNew = 0, nDup = 0, nRev = 0;
    norm.rows.forEach(function (r) {
      if (!minD || r.date < minD) minD = r.date;
      if (!maxD || r.date > maxD) maxD = r.date;
      var st = 'PENDING';
      if (account) {
        var o = { date: r.date, desc: r.desc, amount: r.amount, account: account };
        var key = txKey_(account, r.date, r.desc, r.amount);
        if (ledger.keys[key] || seenBatch[key]) { st = 'DUP'; nDup++; }
        else {
          var near = ledger.rows.some(function (L) { return nearDupe_(o, L); });
          if (near) { st = 'REVIEW'; nRev++; review.push({ row: o, src: name }); }
          else { st = 'NEW'; nNew++; seenBatch[key] = true; }
        }
      }
      stagedAll.push([r.date, r.desc, r.amount, account, '', name, st, '']);
    });
    var tz = ss.getSpreadsheetTimeZone();
    var span = minD ? (Utilities.formatDate(minD, tz, 'yyyy-MM-dd') + ' → ' + Utilities.formatDate(maxD, tz, 'yyyy-MM-dd')) : '';
    var status = account ? ('ready' + signFlag) : ('assign an account →' + signFlag);
    meta.push([name, recipe ? recipe.id : 'generic', account, norm.rows.length, span, nNew, nDup, nRev, status]);
  });

  // write stage + preview
  if (stagedAll.length) stage.getRange(STAGE.ROWS_FIRST, 1, Math.min(stagedAll.length, STAGE.ROWS_CAP), 8).setValues(stagedAll.slice(0, STAGE.ROWS_CAP));
  if (meta.length) stage.getRange(STAGE.META_FIRST, STAGE.META_COL, meta.length, 9).setValues(meta);
  meta.forEach(function (m, i) {
    var row = IMP2.FILES_FIRST + i;
    imp.getRange(row, 1).setValue(m[0]);
    imp.getRange(row, 2).setValue(m[1]);
    imp.getRange(row, 3).setValue(m[2]);
    imp.getRange(row, 4).setValue(m[3]);
    imp.getRange(row, 5).setValue(m[4]);
    imp.getRange(row, 6).setValue(m[5]);
    imp.getRange(row, 7).setValue(m[6]);
    imp.getRange(row, 8).setValue(m[7]);
    imp.getRange(row, 9).setValue(m[8]);
  });
  writeReviewBlock_(imp, review);
  imp.getRange(IMP2.STATUS_ROW, 1).setValue('Inbox: "' + folder.getName() + '" · ' + files.length + ' file(s) scanned · ' +
    stagedAll.length + ' rows staged. Assign any missing accounts in the table below, then 💳 → Append Staged Imports.');
  dp.setProperty('cc_inbox_account_map', JSON.stringify(acctMap));
  imp.activate();
  ss.toast('Scanned ' + files.length + ' file(s) · ' + stagedAll.length + ' rows staged.', CC.BRAND, 6);
}

function writeReviewBlock_(imp, review) {
  imp.getRange(IMP2.REVIEW_FIRST, 1, IMP2.REVIEW_COUNT, 12).clearContent();
  var tz = SpreadsheetApp.getActive().getSpreadsheetTimeZone();
  review.slice(0, IMP2.REVIEW_COUNT).forEach(function (rv, i) {
    var row = IMP2.REVIEW_FIRST + i;
    imp.getRange(row, 1).insertCheckboxes();
    imp.getRange(row, 2).setValue(rv.row.date instanceof Date ? Utilities.formatDate(rv.row.date, tz, 'MMM dd, yyyy') : String(rv.row.date));
    imp.getRange(row, 3).setValue(rv.row.desc);
    imp.getRange(row, 4).setValue(rv.row.amount).setNumberFormat('$#,##0.00');
    imp.getRange(row, 5).setValue(rv.row.account);
    setCell_(imp, 'F' + row, { value: 'looks like an existing row (± 2 days) — tick KEEP if it is a real separate charge · from ' + rv.src, merge: 'L' + row, font: FONT.BODY, size: 9, italic: true, color: BRAND.CAPTION });
  });
}

// ── Append — land NEW rows in the ledger, archive the files ──────────
function appendStagedImports() {
  var ss = SpreadsheetApp.getActive();
  var imp = ss.getSheetByName(TABS.IMPORT), stage = ss.getSheetByName(TABS.STAGE), tx = ss.getSheetByName(TABS.TX);
  if (!imp || !stage || !tx) return;
  // fold the FILES-table account column back onto staged rows first
  var filesTbl = imp.getRange(IMP2.FILES_FIRST, 1, IMP2.FILES_COUNT, 3).getValues();
  var acctByFile = {};
  filesTbl.forEach(function (r) { if (r[0]) acctByFile[String(r[0])] = String(r[2] || '').trim(); });

  var staged = stage.getRange(STAGE.ROWS_FIRST, 1, STAGE.ROWS_CAP, 8).getValues()
    .filter(function (r) { return r[0] !== '' && r[0] != null; });
  if (!staged.length) { ss.toast('Nothing staged — run 💳 → Scan Bank Inbox first.', CC.BRAND, 5); return; }

  var ledger = readLedgerForDedupe_(tx);
  var rules = loadKeywordRules_(ss);
  var out = [], review = [], seen = {}, dup = 0, unassigned = 0;
  staged.forEach(function (r) {
    var date = r[0], desc = r[1], amount = r[2], account = acctByFile[String(r[5])] || r[3];
    if (!account) { unassigned++; return; }
    var key = txKey_(account, date, desc, amount);
    if (ledger.keys[key] || seen[key]) { dup++; return; }
    var o = { date: date, desc: desc, amount: amount, account: account };
    if (ledger.rows.some(function (L) { return nearDupe_(o, L); })) { review.push({ row: o, src: r[5] }); return; }
    seen[key] = true;
    var category = amount > 0 ? 'Income' : categorize_(desc, rules);
    out.push([date, desc, amount, category, account, '']);
  });

  if (out.length) {
    var firstEmpty = findFirstEmptyTxRow_(tx);
    tx.getRange(firstEmpty, 1, out.length, 6).setValues(out);
    // engine roll — same behavior as the legacy path
    var maxDate = null;
    out.forEach(function (r) { if (r[0] instanceof Date && (!maxDate || r[0] > maxDate)) maxDate = r[0]; });
    if (maxDate) {
      var lastCode = lastEngineMonthCode_(), maxCode = monthCodeOfDate_(maxDate);
      if (lastCode && maxCode > lastCode) rollEngineForward_(maxDate);
    }
    renumberLedger();
    sortTxByDateDesc_(tx);
  }
  writeReviewBlock_(imp, review);

  // archive every fully-processed file (all rows assigned) to Imported ✓
  var folder = ensureInboxFolder_(), done = inboxDoneFolder_(folder);
  var moved = 0, itf = folder.getFiles(), pending = {};
  staged.forEach(function (r) { if (!(acctByFile[String(r[5])] || r[3])) pending[String(r[5])] = true; });
  var toMove = [];
  while (itf.hasNext()) { var f = itf.next(); if (/\.(csv|txt|tsv)$/i.test(f.getName()) && !pending[f.getName()]) toMove.push(f); }
  toMove.forEach(function (f) { try { f.moveTo(done); moved++; } catch (e) {} });

  stage.getRange(STAGE.ROWS_FIRST, 1, STAGE.ROWS_CAP, 8).clearContent();
  refreshCoverage();
  var parts = ['Appended ' + out.length + ' row' + (out.length === 1 ? '' : 's')];
  if (dup) parts.push(dup + ' duplicate' + (dup === 1 ? '' : 's') + ' skipped');
  if (review.length) parts.push(review.length + ' need review (block below the files table)');
  if (unassigned) parts.push(unassigned + ' rows skipped — no account assigned (rescan after assigning)');
  if (moved) parts.push(moved + ' file(s) archived to "' + INBOX_DONE_NAME + '"');
  imp.getRange(IMP2.STATUS_ROW, 1).setValue(parts.join(' · ') + '.');
  ss.toast(parts.join(' · '), CC.BRAND, (dup || review.length || unassigned) ? 10 : 6);
}

// ── Resolve — act on the review checkboxes ────────────────────────────
function resolveReviewedRows() {
  var ss = SpreadsheetApp.getActive();
  var imp = ss.getSheetByName(TABS.IMPORT), tx = ss.getSheetByName(TABS.TX);
  if (!imp || !tx) return;
  var block = imp.getRange(IMP2.REVIEW_FIRST, 1, IMP2.REVIEW_COUNT, 5).getValues();
  var rules = loadKeywordRules_(ss), out = [];
  for (var i = 0; i < block.length; i++) {
    var r = block[i];
    if (r[1] === '' || r[1] == null) continue;
    if (r[0] === true) {                     // KEEP → append
      var date = (r[1] instanceof Date) ? r[1] : parseDate_(r[1]);
      var amount = Number(r[3]);
      var category = amount > 0 ? 'Income' : categorize_(String(r[2]), rules);
      out.push([date, String(r[2]), amount, category, String(r[4]), '']);
    }
  }
  if (out.length) {
    tx.getRange(findFirstEmptyTxRow_(tx), 1, out.length, 6).setValues(out);
    renumberLedger();
    sortTxByDateDesc_(tx);
  }
  imp.getRange(IMP2.REVIEW_FIRST, 1, IMP2.REVIEW_COUNT, 12).clearContent();
  refreshCoverage();
  ss.toast('Kept ' + out.length + ' reviewed row' + (out.length === 1 ? '' : 's') + '; the rest were skipped.', CC.BRAND, 5);
}

// ── Coverage — paint the per-account month strips ─────────────────────
// Reads the live helper grid on _ImportStage (SUMIFS counts). stone =
// months with rows · garnet = a gap between the account's first and last
// months · gold = reconciled ✓. Fixed colors — never themed.
var COV_FILL = '#D8D0BE', COV_GAP = '#B96A6B', COV_OK = '#C5A95A', COV_EMPTY = '#F3EFE4';
// pure: one account's coverage strip colors from its month counts + the
// trailing-6 reconcile booleans. gap = empty month INSIDE the imported span.
function computeCoverageRow_(counts, recon) {
  var bg = [], first = -1, last = -1;
  for (var m = 0; m < IMP2.MON_COUNT; m++) {
    if (Number(counts[m]) > 0) { if (first === -1) first = m; last = m; }
  }
  for (var m2 = 0; m2 < IMP2.MON_COUNT; m2++) {
    var has = Number(counts[m2]) > 0;
    var inSpan = first !== -1 && m2 >= first && m2 <= last;
    var recIdx = m2 - (IMP2.MON_COUNT - IMP2.REC_MONTHS);
    var ok = recIdx >= 0 && recon && recon[recIdx] === true;
    bg.push(ok && has ? COV_OK : (has ? COV_FILL : (inSpan ? COV_GAP : COV_EMPTY)));
  }
  return bg;
}
function refreshCoverage() {
  var ss = SpreadsheetApp.getActive();
  var imp = ss.getSheetByName(TABS.IMPORT), stage = ss.getSheetByName(TABS.STAGE);
  if (!imp || !stage) return;
  SpreadsheetApp.flush();   // helper SUMIFS must see the just-appended rows
  var counts = stage.getRange(STAGE.HELP_FIRST, 2, IMP2.COV_COUNT, IMP2.MON_COUNT).getValues();       // B.. counts
  var recon = stage.getRange(STAGE.HELP_FIRST + 20, 2, IMP2.COV_COUNT, IMP2.REC_MONTHS).getValues();  // reconcile ✓ booleans (trailing 6)
  for (var a = 0; a < IMP2.COV_COUNT; a++) {
    var bg = computeCoverageRow_(counts[a], recon[a]);
    imp.getRange(IMP2.COV_FIRST + a, IMP2.MON_FIRST, 1, IMP2.MON_COUNT).setBackgrounds([bg]);
  }
  ss.toast('Coverage refreshed.', CC.BRAND, 3);
}

// ── Sample inbox (QA) — three fixture files exercising the whole flow ──
function createSampleInbox() {
  var folder = ensureInboxFolder_();
  var t = new Date(), y = t.getFullYear(), mo = t.getMonth();
  var d = function (mAgo, day) {
    var dt = new Date(y, mo - mAgo, day);
    return (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear();
  };
  // checking: 3 months, overlaps itself month-to-month in file 2
  var chk1 = ['Posting Date,Description,Amount',
    d(2, 3) + ',DIRECT DEPOSIT - ACME CO,2450.00',
    d(2, 6) + ',WHOLE FOODS MARKET #347,-84.12',
    d(2, 14) + ',SHELL OIL 575421,-41.77',
    d(1, 3) + ',DIRECT DEPOSIT - ACME CO,2450.00',
    d(1, 9) + ',NETFLIX.COM,-15.49'].join('\n');
  var chk2 = ['Posting Date,Description,Amount',
    d(1, 3) + ',DIRECT DEPOSIT - ACME CO,2450.00',      // exact dup vs file 1
    d(1, 9) + ',NETFLIX.COM,-15.49',                     // exact dup vs file 1
    d(1, 10) + ',NETFLIX COM,-15.49',                    // NEAR dup (±1 day, similar desc)
    d(0, 3) + ',DIRECT DEPOSIT - ACME CO,2450.00',
    d(0, 5) + ',TRADER JOES #55,-63.90'].join('\n');
  // card: charges exported POSITIVE (sign-flip exercise; matches amex recipe)
  var card = ['Date,Description,Amount',
    d(1, 7) + ',STARBUCKS STORE 112,6.45',
    d(1, 12) + ',AMAZON MKTPL,42.13',
    d(0, 2) + ',SPOTIFY,11.99'].join('\n');
  folder.createFile('Sample Checking Jan-Feb.csv', chk1);
  folder.createFile('Sample Checking Feb-Mar.csv', chk2);
  folder.createFile('Sample Amex Card.csv', card);
  SpreadsheetApp.getActive().toast('3 sample files dropped in "' + INBOX_FOLDER_NAME + '" — run 💳 → Scan Bank Inbox. Assign them to any two accounts to try the flow.', CC.BRAND, 10);
}

// ── _ImportStage — hidden staging + the live SUMIFS helper grid ───────
function buildImportStage_(sheet, mode) {
  ensureGrid_(sheet, STAGE.HELP_FIRST + 40, 20);
  sheet.getRange(1, 1, 1, 8).setValues([['date', 'desc', 'amount', 'account', 'category', 'source file', 'status', 'pair']])
    .setFontWeight('bold').setFontSize(9);
  sheet.getRange(1, STAGE.META_COL, 1, 9).setValues([['file', 'recipe', 'account', 'rows', 'span', 'new', 'dup', 'review', 'status']])
    .setFontWeight('bold').setFontSize(9);

  // Helper grid: rows HELP_FIRST.. one per account slot. Col A account ref;
  // cols B..M = row counts per trailing-12 month (oldest→newest, live off
  // TODAY()); cols O..T reserved; the reconcile boolean grid sits 20 rows
  // below (one row per account, cols B..G = trailing 6 months ✓).
  var TX = "'" + TABS.TX + "'", IMPT = "'" + TABS.IMPORT + "'", ACC = "'" + TABS.ACCOUNTS + "'";
  sheet.getRange(STAGE.HELP_FIRST - 1, 1).setValue('coverage counts (live)').setFontSize(9).setFontWeight('bold');
  sheet.getRange(STAGE.HELP_FIRST + 19, 1).setValue('reconcile match (live)').setFontSize(9).setFontWeight('bold');
  for (var a = 0; a < IMP2.COV_COUNT; a++) {
    var hr = STAGE.HELP_FIRST + a, accRef = ACC + '!$A$' + (10 + a);
    sheet.getRange(hr, 1).setFormula('=IF(' + accRef + '="","",' + accRef + ')');
    var cf = [];
    for (var m = 0; m < IMP2.MON_COUNT; m++) {
      var off = IMP2.MON_COUNT - 1 - m;   // oldest first
      cf.push('=IF($A' + hr + '="","",COUNTIFS(' + TX + '!$E:$E,$A' + hr + ',' + TX + '!$G:$G,TEXT(EDATE(TODAY(),-' + off + '),"yyyy-mm")))');
    }
    sheet.getRange(hr, 2, 1, IMP2.MON_COUNT).setFormulas([cf]);
    // reconcile: expected end = starting bal + all rows through month m;
    // matches the typed ending balance on the Bank Import grid (±$0.01)
    var rr = STAGE.HELP_FIRST + 20 + a, startRef = ACC + '!$D$' + (10 + a);
    var rf = [];
    for (var k = 0; k < IMP2.REC_MONTHS; k++) {
      var offR = IMP2.REC_MONTHS - 1 - k;
      var typed = IMPT + '!' + columnToLetter_(2 + k) + (IMP2.REC_FIRST + a);
      var cum = 'SUMPRODUCT((' + TX + '!$E$10:$E$5009=$A' + hr + ')*(' + TX + '!$G$10:$G$5009<>"")*(' + TX + '!$G$10:$G$5009<=TEXT(EDATE(TODAY(),-' + offR + '),"yyyy-mm"))*(' + TX + '!$C$10:$C$5009))';
      rf.push('=IF(OR($A' + hr + '="",' + typed + '=""),FALSE,ABS(' + startRef + '+' + cum + '-' + typed + ')<=0.01)');
    }
    sheet.getRange(rr, 1).setFormula('=IF($A' + hr + '="","",$A' + hr + ')');
    sheet.getRange(rr, 2, 1, IMP2.REC_MONTHS).setFormulas([rf]);
  }
}

// ── The Bank Import tab, v2 layout ────────────────────────────────────
function buildBankImport_(sheet, mode) {
  ensureGrid_(sheet, IMP2.GRID_ROWS, IMP2.LAST_COL);
  chrome_(sheet, TABS.IMPORT, IMP2.LAST_LETTER, 'DROP · SCAN · APPEND · PROVE', 13);
  titleRow_(sheet, IMP2.LAST_LETTER, 'Bank Import',
    'Drop every bank export into one Drive folder — any bank, any order, overlapping months welcome. One scan, one append; the coverage map and statement check prove nothing is missing or doubled.');

  // step pills (row 9): the new flow in five moves
  var steps = [
    ['1', 'Drop files in your Inbox', 1, 3], ['2', 'Scan', 4, 5],
    ['3', 'Assign accounts', 6, 8], ['4', 'Append', 9, 10], ['5', 'Reconcile ↓', 11, 12]
  ];
  steps.forEach(function (s) {
    setCell_(sheet, columnToLetter_(s[2]) + IMP2.PILL_ROW, { value: s[0], font: FONT.DISPLAY, size: 14, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'center', v: 'middle' });
    themable_(sheet.getName(), 'primary', columnToLetter_(s[2]) + IMP2.PILL_ROW);
    setCell_(sheet, columnToLetter_(s[2] + 1) + IMP2.PILL_ROW, { value: s[1], merge: columnToLetter_(s[3]) + IMP2.PILL_ROW, font: FONT.BODY, size: 10, bold: true, color: BRAND.FOREST, v: 'middle' });
  });
  sheet.setRowHeight(IMP2.PILL_ROW, 40);

  // status lines
  setCell_(sheet, 'A' + IMP2.STATUS_ROW, { value: (mode === 'mock' ? 'Try it: 💳 → Setup → Create Sample Inbox, then 💳 → Scan Bank Inbox.' : 'First run: 💳 → Scan Bank Inbox creates your Drive folder. Drop your bank exports there.'), merge: 'L' + IMP2.STATUS_ROW, font: FONT.BODY, size: 11, color: BRAND.BODY });
  setCell_(sheet, 'A' + (IMP2.STATUS_ROW + 1), { value: 'Your files never leave your own Google account — the sheet reads your Drive folder directly.', merge: 'L' + (IMP2.STATUS_ROW + 1), font: FONT.BODY, size: 9, italic: true, color: BRAND.CAPTION });

  // FILES table
  sectionLabel_(sheet, 'A' + IMP2.FILES_LABEL, IMP2.LAST_LETTER + IMP2.FILES_LABEL, 'FILES · WHAT THE LAST SCAN FOUND');
  var fh = ['File', 'Format', 'Account (assign!)', 'Rows', 'Date span', 'New', 'Dup', 'Review', 'Status'];
  fh.forEach(function (h, i) {
    var col = i + 1;
    setCell_(sheet, columnToLetter_(col) + IMP2.FILES_HEADER, { value: h, merge: (col === 9 ? 'L' + IMP2.FILES_HEADER : null), font: FONT.BODY, size: 10, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: (col >= 4 && col <= 8) ? 'right' : 'left' });
  });
  themable_(sheet.getName(), 'primary', 'A' + IMP2.FILES_HEADER + ':L' + IMP2.FILES_HEADER);
  var acctRule = SpreadsheetApp.newDataValidation().requireValueInRange(sheet.getRange("'" + TABS.ACCOUNTS + "'!A10:A21"), true).setAllowInvalid(false).build();
  sheet.getRange(IMP2.FILES_FIRST, 3, IMP2.FILES_COUNT, 1).setDataValidation(acctRule).setBackground(BRAND.YELLOW);
  sheet.getRange(IMP2.FILES_FIRST, 4, IMP2.FILES_COUNT, 5).setHorizontalAlignment('right');

  // REVIEW block
  sectionLabel_(sheet, 'A' + IMP2.REVIEW_LABEL, IMP2.LAST_LETTER + IMP2.REVIEW_LABEL, 'REVIEW · POSSIBLE DUPLICATES — TICK KEEP FOR REAL CHARGES, THEN 💳 → RESOLVE REVIEWED ROWS');
  var rh = ['Keep?', 'Date', 'Description', 'Amount', 'Account'];
  rh.forEach(function (h, i) {
    setCell_(sheet, columnToLetter_(i + 1) + IMP2.REVIEW_HEADER, { value: h, font: FONT.BODY, size: 10, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: i === 3 ? 'right' : 'left' });
  });
  themable_(sheet.getName(), 'primary', 'A' + IMP2.REVIEW_HEADER + ':L' + IMP2.REVIEW_HEADER);

  // COVERAGE map
  sectionLabel_(sheet, 'A' + IMP2.COV_LABEL, IMP2.LAST_LETTER + IMP2.COV_LABEL, 'COVERAGE · WHICH MONTHS ARE IN — DARK = IMPORTED · RED = GAP · GOLD = RECONCILED ✓');
  for (var m = 0; m < IMP2.MON_COUNT; m++) {
    var off = IMP2.MON_COUNT - 1 - m;
    sheet.getRange(IMP2.COV_MONTHS_ROW, IMP2.MON_FIRST + m)
      .setFormula('=TEXT(EDATE(TODAY(),-' + off + '),"MMM")')
      .setFontSize(8).setFontColor(BRAND.CAPTION).setHorizontalAlignment('center');
  }
  var SG = "'" + TABS.STAGE + "'";
  for (var a = 0; a < IMP2.COV_COUNT; a++) {
    var row = IMP2.COV_FIRST + a, hr = STAGE.HELP_FIRST + a;
    setCell_(sheet, 'A' + row, { formula: "=IF('" + TABS.ACCOUNTS + "'!$A$" + (10 + a) + '="","",\'' + TABS.ACCOUNTS + "'!$A$" + (10 + a) + ')', merge: 'C' + row, font: FONT.BODY, size: 10, color: BRAND.FOREST });
    setCell_(sheet, 'D' + row, { formula: '=IF($A' + row + '="","",IF(SUM(' + SG + '!$B$' + hr + ':$M$' + hr + ')=0,"nothing imported yet",SUM(' + SG + '!$B$' + hr + ':$M$' + hr + ')&" rows in the last 12 months"))', merge: 'L' + row, font: FONT.BODY, size: 9, italic: true, color: BRAND.CAPTION });
    sheet.setRowHeight(row, 18);
  }

  // RECONCILE grid
  sectionLabel_(sheet, 'A' + IMP2.REC_LABEL, IMP2.LAST_LETTER + IMP2.REC_LABEL, 'PROVE IT · TYPE EACH STATEMENT\'S ENDING BALANCE — THE SHEET CHECKS THE MATH');
  setCell_(sheet, 'A' + IMP2.REC_HEADER, { value: 'Account', font: FONT.BODY, size: 10, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST });
  for (var k = 0; k < IMP2.REC_MONTHS; k++) {
    var offR = IMP2.REC_MONTHS - 1 - k;
    sheet.getRange(IMP2.REC_HEADER, 2 + k).setFormula('=TEXT(EDATE(TODAY(),-' + offR + '),"MMM YYYY")')
      .setFontWeight('bold').setFontSize(10).setFontColor(BRAND.PARCHMENT).setBackground(BRAND.FOREST).setHorizontalAlignment('right');
  }
  setCell_(sheet, 'H' + IMP2.REC_HEADER, { value: 'Result', merge: 'L' + IMP2.REC_HEADER, font: FONT.BODY, size: 10, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST });
  themable_(sheet.getName(), 'primary', 'A' + IMP2.REC_HEADER + ':L' + IMP2.REC_HEADER);
  for (var a2 = 0; a2 < IMP2.REC_COUNT; a2++) {
    var row2 = IMP2.REC_FIRST + a2, rr = STAGE.HELP_FIRST + 20 + a2;
    setCell_(sheet, 'A' + row2, { formula: "=IF('" + TABS.ACCOUNTS + "'!$A$" + (10 + a2) + '="","",\'' + TABS.ACCOUNTS + "'!$A$" + (10 + a2) + ')', font: FONT.BODY, size: 10, color: BRAND.FOREST });
    sheet.getRange(row2, 2, 1, IMP2.REC_MONTHS).setBackground(BRAND.YELLOW).setNumberFormat('$#,##0.00')
      .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
    var parts = [];
    for (var k2 = 0; k2 < IMP2.REC_MONTHS; k2++) {
      var typed2 = columnToLetter_(2 + k2) + row2;
      parts.push('IF(' + typed2 + '="","",IF(' + SG + '!' + columnToLetter_(2 + k2) + rr + '=TRUE," ✓","(✗ "&TEXT(EDATE(TODAY(),-' + (IMP2.REC_MONTHS - 1 - k2) + '),"MMM")&")"))');
    }
    setCell_(sheet, 'H' + row2, { formula: '=IF($A' + row2 + '="","",IF(COUNTA(B' + row2 + ':G' + row2 + ')=0,"type a balance to check",CONCATENATE(' + parts.join(',') + ')))', merge: 'L' + row2, font: FONT.BODY, size: 10, color: BRAND.BODY });
    sheet.setRowHeight(row2, 20);
  }
  setCell_(sheet, 'A' + (IMP2.REC_FIRST + IMP2.REC_COUNT), { value: 'Starting Balance on the Accounts tab = the balance BEFORE your earliest imported month. ✓ means starting balance + every imported row = the statement, to the cent.', merge: 'L' + (IMP2.REC_FIRST + IMP2.REC_COUNT), font: FONT.BODY, size: 9, italic: true, color: BRAND.CAPTION, wrap: true });

  // RECIPES teach-me table
  sectionLabel_(sheet, 'A' + IMP2.RECIPE_LABEL, IMP2.LAST_LETTER + IMP2.RECIPE_LABEL, 'TEACH A FORMAT · ONLY IF A FILE SAYS "UNKNOWN FORMAT" — ONE ROW TEACHES IT FOREVER');
  var ph = ['Bank name', 'Header contains…', 'Date col', 'Desc col', 'Amount col', 'Debit col', 'Credit col', 'Flip?'];
  ph.forEach(function (h, i) {
    setCell_(sheet, columnToLetter_(i + 1) + IMP2.RECIPE_HEADER, { value: h, font: FONT.BODY, size: 9, bold: true, color: BRAND.PARCHMENT, bg: BRAND.CANOPY });
  });
  sheet.getRange(IMP2.RECIPE_FIRST, 1, IMP2.RECIPE_COUNT, 8).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID).setFontSize(10);
  var flipRule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], true).build();
  sheet.getRange(IMP2.RECIPE_FIRST, 8, IMP2.RECIPE_COUNT, 1).setDataValidation(flipRule);

  // legacy paste flow (fallback)
  sectionLabel_(sheet, 'A' + IMP2.PASTE_LABEL, IMP2.LAST_LETTER + IMP2.PASTE_LABEL, 'FALLBACK · PASTE ONE EXPORT BY HAND (THE OLD WAY STILL WORKS)');
  setCell_(sheet, 'A' + IMP2.PASTE_ACCOUNT_ROW, { value: 'Account for pasted rows →', font: FONT.BODY, size: 10, color: BRAND.BODY });
  setCell_(sheet, IMPORT_ACCOUNT_CELL, { merge: 'E' + IMP2.PASTE_ACCOUNT_ROW, bg: BRAND.YELLOW })
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID)
    .setDataValidation(acctRule);
  if (mode === 'mock') sheet.getRange(IMPORT_ACCOUNT_CELL).setValue('Chase Joint Checking');
  var zone = sheet.getRange(IMPORT_PASTE_FIRST_ROW, 1, IMPORT_PASTE_ROW_COUNT, IMPORT_PASTE_COL_COUNT);
  zone.setBackground(BRAND.GREEN_ZONE).setFontFamily('Roboto Mono').setFontSize(10).setWrap(false)
    .setBorder(true, true, true, true, false, false, BRAND.HAIRLINE, SpreadsheetApp.BorderStyle.SOLID);

  // Review Income (kept, relocated)
  sectionLabel_(sheet, 'A' + REVIEW_INCOME_SECTION_ROW, IMP2.LAST_LETTER + REVIEW_INCOME_SECTION_ROW, 'REVIEW INCOME · CONFIRM POSITIVE-AMOUNT ROWS');
  sheet.getRange(REVIEW_INCOME_HEADER_ROW, 1, 1, 5).setValues([['Date', 'Description', 'Amount', 'Income?', 'Notes']])
    .setFontWeight('bold').setFontColor(BRAND.PARCHMENT).setBackground(BRAND.FOREST).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', 'A' + REVIEW_INCOME_HEADER_ROW + ':E' + REVIEW_INCOME_HEADER_ROW);
  var yesNo = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], true).build();
  sheet.getRange(REVIEW_INCOME_FIRST_ROW, 4, REVIEW_INCOME_ROW_COUNT, 1).setDataValidation(yesNo);

  // Uncategorized Merchants (kept, relocated; onEdit is anchored to UNCAT_*)
  sectionLabel_(sheet, 'A' + UNCAT_SECTION_ROW, IMP2.LAST_LETTER + UNCAT_SECTION_ROW, 'UNCATEGORIZED MERCHANTS · PICK A CATEGORY TO ADD A RULE');
  sheet.getRange(UNCAT_HEADER_ROW, 1, 1, 6).setValues([['Sample Description', 'Hits', 'Sample Amount', 'Keyword', 'Category', 'Status']])
    .setFontWeight('bold').setFontColor(BRAND.PARCHMENT).setBackground(BRAND.FOREST).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', 'A' + UNCAT_HEADER_ROW + ':F' + UNCAT_HEADER_ROW);
  sheet.getRange(UNCAT_FIRST_ROW, 3, UNCAT_ROW_COUNT, 1).setNumberFormat('$#,##0.00;[red]-$#,##0.00').setFontFamily('Roboto Mono');
  sheet.getRange(UNCAT_FIRST_ROW, 4, UNCAT_ROW_COUNT, 1).setBackground(BRAND.YELLOW).setFontFamily('Roboto Mono');
  var catRange = sheet.getRange("'" + TABS.CATEGORIES + "'!A11:A37");
  var catRule = SpreadsheetApp.newDataValidation().requireValueInRange(catRange, true).setAllowInvalid(false).build();
  sheet.getRange(UNCAT_FIRST_ROW, 5, UNCAT_ROW_COUNT, 1).setBackground(BRAND.YELLOW).setDataValidation(catRule);

  setCell_(sheet, 'A' + IMP2.CAPTION_ROW, {
    value: 'PDF-only bank? Ask your AI to convert the statement to CSV with columns Date, Description, Amount (expenses negative) and tell it the statement\'s printed total — then drop the CSV in the Inbox; the reconcile row proves the conversion. Duplicates are matched per account, so the same charge on two cards is kept — as it should be.',
    merge: IMP2.LAST_LETTER + IMP2.CAPTION_ROW, font: FONT.BODY, size: 10, italic: true, color: BRAND.CAPTION, wrap: true });
  sheet.setRowHeight(IMP2.CAPTION_ROW, 44);
  footer_(sheet, IMP2.FOOTER_ROW, IMP2.LAST_LETTER);

  // widths: text zone + gutter + 12 month cells + margin
  setColWidths_(sheet, [168, 96, 130, 120, 110, 56, 56, 62, 96, 60, 60, 60, 14, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 12]);
  SpreadsheetApp.flush();
  try { sheet.setFrozenRows(IMP2.PILL_ROW); } catch (e) {}
}
/**
 * Column & Co. — The Foundation v2.1
 * 10 · Menu + triggers (onOpen / onEdit / onSelectionChange).
 */

function onOpen() {
  buildMenu_();
  hideSystemTabs_();
  // Quiet auto-roll: if the calendar has moved past the engine's last
  // column, shift the rolling 24-month window forward to today. No-op
  // when already anchored. Wrapped — onOpen must never throw.
  try {
    var lastCode = lastEngineMonthCode_();
    var todayCode = monthCodeOfDate_(new Date());
    if (lastCode && todayCode > lastCode) rollEngineForward_(new Date());
  } catch (e) {}
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
  menu.addItem('Scan Bank Inbox', 'scanBankInbox');
  menu.addItem('Append Staged Imports', 'appendStagedImports');
  menu.addItem('Resolve Reviewed Rows', 'resolveReviewedRows');
  menu.addItem('Refresh Coverage', 'refreshCoverage');
  menu.addItem('Where Is My Inbox?', 'whereIsMyInbox');
  menu.addSeparator();
  menu.addItem('Paste-Zone Import (fallback)', 'importTransactions');
  menu.addItem('Clear Paste Zone', 'clearPasteZone');
  menu.addItem('Recategorize Ledger from Rules', 'recategorizeAll');
  menu.addItem('Sort Transactions by Date', 'sortTransactions');
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
    .addItem('Build workbook (blank)', 'buildBlankWorkbook')
    .addItem('Create Sample Inbox (import demo)', 'createSampleInbox'));
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
function _applyTheme_midnight()      { applyTheme('midnight'); }
function _applyTheme_burgundy()      { applyTheme('burgundy'); }
function _applyTheme_mocha()         { applyTheme('mocha'); }
function _applyTheme_indigo_blush()  { applyTheme('indigo-blush'); }
function _applyTheme_pine_brass()    { applyTheme('pine-brass'); }
function _applyTheme_ocean_coral()   { applyTheme('ocean-coral'); }
function _applyTheme_charcoal_mint() { applyTheme('charcoal-mint'); }
function _applyTheme_olive_cream()   { applyTheme('olive-cream'); }
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

// Wipe every saved cc_overrides_<profileId> doc property. Called at the
// start of buildWorkbook so a fresh build doesn't repopulate D from
// overrides typed in a prior session.
function clearAllSavedOverrides_() {
  var props = PropertiesService.getDocumentProperties();
  var all = props.getProperties();
  Object.keys(all).forEach(function (k) {
    if (k.indexOf('cc_overrides_') === 0) props.deleteProperty(k);
  });
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
  if (!account) { ss.toast('Pick an account in ' + IMPORT_ACCOUNT_CELL + ' (next to the paste zone) first.', CC.BRAND, 4); return; }

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
  var firstCell = imp.getRange(IMPORT_PASTE_FIRST_ROW, 1).getValue();
  var rowsAsArrays;
  if (typeof firstCell === 'string' && firstCell.indexOf('\n') !== -1) {
    // Legacy text paste: A12 contains the whole CSV as one string.
    var lines = String(firstCell).split(/\r?\n/).filter(function (l) { return l.trim() !== ''; });
    rowsAsArrays = lines.map(parseCsvLine_);
  } else {
    var raw = imp.getRange(IMPORT_PASTE_FIRST_ROW, 1, IMPORT_PASTE_ROW_COUNT, IMPORT_PASTE_COL_COUNT).getValues();
    // Dump the raw cell types + values for the first 6 rows so we can see
    // exactly what Sheets handed us when a buyer reports silent drops.
    // (Apps Script → Executions → expand the latest run → Logger output.)
    for (var dbgR = 0; dbgR < Math.min(6, raw.length); dbgR++) {
      Logger.log('grid row ' + dbgR + ': ' + raw[dbgR].map(function (c) {
        var t = (c instanceof Date) ? 'Date' : typeof c;
        return t + '=' + JSON.stringify(c);
      }).join(' | '));
    }
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
  Logger.log('header=' + JSON.stringify(header) + ' cols=' + JSON.stringify(cols));
  if (cols.amount < 0 || cols.date < 0) {
    ss.toast('Could not detect Date/Amount columns. Supported headers: Date, Description/Memo/Payee, Amount (or Debit/Credit pair).', CC.BRAND, 6);
    return;
  }

  // Build existing-row dedup index from the live ledger.
  var tz = ss.getSpreadsheetTimeZone();
  // v2: the key includes the ACCOUNT (txKey_) — v1 silently dropped the
  // same charge appearing on two different cards.
  var dedupKey = function (d, desc, amt) { return txKey_(account, d, desc, amt); };
  var seen = {};
  var existing = readExistingTx_(tx);
  for (var e = 0; e < existing.length; e++) {
    seen[txKey_(existing[e][4], existing[e][0], existing[e][1], existing[e][2])] = true;
  }

  // Drop-bucket counters: every data row lands in exactly one bucket so the
  // toast can report the cause when something silently vanishes.
  var rules = loadKeywordRules_(ss);
  var out = [], income = [], miscDescs = [];
  var counts = { imported: 0, dup: 0, amountNull: 0, dateBad: 0, rowShort: 0 };
  for (var i = 1; i < rowsAsArrays.length; i++) {
    var f = rowsAsArrays[i];
    if (!f || f.length < 2) { counts.rowShort++; Logger.log('row ' + i + ': SHORT len=' + (f ? f.length : 'null')); continue; }
    var date = parseDate_(f[cols.date]);
    var desc = String(f[cols.desc] != null ? f[cols.desc] : '').trim();
    var amount = parseAmount_(f, cols);
    if (amount === null) {
      counts.amountNull++;
      Logger.log('row ' + i + ': AMOUNT_NULL date=' + JSON.stringify(f[cols.date]) +
        ' desc=' + JSON.stringify(desc.slice(0, 40)) +
        ' raw_amt=' + JSON.stringify(f[cols.amount]) +
        ' (type=' + (f[cols.amount] instanceof Date ? 'Date' : typeof f[cols.amount]) + ')');
      continue;
    }
    if (!(date instanceof Date)) {
      // parseDate_ returned the raw string — Sheets/JS couldn't parse it. Log
      // but don't drop; the Transactions Month formula will likely also fail,
      // which the buyer will notice and can fix manually.
      counts.dateBad++;
      Logger.log('row ' + i + ': DATE_BAD raw=' + JSON.stringify(f[cols.date]));
    }
    var key = dedupKey(date, desc, amount);
    if (seen[key]) {
      counts.dup++;
      Logger.log('row ' + i + ': DUP key=' + key);
      continue;
    }
    seen[key] = true;
    var category;
    if (amount > 0) {
      category = 'Income';
    } else {
      category = categorize_(desc, rules);
      if (category === 'Misc') { miscDescs.push({ desc: desc, amount: amount }); }
    }
    out.push([date, desc, amount, category, account, '']);
    if (amount > 0) income.push([date, desc, amount]);
    counts.imported++;
    Logger.log('row ' + i + ': OK ' + (amount > 0 ? 'INCOME' : 'EXPENSE') +
      ' date=' + (date instanceof Date ? Utilities.formatDate(date, tz, 'yyyy-MM-dd') : 'STR') +
      ' amt=' + amount + ' cat=' + category);
  }
  Logger.log('counts=' + JSON.stringify(counts));
  // Only short-circuit when the loop saw nothing at all — if we have drops to
  // report (dup, amount null, bad date), fall through so the toast surfaces them.
  if (!out.length && !counts.dup && !counts.amountNull && !counts.dateBad) {
    ss.toast('No valid rows parsed.', CC.BRAND, 6);
    return;
  }
  var misc = miscDescs.length;

  // If any imported row's calendar month is past the engine's last column,
  // roll the rolling 24-month window forward so the new month aggregates
  // and shows up as a Dashboard pill. Anchored on the latest imported date.
  var rolledTo = '';
  if (out.length) {
    var maxDate = null;
    for (var od = 0; od < out.length; od++) {
      var d = out[od][0];
      if (d instanceof Date && (!maxDate || d > maxDate)) maxDate = d;
    }
    if (maxDate) {
      var lastCode = lastEngineMonthCode_();
      var maxCode = monthCodeOfDate_(maxDate);
      if (lastCode && maxCode > lastCode) {
        if (rollEngineForward_(maxDate)) rolledTo = maxCode;
      }
    }
  }

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
  sortTxByDateDesc_(tx);  // newest first so the just-imported rows surface at the top

  // Jump cursor to whichever review queue still needs the buyer. Without
  // this, Review Income (row 64) and Uncategorized (row 87) live below the
  // paste zone and are easy to miss.
  imp.activate();
  if (income.length > 0) {
    imp.setActiveRange(imp.getRange(REVIEW_INCOME_HEADER_ROW, 1));
  } else if (miscDescs.length > 0) {
    imp.setActiveRange(imp.getRange(UNCAT_SECTION_ROW, 1));
  }

  var parts = ['Imported ' + counts.imported];
  if (counts.dup) parts.push(counts.dup + ' duplicate' + (counts.dup === 1 ? '' : 's') + ' skipped');
  if (counts.amountNull) parts.push(counts.amountNull + ' dropped (no amount) — check Apps Script log');
  if (counts.dateBad) parts.push(counts.dateBad + ' bad date — kept but tagged');
  if (misc) parts.push(misc + ' fell to Misc');
  if (income.length) parts.push(income.length + ' income row' + (income.length === 1 ? '' : 's') + ' for review');
  if (income.length > REVIEW_INCOME_ROW_COUNT) {
    parts.push('(' + (income.length - REVIEW_INCOME_ROW_COUNT) + ' beyond the review block)');
  }
  if (rolledTo) parts.push('engine rolled to ' + rolledTo);
  // Pin longer when something needs the buyer's attention; the previous 6s
  // was the reason the diagnostic toast in this bug went unread.
  var pinFor = (counts.dup || counts.amountNull || counts.dateBad || rolledTo) ? 12 : 8;
  ss.toast(parts.join(' · '), CC.BRAND, pinFor);
}

function readExistingTx_(tx) {
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  var headerRow = 9;
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) return [];
  // cols A..E so the dedupe key can be ACCOUNT-scoped (the same charge on
  // two different cards is two real rows, not a duplicate)
  return tx.getRange(headerRow + 1, 1, lastRow - headerRow, 5).getValues()
    .filter(function (r) { return r[0] !== '' && r[0] !== null; });
}

function clearPasteZone() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.alert('Clear Paste Zone', 'Empty the paste zone?', ui.ButtonSet.YES_NO);
  if (resp !== ui.Button.YES) return;
  var imp = SpreadsheetApp.getActive().getSheetByName(TABS.IMPORT);
  var zone = imp.getRange(IMPORT_PASTE_FIRST_ROW, 1, IMPORT_PASTE_ROW_COUNT, IMPORT_PASTE_COL_COUNT);
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

// Sort the ledger by Date descending (newest first). Cols 1-6 only — col 7
// is the Month helper formula (row-relative), which recomputes after sort.
// Returns the row count sorted; 0 if the ledger is empty.
function sortTxByDateDesc_(tx) {
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  var headerRow = 9;
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var firstEmpty = findFirstEmptyTxRow_(tx);
  var n = firstEmpty - 1 - headerRow;
  if (n <= 0) return 0;
  tx.getRange(headerRow + 1, 1, n, 6).sort({ column: 1, ascending: false });
  return n;
}

function sortTransactions() {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  if (!tx) return;
  var n = sortTxByDateDesc_(tx);
  ss.toast(n ? ('Sorted ' + n + ' transaction' + (n === 1 ? '' : 's') + ' by date (newest first).') : 'Ledger is empty.', CC.BRAND, 3);
}

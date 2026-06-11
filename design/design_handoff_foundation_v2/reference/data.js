/* =====================================================================
   COLUMN & CO. — THE FOUNDATION v2 · MOCK DATA
   Fictional couple Marcus & Elena Brooks · May 2026 view
   Source: COLUMN_CO_PROJECT__1_.md · _Engine + Trends + Categories tabs
   ===================================================================== */

window.CC_DATA = {
  buyer: { name: 'Marcus & Elena Brooks', month: 'May 2026' },

  // 6 months (Dec 2025 – May 2026) of income / expense / savings
  months: [
    { label: 'Dec 2025', short: 'Dec', income: 10120, expenses: 6094, net: 4026, savings_rate: 39.8 },
    { label: 'Jan 2026', short: 'Jan', income: 10180, expenses: 6420, net: 3760, savings_rate: 36.9 },
    { label: 'Feb 2026', short: 'Feb', income: 10200, expenses: 6612, net: 3588, savings_rate: 35.2 },
    { label: 'Mar 2026', short: 'Mar', income: 10215, expenses: 6740, net: 3475, savings_rate: 34.0 },
    { label: 'Apr 2026', short: 'Apr', income: 10220, expenses: 6905, net: 3315, savings_rate: 32.4 },
    { label: 'May 2026', short: 'May', income: 10230, expenses: 6980, net: 3250, savings_rate: 31.8 },
  ],

  // 24 months (Jun 2024 – May 2026). _Engine is wired for 24 months
  // per the project state ("IF-guarded, ready"). The Trends tab can
  // window this at 6 / 12 / 24.
  months_24: [
    { label: 'Jun 2024', short: 'Jun ’24', income:  9820, expenses: 5840, net: 3980, savings_rate: 40.5 },
    { label: 'Jul 2024', short: 'Jul ’24', income:  9870, expenses: 5910, net: 3960, savings_rate: 40.1 },
    { label: 'Aug 2024', short: 'Aug ’24', income:  9900, expenses: 5950, net: 3950, savings_rate: 39.9 },
    { label: 'Sep 2024', short: 'Sep ’24', income:  9940, expenses: 5880, net: 4060, savings_rate: 40.8 },
    { label: 'Oct 2024', short: 'Oct ’24', income:  9970, expenses: 6010, net: 3960, savings_rate: 39.7 },
    { label: 'Nov 2024', short: 'Nov ’24', income:  9985, expenses: 6090, net: 3895, savings_rate: 39.0 },
    { label: 'Dec 2024', short: 'Dec ’24', income: 10010, expenses: 6150, net: 3860, savings_rate: 38.6 },
    { label: 'Jan 2025', short: 'Jan ’25', income: 10045, expenses: 6020, net: 4025, savings_rate: 40.1 },
    { label: 'Feb 2025', short: 'Feb ’25', income: 10060, expenses: 5980, net: 4080, savings_rate: 40.6 },
    { label: 'Mar 2025', short: 'Mar ’25', income: 10080, expenses: 6090, net: 3990, savings_rate: 39.6 },
    { label: 'Apr 2025', short: 'Apr ’25', income: 10095, expenses: 6160, net: 3935, savings_rate: 39.0 },
    { label: 'May 2025', short: 'May ’25', income: 10100, expenses: 6240, net: 3860, savings_rate: 38.2 },
    { label: 'Jun 2025', short: 'Jun ’25', income: 10110, expenses: 6210, net: 3900, savings_rate: 38.6 },
    { label: 'Jul 2025', short: 'Jul ’25', income: 10115, expenses: 6280, net: 3835, savings_rate: 37.9 },
    { label: 'Aug 2025', short: 'Aug ’25', income: 10118, expenses: 6210, net: 3908, savings_rate: 38.6 },
    { label: 'Sep 2025', short: 'Sep ’25', income: 10120, expenses: 6020, net: 4100, savings_rate: 40.5 },
    { label: 'Oct 2025', short: 'Oct ’25', income: 10122, expenses: 6160, net: 3962, savings_rate: 39.1 },
    { label: 'Nov 2025', short: 'Nov ’25', income: 10120, expenses: 6055, net: 4065, savings_rate: 40.2 },
    { label: 'Dec 2025', short: 'Dec',     income: 10120, expenses: 6094, net: 4026, savings_rate: 39.8 },
    { label: 'Jan 2026', short: 'Jan',     income: 10180, expenses: 6420, net: 3760, savings_rate: 36.9 },
    { label: 'Feb 2026', short: 'Feb',     income: 10200, expenses: 6612, net: 3588, savings_rate: 35.2 },
    { label: 'Mar 2026', short: 'Mar',     income: 10215, expenses: 6740, net: 3475, savings_rate: 34.0 },
    { label: 'Apr 2026', short: 'Apr',     income: 10220, expenses: 6905, net: 3315, savings_rate: 32.4 },
    { label: 'May 2026', short: 'May',     income: 10230, expenses: 6980, net: 3250, savings_rate: 31.8 },
  ],

  // Dashboard top spending — current month
  top_spending: [
    { cat: 'Housing',           spent: 2400, budget: 2400, status: 'on' },
    { cat: 'Food & Dining',     spent:  922, budget:  650, status: 'over' },
    { cat: 'Shopping',          spent:  618, budget:  500, status: 'over' },
    { cat: 'Transportation',    spent:  540, budget:  600, status: 'on' },
    { cat: 'Utilities',         spent:  360, budget:  380, status: 'on' },
    { cat: 'Gifts & Donations', spent:  280, budget:  300, status: 'on' },
    { cat: 'Entertainment',     spent:  255, budget:  240, status: 'fair' },
    { cat: 'Personal Care',     spent:  180, budget:  200, status: 'on' },
  ],

  // Dashboard right-rail "Month Snapshot"
  snapshot: {
    income: 10230, expenses: 6980, net: 3250, savings_rate: 31.8,
    avg_daily: 225, transactions: 76, largest_expense: 2400,
  },

  // Spending breakdown — current month, donut-ready
  breakdown: [
    { cat: 'Housing',          amount: 2400 },
    { cat: 'Food & Dining',    amount:  922 },
    { cat: 'Transportation',   amount:  540 },
    { cat: 'Shopping',         amount:  618 },
    { cat: 'Utilities',        amount:  360 },
    { cat: 'Entertainment',    amount:  255 },
    { cat: 'Subscriptions',    amount:  180 },
    { cat: 'Personal Care',    amount:  180 },
    { cat: 'Gifts & Donations',amount:  280 },
    { cat: 'Health & Medical', amount:  165 },
    { cat: 'Insurance',        amount:  220 },
    { cat: 'Misc',             amount:  860 },
  ],

  // Goals
  goals: [
    { name: 'Emergency Fund',       type: 'Savings Target', target: 22000, current: 22800, deadline: 'Dec 2026', status: 'on',  note: '3–4 months expenses. At 3.3 months — almost there.' },
    { name: 'Japan Trip Fund',      type: 'Savings Target', target:  5000, current:  1700, deadline: 'Sep 2026', status: 'fair',note: 'Set a transfer rule: $200/mo to Ally Savings labeled Travel.' },
    { name: 'Amex Gold Payoff',     type: 'Debt Payoff',    target:  1840, current:  1840, deadline: 'Dec 2026', status: 'fair',note: 'Starting balance $1,850. Pay $100 extra/mo above minimum.' },
    { name: 'Food & Dining',        type: 'Spending Limit', target:   650, current:   922, deadline: 'Monthly',  status: 'over',note: 'Biggest leak. Cut delivery apps — cook 4 nights/week.' },
    { name: 'Shopping',             type: 'Spending Limit', target:   500, current:   618, deadline: 'Monthly',  status: 'over',note: 'Amazon rule: 24-hour wait before buying.' },
    { name: 'Entertainment',        type: 'Spending Limit', target:   240, current:   255, deadline: 'Monthly',  status: 'fair',note: 'Streaming + events. Currently on track.' },
    { name: 'Monthly Savings Rate', type: 'Savings Rate',   target:    20, current:  31.8, deadline: 'Ongoing',  status: 'on',  note: 'Goal: 20%+. Currently crushing it at 31.8%.' },
  ],

  // Health Score — 5 weighted indicators
  health: {
    composite: 72, grade: 'Good',
    indicators: [
      { name: 'Savings Rate',       value: '31.8%',  score: 88, weight: 25, status: 'on',   bench: '≥ 20% of income saved'  },
      { name: 'Expense-to-Income',  value: '68.2%',  score: 74, weight: 20, status: 'on',   bench: '≤ 80% of income spent'  },
      { name: 'Emergency Fund',     value: '3.3 mo', score: 80, weight: 20, status: 'on',   bench: '≥ 3 months of expenses' },
      { name: 'Budget Adherence',   value: '6 of 8', score: 50, weight: 20, status: 'fair', bench: '≥ 80% categories on budget' },
      { name: 'Debt-to-Income',     value: '14.5%',  score: 92, weight: 15, status: 'on',   bench: '≤ 36% debt payments'    },
    ],
    biggest_opportunity: 'Food & Dining is 42% over budget — cutting it to plan lifts composite to ~78.'
  },

  // Net Worth
  net_worth: {
    total: 222640, assets: 244100, liabilities: 21460, change_mo: 3250,
    budget_accounts: [
      { name: 'Chase Joint Checking',  type: 'Checking', owner: 'Joint',  balance:  7200 },
      { name: 'Elena Checking',        type: 'Checking', owner: 'Elena',  balance:  2400 },
      { name: 'Marcus Checking',       type: 'Checking', owner: 'Marcus', balance:  3100 },
      { name: 'Ally Savings',          type: 'Savings',  owner: 'Joint',  balance: 22800 },
      { name: 'Ally Sinking Fund',     type: 'Savings',  owner: 'Joint',  balance:  6400 },
      { name: 'Amex Gold Card',        type: 'Credit',   owner: 'Marcus', balance: -1840 },
      { name: 'Chase Sapphire Card',   type: 'Credit',   owner: 'Elena',  balance: -1320 },
      { name: 'Marcus Auto Loan',      type: 'Loan',     owner: 'Marcus', balance:-18600 },
    ],
    investments: [
      { name: 'Marcus 401(k)',     type: '401(k)',    value: 98500 },
      { name: 'Elena 403(b)',      type: '403(b)',    value: 41200 },
      { name: 'Joint Brokerage',   type: 'Brokerage', value: 27800 },
      { name: 'Marcus Roth IRA',   type: 'Roth IRA',  value: 19400 },
      { name: 'Elena Roth IRA',    type: 'Roth IRA',  value: 15600 },
    ],
  },

  // 24 palettes — pulled from _Config
  palettes: [
    { id:'light',          name:'Light',           primary:'#1C3D2E', mid:'#2D5C45', accent:'#C5A95A', bg:'#FAF8F2', zebra:'#EEF2EC', dark:'#111827', accentLight:'#F0EBD8' },
    { id:'warm-greige',    name:'Warm Greige',     primary:'#3D2B1F', mid:'#5C4033', accent:'#C8873A', bg:'#FAF6F1', zebra:'#F0E8DC', dark:'#1C1009', accentLight:'#F5E6D3' },
    { id:'cool-slate',     name:'Cool Slate',      primary:'#1E3A5F', mid:'#2D5282', accent:'#64748B', bg:'#F8FAFC', zebra:'#EFF6FF', dark:'#0F2440', accentLight:'#E2E8F0' },
    { id:'sage',           name:'Sage',            primary:'#2D4A3E', mid:'#3D6455', accent:'#8FAF7E', bg:'#F4F9F1', zebra:'#EAF4E3', dark:'#1A2E25', accentLight:'#E8F5E0' },
    { id:'espresso',       name:'Espresso',        primary:'#2C1810', mid:'#4A2C1A', accent:'#C8873A', bg:'#FAF5F0', zebra:'#F0E5D8', dark:'#120A04', accentLight:'#F5E6D3' },
    { id:'maize-navy',     name:'Maize & Navy',    primary:'#003366', mid:'#004080', accent:'#FFCB05', bg:'#F5F8FF', zebra:'#E8F0FF', dark:'#001A33', accentLight:'#FFF5B0' },
    { id:'scarlet-gray',   name:'Scarlet & Gray',  primary:'#BB0000', mid:'#CC0000', accent:'#808080', bg:'#F9F9F9', zebra:'#EFEFEF', dark:'#2C0000', accentLight:'#E8E8E8' },
    { id:'orange-navy',    name:'Orange & Navy',   primary:'#002D6D', mid:'#003D94', accent:'#F47920', bg:'#F5F8FF', zebra:'#E8F0FF', dark:'#001540', accentLight:'#FFE4C4' },
    { id:'green-gold',     name:'Green & Gold',    primary:'#154734', mid:'#1A5C43', accent:'#CBA135', bg:'#F3FAF5', zebra:'#E5F5EA', dark:'#0A2419', accentLight:'#FFF3C0' },
    { id:'purple-gold',    name:'Purple & Gold',   primary:'#4A1C7C', mid:'#5E2499', accent:'#FFC72C', bg:'#FAF5FF', zebra:'#F3E8FF', dark:'#280D45', accentLight:'#FFF5B5' },
    { id:'crimson-white',  name:'Crimson & White', primary:'#9B1B30', mid:'#B52238', accent:'#FFFFFF', bg:'#FFF8F9', zebra:'#FFE8EC', dark:'#4A0010', accentLight:'#F5F5F5' },
    { id:'garnet-gold',    name:'Garnet & Gold',   primary:'#782F40', mid:'#9B3B52', accent:'#CBA135', bg:'#FFF8F5', zebra:'#FFE8DC', dark:'#3D0A1A', accentLight:'#FFF3C0' },
    { id:'forest-white',   name:'Forest & White',  primary:'#154733', mid:'#1E6048', accent:'#FFFFFF', bg:'#F4FBF6', zebra:'#E8F5EC', dark:'#0A2819', accentLight:'#F0FFF4' },
    { id:'royal-gold',     name:'Royal & Gold',    primary:'#002D72', mid:'#003D9C', accent:'#B5A642', bg:'#F0F5FF', zebra:'#E0ECFF', dark:'#001040', accentLight:'#F5F0C0' },
    { id:'silver-black',   name:'Silver & Black',  primary:'#1A1A1A', mid:'#2D2D2D', accent:'#A8A9AD', bg:'#F5F5F5', zebra:'#EBEBEB', dark:'#000000', accentLight:'#E8E8E8' },
    { id:'midnight',        name:'Midnight',          primary:'#0B1F3A', mid:'#142E55', accent:'#14B8A6', bg:'#F0F4F8', zebra:'#E2E8F0', dark:'#050E1C', accentLight:'#99F6E4' },
    { id:'burgundy',        name:'Burgundy',          primary:'#5C0A1A', mid:'#7A0E22', accent:'#E8D5B5', bg:'#FAF5F0', zebra:'#F0E6DA', dark:'#2E0510', accentLight:'#F5E8D5' },
    { id:'mocha',           name:'Mocha',             primary:'#5C3A21', mid:'#7A4F2D', accent:'#D4A574', bg:'#FAF3EA', zebra:'#F0E2CE', dark:'#2E1D10', accentLight:'#F0DCC2' },
    { id:'indigo-blush',    name:'Indigo & Blush',    primary:'#2E1F6B', mid:'#3D2A8C', accent:'#EAB0B8', bg:'#F7F4FA', zebra:'#ECE5F5', dark:'#170F36', accentLight:'#F8DEE3' },
    { id:'pine-brass',      name:'Pine & Brass',      primary:'#1F3A2E', mid:'#2E5544', accent:'#B8964A', bg:'#F2F8F4', zebra:'#E1F0E7', dark:'#0E1D17', accentLight:'#E8D9A8' },
    { id:'ocean-coral',     name:'Ocean & Coral',     primary:'#0F4858', mid:'#166075', accent:'#F47B6A', bg:'#F0F8FA', zebra:'#DCEFF2', dark:'#062430', accentLight:'#FBC8BD' },
    { id:'charcoal-mint',   name:'Charcoal & Mint',   primary:'#2C2C2E', mid:'#44444A', accent:'#A8D5BA', bg:'#F5F5F5', zebra:'#E8E8E8', dark:'#161617', accentLight:'#D0EAD9' },
    { id:'olive-cream',     name:'Olive & Cream',     primary:'#3D4A1F', mid:'#56672E', accent:'#C8B27A', bg:'#F7F4E8', zebra:'#ECE5D0', dark:'#1E2410', accentLight:'#E8D9A8' },
    { id:'custom',         name:'Custom',          primary:'#1B2A4A', mid:'#2C3E6B', accent:'#C8873A', bg:'#F3F4F6', zebra:'#EEF0F5', dark:'#111827', accentLight:'#F5D9B0' },
  ],

  tabs: [
    { id:'start',     label:'Start Here'        },
    { id:'trends',    label:'Trends'            },
    { id:'dashboard', label:'Dashboard'         },
    { id:'budget',    label:'Monthly Budget'    },
    { id:'health',    label:'Health Score'      },
    { id:'goals',     label:'Goals'             },
    { id:'tx',        label:'Transactions'      },
    { id:'import',    label:'Bank Import Guide' },
    { id:'networth',  label:'Net Worth'         },
    { id:'accounts',  label:'Accounts'          },
    { id:'cats',      label:'Categories'        },
    { id:'engine',    label:'_Engine',  system: true },
  ],
};

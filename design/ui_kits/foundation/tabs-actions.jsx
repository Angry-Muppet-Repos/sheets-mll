/* =====================================================================
   ACTION TABS — Goals, Bank Import Guide, plus stubs for remaining tabs
   ===================================================================== */

/* ---------- GOALS ---------- */
function GoalsTab() {
  const goals = window.CC_DATA.goals;
  const onTrack = goals.filter(g => g.status === 'on').length;
  const fair    = goals.filter(g => g.status === 'fair').length;
  const over    = goals.filter(g => g.status === 'over').length;

  return (
    <div>
      <SheetHeader tab="Goals" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>

        {/* Summary row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 24 }}>
          <KpiCard label="Total Goals"    value={goals.length + ''}     accent="primary" big={false} />
          <KpiCard label="On Track"        value={onTrack + ''}          sub={'of ' + goals.length} accent="primary" big={false} />
          <KpiCard label="Need Attention"  value={(fair + over) + ''}    accent="danger"  big={false} />
          <KpiCard label="Avg Progress"    value="68%"                   sub="across all targets" accent="gold" big={false} />
        </div>

        <SectionLabel gold sub="LIVE PROGRESS FROM YOUR LEDGER">YOUR GOALS</SectionLabel>
        <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden', marginTop: 12, marginBottom: 22 }}>
          <ColHeader widths={['1.4fr','0.9fr','0.7fr','0.8fr','1.5fr','0.7fr']} cols={[
            { label: 'Goal' },
            { label: 'Type' },
            { label: 'Target', align: 'right' },
            { label: 'Current', align: 'right' },
            { label: 'Progress' },
            { label: 'Status', align: 'right' },
          ]} />
          {goals.map((g,i) => {
            const isPct = g.type === 'Savings Rate';
            const pctVal = isPct
              ? (g.current / g.target) * 100
              : (g.type === 'Spending Limit')
                  ? (g.current / g.target) * 100
                  : (g.current / g.target) * 100;
            return (
              <div key={g.name}>
                <DataRow widths={['1.4fr','0.9fr','0.7fr','0.8fr','1.5fr','0.7fr']} zebra={i%2===1} last={false} cols={[
                  { content: <span style={{ fontWeight: 500 }}>{g.name}</span> },
                  { content: <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--pal-mid, #2D5C45)' }}>{g.type}</span> },
                  { content: isPct ? pct(g.target,0) : fmt(g.target), align: 'right', num: true },
                  { content: isPct ? pct(g.current,1) : fmt(g.current), align: 'right', num: true, bold: true },
                  { content: <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ flex: 1 }}><Progress pct={pctVal} status={g.status} height={8} /></div>
                      <div style={{ fontVariantNumeric: 'tabular-nums', fontSize: 11, color: 'rgba(28,61,46,0.65)', minWidth: 38, textAlign: 'right' }}>{pctVal.toFixed(0)}%</div>
                    </div> },
                  { content: <Chip status={g.status} />, align: 'right' },
                ]} />
                <div style={{ background: i%2===1 ? 'var(--pal-zebra, #EEF2EC)' : 'transparent', padding: '0 14px 12px 14px', fontFamily: 'Jost,sans-serif', fontSize: 11.5, fontWeight: 300, color: 'rgba(28,61,46,0.65)', fontStyle: 'italic', borderBottom: i < goals.length-1 ? '1px solid rgba(28,61,46,0.06)' : 0 }}>
                  Deadline: {g.deadline} &nbsp;·&nbsp; {g.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* Forecast callout — value-add */}
        <div style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', borderRadius: 4, padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          <div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', color: 'var(--pal-accent, #C5A95A)' }}>FORECAST · IF YOU STAY THE COURSE</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 24, lineHeight: 1.2, marginTop: 10 }}>Japan Trip Fund hits target by <span style={{ color: 'var(--pal-accent, #C5A95A)' }}>Oct&nbsp;2026</span> — one month late.</div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 12.5, fontWeight: 300, lineHeight: 1.55, opacity: 0.78, marginTop: 10 }}>Bump your monthly transfer from $200 to $275 and you hit Sep deadline. Or skip 2 takeout dinners a week and the math works on its own.</div>
          </div>
          <div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', color: 'var(--pal-accent, #C5A95A)' }}>YOUR PACE NOW</div>
            <div style={{ display: 'flex', gap: 24, marginTop: 12 }}>
              <div>
                <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.6 }}>Avg Monthly</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>$280</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.6 }}>Need / Month</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, marginTop: 2, fontVariantNumeric: 'tabular-nums', color: 'var(--pal-accent, #C5A95A)' }}>$275</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.6 }}>To Catch Up</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>+$75</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 22 }}></div>
        <SheetFooter note="Yellow cells = you edit · Grey cells = auto-calculated from your ledger" />
      </div>
    </div>
  );
}

/* ---------- BANK IMPORT GUIDE ---------- */
function BankImportTab() {
  return (
    <div>
      <SheetHeader tab="Bank Import Guide" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>

        <SectionLabel gold sub="THREE STEPS · AUTO-CATEGORIZED">PASTE YOUR BANK CSV</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginTop: 14, marginBottom: 24 }}>
          {[
            { n: 1, t: 'Set the account', d: 'Type the account name in cell C6. Must match an entry on the Accounts tab.' },
            { n: 2, t: 'Paste the CSV',    d: 'Include the header row. We handle Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex.' },
            { n: 3, t: 'Run import',       d: '💳 Column & Co. → Import Bank Transactions. Auto-categorized. Dupes skipped.' },
          ].map(s => (
            <div key={s.n} style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{ width: 26, height: 26, background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', borderRadius: 999, fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 16, color: 'var(--pal-primary, #1C3D2E)' }}>{s.t}</div>
              </div>
              <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 12, fontWeight: 300, color: 'rgba(28,61,46,0.75)', lineHeight: 1.5 }}>{s.d}</div>
            </div>
          ))}
        </div>

        {/* Account cell + paste zone */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 10.5, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--pal-mid, #2D5C45)' }}>Account name (C6):</span>
          <input defaultValue="Chase Joint Checking" style={{ background: '#FFFDE7', border: '1px solid #C5A95A', borderRadius: 3, padding: '8px 12px', fontFamily: 'Jost,sans-serif', fontSize: 13, color: '#1C3D2E', minWidth: 260, outline: 'none' }} />
        </div>

        <SectionLabel sub="PASTE ZONE — INCLUDE THE HEADER ROW" gold>STEP 2 · PASTE CSV</SectionLabel>
        <div style={{ background: '#F0FFF4', border: '2px solid #16A34A', borderRadius: 4, marginTop: 12, marginBottom: 24, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 2fr 0.8fr 0.8fr 0.7fr', background: '#FFFFFF', borderBottom: '1px solid rgba(22,163,74,0.30)', fontFamily: 'monospace', fontSize: 11, fontWeight: 600, color: '#1C3D2E' }}>
            {['Date','Description','Amount','Type','Memo'].map(h => <div key={h} style={{ padding: '8px 12px', borderRight: '1px solid rgba(22,163,74,0.20)' }}>{h}</div>)}
          </div>
          {[
            ['05/02/2026','WHOLE FOODS MARKET','-84.20','DEBIT',''],
            ['05/02/2026','PAYROLL DEP - INTUIT','5120.00','CREDIT','Bi-weekly'],
            ['05/03/2026','NETFLIX.COM','-15.49','DEBIT','SUBS'],
            ['05/04/2026','UBER EATS','-32.10','DEBIT',''],
            ['05/05/2026','TRANSFER TO ALLY SVGS','-500.00','DEBIT','Auto-tagged transfer'],
          ].map((r,i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '0.8fr 2fr 0.8fr 0.8fr 0.7fr', background: i % 2 === 0 ? '#FFFFFF' : '#F0FFF4', fontFamily: 'monospace', fontSize: 11.5, color: '#1C3D2E' }}>
              {r.map((v,j) => <div key={j} style={{ padding: '7px 12px', borderRight: j < r.length-1 ? '1px solid rgba(22,163,74,0.10)' : 0, borderBottom: '1px solid rgba(22,163,74,0.08)' }}>{v}</div>)}
            </div>
          ))}
          <div style={{ padding: '12px 16px', fontFamily: 'Jost,sans-serif', fontSize: 11, fontStyle: 'italic', color: 'rgba(22,163,74,0.85)' }}>Paste up to 100 rows here. We sniff the header, parse the dates, classify Income/Expense/Transfer, and drop dupes.</div>
        </div>

        {/* Review block */}
        <div style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', padding: '10px 14px', borderRadius: '4px 4px 0 0', fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
          ⚠ Review Income — Confirm which deposits count as real income
        </div>
        <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderTop: 0, borderRadius: '0 0 4px 4px', overflow: 'hidden' }}>
          <ColHeader widths={['0.9fr','1.8fr','0.9fr','0.8fr','1.3fr']} cols={[
            { label: 'Month' },{ label: 'Description' },{ label: 'Amount', align: 'right' },{ label: 'Is Income?', align: 'center' },{ label: 'Note' },
          ]} />
          {[
            ['May 2026','PAYROLL DEP - INTUIT', 5120, 'Yes', ''],
            ['May 2026','VENMO FROM ALEX',       80, 'No',  'Reimbursement, not income'],
            ['May 2026','REFUND - AMAZON',       42, 'No',  'Return refund'],
          ].map((r,i) => (
            <DataRow key={i} widths={['0.9fr','1.8fr','0.9fr','0.8fr','1.3fr']} zebra={i%2===1} last={i===2} cols={[
              { content: r[0] },
              { content: <span style={{ fontWeight: 500 }}>{r[1]}</span> },
              { content: fmt(r[2]), align: 'right', num: true },
              { content: <span style={{ background: r[3]==='Yes' ? '#FFFDE7' : '#FAF8F2', border: '1px solid ' + (r[3]==='Yes' ? '#C5A95A' : 'rgba(28,61,46,0.20)'), padding: '4px 14px', borderRadius: 3, fontWeight: 500, fontSize: 11.5 }}>{r[3]} ▾</span>, align: 'center' },
              { content: <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11.5, fontStyle: 'italic', color: 'rgba(28,61,46,0.65)' }}>{r[4]}</span> },
            ]} />
          ))}
        </div>

        <div style={{ height: 22 }}></div>
        <SheetFooter note="Auto-categorization uses the keyword rules on the Categories tab" />
      </div>
    </div>
  );
}

/* ---------- Generic stub tab for the rest ---------- */
function StubTab({ tab, copy }) {
  return (
    <div>
      <SheetHeader tab={tab} />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '40px 32px', minHeight: 500 }}>
        <SectionLabel gold>{tab.toUpperCase()}</SectionLabel>
        <div style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 22, color: 'var(--pal-primary, #1C3D2E)', marginTop: 12, maxWidth: 640 }}>{copy}</div>
        <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 12.5, fontWeight: 300, color: 'rgba(28,61,46,0.6)', marginTop: 14, maxWidth: 640, lineHeight: 1.55 }}>
          This tab exists in the actual product. The recreation focuses on the screens that sell the system. Switch to Dashboard, Trends, Goals, or Health Score to see the full visual treatment.
        </div>
        <div style={{ height: 32 }}></div>
        <SheetFooter />
      </div>
    </div>
  );
}

/* ---------- MONTHLY BUDGET ---------- */
const BUDGET_PROFILES = {
  'dave-ramsey': {
    name: 'Dave Ramsey',
    sub: 'Envelopes · Baby Steps',
    blurb: 'The Ramsey Method: big slices for housing and food, every dollar named, aggressive debt snowball, 3-6 month emergency fund.',
    income: 10230,
    targets: {
      'Housing':            2400, 'Food & Dining':      900, 'Transportation':     800, 'Shopping':           250,
      'Utilities':          360,  'Entertainment':      150, 'Subscriptions':      60,  'Personal Care':      150,
      'Gifts & Donations':  250,  'Health & Medical':   200, 'Insurance':          450, 'Savings':            1500,
      'Debt Payments':      1500, 'Education':          0,   'Travel':             0,   'Pets':               100,
      'Childcare':          0,    'Business':           0,   'Taxes':              0,   'Misc':               160,
    }
  },
  '50-30-20': {
    name: '50/30/20',
    sub: 'Needs · Wants · Savings',
    blurb: 'Senator Warren\'s rule. 50% needs (housing, food, transport, insurance), 30% wants (dining out, shopping, entertainment), 20% savings + debt.',
    income: 10230,
    targets: {
      'Housing':            2400, 'Food & Dining':      750, 'Transportation':     650, 'Shopping':           620,
      'Utilities':          380,  'Entertainment':      400, 'Subscriptions':      180, 'Personal Care':      200,
      'Gifts & Donations':  300,  'Health & Medical':   200, 'Insurance':          450, 'Savings':            1500,
      'Debt Payments':      550,  'Education':          100, 'Travel':             400, 'Pets':               150,
      'Childcare':          0,    'Business':           0,   'Taxes':              0,   'Misc':               700,
    }
  },
  'fire': {
    name: 'FIRE',
    sub: 'Financial Independence · Retire Early',
    blurb: 'Optimized for a 50%+ savings rate. Lean fixed costs, minimal discretionary, max retirement and brokerage contributions. The r/financialindependence playbook.',
    income: 10230,
    targets: {
      'Housing':            1800, 'Food & Dining':      500, 'Transportation':     400, 'Shopping':           200,
      'Utilities':          340,  'Entertainment':      100, 'Subscriptions':      30,  'Personal Care':      80,
      'Gifts & Donations':  150,  'Health & Medical':   150, 'Insurance':          400, 'Savings':            5200,
      'Debt Payments':      300,  'Education':          0,   'Travel':             200, 'Pets':               80,
      'Childcare':          0,    'Business':           0,   'Taxes':              0,   'Misc':               300,
    }
  },
  'zero-based': {
    name: 'Zero-Based',
    sub: 'Every dollar gets a job · YNAB-style',
    blurb: 'Income minus expenses equals zero. Nothing left unassigned. Real-world realistic: room for travel, education, eating out, plus disciplined savings.',
    income: 10230,
    targets: {
      'Housing':            2400, 'Food & Dining':      750, 'Transportation':     600, 'Shopping':           500,
      'Utilities':          380,  'Entertainment':      240, 'Subscriptions':      120, 'Personal Care':      200,
      'Gifts & Donations':  300,  'Health & Medical':   200, 'Insurance':          450, 'Savings':            2200,
      'Debt Payments':      700,  'Education':          50,  'Travel':             300, 'Pets':               130,
      'Childcare':          0,    'Business':           0,   'Taxes':              0,   'Misc':               710,
    }
  },
  'anti-budget': {
    name: 'Anti-Budget',
    sub: 'Paula Pant · Save first, spend the rest',
    blurb: 'Pay yourself 20% off the top into savings + retirement. Don\'t track the rest by category — if savings happens automatically, the spending takes care of itself.',
    income: 10230,
    targets: {
      'Housing':            2200, 'Food & Dining':      700, 'Transportation':     550, 'Shopping':           600,
      'Utilities':          360,  'Entertainment':      350, 'Subscriptions':      150, 'Personal Care':      180,
      'Gifts & Donations':  300,  'Health & Medical':   200, 'Insurance':          420, 'Savings':            2050,
      'Debt Payments':      500,  'Education':          100, 'Travel':             400, 'Pets':               130,
      'Childcare':          0,    'Business':           0,   'Taxes':              0,   'Misc':               1040,
    }
  },
  'kakeibo': {
    name: 'Kakeibo',
    sub: 'Japanese 4-bucket · Needs · Wants · Culture · Unexpected',
    blurb: 'A 100-year-old Japanese mindful-money practice. Four hand-written buckets — survival, optional, culture & growth, and the unexpected. Reflect at month-end on what each category bought you.',
    income: 10230,
    targets: {
      'Housing':            2200, 'Food & Dining':      750, 'Transportation':     550, 'Shopping':           350,
      'Utilities':          360,  'Entertainment':      300, 'Subscriptions':      90,  'Personal Care':      150,
      'Gifts & Donations':  250,  'Health & Medical':   200, 'Insurance':          420, 'Savings':            2200,
      'Debt Payments':      400,  'Education':          300, 'Travel':             350, 'Pets':               100,
      'Childcare':          0,    'Business':           0,   'Taxes':              0,   'Misc':               1260,
    }
  },
  'new-parent': {
    name: 'New Parent',
    sub: 'Young family · childcare + 529 priority',
    blurb: 'Childcare is now the second-largest line. Health & medical and insurance climb. Discretionary (travel, dining, entertainment) compresses to make room — and a 529 contribution lands under Education.',
    income: 10230,
    targets: {
      'Housing':            2400, 'Food & Dining':      900, 'Transportation':     550, 'Shopping':           350,
      'Utilities':          380,  'Entertainment':      100, 'Subscriptions':      80,  'Personal Care':      120,
      'Gifts & Donations':  150,  'Health & Medical':   350, 'Insurance':          550, 'Savings':            1100,
      'Debt Payments':      500,  'Education':          200, 'Travel':             100, 'Pets':               80,
      'Childcare':          1800, 'Business':           0,   'Taxes':              0,   'Misc':               520,
    }
  },
  'self-employed': {
    name: 'Self-Employed',
    sub: '1099 · 25% tax set-aside · biz expenses',
    blurb: 'Built for freelancers, contractors, and Etsy sellers. A quarter of every dollar earned is escrowed for quarterly taxes. Business pulls a real line. Self-paid health insurance is heavier than a W-2 budget.',
    income: 10230,
    targets: {
      'Housing':            1900, 'Food & Dining':      600, 'Transportation':     450, 'Shopping':           250,
      'Utilities':          320,  'Entertainment':      150, 'Subscriptions':      100, 'Personal Care':      120,
      'Gifts & Donations':  150,  'Health & Medical':   200, 'Insurance':          700, 'Savings':            1200,
      'Debt Payments':      400,  'Education':          150, 'Travel':             200, 'Pets':               80,
      'Childcare':          0,    'Business':           600, 'Taxes':              2560, 'Misc':               100,
    }
  },
  'hcol-renter': {
    name: 'HCOL Renter',
    sub: 'High-cost city · 40% housing · student loans',
    blurb: 'For NYC, SF, Seattle, Boston, DC. Rent eats 40%. Student-loan payments get a serious line. Less car, less stuff, more transit. Savings is what\'s left — and that\'s okay, the location is the investment.',
    income: 10230,
    targets: {
      'Housing':            4100, 'Food & Dining':      800, 'Transportation':     350, 'Shopping':           300,
      'Utilities':          280,  'Entertainment':      200, 'Subscriptions':      100, 'Personal Care':      150,
      'Gifts & Donations':  100,  'Health & Medical':   150, 'Insurance':          280, 'Savings':            900,
      'Debt Payments':      1100, 'Education':          50,  'Travel':             300, 'Pets':               80,
      'Childcare':          0,    'Business':           0,   'Taxes':              0,   'Misc':               990,
    }
  },
  'custom': {
    name: 'Custom',
    sub: 'You set every target',
    blurb: 'Click any yellow cell to edit. Totals update live. Build a profile that matches your real life — then save it as your personal default.',
    income: 10230,
    targets: {
      'Housing':            2400, 'Food & Dining':      650, 'Transportation':     600, 'Shopping':           500,
      'Utilities':          380,  'Entertainment':      240, 'Subscriptions':      120, 'Personal Care':      200,
      'Gifts & Donations':  300,  'Health & Medical':   180, 'Insurance':          400, 'Savings':            1800,
      'Debt Payments':      700,  'Education':          50,  'Travel':             250, 'Pets':               120,
      'Childcare':          0,    'Business':           0,   'Taxes':              0,   'Misc':               200,
    }
  }
};

function MonthlyBudgetTab() {
  const [profileId, setProfileId] = React.useState('dave-ramsey');
  const [customOverrides, setCustomOverrides] = React.useState({});

  const profile = BUDGET_PROFILES[profileId];
  const income = profile.income;
  const isCustom = profileId === 'custom';

  // For Custom, merge defaults + overrides
  const targets = isCustom ? { ...profile.targets, ...customOverrides } : profile.targets;
  const total = Object.values(targets).reduce((a,b) => a + b, 0);
  const remaining = income - total;
  const savingsRate = ((targets['Savings'] || 0) / income) * 100;

  const cats = Object.keys(profile.targets);
  const half = Math.ceil(cats.length / 2);
  const left = cats.slice(0, half);
  const right = cats.slice(half);

  return (
    <div>
      <SheetHeader tab="Monthly Budget" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>

        {/* Hero: profile + summary */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, gap: 24 }}>
          <div style={{ flex: 1 }}>
            <SectionLabel gold sub="PICK A PROFILE OR SET YOUR OWN">DESIRED FINANCIAL PROFILE</SectionLabel>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 30, color: 'var(--pal-primary, #1C3D2E)', marginTop: 10 }}>{profile.name}</div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 500, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--pal-accent, #C5A95A)', marginTop: 4 }}>{profile.sub}</div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 13, color: 'rgba(28,61,46,0.75)', lineHeight: 1.55, marginTop: 10, maxWidth: 540 }}>{profile.blurb}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, minWidth: 420 }}>
            <KpiCard label="Monthly Income" value={fmt(income)} accent="primary" big={false} />
            <KpiCard label="Total Budgeted" value={fmt(total)} sub={remaining >= 0 ? fmt(remaining) + ' free' : fmt(-remaining) + ' over'} accent={remaining < 0 ? 'danger' : 'mid'} big={false} />
            <KpiCard label="Savings Rate" value={pct(savingsRate, 1)} sub="of income" accent="gold" big={false} />
          </div>
        </div>

        {/* Profile picker — slim horizontal scroll, single line */}
        <div style={{ marginBottom: 22, position: 'relative' }}>
          <div
            className="cc-profile-scroll"
            style={{
              display: 'flex',
              gap: 8,
              overflowX: 'auto',
              paddingBottom: 8,
              scrollbarWidth: 'thin',
              maskImage: 'linear-gradient(to right, transparent 0, #000 18px, #000 calc(100% - 36px), transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 18px, #000 calc(100% - 36px), transparent 100%)',
            }}
          >
            {Object.entries(BUDGET_PROFILES).map(([id, p]) => {
              const active = id === profileId;
              const pSavings = ((p.targets['Savings'] || 0) / p.income) * 100;
              return (
                <button
                  key={id}
                  onClick={() => setProfileId(id)}
                  style={{
                    flex: '0 0 auto',
                    cursor: 'pointer',
                    background: active ? 'var(--pal-primary, #1C3D2E)' : '#FAF8F2',
                    color: active ? '#FAF8F2' : '#1C3D2E',
                    border: '1px solid ' + (active ? 'var(--pal-primary, #1C3D2E)' : 'rgba(28,61,46,0.16)'),
                    borderRadius: 999,
                    padding: '8px 14px 8px 12px',
                    fontFamily: 'Jost,sans-serif',
                    fontSize: 12.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    whiteSpace: 'nowrap',
                    transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease',
                    boxShadow: active ? '0 1px 2px rgba(28,61,46,0.18)' : 'none',
                  }}
                >
                  <span style={{
                    width: 7, height: 7, borderRadius: 999,
                    background: active ? 'var(--pal-accent, #C5A95A)' : 'rgba(28,61,46,0.22)',
                    flex: '0 0 auto',
                  }}></span>
                  <span style={{ fontWeight: 500 }}>{p.name}</span>
                  <span style={{
                    fontSize: 10.5,
                    opacity: active ? 0.75 : 0.55,
                    fontVariantNumeric: 'tabular-nums',
                    borderLeft: '1px solid ' + (active ? 'rgba(250,248,242,0.22)' : 'rgba(28,61,46,0.14)'),
                    paddingLeft: 10,
                    letterSpacing: '0.02em',
                  }}>{pct(pSavings, 0)} save</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category editor — 2 columns */}
        <SectionLabel gold sub={isCustom ? 'EDIT ANY YELLOW CELL' : 'PRESET FROM PROFILE'}>CATEGORY TARGETS · 20 CATEGORIES</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 12 }}>
          {[left, right].map((col, ci) => (
            <div key={ci} style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden' }}>
              <ColHeader widths={['1.4fr','0.9fr','0.5fr','0.9fr']} cols={[
                { label: 'Category' },{ label: 'Target', align: 'right' },{ label: '% Inc', align: 'right' },{ label: 'Share' },
              ]} />
              {col.map((cat, i) => {
                const val = targets[cat];
                const pctInc = (val / income) * 100;
                const share = val / Math.max(...Object.values(targets));
                return (
                  <DataRow key={cat} widths={['1.4fr','0.9fr','0.5fr','0.9fr']} zebra={i%2===1} last={i === col.length-1} cols={[
                    { content: <span style={{ fontWeight: 500 }}>{cat}</span> },
                    { content: isCustom
                        ? <input
                            type="number"
                            value={val}
                            onChange={e => setCustomOverrides({ ...customOverrides, [cat]: Number(e.target.value) || 0 })}
                            style={{ width: 70, background: '#FFFDE7', border: '1px solid #C5A95A', borderRadius: 3, padding: '3px 6px', fontFamily: 'Jost,sans-serif', fontVariantNumeric: 'tabular-nums', fontSize: 12, textAlign: 'right', color: '#1C3D2E', outline: 'none', fontWeight: 500 }}
                          />
                        : <span>{fmt(val)}</span>,
                      align: 'right', num: true },
                    { content: pctInc.toFixed(1) + '%', align: 'right', num: true },
                    { content: <div style={{ width: '100%', height: 5, background: 'rgba(28,61,46,0.08)', borderRadius: 1, overflow: 'hidden' }}>
                        <div style={{ width: (share * 100) + '%', height: '100%', background: cat === 'Savings' ? 'var(--pal-accent, #C5A95A)' : (cat === 'Debt Payments' ? '#832f30' : 'var(--pal-primary, #1C3D2E)'), transition: 'width 220ms' }}></div>
                      </div> },
                  ]} />
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer summary bar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10, background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', borderRadius: 4, padding: '16px 22px', marginTop: 16 }}>
          {[
            ['MONTHLY INCOME', fmt(income)],
            ['TOTAL BUDGETED', fmt(total)],
            [remaining >= 0 ? 'UNALLOCATED' : 'OVER BUDGET', (remaining >= 0 ? '+' : '−') + fmt(Math.abs(remaining)).replace('$','$')],
            ['SAVINGS RATE', pct(savingsRate, 1)],
          ].map(([k,v], i) => (
            <div key={k}>
              <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 500, letterSpacing: '0.18em', color: 'rgba(250,248,242,0.60)' }}>{k}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 22, marginTop: 4, fontVariantNumeric: 'tabular-nums', color: (i === 2 && remaining < 0) ? '#fca5a5' : (i === 2 ? '#86efac' : '#FAF8F2') }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ height: 22 }}></div>
        <SheetFooter note="Targets feed Dashboard's % of Budget and Health Score's Budget Adherence" />
      </div>
    </div>
  );
}

Object.assign(window, { GoalsTab, BankImportTab, StubTab, MonthlyBudgetTab });

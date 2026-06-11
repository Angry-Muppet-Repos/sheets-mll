/* =====================================================================
   STARTING TABS — Start Here + Dashboard
   Hero tabs. These are what a buyer sees first and what sells the
   product in Etsy screenshots.
   ===================================================================== */

/* ---------- START HERE ---------- */
function StartHereTab() {
  const palettes = window.CC_DATA.palettes;
  return (
    <div>
      <SheetHeader tab="Start Here" />

      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '36px 40px' }}>
        {/* Hero greeting */}
        <div style={{ maxWidth: 720, marginBottom: 36 }}>
          <SectionLabel sub="WELCOME">LIFE, ORGANIZED.</SectionLabel>
          <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 38, color: 'var(--pal-primary, #1C3D2E)', lineHeight: 1.1, marginTop: 12 }}>
            Open it. Add your information. Get clear.
          </div>
          <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 14.5, color: 'rgba(28,61,46,0.75)', lineHeight: 1.55, marginTop: 14, maxWidth: 620 }}>
            The Foundation is a 14-tab budget system designed to work out of the box. No formulas to write. No app to learn. Just the numbers, organized.
          </div>
        </div>

        {/* Choose your theme — palette tile picker */}
        <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 6, padding: 24, marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
            <div>
              <SectionLabel gold sub="24 PALETTES INCLUDED">CHOOSE YOUR THEME</SectionLabel>
              <div style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 22, color: 'var(--pal-primary, #1C3D2E)', marginTop: 6 }}>Pick a palette. We'll repaint everything.</div>
            </div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.55)' }}>24 palettes →</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 8 }}>
            {palettes.map(p => (
              <div key={p.id} style={{ border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden', background: p.bg }}>
                <div style={{ display: 'flex', height: 30 }}>
                  <div style={{ flex: 1, background: p.primary }}></div>
                  <div style={{ flex: 1, background: p.mid }}></div>
                  <div style={{ flex: 1, background: p.accent }}></div>
                </div>
                <div style={{ padding: '6px 8px', fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, color: '#1C3D2E', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Setup steps */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel gold sub="5 STEPS TO GET STARTED">SETUP GUIDE</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10, marginTop: 14 }}>
            {[
              { n: 1, t: 'Install the Script', d: 'Extensions → Apps Script → paste ColumnCo_Foundation_v2.gs. A 💳 Column & Co. menu appears.' },
              { n: 2, t: 'Set Up Accounts', d: 'Add every bank account, credit card, and savings account. Enter current balances.' },
              { n: 3, t: 'Import Transactions', d: 'Type the account name in C6. Paste your bank CSV. Run Import. Done.' },
              { n: 4, t: 'Set Your Goals', d: 'Pick a Type, a Category or Account, a Target. Progress tracks automatically.' },
              { n: 5, t: 'Explore Your Data', d: 'Dashboard, Trends, Health Score, and Net Worth update as you import.' },
            ].map(s => (
              <div key={s.n} style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 28, height: 28, background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', borderRadius: 999, fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</div>
                  <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(28,61,46,0.55)' }}>Step {s.n}</div>
                </div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 16, color: 'var(--pal-primary, #1C3D2E)', marginBottom: 6 }}>{s.t}</div>
                <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 12, fontWeight: 300, color: 'rgba(28,61,46,0.75)', lineHeight: 1.45 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* LLM-ready callout — the unique differentiator */}
        <div style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', borderRadius: 6, padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'center', marginBottom: 32 }}>
          <div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', color: 'var(--pal-accent, #C5A95A)' }}>LLM-READY · BUILT FOR AI</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 28, lineHeight: 1.15, marginTop: 10 }}>Ask Claude or ChatGPT to read your sheet.</div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 13.5, lineHeight: 1.55, marginTop: 12, opacity: 0.85 }}>
              A hidden <code style={{ background: 'rgba(250,248,242,0.12)', padding: '1px 6px', borderRadius: 3, fontSize: 12 }}>_Schema</code> tab documents every column for an AI. Copy a prompt below, paste in your favorite assistant, attach your sheet. You get insights in seconds.
            </div>
          </div>
          <div style={{ background: 'rgba(250,248,242,0.06)', border: '1px solid rgba(197,169,90,0.30)', borderRadius: 4, padding: 16 }}>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--pal-accent, #C5A95A)', marginBottom: 8 }}>PROMPT · COPY &amp; PASTE</div>
            <div style={{ fontFamily: 'ui-monospace, SF Mono, Menlo, monospace', fontSize: 12, lineHeight: 1.55, color: '#FAF8F2' }}>
              "Find every category where I'm trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel."
            </div>
          </div>
        </div>

        <SheetFooter note="Thank you for your purchase · Questions? columnandco.com" />
      </div>
    </div>
  );
}

/* ---------- DASHBOARD ---------- */
function DashboardTab() {
  const d = window.CC_DATA;
  const top = d.top_spending;
  const breakdown = d.breakdown;
  const totalSpend = breakdown.reduce((a,b) => a + b.amount, 0);

  return (
    <div>
      <SheetHeader tab="Dashboard" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>

        {/* Month selector */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <SectionLabel>VIEWING MONTH</SectionLabel>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 30, color: 'var(--pal-primary, #1C3D2E)' }}>May 2026</div>
              <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.55)' }}>← change to update all figures</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {d.months.slice(-6).map(m => (
              <span key={m.label} style={{ padding: '6px 11px', borderRadius: 2, background: m.label === 'May 2026' ? 'var(--pal-primary, #1C3D2E)' : 'transparent', color: m.label === 'May 2026' ? '#FAF8F2' : 'rgba(28,61,46,0.65)', fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', cursor: 'pointer', border: m.label === 'May 2026' ? 0 : '1px solid rgba(28,61,46,0.15)' }}>{m.short}</span>
            ))}
          </div>
        </div>

        {/* KPI row */}
        <SectionLabel gold>KEY METRICS · MAY 2026</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginTop: 14, marginBottom: 32 }}>
          <KpiCard label="Total Income"   value={fmt(d.snapshot.income)}                  sub="vs last month +0.1%"   accent="primary" />
          <KpiCard label="Total Expenses" value={fmt(d.snapshot.expenses)}                sub="vs last month +1.1%"   accent="danger"  />
          <KpiCard label="Net Cash Flow"  value={fmt(d.snapshot.net, {signed:true})}      sub="vs last month −$65"    accent="primary" />
          <KpiCard label="Savings Rate"   value={pct(d.snapshot.savings_rate)}            sub="goal: 20%+ — crushing it" accent="gold" />
        </div>

        {/* Two columns: top spending + month snapshot */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 16, marginBottom: 32 }}>
          {/* Top spending table */}
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>TOP SPENDING · THIS MONTH</SectionLabel>
            <ColHeader widths={['1.4fr','0.9fr','0.9fr','1.1fr','0.9fr']} cols={[
              { label: 'Category' },
              { label: 'Spent', align: 'right' },
              { label: 'Budget', align: 'right' },
              { label: '% of Budget' },
              { label: 'Status', align: 'right' },
            ]} />
            {top.map((r,i) => {
              const p = r.spent / r.budget * 100;
              return (
                <DataRow key={r.cat} widths={['1.4fr','0.9fr','0.9fr','1.1fr','0.9fr']} zebra={i % 2 === 1} last={i === top.length - 1} cols={[
                  { content: <span style={{ fontWeight: 500 }}>{r.cat}</span> },
                  { content: fmt(r.spent), align: 'right', num: true },
                  { content: fmt(r.budget), align: 'right', num: true },
                  { content: <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ flex: 1 }}><Progress pct={p} status={r.status} height={6} /></div>
                      <div style={{ fontVariantNumeric: 'tabular-nums', fontSize: 11, color: 'rgba(28,61,46,0.65)', minWidth: 34, textAlign: 'right' }}>{p.toFixed(0)}%</div>
                    </div> },
                  { content: <Chip status={r.status} />, align: 'right' },
                ]} />
              );
            })}
          </div>

          {/* Month Snapshot */}
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>MONTH SNAPSHOT</SectionLabel>
            <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['Income',          fmt(d.snapshot.income)],
                ['Expenses',        fmt(d.snapshot.expenses)],
                ['Net Cash Flow',   fmt(d.snapshot.net, {signed:true})],
                ['Savings Rate',    pct(d.snapshot.savings_rate)],
                ['Avg Daily Spend', fmt(d.snapshot.avg_daily)],
                ['Transactions',    d.snapshot.transactions + ''],
                ['Largest Expense', fmt(d.snapshot.largest_expense) + ' · Rent'],
              ].map(([k,v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(28,61,46,0.06)', paddingBottom: 8 }}>
                  <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 10.5, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(28,61,46,0.55)' }}>{k}</span>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 16, color: 'var(--pal-primary, #1C3D2E)', fontVariantNumeric: 'tabular-nums' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spending Breakdown — donut + AI Insights side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {/* Donut + legend */}
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>SPENDING BREAKDOWN</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 18, padding: 18, alignItems: 'center' }}>
              <Donut data={breakdown} total={totalSpend} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 6 }}>
                {breakdown.slice(0,12).map((s,i) => (
                  <div key={s.cat} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Jost,sans-serif', fontSize: 11.5, color: '#1C3D2E' }}>
                    <span style={{ width: 9, height: 9, background: donutColor(i), borderRadius: 1 }}></span>
                    <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', opacity: 0.85 }}>{s.cat}</span>
                    <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}>{((s.amount/totalSpend)*100).toFixed(0)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Insights panel — feature differentiator */}
          <AiInsightsPanel />
        </div>

        <div style={{ height: 28 }}></div>
        <SheetFooter note="Do not distribute without license" />
      </div>
    </div>
  );
}

/* ---------- DONUT chart ---------- */
function donutColor(i) {
  // 12-step palette derived from Forest → Canopy → Cream + Gold accent
  const ramp = ['#1C3D2E','#2D5C45','#3C7558','#4F8D6B','#67A682','#8FAF7E','#C5A95A','#9E7E3F','#7d6420','#5e1f1f','#832f30','#C8873A'];
  return ramp[i % ramp.length];
}
function Donut({ data, total, size = 180 }) {
  // build SVG arc segments
  const r = size/2 - 10, cx = size/2, cy = size/2;
  let acc = 0;
  const arcs = data.map((d, i) => {
    const a0 = acc / total * 2 * Math.PI - Math.PI/2;
    acc += d.amount;
    const a1 = acc / total * 2 * Math.PI - Math.PI/2;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const large = (a1 - a0) > Math.PI ? 1 : 0;
    return { path: `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`, color: donutColor(i) };
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      {arcs.map((a,i) => <path key={i} d={a.path} fill={a.color} />)}
      <circle cx={cx} cy={cy} r={r * 0.58} fill="var(--pal-bg, #FAF8F2)" />
      <text x={cx} y={cy - 6} textAnchor="middle" style={{ fontFamily: 'Jost,sans-serif', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', fill: 'rgba(28,61,46,0.55)' }}>TOTAL</text>
      <text x={cx} y={cy + 18} textAnchor="middle" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 22, fill: 'var(--pal-primary, #1C3D2E)' }}>{fmt(total)}</text>
    </svg>
  );
}

/* ---------- AI Insights panel — automatically computed callouts ---------- */
function AiInsightsPanel() {
  const insights = [
    { tag: 'LEAK',   icon: '⚡', title: 'Dining is creeping up.',     body: 'Dec → May: $380 → $922 per month. That\'s $9.7K/yr on dining if it holds.',  status: 'over' },
    { tag: 'SUBS',   icon: '⚡', title: '12 active subscriptions.',   body: 'You added 9 in the last 6 months. Hidden cost: $132/mo.',                    status: 'fair' },
    { tag: 'WIN',    icon: '✓',  title: 'Emergency fund is healthy.', body: '3.3 months of expenses parked in Ally Savings. Above your 3-month goal.',     status: 'on'   },
  ];
  return (
    <div style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '7px 14px', fontFamily: 'Jost,sans-serif', fontWeight: 500, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, background: 'var(--pal-mid, #2D5C45)' }}>
        <span style={{ display: 'inline-block', width: 3, height: 14, background: 'var(--pal-accent, #C5A95A)' }}></span>
        AUTO INSIGHTS · WHAT THE NUMBERS SAY
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {insights.map(i => (
          <div key={i.title} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ width: 36, height: 36, borderRadius: 2, background: i.status === 'on' ? 'rgba(22,163,74,0.18)' : i.status === 'fair' ? 'rgba(197,169,90,0.20)' : 'rgba(131,47,48,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i.status === 'on' ? '#86efac' : i.status === 'fair' ? '#C5A95A' : '#fca5a5', fontSize: 18 }}>{i.icon}</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 15, lineHeight: 1.25 }}>{i.title}</div>
              <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 11.5, fontWeight: 300, lineHeight: 1.5, opacity: 0.85, marginTop: 4 }}>{i.body}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '10px 16px', borderTop: '1px solid rgba(250,248,242,0.10)', fontFamily: 'Jost,sans-serif', fontSize: 10, letterSpacing: '0.12em', color: 'var(--pal-accent, #C5A95A)' }}>
        Pipe these into Claude / ChatGPT for a deeper read →
      </div>
    </div>
  );
}

Object.assign(window, { StartHereTab, DashboardTab });

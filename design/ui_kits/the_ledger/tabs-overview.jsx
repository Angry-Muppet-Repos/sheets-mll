/* =====================================================================
   The Ledger v1 — Dashboard (business KPIs, escrow-aware snapshot,
   donut, AI Insights) + the shared Donut / AiInsights pieces.
   ===================================================================== */

function DashboardTab() {
  const d = window.CC_DATA;
  const top = d.top_spending;
  const breakdown = d.breakdown;
  const totalSpend = breakdown.reduce((a, b) => a + b.amount, 0);

  return (
    <div>
      <SheetHeader tab="Dashboard" subLabel="VIEWING MONTH · JUNE 2026" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>

        {/* Month selector */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <SectionLabel>VIEWING MONTH</SectionLabel>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 30, color: 'var(--pal-primary, #1C3D2E)' }}>June 2026</div>
              <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.55)' }}>← change to update all figures</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {d.months.map(m => (
              <span key={m.label} style={{ padding: '6px 11px', borderRadius: 2, background: m.label === 'Jun 2026' ? 'var(--pal-primary, #1C3D2E)' : 'transparent', color: m.label === 'Jun 2026' ? '#FAF8F2' : 'rgba(28,61,46,0.65)', fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', cursor: 'pointer', border: m.label === 'Jun 2026' ? 0 : '1px solid rgba(28,61,46,0.15)' }}>{m.short}</span>
            ))}
          </div>
        </div>

        {/* KPI row — REVENUE · EXPENSES · NET PROFIT · MARGIN */}
        <SectionLabel gold>KEY METRICS · JUNE 2026</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginTop: 14, marginBottom: 32 }}>
          <KpiCard label="Revenue"       value={fmt(d.snapshot.revenue)}             sub="vs last month +23.2%" accent="primary" />
          <KpiCard label="Expenses"      value={fmt(d.snapshot.expenses)}            sub="vs last month +31.0%" accent="danger" />
          <KpiCard label="Net Profit"    value={fmt(d.snapshot.net, { signed: true })} sub="vs last month +$614" accent="primary" />
          <KpiCard label="Profit Margin" value={pct(d.snapshot.margin)}              sub="vs last month −2.5 pts" accent="gold" />
        </div>

        {/* Two columns: top spending + month snapshot */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 16, marginBottom: 32 }}>
          {/* Top spending vs the Monthly Target column on Categories */}
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>TOP SPENDING · THIS MONTH</SectionLabel>
            <ColHeader widths={['1.6fr','0.8fr','0.8fr','1.1fr','0.9fr']} cols={[
              { label: 'Category' },
              { label: 'Spent', align: 'right' },
              { label: 'Target', align: 'right' },
              { label: '% of Target' },
              { label: 'Status', align: 'right' },
            ]} />
            {top.map((r, i) => {
              const p = r.spent / r.budget * 100;
              return (
                <DataRow key={r.cat} widths={['1.6fr','0.8fr','0.8fr','1.1fr','0.9fr']} zebra={i % 2 === 1} last={i === top.length - 1} cols={[
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
                ['Revenue',              fmt(d.snapshot.revenue)],
                ['Expenses',             fmt(d.snapshot.expenses)],
                ['Net Profit',           fmt(d.snapshot.net, { signed: true })],
                ['Profit Margin',        pct(d.snapshot.margin)],
                ['Invoices Outstanding', fmt(d.snapshot.invoices_outstanding)],
                ['Tax Escrow Balance',   fmt(d.snapshot.escrow_balance)],
                ['Transactions',         d.snapshot.transactions + ''],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(28,61,46,0.06)', paddingBottom: 8 }}>
                  <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 10.5, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(28,61,46,0.55)' }}>{k}</span>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 16, color: 'var(--pal-primary, #1C3D2E)', fontVariantNumeric: 'tabular-nums' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spending breakdown donut + AI Insights */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>SPENDING BREAKDOWN</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 18, padding: 18, alignItems: 'center' }}>
              <Donut data={breakdown} total={totalSpend} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 6 }}>
                {breakdown.slice(0, 12).map((s, i) => (
                  <div key={s.cat} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Jost,sans-serif', fontSize: 11.5, color: '#1C3D2E' }}>
                    <span style={{ width: 9, height: 9, background: donutColor(i), borderRadius: 1 }}></span>
                    <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', opacity: 0.85 }}>{s.cat}</span>
                    <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}>{((s.amount / totalSpend) * 100).toFixed(0)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <AiInsightsPanel />
        </div>

        <div style={{ height: 28 }}></div>
        <SheetFooter />
      </div>
    </div>
  );
}

/* ---------- DONUT chart ---------- */
function donutColor(i) {
  // 12-step ramp Forest → Canopy → Gold → Garnet (Foundation DONUT_RAMP)
  const ramp = ['#1C3D2E', '#2D5C45', '#3E7E5C', '#5C9D72', '#8FAF7E', '#C5A95A',
    '#D4B86C', '#C8873A', '#A65B30', '#832F30', '#6B2528', '#4A1A1C'];
  return ramp[i % ramp.length];
}

function Donut({ data, total, size = 180 }) {
  const r = size / 2, hole = r * 0.62;
  let acc = 0;
  const segs = data.map((s, i) => {
    const start = acc / total * Math.PI * 2 - Math.PI / 2;
    acc += s.amount;
    const end = acc / total * Math.PI * 2 - Math.PI / 2;
    const large = end - start > Math.PI ? 1 : 0;
    const x1 = r + r * Math.cos(start), y1 = r + r * Math.sin(start);
    const x2 = r + r * Math.cos(end),   y2 = r + r * Math.sin(end);
    return <path key={i} d={`M ${r} ${r} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`} fill={donutColor(i)} />;
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {segs}
      <circle cx={r} cy={r} r={hole} fill="#FAF8F2" />
      <text x={r} y={r - 6} textAnchor="middle" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 21, fill: '#1C3D2E' }}>{fmt(total)}</text>
      <text x={r} y={r + 14} textAnchor="middle" style={{ fontFamily: 'Jost,sans-serif', fontSize: 9, letterSpacing: '0.14em', fill: 'rgba(28,61,46,0.55)' }}>JUN EXPENSES</text>
    </svg>
  );
}

/* ---------- AI Insights panel — the LLM-ready wedge ---------- */
function AiInsightsPanel() {
  const insights = window.CC_DATA.ai_insights;
  return (
    <div style={{ background: 'var(--pal-primary, #1C3D2E)', borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '7px 14px', fontFamily: 'Jost,sans-serif', fontWeight: 500, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--pal-accent, #C5A95A)', borderBottom: '1px solid rgba(250,248,242,0.10)' }}>
        AI INSIGHTS · FROM YOUR NUMBERS
      </div>
      <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        {insights.map(ins => (
          <div key={ins.tag}>
            <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 9.5, letterSpacing: '0.2em', color: 'var(--pal-accent, #C5A95A)' }}>{ins.tag}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, color: '#FAF8F2', marginTop: 5, lineHeight: 1.45 }}>{ins.text}</div>
          </div>
        ))}
        <div style={{ marginTop: 'auto', fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 10.5, color: 'rgba(250,248,242,0.6)' }}>
          Attach this sheet to Claude or ChatGPT — a hidden _Schema tab tells it how to read your books.
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DashboardTab, Donut, donutColor, AiInsightsPanel });

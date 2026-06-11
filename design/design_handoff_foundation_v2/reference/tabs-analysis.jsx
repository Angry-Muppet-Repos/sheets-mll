/* =====================================================================
   ANALYSIS TABS — Trends, Health Score, Net Worth
   ===================================================================== */

/* ---------- TRENDS ---------- */
function TrendsTab() {
  const all = window.CC_DATA.months_24;
  const [window_, setWindow] = React.useState(6);
  const months = all.slice(-window_);
  const windowLabel = months[0].label + ' – ' + months[months.length-1].label;

  return (
    <div>
      <SheetHeader tab="Trends" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>

        {/* Window toggle */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
          <SectionLabel gold sub={`${months.length} MONTHS · ${windowLabel.toUpperCase()}`}>INCOME VS EXPENSES</SectionLabel>
          <WindowToggle value={window_} onChange={setWindow} />
        </div>

        {/* Hero chart — income vs expenses w/ savings rate overlay */}
        <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, padding: 22, marginBottom: 22 }}>
          <IncomeExpensesChart months={months} />
          <div style={{ display: 'flex', gap: 22, marginTop: 14, fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.75)' }}>
            <Legend swatch="var(--pal-primary, #1C3D2E)" label="Income" />
            <Legend swatch="var(--pal-mid, #2D5C45)" label="Expenses" pattern="diag" />
            <Legend swatch="var(--pal-accent, #C5A95A)" label="Savings Rate" line />
          </div>
        </div>

        {/* Window-windowed table */}
        <SectionLabel gold sub={`${months.length}-MONTH WINDOW`}>INCOME VS EXPENSES · TABLE</SectionLabel>
        <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden', marginTop: 12, marginBottom: 22 }}>
          <ColHeader widths={['1fr','1fr','1fr','1fr','1fr']} cols={[
            { label: 'Month' },
            { label: 'Income', align: 'right' },
            { label: 'Expenses', align: 'right' },
            { label: 'Net Cash Flow', align: 'right' },
            { label: 'Savings Rate', align: 'right' },
          ]} />
          {months.map((m,i) => (
            <DataRow key={m.label} widths={['1fr','1fr','1fr','1fr','1fr']} zebra={i % 2 === 1} last={false} cols={[
              { content: <span style={{ fontWeight: 500 }}>{m.label}</span> },
              { content: fmt(m.income), align: 'right', num: true },
              { content: fmt(m.expenses), align: 'right', num: true },
              { content: fmt(m.net, {signed:true}), align: 'right', num: true, bold: true },
              { content: pct(m.savings_rate), align: 'right', num: true },
            ]} />
          ))}
          <DataRow widths={['1fr','1fr','1fr','1fr','1fr']} zebra={false} last={true} cols={[
            { content: <span style={{ fontWeight: 600, fontFamily: 'Jost,sans-serif', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pal-mid, #2D5C45)' }}>{months.length}-Month Total</span> },
            { content: fmt(months.reduce((a,m)=>a+m.income,0)), align: 'right', num: true, bold: true },
            { content: fmt(months.reduce((a,m)=>a+m.expenses,0)), align: 'right', num: true, bold: true },
            { content: fmt(months.reduce((a,m)=>a+m.net,0), {signed:true}), align: 'right', num: true, bold: true },
            { content: pct(months.reduce((a,m)=>a+m.savings_rate,0)/months.length), align: 'right', num: true, bold: true },
          ]} />
        </div>

        {/* Spending by category — sparkline list */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
          <div>
            <SectionLabel gold sub="WITH 6-MONTH SPARKLINES">SPENDING BY CATEGORY</SectionLabel>
            <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden', marginTop: 12 }}>
              {[
                { cat: 'Food & Dining',     vals: [380, 540, 685, 760, 855, 922], delta: '+142%', status: 'over' },
                { cat: 'Subscriptions',     vals: [48, 78, 95, 124, 162, 180],     delta: '+275%', status: 'over' },
                { cat: 'Housing',           vals: [2400, 2400, 2400, 2400, 2400, 2400], delta: '0%',  status: 'on' },
                { cat: 'Transportation',    vals: [520, 540, 510, 580, 555, 540],  delta: '+4%',   status: 'on' },
                { cat: 'Shopping',          vals: [320, 410, 460, 520, 580, 618],  delta: '+93%',  status: 'fair' },
                { cat: 'Utilities',         vals: [340, 355, 360, 370, 365, 360],  delta: '+6%',   status: 'on' },
                { cat: 'Entertainment',     vals: [180, 195, 210, 225, 240, 255],  delta: '+42%',  status: 'fair' },
                { cat: 'Personal Care',     vals: [160, 175, 170, 165, 175, 180],  delta: '+12%',  status: 'on' },
              ].map((r,i,arr) => (
                <div key={r.cat} style={{ display: 'grid', gridTemplateColumns: '1.3fr 1.8fr 0.7fr 0.6fr', gap: 14, alignItems: 'center', padding: '10px 14px', background: i%2===1 ? 'var(--pal-zebra, #EEF2EC)' : 'transparent', borderBottom: i < arr.length-1 ? '1px solid rgba(28,61,46,0.06)' : 0, fontFamily: 'Jost,sans-serif', fontSize: 12.5, color: 'var(--pal-primary, #1C3D2E)' }}>
                  <div style={{ fontWeight: 500 }}>{r.cat}</div>
                  <Sparkline vals={r.vals} status={r.status} />
                  <div style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600, textAlign: 'right', color: r.status === 'over' ? '#832f30' : r.status === 'fair' ? '#7d6420' : '#0F7A37' }}>{r.delta}</div>
                  <div style={{ textAlign: 'right' }}><Chip status={r.status} /></div>
                </div>
              ))}
            </div>
          </div>

          {/* 6-month summary card */}
          <div>
            <SectionLabel gold>{months.length}-MONTH KEY INSIGHTS</SectionLabel>
            <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, padding: 18, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {(() => {
                const sorted = [...months].sort((a,b) => b.savings_rate - a.savings_rate);
                const bestSave = sorted[0];
                const sortedI = [...months].sort((a,b) => b.income - a.income);
                const highIncome = sortedI[0];
                const sortedE = [...months].sort((a,b) => a.expenses - b.expenses);
                const lowExp = sortedE[0];
                const avgI = months.reduce((a,m)=>a+m.income,0)/months.length;
                const avgE = months.reduce((a,m)=>a+m.expenses,0)/months.length;
                const avgSr = months.reduce((a,m)=>a+m.savings_rate,0)/months.length;
                const totalSaved = months.reduce((a,m)=>a+m.net,0);
                return [
                  ['BEST SAVINGS MONTH', bestSave.label, pct(bestSave.savings_rate) + ' rate'],
                  ['HIGHEST INCOME',     highIncome.label, fmt(highIncome.income)],
                  ['LOWEST EXPENSE',     lowExp.label, fmt(lowExp.expenses)],
                  ['AVG MONTHLY INCOME', fmt(avgI), months.length + '-mo'],
                  ['AVG MONTHLY EXP',    fmt(avgE), months.length + '-mo'],
                  ['AVG SAVINGS RATE',   pct(avgSr),  months.length + '-mo'],
                  ['TOTAL SAVED',        fmt(totalSaved), months.length + '-mo'],
                ];
              })().map(([k,v,sub]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10, borderBottom: '1px solid rgba(28,61,46,0.06)', paddingBottom: 8 }}>
                  <div>
                    <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(28,61,46,0.55)' }}>{k}</div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 13.5, color: 'var(--pal-primary, #1C3D2E)', marginTop: 3 }}>{sub}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 18, color: 'var(--pal-primary, #1C3D2E)', fontVariantNumeric: 'tabular-nums' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 22 }}></div>
        <SheetFooter note="Trends update automatically as transactions are imported" />
      </div>
    </div>
  );
}

/* ---------- Income vs Expenses chart (grouped bar + line overlay) ---------- */
function IncomeExpensesChart({ months }) {
  const W = 880, H = 240, pad = { l: 56, r: 50, t: 12, b: 32 };
  const innerW = W - pad.l - pad.r, innerH = H - pad.t - pad.b;
  const maxY = Math.max(...months.flatMap(m => [m.income, m.expenses])) * 1.05;
  const minR = 0, maxR = 50;
  const bw = innerW / months.length;
  // Tighten gap when there are many months
  const gap = months.length <= 6 ? 14 : months.length <= 12 ? 6 : 3;
  const bw2 = Math.max(2, (bw - gap) / 2);
  // Show every Nth label only
  const labelEvery = months.length <= 6 ? 1 : months.length <= 12 ? 2 : 4;

  const linePts = months.map((m, i) => {
    const x = pad.l + i * bw + bw / 2;
    const y = pad.t + innerH - (m.savings_rate - minR) / (maxR - minR) * innerH;
    return [x, y];
  });
  const path = 'M ' + linePts.map(p => p.join(' ')).join(' L ');

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      {/* y axis ticks */}
      {[0, 0.25, 0.5, 0.75, 1].map(t => {
        const y = pad.t + innerH - t * innerH;
        const v = (maxY * t);
        return (
          <g key={t}>
            <line x1={pad.l} y1={y} x2={W - pad.r} y2={y} stroke="rgba(28,61,46,0.08)" strokeWidth="1" />
            <text x={pad.l - 8} y={y + 4} textAnchor="end" style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fill: 'rgba(28,61,46,0.55)' }}>${(v/1000).toFixed(0)}k</text>
          </g>
        );
      })}
      {/* Bars */}
      {months.map((m, i) => {
        const x = pad.l + i * bw + gap/2;
        const hi = (m.income    / maxY) * innerH;
        const he = (m.expenses  / maxY) * innerH;
        const showLabel = i % labelEvery === 0 || i === months.length - 1;
        return (
          <g key={m.label + i}>
            <rect x={x}            y={pad.t + innerH - hi} width={bw2} height={hi} fill="var(--pal-primary, #1C3D2E)" />
            <rect x={x + bw2 + 1}  y={pad.t + innerH - he} width={bw2} height={he} fill="var(--pal-mid, #2D5C45)" opacity="0.78" />
            {showLabel && <text x={pad.l + i * bw + bw/2} y={H - 10} textAnchor="middle" style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fill: 'rgba(28,61,46,0.65)', letterSpacing: '0.04em' }}>{m.short}</text>}
          </g>
        );
      })}
      {/* Right axis ticks for % */}
      {[0, 0.25, 0.5, 0.75, 1].map(t => {
        const y = pad.t + innerH - t * innerH;
        return <text key={t} x={W - pad.r + 8} y={y + 4} style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fill: 'var(--pal-accent, #C5A95A)' }}>{(maxR * t).toFixed(0)}%</text>;
      })}
      {/* Savings rate line */}
      <path d={path} fill="none" stroke="var(--pal-accent, #C5A95A)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {linePts.map((p,i) => {
        const showDot = months.length <= 12 || i % 4 === 0 || i === linePts.length - 1;
        return showDot
          ? <circle key={i} cx={p[0]} cy={p[1]} r={months.length <= 6 ? 4 : 3} fill="var(--pal-bg, #FAF8F2)" stroke="var(--pal-accent, #C5A95A)" strokeWidth="2" />
          : null;
      })}
    </svg>
  );
}

/* ---------- Sparkline ---------- */
function Sparkline({ vals, status, w = 140, h = 28 }) {
  const min = Math.min(...vals), max = Math.max(...vals);
  const span = max - min || 1;
  const points = vals.map((v, i) => [i / (vals.length - 1) * (w - 4) + 2, h - 2 - ((v - min) / span) * (h - 8)]);
  const path = 'M ' + points.map(p => p.join(' ')).join(' L ');
  const fill = status === 'over' ? '#832f30' : status === 'fair' ? '#C5A95A' : '#2D5C45';
  const area = `M ${points[0][0]} ${h-2} L ` + points.map(p => p.join(' ')).join(' L ') + ` L ${points[points.length-1][0]} ${h-2} Z`;
  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      <path d={area} fill={fill} opacity="0.10" />
      <path d={path} fill="none" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p,i) => i === points.length-1 ? <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill={fill} /> : null)}
    </svg>
  );
}

function Legend({ swatch, label, line, pattern }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {line
        ? <span style={{ display: 'inline-block', width: 18, height: 0, borderTop: '2.5px solid ' + swatch }}></span>
        : <span style={{ display: 'inline-block', width: 14, height: 14, background: swatch, opacity: pattern ? 0.78 : 1, borderRadius: 1 }}></span>}
      <span>{label}</span>
    </div>
  );
}

/* ---------- Window toggle: 6 / 12 / 24 months ---------- */
function WindowToggle({ value, onChange }) {
  return (
    <div style={{ display: 'inline-flex', background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.18)', borderRadius: 3, padding: 2, fontFamily: 'Jost,sans-serif' }}>
      {[6, 12, 24].map(n => (
        <button
          key={n}
          onClick={() => onChange(n)}
          style={{
            background: value === n ? 'var(--pal-primary, #1C3D2E)' : 'transparent',
            color:      value === n ? '#FAF8F2'                      : 'rgba(28,61,46,0.65)',
            border: 0, borderRadius: 2,
            padding: '5px 14px',
            fontFamily: 'inherit', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >{n} mo</button>
      ))}
    </div>
  );
}

/* ---------- HEALTH SCORE ---------- */
function HealthScoreTab() {
  const h = window.CC_DATA.health;
  return (
    <div>
      <SheetHeader tab="Health Score" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>

        <SectionLabel gold sub="VIEWING: SEE MONTH SELECTOR ON DASHBOARD">COMPOSITE HEALTH SCORE</SectionLabel>

        {/* Big composite block */}
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 22, marginTop: 14, marginBottom: 24 }}>
          <div style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', borderRadius: 4, padding: 24 }}>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', color: 'var(--pal-accent, #C5A95A)' }}>YOUR SCORE</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 92, lineHeight: 1, color: '#FAF8F2' }}>{h.composite}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 22, color: 'var(--pal-accent, #C5A95A)' }}>{h.grade}</div>
            </div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 300, color: '#FAF8F2', opacity: 0.65, marginTop: 4 }}>out of 100 · weighted composite</div>

            {/* Scale */}
            <div style={{ marginTop: 22, display: 'flex', height: 14, borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ flex: 45, background: '#832f30' }}></div>
              <div style={{ flex: 15, background: '#C8873A' }}></div>
              <div style={{ flex: 15, background: '#C5A95A' }}></div>
              <div style={{ flex: 15, background: '#2D5C45' }}></div>
              <div style={{ flex: 10, background: '#16a34a' }}></div>
            </div>
            <div style={{ position: 'relative', height: 14, marginTop: -14, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', left: `${h.composite}%`, top: -3, transform: 'translateX(-50%)', width: 2, height: 20, background: '#FAF8F2', boxShadow: '0 0 0 2px #1C3D2E' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontFamily: 'Jost,sans-serif', fontSize: 9, color: 'rgba(250,248,242,0.55)' }}>
              <span>Critical</span><span>Needs Work</span><span>Fair</span><span>Good</span><span>Excellent</span>
            </div>
          </div>

          {/* Biggest Opportunity callout */}
          <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', color: 'var(--pal-accent, #C5A95A)' }}>⚡ BIGGEST OPPORTUNITY</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 28, lineHeight: 1.15, color: 'var(--pal-primary, #1C3D2E)', marginTop: 10 }}>{h.biggest_opportunity.split('—')[0].trim()}</div>
              <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(28,61,46,0.75)', marginTop: 10 }}>{h.biggest_opportunity.split('—')[1] ? h.biggest_opportunity.split('—')[1].trim() : ''}</div>
            </div>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(28,61,46,0.10)' }}>
              <div>
                <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(28,61,46,0.55)' }}>If you fix this</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 22, color: 'var(--pal-primary, #1C3D2E)', marginTop: 2 }}>72 <span style={{ color: 'rgba(28,61,46,0.30)' }}>→</span> <span style={{ color: '#0F7A37' }}>78</span></div>
              </div>
              <div style={{ flex: 1, fontFamily: 'Jost,sans-serif', fontSize: 11.5, fontWeight: 300, color: 'rgba(28,61,46,0.65)', borderLeft: '1px solid rgba(28,61,46,0.10)', paddingLeft: 18 }}>Cut Food &amp; Dining by 25% next month to hit the 80 "Excellent" threshold by Q3.</div>
            </div>
          </div>
        </div>

        {/* Indicators table */}
        <SectionLabel gold sub="WHAT'S DRIVING YOUR SCORE">FIVE INDICATORS</SectionLabel>
        <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden', marginTop: 12, marginBottom: 24 }}>
          <ColHeader widths={['1.4fr','0.9fr','1.5fr','0.5fr','0.7fr','1.5fr']} cols={[
            { label: 'Indicator' },
            { label: 'Your Value', align: 'right' },
            { label: 'Score' },
            { label: 'Wt', align: 'right' },
            { label: 'Status', align: 'right' },
            { label: 'Benchmark' },
          ]} />
          {h.indicators.map((ind, i) => (
            <DataRow key={ind.name} widths={['1.4fr','0.9fr','1.5fr','0.5fr','0.7fr','1.5fr']} zebra={i%2===1} last={i === h.indicators.length-1} cols={[
              { content: <span style={{ fontWeight: 500 }}>{ind.name}</span> },
              { content: ind.value, align: 'right', num: true },
              { content: <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ flex: 1 }}><Progress pct={ind.score} status={ind.status} height={6} /></div>
                  <div style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600, minWidth: 30, textAlign: 'right' }}>{ind.score}</div>
                </div> },
              { content: ind.weight + '%', align: 'right', num: true },
              { content: <Chip status={ind.status} />, align: 'right' },
              { content: <span style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11.5, color: 'rgba(28,61,46,0.6)' }}>{ind.bench}</span> },
            ]} />
          ))}
        </div>

        <SheetFooter note="Weights are editable in the Health Score tab" />
      </div>
    </div>
  );
}

/* ---------- NET WORTH ---------- */
function NetWorthTab() {
  const nw = window.CC_DATA.net_worth;
  const investTotal = nw.investments.reduce((a,b)=>a+b.value, 0);
  const budgetAssets = nw.budget_accounts.filter(a => a.balance > 0).reduce((a,b)=>a+b.balance, 0);
  const budgetLiabs  = -nw.budget_accounts.filter(a => a.balance < 0).reduce((a,b)=>a+b.balance, 0);

  // Sparkline data (synthetic 6-mo: from current minus monthly net deltas)
  const nwHistory = [205400, 210800, 214900, 217200, 219700, 222640];

  return (
    <div>
      <SheetHeader tab="Net Worth" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>

        {/* Big snapshot card */}
        <div style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', borderRadius: 4, padding: 28, display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 24, alignItems: 'center', marginBottom: 28 }}>
          <div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', color: 'var(--pal-accent, #C5A95A)' }}>NET WORTH SNAPSHOT · MAY 2026</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 56, lineHeight: 1, color: '#FAF8F2', marginTop: 8, fontVariantNumeric: 'tabular-nums' }}>{fmt(nw.total)}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
              <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 13, color: '#86efac', fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>↑ {fmt(nw.change_mo, {signed:true})}</span>
              <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, opacity: 0.65 }}>this month</span>
            </div>
          </div>
          <NetWorthSparkline vals={nwHistory} />
          <BigNum label="TOTAL ASSETS"      val={fmt(nw.assets)} />
          <BigNum label="TOTAL LIABILITIES" val={fmt(nw.liabilities)} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 22 }}>
          {/* Budget accounts */}
          <div>
            <SectionLabel gold sub="AUTO-PULLED FROM ACCOUNTS">BUDGET ACCOUNTS</SectionLabel>
            <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden', marginTop: 12 }}>
              <ColHeader widths={['1.6fr','0.8fr','0.7fr','0.9fr']} cols={[
                { label: 'Account' }, { label: 'Type' }, { label: 'Owner' }, { label: 'Balance', align: 'right' }
              ]} />
              {nw.budget_accounts.map((a,i) => (
                <DataRow key={a.name} widths={['1.6fr','0.8fr','0.7fr','0.9fr']} zebra={i%2===1} last={i === nw.budget_accounts.length-1} cols={[
                  { content: <span style={{ fontWeight: 500 }}>{a.name}</span> },
                  { content: <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.65)' }}>{a.type}</span> },
                  { content: <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.65)' }}>{a.owner}</span> },
                  { content: <span style={{ color: a.balance < 0 ? '#832f30' : 'var(--pal-primary, #1C3D2E)', fontWeight: a.balance < 0 ? 600 : 500 }}>{fmt(a.balance, {signed: a.balance < 0})}</span>, align: 'right', num: true },
                ]} />
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.7fr 0.9fr', background: 'var(--pal-mid, #2D5C45)', color: '#FAF8F2', padding: '10px 12px', fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                <div>Budget Net</div><div></div><div></div>
                <div style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{fmt(budgetAssets - budgetLiabs)}</div>
              </div>
            </div>
          </div>

          {/* Investments */}
          <div>
            <SectionLabel gold sub="ENTER BALANCES DIRECTLY">INVESTMENTS</SectionLabel>
            <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden', marginTop: 12 }}>
              <ColHeader widths={['1.6fr','1fr','0.9fr']} cols={[
                { label: 'Account / Fund' }, { label: 'Type' }, { label: 'Current Value', align: 'right' }
              ]} />
              {nw.investments.map((inv,i) => (
                <DataRow key={inv.name} widths={['1.6fr','1fr','0.9fr']} zebra={i%2===1} last={i === nw.investments.length-1} cols={[
                  { content: <span style={{ fontWeight: 500 }}>{inv.name}</span> },
                  { content: <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.65)' }}>{inv.type}</span> },
                  { content: fmt(inv.value), align: 'right', num: true },
                ]} />
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 0.9fr', background: 'var(--pal-mid, #2D5C45)', color: '#FAF8F2', padding: '10px 12px', fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                <div>Total Investments</div><div></div>
                <div style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{fmt(investTotal)}</div>
              </div>
            </div>
          </div>
        </div>

        <SheetFooter note="Update account balances monthly · Investments entered directly" />
      </div>
    </div>
  );
}

function BigNum({ label, val }) {
  return (
    <div>
      <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 500, letterSpacing: '0.18em', color: 'rgba(250,248,242,0.60)' }}>{label}</div>
      <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 26, color: '#FAF8F2', marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{val}</div>
    </div>
  );
}

function NetWorthSparkline({ vals }) {
  const W = 200, H = 80;
  const min = Math.min(...vals), max = Math.max(...vals);
  const span = max - min || 1;
  const points = vals.map((v, i) => [i / (vals.length - 1) * (W - 8) + 4, H - 6 - ((v - min) / span) * (H - 16)]);
  const path = 'M ' + points.map(p => p.join(' ')).join(' L ');
  const area = `M ${points[0][0]} ${H-2} L ` + points.map(p => p.join(' ')).join(' L ') + ` L ${points[points.length-1][0]} ${H-2} Z`;
  return (
    <div>
      <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 500, letterSpacing: '0.18em', color: 'rgba(250,248,242,0.60)' }}>6-MONTH TREND</div>
      <svg width={W} height={H} style={{ marginTop: 4, display: 'block' }}>
        <path d={area} fill="#C5A95A" opacity="0.20" />
        <path d={path} fill="none" stroke="#C5A95A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p,i) => i === points.length - 1
          ? <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#C5A95A" stroke="#1C3D2E" strokeWidth="2" />
          : <circle key={i} cx={p[0]} cy={p[1]} r="2" fill="#C5A95A" opacity="0.55" />
        )}
      </svg>
    </div>
  );
}

Object.assign(window, { TrendsTab, HealthScoreTab, NetWorthTab });

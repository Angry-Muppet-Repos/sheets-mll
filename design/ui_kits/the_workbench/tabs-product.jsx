/* =====================================================================
   The Workbench v1 — Product View (the decision tab, dropdown-selected)
   + Sales Log + the StubTab for everything else.
   ===================================================================== */

function ProductViewTab() {
  const d = window.CC_DATA;
  const v = d.product_view;
  const maxTrend = Math.max(...v.trend12);

  return (
    <div>
      <SheetHeader tab="Product View" subLabel="SELECTED · WEDDING SUITE NO. 4" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Product View" desc="One product, every angle. Pick from the dropdown — works the same at 8 products or 800." />

        {/* Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
          <SectionLabel>PRODUCT</SectionLabel>
          <YellowInput width={220} align="center">{v.selected} ▾</YellowInput>
          <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.55)' }}>← a dropdown, not pills — scales to hundreds</span>
        </div>

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 28 }}>
          <KpiCard label="Net This Month" value={fmt(v.net_month)} sub="vs last month +26.2%" accent="primary" />
          <KpiCard label="Net Lifetime"   value={fmt(v.net_life)}  sub="since listing, after fees" accent="primary" />
          <KpiCard label="Units Lifetime" value={v.units_life + ''} sub="across all channels" accent="mid" />
          <KpiCard label="Last Sale"      value={v.last_sale}      sub="staleness alarm at 60 days" accent="gold" />
        </div>

        {/* Trend + channel split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, marginBottom: 24 }}>
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>NET REVENUE · TRAILING 12 MONTHS</SectionLabel>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, padding: '20px 18px 8px', height: 150 }}>
              {v.trend12.map((n, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: '100%', height: Math.max(2, n / maxTrend * 110), background: i === v.trend12.length - 1 ? 'var(--pal-accent, #C5A95A)' : 'var(--pal-primary, #1C3D2E)', borderRadius: '2px 2px 0 0' }}></div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 18px 14px', fontFamily: 'Jost,sans-serif', fontSize: 9.5, color: 'rgba(28,61,46,0.5)' }}>
              <span>Jul ’25</span><span>listed in Jun ’25 · ad spend began Feb ’26</span><span>Jun ’26</span>
            </div>
          </div>

          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>CHANNEL SPLIT · LIFETIME</SectionLabel>
            <ColHeader widths={['1fr','0.7fr','0.8fr','0.8fr']} cols={[
              { label: 'Channel' }, { label: 'Units', align: 'right' }, { label: 'Fees', align: 'right' }, { label: 'Net', align: 'right' },
            ]} />
            {v.channels.map((c, i) => (
              <DataRow key={c.ch} widths={['1fr','0.7fr','0.8fr','0.8fr']} zebra={i % 2 === 1} last={i === v.channels.length - 1} cols={[
                { content: <span style={{ fontWeight: 500 }}>{c.ch}</span> },
                { content: c.units + '', align: 'right', num: true },
                { content: fmt(c.fees), align: 'right', num: true },
                { content: <strong>{fmt(c.net)}</strong>, align: 'right', num: true },
              ]} />
            ))}
          </div>
        </div>

        {/* Spend verdict + funnel + checklist */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 0.9fr', gap: 16, marginBottom: 24 }}>
          <div style={{ background: 'var(--pal-primary, #1C3D2E)', borderRadius: 4, padding: '18px 20px' }}>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--pal-accent, #C5A95A)' }}>MARKETING vs NET</div>
            <div style={{ display: 'flex', gap: 22, marginTop: 12 }}>
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 24, color: '#FAF8F2' }}>{fmt(v.spend.life)}</div>
                <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, color: 'rgba(250,248,242,0.6)' }}>spend lifetime</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 24, color: '#FAF8F2' }}>{v.spend.roas.toFixed(1)}×</div>
                <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, color: 'rgba(250,248,242,0.6)' }}>net per ad dollar</div>
              </div>
            </div>
            <div style={{ marginTop: 14 }}><Chip status={v.spend.verdict}>Scale it</Chip></div>
          </div>

          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>FUNNEL · FROM YOUR STATS LOG</SectionLabel>
            <ColHeader widths={['0.7fr','0.9fr','0.9fr','0.8fr','0.8fr']} cols={[
              { label: 'Month' }, { label: 'Views', align: 'right' }, { label: 'Favorites', align: 'right' },
              { label: 'Orders', align: 'right' }, { label: 'Conv', align: 'right' },
            ]} />
            {v.funnel.map((f, i) => (
              <DataRow key={f.month} widths={['0.7fr','0.9fr','0.9fr','0.8fr','0.8fr']} zebra={i % 2 === 1} last={i === v.funnel.length - 1} cols={[
                { content: f.month },
                { content: f.views.toLocaleString(), align: 'right', num: true },
                { content: f.favs + '', align: 'right', num: true },
                { content: f.orders + '', align: 'right', num: true },
                { content: pct(f.conv), align: 'right', num: true },
              ]} />
            ))}
          </div>

          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>CHECKLIST</SectionLabel>
            <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div><Progress pct={v.checklist.progress} status="on" height={8} /></div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 22, color: 'var(--pal-primary, #1C3D2E)' }}>{v.checklist.progress}%</div>
              <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.7)' }}>Stage: <strong>{v.checklist.stage}</strong></div>
              <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.7)' }}>Next: <strong>{v.checklist.next}</strong></div>
            </div>
          </div>
        </div>

        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', marginBottom: 24 }}>
          Cash basis from your Sales Log; stats are what you logged. Figures compute on demand for the selected product — nothing here slows down as the catalog grows.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

/* =====================================================================
   Sales Log — the append-only money record.
   ===================================================================== */
function SalesLogTab() {
  const d = window.CC_DATA;
  const widths = ['0.6fr', '1.6fr', '0.8fr', '0.5fr', '0.6fr', '0.6fr', '0.7fr'];
  return (
    <div>
      <SheetHeader tab="Sales Log" subLabel="58 ROWS THIS MONTH" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Sales Log" desc="One row when money lands. Leave Fees blank and Net computes from your channel defaults." />

        <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)', marginBottom: 14 }}>
          <SectionLabel dark gold>RECENT SALES · 10,000-ROW CAPACITY</SectionLabel>
          <ColHeader widths={widths} cols={[
            { label: 'Date', align: 'right' }, { label: 'Product' }, { label: 'Channel' },
            { label: 'Units', align: 'right' }, { label: 'Gross', align: 'right' },
            { label: 'Fees', align: 'right' }, { label: 'Net', align: 'right' },
          ]} />
          {d.sales_recent.map((r, i) => (
            <DataRow key={i} widths={widths} zebra={i % 2 === 1} last={i === d.sales_recent.length - 1} cols={[
              { content: <YellowInput small width={46} align="right">{r.date}</YellowInput>, align: 'right' },
              { content: <YellowInput small width={150}>{r.product} ▾</YellowInput> },
              { content: <YellowInput small width={62}>{r.ch} ▾</YellowInput> },
              { content: <YellowInput small width={24} align="right">{r.units}</YellowInput>, align: 'right' },
              { content: <YellowInput small width={40} align="right">{fmt(r.gross)}</YellowInput>, align: 'right' },
              { content: r.fees === null
                  ? <span style={{ opacity: 0.35, fontSize: 11 }}>auto</span>
                  : <YellowInput small width={40} align="right">{fmt(r.fees, { decimals: 2 })}</YellowInput>, align: 'right' },
              { content: <strong style={{ fontVariantNumeric: 'tabular-nums' }}>{fmt(r.net, { decimals: 2 })}</strong>, align: 'right' },
            ]} />
          ))}
        </div>
        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', marginBottom: 24 }}>
          Net = Gross − (Gross × channel fee % + flat fee × Units) when Fees is blank; type the real fee from your payout and it wins. Channel defaults live on the Channels tab — verify your plan's current fees.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

/* ---------- Stub tab ---------- */
function StubTab({ tab, copy }) {
  return (
    <div>
      <SheetHeader tab={tab} />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px', minHeight: 420 }}>
        <TabTitle name={tab} desc={copy} />
        <div style={{ background: 'var(--pal-zebra, #EEF2EC)', border: '1px dashed rgba(28,61,46,0.25)', borderRadius: 4, padding: '36px 28px', textAlign: 'center', fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 12.5, color: 'rgba(28,61,46,0.6)', marginBottom: 28 }}>
          Full layout ships in the workbook build — this kit mocks the five hero tabs:
          Pipeline · Dashboard · Product View · Products · Sales Log.
        </div>
        <SheetFooter />
      </div>
    </div>
  );
}

Object.assign(window, { ProductViewTab, SalesLogTab, StubTab });

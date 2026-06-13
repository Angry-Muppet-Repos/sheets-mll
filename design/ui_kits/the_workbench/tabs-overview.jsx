/* =====================================================================
   The Workbench v1 — Dashboard (portfolio KPIs, top products, snapshot,
   needs-attention strip, AI Insights).
   ===================================================================== */

function DashboardTab() {
  const d = window.CC_DATA;
  const k = d.kpis;

  return (
    <div>
      <SheetHeader tab="Dashboard" subLabel="VIEWING MONTH · JUNE 2026" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <SectionLabel>VIEWING MONTH</SectionLabel>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 30, color: 'var(--pal-primary, #1C3D2E)' }}>June 2026</div>
              <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.55)' }}>← change to update all figures</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['Jan','Feb','Mar','Apr','May','Jun'].map(m => (
              <span key={m} style={{ padding: '6px 11px', borderRadius: 2, background: m === 'Jun' ? 'var(--pal-primary, #1C3D2E)' : 'transparent', color: m === 'Jun' ? '#FAF8F2' : 'rgba(28,61,46,0.65)', fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', cursor: 'pointer', border: m === 'Jun' ? 0 : '1px solid rgba(28,61,46,0.15)' }}>{m}</span>
            ))}
          </div>
        </div>

        {/* KPI row */}
        <SectionLabel gold>PORTFOLIO · JUNE 2026</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginTop: 14, marginBottom: 32 }}>
          <KpiCard label="Net Revenue"     value={fmt(k.net)}       sub={'vs last month ' + k.net_delta} accent="primary" />
          <KpiCard label="Units Sold"      value={k.units + ''}     sub={k.units_delta} accent="mid" />
          <KpiCard label="Marketing Spend" value={fmt(k.spend)}     sub={k.spend_delta} accent="danger" />
          <KpiCard label="Net After Spend" value={fmt(k.net_after)} sub={'vs last month ' + k.net_after_delta} accent="gold" />
        </div>

        {/* Top products + snapshot */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 16, marginBottom: 32 }}>
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>TOP PRODUCTS · THIS MONTH</SectionLabel>
            <ColHeader widths={['1.8fr','0.7fr','0.6fr','1.2fr','0.8fr']} cols={[
              { label: 'Product' }, { label: 'Net', align: 'right' }, { label: 'Units', align: 'right' },
              { label: 'Share of Portfolio' }, { label: 'Status', align: 'right' },
            ]} />
            {d.top_products.map((r, i) => (
              <DataRow key={r.name} widths={['1.8fr','0.7fr','0.6fr','1.2fr','0.8fr']} zebra={i % 2 === 1} last={i === d.top_products.length - 1} cols={[
                { content: <span style={{ fontWeight: 500 }}>{r.name}</span> },
                { content: fmt(r.net), align: 'right', num: true },
                { content: r.units + '', align: 'right', num: true },
                { content: <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1 }}><Progress pct={r.share} status={r.share > 50 ? 'fair' : 'on'} height={6} /></div>
                    <div style={{ fontVariantNumeric: 'tabular-nums', fontSize: 11, color: 'rgba(28,61,46,0.65)', minWidth: 34, textAlign: 'right' }}>{r.share}%</div>
                  </div> },
                { content: <Chip status="on">{r.status}</Chip>, align: 'right' },
              ]} />
            ))}
          </div>

          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>PORTFOLIO SNAPSHOT</SectionLabel>
            <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['Listed Products', d.snapshot.listed + ''],
                ['In Pipeline',     d.snapshot.in_pipeline + ''],
                ['Net This Month',  fmt(d.snapshot.net_mtd)],
                ['Best Seller',     d.snapshot.best],
                ['Stalest Listed',  d.snapshot.stalest],
                ['Sales Rows',      d.snapshot.sales_rows + ''],
              ].map(([kk, v]) => (
                <div key={kk} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(28,61,46,0.06)', paddingBottom: 8, gap: 10 }}>
                  <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 10.5, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(28,61,46,0.55)', whiteSpace: 'nowrap' }}>{kk}</span>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 14, color: 'var(--pal-primary, #1C3D2E)', fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Needs attention + AI insights */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>NEEDS ATTENTION · PIPELINE</SectionLabel>
            <ColHeader widths={['1.5fr','0.8fr','1.6fr','0.7fr']} cols={[
              { label: 'Product' }, { label: 'Stage' }, { label: 'Next Step' }, { label: 'Target', align: 'right' },
            ]} />
            {d.needs_attention.map((r, i) => (
              <DataRow key={r.name} widths={['1.5fr','0.8fr','1.6fr','0.7fr']} zebra={i % 2 === 1} last={i === d.needs_attention.length - 1} cols={[
                { content: <span style={{ fontWeight: 500 }}>{r.name}</span> },
                { content: <span style={{ opacity: 0.7 }}>{r.stage}</span> },
                { content: <span style={{ fontSize: 11.5 }}>{r.next}</span> },
                { content: r.days === null ? <span style={{ opacity: 0.4 }}>—</span> : <Chip status={r.days > 7 ? 'on' : 'fair'}>{r.days + ' d'}</Chip>, align: 'right' },
              ]} />
            ))}
            <div style={{ padding: '10px 14px', fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 10.5, color: 'rgba(28,61,46,0.55)' }}>
              Computed from the Products checklist — tick boxes there and this list updates itself.
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

/* ---------- AI Insights panel — the LLM-ready wedge ---------- */
function AiInsightsPanel() {
  const insights = window.CC_DATA.ai_insights;
  return (
    <div style={{ background: 'var(--pal-primary, #1C3D2E)', borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '7px 14px', fontFamily: 'Jost,sans-serif', fontWeight: 500, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--pal-accent, #C5A95A)', borderBottom: '1px solid rgba(250,248,242,0.10)' }}>
        AI INSIGHTS · FROM YOUR CATALOG
      </div>
      <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        {insights.map(ins => (
          <div key={ins.tag}>
            <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 9.5, letterSpacing: '0.2em', color: 'var(--pal-accent, #C5A95A)' }}>{ins.tag}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, color: '#FAF8F2', marginTop: 5, lineHeight: 1.45 }}>{ins.text}</div>
          </div>
        ))}
        <div style={{ marginTop: 'auto', fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 10.5, color: 'rgba(250,248,242,0.6)' }}>
          Attach this sheet to Claude or ChatGPT — a hidden _Schema tab tells it how to read your catalog.
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DashboardTab, AiInsightsPanel });

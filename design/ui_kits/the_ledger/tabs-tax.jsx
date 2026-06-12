/* =====================================================================
   The Ledger v1 — Tax Center (the hero tab) + P&L.
   Tax Center is the screenshot that sells the product: the quarter
   cards, the escrow gap in Forest-panel daylight, the verbatim
   disclaimer. P&L is the structured report tab.
   ===================================================================== */

function TaxCenterTab() {
  const d = window.CC_DATA;
  const t = d.tax;

  return (
    <div>
      <SheetHeader tab="Tax Center" subLabel={'TAX YEAR ' + t.year + ' · NEXT DUE JUN 15'} />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Tax Center" desc="What to set aside, when it's due, and whether your escrow covers it." />

        {/* INPUTS panel — yellow editable cells */}
        <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden', marginBottom: 24 }}>
          <SectionLabel dark gold>INPUTS · SET ONCE, ADJUST ANYTIME</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18, padding: 18 }}>
            {[
              ['Tax year', <YellowInput width={70} align="center">{t.year}</YellowInput>, ''],
              ['Set-aside preset', <YellowInput width={120} align="center">{t.preset} 25% ▾</YellowInput>, 'Standard · Conservative · Lean · Custom'],
              ['Custom %', <YellowInput width={70} align="center">—</YellowInput>, 'used when preset is Custom'],
              ['Effective income-tax rate', <YellowInput width={70} align="center">{t.effective_income_rate}%</YellowInput>, 'for the estimate detail below'],
              ['Mileage rate', <YellowInput width={70} align="center">{t.mileage_rate.toFixed(3)}</YellowInput>, 'IRS standard rate — verify current year'],
            ].map(([label, input, cap]) => (
              <div key={label}>
                <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(28,61,46,0.55)', marginBottom: 7 }}>{label}</div>
                {input}
                {cap && <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 9.5, color: 'rgba(28,61,46,0.5)', marginTop: 5 }}>{cap}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* QUARTER CARDS */}
        <SectionLabel gold sub={'live from your transactions'}>QUARTERLY ESTIMATED TAXES · {t.year}</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginTop: 14, marginBottom: 24 }}>
          {t.quarters.map(q => (
            <div key={q.q} style={{ background: '#FAF8F2', border: q.current ? '2px solid var(--pal-primary, #1C3D2E)' : '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', padding: '9px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 16 }}>{q.q}</span>
                <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', color: q.current ? 'var(--pal-accent, #C5A95A)' : 'rgba(250,248,242,0.75)' }}>
                  {q.current ? 'DUE ' + q.due.toUpperCase() + ' · 3 DAYS' : 'due ' + q.due}
                </span>
              </div>
              <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 9 }}>
                {[
                  ['Net profit', fmt(q.net), false],
                  ['Recommended', fmt(q.recommended), false],
                  ['Paid', null, true],
                  ['Remaining', fmt(Math.max(0, q.recommended - q.paid)), false],
                ].map(([k, v, yellow]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(28,61,46,0.55)' }}>{k}</span>
                    {yellow
                      ? <YellowInput small width={64} align="right">{fmt(q.paid)}</YellowInput>
                      : <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 14, color: 'var(--pal-primary, #1C3D2E)', fontVariantNumeric: 'tabular-nums' }}>{v}</span>}
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                  <Chip status={q.net === 0 ? 'ahead' : q.status}>{q.net === 0 ? 'Not yet' : (q.status === 'over' ? 'Behind' : q.status === 'fair' ? 'Close' : 'On Track')}</Chip>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ESCROW TRACKER strip — the screenshot moment */}
        <div style={{ background: 'var(--pal-primary, #1C3D2E)', borderRadius: 4, padding: '22px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, alignItems: 'center', marginBottom: 24 }}>
          {[
            ['RECOMMENDED SET-ASIDE YTD', fmt(t.escrow.recommended_ytd), 'through your last complete month'],
            ['IN YOUR TAX ESCROW ACCOUNT', fmt(t.escrow.balance), 'Tax Escrow (Ally) · from Accounts'],
            ['THE GAP', fmt(t.escrow.gap), 'move this before Jun 15'],
          ].map(([k, v, cap], i) => (
            <div key={k} style={{ borderLeft: i > 0 ? '1px solid rgba(250,248,242,0.15)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
              <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--pal-accent, #C5A95A)' }}>{k}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: i === 2 ? 40 : 30, color: '#FAF8F2', marginTop: 6, fontVariantNumeric: 'tabular-nums' }}>{v}</div>
              <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 10.5, color: 'rgba(250,248,242,0.65)', marginTop: 4 }}>{cap}</div>
            </div>
          ))}
        </div>

        {/* ESTIMATE DETAIL panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, marginBottom: 24 }}>
          <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden' }}>
            <SectionLabel dark gold>ESTIMATE DETAIL · YTD THROUGH MAY</SectionLabel>
            <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Net profit YTD', fmt(window.CC_DATA.tax.detail.net_ytd), false],
                ['Less mileage deduction · 310 mi × $' + t.mileage_rate.toFixed(3), '−' + fmt(window.CC_DATA.tax.detail.mileage_deduction), false],
                ['Adjusted profit', fmt(window.CC_DATA.tax.detail.adjusted), false],
                ['SE earnings · × 0.9235', fmt(window.CC_DATA.tax.detail.se_earnings), false],
                ['Self-employment tax · × 15.3%', fmt(window.CC_DATA.tax.detail.se_tax), false],
                ['Income tax · × ' + t.effective_income_rate + '% effective rate', fmt(window.CC_DATA.tax.detail.income_tax), false],
                ['Estimated total', fmt(window.CC_DATA.tax.detail.total), true],
              ].map(([k, v, strong]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(28,61,46,0.06)', paddingBottom: 7 }}>
                  <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11.5, fontWeight: strong ? 600 : 300, color: strong ? 'var(--pal-primary, #1C3D2E)' : 'rgba(28,61,46,0.7)' }}>{k}</span>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: strong ? 18 : 14, color: 'var(--pal-primary, #1C3D2E)', fontVariantNumeric: 'tabular-nums' }}>{v}</span>
                </div>
              ))}
              <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 10.5, color: 'rgba(28,61,46,0.55)', marginTop: 2 }}>
                Estimates only. The detailed estimate runs ≈ 28.8% of profit — if that holds, the Conservative preset fits you better than Standard.
              </div>
            </div>
          </div>

          {/* Set-aside presets reference card */}
          <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden' }}>
            <SectionLabel dark gold>SET-ASIDE PRESETS</SectionLabel>
            <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['Standard', '25%', 'The common rule of thumb for most solo operators.', true],
                ['Conservative', '30%', 'Higher-bracket or state-tax-heavy. Sleep-at-night setting.', false],
                ['Lean', '20%', 'Low bracket, big deductions, or W-2 withholding elsewhere.', false],
                ['Custom', '—', 'You set the % in the yellow cell.', false],
              ].map(([name, p, blurb, active]) => (
                <div key={name} style={{ display: 'flex', gap: 12, alignItems: 'baseline', opacity: active ? 1 : 0.65 }}>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 14, color: 'var(--pal-primary, #1C3D2E)', minWidth: 96 }}>{active ? '✓ ' : ''}{name}</span>
                  <span style={{ fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--pal-accent, #C5A95A)', minWidth: 36 }}>{p}</span>
                  <span style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.65)' }}>{blurb}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DISCLAIMER — verbatim, both build modes, never reworded */}
        <div style={{ background: 'var(--pal-zebra, #EEF2EC)', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, padding: '12px 18px', fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.75)', lineHeight: 1.5 }}>
          {d.disclaimer}
        </div>

        <div style={{ height: 28 }}></div>
        <SheetFooter />
      </div>
    </div>
  );
}

/* =====================================================================
   P&L — monthly / quarterly / YTD profit & loss, Schedule-C-mapped.
   ===================================================================== */
function PnLTab() {
  const d = window.CC_DATA;
  const p = d.pnl;
  const widths = ['1.6fr', '0.9fr', '0.8fr', '0.7fr'];

  return (
    <div>
      <SheetHeader tab="P&L" subLabel={'VIEW · MONTH · JUNE 2026'} />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Profit & Loss" desc="By month, quarter, or year. Every line mapped to its Schedule C box." />

        {/* View selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
          <SectionLabel>VIEW</SectionLabel>
          <YellowInput width={90} align="center">Month ▾</YellowInput>
          <YellowInput width={110} align="center">{p.period} ▾</YellowInput>
          <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.55)' }}>← Month · Quarter · YTD — every figure below re-sums</span>
        </div>

        {/* REVENUE section */}
        <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden', marginBottom: 16 }}>
          <SectionLabel dark gold>REVENUE · BY CLIENT & STREAM</SectionLabel>
          <ColHeader widths={widths} cols={[
            { label: 'Stream' }, { label: 'Source', align: 'left' },
            { label: 'Amount', align: 'right' }, { label: '% of Revenue', align: 'right' },
          ]} />
          {p.revenue.map((r, i) => (
            <DataRow key={r.name} widths={widths} zebra={i % 2 === 1} cols={[
              { content: <span style={{ fontWeight: 500 }}>{r.name}</span> },
              { content: <span style={{ opacity: 0.6, fontSize: 11.5 }}>{d.streams.find(s => s.name === r.name)?.type || ''}</span> },
              { content: fmt(r.amount), align: 'right', num: true },
              { content: ((r.amount / p.revenue_total) * 100).toFixed(1) + '%', align: 'right', num: true },
            ]} />
          ))}
          <DataRow widths={widths} last cols={[
            { content: <span style={{ fontWeight: 700 }}>Total Revenue</span> },
            { content: '' },
            { content: <span style={{ fontWeight: 700 }}>{fmt(p.revenue_total)}</span>, align: 'right', num: true, bold: true },
            { content: '100%', align: 'right', num: true },
          ]} />
        </div>

        {/* EXPENSES section */}
        <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden', marginBottom: 16 }}>
          <SectionLabel dark gold>EXPENSES · SCHEDULE C MAPPED</SectionLabel>
          <ColHeader widths={widths} cols={[
            { label: 'Category' }, { label: 'Schedule C' },
            { label: 'Amount', align: 'right' }, { label: '% of Revenue', align: 'right' },
          ]} />
          {p.expenses.map((e, i) => (
            <DataRow key={e.cat} widths={widths} zebra={i % 2 === 1} last={i === p.expenses.length - 1} cols={[
              { content: <span style={{ fontWeight: e.amount > 0 ? 500 : 300 }}>{e.cat}</span>, muted: e.amount === 0 },
              { content: <span style={{ fontSize: 11, opacity: 0.6 }}>{e.schc}</span> },
              { content: fmt(e.amount), align: 'right', num: true, muted: e.amount === 0 },
              { content: e.amount > 0 ? ((e.amount / p.revenue_total) * 100).toFixed(1) + '%' : '—', align: 'right', num: true, muted: e.amount === 0 },
            ]} />
          ))}
        </div>

        {/* NET PROFIT bar */}
        <div style={{ background: 'var(--pal-primary, #1C3D2E)', borderRadius: 4, padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--pal-accent, #C5A95A)' }}>NET PROFIT · {p.period.toUpperCase()}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 36, color: '#FAF8F2', marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{fmt(p.net)}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--pal-accent, #C5A95A)' }}>PROFIT MARGIN</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 36, color: '#FAF8F2', marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{pct(p.margin)}</div>
          </div>
        </div>
        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', marginBottom: 24 }}>
          Owner draws this period (not in profit): {fmt(p.owner_draws)} — draws and contributions never touch these figures.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

Object.assign(window, { TaxCenterTab, PnLTab });

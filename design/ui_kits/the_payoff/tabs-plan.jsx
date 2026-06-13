/* =====================================================================
   The Payoff v1 — The Plan (the hero tab) + Compare (full side-by-side).
   ===================================================================== */

function fmtM(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

/* Shared: balance timeline as CSS bars with scale anchors */
function Timeline({ tot, height = 110, color = 'var(--pal-primary, #1C3D2E)', anchors = true }) {
  const max = Math.max(...tot);
  const step = Math.max(1, Math.floor(tot.length / 48));
  const bars = tot.filter((_, i) => i % step === 0);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height, padding: '6px 2px 0' }}>
        {bars.map((v, i) => (
          <div key={i} style={{ flex: 1, height: Math.max(2, v / max * (height - 10)), background: color, opacity: v === 0 ? 0.18 : 1, borderRadius: '1px 1px 0 0' }}></div>
        ))}
      </div>
      {anchors && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Jost,sans-serif', fontSize: 9.5, color: 'rgba(28,61,46,0.55)', padding: '4px 2px 0' }}>
          <span>now · {fmtM(tot[0])}</span>
          <span>zero · {window.CC_DATA.kpis.freeDate}</span>
        </div>
      )}
    </div>
  );
}

function PlanTab() {
  const d = window.CC_DATA;
  const inPlan = d.debts.filter(x => x.inPlan && x.status === 'ACTIVE').sort((a, b) => a.order - b.order);
  const tracked = d.debts.filter(x => !x.inPlan);
  const widths = ['0.5fr', '1.6fr', '1fr', '0.7fr', '1.1fr', '1fr', '1.4fr'];
  return (
    <div>
      <SheetHeader tab="The Plan" subLabel="SNOWBALL · $250 EXTRA · 47 MONTHS LEFT" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="The Plan" desc="Pick a strategy, set your extra, and the engine does the rest. Estimates at monthly compounding — your statements are the truth." />

        {/* Strategy + extra (the only two inputs) */}
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.14em', color: 'var(--pal-mid, #2D5C45)', marginBottom: 4 }}>STRATEGY</div>
            <YellowInput width={250}>{d.strategy} ▾</YellowInput>
          </div>
          <div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.14em', color: 'var(--pal-mid, #2D5C45)', marginBottom: 4 }}>EXTRA · MONTHLY</div>
            <YellowInput width={90} align="right">${d.extra}</YellowInput>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
            {d.whatif.map(w => (
              <div key={w.label} style={{ background: '#FAF8F2', border: '1px dashed var(--pal-accent, #C5A95A)', borderRadius: 4, padding: '8px 14px' }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 14, color: 'var(--pal-primary, #1C3D2E)' }}>{w.label}</span>
                <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 10.5, color: 'rgba(28,61,46,0.65)', marginLeft: 8 }}>→ {w.date} · {w.delta} months sooner</span>
              </div>
            ))}
          </div>
        </div>

        {/* Headline */}
        <div style={{ background: 'var(--pal-primary, #1C3D2E)', borderRadius: 4, padding: '22px 26px', display: 'flex', alignItems: 'baseline', gap: 26, marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', color: 'var(--pal-accent, #C5A95A)' }}>DEBT-FREE</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 44, color: '#FAF8F2', lineHeight: 1.05 }}>{d.kpis.freeDate}</div>
          </div>
          {[[d.kpis.monthsLeft + ' months', 'left on this plan'],
            [fmtM(d.kpis.planInterest), 'interest on this plan'],
            [fmtM(d.kpis.savedWindow), 'saved vs minimums · 10-yr window']].map(([v, c]) => (
            <div key={c}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 21, color: '#FAF8F2' }}>{v}</div>
              <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, color: 'rgba(250,248,242,0.65)', marginTop: 2 }}>{c}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 18, marginBottom: 18 }}>
          {/* Payoff order */}
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>PAYOFF ORDER · SNOWBALL</SectionLabel>
            <ColHeader widths={widths} cols={[
              { label: '#' }, { label: 'Debt' }, { label: 'Balance', align: 'right' }, { label: 'APR', align: 'right' },
              { label: 'Payoff', align: 'right' }, { label: 'Interest', align: 'right' }, { label: '' },
            ]} />
            {inPlan.map((x, i) => (
              <DataRow key={x.name} widths={widths} zebra={i % 2 === 1} cols={[
                { content: <span style={{ fontVariantNumeric: 'tabular-nums', opacity: 0.55 }}>{x.order}</span> },
                { content: <span style={{ fontWeight: 500 }}>{x.name}{x.target ? <span style={{ marginLeft: 7, fontSize: 8.5, fontWeight: 700, letterSpacing: '0.1em', color: '#FAF8F2', background: 'var(--pal-accent, #C5A95A)', padding: '1px 6px', borderRadius: 2 }}>TARGET</span> : null}</span> },
                { content: fmtM(x.current), align: 'right', num: true },
                { content: x.apr + '%', align: 'right', num: true },
                { content: <span style={{ fontWeight: 600 }}>{x.payoff}</span>, align: 'right' },
                { content: fmtM(x.interest), align: 'right', num: true, muted: true },
                { content: <div style={{ width: '100%' }}><Progress pct={(1 - x.current / x.start) * 100} height={5} /></div> },
              ]} />
            ))}
            {tracked.map(x => (
              <DataRow key={x.name} widths={widths} cols={[
                { content: <span style={{ opacity: 0.35 }}>—</span> },
                { content: <span style={{ opacity: 0.5 }}>{x.name}</span> },
                { content: <span style={{ opacity: 0.5 }}>{fmtM(x.current)}</span>, align: 'right', num: true },
                { content: <span style={{ opacity: 0.5 }}>{x.apr}%</span>, align: 'right' },
                { content: <Chip status="ahead">tracked · not in plan</Chip>, align: 'right' },
                { content: '' }, { content: '' },
              ]} />
            ))}
          </div>

          {/* Timeline */}
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)', padding: '0 0 10px' }}>
            <SectionLabel dark gold>BALANCE · EVERY MONTH TO ZERO</SectionLabel>
            <div style={{ padding: '4px 14px 0' }}>
              <Timeline tot={d.planTot} height={150} />
            </div>
          </div>
        </div>

        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', marginBottom: 24 }}>
          Projections are estimates at monthly compounding, not financial advice and not a servicing statement. Your lender's figures are the truth — check in monthly with the Balance override column on Debts.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

function CompareTab() {
  const d = window.CC_DATA;
  const cols = [d.compare.snowball, d.compare.avalanche];
  const widths = ['1.7fr', '1fr', '1fr'];
  return (
    <div>
      <SheetHeader tab="Compare" subLabel="SAME MONEY · TWO ROADS" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Compare" desc="Snowball against avalanche, computed in full — same debts, same extra. The trade-off is yours to make; the numbers are not." />

        <div style={{ background: 'var(--pal-accent, #C5A95A)', borderRadius: 4, padding: '12px 18px', fontFamily: 'Jost,sans-serif', fontSize: 13, fontWeight: 500, color: '#1C3D2E', marginBottom: 20 }}>
          {d.compare.verdict}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
          {cols.map(s => (
            <div key={s.label} style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
              <SectionLabel dark gold>{s.label.toUpperCase()} · {s.sub.toUpperCase()}</SectionLabel>
              <div style={{ display: 'flex', gap: 22, padding: '14px 16px 10px', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 26, color: 'var(--pal-primary, #1C3D2E)' }}>{s.date}</div>
                  <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, color: 'rgba(28,61,46,0.55)' }}>debt-free · {s.months} months</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 18, color: 'var(--pal-primary, #1C3D2E)' }}>{fmtM(s.interest)}</div>
                  <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, color: 'rgba(28,61,46,0.55)' }}>total interest</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 12.5, color: 'var(--pal-primary, #1C3D2E)' }}>{s.firstKill}</div>
                  <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, color: 'rgba(28,61,46,0.55)' }}>first win</div>
                </div>
              </div>
              <ColHeader widths={widths} cols={[
                { label: 'Priority order' }, { label: 'Payoff', align: 'right' }, { label: 'Interest', align: 'right' },
              ]} />
              {s.order.map((o, i) => (
                <DataRow key={o.name} widths={widths} zebra={i % 2 === 1} cols={[
                  { content: <span style={{ fontWeight: 500 }}>{i + 1} · {o.name}</span> },
                  { content: o.payoff, align: 'right' },
                  { content: fmtM(o.interest), align: 'right', num: true, muted: true },
                ]} />
              ))}
              <div style={{ padding: '4px 14px 12px' }}>
                <Timeline tot={s.tot} height={86} anchors={false} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', marginBottom: 24 }}>
          Both columns use your extra (${d.extra}/month) — that's the fair comparison. Timelines share a scale. Pick My Order on The Plan and it joins this page as a third column.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

Object.assign(window, { PlanTab, CompareTab, Timeline, fmtM });

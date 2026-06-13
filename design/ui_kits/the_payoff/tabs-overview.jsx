/* =====================================================================
   The Payoff v1 — Dashboard (kill list, KPIs, milestones) + Debts (the
   registry) + StubTab.
   ===================================================================== */

function DashboardTab() {
  const d = window.CC_DATA;
  const npWidths = ['1.5fr', '0.8fr', '0.7fr', '1.6fr'];
  return (
    <div>
      <SheetHeader tab="Dashboard" subLabel="2 DOWN · 3 TO GO · MAY 2030" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Dashboard" desc="Where you stand, what died, and what the plan says happens next." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 22 }}>
          <KpiCard label="TOTAL DEBT NOW" value={fmtM(d.kpis.totalNow)} sub={'of ' + fmtM(d.kpis.startTotal) + ' at the start'} accent="primary" />
          <KpiCard label="PAID OFF TO DATE" value={fmtM(d.kpis.paidOff)} sub="14 months of work" accent="mid" />
          <KpiCard label="DEBT-FREE DATE" value={d.kpis.freeDate} sub={d.kpis.monthsLeft + ' months · snowball + $' + d.extra} accent="gold" />
          <KpiCard label="SAVED vs MINIMUMS" value={fmtM(d.kpis.savedWindow)} sub={'minimums never finish — still ' + fmtM(d.kpis.stillOweMin) + ' owed at 10 yrs'} accent="primary" />
        </div>

        {/* The Kill List */}
        <SectionLabel gold>THE KILL LIST</SectionLabel>
        <div style={{ display: 'flex', gap: 12, margin: '12px 0 24px' }}>
          {d.killList.map(k => (
            <div key={k.name} style={{ background: 'var(--pal-primary, #1C3D2E)', borderRadius: 4, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 16, color: 'var(--pal-accent, #C5A95A)' }}>✓</span>
              <div>
                <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 12.5, color: '#FAF8F2' }}>{k.name}</div>
                <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, color: 'rgba(250,248,242,0.65)' }}>{fmtM(k.amount)} · PAID {k.when}</div>
              </div>
            </div>
          ))}
          <div style={{ border: '1px dashed rgba(28,61,46,0.30)', borderRadius: 4, padding: '10px 16px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: 'rgba(28,61,46,0.55)' }}>next: Auto loan · Jun 2027</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 18, marginBottom: 22 }}>
          {/* Next payments */}
          <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
            <SectionLabel dark gold>THIS MONTH'S PAYMENTS</SectionLabel>
            <ColHeader widths={npWidths} cols={[
              { label: 'Debt' }, { label: 'Due' }, { label: 'Min', align: 'right' }, { label: 'Status' },
            ]} />
            {d.nextPayments.map((p, i) => (
              <DataRow key={p.name} widths={npWidths} zebra={i % 2 === 1} cols={[
                { content: <span style={{ fontWeight: 500 }}>{p.name}</span> },
                { content: <span style={{ opacity: 0.7 }}>{p.due}</span> },
                { content: fmtM(p.min), align: 'right', num: true },
                { content: <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Chip status={p.covered ? 'on' : 'fair'}>{p.covered ? 'covered' : 'upcoming'}</Chip><span style={{ fontSize: 10, color: 'rgba(28,61,46,0.55)' }}>{p.note}</span></span> },
              ]} />
            ))}
          </div>

          {/* Milestones + AI */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)' }}>
              <SectionLabel dark gold>MILESTONES</SectionLabel>
              <div style={{ display: 'flex', gap: 10, padding: '12px 14px', flexWrap: 'wrap' }}>
                {d.milestones.crossed.map(([t, w]) => (
                  <span key={t} style={{ background: 'rgba(28,61,46,0.08)', borderRadius: 999, padding: '5px 12px', fontFamily: 'Jost,sans-serif', fontSize: 10.5, color: 'var(--pal-primary, #1C3D2E)' }}>✓ under {t} · {w}</span>
                ))}
                <span style={{ border: '1px dashed var(--pal-accent, #C5A95A)', borderRadius: 999, padding: '5px 12px', fontFamily: 'Jost,sans-serif', fontSize: 10.5, color: 'rgba(28,61,46,0.6)' }}>under {d.milestones.next[0]} · {d.milestones.next[1]}</span>
              </div>
            </div>
            <div style={{ background: 'var(--pal-primary, #1C3D2E)', borderRadius: 4, padding: '12px 16px' }}>
              <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--pal-accent, #C5A95A)', marginBottom: 6 }}>AI INSIGHTS</div>
              {[['MOMENTUM', 'Two debts down. The Auto loan dies next — every dollar of the old minimums is already working on it.'],
                ['TRADE-OFF', 'Avalanche would save about $970 but delays your next win by 15 months. Momentum has a price; so does interest.'],
                ['LEVER', 'Fifty more dollars a month moves your date up two months. A hundred buys six. The Plan shows it live.']].map(([tag, txt]) => (
                <div key={tag} style={{ margin: '7px 0' }}>
                  <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 8.5, fontWeight: 700, letterSpacing: '0.1em', color: '#1C3D2E', background: 'var(--pal-accent, #C5A95A)', padding: '1px 7px', borderRadius: 2, marginRight: 8 }}>{tag}</span>
                  <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: '#FAF8F2' }}>{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

function DebtsTab() {
  const d = window.CC_DATA;
  const widths = ['1.6fr', '0.8fr', '0.9fr', '0.6fr', '0.7fr', '0.55fr', '0.7fr', '0.95fr', '1fr', '1.05fr'];
  const chip = (x) => {
    if (x.status === 'PAID') return <Chip status="on">PAID ✓ {x.paidLabel}</Chip>;
    if (x.status === 'TRACKED') return <Chip status="ahead">TRACKED</Chip>;
    return x.underwater
      ? <span style={{ display: 'flex', gap: 5 }}><Chip status="warn">Underwater min</Chip></span>
      : <Chip status="fair">ACTIVE</Chip>;
  };
  return (
    <div>
      <SheetHeader tab="Debts" subLabel="6 LISTED · 2 PAID · 25 SLOTS" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Debts" desc="List each debt once — balance, APR, minimum. Yellow is yours; everything else computes. 25 slots." />

        <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)', marginBottom: 12 }}>
          <ColHeader widths={widths} cols={[
            { label: 'Debt' }, { label: 'Type' }, { label: 'Start', align: 'right' }, { label: 'APR', align: 'right' },
            { label: 'Min', align: 'right' }, { label: 'In plan?' }, { label: 'Override', align: 'right' },
            { label: 'Balance now', align: 'right' }, { label: 'Status' }, { label: 'Payoff', align: 'right' },
          ]} />
          {d.debts.map((x, i) => (
            <DataRow key={x.name} widths={widths} zebra={i % 2 === 1} cols={[
              { content: <YellowInput small width={120}>{x.name}</YellowInput> },
              { content: <span style={{ fontSize: 10.5, opacity: 0.7 }}>{x.type} ▾</span> },
              { content: fmtM(x.start), align: 'right', num: true },
              { content: <YellowInput small align="right" width={42}>{x.apr}%</YellowInput> },
              { content: <YellowInput small align="right" width={36}>${x.min}</YellowInput> },
              { content: <span style={{ fontSize: 10.5 }}>{x.inPlan ? 'Yes' : 'No'} ▾</span> },
              { content: x.override ? <YellowInput small align="right" width={56}>{fmtM(x.current)}</YellowInput> : <span style={{ opacity: 0.3 }}>—</span>, align: 'right' },
              { content: <span style={{ fontWeight: 600 }}>{fmtM(x.current)}</span>, align: 'right', num: true },
              { content: chip(x) },
              { content: x.status === 'ACTIVE' ? <span style={{ fontWeight: 500 }}>{x.payoff}</span> : <span style={{ opacity: 0.35 }}>—</span>, align: 'right' },
            ]} />
          ))}
        </div>
        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', lineHeight: 1.7, marginBottom: 24 }}>
          In plan? = No keeps a debt (your mortgage) tracked here without driving the strategy or the debt-free date.
          Underwater min means the minimum doesn't cover one month's interest — the balance grows until the snowball arrives; the Visa wore that flag while the small debts died.
          Override is the monthly statement true-up: type the real balance and it wins.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

function StubTab({ tab, copy }) {
  return (
    <div>
      <SheetHeader tab={tab} />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px', minHeight: 420 }}>
        <TabTitle name={tab} desc={copy} />
        <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 12, color: 'rgba(28,61,46,0.45)', fontStyle: 'italic' }}>
          Full spec in design_handoff_the_payoff/02 — mocked at build fidelity in the workbook, summarized here.
        </div>
        <div style={{ height: 280 }}></div>
        <SheetFooter />
      </div>
    </div>
  );
}

Object.assign(window, { DashboardTab, DebtsTab, StubTab });

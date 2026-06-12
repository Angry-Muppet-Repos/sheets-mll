/* =====================================================================
   The Ledger v1 — Invoices + Mileage + the StubTab for everything else.
   Invoices: status is a dropdown (Draft / Sent / Paid); Overdue is
   DERIVED — conditional formatting paints the row when Status ≠ Paid
   and the due date has passed.
   ===================================================================== */

function InvoicesTab() {
  const d = window.CC_DATA;
  const inv = d.invoices;
  const widths = ['0.5fr', '1.3fr', '1.6fr', '0.7fr', '0.7fr', '0.8fr', '0.8fr', '0.7fr'];

  return (
    <div>
      <SheetHeader tab="Invoices" subLabel="1 OVERDUE · HAWTHORN & CO." />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Invoices" desc="Track what's owed and chase what's late. Revenue enters the books when the money lands in Transactions — cash basis, no double-counting." />

        {/* Summary cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 28 }}>
          <KpiCard label="Outstanding"     value={fmt(d.invoice_cards.outstanding)}     sub="2 invoices sent, awaiting payment" accent="primary" />
          <KpiCard label="Overdue"        value={fmt(d.invoice_cards.overdue)}          sub="Hawthorn & Co. · 15 days past due" accent="danger" />
          <KpiCard label="Paid This Month" value={fmt(d.invoice_cards.paid_this_month)} sub="1 invoice settled in June" accent="gold" />
        </div>

        {/* Invoice table */}
        <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)', marginBottom: 14 }}>
          <SectionLabel dark gold>INVOICE REGISTER · 25 ROWS</SectionLabel>
          <ColHeader widths={widths} cols={[
            { label: '#' },
            { label: 'Client' },
            { label: 'Description' },
            { label: 'Issued', align: 'right' },
            { label: 'Due', align: 'right' },
            { label: 'Amount', align: 'right' },
            { label: 'Status', align: 'center' },
            { label: 'Paid', align: 'right' },
          ]} />
          {inv.map((r, i) => (
            <DataRow key={r.num} widths={widths} zebra={i % 2 === 1} highlight={r.overdue} last={i === inv.length - 1} cols={[
              { content: <span style={{ opacity: 0.6, fontVariantNumeric: 'tabular-nums' }}>{r.num}</span> },
              { content: <YellowInput small width={120}>{r.client} ▾</YellowInput> },
              { content: <YellowInput small width={150}>{r.desc}</YellowInput> },
              { content: r.issued, align: 'right', num: true },
              { content: <span style={{ color: r.overdue ? '#832F30' : 'inherit', fontWeight: r.overdue ? 600 : 400 }}>{r.due}</span>, align: 'right', num: true },
              { content: fmt(r.amount), align: 'right', num: true },
              { content: r.overdue
                  ? <Chip status="over">Overdue</Chip>
                  : <YellowInput small width={56} align="center">{r.status} ▾</YellowInput>, align: 'center' },
              { content: <span style={{ opacity: r.paid ? 1 : 0.35 }}>{r.paid || '—'}</span>, align: 'right', num: true },
            ]} />
          ))}
        </div>
        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', marginBottom: 24 }}>
          Overdue is automatic — any sent invoice past its due date paints itself. Status only offers Draft · Sent · Paid.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

/* =====================================================================
   Mileage — the log that feeds the Tax Center estimate detail.
   ===================================================================== */
function MileageTab() {
  const d = window.CC_DATA;
  const rows = d.mileage;
  const t = d.tax;
  const widths = ['0.7fr', '2.2fr', '0.7fr', '0.9fr'];

  return (
    <div>
      <SheetHeader tab="Mileage" subLabel={'YTD · ' + d.mileage_totals.miles + ' MILES'} />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Mileage" desc="Log business miles. The deduction feeds your Tax Center estimate automatically." />

        {/* Totals strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 28 }}>
          <KpiCard label="Total Miles YTD"     value={d.mileage_totals.miles + ' mi'}        sub="14 trips logged" accent="primary" />
          <KpiCard label="Rate"                value={'$' + t.mileage_rate.toFixed(3) + '/mi'} sub="set in Tax Center · IRS standard rate" accent="gold" />
          <KpiCard label="Deduction YTD"       value={fmt(d.mileage_totals.deduction, { decimals: 2 })} sub="reduces your estimated tax base" accent="mid" />
        </div>

        {/* Log table */}
        <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)', marginBottom: 14 }}>
          <SectionLabel dark gold>MILEAGE LOG · 100 ROWS</SectionLabel>
          <ColHeader widths={widths} cols={[
            { label: 'Date', align: 'right' },
            { label: 'Purpose' },
            { label: 'Miles', align: 'right' },
            { label: 'Deduction', align: 'right' },
          ]} />
          {rows.map((r, i) => (
            <DataRow key={i} widths={widths} zebra={i % 2 === 1} last={i === rows.length - 1} cols={[
              { content: <YellowInput small width={52} align="right">{r.date}</YellowInput>, align: 'right' },
              { content: <YellowInput small width={230}>{r.purpose}</YellowInput> },
              { content: <YellowInput small width={36} align="right">{r.miles}</YellowInput>, align: 'right' },
              { content: fmt(r.miles * t.mileage_rate, { decimals: 2 }), align: 'right', num: true },
            ]} />
          ))}
        </div>
        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', marginBottom: 24 }}>
          Deduction = miles × the rate in Tax Center. Change the rate there and every row updates.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

/* =====================================================================
   Stub tab — brand-correct placeholder for non-hero tabs.
   ===================================================================== */
function StubTab({ tab, copy }) {
  return (
    <div>
      <SheetHeader tab={tab} />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px', minHeight: 420 }}>
        <TabTitle name={tab} desc={copy} />
        <div style={{ background: 'var(--pal-zebra, #EEF2EC)', border: '1px dashed rgba(28,61,46,0.25)', borderRadius: 4, padding: '36px 28px', textAlign: 'center', fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 12.5, color: 'rgba(28,61,46,0.6)', marginBottom: 28 }}>
          Full layout ships in the workbook build — this kit mocks the five hero tabs:
          Tax Center · Dashboard · P&amp;L · Invoices · Mileage.
        </div>
        <SheetFooter />
      </div>
    </div>
  );
}

Object.assign(window, { InvoicesTab, MileageTab, StubTab });

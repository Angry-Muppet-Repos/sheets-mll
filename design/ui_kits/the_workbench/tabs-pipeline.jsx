/* =====================================================================
   The Workbench v1 — Pipeline (the computed PM board) + Products
   (the master table with the 30-step checkbox checklist).
   ===================================================================== */

function PipelineTab() {
  const d = window.CC_DATA;
  const counts = d.stage_counts;
  const inFlight = d.products.filter(p => p.status !== 'Listed' && p.status !== 'Retired')
    .sort((a, b) => b.ticks - a.ticks);

  return (
    <div>
      <SheetHeader tab="Pipeline" subLabel="3 IN FLIGHT · NEXT TARGET IN 9 DAYS" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Pipeline" desc="Every product's path to listed. Computed from the Products checklist — nothing to type here." />

        {/* Stage bar */}
        <SectionLabel gold>CATALOG BY STAGE</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 10, marginTop: 14, marginBottom: 28 }}>
          {Object.entries(counts).map(([stage, n]) => (
            <div key={stage} style={{ background: n > 0 ? 'var(--pal-primary, #1C3D2E)' : '#FAF8F2', border: '1px solid rgba(28,61,46,0.12)', borderRadius: 4, padding: '12px 10px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 26, color: n > 0 ? '#FAF8F2' : 'rgba(28,61,46,0.35)' }}>{n}</div>
              <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: n > 0 ? 'var(--pal-accent, #C5A95A)' : 'rgba(28,61,46,0.45)', marginTop: 4 }}>{stage}</div>
            </div>
          ))}
        </div>

        {/* In Flight */}
        <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)', marginBottom: 24 }}>
          <SectionLabel dark gold>IN FLIGHT · RANKED BY PROGRESS</SectionLabel>
          <ColHeader widths={['1.6fr','0.8fr','1.3fr','1.6fr','0.8fr']} cols={[
            { label: 'Product' }, { label: 'Status' }, { label: 'Progress' },
            { label: 'Next Step' }, { label: 'Target', align: 'right' },
          ]} />
          {inFlight.map((p, i) => {
            const pct = Math.round(p.ticks / 30 * 100);
            return (
              <DataRow key={p.name} widths={['1.6fr','0.8fr','1.3fr','1.6fr','0.8fr']} zebra={i % 2 === 1} last={i === inFlight.length - 1} cols={[
                { content: <span style={{ fontWeight: 500 }}>{p.name}</span> },
                { content: <span style={{ opacity: 0.7 }}>{p.status}</span> },
                { content: <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1 }}><Progress pct={pct} status={pct >= 60 ? 'on' : pct >= 25 ? 'fair' : 'warn'} height={6} /></div>
                    <div style={{ fontVariantNumeric: 'tabular-nums', fontSize: 11, color: 'rgba(28,61,46,0.65)', minWidth: 34, textAlign: 'right' }}>{pct}%</div>
                  </div> },
                { content: <span style={{ fontSize: 11.5 }}>{p.next}</span> },
                { content: p.target === null ? <span style={{ opacity: 0.4 }}>—</span> : <Chip status={p.target > 7 ? 'on' : 'fair'}>{p.target + ' d'}</Chip>, align: 'right' },
              ]} />
            );
          })}
        </div>

        {/* Recently listed */}
        <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)', marginBottom: 24 }}>
          <SectionLabel dark gold>RECENTLY LISTED</SectionLabel>
          {d.recently_listed.map((r, i) => (
            <DataRow key={r.name} widths={['1.6fr','1fr','1fr']} last={i === d.recently_listed.length - 1} cols={[
              { content: <span style={{ fontWeight: 500 }}>{r.name}</span> },
              { content: <span style={{ opacity: 0.7 }}>{r.when}</span> },
              { content: <span>week one: <strong>{fmt(r.week1)}</strong> net</span> },
            ]} />
          ))}
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

/* =====================================================================
   Products — the master table. One row per product, 30 checklist steps
   as grouped checkbox columns, computed progress/next/target at right.
   Scales by adding ROWS (250 slots in the build).
   ===================================================================== */
function ProductsTab() {
  const d = window.CC_DATA;
  const groups = d.step_groups;
  const groupColors = { BUILD: 'var(--pal-primary, #1C3D2E)', QA: 'var(--pal-mid, #2D5C45)', ASSETS: '#3E7E5C', LISTING: '#5C9D72', POST: '#8FAF7E' };
  const cb = (on) => (
    <span style={{ display: 'inline-block', width: 13, height: 13, borderRadius: 2, border: '1.5px solid ' + (on ? 'var(--pal-primary, #1C3D2E)' : 'rgba(28,61,46,0.3)'), background: on ? 'var(--pal-primary, #1C3D2E)' : '#FFFDE7', color: '#FAF8F2', fontSize: 9.5, lineHeight: '12px', textAlign: 'center', fontWeight: 700 }}>{on ? '✓' : ''}</span>
  );

  return (
    <div>
      <SheetHeader tab="Products" subLabel="8 OF 250 SLOTS USED" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Products" desc="The master table. One row per product — name it, price it, and tick the steps as you go. 250 slots." />

        <div style={{ background: '#FAF8F2', borderRadius: 4, border: '1px solid rgba(28,61,46,0.10)', overflowX: 'auto', marginBottom: 14 }}>
          {/* group band */}
          <div style={{ display: 'flex', minWidth: 1180 }}>
            <div style={{ width: 320, flexShrink: 0 }}></div>
            {groups.map(g => (
              <div key={g.group} style={{ width: g.steps.length * 22, flexShrink: 0, background: groupColors[g.group], color: '#FAF8F2', fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 8.5, letterSpacing: '0.14em', textAlign: 'center', padding: '4px 0' }}>{g.group}</div>
            ))}
            <div style={{ flex: 1, background: 'var(--pal-zebra, #EEF2EC)', fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 8.5, letterSpacing: '0.14em', textAlign: 'center', padding: '4px 0', color: 'rgba(28,61,46,0.6)' }}>COMPUTED</div>
          </div>
          {/* header */}
          <div style={{ display: 'flex', minWidth: 1180, background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 9.5, letterSpacing: '0.1em' }}>
            <div style={{ width: 175, flexShrink: 0, padding: '7px 12px' }}>PRODUCT</div>
            <div style={{ width: 80, flexShrink: 0, padding: '7px 6px' }}>STATUS</div>
            <div style={{ width: 65, flexShrink: 0, padding: '7px 6px', textAlign: 'right' }}>PRICE</div>
            <div style={{ width: 30 * 22, flexShrink: 0, padding: '7px 6px', fontSize: 8.5, opacity: 0.75 }}>30 STEPS · HOVER A COLUMN FOR ITS NAME (TITLE-ROW NOTES IN THE BUILD)</div>
            <div style={{ width: 90, flexShrink: 0, padding: '7px 6px', textAlign: 'right' }}>PROGRESS</div>
            <div style={{ flex: 1, padding: '7px 10px' }}>NEXT STEP</div>
          </div>
          {/* rows */}
          {d.products.map((p, i) => (
            <div key={p.name} style={{ display: 'flex', minWidth: 1180, background: i % 2 === 1 ? 'var(--pal-zebra, #EEF2EC)' : '#FAF8F2', borderBottom: '1px solid rgba(28,61,46,0.06)', alignItems: 'center' }}>
              <div style={{ width: 175, flexShrink: 0, padding: '8px 12px' }}><YellowInput small width={140}>{p.name}</YellowInput></div>
              <div style={{ width: 80, flexShrink: 0, padding: '8px 6px', fontFamily: 'Jost,sans-serif', fontSize: 10.5 }}>{p.status} ▾</div>
              <div style={{ width: 65, flexShrink: 0, padding: '8px 6px', textAlign: 'right', fontFamily: 'Jost,sans-serif', fontSize: 11, fontVariantNumeric: 'tabular-nums' }}>{p.price ? fmt(p.price) : '—'}</div>
              <div style={{ width: 30 * 22, flexShrink: 0, padding: '6px', display: 'flex', gap: 9 }}>
                {Array.from({ length: 30 }, (_, s) => <span key={s}>{cb(s < p.ticks || (p.name === 'Teacher Bundle' && s < 28))}</span>)}
              </div>
              <div style={{ width: 90, flexShrink: 0, padding: '8px 6px', textAlign: 'right', fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 600, color: 'var(--pal-primary, #1C3D2E)', fontVariantNumeric: 'tabular-nums' }}>{Math.round(p.ticks / 30 * 100)}%</div>
              <div style={{ flex: 1, padding: '8px 10px', fontFamily: 'Jost,sans-serif', fontSize: 10.5, color: p.next === 'Done' ? 'rgba(28,61,46,0.45)' : 'var(--pal-primary, #1C3D2E)' }}>{p.next}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', marginBottom: 24 }}>
          Progress counts the 30 fixed steps. Five custom step columns sit to the right in the build — extra credit, outside the %. Identity columns stay frozen while you scroll the checklist.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

Object.assign(window, { PipelineTab, ProductsTab });

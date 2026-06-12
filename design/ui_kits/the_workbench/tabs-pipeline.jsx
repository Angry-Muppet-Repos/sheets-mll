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
   Products — the slim master table (identity + computed; the steps
   live on the Checklist tab, one full-text row each).
   ===================================================================== */
function ProductsTab() {
  const d = window.CC_DATA;
  const widths = ['0.4fr','1.7fr','0.8fr','1.2fr','0.6fr','1.1fr','0.9fr','1.5fr'];
  return (
    <div>
      <SheetHeader tab="Products" subLabel="8 OF 250 SLOTS USED" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Products" desc="The master table. Add products with 💳 → Add Product… and tick their steps on the Checklist tab. 250 slots." />

        <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)', marginBottom: 14 }}>
          <ColHeader widths={widths} cols={[
            { label: '#' }, { label: 'Product' }, { label: 'Status' }, { label: 'Template' },
            { label: 'Price', align: 'right' }, { label: 'Progress' }, { label: 'Target', align: 'right' },
            { label: 'Next Step' },
          ]} />
          {d.products.map((p, i) => {
            const pct = Math.round(p.ticks / 30 * 100);
            return (
              <DataRow key={p.name} widths={widths} zebra={i % 2 === 1} last={i === d.products.length - 1} cols={[
                { content: <span style={{ opacity: 0.5, fontVariantNumeric: 'tabular-nums' }}>{i + 1}</span> },
                { content: <YellowInput small width={150}>{p.name}</YellowInput> },
                { content: <span style={{ fontSize: 11 }}>{p.status} ▾</span> },
                { content: <span style={{ fontSize: 10.5, opacity: 0.65 }}>Digital Product ▾</span> },
                { content: p.price ? fmt(p.price) : '—', align: 'right', num: true },
                { content: <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1 }}><Progress pct={pct} status={pct >= 60 ? 'on' : pct >= 25 ? 'fair' : 'warn'} height={6} /></div>
                    <div style={{ fontVariantNumeric: 'tabular-nums', fontSize: 11, color: 'rgba(28,61,46,0.65)', minWidth: 34, textAlign: 'right' }}>{pct}%</div>
                  </div> },
                { content: p.target === null ? <span style={{ opacity: 0.4 }}>—</span> : <Chip status={p.target > 7 ? 'on' : 'fair'}>{p.target + ' d'}</Chip>, align: 'right' },
                { content: <span style={{ fontSize: 11, color: p.next === 'Done' ? 'rgba(28,61,46,0.45)' : 'var(--pal-primary, #1C3D2E)' }}>{p.next}</span> },
              ]} />
            );
          })}
        </div>
        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', marginBottom: 24 }}>
          Progress, next step, and target chips compute from the Checklist tab. Days-since-sale and the pipeline rankings live in hidden helper columns.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

/* =====================================================================
   Checklist — every product's steps in long format. Full-text steps,
   one checkbox each; each product can run a different process.
   ===================================================================== */
function ChecklistTab() {
  const d = window.CC_DATA;
  const rows = d.checklist_sample;
  const widths = ['1.4fr','0.7fr','2.4fr','0.5fr','0.4fr'];
  const cb = (on) => (
    <span style={{ display: 'inline-block', width: 15, height: 15, borderRadius: 2, border: '1.5px solid ' + (on ? 'var(--pal-primary, #1C3D2E)' : 'rgba(28,61,46,0.35)'), background: on ? 'var(--pal-primary, #1C3D2E)' : '#FFFDE7', color: '#FAF8F2', fontSize: 11, lineHeight: '14px', textAlign: 'center', fontWeight: 700 }}>{on ? '✓' : ''}</span>
  );
  return (
    <div>
      <SheetHeader tab="Checklist" subLabel="FILTERED · HOLIDAY GIFT TAGS · 14 OF 30 DONE" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Checklist" desc="Every product's steps, one row each. Filter to a product and tick down the list." />

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, fontFamily: 'Jost,sans-serif', fontSize: 11 }}>
          <span style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', padding: '5px 12px', borderRadius: 999 }}>Product = Holiday Gift Tags ✕</span>
          <span style={{ color: 'rgba(28,61,46,0.55)' }}>← the built-in filter — steps 12–23 of 30 shown</span>
        </div>

        <div style={{ background: '#FAF8F2', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(28,61,46,0.10)', marginBottom: 14 }}>
          <ColHeader widths={widths} cols={[
            { label: 'Product' }, { label: 'Group' }, { label: 'Step' },
            { label: 'Done', align: 'center' }, { label: '#', align: 'right' },
          ]} />
          {rows.map((r, i) => (
            <DataRow key={r.n} widths={widths} zebra={i % 2 === 1} last={i === rows.length - 1} cols={[
              { content: <span style={{ fontSize: 11, opacity: 0.6 }}>{r.product}</span> },
              { content: <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--pal-mid, #2D5C45)' }}>{r.group}</span> },
              { content: <span style={{ fontWeight: r.done ? 300 : 500, opacity: r.done ? 0.55 : 1 }}>{r.step}</span> },
              { content: cb(r.done), align: 'center' },
              { content: <span style={{ opacity: 0.4, fontVariantNumeric: 'tabular-nums' }}>{r.n}</span>, align: 'right' },
            ]} />
          ))}
        </div>
        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', marginBottom: 24 }}>
          Rows are created by 💳 → Add Product… from a template. Reword, insert, or delete steps for any single product — then Save Steps as Template… to reuse the new process.
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

/* =====================================================================
   Templates — the process library.
   ===================================================================== */
function TemplatesTab() {
  const d = window.CC_DATA;
  const dp = d.templates[0];
  const groupColors = { BUILD: 'var(--pal-primary, #1C3D2E)', QA: 'var(--pal-mid, #2D5C45)', ASSETS: '#3E7E5C', LISTING: '#5C9D72', POST: '#8FAF7E' };
  return (
    <div>
      <SheetHeader tab="Templates" subLabel="4 OF 8 LIBRARY SLOTS USED" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <TabTitle name="Templates" desc="Your process library. Add Product copies a column into the Checklist; Save Steps as Template adds new columns here." />

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
          {d.templates.map((t, i) => (
            <div key={t.name} style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ background: 'var(--pal-primary, #1C3D2E)', padding: '8px 12px' }}>
                <YellowInput small width={'80%'}>{t.name}</YellowInput>
              </div>
              <div style={{ padding: '8px 12px', fontFamily: 'Jost,sans-serif', fontSize: 10, color: 'rgba(28,61,46,0.55)' }}>{t.count} steps</div>
              {i === 0 && (
                <div style={{ padding: '0 12px 12px', display: 'flex', flexDirection: 'column', gap: 3, maxHeight: 320, overflowY: 'auto' }}>
                  {dp.steps.map((st, n) => (
                    <div key={n} style={{ display: 'flex', gap: 8, alignItems: 'baseline', fontFamily: 'Jost,sans-serif', fontSize: 10.5 }}>
                      <span style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '0.08em', color: '#FAF8F2', background: groupColors[st.group], padding: '1px 5px', borderRadius: 2, minWidth: 42, textAlign: 'center' }}>{st.group}</span>
                      <span style={{ color: 'var(--pal-primary, #1C3D2E)' }}>{st.step}</span>
                    </div>
                  ))}
                </div>
              )}
              {i > 0 && (
                <div style={{ padding: '0 12px 12px', fontFamily: 'Jost,sans-serif', fontSize: 10.5, fontWeight: 300, color: 'rgba(28,61,46,0.55)' }}>
                  Full step list in the build — every cell editable, GROUP · Step convention.
                </div>
              )}
            </div>
          ))}
        </div>

        <SheetFooter />
      </div>
    </div>
  );
}

Object.assign(window, { PipelineTab, ProductsTab, ChecklistTab, TemplatesTab });

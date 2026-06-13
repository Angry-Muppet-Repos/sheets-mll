/* =====================================================================
   The Workbench v1 — Pipeline (the computed PM board) · Products (the
   slim master table) · Checklist (horizontal, one section per process)
   · Templates (the process library).
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
            const pct = Math.round(p.ticks / p.stepCount * 100);
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
            const pct = Math.round(p.ticks / p.stepCount * 100);
            return (
              <DataRow key={p.name} widths={widths} zebra={i % 2 === 1} last={i === d.products.length - 1} cols={[
                { content: <span style={{ opacity: 0.5, fontVariantNumeric: 'tabular-nums' }}>{i + 1}</span> },
                { content: <YellowInput small width={150}>{p.name}</YellowInput> },
                { content: <span style={{ fontSize: 11 }}>{p.status} ▾</span> },
                { content: <span style={{ fontSize: 10.5, opacity: 0.65 }}>{p.template} ▾</span> },
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
   Checklist — THE horizontal ticking surface. Products as rows, steps
   as columns; one section per process template in use. Readability:
   45°-angled headers, hover notes (title=), group bands, per-row
   Progress + Next step. Customization: headers edit in place, dashed
   blank slots grow a process, 💳 → Add Process… builds new ones.
   ===================================================================== */
function ChecklistTab({ onAddProcess }) {
  const d = window.CC_DATA;
  const RAMP = ['var(--pal-primary, #1C3D2E)', 'var(--pal-mid, #2D5C45)', '#3E7E5C', '#5C9D72', '#8FAF7E'];
  const CELL = 27;                       // step column (the build: ~42px under 45° headers)
  const GHOSTS = 2;                      // blank editable header slots per section
  const LEFTW = [30, 168, 118, 162];     // # · Product · Progress · Next step
  const LEFT_TOTAL = LEFTW.reduce((a, b) => a + b, 0);

  const tick = (on, ghost) => (
    <span style={{ display: 'inline-block', width: 14, height: 14, borderRadius: 2, opacity: ghost ? 0.30 : 1, border: '1.5px solid ' + (on ? 'var(--pal-primary, #1C3D2E)' : 'rgba(28,61,46,0.30)'), background: on ? 'var(--pal-primary, #1C3D2E)' : '#FFFDE7', color: '#FAF8F2', fontSize: 10, lineHeight: '13px', textAlign: 'center', fontWeight: 700 }}>{on ? '✓' : ''}</span>
  );

  function Section({ sec }) {
    const tpl = d.templates.find(t => t.name === sec.template);
    const steps = tpl.steps;
    const groups = [];
    steps.forEach(s => {
      const last = groups[groups.length - 1];
      if (last && last.name === s.group) last.n += 1; else groups.push({ name: s.group, n: 1 });
    });
    const rows = sec.products.map(n => d.products.find(p => p.name === n));
    const isDone = (p, ix) => p.tickIdx ? p.tickIdx.indexOf(ix) !== -1 : ix < p.ticks;
    const stepsW = (steps.length + GHOSTS) * CELL;

    return (
      <div style={{ marginBottom: 34, width: LEFT_TOTAL + stepsW }}>
        {/* Template band — sticky label so the name survives horizontal scroll */}
        <div style={{ display: 'flex', background: 'var(--pal-primary, #1C3D2E)', height: 30, alignItems: 'center' }}>
          <div style={{ position: 'sticky', left: 0, zIndex: 3, background: 'var(--pal-primary, #1C3D2E)', height: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px' }}>
            <span style={{ display: 'inline-block', width: 3, height: 14, background: 'var(--pal-accent, #C5A95A)' }}></span>
            <span style={{ fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FAF8F2', whiteSpace: 'nowrap' }}>{sec.template}</span>
            <span style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--pal-accent, #C5A95A)', whiteSpace: 'nowrap' }}>· {steps.length} steps · {rows.length} {rows.length === 1 ? 'product' : 'products'}</span>
          </div>
          <div style={{ marginLeft: 'auto', paddingRight: 12, fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 9.5, letterSpacing: '0.08em', color: 'rgba(250,248,242,0.55)', whiteSpace: 'nowrap' }}>headers below are editable · Save Steps as Template… files this section to the library</div>
        </div>

        {/* Group bands over the step columns */}
        <div style={{ display: 'flex', height: 20 }}>
          <div style={{ position: 'sticky', left: 0, zIndex: 3, width: LEFT_TOTAL, flex: 'none', background: 'var(--pal-bg, #FAF8F2)' }}></div>
          {groups.map((g, gi) => (
            <div key={g.name} style={{ width: g.n * CELL, flex: 'none', background: RAMP[gi % RAMP.length], color: '#FAF8F2', fontFamily: 'Jost,sans-serif', fontWeight: 700, fontSize: 8.5, letterSpacing: '0.14em', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', whiteSpace: 'nowrap', borderRight: '1px solid rgba(250,248,242,0.30)' }}>{g.name}</div>
          ))}
          <div style={{ width: GHOSTS * CELL, flex: 'none' }}></div>
        </div>

        {/* Step headers — 45°, readable, hover for full text */}
        <div style={{ display: 'flex', height: 104, alignItems: 'flex-end' }}>
          <div style={{ position: 'sticky', left: 0, zIndex: 3, width: LEFT_TOTAL, flex: 'none', background: 'var(--pal-bg, #FAF8F2)', display: 'flex', alignSelf: 'stretch', alignItems: 'flex-end', borderBottom: '2px solid var(--pal-primary, #1C3D2E)' }}>
            {['#', 'PRODUCT', 'PROGRESS', 'NEXT STEP'].map((h, i) => (
              <div key={h} style={{ width: LEFTW[i], flex: 'none', padding: '0 10px 6px', fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 9, letterSpacing: '0.16em', color: 'var(--pal-mid, #2D5C45)' }}>{h}</div>
            ))}
          </div>
          {steps.map((s, ix) => (
            <div key={ix} title={s.group + ' · ' + s.step} style={{ width: CELL, flex: 'none', alignSelf: 'stretch', position: 'relative', borderBottom: '2px solid var(--pal-primary, #1C3D2E)', cursor: 'default' }}>
              <span style={{ position: 'absolute', bottom: 8, left: 16, transformOrigin: 'left bottom', transform: 'rotate(-45deg)', whiteSpace: 'nowrap', fontFamily: 'Jost,sans-serif', fontWeight: 400, fontSize: 10, color: 'var(--pal-primary, #1C3D2E)' }}>{s.step}</span>
            </div>
          ))}
          {Array.from({ length: GHOSTS }).map((_, gx) => (
            <div key={'g' + gx} title="Type a step name here to add it to this process — its checkboxes are already wired" style={{ width: CELL, flex: 'none', alignSelf: 'stretch', position: 'relative', borderBottom: '2px dashed rgba(197,169,90,0.8)' }}>
              {gx === 0 && <span style={{ position: 'absolute', bottom: 8, left: 16, transformOrigin: 'left bottom', transform: 'rotate(-45deg)', whiteSpace: 'nowrap', fontFamily: 'Jost,sans-serif', fontWeight: 300, fontStyle: 'italic', fontSize: 10, color: 'rgba(28,61,46,0.45)' }}>type to add a step…</span>}
              <span style={{ position: 'absolute', bottom: 4, left: 5, width: CELL - 12, height: 13, background: '#FFFDE7', border: '1px dashed #C5A95A', borderRadius: 2 }}></span>
            </div>
          ))}
        </div>

        {/* Product rows — tick across */}
        {rows.map((p, ri) => {
          const bg = ri % 2 === 1 ? 'var(--pal-zebra, #EEF2EC)' : '#FAF8F2';
          const pctN = Math.round(p.ticks / steps.length * 100);
          return (
            <div key={p.name} style={{ display: 'flex', height: 31 }}>
              <div style={{ position: 'sticky', left: 0, zIndex: 2, width: LEFT_TOTAL, flex: 'none', background: bg, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(28,61,46,0.07)', boxShadow: '1px 0 0 rgba(28,61,46,0.08)' }}>
                <div style={{ width: LEFTW[0], flex: 'none', padding: '0 10px', fontFamily: 'Jost,sans-serif', fontSize: 10.5, color: 'rgba(28,61,46,0.40)', fontVariantNumeric: 'tabular-nums' }}>{d.products.indexOf(p) + 1}</div>
                <div style={{ width: LEFTW[1], flex: 'none', padding: '0 10px', fontFamily: 'Jost,sans-serif', fontWeight: 500, fontSize: 11.5, color: 'var(--pal-primary, #1C3D2E)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                <div style={{ width: LEFTW[2], flex: 'none', padding: '0 10px', display: 'flex', alignItems: 'center', gap: 7 }}>
                  <div style={{ flex: 1 }}><Progress pct={pctN} status={pctN >= 60 ? 'on' : pctN >= 25 ? 'fair' : 'warn'} height={5} /></div>
                  <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, color: 'rgba(28,61,46,0.65)', fontVariantNumeric: 'tabular-nums', minWidth: 30, textAlign: 'right' }}>{pctN}%</span>
                </div>
                <div style={{ width: LEFTW[3], flex: 'none', padding: '0 10px', fontFamily: 'Jost,sans-serif', fontSize: 10.5, color: p.next === 'Done' ? 'rgba(28,61,46,0.40)' : 'var(--pal-primary, #1C3D2E)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.next}</div>
              </div>
              {steps.map((s, ix) => (
                <div key={ix} title={p.name + ' — ' + s.group + ' · ' + s.step} style={{ width: CELL, height: '100%', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg, borderBottom: '1px solid rgba(28,61,46,0.07)', borderRight: '1px solid rgba(28,61,46,0.05)' }}>
                  {tick(isDone(p, ix))}
                </div>
              ))}
              {Array.from({ length: GHOSTS }).map((_, gx) => (
                <div key={'g' + gx} style={{ width: CELL, height: '100%', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg, borderBottom: '1px solid rgba(28,61,46,0.07)', borderRight: '1px dashed rgba(197,169,90,0.35)' }}>
                  {tick(false, true)}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <SheetHeader tab="Checklist" subLabel="2 PROCESSES · 8 PRODUCTS · 3 IN FLIGHT" />
      <div style={{ background: 'var(--pal-bg, #FAF8F2)', padding: '28px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 18 }}>
          <TabTitle name="Checklist" desc="Products as rows, steps as columns — tick across the row as each product moves. One section per process." />
          <div style={{ textAlign: 'right', flex: 'none' }}>
            <button onClick={onAddProcess} style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', border: 0, borderRadius: 3, padding: '9px 16px', fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.06em', cursor: 'pointer' }}>Add Process…</button>
            <div style={{ marginTop: 5, fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 9.5, color: 'rgba(28,61,46,0.55)' }}>the guided builder · lives at 💳 Column &amp; Co.</div>
          </div>
        </div>

        <div className="sheet-scroll" style={{ overflowX: 'auto', paddingBottom: 4, paddingRight: 0 }}>
          <div style={{ width: 'max-content', minWidth: '100%', paddingRight: 96 }}>
            {d.checklist_sections.map(sec => <Section key={sec.template} sec={sec} />)}
          </div>
        </div>

        <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 11, color: 'rgba(28,61,46,0.6)', lineHeight: 1.7, marginBottom: 24 }}>
          Hover any step header for its full name — in the build every header carries a note.
          Headers edit in place · rename a step and every product in the section follows · type into a dashed slot to add a step to that process.
          New products land in their template's section via 💳 → Add Product… · new processes start with 💳 → Add Process…
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
        <TabTitle name="Templates" desc="Your process library. 💳 → Add Process… builds new columns here, phase by phase; Add Product… puts products on them; Save Steps as Template… files an evolved section back." />

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

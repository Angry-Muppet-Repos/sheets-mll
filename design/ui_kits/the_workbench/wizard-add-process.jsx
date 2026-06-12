/* =====================================================================
   Add Process… — the guided process builder (Apps Script sidebar mock).
   Walks the owner through building a process template on a hybrid
   waterfall · iterative foundation: phases planned up front, in order
   (the waterfall), each phase walked step by step with optional review
   loops (the iteration). Saves into the Templates library; its
   Checklist section appears with the first product added to it.

   Interactive: pick a kind, rename phases, edit/add/remove steps,
   insert a review loop, save. Seeded with the 3D-print maker story.
   ===================================================================== */

const WIZARD_KINDS = [
  { id: 'digital',  label: 'Digital download',        hint: 'printables, templates, fonts, presets' },
  { id: 'physical', label: 'Physical · made-to-order', hint: '3D prints, handmade, small-batch goods' },
  { id: 'service',  label: 'Service · custom order',  hint: 'commissions, design work, personalization' },
  { id: 'blank',    label: 'Start from blank',         hint: 'name your own phases from scratch' },
];

const WIZARD_SEEDS = {
  digital: [
    { name: 'BUILD',   steps: ['Concept locked', 'Scope written', 'Draft built', 'Final files exported'] },
    { name: 'QA',      steps: ['Fresh-eyes test', 'Test download as a buyer', 'Fix pass', 'Final check'] },
    { name: 'ASSETS',  steps: ['Screenshots (hero order)', 'Thumbnail', 'Listing copy drafted', 'Tags + SEO list', 'Price set'] },
    { name: 'LISTING', steps: ['Listing created', 'Files attached', 'Preview checked', 'Published', 'URL logged here'] },
    { name: 'POST',    steps: ['First-sale check', 'Review request sent', 'Week-1 stats logged', 'Retro note written'] },
  ],
  physical: [
    { name: 'DESIGN',  steps: ['Model finalized', 'Slicer profile tuned', 'Test print approved', 'Tolerances checked'] },
    { name: 'PRINT',   steps: ['Material + color locked', 'Batch printed', 'Supports removed', 'Surface finished'] },
    { name: 'QC + PACK', steps: ['Fit + function check', 'Flaw inspection', 'Packaging chosen', 'Test ship survived'] },
    { name: 'LISTING', steps: ['Photos shot (hero order)', 'Listing created', 'Variations + inventory set', 'Shipping profile set', 'Published'] },
    { name: 'POST',    steps: ['First-sale check', 'Review request sent', 'Restock trigger set', 'Retro note written'] },
  ],
  service: [
    { name: 'OFFER',   steps: ['Offer defined', 'Scope + boundaries written', 'Price + tiers set', 'Intake questions written'] },
    { name: 'SETUP',   steps: ['Booking flow tested', 'Listing copy drafted', 'Portfolio examples chosen', 'Turnaround time set'] },
    { name: 'LISTING', steps: ['Listing created', 'Preview checked', 'Published', 'URL logged here'] },
    { name: 'POST',    steps: ['First-order walkthrough', 'Delivery flow tested', 'Review request sent', 'Retro note written'] },
  ],
  blank: [
    { name: 'PHASE 1', steps: [] },
    { name: 'PHASE 2', steps: [] },
    { name: 'PHASE 3', steps: [] },
  ],
};

const REVIEW_LOOP = ['Review pass', 'Fix list worked', 'Re-check passed'];

function AddProcessWizard({ onClose }) {
  const { useState } = React;
  const [stage, setStage] = useState(0);            // 0 foundation · 1 phases · 2 steps · 3 save
  const [kind, setKind] = useState('physical');
  const [name, setName] = useState('3D Print · Made to Order');
  const [phases, setPhases] = useState(() => JSON.parse(JSON.stringify(WIZARD_SEEDS.physical)));
  const [phaseIx, setPhaseIx] = useState(0);
  const [chain, setChain] = useState(true);
  const [saved, setSaved] = useState(false);
  const draftRef = React.useRef(null);   // the "Add a step…" input (stage 2)

  const stepTotal = phases.reduce((a, p) => a + p.steps.length, 0);

  const pickKind = (id) => {
    setKind(id);
    setPhases(JSON.parse(JSON.stringify(WIZARD_SEEDS[id])));
    setPhaseIx(0);
  };
  const setPhaseName = (ix, v) => setPhases(ps => ps.map((p, i) => i === ix ? { ...p, name: v } : p));
  const movePhase = (ix, dir) => setPhases(ps => {
    const to = ix + dir;
    if (to < 0 || to >= ps.length) return ps;
    const next = ps.slice(); const t = next[ix]; next[ix] = next[to]; next[to] = t; return next;
  });
  const removePhase = (ix) => setPhases(ps => ps.length > 1 ? ps.filter((_, i) => i !== ix) : ps);
  const addPhase = () => setPhases(ps => ps.concat([{ name: 'NEW PHASE', steps: [] }]));
  const setStep = (pix, six, v) => setPhases(ps => ps.map((p, i) => i === pix ? { ...p, steps: p.steps.map((s, j) => j === six ? v : s) } : p));
  const removeStep = (pix, six) => setPhases(ps => ps.map((p, i) => i === pix ? { ...p, steps: p.steps.filter((_, j) => j !== six) } : p));
  const addStep = (pix, v) => { if (v.trim()) setPhases(ps => ps.map((p, i) => i === pix ? { ...p, steps: p.steps.concat([v.trim()]) } : p)); };
  const addLoop = (pix) => setPhases(ps => ps.map((p, i) => i === pix ? { ...p, steps: p.steps.concat(REVIEW_LOOP) } : p));

  /* ---- shared atoms ---- */
  const S = {
    label: { display: 'block', fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2D5C45', marginBottom: 5 },
    input: { width: '100%', boxSizing: 'border-box', padding: '7px 9px', border: '1px solid #C5A95A', background: '#FFFDE7', fontFamily: 'Jost,sans-serif', fontSize: 12.5, color: '#1C3D2E', borderRadius: 2, outline: 'none' },
    btn:   { background: '#1C3D2E', color: '#FAF8F2', border: 0, borderRadius: 3, padding: '9px 16px', fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.05em', cursor: 'pointer' },
    ghostBtn: { background: 'transparent', color: '#1C3D2E', border: '1px solid rgba(28,61,46,0.30)', borderRadius: 3, padding: '8px 14px', fontFamily: 'Jost,sans-serif', fontWeight: 500, fontSize: 11.5, cursor: 'pointer' },
    note:  { fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 10.5, color: 'rgba(28,61,46,0.65)', lineHeight: 1.55 },
  };

  const Crumbs = () => (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center', margin: '2px 0 16px' }}>
      {['Foundation', 'Phases', 'Steps', 'Save'].map((s, i) => (
        <React.Fragment key={s}>
          <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 9, fontWeight: i === stage ? 700 : 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: i === stage ? '#1C3D2E' : (i < stage ? '#2D5C45' : 'rgba(28,61,46,0.35)') }}>{i < stage ? '✓ ' : ''}{s}</span>
          {i < 3 && <span style={{ color: 'rgba(28,61,46,0.25)', fontSize: 9 }}>›</span>}
        </React.Fragment>
      ))}
    </div>
  );

  /* ---- stage bodies ---- */
  const Foundation = () => (
    <div>
      <div style={{ ...S.note, marginBottom: 14 }}>
        The Workbench plans like a hybrid: <strong style={{ fontWeight: 600 }}>phases run in order</strong> — the waterfall —
        and <strong style={{ fontWeight: 600 }}>inside a phase you loop until it passes</strong> — the iteration.
        Name the process, pick a starting point, then we walk it phase by phase.
      </div>
      <label style={S.label}>Process name</label>
      <input style={{ ...S.input, marginBottom: 14 }} value={name} onChange={e => setName(e.target.value)} />
      <label style={S.label}>What are you making?</label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {WIZARD_KINDS.map(k => (
          <div key={k.id} onClick={() => pickKind(k.id)} style={{ border: kind === k.id ? '2px solid #C5A95A' : '1px solid rgba(28,61,46,0.18)', background: kind === k.id ? '#FFFDE7' : '#FAF8F2', borderRadius: 3, padding: '9px 11px', cursor: 'pointer' }}>
            <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 12, color: '#1C3D2E' }}>{k.label}</div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 10, color: 'rgba(28,61,46,0.55)', marginTop: 2 }}>{k.hint}</div>
          </div>
        ))}
      </div>
      <div style={{ ...S.note, marginTop: 12 }}>Starting points only — every phase and step is yours to rename in the next two screens.</div>
    </div>
  );

  const PhasePlan = () => (
    <div>
      <div style={{ ...S.note, marginBottom: 14 }}>The waterfall: these run in order, left to right across the Checklist. Rename, reorder, add, or drop phases — you name each phase's steps next.</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {phases.map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '6px 0', borderBottom: '1px solid rgba(28,61,46,0.08)' }}>
            <span style={{ width: 18, height: 18, flex: 'none', borderRadius: 999, background: '#1C3D2E', color: '#FAF8F2', fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
            <input style={{ ...S.input, padding: '5px 8px', fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }} value={p.name} onChange={e => setPhaseName(i, e.target.value)} />
            <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, color: 'rgba(28,61,46,0.50)', whiteSpace: 'nowrap' }}>{p.steps.length} steps</span>
            <span onClick={() => movePhase(i, -1)} style={{ cursor: 'pointer', color: 'rgba(28,61,46,0.45)', fontSize: 11 }}>▲</span>
            <span onClick={() => movePhase(i, 1)}  style={{ cursor: 'pointer', color: 'rgba(28,61,46,0.45)', fontSize: 11 }}>▼</span>
            <span onClick={() => removePhase(i)}   style={{ cursor: 'pointer', color: 'rgba(131,47,48,0.65)', fontSize: 12 }}>✕</span>
          </div>
        ))}
      </div>
      <button style={{ ...S.ghostBtn, marginTop: 12 }} onClick={addPhase}>+ Add phase</button>
    </div>
  );

  const StepWalk = () => {
    const p = phases[phaseIx];
    if (!p) return null;
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
          <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.14em', color: 'rgba(28,61,46,0.50)' }}>PHASE {phaseIx + 1} OF {phases.length}</span>
          <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 17, color: '#1C3D2E' }}>{p.name}</span>
        </div>
        <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
          {phases.map((_, i) => (
            <span key={i} onClick={() => setPhaseIx(i)} style={{ width: 22, height: 4, borderRadius: 2, cursor: 'pointer', background: i === phaseIx ? '#C5A95A' : (i < phaseIx ? '#2D5C45' : 'rgba(28,61,46,0.15)') }}></span>
          ))}
        </div>
        <div style={{ ...S.note, marginBottom: 10 }}>Name what done looks like — each line becomes one checkbox column on the Checklist.</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {p.steps.map((s, j) => {
            const inLoop = REVIEW_LOOP.indexOf(s) !== -1;
            return (
              <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ width: 3, alignSelf: 'stretch', flex: 'none', background: inLoop ? '#C5A95A' : 'transparent', borderRadius: 2 }}></span>
                <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, color: 'rgba(28,61,46,0.40)', width: 14, flex: 'none', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{j + 1}</span>
                <input style={{ ...S.input, padding: '5px 8px', fontSize: 11.5 }} value={s} onChange={e => setStep(phaseIx, j, e.target.value)} />
                <span onClick={() => removeStep(phaseIx, j)} style={{ cursor: 'pointer', color: 'rgba(131,47,48,0.65)', fontSize: 12 }}>✕</span>
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: 7, marginTop: 10 }}>
          <input ref={draftRef} placeholder="Add a step…" style={{ ...S.input, padding: '6px 8px', fontSize: 11.5 }}
            onKeyDown={e => { if (e.key === 'Enter') { addStep(phaseIx, e.target.value); e.target.value = ''; } }} />
          <button style={{ ...S.ghostBtn, whiteSpace: 'nowrap', padding: '6px 10px', fontSize: 10.5 }}
            onClick={() => { if (draftRef.current && draftRef.current.value.trim()) { addStep(phaseIx, draftRef.current.value); draftRef.current.value = ''; } }}>+ Add</button>
        </div>
        <button style={{ ...S.ghostBtn, marginTop: 9, fontSize: 10.5, borderStyle: 'dashed', borderColor: '#C5A95A' }} onClick={() => addLoop(phaseIx)}>+ Insert review loop · review › fix › re-check</button>
        <div style={{ ...S.note, marginTop: 8 }}>The iterative part — a loop you repeat until the phase passes, then the waterfall moves on.</div>
      </div>
    );
  };

  const SaveStage = () => (
    <div>
      <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 17, color: '#1C3D2E', marginBottom: 2 }}>{name || 'Untitled process'}</div>
      <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10.5, color: 'rgba(28,61,46,0.60)', marginBottom: 12 }}>{phases.length} phases · {stepTotal} steps</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 250, overflowY: 'auto', paddingRight: 4, marginBottom: 14 }}>
        {phases.map((p, i) => (
          <div key={i}>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em', color: '#FAF8F2', background: '#2D5C45', display: 'inline-block', padding: '2px 8px', borderRadius: 2, marginBottom: 4 }}>{p.name}</div>
            {p.steps.map((s, j) => (
              <div key={j} style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: '#1C3D2E', padding: '1px 0 1px 10px' }}>· {s}</div>
            ))}
            {!p.steps.length && <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10.5, fontStyle: 'italic', color: 'rgba(131,47,48,0.70)', paddingLeft: 10 }}>no steps yet — go back and add at least one</div>}
          </div>
        ))}
      </div>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', marginBottom: 14 }}>
        <span onClick={() => setChain(!chain)} style={{ width: 14, height: 14, flex: 'none', borderRadius: 2, border: '1.5px solid #1C3D2E', background: chain ? '#1C3D2E' : '#FFFDE7', color: '#FAF8F2', fontSize: 10, lineHeight: '13px', textAlign: 'center', fontWeight: 700 }}>{chain ? '✓' : ''}</span>
        <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, color: '#1C3D2E' }} onClick={() => setChain(!chain)}>Open Add Product… on this process after saving</span>
      </label>
      <div style={S.note}>Saving files this process into the Templates library. Its Checklist section appears the moment its first product is added.</div>
    </div>
  );

  const SavedStage = () => (
    <div style={{ textAlign: 'center', padding: '28px 0' }}>
      <div style={{ width: 40, height: 40, borderRadius: 999, background: '#1C3D2E', color: '#FAF8F2', fontSize: 20, lineHeight: '40px', margin: '0 auto 12px' }}>✓</div>
      <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 16, color: '#1C3D2E', marginBottom: 6 }}>Saved to your library</div>
      <div style={{ ...S.note, padding: '0 12px' }}>
        {name} · {phases.length} phases · {stepTotal} steps. Find it on the Templates tab — its Checklist section appears with your first product{chain ? ' (Add Product… opens next)' : ''}.
      </div>
    </div>
  );

  /* ---- frame ---- */
  const canNext = stage === 0 ? Boolean(name.trim()) : stage === 1 ? phases.length > 0 : true;
  const next = () => {
    if (stage === 2 && phaseIx < phases.length - 1) { setPhaseIx(phaseIx + 1); return; }
    setStage(stage + 1);
  };
  const back = () => {
    if (stage === 2 && phaseIx > 0) { setPhaseIx(phaseIx - 1); return; }
    setStage(Math.max(0, stage - 1));
  };

  return (
    <div data-popover style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 332, background: '#FFFFFF', borderLeft: '1px solid rgba(28,61,46,0.18)', boxShadow: '-6px 0 18px rgba(28,61,46,0.14)', zIndex: 80, display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#1C3D2E', color: '#FAF8F2', padding: '11px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Column &amp; Co. · Add Process</span>
        <span onClick={onClose} style={{ cursor: 'pointer', fontSize: 14, opacity: 0.8 }}>✕</span>
      </div>
      {/* Stage bodies render as plain function calls (not <JSX/> elements):
          they close over wizard state, and element-izing them would remount
          the subtree on every keystroke and drop input focus. */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px' }} className="sheet-scroll">
        {!saved && Crumbs()}
        {saved ? SavedStage() :
          stage === 0 ? Foundation() :
          stage === 1 ? PhasePlan() :
          stage === 2 ? StepWalk() : SaveStage()}
      </div>
      {!saved && (
        <div style={{ borderTop: '1px solid rgba(28,61,46,0.12)', padding: '11px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FAF8F2' }}>
          {stage > 0 ? <button style={S.ghostBtn} onClick={back}>← Back</button> : <span></span>}
          {stage < 3
            ? <button style={{ ...S.btn, opacity: canNext ? 1 : 0.45 }} disabled={!canNext} onClick={next}>
                {stage === 2 ? (phaseIx < phases.length - 1 ? 'Next phase →' : 'Review →') : 'Continue →'}
              </button>
            : <button style={{ ...S.btn, opacity: stepTotal > 0 ? 1 : 0.45 }} disabled={!stepTotal} onClick={() => setSaved(true)}>Save process</button>}
        </div>
      )}
      {saved && (
        <div style={{ borderTop: '1px solid rgba(28,61,46,0.12)', padding: '11px 16px', textAlign: 'right', background: '#FAF8F2' }}>
          <button style={S.btn} onClick={onClose}>Done</button>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { AddProcessWizard });

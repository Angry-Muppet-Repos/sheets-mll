/* =====================================================================
   Google Sheets-style chrome wrapping the brand-content sheet area.
   - Top bar with file name + 💳 Column & Co. menu (faked dropdown)
   - Subtle toolbar
   - Tab strip at bottom (clickable)
   - Palette picker (24 palettes — the product differentiator)
   ===================================================================== */

function SheetsChrome({
  activeTab, onTabChange,
  paletteId, onPaletteChange,
  paletteOpen, setPaletteOpen,
  menuOpen, setMenuOpen,
  children,
}) {
  const data = window.CC_DATA;
  const palette = data.palettes.find(p => p.id === paletteId) || data.palettes[0];

  return (
    <div style={{ background: '#F1F3F4', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: 'Jost,sans-serif', color: '#202124' }}>
      {/* ------- Top bar — file name, menu, share ------- */}
      <div style={{ padding: '8px 14px 4px 14px', background: '#FFFFFF', borderBottom: '1px solid #E8EAED', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, background: '#1C3D2E', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={window.__resources.logoIconOnForest} alt="" style={{ height: 22, width: 'auto' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#202124' }}>The Foundation v2 — Brooks Household</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 2, fontSize: 11.5, color: '#5F6368' }}>
            <span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>Data</span><span>Tools</span><span>Extensions</span>
            <span data-popover-trigger style={{ position: 'relative', cursor: 'pointer', color: '#1C3D2E', fontWeight: 500 }} onClick={() => setMenuOpen(!menuOpen)}>
              💳 Column &amp; Co. ▾
              {menuOpen && <ScriptMenu close={() => setMenuOpen(false)} />}
            </span>
            <span>Help</span>
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={{ background: '#1A73E8', color: '#fff', border: 0, borderRadius: 4, padding: '7px 16px', fontSize: 12.5, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ display: 'inline-block', width: 14, height: 14, border: '1.5px solid #fff', borderRadius: 999, position: 'relative' }}>
              <span style={{ position: 'absolute', inset: 3, background: '#fff', borderRadius: 999 }}></span>
            </span>
            Share
          </button>
        </div>
      </div>

      {/* ------- Toolbar — fake but textured ------- */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8EAED', padding: '4px 14px', display: 'flex', alignItems: 'center', gap: 4, fontSize: 12 }}>
        {['Search the menus','↩','↪','🖨','%','100%','▾'].map((s,i) => (
          <span key={i} style={{ padding: '5px 8px', color: '#5F6368', cursor: 'pointer', borderRadius: 4 }}>{s}</span>
        ))}
        <span style={{ width: 1, height: 18, background: '#E8EAED', margin: '0 4px' }}></span>
        {['$','.0','123 ▾','Default (Ari... ▾','10 ▾','B','I','U','A ▾','▦ ▾','═ ▾','⬛ ▾'].map((s,i) => (
          <span key={i} style={{ padding: '5px 8px', color: '#5F6368', cursor: 'pointer', borderRadius: 4, fontFamily: i===5||i===6||i===7?'serif':'inherit', fontWeight: i===5?700:400, fontStyle: i===6?'italic':'normal', textDecoration: i===7?'underline':'none' }}>{s}</span>
        ))}
      </div>

      {/* ------- Formula bar ------- */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8EAED', padding: '5px 14px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
        <span style={{ background: '#F1F3F4', padding: '4px 10px', borderRadius: 4, color: '#5F6368', minWidth: 56, textAlign: 'center' }}>D4</span>
        <span style={{ color: '#5F6368', fontFamily: 'monospace' }}>ƒx</span>
        <span style={{ color: '#202124', fontFamily: 'monospace', fontSize: 12 }}>May 2026</span>
      </div>

      {/* ------- Main canvas with column letters + the sheet content ------- */}
      <div style={{ flex: 1, overflow: 'hidden', background: 'var(--pal-bg, #FAF8F2)', position: 'relative' }}>
        {/* Column letter strip + content scroll */}
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ width: 36, background: '#F8F9FA', borderRight: '1px solid #E8EAED', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 22, fontSize: 11, color: '#5F6368' }}>
            {['1','2','3','4','5','6','7','8','9'].map(n => <div key={n} style={{ height: 30, display: 'flex', alignItems: 'center' }}>{n}</div>)}
          </div>
          <div style={{ flex: 1, overflow: 'auto' }}>
            <div style={{ background: '#F8F9FA', borderBottom: '1px solid #E8EAED', padding: '4px 14px', fontSize: 11, color: '#5F6368', display: 'flex', gap: 0 }}>
              {['A','B','C','D','E','F','G','H','I','J','K','L','M','N'].map(c =>
                <div key={c} style={{ flex: 1, textAlign: 'center', minWidth: 72 }}>{c}</div>
              )}
            </div>
            {children}
          </div>
        </div>

        {/* ------- Palette picker (floating, branded) ------- */}
        <button
          data-popover-trigger
          onClick={() => setPaletteOpen(!paletteOpen)}
          style={{ position: 'absolute', top: 14, right: 16, background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.20)', borderRadius: 4, padding: '8px 12px', cursor: 'pointer', fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1C3D2E', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 4px 12px rgba(28,61,46,0.10)' }}
        >
          <span style={{ display: 'flex', gap: 2 }}>
            <span style={{ width: 12, height: 12, background: palette.primary, borderRadius: 2 }}></span>
            <span style={{ width: 12, height: 12, background: palette.mid, borderRadius: 2 }}></span>
            <span style={{ width: 12, height: 12, background: palette.accent, borderRadius: 2 }}></span>
          </span>
          {palette.name}
          <span style={{ opacity: 0.5, fontSize: 9 }}>▾</span>
        </button>
        {paletteOpen && (
          <PalettePicker active={paletteId} onPick={(id) => { onPaletteChange(id); setPaletteOpen(false); }} />
        )}
      </div>

      {/* ------- Tab strip ------- */}
      <div style={{ background: '#FFFFFF', borderTop: '1px solid #E8EAED', padding: '0 8px', display: 'flex', alignItems: 'center', gap: 0, fontSize: 12, height: 36, overflowX: 'auto' }}>
        <span style={{ padding: '0 8px', color: '#5F6368', cursor: 'pointer', fontSize: 16 }}>＋</span>
        <span style={{ padding: '0 8px', color: '#5F6368', cursor: 'pointer' }}>☰</span>
        {data.tabs.map(t => (
          <span
            key={t.id}
            onClick={() => onTabChange(t.id)}
            style={{
              padding: '8px 14px',
              cursor: 'pointer',
              fontWeight: activeTab === t.id ? 600 : 400,
              color: activeTab === t.id ? '#1C3D2E' : (t.system ? '#9AA0A6' : '#3C4043'),
              borderBottom: activeTab === t.id ? '3px solid var(--pal-primary, #1C3D2E)' : '3px solid transparent',
              borderTop: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
              borderLeft: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
              borderRight: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
              background: activeTab === t.id ? '#FFFFFF' : 'transparent',
              marginTop: activeTab === t.id ? 0 : 1,
              whiteSpace: 'nowrap',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Fake "💳 Column & Co." Apps Script menu ---------- */
function ScriptMenu({ close }) {
  const items = [
    { label: 'Import Bank Transactions', sep: 'after' },
    { label: 'Clear Paste Zone',          sep: 'after' },
    { label: 'Apply Theme',               sep: 'after' },
    { label: 'Renumber Ledger' },
    { label: 'Help / Quick Reference' },
  ];
  return (
    <div data-popover onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', top: '100%', left: 0, marginTop: 6, background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.18)', borderRadius: 4, minWidth: 240, boxShadow: '0 4px 12px rgba(28,61,46,0.18)', zIndex: 50, overflow: 'hidden' }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <div style={{ padding: '9px 16px', fontSize: 13, color: '#1C3D2E', cursor: 'pointer', fontWeight: 400 }} onMouseDown={close}>{it.label}</div>
          {it.sep && <div style={{ height: 1, background: 'rgba(28,61,46,0.10)' }}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ---------- The 24-palette picker — the headline feature ---------- */
function PalettePicker({ active, onPick }) {
  const palettes = window.CC_DATA.palettes;
  return (
    <div data-popover style={{ position: 'absolute', top: 50, right: 16, background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.18)', borderRadius: 6, padding: 16, width: 360, boxShadow: '0 8px 24px rgba(28,61,46,0.18)', zIndex: 60 }}>
      <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2D5C45', marginBottom: 10 }}>Choose Your Theme · 24 Palettes</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
        {palettes.map(p => (
          <div key={p.id} onClick={() => onPick(p.id)} style={{ cursor: 'pointer', border: active === p.id ? '2px solid #C5A95A' : '1px solid rgba(28,61,46,0.10)', borderRadius: 3, overflow: 'hidden', background: p.bg }}>
            <div style={{ display: 'flex', height: 24 }}>
              <div style={{ flex: 1, background: p.primary }}></div>
              <div style={{ flex: 1, background: p.mid }}></div>
              <div style={{ flex: 1, background: p.accent }}></div>
            </div>
            <div style={{ padding: '5px 6px', fontFamily: 'Jost,sans-serif', fontSize: 9.5, fontWeight: 500, color: '#1C3D2E', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, fontFamily: 'Jost,sans-serif', fontSize: 10.5, fontWeight: 300, color: 'rgba(28,61,46,0.6)' }}>Then run <strong style={{ color: '#1C3D2E', fontWeight: 600 }}>💳 Column &amp; Co. → Apply Theme</strong>.</div>
    </div>
  );
}

Object.assign(window, { SheetsChrome, ScriptMenu, PalettePicker });

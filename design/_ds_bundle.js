/* @ds-bundle: {"format":3,"namespace":"ColumnCoDesignSystem_503e82","components":[],"sourceHashes":{"design_handoff_foundation_v2/reference/chrome.jsx":"ae59925d8531","design_handoff_foundation_v2/reference/components.jsx":"1965192c2d2a","design_handoff_foundation_v2/reference/data.js":"437e2d3f352c","design_handoff_foundation_v2/reference/tabs-actions.jsx":"2a679c693c80","design_handoff_foundation_v2/reference/tabs-analysis.jsx":"29a157570c00","design_handoff_foundation_v2/reference/tabs-overview.jsx":"6734390cb454","export/src/chrome.jsx":"2284b950420d","export/src/components.jsx":"d18d27a312e9","export/src/data.js":"437e2d3f352c","export/src/tabs-actions.jsx":"2a679c693c80","export/src/tabs-analysis.jsx":"29a157570c00","export/src/tabs-overview.jsx":"6734390cb454","listing/design-canvas.jsx":"3b0e985041dd","listing/photos.jsx":"09a62d6e4f9a","site/design-canvas.jsx":"d3ddcf4241b9","site/wf-a-funnel.jsx":"9288ef9ba047","site/wf-b-rest.jsx":"6f592a3d2560","site/wf-shared.jsx":"4b7dc1e85769","ui_kits/foundation/chrome.jsx":"ae59925d8531","ui_kits/foundation/components.jsx":"1965192c2d2a","ui_kits/foundation/data.js":"437e2d3f352c","ui_kits/foundation/tabs-actions.jsx":"2a679c693c80","ui_kits/foundation/tabs-analysis.jsx":"29a157570c00","ui_kits/foundation/tabs-overview.jsx":"6734390cb454"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ColumnCoDesignSystem_503e82 = window.ColumnCoDesignSystem_503e82 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// design_handoff_foundation_v2/reference/chrome.jsx
try { (() => {
/* =====================================================================
   Google Sheets-style chrome wrapping the brand-content sheet area.
   - Top bar with file name + 💳 Column & Co. menu (faked dropdown)
   - Subtle toolbar
   - Tab strip at bottom (clickable)
   - Palette picker (24 palettes — the product differentiator)
   ===================================================================== */

function SheetsChrome({
  activeTab,
  onTabChange,
  paletteId,
  onPaletteChange,
  paletteOpen,
  setPaletteOpen,
  menuOpen,
  setMenuOpen,
  children
}) {
  const data = window.CC_DATA;
  const palette = data.palettes.find(p => p.id === paletteId) || data.palettes[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F1F3F4',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Jost,sans-serif',
      color: '#202124'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 14px 4px 14px',
      background: '#FFFFFF',
      borderBottom: '1px solid #E8EAED',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: '#1C3D2E',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-icon-on-forest.svg",
    alt: "",
    style: {
      height: 22,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#202124'
    }
  }, "The Foundation v2 \u2014 Brooks Household"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 2,
      fontSize: 11.5,
      color: '#5F6368'
    }
  }, /*#__PURE__*/React.createElement("span", null, "File"), /*#__PURE__*/React.createElement("span", null, "Edit"), /*#__PURE__*/React.createElement("span", null, "View"), /*#__PURE__*/React.createElement("span", null, "Insert"), /*#__PURE__*/React.createElement("span", null, "Format"), /*#__PURE__*/React.createElement("span", null, "Data"), /*#__PURE__*/React.createElement("span", null, "Tools"), /*#__PURE__*/React.createElement("span", null, "Extensions"), /*#__PURE__*/React.createElement("span", {
    "data-popover-trigger": true,
    style: {
      position: 'relative',
      cursor: 'pointer',
      color: '#1C3D2E',
      fontWeight: 500
    },
    onClick: () => setMenuOpen(!menuOpen)
  }, "\uD83D\uDCB3 Column & Co. \u25BE", menuOpen && /*#__PURE__*/React.createElement(ScriptMenu, {
    close: () => setMenuOpen(false)
  })), /*#__PURE__*/React.createElement("span", null, "Help"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#1A73E8',
      color: '#fff',
      border: 0,
      borderRadius: 4,
      padding: '7px 16px',
      fontSize: 12.5,
      fontWeight: 500,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 14,
      height: 14,
      border: '1.5px solid #fff',
      borderRadius: 999,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 3,
      background: '#fff',
      borderRadius: 999
    }
  })), "Share"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      borderBottom: '1px solid #E8EAED',
      padding: '4px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12
    }
  }, ['Search the menus', '↩', '↪', '🖨', '%', '100%', '▾'].map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: '5px 8px',
      color: '#5F6368',
      cursor: 'pointer',
      borderRadius: 4
    }
  }, s)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: '#E8EAED',
      margin: '0 4px'
    }
  }), ['$', '.0', '123 ▾', 'Default (Ari... ▾', '10 ▾', 'B', 'I', 'U', 'A ▾', '▦ ▾', '═ ▾', '⬛ ▾'].map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: '5px 8px',
      color: '#5F6368',
      cursor: 'pointer',
      borderRadius: 4,
      fontFamily: i === 5 || i === 6 || i === 7 ? 'serif' : 'inherit',
      fontWeight: i === 5 ? 700 : 400,
      fontStyle: i === 6 ? 'italic' : 'normal',
      textDecoration: i === 7 ? 'underline' : 'none'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      borderBottom: '1px solid #E8EAED',
      padding: '5px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#F1F3F4',
      padding: '4px 10px',
      borderRadius: 4,
      color: '#5F6368',
      minWidth: 56,
      textAlign: 'center'
    }
  }, "D4"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5F6368',
      fontFamily: 'monospace'
    }
  }, "\u0192x"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#202124',
      fontFamily: 'monospace',
      fontSize: 12
    }
  }, "May 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      background: 'var(--pal-bg, #FAF8F2)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      background: '#F8F9FA',
      borderRight: '1px solid #E8EAED',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 22,
      fontSize: 11,
      color: '#5F6368'
    }
  }, ['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      height: 30,
      display: 'flex',
      alignItems: 'center'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F8F9FA',
      borderBottom: '1px solid #E8EAED',
      padding: '4px 14px',
      fontSize: 11,
      color: '#5F6368',
      display: 'flex',
      gap: 0
    }
  }, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      flex: 1,
      textAlign: 'center',
      minWidth: 72
    }
  }, c))), children)), /*#__PURE__*/React.createElement("button", {
    "data-popover-trigger": true,
    onClick: () => setPaletteOpen(!paletteOpen),
    style: {
      position: 'absolute',
      top: 14,
      right: 16,
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.20)',
      borderRadius: 4,
      padding: '8px 12px',
      cursor: 'pointer',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#1C3D2E',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      boxShadow: '0 4px 12px rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: palette.primary,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: palette.mid,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: palette.accent,
      borderRadius: 2
    }
  })), palette.name, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5,
      fontSize: 9
    }
  }, "\u25BE")), paletteOpen && /*#__PURE__*/React.createElement(PalettePicker, {
    active: paletteId,
    onPick: id => {
      onPaletteChange(id);
      setPaletteOpen(false);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      borderTop: '1px solid #E8EAED',
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      fontSize: 12,
      height: 36,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 8px',
      color: '#5F6368',
      cursor: 'pointer',
      fontSize: 16
    }
  }, "\uFF0B"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 8px',
      color: '#5F6368',
      cursor: 'pointer'
    }
  }, "\u2630"), data.tabs.map(t => /*#__PURE__*/React.createElement("span", {
    key: t.id,
    onClick: () => onTabChange(t.id),
    style: {
      padding: '8px 14px',
      cursor: 'pointer',
      fontWeight: activeTab === t.id ? 600 : 400,
      color: activeTab === t.id ? '#1C3D2E' : t.system ? '#9AA0A6' : '#3C4043',
      borderBottom: activeTab === t.id ? '3px solid var(--pal-primary, #1C3D2E)' : '3px solid transparent',
      borderTop: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
      borderLeft: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
      borderRight: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
      background: activeTab === t.id ? '#FFFFFF' : 'transparent',
      marginTop: activeTab === t.id ? 0 : 1,
      whiteSpace: 'nowrap',
      fontFamily: 'Arial, sans-serif'
    }
  }, t.label))));
}

/* ---------- Fake "💳 Column & Co." Apps Script menu ---------- */
function ScriptMenu({
  close
}) {
  const items = [{
    label: 'Import Bank Transactions',
    sep: 'after'
  }, {
    label: 'Clear Paste Zone',
    sep: 'after'
  }, {
    label: 'Apply Theme',
    sep: 'after'
  }, {
    label: 'Renumber Ledger'
  }, {
    label: 'Help / Quick Reference'
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-popover": true,
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 6,
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.18)',
      borderRadius: 4,
      minWidth: 240,
      boxShadow: '0 4px 12px rgba(28,61,46,0.18)',
      zIndex: 50,
      overflow: 'hidden'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '9px 16px',
      fontSize: 13,
      color: '#1C3D2E',
      cursor: 'pointer',
      fontWeight: 400
    },
    onMouseDown: close
  }, it.label), it.sep && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(28,61,46,0.10)'
    }
  }))));
}

/* ---------- The 24-palette picker — the headline feature ---------- */
function PalettePicker({
  active,
  onPick
}) {
  const palettes = window.CC_DATA.palettes;
  return /*#__PURE__*/React.createElement("div", {
    "data-popover": true,
    style: {
      position: 'absolute',
      top: 50,
      right: 16,
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.18)',
      borderRadius: 6,
      padding: 16,
      width: 360,
      boxShadow: '0 8px 24px rgba(28,61,46,0.18)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#2D5C45',
      marginBottom: 10
    }
  }, "Choose Your Theme \xB7 24 Palettes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 6
    }
  }, palettes.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onPick(p.id),
    style: {
      cursor: 'pointer',
      border: active === p.id ? '2px solid #C5A95A' : '1px solid rgba(28,61,46,0.10)',
      borderRadius: 3,
      overflow: 'hidden',
      background: p.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.primary
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.mid
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.accent
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5px 6px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      color: '#1C3D2E',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.6)'
    }
  }, "Then run ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#1C3D2E',
      fontWeight: 600
    }
  }, "\uD83D\uDCB3 Column & Co. \u2192 Apply Theme"), "."));
}
Object.assign(window, {
  SheetsChrome,
  ScriptMenu,
  PalettePicker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_foundation_v2/reference/chrome.jsx", error: String((e && e.message) || e) }); }

// design_handoff_foundation_v2/reference/components.jsx
try { (() => {
/* =====================================================================
   Atoms shared across all Foundation tabs.
   Loaded as a Babel script tag — exports to window so other JSX files
   can use them.
   ===================================================================== */

const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

/* ---------- Section labels (caps, tracked-out, gold-stripe optional) ---- */
function SectionLabel({
  children,
  gold = false,
  dark = false,
  sub = ''
}) {
  const bg = dark ? 'var(--pal-mid, #2D5C45)' : 'transparent';
  const color = dark ? '#FAF8F2' : 'var(--pal-mid, #2D5C45)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color,
      padding: dark ? '7px 14px' : 0,
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 10.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, gold && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 3,
      height: 14,
      background: 'var(--pal-accent, #C5A95A)'
    }
  }), /*#__PURE__*/React.createElement("span", null, children), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(28,61,46,0.45)',
      fontWeight: 300,
      letterSpacing: '0.06em',
      marginLeft: 6
    }
  }, "\xB7 ", sub));
}

/* ---------- KPI Card — Dashboard top row ---- */
function KpiCard({
  label,
  value,
  sub,
  accent = 'primary',
  big = true
}) {
  // accent: 'primary' | 'mid' | 'gold' | 'danger' | 'success'
  const map = {
    primary: {
      bg: 'var(--pal-primary, #1C3D2E)',
      fg: '#FAF8F2'
    },
    mid: {
      bg: 'var(--pal-mid, #2D5C45)',
      fg: '#FAF8F2'
    },
    gold: {
      bg: 'var(--pal-accent, #C5A95A)',
      fg: '#1C3D2E'
    },
    danger: {
      bg: '#832f30',
      fg: '#FAF8F2'
    },
    success: {
      bg: '#16a34a',
      fg: '#FAF8F2'
    }
  };
  const m = map[accent] || map.primary;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: m.bg,
      color: m.fg,
      padding: '8px 14px',
      fontFamily: 'Jost,sans-serif',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderTop: 0,
      padding: '14px 14px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: big ? 28 : 22,
      lineHeight: 1,
      color: 'var(--pal-primary, #1C3D2E)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 10.5,
      color: 'rgba(28,61,46,0.6)',
      letterSpacing: '0.02em'
    }
  }, sub)));
}

/* ---------- Status chip ---- */
function Chip({
  status,
  children
}) {
  const map = {
    on: {
      bg: 'rgba(22,163,74,0.14)',
      fg: '#0F7A37',
      icon: '✓'
    },
    fair: {
      bg: 'rgba(197,169,90,0.22)',
      fg: '#7d6420',
      icon: '—'
    },
    warn: {
      bg: 'rgba(200,135,58,0.20)',
      fg: '#7a4c1e',
      icon: '⚠'
    },
    over: {
      bg: 'rgba(131,47,48,0.14)',
      fg: '#5e1f1f',
      icon: '✗'
    }
  };
  const m = map[status] || map.on;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: m.bg,
      color: m.fg,
      padding: '4px 10px',
      borderRadius: 999,
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 10.5,
      letterSpacing: '0.04em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, m.icon), /*#__PURE__*/React.createElement("span", null, children || {
    on: 'On Track',
    fair: 'Fair',
    warn: 'Caution',
    over: 'Over'
  }[status] || status));
}

/* ---------- Progress bar — used in goals & health ---- */
function Progress({
  pct,
  status = 'on',
  height = 8
}) {
  const fill = {
    on: 'var(--pal-primary, #1C3D2E)',
    fair: 'var(--pal-accent, #C5A95A)',
    warn: '#C8873A',
    over: '#832f30'
  }[status] || '#1C3D2E';
  const clamped = Math.max(0, Math.min(100, pct));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(28,61,46,0.10)',
      height,
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: clamped + '%',
      height: '100%',
      background: fill,
      transition: 'width 320ms cubic-bezier(0.4,0,0.2,1)'
    }
  }));
}

/* ---------- Money formatter ---- */
function fmt(n, opts = {}) {
  const sign = opts.signed && n > 0 ? '+' : '';
  const abs = Math.abs(n);
  const s = abs.toLocaleString('en-US', {
    minimumFractionDigits: opts.decimals ?? 0,
    maximumFractionDigits: opts.decimals ?? 0
  });
  return (n < 0 ? '−' : sign) + '$' + s;
}
function pct(n, d = 1) {
  return n.toFixed(d) + '%';
}

/* ---------- Column header bar (Forest stripe) ---- */
function ColHeader({
  cols,
  widths
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: widths.join(' '),
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      fontFamily: 'Jost,sans-serif',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '9px 12px',
      textAlign: c.align || 'left',
      borderRight: i < cols.length - 1 ? '1px solid rgba(250,248,242,0.10)' : 0
    }
  }, c.label)));
}

/* ---------- Data row with zebra ---- */
function DataRow({
  cols,
  widths,
  zebra,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: widths.join(' '),
      background: zebra ? 'var(--pal-zebra, #EEF2EC)' : '#FAF8F2',
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      color: 'var(--pal-primary, #1C3D2E)',
      borderBottom: last ? 0 : '1px solid rgba(28,61,46,0.06)'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 12px',
      textAlign: c.align || 'left',
      display: 'flex',
      alignItems: 'center',
      justifyContent: c.align === 'right' ? 'flex-end' : c.align === 'center' ? 'center' : 'flex-start',
      gap: 8,
      fontVariantNumeric: c.num ? 'tabular-nums' : 'normal',
      fontWeight: c.bold ? 600 : 400
    }
  }, c.content)));
}

/* ---------- Brand header inside the sheet (rows 1-3) ---- */
function SheetHeader({
  tab
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-icon-cream.svg",
    alt: "",
    style: {
      height: 30,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1
    }
  }, "Column & Co."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9,
      letterSpacing: '0.2em',
      color: 'var(--pal-accent, #C5A95A)',
      marginTop: 3
    }
  }, "LIFE, ORGANIZED."))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 300,
      color: '#FAF8F2',
      opacity: 0.78,
      letterSpacing: '0.04em'
    }
  }, "The Foundation v2 \xA0\xB7\xA0 ", tab)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-mid, #2D5C45)',
      height: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-accent, #C5A95A)',
      height: 3
    }
  }));
}

/* ---------- Footer ---- */
function SheetFooter({
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      padding: '11px 24px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 300,
      letterSpacing: '0.04em',
      textAlign: 'center',
      opacity: 0.95
    }
  }, "The Foundation v2.0 \xA0\xB7\xA0 columnandco.com ", note ? ' · ' + note : '');
}
Object.assign(window, {
  SectionLabel,
  KpiCard,
  Chip,
  Progress,
  fmt,
  pct,
  ColHeader,
  DataRow,
  SheetHeader,
  SheetFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_foundation_v2/reference/components.jsx", error: String((e && e.message) || e) }); }

// design_handoff_foundation_v2/reference/data.js
try { (() => {
/* =====================================================================
   COLUMN & CO. — THE FOUNDATION v2 · MOCK DATA
   Fictional couple Marcus & Elena Brooks · May 2026 view
   Source: COLUMN_CO_PROJECT__1_.md · _Engine + Trends + Categories tabs
   ===================================================================== */

window.CC_DATA = {
  buyer: {
    name: 'Marcus & Elena Brooks',
    month: 'May 2026'
  },
  // 6 months (Dec 2025 – May 2026) of income / expense / savings
  months: [{
    label: 'Dec 2025',
    short: 'Dec',
    income: 10120,
    expenses: 6094,
    net: 4026,
    savings_rate: 39.8
  }, {
    label: 'Jan 2026',
    short: 'Jan',
    income: 10180,
    expenses: 6420,
    net: 3760,
    savings_rate: 36.9
  }, {
    label: 'Feb 2026',
    short: 'Feb',
    income: 10200,
    expenses: 6612,
    net: 3588,
    savings_rate: 35.2
  }, {
    label: 'Mar 2026',
    short: 'Mar',
    income: 10215,
    expenses: 6740,
    net: 3475,
    savings_rate: 34.0
  }, {
    label: 'Apr 2026',
    short: 'Apr',
    income: 10220,
    expenses: 6905,
    net: 3315,
    savings_rate: 32.4
  }, {
    label: 'May 2026',
    short: 'May',
    income: 10230,
    expenses: 6980,
    net: 3250,
    savings_rate: 31.8
  }],
  // 24 months (Jun 2024 – May 2026). _Engine is wired for 24 months
  // per the project state ("IF-guarded, ready"). The Trends tab can
  // window this at 6 / 12 / 24.
  months_24: [{
    label: 'Jun 2024',
    short: 'Jun ’24',
    income: 9820,
    expenses: 5840,
    net: 3980,
    savings_rate: 40.5
  }, {
    label: 'Jul 2024',
    short: 'Jul ’24',
    income: 9870,
    expenses: 5910,
    net: 3960,
    savings_rate: 40.1
  }, {
    label: 'Aug 2024',
    short: 'Aug ’24',
    income: 9900,
    expenses: 5950,
    net: 3950,
    savings_rate: 39.9
  }, {
    label: 'Sep 2024',
    short: 'Sep ’24',
    income: 9940,
    expenses: 5880,
    net: 4060,
    savings_rate: 40.8
  }, {
    label: 'Oct 2024',
    short: 'Oct ’24',
    income: 9970,
    expenses: 6010,
    net: 3960,
    savings_rate: 39.7
  }, {
    label: 'Nov 2024',
    short: 'Nov ’24',
    income: 9985,
    expenses: 6090,
    net: 3895,
    savings_rate: 39.0
  }, {
    label: 'Dec 2024',
    short: 'Dec ’24',
    income: 10010,
    expenses: 6150,
    net: 3860,
    savings_rate: 38.6
  }, {
    label: 'Jan 2025',
    short: 'Jan ’25',
    income: 10045,
    expenses: 6020,
    net: 4025,
    savings_rate: 40.1
  }, {
    label: 'Feb 2025',
    short: 'Feb ’25',
    income: 10060,
    expenses: 5980,
    net: 4080,
    savings_rate: 40.6
  }, {
    label: 'Mar 2025',
    short: 'Mar ’25',
    income: 10080,
    expenses: 6090,
    net: 3990,
    savings_rate: 39.6
  }, {
    label: 'Apr 2025',
    short: 'Apr ’25',
    income: 10095,
    expenses: 6160,
    net: 3935,
    savings_rate: 39.0
  }, {
    label: 'May 2025',
    short: 'May ’25',
    income: 10100,
    expenses: 6240,
    net: 3860,
    savings_rate: 38.2
  }, {
    label: 'Jun 2025',
    short: 'Jun ’25',
    income: 10110,
    expenses: 6210,
    net: 3900,
    savings_rate: 38.6
  }, {
    label: 'Jul 2025',
    short: 'Jul ’25',
    income: 10115,
    expenses: 6280,
    net: 3835,
    savings_rate: 37.9
  }, {
    label: 'Aug 2025',
    short: 'Aug ’25',
    income: 10118,
    expenses: 6210,
    net: 3908,
    savings_rate: 38.6
  }, {
    label: 'Sep 2025',
    short: 'Sep ’25',
    income: 10120,
    expenses: 6020,
    net: 4100,
    savings_rate: 40.5
  }, {
    label: 'Oct 2025',
    short: 'Oct ’25',
    income: 10122,
    expenses: 6160,
    net: 3962,
    savings_rate: 39.1
  }, {
    label: 'Nov 2025',
    short: 'Nov ’25',
    income: 10120,
    expenses: 6055,
    net: 4065,
    savings_rate: 40.2
  }, {
    label: 'Dec 2025',
    short: 'Dec',
    income: 10120,
    expenses: 6094,
    net: 4026,
    savings_rate: 39.8
  }, {
    label: 'Jan 2026',
    short: 'Jan',
    income: 10180,
    expenses: 6420,
    net: 3760,
    savings_rate: 36.9
  }, {
    label: 'Feb 2026',
    short: 'Feb',
    income: 10200,
    expenses: 6612,
    net: 3588,
    savings_rate: 35.2
  }, {
    label: 'Mar 2026',
    short: 'Mar',
    income: 10215,
    expenses: 6740,
    net: 3475,
    savings_rate: 34.0
  }, {
    label: 'Apr 2026',
    short: 'Apr',
    income: 10220,
    expenses: 6905,
    net: 3315,
    savings_rate: 32.4
  }, {
    label: 'May 2026',
    short: 'May',
    income: 10230,
    expenses: 6980,
    net: 3250,
    savings_rate: 31.8
  }],
  // Dashboard top spending — current month
  top_spending: [{
    cat: 'Housing',
    spent: 2400,
    budget: 2400,
    status: 'on'
  }, {
    cat: 'Food & Dining',
    spent: 922,
    budget: 650,
    status: 'over'
  }, {
    cat: 'Shopping',
    spent: 618,
    budget: 500,
    status: 'over'
  }, {
    cat: 'Transportation',
    spent: 540,
    budget: 600,
    status: 'on'
  }, {
    cat: 'Utilities',
    spent: 360,
    budget: 380,
    status: 'on'
  }, {
    cat: 'Gifts & Donations',
    spent: 280,
    budget: 300,
    status: 'on'
  }, {
    cat: 'Entertainment',
    spent: 255,
    budget: 240,
    status: 'fair'
  }, {
    cat: 'Personal Care',
    spent: 180,
    budget: 200,
    status: 'on'
  }],
  // Dashboard right-rail "Month Snapshot"
  snapshot: {
    income: 10230,
    expenses: 6980,
    net: 3250,
    savings_rate: 31.8,
    avg_daily: 225,
    transactions: 76,
    largest_expense: 2400
  },
  // Spending breakdown — current month, donut-ready
  breakdown: [{
    cat: 'Housing',
    amount: 2400
  }, {
    cat: 'Food & Dining',
    amount: 922
  }, {
    cat: 'Transportation',
    amount: 540
  }, {
    cat: 'Shopping',
    amount: 618
  }, {
    cat: 'Utilities',
    amount: 360
  }, {
    cat: 'Entertainment',
    amount: 255
  }, {
    cat: 'Subscriptions',
    amount: 180
  }, {
    cat: 'Personal Care',
    amount: 180
  }, {
    cat: 'Gifts & Donations',
    amount: 280
  }, {
    cat: 'Health & Medical',
    amount: 165
  }, {
    cat: 'Insurance',
    amount: 220
  }, {
    cat: 'Misc',
    amount: 860
  }],
  // Goals
  goals: [{
    name: 'Emergency Fund',
    type: 'Savings Target',
    target: 22000,
    current: 22800,
    deadline: 'Dec 2026',
    status: 'on',
    note: '3–4 months expenses. At 3.3 months — almost there.'
  }, {
    name: 'Japan Trip Fund',
    type: 'Savings Target',
    target: 5000,
    current: 1700,
    deadline: 'Sep 2026',
    status: 'fair',
    note: 'Set a transfer rule: $200/mo to Ally Savings labeled Travel.'
  }, {
    name: 'Amex Gold Payoff',
    type: 'Debt Payoff',
    target: 1840,
    current: 1840,
    deadline: 'Dec 2026',
    status: 'fair',
    note: 'Starting balance $1,850. Pay $100 extra/mo above minimum.'
  }, {
    name: 'Food & Dining',
    type: 'Spending Limit',
    target: 650,
    current: 922,
    deadline: 'Monthly',
    status: 'over',
    note: 'Biggest leak. Cut delivery apps — cook 4 nights/week.'
  }, {
    name: 'Shopping',
    type: 'Spending Limit',
    target: 500,
    current: 618,
    deadline: 'Monthly',
    status: 'over',
    note: 'Amazon rule: 24-hour wait before buying.'
  }, {
    name: 'Entertainment',
    type: 'Spending Limit',
    target: 240,
    current: 255,
    deadline: 'Monthly',
    status: 'fair',
    note: 'Streaming + events. Currently on track.'
  }, {
    name: 'Monthly Savings Rate',
    type: 'Savings Rate',
    target: 20,
    current: 31.8,
    deadline: 'Ongoing',
    status: 'on',
    note: 'Goal: 20%+. Currently crushing it at 31.8%.'
  }],
  // Health Score — 5 weighted indicators
  health: {
    composite: 72,
    grade: 'Good',
    indicators: [{
      name: 'Savings Rate',
      value: '31.8%',
      score: 88,
      weight: 25,
      status: 'on',
      bench: '≥ 20% of income saved'
    }, {
      name: 'Expense-to-Income',
      value: '68.2%',
      score: 74,
      weight: 20,
      status: 'on',
      bench: '≤ 80% of income spent'
    }, {
      name: 'Emergency Fund',
      value: '3.3 mo',
      score: 80,
      weight: 20,
      status: 'on',
      bench: '≥ 3 months of expenses'
    }, {
      name: 'Budget Adherence',
      value: '6 of 8',
      score: 50,
      weight: 20,
      status: 'fair',
      bench: '≥ 80% categories on budget'
    }, {
      name: 'Debt-to-Income',
      value: '14.5%',
      score: 92,
      weight: 15,
      status: 'on',
      bench: '≤ 36% debt payments'
    }],
    biggest_opportunity: 'Food & Dining is 42% over budget — cutting it to plan lifts composite to ~78.'
  },
  // Net Worth
  net_worth: {
    total: 222640,
    assets: 244100,
    liabilities: 21460,
    change_mo: 3250,
    budget_accounts: [{
      name: 'Chase Joint Checking',
      type: 'Checking',
      owner: 'Joint',
      balance: 7200
    }, {
      name: 'Elena Checking',
      type: 'Checking',
      owner: 'Elena',
      balance: 2400
    }, {
      name: 'Marcus Checking',
      type: 'Checking',
      owner: 'Marcus',
      balance: 3100
    }, {
      name: 'Ally Savings',
      type: 'Savings',
      owner: 'Joint',
      balance: 22800
    }, {
      name: 'Ally Sinking Fund',
      type: 'Savings',
      owner: 'Joint',
      balance: 6400
    }, {
      name: 'Amex Gold Card',
      type: 'Credit',
      owner: 'Marcus',
      balance: -1840
    }, {
      name: 'Chase Sapphire Card',
      type: 'Credit',
      owner: 'Elena',
      balance: -1320
    }, {
      name: 'Marcus Auto Loan',
      type: 'Loan',
      owner: 'Marcus',
      balance: -18600
    }],
    investments: [{
      name: 'Marcus 401(k)',
      type: '401(k)',
      value: 98500
    }, {
      name: 'Elena 403(b)',
      type: '403(b)',
      value: 41200
    }, {
      name: 'Joint Brokerage',
      type: 'Brokerage',
      value: 27800
    }, {
      name: 'Marcus Roth IRA',
      type: 'Roth IRA',
      value: 19400
    }, {
      name: 'Elena Roth IRA',
      type: 'Roth IRA',
      value: 15600
    }]
  },
  // 24 palettes — pulled from _Config
  palettes: [{
    id: 'light',
    name: 'Light',
    primary: '#1C3D2E',
    mid: '#2D5C45',
    accent: '#C5A95A',
    bg: '#FAF8F2',
    zebra: '#EEF2EC',
    dark: '#111827',
    accentLight: '#F0EBD8'
  }, {
    id: 'warm-greige',
    name: 'Warm Greige',
    primary: '#3D2B1F',
    mid: '#5C4033',
    accent: '#C8873A',
    bg: '#FAF6F1',
    zebra: '#F0E8DC',
    dark: '#1C1009',
    accentLight: '#F5E6D3'
  }, {
    id: 'cool-slate',
    name: 'Cool Slate',
    primary: '#1E3A5F',
    mid: '#2D5282',
    accent: '#64748B',
    bg: '#F8FAFC',
    zebra: '#EFF6FF',
    dark: '#0F2440',
    accentLight: '#E2E8F0'
  }, {
    id: 'sage',
    name: 'Sage',
    primary: '#2D4A3E',
    mid: '#3D6455',
    accent: '#8FAF7E',
    bg: '#F4F9F1',
    zebra: '#EAF4E3',
    dark: '#1A2E25',
    accentLight: '#E8F5E0'
  }, {
    id: 'espresso',
    name: 'Espresso',
    primary: '#2C1810',
    mid: '#4A2C1A',
    accent: '#C8873A',
    bg: '#FAF5F0',
    zebra: '#F0E5D8',
    dark: '#120A04',
    accentLight: '#F5E6D3'
  }, {
    id: 'maize-navy',
    name: 'Maize & Navy',
    primary: '#003366',
    mid: '#004080',
    accent: '#FFCB05',
    bg: '#F5F8FF',
    zebra: '#E8F0FF',
    dark: '#001A33',
    accentLight: '#FFF5B0'
  }, {
    id: 'scarlet-gray',
    name: 'Scarlet & Gray',
    primary: '#BB0000',
    mid: '#CC0000',
    accent: '#808080',
    bg: '#F9F9F9',
    zebra: '#EFEFEF',
    dark: '#2C0000',
    accentLight: '#E8E8E8'
  }, {
    id: 'orange-navy',
    name: 'Orange & Navy',
    primary: '#002D6D',
    mid: '#003D94',
    accent: '#F47920',
    bg: '#F5F8FF',
    zebra: '#E8F0FF',
    dark: '#001540',
    accentLight: '#FFE4C4'
  }, {
    id: 'green-gold',
    name: 'Green & Gold',
    primary: '#154734',
    mid: '#1A5C43',
    accent: '#CBA135',
    bg: '#F3FAF5',
    zebra: '#E5F5EA',
    dark: '#0A2419',
    accentLight: '#FFF3C0'
  }, {
    id: 'purple-gold',
    name: 'Purple & Gold',
    primary: '#4A1C7C',
    mid: '#5E2499',
    accent: '#FFC72C',
    bg: '#FAF5FF',
    zebra: '#F3E8FF',
    dark: '#280D45',
    accentLight: '#FFF5B5'
  }, {
    id: 'crimson-white',
    name: 'Crimson & White',
    primary: '#9B1B30',
    mid: '#B52238',
    accent: '#FFFFFF',
    bg: '#FFF8F9',
    zebra: '#FFE8EC',
    dark: '#4A0010',
    accentLight: '#F5F5F5'
  }, {
    id: 'garnet-gold',
    name: 'Garnet & Gold',
    primary: '#782F40',
    mid: '#9B3B52',
    accent: '#CBA135',
    bg: '#FFF8F5',
    zebra: '#FFE8DC',
    dark: '#3D0A1A',
    accentLight: '#FFF3C0'
  }, {
    id: 'forest-white',
    name: 'Forest & White',
    primary: '#154733',
    mid: '#1E6048',
    accent: '#FFFFFF',
    bg: '#F4FBF6',
    zebra: '#E8F5EC',
    dark: '#0A2819',
    accentLight: '#F0FFF4'
  }, {
    id: 'royal-gold',
    name: 'Royal & Gold',
    primary: '#002D72',
    mid: '#003D9C',
    accent: '#B5A642',
    bg: '#F0F5FF',
    zebra: '#E0ECFF',
    dark: '#001040',
    accentLight: '#F5F0C0'
  }, {
    id: 'silver-black',
    name: 'Silver & Black',
    primary: '#1A1A1A',
    mid: '#2D2D2D',
    accent: '#A8A9AD',
    bg: '#F5F5F5',
    zebra: '#EBEBEB',
    dark: '#000000',
    accentLight: '#E8E8E8'
  }, {
    id: 'midnight',
    name: 'Midnight',
    primary: '#0B1F3A',
    mid: '#142E55',
    accent: '#14B8A6',
    bg: '#F0F4F8',
    zebra: '#E2E8F0',
    dark: '#050E1C',
    accentLight: '#99F6E4'
  }, {
    id: 'burgundy',
    name: 'Burgundy',
    primary: '#5C0A1A',
    mid: '#7A0E22',
    accent: '#E8D5B5',
    bg: '#FAF5F0',
    zebra: '#F0E6DA',
    dark: '#2E0510',
    accentLight: '#F5E8D5'
  }, {
    id: 'mocha',
    name: 'Mocha',
    primary: '#5C3A21',
    mid: '#7A4F2D',
    accent: '#D4A574',
    bg: '#FAF3EA',
    zebra: '#F0E2CE',
    dark: '#2E1D10',
    accentLight: '#F0DCC2'
  }, {
    id: 'indigo-blush',
    name: 'Indigo & Blush',
    primary: '#2E1F6B',
    mid: '#3D2A8C',
    accent: '#EAB0B8',
    bg: '#F7F4FA',
    zebra: '#ECE5F5',
    dark: '#170F36',
    accentLight: '#F8DEE3'
  }, {
    id: 'pine-brass',
    name: 'Pine & Brass',
    primary: '#1F3A2E',
    mid: '#2E5544',
    accent: '#B8964A',
    bg: '#F2F8F4',
    zebra: '#E1F0E7',
    dark: '#0E1D17',
    accentLight: '#E8D9A8'
  }, {
    id: 'ocean-coral',
    name: 'Ocean & Coral',
    primary: '#0F4858',
    mid: '#166075',
    accent: '#F47B6A',
    bg: '#F0F8FA',
    zebra: '#DCEFF2',
    dark: '#062430',
    accentLight: '#FBC8BD'
  }, {
    id: 'charcoal-mint',
    name: 'Charcoal & Mint',
    primary: '#2C2C2E',
    mid: '#44444A',
    accent: '#A8D5BA',
    bg: '#F5F5F5',
    zebra: '#E8E8E8',
    dark: '#161617',
    accentLight: '#D0EAD9'
  }, {
    id: 'olive-cream',
    name: 'Olive & Cream',
    primary: '#3D4A1F',
    mid: '#56672E',
    accent: '#C8B27A',
    bg: '#F7F4E8',
    zebra: '#ECE5D0',
    dark: '#1E2410',
    accentLight: '#E8D9A8'
  }, {
    id: 'custom',
    name: 'Custom',
    primary: '#1B2A4A',
    mid: '#2C3E6B',
    accent: '#C8873A',
    bg: '#F3F4F6',
    zebra: '#EEF0F5',
    dark: '#111827',
    accentLight: '#F5D9B0'
  }],
  tabs: [{
    id: 'start',
    label: 'Start Here'
  }, {
    id: 'trends',
    label: 'Trends'
  }, {
    id: 'dashboard',
    label: 'Dashboard'
  }, {
    id: 'budget',
    label: 'Monthly Budget'
  }, {
    id: 'health',
    label: 'Health Score'
  }, {
    id: 'goals',
    label: 'Goals'
  }, {
    id: 'tx',
    label: 'Transactions'
  }, {
    id: 'import',
    label: 'Bank Import Guide'
  }, {
    id: 'networth',
    label: 'Net Worth'
  }, {
    id: 'accounts',
    label: 'Accounts'
  }, {
    id: 'cats',
    label: 'Categories'
  }, {
    id: 'engine',
    label: '_Engine',
    system: true
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_foundation_v2/reference/data.js", error: String((e && e.message) || e) }); }

// design_handoff_foundation_v2/reference/tabs-actions.jsx
try { (() => {
/* =====================================================================
   ACTION TABS — Goals, Bank Import Guide, plus stubs for remaining tabs
   ===================================================================== */

/* ---------- GOALS ---------- */
function GoalsTab() {
  const goals = window.CC_DATA.goals;
  const onTrack = goals.filter(g => g.status === 'on').length;
  const fair = goals.filter(g => g.status === 'fair').length;
  const over = goals.filter(g => g.status === 'over').length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Goals"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Goals",
    value: goals.length + '',
    accent: "primary",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "On Track",
    value: onTrack + '',
    sub: 'of ' + goals.length,
    accent: "primary",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Need Attention",
    value: fair + over + '',
    accent: "danger",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Avg Progress",
    value: "68%",
    sub: "across all targets",
    accent: "gold",
    big: false
  })), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "LIVE PROGRESS FROM YOUR LEDGER"
  }, "YOUR GOALS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '0.7fr', '0.8fr', '1.5fr', '0.7fr'],
    cols: [{
      label: 'Goal'
    }, {
      label: 'Type'
    }, {
      label: 'Target',
      align: 'right'
    }, {
      label: 'Current',
      align: 'right'
    }, {
      label: 'Progress'
    }, {
      label: 'Status',
      align: 'right'
    }]
  }), goals.map((g, i) => {
    const isPct = g.type === 'Savings Rate';
    const pctVal = isPct ? g.current / g.target * 100 : g.type === 'Spending Limit' ? g.current / g.target * 100 : g.current / g.target * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: g.name
    }, /*#__PURE__*/React.createElement(DataRow, {
      widths: ['1.4fr', '0.9fr', '0.7fr', '0.8fr', '1.5fr', '0.7fr'],
      zebra: i % 2 === 1,
      last: false,
      cols: [{
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 500
          }
        }, g.name)
      }, {
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'Jost,sans-serif',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--pal-mid, #2D5C45)'
          }
        }, g.type)
      }, {
        content: isPct ? pct(g.target, 0) : fmt(g.target),
        align: 'right',
        num: true
      }, {
        content: isPct ? pct(g.current, 1) : fmt(g.current),
        align: 'right',
        num: true,
        bold: true
      }, {
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement(Progress, {
          pct: pctVal,
          status: g.status,
          height: 8
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            fontVariantNumeric: 'tabular-nums',
            fontSize: 11,
            color: 'rgba(28,61,46,0.65)',
            minWidth: 38,
            textAlign: 'right'
          }
        }, pctVal.toFixed(0), "%"))
      }, {
        content: /*#__PURE__*/React.createElement(Chip, {
          status: g.status
        }),
        align: 'right'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: i % 2 === 1 ? 'var(--pal-zebra, #EEF2EC)' : 'transparent',
        padding: '0 14px 12px 14px',
        fontFamily: 'Jost,sans-serif',
        fontSize: 11.5,
        fontWeight: 300,
        color: 'rgba(28,61,46,0.65)',
        fontStyle: 'italic',
        borderBottom: i < goals.length - 1 ? '1px solid rgba(28,61,46,0.06)' : 0
      }
    }, "Deadline: ", g.deadline, " \xA0\xB7\xA0 ", g.note));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: 24,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "FORECAST \xB7 IF YOU STAY THE COURSE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.2,
      marginTop: 10
    }
  }, "Japan Trip Fund hits target by ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "Oct\xA02026"), " \u2014 one month late."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      fontWeight: 300,
      lineHeight: 1.55,
      opacity: 0.78,
      marginTop: 10
    }
  }, "Bump your monthly transfer from $200 to $275 and you hit Sep deadline. Or skip 2 takeout dinners a week and the math works on its own.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "YOUR PACE NOW"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "Avg Monthly"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "$280")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "Need / Month"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "$275")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "To Catch Up"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "+$75"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Yellow cells = you edit \xB7 Grey cells = auto-calculated from your ledger"
  })));
}

/* ---------- BANK IMPORT GUIDE ---------- */
function BankImportTab() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Bank Import Guide"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "THREE STEPS \xB7 AUTO-CATEGORIZED"
  }, "PASTE YOUR BANK CSV"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10,
      marginTop: 14,
      marginBottom: 24
    }
  }, [{
    n: 1,
    t: 'Set the account',
    d: 'Type the account name in cell C6. Must match an entry on the Accounts tab.'
  }, {
    n: 2,
    t: 'Paste the CSV',
    d: 'Include the header row. We handle Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex.'
  }, {
    n: 3,
    t: 'Run import',
    d: '💳 Column & Co. → Import Bank Transactions. Auto-categorized. Dupes skipped.'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 999,
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--pal-primary, #1C3D2E)'
    }
  }, s.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.5
    }
  }, s.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--pal-mid, #2D5C45)'
    }
  }, "Account name (C6):"), /*#__PURE__*/React.createElement("input", {
    defaultValue: "Chase Joint Checking",
    style: {
      background: '#FFFDE7',
      border: '1px solid #C5A95A',
      borderRadius: 3,
      padding: '8px 12px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 13,
      color: '#1C3D2E',
      minWidth: 260,
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(SectionLabel, {
    sub: "PASTE ZONE \u2014 INCLUDE THE HEADER ROW",
    gold: true
  }, "STEP 2 \xB7 PASTE CSV"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F0FFF4',
      border: '2px solid #16A34A',
      borderRadius: 4,
      marginTop: 12,
      marginBottom: 24,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 2fr 0.8fr 0.8fr 0.7fr',
      background: '#FFFFFF',
      borderBottom: '1px solid rgba(22,163,74,0.30)',
      fontFamily: 'monospace',
      fontSize: 11,
      fontWeight: 600,
      color: '#1C3D2E'
    }
  }, ['Date', 'Description', 'Amount', 'Type', 'Memo'].map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      padding: '8px 12px',
      borderRight: '1px solid rgba(22,163,74,0.20)'
    }
  }, h))), [['05/02/2026', 'WHOLE FOODS MARKET', '-84.20', 'DEBIT', ''], ['05/02/2026', 'PAYROLL DEP - INTUIT', '5120.00', 'CREDIT', 'Bi-weekly'], ['05/03/2026', 'NETFLIX.COM', '-15.49', 'DEBIT', 'SUBS'], ['05/04/2026', 'UBER EATS', '-32.10', 'DEBIT', ''], ['05/05/2026', 'TRANSFER TO ALLY SVGS', '-500.00', 'DEBIT', 'Auto-tagged transfer']].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 2fr 0.8fr 0.8fr 0.7fr',
      background: i % 2 === 0 ? '#FFFFFF' : '#F0FFF4',
      fontFamily: 'monospace',
      fontSize: 11.5,
      color: '#1C3D2E'
    }
  }, r.map((v, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      padding: '7px 12px',
      borderRight: j < r.length - 1 ? '1px solid rgba(22,163,74,0.10)' : 0,
      borderBottom: '1px solid rgba(22,163,74,0.08)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontStyle: 'italic',
      color: 'rgba(22,163,74,0.85)'
    }
  }, "Paste up to 100 rows here. We sniff the header, parse the dates, classify Income/Expense/Transfer, and drop dupes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      padding: '10px 14px',
      borderRadius: '4px 4px 0 0',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "\u26A0 Review Income \u2014 Confirm which deposits count as real income"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderTop: 0,
      borderRadius: '0 0 4px 4px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['0.9fr', '1.8fr', '0.9fr', '0.8fr', '1.3fr'],
    cols: [{
      label: 'Month'
    }, {
      label: 'Description'
    }, {
      label: 'Amount',
      align: 'right'
    }, {
      label: 'Is Income?',
      align: 'center'
    }, {
      label: 'Note'
    }]
  }), [['May 2026', 'PAYROLL DEP - INTUIT', 5120, 'Yes', ''], ['May 2026', 'VENMO FROM ALEX', 80, 'No', 'Reimbursement, not income'], ['May 2026', 'REFUND - AMAZON', 42, 'No', 'Return refund']].map((r, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: i,
    widths: ['0.9fr', '1.8fr', '0.9fr', '0.8fr', '1.3fr'],
    zebra: i % 2 === 1,
    last: i === 2,
    cols: [{
      content: r[0]
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r[1])
    }, {
      content: fmt(r[2]),
      align: 'right',
      num: true
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          background: r[3] === 'Yes' ? '#FFFDE7' : '#FAF8F2',
          border: '1px solid ' + (r[3] === 'Yes' ? '#C5A95A' : 'rgba(28,61,46,0.20)'),
          padding: '4px 14px',
          borderRadius: 3,
          fontWeight: 500,
          fontSize: 11.5
        }
      }, r[3], " \u25BE"),
      align: 'center'
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11.5,
          fontStyle: 'italic',
          color: 'rgba(28,61,46,0.65)'
        }
      }, r[4])
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Auto-categorization uses the keyword rules on the Categories tab"
  })));
}

/* ---------- Generic stub tab for the rest ---------- */
function StubTab({
  tab,
  copy
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: tab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '40px 32px',
      minHeight: 500
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true
  }, tab.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 12,
      maxWidth: 640
    }
  }, copy), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.6)',
      marginTop: 14,
      maxWidth: 640,
      lineHeight: 1.55
    }
  }, "This tab exists in the actual product. The recreation focuses on the screens that sell the system. Switch to Dashboard, Trends, Goals, or Health Score to see the full visual treatment."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, null)));
}

/* ---------- MONTHLY BUDGET ---------- */
const BUDGET_PROFILES = {
  'dave-ramsey': {
    name: 'Dave Ramsey',
    sub: 'Envelopes · Baby Steps',
    blurb: 'The Ramsey Method: big slices for housing and food, every dollar named, aggressive debt snowball, 3-6 month emergency fund.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 900,
      'Transportation': 800,
      'Shopping': 250,
      'Utilities': 360,
      'Entertainment': 150,
      'Subscriptions': 60,
      'Personal Care': 150,
      'Gifts & Donations': 250,
      'Health & Medical': 200,
      'Insurance': 450,
      'Savings': 1500,
      'Debt Payments': 1500,
      'Education': 0,
      'Travel': 0,
      'Pets': 100,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 160
    }
  },
  '50-30-20': {
    name: '50/30/20',
    sub: 'Needs · Wants · Savings',
    blurb: 'Senator Warren\'s rule. 50% needs (housing, food, transport, insurance), 30% wants (dining out, shopping, entertainment), 20% savings + debt.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 750,
      'Transportation': 650,
      'Shopping': 620,
      'Utilities': 380,
      'Entertainment': 400,
      'Subscriptions': 180,
      'Personal Care': 200,
      'Gifts & Donations': 300,
      'Health & Medical': 200,
      'Insurance': 450,
      'Savings': 1500,
      'Debt Payments': 550,
      'Education': 100,
      'Travel': 400,
      'Pets': 150,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 700
    }
  },
  'fire': {
    name: 'FIRE',
    sub: 'Financial Independence · Retire Early',
    blurb: 'Optimized for a 50%+ savings rate. Lean fixed costs, minimal discretionary, max retirement and brokerage contributions. The r/financialindependence playbook.',
    income: 10230,
    targets: {
      'Housing': 1800,
      'Food & Dining': 500,
      'Transportation': 400,
      'Shopping': 200,
      'Utilities': 340,
      'Entertainment': 100,
      'Subscriptions': 30,
      'Personal Care': 80,
      'Gifts & Donations': 150,
      'Health & Medical': 150,
      'Insurance': 400,
      'Savings': 5200,
      'Debt Payments': 300,
      'Education': 0,
      'Travel': 200,
      'Pets': 80,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 300
    }
  },
  'zero-based': {
    name: 'Zero-Based',
    sub: 'Every dollar gets a job · YNAB-style',
    blurb: 'Income minus expenses equals zero. Nothing left unassigned. Real-world realistic: room for travel, education, eating out, plus disciplined savings.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 750,
      'Transportation': 600,
      'Shopping': 500,
      'Utilities': 380,
      'Entertainment': 240,
      'Subscriptions': 120,
      'Personal Care': 200,
      'Gifts & Donations': 300,
      'Health & Medical': 200,
      'Insurance': 450,
      'Savings': 2200,
      'Debt Payments': 700,
      'Education': 50,
      'Travel': 300,
      'Pets': 130,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 710
    }
  },
  'anti-budget': {
    name: 'Anti-Budget',
    sub: 'Paula Pant · Save first, spend the rest',
    blurb: 'Pay yourself 20% off the top into savings + retirement. Don\'t track the rest by category — if savings happens automatically, the spending takes care of itself.',
    income: 10230,
    targets: {
      'Housing': 2200,
      'Food & Dining': 700,
      'Transportation': 550,
      'Shopping': 600,
      'Utilities': 360,
      'Entertainment': 350,
      'Subscriptions': 150,
      'Personal Care': 180,
      'Gifts & Donations': 300,
      'Health & Medical': 200,
      'Insurance': 420,
      'Savings': 2050,
      'Debt Payments': 500,
      'Education': 100,
      'Travel': 400,
      'Pets': 130,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 1040
    }
  },
  'kakeibo': {
    name: 'Kakeibo',
    sub: 'Japanese 4-bucket · Needs · Wants · Culture · Unexpected',
    blurb: 'A 100-year-old Japanese mindful-money practice. Four hand-written buckets — survival, optional, culture & growth, and the unexpected. Reflect at month-end on what each category bought you.',
    income: 10230,
    targets: {
      'Housing': 2200,
      'Food & Dining': 750,
      'Transportation': 550,
      'Shopping': 350,
      'Utilities': 360,
      'Entertainment': 300,
      'Subscriptions': 90,
      'Personal Care': 150,
      'Gifts & Donations': 250,
      'Health & Medical': 200,
      'Insurance': 420,
      'Savings': 2200,
      'Debt Payments': 400,
      'Education': 300,
      'Travel': 350,
      'Pets': 100,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 1260
    }
  },
  'new-parent': {
    name: 'New Parent',
    sub: 'Young family · childcare + 529 priority',
    blurb: 'Childcare is now the second-largest line. Health & medical and insurance climb. Discretionary (travel, dining, entertainment) compresses to make room — and a 529 contribution lands under Education.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 900,
      'Transportation': 550,
      'Shopping': 350,
      'Utilities': 380,
      'Entertainment': 100,
      'Subscriptions': 80,
      'Personal Care': 120,
      'Gifts & Donations': 150,
      'Health & Medical': 350,
      'Insurance': 550,
      'Savings': 1100,
      'Debt Payments': 500,
      'Education': 200,
      'Travel': 100,
      'Pets': 80,
      'Childcare': 1800,
      'Business': 0,
      'Taxes': 0,
      'Misc': 520
    }
  },
  'self-employed': {
    name: 'Self-Employed',
    sub: '1099 · 25% tax set-aside · biz expenses',
    blurb: 'Built for freelancers, contractors, and Etsy sellers. A quarter of every dollar earned is escrowed for quarterly taxes. Business pulls a real line. Self-paid health insurance is heavier than a W-2 budget.',
    income: 10230,
    targets: {
      'Housing': 1900,
      'Food & Dining': 600,
      'Transportation': 450,
      'Shopping': 250,
      'Utilities': 320,
      'Entertainment': 150,
      'Subscriptions': 100,
      'Personal Care': 120,
      'Gifts & Donations': 150,
      'Health & Medical': 200,
      'Insurance': 700,
      'Savings': 1200,
      'Debt Payments': 400,
      'Education': 150,
      'Travel': 200,
      'Pets': 80,
      'Childcare': 0,
      'Business': 600,
      'Taxes': 2560,
      'Misc': 100
    }
  },
  'hcol-renter': {
    name: 'HCOL Renter',
    sub: 'High-cost city · 40% housing · student loans',
    blurb: 'For NYC, SF, Seattle, Boston, DC. Rent eats 40%. Student-loan payments get a serious line. Less car, less stuff, more transit. Savings is what\'s left — and that\'s okay, the location is the investment.',
    income: 10230,
    targets: {
      'Housing': 4100,
      'Food & Dining': 800,
      'Transportation': 350,
      'Shopping': 300,
      'Utilities': 280,
      'Entertainment': 200,
      'Subscriptions': 100,
      'Personal Care': 150,
      'Gifts & Donations': 100,
      'Health & Medical': 150,
      'Insurance': 280,
      'Savings': 900,
      'Debt Payments': 1100,
      'Education': 50,
      'Travel': 300,
      'Pets': 80,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 990
    }
  },
  'custom': {
    name: 'Custom',
    sub: 'You set every target',
    blurb: 'Click any yellow cell to edit. Totals update live. Build a profile that matches your real life — then save it as your personal default.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 650,
      'Transportation': 600,
      'Shopping': 500,
      'Utilities': 380,
      'Entertainment': 240,
      'Subscriptions': 120,
      'Personal Care': 200,
      'Gifts & Donations': 300,
      'Health & Medical': 180,
      'Insurance': 400,
      'Savings': 1800,
      'Debt Payments': 700,
      'Education': 50,
      'Travel': 250,
      'Pets': 120,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 200
    }
  }
};
function MonthlyBudgetTab() {
  const [profileId, setProfileId] = React.useState('dave-ramsey');
  const [customOverrides, setCustomOverrides] = React.useState({});
  const profile = BUDGET_PROFILES[profileId];
  const income = profile.income;
  const isCustom = profileId === 'custom';

  // For Custom, merge defaults + overrides
  const targets = isCustom ? {
    ...profile.targets,
    ...customOverrides
  } : profile.targets;
  const total = Object.values(targets).reduce((a, b) => a + b, 0);
  const remaining = income - total;
  const savingsRate = (targets['Savings'] || 0) / income * 100;
  const cats = Object.keys(profile.targets);
  const half = Math.ceil(cats.length / 2);
  const left = cats.slice(0, half);
  const right = cats.slice(half);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Monthly Budget"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 18,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "PICK A PROFILE OR SET YOUR OWN"
  }, "DESIRED FINANCIAL PROFILE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 10
    }
  }, profile.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--pal-accent, #C5A95A)',
      marginTop: 4
    }
  }, profile.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 13,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.55,
      marginTop: 10,
      maxWidth: 540
    }
  }, profile.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10,
      minWidth: 420
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Monthly Income",
    value: fmt(income),
    accent: "primary",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Budgeted",
    value: fmt(total),
    sub: remaining >= 0 ? fmt(remaining) + ' free' : fmt(-remaining) + ' over',
    accent: remaining < 0 ? 'danger' : 'mid',
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Savings Rate",
    value: pct(savingsRate, 1),
    sub: "of income",
    accent: "gold",
    big: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-profile-scroll",
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 8,
      scrollbarWidth: 'thin',
      maskImage: 'linear-gradient(to right, transparent 0, #000 18px, #000 calc(100% - 36px), transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 18px, #000 calc(100% - 36px), transparent 100%)'
    }
  }, Object.entries(BUDGET_PROFILES).map(([id, p]) => {
    const active = id === profileId;
    const pSavings = (p.targets['Savings'] || 0) / p.income * 100;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setProfileId(id),
      style: {
        flex: '0 0 auto',
        cursor: 'pointer',
        background: active ? 'var(--pal-primary, #1C3D2E)' : '#FAF8F2',
        color: active ? '#FAF8F2' : '#1C3D2E',
        border: '1px solid ' + (active ? 'var(--pal-primary, #1C3D2E)' : 'rgba(28,61,46,0.16)'),
        borderRadius: 999,
        padding: '8px 14px 8px 12px',
        fontFamily: 'Jost,sans-serif',
        fontSize: 12.5,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        whiteSpace: 'nowrap',
        transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease',
        boxShadow: active ? '0 1px 2px rgba(28,61,46,0.18)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 999,
        background: active ? 'var(--pal-accent, #C5A95A)' : 'rgba(28,61,46,0.22)',
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        opacity: active ? 0.75 : 0.55,
        fontVariantNumeric: 'tabular-nums',
        borderLeft: '1px solid ' + (active ? 'rgba(250,248,242,0.22)' : 'rgba(28,61,46,0.14)'),
        paddingLeft: 10,
        letterSpacing: '0.02em'
      }
    }, pct(pSavings, 0), " save"));
  }))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: isCustom ? 'EDIT ANY YELLOW CELL' : 'PRESET FROM PROFILE'
  }, "CATEGORY TARGETS \xB7 20 CATEGORIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 12
    }
  }, [left, right].map((col, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '0.5fr', '0.9fr'],
    cols: [{
      label: 'Category'
    }, {
      label: 'Target',
      align: 'right'
    }, {
      label: '% Inc',
      align: 'right'
    }, {
      label: 'Share'
    }]
  }), col.map((cat, i) => {
    const val = targets[cat];
    const pctInc = val / income * 100;
    const share = val / Math.max(...Object.values(targets));
    return /*#__PURE__*/React.createElement(DataRow, {
      key: cat,
      widths: ['1.4fr', '0.9fr', '0.5fr', '0.9fr'],
      zebra: i % 2 === 1,
      last: i === col.length - 1,
      cols: [{
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 500
          }
        }, cat)
      }, {
        content: isCustom ? /*#__PURE__*/React.createElement("input", {
          type: "number",
          value: val,
          onChange: e => setCustomOverrides({
            ...customOverrides,
            [cat]: Number(e.target.value) || 0
          }),
          style: {
            width: 70,
            background: '#FFFDE7',
            border: '1px solid #C5A95A',
            borderRadius: 3,
            padding: '3px 6px',
            fontFamily: 'Jost,sans-serif',
            fontVariantNumeric: 'tabular-nums',
            fontSize: 12,
            textAlign: 'right',
            color: '#1C3D2E',
            outline: 'none',
            fontWeight: 500
          }
        }) : /*#__PURE__*/React.createElement("span", null, fmt(val)),
        align: 'right',
        num: true
      }, {
        content: pctInc.toFixed(1) + '%',
        align: 'right',
        num: true
      }, {
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            height: 5,
            background: 'rgba(28,61,46,0.08)',
            borderRadius: 1,
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: share * 100 + '%',
            height: '100%',
            background: cat === 'Savings' ? 'var(--pal-accent, #C5A95A)' : cat === 'Debt Payments' ? '#832f30' : 'var(--pal-primary, #1C3D2E)',
            transition: 'width 220ms'
          }
        }))
      }]
    });
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 10,
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: '16px 22px',
      marginTop: 16
    }
  }, [['MONTHLY INCOME', fmt(income)], ['TOTAL BUDGETED', fmt(total)], [remaining >= 0 ? 'UNALLOCATED' : 'OVER BUDGET', (remaining >= 0 ? '+' : '−') + fmt(Math.abs(remaining)).replace('$', '$')], ['SAVINGS RATE', pct(savingsRate, 1)]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(250,248,242,0.60)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 22,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums',
      color: i === 2 && remaining < 0 ? '#fca5a5' : i === 2 ? '#86efac' : '#FAF8F2'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Targets feed Dashboard's % of Budget and Health Score's Budget Adherence"
  })));
}
Object.assign(window, {
  GoalsTab,
  BankImportTab,
  StubTab,
  MonthlyBudgetTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_foundation_v2/reference/tabs-actions.jsx", error: String((e && e.message) || e) }); }

// design_handoff_foundation_v2/reference/tabs-analysis.jsx
try { (() => {
/* =====================================================================
   ANALYSIS TABS — Trends, Health Score, Net Worth
   ===================================================================== */

/* ---------- TRENDS ---------- */
function TrendsTab() {
  const all = window.CC_DATA.months_24;
  const [window_, setWindow] = React.useState(6);
  const months = all.slice(-window_);
  const windowLabel = months[0].label + ' – ' + months[months.length - 1].label;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Trends"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: `${months.length} MONTHS · ${windowLabel.toUpperCase()}`
  }, "INCOME VS EXPENSES"), /*#__PURE__*/React.createElement(WindowToggle, {
    value: window_,
    onChange: setWindow
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 22,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(IncomeExpensesChart, {
    months: months
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      marginTop: 14,
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      color: 'rgba(28,61,46,0.75)'
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--pal-primary, #1C3D2E)",
    label: "Income"
  }), /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--pal-mid, #2D5C45)",
    label: "Expenses",
    pattern: "diag"
  }), /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--pal-accent, #C5A95A)",
    label: "Savings Rate",
    line: true
  }))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: `${months.length}-MONTH WINDOW`
  }, "INCOME VS EXPENSES \xB7 TABLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1fr', '1fr', '1fr', '1fr', '1fr'],
    cols: [{
      label: 'Month'
    }, {
      label: 'Income',
      align: 'right'
    }, {
      label: 'Expenses',
      align: 'right'
    }, {
      label: 'Net Cash Flow',
      align: 'right'
    }, {
      label: 'Savings Rate',
      align: 'right'
    }]
  }), months.map((m, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: m.label,
    widths: ['1fr', '1fr', '1fr', '1fr', '1fr'],
    zebra: i % 2 === 1,
    last: false,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, m.label)
    }, {
      content: fmt(m.income),
      align: 'right',
      num: true
    }, {
      content: fmt(m.expenses),
      align: 'right',
      num: true
    }, {
      content: fmt(m.net, {
        signed: true
      }),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: pct(m.savings_rate),
      align: 'right',
      num: true
    }]
  })), /*#__PURE__*/React.createElement(DataRow, {
    widths: ['1fr', '1fr', '1fr', '1fr', '1fr'],
    zebra: false,
    last: true,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          fontFamily: 'Jost,sans-serif',
          fontSize: 10,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--pal-mid, #2D5C45)'
        }
      }, months.length, "-Month Total")
    }, {
      content: fmt(months.reduce((a, m) => a + m.income, 0)),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: fmt(months.reduce((a, m) => a + m.expenses, 0)),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: fmt(months.reduce((a, m) => a + m.net, 0), {
        signed: true
      }),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: pct(months.reduce((a, m) => a + m.savings_rate, 0) / months.length),
      align: 'right',
      num: true,
      bold: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "WITH 6-MONTH SPARKLINES"
  }, "SPENDING BY CATEGORY"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12
    }
  }, [{
    cat: 'Food & Dining',
    vals: [380, 540, 685, 760, 855, 922],
    delta: '+142%',
    status: 'over'
  }, {
    cat: 'Subscriptions',
    vals: [48, 78, 95, 124, 162, 180],
    delta: '+275%',
    status: 'over'
  }, {
    cat: 'Housing',
    vals: [2400, 2400, 2400, 2400, 2400, 2400],
    delta: '0%',
    status: 'on'
  }, {
    cat: 'Transportation',
    vals: [520, 540, 510, 580, 555, 540],
    delta: '+4%',
    status: 'on'
  }, {
    cat: 'Shopping',
    vals: [320, 410, 460, 520, 580, 618],
    delta: '+93%',
    status: 'fair'
  }, {
    cat: 'Utilities',
    vals: [340, 355, 360, 370, 365, 360],
    delta: '+6%',
    status: 'on'
  }, {
    cat: 'Entertainment',
    vals: [180, 195, 210, 225, 240, 255],
    delta: '+42%',
    status: 'fair'
  }, {
    cat: 'Personal Care',
    vals: [160, 175, 170, 165, 175, 180],
    delta: '+12%',
    status: 'on'
  }].map((r, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: r.cat,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1.8fr 0.7fr 0.6fr',
      gap: 14,
      alignItems: 'center',
      padding: '10px 14px',
      background: i % 2 === 1 ? 'var(--pal-zebra, #EEF2EC)' : 'transparent',
      borderBottom: i < arr.length - 1 ? '1px solid rgba(28,61,46,0.06)' : 0,
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      color: 'var(--pal-primary, #1C3D2E)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, r.cat), /*#__PURE__*/React.createElement(Sparkline, {
    vals: r.vals,
    status: r.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600,
      textAlign: 'right',
      color: r.status === 'over' ? '#832f30' : r.status === 'fair' ? '#7d6420' : '#0F7A37'
    }
  }, r.delta), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    status: r.status
  })))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true
  }, months.length, "-MONTH KEY INSIGHTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 18,
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, (() => {
    const sorted = [...months].sort((a, b) => b.savings_rate - a.savings_rate);
    const bestSave = sorted[0];
    const sortedI = [...months].sort((a, b) => b.income - a.income);
    const highIncome = sortedI[0];
    const sortedE = [...months].sort((a, b) => a.expenses - b.expenses);
    const lowExp = sortedE[0];
    const avgI = months.reduce((a, m) => a + m.income, 0) / months.length;
    const avgE = months.reduce((a, m) => a + m.expenses, 0) / months.length;
    const avgSr = months.reduce((a, m) => a + m.savings_rate, 0) / months.length;
    const totalSaved = months.reduce((a, m) => a + m.net, 0);
    return [['BEST SAVINGS MONTH', bestSave.label, pct(bestSave.savings_rate) + ' rate'], ['HIGHEST INCOME', highIncome.label, fmt(highIncome.income)], ['LOWEST EXPENSE', lowExp.label, fmt(lowExp.expenses)], ['AVG MONTHLY INCOME', fmt(avgI), months.length + '-mo'], ['AVG MONTHLY EXP', fmt(avgE), months.length + '-mo'], ['AVG SAVINGS RATE', pct(avgSr), months.length + '-mo'], ['TOTAL SAVED', fmt(totalSaved), months.length + '-mo']];
  })().map(([k, v, sub]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10,
      borderBottom: '1px solid rgba(28,61,46,0.06)',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 13.5,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 3
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--pal-primary, #1C3D2E)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Trends update automatically as transactions are imported"
  })));
}

/* ---------- Income vs Expenses chart (grouped bar + line overlay) ---------- */
function IncomeExpensesChart({
  months
}) {
  const W = 880,
    H = 240,
    pad = {
      l: 56,
      r: 50,
      t: 12,
      b: 32
    };
  const innerW = W - pad.l - pad.r,
    innerH = H - pad.t - pad.b;
  const maxY = Math.max(...months.flatMap(m => [m.income, m.expenses])) * 1.05;
  const minR = 0,
    maxR = 50;
  const bw = innerW / months.length;
  // Tighten gap when there are many months
  const gap = months.length <= 6 ? 14 : months.length <= 12 ? 6 : 3;
  const bw2 = Math.max(2, (bw - gap) / 2);
  // Show every Nth label only
  const labelEvery = months.length <= 6 ? 1 : months.length <= 12 ? 2 : 4;
  const linePts = months.map((m, i) => {
    const x = pad.l + i * bw + bw / 2;
    const y = pad.t + innerH - (m.savings_rate - minR) / (maxR - minR) * innerH;
    return [x, y];
  });
  const path = 'M ' + linePts.map(p => p.join(' ')).join(' L ');
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "xMidYMid meet",
    style: {
      display: 'block'
    }
  }, [0, 0.25, 0.5, 0.75, 1].map(t => {
    const y = pad.t + innerH - t * innerH;
    const v = maxY * t;
    return /*#__PURE__*/React.createElement("g", {
      key: t
    }, /*#__PURE__*/React.createElement("line", {
      x1: pad.l,
      y1: y,
      x2: W - pad.r,
      y2: y,
      stroke: "rgba(28,61,46,0.08)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: pad.l - 8,
      y: y + 4,
      textAnchor: "end",
      style: {
        fontFamily: 'Jost,sans-serif',
        fontSize: 10,
        fill: 'rgba(28,61,46,0.55)'
      }
    }, "$", (v / 1000).toFixed(0), "k"));
  }), months.map((m, i) => {
    const x = pad.l + i * bw + gap / 2;
    const hi = m.income / maxY * innerH;
    const he = m.expenses / maxY * innerH;
    const showLabel = i % labelEvery === 0 || i === months.length - 1;
    return /*#__PURE__*/React.createElement("g", {
      key: m.label + i
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: pad.t + innerH - hi,
      width: bw2,
      height: hi,
      fill: "var(--pal-primary, #1C3D2E)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: x + bw2 + 1,
      y: pad.t + innerH - he,
      width: bw2,
      height: he,
      fill: "var(--pal-mid, #2D5C45)",
      opacity: "0.78"
    }), showLabel && /*#__PURE__*/React.createElement("text", {
      x: pad.l + i * bw + bw / 2,
      y: H - 10,
      textAnchor: "middle",
      style: {
        fontFamily: 'Jost,sans-serif',
        fontSize: 10,
        fill: 'rgba(28,61,46,0.65)',
        letterSpacing: '0.04em'
      }
    }, m.short));
  }), [0, 0.25, 0.5, 0.75, 1].map(t => {
    const y = pad.t + innerH - t * innerH;
    return /*#__PURE__*/React.createElement("text", {
      key: t,
      x: W - pad.r + 8,
      y: y + 4,
      style: {
        fontFamily: 'Jost,sans-serif',
        fontSize: 10,
        fill: 'var(--pal-accent, #C5A95A)'
      }
    }, (maxR * t).toFixed(0), "%");
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "var(--pal-accent, #C5A95A)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), linePts.map((p, i) => {
    const showDot = months.length <= 12 || i % 4 === 0 || i === linePts.length - 1;
    return showDot ? /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p[0],
      cy: p[1],
      r: months.length <= 6 ? 4 : 3,
      fill: "var(--pal-bg, #FAF8F2)",
      stroke: "var(--pal-accent, #C5A95A)",
      strokeWidth: "2"
    }) : null;
  }));
}

/* ---------- Sparkline ---------- */
function Sparkline({
  vals,
  status,
  w = 140,
  h = 28
}) {
  const min = Math.min(...vals),
    max = Math.max(...vals);
  const span = max - min || 1;
  const points = vals.map((v, i) => [i / (vals.length - 1) * (w - 4) + 2, h - 2 - (v - min) / span * (h - 8)]);
  const path = 'M ' + points.map(p => p.join(' ')).join(' L ');
  const fill = status === 'over' ? '#832f30' : status === 'fair' ? '#C5A95A' : '#2D5C45';
  const area = `M ${points[0][0]} ${h - 2} L ` + points.map(p => p.join(' ')).join(' L ') + ` L ${points[points.length - 1][0]} ${h - 2} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: fill,
    opacity: "0.10"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: fill,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), points.map((p, i) => i === points.length - 1 ? /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "2.5",
    fill: fill
  }) : null));
}
function Legend({
  swatch,
  label,
  line,
  pattern
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, line ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 18,
      height: 0,
      borderTop: '2.5px solid ' + swatch
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 14,
      height: 14,
      background: swatch,
      opacity: pattern ? 0.78 : 1,
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}

/* ---------- Window toggle: 6 / 12 / 24 months ---------- */
function WindowToggle({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.18)',
      borderRadius: 3,
      padding: 2,
      fontFamily: 'Jost,sans-serif'
    }
  }, [6, 12, 24].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => onChange(n),
    style: {
      background: value === n ? 'var(--pal-primary, #1C3D2E)' : 'transparent',
      color: value === n ? '#FAF8F2' : 'rgba(28,61,46,0.65)',
      border: 0,
      borderRadius: 2,
      padding: '5px 14px',
      fontFamily: 'inherit',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, n, " mo")));
}

/* ---------- HEALTH SCORE ---------- */
function HealthScoreTab() {
  const h = window.CC_DATA.health;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Health Score"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "VIEWING: SEE MONTH SELECTOR ON DASHBOARD"
  }, "COMPOSITE HEALTH SCORE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 22,
      marginTop: 14,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "YOUR SCORE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 92,
      lineHeight: 1,
      color: '#FAF8F2'
    }
  }, h.composite), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, h.grade)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 300,
      color: '#FAF8F2',
      opacity: 0.65,
      marginTop: 4
    }
  }, "out of 100 \xB7 weighted composite"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      height: 14,
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 45,
      background: '#832f30'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 15,
      background: '#C8873A'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 15,
      background: '#C5A95A'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 15,
      background: '#2D5C45'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 10,
      background: '#16a34a'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 14,
      marginTop: -14,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${h.composite}%`,
      top: -3,
      transform: 'translateX(-50%)',
      width: 2,
      height: 20,
      background: '#FAF8F2',
      boxShadow: '0 0 0 2px #1C3D2E'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      fontFamily: 'Jost,sans-serif',
      fontSize: 9,
      color: 'rgba(250,248,242,0.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Critical"), /*#__PURE__*/React.createElement("span", null, "Needs Work"), /*#__PURE__*/React.createElement("span", null, "Fair"), /*#__PURE__*/React.createElement("span", null, "Good"), /*#__PURE__*/React.createElement("span", null, "Excellent"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "\u26A1 BIGGEST OPPORTUNITY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.15,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 10
    }
  }, h.biggest_opportunity.split('—')[0].trim()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'rgba(28,61,46,0.75)',
      marginTop: 10
    }
  }, h.biggest_opportunity.split('—')[1] ? h.biggest_opportunity.split('—')[1].trim() : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, "If you fix this"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 2
    }
  }, "72 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(28,61,46,0.30)'
    }
  }, "\u2192"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#0F7A37'
    }
  }, "78"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'Jost,sans-serif',
      fontSize: 11.5,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.65)',
      borderLeft: '1px solid rgba(28,61,46,0.10)',
      paddingLeft: 18
    }
  }, "Cut Food & Dining by 25% next month to hit the 80 \"Excellent\" threshold by Q3.")))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "WHAT'S DRIVING YOUR SCORE"
  }, "FIVE INDICATORS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '1.5fr', '0.5fr', '0.7fr', '1.5fr'],
    cols: [{
      label: 'Indicator'
    }, {
      label: 'Your Value',
      align: 'right'
    }, {
      label: 'Score'
    }, {
      label: 'Wt',
      align: 'right'
    }, {
      label: 'Status',
      align: 'right'
    }, {
      label: 'Benchmark'
    }]
  }), h.indicators.map((ind, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: ind.name,
    widths: ['1.4fr', '0.9fr', '1.5fr', '0.5fr', '0.7fr', '1.5fr'],
    zebra: i % 2 === 1,
    last: i === h.indicators.length - 1,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, ind.name)
    }, {
      content: ind.value,
      align: 'right',
      num: true
    }, {
      content: /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement(Progress, {
        pct: ind.score,
        status: ind.status,
        height: 6
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 600,
          minWidth: 30,
          textAlign: 'right'
        }
      }, ind.score))
    }, {
      content: ind.weight + '%',
      align: 'right',
      num: true
    }, {
      content: /*#__PURE__*/React.createElement(Chip, {
        status: ind.status
      }),
      align: 'right'
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontWeight: 300,
          fontSize: 11.5,
          color: 'rgba(28,61,46,0.6)'
        }
      }, ind.bench)
    }]
  }))), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Weights are editable in the Health Score tab"
  })));
}

/* ---------- NET WORTH ---------- */
function NetWorthTab() {
  const nw = window.CC_DATA.net_worth;
  const investTotal = nw.investments.reduce((a, b) => a + b.value, 0);
  const budgetAssets = nw.budget_accounts.filter(a => a.balance > 0).reduce((a, b) => a + b.balance, 0);
  const budgetLiabs = -nw.budget_accounts.filter(a => a.balance < 0).reduce((a, b) => a + b.balance, 0);

  // Sparkline data (synthetic 6-mo: from current minus monthly net deltas)
  const nwHistory = [205400, 210800, 214900, 217200, 219700, 222640];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Net Worth"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: 28,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 24,
      alignItems: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "NET WORTH SNAPSHOT \xB7 MAY 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1,
      color: '#FAF8F2',
      marginTop: 8,
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(nw.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 13,
      color: '#86efac',
      fontWeight: 500,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "\u2191 ", fmt(nw.change_mo, {
    signed: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      opacity: 0.65
    }
  }, "this month"))), /*#__PURE__*/React.createElement(NetWorthSparkline, {
    vals: nwHistory
  }), /*#__PURE__*/React.createElement(BigNum, {
    label: "TOTAL ASSETS",
    val: fmt(nw.assets)
  }), /*#__PURE__*/React.createElement(BigNum, {
    label: "TOTAL LIABILITIES",
    val: fmt(nw.liabilities)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "AUTO-PULLED FROM ACCOUNTS"
  }, "BUDGET ACCOUNTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.6fr', '0.8fr', '0.7fr', '0.9fr'],
    cols: [{
      label: 'Account'
    }, {
      label: 'Type'
    }, {
      label: 'Owner'
    }, {
      label: 'Balance',
      align: 'right'
    }]
  }), nw.budget_accounts.map((a, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: a.name,
    widths: ['1.6fr', '0.8fr', '0.7fr', '0.9fr'],
    zebra: i % 2 === 1,
    last: i === nw.budget_accounts.length - 1,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, a.name)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11,
          color: 'rgba(28,61,46,0.65)'
        }
      }, a.type)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11,
          color: 'rgba(28,61,46,0.65)'
        }
      }, a.owner)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          color: a.balance < 0 ? '#832f30' : 'var(--pal-primary, #1C3D2E)',
          fontWeight: a.balance < 0 ? 600 : 500
        }
      }, fmt(a.balance, {
        signed: a.balance < 0
      })),
      align: 'right',
      num: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 0.8fr 0.7fr 0.9fr',
      background: 'var(--pal-mid, #2D5C45)',
      color: '#FAF8F2',
      padding: '10px 12px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Budget Net"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(budgetAssets - budgetLiabs))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "ENTER BALANCES DIRECTLY"
  }, "INVESTMENTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.6fr', '1fr', '0.9fr'],
    cols: [{
      label: 'Account / Fund'
    }, {
      label: 'Type'
    }, {
      label: 'Current Value',
      align: 'right'
    }]
  }), nw.investments.map((inv, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: inv.name,
    widths: ['1.6fr', '1fr', '0.9fr'],
    zebra: i % 2 === 1,
    last: i === nw.investments.length - 1,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, inv.name)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11,
          color: 'rgba(28,61,46,0.65)'
        }
      }, inv.type)
    }, {
      content: fmt(inv.value),
      align: 'right',
      num: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 0.9fr',
      background: 'var(--pal-mid, #2D5C45)',
      color: '#FAF8F2',
      padding: '10px 12px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Total Investments"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(investTotal)))))), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Update account balances monthly \xB7 Investments entered directly"
  })));
}
function BigNum({
  label,
  val
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(250,248,242,0.60)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 26,
      color: '#FAF8F2',
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums'
    }
  }, val));
}
function NetWorthSparkline({
  vals
}) {
  const W = 200,
    H = 80;
  const min = Math.min(...vals),
    max = Math.max(...vals);
  const span = max - min || 1;
  const points = vals.map((v, i) => [i / (vals.length - 1) * (W - 8) + 4, H - 6 - (v - min) / span * (H - 16)]);
  const path = 'M ' + points.map(p => p.join(' ')).join(' L ');
  const area = `M ${points[0][0]} ${H - 2} L ` + points.map(p => p.join(' ')).join(' L ') + ` L ${points[points.length - 1][0]} ${H - 2} Z`;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(250,248,242,0.60)'
    }
  }, "6-MONTH TREND"), /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    style: {
      marginTop: 4,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "#C5A95A",
    opacity: "0.20"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "#C5A95A",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), points.map((p, i) => i === points.length - 1 ? /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "4",
    fill: "#C5A95A",
    stroke: "#1C3D2E",
    strokeWidth: "2"
  }) : /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "2",
    fill: "#C5A95A",
    opacity: "0.55"
  }))));
}
Object.assign(window, {
  TrendsTab,
  HealthScoreTab,
  NetWorthTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_foundation_v2/reference/tabs-analysis.jsx", error: String((e && e.message) || e) }); }

// design_handoff_foundation_v2/reference/tabs-overview.jsx
try { (() => {
/* =====================================================================
   STARTING TABS — Start Here + Dashboard
   Hero tabs. These are what a buyer sees first and what sells the
   product in Etsy screenshots.
   ===================================================================== */

/* ---------- START HERE ---------- */
function StartHereTab() {
  const palettes = window.CC_DATA.palettes;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Start Here"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '36px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    sub: "WELCOME"
  }, "LIFE, ORGANIZED."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 38,
      color: 'var(--pal-primary, #1C3D2E)',
      lineHeight: 1.1,
      marginTop: 12
    }
  }, "Open it. Add your information. Get clear."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 14.5,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.55,
      marginTop: 14,
      maxWidth: 620
    }
  }, "The Foundation is a 14-tab budget system designed to work out of the box. No formulas to write. No app to learn. Just the numbers, organized.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 6,
      padding: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "24 PALETTES INCLUDED"
  }, "CHOOSE YOUR THEME"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 6
    }
  }, "Pick a palette. We'll repaint everything.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "24 palettes \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8,1fr)',
      gap: 8
    }
  }, palettes.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      background: p.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.primary
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.mid
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.accent
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 8px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      color: '#1C3D2E',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "5 STEPS TO GET STARTED"
  }, "SETUP GUIDE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 10,
      marginTop: 14
    }
  }, [{
    n: 1,
    t: 'Install the Script',
    d: 'Extensions → Apps Script → paste ColumnCo_Foundation_v2.gs. A 💳 Column & Co. menu appears.'
  }, {
    n: 2,
    t: 'Set Up Accounts',
    d: 'Add every bank account, credit card, and savings account. Enter current balances.'
  }, {
    n: 3,
    t: 'Import Transactions',
    d: 'Type the account name in C6. Paste your bank CSV. Run Import. Done.'
  }, {
    n: 4,
    t: 'Set Your Goals',
    d: 'Pick a Type, a Category or Account, a Target. Progress tracks automatically.'
  }, {
    n: 5,
    t: 'Explore Your Data',
    d: 'Dashboard, Trends, Health Score, and Net Worth update as you import.'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 999,
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, "Step ", s.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--pal-primary, #1C3D2E)',
      marginBottom: 6
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.45
    }
  }, s.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 6,
      padding: '28px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28,
      alignItems: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "LLM-READY \xB7 BUILT FOR AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.15,
      marginTop: 10
    }
  }, "Ask Claude or ChatGPT to read your sheet."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 13.5,
      lineHeight: 1.55,
      marginTop: 12,
      opacity: 0.85
    }
  }, "A hidden ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'rgba(250,248,242,0.12)',
      padding: '1px 6px',
      borderRadius: 3,
      fontSize: 12
    }
  }, "_Schema"), " tab documents every column for an AI. Copy a prompt below, paste in your favorite assistant, attach your sheet. You get insights in seconds.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(250,248,242,0.06)',
      border: '1px solid rgba(197,169,90,0.30)',
      borderRadius: 4,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--pal-accent, #C5A95A)',
      marginBottom: 8
    }
  }, "PROMPT \xB7 COPY & PASTE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'ui-monospace, SF Mono, Menlo, monospace',
      fontSize: 12,
      lineHeight: 1.55,
      color: '#FAF8F2'
    }
  }, "\"Find every category where I'm trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel.\""))), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Thank you for your purchase \xB7 Questions? columnandco.com"
  })));
}

/* ---------- DASHBOARD ---------- */
function DashboardTab() {
  const d = window.CC_DATA;
  const top = d.top_spending;
  const breakdown = d.breakdown;
  const totalSpend = breakdown.reduce((a, b) => a + b.amount, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Dashboard"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "VIEWING MONTH"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--pal-primary, #1C3D2E)'
    }
  }, "May 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "\u2190 change to update all figures"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, d.months.slice(-6).map(m => /*#__PURE__*/React.createElement("span", {
    key: m.label,
    style: {
      padding: '6px 11px',
      borderRadius: 2,
      background: m.label === 'May 2026' ? 'var(--pal-primary, #1C3D2E)' : 'transparent',
      color: m.label === 'May 2026' ? '#FAF8F2' : 'rgba(28,61,46,0.65)',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.06em',
      cursor: 'pointer',
      border: m.label === 'May 2026' ? 0 : '1px solid rgba(28,61,46,0.15)'
    }
  }, m.short)))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true
  }, "KEY METRICS \xB7 MAY 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginTop: 14,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Income",
    value: fmt(d.snapshot.income),
    sub: "vs last month +0.1%",
    accent: "primary"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Expenses",
    value: fmt(d.snapshot.expenses),
    sub: "vs last month +1.1%",
    accent: "danger"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Net Cash Flow",
    value: fmt(d.snapshot.net, {
      signed: true
    }),
    sub: "vs last month \u2212$65",
    accent: "primary"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Savings Rate",
    value: pct(d.snapshot.savings_rate),
    sub: "goal: 20%+ \u2014 crushing it",
    accent: "gold"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    dark: true,
    gold: true
  }, "TOP SPENDING \xB7 THIS MONTH"), /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '0.9fr', '1.1fr', '0.9fr'],
    cols: [{
      label: 'Category'
    }, {
      label: 'Spent',
      align: 'right'
    }, {
      label: 'Budget',
      align: 'right'
    }, {
      label: '% of Budget'
    }, {
      label: 'Status',
      align: 'right'
    }]
  }), top.map((r, i) => {
    const p = r.spent / r.budget * 100;
    return /*#__PURE__*/React.createElement(DataRow, {
      key: r.cat,
      widths: ['1.4fr', '0.9fr', '0.9fr', '1.1fr', '0.9fr'],
      zebra: i % 2 === 1,
      last: i === top.length - 1,
      cols: [{
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 500
          }
        }, r.cat)
      }, {
        content: fmt(r.spent),
        align: 'right',
        num: true
      }, {
        content: fmt(r.budget),
        align: 'right',
        num: true
      }, {
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement(Progress, {
          pct: p,
          status: r.status,
          height: 6
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            fontVariantNumeric: 'tabular-nums',
            fontSize: 11,
            color: 'rgba(28,61,46,0.65)',
            minWidth: 34,
            textAlign: 'right'
          }
        }, p.toFixed(0), "%"))
      }, {
        content: /*#__PURE__*/React.createElement(Chip, {
          status: r.status
        }),
        align: 'right'
      }]
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    dark: true,
    gold: true
  }, "MONTH SNAPSHOT"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Income', fmt(d.snapshot.income)], ['Expenses', fmt(d.snapshot.expenses)], ['Net Cash Flow', fmt(d.snapshot.net, {
    signed: true
  })], ['Savings Rate', pct(d.snapshot.savings_rate)], ['Avg Daily Spend', fmt(d.snapshot.avg_daily)], ['Transactions', d.snapshot.transactions + ''], ['Largest Expense', fmt(d.snapshot.largest_expense) + ' · Rent']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '1px solid rgba(28,61,46,0.06)',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--pal-primary, #1C3D2E)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    dark: true,
    gold: true
  }, "SPENDING BREAKDOWN"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 18,
      padding: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    data: breakdown,
    total: totalSpend
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 6
    }
  }, breakdown.slice(0, 12).map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.cat,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'Jost,sans-serif',
      fontSize: 11.5,
      color: '#1C3D2E'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: donutColor(i),
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      opacity: 0.85
    }
  }, s.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 500
    }
  }, (s.amount / totalSpend * 100).toFixed(0), "%")))))), /*#__PURE__*/React.createElement(AiInsightsPanel, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Do not distribute without license"
  })));
}

/* ---------- DONUT chart ---------- */
function donutColor(i) {
  // 12-step palette derived from Forest → Canopy → Cream + Gold accent
  const ramp = ['#1C3D2E', '#2D5C45', '#3C7558', '#4F8D6B', '#67A682', '#8FAF7E', '#C5A95A', '#9E7E3F', '#7d6420', '#5e1f1f', '#832f30', '#C8873A'];
  return ramp[i % ramp.length];
}
function Donut({
  data,
  total,
  size = 180
}) {
  // build SVG arc segments
  const r = size / 2 - 10,
    cx = size / 2,
    cy = size / 2;
  let acc = 0;
  const arcs = data.map((d, i) => {
    const a0 = acc / total * 2 * Math.PI - Math.PI / 2;
    acc += d.amount;
    const a1 = acc / total * 2 * Math.PI - Math.PI / 2;
    const x0 = cx + r * Math.cos(a0),
      y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1),
      y1 = cy + r * Math.sin(a1);
    const large = a1 - a0 > Math.PI ? 1 : 0;
    return {
      path: `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`,
      color: donutColor(i)
    };
  });
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      display: 'block'
    }
  }, arcs.map((a, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: a.path,
    fill: a.color
  })), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r * 0.58,
    fill: "var(--pal-bg, #FAF8F2)"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy - 6,
    textAnchor: "middle",
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      fill: 'rgba(28,61,46,0.55)'
    }
  }, "TOTAL"), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 18,
    textAnchor: "middle",
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 22,
      fill: 'var(--pal-primary, #1C3D2E)'
    }
  }, fmt(total)));
}

/* ---------- AI Insights panel — automatically computed callouts ---------- */
function AiInsightsPanel() {
  const insights = [{
    tag: 'LEAK',
    icon: '⚡',
    title: 'Dining is creeping up.',
    body: 'Dec → May: $380 → $922 per month. That\'s $9.7K/yr on dining if it holds.',
    status: 'over'
  }, {
    tag: 'SUBS',
    icon: '⚡',
    title: '12 active subscriptions.',
    body: 'You added 9 in the last 6 months. Hidden cost: $132/mo.',
    status: 'fair'
  }, {
    tag: 'WIN',
    icon: '✓',
    title: 'Emergency fund is healthy.',
    body: '3.3 months of expenses parked in Ally Savings. Above your 3-month goal.',
    status: 'on'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 14px',
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 10.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--pal-mid, #2D5C45)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 3,
      height: 14,
      background: 'var(--pal-accent, #C5A95A)'
    }
  }), "AUTO INSIGHTS \xB7 WHAT THE NUMBERS SAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, insights.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.title,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 2,
      background: i.status === 'on' ? 'rgba(22,163,74,0.18)' : i.status === 'fair' ? 'rgba(197,169,90,0.20)' : 'rgba(131,47,48,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: i.status === 'on' ? '#86efac' : i.status === 'fair' ? '#C5A95A' : '#fca5a5',
      fontSize: 18
    }
  }, i.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 15,
      lineHeight: 1.25
    }
  }, i.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11.5,
      fontWeight: 300,
      lineHeight: 1.5,
      opacity: 0.85,
      marginTop: 4
    }
  }, i.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      borderTop: '1px solid rgba(250,248,242,0.10)',
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      letterSpacing: '0.12em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "Pipe these into Claude / ChatGPT for a deeper read \u2192"));
}
Object.assign(window, {
  StartHereTab,
  DashboardTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_foundation_v2/reference/tabs-overview.jsx", error: String((e && e.message) || e) }); }

// export/src/chrome.jsx
try { (() => {
/* =====================================================================
   Google Sheets-style chrome wrapping the brand-content sheet area.
   - Top bar with file name + 💳 Column & Co. menu (faked dropdown)
   - Subtle toolbar
   - Tab strip at bottom (clickable)
   - Palette picker (24 palettes — the product differentiator)
   ===================================================================== */

function SheetsChrome({
  activeTab,
  onTabChange,
  paletteId,
  onPaletteChange,
  paletteOpen,
  setPaletteOpen,
  menuOpen,
  setMenuOpen,
  children
}) {
  const data = window.CC_DATA;
  const palette = data.palettes.find(p => p.id === paletteId) || data.palettes[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F1F3F4',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Jost,sans-serif',
      color: '#202124'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 14px 4px 14px',
      background: '#FFFFFF',
      borderBottom: '1px solid #E8EAED',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: '#1C3D2E',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoIconOnForest,
    alt: "",
    style: {
      height: 22,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#202124'
    }
  }, "The Foundation v2 \u2014 Brooks Household"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 2,
      fontSize: 11.5,
      color: '#5F6368'
    }
  }, /*#__PURE__*/React.createElement("span", null, "File"), /*#__PURE__*/React.createElement("span", null, "Edit"), /*#__PURE__*/React.createElement("span", null, "View"), /*#__PURE__*/React.createElement("span", null, "Insert"), /*#__PURE__*/React.createElement("span", null, "Format"), /*#__PURE__*/React.createElement("span", null, "Data"), /*#__PURE__*/React.createElement("span", null, "Tools"), /*#__PURE__*/React.createElement("span", null, "Extensions"), /*#__PURE__*/React.createElement("span", {
    "data-popover-trigger": true,
    style: {
      position: 'relative',
      cursor: 'pointer',
      color: '#1C3D2E',
      fontWeight: 500
    },
    onClick: () => setMenuOpen(!menuOpen)
  }, "\uD83D\uDCB3 Column & Co. \u25BE", menuOpen && /*#__PURE__*/React.createElement(ScriptMenu, {
    close: () => setMenuOpen(false)
  })), /*#__PURE__*/React.createElement("span", null, "Help"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#1A73E8',
      color: '#fff',
      border: 0,
      borderRadius: 4,
      padding: '7px 16px',
      fontSize: 12.5,
      fontWeight: 500,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 14,
      height: 14,
      border: '1.5px solid #fff',
      borderRadius: 999,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 3,
      background: '#fff',
      borderRadius: 999
    }
  })), "Share"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      borderBottom: '1px solid #E8EAED',
      padding: '4px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12
    }
  }, ['Search the menus', '↩', '↪', '🖨', '%', '100%', '▾'].map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: '5px 8px',
      color: '#5F6368',
      cursor: 'pointer',
      borderRadius: 4
    }
  }, s)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: '#E8EAED',
      margin: '0 4px'
    }
  }), ['$', '.0', '123 ▾', 'Default (Ari... ▾', '10 ▾', 'B', 'I', 'U', 'A ▾', '▦ ▾', '═ ▾', '⬛ ▾'].map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: '5px 8px',
      color: '#5F6368',
      cursor: 'pointer',
      borderRadius: 4,
      fontFamily: i === 5 || i === 6 || i === 7 ? 'serif' : 'inherit',
      fontWeight: i === 5 ? 700 : 400,
      fontStyle: i === 6 ? 'italic' : 'normal',
      textDecoration: i === 7 ? 'underline' : 'none'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      borderBottom: '1px solid #E8EAED',
      padding: '5px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#F1F3F4',
      padding: '4px 10px',
      borderRadius: 4,
      color: '#5F6368',
      minWidth: 56,
      textAlign: 'center'
    }
  }, "D4"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5F6368',
      fontFamily: 'monospace'
    }
  }, "\u0192x"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#202124',
      fontFamily: 'monospace',
      fontSize: 12
    }
  }, "May 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      background: 'var(--pal-bg, #FAF8F2)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      background: '#F8F9FA',
      borderRight: '1px solid #E8EAED',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 22,
      fontSize: 11,
      color: '#5F6368'
    }
  }, ['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      height: 30,
      display: 'flex',
      alignItems: 'center'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F8F9FA',
      borderBottom: '1px solid #E8EAED',
      padding: '4px 14px',
      fontSize: 11,
      color: '#5F6368',
      display: 'flex',
      gap: 0
    }
  }, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      flex: 1,
      textAlign: 'center',
      minWidth: 72
    }
  }, c))), children)), /*#__PURE__*/React.createElement("button", {
    "data-popover-trigger": true,
    onClick: () => setPaletteOpen(!paletteOpen),
    style: {
      position: 'absolute',
      top: 14,
      right: 16,
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.20)',
      borderRadius: 4,
      padding: '8px 12px',
      cursor: 'pointer',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#1C3D2E',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      boxShadow: '0 4px 12px rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: palette.primary,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: palette.mid,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: palette.accent,
      borderRadius: 2
    }
  })), palette.name, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5,
      fontSize: 9
    }
  }, "\u25BE")), paletteOpen && /*#__PURE__*/React.createElement(PalettePicker, {
    active: paletteId,
    onPick: id => {
      onPaletteChange(id);
      setPaletteOpen(false);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      borderTop: '1px solid #E8EAED',
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      fontSize: 12,
      height: 36,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 8px',
      color: '#5F6368',
      cursor: 'pointer',
      fontSize: 16
    }
  }, "\uFF0B"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 8px',
      color: '#5F6368',
      cursor: 'pointer'
    }
  }, "\u2630"), data.tabs.map(t => /*#__PURE__*/React.createElement("span", {
    key: t.id,
    onClick: () => onTabChange(t.id),
    style: {
      padding: '8px 14px',
      cursor: 'pointer',
      fontWeight: activeTab === t.id ? 600 : 400,
      color: activeTab === t.id ? '#1C3D2E' : t.system ? '#9AA0A6' : '#3C4043',
      borderBottom: activeTab === t.id ? '3px solid var(--pal-primary, #1C3D2E)' : '3px solid transparent',
      borderTop: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
      borderLeft: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
      borderRight: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
      background: activeTab === t.id ? '#FFFFFF' : 'transparent',
      marginTop: activeTab === t.id ? 0 : 1,
      whiteSpace: 'nowrap',
      fontFamily: 'Arial, sans-serif'
    }
  }, t.label))));
}

/* ---------- Fake "💳 Column & Co." Apps Script menu ---------- */
function ScriptMenu({
  close
}) {
  const items = [{
    label: 'Import Bank Transactions',
    sep: 'after'
  }, {
    label: 'Clear Paste Zone',
    sep: 'after'
  }, {
    label: 'Apply Theme',
    sep: 'after'
  }, {
    label: 'Renumber Ledger'
  }, {
    label: 'Help / Quick Reference'
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-popover": true,
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 6,
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.18)',
      borderRadius: 4,
      minWidth: 240,
      boxShadow: '0 4px 12px rgba(28,61,46,0.18)',
      zIndex: 50,
      overflow: 'hidden'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '9px 16px',
      fontSize: 13,
      color: '#1C3D2E',
      cursor: 'pointer',
      fontWeight: 400
    },
    onMouseDown: close
  }, it.label), it.sep && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(28,61,46,0.10)'
    }
  }))));
}

/* ---------- The 24-palette picker — the headline feature ---------- */
function PalettePicker({
  active,
  onPick
}) {
  const palettes = window.CC_DATA.palettes;
  return /*#__PURE__*/React.createElement("div", {
    "data-popover": true,
    style: {
      position: 'absolute',
      top: 50,
      right: 16,
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.18)',
      borderRadius: 6,
      padding: 16,
      width: 360,
      boxShadow: '0 8px 24px rgba(28,61,46,0.18)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#2D5C45',
      marginBottom: 10
    }
  }, "Choose Your Theme \xB7 24 Palettes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 6
    }
  }, palettes.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onPick(p.id),
    style: {
      cursor: 'pointer',
      border: active === p.id ? '2px solid #C5A95A' : '1px solid rgba(28,61,46,0.10)',
      borderRadius: 3,
      overflow: 'hidden',
      background: p.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.primary
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.mid
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.accent
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5px 6px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      color: '#1C3D2E',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.6)'
    }
  }, "Then run ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#1C3D2E',
      fontWeight: 600
    }
  }, "\uD83D\uDCB3 Column & Co. \u2192 Apply Theme"), "."));
}
Object.assign(window, {
  SheetsChrome,
  ScriptMenu,
  PalettePicker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/chrome.jsx", error: String((e && e.message) || e) }); }

// export/src/components.jsx
try { (() => {
/* =====================================================================
   Atoms shared across all Foundation tabs.
   Loaded as a Babel script tag — exports to window so other JSX files
   can use them.
   ===================================================================== */

const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

/* ---------- Section labels (caps, tracked-out, gold-stripe optional) ---- */
function SectionLabel({
  children,
  gold = false,
  dark = false,
  sub = ''
}) {
  const bg = dark ? 'var(--pal-mid, #2D5C45)' : 'transparent';
  const color = dark ? '#FAF8F2' : 'var(--pal-mid, #2D5C45)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color,
      padding: dark ? '7px 14px' : 0,
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 10.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, gold && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 3,
      height: 14,
      background: 'var(--pal-accent, #C5A95A)'
    }
  }), /*#__PURE__*/React.createElement("span", null, children), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(28,61,46,0.45)',
      fontWeight: 300,
      letterSpacing: '0.06em',
      marginLeft: 6
    }
  }, "\xB7 ", sub));
}

/* ---------- KPI Card — Dashboard top row ---- */
function KpiCard({
  label,
  value,
  sub,
  accent = 'primary',
  big = true
}) {
  // accent: 'primary' | 'mid' | 'gold' | 'danger' | 'success'
  const map = {
    primary: {
      bg: 'var(--pal-primary, #1C3D2E)',
      fg: '#FAF8F2'
    },
    mid: {
      bg: 'var(--pal-mid, #2D5C45)',
      fg: '#FAF8F2'
    },
    gold: {
      bg: 'var(--pal-accent, #C5A95A)',
      fg: '#1C3D2E'
    },
    danger: {
      bg: '#832f30',
      fg: '#FAF8F2'
    },
    success: {
      bg: '#16a34a',
      fg: '#FAF8F2'
    }
  };
  const m = map[accent] || map.primary;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: m.bg,
      color: m.fg,
      padding: '8px 14px',
      fontFamily: 'Jost,sans-serif',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderTop: 0,
      padding: '14px 14px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: big ? 28 : 22,
      lineHeight: 1,
      color: 'var(--pal-primary, #1C3D2E)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 10.5,
      color: 'rgba(28,61,46,0.6)',
      letterSpacing: '0.02em'
    }
  }, sub)));
}

/* ---------- Status chip ---- */
function Chip({
  status,
  children
}) {
  const map = {
    on: {
      bg: 'rgba(22,163,74,0.14)',
      fg: '#0F7A37',
      icon: '✓'
    },
    fair: {
      bg: 'rgba(197,169,90,0.22)',
      fg: '#7d6420',
      icon: '—'
    },
    warn: {
      bg: 'rgba(200,135,58,0.20)',
      fg: '#7a4c1e',
      icon: '⚠'
    },
    over: {
      bg: 'rgba(131,47,48,0.14)',
      fg: '#5e1f1f',
      icon: '✗'
    }
  };
  const m = map[status] || map.on;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: m.bg,
      color: m.fg,
      padding: '4px 10px',
      borderRadius: 999,
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 10.5,
      letterSpacing: '0.04em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, m.icon), /*#__PURE__*/React.createElement("span", null, children || {
    on: 'On Track',
    fair: 'Fair',
    warn: 'Caution',
    over: 'Over'
  }[status] || status));
}

/* ---------- Progress bar — used in goals & health ---- */
function Progress({
  pct,
  status = 'on',
  height = 8
}) {
  const fill = {
    on: 'var(--pal-primary, #1C3D2E)',
    fair: 'var(--pal-accent, #C5A95A)',
    warn: '#C8873A',
    over: '#832f30'
  }[status] || '#1C3D2E';
  const clamped = Math.max(0, Math.min(100, pct));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(28,61,46,0.10)',
      height,
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: clamped + '%',
      height: '100%',
      background: fill,
      transition: 'width 320ms cubic-bezier(0.4,0,0.2,1)'
    }
  }));
}

/* ---------- Money formatter ---- */
function fmt(n, opts = {}) {
  const sign = opts.signed && n > 0 ? '+' : '';
  const abs = Math.abs(n);
  const s = abs.toLocaleString('en-US', {
    minimumFractionDigits: opts.decimals ?? 0,
    maximumFractionDigits: opts.decimals ?? 0
  });
  return (n < 0 ? '−' : sign) + '$' + s;
}
function pct(n, d = 1) {
  return n.toFixed(d) + '%';
}

/* ---------- Column header bar (Forest stripe) ---- */
function ColHeader({
  cols,
  widths
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: widths.join(' '),
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      fontFamily: 'Jost,sans-serif',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '9px 12px',
      textAlign: c.align || 'left',
      borderRight: i < cols.length - 1 ? '1px solid rgba(250,248,242,0.10)' : 0
    }
  }, c.label)));
}

/* ---------- Data row with zebra ---- */
function DataRow({
  cols,
  widths,
  zebra,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: widths.join(' '),
      background: zebra ? 'var(--pal-zebra, #EEF2EC)' : '#FAF8F2',
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      color: 'var(--pal-primary, #1C3D2E)',
      borderBottom: last ? 0 : '1px solid rgba(28,61,46,0.06)'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 12px',
      textAlign: c.align || 'left',
      display: 'flex',
      alignItems: 'center',
      justifyContent: c.align === 'right' ? 'flex-end' : c.align === 'center' ? 'center' : 'flex-start',
      gap: 8,
      fontVariantNumeric: c.num ? 'tabular-nums' : 'normal',
      fontWeight: c.bold ? 600 : 400
    }
  }, c.content)));
}

/* ---------- Brand header inside the sheet (rows 1-3) ---- */
function SheetHeader({
  tab
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoIconCream,
    alt: "",
    style: {
      height: 30,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1
    }
  }, "Column & Co."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9,
      letterSpacing: '0.2em',
      color: 'var(--pal-accent, #C5A95A)',
      marginTop: 3
    }
  }, "LIFE, ORGANIZED."))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 300,
      color: '#FAF8F2',
      opacity: 0.78,
      letterSpacing: '0.04em'
    }
  }, "The Foundation v2 \xA0\xB7\xA0 ", tab)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-mid, #2D5C45)',
      height: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-accent, #C5A95A)',
      height: 3
    }
  }));
}

/* ---------- Footer ---- */
function SheetFooter({
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      padding: '11px 24px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 300,
      letterSpacing: '0.04em',
      textAlign: 'center',
      opacity: 0.95
    }
  }, "The Foundation v2.0 \xA0\xB7\xA0 columnandco.com ", note ? ' · ' + note : '');
}
Object.assign(window, {
  SectionLabel,
  KpiCard,
  Chip,
  Progress,
  fmt,
  pct,
  ColHeader,
  DataRow,
  SheetHeader,
  SheetFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/components.jsx", error: String((e && e.message) || e) }); }

// export/src/data.js
try { (() => {
/* =====================================================================
   COLUMN & CO. — THE FOUNDATION v2 · MOCK DATA
   Fictional couple Marcus & Elena Brooks · May 2026 view
   Source: COLUMN_CO_PROJECT__1_.md · _Engine + Trends + Categories tabs
   ===================================================================== */

window.CC_DATA = {
  buyer: {
    name: 'Marcus & Elena Brooks',
    month: 'May 2026'
  },
  // 6 months (Dec 2025 – May 2026) of income / expense / savings
  months: [{
    label: 'Dec 2025',
    short: 'Dec',
    income: 10120,
    expenses: 6094,
    net: 4026,
    savings_rate: 39.8
  }, {
    label: 'Jan 2026',
    short: 'Jan',
    income: 10180,
    expenses: 6420,
    net: 3760,
    savings_rate: 36.9
  }, {
    label: 'Feb 2026',
    short: 'Feb',
    income: 10200,
    expenses: 6612,
    net: 3588,
    savings_rate: 35.2
  }, {
    label: 'Mar 2026',
    short: 'Mar',
    income: 10215,
    expenses: 6740,
    net: 3475,
    savings_rate: 34.0
  }, {
    label: 'Apr 2026',
    short: 'Apr',
    income: 10220,
    expenses: 6905,
    net: 3315,
    savings_rate: 32.4
  }, {
    label: 'May 2026',
    short: 'May',
    income: 10230,
    expenses: 6980,
    net: 3250,
    savings_rate: 31.8
  }],
  // 24 months (Jun 2024 – May 2026). _Engine is wired for 24 months
  // per the project state ("IF-guarded, ready"). The Trends tab can
  // window this at 6 / 12 / 24.
  months_24: [{
    label: 'Jun 2024',
    short: 'Jun ’24',
    income: 9820,
    expenses: 5840,
    net: 3980,
    savings_rate: 40.5
  }, {
    label: 'Jul 2024',
    short: 'Jul ’24',
    income: 9870,
    expenses: 5910,
    net: 3960,
    savings_rate: 40.1
  }, {
    label: 'Aug 2024',
    short: 'Aug ’24',
    income: 9900,
    expenses: 5950,
    net: 3950,
    savings_rate: 39.9
  }, {
    label: 'Sep 2024',
    short: 'Sep ’24',
    income: 9940,
    expenses: 5880,
    net: 4060,
    savings_rate: 40.8
  }, {
    label: 'Oct 2024',
    short: 'Oct ’24',
    income: 9970,
    expenses: 6010,
    net: 3960,
    savings_rate: 39.7
  }, {
    label: 'Nov 2024',
    short: 'Nov ’24',
    income: 9985,
    expenses: 6090,
    net: 3895,
    savings_rate: 39.0
  }, {
    label: 'Dec 2024',
    short: 'Dec ’24',
    income: 10010,
    expenses: 6150,
    net: 3860,
    savings_rate: 38.6
  }, {
    label: 'Jan 2025',
    short: 'Jan ’25',
    income: 10045,
    expenses: 6020,
    net: 4025,
    savings_rate: 40.1
  }, {
    label: 'Feb 2025',
    short: 'Feb ’25',
    income: 10060,
    expenses: 5980,
    net: 4080,
    savings_rate: 40.6
  }, {
    label: 'Mar 2025',
    short: 'Mar ’25',
    income: 10080,
    expenses: 6090,
    net: 3990,
    savings_rate: 39.6
  }, {
    label: 'Apr 2025',
    short: 'Apr ’25',
    income: 10095,
    expenses: 6160,
    net: 3935,
    savings_rate: 39.0
  }, {
    label: 'May 2025',
    short: 'May ’25',
    income: 10100,
    expenses: 6240,
    net: 3860,
    savings_rate: 38.2
  }, {
    label: 'Jun 2025',
    short: 'Jun ’25',
    income: 10110,
    expenses: 6210,
    net: 3900,
    savings_rate: 38.6
  }, {
    label: 'Jul 2025',
    short: 'Jul ’25',
    income: 10115,
    expenses: 6280,
    net: 3835,
    savings_rate: 37.9
  }, {
    label: 'Aug 2025',
    short: 'Aug ’25',
    income: 10118,
    expenses: 6210,
    net: 3908,
    savings_rate: 38.6
  }, {
    label: 'Sep 2025',
    short: 'Sep ’25',
    income: 10120,
    expenses: 6020,
    net: 4100,
    savings_rate: 40.5
  }, {
    label: 'Oct 2025',
    short: 'Oct ’25',
    income: 10122,
    expenses: 6160,
    net: 3962,
    savings_rate: 39.1
  }, {
    label: 'Nov 2025',
    short: 'Nov ’25',
    income: 10120,
    expenses: 6055,
    net: 4065,
    savings_rate: 40.2
  }, {
    label: 'Dec 2025',
    short: 'Dec',
    income: 10120,
    expenses: 6094,
    net: 4026,
    savings_rate: 39.8
  }, {
    label: 'Jan 2026',
    short: 'Jan',
    income: 10180,
    expenses: 6420,
    net: 3760,
    savings_rate: 36.9
  }, {
    label: 'Feb 2026',
    short: 'Feb',
    income: 10200,
    expenses: 6612,
    net: 3588,
    savings_rate: 35.2
  }, {
    label: 'Mar 2026',
    short: 'Mar',
    income: 10215,
    expenses: 6740,
    net: 3475,
    savings_rate: 34.0
  }, {
    label: 'Apr 2026',
    short: 'Apr',
    income: 10220,
    expenses: 6905,
    net: 3315,
    savings_rate: 32.4
  }, {
    label: 'May 2026',
    short: 'May',
    income: 10230,
    expenses: 6980,
    net: 3250,
    savings_rate: 31.8
  }],
  // Dashboard top spending — current month
  top_spending: [{
    cat: 'Housing',
    spent: 2400,
    budget: 2400,
    status: 'on'
  }, {
    cat: 'Food & Dining',
    spent: 922,
    budget: 650,
    status: 'over'
  }, {
    cat: 'Shopping',
    spent: 618,
    budget: 500,
    status: 'over'
  }, {
    cat: 'Transportation',
    spent: 540,
    budget: 600,
    status: 'on'
  }, {
    cat: 'Utilities',
    spent: 360,
    budget: 380,
    status: 'on'
  }, {
    cat: 'Gifts & Donations',
    spent: 280,
    budget: 300,
    status: 'on'
  }, {
    cat: 'Entertainment',
    spent: 255,
    budget: 240,
    status: 'fair'
  }, {
    cat: 'Personal Care',
    spent: 180,
    budget: 200,
    status: 'on'
  }],
  // Dashboard right-rail "Month Snapshot"
  snapshot: {
    income: 10230,
    expenses: 6980,
    net: 3250,
    savings_rate: 31.8,
    avg_daily: 225,
    transactions: 76,
    largest_expense: 2400
  },
  // Spending breakdown — current month, donut-ready
  breakdown: [{
    cat: 'Housing',
    amount: 2400
  }, {
    cat: 'Food & Dining',
    amount: 922
  }, {
    cat: 'Transportation',
    amount: 540
  }, {
    cat: 'Shopping',
    amount: 618
  }, {
    cat: 'Utilities',
    amount: 360
  }, {
    cat: 'Entertainment',
    amount: 255
  }, {
    cat: 'Subscriptions',
    amount: 180
  }, {
    cat: 'Personal Care',
    amount: 180
  }, {
    cat: 'Gifts & Donations',
    amount: 280
  }, {
    cat: 'Health & Medical',
    amount: 165
  }, {
    cat: 'Insurance',
    amount: 220
  }, {
    cat: 'Misc',
    amount: 860
  }],
  // Goals
  goals: [{
    name: 'Emergency Fund',
    type: 'Savings Target',
    target: 22000,
    current: 22800,
    deadline: 'Dec 2026',
    status: 'on',
    note: '3–4 months expenses. At 3.3 months — almost there.'
  }, {
    name: 'Japan Trip Fund',
    type: 'Savings Target',
    target: 5000,
    current: 1700,
    deadline: 'Sep 2026',
    status: 'fair',
    note: 'Set a transfer rule: $200/mo to Ally Savings labeled Travel.'
  }, {
    name: 'Amex Gold Payoff',
    type: 'Debt Payoff',
    target: 1840,
    current: 1840,
    deadline: 'Dec 2026',
    status: 'fair',
    note: 'Starting balance $1,850. Pay $100 extra/mo above minimum.'
  }, {
    name: 'Food & Dining',
    type: 'Spending Limit',
    target: 650,
    current: 922,
    deadline: 'Monthly',
    status: 'over',
    note: 'Biggest leak. Cut delivery apps — cook 4 nights/week.'
  }, {
    name: 'Shopping',
    type: 'Spending Limit',
    target: 500,
    current: 618,
    deadline: 'Monthly',
    status: 'over',
    note: 'Amazon rule: 24-hour wait before buying.'
  }, {
    name: 'Entertainment',
    type: 'Spending Limit',
    target: 240,
    current: 255,
    deadline: 'Monthly',
    status: 'fair',
    note: 'Streaming + events. Currently on track.'
  }, {
    name: 'Monthly Savings Rate',
    type: 'Savings Rate',
    target: 20,
    current: 31.8,
    deadline: 'Ongoing',
    status: 'on',
    note: 'Goal: 20%+. Currently crushing it at 31.8%.'
  }],
  // Health Score — 5 weighted indicators
  health: {
    composite: 72,
    grade: 'Good',
    indicators: [{
      name: 'Savings Rate',
      value: '31.8%',
      score: 88,
      weight: 25,
      status: 'on',
      bench: '≥ 20% of income saved'
    }, {
      name: 'Expense-to-Income',
      value: '68.2%',
      score: 74,
      weight: 20,
      status: 'on',
      bench: '≤ 80% of income spent'
    }, {
      name: 'Emergency Fund',
      value: '3.3 mo',
      score: 80,
      weight: 20,
      status: 'on',
      bench: '≥ 3 months of expenses'
    }, {
      name: 'Budget Adherence',
      value: '6 of 8',
      score: 50,
      weight: 20,
      status: 'fair',
      bench: '≥ 80% categories on budget'
    }, {
      name: 'Debt-to-Income',
      value: '14.5%',
      score: 92,
      weight: 15,
      status: 'on',
      bench: '≤ 36% debt payments'
    }],
    biggest_opportunity: 'Food & Dining is 42% over budget — cutting it to plan lifts composite to ~78.'
  },
  // Net Worth
  net_worth: {
    total: 222640,
    assets: 244100,
    liabilities: 21460,
    change_mo: 3250,
    budget_accounts: [{
      name: 'Chase Joint Checking',
      type: 'Checking',
      owner: 'Joint',
      balance: 7200
    }, {
      name: 'Elena Checking',
      type: 'Checking',
      owner: 'Elena',
      balance: 2400
    }, {
      name: 'Marcus Checking',
      type: 'Checking',
      owner: 'Marcus',
      balance: 3100
    }, {
      name: 'Ally Savings',
      type: 'Savings',
      owner: 'Joint',
      balance: 22800
    }, {
      name: 'Ally Sinking Fund',
      type: 'Savings',
      owner: 'Joint',
      balance: 6400
    }, {
      name: 'Amex Gold Card',
      type: 'Credit',
      owner: 'Marcus',
      balance: -1840
    }, {
      name: 'Chase Sapphire Card',
      type: 'Credit',
      owner: 'Elena',
      balance: -1320
    }, {
      name: 'Marcus Auto Loan',
      type: 'Loan',
      owner: 'Marcus',
      balance: -18600
    }],
    investments: [{
      name: 'Marcus 401(k)',
      type: '401(k)',
      value: 98500
    }, {
      name: 'Elena 403(b)',
      type: '403(b)',
      value: 41200
    }, {
      name: 'Joint Brokerage',
      type: 'Brokerage',
      value: 27800
    }, {
      name: 'Marcus Roth IRA',
      type: 'Roth IRA',
      value: 19400
    }, {
      name: 'Elena Roth IRA',
      type: 'Roth IRA',
      value: 15600
    }]
  },
  // 24 palettes — pulled from _Config
  palettes: [{
    id: 'light',
    name: 'Light',
    primary: '#1C3D2E',
    mid: '#2D5C45',
    accent: '#C5A95A',
    bg: '#FAF8F2',
    zebra: '#EEF2EC',
    dark: '#111827',
    accentLight: '#F0EBD8'
  }, {
    id: 'warm-greige',
    name: 'Warm Greige',
    primary: '#3D2B1F',
    mid: '#5C4033',
    accent: '#C8873A',
    bg: '#FAF6F1',
    zebra: '#F0E8DC',
    dark: '#1C1009',
    accentLight: '#F5E6D3'
  }, {
    id: 'cool-slate',
    name: 'Cool Slate',
    primary: '#1E3A5F',
    mid: '#2D5282',
    accent: '#64748B',
    bg: '#F8FAFC',
    zebra: '#EFF6FF',
    dark: '#0F2440',
    accentLight: '#E2E8F0'
  }, {
    id: 'sage',
    name: 'Sage',
    primary: '#2D4A3E',
    mid: '#3D6455',
    accent: '#8FAF7E',
    bg: '#F4F9F1',
    zebra: '#EAF4E3',
    dark: '#1A2E25',
    accentLight: '#E8F5E0'
  }, {
    id: 'espresso',
    name: 'Espresso',
    primary: '#2C1810',
    mid: '#4A2C1A',
    accent: '#C8873A',
    bg: '#FAF5F0',
    zebra: '#F0E5D8',
    dark: '#120A04',
    accentLight: '#F5E6D3'
  }, {
    id: 'maize-navy',
    name: 'Maize & Navy',
    primary: '#003366',
    mid: '#004080',
    accent: '#FFCB05',
    bg: '#F5F8FF',
    zebra: '#E8F0FF',
    dark: '#001A33',
    accentLight: '#FFF5B0'
  }, {
    id: 'scarlet-gray',
    name: 'Scarlet & Gray',
    primary: '#BB0000',
    mid: '#CC0000',
    accent: '#808080',
    bg: '#F9F9F9',
    zebra: '#EFEFEF',
    dark: '#2C0000',
    accentLight: '#E8E8E8'
  }, {
    id: 'orange-navy',
    name: 'Orange & Navy',
    primary: '#002D6D',
    mid: '#003D94',
    accent: '#F47920',
    bg: '#F5F8FF',
    zebra: '#E8F0FF',
    dark: '#001540',
    accentLight: '#FFE4C4'
  }, {
    id: 'green-gold',
    name: 'Green & Gold',
    primary: '#154734',
    mid: '#1A5C43',
    accent: '#CBA135',
    bg: '#F3FAF5',
    zebra: '#E5F5EA',
    dark: '#0A2419',
    accentLight: '#FFF3C0'
  }, {
    id: 'purple-gold',
    name: 'Purple & Gold',
    primary: '#4A1C7C',
    mid: '#5E2499',
    accent: '#FFC72C',
    bg: '#FAF5FF',
    zebra: '#F3E8FF',
    dark: '#280D45',
    accentLight: '#FFF5B5'
  }, {
    id: 'crimson-white',
    name: 'Crimson & White',
    primary: '#9B1B30',
    mid: '#B52238',
    accent: '#FFFFFF',
    bg: '#FFF8F9',
    zebra: '#FFE8EC',
    dark: '#4A0010',
    accentLight: '#F5F5F5'
  }, {
    id: 'garnet-gold',
    name: 'Garnet & Gold',
    primary: '#782F40',
    mid: '#9B3B52',
    accent: '#CBA135',
    bg: '#FFF8F5',
    zebra: '#FFE8DC',
    dark: '#3D0A1A',
    accentLight: '#FFF3C0'
  }, {
    id: 'forest-white',
    name: 'Forest & White',
    primary: '#154733',
    mid: '#1E6048',
    accent: '#FFFFFF',
    bg: '#F4FBF6',
    zebra: '#E8F5EC',
    dark: '#0A2819',
    accentLight: '#F0FFF4'
  }, {
    id: 'royal-gold',
    name: 'Royal & Gold',
    primary: '#002D72',
    mid: '#003D9C',
    accent: '#B5A642',
    bg: '#F0F5FF',
    zebra: '#E0ECFF',
    dark: '#001040',
    accentLight: '#F5F0C0'
  }, {
    id: 'silver-black',
    name: 'Silver & Black',
    primary: '#1A1A1A',
    mid: '#2D2D2D',
    accent: '#A8A9AD',
    bg: '#F5F5F5',
    zebra: '#EBEBEB',
    dark: '#000000',
    accentLight: '#E8E8E8'
  }, {
    id: 'midnight',
    name: 'Midnight',
    primary: '#0B1F3A',
    mid: '#142E55',
    accent: '#14B8A6',
    bg: '#F0F4F8',
    zebra: '#E2E8F0',
    dark: '#050E1C',
    accentLight: '#99F6E4'
  }, {
    id: 'burgundy',
    name: 'Burgundy',
    primary: '#5C0A1A',
    mid: '#7A0E22',
    accent: '#E8D5B5',
    bg: '#FAF5F0',
    zebra: '#F0E6DA',
    dark: '#2E0510',
    accentLight: '#F5E8D5'
  }, {
    id: 'mocha',
    name: 'Mocha',
    primary: '#5C3A21',
    mid: '#7A4F2D',
    accent: '#D4A574',
    bg: '#FAF3EA',
    zebra: '#F0E2CE',
    dark: '#2E1D10',
    accentLight: '#F0DCC2'
  }, {
    id: 'indigo-blush',
    name: 'Indigo & Blush',
    primary: '#2E1F6B',
    mid: '#3D2A8C',
    accent: '#EAB0B8',
    bg: '#F7F4FA',
    zebra: '#ECE5F5',
    dark: '#170F36',
    accentLight: '#F8DEE3'
  }, {
    id: 'pine-brass',
    name: 'Pine & Brass',
    primary: '#1F3A2E',
    mid: '#2E5544',
    accent: '#B8964A',
    bg: '#F2F8F4',
    zebra: '#E1F0E7',
    dark: '#0E1D17',
    accentLight: '#E8D9A8'
  }, {
    id: 'ocean-coral',
    name: 'Ocean & Coral',
    primary: '#0F4858',
    mid: '#166075',
    accent: '#F47B6A',
    bg: '#F0F8FA',
    zebra: '#DCEFF2',
    dark: '#062430',
    accentLight: '#FBC8BD'
  }, {
    id: 'charcoal-mint',
    name: 'Charcoal & Mint',
    primary: '#2C2C2E',
    mid: '#44444A',
    accent: '#A8D5BA',
    bg: '#F5F5F5',
    zebra: '#E8E8E8',
    dark: '#161617',
    accentLight: '#D0EAD9'
  }, {
    id: 'olive-cream',
    name: 'Olive & Cream',
    primary: '#3D4A1F',
    mid: '#56672E',
    accent: '#C8B27A',
    bg: '#F7F4E8',
    zebra: '#ECE5D0',
    dark: '#1E2410',
    accentLight: '#E8D9A8'
  }, {
    id: 'custom',
    name: 'Custom',
    primary: '#1B2A4A',
    mid: '#2C3E6B',
    accent: '#C8873A',
    bg: '#F3F4F6',
    zebra: '#EEF0F5',
    dark: '#111827',
    accentLight: '#F5D9B0'
  }],
  tabs: [{
    id: 'start',
    label: 'Start Here'
  }, {
    id: 'trends',
    label: 'Trends'
  }, {
    id: 'dashboard',
    label: 'Dashboard'
  }, {
    id: 'budget',
    label: 'Monthly Budget'
  }, {
    id: 'health',
    label: 'Health Score'
  }, {
    id: 'goals',
    label: 'Goals'
  }, {
    id: 'tx',
    label: 'Transactions'
  }, {
    id: 'import',
    label: 'Bank Import Guide'
  }, {
    id: 'networth',
    label: 'Net Worth'
  }, {
    id: 'accounts',
    label: 'Accounts'
  }, {
    id: 'cats',
    label: 'Categories'
  }, {
    id: 'engine',
    label: '_Engine',
    system: true
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/data.js", error: String((e && e.message) || e) }); }

// export/src/tabs-actions.jsx
try { (() => {
/* =====================================================================
   ACTION TABS — Goals, Bank Import Guide, plus stubs for remaining tabs
   ===================================================================== */

/* ---------- GOALS ---------- */
function GoalsTab() {
  const goals = window.CC_DATA.goals;
  const onTrack = goals.filter(g => g.status === 'on').length;
  const fair = goals.filter(g => g.status === 'fair').length;
  const over = goals.filter(g => g.status === 'over').length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Goals"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Goals",
    value: goals.length + '',
    accent: "primary",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "On Track",
    value: onTrack + '',
    sub: 'of ' + goals.length,
    accent: "primary",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Need Attention",
    value: fair + over + '',
    accent: "danger",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Avg Progress",
    value: "68%",
    sub: "across all targets",
    accent: "gold",
    big: false
  })), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "LIVE PROGRESS FROM YOUR LEDGER"
  }, "YOUR GOALS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '0.7fr', '0.8fr', '1.5fr', '0.7fr'],
    cols: [{
      label: 'Goal'
    }, {
      label: 'Type'
    }, {
      label: 'Target',
      align: 'right'
    }, {
      label: 'Current',
      align: 'right'
    }, {
      label: 'Progress'
    }, {
      label: 'Status',
      align: 'right'
    }]
  }), goals.map((g, i) => {
    const isPct = g.type === 'Savings Rate';
    const pctVal = isPct ? g.current / g.target * 100 : g.type === 'Spending Limit' ? g.current / g.target * 100 : g.current / g.target * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: g.name
    }, /*#__PURE__*/React.createElement(DataRow, {
      widths: ['1.4fr', '0.9fr', '0.7fr', '0.8fr', '1.5fr', '0.7fr'],
      zebra: i % 2 === 1,
      last: false,
      cols: [{
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 500
          }
        }, g.name)
      }, {
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'Jost,sans-serif',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--pal-mid, #2D5C45)'
          }
        }, g.type)
      }, {
        content: isPct ? pct(g.target, 0) : fmt(g.target),
        align: 'right',
        num: true
      }, {
        content: isPct ? pct(g.current, 1) : fmt(g.current),
        align: 'right',
        num: true,
        bold: true
      }, {
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement(Progress, {
          pct: pctVal,
          status: g.status,
          height: 8
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            fontVariantNumeric: 'tabular-nums',
            fontSize: 11,
            color: 'rgba(28,61,46,0.65)',
            minWidth: 38,
            textAlign: 'right'
          }
        }, pctVal.toFixed(0), "%"))
      }, {
        content: /*#__PURE__*/React.createElement(Chip, {
          status: g.status
        }),
        align: 'right'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: i % 2 === 1 ? 'var(--pal-zebra, #EEF2EC)' : 'transparent',
        padding: '0 14px 12px 14px',
        fontFamily: 'Jost,sans-serif',
        fontSize: 11.5,
        fontWeight: 300,
        color: 'rgba(28,61,46,0.65)',
        fontStyle: 'italic',
        borderBottom: i < goals.length - 1 ? '1px solid rgba(28,61,46,0.06)' : 0
      }
    }, "Deadline: ", g.deadline, " \xA0\xB7\xA0 ", g.note));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: 24,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "FORECAST \xB7 IF YOU STAY THE COURSE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.2,
      marginTop: 10
    }
  }, "Japan Trip Fund hits target by ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "Oct\xA02026"), " \u2014 one month late."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      fontWeight: 300,
      lineHeight: 1.55,
      opacity: 0.78,
      marginTop: 10
    }
  }, "Bump your monthly transfer from $200 to $275 and you hit Sep deadline. Or skip 2 takeout dinners a week and the math works on its own.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "YOUR PACE NOW"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "Avg Monthly"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "$280")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "Need / Month"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "$275")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "To Catch Up"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "+$75"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Yellow cells = you edit \xB7 Grey cells = auto-calculated from your ledger"
  })));
}

/* ---------- BANK IMPORT GUIDE ---------- */
function BankImportTab() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Bank Import Guide"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "THREE STEPS \xB7 AUTO-CATEGORIZED"
  }, "PASTE YOUR BANK CSV"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10,
      marginTop: 14,
      marginBottom: 24
    }
  }, [{
    n: 1,
    t: 'Set the account',
    d: 'Type the account name in cell C6. Must match an entry on the Accounts tab.'
  }, {
    n: 2,
    t: 'Paste the CSV',
    d: 'Include the header row. We handle Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex.'
  }, {
    n: 3,
    t: 'Run import',
    d: '💳 Column & Co. → Import Bank Transactions. Auto-categorized. Dupes skipped.'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 999,
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--pal-primary, #1C3D2E)'
    }
  }, s.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.5
    }
  }, s.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--pal-mid, #2D5C45)'
    }
  }, "Account name (C6):"), /*#__PURE__*/React.createElement("input", {
    defaultValue: "Chase Joint Checking",
    style: {
      background: '#FFFDE7',
      border: '1px solid #C5A95A',
      borderRadius: 3,
      padding: '8px 12px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 13,
      color: '#1C3D2E',
      minWidth: 260,
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(SectionLabel, {
    sub: "PASTE ZONE \u2014 INCLUDE THE HEADER ROW",
    gold: true
  }, "STEP 2 \xB7 PASTE CSV"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F0FFF4',
      border: '2px solid #16A34A',
      borderRadius: 4,
      marginTop: 12,
      marginBottom: 24,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 2fr 0.8fr 0.8fr 0.7fr',
      background: '#FFFFFF',
      borderBottom: '1px solid rgba(22,163,74,0.30)',
      fontFamily: 'monospace',
      fontSize: 11,
      fontWeight: 600,
      color: '#1C3D2E'
    }
  }, ['Date', 'Description', 'Amount', 'Type', 'Memo'].map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      padding: '8px 12px',
      borderRight: '1px solid rgba(22,163,74,0.20)'
    }
  }, h))), [['05/02/2026', 'WHOLE FOODS MARKET', '-84.20', 'DEBIT', ''], ['05/02/2026', 'PAYROLL DEP - INTUIT', '5120.00', 'CREDIT', 'Bi-weekly'], ['05/03/2026', 'NETFLIX.COM', '-15.49', 'DEBIT', 'SUBS'], ['05/04/2026', 'UBER EATS', '-32.10', 'DEBIT', ''], ['05/05/2026', 'TRANSFER TO ALLY SVGS', '-500.00', 'DEBIT', 'Auto-tagged transfer']].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 2fr 0.8fr 0.8fr 0.7fr',
      background: i % 2 === 0 ? '#FFFFFF' : '#F0FFF4',
      fontFamily: 'monospace',
      fontSize: 11.5,
      color: '#1C3D2E'
    }
  }, r.map((v, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      padding: '7px 12px',
      borderRight: j < r.length - 1 ? '1px solid rgba(22,163,74,0.10)' : 0,
      borderBottom: '1px solid rgba(22,163,74,0.08)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontStyle: 'italic',
      color: 'rgba(22,163,74,0.85)'
    }
  }, "Paste up to 100 rows here. We sniff the header, parse the dates, classify Income/Expense/Transfer, and drop dupes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      padding: '10px 14px',
      borderRadius: '4px 4px 0 0',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "\u26A0 Review Income \u2014 Confirm which deposits count as real income"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderTop: 0,
      borderRadius: '0 0 4px 4px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['0.9fr', '1.8fr', '0.9fr', '0.8fr', '1.3fr'],
    cols: [{
      label: 'Month'
    }, {
      label: 'Description'
    }, {
      label: 'Amount',
      align: 'right'
    }, {
      label: 'Is Income?',
      align: 'center'
    }, {
      label: 'Note'
    }]
  }), [['May 2026', 'PAYROLL DEP - INTUIT', 5120, 'Yes', ''], ['May 2026', 'VENMO FROM ALEX', 80, 'No', 'Reimbursement, not income'], ['May 2026', 'REFUND - AMAZON', 42, 'No', 'Return refund']].map((r, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: i,
    widths: ['0.9fr', '1.8fr', '0.9fr', '0.8fr', '1.3fr'],
    zebra: i % 2 === 1,
    last: i === 2,
    cols: [{
      content: r[0]
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r[1])
    }, {
      content: fmt(r[2]),
      align: 'right',
      num: true
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          background: r[3] === 'Yes' ? '#FFFDE7' : '#FAF8F2',
          border: '1px solid ' + (r[3] === 'Yes' ? '#C5A95A' : 'rgba(28,61,46,0.20)'),
          padding: '4px 14px',
          borderRadius: 3,
          fontWeight: 500,
          fontSize: 11.5
        }
      }, r[3], " \u25BE"),
      align: 'center'
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11.5,
          fontStyle: 'italic',
          color: 'rgba(28,61,46,0.65)'
        }
      }, r[4])
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Auto-categorization uses the keyword rules on the Categories tab"
  })));
}

/* ---------- Generic stub tab for the rest ---------- */
function StubTab({
  tab,
  copy
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: tab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '40px 32px',
      minHeight: 500
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true
  }, tab.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 12,
      maxWidth: 640
    }
  }, copy), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.6)',
      marginTop: 14,
      maxWidth: 640,
      lineHeight: 1.55
    }
  }, "This tab exists in the actual product. The recreation focuses on the screens that sell the system. Switch to Dashboard, Trends, Goals, or Health Score to see the full visual treatment."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, null)));
}

/* ---------- MONTHLY BUDGET ---------- */
const BUDGET_PROFILES = {
  'dave-ramsey': {
    name: 'Dave Ramsey',
    sub: 'Envelopes · Baby Steps',
    blurb: 'The Ramsey Method: big slices for housing and food, every dollar named, aggressive debt snowball, 3-6 month emergency fund.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 900,
      'Transportation': 800,
      'Shopping': 250,
      'Utilities': 360,
      'Entertainment': 150,
      'Subscriptions': 60,
      'Personal Care': 150,
      'Gifts & Donations': 250,
      'Health & Medical': 200,
      'Insurance': 450,
      'Savings': 1500,
      'Debt Payments': 1500,
      'Education': 0,
      'Travel': 0,
      'Pets': 100,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 160
    }
  },
  '50-30-20': {
    name: '50/30/20',
    sub: 'Needs · Wants · Savings',
    blurb: 'Senator Warren\'s rule. 50% needs (housing, food, transport, insurance), 30% wants (dining out, shopping, entertainment), 20% savings + debt.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 750,
      'Transportation': 650,
      'Shopping': 620,
      'Utilities': 380,
      'Entertainment': 400,
      'Subscriptions': 180,
      'Personal Care': 200,
      'Gifts & Donations': 300,
      'Health & Medical': 200,
      'Insurance': 450,
      'Savings': 1500,
      'Debt Payments': 550,
      'Education': 100,
      'Travel': 400,
      'Pets': 150,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 700
    }
  },
  'fire': {
    name: 'FIRE',
    sub: 'Financial Independence · Retire Early',
    blurb: 'Optimized for a 50%+ savings rate. Lean fixed costs, minimal discretionary, max retirement and brokerage contributions. The r/financialindependence playbook.',
    income: 10230,
    targets: {
      'Housing': 1800,
      'Food & Dining': 500,
      'Transportation': 400,
      'Shopping': 200,
      'Utilities': 340,
      'Entertainment': 100,
      'Subscriptions': 30,
      'Personal Care': 80,
      'Gifts & Donations': 150,
      'Health & Medical': 150,
      'Insurance': 400,
      'Savings': 5200,
      'Debt Payments': 300,
      'Education': 0,
      'Travel': 200,
      'Pets': 80,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 300
    }
  },
  'zero-based': {
    name: 'Zero-Based',
    sub: 'Every dollar gets a job · YNAB-style',
    blurb: 'Income minus expenses equals zero. Nothing left unassigned. Real-world realistic: room for travel, education, eating out, plus disciplined savings.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 750,
      'Transportation': 600,
      'Shopping': 500,
      'Utilities': 380,
      'Entertainment': 240,
      'Subscriptions': 120,
      'Personal Care': 200,
      'Gifts & Donations': 300,
      'Health & Medical': 200,
      'Insurance': 450,
      'Savings': 2200,
      'Debt Payments': 700,
      'Education': 50,
      'Travel': 300,
      'Pets': 130,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 710
    }
  },
  'anti-budget': {
    name: 'Anti-Budget',
    sub: 'Paula Pant · Save first, spend the rest',
    blurb: 'Pay yourself 20% off the top into savings + retirement. Don\'t track the rest by category — if savings happens automatically, the spending takes care of itself.',
    income: 10230,
    targets: {
      'Housing': 2200,
      'Food & Dining': 700,
      'Transportation': 550,
      'Shopping': 600,
      'Utilities': 360,
      'Entertainment': 350,
      'Subscriptions': 150,
      'Personal Care': 180,
      'Gifts & Donations': 300,
      'Health & Medical': 200,
      'Insurance': 420,
      'Savings': 2050,
      'Debt Payments': 500,
      'Education': 100,
      'Travel': 400,
      'Pets': 130,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 1040
    }
  },
  'kakeibo': {
    name: 'Kakeibo',
    sub: 'Japanese 4-bucket · Needs · Wants · Culture · Unexpected',
    blurb: 'A 100-year-old Japanese mindful-money practice. Four hand-written buckets — survival, optional, culture & growth, and the unexpected. Reflect at month-end on what each category bought you.',
    income: 10230,
    targets: {
      'Housing': 2200,
      'Food & Dining': 750,
      'Transportation': 550,
      'Shopping': 350,
      'Utilities': 360,
      'Entertainment': 300,
      'Subscriptions': 90,
      'Personal Care': 150,
      'Gifts & Donations': 250,
      'Health & Medical': 200,
      'Insurance': 420,
      'Savings': 2200,
      'Debt Payments': 400,
      'Education': 300,
      'Travel': 350,
      'Pets': 100,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 1260
    }
  },
  'new-parent': {
    name: 'New Parent',
    sub: 'Young family · childcare + 529 priority',
    blurb: 'Childcare is now the second-largest line. Health & medical and insurance climb. Discretionary (travel, dining, entertainment) compresses to make room — and a 529 contribution lands under Education.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 900,
      'Transportation': 550,
      'Shopping': 350,
      'Utilities': 380,
      'Entertainment': 100,
      'Subscriptions': 80,
      'Personal Care': 120,
      'Gifts & Donations': 150,
      'Health & Medical': 350,
      'Insurance': 550,
      'Savings': 1100,
      'Debt Payments': 500,
      'Education': 200,
      'Travel': 100,
      'Pets': 80,
      'Childcare': 1800,
      'Business': 0,
      'Taxes': 0,
      'Misc': 520
    }
  },
  'self-employed': {
    name: 'Self-Employed',
    sub: '1099 · 25% tax set-aside · biz expenses',
    blurb: 'Built for freelancers, contractors, and Etsy sellers. A quarter of every dollar earned is escrowed for quarterly taxes. Business pulls a real line. Self-paid health insurance is heavier than a W-2 budget.',
    income: 10230,
    targets: {
      'Housing': 1900,
      'Food & Dining': 600,
      'Transportation': 450,
      'Shopping': 250,
      'Utilities': 320,
      'Entertainment': 150,
      'Subscriptions': 100,
      'Personal Care': 120,
      'Gifts & Donations': 150,
      'Health & Medical': 200,
      'Insurance': 700,
      'Savings': 1200,
      'Debt Payments': 400,
      'Education': 150,
      'Travel': 200,
      'Pets': 80,
      'Childcare': 0,
      'Business': 600,
      'Taxes': 2560,
      'Misc': 100
    }
  },
  'hcol-renter': {
    name: 'HCOL Renter',
    sub: 'High-cost city · 40% housing · student loans',
    blurb: 'For NYC, SF, Seattle, Boston, DC. Rent eats 40%. Student-loan payments get a serious line. Less car, less stuff, more transit. Savings is what\'s left — and that\'s okay, the location is the investment.',
    income: 10230,
    targets: {
      'Housing': 4100,
      'Food & Dining': 800,
      'Transportation': 350,
      'Shopping': 300,
      'Utilities': 280,
      'Entertainment': 200,
      'Subscriptions': 100,
      'Personal Care': 150,
      'Gifts & Donations': 100,
      'Health & Medical': 150,
      'Insurance': 280,
      'Savings': 900,
      'Debt Payments': 1100,
      'Education': 50,
      'Travel': 300,
      'Pets': 80,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 990
    }
  },
  'custom': {
    name: 'Custom',
    sub: 'You set every target',
    blurb: 'Click any yellow cell to edit. Totals update live. Build a profile that matches your real life — then save it as your personal default.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 650,
      'Transportation': 600,
      'Shopping': 500,
      'Utilities': 380,
      'Entertainment': 240,
      'Subscriptions': 120,
      'Personal Care': 200,
      'Gifts & Donations': 300,
      'Health & Medical': 180,
      'Insurance': 400,
      'Savings': 1800,
      'Debt Payments': 700,
      'Education': 50,
      'Travel': 250,
      'Pets': 120,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 200
    }
  }
};
function MonthlyBudgetTab() {
  const [profileId, setProfileId] = React.useState('dave-ramsey');
  const [customOverrides, setCustomOverrides] = React.useState({});
  const profile = BUDGET_PROFILES[profileId];
  const income = profile.income;
  const isCustom = profileId === 'custom';

  // For Custom, merge defaults + overrides
  const targets = isCustom ? {
    ...profile.targets,
    ...customOverrides
  } : profile.targets;
  const total = Object.values(targets).reduce((a, b) => a + b, 0);
  const remaining = income - total;
  const savingsRate = (targets['Savings'] || 0) / income * 100;
  const cats = Object.keys(profile.targets);
  const half = Math.ceil(cats.length / 2);
  const left = cats.slice(0, half);
  const right = cats.slice(half);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Monthly Budget"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 18,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "PICK A PROFILE OR SET YOUR OWN"
  }, "DESIRED FINANCIAL PROFILE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 10
    }
  }, profile.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--pal-accent, #C5A95A)',
      marginTop: 4
    }
  }, profile.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 13,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.55,
      marginTop: 10,
      maxWidth: 540
    }
  }, profile.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10,
      minWidth: 420
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Monthly Income",
    value: fmt(income),
    accent: "primary",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Budgeted",
    value: fmt(total),
    sub: remaining >= 0 ? fmt(remaining) + ' free' : fmt(-remaining) + ' over',
    accent: remaining < 0 ? 'danger' : 'mid',
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Savings Rate",
    value: pct(savingsRate, 1),
    sub: "of income",
    accent: "gold",
    big: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-profile-scroll",
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 8,
      scrollbarWidth: 'thin',
      maskImage: 'linear-gradient(to right, transparent 0, #000 18px, #000 calc(100% - 36px), transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 18px, #000 calc(100% - 36px), transparent 100%)'
    }
  }, Object.entries(BUDGET_PROFILES).map(([id, p]) => {
    const active = id === profileId;
    const pSavings = (p.targets['Savings'] || 0) / p.income * 100;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setProfileId(id),
      style: {
        flex: '0 0 auto',
        cursor: 'pointer',
        background: active ? 'var(--pal-primary, #1C3D2E)' : '#FAF8F2',
        color: active ? '#FAF8F2' : '#1C3D2E',
        border: '1px solid ' + (active ? 'var(--pal-primary, #1C3D2E)' : 'rgba(28,61,46,0.16)'),
        borderRadius: 999,
        padding: '8px 14px 8px 12px',
        fontFamily: 'Jost,sans-serif',
        fontSize: 12.5,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        whiteSpace: 'nowrap',
        transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease',
        boxShadow: active ? '0 1px 2px rgba(28,61,46,0.18)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 999,
        background: active ? 'var(--pal-accent, #C5A95A)' : 'rgba(28,61,46,0.22)',
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        opacity: active ? 0.75 : 0.55,
        fontVariantNumeric: 'tabular-nums',
        borderLeft: '1px solid ' + (active ? 'rgba(250,248,242,0.22)' : 'rgba(28,61,46,0.14)'),
        paddingLeft: 10,
        letterSpacing: '0.02em'
      }
    }, pct(pSavings, 0), " save"));
  }))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: isCustom ? 'EDIT ANY YELLOW CELL' : 'PRESET FROM PROFILE'
  }, "CATEGORY TARGETS \xB7 20 CATEGORIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 12
    }
  }, [left, right].map((col, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '0.5fr', '0.9fr'],
    cols: [{
      label: 'Category'
    }, {
      label: 'Target',
      align: 'right'
    }, {
      label: '% Inc',
      align: 'right'
    }, {
      label: 'Share'
    }]
  }), col.map((cat, i) => {
    const val = targets[cat];
    const pctInc = val / income * 100;
    const share = val / Math.max(...Object.values(targets));
    return /*#__PURE__*/React.createElement(DataRow, {
      key: cat,
      widths: ['1.4fr', '0.9fr', '0.5fr', '0.9fr'],
      zebra: i % 2 === 1,
      last: i === col.length - 1,
      cols: [{
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 500
          }
        }, cat)
      }, {
        content: isCustom ? /*#__PURE__*/React.createElement("input", {
          type: "number",
          value: val,
          onChange: e => setCustomOverrides({
            ...customOverrides,
            [cat]: Number(e.target.value) || 0
          }),
          style: {
            width: 70,
            background: '#FFFDE7',
            border: '1px solid #C5A95A',
            borderRadius: 3,
            padding: '3px 6px',
            fontFamily: 'Jost,sans-serif',
            fontVariantNumeric: 'tabular-nums',
            fontSize: 12,
            textAlign: 'right',
            color: '#1C3D2E',
            outline: 'none',
            fontWeight: 500
          }
        }) : /*#__PURE__*/React.createElement("span", null, fmt(val)),
        align: 'right',
        num: true
      }, {
        content: pctInc.toFixed(1) + '%',
        align: 'right',
        num: true
      }, {
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            height: 5,
            background: 'rgba(28,61,46,0.08)',
            borderRadius: 1,
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: share * 100 + '%',
            height: '100%',
            background: cat === 'Savings' ? 'var(--pal-accent, #C5A95A)' : cat === 'Debt Payments' ? '#832f30' : 'var(--pal-primary, #1C3D2E)',
            transition: 'width 220ms'
          }
        }))
      }]
    });
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 10,
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: '16px 22px',
      marginTop: 16
    }
  }, [['MONTHLY INCOME', fmt(income)], ['TOTAL BUDGETED', fmt(total)], [remaining >= 0 ? 'UNALLOCATED' : 'OVER BUDGET', (remaining >= 0 ? '+' : '−') + fmt(Math.abs(remaining)).replace('$', '$')], ['SAVINGS RATE', pct(savingsRate, 1)]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(250,248,242,0.60)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 22,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums',
      color: i === 2 && remaining < 0 ? '#fca5a5' : i === 2 ? '#86efac' : '#FAF8F2'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Targets feed Dashboard's % of Budget and Health Score's Budget Adherence"
  })));
}
Object.assign(window, {
  GoalsTab,
  BankImportTab,
  StubTab,
  MonthlyBudgetTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/tabs-actions.jsx", error: String((e && e.message) || e) }); }

// export/src/tabs-analysis.jsx
try { (() => {
/* =====================================================================
   ANALYSIS TABS — Trends, Health Score, Net Worth
   ===================================================================== */

/* ---------- TRENDS ---------- */
function TrendsTab() {
  const all = window.CC_DATA.months_24;
  const [window_, setWindow] = React.useState(6);
  const months = all.slice(-window_);
  const windowLabel = months[0].label + ' – ' + months[months.length - 1].label;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Trends"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: `${months.length} MONTHS · ${windowLabel.toUpperCase()}`
  }, "INCOME VS EXPENSES"), /*#__PURE__*/React.createElement(WindowToggle, {
    value: window_,
    onChange: setWindow
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 22,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(IncomeExpensesChart, {
    months: months
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      marginTop: 14,
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      color: 'rgba(28,61,46,0.75)'
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--pal-primary, #1C3D2E)",
    label: "Income"
  }), /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--pal-mid, #2D5C45)",
    label: "Expenses",
    pattern: "diag"
  }), /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--pal-accent, #C5A95A)",
    label: "Savings Rate",
    line: true
  }))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: `${months.length}-MONTH WINDOW`
  }, "INCOME VS EXPENSES \xB7 TABLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1fr', '1fr', '1fr', '1fr', '1fr'],
    cols: [{
      label: 'Month'
    }, {
      label: 'Income',
      align: 'right'
    }, {
      label: 'Expenses',
      align: 'right'
    }, {
      label: 'Net Cash Flow',
      align: 'right'
    }, {
      label: 'Savings Rate',
      align: 'right'
    }]
  }), months.map((m, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: m.label,
    widths: ['1fr', '1fr', '1fr', '1fr', '1fr'],
    zebra: i % 2 === 1,
    last: false,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, m.label)
    }, {
      content: fmt(m.income),
      align: 'right',
      num: true
    }, {
      content: fmt(m.expenses),
      align: 'right',
      num: true
    }, {
      content: fmt(m.net, {
        signed: true
      }),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: pct(m.savings_rate),
      align: 'right',
      num: true
    }]
  })), /*#__PURE__*/React.createElement(DataRow, {
    widths: ['1fr', '1fr', '1fr', '1fr', '1fr'],
    zebra: false,
    last: true,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          fontFamily: 'Jost,sans-serif',
          fontSize: 10,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--pal-mid, #2D5C45)'
        }
      }, months.length, "-Month Total")
    }, {
      content: fmt(months.reduce((a, m) => a + m.income, 0)),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: fmt(months.reduce((a, m) => a + m.expenses, 0)),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: fmt(months.reduce((a, m) => a + m.net, 0), {
        signed: true
      }),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: pct(months.reduce((a, m) => a + m.savings_rate, 0) / months.length),
      align: 'right',
      num: true,
      bold: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "WITH 6-MONTH SPARKLINES"
  }, "SPENDING BY CATEGORY"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12
    }
  }, [{
    cat: 'Food & Dining',
    vals: [380, 540, 685, 760, 855, 922],
    delta: '+142%',
    status: 'over'
  }, {
    cat: 'Subscriptions',
    vals: [48, 78, 95, 124, 162, 180],
    delta: '+275%',
    status: 'over'
  }, {
    cat: 'Housing',
    vals: [2400, 2400, 2400, 2400, 2400, 2400],
    delta: '0%',
    status: 'on'
  }, {
    cat: 'Transportation',
    vals: [520, 540, 510, 580, 555, 540],
    delta: '+4%',
    status: 'on'
  }, {
    cat: 'Shopping',
    vals: [320, 410, 460, 520, 580, 618],
    delta: '+93%',
    status: 'fair'
  }, {
    cat: 'Utilities',
    vals: [340, 355, 360, 370, 365, 360],
    delta: '+6%',
    status: 'on'
  }, {
    cat: 'Entertainment',
    vals: [180, 195, 210, 225, 240, 255],
    delta: '+42%',
    status: 'fair'
  }, {
    cat: 'Personal Care',
    vals: [160, 175, 170, 165, 175, 180],
    delta: '+12%',
    status: 'on'
  }].map((r, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: r.cat,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1.8fr 0.7fr 0.6fr',
      gap: 14,
      alignItems: 'center',
      padding: '10px 14px',
      background: i % 2 === 1 ? 'var(--pal-zebra, #EEF2EC)' : 'transparent',
      borderBottom: i < arr.length - 1 ? '1px solid rgba(28,61,46,0.06)' : 0,
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      color: 'var(--pal-primary, #1C3D2E)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, r.cat), /*#__PURE__*/React.createElement(Sparkline, {
    vals: r.vals,
    status: r.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600,
      textAlign: 'right',
      color: r.status === 'over' ? '#832f30' : r.status === 'fair' ? '#7d6420' : '#0F7A37'
    }
  }, r.delta), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    status: r.status
  })))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true
  }, months.length, "-MONTH KEY INSIGHTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 18,
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, (() => {
    const sorted = [...months].sort((a, b) => b.savings_rate - a.savings_rate);
    const bestSave = sorted[0];
    const sortedI = [...months].sort((a, b) => b.income - a.income);
    const highIncome = sortedI[0];
    const sortedE = [...months].sort((a, b) => a.expenses - b.expenses);
    const lowExp = sortedE[0];
    const avgI = months.reduce((a, m) => a + m.income, 0) / months.length;
    const avgE = months.reduce((a, m) => a + m.expenses, 0) / months.length;
    const avgSr = months.reduce((a, m) => a + m.savings_rate, 0) / months.length;
    const totalSaved = months.reduce((a, m) => a + m.net, 0);
    return [['BEST SAVINGS MONTH', bestSave.label, pct(bestSave.savings_rate) + ' rate'], ['HIGHEST INCOME', highIncome.label, fmt(highIncome.income)], ['LOWEST EXPENSE', lowExp.label, fmt(lowExp.expenses)], ['AVG MONTHLY INCOME', fmt(avgI), months.length + '-mo'], ['AVG MONTHLY EXP', fmt(avgE), months.length + '-mo'], ['AVG SAVINGS RATE', pct(avgSr), months.length + '-mo'], ['TOTAL SAVED', fmt(totalSaved), months.length + '-mo']];
  })().map(([k, v, sub]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10,
      borderBottom: '1px solid rgba(28,61,46,0.06)',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 13.5,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 3
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--pal-primary, #1C3D2E)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Trends update automatically as transactions are imported"
  })));
}

/* ---------- Income vs Expenses chart (grouped bar + line overlay) ---------- */
function IncomeExpensesChart({
  months
}) {
  const W = 880,
    H = 240,
    pad = {
      l: 56,
      r: 50,
      t: 12,
      b: 32
    };
  const innerW = W - pad.l - pad.r,
    innerH = H - pad.t - pad.b;
  const maxY = Math.max(...months.flatMap(m => [m.income, m.expenses])) * 1.05;
  const minR = 0,
    maxR = 50;
  const bw = innerW / months.length;
  // Tighten gap when there are many months
  const gap = months.length <= 6 ? 14 : months.length <= 12 ? 6 : 3;
  const bw2 = Math.max(2, (bw - gap) / 2);
  // Show every Nth label only
  const labelEvery = months.length <= 6 ? 1 : months.length <= 12 ? 2 : 4;
  const linePts = months.map((m, i) => {
    const x = pad.l + i * bw + bw / 2;
    const y = pad.t + innerH - (m.savings_rate - minR) / (maxR - minR) * innerH;
    return [x, y];
  });
  const path = 'M ' + linePts.map(p => p.join(' ')).join(' L ');
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "xMidYMid meet",
    style: {
      display: 'block'
    }
  }, [0, 0.25, 0.5, 0.75, 1].map(t => {
    const y = pad.t + innerH - t * innerH;
    const v = maxY * t;
    return /*#__PURE__*/React.createElement("g", {
      key: t
    }, /*#__PURE__*/React.createElement("line", {
      x1: pad.l,
      y1: y,
      x2: W - pad.r,
      y2: y,
      stroke: "rgba(28,61,46,0.08)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: pad.l - 8,
      y: y + 4,
      textAnchor: "end",
      style: {
        fontFamily: 'Jost,sans-serif',
        fontSize: 10,
        fill: 'rgba(28,61,46,0.55)'
      }
    }, "$", (v / 1000).toFixed(0), "k"));
  }), months.map((m, i) => {
    const x = pad.l + i * bw + gap / 2;
    const hi = m.income / maxY * innerH;
    const he = m.expenses / maxY * innerH;
    const showLabel = i % labelEvery === 0 || i === months.length - 1;
    return /*#__PURE__*/React.createElement("g", {
      key: m.label + i
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: pad.t + innerH - hi,
      width: bw2,
      height: hi,
      fill: "var(--pal-primary, #1C3D2E)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: x + bw2 + 1,
      y: pad.t + innerH - he,
      width: bw2,
      height: he,
      fill: "var(--pal-mid, #2D5C45)",
      opacity: "0.78"
    }), showLabel && /*#__PURE__*/React.createElement("text", {
      x: pad.l + i * bw + bw / 2,
      y: H - 10,
      textAnchor: "middle",
      style: {
        fontFamily: 'Jost,sans-serif',
        fontSize: 10,
        fill: 'rgba(28,61,46,0.65)',
        letterSpacing: '0.04em'
      }
    }, m.short));
  }), [0, 0.25, 0.5, 0.75, 1].map(t => {
    const y = pad.t + innerH - t * innerH;
    return /*#__PURE__*/React.createElement("text", {
      key: t,
      x: W - pad.r + 8,
      y: y + 4,
      style: {
        fontFamily: 'Jost,sans-serif',
        fontSize: 10,
        fill: 'var(--pal-accent, #C5A95A)'
      }
    }, (maxR * t).toFixed(0), "%");
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "var(--pal-accent, #C5A95A)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), linePts.map((p, i) => {
    const showDot = months.length <= 12 || i % 4 === 0 || i === linePts.length - 1;
    return showDot ? /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p[0],
      cy: p[1],
      r: months.length <= 6 ? 4 : 3,
      fill: "var(--pal-bg, #FAF8F2)",
      stroke: "var(--pal-accent, #C5A95A)",
      strokeWidth: "2"
    }) : null;
  }));
}

/* ---------- Sparkline ---------- */
function Sparkline({
  vals,
  status,
  w = 140,
  h = 28
}) {
  const min = Math.min(...vals),
    max = Math.max(...vals);
  const span = max - min || 1;
  const points = vals.map((v, i) => [i / (vals.length - 1) * (w - 4) + 2, h - 2 - (v - min) / span * (h - 8)]);
  const path = 'M ' + points.map(p => p.join(' ')).join(' L ');
  const fill = status === 'over' ? '#832f30' : status === 'fair' ? '#C5A95A' : '#2D5C45';
  const area = `M ${points[0][0]} ${h - 2} L ` + points.map(p => p.join(' ')).join(' L ') + ` L ${points[points.length - 1][0]} ${h - 2} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: fill,
    opacity: "0.10"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: fill,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), points.map((p, i) => i === points.length - 1 ? /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "2.5",
    fill: fill
  }) : null));
}
function Legend({
  swatch,
  label,
  line,
  pattern
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, line ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 18,
      height: 0,
      borderTop: '2.5px solid ' + swatch
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 14,
      height: 14,
      background: swatch,
      opacity: pattern ? 0.78 : 1,
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}

/* ---------- Window toggle: 6 / 12 / 24 months ---------- */
function WindowToggle({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.18)',
      borderRadius: 3,
      padding: 2,
      fontFamily: 'Jost,sans-serif'
    }
  }, [6, 12, 24].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => onChange(n),
    style: {
      background: value === n ? 'var(--pal-primary, #1C3D2E)' : 'transparent',
      color: value === n ? '#FAF8F2' : 'rgba(28,61,46,0.65)',
      border: 0,
      borderRadius: 2,
      padding: '5px 14px',
      fontFamily: 'inherit',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, n, " mo")));
}

/* ---------- HEALTH SCORE ---------- */
function HealthScoreTab() {
  const h = window.CC_DATA.health;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Health Score"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "VIEWING: SEE MONTH SELECTOR ON DASHBOARD"
  }, "COMPOSITE HEALTH SCORE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 22,
      marginTop: 14,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "YOUR SCORE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 92,
      lineHeight: 1,
      color: '#FAF8F2'
    }
  }, h.composite), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, h.grade)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 300,
      color: '#FAF8F2',
      opacity: 0.65,
      marginTop: 4
    }
  }, "out of 100 \xB7 weighted composite"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      height: 14,
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 45,
      background: '#832f30'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 15,
      background: '#C8873A'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 15,
      background: '#C5A95A'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 15,
      background: '#2D5C45'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 10,
      background: '#16a34a'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 14,
      marginTop: -14,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${h.composite}%`,
      top: -3,
      transform: 'translateX(-50%)',
      width: 2,
      height: 20,
      background: '#FAF8F2',
      boxShadow: '0 0 0 2px #1C3D2E'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      fontFamily: 'Jost,sans-serif',
      fontSize: 9,
      color: 'rgba(250,248,242,0.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Critical"), /*#__PURE__*/React.createElement("span", null, "Needs Work"), /*#__PURE__*/React.createElement("span", null, "Fair"), /*#__PURE__*/React.createElement("span", null, "Good"), /*#__PURE__*/React.createElement("span", null, "Excellent"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "\u26A1 BIGGEST OPPORTUNITY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.15,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 10
    }
  }, h.biggest_opportunity.split('—')[0].trim()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'rgba(28,61,46,0.75)',
      marginTop: 10
    }
  }, h.biggest_opportunity.split('—')[1] ? h.biggest_opportunity.split('—')[1].trim() : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, "If you fix this"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 2
    }
  }, "72 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(28,61,46,0.30)'
    }
  }, "\u2192"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#0F7A37'
    }
  }, "78"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'Jost,sans-serif',
      fontSize: 11.5,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.65)',
      borderLeft: '1px solid rgba(28,61,46,0.10)',
      paddingLeft: 18
    }
  }, "Cut Food & Dining by 25% next month to hit the 80 \"Excellent\" threshold by Q3.")))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "WHAT'S DRIVING YOUR SCORE"
  }, "FIVE INDICATORS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '1.5fr', '0.5fr', '0.7fr', '1.5fr'],
    cols: [{
      label: 'Indicator'
    }, {
      label: 'Your Value',
      align: 'right'
    }, {
      label: 'Score'
    }, {
      label: 'Wt',
      align: 'right'
    }, {
      label: 'Status',
      align: 'right'
    }, {
      label: 'Benchmark'
    }]
  }), h.indicators.map((ind, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: ind.name,
    widths: ['1.4fr', '0.9fr', '1.5fr', '0.5fr', '0.7fr', '1.5fr'],
    zebra: i % 2 === 1,
    last: i === h.indicators.length - 1,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, ind.name)
    }, {
      content: ind.value,
      align: 'right',
      num: true
    }, {
      content: /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement(Progress, {
        pct: ind.score,
        status: ind.status,
        height: 6
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 600,
          minWidth: 30,
          textAlign: 'right'
        }
      }, ind.score))
    }, {
      content: ind.weight + '%',
      align: 'right',
      num: true
    }, {
      content: /*#__PURE__*/React.createElement(Chip, {
        status: ind.status
      }),
      align: 'right'
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontWeight: 300,
          fontSize: 11.5,
          color: 'rgba(28,61,46,0.6)'
        }
      }, ind.bench)
    }]
  }))), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Weights are editable in the Health Score tab"
  })));
}

/* ---------- NET WORTH ---------- */
function NetWorthTab() {
  const nw = window.CC_DATA.net_worth;
  const investTotal = nw.investments.reduce((a, b) => a + b.value, 0);
  const budgetAssets = nw.budget_accounts.filter(a => a.balance > 0).reduce((a, b) => a + b.balance, 0);
  const budgetLiabs = -nw.budget_accounts.filter(a => a.balance < 0).reduce((a, b) => a + b.balance, 0);

  // Sparkline data (synthetic 6-mo: from current minus monthly net deltas)
  const nwHistory = [205400, 210800, 214900, 217200, 219700, 222640];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Net Worth"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: 28,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 24,
      alignItems: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "NET WORTH SNAPSHOT \xB7 MAY 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1,
      color: '#FAF8F2',
      marginTop: 8,
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(nw.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 13,
      color: '#86efac',
      fontWeight: 500,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "\u2191 ", fmt(nw.change_mo, {
    signed: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      opacity: 0.65
    }
  }, "this month"))), /*#__PURE__*/React.createElement(NetWorthSparkline, {
    vals: nwHistory
  }), /*#__PURE__*/React.createElement(BigNum, {
    label: "TOTAL ASSETS",
    val: fmt(nw.assets)
  }), /*#__PURE__*/React.createElement(BigNum, {
    label: "TOTAL LIABILITIES",
    val: fmt(nw.liabilities)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "AUTO-PULLED FROM ACCOUNTS"
  }, "BUDGET ACCOUNTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.6fr', '0.8fr', '0.7fr', '0.9fr'],
    cols: [{
      label: 'Account'
    }, {
      label: 'Type'
    }, {
      label: 'Owner'
    }, {
      label: 'Balance',
      align: 'right'
    }]
  }), nw.budget_accounts.map((a, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: a.name,
    widths: ['1.6fr', '0.8fr', '0.7fr', '0.9fr'],
    zebra: i % 2 === 1,
    last: i === nw.budget_accounts.length - 1,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, a.name)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11,
          color: 'rgba(28,61,46,0.65)'
        }
      }, a.type)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11,
          color: 'rgba(28,61,46,0.65)'
        }
      }, a.owner)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          color: a.balance < 0 ? '#832f30' : 'var(--pal-primary, #1C3D2E)',
          fontWeight: a.balance < 0 ? 600 : 500
        }
      }, fmt(a.balance, {
        signed: a.balance < 0
      })),
      align: 'right',
      num: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 0.8fr 0.7fr 0.9fr',
      background: 'var(--pal-mid, #2D5C45)',
      color: '#FAF8F2',
      padding: '10px 12px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Budget Net"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(budgetAssets - budgetLiabs))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "ENTER BALANCES DIRECTLY"
  }, "INVESTMENTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.6fr', '1fr', '0.9fr'],
    cols: [{
      label: 'Account / Fund'
    }, {
      label: 'Type'
    }, {
      label: 'Current Value',
      align: 'right'
    }]
  }), nw.investments.map((inv, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: inv.name,
    widths: ['1.6fr', '1fr', '0.9fr'],
    zebra: i % 2 === 1,
    last: i === nw.investments.length - 1,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, inv.name)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11,
          color: 'rgba(28,61,46,0.65)'
        }
      }, inv.type)
    }, {
      content: fmt(inv.value),
      align: 'right',
      num: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 0.9fr',
      background: 'var(--pal-mid, #2D5C45)',
      color: '#FAF8F2',
      padding: '10px 12px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Total Investments"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(investTotal)))))), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Update account balances monthly \xB7 Investments entered directly"
  })));
}
function BigNum({
  label,
  val
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(250,248,242,0.60)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 26,
      color: '#FAF8F2',
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums'
    }
  }, val));
}
function NetWorthSparkline({
  vals
}) {
  const W = 200,
    H = 80;
  const min = Math.min(...vals),
    max = Math.max(...vals);
  const span = max - min || 1;
  const points = vals.map((v, i) => [i / (vals.length - 1) * (W - 8) + 4, H - 6 - (v - min) / span * (H - 16)]);
  const path = 'M ' + points.map(p => p.join(' ')).join(' L ');
  const area = `M ${points[0][0]} ${H - 2} L ` + points.map(p => p.join(' ')).join(' L ') + ` L ${points[points.length - 1][0]} ${H - 2} Z`;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(250,248,242,0.60)'
    }
  }, "6-MONTH TREND"), /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    style: {
      marginTop: 4,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "#C5A95A",
    opacity: "0.20"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "#C5A95A",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), points.map((p, i) => i === points.length - 1 ? /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "4",
    fill: "#C5A95A",
    stroke: "#1C3D2E",
    strokeWidth: "2"
  }) : /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "2",
    fill: "#C5A95A",
    opacity: "0.55"
  }))));
}
Object.assign(window, {
  TrendsTab,
  HealthScoreTab,
  NetWorthTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/tabs-analysis.jsx", error: String((e && e.message) || e) }); }

// export/src/tabs-overview.jsx
try { (() => {
/* =====================================================================
   STARTING TABS — Start Here + Dashboard
   Hero tabs. These are what a buyer sees first and what sells the
   product in Etsy screenshots.
   ===================================================================== */

/* ---------- START HERE ---------- */
function StartHereTab() {
  const palettes = window.CC_DATA.palettes;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Start Here"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '36px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    sub: "WELCOME"
  }, "LIFE, ORGANIZED."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 38,
      color: 'var(--pal-primary, #1C3D2E)',
      lineHeight: 1.1,
      marginTop: 12
    }
  }, "Open it. Add your information. Get clear."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 14.5,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.55,
      marginTop: 14,
      maxWidth: 620
    }
  }, "The Foundation is a 14-tab budget system designed to work out of the box. No formulas to write. No app to learn. Just the numbers, organized.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 6,
      padding: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "24 PALETTES INCLUDED"
  }, "CHOOSE YOUR THEME"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 6
    }
  }, "Pick a palette. We'll repaint everything.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "24 palettes \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8,1fr)',
      gap: 8
    }
  }, palettes.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      background: p.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.primary
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.mid
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.accent
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 8px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      color: '#1C3D2E',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "5 STEPS TO GET STARTED"
  }, "SETUP GUIDE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 10,
      marginTop: 14
    }
  }, [{
    n: 1,
    t: 'Install the Script',
    d: 'Extensions → Apps Script → paste ColumnCo_Foundation_v2.gs. A 💳 Column & Co. menu appears.'
  }, {
    n: 2,
    t: 'Set Up Accounts',
    d: 'Add every bank account, credit card, and savings account. Enter current balances.'
  }, {
    n: 3,
    t: 'Import Transactions',
    d: 'Type the account name in C6. Paste your bank CSV. Run Import. Done.'
  }, {
    n: 4,
    t: 'Set Your Goals',
    d: 'Pick a Type, a Category or Account, a Target. Progress tracks automatically.'
  }, {
    n: 5,
    t: 'Explore Your Data',
    d: 'Dashboard, Trends, Health Score, and Net Worth update as you import.'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 999,
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, "Step ", s.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--pal-primary, #1C3D2E)',
      marginBottom: 6
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.45
    }
  }, s.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 6,
      padding: '28px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28,
      alignItems: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "LLM-READY \xB7 BUILT FOR AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.15,
      marginTop: 10
    }
  }, "Ask Claude or ChatGPT to read your sheet."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 13.5,
      lineHeight: 1.55,
      marginTop: 12,
      opacity: 0.85
    }
  }, "A hidden ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'rgba(250,248,242,0.12)',
      padding: '1px 6px',
      borderRadius: 3,
      fontSize: 12
    }
  }, "_Schema"), " tab documents every column for an AI. Copy a prompt below, paste in your favorite assistant, attach your sheet. You get insights in seconds.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(250,248,242,0.06)',
      border: '1px solid rgba(197,169,90,0.30)',
      borderRadius: 4,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--pal-accent, #C5A95A)',
      marginBottom: 8
    }
  }, "PROMPT \xB7 COPY & PASTE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'ui-monospace, SF Mono, Menlo, monospace',
      fontSize: 12,
      lineHeight: 1.55,
      color: '#FAF8F2'
    }
  }, "\"Find every category where I'm trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel.\""))), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Thank you for your purchase \xB7 Questions? columnandco.com"
  })));
}

/* ---------- DASHBOARD ---------- */
function DashboardTab() {
  const d = window.CC_DATA;
  const top = d.top_spending;
  const breakdown = d.breakdown;
  const totalSpend = breakdown.reduce((a, b) => a + b.amount, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Dashboard"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "VIEWING MONTH"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--pal-primary, #1C3D2E)'
    }
  }, "May 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "\u2190 change to update all figures"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, d.months.slice(-6).map(m => /*#__PURE__*/React.createElement("span", {
    key: m.label,
    style: {
      padding: '6px 11px',
      borderRadius: 2,
      background: m.label === 'May 2026' ? 'var(--pal-primary, #1C3D2E)' : 'transparent',
      color: m.label === 'May 2026' ? '#FAF8F2' : 'rgba(28,61,46,0.65)',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.06em',
      cursor: 'pointer',
      border: m.label === 'May 2026' ? 0 : '1px solid rgba(28,61,46,0.15)'
    }
  }, m.short)))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true
  }, "KEY METRICS \xB7 MAY 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginTop: 14,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Income",
    value: fmt(d.snapshot.income),
    sub: "vs last month +0.1%",
    accent: "primary"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Expenses",
    value: fmt(d.snapshot.expenses),
    sub: "vs last month +1.1%",
    accent: "danger"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Net Cash Flow",
    value: fmt(d.snapshot.net, {
      signed: true
    }),
    sub: "vs last month \u2212$65",
    accent: "primary"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Savings Rate",
    value: pct(d.snapshot.savings_rate),
    sub: "goal: 20%+ \u2014 crushing it",
    accent: "gold"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    dark: true,
    gold: true
  }, "TOP SPENDING \xB7 THIS MONTH"), /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '0.9fr', '1.1fr', '0.9fr'],
    cols: [{
      label: 'Category'
    }, {
      label: 'Spent',
      align: 'right'
    }, {
      label: 'Budget',
      align: 'right'
    }, {
      label: '% of Budget'
    }, {
      label: 'Status',
      align: 'right'
    }]
  }), top.map((r, i) => {
    const p = r.spent / r.budget * 100;
    return /*#__PURE__*/React.createElement(DataRow, {
      key: r.cat,
      widths: ['1.4fr', '0.9fr', '0.9fr', '1.1fr', '0.9fr'],
      zebra: i % 2 === 1,
      last: i === top.length - 1,
      cols: [{
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 500
          }
        }, r.cat)
      }, {
        content: fmt(r.spent),
        align: 'right',
        num: true
      }, {
        content: fmt(r.budget),
        align: 'right',
        num: true
      }, {
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement(Progress, {
          pct: p,
          status: r.status,
          height: 6
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            fontVariantNumeric: 'tabular-nums',
            fontSize: 11,
            color: 'rgba(28,61,46,0.65)',
            minWidth: 34,
            textAlign: 'right'
          }
        }, p.toFixed(0), "%"))
      }, {
        content: /*#__PURE__*/React.createElement(Chip, {
          status: r.status
        }),
        align: 'right'
      }]
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    dark: true,
    gold: true
  }, "MONTH SNAPSHOT"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Income', fmt(d.snapshot.income)], ['Expenses', fmt(d.snapshot.expenses)], ['Net Cash Flow', fmt(d.snapshot.net, {
    signed: true
  })], ['Savings Rate', pct(d.snapshot.savings_rate)], ['Avg Daily Spend', fmt(d.snapshot.avg_daily)], ['Transactions', d.snapshot.transactions + ''], ['Largest Expense', fmt(d.snapshot.largest_expense) + ' · Rent']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '1px solid rgba(28,61,46,0.06)',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--pal-primary, #1C3D2E)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    dark: true,
    gold: true
  }, "SPENDING BREAKDOWN"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 18,
      padding: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    data: breakdown,
    total: totalSpend
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 6
    }
  }, breakdown.slice(0, 12).map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.cat,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'Jost,sans-serif',
      fontSize: 11.5,
      color: '#1C3D2E'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: donutColor(i),
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      opacity: 0.85
    }
  }, s.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 500
    }
  }, (s.amount / totalSpend * 100).toFixed(0), "%")))))), /*#__PURE__*/React.createElement(AiInsightsPanel, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Do not distribute without license"
  })));
}

/* ---------- DONUT chart ---------- */
function donutColor(i) {
  // 12-step palette derived from Forest → Canopy → Cream + Gold accent
  const ramp = ['#1C3D2E', '#2D5C45', '#3C7558', '#4F8D6B', '#67A682', '#8FAF7E', '#C5A95A', '#9E7E3F', '#7d6420', '#5e1f1f', '#832f30', '#C8873A'];
  return ramp[i % ramp.length];
}
function Donut({
  data,
  total,
  size = 180
}) {
  // build SVG arc segments
  const r = size / 2 - 10,
    cx = size / 2,
    cy = size / 2;
  let acc = 0;
  const arcs = data.map((d, i) => {
    const a0 = acc / total * 2 * Math.PI - Math.PI / 2;
    acc += d.amount;
    const a1 = acc / total * 2 * Math.PI - Math.PI / 2;
    const x0 = cx + r * Math.cos(a0),
      y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1),
      y1 = cy + r * Math.sin(a1);
    const large = a1 - a0 > Math.PI ? 1 : 0;
    return {
      path: `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`,
      color: donutColor(i)
    };
  });
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      display: 'block'
    }
  }, arcs.map((a, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: a.path,
    fill: a.color
  })), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r * 0.58,
    fill: "var(--pal-bg, #FAF8F2)"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy - 6,
    textAnchor: "middle",
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      fill: 'rgba(28,61,46,0.55)'
    }
  }, "TOTAL"), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 18,
    textAnchor: "middle",
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 22,
      fill: 'var(--pal-primary, #1C3D2E)'
    }
  }, fmt(total)));
}

/* ---------- AI Insights panel — automatically computed callouts ---------- */
function AiInsightsPanel() {
  const insights = [{
    tag: 'LEAK',
    icon: '⚡',
    title: 'Dining is creeping up.',
    body: 'Dec → May: $380 → $922 per month. That\'s $9.7K/yr on dining if it holds.',
    status: 'over'
  }, {
    tag: 'SUBS',
    icon: '⚡',
    title: '12 active subscriptions.',
    body: 'You added 9 in the last 6 months. Hidden cost: $132/mo.',
    status: 'fair'
  }, {
    tag: 'WIN',
    icon: '✓',
    title: 'Emergency fund is healthy.',
    body: '3.3 months of expenses parked in Ally Savings. Above your 3-month goal.',
    status: 'on'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 14px',
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 10.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--pal-mid, #2D5C45)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 3,
      height: 14,
      background: 'var(--pal-accent, #C5A95A)'
    }
  }), "AUTO INSIGHTS \xB7 WHAT THE NUMBERS SAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, insights.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.title,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 2,
      background: i.status === 'on' ? 'rgba(22,163,74,0.18)' : i.status === 'fair' ? 'rgba(197,169,90,0.20)' : 'rgba(131,47,48,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: i.status === 'on' ? '#86efac' : i.status === 'fair' ? '#C5A95A' : '#fca5a5',
      fontSize: 18
    }
  }, i.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 15,
      lineHeight: 1.25
    }
  }, i.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11.5,
      fontWeight: 300,
      lineHeight: 1.5,
      opacity: 0.85,
      marginTop: 4
    }
  }, i.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      borderTop: '1px solid rgba(250,248,242,0.10)',
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      letterSpacing: '0.12em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "Pipe these into Claude / ChatGPT for a deeper read \u2192"));
}
Object.assign(window, {
  StartHereTab,
  DashboardTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/tabs-overview.jsx", error: String((e && e.message) || e) }); }

// listing/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "listing/design-canvas.jsx", error: String((e && e.message) || e) }); }

// listing/photos.jsx
try { (() => {
/* =====================================================================
   COLUMN & CO. · ETSY LISTING PHOTOS · THE FOUNDATION v2.1
   Each Photo* is a fixed 2000×1500 frame inside a DCArtboard.
   ===================================================================== */

/* ---------- Helpers: brand logo mark ---------- */
function GridMark({
  size = 80,
  light = false,
  gap = 4
}) {
  // The 3×5 grid mark — column 1 is solid Harvest Gold spine (2-1-2 rhythm),
  // columns 2-3 are fading tone studies in Forest or Cream.
  const base = light ? '#FAF8F2' : '#1C3D2E';
  const gold = '#C5A95A';
  // Cell opacity pattern (rows × cols) — col 1 is always gold solid.
  // Per spec: col 1 has 2-1-2 vertical rhythm (rows 1,2 solid; row 3 solid; rows 4,5 solid)
  // Cols 2-3 fade in three opacities: 0.85, 0.45, 0.18.
  const c2 = [0.85, 0.45, 0.18, 0.85, 0.45];
  const c3 = [0.45, 0.18, 0.85, 0.18, 0.85];
  const cell = (row, col) => {
    if (col === 0) return {
      background: gold
    };
    const ops = col === 1 ? c2 : c3;
    return {
      background: base,
      opacity: ops[row]
    };
  };
  const cells = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 3; c++) {
      cells.push(/*#__PURE__*/React.createElement("i", {
        key: `${r}-${c}`,
        style: cell(r, c)
      }));
    }
  }
  return /*#__PURE__*/React.createElement("span", {
    className: "grid-mark",
    style: {
      ['--gm-size']: size + 'px',
      ['--gm-gap']: gap + 'px'
    }
  }, cells);
}
function Lockup({
  size = 80,
  light = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: size * 0.45
    }
  }, /*#__PURE__*/React.createElement(GridMark, {
    size: size,
    light: light
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontWeight: 700,
      fontSize: size * 0.85,
      lineHeight: 0.95,
      color: light ? '#FAF8F2' : '#1C3D2E',
      letterSpacing: '-0.01em'
    }
  }, "Column & Co."), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      marginTop: size * 0.18,
      fontSize: size * 0.22,
      fontWeight: 500,
      letterSpacing: '0.32em',
      color: '#C5A95A'
    }
  }, "LIFE,\xA0\xA0ORGANIZED.")));
}

/* =====================================================================
   PHOTO 01 · COVER · Dark / price-forward / AI-curious hook
   ===================================================================== */
function Photo01_Cover() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ep dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gm-watermark",
    style: {
      right: -180,
      bottom: -260,
      transform: 'rotate(0deg)'
    }
  }, /*#__PURE__*/React.createElement(GridMark, {
    size: 1100,
    light: true,
    gap: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 90,
      left: 96,
      right: 96,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Lockup, {
    size: 88,
    light: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      textAlign: 'right',
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(250,248,242,0.55)'
    }
  }, "The Foundation \xB7 v2.1", /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C5A95A',
      fontSize: 16,
      letterSpacing: '0.22em'
    }
  }, "NEW \xB7 10 BUDGET PROFILES"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 268,
      left: 96,
      right: 96,
      height: 4,
      background: '#C5A95A'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 380,
      left: 96,
      right: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: '#C5A95A',
      marginBottom: 28
    }
  }, "A 14-TAB BUDGET SYSTEM \xB7 GOOGLE SHEETS"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 148,
      fontWeight: 700,
      lineHeight: 0.96,
      color: '#FAF8F2',
      letterSpacing: '-0.02em'
    }
  }, "Open it.", /*#__PURE__*/React.createElement("br", null), "Add your", /*#__PURE__*/React.createElement("br", null), "information.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C5A95A'
    }
  }, "Get clear."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 380,
      right: 96,
      width: 600,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, [{
    tag: 'THE WEDGE',
    h: 'LLM-Ready',
    d: 'Ask Claude or ChatGPT to read your sheet directly.'
  }, {
    tag: 'PRODUCT FEAT',
    h: '24 Palettes',
    d: 'Repaint the whole sheet with one click. Twenty-four named palettes.'
  }, {
    tag: 'NEW IN v2.1',
    h: '10 Budget Profiles',
    d: 'Ramsey · 50/30/20 · FIRE · YNAB · Kakeibo · 5 more.'
  }, {
    tag: 'PRICING',
    h: '$35 · One-Time · Owned',
    d: 'No subscription. No SaaS. Instant download.'
  }].map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'rgba(250,248,242,0.06)',
      border: '1px solid rgba(197,169,90,0.30)',
      borderRadius: 6,
      padding: '22px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.24em',
      color: '#C5A95A'
    }
  }, f.tag), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 38,
      fontWeight: 700,
      color: '#FAF8F2',
      marginTop: 4,
      lineHeight: 1.05
    }
  }, f.h), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 17,
      fontWeight: 300,
      color: 'rgba(250,248,242,0.75)',
      marginTop: 8,
      lineHeight: 1.4
    }
  }, f.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 70,
      left: 96,
      right: 96,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(250,248,242,0.50)'
    }
  }, "columnandco.com  \xB7  Etsy: columnandco  \xB7  Instant download"), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(250,248,242,0.50)'
    }
  }, "\u2193  Scroll for more  \u2193")));
}

/* =====================================================================
   PHOTO 02 · LLM-Ready · the wedge (Cream + Forest panel)
   ===================================================================== */
function Photo02_LlmReady() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ep",
    style: {
      background: 'var(--parch)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 110,
      left: 96,
      right: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--gold)'
    }
  }, "The wedge \xB7 what no other Etsy template does"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 132,
      fontWeight: 700,
      lineHeight: 0.96,
      color: 'var(--forest)',
      letterSpacing: '-0.02em',
      marginTop: 22,
      maxWidth: 1500
    }
  }, "Ask Claude", /*#__PURE__*/React.createElement("br", null), "or ChatGPT to", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "read your sheet."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 90,
      left: 96,
      right: 96,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--forest)',
      color: 'var(--parch)',
      borderRadius: 6,
      padding: '36px 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.28em',
      color: 'var(--gold)'
    }
  }, "PROMPT \xB7 COPY & PASTE"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 26,
      lineHeight: 1.5,
      color: 'var(--parch)',
      marginTop: 18
    }
  }, "\"Find every category where I'm trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel.\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream)',
      borderRadius: 6,
      padding: '36px 40px',
      border: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.28em',
      color: 'var(--canopy)'
    }
  }, "WHAT THE AI SEES"), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      marginTop: 18,
      fontSize: 22,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.85)',
      lineHeight: 1.5
    }
  }, "A hidden ", /*#__PURE__*/React.createElement("code", {
    className: "mono",
    style: {
      background: 'rgba(28,61,46,0.08)',
      padding: '2px 10px',
      borderRadius: 3,
      fontSize: 18
    }
  }, "_Schema"), " tab documents every column for an AI. Attach the sheet. Get insights in seconds. The format is built for it."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, ['_Schema tab', '20 categories', '24 months', '8 accounts', '14 tabs'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "jt",
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.10em',
      padding: '7px 14px',
      background: 'var(--parch)',
      border: '1px solid rgba(28,61,46,0.18)',
      borderRadius: 4,
      color: 'var(--forest)'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      right: 32,
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(GridMark, {
    size: 28,
    gap: 2
  })));
}

/* =====================================================================
   PHOTO 03 · 24 Palettes · visual surface area
   ===================================================================== */
function Photo03_Palettes() {
  // 24 palettes — same data as the foundation kit
  const palettes = [['Light', '#1C3D2E', '#2D5C45', '#C5A95A', '#FAF8F2'], ['Warm Greige', '#3D2B1F', '#5C4033', '#C8873A', '#FAF6F1'], ['Cool Slate', '#1E3A5F', '#2D5282', '#64748B', '#F8FAFC'], ['Sage', '#2D4A3E', '#3D6455', '#8FAF7E', '#F4F9F1'], ['Espresso', '#2C1810', '#4A2C1A', '#C8873A', '#FAF5F0'], ['Maize & Navy', '#003366', '#004080', '#FFCB05', '#F5F8FF'], ['Scarlet & Gray', '#BB0000', '#CC0000', '#808080', '#F9F9F9'], ['Orange & Navy', '#002D6D', '#003D94', '#F47920', '#F5F8FF'], ['Green & Gold', '#154734', '#1A5C43', '#CBA135', '#F3FAF5'], ['Purple & Gold', '#4A1C7C', '#5E2499', '#FFC72C', '#FAF5FF'], ['Crimson & White', '#9B1B30', '#B52238', '#FFFFFF', '#FFF8F9'], ['Garnet & Gold', '#782F40', '#9B3B52', '#CBA135', '#FFF8F5'], ['Forest & White', '#154733', '#1E6048', '#FFFFFF', '#F4FBF6'], ['Royal & Gold', '#002D72', '#003D9C', '#B5A642', '#F0F5FF'], ['Silver & Black', '#1A1A1A', '#2D2D2D', '#A8A9AD', '#F5F5F5'], ['Midnight', '#0B1F3A', '#142E55', '#14B8A6', '#F0F4F8'], ['Burgundy', '#5C0A1A', '#7A0E22', '#E8D5B5', '#FAF5F0'], ['Mocha', '#5C3A21', '#7A4F2D', '#D4A574', '#FAF3EA'], ['Indigo & Blush', '#2E1F6B', '#3D2A8C', '#EAB0B8', '#F7F4FA'], ['Pine & Brass', '#1F3A2E', '#2E5544', '#B8964A', '#F2F8F4'], ['Ocean & Coral', '#0F4858', '#166075', '#F47B6A', '#F0F8FA'], ['Charcoal & Mint', '#2C2C2E', '#44444A', '#A8D5BA', '#F5F5F5'], ['Olive & Cream', '#3D4A1F', '#56672E', '#C8B27A', '#F7F4E8'], ['Custom', '#1B2A4A', '#2C3E6B', '#C8873A', '#F3F4F6']];
  return /*#__PURE__*/React.createElement("div", {
    className: "ep",
    style: {
      background: 'var(--parch)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 110,
      left: 96,
      right: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--gold)'
    }
  }, "Product feature \xB7 unique on Etsy"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 132,
      fontWeight: 700,
      lineHeight: 0.96,
      color: 'var(--forest)',
      letterSpacing: '-0.02em',
      marginTop: 22
    }
  }, "One click.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "Sixteen moods."))), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      textAlign: 'right',
      fontSize: 20,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.70)',
      maxWidth: 460,
      lineHeight: 1.5
    }
  }, "Twenty-four palettes ship with the sheet. Swap any time. Dial it to your taste \u2014 once, or every season."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 640,
      left: 96,
      right: 96,
      display: 'grid',
      gridTemplateColumns: 'repeat(8,1fr)',
      gap: 22
    }
  }, palettes.map(([name, primary, mid, accent, bg]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      background: bg,
      border: '1px solid rgba(28,61,46,0.12)',
      borderRadius: 6,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: primary
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: mid
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: accent
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      padding: '14px 14px',
      fontSize: 17,
      fontWeight: 500,
      color: 'var(--forest)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      right: 32,
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(GridMark, {
    size: 28,
    gap: 2
  })));
}

/* =====================================================================
   PHOTO 04 · 10 Budget Methodologies · v2.1 differentiator
   ===================================================================== */
function Photo04_Profiles() {
  const profiles = [{
    name: 'Dave Ramsey',
    sub: 'Envelopes · Baby Steps',
    save: '15%'
  }, {
    name: '50/30/20',
    sub: "Senator Warren's needs/wants/savings rule",
    save: '15%'
  }, {
    name: 'FIRE',
    sub: 'Financial Independence · Retire Early',
    save: '51%'
  }, {
    name: 'Zero-Based',
    sub: 'Every dollar gets a job · YNAB-style',
    save: '22%'
  }, {
    name: 'Anti-Budget',
    sub: 'Paula Pant · Save first, spend the rest',
    save: '20%',
    isNew: true
  }, {
    name: 'Kakeibo',
    sub: 'Japanese 4-bucket · Needs/Wants/Culture/Unexpected',
    save: '22%',
    isNew: true
  }, {
    name: 'New Parent',
    sub: 'Young family · childcare + 529 priority',
    save: '11%',
    isNew: true
  }, {
    name: 'Self-Employed',
    sub: '1099 · 25% tax set-aside · biz expenses',
    save: '12%',
    isNew: true
  }, {
    name: 'HCOL Renter',
    sub: 'High-cost city · 40% housing · student loans',
    save: '9%',
    isNew: true
  }, {
    name: 'Custom',
    sub: 'You set every target. Live totals.',
    save: '—'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "ep dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 110,
      left: 96,
      right: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--gold)'
    }
  }, "New in v2.1 \xB7 five new methodologies"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 132,
      fontWeight: 700,
      lineHeight: 0.96,
      color: 'var(--parch)',
      letterSpacing: '-0.02em',
      marginTop: 22
    }
  }, "Ten methodologies.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "One sheet."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 540,
      left: 96,
      right: 96,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px 28px'
    }
  }, profiles.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      background: p.isNew ? 'rgba(197,169,90,0.10)' : 'rgba(250,248,242,0.04)',
      border: '1px solid ' + (p.isNew ? 'rgba(197,169,90,0.45)' : 'rgba(250,248,242,0.14)'),
      borderRadius: 6,
      padding: '20px 26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--gold)',
      width: 50,
      textAlign: 'right'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--parch)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, p.name, p.isNew && /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.22em',
      color: 'var(--forest)',
      background: 'var(--gold)',
      padding: '3px 8px',
      borderRadius: 3
    }
  }, "NEW")), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 15,
      fontWeight: 300,
      color: 'rgba(250,248,242,0.65)',
      marginTop: 4
    }
  }, p.sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 28,
      fontWeight: 500,
      color: 'var(--parch)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, p.save), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(250,248,242,0.45)',
      marginTop: 2
    }
  }, "SAVINGS RATE"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      right: 32,
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(GridMark, {
    size: 28,
    light: true,
    gap: 2
  })));
}

/* =====================================================================
   PLACEHOLDER — for photos 02–08, filled in subsequent iterations
   ===================================================================== */
function Photo02_Placeholder({
  n,
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ep",
    style: {
      background: '#FAF8F2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 1200
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: '#C5A95A'
    }
  }, "Photo ", n, " \xB7 placeholder"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 96,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 28,
      lineHeight: 1.05
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 22,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.6)',
      marginTop: 36,
      lineHeight: 1.5
    }
  }, "This photo gets filled in the next iteration.", /*#__PURE__*/React.createElement("br", null), "Frame is 2000\xD71500 \u2014 Etsy listing dimensions, ready to export as PNG.")));
}

/* Expose to window so other script tags can use them */
Object.assign(window, {
  GridMark,
  Lockup,
  Photo01_Cover,
  Photo02_LlmReady,
  Photo03_Palettes,
  Photo04_Profiles,
  Photo02_Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "listing/photos.jsx", error: String((e && e.message) || e) }); }

// site/design-canvas.jsx
try { (() => {
/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/design-canvas.jsx", error: String((e && e.message) || e) }); }

// site/wf-a-funnel.jsx
try { (() => {
/* =====================================================================
   columnandco.com · WIREFRAME · CONVERSION FUNNEL (4 ARTBOARDS)
   1. Home (triage)
   2. Problems hub
   3. Problem page (Money)
   4. Product page (Foundation)
   ===================================================================== */

/* =====================================================================
   01 · HOME — six bands, triage-led
   ===================================================================== */
function WfHome() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-frame",
    style: {
      width: 1440,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfNav, {
    active: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 96px 64px'
    }
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, "The frame"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 96,
    style: {
      marginTop: 22,
      maxWidth: 1100
    }
  }, "What's getting in the way?"), /*#__PURE__*/React.createElement(WfBody, {
    size: 20,
    style: {
      marginTop: 24,
      maxWidth: 760
    }
  }, "Pick the part of life that's hardest right now. We'll show you what helps."), /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 220,
      right: 32
    }
  }, "Band 1: opens with the worldview question, not a product. 6 tiles act as the primary nav for \"I know what's broken.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, PROBLEMS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "wf-card",
    style: {
      padding: '36px 32px',
      minHeight: 220,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WfSectionLabel, null, "Problem"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 44,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 10
    }
  }, p.label), /*#__PURE__*/React.createElement(WfBody, {
    size: 15,
    style: {
      marginTop: 12
    }
  }, p.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "3 products \xB7 5 articles"), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: '#C5A95A',
      letterSpacing: '0.10em'
    }
  }, "See prescriptions \u2192")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream)',
      padding: '64px 96px',
      marginTop: 16,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 24,
      right: 32
    }
  }, "Band 2: catches the \"I'm a mess but can't name it\" buyer. Primary email-capture mechanism on the site."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, "Not sure where to start?"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 56,
    style: {
      marginTop: 18
    }
  }, "Take the 90-second diagnostic."), /*#__PURE__*/React.createElement(WfBody, {
    size: 18,
    style: {
      marginTop: 18
    }
  }, "Eight questions about how today actually went. We'll prescribe a starting point \u2014 and email you a copy.")), /*#__PURE__*/React.createElement(WfButton, {
    size: "lg"
  }, "Start the diagnostic \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 96px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 56,
      right: 32
    }
  }, "Band 3: editorial slot, rotated seasonally. Lets you merchandise without redesigning."), /*#__PURE__*/React.createElement(WfSectionLabel, null, "Featured \xB7 May 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: "Editorial photo \xB7 720 \xD7 480",
    height: 480
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WfHeadline, {
    size: 56
  }, "Taxes are done.", /*#__PURE__*/React.createElement("br", null), "Now find the leak that paid for them."), /*#__PURE__*/React.createElement(WfBody, {
    size: 17,
    style: {
      marginTop: 24,
      maxWidth: 480
    }
  }, "May is the right month to fix what's been quietly draining you. Three tools, one method, four hours of effort, twelve months of clarity."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(WfButton, null, "Read the May letter \u2192"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '120px 96px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 80,
      right: 32
    }
  }, "Band 4: what the product actually does. Sets buyer expectations before they hit a product page."), /*#__PURE__*/React.createElement(WfSectionLabel, null, "How it works"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 56,
    style: {
      marginTop: 18
    }
  }, "Three steps. Once."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40
    }
  }, [{
    n: '01',
    h: 'Diagnose',
    d: 'Name the part of life that\'s hardest. Use the diagnostic or pick a problem.'
  }, {
    n: '02',
    h: 'Install',
    d: 'Download the tool. Copy the script. Five minutes, owned forever.'
  }, {
    n: '03',
    h: 'Stay clear',
    d: 'The tool keeps doing its job. You glance, you adjust, you live.'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 80,
      fontWeight: 700,
      color: '#C5A95A',
      letterSpacing: '-0.04em'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 3,
      background: '#C5A95A',
      margin: '8px 0 24px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 36,
      fontWeight: 700,
      color: '#1C3D2E'
    }
  }, s.h), /*#__PURE__*/React.createElement(WfBody, {
    size: 16,
    style: {
      marginTop: 14,
      lineHeight: 1.55
    }
  }, s.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '120px 96px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 80,
      right: 32
    }
  }, "Band 5: Journal as a first-class brand surface. Humanized voice, strong graphic per post."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WfSectionLabel, null, "From the journal"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 56,
    style: {
      marginTop: 18
    }
  }, "Quiet wins, methodology,", /*#__PURE__*/React.createElement("br", null), "field notes.")), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 14,
      color: '#C5A95A',
      letterSpacing: '0.10em',
      fontWeight: 500
    }
  }, "All entries \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, [{
    tag: 'Methodology',
    t: 'Anti-Budget vs. Zero-Based: why Paula Pant is mostly right'
  }, {
    tag: 'Field notes',
    t: 'What I changed in v2.1 after watching 30 buyers try v2'
  }, {
    tag: 'Quiet wins',
    t: 'Three things I did on Sunday to feel ready for Monday'
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: `Lead image · 400 × 280 · ${p.tag.toLowerCase()}`,
    height: 280
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(WfChip, null, p.tag), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 14,
      lineHeight: 1.2
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)',
      marginTop: 12
    }
  }, "Dan \xB7 May 14, 2026 \xB7 6 min read")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '120px 96px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 80,
      right: 32
    }
  }, "Band 6: secondary email capture for buyers who didn't take the quiz."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--forest)',
      color: 'var(--parch)',
      padding: '64px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.28em',
      color: '#C5A95A'
    }
  }, "STAY IN THE LOOP"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 48,
    style: {
      color: '#FAF8F2',
      marginTop: 14
    }
  }, "One letter a month.", /*#__PURE__*/React.createElement("br", null), "No spam, no funnel."), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 15,
      opacity: 0.75,
      marginTop: 18,
      fontWeight: 300
    }
  }, "What shipped, what I'm working on, one quiet win you might steal.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: 8,
      background: 'rgba(250,248,242,0.10)',
      border: '1px solid rgba(250,248,242,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '14px 18px',
      color: 'rgba(250,248,242,0.55)'
    }
  }, "your@email.com"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#C5A95A',
      color: '#1C3D2E',
      border: 'none',
      padding: '12px 22px',
      fontFamily: 'Jost',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Subscribe")), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 11,
      opacity: 0.5,
      marginTop: 12
    }
  }, "Unsubscribe anytime. We don't share or sell."))))), /*#__PURE__*/React.createElement(WfFooter, null));
}

/* =====================================================================
   02 · PROBLEMS HUB — /problems
   ===================================================================== */
function WfProblemsHub() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-frame",
    style: {
      width: 1440,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfNav, {
    active: "Problems"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 96px 0'
    }
  }, /*#__PURE__*/React.createElement(WfBreadcrumb, {
    items: ['Home', 'Problems']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, "The directory"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 96,
    style: {
      marginTop: 22
    }
  }, "What's getting in the way?"), /*#__PURE__*/React.createElement(WfBody, {
    size: 20,
    style: {
      marginTop: 24,
      maxWidth: 720
    }
  }, "Six areas of life. Pick one. Inside, you'll find specific symptoms \u2014 and the prescriptions for them.")), /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 80,
      right: 32
    }
  }, "Same 6 categories as the home tiles. Hub page is for buyers who arrived here via direct link, search, or footer.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72,
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 28
    }
  }, PROBLEMS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "wf-card",
    style: {
      padding: '40px 40px',
      minHeight: 220,
      display: 'flex',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, "Area"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 56,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 10,
      letterSpacing: '-0.02em'
    }
  }, p.label), /*#__PURE__*/React.createElement(WfBody, {
    size: 16,
    style: {
      marginTop: 16
    }
  }, p.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(WfChip, null, "3 products"), /*#__PURE__*/React.createElement(WfChip, null, "5 journal posts"), /*#__PURE__*/React.createElement(WfChip, null, "1 bundle"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#C5A95A',
      letterSpacing: '0.10em'
    }
  }, "Open \u2192"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      padding: '40px 48px',
      background: 'var(--cream)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#1C3D2E'
    }
  }, "Don't see your problem in plain language?"), /*#__PURE__*/React.createElement(WfBody, {
    size: 15,
    style: {
      marginTop: 8
    }
  }, "Take the diagnostic. Eight questions. We'll surface the right place to start.")), /*#__PURE__*/React.createElement(WfButton, {
    size: "lg"
  }, "Start the diagnostic \u2192"))), /*#__PURE__*/React.createElement(WfFooter, null));
}

/* =====================================================================
   03 · PROBLEM PAGE — /problems/money
   The conversion workhorse: pain → prescription
   ===================================================================== */
function WfProblemPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-frame",
    style: {
      width: 1440,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfNav, {
    active: "Problems"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 96px 0'
    }
  }, /*#__PURE__*/React.createElement(WfBreadcrumb, {
    items: ['Home', 'Problems', 'Money']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      maxWidth: 1100,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, "Problem \xB7 Money"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 88,
    style: {
      marginTop: 22
    }
  }, "Your money isn't out of control.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(28,61,46,0.45)'
    }
  }, "Your picture of it is.")), /*#__PURE__*/React.createElement(WfBody, {
    size: 20,
    style: {
      marginTop: 24,
      maxWidth: 720
    }
  }, "Most people don't have a spending problem. They have a visibility problem. When you can see your money clearly, the decisions get easier."), /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 12,
      right: 32
    }
  }, "Frame the worldview in 2 sentences max. Brand voice, not a sales pitch.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, "Symptoms"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 40,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 14
    }
  }, "Which one is you?"), /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32,
      maxWidth: 320
    }
  }, "The most important block on the page. Buyer sees their exact pain in plain language; prescription is one tap away. Also: this list IS your product roadmap."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, [{
    s: `"I can't tell where my money goes."`,
    fix: 'Foundation'
  }, {
    s: `"I have 12 subscriptions I don't use."`,
    fix: 'Foundation + Subscription Audit'
  }, {
    s: `"I save, but I never seem to have any savings."`,
    fix: 'Foundation + Goals add-on'
  }, {
    s: `"My partner and I keep fighting about money."`,
    fix: 'Joint Money Method'
  }, {
    s: `"I'm self-employed and my taxes are a mess."`,
    fix: 'Foundation · Self-Employed profile'
  }, {
    s: `"I want to retire early but don't know if I can."`,
    fix: 'Foundation · FIRE profile + Net Worth'
  }].map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 0',
      borderBottom: '1px solid var(--wf-line)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 26,
      fontWeight: 400,
      fontStyle: 'italic',
      color: '#1C3D2E'
    }
  }, row.s), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(28,61,46,0.55)'
    }
  }, "PRESCRIBE"), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#C5A95A',
      letterSpacing: '0.04em'
    }
  }, row.fix, " \u2192")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32
    }
  }, "Top 3 prescriptions for this problem. Each card links to its full product page."), /*#__PURE__*/React.createElement(WfSectionLabel, null, "Recommended prescriptions"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 40,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 14
    }
  }, "Start here."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28
    }
  }, [{
    name: 'The Foundation',
    sub: 'A 14-tab budget system.',
    price: '$35'
  }, {
    name: 'Subscription Audit',
    sub: 'Find the 8 you forgot.',
    price: '$15'
  }, {
    name: 'Goals Add-on',
    sub: 'Real linkage. Live forecasts.',
    price: '$19'
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "wf-card",
    style: {
      padding: '28px'
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: `Product shot · ${p.name}`,
    height: 240
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 22
    }
  }, p.name), /*#__PURE__*/React.createElement(WfBody, {
    size: 14,
    style: {
      marginTop: 6
    }
  }, p.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#C5A95A'
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: '#1C3D2E',
      letterSpacing: '0.06em'
    }
  }, "See how it works \u2192")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32
    }
  }, "Cross-link to related problems. Builds the worldview that Column & Co. covers their whole life."), /*#__PURE__*/React.createElement(WfSectionLabel, null, "Related struggles"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 36,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 14
    }
  }, "People who came here also struggled with\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, [PROBLEMS[3], PROBLEMS[5], PROBLEMS[1]].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "wf-card",
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#1C3D2E'
    }
  }, p.label), /*#__PURE__*/React.createElement(WfBody, {
    size: 14,
    style: {
      marginTop: 8
    }
  }, p.sub))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32
    }
  }, "Featured Journal entry, scoped to this problem. SEO compounding + builds authority."), /*#__PURE__*/React.createElement(WfSectionLabel, null, "From the journal \xB7 on money"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: "Lead image \xB7 600 \xD7 380",
    height: 380
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WfChip, null, "Methodology"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 40,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 18,
      lineHeight: 1.1
    }
  }, "Anti-Budget vs. Zero-Based: why Paula Pant is mostly right"), /*#__PURE__*/React.createElement(WfBody, {
    size: 15,
    style: {
      marginTop: 16
    }
  }, "Both work. Both have a buyer. Here's how to know which one is yours \u2014 and what changes when you have a partner."), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)',
      marginTop: 18
    }
  }, "Dan \xB7 May 14, 2026 \xB7 8 min read"))))), /*#__PURE__*/React.createElement(WfFooter, null));
}

/* =====================================================================
   04 · PRODUCT PAGE — /products/foundation
   Diagnosis-led, embedded demo, returning-customer flow
   ===================================================================== */
function WfProductPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-frame",
    style: {
      width: 1440,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfNav, {
    active: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 96px 0'
    }
  }, /*#__PURE__*/React.createElement(WfBreadcrumb, {
    items: ['Home', 'Products', 'The Foundation']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WfSectionLabel, null, "The Foundation \xB7 v2.1"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 72,
    style: {
      marginTop: 22
    }
  }, "A 14-tab budget system for people who like seeing."), /*#__PURE__*/React.createElement(WfBody, {
    size: 18,
    style: {
      marginTop: 24,
      maxWidth: 520
    }
  }, "One Google Sheet. Ten budget methodologies. Twenty-four palettes. Real bank CSV import. Built so an AI can read it."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: -300,
      maxWidth: 280
    }
  }, "Lead with diagnosis, not specs. Buyer recognizes themselves in 3\u20135 bullets."), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.24em',
      color: '#C5A95A',
      textTransform: 'uppercase'
    }
  }, "This is for you if"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, ["You've tried YNAB or Monarch and bounced off the subscription.", "You want to see your money without handing it to a third party.", "You're comfortable opening Claude or ChatGPT to ask a question.", "You'd rather own a tool than rent one."].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C5A95A',
      fontSize: 22,
      lineHeight: 1,
      marginTop: 2
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 22,
      fontWeight: 400,
      fontStyle: 'italic',
      color: '#1C3D2E',
      lineHeight: 1.4
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      padding: '32px 36px',
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 11,
      letterSpacing: '0.24em',
      color: 'rgba(28,61,46,0.55)'
    }
  }, "PRICE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 56,
      fontWeight: 700,
      color: '#1C3D2E'
    }
  }, "$35"), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 14,
      color: 'rgba(28,61,46,0.65)'
    }
  }, "USD \xB7 one-time \xB7 owned")), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 13,
      color: 'rgba(28,61,46,0.65)',
      marginTop: 8
    }
  }, "Instant download \xB7 Google Sheets + Excel \xB7 Lifetime updates within v2.x"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(WfButton, {
    size: "lg"
  }, "Buy & download \u2192"), /*#__PURE__*/React.createElement(WfButton, {
    size: "lg",
    primary: false
  }, "Add to bundle")), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)',
      marginTop: 18
    }
  }, "Already own v2? Sign in for $5 upgrade pricing. \u2192"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WfBlock, {
    label: "Hero product shot \xB7 600 \xD7 460",
    height: 460
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: "thumb 1",
    height: 110
  }), /*#__PURE__*/React.createElement(WfBlock, {
    label: "thumb 2",
    height: 110
  }), /*#__PURE__*/React.createElement(WfBlock, {
    label: "thumb 3",
    height: 110
  }), /*#__PURE__*/React.createElement(WfBlock, {
    label: "thumb 4",
    height: 110
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 120,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32,
      maxWidth: 320
    }
  }, "The conversion killer. Live HTML mockup embedded as iframe \u2014 buyers click around the real product before paying. Etsy can't do this."), /*#__PURE__*/React.createElement(WfSectionLabel, null, "See it work"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 56,
    style: {
      marginTop: 18
    }
  }, "Try the live demo."), /*#__PURE__*/React.createElement(WfBody, {
    size: 17,
    style: {
      marginTop: 16,
      maxWidth: 640
    }
  }, "Click any tab. Swap any palette. Apply any budget profile. Same software you get on purchase, running right here."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: "EMBEDDED IFRAME \xB7 live HTML demo of The Foundation v2.1 \xB7 1248 \xD7 760",
    height: 760
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 120
    }
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, "What's in the box"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 48,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 18
    }
  }, "Everything you need. Nothing you don't."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, [{
    n: '14',
    l: 'Sheets / tabs'
  }, {
    n: '10',
    l: 'Budget methodologies'
  }, {
    n: '16',
    l: 'Swappable palettes'
  }, {
    n: '454',
    l: 'Pre-filled transactions (mock)'
  }, {
    n: '9',
    l: 'Supported banks (CSV import)'
  }, {
    n: '5',
    l: 'Health Score indicators'
  }, {
    n: '5,000',
    l: 'Transaction row capacity'
  }, {
    n: '∞',
    l: 'Lifetime updates within v2.x'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    className: "wf-card",
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 48,
      fontWeight: 700,
      color: '#1C3D2E',
      letterSpacing: '-0.02em'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 13,
      color: 'rgba(28,61,46,0.65)',
      marginTop: 6,
      fontWeight: 500
    }
  }, s.l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 100,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32,
      maxWidth: 300
    }
  }, "Returning-customer detection (Lemon Squeezy auth). Auto-applies upgrade pricing. The repeat-buyer LTV engine."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1C3D2E',
      color: '#FAF8F2',
      padding: '48px 56px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.28em',
      color: '#C5A95A'
    }
  }, "RETURNING CUSTOMER?"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 36,
      fontWeight: 700,
      color: '#FAF8F2',
      marginTop: 12
    }
  }, "If you own v2, v2.1 is $5."), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 14,
      opacity: 0.7,
      marginTop: 8
    }
  }, "Sign in with the email you used to buy. We do the rest.")), /*#__PURE__*/React.createElement(WfButton, {
    size: "lg",
    primary: false
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FAF8F2',
      borderColor: '#FAF8F2'
    }
  }, "Sign in \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 100,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 32,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: -40,
      right: 32
    }
  }, "Trust signals: reviews, changelog, FAQ. Three columns."), ['Reviews', 'Changelog', 'FAQ'].map(h => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, h), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 12
    }
  }, h === 'Reviews' && '4.8 ★ · 162 reviews', h === 'Changelog' && 'What shipped', h === 'FAQ' && 'Common questions'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '14px 0',
      borderTop: '1px solid var(--wf-line)'
    }
  }, /*#__PURE__*/React.createElement(WfLine, {
    width: "80%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6
    }
  }), /*#__PURE__*/React.createElement(WfLine, {
    width: "60%"
  })))))))), /*#__PURE__*/React.createElement(WfFooter, null));
}
Object.assign(window, {
  WfHome,
  WfProblemsHub,
  WfProblemPage,
  WfProductPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/wf-a-funnel.jsx", error: String((e && e.message) || e) }); }

// site/wf-b-rest.jsx
try { (() => {
/* =====================================================================
   columnandco.com · WIREFRAME · BUNDLES · DIAGNOSTIC · ACCOUNT · JOURNAL
   05. Bundle page
   06. Diagnostic
   07. Account library
   08a. Journal index
   08b. Journal post
   ===================================================================== */

/* =====================================================================
   05 · BUNDLE PAGE — /bundles/get-your-money-together
   Prescription-as-product, not a discount
   ===================================================================== */
function WfBundlePage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-frame",
    style: {
      width: 1440,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfNav, {
    active: "Bundles"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 96px 0'
    }
  }, /*#__PURE__*/React.createElement(WfBreadcrumb, {
    items: ['Home', 'Bundles', 'Get Your Money Together']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32,
      maxWidth: 320
    }
  }, "Bundles read as prescriptions, not packs. Name describes the OUTCOME, not the contents. Price is a side effect of the solution."), /*#__PURE__*/React.createElement(WfSectionLabel, null, "Bundle \xB7 for money clarity"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 88,
    style: {
      marginTop: 22,
      maxWidth: 1000
    }
  }, "Get your money together."), /*#__PURE__*/React.createElement(WfBody, {
    size: 20,
    style: {
      marginTop: 24,
      maxWidth: 720
    }
  }, "Three tools that work together. The budget you can see, the subscriptions you forgot, and the goals you'll actually hit. Four hours of setup. The rest of the year on autopilot.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      padding: '40px 48px',
      background: 'var(--cream)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: -20,
      right: 32,
      maxWidth: 280
    }
  }, "Same \"this is for you if\" pattern as products. Diagnosis-led across the whole site."), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 11,
      letterSpacing: '0.24em',
      color: 'rgba(28,61,46,0.55)',
      textTransform: 'uppercase'
    }
  }, "For people who"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '14px 48px'
    }
  }, ["Have tried to budget three times this year already.", "Know there's money leaking somewhere but can't point at it.", "Want a single afternoon to fix the picture, not a year of therapy.", "Are tired of YNAB charging them $99 to remember things."].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C5A95A',
      fontSize: 22,
      lineHeight: 1,
      marginTop: 2
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 20,
      fontWeight: 400,
      fontStyle: 'italic',
      color: '#1C3D2E',
      lineHeight: 1.4
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32,
      maxWidth: 260
    }
  }, "Shows what's in the bundle. Each product is its own link \u2014 buyers can also buy individually."), /*#__PURE__*/React.createElement(WfSectionLabel, null, "What's in the bundle"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 40,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 14
    }
  }, "Three tools. One purchase."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28
    }
  }, [{
    num: '01',
    name: 'The Foundation',
    sub: 'A 14-tab budget system. The picture.',
    price: '$35'
  }, {
    num: '02',
    name: 'Subscription Audit',
    sub: 'Finds the eight you forgot.',
    price: '$15'
  }, {
    num: '03',
    name: 'Goals Add-on',
    sub: 'Real linkage. Live forecasts.',
    price: '$19'
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.num,
    className: "wf-card",
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 40,
      fontWeight: 700,
      color: '#C5A95A',
      letterSpacing: '-0.04em',
      lineHeight: 1
    }
  }, p.num), /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'rgba(28,61,46,0.45)'
    }
  }, p.price)), /*#__PURE__*/React.createElement(WfBlock, {
    label: `Product shot · ${p.name}`,
    height: 200
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 20
    }
  }, p.name), /*#__PURE__*/React.createElement(WfBody, {
    size: 14,
    style: {
      marginTop: 6
    }
  }, p.sub))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32,
      maxWidth: 280
    }
  }, "Math made visible. Strikethrough on individual prices, big bundle price, savings highlighted in gold."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1C3D2E',
      color: '#FAF8F2',
      padding: '56px 64px',
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.28em',
      color: '#C5A95A'
    }
  }, "BUNDLE PRICE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 24,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 96,
      fontWeight: 700,
      color: '#FAF8F2',
      letterSpacing: '-0.03em'
    }
  }, "$53"), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 22,
      color: 'rgba(250,248,242,0.55)',
      textDecoration: 'line-through'
    }
  }, "$69"), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 18,
      color: '#C5A95A',
      fontWeight: 500,
      letterSpacing: '0.06em'
    }
  }, "save $16")), /*#__PURE__*/React.createElement(WfBody, {
    size: 15,
    style: {
      color: 'rgba(250,248,242,0.75)',
      marginTop: 18,
      maxWidth: 540
    }
  }, "Single checkout. All three downloads instantly. Lifetime updates within each product's major version.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#C5A95A',
      color: '#1C3D2E',
      border: 'none',
      padding: '18px 28px',
      fontFamily: 'Jost',
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Buy the bundle \u2192"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      color: '#FAF8F2',
      border: '1px solid rgba(250,248,242,0.45)',
      padding: '18px 28px',
      fontFamily: 'Jost',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Buy products individually")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, "Full contents"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 12
    }
  }, "Everything inside."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '14px 48px'
    }
  }, ['14 sheet tabs across the Foundation', '10 budget methodologies', '24 swappable palettes', 'Bank CSV import for 9 US banks', 'Subscription Audit · 4-tab finder', 'Subscription Audit · cancel tracker', 'Goals · 4 goal types with live linkage', 'Goals · forecast strip', 'Mock data for all three (Marcus & Elena story)', 'Lifetime updates within each major version', 'Customer library at /account/library', 'Two methodology Journal posts (free w/ bundle)'].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C5A95A',
      fontSize: 14,
      marginTop: 4
    }
  }, "\u2713"), /*#__PURE__*/React.createElement(WfBody, {
    size: 15
  }, b)))))), /*#__PURE__*/React.createElement(WfFooter, null));
}

/* =====================================================================
   06 · DIAGNOSTIC — /diagnose
   Standalone page, mid-quiz state shown
   ===================================================================== */
function WfDiagnostic() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-frame",
    style: {
      width: 1440,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      background: '#1C3D2E',
      color: '#FAF8F2',
      display: 'flex',
      alignItems: 'center',
      padding: '0 48px',
      justifyContent: 'space-between',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(WfMark, {
    size: 22,
    light: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, "Column & Co.")), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 12,
      opacity: 0.6,
      letterSpacing: '0.10em'
    }
  }, "Exit \u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -3,
      height: 3,
      background: '#C5A95A'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 96px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 24,
      right: 32,
      maxWidth: 280
    }
  }, "Minimal chrome during the quiz. Single-question-at-a-time flow. Progress bar + question count, nothing else."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(28,61,46,0.65)'
    }
  }, "QUESTION 3 OF 8"), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "~ 60 seconds left")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--wf-line)',
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '37%',
      height: '100%',
      background: '#C5A95A',
      borderRadius: 2
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 200px 60px',
      maxWidth: 1440,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, "The current question"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 64,
    style: {
      marginTop: 22
    }
  }, "When did you last feel", /*#__PURE__*/React.createElement("br", null), "on top of your money?"), /*#__PURE__*/React.createElement(WfBody, {
    size: 17,
    style: {
      marginTop: 18
    }
  }, "One answer. No wrong answers. We won't share this."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [{
    l: 'This week. I feel mostly clear.',
    hint: '"On top"'
  }, {
    l: 'This month — a bit shaky but okay.',
    hint: '"Fair"'
  }, {
    l: 'Earlier this year. Things have slipped.',
    hint: '"Slipped"',
    selected: true
  }, {
    l: 'A long time ago. Or never, honestly.',
    hint: '"Foggy"'
  }].map((opt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '24px 28px',
      background: opt.selected ? 'rgba(197,169,90,0.10)' : 'var(--wf-card-bg)',
      border: '2px solid ' + (opt.selected ? '#C5A95A' : 'var(--wf-line)'),
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      border: '2px solid ' + (opt.selected ? '#C5A95A' : 'var(--wf-line)'),
      background: opt.selected ? '#C5A95A' : 'transparent',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      flex: 1,
      fontSize: 24,
      fontWeight: 400,
      color: '#1C3D2E',
      fontStyle: 'italic'
    }
  }, opt.l), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'rgba(28,61,46,0.45)'
    }
  }, opt.hint)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'rgba(28,61,46,0.65)',
      cursor: 'pointer',
      letterSpacing: '0.08em'
    }
  }, "\u2190 Back"), /*#__PURE__*/React.createElement(WfButton, {
    size: "lg"
  }, "Next question \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      padding: '24px 28px',
      background: 'var(--cream)',
      borderLeft: '3px solid #C5A95A',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: -30,
      right: 0,
      maxWidth: 320
    }
  }, "End screen (not shown): personalized recommendation, email-capture, \"send me my results\" \u2014 a soft email gate. Result page is shareable."), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.24em',
      color: '#C5A95A'
    }
  }, "END SCREEN PREVIEW"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 10
    }
  }, "After Q8 \u2192 \"Here's where I'd start.\" \u2192 product + bundle recommendation + email field"))));
}

/* =====================================================================
   07 · ACCOUNT LIBRARY — /account/library
   Custom-built (not Lemon Squeezy iframe) per decision (3)
   ===================================================================== */
function WfAccount() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-frame",
    style: {
      width: 1440,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfNav, {
    active: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 96px 0',
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: -8,
      maxWidth: 240
    }
  }, "Custom-built /account area. Pixel-perfect brand, hits Lemon Squeezy's API server-side."), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'rgba(28,61,46,0.55)',
      textTransform: 'uppercase'
    }
  }, "Account"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 6
    }
  }, "Dan Brooks"), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)',
      marginTop: 4
    }
  }, "dan@columnandco.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      borderTop: '1px solid var(--wf-line)',
      paddingTop: 24
    }
  }, [{
    l: 'Library',
    active: true
  }, {
    l: 'Upgrades',
    badge: '3 available'
  }, {
    l: 'Recommendations',
    badge: '5 new'
  }, {
    l: 'Affiliate'
  }, {
    l: 'Receipts'
  }, {
    l: 'Settings'
  }, {
    l: 'Sign out'
  }].map(it => /*#__PURE__*/React.createElement("div", {
    key: it.l,
    style: {
      padding: '12px 14px',
      borderRadius: 3,
      marginBottom: 4,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: it.active ? 'rgba(197,169,90,0.15)' : 'transparent',
      borderLeft: '3px solid ' + (it.active ? '#C5A95A' : 'transparent')
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 14,
      fontWeight: it.active ? 500 : 400,
      color: '#1C3D2E'
    }
  }, it.l), it.badge && /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 10,
      color: '#C5A95A',
      fontWeight: 500,
      letterSpacing: '0.10em'
    }
  }, it.badge))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32,
      maxWidth: 280
    }
  }, "Each product card shows version owned, what's new since purchase, current download links. The LTV engine."), /*#__PURE__*/React.createElement(WfSectionLabel, null, "Your library"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 56,
    style: {
      marginTop: 18
    }
  }, "Three products.", /*#__PURE__*/React.createElement("br", null), "One update waiting."), /*#__PURE__*/React.createElement(WfBody, {
    size: 16,
    style: {
      marginTop: 16
    }
  }, "Owned tools, current versions, and what's shipped since you last checked."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, [{
    name: 'The Foundation',
    owned: 'v2',
    latest: 'v2.1',
    bought: 'Bought March 14, 2026',
    upgrade: true,
    whatsnew: '5 new budget profiles · AI Insights panel · forecast strip on Goals'
  }, {
    name: 'Subscription Audit',
    owned: 'v1.2',
    latest: 'v1.2',
    bought: 'Bought April 02, 2026',
    upgrade: false,
    whatsnew: 'You are on the latest version.'
  }, {
    name: 'Joint Money Method',
    owned: 'v1.0',
    latest: 'v1.0',
    bought: 'Bought April 28, 2026',
    upgrade: false,
    whatsnew: 'You are on the latest version.'
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "wf-card",
    style: {
      padding: '32px 36px',
      borderLeft: '3px solid ' + (p.upgrade ? '#C5A95A' : 'var(--wf-line)'),
      display: 'grid',
      gridTemplateColumns: '120px 1fr auto',
      gap: 28,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: "icon",
    height: 120
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#1C3D2E'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      background: 'rgba(28,61,46,0.06)',
      padding: '3px 8px',
      borderRadius: 3,
      color: 'rgba(28,61,46,0.65)'
    }
  }, "v", p.owned, " \u2192 ", p.latest), p.upgrade && /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: '#1C3D2E',
      background: '#C5A95A',
      padding: '3px 8px',
      borderRadius: 2
    }
  }, "UPDATE")), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)',
      marginTop: 6
    }
  }, p.bought), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: '14px 18px',
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(28,61,46,0.65)'
    }
  }, "WHAT'S NEW"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(WfBody, {
    size: 14,
    style: {
      color: '#1C3D2E'
    }
  }, p.whatsnew)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement(WfButton, {
    size: "md"
  }, "Download"), p.upgrade && /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#C5A95A',
      color: '#1C3D2E',
      border: '1px solid #C5A95A',
      padding: '12px 18px',
      fontFamily: 'Jost',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Upgrade \xB7 $5 \u2192"), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 11,
      color: 'rgba(28,61,46,0.55)',
      textAlign: 'center'
    }
  }, "Receipt \xB7 Changelog"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 0,
      right: 32
    }
  }, "Cross-sell based on owned + diagnostic answers."), /*#__PURE__*/React.createElement(WfSectionLabel, null, "Recommended for you"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 8
    }
  }, "Based on what you own and your diagnostic"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, [{
    n: 'Goals Add-on',
    p: '$19'
  }, {
    n: 'Quarterly Tax Tracker',
    p: '$25'
  }, {
    n: 'Palette Pack · Autumn',
    p: '$12'
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.n,
    className: "wf-card",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: "thumb",
    height: 120
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 14
    }
  }, r.n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#C5A95A'
    }
  }, r.p), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 12,
      color: '#1C3D2E',
      fontWeight: 500
    }
  }, "View \u2192")))))))), /*#__PURE__*/React.createElement(WfFooter, null));
}

/* =====================================================================
   08a · JOURNAL INDEX — /journal
   Editorial archive feel
   ===================================================================== */
function WfJournalIndex() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-frame",
    style: {
      width: 1440,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfNav, {
    active: "Journal"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WfSectionLabel, null, "Issue 7 \xB7 May 2026"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 96,
    style: {
      marginTop: 22
    }
  }, "Journal."), /*#__PURE__*/React.createElement(WfBody, {
    size: 18,
    style: {
      marginTop: 18,
      maxWidth: 580
    }
  }, "Methodology, field notes, and quiet wins. About one a week from Dan, currently in Charleston.")), /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 32,
      right: 32,
      maxWidth: 280
    }
  }, "Issue-style index, not a list of titles. Featured post takes a big editorial slot.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: "Featured illustration \xB7 720 \xD7 520 \xB7 custom graphic per post",
    height: 520
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WfChip, {
    accent: true
  }, "Featured \xB7 methodology"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 56,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 22,
      lineHeight: 1.05,
      letterSpacing: '-0.02em'
    }
  }, "Anti-Budget vs. Zero-Based:", /*#__PURE__*/React.createElement("br", null), "why Paula Pant is mostly right"), /*#__PURE__*/React.createElement(WfBody, {
    size: 17,
    style: {
      marginTop: 22
    }
  }, "Both work. Both have a buyer. Here's how to know which one is yours \u2014 and what changes when you have a partner."), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 13,
      color: 'rgba(28,61,46,0.55)',
      marginTop: 24,
      letterSpacing: '0.04em'
    }
  }, "Dan \xB7 May 14, 2026 \xB7 Charleston \xB7 8 min read"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      display: 'grid',
      gridTemplateColumns: '1fr 280px',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WfSectionLabel, null, "This issue"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 10
    }
  }, "Recent entries"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, [{
    n: '07',
    tag: 'Field notes',
    t: 'What I changed in v2.1 after watching 30 buyers try v2',
    d: 'May 14, 2026 · 12 min'
  }, {
    n: '06',
    tag: 'Quiet wins',
    t: 'Three things I did on Sunday to feel ready for Monday',
    d: 'May 07, 2026 · 4 min'
  }, {
    n: '05',
    tag: 'Methodology',
    t: 'The case against the spreadsheet (and why I built one anyway)',
    d: 'Apr 30, 2026 · 9 min'
  }, {
    n: '04',
    tag: 'Field notes',
    t: 'Twenty-four palettes was a stupid amount of work and worth it',
    d: 'Apr 22, 2026 · 6 min'
  }, {
    n: '03',
    tag: 'Methodology',
    t: 'On Kakeibo: a 100-year-old method that beat my budget',
    d: 'Apr 14, 2026 · 11 min'
  }, {
    n: '02',
    tag: 'Quiet wins',
    t: 'A small ritual for the end of the month',
    d: 'Apr 07, 2026 · 3 min'
  }, {
    n: '01',
    tag: 'Field notes',
    t: `Why I named it Column & Co. (it's not what you think)`,
    d: 'Mar 30, 2026 · 5 min'
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      padding: '28px 0',
      borderTop: '1px solid var(--wf-line)',
      display: 'grid',
      gridTemplateColumns: '60px 1fr 140px',
      gap: 28,
      alignItems: 'baseline',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: '#C5A95A',
      letterSpacing: '-0.04em'
    }
  }, p.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WfChip, null, p.tag), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 10,
      lineHeight: 1.2
    }
  }, p.t)), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)',
      textAlign: 'right'
    }
  }, p.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: -8,
      right: -16,
      maxWidth: 220
    }
  }, "\"Currently\" sidebar \u2014 humanizes Dan. Substack-vibe, brand-fit."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: 'var(--cream)',
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: "Dan \xB7 author photo",
    height: 140
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 18
    }
  }, "Dan"), /*#__PURE__*/React.createElement(WfBody, {
    size: 13,
    style: {
      marginTop: 8
    }
  }, "Made Column & Co. Likes order. Tracks his coffee."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      borderTop: '1px solid rgba(28,61,46,0.15)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.24em',
      color: '#C5A95A'
    }
  }, "CURRENTLY"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, [{
    l: 'Drinking',
    v: 'Counter Culture Hologram'
  }, {
    l: 'Reading',
    v: 'Atomic Habits, again'
  }, {
    l: 'Building',
    v: 'Joint Money Method v1.1'
  }, {
    l: 'Listening',
    v: 'Bon Iver · SABLE'
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.l,
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 10,
      color: 'rgba(28,61,46,0.55)',
      letterSpacing: '0.10em',
      textTransform: 'uppercase'
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 15,
      fontWeight: 400,
      fontStyle: 'italic',
      color: '#1C3D2E',
      marginTop: 2
    }
  }, r.v))))))))), /*#__PURE__*/React.createElement(WfFooter, null));
}

/* =====================================================================
   08b · JOURNAL POST — /journal/<slug>
   Editorial, photo-led, byline + dateline
   ===================================================================== */
function WfJournalPost() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-frame",
    style: {
      width: 1440,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfNav, {
    active: "Journal"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 96px 0'
    }
  }, /*#__PURE__*/React.createElement(WfBreadcrumb, {
    items: ['Journal', 'Methodology', 'Anti-Budget vs. Zero-Based']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: "HERO IMAGE \xB7 1248 \xD7 600 \xB7 custom graphic, photographic or illustrated",
    height: 600
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 96px 0',
      maxWidth: 1100,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: 40,
      right: 32,
      maxWidth: 260
    }
  }, "Editorial title block: chip + headline + body lead. Strong byline + dateline + location for human feel."), /*#__PURE__*/React.createElement(WfChip, {
    accent: true
  }, "Methodology"), /*#__PURE__*/React.createElement(WfHeadline, {
    size: 72,
    style: {
      marginTop: 22,
      maxWidth: 1000
    }
  }, "Anti-Budget vs. Zero-Based:", /*#__PURE__*/React.createElement("br", null), "why Paula Pant is mostly right"), /*#__PURE__*/React.createElement(WfBody, {
    size: 22,
    style: {
      marginTop: 28,
      maxWidth: 820,
      fontWeight: 300
    }
  }, "Both work. Both have a buyer. Here's how to know which one is yours \u2014 and what changes when you have a partner."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 28,
      borderTop: '1px solid var(--wf-line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: "",
    height: 56
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#1C3D2E'
    }
  }, "Dan"), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "May 14, 2026 \xB7 Charleston \xB7 8 min read"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "Share"), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "Bookmark")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 96px 0',
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 220px',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, [1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(WfLine, {
    width: "100%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(WfLine, {
    width: "98%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(WfLine, {
    width: "95%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(WfLine, {
    width: "80%"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '48px 0',
      padding: '32px 36px',
      background: 'var(--cream)',
      borderLeft: '4px solid #C5A95A'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 28,
      fontWeight: 400,
      fontStyle: 'italic',
      color: '#1C3D2E',
      lineHeight: 1.4
    }
  }, "\"The 'right' budget is the one you'll actually open in February.\"")), [1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(WfLine, {
    width: "100%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(WfLine, {
    width: "92%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(WfLine, {
    width: "88%"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '48px 0',
      padding: '28px 32px',
      border: '1px solid var(--wf-line)',
      background: 'var(--wf-card-bg)',
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(WfAnnotation, {
    style: {
      top: -30,
      right: 0
    }
  }, "In-article product callouts when methodology maps to a tool. Native, not adwords-y."), /*#__PURE__*/React.createElement(WfBlock, {
    label: "thumb",
    height: 80
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(WfChip, null, "Mentioned in this post"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 6
    }
  }, "The Foundation \xB7 Anti-Budget profile"), /*#__PURE__*/React.createElement(WfBody, {
    size: 13,
    style: {
      marginTop: 4
    }
  }, "One of 10 budget methodologies. Toggle from the menu, edit any cell.")), /*#__PURE__*/React.createElement(WfButton, null, "See it \u2192")), [1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(WfLine, {
    width: "100%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(WfLine, {
    width: "92%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(WfLine, {
    width: "85%"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.24em',
      color: '#C5A95A'
    }
  }, "IN THIS POST"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['What anti-budget actually means', 'Where zero-based wins', 'When you have a partner', 'My honest take', 'How to start'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    className: "jt",
    style: {
      fontSize: 13,
      color: i === 1 ? '#1C3D2E' : 'rgba(28,61,46,0.55)',
      fontWeight: i === 1 ? 500 : 300,
      borderLeft: '2px solid ' + (i === 1 ? '#C5A95A' : 'transparent'),
      paddingLeft: 12
    }
  }, s)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '120px 96px 0',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(WfSectionLabel, null, "Related entries"), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 10
    }
  }, "More from the journal"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, [{
    tag: 'Methodology',
    t: 'On Kakeibo: a 100-year-old method that beat my budget'
  }, {
    tag: 'Field notes',
    t: 'What I changed in v2.1 after watching 30 buyers try v2'
  }, {
    tag: 'Quiet wins',
    t: 'A small ritual for the end of the month'
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t
  }, /*#__PURE__*/React.createElement(WfBlock, {
    label: `Lead · ${p.tag}`,
    height: 200
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(WfChip, null, p.tag), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: '#1C3D2E',
      marginTop: 12,
      lineHeight: 1.2
    }
  }, p.t)))))), /*#__PURE__*/React.createElement(WfFooter, null));
}
Object.assign(window, {
  WfBundlePage,
  WfDiagnostic,
  WfAccount,
  WfJournalIndex,
  WfJournalPost
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/wf-b-rest.jsx", error: String((e && e.message) || e) }); }

// site/wf-shared.jsx
try { (() => {
/* =====================================================================
   columnandco.com · WIREFRAME · SHARED PRIMITIVES
   Used by every artboard. Defines Nav, Footer, brand chrome bars,
   and small drawing primitives (boxes, lines, chips, annotations).
   ===================================================================== */

/* ---------- Tiny brand mark (3×5 grid logo) ---------- */
function WfMark({
  size = 36,
  light = false
}) {
  const base = light ? '#FAF8F2' : '#1C3D2E';
  const c2 = [0.85, 0.45, 0.18, 0.85, 0.45];
  const c3 = [0.45, 0.18, 0.85, 0.18, 0.85];
  const cell = (r, c) => {
    if (c === 0) return {
      background: '#C5A95A'
    };
    const o = c === 1 ? c2[r] : c3[r];
    return {
      background: base,
      opacity: o
    };
  };
  const cells = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) cells.push(/*#__PURE__*/React.createElement("i", {
    key: `${r}-${c}`,
    style: {
      ...cell(r, c),
      display: 'block'
    }
  }));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(5, 1fr)',
      gap: Math.max(1, Math.round(size / 20)),
      width: size,
      height: size * 5 / 3
    }
  }, cells);
}

/* ---------- Top nav (locked across every page) ---------- */
function WfNav({
  active = ''
}) {
  const items = ['Problems', 'Bundles', 'Journal'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 78,
      background: '#1C3D2E',
      color: '#FAF8F2',
      display: 'flex',
      alignItems: 'center',
      padding: '0 48px',
      gap: 48,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(WfMark, {
    size: 26,
    light: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, "Column & Co.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      flex: 1
    }
  }, items.map(label => /*#__PURE__*/React.createElement("a", {
    key: label,
    className: "jt",
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: active === label ? '#C5A95A' : 'rgba(250,248,242,0.85)',
      textDecoration: active === label ? 'underline solid #C5A95A 2px' : 'none',
      textUnderlineOffset: 8,
      cursor: 'pointer'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "jt",
    style: {
      background: '#C5A95A',
      color: '#1C3D2E',
      border: 'none',
      borderRadius: 4,
      padding: '11px 18px',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Diagnose \u2192"), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 13,
      color: 'rgba(250,248,242,0.65)',
      letterSpacing: '0.04em'
    }
  }, "\u2315 Search"), /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      fontSize: 13,
      color: 'rgba(250,248,242,0.65)',
      letterSpacing: '0.04em'
    }
  }, "Account")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -3,
      height: 3,
      background: '#C5A95A'
    }
  }));
}

/* ---------- Footer ---------- */
function WfFooter() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1C3D2E',
      color: '#FAF8F2',
      padding: '64px 48px 40px',
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(WfMark, {
    size: 28,
    light: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "pf",
    style: {
      fontSize: 24,
      fontWeight: 700
    }
  }, "Column & Co.")), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.30em',
      color: '#C5A95A',
      marginBottom: 18
    }
  }, "LIFE,\xA0\xA0ORGANIZED."), /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 13,
      opacity: 0.7,
      lineHeight: 1.5,
      maxWidth: 280
    }
  }, "Tools that make life clearer. One purchase. No subscriptions.")), [{
    h: 'Problems',
    items: ['Money', 'Time', 'Home', 'Work', 'Health', 'Family']
  }, {
    h: 'Products',
    items: ['Foundation', 'Bundles', 'Palette Packs', 'Regional']
  }, {
    h: 'Company',
    items: ['About', 'Journal', 'Changelog', 'Support']
  }, {
    h: 'Account',
    items: ['Library', 'Upgrades', 'Sign in', 'Affiliate program']
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.24em',
      color: '#C5A95A',
      marginBottom: 16,
      textTransform: 'uppercase'
    }
  }, col.h), col.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    className: "jt",
    style: {
      fontSize: 13,
      opacity: 0.75,
      marginBottom: 8
    }
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 24,
      borderTop: '1px solid rgba(250,248,242,0.10)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11,
      opacity: 0.5,
      letterSpacing: '0.10em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Column & Co.  \xB7  columnandco.com"), /*#__PURE__*/React.createElement("span", null, "Privacy  \xB7  Terms  \xB7  Affiliate disclosures")));
}

/* ---------- Wireframe primitives ---------- */
function WfBlock({
  label,
  height = 200,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-block",
    style: {
      height,
      background: dark ? 'var(--wf-block-dark)' : 'var(--wf-block)'
    }
  }, label || `${height}px placeholder`);
}
function WfLine({
  width = '100%',
  height = 8
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-line",
    style: {
      width,
      height
    }
  });
}
function WfChip({
  children,
  accent = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "jt",
    style: {
      display: 'inline-block',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.12em',
      padding: '5px 11px',
      background: accent ? '#C5A95A' : 'rgba(28,61,46,0.06)',
      color: accent ? '#1C3D2E' : '#1C3D2E',
      border: '1px solid ' + (accent ? '#C5A95A' : 'rgba(28,61,46,0.18)'),
      borderRadius: 3,
      textTransform: 'uppercase'
    }
  }, children);
}
function WfAnnotation({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-annotation",
    style: style
  }, children);
}
function WfBreadcrumb({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: 12,
      color: 'rgba(28,61,46,0.55)',
      letterSpacing: '0.06em'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 10px',
      color: 'rgba(28,61,46,0.30)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === items.length - 1 ? '#1C3D2E' : 'inherit',
      fontWeight: i === items.length - 1 ? 500 : 300
    }
  }, it))));
}
function WfSectionLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wf-section-label"
  }, children);
}
function WfHeadline({
  children,
  size = 64,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      fontSize: size,
      fontWeight: 700,
      lineHeight: 1.02,
      color: '#1C3D2E',
      letterSpacing: '-0.02em',
      ...style
    }
  }, children);
}
function WfBody({
  children,
  size = 16,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "jt",
    style: {
      fontSize: size,
      fontWeight: 300,
      lineHeight: 1.5,
      color: 'rgba(28,61,46,0.80)',
      ...style
    }
  }, children);
}
function WfButton({
  children,
  primary = true,
  full = false,
  size = 'md'
}) {
  const pads = size === 'lg' ? '16px 28px' : '12px 20px';
  const fs = size === 'lg' ? 15 : 13;
  return /*#__PURE__*/React.createElement("button", {
    className: "jt",
    style: {
      background: primary ? '#1C3D2E' : 'transparent',
      color: primary ? '#FAF8F2' : '#1C3D2E',
      border: '1px solid #1C3D2E',
      borderRadius: 4,
      padding: pads,
      fontSize: fs,
      fontWeight: 600,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      width: full ? '100%' : 'auto'
    }
  }, children);
}

/* The 6 problems — used everywhere */
const PROBLEMS = [{
  id: 'money',
  label: 'Money',
  sub: 'Budget chaos. Subscription bloat. Tax surprises.'
}, {
  id: 'time',
  label: 'Time',
  sub: 'No room. No focus. Calendar Tetris.'
}, {
  id: 'home',
  label: 'Home',
  sub: 'Stuff piles. Maintenance forgotten. Inbox of objects.'
}, {
  id: 'work',
  label: 'Work',
  sub: 'Career sprawl. Project chaos. Goals you never set.'
}, {
  id: 'health',
  label: 'Health',
  sub: 'Sleep, appointments, meds, movement — all guessed.'
}, {
  id: 'family',
  label: 'Family',
  sub: 'Shared calendars, money fights, kid logistics.'
}];
Object.assign(window, {
  WfMark,
  WfNav,
  WfFooter,
  WfBlock,
  WfLine,
  WfChip,
  WfAnnotation,
  WfBreadcrumb,
  WfSectionLabel,
  WfHeadline,
  WfBody,
  WfButton,
  PROBLEMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/wf-shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/foundation/chrome.jsx
try { (() => {
/* =====================================================================
   Google Sheets-style chrome wrapping the brand-content sheet area.
   - Top bar with file name + 💳 Column & Co. menu (faked dropdown)
   - Subtle toolbar
   - Tab strip at bottom (clickable)
   - Palette picker (24 palettes — the product differentiator)
   ===================================================================== */

function SheetsChrome({
  activeTab,
  onTabChange,
  paletteId,
  onPaletteChange,
  paletteOpen,
  setPaletteOpen,
  menuOpen,
  setMenuOpen,
  children
}) {
  const data = window.CC_DATA;
  const palette = data.palettes.find(p => p.id === paletteId) || data.palettes[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F1F3F4',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Jost,sans-serif',
      color: '#202124'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 14px 4px 14px',
      background: '#FFFFFF',
      borderBottom: '1px solid #E8EAED',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: '#1C3D2E',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-icon-on-forest.svg",
    alt: "",
    style: {
      height: 22,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#202124'
    }
  }, "The Foundation v2 \u2014 Brooks Household"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 2,
      fontSize: 11.5,
      color: '#5F6368'
    }
  }, /*#__PURE__*/React.createElement("span", null, "File"), /*#__PURE__*/React.createElement("span", null, "Edit"), /*#__PURE__*/React.createElement("span", null, "View"), /*#__PURE__*/React.createElement("span", null, "Insert"), /*#__PURE__*/React.createElement("span", null, "Format"), /*#__PURE__*/React.createElement("span", null, "Data"), /*#__PURE__*/React.createElement("span", null, "Tools"), /*#__PURE__*/React.createElement("span", null, "Extensions"), /*#__PURE__*/React.createElement("span", {
    "data-popover-trigger": true,
    style: {
      position: 'relative',
      cursor: 'pointer',
      color: '#1C3D2E',
      fontWeight: 500
    },
    onClick: () => setMenuOpen(!menuOpen)
  }, "\uD83D\uDCB3 Column & Co. \u25BE", menuOpen && /*#__PURE__*/React.createElement(ScriptMenu, {
    close: () => setMenuOpen(false)
  })), /*#__PURE__*/React.createElement("span", null, "Help"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#1A73E8',
      color: '#fff',
      border: 0,
      borderRadius: 4,
      padding: '7px 16px',
      fontSize: 12.5,
      fontWeight: 500,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 14,
      height: 14,
      border: '1.5px solid #fff',
      borderRadius: 999,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 3,
      background: '#fff',
      borderRadius: 999
    }
  })), "Share"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      borderBottom: '1px solid #E8EAED',
      padding: '4px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12
    }
  }, ['Search the menus', '↩', '↪', '🖨', '%', '100%', '▾'].map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: '5px 8px',
      color: '#5F6368',
      cursor: 'pointer',
      borderRadius: 4
    }
  }, s)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: '#E8EAED',
      margin: '0 4px'
    }
  }), ['$', '.0', '123 ▾', 'Default (Ari... ▾', '10 ▾', 'B', 'I', 'U', 'A ▾', '▦ ▾', '═ ▾', '⬛ ▾'].map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: '5px 8px',
      color: '#5F6368',
      cursor: 'pointer',
      borderRadius: 4,
      fontFamily: i === 5 || i === 6 || i === 7 ? 'serif' : 'inherit',
      fontWeight: i === 5 ? 700 : 400,
      fontStyle: i === 6 ? 'italic' : 'normal',
      textDecoration: i === 7 ? 'underline' : 'none'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      borderBottom: '1px solid #E8EAED',
      padding: '5px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#F1F3F4',
      padding: '4px 10px',
      borderRadius: 4,
      color: '#5F6368',
      minWidth: 56,
      textAlign: 'center'
    }
  }, "D4"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5F6368',
      fontFamily: 'monospace'
    }
  }, "\u0192x"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#202124',
      fontFamily: 'monospace',
      fontSize: 12
    }
  }, "May 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      background: 'var(--pal-bg, #FAF8F2)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      background: '#F8F9FA',
      borderRight: '1px solid #E8EAED',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 22,
      fontSize: 11,
      color: '#5F6368'
    }
  }, ['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      height: 30,
      display: 'flex',
      alignItems: 'center'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F8F9FA',
      borderBottom: '1px solid #E8EAED',
      padding: '4px 14px',
      fontSize: 11,
      color: '#5F6368',
      display: 'flex',
      gap: 0
    }
  }, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      flex: 1,
      textAlign: 'center',
      minWidth: 72
    }
  }, c))), children)), /*#__PURE__*/React.createElement("button", {
    "data-popover-trigger": true,
    onClick: () => setPaletteOpen(!paletteOpen),
    style: {
      position: 'absolute',
      top: 14,
      right: 16,
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.20)',
      borderRadius: 4,
      padding: '8px 12px',
      cursor: 'pointer',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#1C3D2E',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      boxShadow: '0 4px 12px rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: palette.primary,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: palette.mid,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: palette.accent,
      borderRadius: 2
    }
  })), palette.name, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5,
      fontSize: 9
    }
  }, "\u25BE")), paletteOpen && /*#__PURE__*/React.createElement(PalettePicker, {
    active: paletteId,
    onPick: id => {
      onPaletteChange(id);
      setPaletteOpen(false);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      borderTop: '1px solid #E8EAED',
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      fontSize: 12,
      height: 36,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 8px',
      color: '#5F6368',
      cursor: 'pointer',
      fontSize: 16
    }
  }, "\uFF0B"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 8px',
      color: '#5F6368',
      cursor: 'pointer'
    }
  }, "\u2630"), data.tabs.map(t => /*#__PURE__*/React.createElement("span", {
    key: t.id,
    onClick: () => onTabChange(t.id),
    style: {
      padding: '8px 14px',
      cursor: 'pointer',
      fontWeight: activeTab === t.id ? 600 : 400,
      color: activeTab === t.id ? '#1C3D2E' : t.system ? '#9AA0A6' : '#3C4043',
      borderBottom: activeTab === t.id ? '3px solid var(--pal-primary, #1C3D2E)' : '3px solid transparent',
      borderTop: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
      borderLeft: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
      borderRight: '1px solid ' + (activeTab === t.id ? '#E8EAED' : 'transparent'),
      background: activeTab === t.id ? '#FFFFFF' : 'transparent',
      marginTop: activeTab === t.id ? 0 : 1,
      whiteSpace: 'nowrap',
      fontFamily: 'Arial, sans-serif'
    }
  }, t.label))));
}

/* ---------- Fake "💳 Column & Co." Apps Script menu ---------- */
function ScriptMenu({
  close
}) {
  const items = [{
    label: 'Import Bank Transactions',
    sep: 'after'
  }, {
    label: 'Clear Paste Zone',
    sep: 'after'
  }, {
    label: 'Apply Theme',
    sep: 'after'
  }, {
    label: 'Renumber Ledger'
  }, {
    label: 'Help / Quick Reference'
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-popover": true,
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 6,
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.18)',
      borderRadius: 4,
      minWidth: 240,
      boxShadow: '0 4px 12px rgba(28,61,46,0.18)',
      zIndex: 50,
      overflow: 'hidden'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '9px 16px',
      fontSize: 13,
      color: '#1C3D2E',
      cursor: 'pointer',
      fontWeight: 400
    },
    onMouseDown: close
  }, it.label), it.sep && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(28,61,46,0.10)'
    }
  }))));
}

/* ---------- The 24-palette picker — the headline feature ---------- */
function PalettePicker({
  active,
  onPick
}) {
  const palettes = window.CC_DATA.palettes;
  return /*#__PURE__*/React.createElement("div", {
    "data-popover": true,
    style: {
      position: 'absolute',
      top: 50,
      right: 16,
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.18)',
      borderRadius: 6,
      padding: 16,
      width: 360,
      boxShadow: '0 8px 24px rgba(28,61,46,0.18)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#2D5C45',
      marginBottom: 10
    }
  }, "Choose Your Theme \xB7 24 Palettes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 6
    }
  }, palettes.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onPick(p.id),
    style: {
      cursor: 'pointer',
      border: active === p.id ? '2px solid #C5A95A' : '1px solid rgba(28,61,46,0.10)',
      borderRadius: 3,
      overflow: 'hidden',
      background: p.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.primary
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.mid
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.accent
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5px 6px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      color: '#1C3D2E',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.6)'
    }
  }, "Then run ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#1C3D2E',
      fontWeight: 600
    }
  }, "\uD83D\uDCB3 Column & Co. \u2192 Apply Theme"), "."));
}
Object.assign(window, {
  SheetsChrome,
  ScriptMenu,
  PalettePicker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/foundation/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/foundation/components.jsx
try { (() => {
/* =====================================================================
   Atoms shared across all Foundation tabs.
   Loaded as a Babel script tag — exports to window so other JSX files
   can use them.
   ===================================================================== */

const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

/* ---------- Section labels (caps, tracked-out, gold-stripe optional) ---- */
function SectionLabel({
  children,
  gold = false,
  dark = false,
  sub = ''
}) {
  const bg = dark ? 'var(--pal-mid, #2D5C45)' : 'transparent';
  const color = dark ? '#FAF8F2' : 'var(--pal-mid, #2D5C45)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color,
      padding: dark ? '7px 14px' : 0,
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 10.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, gold && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 3,
      height: 14,
      background: 'var(--pal-accent, #C5A95A)'
    }
  }), /*#__PURE__*/React.createElement("span", null, children), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(28,61,46,0.45)',
      fontWeight: 300,
      letterSpacing: '0.06em',
      marginLeft: 6
    }
  }, "\xB7 ", sub));
}

/* ---------- KPI Card — Dashboard top row ---- */
function KpiCard({
  label,
  value,
  sub,
  accent = 'primary',
  big = true
}) {
  // accent: 'primary' | 'mid' | 'gold' | 'danger' | 'success'
  const map = {
    primary: {
      bg: 'var(--pal-primary, #1C3D2E)',
      fg: '#FAF8F2'
    },
    mid: {
      bg: 'var(--pal-mid, #2D5C45)',
      fg: '#FAF8F2'
    },
    gold: {
      bg: 'var(--pal-accent, #C5A95A)',
      fg: '#1C3D2E'
    },
    danger: {
      bg: '#832f30',
      fg: '#FAF8F2'
    },
    success: {
      bg: '#16a34a',
      fg: '#FAF8F2'
    }
  };
  const m = map[accent] || map.primary;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: m.bg,
      color: m.fg,
      padding: '8px 14px',
      fontFamily: 'Jost,sans-serif',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderTop: 0,
      padding: '14px 14px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: big ? 28 : 22,
      lineHeight: 1,
      color: 'var(--pal-primary, #1C3D2E)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 10.5,
      color: 'rgba(28,61,46,0.6)',
      letterSpacing: '0.02em'
    }
  }, sub)));
}

/* ---------- Status chip ---- */
function Chip({
  status,
  children
}) {
  const map = {
    on: {
      bg: 'rgba(22,163,74,0.14)',
      fg: '#0F7A37',
      icon: '✓'
    },
    fair: {
      bg: 'rgba(197,169,90,0.22)',
      fg: '#7d6420',
      icon: '—'
    },
    warn: {
      bg: 'rgba(200,135,58,0.20)',
      fg: '#7a4c1e',
      icon: '⚠'
    },
    over: {
      bg: 'rgba(131,47,48,0.14)',
      fg: '#5e1f1f',
      icon: '✗'
    }
  };
  const m = map[status] || map.on;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: m.bg,
      color: m.fg,
      padding: '4px 10px',
      borderRadius: 999,
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 10.5,
      letterSpacing: '0.04em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, m.icon), /*#__PURE__*/React.createElement("span", null, children || {
    on: 'On Track',
    fair: 'Fair',
    warn: 'Caution',
    over: 'Over'
  }[status] || status));
}

/* ---------- Progress bar — used in goals & health ---- */
function Progress({
  pct,
  status = 'on',
  height = 8
}) {
  const fill = {
    on: 'var(--pal-primary, #1C3D2E)',
    fair: 'var(--pal-accent, #C5A95A)',
    warn: '#C8873A',
    over: '#832f30'
  }[status] || '#1C3D2E';
  const clamped = Math.max(0, Math.min(100, pct));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(28,61,46,0.10)',
      height,
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: clamped + '%',
      height: '100%',
      background: fill,
      transition: 'width 320ms cubic-bezier(0.4,0,0.2,1)'
    }
  }));
}

/* ---------- Money formatter ---- */
function fmt(n, opts = {}) {
  const sign = opts.signed && n > 0 ? '+' : '';
  const abs = Math.abs(n);
  const s = abs.toLocaleString('en-US', {
    minimumFractionDigits: opts.decimals ?? 0,
    maximumFractionDigits: opts.decimals ?? 0
  });
  return (n < 0 ? '−' : sign) + '$' + s;
}
function pct(n, d = 1) {
  return n.toFixed(d) + '%';
}

/* ---------- Column header bar (Forest stripe) ---- */
function ColHeader({
  cols,
  widths
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: widths.join(' '),
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      fontFamily: 'Jost,sans-serif',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '9px 12px',
      textAlign: c.align || 'left',
      borderRight: i < cols.length - 1 ? '1px solid rgba(250,248,242,0.10)' : 0
    }
  }, c.label)));
}

/* ---------- Data row with zebra ---- */
function DataRow({
  cols,
  widths,
  zebra,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: widths.join(' '),
      background: zebra ? 'var(--pal-zebra, #EEF2EC)' : '#FAF8F2',
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      color: 'var(--pal-primary, #1C3D2E)',
      borderBottom: last ? 0 : '1px solid rgba(28,61,46,0.06)'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 12px',
      textAlign: c.align || 'left',
      display: 'flex',
      alignItems: 'center',
      justifyContent: c.align === 'right' ? 'flex-end' : c.align === 'center' ? 'center' : 'flex-start',
      gap: 8,
      fontVariantNumeric: c.num ? 'tabular-nums' : 'normal',
      fontWeight: c.bold ? 600 : 400
    }
  }, c.content)));
}

/* ---------- Brand header inside the sheet (rows 1-3) ---- */
function SheetHeader({
  tab
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-icon-cream.svg",
    alt: "",
    style: {
      height: 30,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1
    }
  }, "Column & Co."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9,
      letterSpacing: '0.2em',
      color: 'var(--pal-accent, #C5A95A)',
      marginTop: 3
    }
  }, "LIFE, ORGANIZED."))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 300,
      color: '#FAF8F2',
      opacity: 0.78,
      letterSpacing: '0.04em'
    }
  }, "The Foundation v2 \xA0\xB7\xA0 ", tab)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-mid, #2D5C45)',
      height: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-accent, #C5A95A)',
      height: 3
    }
  }));
}

/* ---------- Footer ---- */
function SheetFooter({
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      padding: '11px 24px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 300,
      letterSpacing: '0.04em',
      textAlign: 'center',
      opacity: 0.95
    }
  }, "The Foundation v2.0 \xA0\xB7\xA0 columnandco.com ", note ? ' · ' + note : '');
}
Object.assign(window, {
  SectionLabel,
  KpiCard,
  Chip,
  Progress,
  fmt,
  pct,
  ColHeader,
  DataRow,
  SheetHeader,
  SheetFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/foundation/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/foundation/data.js
try { (() => {
/* =====================================================================
   COLUMN & CO. — THE FOUNDATION v2 · MOCK DATA
   Fictional couple Marcus & Elena Brooks · May 2026 view
   Source: COLUMN_CO_PROJECT__1_.md · _Engine + Trends + Categories tabs
   ===================================================================== */

window.CC_DATA = {
  buyer: {
    name: 'Marcus & Elena Brooks',
    month: 'May 2026'
  },
  // 6 months (Dec 2025 – May 2026) of income / expense / savings
  months: [{
    label: 'Dec 2025',
    short: 'Dec',
    income: 10120,
    expenses: 6094,
    net: 4026,
    savings_rate: 39.8
  }, {
    label: 'Jan 2026',
    short: 'Jan',
    income: 10180,
    expenses: 6420,
    net: 3760,
    savings_rate: 36.9
  }, {
    label: 'Feb 2026',
    short: 'Feb',
    income: 10200,
    expenses: 6612,
    net: 3588,
    savings_rate: 35.2
  }, {
    label: 'Mar 2026',
    short: 'Mar',
    income: 10215,
    expenses: 6740,
    net: 3475,
    savings_rate: 34.0
  }, {
    label: 'Apr 2026',
    short: 'Apr',
    income: 10220,
    expenses: 6905,
    net: 3315,
    savings_rate: 32.4
  }, {
    label: 'May 2026',
    short: 'May',
    income: 10230,
    expenses: 6980,
    net: 3250,
    savings_rate: 31.8
  }],
  // 24 months (Jun 2024 – May 2026). _Engine is wired for 24 months
  // per the project state ("IF-guarded, ready"). The Trends tab can
  // window this at 6 / 12 / 24.
  months_24: [{
    label: 'Jun 2024',
    short: 'Jun ’24',
    income: 9820,
    expenses: 5840,
    net: 3980,
    savings_rate: 40.5
  }, {
    label: 'Jul 2024',
    short: 'Jul ’24',
    income: 9870,
    expenses: 5910,
    net: 3960,
    savings_rate: 40.1
  }, {
    label: 'Aug 2024',
    short: 'Aug ’24',
    income: 9900,
    expenses: 5950,
    net: 3950,
    savings_rate: 39.9
  }, {
    label: 'Sep 2024',
    short: 'Sep ’24',
    income: 9940,
    expenses: 5880,
    net: 4060,
    savings_rate: 40.8
  }, {
    label: 'Oct 2024',
    short: 'Oct ’24',
    income: 9970,
    expenses: 6010,
    net: 3960,
    savings_rate: 39.7
  }, {
    label: 'Nov 2024',
    short: 'Nov ’24',
    income: 9985,
    expenses: 6090,
    net: 3895,
    savings_rate: 39.0
  }, {
    label: 'Dec 2024',
    short: 'Dec ’24',
    income: 10010,
    expenses: 6150,
    net: 3860,
    savings_rate: 38.6
  }, {
    label: 'Jan 2025',
    short: 'Jan ’25',
    income: 10045,
    expenses: 6020,
    net: 4025,
    savings_rate: 40.1
  }, {
    label: 'Feb 2025',
    short: 'Feb ’25',
    income: 10060,
    expenses: 5980,
    net: 4080,
    savings_rate: 40.6
  }, {
    label: 'Mar 2025',
    short: 'Mar ’25',
    income: 10080,
    expenses: 6090,
    net: 3990,
    savings_rate: 39.6
  }, {
    label: 'Apr 2025',
    short: 'Apr ’25',
    income: 10095,
    expenses: 6160,
    net: 3935,
    savings_rate: 39.0
  }, {
    label: 'May 2025',
    short: 'May ’25',
    income: 10100,
    expenses: 6240,
    net: 3860,
    savings_rate: 38.2
  }, {
    label: 'Jun 2025',
    short: 'Jun ’25',
    income: 10110,
    expenses: 6210,
    net: 3900,
    savings_rate: 38.6
  }, {
    label: 'Jul 2025',
    short: 'Jul ’25',
    income: 10115,
    expenses: 6280,
    net: 3835,
    savings_rate: 37.9
  }, {
    label: 'Aug 2025',
    short: 'Aug ’25',
    income: 10118,
    expenses: 6210,
    net: 3908,
    savings_rate: 38.6
  }, {
    label: 'Sep 2025',
    short: 'Sep ’25',
    income: 10120,
    expenses: 6020,
    net: 4100,
    savings_rate: 40.5
  }, {
    label: 'Oct 2025',
    short: 'Oct ’25',
    income: 10122,
    expenses: 6160,
    net: 3962,
    savings_rate: 39.1
  }, {
    label: 'Nov 2025',
    short: 'Nov ’25',
    income: 10120,
    expenses: 6055,
    net: 4065,
    savings_rate: 40.2
  }, {
    label: 'Dec 2025',
    short: 'Dec',
    income: 10120,
    expenses: 6094,
    net: 4026,
    savings_rate: 39.8
  }, {
    label: 'Jan 2026',
    short: 'Jan',
    income: 10180,
    expenses: 6420,
    net: 3760,
    savings_rate: 36.9
  }, {
    label: 'Feb 2026',
    short: 'Feb',
    income: 10200,
    expenses: 6612,
    net: 3588,
    savings_rate: 35.2
  }, {
    label: 'Mar 2026',
    short: 'Mar',
    income: 10215,
    expenses: 6740,
    net: 3475,
    savings_rate: 34.0
  }, {
    label: 'Apr 2026',
    short: 'Apr',
    income: 10220,
    expenses: 6905,
    net: 3315,
    savings_rate: 32.4
  }, {
    label: 'May 2026',
    short: 'May',
    income: 10230,
    expenses: 6980,
    net: 3250,
    savings_rate: 31.8
  }],
  // Dashboard top spending — current month
  top_spending: [{
    cat: 'Housing',
    spent: 2400,
    budget: 2400,
    status: 'on'
  }, {
    cat: 'Food & Dining',
    spent: 922,
    budget: 650,
    status: 'over'
  }, {
    cat: 'Shopping',
    spent: 618,
    budget: 500,
    status: 'over'
  }, {
    cat: 'Transportation',
    spent: 540,
    budget: 600,
    status: 'on'
  }, {
    cat: 'Utilities',
    spent: 360,
    budget: 380,
    status: 'on'
  }, {
    cat: 'Gifts & Donations',
    spent: 280,
    budget: 300,
    status: 'on'
  }, {
    cat: 'Entertainment',
    spent: 255,
    budget: 240,
    status: 'fair'
  }, {
    cat: 'Personal Care',
    spent: 180,
    budget: 200,
    status: 'on'
  }],
  // Dashboard right-rail "Month Snapshot"
  snapshot: {
    income: 10230,
    expenses: 6980,
    net: 3250,
    savings_rate: 31.8,
    avg_daily: 225,
    transactions: 76,
    largest_expense: 2400
  },
  // Spending breakdown — current month, donut-ready
  breakdown: [{
    cat: 'Housing',
    amount: 2400
  }, {
    cat: 'Food & Dining',
    amount: 922
  }, {
    cat: 'Transportation',
    amount: 540
  }, {
    cat: 'Shopping',
    amount: 618
  }, {
    cat: 'Utilities',
    amount: 360
  }, {
    cat: 'Entertainment',
    amount: 255
  }, {
    cat: 'Subscriptions',
    amount: 180
  }, {
    cat: 'Personal Care',
    amount: 180
  }, {
    cat: 'Gifts & Donations',
    amount: 280
  }, {
    cat: 'Health & Medical',
    amount: 165
  }, {
    cat: 'Insurance',
    amount: 220
  }, {
    cat: 'Misc',
    amount: 860
  }],
  // Goals
  goals: [{
    name: 'Emergency Fund',
    type: 'Savings Target',
    target: 22000,
    current: 22800,
    deadline: 'Dec 2026',
    status: 'on',
    note: '3–4 months expenses. At 3.3 months — almost there.'
  }, {
    name: 'Japan Trip Fund',
    type: 'Savings Target',
    target: 5000,
    current: 1700,
    deadline: 'Sep 2026',
    status: 'fair',
    note: 'Set a transfer rule: $200/mo to Ally Savings labeled Travel.'
  }, {
    name: 'Amex Gold Payoff',
    type: 'Debt Payoff',
    target: 1840,
    current: 1840,
    deadline: 'Dec 2026',
    status: 'fair',
    note: 'Starting balance $1,850. Pay $100 extra/mo above minimum.'
  }, {
    name: 'Food & Dining',
    type: 'Spending Limit',
    target: 650,
    current: 922,
    deadline: 'Monthly',
    status: 'over',
    note: 'Biggest leak. Cut delivery apps — cook 4 nights/week.'
  }, {
    name: 'Shopping',
    type: 'Spending Limit',
    target: 500,
    current: 618,
    deadline: 'Monthly',
    status: 'over',
    note: 'Amazon rule: 24-hour wait before buying.'
  }, {
    name: 'Entertainment',
    type: 'Spending Limit',
    target: 240,
    current: 255,
    deadline: 'Monthly',
    status: 'fair',
    note: 'Streaming + events. Currently on track.'
  }, {
    name: 'Monthly Savings Rate',
    type: 'Savings Rate',
    target: 20,
    current: 31.8,
    deadline: 'Ongoing',
    status: 'on',
    note: 'Goal: 20%+. Currently crushing it at 31.8%.'
  }],
  // Health Score — 5 weighted indicators
  health: {
    composite: 72,
    grade: 'Good',
    indicators: [{
      name: 'Savings Rate',
      value: '31.8%',
      score: 88,
      weight: 25,
      status: 'on',
      bench: '≥ 20% of income saved'
    }, {
      name: 'Expense-to-Income',
      value: '68.2%',
      score: 74,
      weight: 20,
      status: 'on',
      bench: '≤ 80% of income spent'
    }, {
      name: 'Emergency Fund',
      value: '3.3 mo',
      score: 80,
      weight: 20,
      status: 'on',
      bench: '≥ 3 months of expenses'
    }, {
      name: 'Budget Adherence',
      value: '6 of 8',
      score: 50,
      weight: 20,
      status: 'fair',
      bench: '≥ 80% categories on budget'
    }, {
      name: 'Debt-to-Income',
      value: '14.5%',
      score: 92,
      weight: 15,
      status: 'on',
      bench: '≤ 36% debt payments'
    }],
    biggest_opportunity: 'Food & Dining is 42% over budget — cutting it to plan lifts composite to ~78.'
  },
  // Net Worth
  net_worth: {
    total: 222640,
    assets: 244100,
    liabilities: 21460,
    change_mo: 3250,
    budget_accounts: [{
      name: 'Chase Joint Checking',
      type: 'Checking',
      owner: 'Joint',
      balance: 7200
    }, {
      name: 'Elena Checking',
      type: 'Checking',
      owner: 'Elena',
      balance: 2400
    }, {
      name: 'Marcus Checking',
      type: 'Checking',
      owner: 'Marcus',
      balance: 3100
    }, {
      name: 'Ally Savings',
      type: 'Savings',
      owner: 'Joint',
      balance: 22800
    }, {
      name: 'Ally Sinking Fund',
      type: 'Savings',
      owner: 'Joint',
      balance: 6400
    }, {
      name: 'Amex Gold Card',
      type: 'Credit',
      owner: 'Marcus',
      balance: -1840
    }, {
      name: 'Chase Sapphire Card',
      type: 'Credit',
      owner: 'Elena',
      balance: -1320
    }, {
      name: 'Marcus Auto Loan',
      type: 'Loan',
      owner: 'Marcus',
      balance: -18600
    }],
    investments: [{
      name: 'Marcus 401(k)',
      type: '401(k)',
      value: 98500
    }, {
      name: 'Elena 403(b)',
      type: '403(b)',
      value: 41200
    }, {
      name: 'Joint Brokerage',
      type: 'Brokerage',
      value: 27800
    }, {
      name: 'Marcus Roth IRA',
      type: 'Roth IRA',
      value: 19400
    }, {
      name: 'Elena Roth IRA',
      type: 'Roth IRA',
      value: 15600
    }]
  },
  // 24 palettes — pulled from _Config
  palettes: [{
    id: 'light',
    name: 'Light',
    primary: '#1C3D2E',
    mid: '#2D5C45',
    accent: '#C5A95A',
    bg: '#FAF8F2',
    zebra: '#EEF2EC',
    dark: '#111827',
    accentLight: '#F0EBD8'
  }, {
    id: 'warm-greige',
    name: 'Warm Greige',
    primary: '#3D2B1F',
    mid: '#5C4033',
    accent: '#C8873A',
    bg: '#FAF6F1',
    zebra: '#F0E8DC',
    dark: '#1C1009',
    accentLight: '#F5E6D3'
  }, {
    id: 'cool-slate',
    name: 'Cool Slate',
    primary: '#1E3A5F',
    mid: '#2D5282',
    accent: '#64748B',
    bg: '#F8FAFC',
    zebra: '#EFF6FF',
    dark: '#0F2440',
    accentLight: '#E2E8F0'
  }, {
    id: 'sage',
    name: 'Sage',
    primary: '#2D4A3E',
    mid: '#3D6455',
    accent: '#8FAF7E',
    bg: '#F4F9F1',
    zebra: '#EAF4E3',
    dark: '#1A2E25',
    accentLight: '#E8F5E0'
  }, {
    id: 'espresso',
    name: 'Espresso',
    primary: '#2C1810',
    mid: '#4A2C1A',
    accent: '#C8873A',
    bg: '#FAF5F0',
    zebra: '#F0E5D8',
    dark: '#120A04',
    accentLight: '#F5E6D3'
  }, {
    id: 'maize-navy',
    name: 'Maize & Navy',
    primary: '#003366',
    mid: '#004080',
    accent: '#FFCB05',
    bg: '#F5F8FF',
    zebra: '#E8F0FF',
    dark: '#001A33',
    accentLight: '#FFF5B0'
  }, {
    id: 'scarlet-gray',
    name: 'Scarlet & Gray',
    primary: '#BB0000',
    mid: '#CC0000',
    accent: '#808080',
    bg: '#F9F9F9',
    zebra: '#EFEFEF',
    dark: '#2C0000',
    accentLight: '#E8E8E8'
  }, {
    id: 'orange-navy',
    name: 'Orange & Navy',
    primary: '#002D6D',
    mid: '#003D94',
    accent: '#F47920',
    bg: '#F5F8FF',
    zebra: '#E8F0FF',
    dark: '#001540',
    accentLight: '#FFE4C4'
  }, {
    id: 'green-gold',
    name: 'Green & Gold',
    primary: '#154734',
    mid: '#1A5C43',
    accent: '#CBA135',
    bg: '#F3FAF5',
    zebra: '#E5F5EA',
    dark: '#0A2419',
    accentLight: '#FFF3C0'
  }, {
    id: 'purple-gold',
    name: 'Purple & Gold',
    primary: '#4A1C7C',
    mid: '#5E2499',
    accent: '#FFC72C',
    bg: '#FAF5FF',
    zebra: '#F3E8FF',
    dark: '#280D45',
    accentLight: '#FFF5B5'
  }, {
    id: 'crimson-white',
    name: 'Crimson & White',
    primary: '#9B1B30',
    mid: '#B52238',
    accent: '#FFFFFF',
    bg: '#FFF8F9',
    zebra: '#FFE8EC',
    dark: '#4A0010',
    accentLight: '#F5F5F5'
  }, {
    id: 'garnet-gold',
    name: 'Garnet & Gold',
    primary: '#782F40',
    mid: '#9B3B52',
    accent: '#CBA135',
    bg: '#FFF8F5',
    zebra: '#FFE8DC',
    dark: '#3D0A1A',
    accentLight: '#FFF3C0'
  }, {
    id: 'forest-white',
    name: 'Forest & White',
    primary: '#154733',
    mid: '#1E6048',
    accent: '#FFFFFF',
    bg: '#F4FBF6',
    zebra: '#E8F5EC',
    dark: '#0A2819',
    accentLight: '#F0FFF4'
  }, {
    id: 'royal-gold',
    name: 'Royal & Gold',
    primary: '#002D72',
    mid: '#003D9C',
    accent: '#B5A642',
    bg: '#F0F5FF',
    zebra: '#E0ECFF',
    dark: '#001040',
    accentLight: '#F5F0C0'
  }, {
    id: 'silver-black',
    name: 'Silver & Black',
    primary: '#1A1A1A',
    mid: '#2D2D2D',
    accent: '#A8A9AD',
    bg: '#F5F5F5',
    zebra: '#EBEBEB',
    dark: '#000000',
    accentLight: '#E8E8E8'
  }, {
    id: 'midnight',
    name: 'Midnight',
    primary: '#0B1F3A',
    mid: '#142E55',
    accent: '#14B8A6',
    bg: '#F0F4F8',
    zebra: '#E2E8F0',
    dark: '#050E1C',
    accentLight: '#99F6E4'
  }, {
    id: 'burgundy',
    name: 'Burgundy',
    primary: '#5C0A1A',
    mid: '#7A0E22',
    accent: '#E8D5B5',
    bg: '#FAF5F0',
    zebra: '#F0E6DA',
    dark: '#2E0510',
    accentLight: '#F5E8D5'
  }, {
    id: 'mocha',
    name: 'Mocha',
    primary: '#5C3A21',
    mid: '#7A4F2D',
    accent: '#D4A574',
    bg: '#FAF3EA',
    zebra: '#F0E2CE',
    dark: '#2E1D10',
    accentLight: '#F0DCC2'
  }, {
    id: 'indigo-blush',
    name: 'Indigo & Blush',
    primary: '#2E1F6B',
    mid: '#3D2A8C',
    accent: '#EAB0B8',
    bg: '#F7F4FA',
    zebra: '#ECE5F5',
    dark: '#170F36',
    accentLight: '#F8DEE3'
  }, {
    id: 'pine-brass',
    name: 'Pine & Brass',
    primary: '#1F3A2E',
    mid: '#2E5544',
    accent: '#B8964A',
    bg: '#F2F8F4',
    zebra: '#E1F0E7',
    dark: '#0E1D17',
    accentLight: '#E8D9A8'
  }, {
    id: 'ocean-coral',
    name: 'Ocean & Coral',
    primary: '#0F4858',
    mid: '#166075',
    accent: '#F47B6A',
    bg: '#F0F8FA',
    zebra: '#DCEFF2',
    dark: '#062430',
    accentLight: '#FBC8BD'
  }, {
    id: 'charcoal-mint',
    name: 'Charcoal & Mint',
    primary: '#2C2C2E',
    mid: '#44444A',
    accent: '#A8D5BA',
    bg: '#F5F5F5',
    zebra: '#E8E8E8',
    dark: '#161617',
    accentLight: '#D0EAD9'
  }, {
    id: 'olive-cream',
    name: 'Olive & Cream',
    primary: '#3D4A1F',
    mid: '#56672E',
    accent: '#C8B27A',
    bg: '#F7F4E8',
    zebra: '#ECE5D0',
    dark: '#1E2410',
    accentLight: '#E8D9A8'
  }, {
    id: 'custom',
    name: 'Custom',
    primary: '#1B2A4A',
    mid: '#2C3E6B',
    accent: '#C8873A',
    bg: '#F3F4F6',
    zebra: '#EEF0F5',
    dark: '#111827',
    accentLight: '#F5D9B0'
  }],
  tabs: [{
    id: 'start',
    label: 'Start Here'
  }, {
    id: 'trends',
    label: 'Trends'
  }, {
    id: 'dashboard',
    label: 'Dashboard'
  }, {
    id: 'budget',
    label: 'Monthly Budget'
  }, {
    id: 'health',
    label: 'Health Score'
  }, {
    id: 'goals',
    label: 'Goals'
  }, {
    id: 'tx',
    label: 'Transactions'
  }, {
    id: 'import',
    label: 'Bank Import Guide'
  }, {
    id: 'networth',
    label: 'Net Worth'
  }, {
    id: 'accounts',
    label: 'Accounts'
  }, {
    id: 'cats',
    label: 'Categories'
  }, {
    id: 'engine',
    label: '_Engine',
    system: true
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/foundation/data.js", error: String((e && e.message) || e) }); }

// ui_kits/foundation/tabs-actions.jsx
try { (() => {
/* =====================================================================
   ACTION TABS — Goals, Bank Import Guide, plus stubs for remaining tabs
   ===================================================================== */

/* ---------- GOALS ---------- */
function GoalsTab() {
  const goals = window.CC_DATA.goals;
  const onTrack = goals.filter(g => g.status === 'on').length;
  const fair = goals.filter(g => g.status === 'fair').length;
  const over = goals.filter(g => g.status === 'over').length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Goals"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Goals",
    value: goals.length + '',
    accent: "primary",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "On Track",
    value: onTrack + '',
    sub: 'of ' + goals.length,
    accent: "primary",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Need Attention",
    value: fair + over + '',
    accent: "danger",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Avg Progress",
    value: "68%",
    sub: "across all targets",
    accent: "gold",
    big: false
  })), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "LIVE PROGRESS FROM YOUR LEDGER"
  }, "YOUR GOALS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '0.7fr', '0.8fr', '1.5fr', '0.7fr'],
    cols: [{
      label: 'Goal'
    }, {
      label: 'Type'
    }, {
      label: 'Target',
      align: 'right'
    }, {
      label: 'Current',
      align: 'right'
    }, {
      label: 'Progress'
    }, {
      label: 'Status',
      align: 'right'
    }]
  }), goals.map((g, i) => {
    const isPct = g.type === 'Savings Rate';
    const pctVal = isPct ? g.current / g.target * 100 : g.type === 'Spending Limit' ? g.current / g.target * 100 : g.current / g.target * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: g.name
    }, /*#__PURE__*/React.createElement(DataRow, {
      widths: ['1.4fr', '0.9fr', '0.7fr', '0.8fr', '1.5fr', '0.7fr'],
      zebra: i % 2 === 1,
      last: false,
      cols: [{
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 500
          }
        }, g.name)
      }, {
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'Jost,sans-serif',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--pal-mid, #2D5C45)'
          }
        }, g.type)
      }, {
        content: isPct ? pct(g.target, 0) : fmt(g.target),
        align: 'right',
        num: true
      }, {
        content: isPct ? pct(g.current, 1) : fmt(g.current),
        align: 'right',
        num: true,
        bold: true
      }, {
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement(Progress, {
          pct: pctVal,
          status: g.status,
          height: 8
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            fontVariantNumeric: 'tabular-nums',
            fontSize: 11,
            color: 'rgba(28,61,46,0.65)',
            minWidth: 38,
            textAlign: 'right'
          }
        }, pctVal.toFixed(0), "%"))
      }, {
        content: /*#__PURE__*/React.createElement(Chip, {
          status: g.status
        }),
        align: 'right'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: i % 2 === 1 ? 'var(--pal-zebra, #EEF2EC)' : 'transparent',
        padding: '0 14px 12px 14px',
        fontFamily: 'Jost,sans-serif',
        fontSize: 11.5,
        fontWeight: 300,
        color: 'rgba(28,61,46,0.65)',
        fontStyle: 'italic',
        borderBottom: i < goals.length - 1 ? '1px solid rgba(28,61,46,0.06)' : 0
      }
    }, "Deadline: ", g.deadline, " \xA0\xB7\xA0 ", g.note));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: 24,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "FORECAST \xB7 IF YOU STAY THE COURSE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.2,
      marginTop: 10
    }
  }, "Japan Trip Fund hits target by ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "Oct\xA02026"), " \u2014 one month late."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      fontWeight: 300,
      lineHeight: 1.55,
      opacity: 0.78,
      marginTop: 10
    }
  }, "Bump your monthly transfer from $200 to $275 and you hit Sep deadline. Or skip 2 takeout dinners a week and the math works on its own.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "YOUR PACE NOW"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "Avg Monthly"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "$280")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "Need / Month"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "$275")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "To Catch Up"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "+$75"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Yellow cells = you edit \xB7 Grey cells = auto-calculated from your ledger"
  })));
}

/* ---------- BANK IMPORT GUIDE ---------- */
function BankImportTab() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Bank Import Guide"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "THREE STEPS \xB7 AUTO-CATEGORIZED"
  }, "PASTE YOUR BANK CSV"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10,
      marginTop: 14,
      marginBottom: 24
    }
  }, [{
    n: 1,
    t: 'Set the account',
    d: 'Type the account name in cell C6. Must match an entry on the Accounts tab.'
  }, {
    n: 2,
    t: 'Paste the CSV',
    d: 'Include the header row. We handle Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex.'
  }, {
    n: 3,
    t: 'Run import',
    d: '💳 Column & Co. → Import Bank Transactions. Auto-categorized. Dupes skipped.'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 999,
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--pal-primary, #1C3D2E)'
    }
  }, s.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.5
    }
  }, s.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--pal-mid, #2D5C45)'
    }
  }, "Account name (C6):"), /*#__PURE__*/React.createElement("input", {
    defaultValue: "Chase Joint Checking",
    style: {
      background: '#FFFDE7',
      border: '1px solid #C5A95A',
      borderRadius: 3,
      padding: '8px 12px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 13,
      color: '#1C3D2E',
      minWidth: 260,
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(SectionLabel, {
    sub: "PASTE ZONE \u2014 INCLUDE THE HEADER ROW",
    gold: true
  }, "STEP 2 \xB7 PASTE CSV"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F0FFF4',
      border: '2px solid #16A34A',
      borderRadius: 4,
      marginTop: 12,
      marginBottom: 24,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 2fr 0.8fr 0.8fr 0.7fr',
      background: '#FFFFFF',
      borderBottom: '1px solid rgba(22,163,74,0.30)',
      fontFamily: 'monospace',
      fontSize: 11,
      fontWeight: 600,
      color: '#1C3D2E'
    }
  }, ['Date', 'Description', 'Amount', 'Type', 'Memo'].map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      padding: '8px 12px',
      borderRight: '1px solid rgba(22,163,74,0.20)'
    }
  }, h))), [['05/02/2026', 'WHOLE FOODS MARKET', '-84.20', 'DEBIT', ''], ['05/02/2026', 'PAYROLL DEP - INTUIT', '5120.00', 'CREDIT', 'Bi-weekly'], ['05/03/2026', 'NETFLIX.COM', '-15.49', 'DEBIT', 'SUBS'], ['05/04/2026', 'UBER EATS', '-32.10', 'DEBIT', ''], ['05/05/2026', 'TRANSFER TO ALLY SVGS', '-500.00', 'DEBIT', 'Auto-tagged transfer']].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 2fr 0.8fr 0.8fr 0.7fr',
      background: i % 2 === 0 ? '#FFFFFF' : '#F0FFF4',
      fontFamily: 'monospace',
      fontSize: 11.5,
      color: '#1C3D2E'
    }
  }, r.map((v, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      padding: '7px 12px',
      borderRight: j < r.length - 1 ? '1px solid rgba(22,163,74,0.10)' : 0,
      borderBottom: '1px solid rgba(22,163,74,0.08)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontStyle: 'italic',
      color: 'rgba(22,163,74,0.85)'
    }
  }, "Paste up to 100 rows here. We sniff the header, parse the dates, classify Income/Expense/Transfer, and drop dupes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      padding: '10px 14px',
      borderRadius: '4px 4px 0 0',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "\u26A0 Review Income \u2014 Confirm which deposits count as real income"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderTop: 0,
      borderRadius: '0 0 4px 4px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['0.9fr', '1.8fr', '0.9fr', '0.8fr', '1.3fr'],
    cols: [{
      label: 'Month'
    }, {
      label: 'Description'
    }, {
      label: 'Amount',
      align: 'right'
    }, {
      label: 'Is Income?',
      align: 'center'
    }, {
      label: 'Note'
    }]
  }), [['May 2026', 'PAYROLL DEP - INTUIT', 5120, 'Yes', ''], ['May 2026', 'VENMO FROM ALEX', 80, 'No', 'Reimbursement, not income'], ['May 2026', 'REFUND - AMAZON', 42, 'No', 'Return refund']].map((r, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: i,
    widths: ['0.9fr', '1.8fr', '0.9fr', '0.8fr', '1.3fr'],
    zebra: i % 2 === 1,
    last: i === 2,
    cols: [{
      content: r[0]
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r[1])
    }, {
      content: fmt(r[2]),
      align: 'right',
      num: true
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          background: r[3] === 'Yes' ? '#FFFDE7' : '#FAF8F2',
          border: '1px solid ' + (r[3] === 'Yes' ? '#C5A95A' : 'rgba(28,61,46,0.20)'),
          padding: '4px 14px',
          borderRadius: 3,
          fontWeight: 500,
          fontSize: 11.5
        }
      }, r[3], " \u25BE"),
      align: 'center'
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11.5,
          fontStyle: 'italic',
          color: 'rgba(28,61,46,0.65)'
        }
      }, r[4])
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Auto-categorization uses the keyword rules on the Categories tab"
  })));
}

/* ---------- Generic stub tab for the rest ---------- */
function StubTab({
  tab,
  copy
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: tab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '40px 32px',
      minHeight: 500
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true
  }, tab.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 12,
      maxWidth: 640
    }
  }, copy), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.6)',
      marginTop: 14,
      maxWidth: 640,
      lineHeight: 1.55
    }
  }, "This tab exists in the actual product. The recreation focuses on the screens that sell the system. Switch to Dashboard, Trends, Goals, or Health Score to see the full visual treatment."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, null)));
}

/* ---------- MONTHLY BUDGET ---------- */
const BUDGET_PROFILES = {
  'dave-ramsey': {
    name: 'Dave Ramsey',
    sub: 'Envelopes · Baby Steps',
    blurb: 'The Ramsey Method: big slices for housing and food, every dollar named, aggressive debt snowball, 3-6 month emergency fund.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 900,
      'Transportation': 800,
      'Shopping': 250,
      'Utilities': 360,
      'Entertainment': 150,
      'Subscriptions': 60,
      'Personal Care': 150,
      'Gifts & Donations': 250,
      'Health & Medical': 200,
      'Insurance': 450,
      'Savings': 1500,
      'Debt Payments': 1500,
      'Education': 0,
      'Travel': 0,
      'Pets': 100,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 160
    }
  },
  '50-30-20': {
    name: '50/30/20',
    sub: 'Needs · Wants · Savings',
    blurb: 'Senator Warren\'s rule. 50% needs (housing, food, transport, insurance), 30% wants (dining out, shopping, entertainment), 20% savings + debt.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 750,
      'Transportation': 650,
      'Shopping': 620,
      'Utilities': 380,
      'Entertainment': 400,
      'Subscriptions': 180,
      'Personal Care': 200,
      'Gifts & Donations': 300,
      'Health & Medical': 200,
      'Insurance': 450,
      'Savings': 1500,
      'Debt Payments': 550,
      'Education': 100,
      'Travel': 400,
      'Pets': 150,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 700
    }
  },
  'fire': {
    name: 'FIRE',
    sub: 'Financial Independence · Retire Early',
    blurb: 'Optimized for a 50%+ savings rate. Lean fixed costs, minimal discretionary, max retirement and brokerage contributions. The r/financialindependence playbook.',
    income: 10230,
    targets: {
      'Housing': 1800,
      'Food & Dining': 500,
      'Transportation': 400,
      'Shopping': 200,
      'Utilities': 340,
      'Entertainment': 100,
      'Subscriptions': 30,
      'Personal Care': 80,
      'Gifts & Donations': 150,
      'Health & Medical': 150,
      'Insurance': 400,
      'Savings': 5200,
      'Debt Payments': 300,
      'Education': 0,
      'Travel': 200,
      'Pets': 80,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 300
    }
  },
  'zero-based': {
    name: 'Zero-Based',
    sub: 'Every dollar gets a job · YNAB-style',
    blurb: 'Income minus expenses equals zero. Nothing left unassigned. Real-world realistic: room for travel, education, eating out, plus disciplined savings.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 750,
      'Transportation': 600,
      'Shopping': 500,
      'Utilities': 380,
      'Entertainment': 240,
      'Subscriptions': 120,
      'Personal Care': 200,
      'Gifts & Donations': 300,
      'Health & Medical': 200,
      'Insurance': 450,
      'Savings': 2200,
      'Debt Payments': 700,
      'Education': 50,
      'Travel': 300,
      'Pets': 130,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 710
    }
  },
  'anti-budget': {
    name: 'Anti-Budget',
    sub: 'Paula Pant · Save first, spend the rest',
    blurb: 'Pay yourself 20% off the top into savings + retirement. Don\'t track the rest by category — if savings happens automatically, the spending takes care of itself.',
    income: 10230,
    targets: {
      'Housing': 2200,
      'Food & Dining': 700,
      'Transportation': 550,
      'Shopping': 600,
      'Utilities': 360,
      'Entertainment': 350,
      'Subscriptions': 150,
      'Personal Care': 180,
      'Gifts & Donations': 300,
      'Health & Medical': 200,
      'Insurance': 420,
      'Savings': 2050,
      'Debt Payments': 500,
      'Education': 100,
      'Travel': 400,
      'Pets': 130,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 1040
    }
  },
  'kakeibo': {
    name: 'Kakeibo',
    sub: 'Japanese 4-bucket · Needs · Wants · Culture · Unexpected',
    blurb: 'A 100-year-old Japanese mindful-money practice. Four hand-written buckets — survival, optional, culture & growth, and the unexpected. Reflect at month-end on what each category bought you.',
    income: 10230,
    targets: {
      'Housing': 2200,
      'Food & Dining': 750,
      'Transportation': 550,
      'Shopping': 350,
      'Utilities': 360,
      'Entertainment': 300,
      'Subscriptions': 90,
      'Personal Care': 150,
      'Gifts & Donations': 250,
      'Health & Medical': 200,
      'Insurance': 420,
      'Savings': 2200,
      'Debt Payments': 400,
      'Education': 300,
      'Travel': 350,
      'Pets': 100,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 1260
    }
  },
  'new-parent': {
    name: 'New Parent',
    sub: 'Young family · childcare + 529 priority',
    blurb: 'Childcare is now the second-largest line. Health & medical and insurance climb. Discretionary (travel, dining, entertainment) compresses to make room — and a 529 contribution lands under Education.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 900,
      'Transportation': 550,
      'Shopping': 350,
      'Utilities': 380,
      'Entertainment': 100,
      'Subscriptions': 80,
      'Personal Care': 120,
      'Gifts & Donations': 150,
      'Health & Medical': 350,
      'Insurance': 550,
      'Savings': 1100,
      'Debt Payments': 500,
      'Education': 200,
      'Travel': 100,
      'Pets': 80,
      'Childcare': 1800,
      'Business': 0,
      'Taxes': 0,
      'Misc': 520
    }
  },
  'self-employed': {
    name: 'Self-Employed',
    sub: '1099 · 25% tax set-aside · biz expenses',
    blurb: 'Built for freelancers, contractors, and Etsy sellers. A quarter of every dollar earned is escrowed for quarterly taxes. Business pulls a real line. Self-paid health insurance is heavier than a W-2 budget.',
    income: 10230,
    targets: {
      'Housing': 1900,
      'Food & Dining': 600,
      'Transportation': 450,
      'Shopping': 250,
      'Utilities': 320,
      'Entertainment': 150,
      'Subscriptions': 100,
      'Personal Care': 120,
      'Gifts & Donations': 150,
      'Health & Medical': 200,
      'Insurance': 700,
      'Savings': 1200,
      'Debt Payments': 400,
      'Education': 150,
      'Travel': 200,
      'Pets': 80,
      'Childcare': 0,
      'Business': 600,
      'Taxes': 2560,
      'Misc': 100
    }
  },
  'hcol-renter': {
    name: 'HCOL Renter',
    sub: 'High-cost city · 40% housing · student loans',
    blurb: 'For NYC, SF, Seattle, Boston, DC. Rent eats 40%. Student-loan payments get a serious line. Less car, less stuff, more transit. Savings is what\'s left — and that\'s okay, the location is the investment.',
    income: 10230,
    targets: {
      'Housing': 4100,
      'Food & Dining': 800,
      'Transportation': 350,
      'Shopping': 300,
      'Utilities': 280,
      'Entertainment': 200,
      'Subscriptions': 100,
      'Personal Care': 150,
      'Gifts & Donations': 100,
      'Health & Medical': 150,
      'Insurance': 280,
      'Savings': 900,
      'Debt Payments': 1100,
      'Education': 50,
      'Travel': 300,
      'Pets': 80,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 990
    }
  },
  'custom': {
    name: 'Custom',
    sub: 'You set every target',
    blurb: 'Click any yellow cell to edit. Totals update live. Build a profile that matches your real life — then save it as your personal default.',
    income: 10230,
    targets: {
      'Housing': 2400,
      'Food & Dining': 650,
      'Transportation': 600,
      'Shopping': 500,
      'Utilities': 380,
      'Entertainment': 240,
      'Subscriptions': 120,
      'Personal Care': 200,
      'Gifts & Donations': 300,
      'Health & Medical': 180,
      'Insurance': 400,
      'Savings': 1800,
      'Debt Payments': 700,
      'Education': 50,
      'Travel': 250,
      'Pets': 120,
      'Childcare': 0,
      'Business': 0,
      'Taxes': 0,
      'Misc': 200
    }
  }
};
function MonthlyBudgetTab() {
  const [profileId, setProfileId] = React.useState('dave-ramsey');
  const [customOverrides, setCustomOverrides] = React.useState({});
  const profile = BUDGET_PROFILES[profileId];
  const income = profile.income;
  const isCustom = profileId === 'custom';

  // For Custom, merge defaults + overrides
  const targets = isCustom ? {
    ...profile.targets,
    ...customOverrides
  } : profile.targets;
  const total = Object.values(targets).reduce((a, b) => a + b, 0);
  const remaining = income - total;
  const savingsRate = (targets['Savings'] || 0) / income * 100;
  const cats = Object.keys(profile.targets);
  const half = Math.ceil(cats.length / 2);
  const left = cats.slice(0, half);
  const right = cats.slice(half);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Monthly Budget"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 18,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "PICK A PROFILE OR SET YOUR OWN"
  }, "DESIRED FINANCIAL PROFILE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 10
    }
  }, profile.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--pal-accent, #C5A95A)',
      marginTop: 4
    }
  }, profile.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 13,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.55,
      marginTop: 10,
      maxWidth: 540
    }
  }, profile.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10,
      minWidth: 420
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Monthly Income",
    value: fmt(income),
    accent: "primary",
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Budgeted",
    value: fmt(total),
    sub: remaining >= 0 ? fmt(remaining) + ' free' : fmt(-remaining) + ' over',
    accent: remaining < 0 ? 'danger' : 'mid',
    big: false
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Savings Rate",
    value: pct(savingsRate, 1),
    sub: "of income",
    accent: "gold",
    big: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-profile-scroll",
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 8,
      scrollbarWidth: 'thin',
      maskImage: 'linear-gradient(to right, transparent 0, #000 18px, #000 calc(100% - 36px), transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 18px, #000 calc(100% - 36px), transparent 100%)'
    }
  }, Object.entries(BUDGET_PROFILES).map(([id, p]) => {
    const active = id === profileId;
    const pSavings = (p.targets['Savings'] || 0) / p.income * 100;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setProfileId(id),
      style: {
        flex: '0 0 auto',
        cursor: 'pointer',
        background: active ? 'var(--pal-primary, #1C3D2E)' : '#FAF8F2',
        color: active ? '#FAF8F2' : '#1C3D2E',
        border: '1px solid ' + (active ? 'var(--pal-primary, #1C3D2E)' : 'rgba(28,61,46,0.16)'),
        borderRadius: 999,
        padding: '8px 14px 8px 12px',
        fontFamily: 'Jost,sans-serif',
        fontSize: 12.5,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        whiteSpace: 'nowrap',
        transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease',
        boxShadow: active ? '0 1px 2px rgba(28,61,46,0.18)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 999,
        background: active ? 'var(--pal-accent, #C5A95A)' : 'rgba(28,61,46,0.22)',
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        opacity: active ? 0.75 : 0.55,
        fontVariantNumeric: 'tabular-nums',
        borderLeft: '1px solid ' + (active ? 'rgba(250,248,242,0.22)' : 'rgba(28,61,46,0.14)'),
        paddingLeft: 10,
        letterSpacing: '0.02em'
      }
    }, pct(pSavings, 0), " save"));
  }))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: isCustom ? 'EDIT ANY YELLOW CELL' : 'PRESET FROM PROFILE'
  }, "CATEGORY TARGETS \xB7 20 CATEGORIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 12
    }
  }, [left, right].map((col, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '0.5fr', '0.9fr'],
    cols: [{
      label: 'Category'
    }, {
      label: 'Target',
      align: 'right'
    }, {
      label: '% Inc',
      align: 'right'
    }, {
      label: 'Share'
    }]
  }), col.map((cat, i) => {
    const val = targets[cat];
    const pctInc = val / income * 100;
    const share = val / Math.max(...Object.values(targets));
    return /*#__PURE__*/React.createElement(DataRow, {
      key: cat,
      widths: ['1.4fr', '0.9fr', '0.5fr', '0.9fr'],
      zebra: i % 2 === 1,
      last: i === col.length - 1,
      cols: [{
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 500
          }
        }, cat)
      }, {
        content: isCustom ? /*#__PURE__*/React.createElement("input", {
          type: "number",
          value: val,
          onChange: e => setCustomOverrides({
            ...customOverrides,
            [cat]: Number(e.target.value) || 0
          }),
          style: {
            width: 70,
            background: '#FFFDE7',
            border: '1px solid #C5A95A',
            borderRadius: 3,
            padding: '3px 6px',
            fontFamily: 'Jost,sans-serif',
            fontVariantNumeric: 'tabular-nums',
            fontSize: 12,
            textAlign: 'right',
            color: '#1C3D2E',
            outline: 'none',
            fontWeight: 500
          }
        }) : /*#__PURE__*/React.createElement("span", null, fmt(val)),
        align: 'right',
        num: true
      }, {
        content: pctInc.toFixed(1) + '%',
        align: 'right',
        num: true
      }, {
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            height: 5,
            background: 'rgba(28,61,46,0.08)',
            borderRadius: 1,
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: share * 100 + '%',
            height: '100%',
            background: cat === 'Savings' ? 'var(--pal-accent, #C5A95A)' : cat === 'Debt Payments' ? '#832f30' : 'var(--pal-primary, #1C3D2E)',
            transition: 'width 220ms'
          }
        }))
      }]
    });
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 10,
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: '16px 22px',
      marginTop: 16
    }
  }, [['MONTHLY INCOME', fmt(income)], ['TOTAL BUDGETED', fmt(total)], [remaining >= 0 ? 'UNALLOCATED' : 'OVER BUDGET', (remaining >= 0 ? '+' : '−') + fmt(Math.abs(remaining)).replace('$', '$')], ['SAVINGS RATE', pct(savingsRate, 1)]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(250,248,242,0.60)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 22,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums',
      color: i === 2 && remaining < 0 ? '#fca5a5' : i === 2 ? '#86efac' : '#FAF8F2'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Targets feed Dashboard's % of Budget and Health Score's Budget Adherence"
  })));
}
Object.assign(window, {
  GoalsTab,
  BankImportTab,
  StubTab,
  MonthlyBudgetTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/foundation/tabs-actions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/foundation/tabs-analysis.jsx
try { (() => {
/* =====================================================================
   ANALYSIS TABS — Trends, Health Score, Net Worth
   ===================================================================== */

/* ---------- TRENDS ---------- */
function TrendsTab() {
  const all = window.CC_DATA.months_24;
  const [window_, setWindow] = React.useState(6);
  const months = all.slice(-window_);
  const windowLabel = months[0].label + ' – ' + months[months.length - 1].label;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Trends"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: `${months.length} MONTHS · ${windowLabel.toUpperCase()}`
  }, "INCOME VS EXPENSES"), /*#__PURE__*/React.createElement(WindowToggle, {
    value: window_,
    onChange: setWindow
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 22,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(IncomeExpensesChart, {
    months: months
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      marginTop: 14,
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      color: 'rgba(28,61,46,0.75)'
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--pal-primary, #1C3D2E)",
    label: "Income"
  }), /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--pal-mid, #2D5C45)",
    label: "Expenses",
    pattern: "diag"
  }), /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--pal-accent, #C5A95A)",
    label: "Savings Rate",
    line: true
  }))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: `${months.length}-MONTH WINDOW`
  }, "INCOME VS EXPENSES \xB7 TABLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1fr', '1fr', '1fr', '1fr', '1fr'],
    cols: [{
      label: 'Month'
    }, {
      label: 'Income',
      align: 'right'
    }, {
      label: 'Expenses',
      align: 'right'
    }, {
      label: 'Net Cash Flow',
      align: 'right'
    }, {
      label: 'Savings Rate',
      align: 'right'
    }]
  }), months.map((m, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: m.label,
    widths: ['1fr', '1fr', '1fr', '1fr', '1fr'],
    zebra: i % 2 === 1,
    last: false,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, m.label)
    }, {
      content: fmt(m.income),
      align: 'right',
      num: true
    }, {
      content: fmt(m.expenses),
      align: 'right',
      num: true
    }, {
      content: fmt(m.net, {
        signed: true
      }),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: pct(m.savings_rate),
      align: 'right',
      num: true
    }]
  })), /*#__PURE__*/React.createElement(DataRow, {
    widths: ['1fr', '1fr', '1fr', '1fr', '1fr'],
    zebra: false,
    last: true,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          fontFamily: 'Jost,sans-serif',
          fontSize: 10,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--pal-mid, #2D5C45)'
        }
      }, months.length, "-Month Total")
    }, {
      content: fmt(months.reduce((a, m) => a + m.income, 0)),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: fmt(months.reduce((a, m) => a + m.expenses, 0)),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: fmt(months.reduce((a, m) => a + m.net, 0), {
        signed: true
      }),
      align: 'right',
      num: true,
      bold: true
    }, {
      content: pct(months.reduce((a, m) => a + m.savings_rate, 0) / months.length),
      align: 'right',
      num: true,
      bold: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "WITH 6-MONTH SPARKLINES"
  }, "SPENDING BY CATEGORY"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12
    }
  }, [{
    cat: 'Food & Dining',
    vals: [380, 540, 685, 760, 855, 922],
    delta: '+142%',
    status: 'over'
  }, {
    cat: 'Subscriptions',
    vals: [48, 78, 95, 124, 162, 180],
    delta: '+275%',
    status: 'over'
  }, {
    cat: 'Housing',
    vals: [2400, 2400, 2400, 2400, 2400, 2400],
    delta: '0%',
    status: 'on'
  }, {
    cat: 'Transportation',
    vals: [520, 540, 510, 580, 555, 540],
    delta: '+4%',
    status: 'on'
  }, {
    cat: 'Shopping',
    vals: [320, 410, 460, 520, 580, 618],
    delta: '+93%',
    status: 'fair'
  }, {
    cat: 'Utilities',
    vals: [340, 355, 360, 370, 365, 360],
    delta: '+6%',
    status: 'on'
  }, {
    cat: 'Entertainment',
    vals: [180, 195, 210, 225, 240, 255],
    delta: '+42%',
    status: 'fair'
  }, {
    cat: 'Personal Care',
    vals: [160, 175, 170, 165, 175, 180],
    delta: '+12%',
    status: 'on'
  }].map((r, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: r.cat,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1.8fr 0.7fr 0.6fr',
      gap: 14,
      alignItems: 'center',
      padding: '10px 14px',
      background: i % 2 === 1 ? 'var(--pal-zebra, #EEF2EC)' : 'transparent',
      borderBottom: i < arr.length - 1 ? '1px solid rgba(28,61,46,0.06)' : 0,
      fontFamily: 'Jost,sans-serif',
      fontSize: 12.5,
      color: 'var(--pal-primary, #1C3D2E)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, r.cat), /*#__PURE__*/React.createElement(Sparkline, {
    vals: r.vals,
    status: r.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600,
      textAlign: 'right',
      color: r.status === 'over' ? '#832f30' : r.status === 'fair' ? '#7d6420' : '#0F7A37'
    }
  }, r.delta), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    status: r.status
  })))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true
  }, months.length, "-MONTH KEY INSIGHTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 18,
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, (() => {
    const sorted = [...months].sort((a, b) => b.savings_rate - a.savings_rate);
    const bestSave = sorted[0];
    const sortedI = [...months].sort((a, b) => b.income - a.income);
    const highIncome = sortedI[0];
    const sortedE = [...months].sort((a, b) => a.expenses - b.expenses);
    const lowExp = sortedE[0];
    const avgI = months.reduce((a, m) => a + m.income, 0) / months.length;
    const avgE = months.reduce((a, m) => a + m.expenses, 0) / months.length;
    const avgSr = months.reduce((a, m) => a + m.savings_rate, 0) / months.length;
    const totalSaved = months.reduce((a, m) => a + m.net, 0);
    return [['BEST SAVINGS MONTH', bestSave.label, pct(bestSave.savings_rate) + ' rate'], ['HIGHEST INCOME', highIncome.label, fmt(highIncome.income)], ['LOWEST EXPENSE', lowExp.label, fmt(lowExp.expenses)], ['AVG MONTHLY INCOME', fmt(avgI), months.length + '-mo'], ['AVG MONTHLY EXP', fmt(avgE), months.length + '-mo'], ['AVG SAVINGS RATE', pct(avgSr), months.length + '-mo'], ['TOTAL SAVED', fmt(totalSaved), months.length + '-mo']];
  })().map(([k, v, sub]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10,
      borderBottom: '1px solid rgba(28,61,46,0.06)',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 13.5,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 3
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--pal-primary, #1C3D2E)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Trends update automatically as transactions are imported"
  })));
}

/* ---------- Income vs Expenses chart (grouped bar + line overlay) ---------- */
function IncomeExpensesChart({
  months
}) {
  const W = 880,
    H = 240,
    pad = {
      l: 56,
      r: 50,
      t: 12,
      b: 32
    };
  const innerW = W - pad.l - pad.r,
    innerH = H - pad.t - pad.b;
  const maxY = Math.max(...months.flatMap(m => [m.income, m.expenses])) * 1.05;
  const minR = 0,
    maxR = 50;
  const bw = innerW / months.length;
  // Tighten gap when there are many months
  const gap = months.length <= 6 ? 14 : months.length <= 12 ? 6 : 3;
  const bw2 = Math.max(2, (bw - gap) / 2);
  // Show every Nth label only
  const labelEvery = months.length <= 6 ? 1 : months.length <= 12 ? 2 : 4;
  const linePts = months.map((m, i) => {
    const x = pad.l + i * bw + bw / 2;
    const y = pad.t + innerH - (m.savings_rate - minR) / (maxR - minR) * innerH;
    return [x, y];
  });
  const path = 'M ' + linePts.map(p => p.join(' ')).join(' L ');
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "xMidYMid meet",
    style: {
      display: 'block'
    }
  }, [0, 0.25, 0.5, 0.75, 1].map(t => {
    const y = pad.t + innerH - t * innerH;
    const v = maxY * t;
    return /*#__PURE__*/React.createElement("g", {
      key: t
    }, /*#__PURE__*/React.createElement("line", {
      x1: pad.l,
      y1: y,
      x2: W - pad.r,
      y2: y,
      stroke: "rgba(28,61,46,0.08)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: pad.l - 8,
      y: y + 4,
      textAnchor: "end",
      style: {
        fontFamily: 'Jost,sans-serif',
        fontSize: 10,
        fill: 'rgba(28,61,46,0.55)'
      }
    }, "$", (v / 1000).toFixed(0), "k"));
  }), months.map((m, i) => {
    const x = pad.l + i * bw + gap / 2;
    const hi = m.income / maxY * innerH;
    const he = m.expenses / maxY * innerH;
    const showLabel = i % labelEvery === 0 || i === months.length - 1;
    return /*#__PURE__*/React.createElement("g", {
      key: m.label + i
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: pad.t + innerH - hi,
      width: bw2,
      height: hi,
      fill: "var(--pal-primary, #1C3D2E)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: x + bw2 + 1,
      y: pad.t + innerH - he,
      width: bw2,
      height: he,
      fill: "var(--pal-mid, #2D5C45)",
      opacity: "0.78"
    }), showLabel && /*#__PURE__*/React.createElement("text", {
      x: pad.l + i * bw + bw / 2,
      y: H - 10,
      textAnchor: "middle",
      style: {
        fontFamily: 'Jost,sans-serif',
        fontSize: 10,
        fill: 'rgba(28,61,46,0.65)',
        letterSpacing: '0.04em'
      }
    }, m.short));
  }), [0, 0.25, 0.5, 0.75, 1].map(t => {
    const y = pad.t + innerH - t * innerH;
    return /*#__PURE__*/React.createElement("text", {
      key: t,
      x: W - pad.r + 8,
      y: y + 4,
      style: {
        fontFamily: 'Jost,sans-serif',
        fontSize: 10,
        fill: 'var(--pal-accent, #C5A95A)'
      }
    }, (maxR * t).toFixed(0), "%");
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "var(--pal-accent, #C5A95A)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), linePts.map((p, i) => {
    const showDot = months.length <= 12 || i % 4 === 0 || i === linePts.length - 1;
    return showDot ? /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p[0],
      cy: p[1],
      r: months.length <= 6 ? 4 : 3,
      fill: "var(--pal-bg, #FAF8F2)",
      stroke: "var(--pal-accent, #C5A95A)",
      strokeWidth: "2"
    }) : null;
  }));
}

/* ---------- Sparkline ---------- */
function Sparkline({
  vals,
  status,
  w = 140,
  h = 28
}) {
  const min = Math.min(...vals),
    max = Math.max(...vals);
  const span = max - min || 1;
  const points = vals.map((v, i) => [i / (vals.length - 1) * (w - 4) + 2, h - 2 - (v - min) / span * (h - 8)]);
  const path = 'M ' + points.map(p => p.join(' ')).join(' L ');
  const fill = status === 'over' ? '#832f30' : status === 'fair' ? '#C5A95A' : '#2D5C45';
  const area = `M ${points[0][0]} ${h - 2} L ` + points.map(p => p.join(' ')).join(' L ') + ` L ${points[points.length - 1][0]} ${h - 2} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: fill,
    opacity: "0.10"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: fill,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), points.map((p, i) => i === points.length - 1 ? /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "2.5",
    fill: fill
  }) : null));
}
function Legend({
  swatch,
  label,
  line,
  pattern
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, line ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 18,
      height: 0,
      borderTop: '2.5px solid ' + swatch
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 14,
      height: 14,
      background: swatch,
      opacity: pattern ? 0.78 : 1,
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}

/* ---------- Window toggle: 6 / 12 / 24 months ---------- */
function WindowToggle({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.18)',
      borderRadius: 3,
      padding: 2,
      fontFamily: 'Jost,sans-serif'
    }
  }, [6, 12, 24].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => onChange(n),
    style: {
      background: value === n ? 'var(--pal-primary, #1C3D2E)' : 'transparent',
      color: value === n ? '#FAF8F2' : 'rgba(28,61,46,0.65)',
      border: 0,
      borderRadius: 2,
      padding: '5px 14px',
      fontFamily: 'inherit',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, n, " mo")));
}

/* ---------- HEALTH SCORE ---------- */
function HealthScoreTab() {
  const h = window.CC_DATA.health;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Health Score"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "VIEWING: SEE MONTH SELECTOR ON DASHBOARD"
  }, "COMPOSITE HEALTH SCORE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 22,
      marginTop: 14,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "YOUR SCORE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 92,
      lineHeight: 1,
      color: '#FAF8F2'
    }
  }, h.composite), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, h.grade)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 300,
      color: '#FAF8F2',
      opacity: 0.65,
      marginTop: 4
    }
  }, "out of 100 \xB7 weighted composite"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      height: 14,
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 45,
      background: '#832f30'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 15,
      background: '#C8873A'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 15,
      background: '#C5A95A'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 15,
      background: '#2D5C45'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 10,
      background: '#16a34a'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 14,
      marginTop: -14,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${h.composite}%`,
      top: -3,
      transform: 'translateX(-50%)',
      width: 2,
      height: 20,
      background: '#FAF8F2',
      boxShadow: '0 0 0 2px #1C3D2E'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      fontFamily: 'Jost,sans-serif',
      fontSize: 9,
      color: 'rgba(250,248,242,0.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Critical"), /*#__PURE__*/React.createElement("span", null, "Needs Work"), /*#__PURE__*/React.createElement("span", null, "Fair"), /*#__PURE__*/React.createElement("span", null, "Good"), /*#__PURE__*/React.createElement("span", null, "Excellent"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "\u26A1 BIGGEST OPPORTUNITY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.15,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 10
    }
  }, h.biggest_opportunity.split('—')[0].trim()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'rgba(28,61,46,0.75)',
      marginTop: 10
    }
  }, h.biggest_opportunity.split('—')[1] ? h.biggest_opportunity.split('—')[1].trim() : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, "If you fix this"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 2
    }
  }, "72 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(28,61,46,0.30)'
    }
  }, "\u2192"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#0F7A37'
    }
  }, "78"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'Jost,sans-serif',
      fontSize: 11.5,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.65)',
      borderLeft: '1px solid rgba(28,61,46,0.10)',
      paddingLeft: 18
    }
  }, "Cut Food & Dining by 25% next month to hit the 80 \"Excellent\" threshold by Q3.")))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "WHAT'S DRIVING YOUR SCORE"
  }, "FIVE INDICATORS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '1.5fr', '0.5fr', '0.7fr', '1.5fr'],
    cols: [{
      label: 'Indicator'
    }, {
      label: 'Your Value',
      align: 'right'
    }, {
      label: 'Score'
    }, {
      label: 'Wt',
      align: 'right'
    }, {
      label: 'Status',
      align: 'right'
    }, {
      label: 'Benchmark'
    }]
  }), h.indicators.map((ind, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: ind.name,
    widths: ['1.4fr', '0.9fr', '1.5fr', '0.5fr', '0.7fr', '1.5fr'],
    zebra: i % 2 === 1,
    last: i === h.indicators.length - 1,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, ind.name)
    }, {
      content: ind.value,
      align: 'right',
      num: true
    }, {
      content: /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement(Progress, {
        pct: ind.score,
        status: ind.status,
        height: 6
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 600,
          minWidth: 30,
          textAlign: 'right'
        }
      }, ind.score))
    }, {
      content: ind.weight + '%',
      align: 'right',
      num: true
    }, {
      content: /*#__PURE__*/React.createElement(Chip, {
        status: ind.status
      }),
      align: 'right'
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontWeight: 300,
          fontSize: 11.5,
          color: 'rgba(28,61,46,0.6)'
        }
      }, ind.bench)
    }]
  }))), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Weights are editable in the Health Score tab"
  })));
}

/* ---------- NET WORTH ---------- */
function NetWorthTab() {
  const nw = window.CC_DATA.net_worth;
  const investTotal = nw.investments.reduce((a, b) => a + b.value, 0);
  const budgetAssets = nw.budget_accounts.filter(a => a.balance > 0).reduce((a, b) => a + b.balance, 0);
  const budgetLiabs = -nw.budget_accounts.filter(a => a.balance < 0).reduce((a, b) => a + b.balance, 0);

  // Sparkline data (synthetic 6-mo: from current minus monthly net deltas)
  const nwHistory = [205400, 210800, 214900, 217200, 219700, 222640];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Net Worth"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      padding: 28,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 24,
      alignItems: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "NET WORTH SNAPSHOT \xB7 MAY 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1,
      color: '#FAF8F2',
      marginTop: 8,
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(nw.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 13,
      color: '#86efac',
      fontWeight: 500,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "\u2191 ", fmt(nw.change_mo, {
    signed: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      opacity: 0.65
    }
  }, "this month"))), /*#__PURE__*/React.createElement(NetWorthSparkline, {
    vals: nwHistory
  }), /*#__PURE__*/React.createElement(BigNum, {
    label: "TOTAL ASSETS",
    val: fmt(nw.assets)
  }), /*#__PURE__*/React.createElement(BigNum, {
    label: "TOTAL LIABILITIES",
    val: fmt(nw.liabilities)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "AUTO-PULLED FROM ACCOUNTS"
  }, "BUDGET ACCOUNTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.6fr', '0.8fr', '0.7fr', '0.9fr'],
    cols: [{
      label: 'Account'
    }, {
      label: 'Type'
    }, {
      label: 'Owner'
    }, {
      label: 'Balance',
      align: 'right'
    }]
  }), nw.budget_accounts.map((a, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: a.name,
    widths: ['1.6fr', '0.8fr', '0.7fr', '0.9fr'],
    zebra: i % 2 === 1,
    last: i === nw.budget_accounts.length - 1,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, a.name)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11,
          color: 'rgba(28,61,46,0.65)'
        }
      }, a.type)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11,
          color: 'rgba(28,61,46,0.65)'
        }
      }, a.owner)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          color: a.balance < 0 ? '#832f30' : 'var(--pal-primary, #1C3D2E)',
          fontWeight: a.balance < 0 ? 600 : 500
        }
      }, fmt(a.balance, {
        signed: a.balance < 0
      })),
      align: 'right',
      num: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 0.8fr 0.7fr 0.9fr',
      background: 'var(--pal-mid, #2D5C45)',
      color: '#FAF8F2',
      padding: '10px 12px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Budget Net"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(budgetAssets - budgetLiabs))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "ENTER BALANCES DIRECTLY"
  }, "INVESTMENTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.6fr', '1fr', '0.9fr'],
    cols: [{
      label: 'Account / Fund'
    }, {
      label: 'Type'
    }, {
      label: 'Current Value',
      align: 'right'
    }]
  }), nw.investments.map((inv, i) => /*#__PURE__*/React.createElement(DataRow, {
    key: inv.name,
    widths: ['1.6fr', '1fr', '0.9fr'],
    zebra: i % 2 === 1,
    last: i === nw.investments.length - 1,
    cols: [{
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, inv.name)
    }, {
      content: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'Jost,sans-serif',
          fontSize: 11,
          color: 'rgba(28,61,46,0.65)'
        }
      }, inv.type)
    }, {
      content: fmt(inv.value),
      align: 'right',
      num: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 0.9fr',
      background: 'var(--pal-mid, #2D5C45)',
      color: '#FAF8F2',
      padding: '10px 12px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Total Investments"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(investTotal)))))), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Update account balances monthly \xB7 Investments entered directly"
  })));
}
function BigNum({
  label,
  val
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(250,248,242,0.60)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 26,
      color: '#FAF8F2',
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums'
    }
  }, val));
}
function NetWorthSparkline({
  vals
}) {
  const W = 200,
    H = 80;
  const min = Math.min(...vals),
    max = Math.max(...vals);
  const span = max - min || 1;
  const points = vals.map((v, i) => [i / (vals.length - 1) * (W - 8) + 4, H - 6 - (v - min) / span * (H - 16)]);
  const path = 'M ' + points.map(p => p.join(' ')).join(' L ');
  const area = `M ${points[0][0]} ${H - 2} L ` + points.map(p => p.join(' ')).join(' L ') + ` L ${points[points.length - 1][0]} ${H - 2} Z`;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      color: 'rgba(250,248,242,0.60)'
    }
  }, "6-MONTH TREND"), /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    style: {
      marginTop: 4,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "#C5A95A",
    opacity: "0.20"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "#C5A95A",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), points.map((p, i) => i === points.length - 1 ? /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "4",
    fill: "#C5A95A",
    stroke: "#1C3D2E",
    strokeWidth: "2"
  }) : /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "2",
    fill: "#C5A95A",
    opacity: "0.55"
  }))));
}
Object.assign(window, {
  TrendsTab,
  HealthScoreTab,
  NetWorthTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/foundation/tabs-analysis.jsx", error: String((e && e.message) || e) }); }

// ui_kits/foundation/tabs-overview.jsx
try { (() => {
/* =====================================================================
   STARTING TABS — Start Here + Dashboard
   Hero tabs. These are what a buyer sees first and what sells the
   product in Etsy screenshots.
   ===================================================================== */

/* ---------- START HERE ---------- */
function StartHereTab() {
  const palettes = window.CC_DATA.palettes;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Start Here"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '36px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    sub: "WELCOME"
  }, "LIFE, ORGANIZED."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 38,
      color: 'var(--pal-primary, #1C3D2E)',
      lineHeight: 1.1,
      marginTop: 12
    }
  }, "Open it. Add your information. Get clear."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 14.5,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.55,
      marginTop: 14,
      maxWidth: 620
    }
  }, "The Foundation is a 14-tab budget system designed to work out of the box. No formulas to write. No app to learn. Just the numbers, organized.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 6,
      padding: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "24 PALETTES INCLUDED"
  }, "CHOOSE YOUR THEME"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--pal-primary, #1C3D2E)',
      marginTop: 6
    }
  }, "Pick a palette. We'll repaint everything.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "24 palettes \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8,1fr)',
      gap: 8
    }
  }, palettes.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      overflow: 'hidden',
      background: p.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.primary
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.mid
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: p.accent
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 8px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      color: '#1C3D2E',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true,
    sub: "5 STEPS TO GET STARTED"
  }, "SETUP GUIDE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 10,
      marginTop: 14
    }
  }, [{
    n: 1,
    t: 'Install the Script',
    d: 'Extensions → Apps Script → paste ColumnCo_Foundation_v2.gs. A 💳 Column & Co. menu appears.'
  }, {
    n: 2,
    t: 'Set Up Accounts',
    d: 'Add every bank account, credit card, and savings account. Enter current balances.'
  }, {
    n: 3,
    t: 'Import Transactions',
    d: 'Type the account name in C6. Paste your bank CSV. Run Import. Done.'
  }, {
    n: 4,
    t: 'Set Your Goals',
    d: 'Pick a Type, a Category or Account, a Target. Progress tracks automatically.'
  }, {
    n: 5,
    t: 'Explore Your Data',
    d: 'Dashboard, Trends, Health Score, and Net Worth update as you import.'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: '#FAF8F2',
      border: '1px solid rgba(28,61,46,0.10)',
      borderRadius: 4,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 999,
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, "Step ", s.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--pal-primary, #1C3D2E)',
      marginBottom: 6
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 12,
      fontWeight: 300,
      color: 'rgba(28,61,46,0.75)',
      lineHeight: 1.45
    }
  }, s.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 6,
      padding: '28px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28,
      alignItems: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.20em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "LLM-READY \xB7 BUILT FOR AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.15,
      marginTop: 10
    }
  }, "Ask Claude or ChatGPT to read your sheet."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontWeight: 300,
      fontSize: 13.5,
      lineHeight: 1.55,
      marginTop: 12,
      opacity: 0.85
    }
  }, "A hidden ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'rgba(250,248,242,0.12)',
      padding: '1px 6px',
      borderRadius: 3,
      fontSize: 12
    }
  }, "_Schema"), " tab documents every column for an AI. Copy a prompt below, paste in your favorite assistant, attach your sheet. You get insights in seconds.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(250,248,242,0.06)',
      border: '1px solid rgba(197,169,90,0.30)',
      borderRadius: 4,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--pal-accent, #C5A95A)',
      marginBottom: 8
    }
  }, "PROMPT \xB7 COPY & PASTE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'ui-monospace, SF Mono, Menlo, monospace',
      fontSize: 12,
      lineHeight: 1.55,
      color: '#FAF8F2'
    }
  }, "\"Find every category where I'm trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel.\""))), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Thank you for your purchase \xB7 Questions? columnandco.com"
  })));
}

/* ---------- DASHBOARD ---------- */
function DashboardTab() {
  const d = window.CC_DATA;
  const top = d.top_spending;
  const breakdown = d.breakdown;
  const totalSpend = breakdown.reduce((a, b) => a + b.amount, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SheetHeader, {
    tab: "Dashboard"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-bg, #FAF8F2)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "VIEWING MONTH"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--pal-primary, #1C3D2E)'
    }
  }, "May 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      color: 'rgba(28,61,46,0.55)'
    }
  }, "\u2190 change to update all figures"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, d.months.slice(-6).map(m => /*#__PURE__*/React.createElement("span", {
    key: m.label,
    style: {
      padding: '6px 11px',
      borderRadius: 2,
      background: m.label === 'May 2026' ? 'var(--pal-primary, #1C3D2E)' : 'transparent',
      color: m.label === 'May 2026' ? '#FAF8F2' : 'rgba(28,61,46,0.65)',
      fontFamily: 'Jost,sans-serif',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.06em',
      cursor: 'pointer',
      border: m.label === 'May 2026' ? 0 : '1px solid rgba(28,61,46,0.15)'
    }
  }, m.short)))), /*#__PURE__*/React.createElement(SectionLabel, {
    gold: true
  }, "KEY METRICS \xB7 MAY 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginTop: 14,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Income",
    value: fmt(d.snapshot.income),
    sub: "vs last month +0.1%",
    accent: "primary"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Total Expenses",
    value: fmt(d.snapshot.expenses),
    sub: "vs last month +1.1%",
    accent: "danger"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Net Cash Flow",
    value: fmt(d.snapshot.net, {
      signed: true
    }),
    sub: "vs last month \u2212$65",
    accent: "primary"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Savings Rate",
    value: pct(d.snapshot.savings_rate),
    sub: "goal: 20%+ \u2014 crushing it",
    accent: "gold"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    dark: true,
    gold: true
  }, "TOP SPENDING \xB7 THIS MONTH"), /*#__PURE__*/React.createElement(ColHeader, {
    widths: ['1.4fr', '0.9fr', '0.9fr', '1.1fr', '0.9fr'],
    cols: [{
      label: 'Category'
    }, {
      label: 'Spent',
      align: 'right'
    }, {
      label: 'Budget',
      align: 'right'
    }, {
      label: '% of Budget'
    }, {
      label: 'Status',
      align: 'right'
    }]
  }), top.map((r, i) => {
    const p = r.spent / r.budget * 100;
    return /*#__PURE__*/React.createElement(DataRow, {
      key: r.cat,
      widths: ['1.4fr', '0.9fr', '0.9fr', '1.1fr', '0.9fr'],
      zebra: i % 2 === 1,
      last: i === top.length - 1,
      cols: [{
        content: /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 500
          }
        }, r.cat)
      }, {
        content: fmt(r.spent),
        align: 'right',
        num: true
      }, {
        content: fmt(r.budget),
        align: 'right',
        num: true
      }, {
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement(Progress, {
          pct: p,
          status: r.status,
          height: 6
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            fontVariantNumeric: 'tabular-nums',
            fontSize: 11,
            color: 'rgba(28,61,46,0.65)',
            minWidth: 34,
            textAlign: 'right'
          }
        }, p.toFixed(0), "%"))
      }, {
        content: /*#__PURE__*/React.createElement(Chip, {
          status: r.status
        }),
        align: 'right'
      }]
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    dark: true,
    gold: true
  }, "MONTH SNAPSHOT"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Income', fmt(d.snapshot.income)], ['Expenses', fmt(d.snapshot.expenses)], ['Net Cash Flow', fmt(d.snapshot.net, {
    signed: true
  })], ['Savings Rate', pct(d.snapshot.savings_rate)], ['Avg Daily Spend', fmt(d.snapshot.avg_daily)], ['Transactions', d.snapshot.transactions + ''], ['Largest Expense', fmt(d.snapshot.largest_expense) + ' · Rent']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '1px solid rgba(28,61,46,0.06)',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(28,61,46,0.55)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--pal-primary, #1C3D2E)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid rgba(28,61,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    dark: true,
    gold: true
  }, "SPENDING BREAKDOWN"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 18,
      padding: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    data: breakdown,
    total: totalSpend
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 6
    }
  }, breakdown.slice(0, 12).map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.cat,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'Jost,sans-serif',
      fontSize: 11.5,
      color: '#1C3D2E'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: donutColor(i),
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      opacity: 0.85
    }
  }, s.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 500
    }
  }, (s.amount / totalSpend * 100).toFixed(0), "%")))))), /*#__PURE__*/React.createElement(AiInsightsPanel, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    note: "Do not distribute without license"
  })));
}

/* ---------- DONUT chart ---------- */
function donutColor(i) {
  // 12-step palette derived from Forest → Canopy → Cream + Gold accent
  const ramp = ['#1C3D2E', '#2D5C45', '#3C7558', '#4F8D6B', '#67A682', '#8FAF7E', '#C5A95A', '#9E7E3F', '#7d6420', '#5e1f1f', '#832f30', '#C8873A'];
  return ramp[i % ramp.length];
}
function Donut({
  data,
  total,
  size = 180
}) {
  // build SVG arc segments
  const r = size / 2 - 10,
    cx = size / 2,
    cy = size / 2;
  let acc = 0;
  const arcs = data.map((d, i) => {
    const a0 = acc / total * 2 * Math.PI - Math.PI / 2;
    acc += d.amount;
    const a1 = acc / total * 2 * Math.PI - Math.PI / 2;
    const x0 = cx + r * Math.cos(a0),
      y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1),
      y1 = cy + r * Math.sin(a1);
    const large = a1 - a0 > Math.PI ? 1 : 0;
    return {
      path: `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`,
      color: donutColor(i)
    };
  });
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      display: 'block'
    }
  }, arcs.map((a, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: a.path,
    fill: a.color
  })), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r * 0.58,
    fill: "var(--pal-bg, #FAF8F2)"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy - 6,
    textAnchor: "middle",
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 9,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      fill: 'rgba(28,61,46,0.55)'
    }
  }, "TOTAL"), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 18,
    textAnchor: "middle",
    style: {
      fontFamily: "'Playfair Display',serif",
      fontWeight: 700,
      fontSize: 22,
      fill: 'var(--pal-primary, #1C3D2E)'
    }
  }, fmt(total)));
}

/* ---------- AI Insights panel — automatically computed callouts ---------- */
function AiInsightsPanel() {
  const insights = [{
    tag: 'LEAK',
    icon: '⚡',
    title: 'Dining is creeping up.',
    body: 'Dec → May: $380 → $922 per month. That\'s $9.7K/yr on dining if it holds.',
    status: 'over'
  }, {
    tag: 'SUBS',
    icon: '⚡',
    title: '12 active subscriptions.',
    body: 'You added 9 in the last 6 months. Hidden cost: $132/mo.',
    status: 'fair'
  }, {
    tag: 'WIN',
    icon: '✓',
    title: 'Emergency fund is healthy.',
    body: '3.3 months of expenses parked in Ally Savings. Above your 3-month goal.',
    status: 'on'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pal-primary, #1C3D2E)',
      color: '#FAF8F2',
      borderRadius: 4,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 14px',
      fontFamily: 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: 10.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--pal-mid, #2D5C45)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 3,
      height: 14,
      background: 'var(--pal-accent, #C5A95A)'
    }
  }), "AUTO INSIGHTS \xB7 WHAT THE NUMBERS SAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, insights.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.title,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 2,
      background: i.status === 'on' ? 'rgba(22,163,74,0.18)' : i.status === 'fair' ? 'rgba(197,169,90,0.20)' : 'rgba(131,47,48,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: i.status === 'on' ? '#86efac' : i.status === 'fair' ? '#C5A95A' : '#fca5a5',
      fontSize: 18
    }
  }, i.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontStyle: 'italic',
      fontSize: 15,
      lineHeight: 1.25
    }
  }, i.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Jost,sans-serif',
      fontSize: 11.5,
      fontWeight: 300,
      lineHeight: 1.5,
      opacity: 0.85,
      marginTop: 4
    }
  }, i.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      borderTop: '1px solid rgba(250,248,242,0.10)',
      fontFamily: 'Jost,sans-serif',
      fontSize: 10,
      letterSpacing: '0.12em',
      color: 'var(--pal-accent, #C5A95A)'
    }
  }, "Pipe these into Claude / ChatGPT for a deeper read \u2192"));
}
Object.assign(window, {
  StartHereTab,
  DashboardTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/foundation/tabs-overview.jsx", error: String((e && e.message) || e) }); }

})();

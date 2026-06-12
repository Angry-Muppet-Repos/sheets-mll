/* =====================================================================
   Atoms shared across all Workbench tabs.
   Copied from design/ui_kits/foundation/components.jsx — same atoms,
   product strings re-pointed at The Workbench v1, plus a YellowInput atom
   (the Sales Log and Products tabs lean on editable cells).
   Loaded as a Babel script tag — exports to window.
   ===================================================================== */

const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Section labels (caps, tracked-out, gold-stripe optional) ---- */
function SectionLabel({ children, gold = false, dark = false, sub = '' }) {
  const bg = dark ? 'var(--pal-mid, #2D5C45)' : 'transparent';
  const color = dark ? '#FAF8F2' : 'var(--pal-mid, #2D5C45)';
  return (
    <div style={{ background: bg, color, padding: dark ? '7px 14px' : 0, fontFamily: 'Jost,sans-serif', fontWeight: 500, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10 }}>
      {gold && <span style={{ display: 'inline-block', width: 3, height: 14, background: 'var(--pal-accent, #C5A95A)' }}></span>}
      <span>{children}</span>
      {sub && <span style={{ color: 'rgba(28,61,46,0.45)', fontWeight: 300, letterSpacing: '0.06em', marginLeft: 6 }}>· {sub}</span>}
    </div>
  );
}

/* ---------- KPI Card ---- */
function KpiCard({ label, value, sub, accent = 'primary', big = true }) {
  // accent: 'primary' | 'mid' | 'gold' | 'danger' | 'success'
  const map = {
    primary: { bg: 'var(--pal-primary, #1C3D2E)', fg: '#FAF8F2' },
    mid:     { bg: 'var(--pal-mid, #2D5C45)',     fg: '#FAF8F2' },
    gold:    { bg: 'var(--pal-accent, #C5A95A)',  fg: '#1C3D2E' },
    danger:  { bg: '#832f30',                     fg: '#FAF8F2' },
    success: { bg: '#16a34a',                     fg: '#FAF8F2' },
  };
  const m = map[accent] || map.primary;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: m.bg, color: m.fg, padding: '8px 14px', fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ background: '#FAF8F2', border: '1px solid rgba(28,61,46,0.10)', borderTop: 0, padding: '14px 14px 12px' }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: big ? 28 : 22, lineHeight: 1, color: 'var(--pal-primary, #1C3D2E)', fontVariantNumeric: 'tabular-nums' }}>{value}</div>
        {sub && <div style={{ marginTop: 7, fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 10.5, color: 'rgba(28,61,46,0.6)', letterSpacing: '0.02em' }}>{sub}</div>}
      </div>
    </div>
  );
}

/* ---------- Status chip ---- */
function Chip({ status, children }) {
  const map = {
    on:   { bg: 'rgba(22,163,74,0.14)',  fg: '#0F7A37', icon: '✓' },
    fair: { bg: 'rgba(197,169,90,0.22)', fg: '#7d6420', icon: '—' },
    warn: { bg: 'rgba(200,135,58,0.20)', fg: '#7a4c1e', icon: '⚠' },
    over: { bg: 'rgba(131,47,48,0.14)',  fg: '#5e1f1f', icon: '✗' },
    ahead:{ bg: 'rgba(28,61,46,0.08)',   fg: 'rgba(28,61,46,0.55)', icon: '·' },
  };
  const m = map[status] || map.on;
  return (
    <span style={{ background: m.bg, color: m.fg, padding: '4px 10px', borderRadius: 999, fontFamily: 'Jost,sans-serif', fontWeight: 500, fontSize: 10.5, letterSpacing: '0.04em', display: 'inline-flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap' }}>
      <span>{m.icon}</span><span>{children || ({on:'On Track',fair:'Fair',over:'Over',ahead:'Ahead'}[status] || status)}</span>
    </span>
  );
}

/* ---------- Progress bar ---- */
function Progress({ pct, status = 'on', height = 8 }) {
  const fill = { on: 'var(--pal-primary, #1C3D2E)', fair: 'var(--pal-accent, #C5A95A)', warn: '#C8873A', over: '#832f30' }[status] || '#1C3D2E';
  const clamped = Math.max(0, Math.min(100, pct));
  return (
    <div style={{ background: 'rgba(28,61,46,0.10)', height, borderRadius: 2, overflow: 'hidden' }}>
      <div style={{ width: clamped + '%', height: '100%', background: fill, transition: 'width 320ms cubic-bezier(0.4,0,0.2,1)' }}></div>
    </div>
  );
}

/* ---------- Money / percent formatters ---- */
function fmt(n, opts = {}) {
  const sign = opts.signed && n > 0 ? '+' : '';
  const abs = Math.abs(n);
  const s = abs.toLocaleString('en-US', { minimumFractionDigits: opts.decimals ?? 0, maximumFractionDigits: opts.decimals ?? 0 });
  return (n < 0 ? '−' : sign) + '$' + s;
}
function pct(n, d=1) { return n.toFixed(d) + '%'; }

/* ---------- Yellow input cell — every buyer-editable field ---- */
function YellowInput({ children, width, align = 'left', small = false }) {
  return (
    <span style={{ background: '#FFFDE7', border: '1px solid #C5A95A', padding: small ? '3px 8px' : '6px 10px', fontFamily: 'Jost,sans-serif', fontSize: small ? 11 : 12.5, color: '#1C3D2E', fontVariantNumeric: 'tabular-nums', display: 'inline-block', minWidth: width, textAlign: align, borderRadius: 2 }}>
      {children}
    </span>
  );
}

/* ---------- Column header bar (Forest stripe) ---- */
function ColHeader({ cols, widths }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: widths.join(' '), background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', fontFamily: 'Jost,sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
      {cols.map((c, i) => (
        <div key={i} style={{ padding: '9px 12px', textAlign: c.align || 'left', borderRight: i < cols.length-1 ? '1px solid rgba(250,248,242,0.10)' : 0 }}>{c.label}</div>
      ))}
    </div>
  );
}

/* ---------- Data row with zebra ---- */
function DataRow({ cols, widths, zebra, last, highlight }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: widths.join(' '), background: highlight ? 'rgba(131,47,48,0.07)' : (zebra ? 'var(--pal-zebra, #EEF2EC)' : '#FAF8F2'), fontFamily: 'Jost,sans-serif', fontSize: 12.5, color: 'var(--pal-primary, #1C3D2E)', borderBottom: last ? 0 : '1px solid rgba(28,61,46,0.06)' }}>
      {cols.map((c, i) => (
        <div key={i} style={{ padding: '10px 12px', textAlign: c.align || 'left', display: 'flex', alignItems: 'center', justifyContent: c.align === 'right' ? 'flex-end' : (c.align === 'center' ? 'center' : 'flex-start'), gap: 8, fontVariantNumeric: c.num ? 'tabular-nums' : 'normal', fontWeight: c.bold ? 600 : 400, opacity: c.muted ? 0.55 : 1 }}>
          {c.content}
        </div>
      ))}
    </div>
  );
}

/* ---------- Brand header inside the sheet (rows 1-3) ---- */
function SheetHeader({ tab, subLabel }) {
  return (
    <div>
      {/* Row 1: brand bar */}
      <div style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src="../../assets/logo-icon-cream.svg" alt="" style={{ height: 30, width: 'auto' }} />
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 16, lineHeight: 1 }}>Column &amp; Co.</div>
            <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 9, letterSpacing: '0.2em', color: 'var(--pal-accent, #C5A95A)', marginTop: 3 }}>LIFE, ORGANIZED.</div>
          </div>
        </div>
        <div style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 300, color: '#FAF8F2', opacity: 0.78, letterSpacing: '0.04em' }}>
          The Workbench v1 &nbsp;·&nbsp; {tab}
        </div>
      </div>
      {/* Row 2: sub-band (optional gold tracked sub-label, right) */}
      <div style={{ background: 'var(--pal-mid, #2D5C45)', height: 22, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 24px' }}>
        {subLabel && <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--pal-accent, #C5A95A)' }}>{subLabel}</span>}
      </div>
      {/* Row 3: accent rule */}
      <div style={{ background: 'var(--pal-accent, #C5A95A)', height: 3 }}></div>
    </div>
  );
}

/* ---------- Footer ---- */
function SheetFooter() {
  return (
    <div style={{ background: 'var(--pal-primary, #1C3D2E)', color: '#FAF8F2', padding: '11px 24px', fontFamily: 'Jost,sans-serif', fontSize: 10.5, fontWeight: 300, letterSpacing: '0.04em', textAlign: 'center', opacity: 0.95 }}>
      The Workbench v1.0 &nbsp;·&nbsp; columnandco.com &nbsp;·&nbsp; Do not distribute without license
    </div>
  );
}

/* ---------- Tab title block (Playfair title + one-line description) ---- */
function TabTitle({ name, desc }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 28, color: 'var(--pal-primary, #1C3D2E)' }}>{name}</div>
      <div style={{ fontFamily: 'Jost,sans-serif', fontWeight: 300, fontSize: 13, color: 'rgba(28,61,46,0.75)', marginTop: 4 }}>{desc}</div>
    </div>
  );
}

Object.assign(window, { SectionLabel, KpiCard, Chip, Progress, fmt, pct, YellowInput, ColHeader, DataRow, SheetHeader, SheetFooter, TabTitle });

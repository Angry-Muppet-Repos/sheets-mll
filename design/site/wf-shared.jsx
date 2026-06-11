/* =====================================================================
   columnandco.com · WIREFRAME · SHARED PRIMITIVES
   Used by every artboard. Defines Nav, Footer, brand chrome bars,
   and small drawing primitives (boxes, lines, chips, annotations).
   ===================================================================== */

/* ---------- Tiny brand mark (3×5 grid logo) ---------- */
function WfMark({ size = 36, light = false }) {
  const base = light ? '#FAF8F2' : '#1C3D2E';
  const c2 = [0.85, 0.45, 0.18, 0.85, 0.45];
  const c3 = [0.45, 0.18, 0.85, 0.18, 0.85];
  const cell = (r, c) => {
    if (c === 0) return { background: '#C5A95A' };
    const o = c === 1 ? c2[r] : c3[r];
    return { background: base, opacity: o };
  };
  const cells = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) cells.push(
    <i key={`${r}-${c}`} style={{ ...cell(r, c), display: 'block' }} />
  );
  return (
    <span style={{
      display: 'inline-grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(5, 1fr)',
      gap: Math.max(1, Math.round(size / 20)),
      width: size, height: size * 5 / 3,
    }}>{cells}</span>
  );
}

/* ---------- Top nav (locked across every page) ---------- */
function WfNav({ active = '' }) {
  const items = ['Problems', 'Bundles', 'Journal'];
  return (
    <div style={{
      height: 78, background: '#1C3D2E', color: '#FAF8F2',
      display: 'flex', alignItems: 'center',
      padding: '0 48px', gap: 48,
      position: 'relative',
    }}>
      {/* Wordmark left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <WfMark size={26} light />
        <span className="pf" style={{
          fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em',
        }}>Column &amp; Co.</span>
      </div>
      {/* Nav items */}
      <div style={{ display: 'flex', gap: 36, flex: 1 }}>
        {items.map(label => (
          <a key={label} className="jt" style={{
            fontSize: 14, fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: active === label ? '#C5A95A' : 'rgba(250,248,242,0.85)',
            textDecoration: active === label ? 'underline solid #C5A95A 2px' : 'none',
            textUnderlineOffset: 8,
            cursor: 'pointer',
          }}>{label}</a>
        ))}
      </div>
      {/* CTA + search + account */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <button className="jt" style={{
          background: '#C5A95A', color: '#1C3D2E',
          border: 'none', borderRadius: 4,
          padding: '11px 18px',
          fontSize: 13, fontWeight: 600, letterSpacing: '0.10em',
          textTransform: 'uppercase', cursor: 'pointer',
        }}>Diagnose →</button>
        <span className="jt" style={{
          fontSize: 13, color: 'rgba(250,248,242,0.65)', letterSpacing: '0.04em',
        }}>⌕ Search</span>
        <span className="jt" style={{
          fontSize: 13, color: 'rgba(250,248,242,0.65)', letterSpacing: '0.04em',
        }}>Account</span>
      </div>
      {/* Gold rule */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: -3, height: 3,
        background: '#C5A95A',
      }} />
    </div>
  );
}

/* ---------- Footer ---------- */
function WfFooter() {
  return (
    <div style={{
      background: '#1C3D2E', color: '#FAF8F2',
      padding: '64px 48px 40px',
      marginTop: 80,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <WfMark size={28} light />
            <span className="pf" style={{ fontSize: 24, fontWeight: 700 }}>Column &amp; Co.</span>
          </div>
          <div className="jt" style={{
            fontSize: 11, fontWeight: 500, letterSpacing: '0.30em',
            color: '#C5A95A', marginBottom: 18,
          }}>LIFE,&nbsp;&nbsp;ORGANIZED.</div>
          <div className="jt" style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.5, maxWidth: 280 }}>
            Tools that make life clearer. One purchase. No subscriptions.
          </div>
        </div>
        {[
          { h: 'Problems', items: ['Money', 'Time', 'Home', 'Work', 'Health', 'Family'] },
          { h: 'Products', items: ['Foundation', 'Bundles', 'Palette Packs', 'Regional'] },
          { h: 'Company', items: ['About', 'Journal', 'Changelog', 'Support'] },
          { h: 'Account', items: ['Library', 'Upgrades', 'Sign in', 'Affiliate program'] },
        ].map(col => (
          <div key={col.h}>
            <div className="jt" style={{
              fontSize: 11, fontWeight: 500, letterSpacing: '0.24em',
              color: '#C5A95A', marginBottom: 16, textTransform: 'uppercase',
            }}>{col.h}</div>
            {col.items.map(it => (
              <div key={it} className="jt" style={{
                fontSize: 13, opacity: 0.75, marginBottom: 8,
              }}>{it}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 56, paddingTop: 24,
        borderTop: '1px solid rgba(250,248,242,0.10)',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11, opacity: 0.5, letterSpacing: '0.10em',
      }}>
        <span>© 2026 Column &amp; Co.  ·  columnandco.com</span>
        <span>Privacy  ·  Terms  ·  Affiliate disclosures</span>
      </div>
    </div>
  );
}

/* ---------- Wireframe primitives ---------- */
function WfBlock({ label, height = 200, dark = false }) {
  return (
    <div className="wf-block" style={{
      height,
      background: dark ? 'var(--wf-block-dark)' : 'var(--wf-block)',
    }}>{label || `${height}px placeholder`}</div>
  );
}

function WfLine({ width = '100%', height = 8 }) {
  return <div className="wf-line" style={{ width, height }} />;
}

function WfChip({ children, accent = false }) {
  return (
    <span className="jt" style={{
      display: 'inline-block',
      fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
      padding: '5px 11px',
      background: accent ? '#C5A95A' : 'rgba(28,61,46,0.06)',
      color: accent ? '#1C3D2E' : '#1C3D2E',
      border: '1px solid ' + (accent ? '#C5A95A' : 'rgba(28,61,46,0.18)'),
      borderRadius: 3,
      textTransform: 'uppercase',
    }}>{children}</span>
  );
}

function WfAnnotation({ children, style }) {
  return <div className="wf-annotation" style={style}>{children}</div>;
}

function WfBreadcrumb({ items }) {
  return (
    <div className="jt" style={{
      fontSize: 12, color: 'rgba(28,61,46,0.55)', letterSpacing: '0.06em',
    }}>
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 && <span style={{ margin: '0 10px', color: 'rgba(28,61,46,0.30)' }}>·</span>}
          <span style={{ color: i === items.length - 1 ? '#1C3D2E' : 'inherit', fontWeight: i === items.length - 1 ? 500 : 300 }}>{it}</span>
        </span>
      ))}
    </div>
  );
}

function WfSectionLabel({ children }) {
  return <div className="wf-section-label">{children}</div>;
}

function WfHeadline({ children, size = 64, style }) {
  return <div className="pf" style={{
    fontSize: size, fontWeight: 700, lineHeight: 1.02,
    color: '#1C3D2E', letterSpacing: '-0.02em', ...style,
  }}>{children}</div>;
}

function WfBody({ children, size = 16, style }) {
  return <div className="jt" style={{
    fontSize: size, fontWeight: 300, lineHeight: 1.5,
    color: 'rgba(28,61,46,0.80)', ...style,
  }}>{children}</div>;
}

function WfButton({ children, primary = true, full = false, size = 'md' }) {
  const pads = size === 'lg' ? '16px 28px' : '12px 20px';
  const fs = size === 'lg' ? 15 : 13;
  return (
    <button className="jt" style={{
      background: primary ? '#1C3D2E' : 'transparent',
      color: primary ? '#FAF8F2' : '#1C3D2E',
      border: '1px solid #1C3D2E',
      borderRadius: 4,
      padding: pads,
      fontSize: fs, fontWeight: 600, letterSpacing: '0.10em',
      textTransform: 'uppercase', cursor: 'pointer',
      width: full ? '100%' : 'auto',
    }}>{children}</button>
  );
}

/* The 6 problems — used everywhere */
const PROBLEMS = [
  { id: 'money',  label: 'Money',  sub: 'Budget chaos. Subscription bloat. Tax surprises.' },
  { id: 'time',   label: 'Time',   sub: 'No room. No focus. Calendar Tetris.' },
  { id: 'home',   label: 'Home',   sub: 'Stuff piles. Maintenance forgotten. Inbox of objects.' },
  { id: 'work',   label: 'Work',   sub: 'Career sprawl. Project chaos. Goals you never set.' },
  { id: 'health', label: 'Health', sub: 'Sleep, appointments, meds, movement — all guessed.' },
  { id: 'family', label: 'Family', sub: 'Shared calendars, money fights, kid logistics.' },
];

Object.assign(window, {
  WfMark, WfNav, WfFooter,
  WfBlock, WfLine, WfChip, WfAnnotation, WfBreadcrumb,
  WfSectionLabel, WfHeadline, WfBody, WfButton,
  PROBLEMS,
});

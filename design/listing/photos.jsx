/* =====================================================================
   COLUMN & CO. · ETSY LISTING PHOTOS · THE FOUNDATION v2.1
   Each Photo* is a fixed 2000×1500 frame inside a DCArtboard.
   ===================================================================== */

/* ---------- Helpers: brand logo mark ---------- */
function GridMark({ size = 80, light = false, gap = 4 }) {
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
    if (col === 0) return { background: gold };
    const ops = col === 1 ? c2 : c3;
    return { background: base, opacity: ops[row] };
  };
  const cells = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 3; c++) {
      cells.push(<i key={`${r}-${c}`} style={cell(r, c)} />);
    }
  }
  return (
    <span className="grid-mark" style={{
      ['--gm-size']: size + 'px',
      ['--gm-gap']: gap + 'px',
    }}>{cells}</span>
  );
}

function Lockup({ size = 80, light = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.45 }}>
      <GridMark size={size} light={light} />
      <div>
        <div className="pf" style={{
          fontWeight: 700, fontSize: size * 0.85, lineHeight: 0.95,
          color: light ? '#FAF8F2' : '#1C3D2E', letterSpacing: '-0.01em',
        }}>Column &amp; Co.</div>
        <div className="jt" style={{
          marginTop: size * 0.18, fontSize: size * 0.22, fontWeight: 500,
          letterSpacing: '0.32em', color: '#C5A95A',
        }}>LIFE,&nbsp;&nbsp;ORGANIZED.</div>
      </div>
    </div>
  );
}

/* =====================================================================
   PHOTO 01 · COVER · Dark / price-forward / AI-curious hook
   ===================================================================== */
function Photo01_Cover() {
  return (
    <div className="ep dark">
      {/* Decorative oversized grid-mark watermark, bottom-right, very faint */}
      <div className="gm-watermark" style={{ right: -180, bottom: -260, transform: 'rotate(0deg)' }}>
        <GridMark size={1100} light gap={36} />
      </div>

      {/* Top row — lockup left, breadcrumb right */}
      <div style={{
        position: 'absolute', top: 90, left: 96, right: 96,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <Lockup size={88} light />
        <div className="jt" style={{
          textAlign: 'right', fontSize: 22, fontWeight: 500,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(250,248,242,0.55)',
        }}>
          The Foundation · v2.1
          <div style={{ height: 6 }} />
          <span style={{ color: '#C5A95A', fontSize: 16, letterSpacing: '0.22em' }}>NEW · 10 BUDGET PROFILES</span>
        </div>
      </div>

      {/* Gold accent rule — brand signature */}
      <div style={{
        position: 'absolute', top: 268, left: 96, right: 96,
        height: 4, background: '#C5A95A',
      }} />

      {/* Hero text — center-left */}
      <div style={{
        position: 'absolute', top: 380, left: 96, right: 760,
      }}>
        <div className="jt" style={{
          fontSize: 18, fontWeight: 500, letterSpacing: '0.32em',
          textTransform: 'uppercase', color: '#C5A95A', marginBottom: 28,
        }}>A 14-TAB BUDGET SYSTEM · GOOGLE SHEETS</div>

        <div className="pf" style={{
          fontSize: 148, fontWeight: 700, lineHeight: 0.96,
          color: '#FAF8F2', letterSpacing: '-0.02em',
        }}>
          Open it.<br/>
          Add your<br/>
          information.<br/>
          <span style={{ color: '#C5A95A' }}>Get clear.</span>
        </div>
      </div>

      {/* Right-side feature stack — vertical pills */}
      <div style={{
        position: 'absolute', top: 380, right: 96, width: 600,
        display: 'flex', flexDirection: 'column', gap: 22,
      }}>
        {[
          { tag: 'THE WEDGE',    h: 'LLM-Ready',                d: 'Ask Claude or ChatGPT to read your sheet directly.' },
          { tag: 'PRODUCT FEAT', h: '24 Palettes',              d: 'Repaint the whole sheet with one click. Twenty-four named palettes.' },
          { tag: 'NEW IN v2.1',  h: '10 Budget Profiles',       d: 'Ramsey · 50/30/20 · FIRE · YNAB · Kakeibo · 5 more.' },
          { tag: 'PRICING',      h: '$35 · One-Time · Owned',   d: 'No subscription. No SaaS. Instant download.' },
        ].map((f, i) => (
          <div key={i} style={{
            background: 'rgba(250,248,242,0.06)',
            border: '1px solid rgba(197,169,90,0.30)',
            borderRadius: 6,
            padding: '22px 26px',
          }}>
            <div className="jt" style={{
              fontSize: 12, fontWeight: 500, letterSpacing: '0.24em',
              color: '#C5A95A',
            }}>{f.tag}</div>
            <div className="pf" style={{
              fontSize: 38, fontWeight: 700, color: '#FAF8F2',
              marginTop: 4, lineHeight: 1.05,
            }}>{f.h}</div>
            <div className="jt" style={{
              fontSize: 17, fontWeight: 300, color: 'rgba(250,248,242,0.75)',
              marginTop: 8, lineHeight: 1.4,
            }}>{f.d}</div>
          </div>
        ))}
      </div>

      {/* Bottom-left footer line */}
      <div style={{
        position: 'absolute', bottom: 70, left: 96, right: 96,
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <div className="jt" style={{
          fontSize: 16, fontWeight: 500, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'rgba(250,248,242,0.50)',
        }}>columnandco.com  ·  Etsy: columnandco  ·  Instant download</div>
        <div className="jt" style={{
          fontSize: 16, fontWeight: 500, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'rgba(250,248,242,0.50)',
        }}>↓  Scroll for more  ↓</div>
      </div>
    </div>
  );
}

/* =====================================================================
   PHOTO 02 · LLM-Ready · the wedge (Cream + Forest panel)
   ===================================================================== */
function Photo02_LlmReady() {
  return (
    <div className="ep" style={{ background: 'var(--parch)' }}>
      {/* Section label + headline (top) */}
      <div style={{ position: 'absolute', top: 110, left: 96, right: 96 }}>
        <div className="jt" style={{
          fontSize: 18, fontWeight: 500, letterSpacing: '0.32em',
          textTransform: 'uppercase', color: 'var(--gold)',
        }}>The wedge · what no other Etsy template does</div>
        <div className="pf" style={{
          fontSize: 132, fontWeight: 700, lineHeight: 0.96,
          color: 'var(--forest)', letterSpacing: '-0.02em', marginTop: 22,
          maxWidth: 1500,
        }}>
          Ask Claude<br/>or ChatGPT to<br/>
          <span style={{ color: 'var(--gold)' }}>read your sheet.</span>
        </div>
      </div>

      {/* Two-column conversation mock — bottom */}
      <div style={{
        position: 'absolute', bottom: 90, left: 96, right: 96,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch',
      }}>
        {/* Left: user prompt card */}
        <div style={{
          background: 'var(--forest)', color: 'var(--parch)', borderRadius: 6,
          padding: '36px 40px', position: 'relative',
        }}>
          <div className="jt" style={{
            fontSize: 13, fontWeight: 500, letterSpacing: '0.28em',
            color: 'var(--gold)',
          }}>PROMPT · COPY &amp; PASTE</div>
          <div className="mono" style={{
            fontSize: 26, lineHeight: 1.5, color: 'var(--parch)',
            marginTop: 18,
          }}>
            "Find every category where I'm trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel."
          </div>
        </div>
        {/* Right: response feeling */}
        <div style={{
          background: 'var(--cream)', borderRadius: 6,
          padding: '36px 40px', border: '1px solid rgba(28,61,46,0.10)',
        }}>
          <div className="jt" style={{
            fontSize: 13, fontWeight: 500, letterSpacing: '0.28em',
            color: 'var(--canopy)',
          }}>WHAT THE AI SEES</div>
          <div className="jt" style={{ marginTop: 18, fontSize: 22, fontWeight: 300, color: 'rgba(28,61,46,0.85)', lineHeight: 1.5 }}>
            A hidden <code className="mono" style={{ background: 'rgba(28,61,46,0.08)', padding: '2px 10px', borderRadius: 3, fontSize: 18 }}>_Schema</code> tab documents every column for an AI. Attach the sheet. Get insights in seconds. The format is built for it.
          </div>
          <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['_Schema tab', '20 categories', '24 months', '8 accounts', '14 tabs'].map(t => (
              <span key={t} className="jt" style={{
                fontSize: 16, fontWeight: 500, letterSpacing: '0.10em',
                padding: '7px 14px', background: 'var(--parch)',
                border: '1px solid rgba(28,61,46,0.18)', borderRadius: 4,
                color: 'var(--forest)',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom-right brand mark */}
      <div style={{ position: 'absolute', bottom: 32, right: 32, opacity: 0.6 }}>
        <GridMark size={28} gap={2} />
      </div>
    </div>
  );
}

/* =====================================================================
   PHOTO 03 · 24 Palettes · visual surface area
   ===================================================================== */
function Photo03_Palettes() {
  // 24 palettes — same data as the foundation kit
  const palettes = [
    ['Light',          '#1C3D2E', '#2D5C45', '#C5A95A', '#FAF8F2'],
    ['Warm Greige',    '#3D2B1F', '#5C4033', '#C8873A', '#FAF6F1'],
    ['Cool Slate',     '#1E3A5F', '#2D5282', '#64748B', '#F8FAFC'],
    ['Sage',           '#2D4A3E', '#3D6455', '#8FAF7E', '#F4F9F1'],
    ['Espresso',       '#2C1810', '#4A2C1A', '#C8873A', '#FAF5F0'],
    ['Maize & Navy',   '#003366', '#004080', '#FFCB05', '#F5F8FF'],
    ['Scarlet & Gray', '#BB0000', '#CC0000', '#808080', '#F9F9F9'],
    ['Orange & Navy',  '#002D6D', '#003D94', '#F47920', '#F5F8FF'],
    ['Green & Gold',   '#154734', '#1A5C43', '#CBA135', '#F3FAF5'],
    ['Purple & Gold',  '#4A1C7C', '#5E2499', '#FFC72C', '#FAF5FF'],
    ['Crimson & White','#9B1B30', '#B52238', '#FFFFFF', '#FFF8F9'],
    ['Garnet & Gold',  '#782F40', '#9B3B52', '#CBA135', '#FFF8F5'],
    ['Forest & White', '#154733', '#1E6048', '#FFFFFF', '#F4FBF6'],
    ['Royal & Gold',   '#002D72', '#003D9C', '#B5A642', '#F0F5FF'],
    ['Silver & Black', '#1A1A1A', '#2D2D2D', '#A8A9AD', '#F5F5F5'],
    ['Midnight',      '#0B1F3A', '#142E55', '#14B8A6', '#F0F4F8'],
    ['Burgundy',      '#5C0A1A', '#7A0E22', '#E8D5B5', '#FAF5F0'],
    ['Mocha',         '#5C3A21', '#7A4F2D', '#D4A574', '#FAF3EA'],
    ['Indigo & Blush','#2E1F6B', '#3D2A8C', '#EAB0B8', '#F7F4FA'],
    ['Pine & Brass',  '#1F3A2E', '#2E5544', '#B8964A', '#F2F8F4'],
    ['Ocean & Coral', '#0F4858', '#166075', '#F47B6A', '#F0F8FA'],
    ['Charcoal & Mint','#2C2C2E', '#44444A', '#A8D5BA', '#F5F5F5'],
    ['Olive & Cream', '#3D4A1F', '#56672E', '#C8B27A', '#F7F4E8'],
    ['Custom',         '#1B2A4A', '#2C3E6B', '#C8873A', '#F3F4F6'],
  ];
  return (
    <div className="ep" style={{ background: 'var(--parch)' }}>
      {/* Top — section label + headline */}
      <div style={{ position: 'absolute', top: 110, left: 96, right: 96 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div className="jt" style={{
              fontSize: 18, fontWeight: 500, letterSpacing: '0.32em',
              textTransform: 'uppercase', color: 'var(--gold)',
            }}>Product feature · unique on Etsy</div>
            <div className="pf" style={{
              fontSize: 132, fontWeight: 700, lineHeight: 0.96,
              color: 'var(--forest)', letterSpacing: '-0.02em', marginTop: 22,
            }}>
              One click.<br/><span style={{ color: 'var(--gold)' }}>Sixteen moods.</span>
            </div>
          </div>
          <div className="jt" style={{
            textAlign: 'right', fontSize: 20, fontWeight: 300, color: 'rgba(28,61,46,0.70)',
            maxWidth: 460, lineHeight: 1.5,
          }}>
            Twenty-four palettes ship with the sheet. Swap any time. Dial it to your taste — once, or every season.
          </div>
        </div>
      </div>

      {/* Palette tile grid — 8 cols × 2 rows */}
      <div style={{
        position: 'absolute', top: 640, left: 96, right: 96,
        display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 22,
      }}>
        {palettes.map(([name, primary, mid, accent, bg]) => (
          <div key={name} style={{
            background: bg, border: '1px solid rgba(28,61,46,0.12)',
            borderRadius: 6, overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', height: 90 }}>
              <div style={{ flex: 1, background: primary }}></div>
              <div style={{ flex: 1, background: mid }}></div>
              <div style={{ flex: 1, background: accent }}></div>
            </div>
            <div className="jt" style={{
              padding: '14px 14px', fontSize: 17, fontWeight: 500, color: 'var(--forest)',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{name}</div>
          </div>
        ))}
      </div>

      {/* Bottom-right brand mark */}
      <div style={{ position: 'absolute', bottom: 32, right: 32, opacity: 0.6 }}>
        <GridMark size={28} gap={2} />
      </div>
    </div>
  );
}

/* =====================================================================
   PHOTO 04 · 10 Budget Methodologies · v2.1 differentiator
   ===================================================================== */
function Photo04_Profiles() {
  const profiles = [
    { name: 'Dave Ramsey',  sub: 'Envelopes · Baby Steps',                                save: '15%' },
    { name: '50/30/20',     sub: "Senator Warren's needs/wants/savings rule",             save: '15%' },
    { name: 'FIRE',         sub: 'Financial Independence · Retire Early',                  save: '51%' },
    { name: 'Zero-Based',   sub: 'Every dollar gets a job · YNAB-style',                  save: '22%' },
    { name: 'Anti-Budget',  sub: 'Paula Pant · Save first, spend the rest',               save: '20%', isNew: true },
    { name: 'Kakeibo',      sub: 'Japanese 4-bucket · Needs/Wants/Culture/Unexpected',    save: '22%', isNew: true },
    { name: 'New Parent',   sub: 'Young family · childcare + 529 priority',               save: '11%', isNew: true },
    { name: 'Self-Employed',sub: '1099 · 25% tax set-aside · biz expenses',               save: '12%', isNew: true },
    { name: 'HCOL Renter',  sub: 'High-cost city · 40% housing · student loans',          save:  '9%', isNew: true },
    { name: 'Custom',       sub: 'You set every target. Live totals.',                    save:  '—'  },
  ];
  return (
    <div className="ep dark">
      {/* Top — section label + headline */}
      <div style={{ position: 'absolute', top: 110, left: 96, right: 96 }}>
        <div className="jt" style={{
          fontSize: 18, fontWeight: 500, letterSpacing: '0.32em',
          textTransform: 'uppercase', color: 'var(--gold)',
        }}>New in v2.1 · five new methodologies</div>
        <div className="pf" style={{
          fontSize: 132, fontWeight: 700, lineHeight: 0.96,
          color: 'var(--parch)', letterSpacing: '-0.02em', marginTop: 22,
        }}>
          Ten methodologies.<br/>
          <span style={{ color: 'var(--gold)' }}>One sheet.</span>
        </div>
      </div>

      {/* Profile list — 2 columns */}
      <div style={{
        position: 'absolute', top: 540, left: 96, right: 96,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 28px',
      }}>
        {profiles.map((p, i) => (
          <div key={p.name} style={{
            background: p.isNew ? 'rgba(197,169,90,0.10)' : 'rgba(250,248,242,0.04)',
            border: '1px solid ' + (p.isNew ? 'rgba(197,169,90,0.45)' : 'rgba(250,248,242,0.14)'),
            borderRadius: 6, padding: '20px 26px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
              <div className="pf" style={{
                fontSize: 32, fontWeight: 700, color: 'var(--gold)',
                width: 50, textAlign: 'right',
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="pf" style={{
                  fontSize: 32, fontWeight: 700, color: 'var(--parch)',
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  {p.name}
                  {p.isNew && <span className="jt" style={{
                    fontSize: 11, fontWeight: 500, letterSpacing: '0.22em',
                    color: 'var(--forest)', background: 'var(--gold)',
                    padding: '3px 8px', borderRadius: 3,
                  }}>NEW</span>}
                </div>
                <div className="jt" style={{
                  fontSize: 15, fontWeight: 300, color: 'rgba(250,248,242,0.65)',
                  marginTop: 4,
                }}>{p.sub}</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="jt" style={{
                fontSize: 28, fontWeight: 500, color: 'var(--parch)',
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em',
              }}>{p.save}</div>
              <div className="jt" style={{
                fontSize: 10, fontWeight: 500, letterSpacing: '0.18em',
                color: 'rgba(250,248,242,0.45)', marginTop: 2,
              }}>SAVINGS RATE</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom-right brand mark */}
      <div style={{ position: 'absolute', bottom: 32, right: 32, opacity: 0.6 }}>
        <GridMark size={28} light gap={2} />
      </div>
    </div>
  );
}

/* =====================================================================
   PLACEHOLDER — for photos 02–08, filled in subsequent iterations
   ===================================================================== */
function Photo02_Placeholder({ n, t }) {
  return (
    <div className="ep" style={{ background: '#FAF8F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: 1200 }}>
        <div className="jt" style={{
          fontSize: 26, fontWeight: 500, letterSpacing: '0.32em',
          textTransform: 'uppercase', color: '#C5A95A',
        }}>Photo {n} · placeholder</div>
        <div className="pf" style={{
          fontSize: 96, fontWeight: 700, color: '#1C3D2E',
          marginTop: 28, lineHeight: 1.05,
        }}>{t}</div>
        <div className="jt" style={{
          fontSize: 22, fontWeight: 300, color: 'rgba(28,61,46,0.6)',
          marginTop: 36, lineHeight: 1.5,
        }}>
          This photo gets filled in the next iteration.<br/>
          Frame is 2000×1500 — Etsy listing dimensions, ready to export as PNG.
        </div>
      </div>
    </div>
  );
}

/* Expose to window so other script tags can use them */
Object.assign(window, {
  GridMark, Lockup,
  Photo01_Cover, Photo02_LlmReady, Photo03_Palettes, Photo04_Profiles,
  Photo02_Placeholder,
});

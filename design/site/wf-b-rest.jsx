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
  return (
    <div className="wf-frame" style={{ width: 1440, position: 'relative' }}>
      <WfNav active="Bundles" />

      <div style={{ padding: '88px 96px 0' }}>
        <WfBreadcrumb items={['Home', 'Bundles', 'Get Your Money Together']} />

        {/* Hero: bundle name + intent */}
        <div style={{ marginTop: 36, position: 'relative' }}>
          <WfAnnotation style={{ top: 0, right: 32, maxWidth: 320 }}>
            Bundles read as prescriptions, not packs.
            Name describes the OUTCOME, not the contents.
            Price is a side effect of the solution.
          </WfAnnotation>
          <WfSectionLabel>Bundle · for money clarity</WfSectionLabel>
          <WfHeadline size={88} style={{ marginTop: 22, maxWidth: 1000 }}>
            Get your money together.
          </WfHeadline>
          <WfBody size={20} style={{ marginTop: 24, maxWidth: 720 }}>
            Three tools that work together. The budget you can see, the subscriptions you forgot, and the goals you'll actually hit. Four hours of setup. The rest of the year on autopilot.
          </WfBody>
        </div>

        {/* "For people who" block */}
        <div style={{ marginTop: 80, padding: '40px 48px', background: 'var(--cream)', position: 'relative' }}>
          <WfAnnotation style={{ top: -20, right: 32, maxWidth: 280 }}>
            Same "this is for you if" pattern as products.
            Diagnosis-led across the whole site.
          </WfAnnotation>
          <div className="jt" style={{ fontSize: 11, letterSpacing: '0.24em', color: 'rgba(28,61,46,0.55)', textTransform: 'uppercase' }}>
            For people who
          </div>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px 48px' }}>
            {[
              "Have tried to budget three times this year already.",
              "Know there's money leaking somewhere but can't point at it.",
              "Want a single afternoon to fix the picture, not a year of therapy.",
              "Are tired of YNAB charging them $99 to remember things.",
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ color: '#C5A95A', fontSize: 22, lineHeight: 1, marginTop: 2 }}>·</span>
                <div className="pf" style={{ fontSize: 20, fontWeight: 400, fontStyle: 'italic', color: '#1C3D2E', lineHeight: 1.4 }}>
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bundle contents — 3 products + price math */}
        <div style={{ marginTop: 96, position: 'relative' }}>
          <WfAnnotation style={{ top: 0, right: 32, maxWidth: 260 }}>
            Shows what's in the bundle.
            Each product is its own link — buyers can also buy individually.
          </WfAnnotation>
          <WfSectionLabel>What's in the bundle</WfSectionLabel>
          <div className="pf" style={{ fontSize: 40, fontWeight: 700, color: '#1C3D2E', marginTop: 14 }}>
            Three tools. One purchase.
          </div>

          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
            {[
              { num: '01', name: 'The Foundation', sub: 'A 14-tab budget system. The picture.', price: '$35' },
              { num: '02', name: 'Subscription Audit', sub: 'Finds the eight you forgot.', price: '$15' },
              { num: '03', name: 'Goals Add-on', sub: 'Real linkage. Live forecasts.', price: '$19' },
            ].map(p => (
              <div key={p.num} className="wf-card" style={{ padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  <span className="pf" style={{ fontSize: 40, fontWeight: 700, color: '#C5A95A', letterSpacing: '-0.04em', lineHeight: 1 }}>{p.num}</span>
                  <span className="pf" style={{ fontSize: 20, fontWeight: 700, color: 'rgba(28,61,46,0.45)' }}>{p.price}</span>
                </div>
                <WfBlock label={`Product shot · ${p.name}`} height={200} />
                <div className="pf" style={{ fontSize: 26, fontWeight: 700, color: '#1C3D2E', marginTop: 20 }}>{p.name}</div>
                <WfBody size={14} style={{ marginTop: 6 }}>{p.sub}</WfBody>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing — bundle math */}
        <div style={{ marginTop: 80, position: 'relative' }}>
          <WfAnnotation style={{ top: 0, right: 32, maxWidth: 280 }}>
            Math made visible. Strikethrough on individual prices,
            big bundle price, savings highlighted in gold.
          </WfAnnotation>
          <div style={{
            background: '#1C3D2E', color: '#FAF8F2',
            padding: '56px 64px',
            display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56,
            alignItems: 'center',
          }}>
            <div>
              <div className="jt" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', color: '#C5A95A' }}>BUNDLE PRICE</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginTop: 14 }}>
                <span className="pf" style={{ fontSize: 96, fontWeight: 700, color: '#FAF8F2', letterSpacing: '-0.03em' }}>$53</span>
                <span className="jt" style={{ fontSize: 22, color: 'rgba(250,248,242,0.55)', textDecoration: 'line-through' }}>$69</span>
                <span className="jt" style={{ fontSize: 18, color: '#C5A95A', fontWeight: 500, letterSpacing: '0.06em' }}>save $16</span>
              </div>
              <WfBody size={15} style={{ color: 'rgba(250,248,242,0.75)', marginTop: 18, maxWidth: 540 }}>
                Single checkout. All three downloads instantly. Lifetime updates within each product's major version.
              </WfBody>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button style={{
                background: '#C5A95A', color: '#1C3D2E', border: 'none', padding: '18px 28px',
                fontFamily: 'Jost', fontSize: 15, fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', cursor: 'pointer',
              }}>Buy the bundle →</button>
              <button style={{
                background: 'transparent', color: '#FAF8F2', border: '1px solid rgba(250,248,242,0.45)',
                padding: '18px 28px',
                fontFamily: 'Jost', fontSize: 13, fontWeight: 500, letterSpacing: '0.10em',
                textTransform: 'uppercase', cursor: 'pointer',
              }}>Buy products individually</button>
            </div>
          </div>
        </div>

        {/* What you get full list */}
        <div style={{ marginTop: 96 }}>
          <WfSectionLabel>Full contents</WfSectionLabel>
          <div className="pf" style={{ fontSize: 32, fontWeight: 700, color: '#1C3D2E', marginTop: 12 }}>Everything inside.</div>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px 48px' }}>
            {[
              '14 sheet tabs across the Foundation',
              '10 budget methodologies',
              '24 swappable palettes',
              'Bank CSV import for 9 US banks',
              'Subscription Audit · 4-tab finder',
              'Subscription Audit · cancel tracker',
              'Goals · 4 goal types with live linkage',
              'Goals · forecast strip',
              'Mock data for all three (Marcus & Elena story)',
              'Lifetime updates within each major version',
              'Customer library at /account/library',
              'Two methodology Journal posts (free w/ bundle)',
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: '#C5A95A', fontSize: 14, marginTop: 4 }}>✓</span>
                <WfBody size={15}>{b}</WfBody>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WfFooter />
    </div>
  );
}

/* =====================================================================
   06 · DIAGNOSTIC — /diagnose
   Standalone page, mid-quiz state shown
   ===================================================================== */
function WfDiagnostic() {
  return (
    <div className="wf-frame" style={{ width: 1440, position: 'relative' }}>
      {/* Minimal nav — diagnostic mode */}
      <div style={{
        height: 64, background: '#1C3D2E', color: '#FAF8F2',
        display: 'flex', alignItems: 'center', padding: '0 48px',
        justifyContent: 'space-between', position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <WfMark size={22} light />
          <span className="pf" style={{ fontSize: 20, fontWeight: 700 }}>Column &amp; Co.</span>
        </div>
        <span className="jt" style={{ fontSize: 12, opacity: 0.6, letterSpacing: '0.10em' }}>Exit ✕</span>
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: -3, height: 3, background: '#C5A95A',
        }} />
      </div>

      {/* Progress bar */}
      <div style={{
        padding: '24px 96px 0', position: 'relative',
      }}>
        <WfAnnotation style={{ top: 24, right: 32, maxWidth: 280 }}>
          Minimal chrome during the quiz.
          Single-question-at-a-time flow.
          Progress bar + question count, nothing else.
        </WfAnnotation>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span className="jt" style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.18em', color: 'rgba(28,61,46,0.65)' }}>
            QUESTION 3 OF 8
          </span>
          <span className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)' }}>~ 60 seconds left</span>
        </div>
        <div style={{ height: 4, background: 'var(--wf-line)', borderRadius: 2 }}>
          <div style={{ width: '37%', height: '100%', background: '#C5A95A', borderRadius: 2 }} />
        </div>
      </div>

      {/* Question */}
      <div style={{ padding: '80px 200px 60px', maxWidth: 1440, margin: '0 auto' }}>
        <WfSectionLabel>The current question</WfSectionLabel>
        <WfHeadline size={64} style={{ marginTop: 22 }}>
          When did you last feel<br/>on top of your money?
        </WfHeadline>
        <WfBody size={17} style={{ marginTop: 18 }}>
          One answer. No wrong answers. We won't share this.
        </WfBody>

        {/* Answer options */}
        <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { l: 'This week. I feel mostly clear.',                hint: '"On top"' },
            { l: 'This month — a bit shaky but okay.',             hint: '"Fair"' },
            { l: 'Earlier this year. Things have slipped.',        hint: '"Slipped"',  selected: true },
            { l: 'A long time ago. Or never, honestly.',           hint: '"Foggy"' },
          ].map((opt, i) => (
            <div key={i} style={{
              padding: '24px 28px',
              background: opt.selected ? 'rgba(197,169,90,0.10)' : 'var(--wf-card-bg)',
              border: '2px solid ' + (opt.selected ? '#C5A95A' : 'var(--wf-line)'),
              borderRadius: 4,
              display: 'flex', alignItems: 'center', gap: 18, cursor: 'pointer',
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                border: '2px solid ' + (opt.selected ? '#C5A95A' : 'var(--wf-line)'),
                background: opt.selected ? '#C5A95A' : 'transparent',
                flexShrink: 0,
              }} />
              <div className="pf" style={{
                flex: 1, fontSize: 24, fontWeight: 400, color: '#1C3D2E', fontStyle: 'italic',
              }}>{opt.l}</div>
              <span className="mono" style={{ color: 'rgba(28,61,46,0.45)' }}>{opt.hint}</span>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="jt" style={{ fontSize: 14, fontWeight: 500, color: 'rgba(28,61,46,0.65)', cursor: 'pointer', letterSpacing: '0.08em' }}>
            ← Back
          </span>
          <WfButton size="lg">Next question →</WfButton>
        </div>

        <div style={{
          marginTop: 80, padding: '24px 28px',
          background: 'var(--cream)', borderLeft: '3px solid #C5A95A',
          position: 'relative',
        }}>
          <WfAnnotation style={{ top: -30, right: 0, maxWidth: 320 }}>
            End screen (not shown): personalized recommendation,
            email-capture, "send me my results" — a soft email gate.
            Result page is shareable.
          </WfAnnotation>
          <div className="jt" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', color: '#C5A95A' }}>
            END SCREEN PREVIEW
          </div>
          <div className="pf" style={{ fontSize: 22, fontWeight: 700, color: '#1C3D2E', marginTop: 10 }}>
            After Q8 → "Here's where I'd start." → product + bundle recommendation + email field
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================================================================
   07 · ACCOUNT LIBRARY — /account/library
   Custom-built (not Lemon Squeezy iframe) per decision (3)
   ===================================================================== */
function WfAccount() {
  return (
    <div className="wf-frame" style={{ width: 1440, position: 'relative' }}>
      <WfNav active="" />

      <div style={{ padding: '88px 96px 0', display: 'grid', gridTemplateColumns: '260px 1fr', gap: 56 }}>
        {/* Sidebar nav */}
        <div style={{ position: 'relative' }}>
          <WfAnnotation style={{ top: 0, right: -8, maxWidth: 240 }}>
            Custom-built /account area.
            Pixel-perfect brand, hits Lemon Squeezy's API server-side.
          </WfAnnotation>
          <div className="jt" style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.20em', color: 'rgba(28,61,46,0.55)', textTransform: 'uppercase' }}>
            Account
          </div>
          <div className="pf" style={{ fontSize: 24, fontWeight: 700, color: '#1C3D2E', marginTop: 6 }}>Dan Brooks</div>
          <div className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)', marginTop: 4 }}>dan@columnandco.com</div>

          <div style={{ marginTop: 36, borderTop: '1px solid var(--wf-line)', paddingTop: 24 }}>
            {[
              { l: 'Library',         active: true },
              { l: 'Upgrades',        badge: '3 available' },
              { l: 'Recommendations', badge: '5 new' },
              { l: 'Affiliate'        },
              { l: 'Receipts'         },
              { l: 'Settings'         },
              { l: 'Sign out'         },
            ].map(it => (
              <div key={it.l} style={{
                padding: '12px 14px', borderRadius: 3, marginBottom: 4,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: it.active ? 'rgba(197,169,90,0.15)' : 'transparent',
                borderLeft: '3px solid ' + (it.active ? '#C5A95A' : 'transparent'),
              }}>
                <span className="jt" style={{ fontSize: 14, fontWeight: it.active ? 500 : 400, color: '#1C3D2E' }}>{it.l}</span>
                {it.badge && (
                  <span className="jt" style={{ fontSize: 10, color: '#C5A95A', fontWeight: 500, letterSpacing: '0.10em' }}>
                    {it.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Library content */}
        <div style={{ position: 'relative' }}>
          <WfAnnotation style={{ top: 0, right: 32, maxWidth: 280 }}>
            Each product card shows version owned, what's new since purchase,
            current download links. The LTV engine.
          </WfAnnotation>
          <WfSectionLabel>Your library</WfSectionLabel>
          <WfHeadline size={56} style={{ marginTop: 18 }}>Three products.<br/>One update waiting.</WfHeadline>
          <WfBody size={16} style={{ marginTop: 16 }}>
            Owned tools, current versions, and what's shipped since you last checked.
          </WfBody>

          {/* Owned product cards */}
          <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                name: 'The Foundation',
                owned: 'v2',
                latest: 'v2.1',
                bought: 'Bought March 14, 2026',
                upgrade: true,
                whatsnew: '5 new budget profiles · AI Insights panel · forecast strip on Goals',
              },
              {
                name: 'Subscription Audit',
                owned: 'v1.2',
                latest: 'v1.2',
                bought: 'Bought April 02, 2026',
                upgrade: false,
                whatsnew: 'You are on the latest version.',
              },
              {
                name: 'Joint Money Method',
                owned: 'v1.0',
                latest: 'v1.0',
                bought: 'Bought April 28, 2026',
                upgrade: false,
                whatsnew: 'You are on the latest version.',
              },
            ].map(p => (
              <div key={p.name} className="wf-card" style={{
                padding: '32px 36px',
                borderLeft: '3px solid ' + (p.upgrade ? '#C5A95A' : 'var(--wf-line)'),
                display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 28, alignItems: 'flex-start',
              }}>
                <WfBlock label="icon" height={120} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="pf" style={{ fontSize: 28, fontWeight: 700, color: '#1C3D2E' }}>{p.name}</span>
                    <span className="mono" style={{ background: 'rgba(28,61,46,0.06)', padding: '3px 8px', borderRadius: 3, color: 'rgba(28,61,46,0.65)' }}>
                      v{p.owned} → {p.latest}
                    </span>
                    {p.upgrade && (
                      <span className="jt" style={{
                        fontSize: 10, fontWeight: 500, letterSpacing: '0.20em',
                        color: '#1C3D2E', background: '#C5A95A',
                        padding: '3px 8px', borderRadius: 2,
                      }}>UPDATE</span>
                    )}
                  </div>
                  <div className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)', marginTop: 6 }}>{p.bought}</div>
                  <div style={{ marginTop: 18, padding: '14px 18px', background: 'var(--cream)' }}>
                    <span className="jt" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', color: 'rgba(28,61,46,0.65)' }}>
                      WHAT'S NEW
                    </span>
                    <div style={{ marginTop: 6 }}>
                      <WfBody size={14} style={{ color: '#1C3D2E' }}>{p.whatsnew}</WfBody>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 160 }}>
                  <WfButton size="md">Download</WfButton>
                  {p.upgrade && (
                    <button style={{
                      background: '#C5A95A', color: '#1C3D2E', border: '1px solid #C5A95A',
                      padding: '12px 18px', fontFamily: 'Jost', fontSize: 12, fontWeight: 600,
                      letterSpacing: '0.10em', textTransform: 'uppercase', cursor: 'pointer',
                    }}>Upgrade · $5 →</button>
                  )}
                  <span className="jt" style={{ fontSize: 11, color: 'rgba(28,61,46,0.55)', textAlign: 'center' }}>
                    Receipt · Changelog
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recommendations strip */}
          <div style={{ marginTop: 64, position: 'relative' }}>
            <WfAnnotation style={{ top: 0, right: 32 }}>
              Cross-sell based on owned + diagnostic answers.
            </WfAnnotation>
            <WfSectionLabel>Recommended for you</WfSectionLabel>
            <div className="pf" style={{ fontSize: 24, fontWeight: 700, color: '#1C3D2E', marginTop: 8 }}>
              Based on what you own and your diagnostic
            </div>
            <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
              {[
                { n: 'Goals Add-on', p: '$19' },
                { n: 'Quarterly Tax Tracker', p: '$25' },
                { n: 'Palette Pack · Autumn', p: '$12' },
              ].map(r => (
                <div key={r.n} className="wf-card" style={{ padding: 20 }}>
                  <WfBlock label="thumb" height={120} />
                  <div className="pf" style={{ fontSize: 18, fontWeight: 700, color: '#1C3D2E', marginTop: 14 }}>{r.n}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <span className="pf" style={{ fontSize: 18, fontWeight: 700, color: '#C5A95A' }}>{r.p}</span>
                    <span className="jt" style={{ fontSize: 12, color: '#1C3D2E', fontWeight: 500 }}>View →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WfFooter />
    </div>
  );
}

/* =====================================================================
   08a · JOURNAL INDEX — /journal
   Editorial archive feel
   ===================================================================== */
function WfJournalIndex() {
  return (
    <div className="wf-frame" style={{ width: 1440, position: 'relative' }}>
      <WfNav active="Journal" />

      <div style={{ padding: '88px 96px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <WfSectionLabel>Issue 7 · May 2026</WfSectionLabel>
            <WfHeadline size={96} style={{ marginTop: 22 }}>Journal.</WfHeadline>
            <WfBody size={18} style={{ marginTop: 18, maxWidth: 580 }}>
              Methodology, field notes, and quiet wins. About one a week from Dan, currently in Charleston.
            </WfBody>
          </div>
          <WfAnnotation style={{ top: 32, right: 32, maxWidth: 280 }}>
            Issue-style index, not a list of titles.
            Featured post takes a big editorial slot.
          </WfAnnotation>
        </div>

        {/* Featured post */}
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center' }}>
          <WfBlock label="Featured illustration · 720 × 520 · custom graphic per post" height={520} />
          <div>
            <WfChip accent>Featured · methodology</WfChip>
            <div className="pf" style={{ fontSize: 56, fontWeight: 700, color: '#1C3D2E', marginTop: 22, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Anti-Budget vs. Zero-Based:<br/>why Paula Pant is mostly right
            </div>
            <WfBody size={17} style={{ marginTop: 22 }}>
              Both work. Both have a buyer. Here's how to know which one is yours — and what changes when you have a partner.
            </WfBody>
            <div className="jt" style={{ fontSize: 13, color: 'rgba(28,61,46,0.55)', marginTop: 24, letterSpacing: '0.04em' }}>
              Dan · May 14, 2026 · Charleston · 8 min read
            </div>
          </div>
        </div>

        {/* Issue index */}
        <div style={{ marginTop: 96, display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56 }}>
          <div>
            <WfSectionLabel>This issue</WfSectionLabel>
            <div className="pf" style={{ fontSize: 32, fontWeight: 700, color: '#1C3D2E', marginTop: 10 }}>
              Recent entries
            </div>
            <div style={{ marginTop: 32 }}>
              {[
                { n: '07', tag: 'Field notes', t: 'What I changed in v2.1 after watching 30 buyers try v2',          d: 'May 14, 2026 · 12 min' },
                { n: '06', tag: 'Quiet wins',  t: 'Three things I did on Sunday to feel ready for Monday',           d: 'May 07, 2026 · 4 min'  },
                { n: '05', tag: 'Methodology', t: 'The case against the spreadsheet (and why I built one anyway)',   d: 'Apr 30, 2026 · 9 min'  },
                { n: '04', tag: 'Field notes', t: 'Twenty-four palettes was a stupid amount of work and worth it',       d: 'Apr 22, 2026 · 6 min'  },
                { n: '03', tag: 'Methodology', t: 'On Kakeibo: a 100-year-old method that beat my budget',           d: 'Apr 14, 2026 · 11 min' },
                { n: '02', tag: 'Quiet wins',  t: 'A small ritual for the end of the month',                         d: 'Apr 07, 2026 · 3 min'  },
                { n: '01', tag: 'Field notes', t: `Why I named it Column & Co. (it's not what you think)`,            d: 'Mar 30, 2026 · 5 min'  },
              ].map(p => (
                <div key={p.n} style={{
                  padding: '28px 0', borderTop: '1px solid var(--wf-line)',
                  display: 'grid', gridTemplateColumns: '60px 1fr 140px', gap: 28, alignItems: 'baseline',
                  cursor: 'pointer',
                }}>
                  <span className="pf" style={{ fontSize: 32, fontWeight: 700, color: '#C5A95A', letterSpacing: '-0.04em' }}>{p.n}</span>
                  <div>
                    <WfChip>{p.tag}</WfChip>
                    <div className="pf" style={{ fontSize: 24, fontWeight: 700, color: '#1C3D2E', marginTop: 10, lineHeight: 1.2 }}>
                      {p.t}
                    </div>
                  </div>
                  <div className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)', textAlign: 'right' }}>{p.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: 'relative' }}>
            <WfAnnotation style={{ top: -8, right: -16, maxWidth: 220 }}>
              "Currently" sidebar — humanizes Dan.
              Substack-vibe, brand-fit.
            </WfAnnotation>
            <div style={{ padding: 24, background: 'var(--cream)', position: 'sticky', top: 24 }}>
              <WfBlock label="Dan · author photo" height={140} />
              <div className="pf" style={{ fontSize: 22, fontWeight: 700, color: '#1C3D2E', marginTop: 18 }}>Dan</div>
              <WfBody size={13} style={{ marginTop: 8 }}>
                Made Column & Co. Likes order. Tracks his coffee.
              </WfBody>

              <div style={{ marginTop: 32, borderTop: '1px solid rgba(28,61,46,0.15)', paddingTop: 24 }}>
                <div className="jt" style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.24em', color: '#C5A95A' }}>
                  CURRENTLY
                </div>
                <div style={{ marginTop: 14 }}>
                  {[
                    { l: 'Drinking', v: 'Counter Culture Hologram' },
                    { l: 'Reading',  v: 'Atomic Habits, again' },
                    { l: 'Building', v: 'Joint Money Method v1.1' },
                    { l: 'Listening', v: 'Bon Iver · SABLE' },
                  ].map(r => (
                    <div key={r.l} style={{ marginBottom: 10 }}>
                      <div className="jt" style={{ fontSize: 10, color: 'rgba(28,61,46,0.55)', letterSpacing: '0.10em', textTransform: 'uppercase' }}>{r.l}</div>
                      <div className="pf" style={{ fontSize: 15, fontWeight: 400, fontStyle: 'italic', color: '#1C3D2E', marginTop: 2 }}>{r.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WfFooter />
    </div>
  );
}

/* =====================================================================
   08b · JOURNAL POST — /journal/<slug>
   Editorial, photo-led, byline + dateline
   ===================================================================== */
function WfJournalPost() {
  return (
    <div className="wf-frame" style={{ width: 1440, position: 'relative' }}>
      <WfNav active="Journal" />

      {/* Article hero image */}
      <div style={{ padding: '40px 96px 0' }}>
        <WfBreadcrumb items={['Journal', 'Methodology', 'Anti-Budget vs. Zero-Based']} />
        <div style={{ marginTop: 32 }}>
          <WfBlock label="HERO IMAGE · 1248 × 600 · custom graphic, photographic or illustrated" height={600} />
        </div>
      </div>

      {/* Title block */}
      <div style={{ padding: '64px 96px 0', maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <WfAnnotation style={{ top: 40, right: 32, maxWidth: 260 }}>
          Editorial title block: chip + headline + body lead.
          Strong byline + dateline + location for human feel.
        </WfAnnotation>
        <WfChip accent>Methodology</WfChip>
        <WfHeadline size={72} style={{ marginTop: 22, maxWidth: 1000 }}>
          Anti-Budget vs. Zero-Based:<br/>why Paula Pant is mostly right
        </WfHeadline>
        <WfBody size={22} style={{ marginTop: 28, maxWidth: 820, fontWeight: 300 }}>
          Both work. Both have a buyer. Here's how to know which one is yours — and what changes when you have a partner.
        </WfBody>

        {/* Byline */}
        <div style={{
          marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--wf-line)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <WfBlock label="" height={56} />
            <div>
              <div className="pf" style={{ fontSize: 18, fontWeight: 700, color: '#1C3D2E' }}>Dan</div>
              <div className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)' }}>May 14, 2026 · Charleston · 8 min read</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <span className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)' }}>Share</span>
            <span className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)' }}>Bookmark</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div style={{
        padding: '64px 96px 0', maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 220px', gap: 56,
      }}>
        <div>
          {/* Body paragraphs */}
          {[1,2,3].map(i => (
            <div key={i} style={{ marginBottom: 22 }}>
              <WfLine width="100%" />
              <div style={{ height: 10 }} />
              <WfLine width="98%" />
              <div style={{ height: 10 }} />
              <WfLine width="95%" />
              <div style={{ height: 10 }} />
              <WfLine width="80%" />
            </div>
          ))}

          {/* Pull quote */}
          <div style={{
            margin: '48px 0', padding: '32px 36px', background: 'var(--cream)',
            borderLeft: '4px solid #C5A95A',
          }}>
            <div className="pf" style={{ fontSize: 28, fontWeight: 400, fontStyle: 'italic', color: '#1C3D2E', lineHeight: 1.4 }}>
              "The 'right' budget is the one you'll actually open in February."
            </div>
          </div>

          {[1,2].map(i => (
            <div key={i} style={{ marginBottom: 22 }}>
              <WfLine width="100%" />
              <div style={{ height: 10 }} />
              <WfLine width="92%" />
              <div style={{ height: 10 }} />
              <WfLine width="88%" />
            </div>
          ))}

          {/* In-article product callout */}
          <div style={{
            margin: '48px 0', padding: '28px 32px',
            border: '1px solid var(--wf-line)', background: 'var(--wf-card-bg)',
            display: 'flex', gap: 24, alignItems: 'center', position: 'relative',
          }}>
            <WfAnnotation style={{ top: -30, right: 0 }}>
              In-article product callouts when methodology maps to a tool.
              Native, not adwords-y.
            </WfAnnotation>
            <WfBlock label="thumb" height={80} />
            <div style={{ flex: 1 }}>
              <WfChip>Mentioned in this post</WfChip>
              <div className="pf" style={{ fontSize: 22, fontWeight: 700, color: '#1C3D2E', marginTop: 6 }}>
                The Foundation · Anti-Budget profile
              </div>
              <WfBody size={13} style={{ marginTop: 4 }}>
                One of 10 budget methodologies. Toggle from the menu, edit any cell.
              </WfBody>
            </div>
            <WfButton>See it →</WfButton>
          </div>

          {[1,2].map(i => (
            <div key={i} style={{ marginBottom: 22 }}>
              <WfLine width="100%" />
              <div style={{ height: 10 }} />
              <WfLine width="92%" />
              <div style={{ height: 10 }} />
              <WfLine width="85%" />
            </div>
          ))}
        </div>

        {/* Sticky sidebar — TOC */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'sticky', top: 32 }}>
            <div className="jt" style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.24em', color: '#C5A95A' }}>
              IN THIS POST
            </div>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['What anti-budget actually means', 'Where zero-based wins', 'When you have a partner', 'My honest take', 'How to start'].map((s, i) => (
                <div key={s} className="jt" style={{
                  fontSize: 13, color: i === 1 ? '#1C3D2E' : 'rgba(28,61,46,0.55)',
                  fontWeight: i === 1 ? 500 : 300,
                  borderLeft: '2px solid ' + (i === 1 ? '#C5A95A' : 'transparent'),
                  paddingLeft: 12,
                }}>{s}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related posts */}
      <div style={{ padding: '120px 96px 0', maxWidth: 1100, margin: '0 auto' }}>
        <WfSectionLabel>Related entries</WfSectionLabel>
        <div className="pf" style={{ fontSize: 32, fontWeight: 700, color: '#1C3D2E', marginTop: 10 }}>
          More from the journal
        </div>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {[
            { tag: 'Methodology', t: 'On Kakeibo: a 100-year-old method that beat my budget' },
            { tag: 'Field notes', t: 'What I changed in v2.1 after watching 30 buyers try v2' },
            { tag: 'Quiet wins', t: 'A small ritual for the end of the month' },
          ].map(p => (
            <div key={p.t}>
              <WfBlock label={`Lead · ${p.tag}`} height={200} />
              <div style={{ marginTop: 16 }}>
                <WfChip>{p.tag}</WfChip>
                <div className="pf" style={{ fontSize: 22, fontWeight: 700, color: '#1C3D2E', marginTop: 12, lineHeight: 1.2 }}>{p.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WfFooter />
    </div>
  );
}

Object.assign(window, {
  WfBundlePage, WfDiagnostic, WfAccount, WfJournalIndex, WfJournalPost,
});

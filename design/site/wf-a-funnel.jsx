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
  return (
    <div className="wf-frame" style={{ width: 1440, position: 'relative' }}>
      <WfNav active="" />

      {/* BAND 1 — Frame & 6 problem tiles */}
      <div style={{ padding: '88px 96px 64px' }}>
        <WfSectionLabel>The frame</WfSectionLabel>
        <WfHeadline size={96} style={{ marginTop: 22, maxWidth: 1100 }}>
          What's getting in the way?
        </WfHeadline>
        <WfBody size={20} style={{ marginTop: 24, maxWidth: 760 }}>
          Pick the part of life that's hardest right now. We'll show you what helps.
        </WfBody>

        <WfAnnotation style={{ top: 220, right: 32 }}>
          Band 1: opens with the worldview question, not a product.
          6 tiles act as the primary nav for "I know what's broken."
        </WfAnnotation>

        {/* 3×2 tile grid */}
        <div style={{
          marginTop: 56,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }}>
          {PROBLEMS.map(p => (
            <div key={p.id} className="wf-card" style={{
              padding: '36px 32px', minHeight: 220, display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <WfSectionLabel>Problem</WfSectionLabel>
                <div className="pf" style={{ fontSize: 44, fontWeight: 700, color: '#1C3D2E', marginTop: 10 }}>
                  {p.label}
                </div>
                <WfBody size={15} style={{ marginTop: 12 }}>{p.sub}</WfBody>
              </div>
              <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)' }}>
                  3 products · 5 articles
                </span>
                <span className="jt" style={{ fontSize: 13, fontWeight: 500, color: '#C5A95A', letterSpacing: '0.10em' }}>
                  See prescriptions →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BAND 2 — Diagnostic CTA */}
      <div style={{ background: 'var(--cream)', padding: '64px 96px', marginTop: 16, position: 'relative' }}>
        <WfAnnotation style={{ top: 24, right: 32 }}>
          Band 2: catches the "I'm a mess but can't name it" buyer.
          Primary email-capture mechanism on the site.
        </WfAnnotation>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48 }}>
          <div style={{ maxWidth: 720 }}>
            <WfSectionLabel>Not sure where to start?</WfSectionLabel>
            <WfHeadline size={56} style={{ marginTop: 18 }}>Take the 90-second diagnostic.</WfHeadline>
            <WfBody size={18} style={{ marginTop: 18 }}>
              Eight questions about how today actually went. We'll prescribe a starting point — and email you a copy.
            </WfBody>
          </div>
          <WfButton size="lg">Start the diagnostic →</WfButton>
        </div>
      </div>

      {/* BAND 3 — Featured editorial */}
      <div style={{ padding: '88px 96px 0', position: 'relative' }}>
        <WfAnnotation style={{ top: 56, right: 32 }}>
          Band 3: editorial slot, rotated seasonally.
          Lets you merchandise without redesigning.
        </WfAnnotation>
        <WfSectionLabel>Featured · May 2026</WfSectionLabel>
        <div style={{
          marginTop: 24, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56,
          alignItems: 'center',
        }}>
          <WfBlock label="Editorial photo · 720 × 480" height={480} />
          <div>
            <WfHeadline size={56}>Taxes are done.<br/>Now find the leak that paid for them.</WfHeadline>
            <WfBody size={17} style={{ marginTop: 24, maxWidth: 480 }}>
              May is the right month to fix what's been quietly draining you. Three tools, one method, four hours of effort, twelve months of clarity.
            </WfBody>
            <div style={{ marginTop: 32 }}>
              <WfButton>Read the May letter →</WfButton>
            </div>
          </div>
        </div>
      </div>

      {/* BAND 4 — How Column & Co. works */}
      <div style={{ padding: '120px 96px 0', position: 'relative' }}>
        <WfAnnotation style={{ top: 80, right: 32 }}>
          Band 4: what the product actually does.
          Sets buyer expectations before they hit a product page.
        </WfAnnotation>
        <WfSectionLabel>How it works</WfSectionLabel>
        <WfHeadline size={56} style={{ marginTop: 18 }}>Three steps. Once.</WfHeadline>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
          {[
            { n: '01', h: 'Diagnose', d: 'Name the part of life that\'s hardest. Use the diagnostic or pick a problem.' },
            { n: '02', h: 'Install',  d: 'Download the tool. Copy the script. Five minutes, owned forever.' },
            { n: '03', h: 'Stay clear', d: 'The tool keeps doing its job. You glance, you adjust, you live.' },
          ].map(s => (
            <div key={s.n}>
              <div className="pf" style={{ fontSize: 80, fontWeight: 700, color: '#C5A95A', letterSpacing: '-0.04em' }}>{s.n}</div>
              <div style={{ width: 60, height: 3, background: '#C5A95A', margin: '8px 0 24px' }} />
              <div className="pf" style={{ fontSize: 36, fontWeight: 700, color: '#1C3D2E' }}>{s.h}</div>
              <WfBody size={16} style={{ marginTop: 14, lineHeight: 1.55 }}>{s.d}</WfBody>
            </div>
          ))}
        </div>
      </div>

      {/* BAND 5 — Journal */}
      <div style={{ padding: '120px 96px 0', position: 'relative' }}>
        <WfAnnotation style={{ top: 80, right: 32 }}>
          Band 5: Journal as a first-class brand surface.
          Humanized voice, strong graphic per post.
        </WfAnnotation>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <WfSectionLabel>From the journal</WfSectionLabel>
            <WfHeadline size={56} style={{ marginTop: 18 }}>Quiet wins, methodology,<br/>field notes.</WfHeadline>
          </div>
          <span className="jt" style={{ fontSize: 14, color: '#C5A95A', letterSpacing: '0.10em', fontWeight: 500 }}>
            All entries →
          </span>
        </div>
        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {[
            { tag: 'Methodology', t: 'Anti-Budget vs. Zero-Based: why Paula Pant is mostly right' },
            { tag: 'Field notes', t: 'What I changed in v2.1 after watching 30 buyers try v2' },
            { tag: 'Quiet wins',  t: 'Three things I did on Sunday to feel ready for Monday' },
          ].map((p, i) => (
            <div key={i}>
              <WfBlock label={`Lead image · 400 × 280 · ${p.tag.toLowerCase()}`} height={280} />
              <div style={{ marginTop: 22 }}>
                <WfChip>{p.tag}</WfChip>
                <div className="pf" style={{ fontSize: 24, fontWeight: 700, color: '#1C3D2E', marginTop: 14, lineHeight: 1.2 }}>
                  {p.t}
                </div>
                <div className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)', marginTop: 12 }}>
                  Dan · May 14, 2026 · 6 min read
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BAND 6 — Email + footer */}
      <div style={{ padding: '120px 96px 0', position: 'relative' }}>
        <WfAnnotation style={{ top: 80, right: 32 }}>
          Band 6: secondary email capture for buyers who didn't take the quiz.
        </WfAnnotation>
        <div style={{
          background: 'var(--forest)', color: 'var(--parch)',
          padding: '64px 56px',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="jt" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', color: '#C5A95A' }}>STAY IN THE LOOP</div>
              <WfHeadline size={48} style={{ color: '#FAF8F2', marginTop: 14 }}>One letter a month.<br/>No spam, no funnel.</WfHeadline>
              <div className="jt" style={{ fontSize: 15, opacity: 0.75, marginTop: 18, fontWeight: 300 }}>
                What shipped, what I'm working on, one quiet win you might steal.
              </div>
            </div>
            <div>
              <div style={{
                display: 'flex', gap: 8, padding: 8,
                background: 'rgba(250,248,242,0.10)', border: '1px solid rgba(250,248,242,0.18)',
              }}>
                <div style={{ flex: 1, padding: '14px 18px', color: 'rgba(250,248,242,0.55)' }}>your@email.com</div>
                <button style={{
                  background: '#C5A95A', color: '#1C3D2E', border: 'none', padding: '12px 22px',
                  fontFamily: 'Jost', fontSize: 13, fontWeight: 600, letterSpacing: '0.10em',
                  textTransform: 'uppercase', cursor: 'pointer',
                }}>Subscribe</button>
              </div>
              <div className="jt" style={{ fontSize: 11, opacity: 0.5, marginTop: 12 }}>
                Unsubscribe anytime. We don't share or sell.
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
   02 · PROBLEMS HUB — /problems
   ===================================================================== */
function WfProblemsHub() {
  return (
    <div className="wf-frame" style={{ width: 1440, position: 'relative' }}>
      <WfNav active="Problems" />

      <div style={{ padding: '88px 96px 0' }}>
        <WfBreadcrumb items={['Home', 'Problems']} />
        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ maxWidth: 900 }}>
            <WfSectionLabel>The directory</WfSectionLabel>
            <WfHeadline size={96} style={{ marginTop: 22 }}>What's getting in the way?</WfHeadline>
            <WfBody size={20} style={{ marginTop: 24, maxWidth: 720 }}>
              Six areas of life. Pick one. Inside, you'll find specific symptoms — and the prescriptions for them.
            </WfBody>
          </div>
          <WfAnnotation style={{ top: 80, right: 32 }}>
            Same 6 categories as the home tiles.
            Hub page is for buyers who arrived here via direct link, search, or footer.
          </WfAnnotation>
        </div>

        {/* Larger tiles — 2 cols this time */}
        <div style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 28 }}>
          {PROBLEMS.map(p => (
            <div key={p.id} className="wf-card" style={{
              padding: '40px 40px', minHeight: 220,
              display: 'flex', justifyContent: 'space-between', gap: 32,
            }}>
              <div style={{ flex: 1 }}>
                <WfSectionLabel>Area</WfSectionLabel>
                <div className="pf" style={{ fontSize: 56, fontWeight: 700, color: '#1C3D2E', marginTop: 10, letterSpacing: '-0.02em' }}>
                  {p.label}
                </div>
                <WfBody size={16} style={{ marginTop: 16 }}>{p.sub}</WfBody>
                <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <WfChip>3 products</WfChip>
                  <WfChip>5 journal posts</WfChip>
                  <WfChip>1 bundle</WfChip>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <span className="jt" style={{ fontSize: 14, fontWeight: 500, color: '#C5A95A', letterSpacing: '0.10em' }}>
                  Open →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback to diagnostic */}
        <div style={{
          marginTop: 80, padding: '40px 48px',
          background: 'var(--cream)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32,
        }}>
          <div>
            <div className="pf" style={{ fontSize: 28, fontWeight: 700, color: '#1C3D2E' }}>
              Don't see your problem in plain language?
            </div>
            <WfBody size={15} style={{ marginTop: 8 }}>
              Take the diagnostic. Eight questions. We'll surface the right place to start.
            </WfBody>
          </div>
          <WfButton size="lg">Start the diagnostic →</WfButton>
        </div>
      </div>

      <WfFooter />
    </div>
  );
}

/* =====================================================================
   03 · PROBLEM PAGE — /problems/money
   The conversion workhorse: pain → prescription
   ===================================================================== */
function WfProblemPage() {
  return (
    <div className="wf-frame" style={{ width: 1440, position: 'relative' }}>
      <WfNav active="Problems" />

      <div style={{ padding: '88px 96px 0' }}>
        <WfBreadcrumb items={['Home', 'Problems', 'Money']} />

        {/* Frame */}
        <div style={{ marginTop: 36, maxWidth: 1100, position: 'relative' }}>
          <WfSectionLabel>Problem · Money</WfSectionLabel>
          <WfHeadline size={88} style={{ marginTop: 22 }}>
            Your money isn't out of control.<br/>
            <span style={{ color: 'rgba(28,61,46,0.45)' }}>Your picture of it is.</span>
          </WfHeadline>
          <WfBody size={20} style={{ marginTop: 24, maxWidth: 720 }}>
            Most people don't have a spending problem. They have a visibility problem. When you can see your money clearly, the decisions get easier.
          </WfBody>
          <WfAnnotation style={{ top: 12, right: 32 }}>
            Frame the worldview in 2 sentences max.
            Brand voice, not a sales pitch.
          </WfAnnotation>
        </div>

        {/* Symptoms list */}
        <div style={{ marginTop: 96, position: 'relative' }}>
          <WfSectionLabel>Symptoms</WfSectionLabel>
          <div className="pf" style={{ fontSize: 40, fontWeight: 700, color: '#1C3D2E', marginTop: 14 }}>
            Which one is you?
          </div>
          <WfAnnotation style={{ top: 0, right: 32, maxWidth: 320 }}>
            The most important block on the page.
            Buyer sees their exact pain in plain language; prescription is one tap away.
            Also: this list IS your product roadmap.
          </WfAnnotation>
          <div style={{ marginTop: 32 }}>
            {[
              { s: `"I can't tell where my money goes."`,                fix: 'Foundation' },
              { s: `"I have 12 subscriptions I don't use."`,             fix: 'Foundation + Subscription Audit' },
              { s: `"I save, but I never seem to have any savings."`,    fix: 'Foundation + Goals add-on' },
              { s: `"My partner and I keep fighting about money."`,      fix: 'Joint Money Method' },
              { s: `"I'm self-employed and my taxes are a mess."`,       fix: 'Foundation · Self-Employed profile' },
              { s: `"I want to retire early but don't know if I can."`,  fix: 'Foundation · FIRE profile + Net Worth' },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '24px 0', borderBottom: '1px solid var(--wf-line)',
                cursor: 'pointer',
              }}>
                <div className="pf" style={{ fontSize: 26, fontWeight: 400, fontStyle: 'italic', color: '#1C3D2E' }}>
                  {row.s}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span className="jt" style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.18em', color: 'rgba(28,61,46,0.55)' }}>
                    PRESCRIBE
                  </span>
                  <span className="jt" style={{ fontSize: 14, fontWeight: 500, color: '#C5A95A', letterSpacing: '0.04em' }}>
                    {row.fix} →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended prescriptions */}
        <div style={{ marginTop: 96, position: 'relative' }}>
          <WfAnnotation style={{ top: 0, right: 32 }}>
            Top 3 prescriptions for this problem.
            Each card links to its full product page.
          </WfAnnotation>
          <WfSectionLabel>Recommended prescriptions</WfSectionLabel>
          <div className="pf" style={{ fontSize: 40, fontWeight: 700, color: '#1C3D2E', marginTop: 14 }}>
            Start here.
          </div>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
            {[
              { name: 'The Foundation', sub: 'A 14-tab budget system.', price: '$35' },
              { name: 'Subscription Audit', sub: 'Find the 8 you forgot.', price: '$15' },
              { name: 'Goals Add-on', sub: 'Real linkage. Live forecasts.', price: '$19' },
            ].map(p => (
              <div key={p.name} className="wf-card" style={{ padding: '28px' }}>
                <WfBlock label={`Product shot · ${p.name}`} height={240} />
                <div className="pf" style={{ fontSize: 28, fontWeight: 700, color: '#1C3D2E', marginTop: 22 }}>
                  {p.name}
                </div>
                <WfBody size={14} style={{ marginTop: 6 }}>{p.sub}</WfBody>
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="pf" style={{ fontSize: 24, fontWeight: 700, color: '#C5A95A' }}>{p.price}</span>
                  <span className="jt" style={{ fontSize: 13, fontWeight: 500, color: '#1C3D2E', letterSpacing: '0.06em' }}>
                    See how it works →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related problems */}
        <div style={{ marginTop: 96, position: 'relative' }}>
          <WfAnnotation style={{ top: 0, right: 32 }}>
            Cross-link to related problems.
            Builds the worldview that Column & Co. covers their whole life.
          </WfAnnotation>
          <WfSectionLabel>Related struggles</WfSectionLabel>
          <div className="pf" style={{ fontSize: 36, fontWeight: 700, color: '#1C3D2E', marginTop: 14 }}>
            People who came here also struggled with…
          </div>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[PROBLEMS[3], PROBLEMS[5], PROBLEMS[1]].map(p => (
              <div key={p.id} className="wf-card" style={{ padding: 24 }}>
                <div className="pf" style={{ fontSize: 28, fontWeight: 700, color: '#1C3D2E' }}>{p.label}</div>
                <WfBody size={14} style={{ marginTop: 8 }}>{p.sub}</WfBody>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology piece */}
        <div style={{ marginTop: 96, position: 'relative' }}>
          <WfAnnotation style={{ top: 0, right: 32 }}>
            Featured Journal entry, scoped to this problem.
            SEO compounding + builds authority.
          </WfAnnotation>
          <WfSectionLabel>From the journal · on money</WfSectionLabel>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
            <WfBlock label="Lead image · 600 × 380" height={380} />
            <div>
              <WfChip>Methodology</WfChip>
              <div className="pf" style={{ fontSize: 40, fontWeight: 700, color: '#1C3D2E', marginTop: 18, lineHeight: 1.1 }}>
                Anti-Budget vs. Zero-Based: why Paula Pant is mostly right
              </div>
              <WfBody size={15} style={{ marginTop: 16 }}>
                Both work. Both have a buyer. Here's how to know which one is yours — and what changes when you have a partner.
              </WfBody>
              <div className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)', marginTop: 18 }}>
                Dan · May 14, 2026 · 8 min read
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
   04 · PRODUCT PAGE — /products/foundation
   Diagnosis-led, embedded demo, returning-customer flow
   ===================================================================== */
function WfProductPage() {
  return (
    <div className="wf-frame" style={{ width: 1440, position: 'relative' }}>
      <WfNav active="" />

      <div style={{ padding: '88px 96px 0' }}>
        <WfBreadcrumb items={['Home', 'Products', 'The Foundation']} />

        {/* Hero block — split: "this is for you if" + product cover */}
        <div style={{
          marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
          alignItems: 'flex-start',
        }}>
          <div>
            <WfSectionLabel>The Foundation · v2.1</WfSectionLabel>
            <WfHeadline size={72} style={{ marginTop: 22 }}>A 14-tab budget system for people who like seeing.</WfHeadline>
            <WfBody size={18} style={{ marginTop: 24, maxWidth: 520 }}>
              One Google Sheet. Ten budget methodologies. Twenty-four palettes. Real bank CSV import. Built so an AI can read it.
            </WfBody>

            {/* "This is for you if" */}
            <div style={{ marginTop: 48, position: 'relative' }}>
              <WfAnnotation style={{ top: 0, right: -300, maxWidth: 280 }}>
                Lead with diagnosis, not specs.
                Buyer recognizes themselves in 3–5 bullets.
              </WfAnnotation>
              <div className="jt" style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.24em', color: '#C5A95A', textTransform: 'uppercase' }}>
                This is for you if
              </div>
              <div style={{ marginTop: 18 }}>
                {[
                  "You've tried YNAB or Monarch and bounced off the subscription.",
                  "You want to see your money without handing it to a third party.",
                  "You're comfortable opening Claude or ChatGPT to ask a question.",
                  "You'd rather own a tool than rent one.",
                ].map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', marginBottom: 14 }}>
                    <span style={{ color: '#C5A95A', fontSize: 22, lineHeight: 1, marginTop: 2 }}>·</span>
                    <div className="pf" style={{ fontSize: 22, fontWeight: 400, fontStyle: 'italic', color: '#1C3D2E', lineHeight: 1.4 }}>
                      {b}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price block */}
            <div style={{ marginTop: 56, padding: '32px 36px', background: 'var(--cream)' }}>
              <div className="jt" style={{ fontSize: 11, letterSpacing: '0.24em', color: 'rgba(28,61,46,0.55)' }}>PRICE</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8 }}>
                <span className="pf" style={{ fontSize: 56, fontWeight: 700, color: '#1C3D2E' }}>$35</span>
                <span className="jt" style={{ fontSize: 14, color: 'rgba(28,61,46,0.65)' }}>USD · one-time · owned</span>
              </div>
              <div className="jt" style={{ fontSize: 13, color: 'rgba(28,61,46,0.65)', marginTop: 8 }}>
                Instant download · Google Sheets + Excel · Lifetime updates within v2.x
              </div>
              <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
                <WfButton size="lg">Buy &amp; download →</WfButton>
                <WfButton size="lg" primary={false}>Add to bundle</WfButton>
              </div>
              <div className="jt" style={{ fontSize: 12, color: 'rgba(28,61,46,0.55)', marginTop: 18 }}>
                Already own v2? Sign in for $5 upgrade pricing. →
              </div>
            </div>
          </div>

          <div>
            <WfBlock label="Hero product shot · 600 × 460" height={460} />
            <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
              <WfBlock label="thumb 1" height={110} />
              <WfBlock label="thumb 2" height={110} />
              <WfBlock label="thumb 3" height={110} />
              <WfBlock label="thumb 4" height={110} />
            </div>
          </div>
        </div>

        {/* Embedded demo */}
        <div style={{ marginTop: 120, position: 'relative' }}>
          <WfAnnotation style={{ top: 0, right: 32, maxWidth: 320 }}>
            The conversion killer.
            Live HTML mockup embedded as iframe — buyers click around
            the real product before paying. Etsy can't do this.
          </WfAnnotation>
          <WfSectionLabel>See it work</WfSectionLabel>
          <WfHeadline size={56} style={{ marginTop: 18 }}>Try the live demo.</WfHeadline>
          <WfBody size={17} style={{ marginTop: 16, maxWidth: 640 }}>
            Click any tab. Swap any palette. Apply any budget profile. Same software you get on purchase, running right here.
          </WfBody>
          <div style={{ marginTop: 32 }}>
            <WfBlock label="EMBEDDED IFRAME · live HTML demo of The Foundation v2.1 · 1248 × 760" height={760} />
          </div>
        </div>

        {/* What's included spec strip */}
        <div style={{ marginTop: 120 }}>
          <WfSectionLabel>What's in the box</WfSectionLabel>
          <div className="pf" style={{ fontSize: 48, fontWeight: 700, color: '#1C3D2E', marginTop: 18 }}>
            Everything you need. Nothing you don't.
          </div>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {[
              { n: '14', l: 'Sheets / tabs' },
              { n: '10', l: 'Budget methodologies' },
              { n: '16', l: 'Swappable palettes' },
              { n: '454', l: 'Pre-filled transactions (mock)' },
              { n: '9', l: 'Supported banks (CSV import)' },
              { n: '5', l: 'Health Score indicators' },
              { n: '5,000', l: 'Transaction row capacity' },
              { n: '∞', l: 'Lifetime updates within v2.x' },
            ].map(s => (
              <div key={s.l} className="wf-card" style={{ padding: 24 }}>
                <div className="pf" style={{ fontSize: 48, fontWeight: 700, color: '#1C3D2E', letterSpacing: '-0.02em' }}>{s.n}</div>
                <div className="jt" style={{ fontSize: 13, color: 'rgba(28,61,46,0.65)', marginTop: 6, fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Returning customer */}
        <div style={{ marginTop: 100, position: 'relative' }}>
          <WfAnnotation style={{ top: 0, right: 32, maxWidth: 300 }}>
            Returning-customer detection (Lemon Squeezy auth).
            Auto-applies upgrade pricing. The repeat-buyer LTV engine.
          </WfAnnotation>
          <div style={{
            background: '#1C3D2E', color: '#FAF8F2', padding: '48px 56px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32,
          }}>
            <div>
              <div className="jt" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.28em', color: '#C5A95A' }}>RETURNING CUSTOMER?</div>
              <div className="pf" style={{ fontSize: 36, fontWeight: 700, color: '#FAF8F2', marginTop: 12 }}>
                If you own v2, v2.1 is $5.
              </div>
              <div className="jt" style={{ fontSize: 14, opacity: 0.7, marginTop: 8 }}>
                Sign in with the email you used to buy. We do the rest.
              </div>
            </div>
            <WfButton size="lg" primary={false}>
              <span style={{ color: '#FAF8F2', borderColor: '#FAF8F2' }}>Sign in →</span>
            </WfButton>
          </div>
        </div>

        {/* Reviews + changelog + FAQ */}
        <div style={{ marginTop: 100, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, position: 'relative' }}>
          <WfAnnotation style={{ top: -40, right: 32 }}>
            Trust signals: reviews, changelog, FAQ. Three columns.
          </WfAnnotation>
          {['Reviews', 'Changelog', 'FAQ'].map(h => (
            <div key={h}>
              <WfSectionLabel>{h}</WfSectionLabel>
              <div className="pf" style={{ fontSize: 28, fontWeight: 700, color: '#1C3D2E', marginTop: 12 }}>
                {h === 'Reviews' && '4.8 ★ · 162 reviews'}
                {h === 'Changelog' && 'What shipped'}
                {h === 'FAQ' && 'Common questions'}
              </div>
              <div style={{ marginTop: 20 }}>
                {[1,2,3,4].map(i => (
                  <div key={i} style={{ padding: '14px 0', borderTop: '1px solid var(--wf-line)' }}>
                    <WfLine width="80%" />
                    <div style={{ height: 6 }} />
                    <WfLine width="60%" />
                  </div>
                ))}
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
  WfHome, WfProblemsHub, WfProblemPage, WfProductPage,
});

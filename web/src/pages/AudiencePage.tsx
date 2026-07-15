import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../components/Layout';
import { ConceptNoteModal } from '../components/ConceptNoteModal';
import { Reveal, CountUp } from '../lib/motion';
import '../audience.css';

type Audience = 'policymakers' | 'partners' | 'donors';

const HERO: Record<Audience, { eyebrow: string; title: string; lead: string; cta: string; proof: string; img: string }> = {
  policymakers: {
    eyebrow: 'For policymakers', title: 'Act with certainty. See it delivered.',
    lead: 'Move from commitment to enacted, financed policy in weeks — with governed, human-reviewed tools and the backing of a proven regional parliamentary network.',
    cta: 'Request a consultation', proof: 'Backed by nine national caucuses — active since 2014.', img: '/assets/images/policymakers.jpg',
  },
  partners: {
    eyebrow: 'For partners', title: 'A governed platform to build on.',
    lead: 'Bring your technology, diagnostics, or capital into a proven, standards-based regional health system — with a clearly defined role and measurable impact.',
    cta: 'Explore a partnership', proof: 'Standards-based, human-reviewed, sovereign by design.', img: '/assets/images/diagnostics.jpg',
  },
  donors: {
    eyebrow: 'For donors', title: 'Fund proof, not promises.',
    lead: 'Back a de-risked, phased model that delivers a working result in one country before scaling to nine — with transparent governance and measurable outcomes.',
    cta: 'Request the concept note', proof: 'Each phase proven before the next is funded.', img: '/assets/images/donors.jpg',
  },
};

const GET: Record<Audience, { title: string; items: string[] }> = {
  policymakers: { title: 'What you get', items: [
    'A secure, invitation-only MP portal to draft and share laws and amendments',
    'AI-assisted drafting & comparative-law intelligence (human-reviewed)',
    'Decision briefs and budget-impact notes, ready for committee',
    'A peer network of nine national caucuses and former-MP advisors',
  ] },
  partners: { title: 'What partnership includes', items: [
    'Defined integration points across the Engine, Bridge and Shield',
    'Co-financing and partnership frameworks',
    'A live pilot pathway from proof to regional scale',
    'Association with a trusted parliamentary network',
  ] },
  donors: { title: 'What your funding delivers', items: [
    'A live, working solution in a first country — the proof unit',
    'Transparent governance, reporting and independent oversight',
    'A replicable, scalable model for regional health sovereignty',
    'Full budget and terms, shared with you in confidence',
  ] },
};

const CLOSE: Record<Audience, { title: string; lead: string }> = {
  policymakers: { title: 'Turn your decision into delivered care.', lead: 'Start a confidential conversation about your country.' },
  partners: { title: 'Build with a proven regional platform.', lead: "Let's discuss where your organisation fits." },
  donors: { title: 'Invest in a working model of health sovereignty.', lead: 'See the results before scale — request the concept note.' },
};

const PROOF = [
  { value: 300, fmt: (n: number) => `${Math.round(n)}K+`, l: 'patients in scope' },
  { value: 9, fmt: (n: number) => String(Math.round(n)), l: 'national caucuses' },
  { value: 18, fmt: (n: number) => String(Math.round(n)), l: 'priority countries' },
  { value: 2014, fmt: (n: number) => String(Math.round(n)), l: 'network active since' },
];

const cssw = (w: string) => ({ '--w': w } as React.CSSProperties);

/* ---------------- POLICYMAKERS — a process ---------------- */
function Policymakers() {
  const flow = [
    { t: 'Draft', d: 'AI-assisted, human-reviewed drafting in a secure MP portal.' },
    { t: 'Coordinate', d: 'Evidence, comparative law and stakeholders aligned.' },
    { t: 'Enact', d: 'Tabled, debated and passed — tracked in the app.' },
    { t: 'Deliver', d: 'Turned into financed, operational care.' },
  ];
  const why = [
    { t: 'Certainty', d: 'Draft, compare and table legislation faster — AI assistance that is transparent and human-reviewed at every step.' },
    { t: 'Sovereignty', d: 'Own your national health agenda as external funding recedes, on sovereign, in-region infrastructure.' },
    { t: 'Low risk', d: 'People decide, not machines. Full audit trail, no personal exposure, no unproven "AI breakthroughs".' },
  ];
  return (
    <>
      <section className="section aud-tension">
        <div className="container aud-tension-grid">
          <Reveal>
            <p className="eyebrow">The lag</p>
            <h2>You have the will. The system has the lag.</h2>
            <p className="section-lead">An average parliamentarian faces a deluge of legislation, and complex health policy stalls between commitment and action — for months, sometimes years. Donors withdraw, systems fragment, patients wait. The Hub closes that gap.</p>
          </Reveal>
          <Reveal className="sig">
            <div className="sig-bar-row"><span className="sig-bar-lab">Conventional path</span><div className="sig-bar-track"><div className="sig-bar barfill sig-slow" style={cssw('100%')}>Months–years</div></div></div>
            <div className="sig-bar-row"><span className="sig-bar-lab">With the Hub</span><div className="sig-bar-track"><div className="sig-bar barfill sig-fast" style={cssw('18%')}>Weeks</div></div></div>
            <div className="sig-stat"><strong><CountUp value={22} />/26</strong><span>high-burden countries that raised domestic TB budgets had an active caucus</span></div>
          </Reveal>
        </div>
      </section>

      {/* Signature structure: horizontal execution flow */}
      <section className="section aud-dark aud-flow">
        <div className="container">
          <Reveal><p className="eyebrow eyebrow-onDark">The execution loop</p></Reveal>
          <Reveal><h2>From your decision to delivered care.</h2></Reveal>
          <ol className="path">
            {flow.map((s, i) => (
              <Reveal as="li" className="path-step" delay={i * 90} key={s.t}>
                <span className="path-num">0{i + 1}</span>
                <div className="path-body"><strong>{s.t}</strong><p>{s.d}</p></div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Why — as rows (not cards) */}
      <section className="section section-alt">
        <div className="container">
          <Reveal><p className="eyebrow">Why it matters to you</p></Reveal>
          <ul className="why-rows">
            {why.map((w, i) => (
              <Reveal as="li" delay={i * 80} key={w.t}>
                <span className="why-rows-n">0{i + 1}</span>
                <strong>{w.t}</strong>
                <p>{w.d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/* ---------------- PARTNERS — an exchange ---------------- */
function Partners() {
  const bring = ['Technology, diagnostics or capital', 'Innovation, R&D and know-how', 'Distribution and supply-chain reach'];
  const gain = ['Access to expanding regional health markets', 'ESG/SDG-aligned, reportable impact', 'Association with a trusted parliamentary network'];
  const standards = ['ISO 27001-grade security', 'GDPR-equivalent protection', 'Human-in-the-loop review', 'Sovereign, in-region hosting'];
  const engage = [
    { t: 'Scope your role', d: 'Identify integration points across the Engine, Bridge and Shield.' },
    { t: 'Integrate', d: 'Plug in under governed, standards-based frameworks with human oversight.' },
    { t: 'Scale', d: 'Move from a proven pilot to nine-country regional reach.' },
  ];
  return (
    <>
      <section className="section aud-tension">
        <div className="container aud-tension-grid">
          <Reveal>
            <p className="eyebrow">The opportunity</p>
            <h2>A region rebuilding its health systems — and it needs you.</h2>
            <p className="section-lead">As external funding recedes, Eastern Europe & Central Asia is building self-reliant health infrastructure. Technology, diagnostics and capital with a governed home can lead here — this is shared value, not charity.</p>
          </Reveal>
          <Reveal className="sig sig-bringgain">
            <div className="sig-col"><p className="sig-col-h">What you bring</p><ul>{bring.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="sig-swap" aria-hidden="true">⇄</div>
            <div className="sig-col sig-col-gain"><p className="sig-col-h">What you gain</p><ul>{gain.map((x) => <li key={x}>{x}</li>)}</ul></div>
          </Reveal>
        </div>
      </section>

      {/* Signature structure: governed-by-design standards strip */}
      <section className="section aud-dark">
        <div className="container">
          <Reveal><p className="eyebrow eyebrow-onDark">Governed by design</p></Reveal>
          <Reveal><h2>Credibility, built in.</h2></Reveal>
          <div className="std-strip">
            {standards.map((s, i) => (
              <Reveal as="div" className="std-chip" delay={i * 80} key={s}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.4-3 7.4-7 8.9C8 17.4 5 14.4 5 11V6l7-3z" /><path d="M9 11.5l2 2 4-4" /></svg>
                <span>{s}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature structure: engage steps */}
      <section className="section section-alt">
        <div className="container">
          <Reveal><p className="eyebrow">How you engage</p></Reveal>
          <Reveal><h2>Three steps to a defined role.</h2></Reveal>
          <div className="engage">
            {engage.map((s, i) => (
              <Reveal as="article" className="engage-step" delay={i * 90} key={s.t}>
                <span className="engage-n">0{i + 1}</span>
                <strong>{s.t}</strong>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- DONORS — evidence ---------------- */
function Donors() {
  const ladder = [
    { t: 'Foundation', d: 'A working solution, live in one country — the proof unit.' },
    { t: 'Replication', d: 'The proven playbook, stamped country by country.' },
    { t: 'Regional platform', d: 'The full application across the region.' },
    { t: 'Scale & integration', d: 'Nine-country coverage, sustainability, hand-off.' },
  ];
  const metrics = [
    { value: 300, fmt: (n: number) => `${Math.round(n)}K+`, l: 'vulnerable patients protected' },
    { value: 9, fmt: (n: number) => String(Math.round(n)), l: 'countries the model can reach' },
    { value: 100, fmt: (n: number) => `${Math.round(n)}%`, l: 'human-reviewed, governed decisions' },
  ];
  return (
    <>
      <section className="section aud-tension">
        <div className="container aud-tension-grid">
          <Reveal>
            <p className="eyebrow">The moment</p>
            <h2>Proof matters more than promises.</h2>
            <p className="section-lead">Global donors are stepping back just as the need peaks — and funders now reward evidence, not pilots that never scale. The Hub delivers a working result in a single country first, so your capital backs a proven unit, then replicates it.</p>
          </Reveal>
          <Reveal className="sig sig-fundgap">
            <div className="sig-bar-row"><span className="sig-bar-lab">Needed 2026–28</span><div className="sig-bar-track"><div className="sig-bar barfill" style={cssw('100%')}>$18.0B</div></div></div>
            <div className="sig-bar-row"><span className="sig-bar-lab">Pledged so far</span><div className="sig-bar-track"><div className="sig-bar barfill sig-gap" style={cssw('66%')}>$11.85B</div></div></div>
            <p className="sig-cap">A <strong>~$6B shortfall</strong>, and external health aid is projected to fall <strong>30–40%</strong>. Proof, not promises, is what scales now.</p>
          </Reveal>
        </div>
      </section>

      {/* Signature structure: de-risked ladder (vertical) */}
      <section className="section aud-dark">
        <div className="container aud-ladder-wrap">
          <Reveal className="aud-ladder-head">
            <p className="eyebrow eyebrow-onDark">The de-risked ladder</p>
            <h2>Each rung proven before the next is funded.</h2>
            <p className="section-lead" style={{ color: 'rgba(255,255,255,.7)' }}>A donor never funds a promise — only a repeat of something already working.</p>
          </Reveal>
          <ol className="ladder">
            {ladder.map((s, i) => (
              <Reveal as="li" className="ladder-step" delay={i * 90} key={s.t}>
                <span className="ladder-n">{i + 1}</span>
                <div><strong>{s.t}</strong><p>{s.d}</p></div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Signature structure: big impact metrics */}
      <section className="section section-alt">
        <div className="container">
          <Reveal><p className="eyebrow">Measured impact</p></Reveal>
          <div className="metrics">
            {metrics.map((m, i) => (
              <Reveal as="div" className="metric" delay={i * 100} key={m.l}>
                <strong><CountUp value={m.value} format={m.fmt} /></strong>
                <span>{m.l}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const BODY = { policymakers: Policymakers, partners: Partners, donors: Donors };

export function AudiencePage({ audience }: { audience: Audience }) {
  const h = HERO[audience];
  const get = GET[audience];
  const close = CLOSE[audience];
  const Body = BODY[audience];
  useEffect(() => {
    const prev = document.title;
    document.title = `${h.eyebrow} • EECA Lung Health Sovereignty Hub`;
    return () => { document.title = prev; };
  }, [h.eyebrow]);

  return (
    <SiteLayout>
      <section className="page-hero aud-hero">
        <div className="aud-hero-bg" style={{ '--aud-img': `url(${h.img})` } as React.CSSProperties} aria-hidden="true" />
        <div className="page-hero-inner container">
          <p className="page-hero-eyebrow">{h.eyebrow}</p>
          <h1>{h.title}</h1>
          <p className="page-hero-lead">{h.lead}</p>
          <div className="aud-hero-cta">
            <Link to="/consultation#consultation-form" className="btn btn-primary">{h.cta}</Link>
            <ConceptNoteModal variant="link" />
          </div>
          <p className="aud-proof">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
            {h.proof}
          </p>
        </div>
      </section>

      <Body />

      <section className="section section-alt aud-getwrap">
        <div className="container aud-get">
          <Reveal className="aud-get-head">
            <p className="eyebrow">{get.title}</p>
            <h2>Built around what you need.</h2>
          </Reveal>
          <ul className="aud-list">
            {get.items.map((g, i) => (
              <Reveal as="li" delay={i * 70} key={g}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                <span>{g}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <ul className="proofband">
            {PROOF.map((p, i) => (
              <Reveal as="li" delay={i * 80} key={p.l}>
                <strong><CountUp value={p.value} format={p.fmt} /></strong>
                <span>{p.l}</span>
              </Reveal>
            ))}
          </ul>
          <h2>{close.title}</h2>
          <p className="cta-lead">{close.lead}</p>
          <div className="cta-buttons">
            <Link to="/consultation#consultation-form" className="btn btn-primary">{h.cta}</Link>
            <Link to="/" className="btn btn-secondary">Back to overview</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

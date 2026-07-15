import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../components/Layout';
import { ConceptNoteModal } from '../components/ConceptNoteModal';
import { Reveal, CountUp } from '../lib/motion';
import '../audience.css';

type Audience = 'policymakers' | 'partners' | 'donors';

type Content = {
  eyebrow: string;
  title: string;
  lead: string;
  ctaLabel: string;
  heroProof: string;
  heroImg: string;
  tension: { eyebrow: string; title: string; body: string };
  signature: 'weeks' | 'bringgain' | 'fundgap';
  bring?: string[];
  gain?: string[];
  why: { t: string; d: string }[];
  getTitle: string;
  get: string[];
  closingTitle: string;
  closingLead: string;
};

const CONTENT: Record<Audience, Content> = {
  policymakers: {
    eyebrow: 'For policymakers',
    title: 'Act with certainty. See it delivered.',
    lead: 'Move from commitment to enacted, financed policy in weeks — with governed, human-reviewed tools and the backing of a proven regional parliamentary network.',
    ctaLabel: 'Request a consultation',
    heroProof: 'Backed by nine national caucuses — active since 2014.',
    heroImg: '/assets/images/policymakers.jpg',
    tension: {
      eyebrow: 'The lag',
      title: 'You have the will. The system has the lag.',
      body: 'An average parliamentarian faces a deluge of legislation, and complex health policy stalls between commitment and action — for months, sometimes years. Donors withdraw, systems fragment, patients wait. The Hub closes that gap.',
    },
    signature: 'weeks',
    why: [
      { t: 'Certainty', d: 'Draft, compare and table legislation faster — with AI assistance that is transparent and human-reviewed at every step.' },
      { t: 'Sovereignty', d: 'Own your national health agenda as external funding recedes, on sovereign, in-region infrastructure.' },
      { t: 'Low risk', d: 'People decide, not machines. Full audit trail, no personal exposure, no unproven "AI breakthroughs".' },
    ],
    getTitle: 'What you get',
    get: [
      'A secure, invitation-only MP portal to draft and share laws and amendments',
      'AI-assisted drafting & comparative-law intelligence across the region (human-reviewed)',
      'Decision briefs and budget-impact notes, ready for committee',
      'A peer network of nine national caucuses and former-MP advisors',
    ],
    closingTitle: 'Turn your decision into delivered care.',
    closingLead: 'Start a confidential conversation about your country.',
  },
  partners: {
    eyebrow: 'For partners',
    title: 'A governed platform to build on.',
    lead: 'Bring your technology, diagnostics, or capital into a proven, standards-based regional health system — with a clearly defined role and measurable impact.',
    ctaLabel: 'Explore a partnership',
    heroProof: 'Standards-based, human-reviewed, sovereign by design.',
    heroImg: '/assets/images/diagnostics.jpg',
    tension: {
      eyebrow: 'The opportunity',
      title: 'A region rebuilding its health systems — and it needs you.',
      body: 'As external funding recedes, Eastern Europe & Central Asia is building self-reliant health infrastructure. Technology, diagnostics and capital with a governed home can lead here — this is shared value, not charity.',
    },
    signature: 'bringgain',
    bring: ['Technology, diagnostics or capital', 'Innovation, R&D and know-how', 'Distribution and supply-chain reach'],
    gain: ['Access to expanding regional health markets', 'ESG/SDG-aligned, reportable impact', 'Association with a trusted parliamentary network'],
    why: [
      { t: 'Measurable impact', d: 'Contribute to continuity of care for 300,000+ patients, with transparent, reportable outcomes.' },
      { t: 'Governed innovation', d: 'ISO 27001-grade security, GDPR-equivalent protection, and human oversight — credibility built in.' },
      { t: 'A strategic role', d: 'Integrate at defined points in a platform proven in one country and scaling to nine.' },
    ],
    getTitle: 'How partners engage',
    get: [
      'Defined integration points across the Engine, Bridge and Shield',
      'Co-financing and partnership frameworks',
      'A live pilot pathway from proof to regional scale',
      'Association with a trusted parliamentary network',
    ],
    closingTitle: 'Build with a proven regional platform.',
    closingLead: 'Let\'s discuss where your organisation fits.',
  },
  donors: {
    eyebrow: 'For donors',
    title: 'Fund proof, not promises.',
    lead: 'Back a de-risked, phased model that delivers a working result in one country before scaling to nine — with transparent governance and measurable outcomes.',
    ctaLabel: 'Request the concept note',
    heroProof: 'Each phase proven before the next is funded.',
    heroImg: '/assets/images/donors.jpg',
    tension: {
      eyebrow: 'The moment',
      title: 'Proof matters more than promises.',
      body: 'Global donors are stepping back just as the need peaks — and funders now reward evidence, not pilots that never scale. The Hub delivers a working result in a single country first, so your capital backs a proven unit, then replicates it.',
    },
    signature: 'fundgap',
    why: [
      { t: 'De-risked', d: 'Each phase proves a working result before the next is funded. A donor never funds a promise, only a proven unit.' },
      { t: 'Measurable impact', d: 'Protected continuity of care for 300,000+ patients and stronger national ownership.' },
      { t: 'Lasting legacy', d: 'Catalyse self-reliant, domestically-financed health systems as global funding recedes.' },
    ],
    getTitle: 'What your funding delivers',
    get: [
      'A live, working solution in a first country — the proof unit',
      'Transparent governance, reporting and independent oversight',
      'A replicable, scalable model for regional health sovereignty',
      'Full budget and terms, shared with you in confidence',
    ],
    closingTitle: 'Invest in a working model of health sovereignty.',
    closingLead: 'See the results before scale — request the concept note.',
  },
};

const PROOF = [
  { value: 300, fmt: (n: number) => `${Math.round(n)}K+`, l: 'patients in scope' },
  { value: 9, fmt: (n: number) => String(Math.round(n)), l: 'national caucuses' },
  { value: 18, fmt: (n: number) => String(Math.round(n)), l: 'priority countries' },
  { value: 2014, fmt: (n: number) => String(Math.round(n)), l: 'network active since' },
];

function Signature({ c }: { c: Content }) {
  if (c.signature === 'weeks') {
    return (
      <Reveal className="sig sig-weeks">
        <div className="sig-bars">
          <div className="sig-bar-row">
            <span className="sig-bar-lab">Conventional path</span>
            <div className="sig-bar-track"><div className="sig-bar barfill sig-slow" style={{ '--w': '100%' } as React.CSSProperties}>Months–years</div></div>
          </div>
          <div className="sig-bar-row">
            <span className="sig-bar-lab">With the Hub</span>
            <div className="sig-bar-track"><div className="sig-bar barfill sig-fast" style={{ '--w': '18%' } as React.CSSProperties}>Weeks</div></div>
          </div>
        </div>
        <div className="sig-stat">
          <strong><CountUp value={22} />/26</strong>
          <span>high-burden countries that raised domestic TB budgets had an active caucus</span>
        </div>
      </Reveal>
    );
  }
  if (c.signature === 'bringgain') {
    return (
      <Reveal className="sig sig-bringgain">
        <div className="sig-col">
          <p className="sig-col-h">What you bring</p>
          <ul>{c.bring!.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="sig-swap" aria-hidden="true">⇄</div>
        <div className="sig-col sig-col-gain">
          <p className="sig-col-h">What you gain</p>
          <ul>{c.gain!.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </Reveal>
    );
  }
  // fundgap
  return (
    <Reveal className="sig sig-fundgap">
      <div className="sig-bar-row">
        <span className="sig-bar-lab">Needed 2026–28</span>
        <div className="sig-bar-track"><div className="sig-bar barfill" style={{ '--w': '100%' } as React.CSSProperties}>$18.0B</div></div>
      </div>
      <div className="sig-bar-row">
        <span className="sig-bar-lab">Pledged so far</span>
        <div className="sig-bar-track"><div className="sig-bar barfill sig-gap" style={{ '--w': '66%' } as React.CSSProperties}>$11.85B</div></div>
      </div>
      <p className="sig-cap">A <strong>~$6B shortfall</strong>, and external health aid is projected to fall <strong>30–40%</strong>. Proof, not promises, is what scales now.</p>
    </Reveal>
  );
}

export function AudiencePage({ audience }: { audience: Audience }) {
  const c = CONTENT[audience];
  useEffect(() => {
    const prev = document.title;
    document.title = `${c.eyebrow} • EECA Lung Health Sovereignty Hub`;
    return () => { document.title = prev; };
  }, [c.eyebrow]);

  return (
    <SiteLayout>
      {/* 1 · Hook */}
      <section className="page-hero aud-hero">
        <div className="aud-hero-bg" style={{ '--aud-img': `url(${c.heroImg})` } as React.CSSProperties} aria-hidden="true" />
        <div className="page-hero-inner container">
          <p className="page-hero-eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <p className="page-hero-lead">{c.lead}</p>
          <div className="aud-hero-cta">
            <Link to="/consultation#consultation-form" className="btn btn-primary">{c.ctaLabel}</Link>
            <ConceptNoteModal variant="link" />
          </div>
          <p className="aud-proof">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
            {c.heroProof}
          </p>
        </div>
      </section>

      {/* 2 · Tension + signature */}
      <section className="section aud-tension">
        <div className="container aud-tension-grid">
          <Reveal>
            <p className="eyebrow">{c.tension.eyebrow}</p>
            <h2>{c.tension.title}</h2>
            <p className="section-lead">{c.tension.body}</p>
          </Reveal>
          <Signature c={c} />
        </div>
      </section>

      {/* 3 · The turn */}
      <section className="section aud-why">
        <div className="container">
          <Reveal><p className="eyebrow eyebrow-onDark">Why it matters to you</p></Reveal>
          <Reveal><h2>What changes for you.</h2></Reveal>
          <div className="impact-grid">
            {c.why.map((w, i) => (
              <Reveal as="article" className="impact-card" delay={i * 90} key={w.t}>
                <span className="impact-idx" aria-hidden="true">0{i + 1}</span>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · What you get */}
      <section className="section section-alt">
        <div className="container aud-get">
          <Reveal className="aud-get-head">
            <p className="eyebrow">{c.getTitle}</p>
            <h2>Built around what you need.</h2>
          </Reveal>
          <ul className="aud-list">
            {c.get.map((g, i) => (
              <Reveal as="li" delay={i * 70} key={g}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                <span>{g}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 · Invitation + proof band */}
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
          <h2>{c.closingTitle}</h2>
          <p className="cta-lead">{c.closingLead}</p>
          <div className="cta-buttons">
            <Link to="/consultation#consultation-form" className="btn btn-primary">{c.ctaLabel}</Link>
            <Link to="/" className="btn btn-secondary">Back to overview</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

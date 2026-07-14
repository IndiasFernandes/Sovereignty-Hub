import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../components/Layout';
import { ConceptNoteModal } from '../components/ConceptNoteModal';
import '../audience.css';

type Audience = 'policymakers' | 'partners' | 'donors';

type Content = {
  eyebrow: string;
  title: string;
  lead: string;
  ctaLabel: string;
  heroProof: string;
  story: { eyebrow: string; title: string; body: string; pullNum: string; pullLabel: string };
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
    lead: 'Move from commitment to enacted policy in weeks — with governed, human-reviewed tools and the backing of a proven regional parliamentary network.',
    ctaLabel: 'Request a consultation',
    heroProof: 'Backed by nine national caucuses — active since 2014.',
    story: {
      eyebrow: 'The pressure',
      title: 'Too many laws. Too little implementation.',
      body: 'An average parliamentarian faces a deluge of legislation, and complex health policy stalls between commitment and action. Donors withdraw, systems fragment, and patients wait. The gap between a decision and delivered care is exactly where lives are lost — and where the Hub works.',
      pullNum: 'Weeks',
      pullLabel: 'from decision to enacted, financed policy',
    },
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
    story: {
      eyebrow: 'The opportunity',
      title: 'A region rebuilding its health systems.',
      body: 'As external funding recedes, Eastern Europe & Central Asia is building self-reliant health infrastructure — and it needs technology, diagnostics and capital that come with a governed home. The Hub gives your contribution a defined role, a live pathway to scale, and a measurable return.',
      pullNum: '9',
      pullLabel: 'countries to scale a proven model across',
    },
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
    story: {
      eyebrow: 'The moment',
      title: 'Proof matters more than promises.',
      body: 'Global donors are stepping back from the region just as the need peaks. Funders now want evidence, not pilots that never scale. The Hub delivers a working result in a single country first — so your capital backs a proven unit, then replicates it, rather than funding a promise.',
      pullNum: '300K+',
      pullLabel: 'vulnerable patients the model protects',
    },
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
  { v: '300K+', l: 'patients in scope' },
  { v: '9', l: 'national caucuses' },
  { v: '18', l: 'priority countries' },
  { v: '2014', l: 'network active since' },
];

export function AudiencePage({ audience }: { audience: Audience }) {
  const c = CONTENT[audience];
  useEffect(() => {
    const prev = document.title;
    document.title = `${c.eyebrow} • EECA Lung Health Sovereignty Hub`;
    return () => { document.title = prev; };
  }, [c.eyebrow]);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="page-hero aud-hero">
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

      {/* Story — stakes + pull-stat */}
      <section className="section aud-story">
        <div className="container aud-story-grid">
          <div>
            <p className="eyebrow">{c.story.eyebrow}</p>
            <h2>{c.story.title}</h2>
            <p className="section-lead">{c.story.body}</p>
          </div>
          <div className="aud-pull">
            <strong>{c.story.pullNum}</strong>
            <span>{c.story.pullLabel}</span>
          </div>
        </div>
      </section>

      {/* Why it matters — dark glass cards */}
      <section className="section aud-why">
        <div className="container">
          <p className="eyebrow eyebrow-onDark">Why it matters to you</p>
          <h2>What changes for you.</h2>
          <div className="impact-grid">
            {c.why.map((w, i) => (
              <article className="impact-card" key={w.t}>
                <span className="impact-idx" aria-hidden="true">0{i + 1}</span>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="section section-alt">
        <div className="container aud-get">
          <div className="aud-get-head">
            <p className="eyebrow">{c.getTitle}</p>
            <h2>Built around what you need.</h2>
          </div>
          <ul className="aud-list">
            {c.get.map((g) => (
              <li key={g}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA + proof band */}
      <section className="section cta-section">
        <div className="container">
          <ul className="aud-proofbar">
            {PROOF.map((p) => (
              <li key={p.l}><strong>{p.v}</strong><span>{p.l}</span></li>
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

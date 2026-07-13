import { Link } from 'react-router-dom';
import { ConceptNoteModal } from '../components/ConceptNoteModal';
import { SiteLayout } from '../components/Layout';
import { T, useI18n } from '../i18n/I18nProvider';

const svg = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
const SOL_ICONS = {
  // Engine — legislative platform (chip / processor)
  eng: (
    <svg {...svg}><rect x="6.5" y="6.5" width="11" height="11" rx="2" /><path d="M9.5 2.5v3M14.5 2.5v3M9.5 18.5v3M14.5 18.5v3M2.5 9.5h3M2.5 14.5h3M18.5 9.5h3M18.5 14.5h3" /><path d="M10.5 10.5h3v3h-3z" /></svg>
  ),
  // Bridge — political coordination (arch bridge)
  bri: (
    <svg {...svg}><path d="M3 17v-2a9 9 0 0 1 18 0v2" /><path d="M2.5 17h19" /><path d="M7.5 17v-3.5M16.5 17v-3.5M12 17v-5" /></svg>
  ),
  // Shield — crisis & continuity
  shi: (
    <svg {...svg}><path d="M12 2.75l7 2.75v5.25c0 4.4-3 7.4-7 8.9-4-1.5-7-4.5-7-8.9V5.5l7-2.75z" /><path d="M9 11.5l2 2 4-4" /></svg>
  ),
};

// Four Imperatives icons (Global Fund transition · lung-health crises · geopolitical · decision lag)
const CRISIS_ICONS = [
  <svg {...svg} key="1"><path d="M21 8l-7.5 7.5-4-4L3 18" /><path d="M15 8h6v6" /></svg>,
  <svg {...svg} key="2"><path d="M3 12h4l2.5 7 5-14 2.5 7H21" /></svg>,
  <svg {...svg} key="3"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" /></svg>,
  <svg {...svg} key="4"><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" /></svg>,
];

export function HomePage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="hero hero-feature">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow"><T k="hero-eyebrow" /></p>
            <h1><T k="hero-headline" html /></h1>
            <p className="hero-lead"><T k="hero-lead" /></p>
            <div className="hero-buttons">
              <Link to="/consultation#consultation-form" className="btn btn-primary"><T k="hero-consultation" /></Link>
              <a href="#what-is" className="btn btn-hero-secondary"><T k="hero-cta" /></a>
            </div>
          </div>
          <aside className="hero-statcard" aria-label="Programme at a glance">
            <p className="statcard-eyebrow"><T k="statcard-eyebrow" /></p>
            <p className="statcard-text"><T k="statcard-text" /></p>
            <ul className="statgrid">
              {(['1', '2', '3', '4'] as const).map((n) => (
                <li key={n}>
                  <strong><T k={`stat${n}v`} /></strong>
                  <span><T k={`stat${n}l`} /></span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="what-is" className="section section-alt">
        <div className="container">
          <h2><T k="what-is-title" /></h2>
          <div className="intro-block">
            <p><T k="what-is-p1" html /></p>
            <p><T k="what-is-p2" html /></p>
          </div>
          <a href="#urgency" className="link-arrow"><T k="what-is-link" /></a>
        </div>
      </section>

      <section id="urgency" className="section opp">
        <div className="container opp-grid">
          <div className="opp-aside">
            <p className="eyebrow eyebrow-onDark"><T k="opp-eyebrow" /></p>
            <h2><T k="urgency-title" /></h2>
            <p className="section-lead"><T k="urgency-lead" /></p>
            <div className="opp-stat">
              <strong><T k="opp-stat-num" /></strong>
              <span><T k="opp-stat-label" /></span>
            </div>
          </div>
          <ol className="opp-list">
            {(['1', '2', '3', '4'] as const).map((n, i) => (
              <li className="opp-item" key={n}>
                <span className="opp-icon" aria-hidden="true">{CRISIS_ICONS[i]}</span>
                <div className="opp-body">
                  <h3><T k={`crisis${n}-title`} /></h3>
                  <p><T k={`crisis${n}-text`} /></p>
                </div>
                <span className="opp-idx" aria-hidden="true">0{n}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="solution" className="section section-alt">
        <div className="container">
          <h2><T k="solution-title" /></h2>
          <p className="section-lead"><T k="solution-lead" /></p>

          <div className="sol-grid">
            {([
              { k: 'eng', icon: SOL_ICONS.eng },
              { k: 'bri', icon: SOL_ICONS.bri },
              { k: 'shi', icon: SOL_ICONS.shi },
            ] as const).map((c) => (
              <article className={`sol-card sol-${c.k}`} key={c.k}>
                <div className="sol-head">
                  <div className="sol-badge" aria-hidden="true">{c.icon}</div>
                  <div className="sol-role"><T k={`${c.k}-role`} /></div>
                  <h3><T k={`${c.k}-name`} /></h3>
                  <p className="sol-fn"><T k={`${c.k}-fn`} /></p>
                </div>
                <ul className="sol-list" dangerouslySetInnerHTML={{ __html: t(`${c.k}-list`) }} />
                <div className="sol-foot"><T k={`${c.k}-foot`} /></div>
              </article>
            ))}
          </div>

          <div className="sol-foundation">
            <div className="sol-found-ico" aria-hidden="true">🛡️</div>
            <div>
              <div className="sol-found-t"><T k="sol-found-title" /></div>
              <div className="sol-found-s"><T k="sol-found-sub" /></div>
            </div>
          </div>

          <div className="sol-standards">
            <p className="sol-std-eyebrow"><T k="sol-std-eyebrow" /></p>
            <div className="sol-std-grid">
              {(['1', '2', '3', '4'] as const).map((n) => (
                <div className="sol-std" key={n}>
                  <strong><T k={`std${n}-t`} /></strong>
                  <span><T k={`std${n}-s`} /></span>
                </div>
              ))}
            </div>
          </div>

          <div className="sol-callout">
            <strong><T k="sol-callout-t" /></strong>
            <p><T k="sol-callout-p" /></p>
          </div>
        </div>
      </section>

      <section id="investment" className="section invest">
        <div className="container">
          <p className="eyebrow eyebrow-onDark"><T k="nav-investment" /></p>
          <h2><T k="investment-title" /></h2>
          <p className="section-lead"><T k="investment-lead" /></p>
          <div className="phase-track">
            {([
              { n: 1, w: '12%' },
              { n: 2, w: '40%' },
              { n: 3, w: '55%' },
              { n: 4, w: '100%' },
            ] as const).map(({ n, w }) => (
              <div className="phase-row" key={n}>
                <div className="phase-meta">
                  <strong><T k={`phase${n}-tag`} /></strong>
                  <span><T k={`phase${n}-when`} /></span>
                </div>
                <div className="phase-viz">
                  <div className="phase-bar-track">
                    <div className="phase-bar" style={{ width: w }}>
                      <span className="phase-amt"><T k={`phase${n}-amt`} /></span>
                    </div>
                  </div>
                  <p className="phase-desc"><T k={`phase${n}-desc`} /></p>
                </div>
              </div>
            ))}
          </div>
          <div className="invest-total">
            <span><T k="invest-total-label" /></span>
            <strong><T k="invest-total-value" /></strong>
          </div>
        </div>
      </section>

      <section id="governance" className="section section-alt">
        <div className="container">
          <h2><T k="gov-title" /></h2>
          <p className="section-lead"><T k="gov-lead" /></p>
          <div className="governance-content">
            {['gov-p1', 'gov-p2', 'gov-p3', 'gov-p4', 'gov-p5'].map((k) => (
              <p key={k}><T k={k} html /></p>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2><T k="cta-title" /></h2>
          <p className="cta-lead"><T k="cta-lead" /></p>
          <p className="cta-sub"><T k="cta-sub" /></p>
          <div className="cta-buttons">
            <Link to="/consultation#consultation-form" className="btn btn-primary"><T k="cta-consultation" /></Link>
            <a href="#what-is" className="btn btn-secondary"><T k="cta-learn" /></a>
            <ConceptNoteModal />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

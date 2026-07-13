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

      <section id="urgency" className="section">
        <div className="container">
          <h2><T k="urgency-title" /></h2>
          <p className="section-lead"><T k="urgency-lead" /></p>
          <div className="diagram-block">
            <div className="diagram crisis-intersection">
              <div className="diagram-center"><span><T k="urgency-center" /></span></div>
              <div className="diagram-node node-1"><span>1</span><small><T k="urgency-node1" /></small></div>
              <div className="diagram-node node-2"><span>2</span><small><T k="urgency-node2" /></small></div>
              <div className="diagram-node node-3"><span>3</span><small><T k="urgency-node3" /></small></div>
              <div className="diagram-node node-4"><span>4</span><small><T k="urgency-node4" /></small></div>
            </div>
            <figcaption><T k="urgency-caption" /></figcaption>
          </div>
          <div className="crisis-grid">
            {(['1', '2', '3', '4'] as const).map((n) => (
              <article className="crisis-card" key={n}>
                <span className="crisis-num">0{n}</span>
                <h3><T k={`crisis${n}-title`} /></h3>
                <p><T k={`crisis${n}-text`} /></p>
              </article>
            ))}
          </div>
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

      <section id="investment" className="section">
        <div className="container">
          <h2><T k="investment-title" /></h2>
          <p className="section-lead"><T k="investment-lead" /></p>
          <div className="benefits-grid">
            {[1, 2, 3].map((n) => (
              <article className="benefit-card" key={n}>
                <div className="benefit-icon" aria-hidden="true">{n === 1 ? '$' : n === 2 ? '⊕' : '▢'}</div>
                <h3><T k={`benefit${n}-title`} /></h3>
                <p className="benefit-tagline"><T k={`benefit${n}-tagline`} /></p>
                <p><T k={`benefit${n}-text`} /></p>
                <p className="benefit-demo"><T k={`benefit${n}-demo`} html /></p>
              </article>
            ))}
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

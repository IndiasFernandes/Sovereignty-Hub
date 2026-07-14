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

      <section id="who" className="section who">
        <div className="container">
          <p className="eyebrow"><T k="who-eyebrow" /></p>
          <h2><T k="who-title" /></h2>
          <p className="section-lead"><T k="who-lead" /></p>
          <div className="who-grid">
            {([
              { to: '/policymakers', t: 'who-pm-t', d: 'who-pm-d' },
              { to: '/partners', t: 'who-pa-t', d: 'who-pa-d' },
              { to: '/donors', t: 'who-do-t', d: 'who-do-d' },
            ] as const).map((w) => (
              <Link className="who-card" to={w.to} key={w.to}>
                <strong><T k={w.t} /></strong>
                <span><T k={w.d} /></span>
                <span className="who-arrow"><T k="who-cta" /> →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="what-is" className="section section-alt whatis">
        <div className="container whatis-grid">
          <div className="whatis-head">
            <p className="eyebrow"><T k="whatis-eyebrow" /></p>
            <h2><T k="what-is-title" /></h2>
          </div>
          <div className="whatis-body">
            <p><T k="what-is-p1" html /></p>
            <p><T k="what-is-p2" html /></p>
            <a href="#urgency" className="link-arrow"><T k="what-is-link" /></a>
          </div>
        </div>
        <div className="container credstrip">
          <span className="credstrip-label"><T k="cred-label" /></span>
          <ul className="country-chips">
            {t('countries').split('·').map((c) => (
              <li key={c}>{c.trim()}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="urgency" className="section opp">
        <div className="container opp-grid opp-grid-2">
          <div className="opp-aside">
            <p className="eyebrow eyebrow-onDark"><T k="opp-eyebrow" /></p>
            <h2><T k="urgency-title" /></h2>
            <p className="section-lead"><T k="urgency-lead" /></p>
          </div>
          <figure className="opp-chart">
            {([
              { l: 'opp-bar1-label', v: 'opp-bar1-val', w: '85%' },
              { l: 'opp-bar2-label', v: 'opp-bar2-val', w: '99%' },
            ] as const).map((b) => (
              <div className="opp-bar-row" key={b.l}>
                <span className="opp-bar-label"><T k={b.l} /></span>
                <div className="opp-bar-track">
                  <div className="opp-bar" style={{ width: b.w }}>
                    <b><T k={b.v} /></b>
                  </div>
                </div>
              </div>
            ))}
            <figcaption><T k="opp-chart-cap" /></figcaption>
          </figure>
        </div>
      </section>

      <section id="impact" className="section impact">
        <div className="container">
          <p className="eyebrow"><T k="impact-eyebrow" /></p>
          <h2><T k="impact-title" /></h2>
          <p className="section-lead"><T k="impact-lead" /></p>
          <div className="impact-grid">
            {(['1', '2', '3', '4'] as const).map((n) => (
              <article className="impact-card" key={n}>
                <span className="impact-idx" aria-hidden="true">0{n}</span>
                <h3><T k={`impact${n}-t`} /></h3>
                <p><T k={`impact${n}-d`} /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="section section-alt">
        <div className="container">
          <p className="eyebrow"><T k="nav-approach" /></p>
          <h2><T k="solution-title" /></h2>
          <p className="section-lead"><T k="solution-lead" /></p>

          <div className="loop" role="img" aria-label="Decision to delivered care flows through the Engine, Bridge and Shield over a shared governed data layer.">
            <div className="loop-flow">
              <div className="loop-end">
                <span className="loop-dot" aria-hidden="true" />
                <span className="loop-end-label"><T k="loop-decision" /></span>
              </div>
              {([
                { k: 'eng', icon: SOL_ICONS.eng },
                { k: 'bri', icon: SOL_ICONS.bri },
                { k: 'shi', icon: SOL_ICONS.shi },
              ] as const).map((c) => (
                <div className="loop-node" key={c.k}>
                  <span className="loop-badge" aria-hidden="true">{c.icon}</span>
                  <strong><T k={`loop-${c.k}`} /></strong>
                  <span className="loop-role"><T k={`${c.k}-role`} /></span>
                </div>
              ))}
              <div className="loop-end loop-end-out">
                <span className="loop-dot" aria-hidden="true" />
                <span className="loop-end-label"><T k="loop-delivery" /></span>
              </div>
              <span className="loop-pulse" aria-hidden="true" />
            </div>
            <div className="loop-foundation">{/* governed data layer bar */}
              <span><T k="loop-foundation" /></span>
            </div>
            <p className="loop-caption"><T k="loop-caption" /></p>
          </div>

          <p className="sol-trust"><T k="sol-trust" /></p>
        </div>
      </section>

      <section id="investment" className="section invest">
        <div className="container">
          <p className="eyebrow eyebrow-onDark"><T k="nav-investment" /></p>
          <h2><T k="investment-title" /></h2>
          <p className="section-lead"><T k="investment-lead" /></p>
          <ol className="path">
            {(['1', '2', '3', '4'] as const).map((n) => (
              <li className="path-step" key={n}>
                <span className="path-num" aria-hidden="true">0{n}</span>
                <div className="path-body">
                  <strong><T k={`phase${n}-tag`} /></strong>
                  <span className="path-when"><T k={`phase${n}-when`} /></span>
                  <p><T k={`phase${n}-desc`} /></p>
                </div>
              </li>
            ))}
          </ol>
          <p className="invest-note"><T k="approach-confidential" /></p>
        </div>
      </section>

      <section id="governance" className="section section-alt gov">
        <div className="container">
          <p className="eyebrow"><T k="gov-eyebrow" /></p>
          <h2><T k="gov-title" /></h2>
          <p className="section-lead"><T k="gov-lead" /></p>
          <div className="gov-chart">
            <div className="gov-node gov-node-lead">
              <strong><T k="gov-node1-t" /></strong>
              <span><T k="gov-node1-d" /></span>
            </div>
            <div className="gov-stem" aria-hidden="true" />
            <div className="gov-row">
              {(['2', '3', '4', '5'] as const).map((n) => (
                <div className="gov-node" key={n}>
                  <strong><T k={`gov-node${n}-t`} /></strong>
                  <span><T k={`gov-node${n}-d`} /></span>
                </div>
              ))}
            </div>
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

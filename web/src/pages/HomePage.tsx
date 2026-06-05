import { Link } from 'react-router-dom';
import { ConceptNoteModal } from '../components/ConceptNoteModal';
import { SiteLayout } from '../components/Layout';
import { T } from '../i18n/I18nProvider';

export function HomePage() {
  return (
    <SiteLayout>
      <section className="hero">
        <div className="hero-content">
          <h1><T k="hero-title" /></h1>
          <p className="hero-subtitle"><T k="hero-subtitle" /></p>
          <p className="hero-tagline"><T k="hero-tagline" /></p>
          <div className="hero-buttons">
            <Link to="/consultation#consultation-form" className="btn btn-primary"><T k="hero-consultation" /></Link>
            <a href="#what-is" className="btn btn-hero-secondary"><T k="hero-cta" /></a>
          </div>
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
          <div className="diagram-block">
            <div className="diagram hub-architecture">
              <div className="hub-core">
                <strong><T k="hub-core-title" /></strong>
                <span><T k="hub-core-sub" /></span>
              </div>
              <div className="pod pod-a"><strong>A</strong><span><T k="pod-a-title" html /></span></div>
              <div className="pod pod-b"><strong>B</strong><span><T k="pod-b-title" html /></span></div>
              <div className="pod pod-c"><strong>C</strong><span><T k="pod-c-title" html /></span></div>
            </div>
            <figcaption><T k="solution-caption" /></figcaption>
          </div>
          <figure className="visual-figure">
            <img src="/assets/images/diagrams/hub-governance-pillars.png" alt="" loading="lazy" />
            <figcaption><T k="hub-diagram-caption" /></figcaption>
          </figure>
          <div className="components-table">
            <table>
              <thead>
                <tr>
                  <th><T k="table-component" /></th>
                  <th><T k="table-function" /></th>
                  <th><T k="table-deliverables" /></th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['gov-row', 'gov-func', 'gov-deliver'],
                  ['pillar1-row', 'pillar1-func', 'pillar1-deliver'],
                  ['pillar2-row', 'pillar2-func', 'pillar2-deliver'],
                  ['pillar3-row', 'pillar3-func', 'pillar3-deliver'],
                ].map(([row, func, del]) => (
                  <tr key={row}>
                    <td><strong><T k={row} /></strong></td>
                    <td><T k={func} /></td>
                    <td><T k={del} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
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

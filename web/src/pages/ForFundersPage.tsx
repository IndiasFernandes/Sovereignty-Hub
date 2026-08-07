import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../components/Layout';
import { BriefingCTA } from '../components/BriefingCTA';
import { T, useI18n } from '../i18n/I18nProvider';

type CouncilMember = {
  key: string;
  photo: string;
  nameKey: string;
  roleKey: string;
  invited?: boolean;
};

const COUNCIL: CouncilMember[] = [
  { key: 'gayane', photo: '/assets/images/team/team-gayane.png', nameKey: 'council-a-name', roleKey: 'council-a-role' },
  { key: 'alesia', photo: '/assets/images/team/team-alesia.png', nameKey: 'council-b-name', roleKey: 'council-b-role' },
  { key: 'invited', photo: '', nameKey: 'council-c-name', roleKey: 'council-c-role', invited: true },
];

const USE_OF_FUNDS = [
  { key: 'engine', pctKey: 'funders-uof-a-pct', labelKey: 'funders-uof-a-lab' },
  { key: 'bridge', pctKey: 'funders-uof-b-pct', labelKey: 'funders-uof-b-lab' },
  { key: 'shield', pctKey: 'funders-uof-c-pct', labelKey: 'funders-uof-c-lab' },
  { key: 'gov', pctKey: 'funders-uof-d-pct', labelKey: 'funders-uof-d-lab' },
] as const;

export function ForFundersPage() {
  const { t } = useI18n();
  useEffect(() => {
    const prev = document.title;
    document.title = `${t('funders-hero-title')} • EECA Lung Health Sovereignty Hub`;
    return () => {
      document.title = prev;
    };
  }, [t]);

  return (
    <SiteLayout>
      <section className="page-hero funders-hero">
        <div className="page-hero-inner container">
          <p className="page-hero-eyebrow"><T k="funders-hero-eyebrow" /></p>
          <h1><T k="funders-hero-title" /></h1>
          <p className="page-hero-lead"><T k="funders-hero-lead" /></p>
          <div className="funders-hero-cta">
            <BriefingCTA variant="primary" kind="briefing" />
            <Link to="/concept-note" className="btn btn-secondary"><T k="briefing-secondary" /></Link>
            <BriefingCTA variant="inline" kind="mou" labelKey="briefing-tertiary" />
          </div>
          <p className="funders-hero-proof"><T k="working-pilot-proof" /></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow"><T k="funders-impact-eyebrow" /></p>
          <h2 className="funders-impact-title"><T k="funders-impact-title" /></h2>
          <p className="section-lead"><T k="funders-impact-lead" /></p>
          <div className="funders-impact-grid">
            {(['a', 'b', 'c'] as const).map((k) => (
              <article className="funders-impact-card" key={k}>
                <strong className="funders-impact-value"><T k={`funders-impact-${k}-val`} /></strong>
                <p className="funders-impact-desc"><T k={`funders-impact-${k}-desc`} /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow"><T k="funders-uof-eyebrow" /></p>
          <h2><T k="funders-uof-title" /></h2>
          <p className="section-lead"><T k="funders-uof-lead" /></p>
          <div className="funders-uof-grid">
            {USE_OF_FUNDS.map((row) => (
              <div className="funders-uof-row" key={row.key}>
                <div className="funders-uof-lab">
                  <strong><T k={row.labelKey} /></strong>
                </div>
                <div className="funders-uof-bar-wrap">
                  <div
                    className="funders-uof-bar"
                    data-key={row.key}
                    style={{ width: `var(--uof-${row.key})` }}
                  />
                  <span className="funders-uof-pct"><T k={row.pctKey} /></span>
                </div>
              </div>
            ))}
          </div>
          <p className="funders-uof-caveat"><T k="uof-chart-caveat" /></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow"><T k="council-title" /></p>
          <div className="council-strip">
            {COUNCIL.map((m) => (
              <div className={`council-card${m.invited ? ' is-invited' : ''}`} key={m.key}>
                {m.photo ? (
                  <img src={m.photo} alt="" loading="lazy" />
                ) : (
                  <div className="council-monogram" aria-hidden="true">
                    <span>WE</span>
                  </div>
                )}
                <div className="council-meta">
                  <strong><T k={m.nameKey} /></strong>
                  <span><T k={m.roleKey} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2><T k="funders-cta-title" /></h2>
          <p className="cta-lead"><T k="funders-cta-lead" /></p>
          <div className="cta-buttons">
            <BriefingCTA variant="primary" kind="briefing" />
            <Link to="/concept-note" className="btn btn-secondary"><T k="briefing-secondary" /></Link>
            <BriefingCTA variant="secondary" kind="mou" labelKey="briefing-tertiary" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

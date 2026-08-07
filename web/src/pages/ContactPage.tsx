import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../components/Layout';
import { BriefingCTA } from '../components/BriefingCTA';
import { useI18n } from '../i18n/I18nProvider';
import { tr } from '../i18n/formRu';
import '../audience.css';

const PATHS = [
  { to: '/policymakers', t: 'Policymakers', d: 'MPs, ministries and national caucuses.' },
  { to: '/partners', t: 'Partners', d: 'Organisations, funders, technology and diagnostics.' },
];

export function ContactPage() {
  const { lang } = useI18n();
  useEffect(() => {
    const prev = document.title;
    document.title = `${tr('Contact', lang)} • EECA Lung Health Sovereignty Hub`;
    return () => { document.title = prev; };
  }, [lang]);

  return (
    <SiteLayout>
      <section className="page-hero aud-hero">
        <div className="page-hero-inner container">
          <p className="page-hero-eyebrow">{tr('Contact', lang)}</p>
          <h1>{tr("Let's talk.", lang)}</h1>
          <p className="page-hero-lead">
            {tr('The fastest way to reach us is the consultation form — it routes your message to the right person on our team. Partner and funding discussions are handled in confidence.', lang)}
          </p>
          <div className="aud-hero-cta">
            <BriefingCTA variant="primary" kind="briefing" />
            <Link to="/concept-note" className="concept-note-link">{tr('Download the concept note', lang)}</Link>
          </div>
          <p className="aud-proof">
            {tr('Or email us directly:', lang)}{' '}
            <a href="mailto:alesia.matusevych@globaltbcaucus.org">alesia.matusevych@globaltbcaucus.org</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{tr('Choose the path that fits.', lang)}</h2>
          <div className="contact-paths">
            {PATHS.map((p) => (
              <Link className="contact-path" to={p.to} key={p.to}>
                <strong>{tr(p.t, lang)}</strong>
                <span>{tr(p.d, lang)}</span>
                <span className="contact-path-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router';
import { SiteLayout } from '../components/Layout';
import '../audience.css';

const PATHS = [
  { to: '/policymakers', t: 'Policymakers', d: 'MPs, ministries and national caucuses.' },
  { to: '/partners', t: 'Partners', d: 'Organisations, technology and diagnostics.' },
  { to: '/donors', t: 'Donors', d: 'Funders and foundations.' },
];

export function ContactPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Contact • EECA Lung Health Sovereignty Hub';
    return () => { document.title = prev; };
  }, []);

  return (
    <SiteLayout>
      <section className="page-hero aud-hero">
        <div className="page-hero-inner container">
          <p className="page-hero-eyebrow">Contact</p>
          <h1>Let's talk.</h1>
          <p className="page-hero-lead">
            The fastest way to reach us is the consultation form — it routes your message to the right
            person on our team. Partner and funding discussions are handled in confidence.
          </p>
          <div className="aud-hero-cta">
            <Link to="/consultation#consultation-form" className="btn btn-primary">Request a consultation</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Who are you?</p>
          <h2>Choose the path that fits.</h2>
          <div className="contact-paths">
            {PATHS.map((p) => (
              <Link className="contact-path" to={p.to} key={p.to}>
                <strong>{p.t}</strong>
                <span>{p.d}</span>
                <span className="contact-path-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

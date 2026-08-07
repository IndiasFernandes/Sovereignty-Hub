import { T } from '../i18n/I18nProvider';

const ICONS = {
  who: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M8 7l3 3M16 7l-3 3M8 17l3-3M16 17l-3-3" />
    </svg>
  ),
  gdpr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.4-3 7.4-7 8.9C8 17.4 5 14.4 5 11V6l7-3z" />
      <path d="M9 11.5l2 2 4-4" />
    </svg>
  ),
  sovereign: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="7" width="17" height="12" rx="2" />
      <path d="M8 7V5a4 4 0 0 1 8 0v2" />
      <circle cx="12" cy="13" r="1.5" />
    </svg>
  ),
  audit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
      <path d="M14 3v5h5" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  ),
};

const ITEMS = [
  { key: 'trust-a', icon: ICONS.who },
  { key: 'trust-b', icon: ICONS.network },
  { key: 'trust-c', icon: ICONS.gdpr },
  { key: 'trust-d', icon: ICONS.sovereign },
  { key: 'trust-e', icon: ICONS.audit },
] as const;

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Trust and governance signals">
      <div className="container trust-strip-inner">
        {ITEMS.map((item) => (
          <div className="trust-chip" key={item.key}>
            <span className="trust-chip-icon" aria-hidden="true">{item.icon}</span>
            <span className="trust-chip-label"><T k={item.key} /></span>
          </div>
        ))}
      </div>
    </section>
  );
}

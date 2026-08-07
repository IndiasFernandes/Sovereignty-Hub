import { T, useI18n } from '../i18n/I18nProvider';

type Tier = {
  key: 'founding' | 'regional' | 'platform';
  amount: string;
  benefits: number;
};

const TIERS: Tier[] = [
  { key: 'founding', amount: '$60K', benefits: 5 },
  { key: 'regional', amount: '$250K', benefits: 5 },
  { key: 'platform', amount: '$1M+', benefits: 5 },
];

function tierMailto(tierKey: Tier['key'], lang: 'en' | 'ru'): string {
  const tierLabelEn = { founding: 'Founding Funder', regional: 'Regional Partner', platform: 'Platform Underwriter' }[tierKey];
  const subject =
    lang === 'ru'
      ? `Обсуждение уровня — ${tierLabelEn} — Sovereignty Hub`
      : `Tier discussion — ${tierLabelEn} — Sovereignty Hub`;
  const body =
    lang === 'ru'
      ? `Здравствуйте, Алесия,\n\nМы хотели бы обсудить участие на уровне ${tierLabelEn} EECA Lung Health Sovereignty Hub.\n\nОрганизация:\nИмя:\nРоль:\n\nСпасибо.`
      : `Hello Alesia,\n\nWe'd like to explore participation at the ${tierLabelEn} tier of the EECA Lung Health Sovereignty Hub.\n\nOrganisation:\nName:\nRole:\n\nThanks.`;
  const params = new URLSearchParams({
    cc: 'hello@innerflect.tech',
    subject,
    body,
  });
  return `mailto:alesia.matusevych@globaltbcaucus.org?${params.toString().replace(/\+/g, '%20')}`;
}

export function TierGrid() {
  const { lang } = useI18n();

  return (
    <section className="tier-section">
      <div className="tier-head">
        <p className="eyebrow"><T k="tiers-eyebrow" /></p>
        <h2 className="tier-title"><T k="tiers-title" /></h2>
        <p className="section-lead"><T k="tiers-lead" /></p>
      </div>
      <div className="tier-grid">
        {TIERS.map((tier) => (
          <article
            className={`tier-card tier-${tier.key}${tier.key === 'founding' ? ' is-featured' : ''}`}
            key={tier.key}
          >
            <header className="tier-card-head">
              <p className="tier-badge"><T k={`tier-${tier.key}-name`} /></p>
              <p className="tier-amount">{tier.amount}</p>
              <p className="tier-tagline"><T k={`tier-${tier.key}-tagline`} /></p>
            </header>
            <ul className="tier-benefits">
              {Array.from({ length: tier.benefits }).map((_, i) => (
                <li key={i}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <T k={`tier-${tier.key}-b${i + 1}`} />
                </li>
              ))}
            </ul>
            <a
              className={`btn ${tier.key === 'founding' ? 'btn-primary' : 'btn-secondary'} tier-cta`}
              href={tierMailto(tier.key, lang)}
            >
              <T k="tier-cta" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

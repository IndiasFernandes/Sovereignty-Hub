import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

type HeaderProps = {
  current?: 'home' | 'team' | 'consultation';
};

export function Header({ current }: HeaderProps) {
  const { lang, setLang, t } = useI18n();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const onConsultation = current === 'consultation' || location.pathname.startsWith('/consultation');

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`header${menuOpen ? ' nav-open' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-icon">EECA</span>
          <span className="logo-text">{t('logo-text')}</span>
        </Link>
        <Link
          to="/consultation#consultation-form"
          className="nav-consultation-cta nav-consultation-bar"
          aria-current={onConsultation ? 'page' : undefined}
          onClick={() => setMenuOpen(false)}
        >
          {t('nav-consultation')}
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
        </button>
        <nav className="nav" id="main-nav" aria-label="Main navigation">
          <ul onClick={() => setMenuOpen(false)}>
            <li><a href="/#what-is">{t('nav-overview')}</a></li>
            <li><a href="/#impact">{t('nav-impact')}</a></li>
            <li><a href="/#solution">{t('nav-approach')}</a></li>
            <li><Link to="/team">{t('nav-team')}</Link></li>
          </ul>
          <Link
            to="/consultation#consultation-form"
            className="nav-consultation-cta nav-consultation-menu"
            aria-current={onConsultation ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {t('nav-consultation')}
          </Link>
          <div className="lang-switcher" role="group" aria-label="Language selection">
            <button
              type="button"
              className={`lang-btn${lang === 'en' ? ' is-active' : ''}`}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn${lang === 'ru' ? ' is-active' : ''}`}
              aria-pressed={lang === 'ru'}
              onClick={() => setLang('ru')}
            >
              RU
            </button>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">EECA</span>
            <strong>{t('footer-brand')}</strong>
          </Link>
          <p>{t('footer-tagline')}</p>
          <div className="footer-partners" aria-label="Foundational partner">
            <span className="footer-partners-label">{t('footer-partner')}</span>
            <a
              href="https://www.globaltbcaucus.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo"
              aria-label="Global TB Caucus — opens in new tab"
            >
              <img src="/assets/images/logos/01_GTBC_logotype_main_CMJN.jpg" alt="Global TB Caucus" />
            </a>
          </div>
        </div>

        <nav className="footer-col" aria-label="Explore">
          <span className="footer-col-h">{t('footer-explore')}</span>
          <a href="/#what-is">{t('nav-overview')}</a>
          <a href="/#impact">{t('nav-impact')}</a>
          <a href="/#solution">{t('nav-approach')}</a>
          <Link to="/team">{t('nav-team')}</Link>
          <Link to="/consultation#consultation-form">{t('nav-consultation')}</Link>
        </nav>

        <nav className="footer-col" aria-label="Legal">
          <span className="footer-col-h">{t('footer-legal')}</span>
          <Link to="/privacy">{t('footer-privacy')}</Link>
          <Link to="/terms">{t('footer-terms')}</Link>
          <Link to="/disclaimer">{t('footer-disclaimer')}</Link>
        </nav>
      </div>

      <div className="footer-legal-bar">
        <p className="footer-disclaimer">{t('footer-disclaimer-text')}</p>
        <p className="footer-rights">{t('footer-rights')}</p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children, current }: { children: React.ReactNode; current?: HeaderProps['current'] }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header current={current} />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

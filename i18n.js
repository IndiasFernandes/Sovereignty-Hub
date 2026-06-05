/**
 * EECA Hub — Internationalization (i18n)
 * Handles EN/RU language switching and applies translations.
 */

(function () {
  const STORAGE_KEY = 'eeca-hub-lang';
  const DEFAULT_LANG = 'en';

  const t = (key, lang) => {
    if (!translations[lang] || !translations[lang][key]) return key;
    return translations[lang][key];
  };

  const getLang = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'ru' ? 'ru' : 'en';
  };

  const setLang = (lang) => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateSwitcher(lang);
  };

  const applyTranslations = (lang) => {
    const titleKey = document.querySelector('.team-page') ? 'title-team' : 'title-index';
    const title = t(titleKey, lang);
    if (title) document.title = title;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const html = el.getAttribute('data-i18n-html') === 'true';
      const translated = t(key, lang);
      if (translated && translated !== key) {
        if (html) {
          el.innerHTML = translated;
        } else {
          el.textContent = translated;
        }
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translated = t(key, lang);
      if (translated) el.setAttribute('placeholder', translated);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      const translated = t(key, lang);
      if (translated) el.setAttribute('aria-label', translated);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      const translated = t(key, lang);
      if (translated) el.setAttribute('alt', translated);
    });
  };

  const updateSwitcher = (lang) => {
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      const target = btn.getAttribute('data-lang-switch');
      btn.setAttribute('aria-pressed', target === lang ? 'true' : 'false');
      btn.classList.toggle('is-active', target === lang);
    });
  };

  const initSwitcher = () => {
    const container = document.querySelector('.lang-switcher');
    if (!container) return;
    container.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-lang-switch');
        setLang(target);
      });
    });
  };

  const init = () => {
    const lang = getLang();
    document.documentElement.lang = lang;
    applyTranslations(lang);
    initSwitcher();
    updateSwitcher(lang);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.eecaI18n = { setLang, getLang };
})();

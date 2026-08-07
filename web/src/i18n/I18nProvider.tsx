import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { translations } from './translations';

export type Lang = 'en' | 'ru';

const STORAGE_KEY = 'eeca-hub-lang';

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/** Language prefixes we should default to RU for on first visit (EECA + RU-adjacent). */
const RU_DEFAULT_PREFIXES = ['ru', 'uk', 'kk', 'az', 'hy', 'ka', 'be', 'tg', 'uz', 'ky', 'tk'];

function detectFromBrowser(): Lang {
  if (typeof navigator === 'undefined') return 'en';
  const langs = (navigator.languages && navigator.languages.length > 0)
    ? navigator.languages
    : [navigator.language || 'en'];
  for (const raw of langs) {
    const prefix = String(raw).toLowerCase().split(/[-_]/)[0];
    if (prefix === 'en') return 'en';
    if (RU_DEFAULT_PREFIXES.includes(prefix)) return 'ru';
  }
  return 'en';
}

function readStoredLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const fromQuery = new URLSearchParams(window.location.search).get('lang');
  if (fromQuery === 'ru' || fromQuery === 'en') {
    localStorage.setItem(STORAGE_KEY, fromQuery);
    return fromQuery;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'ru' || stored === 'en') return stored;
  // No stored preference and no query override — auto-detect from browser.
  return detectFromBrowser();
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  const setLang = useCallback((next: Lang) => {
    localStorage.setItem(STORAGE_KEY, next);
    setLangState(next);
    document.documentElement.lang = next;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      const table = translations[lang] as Record<string, string>;
      return table[key] ?? (translations.en as Record<string, string>)[key] ?? key;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export function T({
  k,
  html,
  className,
}: {
  k: string;
  html?: boolean;
  className?: string;
}) {
  const { t } = useI18n();
  const text = t(k);
  if (html) {
    return <span className={className} dangerouslySetInnerHTML={{ __html: text }} />;
  }
  return <span className={className}>{text}</span>;
}

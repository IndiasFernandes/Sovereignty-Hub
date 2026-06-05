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

function readStoredLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem(STORAGE_KEY) === 'ru' ? 'ru' : 'en';
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

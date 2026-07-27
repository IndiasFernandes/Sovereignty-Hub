import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations } from './translations';
import { I18nContext, useI18n } from './useI18n';

export type Lang = 'en' | 'ru';

const STORAGE_KEY = 'eeca-hub-lang';

function readStoredLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const fromQuery = new URLSearchParams(window.location.search).get('lang');
  if (fromQuery === 'ru' || fromQuery === 'en') {
    localStorage.setItem(STORAGE_KEY, fromQuery);
    return fromQuery;
  }
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

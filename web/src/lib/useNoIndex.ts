import { useEffect } from 'react';

/** Marks a route as hidden from search engines (robots noindex,nofollow). */
export function useNoIndex(title?: string) {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex,nofollow';
    document.head.appendChild(meta);
    const prevTitle = document.title;
    if (title) document.title = title;
    return () => {
      document.head.removeChild(meta);
      document.title = prevTitle;
    };
  }, [title]);
}

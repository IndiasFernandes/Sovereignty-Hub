import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollForRoute } from '../lib/scrollToTarget';

/** Resets scroll on route changes; consultation routes land at the form start. */
export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      scrollForRoute(location.pathname, location.hash);
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);

  return null;
}

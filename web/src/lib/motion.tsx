import { useEffect, useRef, useState } from 'react';

/** Returns [ref, inView] — inView flips true once the element scrolls into view. */
export function useInView<T extends HTMLElement = HTMLDivElement>(rootMargin = '0px 0px -12% 0px') {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin, threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return [ref, inView] as const;
}

/** Fade + rise on scroll-in. Collapses to instant under reduced-motion (CSS-handled). */
export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
}) {
  const [ref, inView] = useInView();
  const style = delay ? ({ transitionDelay: `${delay}ms` } as React.CSSProperties) : undefined;
  return (
    <Tag ref={ref} style={style} className={`reveal ${inView ? 'in' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  );
}

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Counts up to `value` when scrolled into view. `format` renders the number. */
export function CountUp({
  value,
  duration = 1400,
  format = (n: number) => String(Math.round(n)),
}: {
  value: number;
  duration?: number;
  format?: (n: number) => string;
}) {
  const [ref, inView] = useInView();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduceMotion()) {
      setN(value);
      return;
    }
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{format(n)}</span>;
}

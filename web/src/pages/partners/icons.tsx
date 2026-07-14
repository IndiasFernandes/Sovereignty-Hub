// Inline SVG icons + hero artwork for the partner pages. currentColor-driven.
type P = { className?: string };
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export const IcCheck = (p: P) => (<svg viewBox="0 0 24 24" {...p}><path {...s} d="M20 6 9 17l-5-5" /></svg>);
export const IcBuilding = (p: P) => (<svg viewBox="0 0 24 24" {...p}><path {...s} d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-5h6v5M9 11h.01M15 11h.01M12 11h.01" /></svg>);
export const IcGlobe = (p: P) => (<svg viewBox="0 0 24 24" {...p}><circle {...s} cx="12" cy="12" r="9" /><path {...s} d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></svg>);
export const IcLock = (p: P) => (<svg viewBox="0 0 24 24" {...p}><rect {...s} x="4" y="10" width="16" height="11" rx="2" /><path {...s} d="M8 10V7a4 4 0 0 1 8 0v3M12 15v2" /></svg>);
export const IcChart = (p: P) => (<svg viewBox="0 0 24 24" {...p}><path {...s} d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" /></svg>);
export const IcHandshake = (p: P) => (<svg viewBox="0 0 24 24" {...p}><path {...s} d="M8 13l2.5 2.5a1.5 1.5 0 0 0 2.1 0l.4-.4M3 8l3-2 5 4 2-1 5 2 3-1M13 15l2 2M16 13l2 2" /></svg>);
export const IcTrophy = (p: P) => (<svg viewBox="0 0 24 24" {...p}><path {...s} d="M7 4h10v4a5 5 0 0 1-10 0V4ZM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M9 20h6M12 15v5" /></svg>);
export const IcShield = (p: P) => (<svg viewBox="0 0 24 24" {...p}><path {...s} d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" /><path {...s} d="M9 12l2 2 4-4" /></svg>);
export const IcGear = (p: P) => (<svg viewBox="0 0 24 24" {...p}><circle {...s} cx="12" cy="12" r="3" /><path {...s} d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg>);
export const IcBolt = (p: P) => (<svg viewBox="0 0 24 24" {...p}><path {...s} d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>);
export const IcLink = (p: P) => (<svg viewBox="0 0 24 24" {...p}><path {...s} d="M10 14a4 4 0 0 0 6 .5l2-2a4 4 0 0 0-6-6l-1 1M14 10a4 4 0 0 0-6-.5l-2 2a4 4 0 0 0 6 6l1-1" /></svg>);

// Hero artwork — Foundations: classical dome/columns + a network of connected nodes (legacy + reach)
export const ArtFoundations = () => (
  <svg viewBox="0 0 360 320" role="img" aria-label="National legacy and regional network">
    <defs>
      <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5fd4ce" /><stop offset="1" stopColor="#178f88" /></linearGradient>
    </defs>
    {/* connecting network */}
    <g stroke="#5fd4ce" strokeOpacity=".55" strokeWidth="1.3">
      <path d="M70 70 180 120 300 80M70 70 120 220M300 80 250 230M180 120 120 220M180 120 250 230" fill="none" />
    </g>
    <g fill="#5fd4ce">
      <circle cx="70" cy="70" r="6" /><circle cx="300" cy="80" r="6" /><circle cx="120" cy="220" r="6" /><circle cx="250" cy="230" r="6" />
    </g>
    {/* dome / institution */}
    <g transform="translate(120,96)">
      <path d="M60 8C30 8 8 30 8 56h104C112 30 90 8 60 8Z" fill="url(#fg)" />
      <rect x="6" y="56" width="108" height="8" rx="3" fill="#5fd4ce" />
      <g fill="#2fa39b">
        <rect x="16" y="66" width="10" height="70" /><rect x="40" y="66" width="10" height="70" />
        <rect x="64" y="66" width="10" height="70" /><rect x="88" y="66" width="10" height="70" />
      </g>
      <rect x="2" y="136" width="116" height="10" rx="3" fill="#5fd4ce" />
      <circle cx="60" cy="34" r="9" fill="#0a3d3a" />
    </g>
  </svg>
);

// Hero artwork — Tech: a shield formed from a neural graph with a verified check
export const ArtTech = () => (
  <svg viewBox="0 0 360 320" role="img" aria-label="Governed AI shield">
    <defs>
      <linearGradient id="tg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5fd3d2" /><stop offset="1" stopColor="#129c9c" /></linearGradient>
    </defs>
    <path d="M180 36 300 78v74c0 64-52 104-120 124-68-20-120-60-120-124V78L180 36Z"
      fill="rgba(95,211,210,.10)" stroke="url(#tg)" strokeWidth="2.5" />
    <g stroke="#5fd3d2" strokeOpacity=".6" strokeWidth="1.4" fill="none">
      <path d="M120 110 180 92 240 110M120 110 110 168 170 196M240 110 250 168 190 196M180 92 180 150M110 168 180 150 250 168M170 196 180 150 190 196" />
    </g>
    <g fill="#5fd3d2">
      <circle cx="120" cy="110" r="5" /><circle cx="240" cy="110" r="5" /><circle cx="180" cy="92" r="5" />
      <circle cx="110" cy="168" r="5" /><circle cx="250" cy="168" r="5" /><circle cx="170" cy="196" r="5" /><circle cx="190" cy="196" r="5" />
    </g>
    <circle cx="180" cy="150" r="26" fill="url(#tg)" />
    <path d="M168 150l8 8 16-16" fill="none" stroke="#04161e" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

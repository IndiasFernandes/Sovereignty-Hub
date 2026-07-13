# EECA Lung Health Sovereignty Hub — Design System & Quality Plan

_Living plan. Owner: Indias. Status: in progress. Last updated: 2026-07-13._

The goal: take the site from "good" to **donor-grade institutional** — the polish of Stripe/Rockefeller, the gravitas of Gavi/Global Fund. This plan defines the quality bar, audits where we are, and sequences the work. The **`/design` page** is the acceptance surface: every token and component is shown there, and we sign off on changes against it before they ship.

---

## 1. What defines a high-quality website (our bar)

Grounded in 2026 web-design/UX standards (WCAG 2.2 AA, Core Web Vitals, editorial/institutional craft). We hold every page to these:

**A. Foundations**
1. **One coherent design system** — all color, type, spacing, radius, shadow, motion expressed as tokens; nothing hard-coded.
2. **Typography does the work** — max 2 families (display + text), a deliberate modular scale, generous line-height and measure (60–75 chars).
3. **Restraint in color** — one brand color + neutrals + a single action color; AA contrast everywhere.
4. **Rhythm & whitespace** — consistent vertical rhythm, aligned to a spacing scale; sections breathe.

**B. Craft**
5. **A real hero** — clear value proposition above the fold, one strong image or system, no wall of text.
6. **Show, don't tell** — product screenshots, real imagery, data visuals — not just prose.
7. **Consistent components** — one card language, one button system, one link treatment; predictable hover/focus/active states.
8. **Considered motion** — subtle, purposeful, `prefers-reduced-motion` respected.

**C. Trust & conversion**
9. **Credibility signals** — partner logos, hard numbers, named team, references.
10. **Audience pathways** — clear routes for funder / partner / government.
11. **Obvious primary action** — one dominant CTA per view (Consultation).

**D. Technical**
12. **Performance** — LCP < 2.5s, images as WebP/AVIF + sized/lazy, fonts subset + `display:swap`.
13. **Accessibility** — WCAG 2.2 AA: contrast, full keyboard nav, visible focus, alt text, semantic landmarks.
14. **Mobile-first** — thumb-zone actions, no horizontal overflow, tap targets ≥ 44px.
15. **SEO/meta** — titles, descriptions, OG images, structured data.

---

## 2. Audit — current site vs the bar

Legend: ✅ good · 🟡 partial · 🔴 needs work

| # | Area | Status | Notes / action |
|---|------|--------|----------------|
| 1 | Token system | 🟡 | Strong tokens in `site.css`, but no single source-of-truth page and some raw hex remains in `sol-*`, partners, consultation. → **`/design` page + token sweep.** |
| 2 | Typography | 🟡 | Source Serif 4 + DM Sans is fine but generic; scale is ad-hoc (many one-off `clamp()`/px). → **Adopt a modular type scale; consider a more distinctive display face.** |
| 3 | Color | 🟡 | Neutral+teal+amber is right, but teal is slightly flat and amber CTA can read "warning". → **Refine palette v2 (deeper, richer teal; calmer amber or teal-forward CTA); verify AA.** |
| 4 | Whitespace/rhythm | 🟡 | Good, but section padding + heading spacing vary. → **Standardise vertical rhythm tokens.** |
| 5 | Hero | ✅ | New feature hero + real photo + stat card. Keep; swap photo for owned/region-specific when available. |
| 6 | Show don't tell | 🔴 | No product screenshot of the Sovereignty App / dashboard; no data visuals. → **Add App mockup + a stats/chart band.** |
| 7 | Components | 🟡 | Card family unified; buttons good. Diagrams (crisis-intersection) look dated. → **Rebuild diagrams; document components on `/design`.** |
| 8 | Motion | ✅ | Subtle hovers + reduced-motion guard in place. |
| 9 | Credibility | 🟡 | GTB Caucus logo in footer only. → **Add a hero/near-hero credibility strip + references.** |
| 10 | Audience pathways | 🔴 | Single funnel. → **Add funder / partner / government routing (later phase).** |
| 11 | Primary CTA | ✅ | Consultation CTA consistent. |
| 12 | Performance | 🟡 | Vite build fine; images now JPG (should be WebP/AVIF + sized); fonts via Google. → **Optimise images; self-host/subset fonts.** |
| 13 | Accessibility | 🟡 | Focus rings, skip link, alt text present. → **Full AA contrast pass on new palette; audit forms.** |
| 14 | Mobile | ✅ | Verified at true 390px; hamburger ≤1024; no overflow. |
| 15 | SEO/meta | 🟡 | Titles/noindex partial. → **Add descriptions + OG image (use hero).** |

---

## 3. Color system v2 (proposed)

Keep neutral + teal + amber, but make teal richer and the neutrals warmer/quieter; reserve amber strictly for action.

- **Brand teal** — deepen to a jewel teal for authority: primary `#0c5b57`, dark `#083d3a`, light `#178f88`, plus a bright on-dark accent `#5fd4ce`.
- **Neutrals** — a single 25→900 slate ramp (already drafted) with slightly warmer undertone so white doesn't feel clinical.
- **Ink surfaces** — `#12181b`→`#232b30` for hero/footer/CTA.
- **Action amber** — calmer, less "alert": `#c98a2b`; used only for the primary CTA and one emphasis word.
- **Semantic** — success/info/warn/danger for the admin/forms.
- **Contrast** — every text/bg pair verified ≥ 4.5:1 (AA), large text ≥ 3:1.

_Shown side-by-side (current vs v2) on `/design` for sign-off._

## 4. Typography v2 (proposed)

- **Display / headings:** evaluate **Fraunces** (characterful, institutional-modern) or **Newsreader** vs keeping **Source Serif 4**. Recommendation: **Fraunces** for headings — more distinctive, still serious.
- **Body / UI:** move from DM Sans to **Inter** (or keep DM Sans) — Inter is the institutional-UI standard, excellent at small sizes.
- **Modular scale** (1.250 major-third), tokenised: `--fs-xs … --fs-6xl`, with fluid `clamp()` only at display sizes.
- **Rules:** line-height 1.6 body / 1.1 display; measure capped at 68ch; tabular numerals for stats.

## 5. `/design` system page (the acceptance surface)

A real, production route (`/design`, noindex) that renders **live from tokens**:
- Color — every token as a swatch with hex + contrast badge.
- Typography — the full scale, both families, weights, sample paragraphs.
- Spacing / radius / shadow / motion scales.
- Components — buttons (all variants/states), links, cards, stat card, form fields, tables, eyebrows, badges.
- Do/don't notes.

This is where we approve every change. When it looks right here, it ships everywhere because everything reads from the same tokens.

## 6. Imagery & art direction

- **Now:** license-clean Pexels placeholders (hero = lab/diagnostics; `diagnostics.jpg` for a section). Flagged as **temporary** — replace with owned/region-specific EECA photography (clinics, parliaments, communities in the 9 caucus countries) before donor use.
- **Direction:** documentary, human, natural light; consistent duotone/scrim treatment so any photo reads on-brand; no stocky/staged clichés.
- **Format:** convert to WebP/AVIF, multiple sizes, `loading="lazy"` + explicit dimensions.

## 7. Roadmap (phased, each independently shippable)

- **Phase 0 (done):** feature hero + real hero image; content aligned to the 24-mo/$1.2M note; RU header fix; DB live.
- **Phase 1 — Design page + tokens:** build `/design`; sweep remaining raw hex to tokens. _(this turn)_
- **Phase 2 — Color + type v2:** apply approved palette + fonts across the system; AA pass. _(needs sign-off on `/design`)_
- **Phase 3 — Show don't tell:** App/dashboard mockup in Solution; stats/data band; rebuild diagrams.
- **Phase 4 — Credibility + pathways:** logo strip, references, funder/partner/government routing.
- **Phase 5 — Perf + a11y + SEO:** WebP/AVIF, font self-host/subset, full AA audit, meta/OG.

---

_Acceptance: we review on `/design` (and the live pages) and check off audit rows as they turn ✅._

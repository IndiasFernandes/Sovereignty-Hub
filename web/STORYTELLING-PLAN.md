# Audience-page storytelling plan — Policymakers · Partners · Donors

_Draft for approval. Owner: Indias. Grounded in the deep-research findings (mutual interests) and the latest concept note._

Goal: turn the three audience pages into **proper, persuasive stories** — each with a tailored narrative arc, real imagery, and tasteful dynamism — while staying institutional and on one design system.

---

## 1. Shared narrative spine (every page follows this 7-beat arc)

1. **Hook** — their world + the promise (hero, full-bleed image).
2. **Tension / Why now** — the pressure they feel, grounded in real facts (a chart or animated stat).
3. **The turn** — what changes *for them* (outcome cards).
4. **How it works for you** — the mechanism, tailored (a diagram / the execution loop).
5. **Proof** — the one killer stat + credibility (count-up).
6. **What you get** — concrete deliverables (checklist).
7. **Invitation** — CTA + proof band.

Rhythm alternates light/dark; each beat is a *different* layout (no two alike), matching the home page.

## 2. Shared dynamic system (institutional, `prefers-reduced-motion` aware)

A small reusable toolkit — subtle, purposeful, never gimmicky:
- **Scroll reveal** — sections fade + rise on entry (IntersectionObserver).
- **Count-up numbers** — key stats animate from 0 when in view (22/26, 85%, 300K+, −40%).
- **Charts fill on scroll** — bars grow when the panel enters.
- **Hero parallax** — the background image drifts slowly behind the text.
- **The execution-loop pulse** — reused as the signature motion.
- **Hover lifts** on cards/links.
All motion collapses to instant under reduced-motion; nothing blocks content or hurts LCP.

## 3. Image system

Documentary, human, natural light — never stocky/staged. A consistent **teal-ink duotone scrim** so any photo reads on-brand. Per page: 1 hero + 1–2 section images. License-clean (Pexels) **placeholders** now, flagged for replacement with **owned/region-specific EECA photography** before donor use.

---

## PAGE 1 — Policymakers · *"The bill that becomes care"*

| Beat | Content | Image | Dynamism |
|---|---|---|---|
| Hook | "Act with certainty. See it delivered." + CTA | Parliamentary chamber / MP at work (teal scrim) | Hero parallax; "weeks" counts up |
| Tension | "You have the will. The system has the lag." — deluge of legislation, decision paralysis, months→years | Stacked papers / late session | **Months→Weeks** timeline that visibly compresses on scroll |
| Proof will works | "**22 of 26** high-burden countries that raised domestic TB budgets had a caucus · **+250%** DRC" | — | Count-up + bars fill |
| The turn | Certainty · Sovereignty · Low risk | — | Staggered reveal |
| How it works | Tailored mini **execution loop**: Decision → drafted → tabled → delivered | — | Travelling pulse |
| What you get | MP portal · AI-assisted drafting (human-reviewed) · decision briefs · caucus network | — | Reveal |
| Invitation | "Turn your decision into delivered care." | — | Proof band count-up |

## PAGE 2 — Partners · *"Build on proof"*

| Beat | Content | Image | Dynamism |
|---|---|---|---|
| Hook | "A governed platform to build on." + CTA | Diagnostics / lab / health-tech (scrim) | Hero parallax |
| Opportunity | "A region rebuilding its health systems — and it needs you." Expanding LMIC health markets as aid recedes | Clinic / technology in use | Reveal |
| Shared value (not charity) | 2-col: **What you bring** ↔ **What you gain** (market access, ESG/SDG, reputation) | — | Two columns reveal in |
| Governed by design | ISO 27001 · GDPR-equivalent · human-reviewed · sovereign hosting | — | Animated trust chips / shield |
| How you engage | Integration points across Engine·Bridge·Shield + phased path to scale | — | Path reveal |
| Proof | "Proven in one country → **9**" · "300K+ patients" | — | Count-up |
| Invitation | "Build with a proven regional platform." | — | Proof band |

## PAGE 3 — Donors · *"Fund proof, not promises"*

| Beat | Content | Image | Dynamism |
|---|---|---|---|
| Hook | "Fund proof, not promises." + CTA | Community / patient / hopeful human (scrim) | Hero parallax |
| The moment | Donors withdrawing; proof matters now | — | **Funding-gap chart animates** (Needed $18B vs Pledged $11.85B; aid −30–40%) |
| De-risked model | "Each phase proven before the next is funded" — the phased ladder | — | Stepped ladder reveals one rung at a time |
| The turn | De-risked · Measurable · Legacy | — | Reveal |
| Measured impact | 300K+ patients · 9 countries · continuity through crisis | Clinic / data | Count-up + small impact chart |
| What your funding delivers | proof unit · transparent oversight · scalable model · terms in confidence | — | Reveal |
| Invitation | "Invest in a working model of health sovereignty." | — | Proof band |

---

## 4. Build phases

- **P1 — Motion toolkit:** a tiny `useReveal` / `useCountUp` hook set + `.reveal` CSS (reduced-motion aware). Shared by all pages.
- **P2 — Imagery:** source license-clean placeholders per page; apply the duotone scrim; optimise (WebP, sized, lazy).
- **P3 — Rebuild pages** to the 7-beat arc above, page by page (Policymakers → Partners → Donors), each with its signature moment.
- **P4 — QA + deploy:** mobile at true widths, reduced-motion, LCP check, then deploy + verify.

## 5. Open decisions

- Image direction per page (chamber vs MPs for Policymakers; lab vs tech for Partners; community vs clinic for Donors).
- Depth of motion (subtle vs more expressive).
- RU: translate the new page bodies now or after EN sign-off.
</content>

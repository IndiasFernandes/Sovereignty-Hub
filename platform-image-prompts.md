# EECA Lung Health — Platform Image Prompts (v2)

Prompts to regenerate every platform mockup so the set feels like **one product, one design system, one team** — the Innerflect quality bar: *minimal, practical, advanced, fast, reliable, motivating, coherent*.

## How to use — read this once

1. **Attach these two files to every chat**, alongside the prompt:
   - `web/public/assets/images/brand/logo-mark-color.png` — the two-lobe lung mark
   - A screenshot of the site's Design System page (`/design`) — palette, typography, card treatment
   With those attached, the model has ground truth for the brand and won't drift.

2. **Generate at 1536 × 1024 (landscape 16:9), ultra-high resolution, crisp legible text**. If the tool supports it, ask for "no compression, sharp UI text".

3. **Do all six in a single chat session.** After the first image, tell the model: *"Match this exact style, header, palette, card treatment, spacing, typography, and level of polish. Same product, different screen."* Consistency is the whole point.

4. **If a label comes out wrong** (numbers or spelling mangled), don't restart — say *"keep everything identical but fix the text to exactly: [paste the labels]"*.

5. **Post-process**: export at full quality, replace the matching file under `web/public/assets/images/platform/`, rebuild WebP variants, deploy.

---

## The shared design system (embedded in every prompt below — do not skip)

> **Product**: EECA Lung Health Sovereignty Hub — a regional health-governance platform used by parliamentarians, ministries, foundations and technology partners. Institutional but modern; the aesthetic of a serious government-tech SaaS that a European ministry would trust and a Big Tech company would ship.
>
> **Brand mark**: two overlapping stylised lung lobes forming a symmetric shape — **left lobe deep navy `#023a6d`**, **right lobe teal `#178f88`**, separated by a clean white negative-space gap, each lobe with a soft internal gradient. **Wordmark** immediately to the right of the mark: **"EECA Lung Health"** in **Space Grotesk 600**, colour matched to context (white on dark headers, ink on light surfaces). *(Match the attached logo file exactly — do not reinterpret it.)*
>
> **Palette (exact hex — use only these):**
> - Ink text: `#1a2124`
> - Muted text: `#566169`
> - Warm-white canvas: `#fafbf9`
> - Card surface: `#ffffff`
> - Cool slate borders: `#e3e7e6` (default), `#ccd4d2` (strong)
> - Navy primary: `#023a6d` — used for data-viz, headings on light
> - Navy light: `#145a94`
> - Navy dark / bar: `#011f3d`, `#010f1e` (`--color-navy-abyss` — top-nav & CTA-strip)
> - Teal primary: `#0c5b57`
> - Teal light: `#178f88`
> - Teal bright accent: `#5fd4ce` — only on dark, only for eyebrows and micro-highlights
> - Teal near-black surface: `#062523` — dark-mode surfaces and top header bar
> - Tint fills: `#eef6f5` (teal-50), `#d7ebe9` (teal-100), `#b0dbd6` (teal-200)
> - Alerts: one muted amber-red only where a real alert exists. **No coral, no purple, no bright red, no orange, no pink.**
>
> **Type system:**
> - Display / headings / large numbers: **Space Grotesk 600–700**, tight tracking (-0.01em), 1.05 line-height on H1s
> - Body / labels / UI text: **Inter 400–500**, 0em tracking, 1.45–1.55 line-height
> - Eyebrows: **Inter 700**, `0.72rem`, uppercase, letter-spacing `0.14em`, colour `#0c5b57` on light / `#5fd4ce` on dark
>
> **Component grammar:**
> - Cards: white surface, **14px radius** on standard cards / **20px radius** on hero cards, `1px` border `#e3e7e6`, extremely subtle shadow (roughly `0 6px 14px -6px rgba(16,41,47,.12)` — a whisper, not a drop shadow), generous internal padding
> - Buttons: primary is filled navy with white text; secondary is outlined ink; on-dark uses gradient navy→abyss
> - Data-viz: **only** navy + teal + neutrals. Bars are flat with a subtle gradient (`navy → teal-light` or `teal → teal-bright`). No 3D, no drop shadows on chart elements, no gridline noise — one whisper of horizontal rule at most
> - Iconography: 1.6px stroke, rounded caps/joins, no fills — feels engineered
> - Spacing: generous — this is a premium product; airy negative space, never crowded
> - Corners are always rounded, never sharp. Alignment is tight (8px grid).
>
> **Composition rules for every dashboard image:**
> - **Top header bar**: full width, near-black teal `#062523`, height ~64px. **Left**: lung mark + "EECA Lung Health" wordmark in white. **Right**: small uppercase eyebrow-style tagline in teal-bright `#5fd4ce`: **"TRANSFORMING HEALTH INVESTMENTS INTO MEASURABLE NATIONAL IMPACT"**. Tiny circular avatar and a bell/notification icon at the far right.
> - **Below header**: white canvas `#fafbf9`. First row is always a Page Title in Space Grotesk 700 and a subtle eyebrow above it, plus a filter/context row on the right.
> - **Body**: cards on the canvas, with consistent 24–32px gutters. Data-viz reads left-to-right, most-important-first.
> - **Footer strip**: single thin line, `#e3e7e6`, small muted-text meta.
>
> **Voice and vibe**: this platform assists people who decide — MPs, ministries, foundations. It looks calm, precise, and trustworthy. It does not shout. Numbers are prominent but never sensational. AI is present but *governed* — you might see a small "Human-reviewed" or "AI-assisted · Human-reviewed" chip on any AI-generated card. Nothing feels startup-y, edgy or gamified. Think: **the reference dashboard the Financial Times, Palantir Government, and the WHO would each independently agree looks like theirs.**

---

## Image 1 — `eeca-overview-dashboard.png` · **The Engine: Budget vs Burden Analysis**

- **Where it lives**: `/solution` — inside a browser-frame mockup, captioned "Spending mapped against disease burden — with a ready-to-act reallocation plan."
- **Role**: represents the app's Legislative & Budget Intelligence layer — the ministry / parliamentarian view.

```
A high-fidelity UI mockup of a national health-budget analysis screen inside a government-tech SaaS product, landscape 16:9, ultra-high resolution, crisp legible text.

Apply the SHARED DESIGN SYSTEM in full (see the reference block: EECA Lung Health palette, Space Grotesk / Inter typography, 14–20px rounded cards, whisper shadows, navy + teal data-viz, dark header bar #062523 with the two-lobe lung logo, white wordmark "EECA Lung Health", right-side tagline "TRANSFORMING HEALTH INVESTMENTS INTO MEASURABLE NATIONAL IMPACT" in teal-bright caps).

Page title (Space Grotesk 700, ink #1a2124): "Budget vs Spending Analysis". Eyebrow above it in teal caps: "THE ENGINE · POLICY & BUDGET INTELLIGENCE". Filter row on the right: three small pills — Country: "Ukraine" · Disease: "Tuberculosis" · Timeframe: "2020–2023".

Layout (three regions on a warm-white canvas #fafbf9):

REGION 1 — hero chart card (60% width, left/centre):
A dual overlay chart titled "Disease Burden vs Health Spending". Teal bars (using teal → teal-bright gradient) show declining TB cases across 2020–2023. Navy bars (navy → navy-light gradient) show TB spending in the same period, softly translucent so both are readable. A vertical band shaded very lightly teal marks a "Misalignment Zone" — a small subtle chip label sits at its top. Y-axis on the left in cases (thousands), Y-axis on the right in USD (millions). Whisper-thin horizontal gridlines only. Legend at the top-right of the card.

REGION 2 — three tight metric tiles in a row below the hero chart:
- "Underfunded Burden" · big number in Space Grotesk 700 ink: "−15K TB cases" · small teal delta arrow
- "Overallocated Funds" · "+$25M USD" · small teal delta arrow
- "Misalignment Impact" · "34%" · small subtitle "efficiency lost"
Each tile is a white card, 14px radius, thin border.

REGION 3 — right rail (40%), two stacked cards:
Top card: "Key Findings" (Space Grotesk 600) with 3 short bullets, ink text, each bullet prefixed by a 1.6px stroked teal check icon:
  • "Primary-care underfunded in eastern oblasts"
  • "DR-TB spending overshoots incidence trend"
  • "Regional labs undercapitalised vs demand"
Bottom card: "Actionable Recommendation" — eyebrow "AI-ASSISTED · HUMAN-REVIEWED" in teal-bright caps micro-size at the top, a headline "Reallocate $100M USD from low-impact interventions", short 2-line supporting sentence, then a solid navy button "View reallocation plan →" and a secondary ghost button "Open in workspace".

REGION 4 — bottom strip: two small support cards side-by-side:
- "Reallocation Opportunity" · +10% efficiency gains · small horizontal progress bar in teal
- "Priority Recommendation" · "Decentralise diagnostics and scale patient support" · small teal outline button "Read the brief"

Feel: analytical, calm, decisive. Nothing shouts. Numbers are proud but restrained. All labels spelled correctly exactly as above. No decorative illustration; the data IS the illustration.
```

---

## Image 2 — `program-pipeline-investment.png` · **The Bridge: Investment Pipeline**

- **Where it lives**: `/solution` — captioned "A shared pipeline of fundable programmes, with government and donor commitments in one view."
- **Role**: the diplomacy / financing coordination layer — the foundations/partners view.

```
A high-fidelity UI mockup of an investment / programme-pipeline screen inside the same product, landscape 16:9, ultra-high resolution, crisp legible text.

Apply the SHARED DESIGN SYSTEM in full — same dark #062523 header bar, same logo, same tagline, same white cards with 14–20px radius, same Space Grotesk / Inter typography, same navy + teal data-viz. This must feel like the same product as image 1, one navigation click away.

Page title: "Programme Pipeline & Investment Opportunities". Eyebrow: "THE BRIDGE · SMART DIPLOMACY & FINANCING". Sub-lead below the title in muted #566169: "Bankable, data-validated programmes ready for government and partner financing".

Three-column body on the warm-white canvas.

COLUMN 1 — "Priority Programme Areas" (left, ~30% width). A vertical list of four items in individual cards; each row shows:
- a small teal-outlined icon (1.6px stroke) on the left
- programme name in Space Grotesk 600 ink
- a tiny colour-coded tag chip ("High Impact" teal, "Strategic" navy, "Foundational" slate) on the right
- a two-line meta row underneath in muted #566169: funding range · duration
The four programmes:
  1. "National TB Elimination Acceleration" · tag "High Impact" · $85–120M · 60 months
  2. "Maternal & Child Health Initiative" · tag "Strategic" · $110–150M · 60 months
  3. "HIV Prevention & Treatment Scale-Up" · tag "High Impact" · $70–95M · 48 months
  4. "Primary Health Systems Strengthening" · tag "Foundational" · $180–250M · 84 months

COLUMN 2 — "Financing Overview" (centre, ~40% width, the visual anchor of the page). Two stacked cards:
Card A: a headline number in Space Grotesk 700 — "$445M" — with a small subtitle "Total Pipeline Value". Below it a clean donut chart, three segments in navy / teal / teal-bright: 38% Government · 42% Donor & Grants · 20% Financing Gap. Compact legend to the right of the donut.
Card B: "Investment Structure" — three horizontal progress bars stacked:
  • Government Budget · $180M · status pill "Committed" in teal
  • Secured Donor Funding · $190M · status pill "In Negotiation" in navy
  • Seeking Investment · $75M · status pill "Priority Ask" in teal-bright on dark
Below the bars: a tight "Expected Returns (3-Year Outlook)" row of four inline metrics separated by hairline dividers — "4.2M lives positively impacted" · "2.8:1 economic return" · "−38% catastrophic health expenditure" · "+65% service coverage".

COLUMN 3 — "Implementation Timeline" + "Why Invest" (right, ~30% width). Two stacked cards:
Card A: "Implementation Timeline" — a vertical Q1–Q4 milestone list, each quarter as a small row with a teal dot connector, a milestone title in Space Grotesk 600 and a one-line meta in muted text. Four milestones, one per quarter.
Card B: "Why Invest Through EECA Lung Health" — four small rows, each with a 1.6px teal check icon, in Inter 500 ink:
  • "De-risked & data-validated"
  • "Government-aligned"
  • "Blended-finance ready"
  • "Real-time monitoring"

Feel: fintech-for-government. Calm, credible, structured. The word "EECA Lung Health" must appear correctly on the "Why Invest" card. No decorative illustration.
```

---

## Image 3 — `burden-vs-spending-analysis.png` · **The Shield: Regional Overview**

- **Where it lives**: `/solution` — captioned "A region-wide overview with live risk alerts — shortages, funding gaps and delays flagged early."
- **Role**: the regional health-security & continuity-of-care view — the operational cockpit.

```
A high-fidelity UI mockup of a regional health-security overview inside the same product, landscape 16:9, ultra-high resolution, crisp legible text.

Apply the SHARED DESIGN SYSTEM in full — same dark #062523 header bar, same logo, same tagline, same white cards, same typography and data-viz palette. Same product; different screen.

Page title: "EECA Regional Overview". Eyebrow: "THE SHIELD · HEALTH SECURITY & CONTINUITY OF CARE". A small live-status chip on the right of the title row: a tiny teal pulsing dot next to "Live · updated 2 min ago" in muted text.

Layout on the warm-white canvas:

ROW 1 — four KPI tiles across the top, equal width, 14px radius, whisper shadow:
- "Lung Health Burden" · Space Grotesk 700 "1.8M cases" · muted subtitle "9-country total"
- "Total Spending" · "$320M USD" · muted "annual, all sources"
- "Coverage Gap" · "25%" · muted "population uncovered"
- "Active Risk Alerts" · "5 alerts" · this ONE tile carries a very muted amber-red left-border accent and a small alert chip; not aggressive, still institutional.

ROW 2 — main canvas split into two:

LEFT (~60% width): a large card containing a stylised EECA regional map. The map is a clean, minimal choropleth — country shapes filled in teal shades from `#d7ebe9` (low) through `#178f88` to `#0c5b57` (high). Nine EECA countries labelled: Armenia, Azerbaijan, Georgia, Kazakhstan, Kyrgyzstan, Moldova, Tajikistan, Ukraine, Uzbekistan — each label a small Inter 500 chip on the country. Two or three countries carry a tiny teal-bright dot marking an active alert location. Below the map, a compact legend (low → high) as a horizontal gradient bar.

RIGHT (~40% width): a stacked "Active Alerts" panel. Header of the card "Active Alerts" with the alert count "5" as a small pill. Then a scrollable list of three visible alerts, each a compact row with a small muted-red dot, a title in Space Grotesk 600, and a one-line context in muted Inter:
  • "Drug shortage — TB medications" · "Ukraine · escalating"
  • "Funding transition risk" · "Georgia · Global Fund exit in 90 days"
  • "Procurement delay" · "Kazakhstan · pending Ministry approval"
Each row ends with a small "Open" text button in teal.

ROW 3 — a horizontal group of three module cards, equal width, each with a small 1.6px teal-outlined icon and a short 2-line description. Cards, left to right:
- "Budget & Policy Intelligence"
- "Operational Intelligence & Health Security"
- "Parliamentary & Public Accountability"

ROW 4 — full-width area chart card at the bottom: "Regional Burden vs Spending Trend (2018–2023)". Two overlaid lines: navy for burden, teal-bright for spending, with soft area fills underneath at very low opacity. Small legend top-right of the card. Whisper gridlines only.

Feel: an air-traffic-control cockpit for public health — restrained, precise, real-time without theatrics. All labels spelled correctly. No decorative illustration.
```

---

## Image 4 — `ukraine-country-dashboard.png` · **Country Deep-Dive** *(hero shot)*

- **Where it lives**: `/solution` — hero mockup at the top of the page, inside a browser frame at `app.eecalunghealth.com/ukraine`.
- **Role**: the "product hero" shot — the single most-important image on the Solution page. Sets the visual tone for the whole platform.

```
A high-fidelity UI mockup of a single-country lung-health dashboard inside the same product, landscape 16:9, ultra-high resolution, crisp legible text. This is the product hero shot — cleaner and slightly more spacious than the other screens; every element must feel deliberate.

Apply the SHARED DESIGN SYSTEM in full. Same dark #062523 header bar with the two-lobe lung logo and "EECA Lung Health" wordmark on the left; teal-bright tagline "TRANSFORMING HEALTH INVESTMENTS INTO MEASURABLE NATIONAL IMPACT" on the right. Just under the header, a country selector: a Space Grotesk 600 label "Country" in muted grey, then a chip-style dropdown "Ukraine ▾" with a tiny flag icon.

Page title: "Ukraine · Lung Health". Eyebrow: "COUNTRY DASHBOARD". Sub-lead in muted #566169: "One country in one view — disease burden, spending, coverage and the financing gap, side by side."

Layout on warm-white canvas:

ROW 1 — four KPI tiles across the top, equal width, extra generous padding to make this hero feel premium:
- "Lung Health Burden" · Space Grotesk 700 "420K cases" · muted "TB + COPD + other lung"
- "Budget Allocation" · "$85M USD" · muted "FY 2023"
- "Treatment Coverage" · "75%" · muted "of estimated need"
- "Financing Gap" · "$25M USD" · muted "priority ask" · this tile has a subtle teal-bright top border to signal a call-to-action

ROW 2 — the visual anchor. Split 60/40:

LEFT: a large card, "Burden vs Spending — Ukraine (2019–2023)". Grouped bars per year: teal bars = cases (in thousands, left axis), navy bars = spending (in USD millions, right axis). A subtle divergence between the two trend lines is visible. Small legend top-right; whisper gridlines.

RIGHT: an "Insights" card with three sub-blocks stacked:
  Sub-block 1: eyebrow "KEY RISKS", then a 2-line ink paragraph "High-burden zones concentrated in eastern oblasts and displaced-population corridors; supply-chain fragility increasing."
  Sub-block 2: eyebrow "PRIORITY", a bold callout "Financing Gap · $25M — High priority" with a small teal-bright status dot.
  Sub-block 3: eyebrow "RECOMMENDED ACTION" (very small teal caps), a 1-sentence recommendation, then a solid navy button "Open recommendation" and a ghost secondary "Request a briefing".

ROW 3 — three side-by-side cards, equal width:

Card A "Service Coverage by Intervention" — four horizontal bars with percentage labels:
  • Vaccination of Children · 92%
  • TB Treatment · 78%
  • Drug-Resistant TB Treatment · 61%
  • Paediatric TB Care · 54%
Bars are teal, whisper background track. Labels in Inter 500.

Card B "Regional Comparison" — a small horizontal-bar chart comparing four countries on "Coverage": Ukraine 75%, Moldova 68%, Belarus 71%, Georgia 63%. Ukraine bar in navy, others in teal.

Card C "Ministry Cadence" — a compact meta list: "Next budget window: Q3 2024" · "Committee session: 14 May" · "Caucus lead: [name]" · "Last update: 2 days ago". Each row a small teal dot.

ROW 4 — a footer strip inside the canvas with three small chips (Inter 500, muted): "Aggregated / non-identifiable data only" · "ISO 27001-grade security" · "Sovereign in-region hosting" — each with a tiny teal check icon.

Feel: this is the frame the whole product will be judged on. Serene, spacious, disciplined, expensive-looking without being flashy. All labels spelled correctly.
```

---

## Image 5 — `meeting-country-dashboard.png` · **Boardroom context photo**

- **Where it lives**: secondary imagery — audience pages / press use.
- **Role**: proves the product is used by adults in serious rooms.

```
A photorealistic wide photograph, landscape 16:9, ultra-high resolution, of a working policy session inside a bright modern government / ministry boardroom in Eastern Europe or Central Asia — mid-morning natural light through tall windows, warm wood surfaces, understated.

Four to five diverse professionals in tailored business attire sit around a light-wood conference table, attentive, listening — not posed. Two are leaning slightly forward; one is taking a note on a leather-bound notebook. A modern glass carafe of water and thin ceramic tumblers sit on the table. Do not exaggerate emotion — this is a calm working meeting.

On the far wall, a large flush-mounted display shows a clean data dashboard that is unmistakably the EECA Lung Health platform: dark teal (#062523) top header bar; on the left, the two-lobe lung logo (left lobe deep navy #023a6d, right lobe teal #178f88, clean white gap between) and the wordmark "EECA Lung Health" in Space Grotesk white; on the right, small teal-bright caps tagline "TRANSFORMING HEALTH INVESTMENTS INTO MEASURABLE NATIONAL IMPACT". The visible dashboard is a country view — page title "Country Dashboard", a teal-shaded EECA regional map on the left, a column of KPI tiles ("Lung Health Burden", "Budget Allocation", "Treatment Coverage", "Financing Gap"), and clean navy + teal bar and donut charts. Same visual language as the other EECA Lung Health screens — white cards, whisper shadows, generous spacing.

An open laptop on the table shows the same platform, one screen removed (e.g. the pipeline view or an alerts list). Its screen is legible but not obtrusive.

Environmental style: minimal, high-end European corporate — thin black window mullions, matte plaster walls, one large piece of muted contemporary art at the edge of frame. Shallow depth of field on the near-camera side of the table so the wall display remains sharp. Soft cool-warm colour balance; no oversaturation.

Absolutely no other product branding visible anywhere in the room — the only branding is EECA Lung Health on the screen. Do not include any faces looking directly at the camera; realism over glamour.
```

---

## Image 6 — `budget-review-report.png` · **Printed report context photo**

- **Where it lives**: secondary imagery — press / partner materials.
- **Role**: shows the platform's outputs as artefacts a Ministry or Foundation would actually keep on a desk.

```
A photorealistic top-down (straight overhead) photograph, landscape 16:9, ultra-high resolution, of a printed policy report resting on a clean light-oak desk surface. Beside it: a matte-black fountain pen aligned parallel to the report's spine; the corner of a closed silver laptop just entering frame from the right; a small white ceramic espresso cup on a linen coaster in the far corner. Everything looks used, not staged.

The report is thin, saddle-stitched, on uncoated warm-white paper. The cover is clean and institutional:
  • At the top: the two-lobe lung logo (left lobe deep navy #023a6d, right lobe teal #178f88, clean white gap between) beside the wordmark "EECA Lung Health" in Space Grotesk 600 ink.
  • Centred lower on the cover: the document title, in Space Grotesk 700 large ink — "Budget Review Report 2024".
  • Below the title, a small teal caps eyebrow: "EECA REGIONAL EDITION".
  • At the bottom edge: a thin teal rule (2px) and small muted-text meta: "Prepared for Ministries of Health · Confidential · v1.0".

An inner spread is partially visible next to the cover — pages fanned open to a mid-report layout. The visible pages show a tidy, editorial data-viz layout in the navy + teal palette:
  • A left page with a bar chart labelled "Budget Allocation vs Disease Burden" (2020–2023) and a subheading in Space Grotesk 600.
  • A right page with a compact donut chart (three segments navy/teal/teal-bright) and a small "Funding Tracker" line chart, plus 3–4 short paragraphs of Inter body text with hairline dividers between sections and a pull-quote in a thin teal rule.

Typography set exactly as the product: Space Grotesk for headings, Inter for body. Hairline rules and generous margins. Nothing decorative — the design is the discipline.

Lighting: soft, natural, indirect (like a north-facing office). Subtle shadow from the pen and cup. No harsh reflections on the laptop or paper. Colour balance neutral; palette dominated by warm white, oak, teal ink and navy.

Do not include any other product branding. The only branding on the report is "EECA Lung Health".
```

---

## Notes for consistency across the set

- Images 1, 2, 3 and 4 are the four **product screens** and must feel like a single design system. Same header bar (dimensions, logo placement, tagline position), same page-title / eyebrow rhythm, same card radius (14px on standard, 20px on hero), same whisper shadows, same navy + teal data-viz. Generate them in one chat and reference the previous image each time.
- Images 5 and 6 are **context photos** and must show the product from images 1–4 correctly (same logo, same header, same palette on any visible screen or printed page). Ideally generate them **after** the four dashboards are approved, so the visible UI matches.
- If a generation misplaces the logo (e.g. the two lobes touch, colours swap, the mark is squashed), attach `logo-mark-color.png` and say *"replace the visible logo with this exact mark; keep everything else identical."*
- Keep this file as the source of truth. If prompts drift over time, update this file first, then regenerate.

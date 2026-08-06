# EECA Lung Health — Platform Image Regeneration Prompts

Prompts to regenerate every platform image in ChatGPT (GPT‑4o / DALL·E image
generation) so they are **brand-aligned** (current logo, palette, type) and
**visually consistent** with each other.

## How to use
1. Generate at **landscape 1536 × 1024** (16:9). Ask for "ultra high resolution, crisp legible text".
2. Each prompt below is **self-contained** — copy one whole block into ChatGPT. The shared brand system is embedded in every prompt so images stay consistent even when generated in separate chats.
3. After the first image, you can paste the next prompt and add *"match the exact style, header, colours, fonts and card treatment of the previous image."*
4. Regenerate 2–3 times and keep the cleanest text rendering. If a logo comes out wrong, attach `logo-mark-color.png` to the chat and say *"use this exact logo mark and the wordmark 'EECA Lung Health'."*
5. Export at full quality, no compression. Replace the matching file in `web/public/assets/images/platform/`.

---

## SHARED BRAND & STYLE SYSTEM (already embedded in each prompt — keep for reference)

> **Brand:** EECA Lung Health Sovereignty Hub. **Logo mark:** two overlapping stylised lung lobes forming a symmetric shape — the **left lobe deep navy (#023a6d)**, the **right lobe teal (#178f88)**, separated by a clean white negative-space gap, with a soft gradient in each lobe. **Wordmark** to the right of the mark: "EECA Lung Health" set in a geometric sans (Space Grotesk), dark ink.
> **Palette:** deep navy #023a6d, navy #145a94, jewel teal #0c5b57, teal #178f88, bright teal #5fd4ce, near‑black teal surface #062523, cool slate neutrals (#f5f6f7 / #e0e3e6 / #6b747a), warm‑white canvas #fafbf9, ink text #1a2124. **No coral, no purple, no red except a single muted alert red for warnings.**
> **Typography:** Space Grotesk for headings/numbers, Inter for body/labels.
> **Style:** clean, institutional, modern government-tech SaaS dashboard. White cards on a light slate canvas, ~12px rounded corners, soft subtle shadows, generous spacing, thin 1px borders. Data-viz uses only the navy→teal palette. Flat, precise, trustworthy. Dark top header bar (#062523) with the logo on the left and the tagline "TRANSFORMING HEALTH INVESTMENTS INTO MEASURABLE NATIONAL IMPACT" in small light teal caps on the right.

---

## 1 — `burden-vs-spending-analysis.png` — Regional Overview (master dashboard)

```
A high-fidelity UI mockup of a health-governance web dashboard, landscape 16:9, ultra high resolution with crisp legible text.

BRAND: EECA Lung Health Sovereignty Hub. Top header bar in near-black teal (#062523): on the LEFT a logo made of two overlapping stylised lung lobes — left lobe deep navy (#023a6d), right lobe teal (#178f88), a clean white gap between them — next to the wordmark "EECA Lung Health" in a geometric sans (Space Grotesk), white. On the RIGHT of the header, small light-teal uppercase tagline "TRANSFORMING HEALTH INVESTMENTS INTO MEASURABLE NATIONAL IMPACT".

PALETTE: deep navy #023a6d, teal #0c5b57 / #178f88, bright teal #5fd4ce, cool slate neutrals, warm-white canvas #fafbf9, ink #1a2124. One muted red only for alerts. No coral, purple or bright red. Fonts: Space Grotesk for headings/numbers, Inter for labels. White cards, 12px rounded corners, soft shadows, thin borders.

TITLE under the header: "EECA Lung Health Overview".
LAYOUT:
- A row of four metric tiles: "Lung Health Burden — 1.8M Cases", "Total Spending — $320M USD", "Coverage Gap — 25% Gap", "Active Risk Alerts — 5 Alerts" (the alert tile in muted red).
- Centre: a clean stylised map of the Eastern Europe & Central Asia region filled in teal-green shades.
- Right column "Alerts" panel listing: "Drug Shortage – TB Medications", "Funding Transition Risk", "Procurement Delay", each with a small red status dot.
- Three module cards in a row: "Budget & Policy Intelligence", "Operational Intelligence & Health Security", "Parliamentary & Public Accountability", each with a small teal/navy icon.
- Bottom: a wide "Burden vs Spending Trend" area/line chart in navy and teal, years 2018–2023.

Institutional, modern, precise. No lorem-ipsus gibberish — use the real labels above, spelled correctly.
```

---

## 2 — `eeca-overview-dashboard.png` — Budget vs Burden Analysis (the Engine)

```
A high-fidelity UI mockup of a health-budget analysis web dashboard, landscape 16:9, ultra high resolution with crisp legible text.

BRAND: EECA Lung Health Sovereignty Hub. Top header bar in near-black teal (#062523): LEFT = logo of two overlapping lung lobes (left lobe deep navy #023a6d, right lobe teal #178f88, white gap between) + wordmark "EECA Lung Health" (Space Grotesk, white). RIGHT = small light-teal uppercase tagline "TRANSFORMING HEALTH INVESTMENTS INTO MEASURABLE NATIONAL IMPACT".

PALETTE: deep navy #023a6d, teal #0c5b57 / #178f88, bright teal #5fd4ce, slate neutrals, warm-white canvas #fafbf9, ink #1a2124. One muted amber/red only for the "misalignment" highlight. No coral/purple. Fonts: Space Grotesk headings/numbers, Inter labels. White cards, 12px radius, soft shadows.

TITLE: "Budget vs Spending Analysis". A filter row: Country "Ukraine", Disease "Tuberculosis", Date "2020–2023".
LAYOUT:
- Left/centre: a dual chart — "Disease Burden (TB Cases)" shown as declining teal bars, overlaid/beside "Health Spending on TB" as navy bars — with a softly shaded vertical "Misalignment Zone" band.
- A row of three result metrics: "Underfunded Burden −15K TB Cases", "Overallocated Funds +$25M USD", "Misalignment Impact 34% Inefficiency".
- Right column: a "Key Findings" card with 3–4 short bullet points, and below it an "Actionable Recommendation" card reading "Reallocate $100M USD from low-impact interventions" with a solid navy button "View Reallocation Plan".
- Bottom: two cards — "Reallocation Opportunity — 10% Efficiency Gains" and "Priority Recommendation — decentralise diagnostics and scale patient support", each with a small teal button.

Clean, analytical, institutional. Use the exact labels above, correctly spelled.
```

---

## 3 — `ukraine-country-dashboard.png` — Country Deep-Dive (the hero shot)

```
A high-fidelity UI mockup of a single-country health web dashboard, landscape 16:9, ultra high resolution with crisp legible text.

BRAND: EECA Lung Health Sovereignty Hub. Top header bar in near-black teal (#062523): LEFT = two-lobe lung logo (left lobe deep navy #023a6d, right lobe teal #178f88, white gap) + wordmark "EECA Lung Health" (Space Grotesk, white). RIGHT = small light-teal uppercase tagline "TRANSFORMING HEALTH INVESTMENTS INTO MEASURABLE NATIONAL IMPACT". A country selector pill labelled "Ukraine" near the title.

PALETTE: deep navy #023a6d, teal #0c5b57 / #178f88, bright teal #5fd4ce, slate neutrals, warm-white canvas #fafbf9, ink #1a2124. No coral/purple. Fonts: Space Grotesk headings/numbers, Inter labels. White cards, 12px radius, soft shadows.

TITLE: "Ukraine: Lung Health".
LAYOUT:
- Four top metric tiles: "Lung Health Burden 420K Cases", "Budget Allocation $85M USD", "Treatment Coverage 75% Covered", "Financing Gap $25M USD".
- Centre-left: a subtle stylised lungs illustration and a teal-green EECA regional map.
- Right: an "Insights" panel — "Key Risks", "High burden zones: Eastern Ukraine", and a highlighted "Financing Gap $25M — High Priority Recommendation" box.
- Lower half, several charts: "Burden vs Spending Analysis" (navy & teal bars by year), "Service Coverage by Intervention" as horizontal bars with percentages (Vaccination of Children, TB Treatment, Drug-Resistant TB Treatment, Pediatric TB Care), and "Regional Comparison" comparing Ukraine, Moldova, Belarus, Georgia.
- A prominent "$25M Financing Gap" callout card on the right.

Institutional, data-rich but uncluttered. Use the exact labels above, correctly spelled.
```

---

## 4 — `program-pipeline-investment.png` — Investment Pipeline (the Bridge)

```
A high-fidelity UI mockup of an investment / program-pipeline web dashboard, landscape 16:9, ultra high resolution with crisp legible text.

BRAND: EECA Lung Health Sovereignty Hub. Top header bar in near-black teal (#062523): LEFT = two-lobe lung logo (left lobe deep navy #023a6d, right lobe teal #178f88, white gap) + wordmark "EECA Lung Health" (Space Grotesk, white). RIGHT = small light-teal uppercase tagline "TRANSFORMING HEALTH INVESTMENTS INTO MEASURABLE NATIONAL IMPACT".

PALETTE: deep navy #023a6d, teal #0c5b57 / #178f88, bright teal #5fd4ce, slate neutrals, warm-white canvas #fafbf9, ink #1a2124. No coral/purple. Fonts: Space Grotesk headings/numbers, Inter labels. White cards, 12px radius, soft shadows.

TITLE: "Program Pipeline & Investment Opportunities" with a subtitle "Bankable, data-validated programs ready for government & donor financing".
LAYOUT (three columns):
- LEFT "Priority Program Areas" list, each a row with an icon, name, a small tag, a funding range and duration: "National TB Elimination Acceleration" (tag High Impact, $85–120M, 60 months), "Maternal & Child Health Initiative" (Strategic, $110–150M), "HIV Prevention & Treatment Scale-Up" (High Impact, $70–95M), "Primary Health Systems Strengthening" (Foundational, $180–250M).
- CENTRE "Financing Overview": a big number "$445M Total Pipeline Value" and a donut chart split 38% Government / 42% Donor & Grants / 20% Financing Gap in navy/teal/bright-teal. Below, "Investment Structure": Government Budget $180M (Committed), Secured Donor Funding $190M (In Negotiation), Seeking Investment $75M (Priority Ask), as small progress bars. Below that "Expected Returns (3-Year Outlook)": 4.2M Lives Positively Impacted, 2.8:1 Economic Return, 38% Reduction in Catastrophic Health Expenditure, 65% Improvement in Service Coverage.
- RIGHT "Implementation Timeline" as a vertical Q1–Q4 milestone list, and a "Why Invest Through EECA Lung Health" card with four ticked points: De-risked & Data-Validated, Government-Aligned, Blended-Finance Ready, Real-Time Monitoring.

Institutional fintech-for-government feel. Use the exact labels above, correctly spelled. IMPORTANT: the "Why Invest Through…" card must read "EECA Lung Health", not any other name.
```

---

## 5 — `meeting-country-dashboard.png` — Boardroom context photo

```
A photorealistic wide photograph, landscape 16:9, of a professional government/health policy meeting in a bright modern boardroom. Four to five diverse officials in business attire sit around a light wood table, attentively discussing. On the wall, a large screen displays a clean data dashboard.

The dashboard on the screen is clearly branded "EECA Lung Health": a dark teal (#062523) header bar with a two-lobe lung logo (left lobe deep navy #023a6d, right lobe teal #178f88, white gap between) and the wordmark "EECA Lung Health", above a title "Country Dashboard". The dashboard shows a teal-green regional map, KPI tiles and navy/teal bar and donut charts — same visual style as the EECA Lung Health platform (navy + teal palette, white cards, clean institutional look). An open laptop on the table shows the same dashboard.

Natural office lighting, shallow depth of field, credible and corporate. The on-screen branding must read "EECA Lung Health" — no other product name anywhere.
```

---

## 6 — `budget-review-report.png` — Printed report context photo

```
A photorealistic top-down photograph, landscape 16:9, of a printed policy report resting on a clean light desk next to a laptop edge and a pen.

The report cover and inner pages are branded "EECA Lung Health": a two-lobe lung logo (left lobe deep navy #023a6d, right lobe teal #178f88, white gap between) with the wordmark "EECA Lung Health" at the top, and a document title "Budget Review Report 2024". The pages show tidy charts in a navy-and-teal palette — a bar chart labelled "Budget Allocation vs Disease Burden", a small pie chart, and a line "Funding Tracker" — plus short paragraphs of body text. Clean institutional layout, Space Grotesk headings, Inter body.

Soft natural lighting, subtle shadows, professional and credible. The branding on the report must read "EECA Lung Health" — no other product name.
```

---

## Notes
- The four dashboards (1–4) are the priority — they appear on `/solution` and other pages. Photos (5–6) are secondary context imagery.
- If ChatGPT keeps mis-rendering long numbers/labels, generate the frame first, then say *"keep everything identical but fix the text: [list exact labels]"*.
- Keep all six generated in one session (or reference the previous image) so the header bar, card style and colours stay identical across the set — that consistency is the whole point.

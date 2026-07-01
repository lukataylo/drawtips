# Design-theory brief: typography, color, rhythm & grid

Applied to draw.tips. Brand inputs: slate blue `#596981`, amber `#FFAC00`, background `#F8F8F8`.
All contrast ratios computed with the WCAG relative-luminance formula; tint ramps generated in
OKLCH (constant hue, stepped lightness).

---

## 1. Typography

### Principles
- **Modular scales** multiply a base size by a constant ratio (Tim Brown, *More Meaningful
  Typography*). 1.2 (minor third) for dense text UIs; **1.25 (major third) is the workhorse for
  landing pages**; 1.333/1.414 for poster-like pages where only a few steps are used.
- **Line-height** is inversely proportional to size: body 16–20px wants 1.4–1.6; headings 1.2–1.3;
  display sizes (48px+) want 1.05–1.15 or they fall apart.
- **Measure**: 45–75 characters per line, ~66 ideal (Butterick; Baymard narrows to 50–75).
  `max-width: 65ch` on prose. At 18px that's ~585px — prose never spans all 12 columns.
- **Pairing**: contrast in one clear axis (serif/sans, weight, formality), kinship in another
  (x-height, proportions). Max 2 families; a characterful display face for H1–H2 only + a neutral
  text face is the proven pattern.
- **Tracking**: tighten display type slightly (−0.01 to −0.025em); loosen small type; always
  letterspace ALL-CAPS labels (+0.05 to +0.12em); never letterspace lowercase body.
- **Fluid type**: `clamp(min, rem + vw, max)` — always include a rem term so zoom still works.
  Fluidity matters at the top of the scale; body barely changes.
- **Baseline grid**: on the web, "baseline" pragmatically means every line-height is a multiple
  of 4 and every space a multiple of 8 — text snaps back into phase after every block.

### The draw.tips type scale (ratio 1.25, base 18px, line-heights ÷ 4)

| Role | Size / LH | Tracking | Notes |
|---|---|---|---|
| Display (hero H1) | 56 / 64 | −0.02em | `clamp(2.25rem, 1.5rem + 3vw, 3.5rem)` |
| H1 interior | 44 / 52 | −0.015em | |
| H2 section | 36 / 44 | −0.01em | |
| H3 | 28 / 36 | 0 | |
| H4 / card title | 22 / 28 | 0 | |
| Lead paragraph | 22 / 32 | 0 | hero subcopy only |
| Body | 18 / 28 | 0 | `max-width: 65ch` |
| Small / UI | 16 / 24 | 0 | buttons, nav |
| Caption / eyebrow | 14 / 20 | +0.01em; eyebrows uppercase +0.08em, weight 600 | |

---

## 2. Color

### Principles
- Measured in OKLCH, `#596981` is hue 258° and `#FFAC00` is hue 74° — **184° apart, almost
  exactly complementary**. This is a strong foundation: cool credible base + warm energetic
  accent. Keep it; don't add a third hue.
- **60-30-10**: ~60% neutral surfaces, ~30% secondary (slate text/borders), ~10% accent —
  reserved for the primary CTA (NN/g). A complementary pair only stays elegant when the
  distribution is asymmetric.
- Each brand hue becomes a **ramp** (9–10 steps), not one swatch. **Tint neutrals toward the
  brand hue** — pure grays next to saturated color look dirty.
- **WCAG 2.1 AA**: 4.5:1 body text, 3:1 large text and non-text UI.
- **OKLCH tips**: generate ramps at even L steps with constant hue, tapering chroma at both ends.
  L ≤ ~0.55–0.6 passes 4.5:1 on white; L ≥ ~0.9 works as background under near-black text.

### The draw.tips palette (12 swatches, contrast-verified)

| Token | Hex | Role |
|---|---|---|
| `ink` | `#1A273A` | Headings, text on amber CTAs, dark sections |
| `slate-700` | `#3A4E6B` | Body text |
| `slate-500` | `#596981` | Secondary text, captions (5.3:1 on slate-50 — AA) |
| `slate-400` | `#869AB8` | Decorative only — fails 3:1 |
| `slate-200` | `#D4DFEF` | Borders, dividers |
| `slate-100` | `#EAF1FA` | Alternate section background |
| `slate-50` | `#F7FAFF` | **Page background** (replaces flat `#F8F8F8` — same lightness, on-brand) |
| `amber-500` | `#FFAC00` | Primary CTA fill, accents — **never text on light** (1.8:1 fail) |
| `amber-600` | `#DB940D` | CTA hover |
| `amber-800` | `#885800` | Amber-as-text: links, labels on light (6.1:1 — AA) |
| `amber-50` | `#FFF3E4` | Warm callout background |
| `white` | `#FFFFFF` | Cards, text on dark |

Key verified pairs: ink on slate-50 **14.4:1**; slate-700 on slate-50 **8.1:1**;
**ink on amber `#FFAC00` = 8.0:1 (AAA)** — dark text on amber buttons, never white;
amber on ink (dark sections) 8.0:1; amber-800 on white 6.1:1.

---

## 3. Rhythm & grid

### Principles
- **Why 8**: divides evenly into every common screen width and density multiplier; coarse enough
  to force consistency, fine enough for control; the convention of most design systems. The 4px
  half-step is for fine adjustments inside components.
- **Vertical rhythm**: every line-height ÷ 4, every margin/padding ÷ 8 → total vertical distances
  stay on grid and elements across columns share sightlines.
- **Spacing scale** (geometric, not linear): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Why 12 columns**: smallest number divisible by 2, 3, 4, and 6 — halves, thirds, quarters, and
  sixths all land on column edges. Content max-width ~1140–1200px.
- **Rhythm creates hierarchy** (Gestalt proximity): space between groups must be visibly larger
  than space within groups, roughly 2–4× per level. Pick ONE inter-section value and repeat it.

### The draw.tips spec (used by all three options)

- **Desktop ≥1024px**: 12 columns, 24px gutters, container max 1200px (1152 content + 24 margins).
- **Tablet 600–1023**: 8 columns, 24px gutters, 32px margins.
- **Mobile <600**: 4 columns, 16px gutters, 20–24px margins.
- **Section rhythm**: 96px vertical padding desktop / 64px mobile, constant; 128px only around
  the final CTA. Within sections: 48 head→content, 24–32 component, 12–16 element, 4–8 micro.
- **Spans**: hero 6+6 or 7/5 split; prose 8 centered (capped at 65ch); cards 3×4; CTA 10 centered.

---

## Sources

- Tim Brown, [More Meaningful Typography](https://alistapart.com/article/more-meaningful-typography/) · [typescale.com](https://typescale.com/)
- Butterick's Practical Typography: [line spacing](https://practicaltypography.com/line-spacing.html), [line length](https://practicaltypography.com/line-length.html), [letterspacing](https://practicaltypography.com/letterspacing.html)
- Baymard, [Readability: The Optimal Line Length](https://baymard.com/blog/line-length-readability)
- [Utopia — fluid type](https://utopia.fyi/) · web.dev [min/max/clamp](https://web.dev/articles/min-max-clamp)
- NN/g, [Using Color to Enhance Your Design](https://www.nngroup.com/articles/color-enhance-design/)
- WCAG 2.1: [1.4.3 Contrast Minimum](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
- Evil Martians, [OKLCH in CSS](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) · [oklch.com](https://oklch.com/)
- [The 8-Point Grid](https://spec.fm/specifics/8-pt-grid) · Material Design [spacing methods](https://m2.material.io/design/layout/spacing-methods.html)
- Zell Liew, [Why Vertical Rhythms](https://zellwk.com/blog/why-vertical-rhythms/)
- [Bootstrap 12-column grid](https://getbootstrap.com/docs/5.3/layout/grid/)

# Signs of "Claude design" — and how to avoid them

Research synthesis from designer discussions, blog posts, and one large-scale empirical study
(Adrian Krebs scored 1,590 Show HN landing pages against 16 deterministic "slop" checks:
22% triggered 4+ patterns, 32% triggered 2–3, only 46% were clean).

**Why it happens:** LLMs are statistical pattern matchers — they emit the median of every
Tailwind tutorial in their training data. One upstream default (Tailwind UI's `bg-indigo-500`)
cascaded through millions of tutorials, teaching models "modern web design = purple." AI output
then re-enters the training corpus, reinforcing the loop.

## The tells, catalogued

### Color
- **Indigo/violet/purple everything** — the single most cited tell.
- **Gradient text on headlines.**
- **Dark hero with radial glow** — colored box-shadow "glows" behind cards/buttons.
- **Poor contrast in dark themes** — medium-grey body text that fails WCAG AA.
- **Gradients everywhere** — backgrounds, borders, dividers.
- **The "tasteful" cream/beige fallback** — the standard pivot when told "not purple"; now a tell itself.
- **Untweaked default Tailwind palette** — `indigo-500`, `slate` greys, `gray-50` section stripes.

### Typography
- **Inter (or Roboto/system-ui) by default** — plus the now-burned alternates: Geist, Space Grotesk, Instrument Serif.
- **Serif-italic accent word** in an otherwise sans headline ("Ship *faster*").
- **Flat hierarchy beyond size** — no weight/case/color contrast; size steps < 1.25 ratio.
- **Identical all-caps kickers above every section heading.**

### Layout & structure
- **Centered-everything hero with pill badge** ("✨ Now with AI") — one of the strongest empirical tells.
- **3-column feature card grid** — icon-in-rounded-tile above heading above two lines of text, `rounded-2xl`, soft shadow.
- **Emoji as icons.**
- **Colored left/top accent border on rounded cards** — "as reliable a sign of AI design as em-dashes."
- **Decorative glassmorphism** (backdrop blur solving no layering problem).
- **Uniform border-radius + identical shadows on everything.**
- **Invented stat banners** ("10,000+ users / 99.9% uptime / 4.9★").
- **Cookie-cutter section order** — hero → logo wall → 3 features → how-it-works → testimonials → stats → CTA — regardless of product.
- **Monotonous whitespace** — identical `py-24` between every section; no rhythm of tight grouping vs. generous separation.

### Copy & content
- **Generic aspirational copy** — "Unlock your potential," "Supercharge your workflow," "seamless," "empower."
- **Fake social proof** — interchangeable testimonial grids, invented stats.
- **"It's not X — it's Y" cadence and em-dash overuse.**
- **Placeholder imagery** — stock photos or plastic-smooth generic illustrations instead of real, specific artwork.

### Motion
- **Uniform fade-in-on-scroll on everything**; bounce easing; hover-zoom images; missing focus states elsewhere.

## ✅ Checklist: how to avoid the Claude-design look

- [ ] No indigo/violet/purple as primary unless it's genuinely your brand.
- [ ] No gradient-filled headline text — solid color, full contrast.
- [ ] Ban Inter/Geist/Space Grotesk/Instrument Serif as defaults — pick a display + body pairing deliberately.
- [ ] Kill the "✨ pill badge" above the H1.
- [ ] Break the centered hero — left-aligned, asymmetric, or split layouts.
- [ ] No 3 identical feature cards with icon-tile-on-top — vary sizes or go editorial.
- [ ] Never use emoji as icons.
- [ ] Remove colored left/top accent borders on rounded cards.
- [ ] One elevation strategy (border OR shadow), varied radius, applied intentionally — not blanketed.
- [ ] No decorative glassmorphism or glow box-shadows.
- [ ] Build hierarchy with weight, case, color, and width — not just size; ≥1.25 size ratio between levels; 45–75ch measure.
- [ ] Vary section rhythm — tight within groups, generous between sections; don't repeat one section skeleton five times.
- [ ] Cut uppercase kickers you can't justify; number things only if genuinely sequential.
- [ ] Rewrite generic copy with specifics, in the author's voice; prune "not X — it's Y" constructions.
- [ ] Only real social proof — or none.
- [ ] Use real, specific artwork — not stock/generic illustration sets.
- [ ] Check WCAG contrast: 4.5:1 body, 3:1 large text and UI.
- [ ] Purposeful motion only — ease-out, transform/opacity, no blanket scroll-fade.
- [ ] When prompting an LLM, state the negatives explicitly and reference a specific design to emulate.
- [ ] Final test: screenshot the hero and ask "could this be any site?" If yes, iterate until something on the page could only be yours.

## Audit: where the *current* draw.tips design stands

Trips these tells today:

1. **Generic flat-illustration people** (unDraw-style hero + tree/storefront scene) — the 2018
   equivalent of today's AI illustration look; it could be any startup's hero.
2. **Centered-everything** — hero, headline, about section all axis-centered.
3. **Uniform rounded cards with the same soft drop shadow** for every lesson row.
4. **Dashed "coming soon" placeholder box** — reads as an unfinished template.
5. **Flat hierarchy** — H1 38px vs H2 18px with nothing between; hierarchy carried by size alone.
6. **Contrast failures** — amber `#FFAC00` used as link/text color on light backgrounds (1.8:1,
   fails WCAG badly); `#596981` at 16px is borderline.
7. **Off-grid spacing** — margins of 5px, 15px, 25px, 30px, 50px, 100px; no consistent scale.

What's genuinely worth keeping: the slate + amber near-complementary pair, the personal
author section, the hand-drawn avatar (it's real art, unlike the hero), the wordmark, and
the modest, personal tone of the whole thing.

## Sources

1. [Scoring Show HN submissions for AI design patterns — Adrian Krebs](https://www.adriankrebs.ch/blog/design-slop/)
2. [AI Design Slop: 16 Patterns That Out Your App as Vibe-Coded — Developers Digest](https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it)
3. [Slop — Impeccable.style](https://impeccable.style/slop/)
4. [Why Your AI Keeps Building the Same Purple Gradient Website — prg.sh](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website)
5. [Why Every AI-Built Website Looks the Same (Blame Tailwind's Indigo-500) — DEV](https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p)
6. [AI Slop Web Design: Complete Guide — 925 Studios](https://www.925studios.co/blog/ai-slop-web-design-guide)
7. [How To Spot AI-Generated Design — Nick Babich, UX Planet](https://uxplanet.org/how-to-spot-ai-generated-design-697aaabe76c8)
8. [Why Every AI-Generated Landing Page Looks the Same — DEV](https://dev.to/_46ea277e677b888e0cd13/why-every-ai-generated-landing-page-looks-the-same-and-how-to-fix-it-1kmo)
9. [Why Most AI-Generated Websites Feel The Same — Medium](https://parashar--manas.medium.com/why-most-ai-generated-websites-feel-the-same-b62efaeb50fd)

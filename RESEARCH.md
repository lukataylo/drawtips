# Draw.tips — Problem-Space Research & Redesign Rationale

*July 2026. This document explains what was learned about the learn-to-draw space
and why the site was rebuilt the way it was.*

## 1. The problem space

### The market is crowded at the top and empty at the bottom

The dominant free/paid resources serve people who have already started:

| Resource | Model | Strength | Gap it leaves |
|---|---|---|---|
| **Drawabox** | Free, donation/patron | Rigorous structured fundamentals | Famously dry and grindy ("250 box challenge"); community consensus is it's *not* for absolute beginners |
| **Proko** | Paid courses ($25+) | Engaging, high production value | Most courses assume fundamentals; beginners on its own forum ask "where do I start?" constantly |
| **Line of Action / Quickposes** | Free tools + membership | Timed figure-practice tools used daily by working artists | Tools only — no teaching, intimidating nude-figure focus for a day-one beginner |
| **YouTube / Skillshare** | Free / subscription | Infinite content | *The* problem: infinite content. Choice paralysis, no sequence, "tutorial hell" |

**Key insight #1 — the beginner's real problem is overwhelm, not scarcity.**
"Where do I even start?" is the most common thread on every art-learning community.
A site that removes choice (one short path, in order) is differentiated *by having
less*, not more.

**Key insight #2 — beginners quit because of perfectionism and invisible progress.**
Research on learner frustration consistently points at unrealistic expectations,
comparing to professionals, and no visible feedback loop. The product answer:
tiny daily wins (15-min sessions), explicit "bad drawings count" messaging, and
rituals that create visible progress (date every page, compare day 30 to day 16).

**Key insight #3 — tools create habits; articles don't.**
The sites artists open *daily* are practice tools (timed gesture sessions, pose
generators), not essays. A content-only site gets one visit per lesson; a site
with a warm-up timer and a prompt-of-the-day gets return visits, which is the
foundation of both learning outcomes and a business.

### Positioning

> **Draw.tips = the zero-overwhelm on-ramp.** Five short lessons, the practice
> built in, everything free, done before Drawabox/Proko even make sense to you.
> Friendly where Drawabox is grindy; free and sequenced where YouTube is infinite.

The `draw.tips` domain is a genuine asset: memorable, exactly-what-it-says, and
strong for the high-volume beginner search intent ("how to start drawing",
"drawing for beginners", "what to draw").

## 2. What was built

| Piece | Purpose | Business function |
|---|---|---|
| 5 real lessons (seeing → line → form → light → perspective) | The teaching spine; each is a 8–10 min read ending in one concrete exercise | SEO surface area (each lesson targets a beginner query); credibility |
| 30-day starter plan | Converts lessons into a habit | Retention; the thing people share ("I'm doing the draw.tips 30-day plan") |
| Practice Room (warm-up timer + prompt of the day) | Daily-use tools, no sign-up | Return visits; the daily prompt is inherently shareable/communal |
| Printable worksheets | Guided practice sheets, print at home | The lead magnet — proven top-of-funnel for indie education businesses |
| Email capture | "New lessons by email" | The owned audience; the single most important business asset |

Everything is static HTML/CSS/JS — no build step, no backend — so it stays free
to host on GitHub Pages at the existing `draw.tips` domain.

## 3. The business ladder (in order of when to do it)

Indie art-education businesses converge on the same proven ladder:
free content → email list → digital products → recurring revenue.

1. **Now — audience.** Free lessons + tools + worksheets; email capture on the
   homepage (form is wired for a Buttondown-style embed; swap in any provider's
   endpoint). Goal: list growth, not revenue.
2. **Next — first products.** Paid *premium worksheet packs* and a polished
   "30-Day Sketchbook" PDF/printed workbook. Printables are the classic
   lowest-overhead first product (make once, sell forever) and sell well on
   Etsy/Gumroad as well as on-site.
3. **Then — courses.** A paid video companion course for the five lessons, sold
   to the email list. Indie course creators in this niche report $500–$5k+/mo;
   the list built in step 1 is what makes launch day work.
4. **Later — recurring.** A small membership: monthly prompt calendars, critique
   threads, community challenges. Memberships add predictable revenue and
   community lock-in, but only work on top of an existing audience.
5. **Throughout — affiliate.** A "recommended supplies" page (pencils, paper,
   sketchbooks) with affiliate links is low-effort incremental revenue that also
   answers a genuine beginner question ("what do I buy?"). Not built yet —
   good first follow-up.

## 4. Sources

- [Proko community — "Where do I start"](https://www.proko.com/community/topics/where-do-i-start), ["I'm a beginner and I don't know where to start"](https://www.proko.com/community/topics/i-m-a-beginner-and-i-don-t-know-where-to-start)
- [Proko community — "Drawabox: what do you love and what do you hate?"](https://www.proko.com/community/topics/drawabox-what-do-you-love-what-do-you-hate), ["Alternatives to Drawabox?"](https://www.proko.com/community/topics/alternatives-to-drawa-box)
- [Drawabox's own recommendation pages for Proko](https://drawabox.com/recommendations/proko)
- [The Drawing Source — overcoming artistic frustration & perfectionism](https://www.thedrawingsource.com/artistic-frustration.html)
- [Learning to See — taking the frustration out of drawing practice](https://www.learning-to-see.co.uk/how-to-take-the-frustration-out-of-drawing-practice)
- [Will Kemp Art School — the 3 reasons why you can't draw](https://willkempartschool.com/the-3-reasons-why-you-cant-draw/)
- [Line of Action practice tools](https://line-of-action.com/practice-tools), [Quickposes timed gestures](https://quickposes.com/en/gestures/timed), [Posemaniacs 30-second drawing](https://www.posemaniacs.com/en/tools/thirtyseconds)
- [LearnWorlds — course monetization models](https://www.learnworlds.com/monetization-business-models/)
- [Bluehost — digital products that sell (printables/worksheets)](https://www.bluehost.com/blog/examples-of-digital-products/)
- [Shopify — art business ideas](https://www.shopify.com/ph/blog/art-business-ideas)

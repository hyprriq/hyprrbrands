# Hyprr — mobile layout fix prompt

Paste the block below to your coding agent.

```
Fix the mobile layout of the Hyprr homepage. Target: 360px CSS width Android.
Do NOT change any desktop behaviour above 640px, any copy string, the section
rhythm map, the palette, or the scroll section's pinned logic.

CONTEXT
There is currently no mobile design — only 19 breakpoints across 9 components,
none below 900px except three md:. Everything else is clamp() + auto-fit, so on
a phone every clamp sits at its floor. Those floors were tuned to fix small text
on desktop, which made mobile oversized. The hero is 1494px tall (two phone
screens) and a heading overflows the viewport.

FIX 1 — Add a mobile type layer (P0)
In app/globals.css, after the six @utility type-* definitions, add ONE block.
Do not edit the existing clamp values — they serve desktop.
  @media (max-width: 640px) {
    .type-h1    { font-size: 34px;   letter-spacing: -.032em; line-height: 1.06; }
    .type-h2    { font-size: 28px;   letter-spacing: -.028em; line-height: 1.10; }
    .type-h3    { font-size: 21px;   letter-spacing: -.018em; line-height: 1.2;  }
    .type-lead  { font-size: 17px;   line-height: 1.55; }
    .type-body  { font-size: 16px;   line-height: 1.6;  }
    .type-label { font-size: 11.5px; }
  }
16px is a hard floor for anything that is a sentence — brand guideline, do not
go below it.

FIX 2 — Add heading wrap safety (P0)
@layer base currently has NO heading rules at all. Add:
  h1, h2, h3, h4 { text-wrap: balance; overflow-wrap: break-word; }
  p, li { text-wrap: pretty; }
Then remove the now-redundant inline `text-balance` from the Hero h1.

FIX 3 — Find and fix the horizontal overflow (P0)
"Everything connects." is clipped rather than wrapped, so a sibling is widening
the row. Do NOT just shrink the text — that hides it.
Diagnose at 360px with:
  [...document.querySelectorAll('*')]
    .filter(el => el.getBoundingClientRect().right >
                  document.documentElement.clientWidth + 1)
Then fix the container. Most likely: a grid/flex child missing `min-width: 0`
(children default to min-width:auto). Add `min-w-0` to the grid items in
EverythingConnects' <ol> and to any flex child holding long text.
Acceptance: document.documentElement.scrollWidth === clientWidth at 360, 375, 390, 412.

FIX 4 — Mobile spacing layer (P0)
Reduce below 640px only:
  - section vertical padding  60px -> 44px  (every py-[clamp(60px,...)])
  - section horizontal padding 24px -> 20px
  - card padding               20px -> 18px
  - Hero pt                    48px -> 28px
  - Hero h1 margin-bottom      24px -> 16px
  - Hero lead margin-bottom    34px -> 24px
Target: hero total height <= 950px at 360px (currently 1494px).

FIX 5 — Hero mobile composition (P1)
  - Stack the two CTAs full-width below 480px, primary first, gap 10px.
    Remove the side-by-side flex-wrap at that width.
  - Drop the STOREFRONT ADMIN fragment on mobile (keep it >=900px).
    Keep the commerce-operating-system card and the OPERATIONS card.
  - The OPERATIONS card currently left-aligns label/value pairs in a full-width
    box because text-right is gated behind min-[1180px]. On mobile make each row
    a two-column `flex justify-between` so the value sits right.

FIX 6 — Channel row (P1)
  - Below 640px use an explicit `grid grid-cols-3` (3x2), not flex-wrap.
    Current 4+2 leaves a ragged orphan row.
  - Re-source amazon/walmart/ebay as SVG or transparent PNG. They are .jpeg
    today, which cannot hold alpha, so `grayscale` renders them as opaque grey
    blocks while the TikTok SVG stays heavy black. The row has no visual parity.
  - Replace the uniform width={46} height={46} with per-mark optical sizing:
    give each mark a max-height and let width be auto, tuned by eye so a wide
    wordmark (eBay) and a square glyph (Target) read at the same weight.
    The build spec requires "consistent optical sizing, not equal bounding boxes."

FIX 7 — Visual slots, mobile crops (P1)
Add empty aspect-ratio-reserved slots with a neutral ink-tinted placeholder.
Use <picture> so mobile gets a portrait source, not a squashed landscape one:
  - Ownership (07)      mobile 4:5, desktop 16:9, ink overlay 72%
  - True cost (11)      mobile 4:5, desktop 21:9, ink overlay 78%
  - CommercePaths card 2  4:3, full column width, above the copy on mobile
  - Team (13)           1:1, ONE per row below 640px (a 3-up grid gives 96px
                        faces, which is worse than no photo)
No placeholder people, silhouettes or generated faces.

CONSTRAINTS
- Do not touch any clamp() maximum. Desktop must render identically.
- Do not change copy. (The H1 and channel sub-line are wrong per the build spec,
  but that is a separate ticket.)
- Every new size goes in the max-width:640px layer, not inline per component.

ACCEPTANCE
1. No horizontal scroll at 360 / 375 / 390 / 412px.
2. No heading clipped at any of those widths.
3. Hero height <= 950px at 360px.
4. Nothing that is a sentence renders below 16px.
5. Channel row is 3x2, evenly weighted, all six marks visible at similar weight.
6. Desktop screenshots at 1440 and 1920 are pixel-identical to before.
7. Lighthouse mobile CLS does not regress; all slots reserve their ratio.
8. Touch targets stay >= 44px.
```

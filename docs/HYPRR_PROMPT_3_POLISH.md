# Hyprr — prompt 3: composition + colour weight

Self-contained. Paste the block to your coding agent. Everything here was measured on the
live build at `hyprrbrands.vercel.app`, viewport sizes given per finding.

**Two items from the last report are now closed — do not spend time on them:**
- *"Two-word H2s trip the outline heuristic."* The heuristic was wrong and is retired.
  `Everything connects.` and `Built differently.` are section headings rendered at
  `type-h2` 800-weight. Word count never was the test. The real rule: **no `<h2>` styled
  as a label** (mono, uppercase, ≤13px). Leave that copy alone.
- *"`max-w-[20ch]` forces 3 lines, used 24ch."* Correct call. Where a prompt gives a number
  and an acceptance target that disagree, the acceptance target is the intent and the number
  is a starting value — move the number.

```
Polish pass on the Hyprr homepage (Next.js 16 + Tailwind 4).
Repo: D:\Projects\hyprrbrands

Do NOT change: the section order, the type scale ratios, any copy string except where a
fix below names one, or the engine token hues.

======================================================================
FIX 1 — Sticky cards clip themselves on short and landscape viewports (P0)
======================================================================
A card that is TALLER than (viewport - stack-top) sticks at the top and its own bottom
sits permanently below the fold — you cannot scroll to reveal it, because scrolling
advances the stack instead. Measured on the live build:

  375 x 667 portrait   window 571px   cards 577-615px   ALL FOUR overflow by 6-44px
  844 x 390 landscape  window 294px   cards 524-567px   overflow by 230-273px
  390 x 844 portrait   window 748px   cards 577-602px   fits (146-171px spare)
  1366 x 640 laptop    window 544px   cards ~384px      fits

So the two-column desktop case is fine and the single-column case is not: below 900px the
art panel stacks UNDER the copy and adds ~215px per card.

1a. Give each card's art panel a hook. In SystemScroll.tsx add `data-card-art` to all four
    `<div className="bg-white border border-line border-t-4 ...">` panels (card 4's is
    `bg-bone`).

1b. In globals.css, below 900px condense the panel to its accent bar and its one-line
    summary. The detail rows restate the chip list beside them, so nothing is lost:

    @media (max-width: 899px) {
      #system [data-card-art] > div:not(:last-child) { display: none; }
      #system [data-card-art] { padding: 14px 16px; }
    }

1c. Gate sticky on the viewport being tall enough to show a whole card. Make static the
    base state — it is safe at every size — and switch sticky on only inside the query:

    #system [data-stack] > article {
      position: static;                 /* was: sticky */
      ...everything else unchanged...
    }
    #system [data-stack] > article { min-height: auto; }
    @media (min-width: 900px) {
      #system [data-stack] > article { min-height: min(60vh, 520px); }
    }
    @media (min-height: 560px) {
      #system [data-stack] > article { position: sticky; }
      /* keep the four existing nth-child top offsets inside this query too */
    }

    560px is the gate because the shortest real card (~365px condensed, ~384px two-column)
    plus --stack-top 96px plus a margin has to fit. Landscape phones fall below it and get
    a plain stacked read, which is the correct outcome there.

1d. --stack-top stays 96px. The header measures 73px at 375px as well as at 1512px, so it
    does not need a mobile value. Verified, no change.

======================================================================
FIX 2 — The same auto-fit bug you fixed in Principles is still live in HowWeWork (P0)
======================================================================
HowWeWork.tsx carries per-position padding in a `pad:` field
(`pr-6` / `px-6` / `px-6` / `pl-6`, plus `border-r` on the first three) inside
`grid-cols-[repeat(auto-fit,minmax(230px,1fr))]`. At one column, item 01 gets 0 left
padding and 02-04 get 24px — that is the staircase indent visible on mobile. The
`border-r` dividers become stray right-hand rules on stacked items.

Fix exactly as Principles was fixed: delete the `pad` field, use
`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` with `gap-x-8 gap-y-7`, uniform `py-7` on
every item, and put the dividers back as `lg:border-r lg:border-line lg:last:border-r-0`
so they only exist when the row is horizontal.

I swept the other 16 components that use auto-fit — HowWeWork is the only remaining one
carrying per-position styling. After this the class of bug is closed.

======================================================================
FIX 3 — The hero sits ~240px too low, and that is not padding (P1)
======================================================================
Measured at 1512x900: the H1 top is 240px below the header bottom, and the hero section
is 1008px tall, so the CTAs fall below the fold on a 900px laptop.

Cause: the hero grid is `items-center`, and the RIGHT column carries
`min-[900px]:py-[clamp(86px,8vw,112px)]` — 224px of vertical padding at this width. That
inflates the right column, and centring pushes the shorter left column down to match. The
gap is a side effect of aligning against an inflated sibling, not hero padding.

3a. Hero section grid: `items-center` -> `items-start`.
3b. Right column (line 56): drop the vertical padding to
    `min-[900px]:pt-[clamp(8px,1.5vw,24px)]`, no bottom padding.
3c. The H1 renders 4 lines at 76px because `max-w-[15ch]` caps it at 554px — about 13
    characters per line, where a display heading wants 17-24. Change to `max-w-[18ch]`
    and lower the `type-h1` clamp maximum from 76px to 66px (floor and vw term unchanged).
3d. Give the headline the wider track: replace the hero's
    `grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]` with
    `grid-cols-1 min-[900px]:grid-cols-[1.15fr_0.85fr]`.

Target: hero <= 800px at 1512x900, H1 on 3 lines, both CTAs above the fold.

======================================================================
FIX 4 — Band tints are too pale to carry a panel (P1)
======================================================================
The three band tints were specified for small accents and are now being used as 400-600px
surfaces, where a 16:1 tint stops reading as colour and starts reading as unfinished. Add
a field tier rather than restating the bands — this is a scale, not an ad-hoc colour.

In @theme:
  --color-build-field:   #FFE3A3;   /* ink 14.28:1, body 8.92:1 */
  --color-grow-field:    #DDF2AC;   /* ink 14.80:1, body 9.24:1 */
  --color-operate-field: #B6E7DC;   /* ink 13.16:1, body 8.22:1 */

Usage rule, apply it everywhere:
  engine  (#FFC84A / #B8F34A / #45D8C0)  marks, dots, rules, <= 40px
  field   (the three above)               card and panel surfaces, 120-600px
  band    (#FFF3D6 / #EEF9D9 / #E0F4F0)   full-bleed section grounds and small tiles

Swap the four SystemScroll cards from `*-band` to `*-field` (card 4 stays `bg-white`).
Leave Principles and Transparency on their band grounds — full sections keep the pale tier.

IMPORTANT, contrast: `--color-label` (#6E6A7C) drops to 3.85-4.33:1 on the field tints and
fails AA. On any field surface, labels step to `--color-muted` (#5A5668), which measures
5.21-5.86:1. The `type-label` eyebrows inside the stack cards are the affected instances.

Side benefit: the white art panel now separates from its card at a 1.21-1.36 luminance
ratio instead of 1.09-1.14, so the panel reads as a panel.

======================================================================
FIX 5 — Team is 541,500px^2 of empty tint (P1)
======================================================================
Measured: three slots at 380 x 475 on a Bone ground, each holding two words. Reserving a
4:5 portrait frame for photography that has no delivery date is designing around a ghost —
and at that size the tint reads as a rendering failure rather than a placeholder.

Until real photography lands, do not reserve portrait space at all:
  - Drop the aspect-[4/5] frame. Replace with a compact card: white surface, 1px
    --color-line border, radius 20px, padding 24px.
  - A 3px top rule in the engine colour (build / grow / operate) is the only colour.
  - Inside: the set number as `type-label` in --color-muted, then name, role, the two-line
    accountability, then the LinkedIn link.
  - Keep `data-media-slot="portrait-0X"` on the card so the swap-in is a known edit.

When photography arrives, reintroduce the 4:5 frame above the text in the same card. Do
not ship a silhouette or a generated face in the meantime.

Also: the Team grid is `auto-fit minmax(260px,1fr)` and produces a fourth empty track at
>=1280px. Make it explicit `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.

======================================================================
FIX 6 — FAQ wastes half the section (P1)
======================================================================
Measured at 1512px: `auto-fit minmax(280px,1fr)` produces tracks of 572 / 572 / 0. The
heading is 122px tall in a 572px column beside a 921px list, so ~800px of the left column
is empty, and the heading scrolls out of view long before the questions do.

  - Replace with `grid-cols-1 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]`.
  - Make the heading column sticky so it tracks the list:
    `lg:sticky lg:top-[calc(var(--stack-top))] lg:self-start`.
  - Add `scroll-margin-top: calc(var(--stack-top) + 8px)` to the section so anchor jumps
    do not park the heading under the sticky header.

======================================================================
FIX 7 — Stack chip lists orphan their labels (P2)
======================================================================
`.state-chips` resolves to three 174px columns inside the card, which is too narrow for
"Marketplace management" and "Inventory coordination" — they wrap to two lines while
their neighbours stay on one, and row two leaves a hole in column three.
Change the minmax floor from 170px to 220px. Two ~262px columns, no wrapping, even block.

======================================================================
ACCEPTANCE
======================================================================
1.  At 375x667, 390x844 and 412x915: every stack card's full height fits within
    (innerHeight - 96), or the card is `position: static`. Check in the console with
    the article rects — do not eyeball it.
2.  At 844x390 landscape the cards are static and fully readable.
3.  At 1366x640 and 1512x900 the stack still sticks and stacks as it does today.
4.  HowWeWork items share one left edge at every width; no stray right borders below 1024px.
5.  Hero <= 800px tall at 1512x900; H1 renders 3 lines; both CTAs above the fold.
6.  No text on a `*-field` surface measures below 4.5:1. Verify the stack eyebrows
    specifically — they are the ones that move to --color-muted.
7.  Team section contains no element with an aspect-ratio reservation.
8.  FAQ heading column is <= 40% width and stays visible while the list scrolls.
9.  `document.documentElement.scrollWidth === clientWidth` at 360 / 375 / 390 / 412px.
10. Reduced-motion still renders the stack as flat static cards.
11. No new `auto-fit` grid carries per-position padding or borders.

REPORT BACK
- The stack card heights you measure at 375x667 after Fix 1, per card.
- Hero height at 1512x900 before and after.
- Whether the 17 <h2> elements audit from the earlier ticket was completed, and if so
  which ones you changed. That item is still open from the mobile prompt.
```

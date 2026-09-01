# Hyprr — Prompt 1: two visible bugs (ship today)

Independent of everything else. Two files, roughly two hours. The first is a
visible text collision on the live site.

```
Fix two layout bugs on the Hyprr homepage (Next.js 16 + Tailwind 4).
Repo: D:\Projects\hyprrbrands
Scope: components/home/Principles.tsx and components/home/ProofSection.tsx only.
Do NOT change any copy string, the colour tokens, or any other component.

BUG 1 — Two principles are rendering with no gap between them (P0, visible on prod)
File: components/home/Principles.tsx

On desktop the card currently renders:
  "...Direct vendor -> client invoicingRealised-margin economics"
Principle 03 and principle 04 are touching with zero space.

Cause: the grid is
  grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-0
and each item carries a hand-placed padding rhythm — pr-6 / px-6 / pl-6 —
plus border-b on only the first three. Both patterns assume EXACTLY THREE
columns. Inside the 1280px card, auto-fit with a 240px minimum resolves to
FOUR columns, so item 03 (pl-6, no right padding) lands flush against item 04
(pr-6, no left padding), with gap-0 between them.

Fix:
  - Delete every per-item pr-6 / px-6 / pl-6 and every border-b.
  - Use an explicit column count so per-position styling is safe:
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  - Use real spacing instead of padding tricks:
      gap-x-8 gap-y-7
  - Give every item the same uniform padding (py-[22px]).
  - If you want the dividers back, draw them with a rule that follows the
    actual column count, e.g. border-l border-line-on-ink on every item except
    the first of each row via :nth-child — never hand-placed per item.
  - The "Why we're not an automation company ->" link is currently a grid cell.
    Move it OUT of the grid, below it, so five principles fill the grid evenly
    and the CTA reads as an action rather than a sixth principle.

Rule to keep: auto-fit decides the column count at runtime, so ANY styling that
assumes a fixed count will break at some width. If items need per-position
styling, the column count must be explicit.

BUG 2 — Proof grid orphans two cells and carries no colour (P1)
File: components/home/ProofSection.tsx

Seven items in repeat(auto-fit,minmax(200px,1fr)) wraps 5 + 2, leaving roughly
40% of row two as an empty dark cell. Every item is white text with a grey
number (--color-on-ink-mute), which is the weakest text available on a dark
ground — so the section arguing credibility has no colour in it at all.

Fix:
  - Explicit grid: grid-cols-2 md:grid-cols-4
  - Add an EIGHTH cell that is the section CTA — "Read the documents ->"
    linking to /documents, styled as a cell (same padding, same border) but
    with text-link-on-ink and font-semibold. Eight cells fill 4x2 exactly and
    the dead space becomes the action this section should drive.
  - Colour the numbers using the engine palette, cycling in threes:
      items 1-3  text-build
      items 4-5  text-grow
      items 6-7  text-operate
      CTA cell   text-link-on-ink
    Keep the item labels white. Only the numbers take colour.
  - Numbers move from type-label to type-body font-bold so they read as
    numerals rather than metadata.

ACCEPTANCE
1. At 1280, 1440 and 1920: no two principle items touch; every gap is visible
   and equal.
2. Principles grid never renders a column count its padding does not expect —
   verify by resizing 700px -> 1920px continuously.
3. Proof grid is exactly 4x2 at >=768px and 2x4 below, with no empty cell.
4. Proof numbers carry engine colour; contrast of each on --color-ink is >= 4.5:1
   (Citrus 11.6, Lime 13.6, Aqua 10.1 — all pass, just confirm nothing was
   swapped for a tint).
5. No copy strings changed.
6. Desktop screenshots of every OTHER section are unchanged.
```

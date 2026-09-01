# Hyprr — Prompt 2: replace the pinned scroll section with a sticky card stack

Replaces `SystemScroll.tsx` entirely. Also fixes the Ownership heading and the
Team colour fields. Roughly one day; deletes more code than it adds.

```
Replace the pinned scroll section on the Hyprr homepage with a sticky card
stack. Next.js 16 + Tailwind 4. Repo: D:\Projects\hyprrbrands

WHY WE ARE REPLACING IT, NOT FIXING IT
The pinned pane is a FIXED box (100vh). The composition inside it — heading,
state title, five chips, four panels, progress rail — has a VARIABLE natural
height. Real viewport heights run from ~620px to ~1400px. There is no set of
clamp values that fits a fixed composition into every one of them. Four rounds
of fixes have each traded clipping for voids, or voids for clipping; production
right now clips the H2 at the top AND the purchase-order panel at the bottom.
This is the shape of the constraint, not a bug still to be found.

A sticky card stack removes the constraint: each card is its own content height,
so a tall card just makes the page taller. Clipping becomes structurally
impossible.

DO NOT CHANGE
- Any copy string. All four state titles, chips and panel contents stay exactly
  as written. This is a mechanism change, not a content change.
- The colour tokens or the engine mapping (Build=Citrus, Grow=Lime,
  Operate=Aqua, System=white).
- Any other section except Ownership and TeamSection (specified at the end).

=====================================================================
FIX 1 — Build the sticky card stack (P0)
=====================================================================
Replace components/home/SystemScroll.tsx. The new component has NO scroll
listener, NO rAF paint loop, NO applyMode(), NO mode branching, NO geometry in
JS. Delete all of it. The whole effect is CSS.

STRUCTURE
  <section id="system" class="bg-ink">
    <div class="container">            {/* max-w-[1280px], normal padding */}
      <h2 class="type-h2 text-white">How Hyprr builds and operates ecommerce businesses</h2>
      <p class="type-lead text-on-ink-body">…existing lede if present…</p>

      <div data-stack>
        <article data-card="0"> STATE 01 / BUILD    … </article>
        <article data-card="1"> STATE 02 / GROW     … </article>
        <article data-card="2"> STATE 03 / OPERATE  … </article>
        <article data-card="3"> STATE 04 / SYSTEM   … </article>
      </div>
    </div>
  </section>

Each <article> keeps its existing content: eyebrow, h3 (className="type-h3"),
the chip list, and its panel artefact. Two columns inside the card at >=900px
(copy left, artefact right), one column below.

CSS — put this in globals.css, not inline
  :root { --stack-top: 96px; }   /* sticky header 72px + 24px breathing room */

  #system [data-stack] > article {
    position: sticky;
    border-radius: 24px;
    padding: clamp(24px, 2.6vw, 44px);
    min-height: min(60vh, 520px);     /* scroll distance BETWEEN cards */
    box-shadow: 0 -10px 40px -18px rgb(0 0 0 / .55);
  }
  #system [data-stack] > article:nth-child(1) { top: calc(var(--stack-top) + 0px);  }
  #system [data-stack] > article:nth-child(2) { top: calc(var(--stack-top) + 18px); }
  #system [data-stack] > article:nth-child(3) { top: calc(var(--stack-top) + 36px); }
  #system [data-stack] > article:nth-child(4) { top: calc(var(--stack-top) + 54px); }

CRITICAL — min-height, never height.
  min-height gives the scroll distance between cards. Content taller than it
  simply makes the card taller and pushes the page down. That single word is
  the difference between this and the old bug. Do not use height, max-height,
  or overflow:hidden anywhere in this section.

CRITICAL — no ancestor may have overflow:hidden or overflow:clip.
  position:sticky silently stops working inside a clipped ancestor. Walk up
  from [data-stack] to <body> and confirm. This is the #1 reason sticky stacks
  fail to ship.

CARD SURFACES (each card is its own engine colour, ink text)
  card 1  bg-build-band    #FFF3D6   ink text — 16.2:1
  card 2  bg-grow-band     #EEF9D9   ink text — 16.4:1
  card 3  bg-operate-band  #E0F4F0   ink text — 15.7:1
  card 4  bg-white         #FFFFFF   ink text — 17.9:1
The dark ink section background shows between and behind them, so the stack
reads as four lit panels on a dark field. Card 4 in white resolves the sequence.

The 18px offsets mean each card leaves the previous card's top edge visible as
it stacks. Those visible edges replace the progress rail — the visitor can see
"three behind me, one to go" without a separate control. DELETE the rail, the
tick buttons, jumpTo(), the dots and the skip link; they are all redundant now.

REDUCED MOTION
  @media (prefers-reduced-motion: reduce) {
    #system [data-stack] > article { position: static; margin-bottom: 20px; }
  }
Cards simply stack in normal flow. Nothing else needed.

NO JAVASCRIPT
  The effect is pure CSS, so with JS disabled it works identically. Verify all
  four cards are present and readable in view-source.

OPTIONAL POLISH — DO NOT BUILD IN THIS PASS
  Once the stack is live and stable, a dim-and-scale on outgoing cards can be
  added with CSS scroll-driven animations (animation-timeline: view()) or GSAP.
  Ship the stack first. The stack must be correct without it.

=====================================================================
FIX 2 — Ownership heading is hard-broken to three lines (P1)
=====================================================================
File: components/home/Ownership.tsx

The h2 contains literal <br /> tags:
  You own it.<br />You approve it.<br />We <span>operate</span> it.
So it can NEVER be fewer than three lines at any width. At 1800px it occupies
about a third of the row and leaves two thirds empty.

Fix:
  - Delete both <br /> tags. Keep the text and the <span class="text-operate">
    on "operate" exactly as they are.
  - Add max-w-[20ch] to the h2 and let the existing text-wrap: balance
    (already in @layer base) do the line breaking.
  - Move the sub-line ("The business stays yours…") from BELOW the heading to
    BESIDE it: wrap heading and sub-line in
      grid lg:grid-cols-[1.1fr_1fr] gap-[clamp(24px,4vw,64px)] items-end
    so the empty right half of that row is occupied. Below lg it stacks as now.

=====================================================================
FIX 3 — Team colour fields are the largest colour area on the page (P1)
=====================================================================
File: components/home/TeamSection.tsx

Three aspect-square fields at roughly 420px each is about 530,000 px² of
full-saturation Citrus, Lime and Aqua — more colour than the rest of the page
combined, spent on a placeholder that reads "Portrait to follow". The set
number is at type-h2 (58px), so the placeholder shouts louder than real
headings elsewhere.

Fix (keep the slot, calm it down):
  - Field colour: bg-build / bg-grow / bg-operate  ->  bg-build-band /
    bg-grow-band / bg-operate-band. Same identity, a fraction of the shout.
  - Ratio: aspect-square -> aspect-[4/5]. It reads as a portrait frame rather
    than a colour swatch, and it matches the crop real photography will use.
  - Number: type-h2 -> type-h3.
  - Keep "Portrait to follow" at type-label, keep the aspect ratio reserved so
    photography drops in with zero relayout.
  - Still no silhouettes, no generated faces, no stock people.

=====================================================================
ACCEPTANCE
=====================================================================
1. At 1280x720, 1440x900, 1920x1080 AND 1366x640 (short laptop): every card is
   fully visible when it is on top. Nothing is clipped at the top or bottom of
   any card, at any viewport height.
2. Resize continuously 700px -> 1920px: no frame shows a clipped card or a
   region of empty ink taller than one card's own padding.
3. JavaScript disabled: all four cards present, readable, in order.
4. prefers-reduced-motion: reduce — cards stack in normal flow, no sticky.
5. At 375px and 412px: cards stack full-width, no horizontal scroll,
   document.documentElement.scrollWidth === clientWidth.
6. No ancestor of [data-stack] has overflow:hidden or overflow:clip. Confirm by
   walking the tree.
7. grep the repo: no remaining SCROLL_LEN, applyMode, data-rail, data-tick,
   data-dots, jumpTo, or scroll event listener from the old component.
8. `grep -rnE "fontSize: *[0-9]|text-\[[0-9]" components/` still returns nothing.
9. Lighthouse: INP should IMPROVE (the rAF scroll loop is gone). CLS must not
   regress.
10. Ownership h2 renders on two lines at 1440px and the row's right half is
    occupied.
11. No copy strings changed anywhere.

REPORT BACK
- Confirm the line count of the new SystemScroll.tsx vs the old 30,583 bytes.
- Confirm whether any ancestor needed an overflow change to make sticky work.
```

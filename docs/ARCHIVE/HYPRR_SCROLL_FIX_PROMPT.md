# Hyprr — scroll section fix prompt

Paste the block below to your coding agent.

```
Fix the pinned #system section in components/home/SystemScroll.tsx.
Do NOT change: any copy string, the four states, the dwell() remap, the three
modes (pinned/carousel/stacked), the SSR/no-JS baseline, or any other file
except globals.css where noted.

CONTEXT
The section is structurally correct but three mechanisms undo it: blanket
container opacity destroys contrast, fixed-height content leaves the pinned
pane half empty, and the rail/skip link are misplaced.

FIX 1 — Remove all container opacity (P0)
- In paint(), delete `el.style.opacity = (0.62 + 0.38 * Math.max(act, conv))`
  on [data-panel]. Panels stay at opacity 1 always.
- De-emphasise inactive panels by colour only. Set the inactive text colour to
  #C7C3D2 (8.86:1) and interpolate toward #17171A as `act` rises — the existing
  `mix(MUTE, INK, act)` call does this; just change MUTE from #8E89A0 to #C7C3D2.
- Keep the background interpolation (INACTIVE -> BANDS[n]) exactly as is.
- Raise the inactive panel background from rgb(255 255 255 / .06) to
  rgb(255 255 255 / .05) and the border from /.16 to /.22 so the edge reads
  at 3:1 without opacity.
- In the rail ticks, delete `el.style.opacity`. Distinguish by colour + weight:
  current #FFFFFF weight 600, visited #C7C3D2 weight 500, upcoming #8E89A0
  weight 500.
- Replace the hardcoded `rgb(127 127 127 / .25)` in artRow with
  `var(--color-line-on-ink)`.

FIX 2 — Make the composition fill the pane (P0)
The pane is 100vh but the content caps at 50vh, leaving ~180px of dead space
split above and below. Restructure the pinned pane as a three-row flex column:
  row 1  H2 block            flex: none
  row 2  stage (copy + grid) flex: 1, min-height: 0
  row 3  rail                flex: none
- Remove `copywrap.style.minHeight = "clamp(240px,38vh,460px)"`.
  Use `height: 100%` with `min-height: 0`.
- Remove the grid's `height: "clamp(260px,50vh,600px)"` and `margin: "18px 0"`.
  Use `height: 100%; min-height: 0`.
- Keep a single floor on the stage: `min-height: 320px` for very short viewports.
- Remove `justifyContent: "center"` from [data-mid]; the flex rows now do the work.
- Panels must scale with the pane. Verify at 1440x900, 1920x1080 and 1280x720.

FIX 3 — Reposition the skip link (P1)
Move the "Skip to commerce paths ↓" anchor out of the H2 flex row and into the
rail row, right-aligned opposite the four ticks. Remove `alignItems: "flex-end"`
from the H2 row (the H2 is then the only child and needs no alignment).

FIX 4 — Rail always visible in pinned mode (P1)
The rail must be visible from the first frame of the pin, bottom-anchored inside
the 100vh pane, never below the fold. Confirm applyMode() sets it to
display:block before first paint, not after.

FIX 5 — Column ratio and chip list (P1)
- Change the stage from `.86fr 1.14fr` to `1fr 1.1fr`.
- The state chip list currently uses repeat(auto-fit, minmax(170px,1fr)) which
  gives a scattered 2-column grid. Below 1200px force a single column.

FIX 6 — Stop the hydration layout shift (P1)
The section renders auto-height then jumps to 320vh after hydration. Add a CSS
media rule (not inline JS) so the pinned height applies before hydration:
  @media (min-width:901px) and (prefers-reduced-motion:no-preference) {
    #system { min-height: 320vh; }
  }
Let applyMode() only correct it, never establish it.

FIX 7 — Focus rings on dark (P1)
The global :focus-visible uses --color-link #6947FF, which is 2.4:1 on ink.
Add a rule so any focusable element inside a .on-ink section (or #system)
uses --color-link-on-ink #A38DFF.

FIX 8 — Visual slots (do now, fill later)
Add empty, styled, aspect-ratio-reserved containers so imagery can drop in
without a relayout. Each gets width+height attributes or aspect-ratio to
prevent CLS, and renders a neutral ink-tinted placeholder until filled:
  - #ownership   : full-bleed background slot, 16:9, ink overlay 72%
  - #cost        : full-bleed background slot, 21:9, ink overlay 78%
  - CommercePaths card 2 : inline slot, 4:3
  - TeamSection  : 1:1 portrait slots, 3 up
Do NOT add any placeholder people, silhouettes, or generated faces.

ACCEPTANCE
1. No `opacity` on [data-panel] or [data-tick] anywhere.
2. Inactive panel text >= 4.5:1 against its own panel; panel border >= 3:1.
3. At 1920x1080 and 1440x900 the composition fills the pinned pane; no gap
   above or below the content larger than the H2's own bottom margin.
4. Rail and skip link both visible at the first frame of the pin.
5. JS disabled: all four states present and readable.
6. prefers-reduced-motion: all four states stacked and readable, no animation.
7. 375px: carousel snaps, four dots track, no horizontal overflow.
8. No new hardcoded colour literals; everything routes through the tokens.
9. Lighthouse CLS on the homepage does not regress.
```

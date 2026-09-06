# PROMPT 21 — The scene system

> **Rewritten. The previous version of this ticket was built on extracting visuals from the owner's
> uploads. That direction is withdrawn.** Read `docs/VISUAL_DIRECTION_v2.md` first — it is the design
> read behind this ticket and it explains what changed. `docs/VISUAL_EXTRACTION_PLAN.md` is
> superseded and kept only for the source-file manifest in its later sections.

**The site's visuals are generated 3D-style scenes, not photographs and not screenshots.** The
uploads are composite inputs to those scenes, not the visuals themselves.

**Nothing in this ticket is blocked on the images existing.** Everything here is the container layer.
Build it empty; the scenes drop in behind it.

---

## §0 · The rule that decides everything else

**Three layers per visual, and the model never writes a word.**

```
Layer 3 · BAND      CSS. Petrol / Bone / accent ground. The scene overlaps its edge.
Layer 2 · PANELS    DOM. Translucent cards, figures, labels, connector lines. Real text.
Layer 1 · SCENE     Generated image. Environment and objects. No readable text in the pixels.
```

Every number, label and word a visitor is meant to read lives in **Layer 2**, in the DOM. Nothing
readable is baked into a PNG. That is what keeps the hero indexable, keeps figures editable, keeps
the panels sharp at every density, and removes the one tell that most reliably makes a generated
image look generated.

A hero that is a single flat image is a failed hero on this site.

---

## §1 · `<Scene>` — the container

New component. Takes a generated scene and composes the three layers.

```ts
interface SceneProps {
  src: string            // base scene, WebP, 640/1280/1920 srcset
  alt: string            // short and honest — it is decorative, the substance is in panels
  archetype: "operation" | "working" | "product" | "object"
  band: "petrol" | "bone" | "build" | "grow" | "operate"
  overflow?: boolean     // scene breaks the band edge — default true for archetype "object"
  children?: ReactNode   // the DOM panel layer
}
```

Requirements:

- `srcset` 640 / 1280 / 1920 · `width`/`height` always set · WebP · under 200KB at 1280
- Hero scenes `eager` + `fetchpriority="high"`; everything else lazy
- **Panel children are positioned against the scene's right third**, which every prompt reserves as
  negative space. On mobile the scene crops to its left two-thirds and panels stack beneath it.
- **Panels must remain legible if the image fails to load.** Test with images blocked; the hero
  should still read as a designed block, not a pile of floating text.
- `overflow` lets an object cut-out cross the band edge. **That overlap is the difference between
  this and a stock image**, and it costs one `overflow: visible` and a negative margin.

---

## §2 · `<Panel>` — the overlay primitive

The translucent floating cards in the reference material. This is the piece that makes a generated
scene look like an agency site rather than a clip-art drop.

- Background `rgb(255 255 255 / 0.10)` over Petrol, `backdrop-filter: blur(12px)`, 1px
  `--color-line-on-field` border, radius matching the card system
- Contents: `type-label` kicker · one large figure or short line · one context line
- **Contrast is measured against the scene behind it, not against the band.** A blurred panel over a
  light region of a render can fail 4.5:1 where the same panel over Petrol passes. Either the scene
  keeps its right third dark — which every prompt specifies — or the panel gets a solid fallback.
  **Add this to the contrast gate; it will not catch itself.**
- Optional connector: a 1px line with a small terminal dot, drawn to a point on the scene. Inline
  SVG, absolutely positioned, `aria-hidden`.
- `prefers-reduced-motion`: panels do not float or parallax. Static placement only.

---

## §3 · Four components carried forward unchanged

These were right in the previous ticket and they are exactly what Layer 2 needs.

**3.1 `<CostBar>` — build this first.** One horizontal bar segmented by where money goes, each
segment labelled above and below, total at the right. A whole unit economic at a glance. Cost
segments neutral, retained segment Lime `#B8F34A`. **Reusable for landed cost, where a build fee
goes, what a marketplace takes.**

**3.2 `<StatRow>`** — four bordered cards: small label, large mono figure, context line.

**3.3 `<Panel3>`** — three bordered panels, uppercase kicker plus short list each. Fits
*breakeven / test / verdict* shapes and "what you get" sections.

**3.4 Dimension drawing** — inline SVG, arrows and measurements. **Uncommon on the web and reads as
engineering rather than marketing.** `/private-label` and `/ecommerce-website-development`.

**All four as SVG or DOM. None as images.**

---

## §4 · `<DataArtefact>`, `<BrowserFrame>`, `<AnnotatedCrop>`

**`<DataArtefact>` — still the strongest thing on this site.** A real HTML table where two rows have
a blank `Order` cell because we declined to buy them. **No generated scene argues as well as a table
showing products we said no to**, and no competitor can copy it without publishing their own buying
decisions. Native table, real text, sortable is optional and probably unnecessary.

**`<BrowserFrame>`** — rounded window chrome, three dots, URL bar. A real capture inside it reads as
*a real page* rather than *a picture of a page*. One component, every screenshot this site will ever
show. Subtle scroll-fade at the bottom edge of long captures.

**`<AnnotatedCrop>`** — a small labelled chip in the corner of a detail crop. **Turns a screenshot
into an explanation.**

A real capture composited into an archetype-C scene's screen plane goes through `<BrowserFrame>`
too — the frame is what separates it from the render around it.

---

## §5 · The archetype-to-page map

Assignments are in `docs/VISUAL_DIRECTION_v2.md §4`. Add to `ServicePageData`:

```ts
scene?: {
  src: string
  alt: string
  archetype: "operation" | "working" | "product" | "object"
  band: "petrol" | "bone" | "build" | "grow" | "operate"
  panels?: { kicker: string; value: string; context?: string; anchor?: "tl"|"tr"|"bl"|"br" }[]
}
```

Optional, so all 25 routes render unchanged until scenes exist. **Ship the field and the components
now; the pages light up as scenes land, one at a time.**

---

## §6 · Ground rules

- **Re-measure chroma after the first two scenes land**, before the rest. The scenes should *raise*
  the number — a saturated render on a Petrol band adds chroma where a photograph on white removed
  it. If `/private-label` does not move up, the band logic is wrong. **Report the number.**
- Clusters of three or more visuals on Bone or Petrol, never White — `PROMPT_19 §0`
- Everything through the existing pipeline: 640/1280/1920 WebP, under 200KB at 1280, alt text and
  dimensions per `check-images`
- **`check-images` gets one new rule: a scene's `alt` may not describe data.** If the alt text
  contains a figure, the figure is in the wrong layer.
- Where a real product render appears inside a scene, it carries a short note that it is a concept
  render. No claim about results, clients or performance attaches to any visual.

---

## Acceptance

1. `<Scene>` and `<Panel>` exist and compose correctly on Petrol, Bone and all three accent bands.
2. A page using `<Scene>` with the image blocked still reads as a designed hero.
3. Panel text passes 4.5:1 measured **against the scene**, not the band.
4. `<CostBar>`, `<StatRow>`, `<Panel3>`, `<DataArtefact>`, `<BrowserFrame>`, `<AnnotatedCrop>` built.
5. `scene` field added to `ServicePageData`; all 25 routes unchanged without it.
6. `check-images` rejects a scene alt containing a figure.
7. All six gates green. Chroma re-measured and reported after the first two scenes.

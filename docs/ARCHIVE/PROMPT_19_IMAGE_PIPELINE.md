# PROMPT 19 — The image pipeline

Source: `docs/VISUAL_PRODUCTION_PLAN.md`. Static photographic images, no 3D, no animation.

**You are not blocked on the photos.** Everything in steps 1–3 is buildable now and lights up when
images land. Build the pipeline empty, then one page at a time.

---

## ⚠ First — a chroma problem that will surface at image six, not image one

Your own measurement: service pages are now **0.0193–0.0235** against the 0.018 floor. Before this
refactor the low end was 0.0210. **The new light surfaces cost roughly 0.002.**

**The visual plan adds up to six photographic images per page, and photographs on white are light
surfaces.** Six of them will push the low pages under the floor. This is arithmetic, not a
prediction — and it will be discovered after thirteen pages of images are placed unless it is
handled in the component from the start.

**Two mitigations, build both:**

1. **Every image cluster of three or more sits on a Bone or Petrol band**, not on White. The band is
   part of the image component, not an afterthought applied later.
2. **One additional Petrol band per page** where the archetype allows — the rule card already proves
   this works: it is what paid for the mechanism diagram.

**Re-measure chroma after the first page's images land, before doing the other twelve.** If
`/private-label` drops below 0.018 with six images, the mitigation is wrong and the remaining pages
should wait. **Report the number, do not chase it.**

---

## Step 1 · The `images` field and component

Optional field on `ServicePageData`, so all 25 routes render unchanged until images exist:

```ts
images?: {
  hero?:    { src: string; alt: string; caption?: string }
  midPage?: { src: string; alt: string; caption?: string }[]
  section?: { src: string; alt: string; slot: string }[]
}
```

**Component requirements:**
- `srcset` at **640 / 1280 / 1920**, with `sizes` matching the slot's rendered width
- `width` and `height` always set — no layout shift
- `loading="lazy"` below the fold, `eager` + `fetchpriority="high"` on a hero
- WebP, with the source file kept out of `public/`
- **Optional caption** rendered beneath, in the same style as the diagram captions
- **Flat card overlay support** — the plan's `card` variant renders a white card with the site's
  border and radius over the image corner. That contrast between flat UI and a photographic object
  is the thing being copied from the reference; without it the images read as stock.

## Step 2 · The build-time image step

- Source images land in `public/images/_inbox/` from the owner
- A script converts to WebP at the three widths and writes to
  `public/images/<page-slug>/<subject>-<variant>-<width>.webp`
- **Fail the build over 200KB at 1280.** A slow hero is worse than no hero.

## Step 3 · Extend `check-copy` or add `check-images.mjs`

Fail on any image that has: no `alt` · `alt` under 20 characters · `alt` containing "image",
"photo", "screenshot" or "picture" as the whole description · a filename that is not hyphenated
words · missing `width`/`height` · over the size budget.

**Alt text is a ranking surface and an AI-answer passage.** Gate it like the metas.

---

## Step 4 · Wire one page — `/private-label` first

The owner's launched private-label products are the strongest assets available, so that page proves
the pipeline. Six slots per `VISUAL_PRODUCTION_PLAN`:

hero product on white · packaging flat-lay · sample vs final · product in use · listing/A+ mockup ·
one ad unit

**Then stop.** Re-measure chroma, look at it live, and only then roll to the other twelve.

---

## Your three flags from `752e848` — all correct, no changes

**1 · Keeping the 90-day copy behind a closed disclosure rather than deleting it.** Right call, and
better than the ticket. The ticket said "replaced"; you kept shipped copy reachable. Do that
whenever a ticket says delete and the content is sound — **a disclosure costs nothing and a deletion
is not reversible by a reader.**

**2 · The chooser capital lines and the `/scale` and `/where-we-work` copy being dev-authored.**
Noted and queued for the content-depth pass. They ship as they are meanwhile.

**3 · Retiring `check-manifest`'s `/documents`-absent assertion when `/documents` shipped.** Correct.
A gate asserting the old state after the state legitimately changed is a stale gate.

---

## Acceptance

| # | Check |
|---|---|
| 1 | `images` is optional; all 25 routes render unchanged with it unset |
| 2 | Every image emits `srcset` at three widths with `sizes`, and `width`/`height` |
| 3 | No image over 200KB at 1280 — build fails otherwise |
| 4 | `check-images` fails on missing or lazy alt text |
| 5 | `/private-label` renders six images, every cluster of 3+ on Bone or Petrol |
| 6 | **Chroma re-measured on `/private-label` after images — reported, not chased.** If under 0.018, stop and report rather than adding decoration |
| 7 | No horizontal scroll at 375 with images present · contrast AA unchanged |
| 8 | All five gates green |

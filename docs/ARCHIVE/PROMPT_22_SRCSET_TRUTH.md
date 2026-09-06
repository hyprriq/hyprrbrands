# PROMPT 22 — The srcset is lying, and it is softening two hero images

**Small ticket, real defect, found in the repo rather than in production — so the cache rule does
not apply to it.** Verified at `3fcb402` from `lib/image-manifest.json` and the emitted file sizes.

---

## The finding

`WIDTHS = [640, 1280, 1920]` is hardcoded in `components/pages/Scene.tsx:27` and
`components/pages/VisualSystem.tsx:24`, and every image is given all three `w` descriptors:

```ts
srcSet={WIDTHS.map((w) => `${src}-${w}.webp ${w}w`).join(", ")}
```

**Sharp does not upscale — correctly — so for a source narrower than 1920 the "1920" file is a byte
copy of a smaller rendition.** The `w` descriptor still claims 1920. Byte sizes prove it:

| File | Native width (manifest) | 640 | 1280 | 1920 |
|---|---|---|---|---|
| `shopify-dtc/hand-massager` | **591** | 30902 | 30902 | 30902 |
| `wholesale-ecommerce/climbing-ascender` | **634** | 49150 | 49150 | 49150 |
| `wholesale-ecommerce/pipe-cutter` | 1069 | 26738 | 34378 | 34378 |
| `private-label/faucet-mat` | 1217 | 22308 | 97644 | 97644 |
| `private-label/stone-mat-duo` | 1227 | 23844 | 165558 | 165558 |
| `private-label/stone-mat-trio` | 1205 | 17462 | 112406 | 112406 |

Three files are identical at all three widths. Three more are identical at 1280 and 1920. Only
`stone-mat-chevron`, `grill-cover`, `planter-bowl` and `sink-caddy` have a genuine 1920.

## Why it matters — the concrete failure

`Scene.tsx:125` declares `sizes="(min-width: 900px) 62vw, 100vw"`. On a 1440px viewport that is
**~893 CSS px**; at DPR 2 the browser wants **~1786 device px** and picks the 1920w candidate
because the descriptor says it is 1920w.

- `/private-label` hero: it gets `faucet-mat-1920.webp`, which is **1217px wide**. 1217 real pixels
  stretched into a 1786-pixel box. **Visibly soft on any retina laptop.**
- `/shopify-dtc`: it gets `hand-massager-1920.webp`, which is **591px wide**. Roughly a **3×
  upscale.**
- `/wholesale-ecommerce`: `climbing-ascender-1920.webp` is **634px wide.**

There is no bandwidth cost — it is the same file — so no performance gate catches it. **The cost is
entirely visual, on three of the most important pages, and it is the exact thing that makes a site
read as cheap.** A soft hero undoes the work the render pipeline was built to do.

## The fix

The truth is already in `lib/image-manifest.json` — it records the 1280 rendition's dimensions,
which for a narrow source *is* the native width. Nothing new needs measuring.

**1 · `scripts/build-images.mjs`** — record the actual emitted width of every variant, not just the
1280 dimensions:

```json
"/images/shopify-dtc/hand-massager": { "w": 591, "h": 707, "variants": [591] }
"/images/private-label/faucet-mat":  { "w": 1217, "h": 570, "variants": [640, 1217] }
```

Skip writing a variant whose target exceeds the native width, rather than emitting a duplicate under
a misleading name. Fewer files, and the name stops lying.

**2 · Both components** — build the srcset from `variants`, labelling each candidate with its real
width, and point `src` at the largest that exists rather than a hardcoded `-1280`:

```ts
const variants = dims.variants ?? [dims.w];
srcSet = variants.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
src = `${base}-${variants[variants.length - 1]}.webp`;
```

**3 · `check-images.mjs` gets one more rule.** This class of defect must not return:

> **Fail if any `srcSet` entry declares a `w` descriptor greater than that file's real decoded
> width.** Read it from the manifest; no image decoding needed.

That gate is the point of the ticket. The three soft images are today's symptom.

## What is *not* being asked

**Do not re-source or upscale the three narrow files.** `hand-massager` at 591px and
`climbing-ascender` at 634px are cut-out objects in archetype-D bands and they are fine at native
size — **once `sizes` and the descriptors are honest**, the browser will render them in a box they
can actually fill. The bug is the claim, not the pixel count.

## Acceptance

1. `variants` written per image by the pipeline; no duplicate-byte files emitted.
2. Both components build srcset from `variants`; no hardcoded `-1280` in `src`.
3. `check-images` fails a descriptor wider than the real file. **Negative path proven** — commit the
   proof the way gate six's was proven.
4. All six gates green. Chroma re-measured; it should not move, and if it does, say so.

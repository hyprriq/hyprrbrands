# PROMPT 21 — Build the visual system from the uploaded material

**Ships with `docs/content/phase-copy-depth.md`.** Read `docs/VISUAL_EXTRACTION_PLAN.md` first —
it is the design read behind every decision here.

**The owner uploaded raw visual material to `public/images/_inbox/`. It is source, not deliverable.**

> **Any brand name, watermark, footer or attribution visible in those files belongs to unrelated
> work and does not reach this site in any form.** Do not keep it, credit it, or reframe it. The
> copy written around those images is also out of scope — only the visual material is in play.

---

## §0 · The rule that decides everything else

**A screenshot placed on a page is a screenshot forever.** It blurs on retina, its text is
unselectable and uncrawlable, it breaks at 375px, and it carries whatever was in the original frame.

**So almost nothing here is cropped and placed.** Four treatments, and only one ships as a
photograph:

| | Treatment |
|---|---|
| **Product objects** | Cut out to transparent PNG — the only image category |
| **Data structures** | **Rebuild native.** Take the columns; discard the pixels. |
| **Layout patterns** | **Rebuild as components.** Take the arrangement; discard the artwork. |
| **Whole screens** | Keep as image, inside a frame component |

**Six of the eight things built here are reusable components.** That is the point: the folder should
produce a visual system, not eighteen one-time images.

---

## §1 · Product objects — extract and cut out

**Extract the ten renders from the PL PDF at native resolution** — embedded on pages 1, 3, 6, 7,
8 (×2), 9, 10, 15 (×2). `pdfimages -png`. **Do not screenshot pages.**

Then background-remove to transparent PNG: those ten, the seven Amazon listing shots, the hand
massager, the neck massager. ~18 objects.

**Build `<FloatingObject>`** — cut-out product, one soft contact shadow, single light direction
consistent per page, optional `<SpecCard>` overlaid at a corner (real card style, real typeface,
one fact) with an optional thin leader line to the point it describes.

**Why this and not a placed photo:** a cut-out product can overlap a band edge, sit half on Petrol
and half on Bone, and take a card on its corner. **That is the difference between the reference the
owner sent and a stock image**, and it costs one background removal.

**Placement:** `/private-label` hero — the folding mat cut out over Petrol, plus a row of the same
object at three fold states, which shows the mechanism with no words · `/wholesale-ecommerce`
mid-page float row · homepage channel band · `/marketplace-growth` with listing fields called out.

---

## §2 · `<DataArtefact>` — the strongest material, rebuilt native

The profitability sheet's structure is: Product · COGS · Storage · Fulfil · Ship+Prep · BuyBox ·
Referral · Profit · ROI · **Order**.

**Rebuild as a real HTML table.** Bone or Petrol ground, Hyprr tokens, mono figures. **Five or six
rows, not thirteen** — chosen to carry the argument.

**The `Order` column is the entire point.** Some rows carry a number; **some are deliberately
blank.** A table where two rows say *not bought* argues better than any sentence on the site, and it
is the one thing a competitor cannot copy without publishing their own buying decisions.

**Required detail:**
- a muted or flagged state on the not-bought rows so the eye finds them first
- **one row annotated in the margin with the reason** — e.g. *"ROI below the floor"*
- sticky first column at 375px so the product name holds while numbers scroll
- **figures illustrative and labelled as such** — the structure is the argument, not any figure

**Placement:** `/wholesale-ecommerce` primary artefact · `/scale` with a reduction column ·
`/ecommerce-operations` and `/marketplace-management` for the PO tracker and reorder sheet ·
homepage proof band at three rows.

---

## §3 · Four components lifted from the slide layouts

**3.1 `<CostBar>` — build this first, it is the best pattern in the folder.** One horizontal bar
segmented by where money goes, each segment labelled above and below, total at the right. Shows a
whole unit economic at a glance. Cost segments neutral, retained segment in Lime `#B8F34A`.
**Reusable for landed cost, where a build fee goes, what a marketplace takes.**

**3.2 `<StatRow>`** — four bordered cards: small label, large mono figure, context line. Already
close to the existing card style.

**3.3 `<Panel3>`** — three bordered panels, uppercase kicker plus short list each. Fits
*breakeven / test / verdict* shapes and the "what you get" sections.

**3.4 Dimension drawing** — inline SVG, arrows and measurements, from the PL PDF's technical page.
**Uncommon on the web and reads as engineering rather than marketing.** `/private-label` and
`/ecommerce-website-development`.

**All four as SVG or DOM. None as images.**

---

## §4 · `<BrowserFrame>` and `<AnnotatedCrop>`

A whole storefront cannot be rebuilt and should not be — the point is that it is a real page.

**`<BrowserFrame>`:** rounded window chrome, three dots, URL bar. Any screenshot inside it reads as
*a real page* rather than *a picture of a page*. **One component, reusable for every screenshot this
site will ever show.**

**`<AnnotatedCrop>`:** a small labelled chip in the corner of a detail crop. **Turns a screenshot
into an explanation** — the single best idea in the store-mockup files.

Subtle scroll-fade at the bottom edge of long captures. Lazy-load with a poster; these are the
heaviest files in the set.

**Placement:** `/shopify-dtc` hero and mid-page · `/ecommerce-website-development` at three
breakpoints in three frames.

---

## §5 · Excluded

The AI-generated lifestyle frames — several read as generated at a glance and the brand guidelines
rule that out · the `_scrapped/` working files · the `.py` build scripts · the `.md` case notes ·
the MP4 (no video slot yet) · **all three PDFs as documents** — only the renders inside the private
label PDF are extracted, as objects.

---

## §6 · Ground rules that still apply

- Clusters of three or more images on Bone or Petrol, never White — `PROMPT_19 §0`
- **Re-measure chroma on `/private-label` first**, before rolling to the rest. The instrument now
  sees photographs, so that number is real for the first time.
- Where a PL render is used as a hero, carry a short line noting it is a concept render.
- No claim about results, clients or performance attaches to any of this.
- Everything through the existing pipeline: 640/1280/1920 WebP, under 200KB at 1280, alt text and
  dimensions per `check-images`.

---

## Acceptance

| # | Check |
|---|---|
| 1 | **No brand mark, watermark, footer or attribution from the source files appears anywhere** |
| 2 | Zero spreadsheet chrome shipped — no row numbers, column letters or formula bar |
| 3 | The profitability data renders as a real HTML table, not an image; text selectable; sticky first column at 375 |
| 4 | At least two rows in that table are visibly *not bought*, with one annotated reason |
| 5 | `<CostBar>`, `<StatRow>`, `<Panel3>`, `<BrowserFrame>`, `<AnnotatedCrop>`, `<FloatingObject>` all exist and are used on ≥2 pages each where the content supports it |
| 6 | PL renders extracted at native resolution, not screenshotted; all product objects transparent PNG |
| 7 | Dimension drawing is inline SVG with real `<text>` |
| 8 | Illustrative figures labelled; concept renders disclosed where used as heroes |
| 9 | All six gates green · chroma re-measured on `/private-label` and reported, not chased |
| 10 | Contrast AA at 375/768/1024/1440 · no horizontal scroll at 375 |

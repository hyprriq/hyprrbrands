> **SUPERSEDED by `docs/VISUAL_DIRECTION_v2.md`.** The premise of this document — photograph what is
> real, extract objects from the uploads, rule out AI-generated and 3D imagery — was wrong and is
> withdrawn. Kept only for the source-file manifest in its later sections, which are now composite
> inputs to generated scenes rather than the visuals themselves.

# What to extract from the uploads — a design and architecture read

**Corrected premise.** The uploads are **raw visual material**, not a portfolio. The copy around
them was written for other sites and is out of scope.

> **Any brand name, watermark, footer strip or attribution visible in these files belongs to
> unrelated work and does not go on this site in any form** — not kept, not credited, not
> reframed. Where a mark sits over usable material, that material is rebuilt natively rather than
> retouched, which is what §B and §C do anyway.

The question is only: *what is in these pictures, what can be pulled out of them, how does it get
edited, and where does it go.*

---

## The architectural answer first, because it changes everything

**Most of what is valuable in these files is not an image. It is a pattern or a data structure.**

A screenshot of a spreadsheet placed on a web page is a screenshot forever — it blurs on retina,
it cannot be read by a crawler, its text is unselectable, it breaks at 375px, and it carries
whatever was in the original frame. **The same table rebuilt natively in HTML is crisp at every
size, selectable, indexable, themeable, and free of anything that was around it.**

So the material splits four ways, and only one of the four ships as a photograph:

| | What it is | Treatment |
|---|---|---|
| **A · Product objects** | Real things photographed or rendered | **Cut out → transparent PNG.** The only category that ships as an image. |
| **B · Data structures** | Tables of numbers | **Rebuild native.** Take the columns and the logic; discard the pixels. |
| **C · Component patterns** | Good layout ideas | **Rebuild as React components.** Take the arrangement; discard the artwork. |
| **D · Irreducible screens** | Whole store pages | **Keep as image, inside a frame component.** Cannot be rebuilt; should not be. |

**Nothing is cropped-and-placed. That is the shortcut that wastes the material.**

---

## A · Product objects — cut out and float

The only true photography in the set, and the most immediately useful.

**What's there:** ten stone-mat renders embedded in the PL PDF (three-panel folding mat, faucet
mat, groove patterns, on wood and countertop grounds) · seven Amazon listing shots on white
(climbing hardware, skincare tube, kitchen, nursery pots) · the hand massager · the neck massager.

**Extraction:** pull the PDF renders at native resolution rather than screenshotting pages —
they're embedded on pages 1, 3, 6, 7, 8×2, 9, 10, 15×2. Then background-remove every one to
transparent PNG.

**Why cut-out matters and it isn't cosmetic.** A product on its original background is a photo
sitting on a page. A product with no background is an **object placed in a composition** — it can
overlap a band edge, sit half on Petrol and half on Bone, have a card overlaid on its corner, cast
one soft shadow. **That is the entire difference between the reference image the owner sent and a
stock photo**, and it costs one background removal.

**Add detail to them, don't just place them:**
- one soft contact shadow, single light direction, consistent across every object on a page
- a flat white spec card overlaid at a corner — the real card style, real typeface — carrying one
  fact about the object
- a thin leader line from the card to the point on the product it describes
- for the folding mat: the same object at three fold states in one row, which shows the mechanism
  without a single word

**Placement:** `/private-label` hero — mat cut out, floating over Petrol, three fold states below ·
`/wholesale-ecommerce` mid-page — the sourced products as a floating row, sizes varied · homepage
channel band · `/marketplace-growth` — one product with the listing fields called out around it.

---

## B · Data structures — rebuild native, throw the screenshot away

**What's there, and it is the strongest material in the whole upload:** a profitability table whose
columns are Product · COGS · Storage · Fulfil · Ship+Prep · BuyBox · Referral · Profit · ROI ·
**Order**. A purchase-order tracker. An inventory reorder sheet.

**The structure is the asset. The pixels are not.**

**Rebuild as `<DataArtefact>`** — a real HTML table on Bone or Petrol, Hyprr tokens, mono figures,
the existing token rules. Thirteen rows is too many for a web page: **show five or six**, chosen to
carry the argument rather than to be representative.

**The `Order` column is the whole point.** Some rows have a number, some are blank. **A table where
two rows say "not bought" is a stronger argument than any sentence on the site**, and it is the one
thing no competitor can copy without publishing their own buying decisions.

**Add detail the original doesn't have:**
- a red or muted state on the not-bought rows, so the eye finds them first
- one row annotated in the margin with why — *"ROI 4.75% against a 20% floor"*
- a sticky first column at 375px so the product name stays visible while the numbers scroll
- **the numbers become illustrative and clearly labelled as such** — the structure is what is being
  shown, not a claim about any specific line

**Placement:** `/wholesale-ecommerce` as the primary artefact, replacing the current one · `/scale`
with a reduction column · `/ecommerce-operations` and `/marketplace-management` get the PO tracker
and reorder sheet the same way · homepage proof band, three rows only.

---

## C · Component patterns — the best find in the folder

The dropship slides contain **four layout patterns worth more than the slides themselves.** These
get rebuilt as components and then used across the whole site with any content.

**1 · The cost-breakdown bar.** A single horizontal bar segmented by where money goes, each segment
labelled above and below, total at the right. **This is the best component in the set.** It shows a
whole unit economic in one glance and it is reusable everywhere — landed cost breakdown, where a
build fee goes, what a marketplace takes. Rebuild in Hyprr colours: cost segments neutral, the
retained segment in Lime.

**2 · The four-stat card row.** Four bordered cards, big mono figure, small label above, context
line below. Already close to the site's card style. Use for any four-metric set.

**3 · The three-panel breakdown.** Three bordered panels side by side, each with a small uppercase
kicker and a short list. Good for *breakeven / test / verdict* shapes, and for the "what you get"
sections.

**4 · The technical dimension drawing.** From the PL PDF — the mat with arrows and measurements
labelled. Rebuild as inline SVG. **This is a genuinely uncommon web visual and it reads as
engineering rather than marketing.** Use on `/private-label` and `/ecommerce-website-development`.

**All four as SVG or DOM, never as images.** Responsive, themeable, crawlable, and they carry the
Hyprr palette natively rather than being recoloured.

---

## D · Irreducible screens — keep, but frame them

**What's there:** four full-page store captures and three annotated store cards.

A whole storefront cannot be rebuilt and should not be — the point is that it is a real page.

**Build `<BrowserFrame>`**: rounded window chrome, three dots, a URL bar. Any screenshot dropped
inside instantly reads as *a real page* rather than *a picture of a page*. **One component,
reusable for every screenshot the site will ever show** — Seller Central, Shopify admin, an ad
manager.

**Add detail:**
- **the annotated crop pattern from the cards is worth keeping** — a small labelled chip in the
  corner of a detail crop (*problem / solution*, *product detail*, *reviews*) turns a screenshot
  into an explanation
- a subtle scroll-fade at the bottom edge so a long page reads as continuing rather than cut
- lazy-load with a poster; these are the heaviest assets in the set

**Placement:** `/shopify-dtc` hero and mid-page · `/ecommerce-website-development` at three
breakpoints inside three frames.

---

## What gets left out, and why

- **The ChatGPT-generated lifestyle frames.** Several read as AI-generated at a glance, and the
  brand guidelines rule that out. Use the real product shots instead.
- **The `_scrapped/` crops** — working files.
- **The `.py` build scripts** and the `CASE-STUDY.md` files — out of scope per the owner.
- **The MP4** — no video slot on the site yet.
- **All three PDFs as documents.** They were made for other sites. **Only the renders inside the PL
  PDF are extracted, as objects.**

---

## What actually has to be built

| # | Item | Type | Reusable? |
|---|---|---|---|
| 1 | Background removal on ~18 product objects | Asset prep | — |
| 2 | `<DataArtefact>` — native table with the not-bought state | Component | Yes, 5+ pages |
| 3 | `<CostBar>` — segmented breakdown bar | Component | Yes, everywhere |
| 4 | `<StatRow>` — four-metric card row | Component | Yes |
| 5 | `<BrowserFrame>` — window chrome wrapper | Component | Yes, every screenshot forever |
| 6 | `<AnnotatedCrop>` — corner-chip labelling | Component | Yes |
| 7 | Dimension drawing as inline SVG | One-off | `/private-label` |
| 8 | Spec-card overlay on a floated object | Component | Yes |

**Six of the eight are reusable components.** That is the point of doing it this way rather than
placing crops: the folder produces a **visual system**, not eighteen one-time images — and every
future screenshot, table or product shot drops into something that already exists.

---

## Honest constraints, carried forward

- **Numbers shown are illustrative and labelled** — the structure is the argument, not any figure.
- **The PL renders are concept/AI-assisted renders.** Where one is used as a product hero, it
  carries a short line saying so. A disclosed concept render is fine; an undisclosed one is not.
- **No claim about results, clients or performance** attaches to any of it.

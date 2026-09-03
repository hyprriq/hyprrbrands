# PROMPT 21 — Real assets: edit, place, and the operator line

**Ships with the phase-copy drop** (`docs/content/phase-copy-depth.md`). Both are queued together.

Full audit: `docs/ASSET_AUDIT_AND_PLACEMENT.md`. **Read it first** — it covers what each asset is,
why it is worth what it is, and the per-page placement map. This ticket is the execution.

The owner uploaded 87MB to `public/images/_inbox/`. It is a portfolio, not a photo folder.

---

## §1 · The operator line — one paragraph, highest value on the site

Three uploaded assets carry: **"EcommerceNinjaa · 15 years in ecommerce, own Amazon + Shopify stores
since 2011"**, and one carries **"Shine & Sweat — my own Shopify store."**

The live site says *"We are new. We are not going to borrow someone else's results."*

**Both true. The site tells only one.** The client review's worst finding — *"confident claims with
zero evidence… the whole thing could be one person"* — is answered by a fact already owned.

**Add to `/about` above the fold, and to the `Evidence, not claims` block on every service page:**

> **Hyprr Brands is new. The operator is not.** Fifteen years in ecommerce, running his own Amazon
> and Shopify stores since 2011. The documents on this site are from that work — anonymised where
> they carry supplier or customer data, and never presented as a client's result.

**This is not a client claim, a result, or a borrowed credential.** It is the difference between a
new company and an inexperienced one, and the site currently reads as the second.

---

## §2 · The editing pass — nothing ships raw

Six operations. **`sharp` is already a dependency** from the image pipeline.

**2.1 · Kill the EcommerceNinjaa branding, keep the provenance.** Every asset except the private
label PDF carries it — diagonal watermarks on the analytics sheets, footer strips on the dropship
slides and store mockups, cover pages on two PDFs.

**Do not strip attribution to nothing.** An unattributed spreadsheet is a stock image. Replace with
a Hyprr-styled caption strip:
> *From the operator's own stores, trading as EcommerceNinjaa since 2011.*

The analytics watermark is **diagonal and repeating across the data** — it needs removing at pixel
level, not cropping. If it cannot be cleanly removed, **crop to the sub-regions that are watermark-
free and compose several tight crops instead of one wide sheet.** A clean crop beats a smudged
retouch.

**2.2 · Recolour to the Hyprr palette.** Dropship slides are teal / green / orange. Map teal →
Aqua `#45D8C0`, green → Lime `#B8F34A`, orange → Build `#FFC84A`. **Headers, rules and accents
only — never recolour the data itself**, and never change a number.

**2.3 · Background removal to transparent PNG** for every product shot that floats on a page: the
Amazon listing images, the massager, and the renders extracted in 2.5. This is what makes a product
read as *placed* rather than pasted, and it is the specific quality the owner's reference has.

**2.4 · Crop tight.** The analytics sheets include row numbers, column letters and the formula bar.
**A screenshot showing Excel reads as a screenshot; one showing only the table reads as a system.**

**2.5 · Extract the 10 renders from the PL PDF at native resolution** — embedded on pages 1, 3, 6,
7, 8 (×2), 9, 10 and 15 (×2). `pdfimages -png` or equivalent. **Do not screenshot the pages.**

**2.6 · Through the existing pipeline** — 640 / 1280 / 1920 WebP, under 200KB at 1280, alt text and
dimensions per `check-images`.

---

## §3 · Placement

Per-page map is in the audit doc. Six assets per page, all real. Apply `PROMPT_19`'s ground rules —
**clusters of three or more on Bone or Petrol, never White** — and re-measure chroma on
`/private-label` first before rolling to the rest. The instrument now sees photographs, so that
measurement is real for the first time.

**Captions carry the argument, as with the diagrams.** *"Thirteen products costed the same way — the
blank ORDER cells are the ones we did not buy"* does more than the sheet alone.

---

## §4 · `/documents` — two samples become five real documents

| Document | Source |
|---|---|
| Product Development & Launch Case Study | `Private Label/…CLEAN.pdf` — 18pp, already Hyprr-branded |
| Wholesale Profitability System | `Wholesale/wholesale-analytics/…SAMPLE….pdf` — 5pp, needs §2.1 |
| Store Design & Conversion Guide | `Shopify/Shine-and-Sweat….pdf` — 4pp, needs §2.1 |
| The existing sample verdict sheet | already live |
| The existing sample landed-cost model | already live |

**Fix before publishing the PL PDF:** the competitive-landscape table (page 4) and the dimension
table (page 6) both overflow their columns — text overlaps and runs past the right margin.

**Ship the PDF's own honesty line with any render used on the site:**
> *Concept / AI-assisted product render used for industrial-design communication. Final
> manufacturing requires CAD, tolerance stack-up, material testing, hinge-cycle testing, packaging
> validation and IP clearance.*

A disclosed concept render is an asset. An undisclosed one is a liability.

---

## §5 · `/insights` — four articles already written

`Shopify/Dropship/*/CASE-STUDY.md` are four finished pieces of analysis: hand massager, deep-tissue
massager, feminine balance gummy, gecko toy.

**They are good.** The gummy argues against the two screens everyone checks first and buys anyway on
lifetime value — *"Judge this on the first sale and you kill your best product."* The hand massager
leads with the buyer rather than the device.

They are also disciplined: real cited anchors, **every unit economic labelled illustrative on the
slide itself**, and their own notes state *"No invented testimonials, named clients, or claimed
client results."*

**This unblocks `/insights`**, which has been waiting on keyword measurement — these are written,
they are the owner's own analysis, and each ships with five finished slides.

**Not in this ticket** — `/insights` is a new route with its own template. Flagged so it is queued
next rather than lost.

---

## §6 · The one caption that matters

The store mockups show a live page carrying *"Rated 4.8/5.0 From 2,830+ Satisfied Customers"* and
*"87% Experience Noticeable Relief."*

**Those are that store's claims, not Hyprr's.** Showing a page you built is evidence of the build.
Caption every store mockup:
> *A product page we designed and built for our own store.*

Without that line it reads as Hyprr's result. **One sentence is the entire difference.**

---

## Acceptance

| # | Check |
|---|---|
| 1 | Zero "EcommerceNinjaa" strings or marks visible in any shipped image |
| 2 | Every shipped asset carries the provenance caption strip |
| 3 | No watermark artefacts over data; where removal failed, tight crops used instead |
| 4 | Product shots on transparent PNG where they float |
| 5 | No spreadsheet chrome — row numbers, column letters or formula bar — in any shipped crop |
| 6 | PL renders extracted at native resolution, not screenshotted |
| 7 | Every render used carries the concept-render disclosure |
| 8 | Every store mockup carries the "our own store" caption |
| 9 | The operator line on `/about` and in every `Evidence, not claims` block |
| 10 | `/documents` lists five documents; PL PDF table overflows fixed |
| 11 | All six gates green · chroma re-measured on `/private-label` and reported |
| 12 | No numbers altered in any recoloured asset |

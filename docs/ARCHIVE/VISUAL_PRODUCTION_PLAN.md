# Visual production plan — static images, real products

**Supersedes `HERO_SCENE_SPEC.md`. No 3D, no animation.** Static images only.

**Owner ruling: at zero clients and zero clicks, looking like a real agency beats every other
consideration.** The §Q word list was a positioning choice from the build spec, not a legal
requirement — it is relaxed. Revisit when there are clients. Nothing in this plan is gated on it.

---

## The asset advantage nobody else has

Competitor research measured 22–80 assets per page, and **the most common asset on all twelve is
the client-logo wall** — which needs clients. The **rarest** are real product shots and real
marketplace screenshots.

**Hyprr already has real products.** Private label items launched, brands sourced for wholesale.
That is a photographable inventory sitting in a room, and it is worth more than any illustration
we could commission.

> **Shoot what you already have. That is the whole plan.**

---

## Three sources, in priority order

### Source A · Real — you already own these
The strongest assets on the site and the cheapest to get.

- **Private label products you launched** — on white, in packaging, opened, in use
- **Wholesale brands you sourced** — cases, cartons, a shelf of mixed brands, a pallet
- **Packaging, samples, inserts, labels**
- **Anything in a warehouse or storage** — boxes, racking, prep in progress

**Shooting spec:** phone camera is fine. Window light, no flash. Plain white or plain mid-grey
background — a sheet of paper or a wall. Same background across a set so they read as a family.
Shoot **square and 3:2 of each item**, so we can crop for any slot. Twenty minutes gets thirty
usable images.

### Source B · Screenshots — you already have access
The rarest asset in the category. Only one competitor of twelve leads with real data.

- Seller Central: inventory, listing, case log, account health
- Shopify admin: orders, products, analytics
- Ad managers: Amazon campaign structure, Meta Ads Manager, TikTok Ads
- A weekly report

Blur or replace anything private. **Real UI beats an illustration of UI every time** — that is why
the reference image mimics dashboards rather than drawing them.

### Source C · Representative mockups — made, and labelled as examples
For what does not exist yet.

- Meta and TikTok ad creative — an ad unit with a product in it
- A Shopify storefront on a laptop frame
- A listing page mockup
- Before/after listing comparison

Made in Canva or Figma from **real product photos from Source A**, so even the mockups use your own
products. **A representative ad built from a real product beats a stock template.**

---

## What goes on each page — 6 images minimum

| Page | Hero | Mid-page | Section |
|---|---|---|---|
| **Homepage** | Wide shot — mixed sourced brands with a laptop showing a listing | Marketplace and platform logos · a report · a packaged PL product | Ads: one Meta and one TikTok unit |
| **`/wholesale-ecommerce`** | Cases and cartons of real sourced brands | Supplier catalogue · a listing screenshot · inventory in Seller Central | A pallet or shelf |
| **`/private-label`** | Your launched PL product, hero angle on white | Packaging flat-lay · sample vs final · the product in use | Listing and A+ mockup |
| **`/shopify-dtc`** | Storefront in a laptop frame | Product grid · checkout · a Shopify analytics screenshot | Ad creative from the same brand |
| **`/ecommerce-website-development`** | Same storefront, three breakpoints | Theme sections · a speed score | — |
| **`/ppc-paid-media`** | Ad manager screenshot | **Meta ad unit · TikTok ad unit · Amazon sponsored placement** | Campaign structure |
| **`/marketplace-growth`** | Listing before/after side by side | A+ content · search placement · review section | — |
| **`/ecommerce-growth` · `/scale`** | Catalogue expanding — few products to many | Channel expansion · a stock-cover view | — |
| **`/ecommerce-operations`** | The desk: report, inventory, case queue together | Calendar/cadence view · a PO document · exception queue | — |
| **`/marketplace-management`** | Account health screen | Case log · policy notice · listing sweep | — |
| **`/shopify-management`** | Shopify admin overview | Catalogue view · app list · theme version | — |
| **`/about` · `/where-we-work`** | Founder photo when available | Marketplace logos, region cards | — |

**Reuse across pages is fine and normal.** Twelve well-shot products plus fifteen screenshots plus
six mockups covers the whole site.

---

## The look — one visual language across all of it

From the reference, without the 3D:

- **One accent colour per page** — the engine colour. Everything else near-white and grey.
- **Consistent background** across a set. Mixed backgrounds are what make a page look assembled from
  stock.
- **Generous space** — the subject at roughly 60% of the frame.
- **Flat UI cards over images** where a value is called out — real card style, real typeface, white
  with the site's border and radius. **That contrast between a flat card and a photographic object
  is what made the reference read as a product rather than a drawing**, and it works identically
  over a photo.
- **Left-to-right composition where a flow is being shown** — inputs left, control centre, outcome
  right. That is the clarity worth copying.
- **Survives at 200px wide.** If it does not read at thumbnail size it is decoration.

---

## File spec — the dev integration contract

```
public/images/<page-slug>/<subject>-<variant>.webp
public/images/wholesale-ecommerce/sourced-brands-cases.webp
public/images/private-label/skincare-packaging-flatlay.webp
public/images/ppc-paid-media/meta-ad-unit.webp
```

- **WebP**, plus a JPEG fallback only if a target browser needs it
- **Three widths: 640 / 1280 / 1920.** `srcset` and `sizes` on every image
- **Under 200KB at 1280** — the CI gate should fail a heavier file
- **Filenames are words**, hyphenated, describing the subject — they are a ranking surface
- **`width` and `height` always set** so nothing shifts on load
- **`loading="lazy"` below the fold**, eager on the hero
- **`alt` describes the subject and the page's topic** — never "image" or "screenshot". I write
  these; they double as passages an answer engine can quote.

**Dev integration:** a new optional `images` field on `ServicePageData`:

```ts
images?: {
  hero?:    { src: string; alt: string; caption?: string }
  midPage?: { src: string; alt: string; caption?: string }[]
  section?: { src: string; alt: string; slot: string }[]
}
```

Optional, so pages render unchanged until their images land. **Add one page's images at a time.**

---

## Order of work

1. **You shoot Source A** — one session, phone, window light, plain background. PL products and
   sourced brands. Square and 3:2 of each.
2. **You capture Source B** — screenshots, private data blurred.
3. **Drop everything into `public/images/_inbox/`.** I sort, crop, name, compress and write the alt
   text.
4. **Dev adds the `images` field** and wires the hero slot. One page first — `/private-label`, since
   your PL products are the strongest assets you have.
5. **Judge it live, then roll to the rest.**
6. **Source C mockups** built from the Source A photos once the real ones are placed.

**Step 1 is the whole bottleneck.** Everything after it is mechanical.

---

## Pending, so nothing is lost

| | Status |
|---|---|
| PROMPT_16 | **Shipped** — `cd92930`, CI green |
| PROMPT_17 | **With dev now** |
| PROMPT_18 archetypes | Queued behind 17, one refactor |
| **This plan** | **Blocked on the photo session — nothing else** |
| `/scale`, `/where-we-work` | In PROMPT_17, independent of the refactor |
| `/walmart-marketplace-management`, `/amazon-agency`, 6 articles | Blocked on a keyword data source |
| Phase copy 30–65 → 100–150 words | Mine, in progress |
| Founder video | Yours, whenever |

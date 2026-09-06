# Assets and content handoff — v4

**6 Sep 2026.** Everything made after `DEV_BRIEF.md` went out. 70 files, plus three copy changes.
Drop the `public/` tree straight into the repo root; the paths are already correct.

---

## 1 · What is in the drop

```
public/brand/   40 files   logo in 6 SVG variants, PNGs at 512–4096, square icons, favicons
public/og/      18 files   9 share cards, PNG + WebP, 1200×630, metadata embedded
public/img/     12 files   4 page images, PNG + WebP, desktop and 4:5 mobile
docs/            3 files   usage guide, image manifest with alt text, build notes
```

---

## 2 · Logo — replace what is in the build now

The file currently in use is **200×52px**. It is soft at 1× and unusable in print, PDF or email.
These replace it everywhere.

| Use | File |
|---|---|
| Header, light ground | `/brand/hyprr-logo-primary.svg` |
| Header, dark ground | `/brand/hyprr-logo-reversed.svg` |
| Anything on petrol | `/brand/hyprr-logo-on-petrol.svg` |
| Favicon | `/brand/favicon.ico` + `favicon-32.png` |
| Apple touch icon | `/brand/hyprr-icon-petrol-180.png` |
| Social profile | `/brand/hyprr-icon-petrol-512.png` |

**Use the SVG in the header.** A few kilobytes, sharp at any zoom, recolours in CSS.

The wordmark is set in Space Grotesk Bold — the site typeface — so logo and type are now one
system. Full rules in `docs/LOGO_USAGE.md`.

---

## 3 · Share cards — decide, do not merge both

You built a dynamic OG route generating 13 cards. I built 9 static ones. **Both are in the repo
now and only one should ship.**

My recommendation: **keep your dynamic route** if the generated cards match these — same petrol
and deep-petrol alternation, white headline with a citrus second line, logo bottom left,
"Amazon · Walmart" bottom right. A route cannot drift out of sync with page titles, which a folder
of PNGs will eventually do.

Use the static PNGs only if the generated ones look wrong. If you keep the route, delete
`public/og/` and this section is closed.

Either way: **`og:image` points at PNG, not WebP.** Several platforms still render WebP badly in
link previews. Alt strings for all nine are in `docs/IMAGE_MANIFEST.md`.

---

## 4 · Page images — where each goes

| File | Page | Placement |
|---|---|---|
| `pl-hero-1600` | `/amazon-private-label` | Hero, right column. `fetchpriority="high"` |
| `pl-process-1600` | `/amazon-private-label` and `/` | Full width under the build path on PL; in the proof row on home |
| `pl-process-mobile-1080` | same | `<picture>` source under 760px |
| `pl-family-1600` | `/amazon-private-label`, `/proof` | The two-SKU section |
| `wh-catalogue-1600` | `/amazon-wholesale-management` | Hero, right column |
| `wh-catalogue-mobile-1080` | same | `<picture>` source under 760px |

**The process strip is the most important image on the site.** Dimension drawing with the rejected
measurement, hinge study, groove iterations, finished product. It is the only visual that proves
Hyprr designs products rather than reselling them. Give it room — full width, not a thumbnail.

**Markup pattern:**
```html
<picture>
  <source media="(max-width: 760px)" srcset="/img/pl-process-mobile-1080.webp" type="image/webp">
  <source srcset="/img/pl-process-1600.webp" type="image/webp">
  <img src="/img/pl-process-1600.png" width="1600" height="900" loading="lazy" decoding="async"
       alt="Four stages of product development: dimension drawing, hinge mechanism, groove studies, finished product">
</picture>
```

Every alt string is written in `docs/IMAGE_MANIFEST.md`. Do not rewrite them to add keywords —
alt text describes the image for someone who cannot see it, and stuffing it is a decade-old
penalty.

---

## 5 · Copy changes — three, all small

### 5.1 Add the snippet block to `/amazon-private-label` — **do this before merge**

This is the one review item I would not let through. The measured private label SERP is
informational-leaning: Amazon's own guide, Helium 10, Jungle Scout and Reddit outrank the agency
pages. Google wants a definition there before it wants a pitch, and this passage is also the one
most likely to be lifted into an AI answer.

Place it directly above the FAQ. H2 exactly as written, answer in the first 45 words, no preamble.

> ## What does an Amazon private label agency do?
>
> An Amazon private label agency researches product opportunities, verifies the unit economics,
> sources a manufacturer, builds the brand and packaging, creates the listing, and launches the
> product. After launch it runs advertising, inventory and account operations.

### 5.2 Same treatment already agreed for wholesale and management

`/amazon-wholesale-management` → H2 **What does an Amazon wholesale agency do?**
`/amazon-walmart-management` → H2 **Should you let an agency manage your Amazon account?**

Both are in `docs/v4/SEARCH_TERMS.md §4`. Confirm they are present; if they are, ignore this.

### 5.3 Caption discipline on `/proof`

Every artefact needs a plain caption saying what it shows, and anything illustrative must say so.
The wholesale catalogue image contains representative figures, not client data — its caption
should read: *"Representative buying catalogue. Figures illustrate the model, not a client
account."*

---

## 6 · Your drafted copy — approved

The wholesale and management strings never arrived from me and you drafted them. I have read them
and they ship as written. *"On lines that clear a margin floor after every fee, yes — and most
lines do not"* is exactly the right answer to that question. No changes.

---

## 7 · Still outstanding, blocks nothing

| Item | Who |
|---|---|
| Founder portrait, prior role, LinkedIn | Owner |
| Booking URL, `RESEND_API_KEY` | Owner |
| Warehouse and shipment-prep shots | Owner picks from Canva stock, I composite |
| Listing before-and-after pair | I can build from the stone mat render |
| Video and poster frame | Owner |
| Lighthouse run on the preview | Dev |

---

## 8 · Merge order

1. Drop `public/` in, wire the logo, place the six images.
2. Add the private label snippet block.
3. Resolve the OG duplication — route or folder, not both.
4. Lighthouse on the Vercel preview.
5. Merge `feat/v4` → `main` as one swap.
6. Search Console: verify by DNS as a domain property, submit the sitemap, request indexing on the
   homepage and four service pages, confirm all 18 redirects resolve on the live domain.
7. Add Bing Webmaster Tools at the same time — free, imports from Search Console in one click, and
   its keyword tool is the search-volume source this project has never had.

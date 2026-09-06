# Image manifest — filenames, alt text, and how each one ships

**Every image on the site is listed here with the alt text the developer must use.** Alt text
describes the image for a person who cannot see it. It is not a place to repeat keywords — Google
has penalised that for a decade, and a screen reader user hearing "amazon wholesale management
service agency" gets nothing useful.

---

## Share cards — made, ready to ship

All nine at **1200×630**, PNG and WebP, brand colours, Space Grotesk headline, logo bottom left.
Title, description, author and copyright metadata embedded in every PNG.

| Page | File | `og:image:alt` |
|---|---|---|
| `/` | `og-home` | Hyprr Brands: build it, run it, scale it, on Amazon and Walmart |
| `/amazon-private-label` | `og-private-label` | Launch a brand, or run the one you already have |
| `/amazon-wholesale-management` | `og-wholesale` | Wholesale operations on Amazon and Walmart |
| `/amazon-walmart-management` | `og-management` | You already sell, we run it properly |
| `/amazon-listing-optimization` | `og-listing-optimization` | Your listing is where traffic becomes revenue |
| `/how-we-work` | `og-how-we-work` | Five steps, on every product we touch |
| `/proof` | `og-proof` | Look at the work before you talk to us |
| `/about` | `og-about` | One operator, named and reachable |
| `/contact` | `og-contact` | Tell us where you are starting |

**Markup on every page:**
```html
<meta property="og:image" content="https://hyprrbrands.com/og/og-home.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Hyprr Brands: build it, run it, scale it, on Amazon and Walmart">
<meta name="twitter:card" content="summary_large_image">
```
Use the **PNG** for `og:image` — several platforms still handle WebP badly in link previews. Use
WebP everywhere else.

---

## Page images still to make — alt text written in advance

| # | File name | Page | Alt text |
|---|---|---|---|
| 1 | `hero-operations.webp` | `/` | A laptop showing Hyprr's operations dashboard beside a phone showing a live product listing |
| 2 | `product-packaging-set.webp` | `/`, `/proof` | A private label product beside its printed packaging |
| 3 | `hero-private-label.webp` | private label | A finished own-brand product photographed with its box |
| 4 | `packaging-flatlay.webp` | private label | Packaging laid flat: outer box, insert card and product label |
| 5 | `sample-vs-final.webp` | private label | A first factory sample next to the approved final product |
| 6 | `product-in-context.webp` | private label | The product in use in a home setting |
| 7 | `hero-wholesale.webp` | wholesale | Sealed cartons stacked on a pallet at a receiving bay |
| 8 | `shipment-prep.webp` | wholesale | Boxes labelled and wrapped ready for a marketplace shipment |
| 9 | `hero-management.webp` | management | Hyprr's account operating panel on a laptop screen |
| 10 | `listing-photo-before.webp` | listings | A poorly lit product photograph on a cluttered background |
| 11 | `listing-photo-after.webp` | listings | The same product photographed cleanly on white |
| 12 | `founder-portrait.webp` | about | Gautam Naidu, who runs Hyprr Brands |
| 13 | `overview-poster.webp` | `/`, about | Video thumbnail: the operator introducing how Hyprr works |

---

## Technical rules for every image

**Format.** WebP for everything on the page, with a JPEG fallback only if analytics show real
traffic on browsers that need it. PNG only for the share cards and anything needing transparency.

**Sizes.** Ship three widths per image — 640, 1280 and 1920 — and let the browser choose:
```html
<img src="/img/hero-wholesale-1280.webp"
     srcset="/img/hero-wholesale-640.webp 640w,
             /img/hero-wholesale-1280.webp 1280w,
             /img/hero-wholesale-1920.webp 1920w"
     sizes="(max-width: 760px) 100vw, 50vw"
     width="1280" height="853"
     alt="Sealed cartons stacked on a pallet at a receiving bay">
```

**Always set `width` and `height`.** Without them the page jumps as images load, which hurts both
the experience and the Core Web Vitals score.

**Loading.** The hero image on each page gets `fetchpriority="high"` and no lazy attribute.
Everything below the fold gets `loading="lazy"` and `decoding="async"`.

**Weight.** Under 200KB at 1280px wide. The existing `check-images` gate already enforces this —
keep it.

**Colour.** Every image is graded to the site palette: petrol `#123F46`, citrus `#D7F04A`,
aqua `#66D7D0` as accents, warm neutrals for product surfaces. No blue-grey stock photography, no
orange, and nothing that fights the petrol ground.

**Mobile.** Every image must survive being cropped to a square and to 4:5. Keep the subject
centred and leave margin — a composition that only works at 16:9 breaks on a phone.

**File naming.** Lowercase, hyphens, descriptive, no dates or version numbers in the public path.
`hero-wholesale-1280.webp`, never `IMG_4021_final_v3.webp`.

---

## What not to do

No stock photographs of people in headsets, handshakes, glass office towers or arrows pointing up.
No Amazon or Walmart interface screenshots, logos or product photography — theirs, dated, and it
looks borrowed. No text baked into an image that matters for SEO; if it matters, it goes in HTML
over the image.

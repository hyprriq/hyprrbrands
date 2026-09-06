# Images made — 6 Sep 2026

Built from the product development case study and the site palette. Every file ships as PNG and
WebP, with a 4:5 mobile version where the desktop crop would not survive a phone.

## Private label

| File | Where | Alt text |
|---|---|---|
| `pl-hero-1600` | private label hero | The finished three-panel foldable stone dish mat, a Hyprr private label product |
| `pl-process-1600` | private label, homepage | Four stages of product development: dimension drawing, hinge mechanism, groove studies, finished product |
| `pl-process-mobile-1080` | same, phone | as above |
| `pl-family-1600` | private label, proof | The dish mat and faucet mat, one product family sharing the same stone and groove design |

**Why the process strip is the most valuable image on the site.** It is the only visual that proves
you design a product rather than resell one. A dimension drawing with a rejected measurement on it,
a hinge study, groove iterations, then the finished object — that sequence cannot be faked with
stock, and no competitor page has it.

## Wholesale

| File | Where | Alt text |
|---|---|---|
| `wh-catalogue-1600` | wholesale hero | A buying catalogue showing six supplier lines with landed cost, fees, margin and a buy or no decision on each |
| `wh-catalogue-mobile-1080` | same, phone | as above |

Three of six lines are refused, and the refusals are the visible part. That is the whole wholesale
argument in one picture.

## Still needed, and what they need from you

| Image | Blocked on |
|---|---|
| Warehouse / receiving bay | Canva Pro stock — pick a clean, well-lit shot with cartons on a pallet, no people, no forklift |
| Supplement category shot | A real product or a stock bottle set to composite |
| Toy category shot | Same |
| Listing photo before and after | One product, shot badly and then properly. The stone mat works if you have raw photos |
| Founder portrait | You |
| Video poster | The video |

**On supplement and toys.** I would not fake these. The stone mat is real work with a real
development trail behind it, and it does more for credibility than three generic category shots.
Better to show one real product deeply than three shallow ones. When you have a second real
product, it gets the same treatment.

## Technical

All images graded to petrol `#123F46` with citrus and aqua accents. Product cards sit on
`#F7F8F3` so the renders keep their own light. Every file under 100KB in WebP. Set `width` and
`height` in the markup, `fetchpriority="high"` on heroes, `loading="lazy"` below the fold.

## Listing optimization — added 6 Sep

| File | Where | Alt text |
|---|---|---|
| `listing-before-after-1600` | `/amazon-listing-optimization` hero, `/amazon-walmart-management#listings`, `/proof` | The same product listing before and after optimization: a dim, badly cropped photo with a thin title beside a clean product shot with a full title and bullets |
| `listing-before-after-mobile-1080` | same, under 760px | as above |

**Both panels use the same product render.** The "before" is that render degraded the way a
seller's own phone photo usually is — off-centre crop with the product running off the edge, warm
indoor cast, underexposed, soft, sensor noise, uneven shadow. The "after" is the same object shot
to spec on white.

The titles and bullets are the real argument. Before: a keyword-stuffed title with no dimensions
and three generic bullets. After: the format named, the size stated, and bullets that each carry
one fact a buyer needs. The footer line on each panel — 3 images, no A+, 19 indexed terms against
7 images, A+ live, 64 indexed terms — is illustrative and should carry that caption on `/proof`.

## Homepage hero — added 6 Sep, replaces a live placeholder

| File | Where | Alt text |
|---|---|---|
| `home-hero-1600` | `/` hero, right column. `fetchpriority="high"`, no lazy | Hyprr's operations view on screen beside a live product listing showing buy box, stock cover and margin |
| `home-hero-mobile-1080` | same, under 760px | as above |

**This replaces the two placeholder strings currently live in production** — "PRODUCT / PACKAGING /
MARKETPLACE VISUAL" and "HERO COMPOSITE · PRODUCT + AMAZON + WALMART". Both are rendering as visible
text on the homepage right now.

The same treatment works for the management page hero if you want it; say so and it will be cut.

## Also fixed

`favicon.ico` was carrying only a 16×16. Rebuilt from the 256px master and now contains
16, 32, 48 and 64. Replace the one already deployed.

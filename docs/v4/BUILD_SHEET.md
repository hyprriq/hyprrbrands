# Build sheet — URLs, visuals, and what ships

**5 Sep 2026.** Everything needed to finish and submit the site. One page per URL, no duplicates.

---

## 1 · URLs — 12 total

**Nine real pages**

| # | URL | H1 carries | Ships in |
|---|---|---|---|
| 1 | `/` | Build it. Run it. Scale it. On Amazon and Walmart. | Phase 1 |
| 2 | `/amazon-private-label` | Amazon private label agency | Phase 1 |
| 3 | `/amazon-wholesale-management` | Amazon wholesale management service | Phase 1 |
| 4 | `/amazon-walmart-management` | Amazon marketplace management agency | Phase 1 |
| 5 | `/amazon-listing-optimization` | Amazon listing optimization service | Phase 2 |
| 6 | `/how-we-work` | How we charge and how we work | Phase 1 |
| 7 | `/proof` | The work | Phase 2 |
| 8 | `/about` | Who runs Hyprr Brands | Phase 2 |
| 9 | `/contact` | Book a call | Phase 1 |

**Three legal** — `/privacy`, `/terms`, `/accessibility`. Footer only, no nav.

**Two system files** — `/sitemap.xml`, `/robots.txt`. Generated from `lib/site-map.ts`.

**Anchors, not pages.** `#walmart` and `#growth` on the management page carry Walmart and PPC
terms without a second URL. `#listings` is the entry point from listing optimization.

---

## 2 · Blog — reserve it, do not build it yet

**Where it goes:** `/insights`, linked from the **footer only** until there are three posts. Not in
the top nav, not on the homepage, because one lonely blog link above the fold reads as a site
still under construction.

**Then, once three posts exist:** a three-card row low on the homepage, directly above the final
CTA. Below the proof section, above "Tell us where you are starting." It is the last thing a
scanner passes, which is the right weight for it.

**Why not now:** a four-year-old domain with no backlinks will not rank an article set, and the
nine pages are worth more per hour of effort. Revisit when the pages are live, the canonical points
at the real domain, and Search Console shows impressions.

**First three, when the time comes** — all drawn from measured People Also Ask, so they answer
questions Google has confirmed people ask:
1. How much does an Amazon agency charge? *(no AI Overview on this cluster — the click is available)*
2. Should you let an agency manage your Amazon account?
3. Is Amazon private label still profitable?

---

## 3 · Visual inventory — 38 assets, four production methods

### A · Generated scenes — **6 assets**
The only ones needing image generation. One hero per main page, reference-locked to the first
approved frame so all six look like one world.

| # | Page | Scene |
|---|---|---|
| 1 | Home | Product → marketplace → operation composite |
| 2 | Private label | Finished product with its packaging on a surface |
| 3 | Wholesale | Cartons and pallets moving toward a marketplace plane |
| 4 | Management | Operating surface, blank screen planes |
| 5 | Listing optimization | Single product staged for photography |
| 6 | Proof | The artefacts laid out together |

**Rule:** no readable text inside any generated image. Labels sit on top as real HTML text — that
way they are crisp, indexable, editable, and garbled lettering can never give the image away.

### B · Stock images to edit — **7 assets**
Cheapest route, and Canva is the right tool. Buy or license a clean product shot, then composite
your branding, packaging and marketplace framing onto it.

Packaging flat-lay · unbranded carton for the "before" state · product on a plain surface ×2 ·
supplier or warehouse context · a desk with screens · a shipment being prepped.

### C · Built in HTML and SVG — **23 assets, free**
These are the majority and they cost nothing but build time. They are also the ones that make the
site look like an operator's site rather than an agency's.

Verdict sheet ending in DO NOT BUY · landed-cost model · purchase order with approval line ·
listing before-and-after · search-term view · monthly report page · operating panel · week strip
Mon–Fri · the five-step method · the business path Build→Operate→Grow→Scale · the wholesale loop ·
the private label six stages · the scale staircase · four growth levers · six service cards ·
situation router · margin calculator · cost bars · account-state panel · A+ layout ·
catalogue structure · replenishment view · stock-cover chart.

### D · Real photography and video — **2 assets**
1. **One photograph of you** for `/about`. Nothing else on the site is worth as much to a buyer.
2. **One video, 60–75 seconds.** Phone camera, no script, Seller Central visible behind you,
   explaining how the fee works. Slot exists on the homepage and is currently labelled as a
   placeholder. If it is not shot before launch, remove the slot rather than shipping an empty
   frame.

### Also needed
**OG share images** — one per page, 1200×630. Nine assets, built from the same system. Canva is
fine for these too.

---

## 4 · Linking it to Google

1. `SITE_ORIGIN` → `https://hyprrbrands.com`. **Before anything else**, or every canonical points
   at the Vercel subdomain.
2. Verify the domain in Google Search Console (DNS TXT record).
3. Submit `https://hyprrbrands.com/sitemap.xml`.
4. Request indexing on the homepage and the four service pages.
5. Confirm the 301s resolve — old URL in, new URL out, single hop, no chains.
6. Add Bing Webmaster Tools at the same time. It is free, it imports from Search Console in one
   click, and it is the keyword-volume source this project has been missing since day one.

---

## 5 · What can actually ship today

Being straight about scope: nine pages of copy, build, visuals and QA is not a few hours. But a
five-page launch is realistic, and a five-page site that is finished beats a nine-page site that is
half-built.

**Phase 1 — today.** Home, private label, wholesale, management, contact. Plus the canonical fix,
the redirects, the sitemap and Search Console. Copy for home and private label is written; I write
wholesale and management next. Visuals: category C only, which needs no generation.

**Phase 2 — this week.** Listing optimization, how we work, proof, about. The six generated scenes,
the seven Canva composites, the photograph.

**Phase 3 — when there is something to say.** The video, the blog, and comparison pages once you
have three describable clients and a published price band.

The site reads well with zero generated images. That was the design constraint from the start and
it is what makes shipping today possible.

# Dev brief — Hyprr Brands v4 rebuild

**5 Sep 2026.** This is the only instruction document. If something contradicts an older `docs/`
file, this wins. Repo at `99eeca4`.

---

## 0 · Start here — the existing site, and what happens to it

**There is a live site with 25 routes. It is being replaced, not extended.** This is a fresh dev
session, and none of the current page architecture is preserved.

**Before writing any new code:**

1. **Tag the current state.** `git tag v3-final && git push --tags`. That is the real backup — it
   is recoverable forever and costs nothing.
2. **Archive the old pages in the repo**, do not delete them yet. Move the retiring route folders
   into `_archive/v3/` so they stop building but remain readable while the new pages are written:
   `app/wholesale-ecommerce`, `app/private-label`, `app/marketplace-management`,
   `app/marketplace-growth`, `app/ppc-paid-media`, `app/ecommerce-operations`,
   `app/ecommerce-growth`, `app/shopify-dtc`, `app/shopify-management`,
   `app/ecommerce-website-development`, `app/build`, `app/grow`, `app/operate`, `app/scale`,
   `app/where-we-work`, `app/true-cost`, `app/documents`.
   `_archive/` must be excluded from the build, the sitemap and `lib/site-map.ts`.
3. **Move the old `docs/` planning files** into `docs/ARCHIVE/`. Roughly forty `PROMPT_*` files and
   several superseded specs are in there and they contradict this brief.
4. **Delete `_archive/` only after** the new site is live, the redirects resolve, and Search Console
   shows the new URLs indexed. Give it 30 days.

**Nothing is deleted before the redirects work.** The domain is four years old and its inbound
links are the only authority it has. A deleted URL with no 301 throws that away permanently.

**Every URL changes.** The old slugs are being replaced with keyword-specific ones —
`/wholesale-ecommerce` becomes `/amazon-wholesale-management`, `/private-label` becomes
`/amazon-private-label`, and so on. The full old-to-new table is in `SITEMAP.md` and every row
needs a 301.

---

## 1 · What this is

A rebuild, not a refactor. The site goes from 25 routes and 31,500 words to **9 pages and roughly
5,500 words**. The old page architecture is not preserved. Every old URL 301s into its replacement.

**Build on a branch.** `feat/v4`. The live site stays untouched until all Phase 1 pages are ready
to swap together. Do not ship pages one at a time onto production.

---

## 2 · Files you have been sent

| File | What it is |
|---|---|
| `hyprr-homepage-v3-4.html` | **Homepage, final design and copy.** Working HTML. Lift the structure and CSS |
| `hyprr-private-label-v3-3.html` | **Private label page, final design and copy.** This is the structural template for every other service page |
| `hyprr-brands-logo-transparent.png` | The logo. Keep all three files in one folder or the header falls back to text |
| `hyprr-wireframes-remaining.html` | Section-by-section wireframes for the other seven pages, with which component to reuse and what is new |
| `SITEMAP.md` | The nine pages, the redirect table, the nav |
| `SEARCH_TERMS.md` | Primary keyword, H2 secondaries, titles, metas and FAQ questions per page |
| `BUILD_SHEET.md` | Visual inventory and the Search Console steps |

Copy for wholesale and management follows separately. Build their structure from the wireframes;
the strings drop in.

---

## 3 · Order of work

**Step 1 — tokens and template.** Nothing else depends on anything else here.
- Colour tokens from the two HTML files: petrol `#123F46`, deep `#0B2D33`, citrus `#D7F04A`,
  aqua `#66D7D0`, coral `#FF806D`, ink `#17171A`, paper `#F7F8F3`.
- Type: Space Grotesk display, Inter body, JetBrains Mono for small labels and numerals.
  **Self-host, do not load from Google Fonts.**
- Four radii only: 12, 18, 26, 999. Five were in circulation; that is now fixed.
- Page shell, header, sticky mobile dock, footer.

**Step 2 — the three fixes that are independent of the rebuild.**
- `SITE_ORIGIN` in `lib/site-map.ts` → `https://hyprrbrands.com`. Every canonical and OG URL
  currently points at the Vercel subdomain. **Do this first.**
- `/api/contact` → Resend. Server-side validation, success state on the page, auto-reply to the
  sender. Reads `RESEND_API_KEY` from env; returns 503 and falls back to the current behaviour if
  unset, so nothing breaks before the owner adds the key.
- `NEXT_PUBLIC_BOOKING_URL` — already wired in `CtaSection`. Surface it in the header and above the
  contact form when set.

**Step 3 — Phase 1 pages.** `/` · `/amazon-private-label` · `/amazon-wholesale-management` ·
`/amazon-walmart-management` · `/contact`.

**Step 4 — Phase 2 pages.** `/amazon-listing-optimization` · `/how-we-work` · `/proof` · `/about`.

**Step 5 — redirects and retirement.** 301 table in `SITEMAP.md`. Single hop, no chains. Then
remove the old routes from `lib/site-map.ts` and regenerate the sitemap.

---

## 4 · Rules that are not negotiable

**Layout.** No section ships with an empty right half. Either an artefact goes there or the section
runs full width. This was the single most visible fault in the old build.

**Mobile.** Mobile-first CSS. Media queries at 420, 560, 760, 900 and 1040 — not one at 800.
Every tap target 44px minimum. Nothing scrolls horizontally. Sticky Book a call dock below the
first screen. **Never nest a `.wrap` inside a full-bleed container** — that was the cause of the
horizontal overflow bug in an earlier mockup.

**Grid children get `min-width:0`.** Long unbroken strings squeeze `1fr` columns to one word per
line otherwise.

**Motion.** Three moments on the whole site. Hero entrance, the private label stage reveal, and
user-dragged controls. Everything under `prefers-reduced-motion`. No scroll-triggered fades on
every section.

**Accessibility.** Visible focus rings on every interactive element. One `h1` per page. Alt text
that describes the image, not the keyword. Contrast has been computed and passes; do not
substitute colours without re-checking.

**Copy.** Do not rewrite the strings. If something reads wrong, flag it rather than fixing it —
every line is placed against a keyword map.

---

## 5 · SEO — every page, and getting the site into Google

Titles, metas, primary keyword, H2 secondaries and FAQ questions are all in `SEARCH_TERMS.md`,
with character counts already computed. **Every page must ship SEO-complete. A page without its
metadata, schema and internal links is not done.**

### Per page, before it is considered finished
- One `h1`, carrying that page's primary term. Once.
- `title` under 60 characters, `meta description` under 155. Both are written already.
- Canonical, absolute, on the real domain.
- OG and Twitter tags, with a 1200×630 share image.
- H2s carrying the assigned secondaries, in the wording given.
- Internal anchor text = the destination's primary term. Never "learn more".
- Alt text that describes the image, not the keyword.
- FAQ block wired to `FAQPage` schema, questions matching the visible text exactly.

### Sitewide, and currently missing entirely
1. **`app/robots.ts`** — allow everything, disallow `/api/`, and declare the sitemap URL. Make sure
   the Vercel preview deployments send `noindex` so the subdomain never competes with the domain.
2. **`app/sitemap.ts`** — generated from `lib/site-map.ts` so it can never drift from the routes.
   Nine pages plus the three legal pages. `lastModified` per route. No archived routes.
3. **JSON-LD.** `Organization` and `WebSite` in the root layout. `Service` on each service page.
   `FAQPage` where there are FAQs. `Person` on `/about`. The homepage graph is already written in
   `hyprr-homepage-v3-4.html` — lift it from there.
4. **`#walmart`, `#growth` and `#listings`** anchors on the management page. Three homepage cards
   and two service pages link into them.

### Submitting the site — do this on launch day, in this order
1. Confirm `SITE_ORIGIN` is `https://hyprrbrands.com` and the canonical on `/` proves it in the
   served HTML.
2. Confirm every 301 resolves in one hop, old URL in, new URL out.
3. Verify the domain in **Google Search Console** by DNS TXT record — domain property, not URL
   prefix, so it covers www and non-www.
4. Submit `https://hyprrbrands.com/sitemap.xml`.
5. Request indexing on the homepage and the four service pages.
6. Add **Bing Webmaster Tools** and import from Search Console in one click. It is free, and its
   keyword tool is the search-volume source this project has never had.
7. Check Coverage after 48 hours for anything reported as "Crawled — currently not indexed", and
   for old URLs still being served.

## 6 · CI gates

Keep all six from the old build. Two changes:

- **`check-copy`**: replace the banned list. Add a rule that fails the build when "Walmart" appears
  in the same sentence as UK, Europe, EU, Gulf, UAE or Singapore. Walmart is US-only; the old build
  carried this bug in sixteen files.
- **`measure-chroma`**: keep the script, retire the floors. The design is deliberately quiet in
  places and a minimum-colour gate fights it.

---

## 7 · Acceptance

**Build**
- All gates green. No horizontal scroll at 320, 390, 768, 1024 and 1440.
- Lighthouse accessibility 100 on the homepage and one service page.
- Homepage `<main>` under 1,100 words on the built HTML. Report the computed number.
- Contact form submits and returns a success state with the key set, and falls back cleanly without.

**SEO — none of these are optional**
- `robots.txt` and `sitemap.xml` both resolve and list only the nine live pages plus legal.
- Canonical on `/` reads `https://hyprrbrands.com`. Verified on the served HTML, cache header
  checked, outside the rollout window.
- Every 301 in the `SITEMAP.md` table resolves in one hop. No chains, no loops.
- Every page has a unique title and meta description within the character limits.
- JSON-LD validates in Google's Rich Results Test with no errors.
- Preview deployments return `noindex`.
- Search Console verified, sitemap submitted, indexing requested on the five priority pages.

**Old site**
- `v3-final` tag pushed.
- Retired routes moved to `_archive/v3/` and excluded from the build and the sitemap.
- Nothing deleted until the redirects are confirmed live and 30 days have passed.

## 8 · Blocked on the owner — none of it blocks steps 1 to 4

Booking URL · `RESEND_API_KEY` · photograph, prior role and LinkedIn for `/about` · confirmation of
the marketplace list ("Amazon in the US, UK, Europe and the Gulf, Walmart in the US") · client
results for the proof cards · whether the homepage video slot stays or is removed.

---

## 9 · What is deliberately not being built

No separate Walmart page. No PPC or growth page. No Shopify, DTC or website development. No blog.
No case studies page until there is something real to put in it. No hub pages. If any of these
appear in an older `docs/` file, that file is superseded.

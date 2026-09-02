# Prompt 8 — dev: share cards, GEO gaps, accessibility

Audit of production, 2 Sep, on everything not already covered by prompts 6 and 7. Nine
findings. Fix 1 is the largest visual gap on the site and nobody has looked at it yet.

```
Repo: D:\Projects\hyprrbrands

======================================================================
B1 — Every page promises a large share image and has none (P0)
======================================================================
Measured on all seven pages checked: og:image is ABSENT, twitter:image is ABSENT, and
twitter:card is set to "summary_large_image".

That combination is worse than having no card tags at all. Every time anyone shares a Hyprr
URL — LinkedIn, Slack, WhatsApp, X, iMessage — the platform is told to expect a large image
and renders a bare text stub instead. Founder-led distribution on LinkedIn is the marketing
plan; this is the asset that plan runs on, and it does not exist on any of the thirteen pages.

**This is also the answer to "the site needs visuals."** It needs one visual, thirteen times,
and it can be built from type and the existing tokens with no photography.

Build it with next/og at the edge — `app/opengraph-image.tsx` at the root plus per-route
overrides, so cards generate from page data rather than being designed one at a time.

  Canvas 1200×630. Ground: Petrol #0A4E5C.
  Top: a 6px engine rule — Citrus/Lime/Aqua for the page's engine, all three for non-engine
       pages, full width.
  Body: the page H1, Archivo ExtraBold, white, ~72px, max 3 lines, left aligned, generous
       left margin. No subtitle, no strapline, no decoration.
  Bottom left: "hyprr brands" wordmark, white.
  Bottom right: the URL path in JetBrains Mono, --color-on-field-mute #B6D6DC.
  Nothing else. No stock imagery, no gradients, no generated faces.

  Add og:image, og:image:width/height, og:image:alt (the H1), and twitter:image to every page.
  og:type stays "website"; use "article" on /insights/[slug] when it ships.

Acceptance: paste each URL into LinkedIn Post Inspector and X Card Validator — a card renders
with the page's own H1, on all thirteen.

======================================================================
B2 — /llms.txt is missing (P0 for §N)
======================================================================
robots.txt is genuinely well done — GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot,
PerplexityBot and Google-Extended are all explicitly allowed, and the sitemap is declared.
Nothing to change there.

But /llms.txt returns 404, and §N requires it. Add it as a static route:

  # Hyprr Brands
  > Ecommerce operations agency. We build, grow and operate Amazon, Walmart and Shopify
  > businesses on behalf of the people who own them. The client owns the accounts, the
  > inventory and the capital, and approves every material purchase.

  ## Services
  - [Wholesale ecommerce](/wholesale-ecommerce): buying and operating a catalogue on Amazon and Walmart
  - ... one line per LIVE service, generated from lib/site-map.ts so it cannot drift

  ## How we work
  - [How we work](/how-we-work): the operating cycle, approval gate and fee mechanic
  - [Documents](/documents): the paperwork, ungated  ← only when it exists

  ## Notes
  - Hyprr publishes no earnings claims, income figures or projected returns.

Generate it from the manifest, like the sitemap. A hand-maintained llms.txt goes stale.

======================================================================
B3 — Five sections are a heading and a list with no prose (P1, GEO)
======================================================================
Architecture §27: each important section must stand alone; avoid a visual with no textual
explanation. Measured, these H2s have no paragraph of 80+ characters after them:

  homepage      "From decision to operation."  "Built differently."  "Nothing important is hidden."
  /how-we-work  "Who we say no to"  "What we don't guarantee"

Each is a heading followed straight into a grid or a list of fragments. An AI retrieving that
passage gets a title and some disconnected phrases, and a human skim-reading gets the same.

Add one 40–60 word paragraph under each of the five, between the heading and the grid. The
service pages already do this — every H2 in docs/content/ has a body — so this is bringing the
homepage and /how-we-work up to the same standard, not a new rule.

======================================================================
B4 — The contact form has no required fields (P1)
======================================================================
Measured: all six inputs on /contact have required = false. Combined with the mailto: fallback
already flagged, the form currently accepts an empty submission and produces nothing useful.

  Required: name, email, and "What would you like to discuss?"
  Optional: company, current situation, what have you already tried.
  The five-option radio set: no default selected, and not required — forcing a category before
  someone knows which one they are is the wrong friction.
  Client-side validation with inline messages that say what to fix, not "invalid input".
  Keep autocomplete on name/email/organization — those are already correct.

======================================================================
B5 — The first tab stop on every page is the announcement bar (P1)
======================================================================
Measured: the first link in the body is "How that works" — the announcement bar — on all seven
pages. A keyboard user tabs through the announcement bar and the entire nav before reaching
content, on every page, every time.

A skip link appears on /wholesale-ecommerce and /private-label but not on /, /build, /contact,
/how-we-work or /true-cost.

  Add "Skip to content" as the FIRST focusable element in <body> on every page, visually
  hidden until focused, targeting <main>. It is in the global layout, so this is one change.

======================================================================
B6 — Navigation landmarks are unlabelled (P2)
======================================================================
Pages carry between two and four <nav> elements — header, breadcrumb, section nav, footer.
A screen reader announces "navigation" four times with no way to tell them apart.

  aria-label on each: "Main", "Breadcrumb", "On this page", "Footer".
  Breadcrumbs: <nav aria-label="Breadcrumb"><ol>, with aria-current="page" on the last item.

======================================================================
B7 — No aria-current anywhere (P2)
======================================================================
Zero aria-current attributes site-wide. The nav does not mark which page you are on, in the
accessibility tree or visually. Add aria-current="page" to the active nav item and the active
section-nav item.

======================================================================
WHAT IS ALREADY RIGHT — do not change these
======================================================================
lang="en-US" on every page · every image has alt and explicit width/height (zero missing,
zero layout shift from images) · every form control is labelled · one <main>, one <header>,
one <footer> per page · FAQ uses <details> so answers are in the served HTML · autocomplete
correct on name/email/organization · robots.txt AI-crawler policy · zero dead links.

======================================================================
ACCEPTANCE
======================================================================
1. All thirteen URLs render a share card in LinkedIn Post Inspector and X Card Validator.
2. /llms.txt returns 200 and lists only live services, generated from the manifest.
3. No H2 on any page is followed directly by a grid or list without a paragraph between.
4. /contact rejects an empty submission with a message naming the missing field.
5. "Skip to content" is the first focusable element on every page and moves focus to <main>.
6. Every <nav> has an aria-label; the current page carries aria-current="page".
7. Contrast sweep still failCount 0 at both viewports; no new dead links.
```

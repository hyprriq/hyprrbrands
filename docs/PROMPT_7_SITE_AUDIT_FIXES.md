# Prompt 7 — dev: end-to-end audit fixes (do these before step 6 content)

Full crawl of production, 2 Sep. **Zero dead links** — the manifest is doing its job. Seven
anomalies, none structural. Fix 1–5 before the remaining eight pages land, because every one
of them multiplies by page count.

```
Fix the anomalies found in the 2 Sep production crawl.
Repo: D:\Projects\hyprrbrands

======================================================================
A1 — One service has three different names (P0)
======================================================================
Measured. The same page is called:

  "Private label & brand building"   homepage engine chip · footer · build hub card
  "Private label"                    elsewhere in the build hub
  "Private Label Product Development & Launch"   its own H1 and title

And inside the footer's own service list, two conventions run side by side: "Wholesale
ecommerce" uses the plain service name while "Private label & brand building" uses the
compound one.

**Resolution: the name is "Private label" everywhere.** Drop "& brand building" from the chip,
the footer, the hub card and the manifest.

Why, on evidence rather than preference: `private label brand building agency` was tested and
**returns white-label reseller agencies, personal-branding studios and a local map pack of
design studios** — it is a measured rejected keyword, not an unused one. It is also a promise
the page does not lead with: nothing in the H1, the sixty-word answer or any H2 is about brand
building. Branding and packaging are genuinely part of the service and are covered in the body
copy; they are not what the page is for.

The H1 stays a longer descriptive phrase — that is correct and normal. The *label* is what has
to be one thing.

Check the other eleven for the same problem when their pages land. §D's service names and the
manifest must agree exactly, one string, one source.

======================================================================
A2 — Raw URL paths are rendering as visible page text (P0)
======================================================================
Measured on /build: four <span> elements whose entire visible text is
  /wholesale-ecommerce · /private-label · /shopify-dtc · /ecommerce-website-development
On /private-label: /shopify-dtc · /marketplace-growth · /build
None inside a link. Every hub and every related-services block does this.

This comes from the design's HubPage and related cards, which print `{{ s.url }}` in the card
corner in mono. In a spec frame that is an annotation telling the reader where the card goes.
On a live page it is a wireframe artefact — visitors do not read URLs, and printing internal
paths as body copy reads as unfinished.

Remove the URL text from all service cards and related-service cards. The card title is the
link; the destination belongs in href, not on screen.

======================================================================
A3 — Unlinked cards are indistinguishable from linked ones (P1)
======================================================================
/build shows four service cards. Two are links, two are not, and all four look identical —
same border, same "Read the page →" affordance. A visitor clicks Shopify / DTC and nothing
happens, which reads as broken rather than as not-yet-published.

Until a page exists, its card must either be omitted or visibly marked. Omitting is cleaner:
the Grow hub already shows three cards rather than four for exactly this reason. Do the same on
Build and Operate — render cards only for `status: 'live'`, and let the hub grow as pages ship.

If a card is kept, it must lose the arrow affordance and carry a "publishing soon" state.
Do not ship the current middle option.

======================================================================
A4 — The footer lists twelve services, ten unlinked, on every page (P1)
======================================================================
Including the four legal pages. This was the deliberate deviation flagged in the prompt-4
report — service names kept crawlable for GEO.

**Overruling it.** Unlinked text in a footer is weak GEO signal and a real UX cost: a visitor
scanning the footer sees twelve services, clicks one, and nothing happens. Ten times, on
every page.

The correct vehicle for "these are our services" as a machine-readable claim is the
Organization graph in prompt 6, not unlinked footer text. Ship that instead.

Footer renders `status: 'live'` only, from the manifest. It grows as pages ship.

======================================================================
A5 — A URL path is rendering inside anchor text (P1)
======================================================================
On /private-label:
  <a href="/how-we-work#fees">Full fee mechanic → /how-we-work#fees</a>

That came from my content files, where `→ /how-we-work#fees` is **spec shorthand for "this
links there"**, not copy. My fault, and it will recur on the next eight pages if it is not
caught now.

**Rule for reading the content files in docs/content/:** any line of the form
`→ /some-path` or `Target → /path` is a link instruction. The anchor text is the human phrase
before the arrow. Never render a path.

Correct here: `Full fee mechanic →` linking to /how-we-work#fees.

======================================================================
A6 — Eleven pages are still 404 (expected)
======================================================================
/shopify-dtc · /ecommerce-website-development · /ecommerce-growth · /marketplace-growth ·
/ppc-paid-media · /ecommerce-operations · /marketplace-management · /shopify-management ·
/about · /insights · /documents

Eight are step 6 and their content is written. /about and /documents are owner-blocked.
/insights waits on an article. No action beyond step 6.

Note: "Reporting & performance" stays unlinked until /ecommerce-operations ships, because its
target is /ecommerce-operations#reporting. Do not point it anywhere else in the meantime.

======================================================================
A7 — Hub and company page titles are too short (already in prompt 6)
======================================================================
/build 20 chars · /contact 22 · /how-we-work 26 · /privacy 29.
Corrected titles are in docs/content/hubs.md and about-and-legal.md. Prompt 6 covers this;
listed here so the audit is complete.

======================================================================
ACCEPTANCE
======================================================================
1. Grep the rendered HTML of every page for a visible text node matching ^/[a-z0-9-]+$ —
   zero matches.
2. No anchor text contains a "/" path.
3. "brand building" appears nowhere as part of a service label. §D name, manifest entry,
   chip, footer and hub card are one identical string per service.
4. Every service card and footer entry rendered is a working link. Zero unlinked service names
   anywhere on the site.
5. Hub card count equals the number of live services in that engine.
6. Full crawl: zero 404s from any rendered href. (This passes today — keep it passing.)
7. Contrast sweep failCount 0 at both viewports, all pages.
```

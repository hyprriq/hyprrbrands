# Prompt B — dev: URL architecture and routing

Self-contained. The full spec is `docs/Hyprr_Homepage_Build_Spec_V1_FINAL.md` in the repo —
section J is the sitemap, section D is the service taxonomy, section L is metadata.

```
Set up the URL architecture for hyprrbrands.com (Next.js 16 App Router, Tailwind 4).
Repo: D:\Projects\hyprrbrands
Source of truth: docs/Hyprr_Homepage_Build_Spec_V1_FINAL.md — read section J first.

THE ONE DECISION TO GET RIGHT BEFORE WRITING ANY ROUTE

Section J specifies twenty pages. Content exists for none of them yet. Two failure modes:
  - Create all twenty as stubs -> twenty thin pages in the index. Index bloat, and Google
    forms a low-quality impression of the domain that takes months to undo.
  - Link the nav to all twenty and build none -> dead CTAs, which fails the spec's own
    pre-launch check 07.

Do NEITHER. Build routes only as their content lands, and make the navigation render from
a single manifest so it always shows exactly what exists:

  lib/site-map.ts — one exported array, one entry per page:
    { slug, title, engine: 'build'|'grow'|'operate'|null, group, status: 'live'|'planned',
      priority, oneLine }

  Seed it from the section J table. Every nav dropdown, the footer, the sitemap and the
  hub-page card grids read from this array and render ONLY status: 'live'. Shipping a page
  becomes a one-word change plus the route. Nothing links to a page that does not exist,
  and nothing that exists is orphaned.

ROUTES — exactly these slugs, no variations, no trailing slashes, no /services/ prefix

  Services (11)   /wholesale-ecommerce  /private-label  /shopify-dtc
                  /ecommerce-website-development  /ecommerce-growth  /marketplace-growth
                  /dtc-growth  /ppc-paid-media  /ecommerce-operations
                  /marketplace-management  /shopify-management
  Hubs (3)        /build  /grow  /operate
  Company (4)     /how-we-work  /about  /insights  (+ /insights/[slug])  /contact
  Support (2)     /documents  /true-cost
  Legal (4)       /privacy  /terms  /accessibility  /earnings-claims

  Note: eleven services, not twelve. Section D's preamble says twelve because
  "Reporting & performance" is a chip, but the spec states it is a capability inside
  /ecommerce-operations and must NOT get a page. Link that chip to
  /ecommerce-operations#reporting.

BUILD ORDER (from section J, driven by which homepage CTAs currently point where)
  1  /contact            the primary CTA, four placements
  2  /how-we-work        five homepage CTAs point here, plus the #fees anchor
  3  /documents          design-mandated, and the transparency claim is false without it
  4  /true-cost          design-mandated
  5  /about  /build  /grow  /operate   thin but real; hubs under 400 words
  then the service pages in J's priority order.

WHAT TO IMPLEMENT NOW (this ticket — routing only, no page content)

  1. lib/site-map.ts as above, seeded from section J.
  2. app/sitemap.ts generated from the manifest, live pages only. Never emit a planned URL.
  3. app/robots.ts — allow all, point at the sitemap. No blanket noindex on production.
  4. Canonical self-reference on every page via generateMetadata, absolute URLs on the
     production origin. Section L has the title/description limits.
  5. Nav dropdowns under Build / Grow / Operate rendering from the manifest, grouped by
     engine. The three nav items become links to the hub pages — the current in-page
     anchors are retired per section A.02.
  6. Nav label "Pricing" -> "How we work", pointing at /how-we-work. The spec calls the
     current label a broken promise while figures are withheld, and it is still live.
  7. Footer rendering all live services from the same manifest, grouped by engine.
  8. A not-found route that offers the three hubs and /contact rather than a bare 404.
  9. Repoint the two homepage CTAs the spec folds into /how-we-work:
     "Who we say no to" and "Why we're not an automation company" -> /how-we-work
     (currently /vs-automation, which will never exist).

DO NOT
  - Create placeholder pages, "coming soon" pages, or routes returning empty shells.
  - Add /services/, /solutions/ or any category segment to a service URL.
  - Add noindex to real pages, or leave a planned URL in the sitemap.
  - Change any homepage copy or styling. This ticket is routing only.

ACCEPTANCE
  1. Every href rendered anywhere on the site resolves to a route that exists — crawl the
     homepage and assert zero 404s.
  2. app/sitemap.ts output contains only status:'live' entries and no duplicates.
  3. Every live page has exactly one self-referencing canonical, absolute URL.
  4. Nav and footer contain no hardcoded service list — both read from lib/site-map.ts.
     Grep for the slugs: each must appear once, in the manifest.
  5. "Pricing" appears nowhere in the nav.
  6. /vs-automation appears nowhere in the codebase.
  7. Trailing-slash behaviour is consistent and enforced by one config value.
```

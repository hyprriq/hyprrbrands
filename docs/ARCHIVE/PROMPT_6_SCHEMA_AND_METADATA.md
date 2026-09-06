# Prompt 6 — dev: schema and metadata (P0, site-wide)

Measured on production, 2 Sep. Small ticket, large consequence.

```
Add the entity graph and fix metadata lengths across hyprrbrands.com.
Repo: D:\Projects\hyprrbrands
Spec: docs/Hyprr_Homepage_Build_Spec_V1_FINAL.md §L (metadata) and §M (schema).

======================================================================
FIX 1 — There is no JSON-LD anywhere on the site (P0)
======================================================================
Measured across / · /wholesale-ecommerce · /private-label · /build · /how-we-work ·
/true-cost · /contact · /privacy: zero <script type="application/ld+json"> on every one.

§M specifies the graph and §N's GEO requirements depend on it existing. Right now an AI
crawler reading this site has no machine-readable statement of what Hyprr is, and the
"Hyprr Brands" navigational term — the one term we rank first for at launch — has nothing
anchoring it as an entity.

Implement as ONE shared graph, not per-page fragments:

  app/lib/schema.ts exporting:
    organizationLd()   -> @id https://hyprrbrands.com/#organization
    websiteLd()        -> @id https://hyprrbrands.com/#website, publisher -> #organization
    webPageLd(page)    -> @id <url>#webpage, isPartOf -> #website, about -> #organization
    breadcrumbLd(trail)
    serviceLd(service) -> provider -> #organization, areaServed US
    faqLd(faqs)        -> ONLY when the FAQ block is visibly rendered

  app/layout.tsx renders organizationLd + websiteLd once, site-wide.
  Each page renders webPageLd + breadcrumbLd, and service pages add serviceLd.

Organization fields — publish only what is verified (§P.07 is still open):
  name, url, logo, description, sameAs [] (leave EMPTY rather than pointing at empty
  profiles — an abandoned profile is a worse signal than none).
  Do NOT invent legalName, address, telephone or foundingDate. Omit until confirmed.

HARD RULES
  - FAQPage only where the FAQ is visible, and the schema `text` must match the visible
    answer character for character. Mismatched FAQ text is a manual-action risk.
  - No aggregateRating, no Review, no offers, no priceRange anywhere. There are no reviews
    and no prices, and self-serving Review markup is explicitly out per §M.
  - serviceType per page, from the content files in docs/content/.

======================================================================
FIX 2 — Metadata lengths (P1)
======================================================================
Measured, and four of seven are over:

  page                    title   description     target
  /                        71        182          <=60 / <=155
  /private-label           61        173
  /wholesale-ecommerce     62        163
  /true-cost               35        152          ok
  /how-we-work             26        139          title too short
  /contact                 22        148          title too short
  /build                   20        112          title too short
  /privacy                 29         96          fine for a legal page

Over-length descriptions get truncated mid-sentence in the SERP. Under-length titles on hubs
waste the slot entirely — a 20-character title on a hub page leaves the whole category phrase
on the table.

Corrected titles and descriptions for every page are in docs/content/ — each file's SEO layer
table carries them, already inside the limits. Use those rather than rewriting.

======================================================================
FIX 3 — /wholesale-ecommerce chroma is 0.0204, below the 0.030 floor (P1)
======================================================================
The acceptance criterion in prompt 5 said: if a service page comes in under, the engine field
tint was lost. That is what happened — "What you get" is not rendering on the family's field
colour.

  Build pages   -> background #FFE3A3
  Grow pages    -> background #DDF2AC
  Operate pages -> background #B6E7DC

It is one section per page and it is the section that carries the colour code — a visitor who
saw the homepage already knows what citrus means, and that block is what they came for.
Re-measure after: >= 0.030.

======================================================================
ACCEPTANCE
======================================================================
1. Every page has Organization + WebSite (site-wide) + WebPage + BreadcrumbList. Service pages
   add Service. Validate in Google Rich Results Test and the Schema.org validator — both clean.
2. No aggregateRating, Review, offers or priceRange anywhere. Grep to confirm.
3. FAQPage present only where an FAQ renders, with text matching visible copy exactly.
4. No title over 60 characters, none under 30 except legal pages.
5. No meta description over 155 characters.
6. Service page chroma >= 0.030.
7. Contrast sweep still failCount 0 at 1512x900 and 375x667 on every page.
```

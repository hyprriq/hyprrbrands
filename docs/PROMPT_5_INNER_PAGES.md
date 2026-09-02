# Prompt 5 — dev: build the inner pages from the design system

The design is delivered as **parameterised components**, not ten page mockups. Build it the
same way or you will write the same page ten times.

Source files: `ServicePage.dc.html` · `HubPage.dc.html` · `HowWeWork.dc.html` ·
`ContactPage.dc.html` · `TrueCost.dc.html` · `Insights.dc.html` · `Documents.dc.html` ·
`AboutPage.dc.html` · `Hyprr_Inner_Page_Layout_Spec.dc.html` (the index — read this first).

```
Build the Hyprr inner pages from the delivered design components.
Repo: D:\Projects\hyprrbrands
Read docs/Hyprr_Inner_Page_Layout_Spec first — it indexes the eight templates and names the
mobile form of every horizontal composition.

======================================================================
THE ARCHITECTURE — do this before any page
======================================================================
Every template arrives already parameterised. ServicePage takes `family` (7 options) and
`mobile`; HubPage takes `engine` (3); Insights takes `view` (index | article). Mirror that:

  components/pages/ServicePage.tsx   props: { data: ServicePageData }
  components/pages/HubPage.tsx       props: { engine: 'build'|'grow'|'operate' }
  content/services/<slug>.ts         one data object per URL

Then each of the ten service pages is a DATA FILE, not a page build. Getting this wrong is
the single biggest cost on this ticket.

The design's own `F` object in ServicePage.dc.html is the shape of ServicePageData — h1,
answer, disqualifier, involvesLead, visual type, the artefact payloads, deliverables,
fitFor/notFor, phases, chain/stops/statements, yours/hyprrWork, managed, proof, faqs,
related, insight. Lift that shape directly.

======================================================================
FIVE GAPS TO CLOSE FIRST — these are design decisions, not code
======================================================================

GAP 1 — /dtc-growth is still in the designs and is not being built.
  HubPage.dc.html, grow variant, lists a fourth service card:
    ['DTC growth','/dtc-growth','Acquire, convert, retain...']
  That page was dropped on 1 Sep (measured: it duplicates /shopify-dtc, and its SERP rewards
  roundups over service pages). The Grow hub has THREE service cards, not four. The DTC
  growth content becomes an anchored section on /shopify-dtc, and the chip and footer entry
  point at /shopify-dtc#growth.

GAP 2 — Three of the ten service URLs have no assigned variant.
  ServicePage ships seven families. Ten URLs need one each. Assign the missing three:
    /ecommerce-website-development  -> shopify variant   (storefront craft; it is the build
                                       itself, so the journey visual becomes the stack from
                                       §8: product → store → CMS → payments → ERP →
                                       marketplaces → analytics)
    /marketplace-growth             -> wholesale variant (operational artefacts; the
                                       optimisation loop replaces the catalogue table)
    /shopify-management             -> operations variant (daily desk, store-scoped)
  Do not invent an eighth composition. The variants are compositions, not URLs.

GAP 3 — AboutPage still has the photograph grid.
  The people grid renders four 4:5 slots labelled "photograph · real person · blocker until
  shot". The owner decided on 1 Sep: no photographs of people, and no stock or generated
  faces either. /about carries NO faces.
  Rebuild that section as: named person, role, what they are responsible for, live LinkedIn
  link — in a card with no image slot and no reserved aspect ratio. Reserving space for an
  asset with no delivery date is the mistake that already cost the homepage team section.

GAP 4 — /documents ships with one row, not six.
  The design lists six documents. Build Spec §O is explicit: ship with one real document
  rather than six placeholders. Only the reporting template exists. Render the list from a
  data array so it grows; seed it with one entry.

GAP 5 — /contact has no privacy line.
  It collects name, email and company. Add a one-line notice above Send linking /privacy.
  Keep the existing "No newsletter. No sales sequence. One reply." — that line is doing real
  conversion work and should not be replaced by legalese, only joined by it.

======================================================================
BUILD ORDER — least blocked first
======================================================================
Five of these pages ALREADY EXIST from prompt 4 as thin routes. Applying the design to them
needs no new content, so they go first.

  1  /build /grow /operate   Apply HubPage. Content is already in the design's H object
                             (h1, lead, nodes, service cards). Under 400 words each.
  2  /contact                Apply ContactPage. All copy is in the design. Add GAP 5.
  3  /how-we-work            Apply HowWeWork. Everything except the #fees body, which is
                             blocked on the owner — leave the striped placeholder and ship
                             the rest rather than holding the page.
  4  /true-cost              Apply TrueCost. Needs ten 60–90 word input explanations; that
                             is a content task with no dependency on anyone else.
  5  /wholesale-ecommerce    The FIRST service page. Build ServicePage as the component and
                             prove it here before any other service page exists.
  6  the remaining 9 services  Data files only. If page 6 takes more than a few hours, the
                             component in step 5 was not general enough — fix it there.
  7  /documents /about       Blocked: one document, and the GAP 3 rebuild.
  8  /insights               Blocked: articles. Keep it hidden until one exists.
  9  legal ×4                White, article type stack, version and date line. No template.
 10  404                     Already built. Reskin to match.

======================================================================
CARRY THESE — they are invariants, not preferences
======================================================================
- Petrol #0A4E5C is a section ground. A dark panel inside a light or band section is Ink.
- Aqua is a mark at >=12px on Petrol, never a text colour there.
- On any *-field tint, labels use --color-label #615D6E (passes on all eight grounds).
- Radius: exactly 8 / 16 / 28 / 40.
- Explicit grid column counts wherever position carries styling. No auto-fit.
- The section nav is sticky ONLY at >=900px AND when the viewport is tall enough to show it
  whole. The design already gates it; do not remove the gate.
- The mobile sticky CTA bar is `position: sticky; bottom: 0` placed mid-spine — no scroll
  listener. The design does this deliberately.
- No figures in any artefact. No stock people, no generated faces, anywhere.

======================================================================
ACCEPTANCE — per page, every page
======================================================================
1. Contrast sweep (the prompt-5 script) returns failCount 0 at 1512x900 and 375x667.
2. No horizontal scroll at 360 / 375 / 390 / 412.
3. One H1. Eight H2s in the fixed order on service pages. No skipped levels, no H4.
4. Every internal href resolves — zero 404s on a crawl.
5. Canonical, title and meta description present and unique.
6. No-JS: all content present, FAQ answers in the served HTML.
7. Reduced motion: nothing animates, nothing is unreachable.
8. Area-weighted chroma >= 0.030 on service pages. The engine field tint under "What you
   get" is what carries it — if a page comes in under, that section lost its tint.

REPORT BACK after step 5, before step 6
  The ServicePageData shape you settled on, and how long the second service page took. That
  number tells us whether the component is right before eight more depend on it.
```

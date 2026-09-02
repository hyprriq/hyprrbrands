# Hyprr — page content, ready for integration

Written 2 Sep 2026. **Location is deliberate:** `docs/content/`, not `content/services/`, so
nothing here can collide with the dev's component build while it is in flight. When the
`ServicePageData` shape is reported back, converting each file to a `.ts` data object is
mechanical — every field name already matches the design's `F.<family>` object in
`ServicePage.dc.html`.

## Files

| File | URL | Variant | Build order |
|---|---|---|---|
| `wholesale-ecommerce.md` | `/wholesale-ecommerce` | wholesale | 1 |
| `ecommerce-growth.md` | `/ecommerce-growth` | grow | 2 |
| `private-label.md` | `/private-label` | privatelabel | 3 |
| `marketplace-growth.md` | `/marketplace-growth` | wholesale¹ | 4 |
| `shopify-dtc.md` | `/shopify-dtc` | shopify | 5 |
| `ecommerce-website-development.md` | `/ecommerce-website-development` | shopify¹ | 6 |
| `marketplace-management.md` | `/marketplace-management` | marketplace | 7 |
| `shopify-management.md` | `/shopify-management` | operations¹ | 8 |
| `ppc-paid-media.md` | `/ppc-paid-media` | ppc | 9 |
| `ecommerce-operations.md` | `/ecommerce-operations` | operations | 10 |
| `hubs.md` | `/build` `/grow` `/operate` | HubPage | before services |
| `true-cost.md` | `/true-cost` | TrueCost | before services |
| `about-and-legal.md` | `/about` `/contact` `/privacy` `/terms` `/accessibility` `/earnings-claims` `/documents` | various | last |

¹ Variant reused with a substitution — see Gap 2 in `PROMPT_5_INNER_PAGES.md`. No eighth
composition was invented.

**Ten service pages, not eleven.** `/dtc-growth` is not built; its content is the `#growth`
section of `shopify-dtc.md` and its chip points at `/shopify-dtc#growth`.

## Every page carries

Primary keyword and the rejected one with its measured reason · title and meta to §L limits ·
schema note · the eight H2s in fixed order with real body copy · 4–6 unique FAQ answers ·
internal links per §22 · a checks table.

## Nothing is blocked — owner ruling, 2 Sep

**Build the site first. Compliance and agreements come after, and are not website work.** All five
former blockers are resolved, deferred or reclassified. Nothing in `docs/content/` waits on a
lawyer, a document or a LinkedIn URL.

| Former blocker | Resolution |
|---|---|
| **1 · The fee mechanic** | **Resolved.** Figures published — `fees-and-pricing.md`, shipped by PROMPT_9. |
| **2 · The three ownership clauses** | **Ship them.** They are statements of how Hyprr operates and the owner has decided them. Making the agreement match is an agreement-stage task, not a launch gate — the copy is not waiting on the contract, the contract is waiting on the drafting. Recorded in `AGREEMENTS_LATER.md`. |
| **3 · One real document** | **Deferred.** `/documents` does not ship — route out of nav, sitemap and manifest, list built from an empty data array so it appears the day a document is added. Homepage CONTRACTS row stays cut. |
| **4 · The founder paragraph** | **Drafted.** Written from positions the owner has already stated, marked as a draft to edit rather than a finished statement. Ships as-is; improves in two minutes whenever he touches it. |
| **5 · One real person** | **Ship one card — Gautam Naidu.** `priorEmployer` and `linkedin` are optional fields that render only when present, so the card is correct today and complete the day either is added. |

**The rule this establishes:** where owner data is missing, the field is **optional and omitted**,
never a placeholder and never a launch gate. A page that renders correctly with less information
is worth more than a page that waits for all of it.

**What actually does still hold up a page:** something being *wrong*, not something being
*absent*. Absent is a design problem with a good answer. Wrong is a bug. That distinction is the
whole of the current queue.

## Two design changes required

- **`/about` people grid** — remove the 4:5 photograph slots. Owner decision: no faces, and no
  stock or generated ones either. Cards carry name, role, accountability, prior employer,
  LinkedIn, with no image and no reserved ratio.
- **`/grow` hub** — three service cards, not four. `/dtc-growth` is not built.

## The finding that generalises

**The design's field list is a layout contract, not a content checklist.** Checking all ten
pages against §O found requirements with nowhere to live in the data object — buy box and
pricing, ungating, unsold stock (wholesale); categories declined (private label); the
disqualification weight (website development). All are now carried in body copy and FAQ. Any
future page should be checked against §O the same way before its content is written.

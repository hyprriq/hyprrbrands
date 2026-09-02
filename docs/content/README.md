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

## Blocked on the owner — five items, flagged in place not written around

1. **The fee mechanic.** Every page's H2 7 links `/how-we-work#fees`, which is a placeholder.
2. **The three ownership clauses.** Repeated on `/wholesale-ecommerce` and
   `/marketplace-management`. They are claims about the client agreement.
3. **One real document.** `/documents` ships with one row or the homepage CONTRACTS row stays cut.
4. **The founder paragraph** on `/about`. 120–180 words, first person. Cannot be written for you.
5. **One real person** — name, role, accountability, prior employer, LinkedIn. `/about` should
   not launch with placeholder names.

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

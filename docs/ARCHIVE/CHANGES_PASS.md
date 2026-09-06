# The change pass — after all pages are finished, not before

**Owner sequencing, 2 Sep:** finish every page (design + content) first, then do the changes —
pricing, visuals and SEO — in one pass.

This file is the parking lot. Nothing in it enters `docs/NEXT.md` until `/about` and `/insights`
are live. Recorded so none of it is lost and none of it leaks into the current queue.

---

## 1 · Pricing — every figure currently live

The owner has flagged that the published figures came out of an earlier decision and are to be
revisited. **They are live on production now**, so this is the one item in this file that has a
cost to leaving alone — a design gap is invisible, a wrong price is not.

**Complete inventory of what a visitor can read today:**

| Where | Figure |
|---|---|
| `/how-we-work#fees` Table 1 | Launch **$2,499** ≤ $25,000/mo · Scale **$4,599** $25,000–$100,000/mo · Enterprise **$7,999** above $100,000/mo |
| `/how-we-work#fees` Table 2 | Second marketplace **$1,999** · Takeover **$1,499** · Takeover complex **$2,999** |
| `/how-we-work#fees` Table 3 | Private label build **$14,999** |
| Split, everywhere | **30%**, stated at every band |
| Step-down | 30% to month 12 · **25%** months 13–24 · **20%** from month 25 |
| Minimum | **$500**/month, credited against the share |
| Worked example | $30 price · $9,000 settlement · $18 landed · $600 ads · $1,200 margin · **$360** share — all labelled arbitrary |
| `/wholesale-ecommerce` H2 7 | The band table again, inline |
| `/private-label` fee body | **$14,999** with the itemised scope |
| Homepage `PricingBand` + FAQ Q8 | From **$2,499**, **30%** at every band, the **$500** minimum |

**Three things to decide in the change pass, in this order:**

1. **Which figures change.** Every one above traces to `Hyprr_Business_Plan_v1.0.html`, so if the
   plan is still right, the site is. If the plan itself is being revised, the site follows it
   rather than being edited independently — one source, or they drift.
2. **Whether the bands stay published at all.** The measured argument for publishing is in
   `docs/content/fees-and-pricing.md` and has not changed: four competitors on the
   `amazon agency pricing` SERP publish full ranges, and being the vaguest firm on a page of
   transparent ones inverts a positioning built on being checkable. Reverting to "individually
   scoped" is a real option, but it costs that argument and the site would need the copy that
   asserted transparency taken back out with it.
3. **What must move together.** Changing a figure is never one edit — the band table, the
   wholesale H2 7 inline table, the homepage `PricingBand`, FAQ Q8, the worked example and
   `fees-and-pricing.md` all carry it. **A price change that misses one surface produces exactly
   the contradiction the last cycle spent a ticket retracting.**

**The one line that does not change whatever the figures do:** *no fee is discovered on a call
that was not on the page.* That is the commitment, independent of what the numbers are.

---

## 2 · Visuals — measured: **two** on-page images across twenty-one routes

Both are incidental. There is no photography, no illustration, no diagram, no product imagery
anywhere a visitor looks. The site is type, colour and layout only.

Share cards exist (`/og/[slug]`, prompt 8) but those render off-site in a social preview — they do
nothing for a visitor already on the page.

**Constraints already decided, so the change pass does not relitigate them:**
- No stock photography. No AI-generated faces, absolutely — one reverse image search ends the
  positioning.
- No photographs of people until there are real ones of real people.
- No reserved aspect ratios for assets with no delivery date. That mistake already cost the
  homepage team section once.

**Which leaves what actually works here, and it is a narrower and better list than "add images":**
- **Diagrams that carry argument** — the operating cycle, the approval gate, how realised margin
  is calculated, what the client holds versus what Hyprr does. Drawn from the design tokens, no
  photography, and they explain rather than decorate. This is the strongest option by a distance
  and it is the one the brand brief already asked for.
- **The reporting template rendered as an artefact** — doubles as the `/documents` unblock.
- **Real screenshots of real work** — genuinely strong, and available the day there is a client.
- **Editorial illustration** as a system, if a real designer makes it.

**Judge each one by the brand brief's own test:** does it explain the business or create a
memorable brand moment, or does it exist to impress? The second kind is what makes a site look
generated, which is the specific thing the brief rules out.

---

## 3 · SEO changes — after the pages exist

- Re-audit titles, metas and internal links across all twenty-one routes once `/about` and
  `/insights` are live, since both add link targets that change the internal graph.
- `Person` schema on `/about` the day a LinkedIn URL exists.
- `legalName` and registration on `/#organization` the day the entity details arrive.
- **UK keyword cluster** — the whole map was measured on `google.com`. Blocked on a data source.
- **Walmart cluster** — the map calls it the weakest competitive field in the whole study and it
  is still unmeasured. Blocked on the same thing.
- `/walmart-marketplace-management` as a page, only after that measurement.

---

## The ordering, and why it is right

Pages first is the correct call. Design and SEO changes both operate *on* pages — changing them
before the last two exist means doing the work twice, and an internal-link audit run before
`/insights` lands is an audit of the wrong graph.

The only thing that does not fit that logic is a wrong price, because it is live and commercial
rather than structural. If any figure above is actually wrong, say so and it comes out on its own
— it does not need to wait for the pass.

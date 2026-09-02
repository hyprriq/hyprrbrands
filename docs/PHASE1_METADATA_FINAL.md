# Final titles and meta descriptions — all 22 routes

**This file replaces every title and meta on the site.** It is the single source. The annotations
in `docs/content/*.md` are wrong and are superseded by this table.

**Every count below was computed with `len()`, not estimated.** Titles 30–60, metas 120–158, all 22
compliant. Banned-phrase grep over all 44 strings: **0 hits.** `[$£€][0-9]` and `walmart uk`: **0.**
Rejected-keyword leaks: **0** — each page checked against its own measured rejects, and hubs
additionally checked against every child primary.

| Route | Primary keyword | Title | # | Meta description | # |
|---|---|---|---|---|---|
| `/` | ecommerce operations agency | `Ecommerce Operations Agency \| You Own It, We Run It` | 51 | `Hyprr builds, grows and operates ecommerce businesses on Amazon US & UK, Walmart US and Shopify. You own the accounts and inventory; we run the desk.` | 149 |
| `/build` | build an ecommerce business | `Build an Ecommerce Business \| Hyprr Brands` | 42 | `Four routes into a business you keep: a wholesale catalogue, a private label product, a Shopify storefront, or the commerce infrastructure beneath them.` | 152 |
| `/grow` | grow an ecommerce business | `Grow an Ecommerce Business \| Hyprr Brands` | 41 | `Demand, acquisition, conversion, channel, margin, in that order. Three routes to more revenue, each capped by what the operation behind it can absorb.` | 150 |
| `/operate` | operate an ecommerce business | `Operate an Ecommerce Business \| Hyprr Brands` | 44 | `Three ways to keep a trading business running after launch: the daily desk, seller account health, or the storefront. Read what each one covers.` | 144 |
| `/wholesale-ecommerce` | amazon wholesale management service | `Amazon Wholesale Management Service \| Sourcing to Buy Box` | 57 | `We source, buy and operate wholesale catalogues on Amazon and Walmart. The account stays in your name and you approve every purchase before it runs.` | 148 |
| `/private-label` | amazon private label agency | `Amazon Private Label Agency \| Research to Launch` | 48 | `Research, validation, supplier and sample, packaging, compliance and launch. Every product gets a written verdict before any money is committed.` | 144 |
| `/shopify-dtc` | dtc ecommerce agency | `DTC Ecommerce Agency \| Shopify Build and Run` | 44 | `The whole direct customer journey, from offer and storefront to checkout, acquisition and retention. The store, the code and the data stay yours.` | 145 |
| `/ecommerce-website-development` | ecommerce website development company | `Ecommerce Website Development Company \| Hyprr` | 45 | `We build storefronts, integrations and payments for operations we also run. If you want a standalone site project with no operation behind it, we pass.` | 151 |
| `/ecommerce-growth` | ecommerce growth agency | `Ecommerce Growth Agency \| Growth You Can Fulfil` | 47 | `Demand, conversion, inventory, margin and capacity worked as one set of operating questions, sequenced against what the business can actually ship.` | 147 |
| `/marketplace-growth` | amazon marketplace growth agency | `Amazon Marketplace Growth Agency \| Ranking & Buy Box` | 52 | `Listings, ranking, buy box and review velocity worked as one loop across Amazon US and UK and Walmart US. One catalogue, two rulebooks, one team.` | 145 |
| `/ppc-paid-media` | amazon ppc management agency | `Amazon PPC Management Agency \| Judged on Margin` | 47 | `Advertising run inside the operation that also controls inventory, pricing and listings, and reported on contribution margin rather than ACoS alone.` | 148 |
| `/ecommerce-operations` | outsourced ecommerce operations for marketplace sellers | `Outsourced Ecommerce Operations for Sellers` | 43 | `Hire a desk that works your purchase orders, inventory, orders, cases and listings to a fixed daily cadence, on marketplace accounts that stay yours.` | 149 |
| `/marketplace-management` | amazon seller account management | `Amazon Seller Account Management \| You Keep the Keys` | 52 | `Account health, policy, cases and compliance handled daily under permissioned access inside your own Seller Central. We never hold your credentials.` | 148 |
| `/shopify-management` | shopify store management services | `Shopify Store Management Services \| Run, Not Rented` | 51 | `Catalogue, merchandising, fulfilment, apps and theme maintenance run to a cadence by a named team you can reach, not a ticket queue. The store is yours.` | 152 |
| `/how-we-work` | how an ecommerce agency charges | `How We Work \| You Decide, We Execute \| Hyprr` | 44 | `What happens in an engagement, who decides what, what gets written down, and how the fee follows realised margin rather than hours or activity.` | 143 |
| `/true-cost` | true cost of launching a product | `True Cost of Launching a Product \| Hyprr Brands` | 47 | `Ten inputs, one total, and every line explained. The calculator works out what you will spend to launch. It never projects what you might make.` | 143 |
| `/about` | about hyprr brands | `About Hyprr Brands \| Who Runs the Operation` | 43 | `Who is accountable for what at Hyprr, the company facts you can check, and why the operation is built this way. No stock photography, no invented faces.` | 152 |
| `/contact` | contact hyprr brands | `Contact Hyprr Brands \| Start a Conversation` | 43 | `Tell us what you are trying to build. We read the context first, come prepared, and say plainly whether Hyprr is a fit, including when we are not.` | 146 |
| `/privacy` | hyprr brands privacy policy | `Privacy Policy \| Hyprr Brands Ecommerce` | 39 | `What this site collects, what the contact form is used for, how long anything is kept, who processes it, and how to reach us about your data.` | 141 |
| `/terms` | hyprr brands website terms | `Website Terms of Service \| Hyprr Brands` | 39 | `The terms that apply to using this website. Engagement terms live in the written agreement each client signs, and are not set out on this page.` | 143 |
| `/accessibility` | hyprr brands accessibility statement | `Accessibility Statement \| Hyprr Brands` | 38 | `The standard this site is built to, WCAG 2.2 AA, the gaps we already know about, and how to report a barrier you hit on any page of it.` | 135 |
| `/earnings-claims` | ecommerce earnings claims policy | `Earnings Claims Policy \| Hyprr Brands` | 37 | `Hyprr publishes no income figures, no projected returns and no results promises. This is that policy in writing, and what it commits the firm to.` | 145 |

> The `\|` in the table is markdown escaping. **The real strings use a plain `|`.**

## The three collisions, measured before and after

| Pair | Was | Now |
|---|---|---|
| `/marketplace-management` vs `/wholesale-ecommerce` titles | 78% | **55%** — residual is only "Amazon" and "Management", which both primaries mandate |
| `/marketplace-growth` vs `/marketplace-management` titles | 72% | **38%** |
| `/ecommerce-operations` vs `/operate` metas | 71% | **33%** — and the verbatim shared clause *"a written path for when something goes wrong"* is gone from both |

`/ecommerce-operations` now leads on a hiring verb ("Hire a desk that…") and `/operate` on a
chooser framing ("Three ways to… Read what each one covers"). That is the differentiate-don't-merge
decision expressed in metadata.

## Where these live — four places, not one

1. `content/services/*.ts` — `metaTitle` / `metaDescription`, **10 routes**
2. `components/HubPage.tsx` `HUBS` — `title` / `meta`, **3 hubs**
3. `metadata` exports in `app/**/page.tsx`, plus `app/layout.tsx` for the homepage
4. `components/LegalPage.tsx` takes `description` as a **prop, separately from the metadata export**
   — the four footer routes need **both** updated or they will disagree with each other

## Also apply to OG and Twitter

Every route sets `openGraph` and `twitter` descriptions. **Update those to match**, or the share
card says one thing and the SERP another.

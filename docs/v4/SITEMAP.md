# Sitemap — what gets built

**Nine pages plus legal.** Down from 25. Everything below reflects what we've agreed across this
project. Anything not on this list does not get built.

---

## The nine

| # | Page | URL | Model | Purpose |
|---|---|---|---|---|
| 1 | Home | `/` | — | Route the visitor to their service in under a minute |
| 2 | Private label | `/amazon-private-label` | Project → managed | Launch a brand from product research to running it |
| 3 | Wholesale | `/amazon-wholesale-management` | Managed | Source, buy, list and replenish known lines |
| 4 | Management | `/amazon-walmart-management` | Managed | Run an account that already sells. Both marketplaces |
| 5 | Listing optimization | `/amazon-listing-optimization` | Project, fixed price | The entry product. Small cheque, two weeks |
| 6 | How we work | `/how-we-work` | — | Method, approvals, fees, what you own |
| 7 | Proof | `/proof` | — | The verdict sheet, the cost model, the before-and-after |
| 8 | About | `/about` | — | Who runs it. One named operator |
| 9 | Contact | `/contact` | — | Booking link and a form that actually sends |

Plus `/privacy`, `/terms`, `/accessibility` — unchanged, linked in the footer only.

---

## What each page contains

Every page runs the same arc, so a visitor who reads one knows how to read the next:
**why → what → how → grow → scale → proof → one invitation.**

### 1 · Home
Hero · What we do (four services) · Where are you today (four situations) · Why — two places you
lose money · How we work (five steps + buy/don't buy) · What we manage (four groups) · Growth ·
Scale · Proof · Who it's for + CTA.
**Links out to:** all four service pages, `/how-we-work`, `/proof`, `/contact`.

### 2 · Private label
Why a brand of your own · the journey in two visible halves — **BUILD** (idea, product, brand,
listing, launch) as the paid project, **RUN** (operate, grow, scale) as the monthly engagement ·
what you get · what it costs · FAQ.
**Links out to:** `/amazon-walmart-management` (after launch), `/amazon-listing-optimization`,
`/how-we-work`, `/proof`.

### 3 · Wholesale
Why wholesale · the cycle with **buy / don't buy** at its centre · what's included monthly · the
live margin calculator · grow and scale · FAQ.
**Links out to:** `/amazon-walmart-management`, `/amazon-listing-optimization`, `/proof`.

### 4 · Amazon and Walmart management
Why hand it over · **should you let an agency manage your account** (the rebuttal passage) · four
live areas — catalogue, growth, inventory, account · a week inside your account · `#listings`
anchor · **Adding Walmart** block · FAQ.
**Links out to:** `/amazon-listing-optimization`, `/amazon-wholesale-management`,
`/amazon-private-label`, `/proof`.

### 5 · Listing optimization
Why start here · what we optimize — research, content, conversion, indexing · before and after ·
what you receive · upgrade path into management.
**Links out to:** `/amazon-walmart-management#listings`, `/proof`.

### 6 · How we work
The five steps in full · what you own and what you approve · how we charge, both models · what
happens if it doesn't work · the pricing FAQ.
Every service page's fee line links here rather than repeating it.

### 7 · Proof
The verdict sheet ending in *Reject*. The landed-cost model ending in *Do not buy*. A listing
before and after. A sample monthly report. Case studies slot in here when clients exist.

### 8 · About
One named operator, a photograph, a prior role, a LinkedIn link, and a short "when I'm not
available" paragraph. Carries the Person schema.

### 9 · Contact
Booking link first, form second. Six fields, a real backend, a success state, an auto-reply.

---

## Not being built, and why

**No separate Walmart page.** The work is identical to Amazon — catalogue, ads, inventory, account
health. Two pages would be the same page twice, which is how the old site got to 25 routes. Walmart
is named throughout page 4 and owns a block there.

**No separate PPC or growth page.** Growth is one of the four areas on page 4. If a fifth page is
ever added, PPC is the one — it has the most clearly commercial measured SERP of the set — but not
before something is ranking.

**No Shopify, DTC or website development.** Different domain, different brand.

**No blog or insights.** A four-year-old domain with no backlinks will not rank an article set.
Revisit once the nine pages are live and the canonical is fixed.

**No case studies page.** There are no clients. The slot exists on `/proof` and on the homepage
proof row, and fills the day there's something real to put in it.

**No `/build`, `/grow`, `/operate` hubs.** Buyers don't arrive thinking in those words. Scale lives
inside each service journey and as a situation on the homepage.

---

## Redirects — 301, never delete

The domain is four years old and its links are its only authority.

| Old | New |
|---|---|
| `/wholesale-ecommerce` | `/amazon-wholesale-management` |
| `/private-label` | `/amazon-private-label` |
| `/marketplace-management` · `/ecommerce-operations` · `/shopify-management` | `/amazon-walmart-management` |
| `/marketplace-growth` · `/ecommerce-growth` · `/ppc-paid-media` | `/amazon-walmart-management#growth` |
| `/build` · `/grow` · `/operate` · `/scale` · `/where-we-work` · `/true-cost` | `/how-we-work` |
| `/documents` | `/proof` |
| `/shopify-dtc` · `/ecommerce-website-development` | the other domain, or `/` until it exists |
| `/insights` | `/` |

**Before the redirects go live:** `SITE_ORIGIN` in `lib/site-map.ts` must change from
`hyprrbrands.vercel.app` to `hyprrbrands.com`, or every canonical and redirect points at the
preview domain.

---

## Navigation

**Header:** Private label · Wholesale · Management · Listings · How we work · Company ▾ · Book a call
**Company ▾:** Proof · About · Contact
**Footer:** the four services, the three company pages, the three legal pages.

Short labels in the nav, full keyword-bearing names as the page H1.

---

## Build order

1. Tokens and the page template — needs the direction chosen, nothing else.
2. Home.
3. The four service pages.
4. How we work, Proof, About, Contact.
5. Redirects, then retire the old routes from `site-map.ts`.
6. Real artefacts replacing the placeholders.
7. Generated scenes, last. The site must read well with none.

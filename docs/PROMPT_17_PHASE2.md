# PROMPT 17 — Phase 2

Owner decisions, 2 Sep. **Run after `PROMPT_16` closes phase 1.** Ten items, ordered by impact.

Evidence behind items 1–3: `docs/CLIENT_REVIEW_NEW_SELLER.md` — a read of the live service pages in
the persona of a first-time seller with $50k. Read it before starting; it quotes the live pages and
it is the reason the order below is what it is.

---

## 1 · The chooser — highest-impact fix on the site

**A first-time buyer cannot tell whether they need wholesale or private label, and neither page
tries to help.** The two pages are structurally identical — same eight headings, same phases, same
30% — so they read as the same product twice.

**Build a shared `ServiceChooser` component.** Placed immediately after the H1 answer paragraph on
`/wholesale-ecommerce`, `/private-label`, `/shopify-dtc`, and on `/build`.

Two or three columns, plain English, ~60 words each, **no jargon at all**:

> **Wholesale** — You buy products that already exist and already sell, from the brands that make
> them, and resell them. Lower risk, thinner margin, more of your capital working at once.
> *Choose this if:* you want a business running sooner · you would rather buy proven demand than
> create it · you have capital to keep moving.
>
> **Private label** — You create your own product and your own brand. Higher margin, and you own
> something at the end. Slower, and more can go wrong before the first sale.
> *Choose this if:* you want an asset rather than a trading business · you can wait months before
> revenue · you accept most product ideas will be rejected.
>
> **Shopify / DTC** — Your own store rather than a marketplace. You own the customer and the data;
> you also have to bring the traffic.

Plus one honest capital line per path, and a link to the other two. **An experienced reader skims
this in two seconds; a first-timer needs it to stay on the site.**

---

## 2 · Define the jargon inline, on first use

Priority order, worst first. **`buy box` is the worst case on the site** — it appears as *"the buy
box decides whether you sell at that price at all"* and is never explained.

**Wholesale:** buy box · catalogue line · sell-through · replenishment · prep · resale certificate ·
stranded and aged stock · account health · distributor vs brand.
**Landed cost is currently defined 800 words after first use — move the definition to first use.**

**Private label:** private label itself · validation · review moat · DTC · patent-dense · and the
five compliance gates, especially **"Importer · responsible party"**, which carries personal
liability and gets three words.

**Mechanism:** a short em-dash gloss on first use — *"the buy box — the default Add to cart slot on
a listing, which one seller wins at a time"* — or a dotted-underline `<abbr>` tooltip that also
renders its text inline on mobile and for crawlers. **Never a modal, never a hover-only reveal.**

**Move the ungating FAQ's opening line — *"Two separate gates that are often confused"* — up into
the body.** It is the best teaching on the site and it is 1,500 words down.

---

## 3 · Money — a worked example, not a price list

**This does not reinstate published pricing.** The owner's decision stands. What is missing is
arithmetic the reader can follow.

In the fee section of each service page, directly under the existing "build fee agreed in writing"
paragraph, a bordered box containing:

- a scenario with real arithmetic — capital deployed, a fee **range**, what 30% came to in a given
  month, what the client kept
- **a stated minimum** — *"below $X deployed this does not work and we will say so"*
- **the step-down.** `/how-we-work` publishes 30% → 25% at month 13 → 20% at month 25 and **neither
  service page mentions it.** That is free goodwill being discarded.
- on `/private-label`: **what happens to the build fee if the research says no.** The page says most
  products are rejected. The reader immediately asks what they paid for.

Label the arithmetic as arbitrary, in the same block as the numbers, exactly as `/how-we-work` does.

---

## 4 · Proof, or say there isn't any

No client name, no case study, no result, no person, no years, no volume. **Anonymity plus
confidence plus no price is indistinguishable from the automation ads this buyer already
distrusts.**

Two options, and either beats the current silence:
- a named person with a background and a face, above the fold, or
- **say it out loud** — *"Hyprr is early. Here is who runs it, here is what we have done before, and
  here is why we publish our fee mechanic instead of testimonials."*

Also: `/about` needs to be reachable from these pages. A first-timer asking "who are these people"
currently has to find it in the nav.

---

## 5 · A second CTA that is not a sales call

Both CTAs are *"Let's talk."* The pages sell judgement — *"Every product gets a written verdict"* —
and never show one.

Add a low-commitment artefact beside the primary CTA: a **redacted sample verdict sheet**
(private label) or a **sample landed-cost model and purchase-order recommendation** (wholesale).
Ships as a rendered image or PDF. This also gives `/documents` its first real content.

---

## 6 · Visuals — 5 to 6 per page, with image SEO

Owner target: **5–6 visuals per page minimum**, with alt text and image metadata, because Google
Images is a surface and image alt text feeds AI answer extraction.

`PHASE1_VISUAL_MAP` slots 1–5 plus one asset from this list per page:

- marketplace and platform logos — Amazon, Walmart, Shopify, eBay, TikTok Shop
- **real Seller Central / Shopify admin screenshots**, anonymised and visibly labelled
- **real operating charts** — sell-through, cover, margin by line
- the weekly report artefact rendered as an image
- product and packaging renders

**Every image requires:** descriptive `alt` naming the subject and the page's topic — never "chart"
or "screenshot" · a filename that reads as words · `width`/`height` set to prevent CLS ·
`loading="lazy"` below the fold · WebP or AVIF · and a visible caption where the image carries an
argument.

**Every anonymised screenshot carries a visible label saying so.** That label is an asset — it is
the thing the automation crowd never does.

**Still banned:** stock photography · AI-generated faces · fake client logos · invented testimonials.

---

## 7 · `/scale` — a new page inside Grow

Measured across twelve competitors: **not one has a Launch → Grow → Scale ladder.** Seller Sage has
"Scale" only as a pricing band; My Amazon Guy says "grow" fifteen times and "scale" zero.

`/scale` targets the seller already doing volume — the highest-value client. What breaks at the next
level, why the constraint moves from demand to cash and fulfilment, why more spend on a constrained
operation returns less. It is the natural home for *"growth you cannot fulfil is not growth."*

**`nextStep` chain becomes Build → Grow → Scale → Operate.**

Not a fourth engine. No new colour, no new hub.

---

## 8 · The connected stack

**A visitor currently cannot tell that ads, social, content marketing or CRO exist at all.**

One "the whole stack" section on `/shopify-dtc`, `/ecommerce-growth` and the homepage, showing
marketplace and DTC work as one operation: storefront · merchandising · CRO · paid social · content
· email · marketplace ads · SEO. **Depth stays on the marketplace side** — placeholders that say
"we do this" are the goal, and silence is what is there now.

Also: **`/shopify-dtc` is two businesses on one page** — launch a DTC brand, and run an established
one. Two explicit paths, as private label has.

And **`/private-label` still reads as launch-only.** It needs a visible "after launch" section —
growth, PPC, replenishment, scale — so a private-label buyer gets the whole arc on one page and only
leaves for depth.

---

## 9 · One global page — `/where-we-work`

Owner decision: **one page, not country pages.** Correct — `/us`, `/singapore`, `/middle-east` with
near-identical content is doorway-page territory and is actively demoted.

One page in the footer, with a short section per region: **United States · United Kingdom · Europe ·
Middle East · Singapore and APAC.** Each section says what marketplaces that region's sellers reach,
what currency and timezone apply, and links into the service pages. Plus the entity line — a
first-time reader asked unprompted *"which country am I contracting with?"* after seeing a US LLC
footer on pages selling UK marketplaces.

Also feeds `areaServed` in the Organization schema. **No `hreflang`** — one English page has no
localised variants to annotate.

---

## 10 · AI visibility — being named when someone asks an assistant

New owner objective: when someone asks ChatGPT, Claude or an AI Overview for an Amazon agency,
Hyprr should be a candidate.

This is entity work, not keyword work, and it is a different discipline:

- **`/#organization` completed** — `legalName`, registration, `areaServed`, `sameAs` pointing at
  every profile that exists (LinkedIn, YouTube, Instagram, Crunchbase, the Amazon SPN listing).
  **Consistent name, address and description everywhere** — an entity an assistant cannot resolve is
  an entity it will not name.
- **`Person` schema** on `/about` the day a LinkedIn URL exists.
- **`/llms.txt` audited** against the current channel list and services.
- **Passage standalone-ness (§27)** across every page — assistants quote passages, not pages. The
  `managedLead` and `artefactNote` work already serves this.
- **Off-site mentions are what actually move this.** Assistants name firms that are written about
  elsewhere. The article set, LinkedIn, YouTube and a Crunchbase entry do more than any on-page tag.

**Honest limit:** no on-page change makes an assistant name a firm nothing has been written about.
On-page work makes Hyprr *resolvable*; being *mentioned* is earned off-site. Both are needed.

---

## Not in this ticket

- `/walmart-marketplace-management` and `/amazon-agency` — specified in `PHASE2_PLAN.md`, still
  blocked on keyword measurement.
- The article set — same.
- Founder video — needs the owner.

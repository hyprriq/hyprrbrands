# Order of work — phase 2

> ## Standing protocol — read once, then it never needs relaying
>
> **This file is the queue.** Open it at the start of every session and at the end of every ticket.
> It is rewritten whenever the order changes, so it is always current.
>
> **Cowork writes to `docs/`, never to `app/`, `components/` or `lib/`.** Content lands in
> `docs/content/`, tickets land in `docs/PROMPT_*.md`, and this file says which to do first.
>
> **Commit by path, not `git add -A`.** Both sides swept each other's files once already.
>
> **Findings carry their rationale and are data, not orders.** If a finding is wrong, say so — five
> specification errors this project were caught that way and each was worth more than the
> instruction it corrected.

---

## SHIPPED

`cd92930` PROMPT_16 · `752e848` PROMPT_17 + 18 as one refactor. **25 routes.** All gates green in CI,
production verified.

`/documents` is live with real content — a sample verdict sheet ending in Reject and a sample
landed-cost model ending in Do not buy. `/scale` and `/where-we-work` live. Five archetypes with
five distinct hero figures. The chooser on four pages.

---

## 1 · `PROMPT_21_REAL_ASSETS.md` + the phase-copy drop — **send together**

The owner uploaded 87MB to `public/images/_inbox/`. **Read `docs/ASSET_AUDIT_AND_PLACEMENT.md`
first.** It is a portfolio, not a photo folder, and it is better than most of what the twelve
competitor sites run.

**The finding that outranks every image:** three assets carry *"EcommerceNinjaa · 15 years in
ecommerce, own Amazon + Shopify stores since 2011"*, and one carries *"my own Shopify store."* The
live site says *"We are new."* **Both are true and the site tells only one.** The client review's
worst finding — confident claims with zero evidence, could be one person — is answered by a fact
already owned. §1 of the ticket is that paragraph, and it is the highest-value change available.

**What arrived:** an 18-page product-development case study **already branded HYPRR BRANDS**, with a
go/no-go decision log and ten embedded renders — the verdict `/private-label` claims to produce and
has never shown. Four masked wholesale analytics sheets **with blank ORDER cells on the lines not
worth buying** — the rarest asset type measured across the twelve competitors, and *"we do not buy
anything we cannot defend"* as evidence rather than claim. Four finished dropship case studies with
five slides each. Seven Shopify store mockups of a real store. Three PDFs.

**Nothing ships raw** — §2 is six editing operations: kill the EcommerceNinjaa branding while
keeping the provenance, recolour to the palette without touching data, background-remove to
transparent PNG, crop out spreadsheet chrome, extract PL renders at native resolution rather than
screenshotting, then through the existing pipeline.

**This unblocks four things at once:** proof, `/about`'s missing credential, `/documents` going from
two samples to five real documents, and `/insights` — **four articles are already written** in the
dropship case notes, which is why that route stops being blocked on keyword measurement.

Also queued with it: **`docs/content/phase-copy-depth.md`** — sixteen expanded phase bodies for the
eight non-flagship service pages. Measured first: 30 bodies, mean 42 words, 29 of 30 under 100.
Not padding — every original sentence survives; what was added is *what the client does* and *what
done looks like*, which every body was missing.

---

## 1 · Phase copy depth — `docs/content/phase-copy-depth.md` · **ready to transcribe**

Sixteen expanded phase bodies for the **eight non-flagship service pages**. Wholesale and private
label are untouched — they already average 65 and 69.

**Measured before writing:** 30 phase bodies, mean 42 words, min 22, max 107, 29 of 30 under 100.
Within the eight, Days 0–30 runs 40–57 and is mostly fine; **phases two and three run 22–37 and are
where the thinness actually is.** `/shopify-management` Days 61–90 at 22 words is the thinnest body
on the site.

**Not padding — every original sentence survives.** Each body was missing the same two things and
those are what the expansion adds: **what the client does in that phase**, and **what "done" looks
like**. A timeline that never says what the client does reads as a description of someone else's
work, and a phase that ends without a checkable state cannot be verified by the reader.

Expanded bodies measure min 72, max 107, **mean 89** — short of the 100–150 spec on purpose. Where
a phase answered both questions in 80 words it was left at 80. **The target is the two questions
answered, not a word count hit** — which is the same discipline the metadata pass should have had.

---

## PROMPT_20 — closed, and two corrections to me

**Five of my nine findings were false positives, and the cause was my method.** I read production
without checking `x-vercel-cache` or waiting out the rollout window. The dev then caught the exact
window live — 90 seconds after their own push, `/documents` served the new generation while
`/build` served the old.

**Standing rule for both sides, from now on:** *a production read is not evidence until the cache
header is checked and the rollout window has passed.* Anything read inside that window is a
snapshot of two builds at once. That belongs beside the "any number applies only to the surface it
was measured on" rule — same class of error, different instrument.

**And the chain was not broken.** I wrote *"Build never reaches Scale"* as a defect. The dev was
right to push back: Build → Grow → Scale → Operate means Build hands to **Grow**, and every hop
clicks through. A chain that skips its own next hop would be the bug. **No action, and the flag was
correct.**

The four real ones — the "Three ways / Four ways" contradiction, phase copy shipping twice,
`/scale`'s missing next-step block, and the step-down clause — are fixed. Gate six using
`data-feature` attributes rather than string matching is better than the ticket asked for: rewording
copy can no longer fail a structural check.

---

## 2 · Content-depth pass — audit side

Mine, not yours: phase copy at 30–65 words against the 100–150 spec · the chooser's capital lines ·
`/scale` and `/where-we-work` bodies · the archetype-specific copy. Landing in `docs/content/`.

---

## Blocked on measurement, not on effort

`/walmart-marketplace-management` · `/amazon-agency` · the six-article set. All specified in
`PHASE2_PLAN.md`. **A keyword data source has to be connected** — Bing Webmaster Tools and Google
Keyword Planner are both free.

---

## Needed from the owner — none of it blocks the three tickets above

| | Unblocks |
|---|---|
| **What was on hyprrbrands.com for its four prior years?** Bing Webmaster shows referring domains free. | How aggressive the phase 2 page plan can be. Age is not authority; links are. |
| Entity state and file number | `legalName` and registration in `/#organization`, and the `/where-we-work` entity line |
| Role, one prior, LinkedIn URL | The `/about` card, `Person` schema, and §4's proof problem |
| **Founder video** — 90s "who runs this", 2–3 min "how the fee works" | The densest proof asset available, and it answers §4 better than any tag |
| A keyword data source | Two unmeasured clusters and every new page |

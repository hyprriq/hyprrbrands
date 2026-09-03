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

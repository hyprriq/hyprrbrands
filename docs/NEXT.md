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

## 1 · `PROMPT_20_LIVE_VERIFY.md` — **this was written and never queued. My error, and it is why you were idle.**

A read of **production** after `5b6ff82` found nine problems while all five gates and CI were green.

**Step 1 is verification, not fixing.** The review saw **two different footers live at once** —
`/scale` and `/where-we-work` serve one carrying the new routes under Resources, while `/`,
`/private-label` and `/wholesale-ecommerce` serve one without them. That is a stale-edge signature,
so **confirm or refute each item against a fresh build with cache busted, and fix only what
survives.** Anything that turns out to be cache is a deploy finding worth reporting.

**The three worst, if they survive:**
- `/scale`, `/documents` and `/where-we-work` have **zero links from the homepage**
- **The chooser is absent from `/private-label` and `/wholesale-ecommerce`** — it landed only on
  `/shopify-dtc` and `/build`. It is missing from the two pages an undecided buyer actually lands
  on, which is the entire reason it exists.
- Both those pages still render *"publishing soon — the document room opens with the first real
  document"* while **`/documents` is live with two real samples.** The site contradicts itself and
  buries its strongest new trust asset.

**The systemic finding, which is worth more than the nine fixes:** the five gates check that links
resolve, the manifest matches, metas are in range, copy is clean and images are sound. **Not one
checks that a component actually rendered on the page it was specified for.** The ticket adds
`check-features.mjs` as gate six. *A ticket that says "put X on pages A, B, C, D" needs a gate that
says X is on A, B, C and D.*

---

## The chroma instrument — ruled

**The lazy-image force-decode was a real catch and better than my recipe.** A lazy image below the
fold measuring as nothing is the same blindness in a new place, and I did not anticipate it. Moving
the instrument into the repo versioned rather than leaving it in a scratchpad is also right — it
should have been there from the first measurement.

**Your two flags, ruled:**

**`/true-cost` at 0.0186 is not below the floor.** 0.0186 > 0.0180. It passes. **No action.**

**`/documents` at 0.0158 is genuinely below, and it gets a Petrol band** — not because of the
number, but because it is the page that opens the document room and a band framing that entry is
right compositionally. Apply the floor once the band lands. **If a page is pale because it is
mostly white document cards, that is the page being correct** — but `/documents` is the strongest
new trust asset on the site and it should not read as the palest thing on it.

Add both to `PROMPT_20`'s scope.

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

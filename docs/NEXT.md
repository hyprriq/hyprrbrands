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

## 1 · Fix the chroma tool before the first photographs land — `CHROMA_METRIC_CORRECTION.md`

**Your caveat was the important finding, and it corrects my ticket.** `PROMPT_19 §0` predicted six
photographs would push the low pages under the floor and called it arithmetic. It was not — the
script samples painted surfaces, so photo pixels are never in the number and photographs *cannot*
lower it. Your own result proves it: 0.0206 with six images, 0.0206 without. **That is the tool not
seeing the photos, not the bands compensating.**

The larger problem is that the metric drifts the wrong way. Photo area is excluded from the
weighting, so the remaining painted surfaces carry proportionally more weight — **a page with
photographs over Bone bands will score higher than the same page with none**, while looking
entirely different. A gate that gets easier as the thing it measures gets harder is worse than no
gate.

**Fix:** for each `<img>`, draw to a 32×32 offscreen canvas, average the pixels, convert to OKLCH,
weight `C` by rendered area alongside the painted surfaces. Fifteen lines, same formula, same
output. **Do it before `/private-label`'s photos are wired**, then re-baseline every page — the
0.018 and 0.030 floors were set against the old instrument and will not transfer. Expect movement;
it is not a regression.

**The band mandate in §0 stands, on different grounds** — ground alternation, photographs needing a
frame, and it being what the reference does. Keep the bands, the reason in the ticket was wrong.

Everything else in `PROMPT_19` is shipped and correct.

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

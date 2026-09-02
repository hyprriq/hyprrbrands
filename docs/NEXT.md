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

## 1 · `PROMPT_19_IMAGE_PIPELINE.md` — buildable now, not blocked on the photos

Source: `docs/VISUAL_PRODUCTION_PLAN.md`. **Static photographic images from the owner's real
products — no 3D, no animation.**

**Read §0 of the ticket first.** Your own chroma numbers surface a problem that would otherwise be
found at image six rather than image one: service pages are now **0.0193–0.0235** against the 0.018
floor, and the refactor's new light surfaces cost about 0.002. Six photographs per page are six more
light surfaces. The mitigation belongs in the image component from the start, not as a later fix.

Build steps 1–3 — the optional `images` field, the build-time WebP pipeline, and an alt-text gate —
**with no images present.** Then wire `/private-label` only, re-measure chroma, and stop.

**Your three flags from `752e848` are all correct and need no changes** — the disclosure instead of
deletion is better than what the ticket asked for, and worth doing whenever a ticket says delete and
the content is sound.

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

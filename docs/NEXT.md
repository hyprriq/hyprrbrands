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

## 1 · `PROMPT_21_VISUAL_SYSTEM.md` + the phase-copy drop — **send together**

The owner uploaded raw visual material to `public/images/_inbox/`. **It is source, not deliverable.**
Read `docs/VISUAL_EXTRACTION_PLAN.md` first — it is the design read behind the ticket.

> **Any brand name, watermark, footer or attribution in those files belongs to unrelated work and
> does not reach this site in any form.** Not kept, not credited, not reframed. The copy written
> around those images is also out of scope.

**The rule that decides everything: a screenshot placed on a page is a screenshot forever.** It
blurs on retina, its text is unselectable and uncrawlable, it breaks at 375px, and it carries
whatever was in the original frame. **So almost nothing here is cropped and placed.**

Four treatments, one of which ships as a photograph:

- **Product objects** — cut out to transparent PNG. Ten renders extracted from the PL PDF at native
  resolution plus the product shots. A cut-out object can overlap a band edge, sit half on Petrol,
  take a spec card on its corner. **That is the difference between the owner's reference and a stock
  image**, and it costs one background removal.
- **Data structures** — **rebuilt native.** The profitability sheet's value is its columns and its
  **blank `Order` cells**, not its pixels. A real HTML table where two rows visibly say *not bought*
  argues better than any sentence on the site, and no competitor can copy it without publishing
  their own buying decisions.
- **Layout patterns** — **rebuilt as components.** `<CostBar>` is the best find in the folder: one
  segmented bar showing where a unit's money goes, reusable for landed cost, build fees, marketplace
  take. Plus `<StatRow>`, `<Panel3>`, and a dimension drawing as inline SVG.
- **Whole screens** — kept as images inside `<BrowserFrame>`, with `<AnnotatedCrop>` corner chips.
  **One frame component serves every screenshot this site will ever show.**

**Six of the eight items are reusable components.** That is the whole reason for doing it this way:
the folder should produce a **visual system**, not eighteen one-time images.

Excluded: the AI-generated lifestyle frames (they read as generated, and the brand guidelines rule
that out), the working files, the scripts, the case notes, the MP4, and all three PDFs as documents
— only the renders inside them are extracted.

**Queued with it:** `docs/content/phase-copy-depth.md` — sixteen expanded phase bodies for the eight
non-flagship service pages. Measured first: 30 bodies, mean 42 words, 29 of 30 under 100. Not
padding — every original sentence survives; what was added is *what the client does* and *what done
looks like*.

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

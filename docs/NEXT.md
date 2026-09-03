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

`cd92930` PROMPT_16 · `752e848` PROMPT_17 + 18 · **`3fcb402` PROMPT_21 v2 + the phase-copy depth
pass.** 25 routes. CI run #9 green on all six gates, production verified with cache headers checked
outside the rollout window.

`/documents` live with a sample verdict sheet ending in Reject and a landed-cost model ending in
Do not buy. `/scale` and `/where-we-work` live. Five archetypes, five distinct hero figures.

**The scene system is in, built empty.** `<Scene>` + `<Panel>` composing on all five bands, panels
in the reserved right third, a designed fallback plane when no render exists, `scene` optional so
all 25 routes render unchanged. All six Layer-2 components wired: `<DataArtefact>` on five surfaces,
`<CostBar>` on five fee surfaces, `<StatRow>` ×3, `<Panel3>` ×2, the mat dimension drawing as inline
SVG. Ten cut-out objects extracted from the PDF's raw XObject streams and dressed. The scene-alt
digit gate live with its negative path proven.

**The chroma prediction held.** `/private-label` **0.0208** with all seven images in the number —
the first real post-image measurement — and `/wholesale-ecommerce` rose **0.0193 → 0.0208**.
`PROMPT_19 §0` feared images would push service pages *under* 0.018; `VISUAL_DIRECTION_v2 §6`
predicted saturated visuals on accent bands would *raise* it. **It rose. The band logic is right and
the remaining pages can proceed without a chroma review.**

**`<BrowserFrame>` and `<AnnotatedCrop>` are built but render nowhere** — every store-capture region
carries the unrelated brand, a stock face, or banned urgency patterns. **That was the right call**
(standing rule 7) and it is now an owner input, not a defect: they light up on the first clean
capture.

---

## 1 · `PROMPT_22_SRCSET_TRUTH.md` — small, and it is softening three heroes

Found in the repo at `3fcb402`, not in production, so the cache rule does not apply.

`WIDTHS = [640, 1280, 1920]` is hardcoded in `Scene.tsx:27` and `VisualSystem.tsx:24` and every
image gets all three `w` descriptors. Sharp correctly refuses to upscale, so for a narrow source the
"1920" file is a byte copy — but the descriptor still claims 1920. Three files are byte-identical at
all three widths; three more at 1280 and 1920.

`sizes="(min-width: 900px) 62vw"` on a 1440 viewport at DPR 2 asks for ~1786px, so the browser picks
the 1920 candidate: `/private-label` gets a **1217px** file, `/shopify-dtc` a **591px** file,
`/wholesale-ecommerce` a **634px** file. **No bandwidth cost, so no performance gate sees it — the
whole cost is a soft hero on three of the most important pages.**

The truth is already in `lib/image-manifest.json`. Fix is a `variants` array from the pipeline, both
components building srcset from it, and **one new gate rule: fail a `w` descriptor wider than the
real file.** The three narrow files are fine at native size and must not be re-sourced or upscaled —
the bug is the claim, not the pixel count.

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

## 2 · Content-depth pass — audit side, partly done

**Phase copy shipped in `3fcb402`** (`content/phase-copy-depth.md`, mean 42 → 89 words). Still mine:
the chooser's capital lines · `/scale` and `/where-we-work` bodies · the archetype-specific copy.
Landing in `docs/content/`.

## 3 · Scene generation — blocked on the owner, see below

---

## Blocked on measurement, not on effort

`/walmart-marketplace-management` · `/amazon-agency` · the six-article set. All specified in
`PHASE2_PLAN.md`. **A keyword data source has to be connected** — Bing Webmaster Tools and Google
Keyword Planner are both free.

---

## Needed from the owner

**Two of these now block real work rather than sitting on a wish list.**

| | Unblocks |
|---|---|
| **The five reference images into `public/images/_refs/`** — still empty, they exist only in chat | **scene generation. Nothing starts without them.** |
| **A go / no-go on Kling spend** — 14 free credits against a ~50–80 generation job | scenes 5–21. Four style frames first, then judge |
| **One clean store capture** — no unrelated brand, no stock face, no urgency banner | `<BrowserFrame>` and `<AnnotatedCrop>`, built and currently rendering nowhere |

| | Unblocks |
|---|---|
| **What was on hyprrbrands.com for its four prior years?** Bing Webmaster shows referring domains free. | How aggressive the phase 2 page plan can be. Age is not authority; links are. |
| Entity state and file number | `legalName` and registration in `/#organization`, and the `/where-we-work` entity line |
| Role, one prior, LinkedIn URL | The `/about` card, `Person` schema, and §4's proof problem |
| **Founder video** — 90s "who runs this", 2–3 min "how the fee works" | The densest proof asset available, and it answers §4 better than any tag |
| A keyword data source | Two unmeasured clusters and every new page |

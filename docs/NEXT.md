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

**The visual direction changed. Read `docs/VISUAL_DIRECTION_v2.md` first.**
`docs/VISUAL_EXTRACTION_PLAN.md` is superseded.

The site's visuals are **generated 3D-style scenes**, not photographs and not cropped screenshots.
The owner's uploads are composite inputs to those scenes, not the visuals themselves.

**The rule that decides everything: three layers, and the image model never writes a word.**

```
Layer 3 · BAND      CSS. Petrol / Bone / accent ground. The scene overlaps its edge.
Layer 2 · PANELS    DOM. Translucent cards, figures, labels, connectors. Real text.
Layer 1 · SCENE     Generated image. Environment and objects. No readable text in the pixels.
```

Every number a visitor reads lives in the DOM. That keeps the hero indexable, keeps figures
editable in one line instead of one re-render, keeps panels sharp at every density, and removes the
one tell that makes a generated image look generated.

**This ticket is the container layer and none of it is blocked on the images existing.** Build
`<Scene>` and `<Panel>` empty; the scenes drop in behind them one page at a time. The six
components from the previous version — `<CostBar>`, `<StatRow>`, `<Panel3>`, `<DataArtefact>`,
`<BrowserFrame>`, `<AnnotatedCrop>` — carry forward unchanged, because they *are* Layer 2.

`<DataArtefact>` is still the strongest asset on the site: a real table with blank `Order` cells on
two rows, because we declined to buy them. No render argues as well as that.

Ship it alongside `docs/content/phase-copy-depth.md`.

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

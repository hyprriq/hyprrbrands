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

## PHASE 1 IS CLOSED

`cd92930` shipped PROMPT_16 and CI run #1 passed. 22 routes · 22 titles in 30–60 and metas in
120–158 measured from served HTML · contrast failCount 0 at four viewports · chroma 0.0210–0.0247 on
service pages and 0.0302 on the homepage · four CI gates green in GitHub Actions.

**The gates are the durable part.** `check-links` resolves anchors, so the `#reporting` class of
error now fails a build rather than reaching production.

---

## The phase 2 queue — three tickets, in this order

### 1 · `PROMPT_17_PHASE2.md` — start with §1, it is the highest-impact item on the site

Ten items. Evidence is `docs/CLIENT_REVIEW_NEW_SELLER.md`, a read of the live pages in the persona
of a first-time seller with $50k. **Read that before starting.**

**§1 · The chooser.** A first-time buyer cannot tell whether they need wholesale or private label,
and neither page tries to help. Ship this alone if you want a quick win — it is archetype-independent
and it is the single biggest reason a qualified visitor leaves.

**§2 · Jargon inline.** `buy box` is used as *"the buy box decides whether you sell at that price at
all"* and never explained. `landed cost` is defined 800 words after first use. `private label` is
never defined on its own page.

**§3 · Money.** Not a reinstated price list — a worked example with real arithmetic and a stated
minimum. Also: `/how-we-work` publishes the step-down and **neither service page mentions it.**

**§4–§5 · Proof and a second CTA.** No client, result, person, year or volume anywhere. Both CTAs
are "Let's talk" and the pages sell judgement without ever showing a verdict.

**§6 · Visuals to 5–6 per page** with alt text, word-based filenames, dimensions and lazy loading.

**§7 `/scale` · §9 `/where-we-work`** — new pages, independent of the refactor, build whenever.

**§8 · The connected stack** — a visitor currently cannot tell that ads, social, content or CRO
exist at all.

**§10 · AI visibility** — entity work. The honest limit is stated in the ticket.

### 2 · `PROMPT_18_PAGE_ARCHETYPES.md` — ships with 17, one refactor of `ServicePage.tsx`

Owner ruling: every business model is separate, so the pages should not all be one shape. **Right
diagnosis, and the answer is five archetypes rather than ten bespoke designs.**

Two independent measurements agree the pages are too alike: the persona could not choose between
wholesale and private label *because* the pages are structurally identical, and the site review
measured H1 similarity at 78% on one pair and 72% on two others.

**Trading loop · Gated project · Build-then-run · Cadence desk · Constraint and lever.** The eight-H2
spine, the ids, the frame and the chroma rules stay identical — archetypes differentiate the middle
of the page only.

The ticket carries the exact interleaving of 17 and 18 so `ServicePage.tsx` is touched once.

### 3 · Content depth — audit side, not dev

Flagged in the last report and correctly left in my lane: **phase copy is 30–65 words against the
100–150 spec.** The timeline structure is ready for it. Landing in `docs/content/` with the
archetype-specific copy.

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

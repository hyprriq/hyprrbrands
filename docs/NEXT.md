# Order of work — 2 Sep, after the production audit

> ## Standing protocol — read this once, then it never needs relaying
>
> **This file is the queue.** Open it at the start of every work session and at the end of
> every ticket. It is rewritten whenever the order changes, so it is always current — nothing
> else in `docs/` needs checking for "what next".
>
> **Cowork writes to `docs/`, never to `app/`, `components/` or `lib/`.** No commit from the
> audit side will ever touch code you are working in. Content lands in `docs/content/`,
> tickets land in `docs/PROMPT_*.md`, and this file says which to do first.
>
> **Findings carry their rationale, and are data not orders.** Every item states what was
> measured and why it matters. If a finding is wrong, say so in a commit message or a report —
> three specification errors this session were caught that way, and each one was worth more
> than the instruction it corrected.
>
> **Report back into the repo.** A commit message naming what shipped and what you disagreed
> with is enough. Production is audited directly, so there is no need to describe what you
> built — only what you decided.
>
> **Commit by path, not `git add -A`** — added 2 Sep after both sides did it within a minute of
> each other. `b3c78be` swept in three `docs/` files written by the audit side mid-transcription;
> the audit side's next commit swept back a `Hyprr_Brands_Guidelines.pdf` and a `package.json`
> change that were sitting untracked in the tree. Nothing was lost and nothing needs undoing, but
> the commit messages now describe work neither side did. `git add docs/` and `git add app/
> components/ content/ lib/` keep the two lanes separate, which is the whole point of the split.


> ### Owner ruling, 2 Sep — read this before the queue
>
> **Site first. Compliance and agreements after.** The client meets compliance at agreement
> stage, not on a service page. Every former owner-blocker is now resolved, deferred or
> reclassified — see the bottom of this file — and `docs/AGREEMENTS_LATER.md` holds the deferred
> work so none of it re-enters the queue.
>
> **Missing owner data is never a launch gate.** The field is optional and omitted; the page
> renders correctly without it and completes the day it arrives. No placeholders.
>
> **What holds a page up is something being wrong, not something being absent.** Everything left
> in this queue is a bug: a false sentence, a formula that overcharges, a channel claim that is
> untrue for half the market, or markup that is missing entirely.

> ### PHASE 1 REMAINDER — `docs/PROMPT_16_PHASE1_REMAINDER.md`
>
> **`afd57a1` closed most of `PROMPT_15`.** PROMPT_16 is reconciled against it and covers only what
> is left, so nothing already shipped is touched twice. **PROMPT_15 is superseded.**
>
> Four things remain: the 22 keyword metas · visual slots 3, 4 and 5 · logo and header sizing ·
> and four CI gate scripts.

## Shipped in `afd57a1` — closed, do not revisit

Prompt 14 Batch A in full and prompt 13 A/B/D. `/operate` differentiated with zero shared clauses.
"Publishing soon" deduped. `/about` at three inbound links with a facts block rendering only
populated rows. Hub-to-hub links in body copy and `/operate`'s self-referential link gone.
`nextStep` on all ten with duplicates removed from `related`. `/ecommerce-operations` from zero
related entries to three. `managedLead` and `artefactNote` at **10/10**. `involvesSubheads` on all
ten. `feesTable` deleted. `/contact` has a real H2, `/true-cost` has three. Legal pages have
breadcrumbs and cross-links, `/earnings-claims` has its inbound. Both dead components deleted.
Hero at-a-glance panel on all ten, mobile tables reduced, sequence scroll-snaps at 375.

## What remains

**1 · The 22 keyword metas — not yet shipped.** The seven that landed were `PROMPT_14 §C`, which
were **length corrections, not keyword work**. `PHASE1_METADATA_FINAL.md` supersedes them. Verified
still live in the tree and still colliding: `marketplace-management` and `wholesale-ecommerce` share
"Amazon … Management" at 78%. The new strings take that to 55%, and the other two collisions to 38%
and 33%.

**2 · Visual slots 3, 4 and 5**, with one sequencing rule the chroma number produced: the white hero
panel cost **0.0012** on wholesale (0.0226 → 0.0214). Slots 3 and 5 are also light. **Slot 4 is the
Petrol band, and it must ship in the same commit as slot 3 or before it** — three more light
surfaces alone could cross the 0.018 floor. Cheaper to sequence right than to fix after measuring.

**3 · Logo and header.** Confirmed unchanged: wordmark at **17px** in a 72px header. The brand
guidelines call it "unmistakable" and require clear space of one "h" height, which the markup has
none of.

**4 · Four CI gate scripts** — links (including **anchor resolution**), manifest both directions,
metadata measured from served HTML, and the copy gate. This is what makes "no more errors"
structural.

### Owning the `#reporting` miss

The dev found that my ten `nextStep` links pointed at an anchor that did not exist, and added
`id="reporting"`. **Third time this session I asserted without checking** — character counts, six
subheads, now an anchor. The anchor check in `check-links.mjs` is the fix; the pattern is that a
gate beats a promise every time.

---

## Nothing is blocked — owner ruling, 2 Sep

**Build the site first. Compliance and agreements come after.** Every former blocker is resolved,
deferred or reclassified, and none of them stops a page shipping.

| Former blocker | Resolution |
|---|---|
| Fee mechanic | **Resolved.** Figures in `docs/content/fees-and-pricing.md`, shipped by PROMPT_9. |
| Walmart on private label | **Resolved.** Content patched; PROMPT_9 §D re-transcribes it. |
| Three ownership clauses | **Ship them.** Decided policy. The agreement has to match the site when it is drafted, not the other way round. → `AGREEMENTS_LATER.md` |
| One real ungated document | **Deferred.** `/documents` does not ship — out of nav, sitemap and manifest, list built from an empty array so it appears the day a document is added. Homepage CONTRACTS row stays cut. |
| Founder paragraph on `/about` | **Drafted** from positions the owner has stated, marked as a draft to edit. Ships as-is. |
| One real person | **Ship one card — Gautam Naidu.** `priorEmployer` and `linkedin` are optional fields rendering only when present. |
| Entity state and file number | **Not a gate.** PROMPT_6 ships `/#organization` without `legalName` and registration; the footer verification strip renders the fields it has. One-line follow-up whenever they arrive. |
| GDPR / privacy upgrade / Art. 27 | **Out of the build queue entirely.** → `AGREEMENTS_LATER.md` |

### The rule this establishes, and it applies to every page

**Where owner data is missing, the field is optional and omitted — never a placeholder, never a
launch gate.** A page that renders correctly with less information is worth more than a page
waiting for all of it.

**What still holds a page up is something being *wrong*, not something being *absent*.** Absent is
a design problem with a good answer. Wrong is a bug. Everything left in this queue is the second
kind:

- three live sentences that contradict the prices now being published (PROMPT_9 §A)
- a fee formula that overcharges UK clients by 5% of gross (PROMPT_10 §A)
- a channel claim that is false for half the marketplace scope (PROMPT_10 §B)
- thirteen pages telling every platform to expect a share image that does not exist (PROMPT_8 B1)
- no JSON-LD anywhere (PROMPT_6)

None of those need anything from the owner.

---

## Still needed from the owner — but nothing waits on it

- **Entity state and file number** — adds `legalName` and registration to schema and the footer.
- **Role, one prior, LinkedIn URL** — completes the `/about` card and enables `Person` schema.
- **Two minutes editing the founder paragraph** — the biggest quality gain available for the
  smallest effort anywhere on the site.
- **A keyword data source** — blocks the UK and Walmart clusters, both unmeasured. Neither is in
  the build queue.

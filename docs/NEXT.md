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

> ### PHASE 1 CLOSE-OUT — one bundle, send it all at once
>
> **`docs/PROMPT_15_PHASE1_CLOSEOUT.md` is the master ticket and it supersedes `PROMPT_13` and
> `PROMPT_14`.** Work from its step order; those two stay in the repo as the detail behind steps 3
> and 4. When its step 9 acceptance passes on production, the website is done.
>
> Nine steps: links working and a link checker in CI · manifest verified both directions · inner
> pages designed in full · all 22 titles and metas plus the body copy drop · five visuals per inner
> page · mobile · logo and header sizing · and a definition of done that runs as CI gates rather
> than a promise.

## The four files that make up the bundle

| File | What |
|---|---|
| **`PROMPT_15_PHASE1_CLOSEOUT.md`** | The master. Step order, and the acceptance gate. |
| **`PHASE1_METADATA_FINAL.md`** | All 22 titles and metas. **Every count computed with `len()`.** Titles 30–60, metas 120–158, zero banned phrases, zero rejected-keyword leaks, three known collisions broken — 78%→55%, 72%→38%, 71%→33%. |
| **`PHASE1_VISUAL_MAP.md`** | Five visual slots per page. Slot 3's diagram assigned per page, slot 4's sentence per page. All type-and-token — no photography, no generated imagery, no asset pipeline. |
| **`content/service-page-copy-drop.md`** | `managedLead` ×9 · `artefactNote` ×6 · `nextStep` ×10 · `involvesSubheads` ×10 · `related` fixes · `/about` facts block. |

### Three things that make this bundle different from the last three

**Metadata is counted, not asserted.** Every previous count in `docs/content/*.md` was wrong — I
wrote "written to §L limits" without computing it. The ticket tells the dev to ignore those
annotations entirely and use the counted table.

**Five visuals per page needs no new assets.** Two of the five slots already exist as content and
are being upgraded; only three are net-new, and all are inline SVG from existing tokens. That is
why "3 to 5 visuals per inner page" is a smaller job than it sounds.

**"No more errors" is built as CI gates.** A link checker, a two-way manifest check and a counted
metadata gate. The next mistake fails a build instead of reaching production — which is the only
version of that promise that holds.

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

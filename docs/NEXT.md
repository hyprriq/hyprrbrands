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

> ### Both gating decisions are made — queue is live again
>
> **1 · `/ecommerce-operations` vs `/operate`: differentiate, do not merge.** The keyword map's
> merge recommendation was half of a two-part fix for a *homepage* collision, and the homepage half
> already shipped — so the Critical collision it existed to solve is resolved. What is left is a
> copy problem between a hub and a service page, and merging would destroy 1,564 words to fix it.
> Full reasoning in `PROMPT_14 §Decision 1`.
>
> **2 · "Publishing soon" stays.** Owner call. One refinement only: it renders forty times, so
> where two instances fall in the same section, render one.
>
> **`PROMPT_14_BATCH_A.md` supersedes `PROMPT_13 §C` and `§E`.** 13's A, B and D still stand and
> run in parallel — 13 is layout, 14 is data and copy.

## Order

**1 · `PROMPT_14_BATCH_A.md`** — the review's Severity 1 and 2, plus the design-to-content gaps.
Structural work needs nothing from me: the `/about` inbound links and facts block, the hub-to-hub
links, the `nextStep` scaffolding, all seven corrected metas (**strings are final and
character-counted in the ticket — do not trust the annotations in `docs/content/`, they are wrong
and are being recomputed**), deleting the dead `feesTable` field, `/contact` headings, `/true-cost`
structure, legal-page links, and deleting two never-imported components carrying broken hrefs.

**2 · `PROMPT_13` A, B and D** — hero at-a-glance panel, mobile artefact reduction, sequence
scroll-snap. Component mechanics, parallel-safe with 14.

**3 · Copy drop from me, landing in `docs/content/`** — `managedLead` ×9, `artefactNote` ×6,
`nextStep` ×10, `involvesSubheads` ×10, and the `/about` facts wording. Scaffold the fields in 1
and 2; the pages fill in when this lands.

### The two design-to-content findings worth naming

**Nine of ten service pages render the H2 "What's fully managed" straight into a bare list** —
`managedLead` is set on 1/10. That is exactly the §27 defect `PROMPT_8 B3` fixed on the homepage: it
fails passage extraction for AI answers and reads unfinished to a person.

**Six of ten render their artefact diagram with no prose** — `artefactNote` on 4/10. This is the
owner's "needs visual and content alignment" with a field name: the diagram is there, the sentence
saying what to notice in it is not.

---

## Shipped since the last rewrite

`cb50ac7` prompt 12 — pricing out, mechanic stays, five retractions in the same deploy.
`650ecdf` prompt 11 — `/about` live, `/documents` out of the manifest.

---

## The review

22 routes audited — content, link graph, metadata. Findings, severity-ordered, including two errors
of mine and a list of what is good and must not be churned: **`docs/SITE_REVIEW_2SEP.md`**.

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

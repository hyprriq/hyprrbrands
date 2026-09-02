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

> ### QUEUE ON HOLD — owner ruling, 2 Sep evening
>
> **Stop taking tickets one at a time.** Findings have been arriving singly and becoming tickets
> immediately, which is how the pricing went in and came back out inside a day. A full review of
> all 22 routes has been run instead — content, link graph, metadata — and the remediation will be
> planned once and executed once.
>
> **Read `docs/SITE_REVIEW_2SEP.md` before starting anything.**
>
> **One thing is safe to build now and it is the only thing:** `PROMPT_13` items **A, B and D** —
> the hero at-a-glance panel, the mobile artefact reduction, and the sequence scroll-snap. They are
> component mechanics, they depend on no decision in the review, and nothing in the review can
> change them.
>
> **`PROMPT_13 §C` and `§E` are on hold** even though they are written, because the review found
> the progression problem is larger than that ticket describes — `HubPage.tsx` renders a section
> headed "How Build connects to Grow and Operate" containing zero hub-to-hub links, and only 4 of
> 20 `related` edges express the model. `§E` fixes the service pages and would leave the hubs
> broken. It gets rewritten into Batch A.
>
> Everything else waits on two owner decisions named at the end of the review.

## Shipped since the last rewrite

`cb50ac7` prompt 12 — pricing out, mechanic stays, all five retractions in the same deploy,
`PUBLISH_SPLIT` at its default so the 30% is one line from reversible.
`650ecdf` prompt 11 — `/about` live, `/documents` fully out of the manifest.

Both verified. Two judgment calls in 12 were right and worth recording: **keeping the $500
paragraph without its figure** — the disclosure was the load-bearing part and the number was the
removable part — and **keeping "Fees are in USD"** while the worked example still shows dollars.

---

## The review, in one paragraph

22 routes audited. **No rejected-keyword leaks, no broken links on any live page, the eight-H2
service spine is identical across all ten, and no service page is more than one click from home.**
Against that: `/about` shipped yesterday as an orphan at 300 words; `/ecommerce-operations` and
`/operate` are competing on metas that share a clause verbatim, a collision the keyword map rated
Critical and prescribed a merge for; the Build → Grow → Operate model is expressed in 20% of the
edges that could carry it; three metas are over 158 because of an error in `PROMPT_10`; and four
legal pages are orphans and dead ends with `LegalPage.tsx` rendering no links at all.

Full findings, severity-ordered, with what is good and should not be touched:
**`docs/SITE_REVIEW_2SEP.md`**.

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

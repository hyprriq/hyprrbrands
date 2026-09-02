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

> ### Owner sequencing, 2 Sep — this governs the order below
>
> **Finish every page first — design and content. Then one change pass covering pricing, visuals
> and SEO together.** The change work is parked in `docs/CHANGES_PASS.md` and does not enter this
> queue until `/about` and `/insights` are live.
>
> This is the right order: design and SEO changes both operate *on* pages, so doing them before
> the last two exist means doing them twice — an internal-link audit run before `/insights` lands
> is an audit of the wrong graph.
>
> **Updated later on 2 Sep — two things moved out of the change pass and into the queue:**
>
> **Pricing removal is confirmed and goes first.** Owner decision: the published figures come out.
> `PROMPT_12` — and it is not a delete, because five live strings currently *assert that fees are
> published* and go false the moment the tables leave. Removal and retractions ship together.
>
> **Visuals and video are a workstream, not a polish item.** `docs/VISUALS_AND_VIDEO.md`. Tier 2
> diagrams enter the queue now rather than the change pass, because `PROMPT_12` empties the fees
> section and the margin-calculation diagram is what should fill it.
>
> Everything else in `CHANGES_PASS.md` still waits for `/about` and `/insights`.

The audit cycle is **closed**. Six tickets shipped and verified on production: `f7fef9c`
(prompt 7) · `b3c78be` (step 6) · `3491a0f` (prompt 8) · `bb427b9` (prompt 6) · `0e80289`
(prompt 9) · `fb04046` (prompt 10).

---

## Audit verdict on the five flagged decisions — all five upheld

Checked against the tree, not taken on trust. **Two of the five were my acceptance criteria being
wrong, not your work**, and both are corrected below so they do not misfire again.

**1 · "and" → "&" in H1s and serviceTypes — upheld, and my check was the defect.**
My first instinct was that this evaded acceptance #1 rather than satisfying it, because a string
match on `Amazon and Walmart` is trivially defeated by an ampersand. It does not, and the evidence
is in the bodies: `wholesale-ecommerce`, `marketplace-growth`, `marketplace-management` and
`ppc-paid-media` each carry "Walmart in the US" and "in the US and UK" in body copy. That is
§B rule 3 followed exactly — geography in the body, head terms untouched. Diluting an H1 to
"Amazon US & UK, Walmart US wholesale management" would have cost the term and read badly.

**The check was wrong and is replaced.** A string match cannot test a claim. The correct check:
*every page naming Walmart states a geography for it somewhere in the body.* Use that one.

**2 · Two FAQ questions reworded — upheld.** "Do you run Amazon and Walmart advertising?" →
"Do you run advertising on Amazon and on Walmart?" The question string carried the conjunction
that implied a shared footprint, so rewording the question rather than only the answer is the
correct depth of fix. This one I would have missed.

**3 · Table headers `on-field-mute`, not the suggested Aqua accent — upheld, and my suggestion was
worse.** Re-measured independently: `#b6d6dc` on `#0a4e5c` is **6.04:1**, and `type-label` is 12px
/ 600, so the threshold is 4.5:1. Passes with room. There is no raised surface anywhere in the
rebuilt `#fees` section, so the 4.79:1 raised case never arises. Mark-not-text is the right law
here and chroma is 0.0412 without the accent — the accent would have been decoration solving a
problem that did not exist.

**4 · `$14,999` three times rather than acceptance #3's "exactly once" — upheld, my criterion was
stale.** It was written before `private-label.md` was patched to publish the figure too, so
"exactly once" described a tree that no longer existed by the time you read it. What the rule
actually protects is **adjacency, not scarcity**: the figure must never appear without the
itemised scope and the zero-markup sentence beside it. Verified — `how-we-work` has it in the
table cell with its caption directly below, and `private-label.ts` has it inside the fee body that
carries the pass-through sentence in the same paragraph. **Corrected criterion: every occurrence
of `$14,999` has the scope and pass-through adjacent. Count is not the test.**

**5 · Prompt 6 FIX 3 declined as superseded by the chroma ruling — upheld.** Consistent with the
standing rule that a number validated on one surface does not transfer to another.

### The generalisation worth keeping

Three of my five acceptance criteria this cycle tested a **string** when they meant to test a
**claim**. A grep is a good gate for a banned phrase, because there the string *is* the thing. It
is a bad gate for "this page is truthful about geography", because any rewording satisfies it
while the claim survives. **Where the ticket cares about meaning, the check names the meaning and
a person reads the hits.**

---

## 1 · PROMPT_12_REMOVE_PUBLISHED_PRICING.md — live commercial copy, so it goes first

Owner decision: the published figures come out. **Figures out, mechanic stays** — the
differentiator was never the number, it is that the fee runs on realised margin with nothing on
capital, ad spend, tax or a reversed sale, and all of that publishes without a currency figure.

Two things make this more than a deletion:

**Five strings assert that fees are published** and go false on removal — the `#fees` lead,
`FEE_RULES[0]`, the metaDescription, the og/twitter description and the `PricingBand` body. Same
failure mode as the last cycle in reverse. They ship in the same deploy.

**The 30% is isolated behind one constant**, `PUBLISH_SPLIT`, defaulting to keep. It is the
commercial model rather than a proposed price, and with the tables gone *"the split is 30%
whatever the build fee is"* becomes the whole transparency argument rather than part of it. One
line to flip if the owner wants it out too.

The worked example stays. Its numbers are arbitrary arithmetic labelled as arbitrary, not prices,
and it is the most persuasive block in the section.

---

## 2 · Tier 2 diagrams — `VISUALS_AND_VIDEO.md`, and #1 is urgent

Measured: **two on-page images across twenty-one routes.** The margin-calculation diagram is
sequenced with `PROMPT_12` because that ticket removes three tables and leaves a gap — the tables
stated a price, the diagram proves a method, same section and better content.

The other three (approval gate · operating cycle · what is yours vs what Hyprr does) follow. All
drawn from existing tokens: no photography, no stock, no delivery-date risk, real text in the SVG
so it stays crawlable.

**The unlock recorded in that file:** the no-faces rule was against *fake* imagery, never against
real footage. Founder video is wide open, it is the densest proof available, and it answers
`/about`'s "one real person" better than a LinkedIn URL does. Tier 1 needs the owner, not the dev.

---

## 3 · PROMPT_13_SERVICE_PAGE_VISUALS_AND_MOBILE.md — owner review of production

Six findings from `/wholesale-ecommerce` and `/private-label`, **all six in
`components/pages/ServicePage.tsx`, which drives all ten service pages.** That is the leverage —
each fix is written once and lands ten times. Fixing any of them per-page is the mistake.

- **A · The hero has no visual slot on any service page.** Single column, `max-w-[18ch]` H1,
  roughly half the fold empty above 1440px. Ships as a type-and-token "at a glance" panel built
  from fields that already exist in `ServicePageData`; the tier-2 diagram replaces it later. Not a
  placeholder — content that stands alone and gets upgraded.
- **B · The mobile catalogue artefact responds by showing everything** — five rows × eight fields
  is ~35 label/value lines. The fix is editorial: the artefact's argument is the *status* column,
  everything else is texture. Three rows, three fields, rest behind a disclosure, and a caption
  that says the point instead of making the reader infer it.
- **C · "What … actually involves" is 298–337 words in one column with no structural break** on
  every one of the ten pages. Do not cut it — it is load-bearing for the informational SERP and
  GEO extraction. Break it with subheads, wider spacing and the page's second visual.
- **D · The `sequence` artefact goes horizontal scroll-snap below 900px**, as the owner suggested.
- **E · Every Build page dead-ends, and this one is worth the most.** `/private-label` is a launch
  page with no expression of what follows. The link exists but sits in `related` styled
  identically to a sibling service — a sibling link and a next-step are not the same thing.
  **Build → Grow → Operate is the spine of the whole company** and no service page expresses it as
  a progression; ten pages each present themselves as a terminus. New `nextStep` block, and the
  next-engine entry comes *out* of `related` so it is not offered twice at different weights.
- **F ·** All new `ServicePageData` fields optional so the other nine build before their copy lands.

**A, B and D need nothing from me — ship those first.** C and E need copy I am writing now:
subheads matched to the existing paragraph breaks on all ten pages, and `nextStep` copy for each.

---

## 4 · PROMPT_11_ABOUT_SHIPS.md — small, and it is only parked by one commit

`/about` is listed as parked pending role, prior employer and LinkedIn. That was true until
`f42d764`, which landed after your push and removed it — those are now **optional fields that
render only when present**, the founder paragraph is drafted and shippable, and the content file
has been rewritten with both ⚠️ blocks gone.

`/about` is now the only page in the manifest with finished content and no route. The ticket is
short and the content is written.

**Correctly still parked:** `/documents` (owner-deferred), the homepage CONTRACTS row,
photographs, and the `Person` JSON-LD node — a `Person` with no `sameAs` is an assertion with
nothing to resolve to.

---

## 5 · `/insights` — the audit side owes you content, not a ticket

Nothing to build until articles exist, and writing them is my job, not yours. Four are specified
in the keyword map's §7 objection cluster — the account-ownership question, the automation
question, the fee-model comparison, and the true-cost piece — and the map's own finding is that
these will out-traffic all ten service pages combined, because the informational SERPs are the
ones a new domain can actually enter.

**I am writing these next.** They will land in `docs/content/insights/` with a ticket. Do not
build `/insights` with placeholder cards in the meantime — §A.19's rule stands: four cards linking
to nothing is worse than removing the section, and a dead "Read article →" is the first broken
promise a careful visitor finds.

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

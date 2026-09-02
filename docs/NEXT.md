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

Baseline moved twice while this was being written. **`b3c78be` shipped step 6 — all ten
service pages are live from `content/services/*.ts`.** Prompt 7 landed at `f7fef9c`. Two of the
four tickets in the previous version of this file are done.

**Four tickets are open, and two of them are new.**

---

## 1 · PROMPT_9_FEES_BOOKACALL_WALMART.md — first, and section A is the reason

Owner cleared the fee mechanic on 2 Sep. Figures are specified in
`docs/content/fees-and-pricing.md`; the ticket is `docs/PROMPT_9_FEES_BOOKACALL_WALMART.md`.

**Why this is first, ahead of schema and share cards.** Three sentences are live in production
right now and stop being true the moment a $500 monthly minimum exists. Verified against the
tree at `b3c78be`:

```
app/how-we-work/page.tsx:198   "There is no monthly retainer, and no fee calculated on the..."
app/how-we-work/page.tsx:203   "No pricing figures are published while engagements are..."
components/home/PricingBand.tsx:19   "...isn't there, neither is our share of it."
```

A false claim in the fee section — the one place a sceptical buyer reads hardest, and the one
place this business is asking to be trusted — is worth more damage than anything else in the
queue. **Section A of the ticket is those three retractions and nothing else. It can ship on its
own** if the tables need longer.

It also unblocks the `→ /how-we-work#fees` link that all ten now-live service pages end their fee
section with. Ten pages currently point at a placeholder.

Three things ride along: the homepage `CtaSection` becomes bookable (env-var'd, with a `/contact`
fallback so an unset scheduler cannot ship a dead button), Walmart is named on `/private-label`,
and `FEE_RULES` is replaced.

**Read `docs/content/fees-and-pricing.md` before the ticket.** It carries the reasoning the
figures depend on — the line between a price list and an earnings claim, why publishing beats
gating on this specific SERP, and the two things easy to get wrong: `$14,999` never renders
alone, and the worked example's "arbitrary round numbers" label must sit in the same rendered
block as the numbers.

### One thing step 6 did not pick up

`content/services/private-label.ts` has **zero** occurrences of "Walmart";
`wholesale-ecommerce.ts` has six. The private-label content file was patched after step 6 was
already transcribing, so §D of the ticket is a re-transcription of five specific fields, not new
authoring. `docs/content/private-label.md` is current.

---

## 2 · PROMPT_10_GEOGRAPHIC_SCOPE.md — new, and §A is a correctness bug

Owner confirmed the market on 2 Sep: **clients in the US, UK, Middle East and EU; selling on US
and UK marketplaces.** The site was built against a narrower reading and two of the findings are
bugs rather than copy.

**§A — the realised-margin formula has no tax term.** On a US-only book that is a no-op, because
marketplace-facilitator laws mean US sales tax never reaches the seller's settlement. On Amazon UK
it is not: Amazon remits proceeds **including VAT** and the seller owes it to HMRC, so taking 30%
of settlement total overcharges by `30% × 20/120` = **5% of gross sales**. On a £40,000/month
account that is £2,000 a month of the client's money, and it surfaces in the first VAT quarter, in
front of the client's accountant, on the one page whose whole argument is that the arithmetic can
be checked. Corrected formula is in `docs/content/fees-and-pricing.md`.

**§B — "Amazon and Walmart" is a US-only sentence and it is in 16 files**, including the hero, the
FAQ, `layout.tsx` and `llms.txt`. Walmart has no UK operation. The canonical replacement is
*"Amazon in the US and UK, and Walmart in the US"* — and the ticket is explicit that this is not a
find-and-replace, because the obvious careless output ("Amazon UK and Walmart UK") is a checkably
false claim about a marketplace, which is worse than the vague sentence it replaces.

**§C/§D** — zero occurrences of `UK`, `Europe` or `GDPR` anywhere in the tree, while the site is
now deliberately marketed to both. §C is four insertions, not a localisation project, and
explicitly rules out `hreflang`. §D is the privacy and consent work that GDPR Art. 3(2) triggers
once EU targeting is intentional.

Ordered after PROMPT_9 only because §A edits the same fee mechanic. If PROMPT_9 slips, §B and §C
are independent and can go first.

---

## 3 · PROMPT_8_SHARE_CARDS_GEO_A11Y.md

Nine findings. Now larger than it was, because it applies to thirteen live routes rather than
five.

**B1 is the largest visual gap on the site and it has not been looked at.** Every page sets
`twitter:card = summary_large_image` and has no `og:image` and no `twitter:image`. That is worse
than omitting the tags: every platform is told to expect a large image and renders a text stub.
Founder-led LinkedIn distribution is the marketing plan, and this is the asset it runs on.

It is also the answer to "the site needs visuals" — one visual, thirteen times, generated from
type and existing tokens with no photography. The spec is in the prompt.

**B2:** `/llms.txt` — **check this before working it.** `app/llms.txt/route.ts` now exists in the
tree, so step 6 appears to have shipped it. If so, B2 is done and what remains is auditing its
channel list against PROMPT_10 §B rather than building it. §N requires it. The robots.txt is genuinely well done — every AI
crawler explicitly allowed, sitemap declared — so this is the missing companion, not a
correction.

**B3** touches the homepage and `/how-we-work` only: five H2s are a heading straight into a grid
with no prose between. §27 requires each section to stand alone. The service pages already do
this, so it is bringing two pages up to the existing standard.

---

## 4 · PROMPT_6_SCHEMA_AND_METADATA.md

There is **no JSON-LD anywhere on the site**. §M specifies the graph and §N depends on it.

This was scheduled last so the Service schema could cover all ten pages in one pass. **That
condition is now met** — step 6 shipped them — so the only thing still holding it back is that
`/#organization` cannot carry `legalName` or registration details until the entity blocker
clears. Ship it without those and add them in a one-line follow-up; do not wait.

Corrected titles and descriptions for every page are in the `docs/content/` files.

---

## Chroma — ruled, you were right

Answered in the updated `PROMPT_5_INNER_PAGES.md`; pull it. Short version: the 0.030 floor was
calibrated on the homepage, which measures 29.1% Petrol and 9.6% Bone. The service page is
14.9% Petrol and 28.0% Bone — the spine cannot reach 0.030 without two more dark sections,
which breaks alternation. **Corrected service-page target: ≥ 0.018. Current 0.0193 passes.**

One change, and it is a consistency fix rather than decoration: the homepage renders "Proof
before promises" on Petrol while the service page renders its proof section on Bone. Move it to
Petrol. Adjacency holds. Chroma goes to roughly 0.022 as a side effect — do not chase further.

That criterion being wrong was mine, and it is the third time this session a number validated
in one context has been applied to another. The rule now in the ticket: **any number in a spec
applies only to the surface it was measured on.**

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

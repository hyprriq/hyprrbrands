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


Baseline moved twice while this was being written. **`b3c78be` shipped step 6 — all ten
service pages are live from `content/services/*.ts`.** Prompt 7 landed at `f7fef9c`. Two of the
four tickets in the previous version of this file are done.

**Three tickets are open, and one of them is new.**

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

## 2 · PROMPT_8_SHARE_CARDS_GEO_A11Y.md

Nine findings. Now larger than it was, because it applies to thirteen live routes rather than
five.

**B1 is the largest visual gap on the site and it has not been looked at.** Every page sets
`twitter:card = summary_large_image` and has no `og:image` and no `twitter:image`. That is worse
than omitting the tags: every platform is told to expect a large image and renders a text stub.
Founder-led LinkedIn distribution is the marketing plan, and this is the asset it runs on.

It is also the answer to "the site needs visuals" — one visual, thirteen times, generated from
type and existing tokens with no photography. The spec is in the prompt.

**B2:** `/llms.txt` is 404 and §N requires it. The robots.txt is genuinely well done — every AI
crawler explicitly allowed, sitemap declared — so this is the missing companion, not a
correction.

**B3** touches the homepage and `/how-we-work` only: five H2s are a heading straight into a grid
with no prose between. §27 requires each section to stand alone. The service pages already do
this, so it is bringing two pages up to the existing standard.

---

## 3 · PROMPT_6_SCHEMA_AND_METADATA.md

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

## Still blocked on the owner — not dev work

Two of the five cleared on 2 Sep. Three remain, and they are narrower than they were.

| # | Blocker | Status |
|---|---|---|
| 1 | **The fee mechanic** | **CLEARED.** Figures in `docs/content/fees-and-pricing.md`, ticket is PROMPT_9. |
| 2 | **Walmart on private label** | **CLEARED.** Content patched; PROMPT_9 §D. |
| 3 | **Registered entity — state and file number** | **Still open.** Name resolved: legal entity *Hyprr Retail LLC*, trading as *Hyprr Brands*. State and file number outstanding, so §M's `/#organization` node cannot carry them and PROMPT_6 ships without `legalName` / registration. |
| 4 | **One real person** | **Half open.** Name given: Gautam Naidu. Still needed: role title, one verifiable prior, and a live LinkedIn URL for `sameAs`. An unlinked name is not an E-E-A-T signal — §M wants a `Person` node that resolves to something. |
| 5 | **One real ungated document** | **Deferred by the owner** pending first clients. See the note below — the deferral may be removable. |

**On the document deferral.** The blocker was read as "we have no client results to show." The
artefact §O actually asks for is the **blank monthly reporting template** — the structure, the
field names, the reconciliation columns — which needs zero clients because it contains no client
data. It is the strongest single trust asset available at this stage precisely because it is
empty: it shows what will be reported before there is anything to report.

If it stays deferred, **`/documents` comes out of the nav rather than shipping as a
"coming soon" page.** A trust route that promises and then stalls is worse than a route that
does not exist — and `CtaSection` step 03 currently promises sample documents, which is why
PROMPT_9 §B has a fallback for it.

`/about` and `/insights` stay unshipped until 3 and 4 land. That is still correct.

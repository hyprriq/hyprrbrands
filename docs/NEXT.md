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


Baseline confirmed against `2c071ef`: thirteen routes live, zero dead links, contrast clean at
both viewports. The manifest is doing its job — every anomaly below is content, metadata or
markup, none is structural.

**Five tickets are open.** **The order matters more than the contents**, because two of them
multiply by page count if the eight remaining service pages land first.

**New on 2 Sep: PROMPT_9 — the fee mechanic is unblocked.** It moves to position 2 for one
reason: it removes three *false statements* that are live in production right now, and until it
lands, every service page's fee section links to a placeholder. It is not a feature ticket. See
below.

---

## 1 · PROMPT_7_SITE_AUDIT_FIXES.md — do this first, it is small

Naming, URL-paths-as-visible-text, unlinked cards, footer scope, and a path leaking into
anchor text.

**Why first, and it is the only reason:** every one of the five multiplies. The service label
appears in the chip, the footer, the hub card and the manifest — fixing that in two pages costs
minutes and in ten pages costs an afternoon. Same for the URL-in-card-corner, which is in every
service card and every related-services block.

Rationale for the naming call specifically, since it changes a §D string: `private label brand
building agency` was tested and returns white-label reseller agencies, personal-branding
studios and a map pack of design studios. It is a measured rejected keyword, not merely unused,
and nothing in the page's H1, sixty-word answer or any H2 is about brand building. The service
name becomes "Private label". The H1 stays long and descriptive — that is correct.

---

## 2 · PROMPT_9_FEES_BOOKACALL_WALMART.md — the retractions are the urgent half

Owner resolved the fee mechanic on 2 Sep. Figures are specified in
`docs/content/fees-and-pricing.md`; the ticket is `docs/PROMPT_9_FEES_BOOKACALL_WALMART.md`.

**Why this jumps ahead of step 6.** Three sentences currently live on the site stop being true
the moment a $500 monthly minimum exists — "There is no monthly retainer", "If the margin isn't
there, neither is our share of it", and "No pricing figures are published while engagements are
individually scoped". A false claim on the one section a sceptical buyer reads hardest is worth
more damage than eight unbuilt pages. **Section A of the ticket is the retractions and it can
ship on its own** if the tables need longer.

It also unblocks the `→ /how-we-work#fees` link that every one of the twelve written service
pages ends its fee section with. Step 6 lands those pages; landing them into a placeholder
wastes the link.

Three other things ride along: the homepage `CtaSection` becomes bookable (env-var'd, with a
`/contact` fallback so an unset scheduler cannot ship a dead button), Walmart is named
explicitly on `/private-label`, and `FEE_RULES` is replaced.

**Read `docs/content/fees-and-pricing.md` before the ticket.** It carries the reasoning for
publishing figures at all, the FTC line between a price list and an earnings claim, and the two
constraints that are easy to get wrong: `$14,999` never renders alone, and the worked example's
"arbitrary round numbers" label must sit in the same block as the numbers.

---

## 3 · Step 6 — GREENLIT. Run it.

The gate is cleared. Two things before you start:

**Content is written — do not author it.** `docs/content/` holds finished content for all ten
service pages plus the hubs, `/true-cost`, `/about`, `/contact` and legal. Start at
`docs/content/README.md`. Field names already match the design's `F.<family>` objects, so a
data file is transcription. This also replaces the ~700 words of placeholder content on
`/private-label` — swap those strings for the real ones.

**Reading convention:** in those files, a line of the form `→ /some-path` is a *link
instruction*, not copy. The anchor text is the human phrase before the arrow. `Full fee
mechanic → /how-we-work#fees` currently renders the path inside the anchor on
`/private-label`; that is B5 in prompt 7 and it will recur eight times if the convention is not
read this way.

Your proposed scoping — `content/services/` plus the three GAP 2 pages — is right and does not
collide with prompt 7 if 7 lands first.

---

## 4 · PROMPT_8_SHARE_CARDS_GEO_A11Y.md — parallel with step 6, different files

Nine findings, none touching `content/services/`.

**B1 is the largest visual gap on the site and it has not been looked at.** Every page sets
`twitter:card = summary_large_image` and has no `og:image` and no `twitter:image`. That is worse
than omitting the tags: every platform is told to expect a large image and renders a text stub.
Founder-led LinkedIn distribution is the marketing plan, and this is the asset it runs on.

It is also the answer to "the site needs visuals" — one visual, thirteen times, generated from
type and existing tokens with no photography. The spec is in the prompt.

**B2:** `/llms.txt` is 404 and §N requires it. Your robots.txt is genuinely well done — every
AI crawler explicitly allowed, sitemap declared — so this is the missing companion, not a
correction.

**B3** touches the homepage and `/how-we-work` only: five H2s are a heading straight into a grid
with no prose between. §27 requires each section to stand alone. The service pages already do
this, so it is bringing two pages up to the existing standard.

---

## 5 · PROMPT_6_SCHEMA_AND_METADATA.md — last, deliberately

There is **no JSON-LD anywhere on the site**. §M specifies the graph and §N depends on it.

Scheduled last only so the Service schema covers all ten pages in one pass rather than two now
and eight later. If step 6 slips, do prompt 6 first — it is not blocked by anything.

Corrected titles and descriptions for every page are in the `docs/content/` files; four meta
descriptions are currently over length and four hub titles are under 30 characters.

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

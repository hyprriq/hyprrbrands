# Full site review — 2 Sep 2026

**Purpose: stop the churn.** Findings have been arriving one at a time and turning straight into
tickets, which is how the pricing went in and came back out within a day. This is one pass over
all 22 routes — content, links, metadata — so the remediation can be planned once and executed
once.

**Nothing here becomes a ticket until this document is read.** The proposed sequence is at the
bottom.

Method: three independent read-only audits of the shipped tree — content inventory from the
prerendered HTML, link graph from `href`/`related`/`hubUrl` resolved against `lib/site-map.ts`,
metadata compared against `docs/content/*.md` and `Hyprr_Keyword_Map_v2.md`.

---

## Two errors of mine, first

**1 · Every character count in my content files is wrong.** `/wholesale-ecommerce` is annotated
"Title (58)" and is 50. "Meta (154)" is 150. `/operate` "Meta (146)" is 131. `/true-cost`
"Meta (150)" is 132. Only `/contact`'s is right. I wrote "written to §L limits" as an assertion and
never computed it — the same failure as the checks tables that claimed "banned phrases clean"
without running the grep, which the dev caught last week. **Every count in `docs/content/` needs
recomputing before it is trusted again**, and the annotation should carry the computed number or
no number.

**2 · `PROMPT_10 §B` contradicted its own Rule 3, and shipped.** Rule 3 says geography enters the
body, *not* the head terms — then §B's own examples pushed "Amazon US & UK and Walmart US" into
three meta descriptions, taking `/wholesale-ecommerce` to 161 and `/marketplace-management` to 161,
both over the 158 limit. The dev implemented what I wrote. The rule was right and my examples broke
it.

---

## Severity 1 — things that are actively wrong

**1 · `/about` is an orphan.** Zero inbound body links. Reachable only through the header and
footer. It is 300 words — 4.9× thinner than the median service page — names one person, shows no
photograph, links no profile, and its meta promises "company facts you can verify" while the page
carries no facts block. This is the trust page for a business whose entire pitch is that the people
are checkable, and it shipped yesterday as the weakest page on the site.

**2 · `/ecommerce-operations` and `/operate` are competing.** Metas are 71% similar and share a
clause verbatim — *"a written path for when something goes wrong"*. Both open on the same
enumeration. The hub's H1, *"Keep the machine running every day"*, is the service page's own answer
sentence. The keyword map rated this collision **Critical** and prescribed merging the service page
into the hub; the narrowing half shipped and the merge did not, so both routes still target the
operations-desk phrase. `/ecommerce-operations` also has the fewest inbound links of any service
page (2).

**3 · `HubPage.tsx` renders a heading it does not deliver.** The section is literally titled
*"How Build connects to Grow and Operate"* and contains **zero hub-to-hub links**. `/build` has no
forward link at all; `/grow`'s points backwards to `/shopify-dtc#growth`; `/operate`'s points to its
own service page. A heading that makes a promise the markup does not keep is the same class of
defect as a false sentence.

**4 · The three-stage model is prose everywhere and a link almost nowhere.** Of 20 `related` edges
across the ten service pages, **4 express the forward progression** — 3 Build→Grow and 1
Grow→Operate. Ten are lateral, four run backwards. `/ecommerce-growth` and `/ppc-paid-media` never
link to an Operate page. This is `PROMPT_13 §E` and the audit quantifies it: the spine of the
company is expressed in 20% of the edges that could carry it.

**5 · Three meta descriptions are over 158** — `/how-we-work` 175, `/wholesale-ecommerce` 161,
`/marketplace-management` 161. Cause is my error #2 above.

---

## Severity 2 — structural gaps

**6 · The four legal pages are orphans and dead ends.** `/terms`, `/accessibility`,
`/earnings-claims` have zero inbound body links and zero outbound. `components/LegalPage.tsx`
renders no links at all — not even a breadcrumb home. `/earnings-claims` matters more than the
other three: it is the page the whole no-figures position rests on, and nothing points at it.

**7 · Dead code carrying broken links.** `components/home/TeamSection.tsx` and
`InsightsSection.tsx` exist, are never imported, and contain hrefs to `/team` and four
`/insights/*` paths that are not routes. Nothing ships broken today. They are landmines for whoever
imports them next.

**8 · `/how-we-work` is the equity sink** — 16 inbound body links, 2 outbound. Along with
`/contact` (17) and `/` (16) it absorbs 45% of all internal edges.

**9 · Six of ten service pages render their artefact diagram with no prose.** `artefactNote` is set
on 4/10. This is exactly the "needs visual + content alignment" observation from the production
review, and it has a name and a field.

**10 · The content is bimodal with nothing in between.** Ten service pages at 1,471–2,144 words;
everything else at ≤300 except `/` (2,624) and `/how-we-work` (1,372). `/contact` has **zero H2s**.
`/true-cost` has one H2 covering ten explained inputs.

**11 · `"publishing soon"` renders four times on every service page** — the `isLive()`-guarded
`/documents` links degrading to text. Ten pages × four = forty instances of the site telling a
visitor something is missing.

---

## Severity 3 — quality, not correctness

**12 · FAQ answers run short of their own spec.** Average 67–89 words against the 100–150 the type
comment specifies; `/marketplace-growth` is worst at 67 average, shortest 51. Phase descriptions
average 30–65 against the same 100–150. Short answers are weaker for AI passage extraction, which
is the specific thing the GEO work optimises for.

**13 · Optional-field coverage is uneven** — `managedLead` on 1/10, `fitNote` 3/10, and
`heroObjection`, `comparison`, `whenToHire`, `toggle`, `extraSection` on 1/10 each. Some of that is
correct (they are page-specific), some is nine pages missing something the tenth proved works.

**14 · Four legal pages have no title/meta spec at all** in `docs/content/`, and all four are under
the length floors — titles 28–37, metas 96–109.

**15 · Two H1 collisions:** `/marketplace-management` vs `/wholesale-ecommerce` at 78% similar (both
"Amazon & Walmart … management"), `/marketplace-growth` vs `/marketplace-management` titles at 72%.
Both were known collisions in the keyword map and both survived the build.

---

## What is genuinely good, and should not be touched

- **No rejected-keyword leaks.** All four measured-and-rejected phrases score zero in every shipped
  title, meta and H1. The one occurrence anywhere is an accurate code comment.
- **The eight-H2 spine is identical across all ten service pages**, enforced by `SERVICE_SECTIONS`.
- **Every live manifest slug has a matching route**, every anchor resolves, and no live page ships
  a broken link.
- **No service page is more than one click from the homepage** — `ThreeEngines` links all thirteen.
- **The hubs are deliberately thin** (215–263 words) and the component says why: *"it links down,
  it does not compete."* That is a correct decision, not a gap.

---

## Proposed remediation — one sequence, three batches

The point of batching is that each batch is internally consistent, so nothing added in one is
removed by the next.

**Batch A · Correctness.** Findings 1–5, 7. `/about` gets inbound links and a company-facts block.
The `/ecommerce-operations` ÷ `/operate` collision is resolved one way or the other — merge, or
differentiate deliberately with new copy for both. `HubPage` gets its hub-to-hub links. The
`nextStep` progression lands. Three metas come back under 158. Dead components are deleted.

**Batch B · Content depth.** Findings 9, 10, 12, 13. `artefactNote` for the six pages missing it.
FAQ answers and phases brought to spec. `/contact` gets headings. `/true-cost` gets structure. All
character counts recomputed.

**Batch C · The visual and mobile pass.** `PROMPT_13` A/B/D, plus the tier-2 diagrams. **This is the
one batch that is safe to start now**, because mobile density, scroll-snap and the hero panel do
not depend on any decision above.

**Two decisions needed before Batch A is written:**
1. `/ecommerce-operations` vs `/operate` — merge, or differentiate? The keyword map says merge. That
   removes a 1,564-word page, so it is the owner's call, not mine.
2. The `/documents` "publishing soon" text — leave it, or suppress the label entirely until a
   document exists? Forty instances of it currently render.

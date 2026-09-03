# PROMPT 20 — Verify against production, then fix

A read of the **live** site after `5b6ff82` found nine problems. **All five gates passed and CI is
green, so these are things gates cannot see.**

**Read this first: some of these may be CDN cache artefacts, not code.** The review saw **two
different footers live at once** — `/scale` and `/where-we-work` serve a footer containing Scale,
Where we work and Documents under Resources; `/`, `/private-label` and `/wholesale-ecommerce` serve
one without them. That is a stale-edge signature.

**So step 1 is verification, not fixing.** Confirm or refute each item against a fresh build and
against production with cache busted. **Fix only what survives.** Report anything that turns out to
be cache — that is a deploy problem worth knowing about, not a code bug.

---

## The systemic finding

The five gates check links resolve, the manifest matches, metas are in range, copy is clean and
images are sound. **Not one of them checks that a component actually rendered on the page it was
specified for.** Every item below is that class of miss.

**Add a sixth gate — `check-features.mjs`** — asserting presence in the served HTML:

| Feature | Must appear on |
|---|---|
| Chooser | `/wholesale-ecommerce` · `/private-label` · `/shopify-dtc` · `/build` |
| Money box / worked example | all ten service pages' fee section |
| `nextStep` block | all ten service pages |
| Archetype hero figure | all ten, and **no two archetypes sharing one** |
| No `publishing soon` where the target route is live | site-wide |

**A ticket that says "put X on pages A, B, C, D" needs a gate that says X is on A, B, C and D.**
That is the lesson from this pass and it is worth more than the nine fixes.

---

## The nine, in priority order

### 1 · `/scale`, `/documents` and `/where-we-work` are orphaned
Zero links from the homepage. Absent from the footer served on `/`, `/private-label` and
`/wholesale-ecommerce`; present on `/scale` and `/where-we-work`. **Two footers live at once.**

`check-links` passed because it crawls the built output, where the footer is correct. Production is
serving something else. **Investigate the deploy or the cache before anything else — if the pages
cannot be reached, nothing else on this list matters.**

### 2 · The chooser is on the wrong pages
**Not present on `/private-label` or `/wholesale-ecommerce`.** Only on `/shopify-dtc` and `/build`.

`PROMPT_17 §1` named four pages and called it the highest-impact item on the site. It is missing
from the two pages where an undecided buyer actually lands — which is the entire reason it exists.

### 3 · Both service pages still say the document room is empty
`/private-label` and `/wholesale-ecommerce` both render: *"Sample agreement · Reporting example ·
Operating model — publishing soon — the document room opens with the first real document."*

**`/documents` is live with two real samples.** The page contradicts itself against another live
page, and it buries the strongest trust asset the site now has.

### 4 · The money box is on the wrong pages too
Only `/shopify-dtc` and `/how-we-work` carry the worked example. `/private-label`'s fee section is a
bare *"Full fee mechanic →"*; wholesale defers with *"…is on the how-we-work page."*

`PROMPT_17 §3` specified it on every service page fee section. The client review's finding was that
**no price is the loudest scam signal on the page** — and the two pages that finding was about are
the two still without it.

### 5 · Wholesale and private label are still section-for-section identical
Both render, in the same order: Involves → What you get → Who this is for → First 90 days → What
stays yours → What's fully managed → Evidence not claims → How we're paid → Questions → What comes
next → Related services → Related insight. Same jump-to chips, same at-a-glance grid, same CTA
markers.

**Only the illustrations differ.** `/shopify-dtc` *is* properly differentiated — so archetype C
landed and A and B did not. **The whole point of `PROMPT_18` was that these two pages read as the
same product twice.**

### 6 · `/build` contradicts itself on one screen
H2 **"Four ways to build"** immediately followed by H2 **"Three ways to build — which one is
yours?"** — website development is the orphaned fourth. Reconcile the count or include it.

### 7 · `/private-label` renders content twice
The 90-day sequence (Days 0–30 / 31–60 / 61–90) appears **twice, verbatim**, as does "At a glance".
Likely a responsive duplicate shipping both variants to the DOM. Doubling body copy is a real
duplicate-content and weight problem, not cosmetic.

### 8 · The chain breaks in two places
- **Build never reaches Scale.** Every Build page's `nextStep` stops at Grow. `/private-label` links
  `Marketplace growth →` and `The Grow engine →` and never mentions `/scale`.
- **`/scale` has no `nextStep` block.** Its forward routing is one clause mid-paragraph, and it
  closes on the generic CTA pair.

Chain should be Build → Grow → Scale → Operate. **`/grow` → `/scale` works; the two ends do not.**

### 9 · The fee taper reads as a contradiction
`/shopify-dtc` and `/how-we-work` say *"30% through month 12, 25% in months 13 to 24, 20% from month
25."* The homepage and wholesale say *"The split is 30% at every band."*

Both are true — "band" is a fee tier, the taper is time — but **that distinction is never drawn on
any page.** A buyer comparing two pages reads a contradiction. Add one clause wherever "at every
band" appears: *"…at every band, and it steps down over time."*

---

## Also worth fixing while in there

`/scale` (~650 words) and `/where-we-work` (~450) read as stubs. `/scale` has no at-a-glance, no
fees, no FAQ, no next step; it closes on a bare *"Tell us what is binding."* `/where-we-work` gives
Singapore and APAC two sentences and claims *"Middle East — A growing share of clients"* on a site
whose homepage says *"We are new. We are not going to borrow someone else's results."* **Cut that
claim now**; the rest is queued for the content-depth pass.

---

## Acceptance

| # | Check |
|---|---|
| 1 | One footer site-wide; `/scale`, `/documents`, `/where-we-work` reachable from the homepage and every footer |
| 2 | `check-features.mjs` exists, is gate six, and fails when a specified component is absent from a specified route |
| 3 | Chooser present on all four named pages |
| 4 | Money box present in all ten service fee sections |
| 5 | Zero `publishing soon` strings pointing at a live route |
| 6 | `/wholesale-ecommerce` and `/private-label` differ in section order or composition, not only in illustration |
| 7 | `/build` states one consistent count |
| 8 | No section renders twice in the served HTML on any route |
| 9 | `nextStep` on all ten, chain Build → Grow → Scale → Operate holds by clicking |
| 10 | The "at every band" clause disambiguated everywhere it appears |
| 11 | The Middle East client claim removed |
| 12 | All six gates green |

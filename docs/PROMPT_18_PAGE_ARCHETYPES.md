# PROMPT 18 — Page archetypes: differentiate the models, keep the system

**Ships together with `PROMPT_17`.** Both refactor `components/pages/ServicePage.tsx`; touching it
twice is waste. Read both, then do 18's structural work and 17's content work in one pass.

---

## The decision

**Owner: "every business model is separate, so every page may need a separate design."**

**Ruling: right diagnosis, and the fix is four archetypes rather than ten bespoke designs.**

Two independent pieces of evidence say the pages are too alike:

1. **`CLIENT_REVIEW_NEW_SELLER.md`** — a first-time buyer could not choose between wholesale and
   private label, and the reason given was structural: *"the two pages are near-identical — same
   headings, same first 90 days, same what stays yours, same 30% — which makes them feel like the
   same product twice and makes the choice feel arbitrary. Two doors, no sign on either."*
2. **The site review** — `/marketplace-management` and `/wholesale-ecommerce` H1s measured 78%
   similar, two other pairs at 72%. Sameness is measurable, not a feeling.

**Why not ten bespoke designs.** Ten layouts is ten times the maintenance, ten places for contrast
and chroma to drift, and it throws away the eight-H2 spine that is doing real work — it is what
makes the pages crawlable, comparable, and consistent for a returning reader. **The problem is not
that the pages share a system. It is that the system has one shape and the business has four.**

**Why archetypes.** A page whose *structure* mirrors its business model teaches the model before a
word is read. A loop looks like a loop. A gated project looks like a sequence with stops. That is
better design, better comprehension, and better differentiation for search — four distinct content
shapes cannibalise each other far less than one shape repeated ten times.

---

## The four archetypes

| Archetype | Pages | The shape of the business | What changes |
|---|---|---|---|
| **A · Trading loop** | `/wholesale-ecommerce` | Money goes out, stock comes back, repeat. Capital velocity is the whole game. | Loop as the hero visual · catalogue artefact stays central · a **capital cycle** section replacing the linear phases · "what we refuse to buy" gets its own band |
| **B · Gated project** | `/private-label` | A linear sequence with stops, most candidates die early, then it becomes an operation. | Vertical gated sequence as the spine · verdict artefact central · **the fork at launch is the page's climax**, not a footnote · rejection rate stated early |
| **C · Build then run** | `/shopify-dtc` · `/ecommerce-website-development` | A project that either ends or becomes an operation. Two different buyers. | **Two explicit paths from the hero** — launching, or already running · layered stack visual · a handover/continue fork |
| **D · Cadence desk** | `/ecommerce-operations` · `/marketplace-management` · `/shopify-management` | Nothing is a project. A calendar that runs whether or not anything is wrong. | **Calendar grid as the hero visual** — daily / weekly / monthly · report artefact central · "when something goes wrong" gets its own band · no "first 90 days" — replaced by "a normal week" |
| **E · Constraint and lever** | `/ecommerce-growth` · `/marketplace-growth` · `/ppc-paid-media` | Find the binding constraint, release it, measure, repeat. | Constraint diagram as hero · **"when we recommend stopping"** as a named section · levers artefact · explicit hand-off to Operate |

Five archetypes, ten pages. **Implement as a `layout` discriminator on `ServicePageData`**, defaulting
to the current arrangement so nothing breaks mid-migration.

---

## What stays identical across all five — do not break these

- **The eight H2s exist on every page**, in the same order, with the same `id`s. Archetypes change
  *what fills a section and what it looks like*, never the heading spine. The CI checks, the
  anchors, the internal links and the JSON-LD all depend on it.
- Hero shape · breadcrumb · section nav · at-a-glance panel · `nextStep` · related grid · FAQ ·
  fee section.
- The 13-ground alternation and the chroma floors.
- The rule card in Petrol — **it is what pays for the light diagrams**, per the measured sequencing.

**The rule: archetypes differentiate the middle of the page. The frame stays one system.**

---

## Sequencing with PROMPT_17

One refactor of `ServicePage.tsx`, in this order:

1. **17 §1 — the chooser.** Highest-impact item on the site and it is archetype-independent. Ship it
   first, alone if you like.
2. **18 — the `layout` discriminator and the five archetypes**, defaulting to current behaviour.
3. **17 §2, §3, §5 — jargon glosses, the money box, the second CTA** into the new structure.
4. **17 §6 — visuals** to 5–6 per page. Archetype A–E each name their hero visual above.
5. **17 §8 — the connected stack**, `/shopify-dtc` two paths (which is archetype C), `/private-label`
   after-launch section (archetype B's fork).

`/scale` (17 §7) and `/where-we-work` (17 §9) are new pages and are independent of this refactor —
build them whenever.

---

## Acceptance

| # | Check |
|---|---|
| 1 | All ten service pages still emit the same eight H2s with the same ids and order |
| 2 | `layout` is optional; a page with it unset renders exactly as before |
| 3 | Each archetype's hero visual differs from the other four — no two archetypes share a hero visual type |
| 4 | Wholesale and private label no longer read as the same shape: the chooser is present on both, and their middle sections differ in order and visual |
| 5 | All four CI gates still exit 0 |
| 6 | Contrast AA at 375/768/1024/1440 · no horizontal scroll at 375 · chroma ≥ 0.018 service pages, ≥ 0.030 homepage |
| 7 | 5–6 visuals per service page, each with descriptive `alt`, word-based filename, dimensions set, lazy below the fold |

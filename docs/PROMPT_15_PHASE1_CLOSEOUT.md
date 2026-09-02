# PROMPT 15 — Phase 1 close-out

**The last ticket of phase 1.** Everything below ships together. When acceptance passes, the
website is done and the next phase is content and measurement.

**Supersedes and absorbs `PROMPT_13` and `PROMPT_14`.** Work from the order below, not from those
separately — both remain in the repo as the detail behind steps 3 and 4.

Referenced files, all final:
- `docs/PHASE1_METADATA_FINAL.md` — every title and meta, counted
- `docs/PHASE1_VISUAL_MAP.md` — five visual slots per page, assigned
- `docs/content/service-page-copy-drop.md` — `managedLead` ×9, `artefactNote` ×6, `nextStep` ×10, subheads ×10, `related` fixes, `/about` facts
- `docs/PROMPT_14_BATCH_A.md` — detail for step 4
- `docs/PROMPT_13_SERVICE_PAGE_VISUALS_AND_MOBILE.md` — detail for steps 3 and 6, **items A, B and D only**

---

## Step 1 · Links — get them working, then prove it

All verified against the tree:

| Finding | Fix |
|---|---|
| `/about` has **zero inbound body links** | Three contextual links: `/how-we-work` operating-cycle prose, `/contact`'s "what happens next", homepage ownership section |
| `/terms`, `/accessibility`, `/earnings-claims` have **zero inbound and zero outbound** | `LegalPage.tsx` renders **no `href` at all** — add breadcrumb home and a cross-link line to the other three |
| `/earnings-claims` carries the whole no-figures position and nothing points at it | Link from `/how-we-work#fees`, in the sentence saying no earnings figures appear on the site |
| `/ecommerce-operations` has an **empty `related: []`** — the only page with none | Fill per copy drop §5 |
| Forward progression in **4 of 20** `related` edges | `nextStep` ×10 + `related` corrections → **14 of 20** |
| `HubPage.tsx` renders *"How Build connects to Grow and Operate"* with **zero hub-to-hub links** | Each hub links the other two in body copy. `/operate`'s `connectsLink` points at its own service page — remove it |
| `TeamSection.tsx` and `InsightsSection.tsx` never imported, containing hrefs to `/team` and four `/insights/*` non-routes | **Delete both** |

**Prove it — this is step 1's real deliverable.** Add `scripts/check-links.mjs`, wired into CI:

1. Crawl every route in `lib/site-map.ts` from the built output
2. Fail on any `href` that is not a live route or a resolvable `#anchor`
3. Fail on any route with zero inbound body links (header/footer excluded)
4. Fail on any route with zero outbound body links
5. Print inbound/outbound counts per route

**A link checker that runs is worth more than any list I can write, because it catches the next one
too.**

---

## Step 2 · Verify every page is in the manifest and reachable

`lib/site-map.ts` is the source of truth. Make the build fail if not:

- every live manifest slug has a route directory **and** every route directory is in the manifest — both directions
- every live route is in `app/sitemap.ts` and `/llms.txt`
- every live route reachable from the homepage in ≤2 clicks through body links
- `/documents` and `/insights` **absent** — no route, manifest entry, sitemap entry or nav item
- `"publishing soon"` still renders (owner decision) but **at most once per section** — it currently renders four times per service page, forty across the site

---

## Step 3 · Inner pages designed in full

`PROMPT_13` **A, B and D only**. §C and §E are superseded — take them from step 4.

- **A · Hero at-a-glance panel.** Every service page hero is one column with `max-w-[18ch]` on the H1 and nothing right of it — roughly half the fold empty at 1440. Panel built from existing fields: marketplaces · what you hold · three phase names · engine rule on top.
- **B · Mobile artefact density.** The stacked fallback shows everything: five rows × eight fields ≈ 35 label/value lines. Three rows, three fields, rest behind `<details>`, plus a caption. **The artefact's argument is the status column; the rest is texture.**
- **D · Sequence artefact → horizontal scroll-snap below 900px**, `scroll-snap-stop: always`, no arrow buttons.

---

## Step 4 · Content and SEO metadata, in order

**4a · Metadata — `PHASE1_METADATA_FINAL.md`.** All 22 routes. Titles 30–60, metas 120–158, every
string counted with `len()`, zero banned phrases, zero rejected-keyword leaks, all three known
collisions broken (78%→55%, 72%→38%, 71%→33%).

**Apply in four places or they disagree with each other:** `content/services/*.ts` · `HubPage.tsx`
`HUBS` · `metadata` exports in `app/**/page.tsx` and `layout.tsx` · `LegalPage.tsx`'s `description`
**prop**, which is separate from its metadata export. **Update `openGraph` and `twitter`
descriptions to match**, or the share card and the SERP say different things.

**Ignore every character count annotated in `docs/content/*.md`** — they are wrong; I asserted them
without computing them. `PHASE1_METADATA_FINAL.md` is the only counted source.

**4b · Body content — `docs/content/service-page-copy-drop.md`.** `managedLead` ×9 (nine H2s
currently render straight into a bare grid — the §27 defect that fails AI passage extraction),
`artefactNote` ×6 (six diagrams with no prose), `nextStep` ×10, `involvesSubheads` ×10 (each row
quotes the paragraph it heads — verify one before transcribing the rest), the `related` corrections,
and the `/about` facts block with its omit-when-empty rule.

**4c · The rest of `PROMPT_14`:** delete the dead `feesTable` field (0/10 usages, pricing is out) ·
`/contact` gets real H2s — it currently has **one heading, the H1**, on the highest-intent page on
the site · `/true-cost` gets three H2s for its ten inputs · `/operate` gets its rewritten H1 and
meta so it stops competing with `/ecommerce-operations`.

---

## Step 5 · Visuals — five per inner page

`PHASE1_VISUAL_MAP.md`. Five slots, all type-and-token: no photography, no stock, no generated
imagery, no new asset pipeline.

Slots 2 and 5 already exist as content and are **upgraded**; only 1, 3 and 4 are net-new — which is
why five per page is a smaller job than it sounds. Slot 3's diagram is assigned per page. Slot 4's
sentence already exists in that page's copy: **the rule card promotes an existing sentence, it does
not add a claim.**

Inline SVG, real `<text>` never outlined paths, legible at 375, AA both viewports,
`prefers-reduced-motion` respected, one caption each.

---

## Step 6 · Mobile

`PROMPT_13` B and D above, plus:

- hero panel moves below the answer and above the CTA — never above the H1
- every diagram legible at 375, or converted to a scroll-snap strip
- no page-body horizontal scroll at 375 anywhere
- reveal-on-scroll stays at the existing 120–180ms; **no new motion**

---

## Step 8 · Logo and header sizing

**Measured:** the wordmark renders at `type-body` — **17px** — in a header with `min-h-[72px]`,
under a full-width announcement bar at `py-2.5`. A 17px wordmark inside 72px of chrome reads as
undersized and unbranded. That is what the owner spotted.

**`Hyprr_Brands_Guidelines.pdf` §02 Identity, verbatim:**
> *"Keep it simple, spacious and unmistakable. Clear space: at least the height of the 'h' on every
> side. Use the wordmark in Ink, White, or Violet only. Do not outline, shadow, distort, or use
> gradients inside the logo."*

**Fixes:**

1. **Wordmark to `clamp(20px, 1.6vw, 24px)`**, keeping `font-display`, extrabold "hyprr" and normal `text-muted` "brands". It is currently below body-text scale, which no wordmark should be.
2. **Enforce clear space in code** — padding around the anchor of at least the cap height of the "h", roughly `0.72em`. It currently has none of its own.
3. **Header `min-h` to `clamp(64px, 5vw, 80px)`** so mark-to-chrome ratio holds at both ends.
4. **Announcement bar** — ~40px above the header on every page. Make it dismissible with the state remembered, or drop to `py-1.5`. **Do not remove it without asking.**
5. **No outline, shadow, distortion or gradient** on the mark, per the guidelines — confirm none has crept in via a hover state.

**Flagged, not actioned:** the guidelines permit the wordmark in **Violet** and there is no violet
token — closest is `--color-link-on-field: #D6CDFF`. Not adding a brand token on my own authority.
Owner question below.

---

## Step 9 · Definition of done

Phase 1 is complete when all of this passes in one run **on production**:

| # | Check |
|---|---|
| 1 | `scripts/check-links.mjs` exits 0 — zero broken hrefs, zero orphans, zero dead ends |
| 2 | Manifest ↔ routes verified both directions; every live route in sitemap and `llms.txt` |
| 3 | Every route ≤2 clicks from home through body links |
| 4 | All 22 titles 30–60 and metas 120–158, **verified by counting the shipped strings**; OG/Twitter match |
| 5 | Banned-phrase gate returns only the three approved negations |
| 6 | `grep -rnE '\$[0-9]'` returns only the worked example's labelled arbitrary arithmetic |
| 7 | Zero unqualified `Amazon and Walmart`; zero `Walmart UK` in any casing |
| 8 | Five visuals on every inner page; every diagram has a caption and real `<text>` |
| 9 | No H2 anywhere renders straight into a grid with no prose |
| 10 | Contrast AA at 375 / 768 / 1024 / 1440 on every route — `failCount` 0 |
| 11 | No page-body horizontal scroll at 375 on any route |
| 12 | JSON-LD validates on all 22 routes |
| 13 | Chroma ≥ 0.018 every service page, ≥ 0.030 homepage — **report the numbers, do not chase them** |
| 14 | `prefers-reduced-motion` honoured by every new visual |
| 15 | Both dead components deleted, no reference remaining |

**On "no more errors."** Steps 1, 2 and 9 make that structural rather than a promise: a link
checker, a two-way manifest check and a counted metadata gate all running in CI, so the next
mistake fails a build instead of reaching production. **That is the only version of "no errors"
that holds.**

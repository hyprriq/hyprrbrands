# PROMPT 16 — what remains of phase 1

**Reconciled against `afd57a1`.** That commit closed most of `PROMPT_15`. This ticket is only what
is left, so nothing already shipped gets touched twice.

**`PROMPT_15` is now superseded by this file.** Its steps 1 (links), 3 (13 A/B/D), 4b and 4c are
done. Four things remain.

---

## First — two things from your report

**1 · The `#reporting` anchor was my error, and thank you for catching it.** I wrote ten `nextStep`
links pointing at `/how-we-work#reporting` without verifying the anchor existed. You added
`id="reporting"` to the four-step sequence, which is the right target. Recorded here so the audit
side owns it: **that is the third time this session I asserted something without checking it** —
character counts, six subheads, and now an anchor. The fix is in step 4 of this ticket: an anchor
check goes into CI alongside the link checker, so the next one fails a build.

**2 · "Shopify store management" → "Shopify management" was correct.** The one-string rule beats my
copy. The manifest §D string wins every time; if a drop of mine disagrees with the manifest, the
manifest is right and the drop is a typo.

**3 · Chroma 0.0226 → 0.0214 on wholesale.** Above floor, correctly reported and not chased — and
it is the reason for the sequencing rule in step 2 below. Read that before starting the visuals.

---

## Step 1 · The 22 keyword metas — **not yet shipped**

`docs/PHASE1_METADATA_FINAL.md`.

The seven metas that landed in `afd57a1` were `PROMPT_14 §C` — **length corrections**, bringing
over-length strings under 158. They were never keyword work. `PHASE1_METADATA_FINAL.md` supersedes
them and covers all 22 routes.

**Confirmed still live in the tree, and each is a collision this replaces:**

```
wholesale-ecommerce      "Amazon Wholesale Management Service | Hyprr Brands"
marketplace-management   "Amazon & Walmart Seller Account Management | You Own It"
ppc-paid-media           "Amazon & Walmart PPC Management | Judged on Margin"
```

`marketplace-management` and `wholesale-ecommerce` still share "Amazon … Management" at **78%
similarity**. The new strings take that to **55%**, `marketplace-growth` vs
`marketplace-management` from 72% to **38%**, and `/ecommerce-operations` vs `/operate` metas from
71% to **33%**.

**Every string in that file was counted with `len()`.** Titles 30–60, metas 120–158, all 22
compliant, banned-phrase grep zero, rejected-keyword leaks zero.

**Four places, or they disagree:** `content/services/*.ts` · `HubPage.tsx` `HUBS` · `metadata`
exports in `app/**/page.tsx` and `layout.tsx` · `LegalPage.tsx`'s `description` **prop**, separate
from its metadata export. **Move `openGraph` and `twitter` with them.**

---

## Step 2 · Visual slots 3, 4 and 5

`docs/PHASE1_VISUAL_MAP.md`. Slot 1 shipped in `afd57a1`. Slot 2 now has its `artefactNote` on all
ten. Three remain.

### Sequencing rule — this is what your chroma number tells us

The hero panel is white and it cost **0.0012** of chroma on wholesale. **Slots 3 and 5 are also
white and Bone.** Three more light surfaces on the same page would plausibly take 0.0214 toward the
0.018 floor and could cross it.

**Slot 4 is the full-bleed Petrol band.** So:

> **Build slot 4 in the same commit as slot 3, or before it. Never slot 3 and 5 alone.**

That is not a decoration argument — it is the alternation the whole ground sequence depends on, and
it is cheaper to sequence correctly than to fix after measuring.

- **Slot 3 · mechanism diagram**, inside `involves` after ¶2. One per page, assigned in the map.
- **Slot 4 · the rule card**, full-bleed Petrol, one sentence in display type, ≤15 words. **Every
  sentence already exists in that page's copy** — the card promotes it, it does not add a claim.
- **Slot 5 · phase timeline**, upgrading "First 90 days" from three text columns to a horizontal
  timeline. Also fixes a measured gap: phase copy averages 30–65 words against a 100–150 spec, and
  the structure is what makes longer copy readable.

**All three:** inline SVG, real `<text>` never outlined paths, legible at 375 or converted to a
scroll-snap strip, AA at both viewports, `prefers-reduced-motion` honoured, one caption each.

**Homepage and hubs:** homepage gets slot 4 once, plus the margin-calculation diagram in the pricing
strip where `PROMPT_12` removed the tables. Hubs get one diagram each — the three-engine
relationship with the current hub highlighted.

---

## Step 3 · Logo and header

**Confirmed unchanged in the tree:** `min-h-[72px]` on the header, wordmark at `type-body` = **17px**.

**`Hyprr_Brands_Guidelines.pdf` §02, verbatim:** *"Keep it simple, spacious and unmistakable. Clear
space: at least the height of the 'h' on every side. Use the wordmark in Ink, White, or Violet only.
Do not outline, shadow, distort, or use gradients inside the logo."*

1. Wordmark to **`clamp(20px, 1.6vw, 24px)`** — it is currently below body-text scale, which no
   wordmark should be.
2. **Enforce clear space in code** — padding around the anchor of at least the "h" cap height,
   ≈`0.72em`. It has none of its own today.
3. Header `min-h` → **`clamp(64px, 5vw, 80px)`** so mark-to-chrome holds at both ends.
4. **Announcement bar** — ~40px above the header on every page. Dismissible with the state
   remembered, or `py-1.5`. **Do not remove it without asking.**
5. Confirm no outline, shadow, distortion or gradient has crept in via a hover state.

---

## Step 4 · The CI gates — this is the "no more errors" step

Nothing here is analysis. Four scripts that fail a build.

**`scripts/check-links.mjs`**
1. Crawl every route in `lib/site-map.ts` from the built output
2. Fail on any `href` that is not a live route **or a resolvable `#anchor` on the target page** —
   this is the check that would have caught `#reporting`
3. Fail on any route with zero inbound body links (header/footer excluded)
4. Fail on any route with zero outbound body links
5. Print inbound/outbound counts

**`scripts/check-manifest.mjs`** — every live manifest slug has a route directory **and** every
route directory is in the manifest. Both directions. Plus: every live route in `app/sitemap.ts` and
`/llms.txt`; `/documents` and `/insights` absent from all four.

**`scripts/check-meta.mjs`** — read the served HTML for all 22 routes, `len()` every title and meta,
fail outside 30–60 / 120–158, and fail if `openGraph`/`twitter` descriptions disagree with the meta.
**No annotation is trusted; the shipped string is measured.**

**`scripts/check-copy.mjs`** — the existing banned-phrase grep, plus `\$[0-9]` outside the worked
example, plus unqualified `Amazon and Walmart`, plus `Walmart UK` in any casing.

Wire all four into CI and into the acceptance below.

---

## Acceptance — phase 1 is done when this passes on production

| # | Check |
|---|---|
| 1 | All four scripts exit 0 in CI |
| 2 | All 22 titles 30–60 and metas 120–158, **measured from the served HTML**; OG/Twitter match |
| 3 | The three collisions measured at or below 55% / 38% / 33% |
| 4 | Five visuals render on every inner page; every diagram has a caption and real `<text>` |
| 5 | Slot 4 present wherever slot 3 is — no page with new light visuals and no Petrol band |
| 6 | Chroma ≥ 0.018 every service page, ≥ 0.030 homepage — **report, do not chase** |
| 7 | Wordmark ≥ 20px with clear space enforced; no outline, shadow, distortion or gradient |
| 8 | Contrast AA at 375 / 768 / 1024 / 1440 on every route — `failCount` 0 |
| 9 | No page-body horizontal scroll at 375 anywhere |
| 10 | JSON-LD validates on all 22 routes |
| 11 | `prefers-reduced-motion` honoured by every new visual |

---

## Not in phase 1, and correctly so

- **`/insights`** — the objection-cluster articles need keyword measurement no connected data
  source can currently provide. Writing them on assumption is exactly the churn we stopped.
- **`/documents`** — owner-deferred.
- **`/walmart-marketplace-management`** — blocked on the same measurement.
- **Character-count recompute in `docs/content/*.md`** — audit side. Superseded in practice by
  `PHASE1_METADATA_FINAL.md` plus `check-meta.mjs`, which measures rather than trusts. The
  annotations get corrected or deleted; **the gate is what makes it not matter.**

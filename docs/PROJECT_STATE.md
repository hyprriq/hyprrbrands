# Hyprr Brands — project state

**Written 3 Sep 2026 at commit `a7feaf0`.** This is the cold-start file. Read it first in a new
chat and you will not need the old transcript. It says what this is, what is built, what was
decided and must not be re-argued, what is queued, what is blocked, what is being spent, and what
is needed from the owner.

---

## 1 · What this is

**hyprrbrands.com** — an ecommerce operations agency. Amazon and Walmart wholesale, private label,
Shopify/DTC. Positioning is premium operator, not freelancer and not generic digital agency.

- **Owner:** Gautam Naidu. Entity: Hyprr Retail LLC, under the Hyprr X platform.
- **Market:** clients in US, UK, Middle East and EU, selling on **US and UK marketplaces**.
  Walmart is US-only — this is a live source of copy bugs, see §9.
- **Stack:** Next.js App Router, deployed on Vercel. Repo at `D:\Projects\hyprrbrands`.
- **Domain age:** four years. Not new. What was on it before is unknown and matters — see §10.

**Commercial reality, stated plainly so nothing is planned on a fantasy:** zero clients, zero
clicks, no case studies, no testimonials, no photography, no published pricing. Every decision
below is made in that context. The owner's standing instruction is **build the site first,
compliance in the back seat** — do not raise compliance objections about fabricated figures,
banned phrasing or claim substantiation unless asked. That is a deliberate, informed call.

---

## 2 · How the two lanes work — the protocol

There are two sessions working on this repo and they must not collide.

| Lane | Writes to | Never touches |
|---|---|---|
| **Audit (this lane, Cowork)** | `docs/` only — specs, tickets, content drops | `app/`, `components/`, `lib/` |
| **Dev (separate session)** | the code | `docs/` tickets |

- **`docs/NEXT.md` is the queue and the only handoff channel.** It is rewritten whenever the order
  changes, so it is always current. Open it at the start of a session and at the end of a ticket.
- **Commit by path, never `git add -A`.** Both lanes swept each other's files once already.
- **Findings carry their rationale and are data, not orders.** If a finding is wrong, say so. Five
  specification errors were caught this way and each was worth more than the instruction it
  corrected. See §11.
- Content lands in `docs/content/`. Tickets land in `docs/PROMPT_*.md`.

---

## 3 · What is built and live

**25 routes**, all gates green in CI, production verified at `752e848`.

**Services (10 routes + 1 anchor):** `/wholesale-ecommerce` · `/private-label` · `/shopify-dtc`
(+`#growth`) · `/ecommerce-website-development` · `/ecommerce-growth` · `/marketplace-growth` ·
`/ppc-paid-media` · `/ecommerce-operations` · `/marketplace-management` · `/shopify-management`

**Hubs:** `/build` · `/grow` · `/operate` — the chain is Build → Grow → Scale → Operate.

**Company:** `/about` · `/how-we-work` · `/contact` · `/true-cost` · `/scale` · `/where-we-work` ·
`/documents` · `/insights` *(planned, not live)*

**Legal:** `/privacy` · `/terms` · `/accessibility` · `/earnings-claims`

Notable: **`/documents` is live with real content** — a sample verdict sheet ending in *Reject* and
a sample landed-cost model ending in *Do not buy*. That is currently the strongest proof asset on
the site. **Five page archetypes** with five distinct hero figures. The service chooser on four
pages.

`lib/site-map.ts` is the **single source of truth** — nav, footer, sitemap and hub card grids all
render from it. Shipping a page is a one-word `status` change.

---

## 4 · Design system

Tokens live in `app/globals.css`.

| Role | Hex | Note |
|---|---|---|
| Field (dark ground) | `#0A4E5C` Petrol | the signature colour |
| Field raised | `#0E5E6E` | panels on the field |
| Build accent | `#FFC84A` Citrus | |
| Grow accent | `#B8F34A` Lime | |
| Operate accent | `#45D8C0` Aqua | |
| Bone | `#EDEBE6` | rest band, 1.19 from white |
| Ink | `#17171a` | headings + dark field |
| Link | `#6947FF` violet | links and focus **only**, never a field |
| On-field mute | `#b6d6dc` | 6.04:1 on field, 4.79:1 on raised |

`type-label` = 12px/600. Every accent has a `-field` and `-band` tint with measured contrast.

---

## 5 · The six CI gates — `npm run check`

This is why the project stopped shipping errors. Each gate exists because a specific class of
mistake got through once.

| Gate | Catches |
|---|---|
| `check-manifest` | site-map and routes out of sync, **in both directions** |
| `check-links` | dead links **and unresolved anchors** — added after `#reporting` didn't exist |
| `check-meta` | titles/metas over length, measured on the **served HTML**, not the source |
| `check-copy` | banned phrases, contradictions |
| `check-images` | missing/weak `alt`, missing dimensions, over 200KB at 1280 |
| `check-features` | structural features present — uses `data-feature` attributes, so **rewording copy can no longer fail a structural check** |

Also `scripts/measure-chroma.js` — area-weighted OKLCH chroma. Converts sRGB → linear → OKLab,
`C = hypot(a,b)`, weighted by rendered element area, images force-decoded and averaged from a 32×32
canvas. **Floors: ≥0.018 service pages, ≥0.030 homepage.** Service pages currently sit
0.0193–0.0235, which is tight.

`npm run images` runs the pipeline: `public/images/_inbox/<page>__<subject>-<variant>` → sharp →
640/1280/1920 WebP, dimensions written to `lib/image-manifest.json` (currently `{}`, empty).

---

## 6 · The visual direction — current, and it changed on 3 Sep

**Read `docs/VISUAL_DIRECTION_v2.md`. It supersedes `docs/VISUAL_EXTRACTION_PLAN.md`.**

### What was withdrawn

The audit lane had ruled out AI-generated imagery, ruled out 3D, and planned to build the visual
system by extracting objects from the owner's uploaded files and photographing the rest. **The
owner rejected all of it, correctly.** Three rulings are formally withdrawn:

- *"No AI imagery"* — wrong test. The brand guideline says don't **look** AI-generated, which is
  about tells (garbled text, plastic faces, random palette), not about the tool.
- *"Real photographs only"* — there is nothing to photograph. A stock desk shot is the freelancer
  signal, not the premium one.
- *"No 3D"* — the entire ecommerce-agency category renders. Not rendering reads as *couldn't
  afford it*.

The owner sent five reference images (isometric ecommerce scene · people with floating UI panels ·
rounded window frames · device on a styled desk · phone pair with product). **They are the category
convention and they are the target.** They were sent as *direction*, not as literal scenes to copy.

### What replaced it — three layers, and the model never writes a word

```
Layer 3 · BAND      CSS. Petrol / Bone / accent ground. The scene overlaps its edge.
Layer 2 · PANELS    DOM. Translucent cards, figures, labels, connectors. Real text.
Layer 1 · SCENE     Generated image. Environment and objects. No readable text in the pixels.
```

Rationale, in commercial terms: a competitor can buy the same stock pack but not our overlay ·
figures change in one line instead of one re-render · the hero stays indexable instead of being an
opaque PNG · a saturated scene on a Petrol band **raises** chroma where a photo on white drained it
· garbled text, the single biggest tell of a machine-made image, becomes impossible.

**Four archetypes, a closed set:** `operation` (isometric business machine, no people) · `working`
(people at a desk with empty floating panels — **faces turned or cropped, never front-on
photoreal**) · `product` (object or device on a styled surface, screens are blank planes) ·
`object` (cut-out crossing a band edge, DOM spec card on the corner).

Every prompt carries a fixed style contract with the hex codes above and a hard negative:
`no text, no letters, no numbers, no logos`. A scene that comes back with lettering is
**regenerated, not retouched.** Per-page assignments are in `VISUAL_DIRECTION_v2 §4`.

**The uploads are not dead** — they become composite inputs. Real product renders drop into
archetype-C scenes as the object on the surface.

---

## 7 · Document index

| File | What it is |
|---|---|
| `NEXT.md` | **the queue.** Always current. Start here. |
| `PROJECT_STATE.md` | this file |
| `VISUAL_DIRECTION_v2.md` | **current visual strategy.** Archetypes, style contract, page map, production route |
| `PROMPT_21_VISUAL_SYSTEM.md` | **queued ticket** — `<Scene>`, `<Panel>` and the six overlay components |
| `content/phase-copy-depth.md` | **written, not yet sent** — 16 expanded phase bodies, mean 42→89 words |
| `PHASE2_PLAN.md` | the phase 2 page plan |
| `PHASE1_METADATA_FINAL.md` | all 22 titles/metas, every count computed with `len()` |
| `CLIENT_REVIEW_NEW_SELLER.md` | persona review — the proof problem, read this before writing copy |
| `Hyprr_Keyword_Map_v2.md` | keyword clusters and rejected terms |
| `PROMPT_10_GEOGRAPHIC_SCOPE.md` | the VAT bug and the Walmart-UK problem |
| `PROMPT_19_IMAGE_PIPELINE.md` | the image pipeline and the chroma warning |
| `CHROMA_METRIC_CORRECTION.md` | what the chroma instrument actually measures |
| `VISUAL_EXTRACTION_PLAN.md` | **superseded.** Kept only for its source-file manifest |
| `content/fees-and-pricing.md` | the fee mechanic. Superseded on the site (pricing removed) but the formula record |
| `ARCHIVE.md` | closed tickets |

---

## 8 · The queue — what happens next

**1 · `PROMPT_21_VISUAL_SYSTEM.md` + `content/phase-copy-depth.md` — send to dev together.**
Not sent yet. **Nothing in it is blocked on images existing** — it is the container layer. Build
`<Scene>` and `<Panel>` empty; scenes drop in behind them one page at a time.

**2 · Content-depth pass (audit lane).** Phase copy at 30–65 words against a 100–150 spec · the
chooser's capital lines · `/scale` and `/where-we-work` bodies · archetype-specific copy.

**3 · Style-frame generation** — four images, on the owner's go. See §9.

---

## 9 · Blocked, and what is being spent

### Blocked on a keyword data source
`/walmart-marketplace-management` · `/amazon-agency` · a six-article set. All specified in
`PHASE2_PLAN.md`. **Bing Webmaster Tools and Google Keyword Planner are both free** and either
unblocks this. Nothing else is stopping these pages.

### Blocked on the owner — image generation spend
- **Kling is connected on the free tier with 14 credits.** Enough for four style frames and nothing
  more.
- **Model:** `gemini-3-pro-image` (Nano Banana Pro) for the four style frames via `text_to_image`,
  then `image_to_image` with the approved frame passed as reference for every subsequent scene.
  Reference-locking is the mechanism that makes 21 scenes look like one world; 21 independent
  prompts produce 21 different worlds.
- **Realistic volume:** 21 scenes plus rejects and re-rolls ≈ **50–80 generations.** 14 credits does
  not cover it. **This is a spend decision and it is the owner's.** Nothing beyond the four style
  frames gets generated without a go.
- **Owner action:** drop the five reference images into `public/images/_refs/` — they exist only in
  chat and cannot be passed to the generator as references.

### Open copy bug
`PROMPT_10_GEOGRAPHIC_SCOPE.md` — **16 files say "Amazon and Walmart" where Walmart has no UK
operation.** Also a VAT arithmetic error in the fee model (30% × 20/120 = 5% of gross overcharged
on UK accounts). Pricing has since been removed from the site, so the second is dormant, not fixed.

### Known content weakness, unfixed by design
`CLIENT_REVIEW_NEW_SELLER.md`: the site has **zero proof of any kind** — no client, no case study,
no named person with a track record. "Buy box" is used decisively and never defined. With pricing
removed, **the absence of any price is now the loudest scam signal.** These are accepted for now.

---

## 10 · Needed from the owner — none of it blocks the queue

| | Unblocks |
|---|---|
| **The five reference images into `public/images/_refs/`** | style-frame generation |
| **A go / no-go on Kling spend** | scenes 5–21 |
| **What was on hyprrbrands.com for its four prior years?** Bing Webmaster shows referring domains free | how aggressive the phase 2 plan can be. Age is not authority; links are |
| Entity state and file number | `legalName` in `/#organization`, the `/where-we-work` entity line |
| Role, one prior role, LinkedIn URL | the `/about` card, `Person` schema, the proof problem |
| **Founder video** — 90s "who runs this", 2–3 min "how the fee works" | the densest proof asset available. Beats any amount of copy |
| A keyword data source | two unmeasured clusters and every new page |

---

## 11 · Standing rules, each earned by a mistake

These are not style preferences. Each one exists because something went wrong.

1. **A production read is not evidence until `x-vercel-cache` is checked and the rollout window has
   passed.** Vercel edge serves mixed generations per route for minutes after a push. Five of nine
   "live findings" were cache artifacts — the dev caught the window live, 90 seconds after their own
   push, `/documents` on the new build and `/build` on the old.
2. **Any number applies only to the surface it was measured on.** Same class as rule 1.
3. **Never assert a character count without computing it.** All 22 metas were wrong once because
   they were asserted from a model of the string instead of `len()`.
4. **Write specs against the actual page, not a model of it.** Six of twenty subheads didn't
   describe their own paragraphs. All 20 were rewritten against quoted paragraph openings.
5. **Push back on a wrong finding.** "Build never reaches Scale" was filed as a defect. It was not
   one — Build hands to Grow. The dev was right.
6. **Make correctness structural, not promised.** Six CI gates rather than "I'll be careful."
7. **The uploads have no provenance to trade on.** They are from the owner's Fiverr profile and
   other projects. No brand name, watermark, footer or attribution from those files reaches this
   site in any form, and the copy written around them is out of scope.

---

## 12 · Decided — do not re-open without a reason

- `/ecommerce-operations` and `/operate` stay **differentiated**, not merged. The merge
  recommendation was half of a two-part fix whose other half already shipped.
- **Five archetypes, not ten bespoke page designs.** H1 similarity was measured at 78% and 72%, and
  the new-seller persona couldn't choose between wholesale and PL *because* the pages were
  structurally identical.
- **Hidden keywords are out.** Cloaking, manual-action risk on a four-year-old domain. The
  legitimate route is the automation-explainer SERP, currently unclaimed by any premium agency.
- **Published pricing is off the site.**
- **Walmart is in scope for both wholesale and private label** — US only.
- **Compliance is in the back seat** until there are clients. Owner's call, deliberate.

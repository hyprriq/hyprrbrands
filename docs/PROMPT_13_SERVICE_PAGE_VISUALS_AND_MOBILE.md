# PROMPT 13 — Service page visuals, mobile density, and the engine progression

Owner review of `/wholesale-ecommerce` and `/private-label` on production, 2 Sep. Six findings.

**All six are in `components/pages/ServicePage.tsx`, which drives all ten service pages.** That is
the leverage: every fix below is written once and lands on ten pages. Do not fix these per-page.

---

## A · The hero has no visual slot at all — biggest gap on the site

`ServicePage.tsx:598` — the hero is a single column with `max-w-[18ch]` on the H1 and nothing to
its right. On a 1440px viewport that leaves roughly half the fold empty. It is not a layout bug;
there is simply no slot, on any of the ten pages.

**Ship now — an "at a glance" panel in the right column.** Type and tokens only, no image, no new
asset, no delivery-date risk. It fills the fold with content that is genuinely useful above it:

> **Marketplaces** — Amazon US & UK · Walmart US
> **You hold** — the account · the capital · the inventory · every purchase decision
> **First 90 days** — the three phase names, from `data.phases`
> **Engine** — Build / Grow / Operate, with the engine rule as a thin top border

Every field already exists in `ServicePageData`. White card, `--color-line` border, radius 28, the
engine colour as a 3px top rule — the one place engine colour is allowed outside the field tint.

**Replace it later with the tier-2 diagram** for that page (`docs/VISUALS_AND_VIDEO.md`). The panel
is not a placeholder for a missing asset — it is content that stands on its own and gets upgraded.
That distinction matters: reserving an empty ratio for an undelivered image is the mistake that
already cost the homepage team section.

**Mobile:** the panel moves below the answer paragraph and above the CTA. It does not stack above
the H1.

---

## B · The catalogue artefact on mobile — reduce the argument, not the responsiveness

The table is already handled: `hidden min-[900px]:block` with a stacked-card fallback at
`ServicePage.tsx:90`. **The problem is not that it fails to respond — it is that it responds by
showing everything.** Five rows × eight fields becomes roughly thirty-five label/value lines, and
the reader scrolls through a spreadsheet to reach the next section.

**The fix is editorial, not CSS.** The artefact's argument is the **status column** — that some
lines are approved, one is marginal, one is refused. Every other column is texture supporting it.

On mobile:
- **Three rows, not five.** Keep one "Approved by client", the "Review", and the "Do not buy" —
  the three that carry the argument. The two extra approvals add nothing a reader has not seen.
- **Three fields per card, not seven** — SKU, margin, status. The rest collapse behind a
  `<details>` "Full line" disclosure, closed by default.
- Add a caption under the artefact on mobile only: *"Three lines from a live catalogue view. Not
  every line gets bought."* Say the point rather than making the reader infer it from a table.

Same treatment for the other `kind` variants where a mobile stack exceeds ~12 lines.

---

## C · "What ... actually involves" — 300 to 337 words with no structural break

Measured across all ten pages: 298–337 words in 5–7 paragraphs, in one `max-w-[62ch]` column with
no subheads and no visual. On a phone that is an unbroken scroll. The owner's word for it —
"documentary" — is the right diagnosis.

**Do not cut the words.** They are load-bearing for the informational SERP and for GEO passage
extraction. **Break them instead:**

- Add an optional `involvesSubheads?: string[]` to `ServicePageData` — a short H3 before
  paragraphs 3 and 5, so the section reads as three movements rather than one block. Three or four
  words each, sentence case, no keyword stuffing.
- Set the prose column to `max-w-[58ch]` and raise paragraph spacing from `gap-3.5` to `gap-5`.
- **Put the page's second visual here** — this is where the tier-2 diagram belongs on pages that
  have one. On the desktop two-column layout it sits right; on mobile it goes after the second
  paragraph, which is the point where attention drops.
- First paragraph stays `font-medium` as the lead. That is working.

I will supply the subheads for all ten pages in `docs/content/`. **Do not write them** — they have
to match the paragraph breaks that are already there.

---

## D · The `sequence` artefact on mobile — scroll-stop, as the owner suggested

"From product to brand · gated sequence" runs long vertically on a phone. The suggestion is right
and it is also the standard pattern for this: **horizontal scroll-snap**.

```
overflow-x-auto  ·  snap-x snap-mandatory  ·  each step snap-start
each step min-w-[78vw] max-w-[320px]  ·  gap-3
```

Below 900px only; desktop keeps the vertical sequence. Add a right-edge fade so it reads as
scrollable, `scroll-snap-stop: always` so steps cannot be skipped past, and keep the step numbers
visible — they are the affordance that says how many remain. **Do not add arrow buttons**; a
snapping scroller is discoverable and arrows are one more thing to hit at 375px.

---

## E · Every Build page dead-ends. This is the one that is worth the most.

The owner's observation on `/private-label`: the page is about **launch**, and it should show that
growth and scale come next.

**The link technically exists** — `private-label.ts:168` has `Marketplace growth` in `related`. But
it sits in a flat "related services" list beside "Shopify / DTC", styled identically. A sibling
link and a next-step are not the same thing, and the site is currently saying the first when it
means the second.

**This is a site-wide gap, not a private-label one.** Build → Grow → Operate is the spine of the
whole company, it names the three hubs and the three engine colours — and no service page expresses
it as a progression. Ten pages each present themselves as a terminus.

**New block, above the related-services grid, on every service page:**

> **What comes next** *(kicker, engine colour of the NEXT engine, not this page's)*
> **H3:** Launch is the start of the operation, not the end of it.
> **Body, ~40 words:** A launched product is a business that now has to be grown and run — listings
> and advertising against margin, replenishment against sell-through, and the account health that
> keeps it selling. That work is the Grow and Operate side, and it is the same team.
> **Two links:** the named next-engine service, and the hub.

Implement as an optional `nextStep` on `ServicePageData`: `{ engine, h3, body, links[] }`. Build
pages point at Grow, Grow pages at Operate, Operate pages at the reporting/`how-we-work` loop.
**Then remove the next-engine entry from `related`** so it is not offered twice at different
weights — that is the bug this fixes.

Copy for all ten in `docs/content/`. I am writing it.

---

## F · The generalisation — this is a component pass, not a page pass

Every finding above came from looking at two pages, and every one of them is in the shared
component. **Any fix applied to `wholesale-ecommerce` or `private-label` individually is a
mistake**, and any new field added to one data file has to be optional so the other nine build
before their copy lands.

Ship A, B and D first — they are component-only and need nothing from me. C and E need the copy I
am writing; scaffold the optional fields now and the pages fill in as the content arrives.

---

## Acceptance

| # | Check |
|---|---|
| 1 | All ten service pages render the hero panel; no empty right column above 900px |
| 2 | No new `<img>`, no reserved aspect ratio, no stock or generated imagery |
| 3 | Mobile catalogue artefact ≤ 12 visible lines before the disclosure; caption present |
| 4 | Sequence artefact snaps horizontally below 900px; no horizontal scroll on the page body |
| 5 | `involves` prose ≤ 58ch, subhead field present and optional |
| 6 | `nextStep` renders on every page; the next-engine service appears once, not twice |
| 7 | New `ServicePageData` fields all optional — all ten pages build with them unset |
| 8 | Contrast AA at 375 / 768 / 1024 / 1440; no page-body horizontal scroll at 375 |
| 9 | Chroma re-measured on one service page; the hero panel adds an engine rule, so it should rise slightly — report it, do not chase it |

# PROMPT 11 — /about ships now

**Small ticket. The content is written and the blocks were removed.**

---

## Why this is here

The handover report lists `/about` as *"still parked, needs role/prior/LinkedIn for Gautam
Naidu."* That was true until `f42d764`, which landed after the push and removed it. `/about` is
the only page in the manifest with finished content and no route.

**The ruling that unparked it:** where owner data is missing, the field is **optional and
omitted** — never a placeholder, never a launch gate. `priorEmployer` and `linkedin` render only
when set. The card is correct today and complete the day either arrives.

Source content: `docs/content/about-and-legal.md`, `## /about` section. It has been rewritten
since you last read it — the two ⚠️ blocks are gone and replaced with shippable copy.

---

## What ships

**Route** `app/about/page.tsx` · manifest entry already exists at `lib/site-map.ts:185`, flip it
live · grounds White, Bone for the people grid, Petrol CTA · no engine colour, this page is not
engine-scoped.

### 1 · Hero
H1 **Who runs the operation** + the 45-word lead, both verbatim from the content file.

### 2 · Why Hyprr exists — founder point of view

**155 words, first person, in the content file. Ship it verbatim.**

It is written from positions the owner has already stated, and it is marked in the source as a
draft to be edited rather than a finished statement. **That annotation is for the owner and does
not ship.** Do not add an editor's note, a placeholder, or a "coming soon" to the page.

### 3 · People — one card, no photographs

```ts
{
  name: "Gautam Naidu",
  role: "Runs the operation",
  handles: "Client engagements end to end — what gets bought, which accounts we take on, and the call on any purchase that could put an account at risk.",
  priorEmployer: undefined,   // renders only when set
  linkedin: undefined,        // renders only when set
}
```

**Card treatment:** white surface, `--color-line` border, radius 28, **no image slot and no
reserved aspect ratio.** Reserving space for an asset with no delivery date is the mistake that
already cost the homepage team section. Identical treatment on all cards; one thin engine rule on
top only if that person genuinely owns that engine, otherwise no colour.

**The 40-word line above the grid ships too** — the one that says there is no stock photography
and no generated faces. It is doing real work on a page whose whole subject is who is accountable.

**One card only.** No placeholder names, no second card until there is a second real person.

### 4 · Operating philosophy
Three principles, verbatim from the content file.

### 5 · Schema
Organization + WebPage + BreadcrumbList, through the existing `lib/schema` module.

**No `Person` node.** §M's own rule: a `Person` node ships when there is a named person with a
live LinkedIn profile to put in `sameAs`, not before. A `Person` with no `sameAs` is an assertion
with nothing to resolve to, which is the opposite of what the node is for. Add it in one line the
day the URL arrives.

---

## What does not ship with it

- **`/documents`** — deferred. Out of nav, sitemap and manifest. Build the list from a data array
  so that when the array is empty the route and every link to it do not render, and the route, the
  nav item and the homepage CONTRACTS row all appear together the day a document is added.
- **Homepage CONTRACTS row** — stays cut under A.14's own rule.
- **Photographs** — not now, not stock, not generated. Owner decision, and it is the right one for
  a page arguing that the people are real.

---

## Acceptance

| # | Check |
|---|---|
| 1 | `/about` returns 200, is in the sitemap and reachable from the nav |
| 2 | One person card renders; no empty `priorEmployer` or `linkedin` markup, no dangling label, no placeholder text |
| 3 | No `<img>`, no reserved aspect ratio, no `Person` JSON-LD |
| 4 | The founder paragraph renders as body copy with no editorial annotation around it |
| 5 | Banned-phrase gate clean |
| 6 | Contrast AA at both viewports; no horizontal scroll at 375 |
| 7 | `/documents` still 404s and appears in no nav, sitemap or manifest |

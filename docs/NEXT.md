# Order of work — v4 rebuild

> ## Standing protocol — unchanged
>
> **This file is the queue.** Open it at the start of every session and at the end of every ticket.
> Cowork writes to `docs/`, never to `app/`, `components/` or `lib/`. Commit by path, not
> `git add -A`. Findings carry their rationale and are data, not orders.

---

## SUPERSESSION — 6 Sep 2026

The owner unfroze the dev lane with a full v4 rebuild brief. **`docs/v4/DEV_BRIEF.md` is the only
instruction document** — it supersedes every `PROMPT_*` ticket and every spec now in
`docs/ARCHIVE/`, including the previously queued `PROMPT_22_SRCSET_TRUTH.md` (the components it
patched — `Scene.tsx`, `VisualSystem.tsx` — no longer ship; the srcset lesson lives on in
`check-images`).

## STATE

Branch **`feat/v4`** (main still serves the v3 site; `v3-final` tag pushed). 25 routes → 13:
nine pages + four legal, every old URL 301s in one hop, `SITE_ORIGIN` now
`https://hyprrbrands.com`. All six gates green locally against the built output; gate changes:
`check-copy` carries the Walmart-geography rule instead of the negation count, `check-features`
asserts the v4 spec (verdicts ×5, management anchors, snippet blocks, FAQ/Service/Person JSON-LD,
one h1 per page). Old routes and v3 components live in `_archive/v3/` until the redirects are
proven live plus 30 days.

## QUEUE

1. **Owner review of `feat/v4`** — copy drafted where the brief had no strings (wholesale +
   management FAQ answers, contact/about connective copy) is flagged in the build report and needs
   owner sign-off before merge.
2. **Merge `feat/v4` → main as one swap** (DEV_BRIEF §1: do not ship pages one at a time), then
   the launch-day Search Console sequence in `docs/v4/BUILD_SHEET.md` §4.
3. **Owner-gated inputs** (unchanged, none block merge): booking URL · `RESEND_API_KEY` ·
   photograph, prior role and LinkedIn for `/about` · the six generated scenes (site reads well
   with none, by design) · the homepage video slot decision.

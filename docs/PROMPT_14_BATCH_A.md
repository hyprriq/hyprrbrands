# PROMPT 14 — Batch A: correctness, and the design-to-content gaps

**This supersedes `PROMPT_13 §C` and `§E`**, which were held. Everything else in 13 (A, B, D)
stands and can run in parallel — it touches layout, this touches data and copy.

Both gating decisions are made. Reasoning is recorded so neither gets reopened.

---

## Decision 1 · `/ecommerce-operations` vs `/operate` — **differentiate, do not merge**

I am overriding the keyword map's "merge into the `/operate` hub", and the reason is that the
recommendation has already been half-executed in a way that removed its own basis.

**The map's collision #1 was `homepage` vs `/ecommerce-operations`** — two pages competing for the
operations-desk phrase — and the prescribed fix had two halves: narrow the homepage, and move the
service page into the hub. **The homepage narrowing shipped.** The homepage no longer competes, so
the original Critical collision is resolved.

What remains is `/operate` vs `/ecommerce-operations`, which is a *different and smaller* problem,
and it is a **copy** problem rather than an architecture one. The hub's H1 is literally the service
page's own answer sentence and the two metas share a clause verbatim. Nobody decided that; it
drifted.

**Three reasons not to merge:**

1. **They serve different intents.** A hub answers *"which of these do I need?"* — comparative,
   navigational. A service page answers *"what does hiring this actually look like?"* — commercial,
   deep, converting. Both are real queries and both deserve a page.
2. **Merging destroys 1,564 words to fix a copy bug**, and folds them into a page whose own
   component comment says it *"stays under 400 words… it links down, it does not compete."* The
   merged page would be either a bad hub or a bad service page.
3. **It breaks the symmetry.** Ten service pages under three hubs is a clean architecture. Making
   Operate the one engine whose service page lives inside its hub creates an exception that every
   future decision has to route around.

### The rule that makes the separation hold

| | `/operate` (hub) | `/ecommerce-operations` (service) |
|---|---|---|
| Question answered | Which part of running it do I need? | What does hiring the desk look like? |
| Primary phrase | `operate an ecommerce business` — browsing intent | `outsourced ecommerce operations` — hiring intent |
| Length | Under 400 words. Unchanged. | Full eight-H2 spine. Unchanged. |
| Must not contain | the service page's primary phrase, in H1, title or meta | — |

**Two rewrites required:**

- **`/operate` H1** — currently *"Keep the machine running every day"*, which is the service page's
  own answer sentence. Replace with a comparative, hub-shaped heading:
  > **Operate: the work that keeps it selling**
- **`/operate` meta** — currently shares *"a written path for when something goes wrong"* verbatim
  with the service page. The hub keeps the *choice*, the service page keeps the *promise*. New:
  > `Purchasing, inventory, orders, account health and reporting. Four ways to keep an ecommerce operation running, and which one fits where you are.` **(143)**

---

## Decision 2 · "Publishing soon" — **keep it.** Owner call.

It stays. It signals the document room is coming rather than pretending it does not exist, which is
correct while there are no clients.

**One refinement, not a reversal:** it renders **four times per service page**, forty times across
the site. Where two instances fall inside the same section, render it once. Do not remove it from
any section that currently has only one. Target: **no section shows the label twice.**

---

## §A · `/about` is an orphan — fix the links and the missing facts block

Zero inbound body links. It is reachable only through header and footer, on the page carrying the
entire trust argument.

**Inbound links to add — three, all contextual, all in body copy:**
1. `/how-we-work` — from the operating-cycle prose, "who does this" → `/about`.
2. `/contact` — the "what happens next" block, "who you will be talking to" → `/about`.
3. Homepage — from the ownership or principles section.

**The missing facts block.** The page's own meta promises *"the company facts you can verify"* and
no such block exists. Add it — this is §M's verification strip, and it is the cheapest trust asset
on the site because every line is third-party resolvable:

> **Company facts** — Legal entity: Hyprr Retail LLC · Trading as: Hyprr Brands · Registered in:
> *(pending)* · Entity file number: *(pending)* · Contact: the `/contact` route

**Render only the fields that have values.** Pending fields do not render, do not show a label, and
do not reserve space. When state and file number arrive they appear with no further work. If that
leaves fewer than two facts, render the block anyway with what exists — the heading plus two true
lines beats no block on a page that promised one.

---

## §B · The progression — hubs **and** service pages, together

This is the part `PROMPT_13 §E` got wrong: it fixed the service pages and would have left the hubs
broken. Measured: **4 of 20 `related` edges express the forward model.** Ten are lateral, four run
backwards.

**B1 · `HubPage.tsx` renders a heading it does not deliver.** The section is titled *"How Build
connects to Grow and Operate"* and contains zero hub-to-hub links. Fix the component: each hub links
to the other two by name, in body copy, not as a nav row.

- `/build` → `/grow` and `/operate`
- `/grow` → `/operate` (forward, primary) and `/build` (back)
- `/operate` → `/build` and `/grow`. **Its current `connectsLink` points at its own service page —
  remove that**, it is the collision in link form.

**B2 · `nextStep` on every service page.** Optional field, `{ engine, h3, body, links[] }`, rendered
above the related-services grid, kicker in the **next** engine's colour, not the page's.

- Build pages → the named Grow service + `/grow`
- Grow pages → the named Operate service + `/operate`. **`/ecommerce-growth` and `/ppc-paid-media`
  currently never link to an Operate page at all.**
- Operate pages → `/how-we-work#reporting` and the reporting loop

**B3 · Remove the next-engine entry from `related` on every page that gains a `nextStep`.** Offering
the same destination twice at different weights is the bug being fixed, not a bonus.

Copy for all ten arrives in `docs/content/`. Scaffold the field now.

---

## §C · Metadata back within limits — **strings below are final and character-counted**

I computed every one of these. The counts in `docs/content/` were wrong and are being recomputed
separately; **use these strings, not the annotations in those files.**

| Route | New meta description | Len |
|---|---|---|
| `/how-we-work` *(was 175)* | `You decide. We execute. What happens in an engagement, who decides, what gets written down, and how we are paid — the mechanic and a worked example.` | **148** |
| `/wholesale-ecommerce` *(was 161)* | `We source, buy and operate wholesale catalogues on Amazon and Walmart. You own the account and approve every purchase. Read the operating model first.` | **150** |
| `/marketplace-management` *(was 161)* | `Day-to-day account health, compliance and execution under permissioned access in your own account. We never hold your credentials.` | **130** |
| `/privacy` *(was 96)* | `What this site collects, what the contact form is used for, how long anything is kept, and how to reach us about your data.` | **123** |
| `/terms` *(was 109)* | `The terms that apply to using this website. Engagement terms live in the written agreement each client signs, and not on this page.` | **131** |
| `/accessibility` *(was 107)* | `The accessibility standard this site is built to, what that means in practice, and how to report a problem you find on any page.` | **128** |
| `/earnings-claims` *(was 109)* | `Hyprr publishes no earnings figures and promises no results. This page is the policy behind that, in writing, and what it commits us to.` | **136** |

**Titles under 30:** `/privacy` → `Privacy Policy | Hyprr Brands Ecommerce` **(39)** ·
`/accessibility` → `Accessibility Statement | Hyprr Brands` **(38)**

**Note on the wholesale and marketplace-management metas:** these revert the geography that
`PROMPT_10 §B` inserted. That insertion contradicted `PROMPT_10`'s own Rule 3 — geography belongs in
the body, not the head terms — and pushed both past 158. **The body geography stays.** Only the meta
reverts.

---

## §D · Design-to-content gaps — the template expects content that is not there

Measured field coverage across the ten service pages:

| Field | Set on | Consequence |
|---|---|---|
| `managedLead` | **1/10** | Nine pages render H2 *"What's fully managed"* straight into a bare six-row list |
| `artefactNote` | **4/10** | Six pages render a diagram with no prose explaining it |
| `fitNote` | 3/10 | — |
| `feesTable` | **0/10** | **Dead field.** Pricing came out in PROMPT_12. Delete it from the type. |
| `heroObjection` · `comparison` · `whenToHire` · `toggle` · `extraSection` | 1/10 each | Built for one page — see below |

**D1 · `managedLead` on the nine pages missing it — this is the highest-value item in §D.** A
heading straight into a grid with no prose is precisely the §27 defect `PROMPT_8 B3` fixed on the
homepage and `/how-we-work`. It fails passage extraction for AI answers, and it reads unfinished to
a human. **Nine pages currently have it.** Copy arriving.

**D2 · `artefactNote` on the six pages missing it.** This is the owner's *"needs visual and content
alignment"* observation with a field name: the diagram is there, the sentence saying what to notice
in it is not. Copy arriving.

**D3 · Delete `feesTable` from `ServicePageData` and the renderer.** Zero usages and pricing is out.

**D4 · Leave the 1/10 fields alone.** `heroObjection`, `comparison`, `whenToHire`, `toggle` and
`extraSection` are page-specific by design and there is no evidence the other nine need them.
**Do not spread them for consistency** — that is how a template becomes a checklist.

**D5 · `/contact` has exactly one heading, the H1, and zero H2s.** "What happens next" is a `<div>`.
Promote the section headings to real H2s. It is the highest-intent page on the site and it is
structurally flat.

**D6 · `/true-cost` has one H2 for ten explained inputs**, all `<b>` labels. Group the ten into
three H2s — what you spend before launch · what you spend to launch · what you spend to keep
selling — with the existing `<b>` labels becoming H3s.

---

## §E · Legal pages — orphans **and** dead ends

`components/LegalPage.tsx` renders **zero** `href`s. Not one, not even a breadcrumb home. All four
pages are terminal.

- Add a breadcrumb (`Home / <page>`) and a short "related" line linking the other three.
- **`/earnings-claims` needs one inbound body link and it matters more than the other three** — the
  entire no-figures position rests on it and nothing on the site points at it. Link it from
  `/how-we-work#fees`, in the sentence that says no earnings figures appear on the site.

---

## §F · Delete the dead components

`components/home/TeamSection.tsx` and `components/home/InsightsSection.tsx` are never imported and
contain hrefs to `/team` and four `/insights/*` paths that are not routes. Nothing ships broken
today; they are landmines for whoever imports them next. **Delete both.** `/insights` gets built
from its content when the articles exist, not from a stale component.

---

## Acceptance

| # | Check |
|---|---|
| 1 | `/operate` H1 and meta no longer share any clause with `/ecommerce-operations`; both routes still live |
| 2 | `/about` has ≥3 inbound body links; facts block renders only populated fields, no empty labels |
| 3 | Every hub links to the other two in body copy; `/operate`'s self-referential `connectsLink` gone |
| 4 | `nextStep` renders on all ten service pages; no page offers the same destination in both `nextStep` and `related` |
| 5 | Every meta 120–158 and every title 30–60, **verified by counting the shipped strings**, not by trusting an annotation |
| 6 | `managedLead` and `artefactNote` set on all ten; no H2 renders straight into a grid |
| 7 | `feesTable` gone from the type and the renderer |
| 8 | `/contact` has real H2s; `/true-cost` has three |
| 9 | Legal pages have breadcrumbs and cross-links; `/earnings-claims` has an inbound body link |
| 10 | Both dead components deleted; no reference remains |
| 11 | "Publishing soon" appears at most once per section |
| 12 | Banned-phrase gate clean · contrast AA at 375/768/1024/1440 · no horizontal scroll at 375 |

**Structural work — §A links, §B scaffolding, §C, §D3, §D5, §D6, §E, §F — needs nothing from me.**
`managedLead` ×9, `artefactNote` ×6, `nextStep` ×10 and the `/about` facts wording are copy I am
writing now.

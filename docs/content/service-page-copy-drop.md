# Copy drop — `managedLead` · `artefactNote` · `nextStep` · `involvesSubheads`

For `PROMPT_14 §B2` and `§D1/§D2`, and `PROMPT_13 §C`. Ten service pages, four fields.
**Everything below is final copy. Transcribe, do not rewrite.**

Extra finding while writing this: **`/ecommerce-operations` has an empty `related: []`** — the only
page on the site with none. It is also the page with the fewest inbound links (2). Fixed in §5.

---

## 1 · `managedLead` — nine pages

One sentence under the H2 "What's fully managed", above the list. Fixes nine H2s that currently
render straight into a bare grid — the §27 defect `PROMPT_8 B3` fixed on the homepage.

**Each one says what the cadence means, not what the list already says.** A lead that restates the
list is worse than no lead.

| Page | `managedLead` |
|---|---|
| `/ecommerce-growth` | Growth work runs continuously rather than in campaigns, so the list below is a cadence rather than a scope. What changes month to month is which constraint is binding, not which of these we are doing. |
| `/ecommerce-operations` | These four run every working day whether or not anything is wrong, which is the point — most operational damage comes from the day nobody looked, not from the day something broke. |
| `/ecommerce-website-development` | A build is scoped and finite; everything after it is only maintained if we are also running the operation. If we are not, the work below ends cleanly at handover. |
| `/marketplace-growth` | Ranking, buy box and reviews move on their own schedules, so these are worked at different intervals rather than reviewed together once a month. The intervals are the deliverable. |
| `/marketplace-management` | This is the work that keeps an account sellable, and almost none of it is visible when it is going well. The cadence exists so that a policy change is found by us in a sweep rather than by you in a suspension. |
| `/ppc-paid-media` | Advertising is operated weekly because the things that break it — a stockout, a price change, a lost buy box — move weekly. Budgets are capped against inventory rather than against a target spend. |
| `/private-label` | A private label build is a sequence with gates, not a set of parallel tasks, so each item below has to clear before the next one starts. Nothing proceeds while the gate above it is open. |
| `/shopify-dtc` | The store is operated rather than delivered. Merchandising and conversion work continue after launch, because a storefront that is not being changed is quietly getting worse. |
| `/shopify-management` | The difference from a retainer is direction of initiative, and this list is what that looks like: work that happens because the calendar says so, not because someone raised a ticket. |

---

## 2 · `artefactNote` — six pages

One or two sentences beside the diagram, saying **what to notice in it**. The four pages that
already have this are the model: the note is not a caption, it is the argument the picture makes.

| Page | Artefact | `artefactNote` |
|---|---|---|
| `/ecommerce-growth` | `loop` | The loop has no entry point marked, deliberately. Growth work starts wherever the binding constraint is — often conversion or margin rather than traffic — and the sequence only matters once you know which one it is. |
| `/ecommerce-website-development` | `layers` | Each layer is only maintained while the operation above it is running. Open them in order and the point emerges: this is a build defined by what happens after it, which is why we do not take standalone website projects. |
| `/marketplace-growth` | `split` | One catalogue, two rulebooks. The same product needs different content, different ranking work and different advertising on each marketplace — and the split is where most single-channel agencies stop being useful. |
| `/marketplace-management` | `split` | The same two columns, doing a different job here: this is not what grows on each marketplace but what can suspend you on each. The rules diverge more on compliance than they do on ranking. |
| `/ppc-paid-media` | `levers` | Four levers, and only the first is what most agencies mean by PPC management. The other three are why advertising sits inside the operation rather than beside it — a bid change is worth nothing if the inventory behind it runs out. |
| `/shopify-dtc` | `layers` | Read bottom to top: the storefront is the last layer, not the first. Most DTC problems that present as design problems are merchandising or acquisition problems one layer down. |

---

## 3 · `nextStep` — ten pages

Renders above the related grid. Kicker takes the **next** engine's colour, not the page's.

### Build → Grow

**`/wholesale-ecommerce`** · engine `grow`
> **H3** A catalogue that sells is the start, not the finish.
> **Body** Once lines are live and replenishing, the work changes shape: which listings earn the buy box, where advertising is worth running, and which lines to stop buying. That is the Grow side, and it is the same desk.
> **Links** Marketplace growth → `/marketplace-growth` · The Grow engine → `/grow`

**`/private-label`** · engine `grow`
> **H3** Launch is the start of the operation, not the end of it.
> **Body** A launched product is a business that now has to be grown — listings and advertising judged against margin, replenishment against sell-through, and reviews earned within policy. That work is the Grow side, and nothing is handed over between them.
> **Links** Marketplace growth → `/marketplace-growth` · The Grow engine → `/grow`

**`/shopify-dtc`** · engine `grow`
> **H3** A store that converts still has to be fed.
> **Body** Once the journey works, the constraint moves to acquisition and repeat purchase — which channels pay back, what a customer is worth the second time, and where growth stops being profitable. That is the Grow side.
> **Links** Ecommerce growth → `/ecommerce-growth` · The Grow engine → `/grow`

**`/ecommerce-website-development`** · engine `grow`
> **H3** A built storefront is infrastructure, not demand.
> **Body** The site being fast and correct does not by itself bring anyone to it. What follows is the demand and conversion work the build was scoped to support — and if that work is not happening, the build was the wrong purchase.
> **Links** Ecommerce growth → `/ecommerce-growth` · The Grow engine → `/grow`

### Grow → Operate

**`/ecommerce-growth`** · engine `operate`
> **H3** Growth you cannot fulfil is not growth.
> **Body** Every growth action lands on an operation that has to absorb it — more orders, more stock, more cases, more that can go wrong. The daily desk is what keeps the result from unwinding, and it is why we will recommend waiting.
> **Links** Ecommerce operations → `/ecommerce-operations` · The Operate engine → `/operate`

**`/marketplace-growth`** · engine `operate`
> **H3** Ranking is worth nothing on a suspended account.
> **Body** The work that wins the buy box and the work that keeps the account sellable are different jobs on different clocks. Account health, policy and cases run daily underneath everything on this page.
> **Links** Marketplace management → `/marketplace-management` · The Operate engine → `/operate`

**`/ppc-paid-media`** · engine `operate`
> **H3** Advertising is the fastest way to find an operations problem.
> **Body** Spend rises and the stockouts, the pricing errors and the case backlog all surface at once. Running ads inside the operation means the budget is capped by what the business can actually ship, not by a target.
> **Links** Marketplace management → `/marketplace-management` · The Operate engine → `/operate`

### Operate → the reporting loop

**`/ecommerce-operations`** · engine `operate`
> **H3** The cadence ends in a decision, not a dashboard.
> **Body** Every cycle closes with a written read on what the period actually made and what to do differently — the same reconciliation the fee is calculated from, which is why the arithmetic is checkable rather than asserted.
> **Links** How the reporting works → `/how-we-work#reporting` · How we are paid → `/how-we-work#fees`

**`/marketplace-management`** · engine `operate`
> **H3** What a quiet month should look like in writing.
> **Body** Account health work is mostly invisible when it is going well, so the reporting is what makes it checkable — what was swept, what was found, what was opened and closed, and what changed in the rules.
> **Links** How the reporting works → `/how-we-work#reporting` · How we are paid → `/how-we-work#fees`

**`/shopify-management`** · engine `operate`
> **H3** An operation you can audit from the outside.
> **Body** The monthly read covers what was maintained, what was noticed without being asked, and what it made after costs — which is the difference between an operation and a queue of tickets someone worked through.
> **Links** How the reporting works → `/how-we-work#reporting` · How we are paid → `/how-we-work#fees`

---

## 4 · `involvesSubheads` — ten pages, two each

H3s before paragraphs 3 and 5 of `involvesBody`, breaking a 298–337-word block into three
movements. Sentence case, three to five words, no keyword stuffing.

| Page | Before ¶3 | Before ¶5 |
|---|---|---|
| `/wholesale-ecommerce` | Where the margin actually is | What we refuse to buy |
| `/private-label` | Deciding before spending | Where launches fail |
| `/shopify-dtc` | The journey, not the theme | After the store is live |
| `/ecommerce-website-development` | Built for an operation | What we do not take on |
| `/ecommerce-growth` | Finding the binding constraint | Knowing when to stop |
| `/marketplace-growth` | One catalogue, two rulebooks | Ranking without discounting |
| `/ppc-paid-media` | Judged on margin, not ACoS | When advertising is the wrong answer |
| `/ecommerce-operations` | The daily cadence | When something goes wrong |
| `/marketplace-management` | Keeping the account sellable | Cases and clocks |
| `/shopify-management` | What a retainer misses | Maintenance nobody asks for |

---

## 5 · `related` corrections — `PROMPT_14 §B3`

Where `nextStep` now carries the forward destination, it comes out of `related` so nothing is
offered twice at different weights. Two pages need a lateral added so they are not left empty.

| Page | Remove | Result |
|---|---|---|
| `/wholesale-ecommerce` | Marketplace growth *(now in `nextStep`)* | **Add** Private label `/private-label` build · Marketplace management `/marketplace-management` operate |
| `/private-label` | Marketplace growth *(now in `nextStep`)* | Keep Shopify / DTC · **add** Wholesale ecommerce `/wholesale-ecommerce` build |
| `/shopify-dtc` | Ecommerce growth *(now in `nextStep`)* | **Add** Ecommerce website development `/ecommerce-website-development` build · Shopify store management `/shopify-management` operate |
| `/ecommerce-website-development` | Ecommerce growth is not in `related` — no removal | Keep Shopify / DTC · **add** Shopify store management `/shopify-management` operate |
| `/ecommerce-growth` | Nothing — both entries are lateral Grow siblings | Unchanged |
| `/marketplace-growth` | Nothing | Keep Ecommerce growth · **add** Wholesale ecommerce `/wholesale-ecommerce` build |
| `/ppc-paid-media` | Nothing — both lateral | Unchanged |
| `/ecommerce-operations` | **Currently empty — the only page on the site with no related links, and the fewest inbound (2)** | **Add** Marketplace management `/marketplace-management` operate · Shopify store management `/shopify-management` operate · Ecommerce growth `/ecommerce-growth` grow |
| `/marketplace-management` | Nothing — Marketplace growth is a backward lateral and correct here | Keep · **add** Wholesale ecommerce `/wholesale-ecommerce` build |
| `/shopify-management` | Nothing | Keep Shopify / DTC · **add** Ecommerce operations `/ecommerce-operations` operate |

**Net effect on the link graph:** forward-progression edges go from 4 to 14, `/ecommerce-operations`
goes from 2 inbound to 5, and no page has fewer than two related entries.

---

## 6 · `/about` company-facts block — `PROMPT_14 §A`

**Heading** Company facts

| Label | Value | Renders? |
|---|---|---|
| Legal entity | Hyprr Retail LLC | yes |
| Trading as | Hyprr Brands | yes |
| Registered in | — | **no** — omit label and row entirely |
| Entity file number | — | **no** — omit label and row entirely |
| Get in touch | link to `/contact` | yes |

**Line under the block, 32 words:**
> These are the facts worth checking before a conversation, not after one. The registration details
> go here as soon as the filing is complete, in the same place.

**Rule:** a field with no value renders nothing — no label, no dash, no reserved row. The block
ships with three lines today and five the day the entity details arrive, with no code change.

---

## Checks

| # | Check | Result |
|---|---|---|
| 1 | Banned-phrase gate over this file | **Run — caught one hit in my own copy and it was fixed, not allowlisted.** `/private-label`'s `managedLead` used "unlocks the next", matching the `unlock` pattern. Rephrased to "has to clear before the next one starts". Re-run: 0 hits. |
| 2 | No currency figures anywhere | **Run — 0.** Pricing is out and none reappears here. |
| 3 | No `managedLead` restates its own list | Checked by eye, all nine. |
| 4 | Every `nextStep` link target is a live route | 10/10 — `/grow`, `/operate`, `/how-we-work#reporting`, `/how-we-work#fees` and six service pages, all live. |
| 5 | No `related` entry duplicates that page's `nextStep` | Checked, §5. |
| 6 | Character counts | **None asserted in this file.** The only counts I publish now are ones I have computed — that failure is in `SITE_REVIEW_2SEP.md`. |

# PROMPT 9 — Published fees · Book a call · Walmart coverage

**Run after:** Prompt 7 (audit fixes) is merged. **Parallel-safe with:** Prompt 6 (schema), Prompt 8
(share cards / GEO / a11y). **Conflicts with:** nothing currently in flight.

**Source of truth for every figure and every copy block in this prompt:**
`docs/content/fees-and-pricing.md`. Read it before starting. Where this prompt and that file
disagree, that file wins and the disagreement is a bug — flag it.

---

## Why this exists

Three things changed with owner sign-off on 2 Sep:

1. **Fees are now published.** The site has been written end to end around "no figures — the
   mechanic is on `/how-we-work#fees`." The figures are resolved and that section is no longer a
   placeholder. **Three currently-live statements become false and must come out in the same
   deploy as the figures go in.** They are listed as A1-A3 below. Shipping the figures without the
   retractions is worse than shipping neither.
2. **A book-a-call path on the homepage.** Not a new section — the existing `CtaSection`
   (`#talk`) becomes bookable, for the reasoning in task B.
3. **Walmart named explicitly on private label**, which currently reads Amazon-only. Wholesale
   already covers it.

---

## A · The retractions — do these first, in one commit

These are not copy polish. Each one is a statement the site currently makes that stops being true
the moment task C lands.

### A1 · `app/how-we-work/page.tsx` ~line 197

**Remove:**
> There is no monthly retainer, and no fee calculated on the capital you deploy. If the margin
> isn't there, neither is our share of it.

**Replace with `FEES-NO-RETAINER` + `FEES-MINIMUM`** from `fees-and-pricing.md`.

A $500 monthly minimum now exists on operating engagements. "No monthly retainer" is false with a
floor in place, and "if the margin isn't there, neither is our share of it" is false in exactly
the months the floor bites. **Both sentences go together.** Do not keep the second one — an
eleven-word claim that fails on inspection costs more than the line is worth, and this is the
section a sceptical visitor reads hardest.

### A2 · `app/how-we-work/page.tsx` ~line 202

**Remove:**
> No pricing figures are published while engagements are individually scoped, and no earnings
> figures appear anywhere on this site.

**Replace with:**
> No earnings figures appear anywhere on this site. We do not publish what clients made, and we
> will not project what you will.

First clause is now false. **The second clause is load-bearing and must survive** — it is the
`/earnings-claims` promise restated in place, and it is what makes publishing prices safe.

### A3 · Homepage FAQ Q8 and the `PricingBand` body

Both currently assert "no monthly retainer" / "no fee on the capital you deploy" in the same
breath. Replace both with the blocks in `fees-and-pricing.md` §"FAQ replacements".

**The line that replaces "if the margin isn't there, neither is our share of it" is
"The split is 30% at every band."** Same job — a checkable commitment a competitor charging a
sliding rate cannot make. It carries the section now. Do not trim it for length.

### A4 · Grep gate

After A1-A3, this must return zero hits across `app/` and `components/`:

```
grep -rn "no monthly retainer\|No monthly retainer\|neither is our share\|No pricing figures are published" app/ components/
```

---

## B · Book a call — `CtaSection` becomes bookable

### Why not a new section

The homepage already ends with `#talk`: an H2, a qualifying paragraph, a "What happens next"
three-step, and two controls. Adding a separate book-a-call block puts two competing primary CTAs
within one scroll of each other and splits the conversion it is meant to raise. **Convert the
section you have.**

### Why the scheduler does not bypass qualification

The stated risk is that a bare scheduler fills the calendar with people who were never a fit,
which is what `/contact`'s form currently filters. The fix is that **the booking form carries the
qualifying questions as required fields** — both Cal.com and Calendly support required custom
questions on the booking screen. That makes booking *one* step instead of form → wait → email →
schedule, and it qualifies harder than the current path because an unqualified visitor abandons at
the question rather than after a reply.

**Four required booking questions** — these are the qualification, so none is optional:

1. Which channels are you on today? *(Amazon · Walmart · Shopify/DTC · none yet · other)*
2. Roughly what are you deploying into inventory each month? *(not yet buying · under $25k ·
   $25k-$100k · above $100k)*
3. Are the seller accounts and the capital in your own business's name? *(yes · no · not set up
   yet)*
4. What is stuck right now? *(free text, required)*

Question 3 is the disqualifier doing its job on the booking screen — the site says in four places
that Hyprr does not hold accounts or capital, and a "no" here is the conversation that should not
be booked.

### Implementation

- **Primary control:** `Book a call` → `process.env.NEXT_PUBLIC_BOOKING_URL`
- **Secondary control:** `Send context instead` → `/contact`
- **Fallback, and this is not optional:** if `NEXT_PUBLIC_BOOKING_URL` is unset or empty, the
  primary control renders as `Let's talk` → `/contact` and the secondary control is not rendered.
  **The build must never ship a booking button that goes nowhere.** The scheduler account is not
  set up yet, so unset is the state this will first deploy in.
- **Do not embed an iframe.** A third-party scheduler iframe on the homepage costs LCP and CLS on
  the page Prompt 8 is measuring, and it loads a third-party origin on every homepage view
  including the ones that never book. Link out to the booking page in a new tab.
- **Recommendation: Cal.com.** Free tier covers this, self-hostable later, lighter booking page,
  required custom questions on the free plan. Calendly puts custom questions behind a paid tier.
  Either works — the env var means the choice is not baked into the code.

### Copy — replaces the current `CtaSection` right column

Keep the H2 (`If it's a fit, let's talk.`) and the qualifying paragraph exactly as they are. The
paragraph's last sentence — *"No pressure to sign, and no deadline attached to the conversation"* —
stays; it does more work now that a scheduler is on the page, not less.

**"What happens next" — rewrite the three steps for the booked path:**

> **01** You pick a time and answer four questions on the booking screen — channels, capital,
> whose name the accounts are in, and what is stuck.
> **02** We come to the call having read them, with a view rather than a questionnaire.
> **03** You get a written plan, the fee that applies to your band, and the sample documents.

Step 03 previously promised sample documents. `/documents` is not live yet — **if it is still not
live when this ships, step 03 reads "a written plan and the fee that applies to your band" and the
documents clause comes out.** Do not promise a route that 404s.

---

## C · The fees section rebuild — `app/how-we-work/page.tsx` `#fees`

Build from `docs/content/fees-and-pricing.md` §"Copy blocks", §"The published tables" and
§"The worked example". Order on the page:

1. `FEES-H2` — unchanged
2. `FEES-LEAD` — replaces the current lead
3. **`FEES-SPLIT`** — the 30%-at-every-band rule. **This goes above the tables, not below them.**
   It is the section's argument; the tables are its evidence. A visitor who reads only one block
   should read this one.
4. Table 1 — wholesale bands, + caption
5. Table 2 — add-ons
6. Table 3 — private label, + the anti-scam caption
7. `FEES-MECHANIC-1`, `FEES-MECHANIC-2` — unchanged, still correct
8. `FEES-STEPDOWN`, `FEES-TERM`
9. `FEES-NO-RETAINER`, `FEES-MINIMUM` (from A1)
10. The worked example, **with its label sentence intact and in the same visual block as the
    numbers** — not as a caption underneath, not as a tooltip. The label is what makes the
    arithmetic legal.
11. The A2 footnote
12. `FEE_RULES` — new four-item array in `fees-and-pricing.md`

### Constraints specific to this section

- **`$14,999` must never render alone.** Not in a card, not in a hero, not in a meta description,
  not as a standalone stat. It ships only inside Table 3 with its caption adjacent. Reason is in
  `fees-and-pricing.md` — the standalone five-figure upfront is the pattern buyers arriving from
  the automation-scam SERP are afraid of, and the caption is what defuses it.
- **Tables on Petrol.** `#fees` is a `bg-field` section. Table borders use `border-line-on-field`,
  body text `text-on-field-body`, figures `text-white` at `font-semibold`. **Do not use
  `text-on-field-mute` for any figure** — it is 3.86:1 on `--color-field-raised` and this section
  has raised surfaces. Figures are the thing people came to read; they get full white.
- **Horizontal scroll.** Three tables at 375px. Each wraps in its own `overflow-x-auto` container.
  The page body must not scroll horizontally — Prompt 8's a11y pass will catch it if it does.
- **`$` in JSX** is fine, but `'` is not — the existing file uses `&apos;`. Keep that.

---

## D · Walmart on private label

Source: `docs/content/private-label.md`, which was patched on 2 Sep. Five insertions, all already
written there — lift them verbatim:

| Where | What |
|---|---|
| Hero `answer` | now reads "takes it to market on Amazon and Walmart" |
| Deliverables list, item 4 | "Launch run on Amazon, Walmart or both, and handed into ongoing operation" |
| Verdict-sheet axis list | "Marketplace fit — assessed for Amazon and Walmart separately" |
| Day 61-90 body | new closing passage on how the launch surface is chosen |
| FAQ | **new sixth FAQ**, "Do you launch private label products on Walmart as well as Amazon?" — insert **before** the declined-categories FAQ |

**Do not touch the H1, the title or the primary keyword.** They stay `amazon private label agency`
and Amazon-only on purpose: that is where the measured hiring demand is, the SERP is an Amazon
SERP, and the Walmart head terms belong to `/walmart-marketplace-management`. Walmart enters this
page as launch surface and body copy. Diluting the H1 to "Amazon and Walmart private label" would
cost the term without winning a Walmart one.

Wholesale also gained the band table in its H2 7 — `docs/content/wholesale-ecommerce.md` — lift it
if `/wholesale-ecommerce` is already built, otherwise it lands with the page.

---

## E · Language gate

**`done for you` / `done-for-you` does not ship, in any casing, anywhere.** It is on the §Q
Never-use list, the CI grep catches `done.for.you`, and two instances were already rephrased last
week. Where the meaning is needed, §Q's approved terms are **fully managed** (primary),
*we run the operation*, *you stay in the decisions, out of the day*.

`docs/content/fees-and-pricing.md` contains the string inside a prohibition table. That file is
documentation and never ships as page copy — **do not paste the ruling tables into the page.**

Run the full §Q gate before opening the PR:

```
grep -rinE "guaranteed (profit|sales|roi|return|ranking)|passive income|risk-free|\
hands-free|turnkey|set and forget|done.for.you|we do everything|unlock|seamless|\
effortless|elevate|transform|holistic|end-to-end solution|supercharge|\
[0-9]+% (roi|return|growth|increase)" \
  --include="*.tsx" --include="*.ts" app/ components/
```

Expected hits: the three approved negations only (`No guaranteed returns`, `Expecting passive
income`, `Expecting guaranteed returns`). **`30%` will not trip the last pattern** — it matches
`% roi|return|growth|increase`, and "30% of realised margin" is none of those. If it does trip,
report it rather than allowlisting; that would mean the copy said "30% return" somewhere, which is
an earnings claim and a real bug.

---

## F · Acceptance

| # | Check |
|---|---|
| 1 | A4 grep returns zero |
| 2 | §Q grep returns only the three approved negations |
| 3 | `$14,999` appears exactly once in `app/` + `components/`, inside Table 3 |
| 4 | The worked example's "arbitrary round numbers" label is in the same rendered block as the numbers |
| 5 | With `NEXT_PUBLIC_BOOKING_URL` unset, the homepage CTA reads `Let's talk` → `/contact` and no second control renders |
| 6 | With it set, `Book a call` opens the URL in a new tab and `Send context instead` → `/contact` |
| 7 | No horizontal page scroll at 375 / 768 / 1024 / 1440 with all three tables present |
| 8 | Every figure on the page traces to `fees-and-pricing.md`; no figure appears that is not in it |
| 9 | Contrast: no figure rendered in `text-on-field-mute`; AA on every table cell against both `--color-field` and `--color-field-raised` |
| 10 | Chroma on `/how-we-work` still ≥ 0.018 after three tables of mostly-white text land on Petrol — remeasure, and if the tables have flattened it, the fix is a `--color-operate` accent on the table headers, not a new tint band |

---

## What is still blocked and not in this prompt

- **`/documents`** — deferred by the owner. Affects task B step 03 only; handle as noted there.
- **`/walmart-marketplace-management`** — the keyword map calls this the weakest competitive field
  in the whole study, and it has no page. Not in this prompt; it is a new page, queued separately.
- **Registered entity details** — state and file number still outstanding, so the `/#organization`
  JSON-LD in Prompt 6 cannot carry them yet.

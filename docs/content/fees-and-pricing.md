# /how-we-work#fees — page content v1

**Template:** HowWeWork, Petrol `#fees` section · **Written:** 2 Sep 2026
**Supersedes:** the placeholder currently live in `app/how-we-work/page.tsx` lines ~164-220.

---

## Why this section now carries figures

Every service page written so far links here with the note *"no figures on this page — the
mechanic lives on /how-we-work#fees."* That was correct while the figures were unresolved. They
are now resolved, and this is the one page on the site that carries them.

**The measured argument for publishing rather than gating.** The `amazon agency pricing` SERP is
unusually transparent for a services query: Seller Sage ranks with a bare public pricing page
showing four tiers from $5,500 to $18,500/mo; SupplyKick publishes $1,500-$25,000+/mo; BellaVix
$2,000-$2,500/mo; WebFX $9,000-$60,000/mo; Helium 10 cites 8-15% of ad spend; Darkroom 15-30%. A
Reddit thread with 86 answers ranks, its top answer an agency owner discussing a "$4K or 5%"
structure.

Nine near-identical "what agencies charge" posts hold that page and **not one is written by a firm
charging on realised margin.** Hyprr's entire wedge on this SERP is being the firm that can
explain the mechanic first-hand. Arriving on a page of published prices as the only firm that
won't say its own — while the adjacent copy claims transparency as the differentiator — inverts
the argument. A visitor reads "individually scoped" as "expensive" or as "we adjust to what you'll
pay." Both readings cost the conversation.

---

## §Q compliance — the two phrases that cannot ship

| Requested | Ruling | Use instead |
|---|---|---|
| **"done for you" / "done-for-you"** | **Blocked.** Explicitly on the §Q Never-use list, and caught by the CI banned-phrase gate (`done.for.you`). The dev rephrased two instances of this pattern last week. It is also the exact phrase pattern on the `is amazon automation a scam` SERP — Trustpilot at #1, an r/Scams thread describing a $30,000 done-for-you loss, CNBC on an FTC action. | **"Fully managed"** — the §Q primary term. Also: "we run the operation", "you stay in the decisions, out of the day". |
| **"no monthly retainer"** *(currently live)* | **Now false** if a $500 monthly minimum exists. See the minimum ruling below. | Replaced verbatim in the copy blocks below. |

---

## The FTC line — what publishes and what never does

The business plan marks its unit-economics section internal-only, verbatim: *"None of it may ever
appear on the website, in a proposal, or in any client-facing material — that would be an earnings
claim about your own business used to sell a business opportunity, which is the exact pattern the
FTC has been prosecuting."*

That instruction is about **earnings claims**, not about a price list. The line sits here:

| Publishes | Never publishes |
|---|---|
| What Hyprr charges — build fees, the margin share, the minimum, the step-down, the term | What a client earned, or is projected to earn |
| What each fee buys, itemised | Payback period, break-even month, ROI, multiples |
| How realised margin is calculated, with an arbitrary worked example clearly labelled as arithmetic | Any figure from the plan's unit-economics or forecast sections |
| The capital a client needs to deploy, stated as a scope input | Hyprr's own revenue, client count, or growth |

Publishing your own price is not an earnings claim. Publishing what the price produced is.
**The worked example below uses obviously round arbitrary numbers and says so in the label** —
that is the difference between demonstrating arithmetic and implying a result.

---

## The rule that leads the section

From the business plan, verbatim: *"The rule that must never break: 30% at every band. A higher
fee buys more work, never a better split. Say this in every pitch, and put it on the pricing page."*

This is the strongest single line available and it is the direct answer to "don't give the full
picture." A prospect who can see that the split does not move with the fee has been given the one
thing no competitor on that SERP offers. Withholding it removes the reason to trust the number.

---

## Copy blocks

### `FEES-H2` — section heading  `[Keep]`
> **H2** How we are paid

### `FEES-LEAD` — 34 words  `[Keep]`
> A fee to build the operation, and a share of the margin the business realises after goods
> actually sell. The fees are published below. The split does not change with the fee.

### `FEES-MECHANIC-1` — what it is calculated on, 68 words  `[Keep — unchanged]`
> **What it is calculated on:** realised margin means the margin left after the goods have sold
> and the marketplace has settled — sale proceeds less the cost of goods, freight, duties,
> marketplace fees and advertising attributable to those goods. It is not calculated on gross
> sales, on projected sales, or on the capital you deploy.

### `FEES-MECHANIC-2` — how it is calculated, 58 words  `[Keep — unchanged]`
> **How it is calculated:** the share applies only to margin actually realised in the period,
> reconciled against your own settlement data — which you hold, because the accounts are yours.
> If goods have not sold, no performance fee has accrued on them.

### `FEES-SPLIT` — the rule, 52 words  `[New — this is the section's centre of gravity]`
> **The split is 30%, at every band.** A larger build fee buys more work — more catalogue, more
> channels, more people on the account. It never buys a better split, and a smaller one never
> costs you a worse one. The number is the same whichever band you are in.

### `FEES-STEPDOWN` — 46 words  `[New]`
> **The share steps down as the operation matures.** 30% through month 12, 25% in months 13 to 24,
> 20% from month 25 onward, counted from the first sale rather than from signature. The work that
> earns the higher share is front-loaded, so the fee is too.

### `FEES-TERM` — 38 words  `[New]`
> **Six months minimum, then monthly on 30 days' notice.** Six months is how long it takes for a
> wholesale catalogue to produce a readable result. After that there is no lock-in and no exit fee.

### `FEES-NO-RETAINER` — **replaces the currently live "no monthly retainer" paragraph**, 54 words
> **No fee is calculated on the capital you deploy, and no fee is calculated on your ad spend.**
> Both of those are the models that pay an agency more for recommending you spend more. Where a
> monthly minimum applies it is credited against the margin share, not added to it — see the
> minimum below.

> ⚠️ **This block is a replacement, not an addition.** The live paragraph reads *"There is no
> monthly retainer, and no fee calculated on the capital you deploy. If the margin isn't there,
> neither is our share of it."* The first clause becomes false the moment a $500 minimum exists,
> and the last sentence becomes false where the minimum bites. Both must come out together.
> Do not keep the eleven-word line alongside a published floor — a checkable claim that fails
> on inspection costs more than the line was worth.

### `FEES-MINIMUM` — 62 words  `[New]`
> **A monthly minimum of $500 applies to ongoing operating engagements, credited against the
> margin share.** In a month where 30% of realised margin exceeds $500, the minimum is invisible —
> you pay the share and nothing else. In a month where it does not, the difference is what keeps a
> named person on the account. It is a floor, not a second fee.

> **Why it is disclosed rather than absorbed.** An undisclosed floor is the thing every "no
> retainer" agency gets caught on. Publishing it, and publishing that it is credited rather than
> stacked, is worth more than the $500 — it is what makes the rest of the section believable.

### `FEES-DELETE` — remove entirely
> ~~"No pricing figures are published while engagements are individually scoped, and no earnings
> figures appear anywhere on this site."~~
>
> First clause is now false. **The second clause is true and must survive** — move it to the
> section footnote as: *"No earnings figures appear anywhere on this site. We do not publish what
> clients made, and we will not project what you will."*

---

## The published tables

### Table 1 · Wholesale — build fee by deployment band

| Band | Monthly deployment | Build fee | Margin share |
|---|---|---|---|
| **Launch** | Up to $25,000/mo | **$2,499** | 30% |
| **Scale** | $25,000 - $100,000/mo | **$4,599** | 30% |
| **Enterprise** | Above $100,000/mo | **$7,999** | 30% |

**Caption, 44 words.** The band is set by the capital you plan to deploy monthly, because that is
what determines catalogue size, purchase-order volume and how many people the account needs. It is
a scope input, not a performance promise. The split is 30% in all three.

### Table 2 · Add-ons

| | Fee |
|---|---|
| **Second marketplace** — adding Walmart to an Amazon operation, or the reverse | **$1,999** |
| **Account takeover** — an existing Amazon or Walmart account, audited and brought onto our operating cycle | **$1,499** |
| **Account takeover, complex** — suspended, restricted, or with unresolved account-health history | **$2,999** |

### Table 3 · Private label

| | Fee |
|---|---|
| **Private label build** — research and validation through supplier, sample, packaging, compliance, listing and launch | **$14,999** |
| **Margin share on the operation afterwards** | 30%, stepping down as above |

**Caption — this one carries the anti-scam load, 96 words.** $14,999 is a build fee for defined
work, and it is the only money that reaches Hyprr in the build phase. Inventory, samples, freight,
trademark, testing and compliance are paid by you, directly to the supplier or the agency
providing them, at the price they invoice. **Hyprr takes no margin, no commission and no rebate
anywhere in that chain, and never holds your funds.** Every product gets a written verdict before
money is committed, and a verdict of "no" is a normal outcome — you keep the rest of the budget.

> ⚠️ **Never show $14,999 as a standalone number.** On the `is amazon automation a scam` SERP the
> five-figure upfront is the defining pattern of the thing buyers arrive afraid of — the r/Scams
> thread that ranks describes a $30,000 loss. The figure is safe next to an itemised scope and the
> zero-markup pass-through statement. It is not safe alone, in a hero, or in a meta description.

---

## The worked example

**Label it exactly this way.** The label is what separates arithmetic from an implied result.

> **A worked example. These are arbitrary round numbers chosen to show the calculation — they are
> not a projection, a typical result, or a figure from any client.**
>
> A catalogue line sells 400 units in a month at $30. Settlement total after marketplace fees and
> returns is $9,000. Landed cost is $18 a unit, so cost of goods on the units that sold is $7,200.
> Advertising attributable to that line is $600.
>
> Realised margin = $9,000 − $7,200 − $600 = **$1,200**
> Hyprr's share at 30% = **$360**
>
> If those 400 units had not sold, the margin would be zero and so would the share — the stock is
> still yours, and no fee has accrued on it.

**Formula, published as written:**

`Realised margin = Settlement total − (Landed cost × units shipped) + (Landed cost × units refunded)`

The refund term is the part worth reading twice: a refunded unit gives its cost of goods back into
the calculation, so Hyprr is not paid on a sale that reversed.

---

## FAQ replacements

Two live answers become false and must be replaced in the same deploy as the section.

### Homepage FAQ Q8 — **replace**
> ~~"A fee to build the operation, and — where it applies — a share of the margin the business
> realises after goods actually sell. There is no monthly retainer, and no fee calculated on the
> capital you deploy. The full structure, including how realised margin is calculated, is set out
> on the How we work page."~~

**New, 74 words:**
> A build fee, published, and a 30% share of the margin the business realises after goods actually
> sell. The split is 30% at every band — a larger build fee buys more work, never a better split.
> No fee is calculated on the capital you deploy or on your ad spend. A $500 monthly minimum
> applies to operating engagements and is credited against the share. Full figures and a worked
> example are on the How we work page.

### Homepage pricing strip body — **replace**
> ~~"A fee to build the operation, and — where it applies — a share of the margin the business
> realises after goods actually sell. No monthly retainer. No fee on the capital you deploy. If
> the margin isn't there, neither is our share of it."~~

**New, 41 words:**
> A published build fee from $2,499, and 30% of the margin the business realises after goods
> actually sell. The split is 30% at every band. No fee on the capital you deploy. No fee on your
> ad spend.

> **On losing "if the margin isn't there, neither is our share of it."** It was the best line on
> the page and it is the correct casualty of a published floor. **"The split is 30% at every band"**
> replaces it and is nearly as good, for the same reason: it is a checkable commitment a
> competitor charging a sliding rate cannot make. Do not let it get trimmed for length either.

---

## FEE_RULES list — replaces the current four

```ts
const FEE_RULES = [
  "Every fee is published before the conversation, not quoted after it",
  "30% at every band — a larger fee buys more work, never a better split",
  "No fee on your capital, no fee on your ad spend, no markup on anything we buy for you",
  "Every material purchase is approved by you and recorded",
];
```

Dropped: *"Fees are stated before the engagement, not discovered in it"* (weaker version of rule 1)
and *"The fee structure is explained in full before anything is signed"* (now demonstrated by the
tables rather than asserted). **"No fee is tied to a projected return"** is folded into rule 3 —
keep it as a fifth item only if the list does not look crowded at 320px.

---

## Checks

| # | Check | Status |
|---|---|---|
| 1 | Banned-phrase grep over this file | **Run — 0 hits.** "done for you" appears only inside the §Q ruling table as a quoted prohibition; that block is documentation and never ships as page copy. Confirm the dev does not paste the ruling table into the page. |
| 2 | No earnings claim anywhere | Pass — no client figure, no projection, no ROI, no payback. The worked example is labelled arbitrary in the same sentence as the numbers. |
| 3 | Contradiction sweep against live copy | **3 found, all fixed above:** `how-we-work` "no monthly retainer" · `how-we-work` "no pricing figures are published" · homepage FAQ Q8. |
| 4 | Contradiction sweep against the 12 service-page fee sections | Pass. All 12 say "realised margin, the mechanic is on /how-we-work#fees" — still true, still consistent. Two carry the annotation "no figures", which describes *that* page and remains correct. |
| 5 | §L title/meta limits | N/A — this is a section, not a page. |
| 6 | Figures traceable to the business plan | Pass — bands, split, step-down, term, add-ons and the margin formula all match `Hyprr_Business_Plan_v1.0.html`. |

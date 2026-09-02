# PROMPT 12 — Take the published pricing out

**Owner decision, 2 Sep. This is live commercial copy, so it goes ahead of `/about`.**

Removing figures breaks copy in exactly the way adding them did — five sentences currently
*assert that fees are published*, and they go false the moment the tables come out. **The removal
and the retractions ship in the same deploy.** Shipping half of this is worse than shipping none:
a page that promises published fees and then shows none is a worse page than either version.

---

## The principle — figures out, mechanic stays

The differentiator was never the number. It is the mechanic: paid on margin the business actually
realises, nothing on capital, nothing on ad spend, nothing on tax collected, nothing on a sale
that reversed. **All of that publishes without a single currency figure**, and it is the part a
competitor charging on revenue or spend cannot copy.

So this is not "delete the fees section". The section stays, keeps its Petrol ground and most of
its length, and loses the tables. What is left is the argument.

---

## Switch A — every currency figure comes out. Confirmed.

| File | What goes |
|---|---|
| `app/how-we-work/page.tsx` | Tables 1, 2 and 3 in full — `$2,499` `$4,599` `$7,999` `$1,999` `$1,499` `$2,999` `$14,999` `$500`, and the band thresholds `$25,000` / `$100,000` |
| `components/home/PricingBand.tsx` | `$2,499` |
| `components/home/FaqSection.tsx` | Q8's figures |
| `content/services/wholesale-ecommerce.ts` | the inline band table in H2 7 |
| `content/services/private-label.ts` | `$14,999` in the fee body |

**The worked example is a separate question — keep it.** Its numbers ($30, $9,000, $18, $600,
$1,200, $360) are not prices. They are arbitrary arithmetic, labelled as arbitrary in the same
sentence they appear in, and they exist to prove the calculation is checkable. That is the single
most persuasive block in the section and nothing about it is a proposed fee.

---

## Switch B — the 30% and the step-down. **Default: keep. One line to flip.**

`30%` appears twenty times. It is the borderline case, so it is isolated here rather than assumed
either way.

**The case for keeping it:** it is not a proposed price, it is the commercial model. The business
plan carries it as a rule rather than a number — *"30% at every band. A higher fee buys more work,
never a better split."* With the tables gone, **"the split is 30% whatever the build fee is"**
becomes the whole transparency argument rather than part of it, and it is the one commitment on
the page a competitor cannot make.

**If it comes out too:** the fee section becomes purely qualitative, the worked example needs "the
agreed share" in place of 30%, and `FEE_RULES` rule 2 goes with it. That is a coherent page, just
a quieter one.

**Implement as a single constant** so the decision is reversible without another pass:

```ts
// lib/fees.ts
export const PUBLISH_SPLIT = true;   // false removes 30%, the step-down, and FEE_RULES[1]
```

---

## The retractions — five strings that go false. All must ship with the removal.

| # | Where | Current | Replace with |
|---|---|---|---|
| 1 | `how-we-work/page.tsx:200` | "…published below. The split does not change with the fee." | "…agreed in writing before anything starts. The split does not change with the fee." |
| 2 | `how-we-work/page.tsx:67` `FEE_RULES[0]` | "Every fee is published before the conversation, not quoted after it" | "Every fee is agreed in writing before the engagement, never discovered inside it" |
| 3 | `how-we-work/page.tsx:12` metaDescription | "…how we are paid — published fees, the mechanic and a worked example." | "…how we are paid — the mechanic, what it is calculated on, and a worked example." |
| 4 | `how-we-work/page.tsx:94` og/twitter description | same string | same replacement |
| 5 | `components/home/PricingBand.tsx:16` | "A published build fee from $2,499, and 30% of…" | "A build fee agreed before anything starts, and 30% of…" *(or drop the 30% under Switch B)* |

**The commitment that has to be reworded rather than lost.** The standing promise was *"no fee is
discovered on a call that was not on the page."* That cannot survive figure removal. Its
replacement, and this is not a downgrade — it is a promise about the engagement rather than the
page:

> **No fee appears in an engagement that was not agreed in writing before it started.**

Put it where the tables were. It is the sentence doing their job.

---

## What replaces the tables — do not leave a hole

The section keeps its shape. In place of Tables 1–3, three short blocks, no figures:

> **A build fee.** Scoped to the size of the operation — how much catalogue, how many
> marketplaces, how many people the account needs. Agreed in writing before anything starts.
>
> **A share of realised margin.** [30% at every band, stepping down as the operation matures —
> *Switch B*]. Calculated on what the business actually made after the goods sold and the
> marketplace settled.
>
> **Nothing else.** No fee on the capital you deploy. No fee on your ad spend. No fee on tax you
> collect and remit. No fee on a sale that reversed.

Then the existing mechanic blocks, the net-settlement formula and the worked example, all
unchanged. **The section gets shorter and the argument gets sharper**, because every remaining
sentence is about how the fee behaves rather than what it is.

---

## Acceptance

| # | Check |
|---|---|
| 1 | `grep -rnE '\$[0-9]' app/ components/ content/` returns only the worked example's arbitrary numbers |
| 2 | All five retraction strings gone; no page claims fees are published |
| 3 | "No fee appears in an engagement that was not agreed in writing before it started" renders on `/how-we-work` |
| 4 | `PUBLISH_SPLIT` controls every `30%` and the step-down from one place |
| 5 | The worked example still carries its "arbitrary round numbers" label in the same block as the numbers |
| 6 | The `#fees` section has no empty region where the tables were |
| 7 | Chroma on `/how-we-work` re-measured — it was 0.0412 with a large Petrol section; if the shorter section drops it below 0.018, say so rather than adding decoration |
| 8 | Banned-phrase gate clean |

---

## Recorded, because it will be asked again

The measured argument for publishing is in `docs/content/fees-and-pricing.md` and does not go
away: four competitors on the `amazon agency pricing` SERP publish full ranges. **Taking the
figures out is a real cost on that one SERP** — and it is a decision the owner has made with that
evidence in hand, which is the correct way round.

`fees-and-pricing.md` stays in the repo as the record of what the figures were and why they were
published, so that reinstating them is one pass rather than a re-derivation. **It is now a
reference document, not a build spec.** Do not build from it.

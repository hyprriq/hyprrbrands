# PROMPT 10 — Geographic scope: two marketplaces, four client regions

**Run after:** PROMPT_9. **Parallel-safe with:** PROMPT_8, PROMPT_6.
**Do not start before PROMPT_9** — §A of this prompt touches the same fee mechanic.

---

## The scope that was confirmed on 2 Sep

| | |
|---|---|
| **Clients are in** | United States, United Kingdom, Middle East, European Union |
| **Clients sell on** | **US and UK marketplaces** |

The site was written and built against a narrower reading of this than turns out to be true, and
the gap is not cosmetic. Two findings below are correctness bugs, not copy.

---

## A · The fee formula has no tax term — fix this first

**Current, live in `docs/content/fees-and-pricing.md` before this patch and in the business plan:**

```
Realised margin = Settlement total − (Landed cost × units shipped) + (Landed cost × units refunded)
```

**Corrected — now in `fees-and-pricing.md`, publish this version:**

```
Realised margin = Net settlement total − (Landed cost × units shipped) + (Landed cost × units refunded)
Net settlement total = Settlement total − any VAT, GST or sales tax remitted by you on those sales
```

**Why it was invisible.** On a US-only book it is a no-op: US marketplace-facilitator laws make
Amazon and Walmart the deemed collector, so US sales tax never reaches the seller's settlement and
there is nothing to subtract.

**Why it stops being a no-op on Amazon UK.** For a VAT-registered seller above the deemed-supplier
thresholds, Amazon UK remits proceeds **including VAT** and the seller owes that VAT to HMRC. The
settlement total is a gross figure containing money that was never the client's. Taking 30% of it
overcharges by `30% × 20/120` = **5% of gross sales** — on a £40,000/month UK account, £2,000 a
month of the client's money.

It would be found in the first VAT quarter, by the client's accountant, in a business whose entire
pitch is that the arithmetic can be checked. Publish the net-settlement line **even for US-only
clients**: it costs one sentence, it is correct everywhere, and *"we do not take a share of your
VAT"* is a sentence a competitor charging on revenue cannot say.

Same term covers EU OSS/IOSS and any US state where the seller rather than the marketplace remits.

**Also add to the mechanic block or `FEE_RULES`:**
> No fee is calculated on tax you collect and remit. VAT, GST and sales tax come out of the
> settlement before the share is worked out.

---

## B · "Amazon and Walmart" is a US-only sentence and it is in 16 files

Walmart Marketplace has **no UK operation**. Every unqualified "Amazon and Walmart" on the site is
false for a client selling into the UK, which is half the confirmed marketplace scope.

Confirmed present in:

```
app/layout.tsx          app/page.tsx            app/llms.txt/route.ts
components/home/Channels.tsx        components/home/CommercePaths.tsx
components/home/FaqSection.tsx      components/home/Hero.tsx
components/home/Principles.tsx      components/home/InsightsSection.tsx
components/HubPage.tsx
content/services/wholesale-ecommerce.ts      content/services/marketplace-growth.ts
content/services/marketplace-management.ts   content/services/ppc-paid-media.ts
content/services/ecommerce-growth.ts
```

### The replacement, and it is deliberately not a global find-and-replace

**Canonical channel sentence:**
> Amazon in the US and UK, and Walmart in the US.

**Short form**, where the long one does not fit (chips, cards, nav, meta descriptions):
> Amazon US & UK · Walmart US

**Rules:**

1. **Never write "Amazon and Walmart" unqualified again.** It is the string that carries the bug.
2. **Do not write "Amazon UK and Walmart UK".** The second does not exist. This is the specific
   error a careless replacement produces and it is worse than the original, because it is a
   checkable false claim about a marketplace rather than a vague one.
3. **`wholesale-ecommerce` H1, title and meta keep their current keyword targeting.** The measured
   primary was tested on google.com and does not move for this. Geography enters the body, the
   answer paragraph and the FAQ — not the head terms. Same discipline as the Walmart-on-private-
   label call in PROMPT_9 §D.
4. **`llms.txt` matters more than its size suggests.** It is the file an AI answer engine reads to
   decide what Hyprr covers. A wrong channel list there propagates into answers nobody can see.

### Homepage FAQ — three answers become wrong

- **Q2 "Which ecommerce channels do you work across?"** — currently "Amazon and Walmart for
  marketplace wholesale and private label…". Rewrite with the canonical sentence and name the
  client regions, because that is the question a Dubai or Manchester visitor is actually asking.
- **Q4 "Do you run Amazon and Walmart advertising?"** — Amazon Ads UK is a different console and a
  different market. The answer stays yes; the channel list changes.
- **Q5 "Who owns the seller account…"** — currently names "Amazon Seller Central and Walmart
  Marketplace accounts". Amazon Seller Central covers UK, so this one needs only the Walmart
  qualifier.

---

## C · A UK client cannot tell whether this service is for them

Zero occurrences of `UK`, `United Kingdom`, `Europe` or `GDPR` in the entire shipping tree. A
Manchester or Dubai visitor currently reads a US site and assumes, correctly on the evidence, that
they are not the customer.

**Minimum viable fix — not a localisation project, four insertions:**

1. **One sentence in the homepage hero region or the `Channels` block:**
   > We work with sellers in the US, UK, Europe and the Middle East, selling on US and UK
   > marketplaces.
2. **A currency line wherever fees appear:** *"Fees are in USD."* One sentence, prevents the worst
   kind of surprise on a call, and USD is the normal currency for this service in all four regions.
3. **A timezone or contact line** on `/contact` and in the booking section that does not assume US
   hours. A Gulf client's working week includes Sunday.
4. **`llms.txt` and the `/#organization` `areaServed`** carry the region list, so answer engines
   can place the company.

**Explicitly not doing, and the reason:** no `hreflang`, no `/uk` or `/ae` route, no translated
content. `hreflang` annotates *localised variants of the same page*. One English page for four
English-reading markets has no variants to annotate, and adding the tags without them creates
validation errors and self-referencing loops for zero benefit. Revisit only if Arabic content or a
UK-priced page is ever written.

---

## D · Privacy and consent — OUT OF THIS TICKET

**Removed 2 Sep on owner ruling: site first, compliance after.** Moved in full to
`docs/AGREEMENTS_LATER.md`.

`/privacy` exists and is not empty. Upgrading it to name lawful basis, processors, retention and
data-subject rights is real work that will need doing once the site is taking enquiries — it is
not a launch gate and it is not dev work in this ticket. The Art. 27 representative question is a
counsel question.

**Do not implement anything from this section.** It is here only so the reference does not dangle.

---

## E · The compliance register does not loosen for non-US markets

Worth stating once so it is not re-litigated: the FTC Business Opportunity Rule governs offers made
to **US residents**, and a single public site is visible to US residents whatever else it targets.

There is no version of this site where the US-facing copy is careful and the Gulf-facing copy is
loose — it is one document. And the UK and EU regimes are not more permissive on this: UK CAP/BCAP
rules on substantiating claims and the Business Protection from Misleading Marketing Regulations
2008 land in the same place.

**So the strictest applicable regime governs the whole site, and that is the US one.** This is a
feature. It means one copy standard, one review, one banned-phrase gate — and the §Q discipline
already written is the compliant version in all four regions.

---

## F · Acceptance

| # | Check |
|---|---|
| 1 | `grep -rn "Amazon and Walmart" app/ components/ content/` returns zero |
| 2 | `grep -rni "walmart uk\|walmart marketplace uk\|walmart in the uk" .` returns zero |
| 3 | The published margin formula contains the net-settlement line, on the page and in `llms.txt` if the formula appears there |
| 4 | The four client regions appear on the homepage and in `areaServed` |
| 5 | No `hreflang` tags were added |
| 6 | Fee tables carry the USD line |
| 7 | Banned-phrase gate still clean |

---

## G · Queued behind this, not in it

- **UK keyword measurement.** The entire keyword map was measured on `google.com`. `amazon agency
  uk`, `amazon wholesale supplier uk` and `amazon fba agency uk` are different and materially
  thinner SERPs, and nothing has been measured there. This is an opportunity rather than a defect —
  but it is unmeasured, and the map's own §K discipline says an unmeasured cluster does not get
  writing time. **Blocked on a keyword data source being connected.**
- **A UK-specific page.** Probably earns its place once the above is measured. Not before.
- **Gulf marketplaces (Noon, Amazon.ae/.sa).** Confirmed **out of scope** — clients sell on US and
  UK marketplaces only. Do not add Noon anywhere. Recorded here so it is not re-opened.

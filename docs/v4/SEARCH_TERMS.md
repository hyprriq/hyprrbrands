# Search terms — full map and placement

**5 Sep 2026.** Every term below is assigned to exactly one page and one placement, so nothing
competes with itself. Built on the 21 live SERPs read on 1 Sep 2026 in `Hyprr_Keyword_Map_v2.md`.

**Data status unchanged.** MEASURED = read on a live SERP. REASONED = my judgement. Search volume,
difficulty and CPC remain **UNAVAILABLE** — no data source is connected. Bing Webmaster Tools and
Google Keyword Planner are both free and either closes the gap.

---

## 1 · The placement rule

Every term has one home. A term used in an H1 on one page never appears in an H1 on another.

| Placement | How many terms | Rule |
|---|---|---|
| **H1** | one | The page's primary. Once. |
| **Title tag** | one, front-loaded | Primary + brand |
| **Meta description** | primary + one secondary | Written for a click, not a crawler |
| **H2s** | 3–5 secondaries | One per section, naturally phrased |
| **Body** | supporting cluster | In sentences. Never a pill row |
| **FAQ** | question-form long-tail | Verbatim from measured PAA |
| **Image alt** | one entity term | Describes the image first |
| **Internal anchor** | destination's primary | Never "learn more" |
| **URL slug** | primary, hyphenated | Already set |

---

## 2 · Homepage — `/`

**H1:** Build it. Run it. Scale it. **On Amazon and Walmart.**
*The current H1 carries no search term at all. The two marketplace names are the most valuable
words on the site and they appear only in an eyebrow.*

| Placement | Term |
|---|---|
| Primary | `amazon and walmart agency` · REASONED |
| Title | Amazon &amp; Walmart Agency \| Build, Operate, Scale — Hyprr |
| H2 · path | The business path — Build, Operate, Grow, Scale |
| H2 · models | `amazon private label` · `amazon wholesale` |
| H2 · services | Core services |
| H2 · method | How we work |
| Body cluster | marketplace management · seller account · catalog · inventory · advertising · buy box · account health · landed cost · replenishment |
| Card anchors | "Amazon and Walmart management →" · "Amazon private label →" · "Amazon wholesale management →" · "Amazon listing optimization →" |

**Do not target on the homepage:** `amazon agency`, `ecommerce agency`, `amazon automation`. The
first two are dominated by directories and the third is a Reddit-held scam-check query.

---

## 3 · `/amazon-private-label`

**Primary:** `amazon private label agency` · MEASURED — no AI Overview. Informational-leaning SERP:
Amazon's own guide, Helium 10, Jungle Scout and Reddit outrank most agency pages, which is why the
page must define private label before it sells anything.

**Secondaries, one per H2:** `private label product launch` · `amazon product sourcing` ·
`private label packaging` · `amazon brand launch` · `private label operations`

**Body cluster:** product research · supplier sourcing · samples and quality spec · unit cost ·
landed cost · Brand Registry · A+ content · FBA · Walmart launch · replenishment · ranking

**FAQ long-tail — MEASURED PAA:**
- What is Amazon private label? *(definitional — the SERP demands it)*
- Is Amazon private label still profitable?
- FBA or FBM for a new private label product?
- How long does an Amazon private label launch take?
- How much stock do I need for a first order?
- Who owns the brand and the seller account?

**Snippet block, H2 verbatim:** *What does an Amazon private label agency do?*

---

## 4 · `/amazon-wholesale-management`

**Primary:** `amazon wholesale management service` · MEASURED — no AI Overview, and only 3 of 8
results are agency service pages. A clean definition has room here.

**Secondaries:** `amazon wholesale agency` · `wholesale FBA management` · `supplier approval and
ungating` · `buy box management` · `amazon replenishment`

**Body cluster:** authorised distributor · brand approval · purchase order · landed cost model ·
margin floor · sell-through · stranded stock · prep and shipment · pricing

**FAQ — MEASURED PAA:**
- How does Amazon wholesale work?
- Is FBA still profitable?
- Does FBA cost money?
- How much stock do I need to start?

**Killed term:** `wholesale ecommerce management` returns only B2B platform software — BigCommerce,
Zoey, Salsify. Google reads it as a software query. It cannot be won by a service page. Remove it
from every document.

**Snippet block:** *What does an Amazon wholesale agency do?*

---

## 5 · `/amazon-walmart-management`

**Primary:** `amazon marketplace management agency` · REASONED.
**Deliberately not the primary:** `amazon seller account management` — MEASURED, Amazon's own
account pages hold the top two organic slots and an AI Overview above them cites Reddit advising
against third-party account management. Target it inside the FAQ, where the rebuttal does the work.

**Secondaries:** `amazon account management` · `walmart marketplace management` *(the `#walmart`
block)* · `amazon ppc management` *(the `#growth` block)* · `amazon listing management` ·
`account health`

**Body cluster:** Seller Central · suppressed listings · variations · search terms · bids ·
ACoS · buy box · stock cover · reimbursements · policy compliance · cases

**FAQ — MEASURED PAA:**
- Should you let an agency manage your Amazon account? *(the rebuttal — highest-value passage)*
- What is Amazon account management?
- Business account or seller account?
- Can you manage Walmart as well as Amazon?

**Anchors that must land here:** the Walmart Marketplace service card → `#walmart`; the PPC card →
`#growth`; the homepage Scale step → `#walmart`.

---

## 6 · `/amazon-listing-optimization`

**Primary:** `amazon listing optimization service` · REASONED — **no measured SERP row exists.
Read this SERP before the page is written.** It is the only page in the set without evidence.

**Secondaries:** `amazon listing optimization` · `a+ content design` · `amazon seo` ·
`amazon product images` · `backend search terms`

**Body cluster:** title · bullets · description · infographics · variations · indexing ·
relevance · conversion rate · suppressed listing

**FAQ:** What does Amazon listing optimization include? · How long does it take? · Will it improve
ranking or just conversion? · Do you rewrite A+ content as well?

---

## 7 · `/how-we-work`

**Primary:** `amazon agency pricing` · MEASURED — **no AI Overview**, so the click is still
available. Reddit is present: r/FulfillmentByAmazon, 86 answers, top answer an agency owner
discussing fee structure.

**Secondaries:** `amazon agency fees` · `amazon management cost` · `how much does an amazon agency
charge`

**FAQ — MEASURED PAA:** How much does an Amazon agency typically charge? · What do you charge? ·
Do you take a percentage of ad spend? · What happens if it does not work?

This is the strongest ranking target on the site, because the intent is commercial, the AI Overview
is absent, and you have a genuinely different answer to give.

---

## 8 · Structured data — currently missing everywhere

| Page | Schema |
|---|---|
| All | `Organization` + `WebSite` in the root layout |
| Service pages | `Service` with `provider`, `areaServed`, `serviceType` |
| Pages with FAQs | `FAQPage`, matching the visible questions exactly |
| `/about` | `Person` for the named operator |
| `/proof` | `CreativeWork` per artefact |

`lib/schema.ts` in the old build already did the Organization and WebSite graph. Carry it over
rather than rewriting it.

---

## 9 · Competitor comparison pages — my assessment

The question is whether to build "Hyprr vs SalesDuo", "My Amazon Guy alternatives" and similar.

**Not yet, and the reason is specific.** Comparison pages convert well because the reader is
already in-market. But they work by making claims about a named competitor's pricing, scope and
performance, and every claim has to be verifiable and kept current. With zero clients, no published
pricing of your own and no track record, a page comparing you to an agency with a decade of case
studies invites exactly the comparison you lose. It also puts a competitor's brand name on your
domain while they have the authority to outrank you for it.

**What to do instead, now:** answer the comparison inside the pages you already have. The strongest
version already exists in your copy — *"agencies paid on ad spend do this backwards, we are not
paid on ad spend"* — which is a competitor comparison that names a business model rather than a
company. That is defensible, true, and cannot be outranked by the competitor themselves.

**Revisit when two things are true:** you have three named clients you can describe, and you publish
a price or a price band. At that point `amazon agency alternatives` and one or two `X alternatives`
pages become the highest-converting pages on the site, and the brief for them is:

- H1 with the exact term, a one-paragraph honest summary, a feature matrix with a dated "as of"
  note, one section per alternative including who each is genuinely better for, and a verdict that
  does not pretend you win every row.
- Never claim a competitor lacks something without a public source.
- `Product` schema without invented ratings.

---

## 10 · What I would not chase

`amazon automation`, `amazon automation companies`, `is amazon automation a scam`,
`who owns my amazon seller account agency` — MEASURED: Reddit holds these and the top-voted answers
are hostile to agencies. A service page will not outrank a thirty-answer thread, and appearing there
associates you with the category those threads are warning about. Answer the objections inside your
own pages so you are the destination after the thread.

`ecommerce agency`, `marketplace agency` — directory-dominated, and out of scope now that Shopify
and DTC have moved to another domain.

---

## 11 · Ordered next steps

1. **Read the listing-optimization SERP.** It is the only page in the set with no evidence behind it.
2. **Connect a free volume source.** Bing Webmaster Tools or Keyword Planner. Everything in this
   map is intent-and-SERP-based until then, and one of these turns it into a ranked plan.
3. **Add the JSON-LD.** It is missing sitewide and it is the cheapest win on this list.
4. **Fix the homepage H1** so the two most valuable words on the site sit in the most weighted
   element.
5. **Ship the pages.** No blog, no comparison pages, no article set until the nine pages are live,
   the canonical points at the real domain, and something is ranking.

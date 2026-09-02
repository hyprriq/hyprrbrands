# Hyprr Brands — Keyword Map v2

**Purpose:** put evidence behind section K of `Hyprr_Homepage_Build_Spec_V1_FINAL.md`, which stated plainly that it contained no volumes and no difficulty scores. This session decides what the content sessions target and in what order the pages get built.

**Date:** 1 September 2026 · **Scope:** keywords only — no page content written, homepage copy untouched.

---

## 0. Data status — read this before using any table below

**No SEO data source is connected to this session.** DataForSEO, Ahrefs and Semrush are all `not_installed`; there is no keyword API in the tool list. So this map contains **no search volumes, no keyword difficulty scores, no CPC and no traffic estimates**, and none are invented.

What this session *did* add over section K is real: **21 live Google SERPs were opened and read directly in a browser** on 1 Sep 2026 (US, English, 20 results). That exposes things the previous pass could not see at all — AI Overview presence, People Also Ask text, Reddit and forum placement, ad density, directory occupancy, and entity collisions. Those are **observations**, not metrics, and every table below separates them.

| Column type | Status | What it means |
|---|---|---|
| **MEASURED** | Directly observed on the SERP | AI Overview present/absent · PAA questions · Reddit/UGC presence · directories · ad blocks · which domains rank · dominant page type · competitor prices printed on the SERP |
| **REASONED** | My judgement | Fit, priority, cannibalisation risk, build order, recommended primary term |
| **UNAVAILABLE** | Not obtainable here | Search volume · keyword difficulty · CPC · traffic value · trend direction |

**The single most important caveat is unchanged from section K:** a SERP can look weak because nobody searches it. Nothing below tells you how much demand exists. It tells you what Google currently rewards, and where the term does not mean what you think it means — which turns out to be the bigger problem.

---

## 1. Ground truth: the site has no inner pages

Before any keyword work, I read the live build at `D:\Projects\hyprrbrands` (read-only, nothing changed).

| Finding | Detail |
|---|---|
| **Routes that exist** | `app/page.tsx` only. One route: `/`. |
| **Service pages built** | **Zero.** None of the eleven URLs in section D exist. |
| **Hubs built** | Zero. `/build`, `/grow`, `/operate` do not exist. |
| **Sitemap / robots** | Neither `sitemap.ts` nor `robots.ts` is present. |
| **JSON-LD** | None. `app/layout.tsx` carries `title` and `description` only — no Organization, WebSite, WebPage or FAQPage graph. |
| **Meta description** | Still the pre-spec version. Section L's revised description has not been applied. |
| **Team section** | `TeamSection.tsx` exists but is unmounted from the homepage, with a README note that it is pending real photography. That is the correct call and it matches P.01. |
| **Fonts** | Archivo + JetBrains Mono, not the Space Grotesk + Inter named in the brand guidelines. Out of scope here, flagged only because it is a discrepancy. |

**Why this matters for this session:** build order is not one input among several — it is the only decision that has consequences right now, because nothing is built. And there is no risk of disrupting existing rankings, because there are none.

---

## 2. The eleven-page keyword table

Each page gets one primary. Where the term I would have recommended turned out to be unusable, the recommended primary changes and the reason is stated.

### `/wholesale-ecommerce`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | `amazon wholesale management service` | REASONED |
| **Rejected primary** | `wholesale ecommerce management` — see collision | MEASURED |
| AI Overview | **No** | MEASURED |
| Reddit | **Yes** — r/FulfillmentByAmazon, "How do you start your Wholesale on Amazon?", 60+ comments | MEASURED |
| PAA | Is FBA still profitable in 2026? · Does FBA cost money? · Is FBA on Amazon worth it? · How does Amazon wholesale work? | MEASURED |
| Ads | 1 block (Amazon Business, wrong geo) | MEASURED |
| Page type Google rewards | **Mixed** — 3 of 8 are agency service pages; the rest are Amazon's own docs, explainer blogs, Reddit and YouTube | MEASURED |
| Incumbents | amzdudes · supplykick · spctek · bellavix · junglescout · sell.amazon.com | MEASURED |
| Intent | Commercial investigation, with heavy informational admixture | REASONED |
| **Page-type verdict** | A pure service page is a **partial mismatch**. Ship a service page with a genuine explainer section, or it competes against Jungle Scout and Amazon's own documentation with a brochure. | REASONED |

**Supporting terms:** amazon wholesale agency · amazon wholesale account management · wholesale fba management · amazon wholesale sourcing service · buy box management · supplier approval and ungating · replenishment management

> ### Collision — kill this term
> **`wholesale ecommerce management` returns zero agencies.** The entire first page is B2B wholesale *platform software* — BigCommerce, Zoey, Salsify, Salesforce glossary, Core dna. Google reads "management" as a software feature set, not a service.
>
> This term appears in section K as a homepage secondary target, to be handed to `/wholesale-ecommerce` once it had links. **Remove it from both.** It cannot be won by a service page because Google is not ranking service pages for it.

---

### `/private-label`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | `amazon private label agency` | REASONED |
| **Rejected primary** | `private label brand building agency` — see collision | MEASURED |
| AI Overview | **No** | MEASURED |
| Reddit | **Yes** — r/FulfillmentByAmazon, private-label-as-first-attempt thread, 60+ comments | MEASURED |
| PAA | Is FBA still profitable in 2026? · What is Amazon private label? · How many Amazon sellers make over $100k? · FBM or FBA? | MEASURED |
| Directories | Clutch — "Top Amazon Marketing Agencies, Aug 2026" | MEASURED |
| Ads | 0 | MEASURED |
| Page type Google rewards | **Mixed, informational-leaning** — Amazon's own guide, Helium 10, Jungle Scout, a YouTube pack and Reddit outrank most agency pages | MEASURED |
| Incumbents | sell.amazon.com · pitget · helium10 · junglescout · canopymanagement · clutch | MEASURED |
| Intent | Split — people researching *how to do* private label, and a thinner layer hiring for it | REASONED |
| **Page-type verdict** | **Mismatch risk.** The service page will not displace Amazon's own guide. Win the hiring layer, and let a companion article carry the informational layer. | REASONED |

**Supporting terms:** private label product research service · amazon brand launch agency · private label sourcing agent · amazon product validation service · a+ content and listing launch

> ### Collision — do not use "private label brand building"
> `private label brand building agency` resolves to three unrelated things: **white-label / reseller agency services** (agencies serving other agencies), **personal branding agencies**, and a company literally named "Private Label". A local map pack of design studios appears on top. Almost nothing on the page is about building an ecommerce product brand.
>
> The phrase "Private label & brand building" is fine as a *service name* in the nav and footer. It is unusable as a *keyword*.

---

### `/shopify-dtc`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | `dtc ecommerce agency` | REASONED |
| AI Overview | **No** | MEASURED |
| Reddit | **Yes** — r/Entrepreneur, agency recommendation thread | MEASURED |
| PAA | What is a DTC ecommerce company? · Is Amazon a DTC company? · Is lululemon a DTC brand? · What are examples of DTC brands? | MEASURED |
| Ads | 0 | MEASURED |
| Page type Google rewards | **Even split** — agency service pages and "top 10 DTC agencies" listicles in roughly equal number | MEASURED |
| Incumbents | tribe.studio · newbird · webitmd · darkroomagency · forgedigitalmarketing · getrecharge | MEASURED |
| Collision | None | MEASURED |
| **Page-type verdict** | Service page is a **match** — but half the page is listicles, so being *listed* in third-party roundups is a parallel route to being ranked. | REASONED |

**Supporting terms:** direct to consumer agency · shopify agency for brands · d2c ecommerce agency · dtc storefront and conversion

> **Cannibalisation:** this page and `/dtc-growth` compete directly. See section 5.

---

### `/ecommerce-website-development`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | `ecommerce website development company` | REASONED |
| AI Overview | **No** | MEASURED |
| Reddit | **No** | MEASURED |
| PAA | How much does it cost to have an ecommerce website built? · Who are the best e-commerce web developers? · Do I need an LLC for ecommerce? · Which website builder is best? | MEASURED |
| Directories | **Clutch and GoodFirms both rank** | MEASURED |
| Ads | 0 | MEASURED |
| Page type Google rewards | **Agency service page** — the cleanest, most consistent page type of all 21 SERPs | MEASURED |
| Incumbents | scnsoft · orbitmedia · orangemantra · unifiedinfotech · sparxitsolutions · getdevdone — predominantly offshore development shops | MEASURED |
| Collision | None | MEASURED |
| **Page-type verdict** | **Clean match.** Technically the easiest page on this list to rank. | REASONED |

> ### The honest problem with this page
> It is the most rankable term and the **worst-fit buyer**. The SERP is offshore dev shops and the PAA leads with "how much does it cost to have a website built" — that is a project buyer with no operation attached, which section D of the spec explicitly names as the wrong client. Ranking it well will produce enquiries you do not want.
>
> **Recommendation:** build it late, keep it short, and write it to *disqualify* — lead with "we build storefronts for operations we also run" and say plainly that Hyprr does not take standalone website projects. A page that converts 5% of the right people beats one that converts 30% of the wrong ones.

---

### `/ecommerce-growth`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | `ecommerce growth agency` | REASONED |
| **AI Overview** | **YES — large, multi-source** | MEASURED |
| AI Overview cites | Eva Commerce · Human Marketing · marketwithboost · VIDEN Growth · Stryde · yourgrowthpartner.io · Shopify · a YouTube video. Carries its own "Traditional Agency vs Growth Agency" and "When to Hire One" sections | MEASURED |
| Reddit | **Yes** — r/ecommerce, "Marketing agency for E-commerce Growth" | MEASURED |
| PAA | How do I know if my digital marketing agency is legit? · Top 5 ecommerce companies? · Is ecommerce a legit way to make money? · Big 6 digital marketing agencies? | MEASURED |
| Ads | 0 | MEASURED |
| Page type Google rewards | **Mixed** — listicles and agency pages, with the AI Overview taking the top screen | MEASURED |
| Collision | **Minor** — the #1 organic result sells to agency owners scaling their own agency, not to brands hiring one | MEASURED |
| **Page-type verdict** | The AI Overview will suppress clicks. **Optimise to be cited in it, not to win the click**: definitional opening, a comparison block, explicit "when to hire" framing. | REASONED |

**Supporting terms:** ecommerce growth partner · growth agency for ecommerce brands · contribution margin growth · cross-channel ecommerce growth

> **This is the only page on the list where GEO matters more than ranking.** The AI Overview already contains a "Traditional Agency vs Growth Agency" comparison — that is the exact shape of passage Hyprr can write better than anyone cited in it, because Hyprr's answer involves a fee model the cited firms do not use.

---

### `/marketplace-growth`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | `amazon marketplace growth agency` | REASONED |
| AI Overview | **No** | MEASURED |
| Reddit | **Yes** — r/ecommerce, "Worth hiring an Amazon marketing agency to launch", 26 answers; **top answer is a warning about agency claims** | MEASURED |
| PAA | Can I make $1000 a month selling on Amazon? · Does Amazon marketplace still exist? · Top marketing agencies for Amazon? · Who should use Amazon DSP? | MEASURED |
| Directories | Sermondo — "Top 15 Amazon Marketing Full Service Agencies in the US" | MEASURED |
| Ads | 0 | MEASURED |
| Page type Google rewards | **Mixed** — roughly half agency service pages, half agency-ranking listicles | MEASURED |
| Incumbents | 10xcommerceco · salesduo · podean · amazongrowthlab · bebolddigital · frontrowgroup | MEASURED |
| Collision | None | MEASURED |
| **Page-type verdict** | Service page is a **match**, with listicle inclusion as a second route. | REASONED |

---

### `/dtc-growth`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | `dtc growth agency` | REASONED |
| AI Overview | **No** | MEASURED |
| Reddit | **No** in organic — but "Dtc growth agency reddit" appears in People Also Search For | MEASURED |
| PAA | What does "DTC growth" mean? · How do I know if my agency is legit? · Biggest DTC brands? · Big 6 agencies? | MEASURED |
| Ads | 0 | MEASURED |
| Page type Google rewards | **Listicle / roundup** — this is the most listicle-dominated SERP of the eleven | MEASURED |
| Incumbents | darkroomagency · mvrdigital · forgedigitalmarketing · flighted · theremarkableagency (publishes a $3,000–$15,000/mo planning range) · t2consulting · tribe.studio | MEASURED |
| **Page-type verdict** | **Mismatch.** Google rewards "best X agencies" roundups here, not service pages. A service page is fighting the wrong format. | REASONED |

> **Recommendation: do not build this page.** See section 5 — it duplicates `/shopify-dtc` and the SERP does not reward the format it would take.

---

### `/ppc-paid-media`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | `amazon ppc management agency` | REASONED |
| AI Overview | **No** | MEASURED |
| **Reddit** | **Yes — ranked position 1**, r/PPC, "Which PPC agency have you used", **73 answers**, with sub-threads of 100 and 87 answers | MEASURED |
| PAA | What are the top 10 Amazon PPC agencies? · **How much does an Amazon PPC agency typically charge?** · What is Amazon PPC? · What does a PPC agency do? | MEASURED |
| Directories | Clutch | MEASURED |
| Ads | **0** — on an explicitly commercial agency-hire query | MEASURED |
| Page type Google rewards | **Mixed, UGC-first** — Reddit at #1, then roundups, then service pages | MEASURED |
| Incumbents | clearadsagency (publishes fees from $2,500/mo) · smash.vc · 1digitalagency · thriveagency · amazowl | MEASURED |
| **Page-type verdict** | **Hard mismatch.** A service page is competing against a 73-answer Reddit thread for the top slot. | REASONED |

> **Two measured facts that should change how you treat PPC.** Reddit ranks first, which means the buyer here explicitly wants peer opinion rather than a vendor page. And **zero ads appear on a high-intent agency-hire query** — advertisers are not bidding, which is a weak but real signal about commercial value.
>
> This supports section H's existing call: PPC stays a capability inside Grow. Build the page for the visitor already on your site, not for this SERP.

---

### `/ecommerce-operations`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | **None available that this page can own** — see below | REASONED |
| Term tested 1 | `ecommerce operations agency` — mixed-incoherent: a management consultancy, offshore dev shops, a *recruitment* listicle, Clutch and Semrush directories, a VA shop. Ads present. PAA drifts to "Is eCommerce a legit way to make money?" | MEASURED |
| Term tested 2 | `ecommerce operations outsourcing` — resolves to **offshore BPO** with hourly pricing printed on the SERP: $7/hour, $7–$42/hour | MEASURED |
| AI Overview | No, on both | MEASURED |
| Reddit | No, on both | MEASURED |
| **Page-type verdict** | Term 1 is **claimed by the homepage** in section K. Term 2 is a **price-anchor collision** — ranking beside $7/hour BPO frames Hyprr as labour arbitrage. | REASONED |

> ### This is the weakest page in the architecture
> `ecommerce operations agency` is the homepage's declared primary target in section K. If `/ecommerce-operations` also targets it, the two pages compete and Google picks one — usually not the one you intended. There is no clean second term: the obvious alternative resolves to offshore back-office outsourcing at hourly rates.
>
> **Recommendation:** keep `ecommerce operations agency` on the homepage, and either fold `/ecommerce-operations` into `/operate` as the hub itself, or narrow it to `outsourced ecommerce operations for marketplace sellers` and accept it is a conversion page rather than an acquisition page. See section 5.

---

### `/marketplace-management`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | `amazon seller account management` | REASONED |
| **Rejected primary** | `amazon marketplace management` — see collision | MEASURED |
| **AI Overview** | **YES** — cites Jungle Scout, eStore Factory, Seller Candy, amzdudes, **and Reddit** | MEASURED |
| **What the AI Overview says** | It cites r/AmazonSeller to the effect that **you should avoid handing a new account entirely to third-party management** | MEASURED |
| Reddit | Yes, via the AI Overview citation | MEASURED |
| PAA | How much are Amazon FBM fees? · What is Amazon account management? · How much do Amazon account managers make? · Business account vs seller account? | MEASURED |
| Ads | 0 | MEASURED |
| Page type Google rewards | **Mixed, navigational-leaning** — the top two organic slots are Amazon's own Seller Central account and login pages | MEASURED |
| **Page-type verdict** | **Hard.** Amazon owns the top slots, a chunk of the query is people trying to log in, and an AI Overview sits above every agency page telling readers not to do this. | REASONED |

> ### Two collisions, one of them severe
> **`amazon marketplace management` returns AWS.** The page is dominated by Amazon Web Services — AWS Marketplace homepage, AWS Marketplace Management Portal, seller-guide documentation, "Controlling access to AWS Marketplace Management Portal". Google reads this phrase as a cloud-software entity, not an ecommerce service. Only one genuine agency result appears.
>
> Section J gives `/marketplace-management` **build priority 4**, on the reasoning that its incumbent set looked thinnest. The incumbent set looked thin because **the query is about a different product**. This is the single largest correction in this document.
>
> **The fallback term is also hostile.** On `amazon seller account management`, the AI Overview itself argues against outsourcing account management — a negative trust signal sitting above every commercial result. Hyprr's ownership argument is the right answer to that objection, but you are arguing uphill on a page Amazon owns.

---

### `/shopify-management`

| Field | Value | Type |
|---|---|---|
| **Recommended primary** | `shopify store management services` | REASONED |
| AI Overview | **No** | MEASURED |
| Reddit | **No** | MEASURED |
| PAA | **Can I hire someone to manage my Shopify store?** · Shopify's biggest competitor? · Can you pay someone to set up your Shopify store? · Does Shopify have a CMS? | MEASURED |
| **Directories** | **Fiverr** (E-Commerce Management, "$5 to $80") and **Upwork** ("$25 to $79") both rank | MEASURED |
| Ads | 0 | MEASURED |
| Page type Google rewards | **Mixed** — agency pages, freelance gig categories and VA providers | MEASURED |
| **Page-type verdict** | **Price-anchor collision.** Two top slots are freelance marketplaces displaying $5–$80. A managed-operation offer ranked beside them is read as an expensive freelancer. | REASONED |

> The first PAA question — *"Can I hire someone to manage my Shopify store?"* — is genuinely the right question and worth answering directly on the page. The rest of the SERP is a warning about who else answers it.

---

## 3. The twelfth page test: does "Reporting & performance" have demand?

Section D asserts it does not, and instructs that it stay a capability inside `/ecommerce-operations` rather than becoming a page. The instruction for this session was to **test that claim rather than assume it**.

**Tested:** `ecommerce performance reporting services`

| Observation | Result | Type |
|---|---|---|
| AI Overview | No | MEASURED |
| Reddit | No | MEASURED |
| Ads | 0 | MEASURED |
| Page type | **Software / SaaS — total collision** | MEASURED |
| Ranking domains | supermetrics · databox · ramp · twominutereports · tapclicks · shopify · sarasanalytics · netsuite | MEASURED |
| Service pages ranking | **Zero.** The word "services" is ignored entirely. | MEASURED |

**Verdict: the spec was right, and now it is measured rather than assumed.** Every result is reporting *software* or a metrics guide. There is no service-provider layer in this SERP at all. Keep it as a capability, link it to `/ecommerce-operations#reporting`, and do not build a page.

---

## 4. Answers to the three open questions from section K

### 4a. Do AI Overviews appear on the cost and ownership queries?

**Mostly no — and the exception is worse than an absence.** Measured across 21 SERPs, AI Overviews appeared on only **two**.

| Query | AI Overview | Note |
|---|---|---|
| `amazon agency pricing` (cost cluster) | **NO** | MEASURED |
| `who owns my amazon seller account agency` (ownership cluster) | **NO** | MEASURED |
| `ecommerce growth agency` | **YES** | Large, multi-source, with its own comparison sections |
| `amazon seller account management` | **YES** | **Cites Reddit advising against third-party account management** |
| All other 17 | NO | MEASURED |

**What this means for the five patterns in section K.** The two clusters the strategy leans on hardest — cost and ownership — are **not** currently mediated by an AI Overview. That is good news: the click is still available, and a well-made page can capture it directly rather than fighting for a citation.

But the ownership cluster's adjacent commercial query *is* mediated, and the AI Overview there is actively hostile: it cites Reddit to tell readers not to hand their account to a third party. Hyprr's ownership model is the correct rebuttal — the client keeps the account and approves every purchase — but it must be written as a rebuttal to a stated objection, not as a feature. **The objection is now on the page above your competitors, in Google's own voice.**

**Caveat:** AI Overview presence is personalised and volatile. This is a snapshot from one session on 1 Sep 2026, not a stable property. Re-check quarterly.

### 4b. Does Reddit hold positions in the objection SERPs?

**Yes — emphatically. The spec's "zero Reddit across twenty searches" was a tooling artefact, and it is now corrected.**

Reddit appeared on **10 of 21** SERPs measured.

| Query | Reddit placement | Type |
|---|---|---|
| `amazon ppc management agency` | **Position 1**, r/PPC, 73 answers, plus threads of 100 and 87 answers | MEASURED |
| `is amazon automation a scam` | r/Scams — a $30k done-for-you loss thread | MEASURED |
| `amazon agency pricing` | r/FulfillmentByAmazon, 86 answers; top answer an agency owner discussing fee structure | MEASURED |
| `who owns my amazon seller account agency` | r/AmazonSeller, 30 answers; **top answer: "Nah, don't trust any agencies"** | MEASURED |
| `amazon automation companies` | r/AmazonFBA, referencing "My $7,500 Experience with an Amazon Automation…" | MEASURED |
| `amazon marketplace growth agency` | r/ecommerce, 26 answers; top answer warns about agency claims | MEASURED |
| Also present | `amazon wholesale management service` · `amazon private label agency` · `dtc ecommerce agency` · `ecommerce growth agency` | MEASURED |

**The pattern that matters:** Reddit clusters on **hiring-decision and trust queries**, and on those queries the top-voted answer is consistently *sceptical of agencies*. Your best-qualified buyer is reading a peer telling them not to hire anyone.

**Strategic consequence.** Three of the five patterns in section K assume you can win these queries with a page. On the trust queries you largely cannot outrank Reddit, and you should not plan to. What you can do:

1. **Be the firm that survives the Reddit test.** The published documents, the ownership structure and the named team are exactly what someone checks after reading that thread. The page's job on those queries is to be the destination *after* the thread, not instead of it.
2. **Participate honestly where it is allowed** — genuine, disclosed, non-promotional answers in the relevant subreddits. Note this is a slow, rules-bound channel and easy to get wrong.
3. **Do not buy the SERP.** Zero ads appeared on 19 of 21 queries, including every high-intent one. Advertisers are not competing here; that is information, not an invitation.

### 4c. Volume and difficulty on the four homepage terms

**Unavailable. This is the one question this session could not answer**, and I will not manufacture numbers for it. What was measured instead:

| Homepage term | Volume | Difficulty | Measured SERP character |
|---|---|---|---|
| `ecommerce operations agency` | UNAVAILABLE | UNAVAILABLE | Confirmed **incoherent** — a management consultancy, two dev shops, a recruitment listicle, a VA service, plus Clutch and Semrush directories. Ads present. PAA drifts to "Is eCommerce a legit way to make money?". Google has no settled answer, which is what section K claimed. |
| `ecommerce management services` | UNAVAILABLE | UNAVAILABLE | **Partial collision.** A Google Business Profile for a company literally named "Ecommerce Management" occupies the top of the page. Fiverr ranks. PAA drifts to "What is the salary of an eCommerce manager?" — job-seeker intent mixed with buyer intent. |
| `amazon and walmart marketplace management` | UNAVAILABLE | UNAVAILABLE | **Not tested as an exact phrase.** The `amazon marketplace management` component returns AWS (see above), which makes the compound phrase unreliable as a target. Treat it as descriptive copy only. |
| `wholesale ecommerce management` | UNAVAILABLE | UNAVAILABLE | **Full collision** — B2B platform software, zero agencies. **Remove as a target.** |

**Net effect on the homepage:** section K's primary — `ecommerce operations agency` — is confirmed as the right call for the reason given, an unsettled SERP. Two of the three secondaries are damaged: `wholesale ecommerce management` should be dropped, and `amazon and walmart marketplace management` should be demoted from target to descriptive phrasing. `ecommerce management services` survives but is noisier than assumed.

**No homepage copy changes are required** — section K already says these are carried naturally by the copy rather than targeted. This changes the *targeting document*, not the page.

---

## 5. Cannibalisation map

Eleven service pages, three hubs and a homepage in one tight topical space. Here is what actually competes.

| # | Pages in conflict | Severity | What separates them today | Verdict |
|---|---|---|---|---|
| **1** | Homepage vs `/ecommerce-operations` | **Critical** | Nothing — both target `ecommerce operations agency` | The homepage keeps the term. `/ecommerce-operations` has no viable alternative primary. **Merge it into the `/operate` hub.** |
| **2** | `/shopify-dtc` vs `/dtc-growth` | **Critical** | Almost nothing — `dtc ecommerce agency` and `dtc growth agency` return overlapping incumbents (tribe.studio, darkroomagency, forgedigitalmarketing rank on both) | **Drop `/dtc-growth`.** Its SERP rewards listicles, not service pages. Fold growth content into `/shopify-dtc`. |
| **3** | `/marketplace-growth` vs `/marketplace-management` | **High** | Both are Amazon-agency terms with overlapping incumbents (salesduo, bebolddigital appear on both) | Keep both, but split hard: **growth = ranking, content, buy box, expansion**; **management = account health, cases, compliance, day-to-day**. If the copy blurs, merge. |
| **4** | `/ecommerce-growth` vs `/marketplace-growth` vs `/dtc-growth` | **High** | Parent-and-children on the same head term | With `/dtc-growth` dropped, `/ecommerce-growth` becomes the cross-channel parent and `/marketplace-growth` the Amazon-specific child. Workable. |
| **5** | `/shopify-dtc` vs `/shopify-management` vs `/ecommerce-website-development` | **Medium** | Three Shopify-adjacent pages | Distinct enough *if* strictly scoped: **build the store** / **run the store** / **the build itself**. Highest risk of three thin pages. |
| **6** | `/wholesale-ecommerce` vs `/marketplace-management` | **Medium** | Wholesale is the engagement, management is the ongoing service — but both talk about Amazon accounts | Acceptable with discipline. |
| **7** | Hubs vs their children | **Low** | The 400-word cap | **Verified as sufficient** — see below |

### Is the 400-word hub cap enough?

**Yes, but not on its own.** Word count is not what causes hub cannibalisation; *keyword targeting* is. A 400-word hub that targets `ecommerce growth agency` still competes with `/ecommerce-growth` however short it is.

Three rules make the cap work:

1. **Hubs target navigational and category phrasing only** — "ecommerce build services", "how Hyprr grows ecommerce businesses" — never a child's primary term.
2. **Hubs carry no FAQ block.** Duplicate FAQ across a hub and its children is the most common self-inflicted duplication in this architecture.
3. **Hubs link down, children link up, children do not link sideways to a competing sibling** with the sibling's primary term as anchor text.

With `/ecommerce-operations` merged into `/operate`, the `/operate` hub becomes a real page with a job, which resolves conflict 1 and strengthens the hub at the same time.

### Recommended consolidation: 11 pages → 9

| Action | Page | Reason |
|---|---|---|
| **Drop** | `/dtc-growth` | Duplicates `/shopify-dtc`; SERP rewards listicles not service pages |
| **Merge into `/operate`** | `/ecommerce-operations` | Its only viable primary belongs to the homepage |
| Keep, retargeted | `/wholesale-ecommerce` · `/private-label` · `/marketplace-management` | New primaries per section 2 |
| Keep as-is | `/shopify-dtc` · `/ecommerce-growth` · `/marketplace-growth` · `/ppc-paid-media` · `/shopify-management` · `/ecommerce-website-development` | — |

This is a recommendation, not a decision — the twelve-service taxonomy in section D is load-bearing for the homepage chips, footer and nav. **You can keep all twelve service *names* while building nine *pages***: the dropped two become anchored sections on their parent pages, and the chips link to those anchors. The architecture survives intact.

---

## 6. Revised build order

Section J's order was reasoned from apparent incumbent weakness. Two of its top four assumptions do not survive contact with the SERPs.

| New | Page | Old | Move | Reason — MEASURED unless noted |
|---|---|---|---|---|
| **1** | `/how-we-work` (+ `#fees`) | 1 | — | Unchanged. Five homepage CTAs point here and the page does not exist. Nothing else matters until it does. |
| **2** | `/documents` | 2 | — | Unchanged. Design-mandated CTA, and the transparency claim in A.14 is false until one document is live. |
| **3** | `/wholesale-ecommerce` | 3 | — | Holds. Agency pages do rank here — but **retarget to `amazon wholesale management service`**; the planned term returns software only. |
| **4** | `/ecommerce-growth` | 9 | **▲ 5** | **Has an AI Overview with a built-in "Traditional Agency vs Growth Agency" comparison.** That is a citation slot Hyprr can win on the strength of a fee model none of the cited firms use. Highest-leverage page in the set. |
| **5** | `/private-label` | 5 | — | Holds, **retargeted to `amazon private label agency`**. The planned term returns white-label and personal-branding agencies. |
| **6** | `/marketplace-growth` | 8 | **▲ 2** | Cleanest Amazon-side SERP with no collision: half agency pages, half listicles, no AI Overview, no Amazon-owned results. The most winnable marketplace term. |
| **7** | `/shopify-dtc` | 7 | — | Holds. No collision, service pages rank, listicle inclusion is a second route. Now also absorbs DTC growth. |
| **8** | `/ecommerce-website-development` | 10 | **▲ 2** | Cleanest page type of all 21 SERPs — but deliberately **not higher**, because it attracts the wrong buyer. Build it to disqualify. |
| **9** | `/marketplace-management` | **4** | **▼ 5** | **The largest correction.** Its planned primary returns AWS. Its fallback is topped by Amazon's own login pages and an AI Overview that argues against outsourcing account management. It was ranked 4 because the incumbents looked thin; they looked thin because the query is about a different product. |
| **10** | `/shopify-management` | 13 | **▲ 3** | Fiverr and Upwork rank with $5–$80 price anchors, so the traffic is low-value — but the PAA question "Can I hire someone to manage my Shopify store?" is exactly right, and it is cheap to answer. |
| **11** | `/ppc-paid-media` | 12 | **▼ ~** | Reddit at position 1 with 73 answers, and **zero ads on a commercial query**. Build for on-site visitors, not for this SERP. Section H's call stands. |
| — | ~~`/dtc-growth`~~ | 11 | **DROPPED** | Duplicates `/shopify-dtc`; SERP rewards roundups over service pages. |
| — | ~~`/ecommerce-operations`~~ | 6 | **MERGED** | Into `/operate`. Its only viable primary is the homepage's. |

**Three moves that matter most:** `/marketplace-management` down five, `/ecommerce-growth` up five, and two pages removed. Everything else is a refinement.

**Before any of it:** the site currently has no `sitemap.ts`, no `robots.ts` and no JSON-LD. Section N requires AI crawlers to be explicitly allowed and section M specifies the entity graph. None of it is implemented. That is not a keyword task, but it is upstream of every keyword task and it is a day of work.

---

## 7. Article plan

Section K named five patterns Hyprr is placed to own. Four are supported by measured data. One was not testable in this session and is held back.

### Article 1 — Account ownership · **strongest evidence of the four**

> **Working title:** Who actually owns your Amazon seller account when an agency runs it?
> **Target service page:** `/marketplace-management` · secondary link to `/how-we-work`

**Measured support.** On `who owns my amazon seller account agency`, exactly one result answers the question — SupplyKick's "Why Brands Should Own Their Amazon Seller Account" at position 1. Everything else is generic agency-hire content. Amazon's own ranking page is about beneficial-owner *verification*, a different meaning of "owns". And one ranking agency page markets that it "takes full ownership of your Amazon Seller Central account" — the precise arrangement the searcher is worried about, ranking on the query expressing the worry.

**Why Hyprr wins it.** SupplyKick operates partly as a reseller, so it cannot make the unqualified claim. Hyprr can. No AI Overview on this query, so the click is available.

**What it must contain:** who is registered as the account owner · how permissioned service-provider access actually works · what happens to the account when the arrangement ends · the questions to ask any provider. **Do not name the competitor** that markets account ownership — describe the pattern.

### Article 2 — Fee-model mechanics

> **Working title:** Retainer, revenue share or margin share — what does each fee model reward?
> **Target service page:** `/how-we-work#fees` · secondary link to `/wholesale-ecommerce`

**Measured support.** The `amazon agency pricing` SERP is unusually transparent: Seller Sage ranks with a bare public pricing page showing four tiers from $5,500 to $18,500/mo; SupplyKick publishes $1,500–$25,000+/mo; BellaVix $2,000–$2,500/mo; WebFX $9,000–$60,000/mo; Helium 10 cites 8–15% of ad spend; Darkroom 15–30%. A Reddit thread with 86 answers ranks, its top answer an agency owner discussing a "$4K or 5%" structure. No AI Overview.

**Why Hyprr wins it.** Nine near-identical "what agencies charge" posts hold this page and not one is written by a firm charging on realised margin. This is first-hand mechanics nobody can paraphrase.

**Constraint:** worked examples use obviously arbitrary round numbers, labelled as demonstrating the calculation, never as a projection. Per section A.21 and the earnings-claim gate.

### Article 3 — The automation objection · **largest audience, hardest SERP**

> **Working title:** What "Amazon automation" actually is, and how to read the contract
> **Target service page:** `/wholesale-ecommerce` · secondary link to `/how-we-work`

**Measured support.** `is amazon automation a scam` is almost entirely UGC and news: Trustpilot at #1, an Amazon Seller Central forum thread, r/Scams with a $30k done-for-you loss thread, a YouTube exposé at 20.5K views, a Facebook group thread, and CNBC reporting that the FTC sued an automation company over a passive-income scheme. Only two commercial pages appear, one of them an agency ranking on a scam-defence angle. Competitors' own pages cite $10,000–$30,000 upfront fees.

**Why this is worth writing anyway.** You will not outrank Trustpilot or Reddit. But this is the highest-intent audience in the category — people with capital actively trying not to be defrauded — and the article's job is to be the thing they find *after* the thread, and to be linkable and citable. Note the SERP shows a vendor self-defence post ranking, which is what a defensive version of this article would look like. Write the useful version instead.

**Editorial constraint:** name only entities with a filed government action behind them. Everything else is described by pattern. This is defamation protection and it is also what makes the piece citable.

### Article 4 — Advertising judged on margin

> **Working title:** What Amazon and Walmart PPC actually costs when nobody is watching the margin
> **Target service page:** `/ppc-paid-media` · secondary link to `/marketplace-growth`

**Measured support.** The `amazon ppc management agency` PAA asks directly: *"How much does an Amazon PPC agency typically charge?"* Clear Ads publishes fees from $2,500/mo on the ranking page. Reddit holds position 1 with 73 answers of peer opinion about agencies. No AI Overview.

**Why Hyprr wins it.** The category reports ACoS. Contribution margin is a different argument and it is consistent with how Hyprr charges — the article and the fee model reinforce each other.

### Held back — Amazon and Walmart as one operation

Section K's fifth pattern. **Not tested in this session** — no Walmart-specific query was run, so I have no measured basis for it here. The reasoning in section K may well hold; it simply has no evidence attached yet. Test `walmart marketplace management`, `walmart seller account management` and `walmart marketplace agency` before committing writing time.

### Linking rule — the one that decides whether this works

Section J: *every article carries at least one contextual link into a service page or `/how-we-work`, placed in the body.* Each article above names its target page. Two additions the measured data justifies:

- **Articles 1 and 3 are trust content, not acquisition content.** Their conversion path is article → `/documents` → `/contact`, because the reader arrives sceptical and documents are what resolve scepticism. Link them to `/documents` as well as the service page.
- **Measure article → service page from week one, not month six.** These four articles will out-traffic all nine service pages combined, because the informational SERPs are the ones a new domain can actually enter.

---

## 8. What the data changed

The data changed the plan in three specific ways and left the strategy intact. First, it broke four keyword targets outright: `wholesale ecommerce management` returns B2B platform software with no agencies on the page, `private label brand building agency` returns white-label resellers and personal-branding studios, `ecommerce performance reporting services` returns reporting SaaS with no service layer at all, and — most consequentially — `amazon marketplace management` returns Amazon Web Services, which means `/marketplace-management` was ranked fourth in the build order on the strength of an incumbent set that looked thin only because the query is about a different product entirely; it moves to ninth. Second, it corrected two factual claims in section K: Reddit is not absent from these SERPs but present on ten of twenty-one and ranked first on the PPC agency query with seventy-three answers, so the previous "zero Reddit" reading was a tooling artefact and is now retired; and AI Overviews turn out to be rare rather than pervasive, appearing on only two queries — crucially **not** on the cost or ownership clusters the strategy leans on, which means those clicks are still winnable, though the AI Overview that does exist on `amazon seller account management` cites Reddit to argue against outsourcing account management and now sits above every competitor as a stated objection Hyprr has to answer. Third, it exposed an architecture problem the previous pass could not see: eleven service pages in this space produce at least two unavoidable collisions — the homepage and `/ecommerce-operations` want the same term, and `/shopify-dtc` and `/dtc-growth` want overlapping ones — so nine pages is the honest number, achievable without touching the twelve-service taxonomy by turning two of them into anchored sections. What did **not** change is the strategy: the ownership gap is real and better evidenced than before, the fee-model wedge is confirmed by competitors publishing prices on the very SERP Hyprr would enter, and the decision to keep PPC as a capability rather than a business is now supported by measurement rather than inference. And the honest limitation stands undiminished — **there is still not a single search volume in this document.** Everything above tells you what Google rewards and where terms mean something other than what they appear to; none of it tells you how many people are searching. Connect Semrush or Ahrefs and re-run section 2 before anyone budgets against this.

---

## 9. What to verify next

| # | Item | Why it could change the plan |
|---|---|---|
| 1 | **Connect Semrush, Ahrefs or DataForSEO** | The one thing this session could not do. Several terms with clean SERPs may have negligible volume — a weak SERP is often weak because nobody searches it. Priority: the four homepage terms and the nine surviving page primaries. |
| 2 | **Test the Walmart cluster** | Article 5 and part of the marketplace positioning rest on it, and it was not measured here. |
| 3 | **Re-check AI Overview presence quarterly** | It is volatile and personalised. Two of twenty-one today is a snapshot, not a property. |
| 4 | **Decide the consolidation** | 11 pages or 9. Everything in section 6 assumes 9. |
| 5 | **Ship sitemap, robots and JSON-LD** | None exist. Upstream of every keyword decision in this document. |

**Method note.** 21 Google SERPs read directly in-browser on 1 September 2026, US/English, 20 results per page. Site structure read from `D:\Projects\hyprrbrands` on the same date; nothing in that folder was modified. Search volume, keyword difficulty, CPC and trend data were unavailable throughout and no figure of that kind appears anywhere in this document.

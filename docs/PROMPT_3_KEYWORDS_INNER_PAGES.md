# Prompt 3 — new Cowork session: keyword map for the inner pages

Start a **new Cowork session in the Hyprr Brands project**. Do not run this in the homepage
thread. Paste everything below.

---

You are working in the Hyprr Brands project. Before anything else, read
`claude/Hyprr_Homepage_Build_Spec_V1_FINAL.md` — sections **D** (service taxonomy and URLs),
**J** (sitemap and build priority), **K** (the existing keyword map) and **O** (the service-page
framework). They are the source of truth and they are already written.

**Scope: keywords only. Do not write page content in this session, and do not touch the
homepage copy — it is final.** The output of this session decides what the content sessions
target and what order the pages get built in.

## Why this session exists

Section K states plainly that it contains **no search volumes and no difficulty scores**,
because no data source was connected. Every judgement in it is reasoned from live SERPs
observed on 31 Aug 2026. That is reliable for deciding page shape. It is **not** reliable for
deciding budget or build order — a SERP can look weak because nobody searches it. Section P.10
lists this as an outstanding input.

Your job is to put real numbers behind it, for the eleven service pages.

## Task

Run `/claude-seo:seo`. Use `claude-seo:seo-dataforseo` if a DataForSEO connection is available;
`claude-seo:seo-cluster` for the grouping step. **If no data source is connected, say so in one
line and run in manual-data mode — do not invent volumes and do not present estimates as
measurements.** That distinction is the whole point of this session.

**1 — One primary keyword per service page.** Eleven pages, eleven primary terms. Section D
gives the service and its URL; section O's rule applies: *if two pages target the same term,
one of them should not exist.* Flag any collision rather than splitting the difference.

| Page | URL |
|---|---|
| Wholesale ecommerce | `/wholesale-ecommerce` |
| Private label & brand building | `/private-label` |
| Shopify / DTC | `/shopify-dtc` |
| Ecommerce website development | `/ecommerce-website-development` |
| Ecommerce growth | `/ecommerce-growth` |
| Marketplace growth | `/marketplace-growth` |
| DTC growth | `/dtc-growth` |
| PPC & paid media | `/ppc-paid-media` |
| Ecommerce operations | `/ecommerce-operations` |
| Marketplace management | `/marketplace-management` |
| Shopify management | `/shopify-management` |

Eleven, not twelve. "Reporting & performance" is a capability inside `/ecommerce-operations`,
not a page — the spec is explicit, and it says the term has no independent demand. **Test that
claim with data rather than assuming it**, and if it turns out to have real volume, say so.

**2 — Per page, deliver:** primary keyword with volume and difficulty · 5–10 supporting terms
· the search intent · **the page type the live SERP actually rewards for that term** (taken
from the SERP, not assumed — a service page targeting a term where Google ranks guides is a
page-type mismatch and will not rank however well it is written) · and whether AI Overviews
appear.

**3 — Re-order the build priority.** Section J gives a priority column reasoned from SERP
impression. Re-derive it from the data and say explicitly which pages move and why. The
current order puts `/wholesale-ecommerce` and `/marketplace-management` first on the grounds
that their incumbent sets look thinnest.

**4 — Answer the three open questions from section K**, because each can change strategy:
  a. Do AI Overviews appear on the cost and ownership queries? The five "patterns Hyprr is
     placed to own" lean heavily on those two clusters.
  b. Does Reddit hold positions in the objection SERPs? The spec found zero Reddit results
     across twenty searches and flags that as implausible — confirm or correct it.
  c. Real volume and difficulty on the four homepage terms, so the homepage's own targeting
     can be checked: *ecommerce operations agency* · *ecommerce management services* ·
     *amazon and walmart marketplace management* · *wholesale ecommerce management*.

**5 — Cannibalisation check.** Eleven service pages, three hubs and a homepage in one tight
topical space. Map which pages compete with each other and with the hubs, and say what
separates them. Hubs are capped at 400 words specifically to stop this; verify that is enough.

**6 — The four content clusters worth owning.** Section K identifies five patterns Hyprr is
placed to own. Turn the ones the data supports into an article plan, each mapped to the service
page it must link into. Section J's rule: *every article carries at least one contextual link
into a service page or `/how-we-work`, placed in the body.* Articles will out-traffic service
pages heavily; if that link is weak you build an audience and no pipeline and will not notice
for six months.

## Deliver

A single markdown file, written back to the project as `claude/Hyprr_Keyword_Map_v2.md`:

- The eleven-page table, with a column clearly separating **measured** figures from **reasoned**
  judgements. Never blend them.
- The revised build order with the reason for each move.
- Answers to 4a–4c.
- The cannibalisation map.
- The article plan with its target service page per article.

Then say in one paragraph what the data changed about the plan — including if it changed
nothing, which is a real result and worth stating plainly.

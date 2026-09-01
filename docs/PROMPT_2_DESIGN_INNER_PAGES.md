# Prompt 2 — design: inner-page layout system

Replaces the earlier design brief. This is the only design document for inner pages — work
from this one file.

**Deliverable: a layout specification, not finished visuals.** The homepage was built directly
in code from a written spec and it worked. Do the same here.

---

## What already exists — do not redesign any of it

**The content skeleton is settled.** `Hyprr_Homepage_Build_Spec_V1_FINAL.md` section O fixes,
for every service page: the field list, the **eight H2s in a fixed order**, and per-page
requirements for all eleven services. That is not a design question and it is not open. The
reason the H2 order is fixed is that eleven pages have to read as one system rather than
eleven separate commissions.

**The design system is live and closed.** hyprrbrands.vercel.app is the reference build.
Tokens are in `app/globals.css`. Take everything from there.

**Two parts of the build spec are stale — ignore them.** Section E's "solid violet button" and
section F's "Slate" both predate the palette work. Violet is links and focus only; Slate is
retired.

## The live rules you are designing inside

| Rule | Value |
|---|---|
| Grounds | White · Bone `#EDEBE6` · Petrol `#0A4E5C` · engine bands |
| Ground alternation | Never two coloured bands adjacent. Never two dark sections adjacent. A band must be justified by its engine or it is White/Bone. |
| Dark surfaces | A dark *section ground* is Petrol. A dark *panel inside* a light or band section is Ink `#17171A`. |
| Controls | A CTA is a control, not a surface — it is exempt from ground rules. Primary CTA = Petrol on light grounds, Citrus `#FFC84A` on the Petrol field. One primary per screenful. |
| Colour code | Citrus = Build, Lime `#B8F34A` = Grow, Aqua `#45D8C0` = Operate. Always. If you cannot say which engine a colour instance belongs to, it is a neutral. |
| Engine tiers | engine (marks ≤40px) · field tints `#FFE3A3` `#DDF2AC` `#B6E7DC` (panels 120–600px) · bands `#FFF3D6` `#EEF9D9` `#E0F4F0` (full-bleed grounds) |
| Aqua on Petrol | Aqua is a mark at ≥12px on Petrol, never a text colour — same hue family, it fails as text. |
| Radius | Exactly four: 8 · 16 · 28 · 40 |
| Type | Six steps. 17px body floor. Nothing that is a sentence below 16px. |
| Grids | Explicit column counts wherever position carries styling. `auto-fit` has caused four separate bugs on this project. |
| Chroma budget | The page currently measures 0.0303 area-weighted chroma against a 0.030 floor. **Neutralising a surface now requires naming what gains colour in exchange.** |

## Deliverable 1 — four templates, not eleven page designs

| Template | Pages | What makes it structurally different |
|---|---|---|
| **Service** | the 11 services | The eight-H2 spine from section O. The workhorse; gets the most attention. |
| **Hub** | `/build` `/grow` `/operate` | Under 400 words. Four service cards, one connective section, one CTA. Must not compete with its own children — a hub that reads as a better version of its service pages dilutes them. |
| **Company** | `/how-we-work` `/about` `/contact` | Long-form argument, not a service sell. `/how-we-work` is the most-linked page on the site (five homepage CTAs) and carries the `#fees` anchor. |
| **Tool** | `/true-cost` `/documents` | Interactive or a list of assets. Almost no marketing furniture. `/documents` must not look like a lead-gen page — it is ungated by design and the design has to signal that. |

For each template, specify **section by section**: ground colour, grid, what sits left and
right, where visual slots go, and the mobile stack order. Match the fidelity of the homepage
build spec.

## Deliverable 2 — three visual variants inside the Service template

The eight H2s stay identical across all eleven. What changes is what fills **"What you get"**
and the **proof block**, because the work produces different evidence.

**Variant A — Operational** (`/wholesale-ecommerce`, `/marketplace-management`,
`/ecommerce-operations`, `/ecommerce-growth`, `/marketplace-growth`, `/ppc-paid-media`)
The proof is *artefacts*: a purchase order, an approval gate, a replenishment cadence, a
reporting sample. Documents and tables, not photography. The homepage stack-card art panels
are exactly the right register — white panel, engine-coloured top rule, mono labels, real-looking
rows. Reuse that component. No figures in any of them.

**Variant B — Gated sequence** (`/private-label`)
The proof is *a process with refusal points*: research verdict → supplier → samples and QC →
compliance (liability, testing, certification, importer of record) → launch. This is the only
page that genuinely wants a stepped or timeline visual, and the compliance gates need real
room — section O insists on them and they are the most trust-generating content on the page.
Design the gate as a visible stop, not a step in a happy path.

**Variant C — Storefront craft** (`/shopify-dtc`, `/ecommerce-website-development`,
`/dtc-growth`)
The proof is *the storefront itself*. This is the one cluster where visual quality is the
argument, because Hyprr sells design here — a mediocre DTC page loses the enquiry on sight.
Give this variant the most design budget. It is also where real screenshots earn their place.

## Deliverable 3 — visual slot inventory

Every image, diagram or interactive block across the eleven pages, each with:

- aspect ratio and where it sits
- what kind of thing it is: photograph · diagram · UI artefact · interactive
- **whether it can be built from type and CSS instead of commissioned**

Photography is the longest lead time on this project and is already the reason the homepage
team section is unbuilt. **Assume it is scarce.** Design so most slots need none, and mark the
few that genuinely do. Never reserve an aspect ratio for an asset with no delivery date — that
mistake is already on the record here.

## Constraints that will otherwise be found late

- No stock people, no generated faces, no placeholder names, no illustrated avatars.
- No figures in visuals anywhere: no revenue, no growth percentages, no projected returns, no
  axis values. Soft launch, and it applies to every page.
- Every visual reserves its ratio or CLS regresses.
- **Design the service pages mobile-first.** They take their traffic from search and this
  category is majority mobile. The homepage was designed desktop-first and cost four rounds
  of rework to fix on phones.
- Reduced-motion and no-JS renderings are acceptance criteria on this project.
- Sticky anything must be gated on the viewport being tall enough to show the element whole.
  A card taller than `innerHeight - offset` hides its own bottom permanently.

## What to hand back

One layout specification covering the four templates and three variants, plus the slot
inventory. Once agreed, pages get built in code directly from it.

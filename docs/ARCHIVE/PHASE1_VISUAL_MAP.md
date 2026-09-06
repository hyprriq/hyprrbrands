# Visual placement map — five slots per inner page

**Target: 3–5 visuals on every inner page.** This delivers **five**, and every one is built from
type, tokens and data that already exist. **No photography, no stock, no generated imagery, no new
asset pipeline, no delivery-date risk.**

That constraint is not a limitation here — the brand guidelines call for *"decisive type and colour
blocks"*, *"clean hierarchy, generous space"*, and warn against *"decorative design that slows down
the message"*. A page carrying five type-driven visuals is on-brand in a way five photographs would
not be.

**Operating principle from the guidelines, applied per slot:** *"One message. One colour. One
action."* Each slot below carries exactly one idea and at most one accent.

---

## The five slots, in scroll order

| # | Slot | Section | Status | Colour |
|---|---|---|---|---|
| **1** | **At-a-glance panel** | Hero, right column | New — `PROMPT_13 §A` | White card, engine rule on top |
| **2** | **The primary artefact** | Section 2 (Bone) | **Exists** — needs its `artefactNote` | Bone ground |
| **3** | **Mechanism diagram** | Inside `involves`, after ¶2 | New — the tier-2 diagram | White, one accent |
| **4** | **The rule card** | Between `involves` and `fit` | New | **Petrol**, full-bleed |
| **5** | **Phase timeline** | "First 90 days" | **Exists as three text columns** — upgrade to a visual | Bone, engine accent on markers |

Slots 2 and 5 already exist as content and are being *upgraded*, not created. Only 1, 3 and 4 are
net-new — which is why five visuals per page is a smaller job than it sounds.

---

## Slot 3 — the mechanism diagram, assigned per page

One per page, drawn from the page's own argument. All inline SVG with **real `<text>`, never
outlined paths**, so it stays selectable, translatable and readable by crawlers.

| Page | Diagram | What it shows |
|---|---|---|
| `/wholesale-ecommerce` | **The buy decision** | Supplier → gate check → margin floor → approval → PO. The two places it stops. |
| `/private-label` | **The verdict axes** | Eight axes, one failing, showing a reject is a single failed axis and not an average. |
| `/shopify-dtc` | **The six layers** | Offer → pricing → storefront → checkout → acquisition → retention, read bottom-up. |
| `/ecommerce-website-development` | **In scope / out of scope** | Two columns, the boundary drawn as the visual. |
| `/ecommerce-growth` | **The five questions** | Demand → conversion → inventory → margin → capacity, with the binding constraint highlighted. |
| `/marketplace-growth` | **One catalogue, two rulebooks** | One product splitting into two marketplace paths that diverge. |
| `/ppc-paid-media` | **The six-layer stack** | Ads as the top layer, five beneath it that an ads-only agency cannot see. |
| `/ecommerce-operations` | **The daily cadence** | A week as a grid: what runs daily, weekly, monthly. |
| `/marketplace-management` | **The suspension path** | The chain from a policy change to a suspension, and where the sweep interrupts it. |
| `/shopify-management` | **Reactive vs operated** | A ticket queue against a cadence, same time axis. |

---

## Slot 4 — the rule card

A full-bleed Petrol band carrying **one sentence** in display type, no more than fifteen words, plus
a one-line attribution of where it is proven. This is the "decisive colour block" the brand asks for
and the page's most quotable passage for AI answers.

| Page | The sentence |
|---|---|
| `/wholesale-ecommerce` | We do not buy anything we cannot defend. |
| `/private-label` | Most products should be rejected before a sample is ordered. |
| `/shopify-dtc` | A storefront that is not being changed is quietly getting worse. |
| `/ecommerce-website-development` | We build storefronts for operations we also run. |
| `/ecommerce-growth` | Growth you cannot fulfil is not growth. |
| `/marketplace-growth` | One catalogue, two rulebooks. |
| `/ppc-paid-media` | A bid change is worth nothing if the inventory behind it runs out. |
| `/ecommerce-operations` | Most operational damage comes from the day nobody looked. |
| `/marketplace-management` | Ranking is worth nothing on a suspended account. |
| `/shopify-management` | A retainer waits to be asked. An operation notices. |

Each line already exists in that page's copy or in the copy drop. **The rule card promotes an
existing sentence — it does not add a new claim.** Nothing here is a performance claim.

---

## Slot 5 — the phase timeline

"First 90 days" currently renders three text columns. Upgrade to a horizontal timeline: a rule
running the full width, three markers in the engine colour, day ranges as monospace labels above,
phase copy below.

**This also fixes a measured content gap:** phase descriptions average 30–65 words against a
100–150 spec. Longer copy needs the structure; the structure makes the longer copy readable.

---

## Rules that apply to all five

- **Inline SVG only**, real `<text>`, no outlined paths, no external image requests.
- **Contrast AA at both viewports**, and on Petrol never use `--color-on-field-mute` for anything
  a reader must read as content — it is 6.04:1 on the field but 4.79:1 on the raised surface.
- **Legible at 375px.** A diagram that needs pinch-zoom is a failed diagram. Where a diagram cannot
  reduce, it becomes a horizontal scroll-snap strip like the sequence artefact.
- **No decorative motion.** Reveal-on-scroll at the existing 120–180ms is the ceiling. The brand
  guidelines rule out *"decorative design that slows down the message"* and the build spec rules out
  animation that exists to impress.
- **`prefers-reduced-motion` respected** on every one.
- **Each diagram gets a one-sentence caption** — the same discipline as `artefactNote`. A diagram
  with no sentence saying what to notice is the gap this whole pass is fixing.

---

## Homepage and hubs

**Homepage** already carries the scroll states, the engine cards and the channel strip — it is the
best-served page on the site. Add only slot 4, once, and slot 3 as the **margin-calculation
diagram** in the pricing strip, where `PROMPT_12` removed the fee tables and left the section
lighter than it was.

**Hubs** stay visually light on purpose — they are under 400 words and *"link down, they do not
compete"*. One diagram each: the three-engine relationship, with the current hub highlighted. That
single diagram also fixes the finding that `HubPage` renders a section headed *"How Build connects
to Grow and Operate"* containing zero hub-to-hub links — **the diagram is the connection, and its
nodes are the links.**

# Visual direction v2 — generated scenes, not photographs

**This replaces `docs/VISUAL_EXTRACTION_PLAN.md`.** That plan was built on the wrong premise and
the owner rejected it. This document says what changed, why the new route is commercially better
rather than just different, and exactly how the images get made.

---

## §0 · What was wrong

The previous plan said: photograph what is real, extract objects from the uploads, and rebuild
everything else natively. Three of its rulings are now **withdrawn**:

| Withdrawn | Why it was wrong |
|---|---|
| "No AI-generated imagery" | Ruled out on brand-guideline grounds. Wrong test. The guideline says *don't look AI-generated*, which is about tells — garbled text, plastic skin, six fingers, random palette — not about the tool. |
| "Real photographs only" | A company with no warehouse of its own and no client photography has nothing to photograph. A stock desk shot is the freelancer signal, not the premium one. |
| "No 3D" | The entire ecommerce-agency category renders. The owner's references are the category convention, and being the only site not using it reads as *couldn't afford it*, not *too serious for it*. |

The owner is right on the market read. Every reference he sent is a made image, and Apple's product
pages are CAD renders. **The category expects a rendered world.**

One factual correction that changes production, not direction: those references are mostly **3D and
vector illustration** (the isometric ecommerce scene is a Blender/C4D-style render), not diffusion
output. That matters for exactly one reason — a 3D artist can produce the same world thirteen times.
A diffusion model, prompted thirteen separate times, produces thirteen different worlds. So the
route below is not "write thirteen prompts". It is **lock one style frame, then generate everything
against it as a reference.**

---

## §1 · The changed thinking, in one line

> **Old:** photograph what is real, then place it.
> **New:** build one rendered world, generate every scene inside it, and keep every readable word in
> the DOM.

Three layers per visual. This is the whole system.

```
Layer 3 · BAND      CSS. Petrol / Bone / accent ground. The scene overlaps its edge.
Layer 2 · PANELS    DOM. Translucent cards, numbers, labels, connector lines. Real text.
Layer 1 · SCENE     Generated image. Environment and objects. NO READABLE TEXT IN THE PIXELS.
```

Look at reference 2 again — the PPC scene with the floating campaign panels. The crisp translucent
UI is not part of the render. It is a vector layer sitting on top. **That two-layer construction is
what makes it look expensive**, and it is the only reason those panels are sharp at every size.

### Why this beats a flat generated image — in commercial terms, not aesthetic ones

1. **It is not reproducible by a competitor.** Anyone can buy the same Freepik isometric pack. The
   scene plus *our* overlay, carrying *our* numbers, is ours.
2. **Numbers change.** A fee, a marketplace, a claim, a case-study figure. Baked into a PNG each
   edit is a re-generation and a colour-match. In the DOM it is one line.
3. **Google reads the overlay.** A hero that is one PNG is a hero with zero indexable content on the
   most important block of the page. With overlay panels, the hero carries body copy.
4. **It fixes the chroma floor.** `PROMPT_19` flagged that photographic images on white would push
   service pages under 0.018. A saturated scene on a Petrol band does the opposite — it carries the
   chroma budget instead of draining it.
5. **The alt-text gate stops fighting us.** The scene is decorative and gets a short honest alt; the
   substance is real text underneath it.
6. **Garbled AI text — the single biggest tell that an image is machine-made — becomes impossible,**
   because the model is never asked to write a word.

---

## §2 · The world kit — defined once, reused everywhere

Every scene on this site is set in **one world**. Same light, same materials, same palette, same
camera family. A visitor moving from `/wholesale-ecommerce` to `/private-label` must feel they are
in the same building.

**Palette — the generator gets hex codes, not adjectives:**

| Role | Hex | Use in scene |
|---|---|---|
| Ground | `#0A4E5C` deep petrol teal | The dominant field. Floors, backdrops, deep shadow. |
| Raised | `#0E5E6E` | Panel bodies, raised surfaces, secondary planes. |
| Build accent | `#FFC84A` warm citrus | Sourcing / launch objects. Cartons, tape, highlights. |
| Grow accent | `#B8F34A` lime | Growth objects. Rising elements, chart bars. |
| Operate accent | `#45D8C0` aqua | Systems objects. Connector glow, screens, machinery. |
| Bone | `#EDEBE6` | Paper, packaging, light objects, product boxes. |
| Violet | `#6947FF` | **Rare.** One accent object per scene at most. Never a field. |

**Fixed style contract — every prompt carries this block verbatim:**

```
Style: clean isometric 3D product render, soft studio lighting, matte surfaces with
subtle specular highlights, gentle contact shadows, slight ambient occlusion, no
harsh reflections, no glass caustics. Colour palette strictly limited to deep petrol
teal #0A4E5C background, #0E5E6E raised surfaces, warm citrus #FFC84A, lime #B8F34A,
aqua #45D8C0 and bone #EDEBE6 accents. Camera: 30-degree isometric, orthographic feel,
subject centred with generous negative space on the right third. Background is a flat
petrol teal field with no gradient banding and no vignette.
NEGATIVE: no text, no letters, no numbers, no logos, no watermarks, no brand marks,
no readable UI labels, no charts with axis text, no signage, no keyboards with legible
keys, no gradient meshes, no lens flare, no bokeh, no photorealistic skin, no stock-photo
office, no purple-and-orange SaaS gradient.
```

**`no text, no letters, no numbers` is not optional.** It is the line that makes the whole system
work. Any scene that comes back with lettering in it is rejected and regenerated, not retouched.

**The right-third negative space is not decoration either** — it is where the DOM panel lands on
desktop, and where the scene crops to on mobile.

---

## §3 · Four scene archetypes

Derived directly from the references. Every page gets exactly one. This is a **closed set** — a
fifth archetype is a decision, not a convenience.

### A · Operation scene *(reference 1 — the isometric ecommerce world)*
An isometric platform holding the objects of one business model: cartons, pallets, a warehouse
shelf, a screen plane, a delivery vehicle, connector paths glowing between them. **No people.**
Reads as *this is a machine that runs*.
→ The workhorse. Wholesale, operations, management, the three hub pages.

### B · Working scene *(reference 2 — people with floating panels)*
One or two people at a desk, mid-distance, **three-quarter or over-shoulder, faces indistinct or
turned away.** Large empty translucent panels float around them — empty, because the DOM fills them.
Reads as *someone is actually doing this*.
→ The trust archetype. About, how-we-work, contact, PPC.

> **Faces rule.** No front-facing photoreal faces. It is where diffusion models fail most visibly,
> and a fake face on an agency site reads as a fake team. Turned, cropped, or stylised only.

### C · Product scene *(references 4 and 5 — device and product)*
A product object or device on a styled surface against a colour band. Bone packaging, a carton, a
phone or monitor plane. **Screens in the render are blank coloured planes** — the storefront or app
UI is a DOM layer or a composited real capture on top.
→ Private label, website development, Shopify, DTC.

### D · Object cut-out *(the one thing kept from the old plan)*
A single object on transparent background, floating across a band edge, with a DOM spec card on its
corner. Cheap, fast, and it is what lets a page have a fifth visual without a fifth scene.
→ Mid-page moments on every page. **This is where the uploads still get used** — the ten product
renders from the PL PDF and the product shots become cut-outs, or get composited into archetype C
scenes as the real product on the styled surface.

---

## §4 · Page assignments

| Route | Archetype | Scene subject |
|---|---|---|
| `/` | A | The full operation — sourcing, warehouse, marketplace, delivery on one isometric platform |
| `/wholesale-ecommerce` | A | Pallet and carton flow into a marketplace plane, purchase-order path glowing |
| `/private-label` | C | Bone product carton and packaging set on a citrus band, factory plane behind |
| `/shopify-dtc` | C | Monitor plane showing a blank storefront on a styled desk, aqua band |
| `/ecommerce-website-development` | C | Exploded storefront planes stacking into one screen |
| `/ecommerce-growth` | A | Ascending platform stack, lime, channels feeding one rising plane |
| `/marketplace-growth` | A | Two marketplace planes side by side with flow between them |
| `/ppc-paid-media` | B | Two figures at a desk, empty panels floating, citrus key light |
| `/ecommerce-operations` | A | Warehouse interior, shelving, conveyor, aqua connector paths |
| `/marketplace-management` | A | Control-surface platform, dials and blank screen planes, aqua |
| `/shopify-management` | A | Store maintenance scene — screen plane with modular blocks lifting out |
| `/build` | A | Foundation being assembled — citrus |
| `/grow` | A | The same platform extended upward — lime |
| `/operate` | A | The same platform running, connectors lit — aqua |
| `/about` | B | Desk scene, figures turned away, petrol |
| `/how-we-work` | B | Two figures either side of a shared surface |
| `/true-cost` | D | A single carton cut-out, DOM cost bar beneath |
| `/scale` | A | Multiple platforms replicating outward |
| `/where-we-work` | A | Two marketplace planes on a subtle globe curve, no map labels |
| `/documents` | D | Bone document object cut-out, DOM verdict card on the corner |
| `/contact` | B | Single figure at a desk, warm, quiet |

**The three hub pages share one scene, generated three times from the same reference with only the
accent swapped.** Build, Grow and Operate are the same platform at three stages. That repetition is
the brand argument, not a shortcut.

---

## §5 · Production route and what it actually costs

Kling is connected on the free tier with **14 credits available.** That is a handful of images. It
is enough to prove the style lock and nothing more.

**Model choice:** `gemini-3-pro-image` (Nano Banana Pro) via `text_to_image` for the four style
frames, then `image_to_image` with the style frame passed as reference for every subsequent scene.
Reference-locking is the mechanism that makes twenty-one scenes look like one world.

**Order of work:**

1. **Owner drops the five reference images into `public/images/_refs/`** so they can be passed as
   image references. Right now they exist only in chat and cannot reach the generator.
2. **Generate four style frames** — one per archetype, 16:9, at the `/` and `/wholesale-ecommerce`
   subjects. Four images. Judge them side by side against the references.
3. **Owner approves one frame per archetype.** Nothing else is generated until this is signed off,
   because everything after inherits from it.
4. **Generate the remaining scenes** with the approved frame as reference, in page-priority order.
5. **Post-process:** downscale to 1920/1280/640 WebP through the existing `build-images.mjs`, under
   200KB at 1280. Archetype D goes through background removal to transparent PNG.

**Budget note, stated plainly:** twenty-one scenes plus rejects and re-rolls is realistically
50–80 generations. 14 free credits does not cover step 2 and step 4. The owner either tops up Kling
or the scenes get produced elsewhere. **This is a spend decision and it is his, not mine —
nothing beyond the four style frames should be generated without him saying go.**

---

## §6 · What survives from the old plan

Not everything in the extraction plan was wrong — the *containers* were right, and they are exactly
what the overlay layer needs. These carry forward unchanged into `PROMPT_21`:

- `<CostBar>`, `<StatRow>`, `<Panel3>`, `<BrowserFrame>`, `<AnnotatedCrop>`, `<FloatingObject>`
- `<DataArtefact>` — the native table with blank `Order` cells. **Still the strongest asset on this
  site.** No generated image argues as well as a real table showing two products we declined to buy.
- The image pipeline, the size budget, the alt-text gate, the chroma re-measure.

What is dead: extraction as the *source of heroes*. The uploads are now **composite inputs** — real
product objects dropped into generated scenes — not the visuals themselves.

---

## §7 · The rejection tests

A scene is rejected, not retouched, if any of these are true:

1. There is a readable letter or digit anywhere in the pixels.
2. A face is front-on and photoreal.
3. A colour appears that is not in the §2 table.
4. It has the violet-to-orange gradient of a generic SaaS illustration.
5. It has no clear negative space for the DOM panel.
6. Placed next to the previously approved scene, it does not read as the same world.

**Test 6 is the one that will fail most often and it is the one that matters most.** A site of
twenty-one beautiful unrelated images looks worse than a site of twenty-one plain related ones.

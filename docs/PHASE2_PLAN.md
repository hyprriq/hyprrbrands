# Phase 2 plan — visuals, scale, and the connected stack

Written after competitor research across twelve Amazon/marketplace agencies (SupplyKick, BellaVix,
Nuanced Media, Envision Horizons, Canopy, My Amazon Guy, Emplicit, AMZ Advisers, eStore Factory,
Podean, Thrive, Seller Sage). Everything below traces to something measured on a live competitor
site, not to preference.

---

## 1 · Visuals — the owner is right and the spec was wrong

**Measured: competitors run 22–80 distinct visual assets per page.** Canopy ~80. My Amazon Guy ~65.
BellaVix ~45. Envision Horizons ~40. **The `PHASE1_VISUAL_MAP` spec delivers five.**

The error was mine and it is worth naming precisely: **the rule was "no fake people", and I applied
it as "no imagery".** No stock photography and no generated faces was always the right rule — one
reverse image search ends a positioning built on being checkable. It never ruled out product
photography, screenshots, charts, packaging renders, motion or video. The diagrams and rule cards
are good components and they are not visuals in the sense a visitor experiences.

### The hard finding underneath it

**The single most common asset on all twelve is the client-logo wall.** Every site has one and it
usually outnumbers every other asset combined — BellaVix 35 logos, Canopy ~35 plus 11 press logos,
My Amazon Guy 40+.

**Hyprr has no clients, so it cannot have one.**

The only site that succeeds nearly imageless is **Seller Sage (~8–10 assets)** — and it does that on
**published pricing tiers** and a named strategy lead. Hyprr just removed its pricing.

**So the current position is: no logo wall, no pricing, no visuals.** That is a worse hand than any
of the twelve, and it is the actual problem, not the thinness of the diagrams.

### The opening — and it is a genuinely good one

The **rarest** assets across all twelve are **real dashboard screenshots and real data charts**.
Only AMZ Advisers leads with actual charts ("Monthly shipped COGS, 24 months", "$1.21M best month").
Only Nuanced Media shows a live report ("Market Position Report, Week 32").

**Those are exactly the assets Hyprr can produce, because it actually operates accounts.** A logo
wall can be bought by anyone; a Seller Central screenshot cannot be faked by a firm that does not
run accounts.

> **The strategy: Hyprr cannot win the common asset, so it wins the rare one.
> The screenshot wall replaces the logo wall.**

### The asset list — what can exist this week, no clients required

| # | Asset | Effort | Substitutes for |
|---|---|---|---|
| 1 | **Marketplace and platform logos** — Amazon, Walmart, Shopify, eBay, TikTok Shop | Minutes. Every competitor has these. | Nothing — table stakes, currently missing |
| 2 | **Real Seller Central / Shopify admin screenshots**, dummy or anonymised data, labelled as such | Hours | **The client-logo wall.** The rarest asset in the category. |
| 3 | **Real operating charts** — sell-through, cover, margin by line, case ageing. Anonymised, axes unlabelled where needed | Hours | Case-study results, which need clients |
| 4 | **The weekly report artefact rendered as an image** | Hours | Also unblocks `/documents` |
| 5 | **Product and packaging renders** — unbranded or Hyprr-branded, never a fake client brand | A day | Private label proof |
| 6 | **Founder video** — 90s "who runs this", 2–3 min "how the fee works" | An afternoon | Team headshots, which nine of twelve have |
| 7 | The existing diagrams and rule cards | Specced | Support, not the answer |

**Target: 20–25 assets per key page**, not five. That is the low end of the competitive range and
enough to stop reading as unfinished.

**Still banned, unchanged:** stock photography · AI-generated faces · fake client logos · invented
testimonials · any screenshot presented as a real client's account when it is not. **Every
anonymised or dummy screenshot carries a visible label saying so.** That label is an asset, not a
weakness — it is the thing the automation crowd never does.

---

## 2 · Scale — an unclaimed position, confirmed by measurement

**Of twelve agencies, not one has a Launch → Grow → Scale ladder.** Seller Sage has "Scale" only as
a pricing band. Envision Horizons has a "How we scale" section. Everyone else uses the word as
filler — My Amazon Guy says "grow" fifteen times and "scale" zero.

Where scale language does appear, it targets **existing sellers with volume**, who are worth
several times a launch client.

**Recommendation: add `/scale` inside Grow. Not a fourth engine.**

Build → Grow → Operate is how Hyprr runs the work. Launch → Grow → Scale is how the buyer thinks.
Both can be true. Making Scale a fourth engine means a fourth colour, a fourth hub and a design
system change; making it a page inside Grow captures the term and the buyer at a fraction of the
cost.

**`/scale` targets the seller already doing volume:** what breaks at the next level, why the
constraint moves from demand to cash and fulfilment, and why more spend on a constrained operation
produces less. It is the natural home for the "growth you cannot fulfil is not growth" argument
that currently sits on `/ecommerce-growth`.

**Every service page's `nextStep` chain extends: Build → Grow → Scale → Operate.**

---

## 3 · The connected stack — raised three times by the owner, and correct

The field splits. **Silos:** Emplicit (Amazon + TikTok Shop, no Shopify or DTC), Podean, BellaVix,
Nuanced Media. **Connected stacks:** Canopy — H1 spans *"Amazon, Walmart, and Shopify"*; My Amazon
Guy — DTC and Digital Products at top-level nav; **Thrive is the model**, positioning Amazon inside
*"a multi-channel eCommerce approach"*, cross-linking SEO, PPC, content and email, and describing
driving external traffic into the Amazon Brand Store.

**Right now a Hyprr visitor cannot tell that ads, social, content marketing or CRO exist at all.**

**Fix — one section, three places.** A "the whole stack" block on `/shopify-dtc`,
`/ecommerce-growth` and the homepage, showing marketplace and DTC work as one connected operation:
storefront · merchandising · CRO · paid social · content · email · marketplace ads · SEO. Depth
stays on the marketplace side, which is where the clients are being taken from — **but a placeholder
that says "we do this" beats silence, and silence is what is there now.**

**Also fix, and the owner has raised it twice:** `/shopify-dtc` is two businesses on one page —
*launch a DTC brand* and *run an established brand*. Different buyers, different anxieties. It needs
two explicit paths, exactly as private label does. And `/private-label` still reads as launch-only:
`nextStep` links forward now, but the page needs a visible "after launch" section — growth, PPC,
replenishment, scale.

**Research note:** the credible agencies barely touch private label at all. The ones that do
(StarterX) describe post-launch properly but wrap it in *"Done-For-You Amazon Private Label
Management"* language. **The post-launch private-label story told without that language is open.**

---

## 4 · "Done for you" — the hidden-keyword question, answered

**Hidden text is not an option and will not be built.** Text that ranks but is not visible is
cloaking, it is named explicitly in Google's spam policies, and it earns a manual action rather than
a ranking. On a four-year-old domain that risks equity already held.

**The research settles it commercially too.** Of twelve agencies, "done for you", "automation" and
"passive" appear **zero times** on SupplyKick, BellaVix, Canopy, My Amazon Guy, Envision Horizons,
Podean, AMZ Advisers and Nuanced Media. The only two using it are eStore Factory (*"auto pilot
mode… done for you services"*) and StarterX — the exact category Hyprr is positioned against.

**The legitimate route is stronger than the hidden one.** The SERP for Amazon automation is held by
tool blogs, affiliate blogs, a course brand, and the automation sellers defending themselves.
**No premium agency ranks on it.** It is an unclaimed authority position.

**The distinction that makes it usable:**

| Use | Verdict |
|---|---|
| "Hyprr provides done-for-you Amazon services" | **Banned.** A claim about the service. §Q, CI gate, and the exact scam-SERP phrasing. |
| An article titled *"Amazon done-for-you services: what it actually means, and what to ask before you pay"* | **Fine, and valuable.** The phrase is the subject, not the claim. |

That article ranks for the query, converts the sceptical buyer who arrives with capital, and is
uncopyable by the firms selling the thing. **It is the single highest-value piece of content
available to this domain.**

**On the FTC point:** the Business Opportunity Rule governs offers made to US residents, and a
public English website is such an offer regardless of where the client sits. One site, one standard.

---

## 5 · Pages — two new, not thirty

The owner listed ~30 terms. Ten service pages is already at the edge of what this domain supports —
the keyword map found eleven produced unavoidable collisions.

| Page | Why |
|---|---|
| **`/walmart-marketplace-management`** | Zero Walmart pages exist. The keyword map calls it **the weakest competitive field in the whole study** — several ranking pages are near-empty templates. Highest-ROI page available. Covers "Walmart agency", "Walmart consulting", "Walmart seller management". |
| **`/amazon-agency`** | The fattest commercial term in the category and no page owns it. A hub routing to wholesale, private label, PPC and account management. |
| **`/scale`** | Section 2. |

**Everything else goes to articles, not pages.** Sourcing, consulting, "done for you", automation,
and the geo terms are informational or long-tail.

**Do not build country pages.** `/us`, `/singapore`, `/malaysia`, `/middle-east` with near-identical
content is doorway-page territory and is actively demoted. One line in the body plus `areaServed`
in schema does the job honestly.

### Article set — mapped to the owner's terms

1. **Amazon done-for-you services: what it actually means** — the unclaimed position
2. **Is Amazon automation a scam?** — the measured objection cluster
3. **What a private label brand costs to launch and to scale** — covers sourcing, PL growth, PL consulting
4. **Retainer, revenue share or margin share: what each fee model rewards** — the pricing SERP, and it works without publishing figures
5. **Selling on Walmart when you already sell on Amazon** — feeds the new Walmart page
6. **Scaling past your first $100k month: what actually breaks** — feeds `/scale`

---

## 6 · Open question for the owner

**The domain is four years old — what was on it before?** Age alone is not authority; backlinks and
topical history are. If it carries real links, the page count above can be more aggressive. If it
was parked, four years buys very little. **This is worth checking before phase 2 is scoped**, and
Bing Webmaster Tools will show the referring domains for free.

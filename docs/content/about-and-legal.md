# /about + legal pages — content v1

## /about — the no-faces version

**⚠️ Design change required.** `AboutPage.dc.html` renders four 4:5 photograph slots labelled
"photograph · real person · blocker until shot". **Owner decision, 1 Sep: no photographs of
people, and no stock or generated faces either.** Rebuild the people grid as cards with **no
image slot and no reserved aspect ratio**. Reserving space for an asset with no delivery date
is the mistake that already cost the homepage team section.

**Title** (44) `About Hyprr Brands | Who Runs the Operation`
**Meta** (148) `Why Hyprr exists, who is accountable for what, and the company facts you can verify. No stock photography and no team-of-experts copy.`
**Schema** Organization + WebPage + BreadcrumbList. **Person schema only when a named person with a live LinkedIn profile is published** — not before.
**Grounds** White · Bone for the people grid · Petrol CTA. No engine colour: this page is not engine-scoped.

**H1** → Who runs the operation
**Lead — 45 words**
> Hyprr is an ecommerce operations business. We buy, list, advertise and run marketplace and store businesses on behalf of the people who own them. This page is who is accountable for what, and the facts you can check.

### Why Hyprr exists — founder point of view, 150 words, first person
> ⚠️ **Owner input required.** This is the one section on the site that cannot be written for
> you. It should be 120–180 words, in the first person, and it should say something a
> competitor could not copy — what you saw in this category that made a different structure
> worth building. The strongest version names a specific thing that went wrong somewhere and
> what you concluded from it. Do not write a mission statement; the rest of the site is already
> doing that job better.

### People — no photographs
Card fields, in order: **name** (first and last — first-name-only reads as a testimonial) ·
**role, as accountability not job title** ("Runs wholesale accounts", not "Operations Lead") ·
**what they handle**, one or two specific day-to-day sentences · **prior employer and what they
did there**, attributed to the person and to the past · **LinkedIn**, a live profile, `rel="noopener"`.

**Card treatment** — white surface, `--color-line` border, radius 28, no image, no aspect
reservation, one thin engine rule on top **only if that person genuinely owns that engine**;
otherwise no colour. Identical treatment on all cards.

**Line above the grid — 40 words**
> No stock photography and no generated faces. When there are photographs of the actual people,
> they will go here. Until then the names, the roles and the profiles are the substance, and
> those are checkable now.

> ⚠️ **Blocked on owner:** at least one real name, role, accountability, prior employer and
> LinkedIn URL. **One real card beats three empty ones.** The page should not launch with
> placeholder names.

### Operating philosophy — three principles *(design)*
- **You decide, we execute** — Every material decision is the client's, in writing.
- **Everything in your name** — Accounts, inventory, capital, records.
- **Evidence over claims** — Documents you can read before you talk to us; no figures we cannot show.

Each gets 50–70 words of explanation. The third one is currently the weakest on the live site,
because `/documents` holds nothing yet — do not overstate it until it does.

### Verification — company facts
Registered name · Registration number · Founded · Registered address · Contact.
**Publish only what is verified.** The homepage design shows "Hyprr Retail LLC" — confirm the
registered entity name, state and file number before this ships. An incorrect company fact on
a page whose purpose is verification is worse than an absent one.

**CTA** *(Petrol)* — Tell us what you're trying to build. · Let's talk

---

## /contact — one addition to the design

The design is right and should not be simplified. **Add one line above the Send control:**

> We use what you send here to prepare for the conversation and nothing else.
> [Privacy notice →](/privacy)

Keep *"No newsletter. No sales sequence. One reply."* — that line is doing real conversion work.
The privacy line joins it; it does not replace it.

**Title** (43) `Contact Hyprr Brands | Start a Conversation`
**Meta** (145) `Tell us what you are trying to build. We read the context, come prepared, and tell you whether Hyprr is a fit — including when we are not.`
**Schema** ContactPage + Organization + BreadcrumbList. No FAQPage.

---

## Legal pages — four, White only, no template needed

Article type stack with a version and date line. §20 is right that these should be deliberately
boring: readable typography, strong navigation, version/date where appropriate. No CTA band.

| Page | Must contain |
|---|---|
| `/privacy` | What is collected via the contact form and analytics · lawful basis · retention · processors named · rights and how to exercise them · contact. Must match what the contact form actually does. |
| `/terms` | Website terms, not the client agreement. Do not let the two be confused — link `/documents` for the commercial paperwork. |
| `/accessibility` | The standard targeted (WCAG 2.2 AA), known gaps stated honestly, and a contact route for problems. A page claiming full conformance without an audit is a claim like any other. |
| `/earnings-claims` | The short one and the most important. **Hyprr makes no earnings claims, publishes no income figures and offers no projected returns.** State it plainly and link it from the footer. In a category where the FTC has taken action against automation companies, this page is a positioning asset, not boilerplate. |

**Flat URLs** — `/privacy`, not `/legal/privacy`. §31's tree is a hierarchy diagram.

---

## /documents — blocked, ship with one

Design renders six rows. **Ship one.** §O: *"Ship with one real document rather than six
placeholders."* Render the list from a data array so it grows.

**First document: the reporting template** — the structure of the weekly operating report, the
sections, the fields, what gets shown. Service-agnostic, no client data, no legal exposure, and
it is what a sceptical buyer most wants to see before a call. It is also already described on
`/ecommerce-operations#reporting`, so the two reinforce each other.

**The homepage CONTRACTS row returns the day it ships** — it was cut under A.14's own rule
because no document exists.

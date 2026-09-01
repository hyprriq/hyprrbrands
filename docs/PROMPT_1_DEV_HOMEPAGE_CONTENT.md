# Prompt 1 — dev: bring the homepage to Build Spec V1

**This supersedes nothing that shipped. It is the content layer going onto the design layer
that is already finished.** Roughly 80% is string replacement into existing slots.

Source of truth: `docs/Hyprr_Homepage_Build_Spec_V1_FINAL.md` in the repo. Section A is the
final copy, block by block. Use the text as written — lines beginning `> **LABEL**` are final.

```
Apply Build Spec V1 section A to the Hyprr homepage.
Repo: D:\Projects\hyprrbrands
Read docs/Hyprr_Homepage_Build_Spec_V1_FINAL.md section A before starting. Sections B
(heading hierarchy), G (scroll-state content) and L (metadata) are also in scope.

======================================================================
FIRST — four places where the spec is out of date. Do not follow it there.
======================================================================
The spec was written on 31 Aug against the earlier design system. Four things have shipped
since. Where the spec and the live build disagree on these, the LIVE BUILD WINS:

1. Section E says the primary CTA is a "solid violet button". It is not. Violet is links and
   focus only. Primary CTA = Petrol #0A4E5C on light grounds, Citrus #FFC84A on the Petrol
   field. Do not reintroduce a violet button anywhere.
2. Section F refers to "Slate" for micro-labels. That token was retired. Use --color-label.
3. Section A.17 specifies a Team section. It was removed from the homepage — placeholders
   could not ship and photography has no date. Spec P.01 is the reason. SKIP A.17 entirely;
   the "accountable people" line already moved into Ownership. The section returns when there
   are real photographs.
4. Section A.07 and G describe the scroll section as a pinned four-state effect. It is now a
   sticky card stack. The COPY in G still applies unchanged — only the mechanic differs.
   Apply G's text to the four cards; change no geometry, no sticky rules, no CSS in #system.

======================================================================
ORDER OF WORK — do it in this order, the page improves fastest and mistakes stay visible
======================================================================

STEP 1 — pure string swaps, no structural work (most of section A)
  A.01 announcement bar · A.03 hero (H1, supporting copy, CTAs, channel labels) ·
  A.04 channel micro-labels · A.05 introduction · A.08 commercial paths ·
  A.10 everything connects · A.11 ownership · A.12 from decision to operation ·
  A.13 built differently · A.14 nothing important is hidden · A.15 true cost · A.16 fit ·
  A.18 proof · A.19 insights · A.20 FAQ · A.21 how we're paid · A.22 final CTA · A.23 footer

  A.03 note: the H1 is APPROVED and is the recommended line, not the alternative:
     "You own the business. We run the operation."
     with "run the operation" as the highlighted span. The current line contradicts the
     ownership section four screens down; this is the one positioning fix in the spec.

  A.12 note: "Done-for-you build and growth work, shipped in sprints" is a blocker phrase and
     is currently live in step 03. It cannot ship. A.12 has the replacement.

STEP 2 — chip count changes (fewer children, no layout work)
  ThreeEngines.tsx currently has FIVE abstract nouns per card — Research / Product / Brand /
  Store / Marketplace and equivalents. These map to nothing. Replace with the FOUR real
  service names per card from A.06, each an internal link:
     Build   Wholesale ecommerce · Private label & brand building · Shopify / DTC ·
             Ecommerce website development
     Grow    Ecommerce growth · Marketplace growth · DTC growth · PPC & paid media
     Operate Ecommerce operations · Marketplace management · Shopify management ·
             Reporting & performance
  The fourth Operate chip is a DESCRIPTOR, not a page — link it to
  /ecommerce-operations#reporting or leave it unlinked. Do not create a page for it.
  The design's fifth slot is dropped, not padded.

  Scroll states 02 and 03 go from six chips to five, per section G.

STEP 3 — the one new section: A.09 "Fully managed operation"
  The only structural addition in the spec. Place it directly after the commercial paths and
  immediately before Ownership — that order is load-bearing: this section says what Hyprr
  takes on, the next says what the client keeps.
    - Four columns, cadence label above each list. 2 columns at 768, 1 at 375.
    - Type-led, monospace labels, rules between columns. NO ICONS — the spec is explicit that
      icons turn a work schedule into a features grid.
    - Content: the four columns and the closing block in A.09, verbatim.
    - Ground: White or Bone. Not a band — it is not engine-scoped. Check the section either
      side and keep the alternation valid (never two bands adjacent, never two dark adjacent).
    - Closing line set large. CTA "See how we work →" to /how-we-work.
  This block carries ~40 specific operational terms the page has nowhere else to put, so do
  not compress the lists.

STEP 4 — heading hierarchy (section B) and metadata (section L)
  One H1. No skipped levels. No H4. No eyebrow marked up as a heading.
  Title tag, meta description, OG tags and alt text per L, to the character counts given.

======================================================================
CONSTRAINTS
======================================================================
- No pricing figures, no earnings claims, no projected returns. Soft launch.
- Run the banned-phrase grep in section Q before you open a PR.
- Do not change: the Petrol/Ink/band ground rules, the four-step radius scale, the six-step
  type scale, the sticky-stack mechanic, or any token value.
- Do not re-add the Team section.
- Where a copy change would make a link point at a page that does not exist yet, leave the
  link out rather than creating a dead CTA. The routing ticket handles the page manifest.

======================================================================
ACCEPTANCE
======================================================================
1.  Every `> **LABEL**` copy block in section A that is not skipped above appears on the page
    verbatim. Diff the strings, do not eyeball them.
2.  Banned-phrase grep from section Q returns only the deliberate negations it lists.
3.  "Done-for-you" describing Hyprr: zero occurrences.
4.  document.querySelectorAll('h1').length === 1
5.  Heading outline has no skipped levels and no H4.
6.  Twelve engine chips total (4/4/4); eleven are links, "Reporting & performance" is not a
    page link.
7.  The A.09 section exists, has four columns at desktop, two at 768, one at 375, and no icons.
8.  Contrast sweep from the prompt-5 patch still returns failCount 0 at 1512x900 and 375x667.
    New copy changes string lengths, which changes wrapping, which can change what paints.
9.  Area-weighted chroma is still >= 0.030. It is currently 0.0303 — three ten-thousandths
    above the floor — so if the new section lands on a neutral ground, re-check and say so.
10. No horizontal scroll at 360 / 375 / 390 / 412.
11. JavaScript disabled: all four stack cards readable, every FAQ answer present.
```

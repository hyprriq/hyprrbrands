# Hyprr — prompt 4: Petrol field, tint tier, radius scale

Self-contained. Paste the block to your coding agent.

**Run prompt 3 first if it isn't merged** — this prompt assumes the field-tint tokens from
prompt 3 exist. If prompt 3 is already in, fix 2 below replaces its `*-band` swap on the
stack cards; do that swap once, not twice.

**Why this exists.** I measured surface composition on the live build and on
lemonsqueezy.com. Mean area-weighted chroma: Hyprr **0.0085**, Lemon Squeezy **0.1145** —
13.5×. Their pale tints are *less* saturated than our bands; the entire difference is that
their single largest surface is a full-chroma colour covering 27% of the page and ours is
neutral black covering 30%. This prompt makes our biggest surface carry the brand.

```
Colour and surface pass on the Hyprr homepage (Next.js 16 + Tailwind 4).
Repo: D:\Projects\hyprrbrands

Do NOT change: section order, layout, grids, breakpoints, or any copy string.
This is a token and class pass.

======================================================================
FIX 1 — Introduce Petrol as the dark field, replacing Ink on surfaces
======================================================================
Ink stays the TEXT colour on light grounds. It stops being the dark FIELD.

In @theme, add:
  --color-field:        #0A4E5C;   /* Petrol rich — the dark ground */
  --color-field-raised: #0E5E6E;   /* raised panels on the field, 1.26 vs field */
  --color-on-field:       #FFFFFF; /* 9.30:1 */
  --color-on-field-body:  #CFE6EA; /* 7.16:1 — replaces on-ink-body on the field */
  --color-on-field-mute:  #9CC2C9; /* 4.86:1 — replaces on-ink-mute on the field */
  --color-line-on-field:  rgb(255 255 255 / .18);
  --color-link-on-field:  #C4B5FF; /* 5.05:1, hue 293 — clear of all three engines */

Then swap, in every component that currently paints a dark section:
  bg-ink            -> bg-field           (SECTION GROUNDS ONLY, see below)
  bg-ink-raised     -> bg-field-raised
  text-on-ink-body  -> text-on-field-body
  text-on-ink-mute  -> text-on-field-mute
  border-line-on-ink-> border-line-on-field
  text-link-on-ink  -> text-link-on-field

Sections affected: SystemScroll, ProofSection, Ownership, CtaSection, SiteFooter, and the
Principles inner panel. Keep --color-ink and its tokens — they are still every heading and
body colour on light grounds, and the announcement bar stays Ink so the very top of the
page reads as a rule rather than a second field.

CRITICAL — three contrast breakages this swap causes if you do a blind find-and-replace:
  - --color-on-ink-mute #8E89A0 measures 2.76:1 on Petrol. It FAILS. Every instance on a
    dark section must become --color-on-field-mute. Grep for on-ink-mute after the swap;
    it should appear only inside sections that are still Ink.
  - --color-link-on-ink #A38DFF measures 3.46:1 on Petrol. Also fails. Use
    --color-link-on-field.
  - Aqua sits at hue 180 and Petrol at 216 — same family. Aqua passes on luminance (5.24:1)
    but an Aqua dot under 12px on the Petrol field reads as mush. On the Petrol field use
    Citrus (6.03:1) or Lime (7.07:1) for small marks; Aqua marks need to be >=12px or sit
    on a white/raised backing.

FIX 1b — the primary CTA on light grounds becomes Petrol
  bg-ink on buttons -> bg-field. Edge contrast: 9.30 on white, 7.81 on Bone, 7.43 on
  build-field, 6.85 on operate-field — all far above the 3:1 a control needs. White text
  on the button is 9.30:1. This is what puts brand colour on the light sections too; the
  primary CTA appears ~15 times across the page.
  The Citrus-fill-on-dark-field rule from the build spec still holds for CTAs sitting on
  the field itself.

======================================================================
FIX 2 — Stack cards move to the field tints
======================================================================
(If prompt 3 is merged this is already done — verify and move on.)
SystemScroll cards: bg-build-band -> bg-build-field (#FFE3A3),
bg-grow-band -> bg-grow-field (#DDF2AC), bg-operate-band -> bg-operate-field (#B6E7DC).
Card 4 stays bg-white. Labels on any field tint step from --color-label to --color-muted
(--color-label drops to 3.85-4.33:1 on the field tints and fails AA).

Full-bleed section grounds (Principles, Transparency) keep the pale *-band tier. The rule:
  engine  #FFC84A / #B8F34A / #45D8C0   marks, rules, dots, <=40px
  field   #FFE3A3 / #DDF2AC / #B6E7DC   card and panel surfaces, 120-600px
  band    #FFF3D6 / #EEF9D9 / #E0F4F0   full-bleed section grounds

======================================================================
FIX 3 — Collapse the radius scale from 13 values to 4
======================================================================
The live page uses thirteen distinct border-radius values: 4, 6, 7, 8, 9, 10, 12, 14, 16,
18, 20, 22, 24px, clustered two pixels apart. Lemon Squeezy uses four (8/20/32/40) and zero
box-shadows. Thirteen near-identical radii is most of what "not smooth" means — the eye
registers the inconsistency without being able to name it.

Add to @theme and use ONLY these:
  --radius-sm: 8px;    /* chips, small marks, inline tags, inputs */
  --radius-md: 16px;   /* buttons, small cards, art panels, list rows */
  --radius-lg: 28px;   /* section cards, the stack cards, large panels */
  --radius-xl: 40px;   /* full-bleed feature blocks only — use sparingly */

Map every existing value: 4,6,7,8,9,10 -> sm · 12,14,16,18 -> md · 20,22,24 -> lg.
Nothing gets a value off this scale. After the pass, this must return only these four:
  grep -rhoE 'rounded-\[[0-9]+px\]|rounded-(sm|md|lg|xl|2xl|3xl|full)' components/ | sort -u
(rounded-full on circular dots and avatars is fine and exempt.)

======================================================================
FIX 4 — Team section: remove it from the homepage
======================================================================
Owner's call, and the recommendation is to cut it. The section currently renders
"NAME TO BE SUPPLIED" and "PORTRAIT TO FOLLOW" three times on the homepage of a company
that sells storefront design. An unfinishable section is worse than no section, and the
colour on those three boxes was compensating for the missing photography rather than
carrying meaning — the people do not map to engines, so three engine colours there spend
a code the page has spent five sections teaching.

  - Remove <TeamSection /> from app/page.tsx. Do NOT delete the component file; the
    section returns when there is photography.
  - The "accountable people, not a faceless delivery model" claim moves to a single line
    in the Ownership section, which already makes the ownership argument. Do not invent
    new copy — reuse that existing sentence verbatim.
  - Add "team section, pending photography" to the README's open items.

FALLBACK, only if the owner wants it kept: white card, --color-line border, radius-lg,
no aspect-ratio reservation, no engine colour, no set numbers. Identical treatment on all
three. Grid becomes explicit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3.

======================================================================
ACCEPTANCE
======================================================================
1. No element on a Petrol field uses --color-on-ink-mute or --color-link-on-ink.
   Grep must confirm.
2. Every text/background pair on the Petrol field measures >=4.5:1; UI marks >=3:1.
   Check the stack eyebrows, the Proof labels, the footer links and the Ownership bullets
   specifically.
3. No Aqua mark under 12px sits directly on the Petrol field.
4. Border radius across components resolves to exactly four values plus rounded-full.
5. Primary CTAs on light grounds are Petrol; primary CTAs on the field are Citrus.
6. Page renders no horizontal scroll at 360 / 375 / 390 / 412px.
7. Reduced-motion and no-JS rendering unchanged.

REPORT BACK — this is the number that tells us whether the change worked
Run this in the console on the deployed page, before and after. It reports mean
area-weighted chroma across every painted surface:

  (()=>{const f=c=>{c/=255;return c<=0.04045?c/12.92:Math.pow((c+0.055)/1.055,2.4)};
  const C=(r,g,b)=>{r=f(r);g=f(g);b=f(b);
   const l=Math.cbrt(.4122214708*r+.5363325363*g+.0514459929*b),
         m=Math.cbrt(.2119034982*r+.6806995451*g+.1073969566*b),
         s=Math.cbrt(.0883024619*r+.2817188376*g+.6299787005*b),
         A=1.9779984951*l-2.428592205*m+.4505937099*s,
         B=.0259040371*l+.7827717662*m-.808675766*s;
   return Math.hypot(A,B)};
  let t=0,w=0;for(const el of document.querySelectorAll('body *')){
   const m=getComputedStyle(el).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
   if(!m||(m[4]!==undefined&&+m[4]<.5))continue;
   const r=el.getBoundingClientRect(),a=Math.max(0,r.width)*Math.max(0,r.height);
   if(a<400)continue;t+=a;w+=a*C(+m[1],+m[2],+m[3]);}
  return +(w/t).toFixed(4)})()

Baseline today is 0.0085. Target after this prompt is 0.030-0.040. If it comes back under
0.025 the field swap did not reach every dark section — find the ones still on Ink.
Do NOT chase Lemon Squeezy's 0.115; that is a consumer SaaS look and it would undercut
what the copy is claiming.
```

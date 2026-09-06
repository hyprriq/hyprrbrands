# Hyprr — prompt 5 (v2): contrast patch + the dark-panel rule

Self-contained. Four token values, one structural rule, one grid. No copy changes.

**v2 adds fixes 5 and 6.** If you have already started v1, fixes 1-4 are unchanged.

**Context for the dev, so this doesn't read as a reversal:** the build is correct and the
report-backs all verified independently. This is my error, not yours. I validated the four
on-field tokens against the field `#0A4E5C` and never against the raised surface `#0E5E6E`,
which is lighter — so everything light-on-dark loses about 20% of its contrast there and
three tokens drop below AA. A live sweep of all 489 text nodes returns 26 failures.

```
Contrast patch on the Hyprr homepage (Next.js 16 + Tailwind 4).
Repo: D:\Projects\hyprrbrands
Token values and a few class swaps only. No layout, no copy, no new components.

======================================================================
FIX 1 — Two on-field tokens fail on the raised surface
======================================================================
Measured on the live build:

  token                  on field #0A4E5C   on raised #0E5E6E
  --color-on-field-mute  #9CC2C9   4.86            3.86   FAIL
  --color-link-on-field  #C4B5FF   5.05            4.01   FAIL
  --color-on-field-body  #CFE6EA   7.16            5.68   ok, no change

Change two values in @theme. Nothing else moves:
  --color-on-field-mute: #B6D6DC;   /* field 6.04, raised 4.79 */
  --color-link-on-field: #D6CDFF;   /* field 6.22, raised 4.93 */

Do NOT fix this by darkening --color-field-raised. To rescue the current tokens it would
have to go to about #0B5260, which is only 1.06 against the field — the panels would stop
reading as raised at all. Lighter text is the correct lever.

======================================================================
FIX 2 — Aqua is a mark, never text, on any Petrol surface
======================================================================
Aqua #45D8C0 measures 5.24 on the field but 4.16 on the raised surface — it fails as text
there, and it cannot be lightened without breaking the engine identity. So it stops being
a text colour on Petrol entirely.

Instances to change (all currently text-operate on a raised panel):
  - Ownership, the "Hyprr" column label      -> text-on-field-body
  - Ownership, the five "·" list bullets     -> text-on-field-body
  - ProofSection, the "06" and "07" numbers  -> see Fix 3, they lose their colour anyway

Aqua stays exactly as it is on: the dots and square marks, the 4px card top rules, the
stack card accents, and anything else that is a shape rather than a glyph. The rule to
carry forward: on a Petrol surface, Aqua is a mark at >=12px and never a text colour.

======================================================================
FIX 3 — Retire the engine cycling on the Proof numbers
======================================================================
This has now failed twice for two independent reasons, which is enough. It was my
instruction in prompt 1 and it was wrong.

Reason one, the rule: the seven proof items are not engine-scoped — "Operating model" is
not a Build concept — so colouring them Citrus/Citrus/Citrus/Lime/Lime/Aqua/Aqua spends a
code the page has spent five sections teaching, on nothing. Reason two, measured: the Aqua
pair fails contrast on the raised panel.

  - All seven numbers -> text-on-field-mute. Labels stay white.
  - The eighth cell — the "Read the documents →" CTA — becomes the one lit tile:
    bg-operate-field (#B6E7DC) with text-ink. That gives the section a single deliberate
    spot of colour that means "this is the next step", instead of seven that mean nothing.

======================================================================
FIX 4 — --color-label has been failing since before any of this
======================================================================
Not caused by the Petrol work. #6E6A7C fails AA on four of the eight grounds it lands on,
and has since the original palette. My token comment said "labels >=14px semibold", which
was wrong — the WCAG large-text exemption needs 18.66px at 700, so a 12px 600 label always
needs the full 4.5.

  --color-label: #615D6E;   /* was #6E6A7C */

  ground           old    new
  white           5.23   6.37
  bone            4.39   5.34   was failing
  build-band      4.74   5.77
  grow-band       4.78   5.82
  operate-band    4.57   5.57
  build-field     4.18   5.08   was failing
  grow-field      4.33   5.27   was failing
  operate-field   3.85   4.68   was failing

This supersedes prompt 3's rule that labels step to --color-muted on field surfaces. With
#615D6E the label token passes on every ground, so that special case goes away — delete it
rather than keeping both. If any label was already switched to text-muted, leaving it is
harmless, but new work uses text-label everywhere.

======================================================================
FIX 5 — Petrol is a section ground, never a panel inside another section
======================================================================
The blanket bg-ink -> bg-field swap went one level too deep. Petrol is now painting inner
panels that sit inside sections which already carry an engine code, and the result is a
Build-coded section containing an Operate-family panel. That is what "out of sorts" is:
not two colours that happen to clash, but a pairing the system should never produce.

Measured on the live page — Petrol currently appears as an inner panel inside:
  section 05  Choose your commerce path      White ground
  section 09  Built differently              build-band ground   <- the reported one
  section 10  Nothing important is hidden    operate-band ground
  section 16  See how we're paid             grow-band ground

And three comparable panels were NOT swapped, so the treatment is currently arbitrary
rather than systematic:
  section 03  Three engines                  Bone ground, panel still Ink
  section 06  Everything connects            Bone ground, panel still Ink
  section 14  What we're seeing in commerce  White ground, panel still Ink

THE RULE, apply it everywhere and keep it:
  - A dark SECTION GROUND is Petrol.       (sections 04, 07, 11, 13, 17 — correct today)
  - A dark PANEL nested inside any light or band section is Ink.
  A neutral is legal inside any engine-coded section. A second engine hue is not, and
  Petrol reads as the deep end of the Operate family.

So: revert the four panels above to bg-ink and its on-ink-* text tokens. The three that
were never swapped are already correct — leave them. After this, grep should show
bg-field only on section elements, never on a child panel.

Note this restores --color-on-ink-mute and --color-link-on-ink to legitimate use inside
those four panels. They are correct on Ink (5.31 and 6.65); they were only ever wrong on
Petrol. Keep both tokens.

Section 04 also reports a Petrol panel on the Petrol ground — check whether that is a real
nested surface or just the section wrapper, and if real, give it bg-field-raised.

FIX 5b — two coloured bands still run back to back
Section 09 (build-band) is immediately followed by section 10 (operate-band). The ground
map allows a band only when its engine justifies it, and never two in a row. Move section
10 "Nothing important is hidden" to White. Its transparency argument is not engine-scoped,
so it did not earn a band in the first place.

======================================================================
FIX 6 — "Everything connects." splits 8 + 2
======================================================================
The stage list is grid-cols-[repeat(auto-fit,minmax(112px,1fr))] with ten items. At desktop
it resolves to eight columns, so the row breaks 8 + 2 and leaves a two-item orphan directly
above the Petrol wall — a ragged edge at exactly the point the eye is being handed to the
next section. That is what reads as wrong around the dots, not the dot colours.

Replace with an explicit count that divides ten:
  grid-cols-2 sm:grid-cols-3 lg:grid-cols-5      -> 5 + 5 at desktop, no orphan
Nothing else in the section changes. The 104px of Bone below the card is fine; do not add
padding to compensate for the ragged row.

While you are in there: item 10 "Next decision" carries a black dot and a loose "↺" on its
own line while items 01-09 carry engine dots. Give it the same dot treatment in
--color-ink and put the ↺ inline with the label, so the last item reads as the tenth stage
rather than a different kind of thing.

======================================================================
ACCEPTANCE — one check, run it on the deployed page
======================================================================
This is the sweep that found the 26. It walks every text node, composites the real
background through transparent ancestors, and applies the correct threshold for each
element's size and weight. It must return failCount: 0.

  (()=>{const f=c=>{c/=255;return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4)};
  const L=(r,g,b)=>0.2126*f(r)+0.7152*f(g)+0.0722*f(b);
  const p=s=>{const m=s&&s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
   return m?{r:+m[1],g:+m[2],b:+m[3],a:m[4]===undefined?1:parseFloat(m[4])}:null};
  const ov=(a,b)=>({r:a.r*a.a+b.r*(1-a.a),g:a.g*a.a+b.g*(1-a.a),b:a.b*a.a+b.b*(1-a.a),a:1});
  const bgOf=el=>{let n=el,acc=null;while(n&&n!==document.documentElement){
   const c=p(getComputedStyle(n).backgroundColor);
   if(c&&c.a>0){acc=acc?ov(acc,c):c;if(acc.a>=1||c.a>=1)return acc;}n=n.parentElement;}
   return acc||{r:255,g:255,b:255,a:1}};
  const CR=(a,b)=>{const x=L(a.r,a.g,a.b),y=L(b.r,b.g,b.b);
   return (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)};
  const out=[];for(const el of document.querySelectorAll('body *')){
   if(![...el.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))continue;
   const cs=getComputedStyle(el);
   if(cs.visibility==='hidden'||cs.display==='none'||+cs.opacity===0)continue;
   const r=el.getBoundingClientRect();if(r.width<2||r.height<2)continue;
   const f0=p(cs.color);if(!f0)continue;const bg=bgOf(el);
   const fg=f0.a<1?ov(f0,bg):f0;const sz=parseFloat(cs.fontSize),wt=+cs.fontWeight||400;
   const need=(sz>=24||(sz>=18.66&&wt>=700))?3:4.5;const cr=CR(fg,bg);
   if(cr<need)out.push({t:el.textContent.trim().slice(0,40),cr:+cr.toFixed(2),need,sz,wt});}
  return {checked:document.querySelectorAll('body *').length,failCount:out.length,fails:out}})()

Also confirm, with a grep: bg-field appears only on <section> elements, never on a nested
panel; and no <section> with a *-band ground contains a bg-field descendant.

Run it at 1512x900 and again at 375x667 — the mobile layer changes which elements paint.
Report failCount for both. Anything still failing is a real instance neither of us
enumerated, so paste it rather than adjusting a token to make the number go away.
```

# The chroma metric stops working once photographs land

The dev flagged this as a caveat in the `PROMPT_19` report. It is more than a caveat, and it
corrects me.

> *"The chroma tool weights painted surfaces as it always has — photo pixels aren't in the number."*

---

## My §0 warning was wrong

`PROMPT_19 §0` predicted that six photographs per page would push the low service pages under the
0.018 floor, and called it *"arithmetic, not a prediction."*

**It was neither.** The measurement script reads `getComputedStyle` background colours across
painted surfaces. An `<img>` contributes its container's background — usually transparent or white
— and **its pixels are never sampled.** Photographs are invisible to the instrument, so they cannot
lower the number.

The dev's own test proves it: `/private-label` measured **0.0206 with six images and 0.0206
without**. That is not the band mitigation working. **That is the tool not seeing the photos.**

I reasoned from a model of the instrument rather than from the instrument, which is the same error
class as the character counts and the `#reporting` anchor — asserting without checking the thing
itself.

---

## The larger problem, which is the real finding

**Chroma was a good proxy for "does this page carry colour" only while the page was type and colour
blocks.** That is what it was calibrated on and that is all it measures.

Once photographs cover meaningful area, the metric describes a shrinking fraction of what a visitor
sees — and it drifts in the *wrong direction*. Photo area is excluded from the weighting entirely,
so the remaining painted surfaces carry proportionally more weight. **A page with photographs over
Bone bands will score higher chroma than the same page with no photographs at all**, while looking
completely different.

So after images land the number would go up, the gate would pass more easily, and it would mean
less. A gate that gets easier as the thing it measures gets harder is worse than no gate.

**This is the project's own standing rule again:** a number applies only to the surface it was
measured on. Here it is the composition, not the surface — chroma was calibrated on a page made of
type and blocks, and the page is about to stop being that.

---

## What to do — extend the tool, do not retire it

Roughly fifteen lines, and it keeps a working instrument:

1. For each `<img>` in the measured tree, draw it to an offscreen canvas at low resolution
   (32×32 is plenty).
2. Average the pixels, convert to OKLCH, take `C` as that image's chroma.
3. Weight it by the image's rendered area, exactly as painted surfaces are weighted.
4. Same formula, same output — the number simply starts describing the whole page again.

**Do this before the first real photographs are wired**, so `/private-label`'s post-image
measurement is a real one. Re-baseline every page afterwards: **the floors of 0.018 and 0.030 were
set against the old instrument and will not transfer.** Expect the numbers to move and do not treat
the movement as a regression.

---

## The bands are still right, on different grounds

`PROMPT_19 §0` mandated that image clusters of three or more sit on Bone or Petrol rather than
White. **That instruction stands**, but the justification in the ticket was wrong.

The real reasons:
- **Ground alternation.** The 13-ground sequence is the page's rhythm. Three white images stacked
  on a white ground is one undifferentiated block regardless of what any metric says.
- **Photographs need a frame.** A product shot on white bleeding into a white page has no edge. On
  Bone or Petrol it reads as a placed object.
- **It is what the reference does.** The Ecomersify scene sits on a tinted ground, not on white,
  and that is part of why it reads as composed rather than pasted.

**Keep the bands. Fix the reason.**

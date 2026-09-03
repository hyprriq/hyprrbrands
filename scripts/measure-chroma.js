/**
 * The chroma instrument — CHROMA_METRIC_CORRECTION.md.
 *
 * Area-weighted mean OKLab chroma over everything a visitor actually
 * sees: every opaque painted background >= 400px², PLUS every rendered
 * <img> >= 400px², sampled at 32×32 on an offscreen canvas, its pixels
 * averaged, converted to OKLab, and its chroma weighted by rendered
 * area exactly as painted surfaces are. Before this correction the
 * instrument sampled painted surfaces only, so photographs were
 * invisible to it and the number drifted UP as pages gained images —
 * a gate that got easier as the thing it measured got harder.
 *
 * This is a browser snippet, not a Node script: paste it into the
 * console (or inject it) on a served page and await measureChroma().
 * It is checked in so the instrument is versioned rather than living
 * in a session scratchpad. Pages with zero <img> measure identically
 * to the old instrument, by construction.
 *
 * Known fidelity limits, accepted:
 * - drawImage samples the source pixels, not CSS-filtered rendering
 *   (the homepage's grayscale-at-rest channel marks sample as their
 *   colored originals — ~13k px² against a ~10M px² page, negligible);
 * - cross-origin images taint the canvas and are skipped, counted in
 *   `unsampled` (all site images are same-origin today);
 * - nested painted surfaces double-count area, as they always have —
 *   the floors are calibrated against this instrument, not an ideal.
 *
 * Floors history: 0.030 (homepage) and 0.018 (service pages) were set
 * against the painted-surfaces-only instrument. The first run of THIS
 * instrument re-baselines every page; movement is re-calibration, not
 * regression. Report the number, do not chase it.
 */
async function measureChroma() {
  const P = (s) => {
    const m = s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(",").map(parseFloat);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const okChroma = (c) => {
    const lin = (v) => {
      v /= 255;
      return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    const r = lin(c.r), g = lin(c.g), b = lin(c.b);
    const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
    const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
    const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
    const l3 = Math.cbrt(l), m3 = Math.cbrt(m), s3 = Math.cbrt(s);
    const A = 1.9779984951 * l3 - 2.428592205 * m3 + 0.4505937099 * s3;
    const B = 0.0259040371 * l3 + 0.7827717662 * m3 - 0.808675766 * s3;
    return Math.sqrt(A * A + B * B);
  };

  let num = 0, den = 0, painted = 0, images = 0, unsampled = 0;

  // 1 · painted surfaces, exactly as before
  document.querySelectorAll("body *").forEach((el) => {
    const c = P(getComputedStyle(el).backgroundColor);
    if (!c || c.a < 1) return;
    const r = el.getBoundingClientRect();
    const area = r.width * r.height;
    if (area < 400) return;
    num += okChroma(c) * area;
    den += area;
    painted++;
  });

  // 2 · rendered images — the correction's fifteen lines
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 32;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  for (const img of document.querySelectorAll("img")) {
    const r = img.getBoundingClientRect();
    const area = r.width * r.height;
    if (area < 400) continue;
    // Lazy images below the fold (or in a hidden pane) have not
    // loaded yet — the instrument forces a decode so every rendered
    // image is in the number, not just the ones scrolled past.
    if (!img.complete || img.naturalWidth === 0) {
      try {
        img.loading = "eager";
        await Promise.race([
          img.decode(),
          new Promise((res) => setTimeout(res, 3000)),
        ]);
      } catch {}
    }
    if (!img.complete || img.naturalWidth === 0) {
      unsampled++;
      continue;
    }
    try {
      ctx.clearRect(0, 0, 32, 32);
      ctx.drawImage(img, 0, 0, 32, 32);
      const d = ctx.getImageData(0, 0, 32, 32).data;
      let rs = 0, gs = 0, bs = 0, n = 0;
      for (let i = 0; i < d.length; i += 4) {
        if (d[i + 3] < 8) continue; // transparent pixels are not seen
        rs += d[i]; gs += d[i + 1]; bs += d[i + 2]; n++;
      }
      if (n === 0) continue;
      num += okChroma({ r: rs / n, g: gs / n, b: bs / n }) * area;
      den += area;
      images++;
    } catch {
      unsampled++; // tainted canvas (cross-origin) — skipped, reported
    }
  }

  return {
    chroma: +(num / den).toFixed(4),
    painted,
    images,
    unsampled,
    viewport: `${document.documentElement.clientWidth}px`,
  };
}
// console usage: await measureChroma()

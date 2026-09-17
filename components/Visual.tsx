import manifest from "@/lib/image-manifest.json";

/**
 * Infographic slot — PROMPT_24 §2 (supersedes PROMPT_23). Serves a
 * pipeline image (four WebP widths from build-images) under the
 * ticket's layout rules:
 *
 *   hero — swapped inside an existing hero column, fetchpriority high
 *   wide — full content width after the section intro, max 1200px
 *   side — the right 7/12 of a two-column grid (see .visual-side)
 *
 * On a light band the image is the PLATE: transparent ground, no
 * title, cropped to the content, sitting directly on the band with
 * no border, radius or card, at its own width/height. On a petrol or
 * ink band (`onDark`) the plate's ink text would vanish, so the
 * 16:10 master (`<name>-full`) renders inside a bordered card.
 *
 * Below 768px the figure scrolls sideways (the labels are unreadable
 * at 390px) — the page itself never does. Every figure that shows
 * figures carries the "Illustrative example." caption.
 */
const MANIFEST = manifest as Record<string, { w: number; h: number }>;

type Variant = "hero" | "wide" | "side";

// Under 768px the image is laid out at 900px inside the swipe
// container, so the browser must pick for 900px × DPR, not 100vw.
const SIZES: Record<Variant, string> = {
  hero: "(max-width: 767px) 900px, (min-width: 1024px) 55vw, 100vw",
  wide: "(max-width: 767px) 900px, (min-width: 1280px) 1200px, 100vw",
  side: "(max-width: 767px) 900px, (min-width: 1024px) 58vw, 100vw",
};

export default function Visual({
  name,
  alt,
  variant = "wide",
  caption = "Illustrative example.",
  onDark = false,
  href,
}: {
  /** manifest key without the leading /images/, e.g. "home/verdict-buy-or-do-not-buy" */
  name: string;
  alt: string;
  variant?: Variant;
  /** pass `null` for an image with no figures (visual 15) */
  caption?: string | null;
  /** petrol/ink band: use the `<name>-full` master inside a card */
  onDark?: boolean;
  /** wrap the image in a link (proof row on the homepage) */
  href?: string;
}) {
  const key = onDark ? `${name}-full` : name;
  const dims = MANIFEST[`/images/${key}`];
  if (!dims) throw new Error(`Visual: /images/${key} is not in lib/image-manifest.json`);
  const base = `/images/${key}`;
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${base}-1280.webp`}
      srcSet={`${base}-640.webp 640w, ${base}-1280.webp 1280w, ${base}-1920.webp 1920w, ${base}-2400.webp 2400w`}
      sizes={SIZES[variant]}
      width={dims.w}
      height={dims.h}
      alt={alt}
      loading={variant === "hero" ? undefined : "lazy"}
      fetchPriority={variant === "hero" ? "high" : undefined}
      decoding="async"
    />
  );
  return (
    <figure
      className={`visual visual-${variant}${onDark ? " visual-card" : ""}`}
    >
      <div className="visual-scroll" data-feature="visual-scroll">
        {href ? <a href={href}>{img}</a> : img}
      </div>
      <span className="visual-swipe" aria-hidden="true">
        Swipe to see the full view →
      </span>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

import manifest from "@/lib/image-manifest.json";

/**
 * PROMPT_23 infographic slot. Serves a pipeline image (three WebP
 * widths from build-images) under the ticket's layout rules:
 *
 *   hero — swapped inside an existing hero column, 16:10 contain,
 *          fetchpriority high, card treatment on dark bands
 *   wide — full content width after the section intro
 *   side — the right 7/12 of a two-column grid (see .visual-side)
 *
 * Below 768px the figure scrolls sideways (the labels are unreadable
 * at 390px) — the page itself never does. Every figure that shows
 * figures carries the "Illustrative example." caption.
 */
const MANIFEST = manifest as Record<string, { w: number; h: number }>;

type Variant = "hero" | "wide" | "side";

const SIZES: Record<Variant, string> = {
  hero: "(min-width: 1024px) 55vw, 100vw",
  wide: "(min-width: 1280px) 1200px, 100vw",
  side: "(min-width: 1024px) 58vw, 100vw",
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
  /** hero on a petrol/ink band gets the card treatment */
  onDark?: boolean;
  /** wrap the image in a link (proof row on the homepage) */
  href?: string;
}) {
  const dims = MANIFEST[`/images/${name}`];
  if (!dims) throw new Error(`Visual: /images/${name} is not in lib/image-manifest.json`);
  const base = `/images/${name}`;
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${base}-1280.webp`}
      srcSet={`${base}-640.webp 640w, ${base}-1280.webp 1280w, ${base}-1920.webp 1920w`}
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

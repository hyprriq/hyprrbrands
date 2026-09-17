import { SITE_MAP } from "./site-map";

/**
 * Share cards — the brand kit's static link previews (logo system
 * v2.0, PROMPT_24 §11.2): one 1200×630 PNG per page in public/og/,
 * named og-<route>.png. The four legal pages have no card of their
 * own and share og-home. This replaced the dynamic /og/<slug> route
 * on 17 Sep; PNG stays the format because several platforms still
 * render WebP badly in link previews.
 */
const KIT_CARDS = new Set([
  "home",
  ...SITE_MAP.filter((p) => p.group !== "legal").map((p) => p.slug.slice(1)),
]);

const h1For = (slug: string) =>
  slug === "home"
    ? "Build it. Run it. Scale it. On Amazon and Walmart."
    : SITE_MAP.find((p) => p.slug === `/${slug}`)?.h1 ?? "Hyprr Brands";

export function ogImagePath(slug: string) {
  return `/og/og-${KIT_CARDS.has(slug) ? slug : "home"}.png`;
}

/** Spread into a page's `metadata` for its OG/Twitter image pair.
 *  `extra` appends further openGraph images (private label adds the
 *  compliance-gates master as a second card, §11.2). */
export function ogImageMeta(slug: string, extra: string[] = []) {
  const url = ogImagePath(slug);
  const alt = h1For(slug);
  return {
    openGraph: {
      images: [
        { url, width: 1200, height: 630, alt },
        ...extra.map((u) => ({ url: u, width: 2400, height: 1500, alt })),
      ],
    },
    twitter: { card: "summary_large_image" as const, images: [url] },
  };
}

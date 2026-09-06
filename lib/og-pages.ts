import { SITE_MAP } from "./site-map";

/**
 * Share cards — one per page, 1200×630, generated at /og/[slug] from
 * the page's H1. The route replicates the static card design from
 * the 6 Sep asset handoff (petrol gradient, mono eyebrow, white
 * headline with the final sentence in citrus, logo bottom left,
 * "Amazon · Walmart" bottom right) — kept dynamic so the cards can
 * never drift from the page titles (ASSETS_HANDOFF §3).
 */
export interface OgPage {
  title: string;
  path: string;
  eyebrow: string;
}

const EYEBROWS: Record<string, string> = {
  "amazon-private-label": "PRIVATE LABEL",
  "amazon-wholesale-management": "WHOLESALE",
  "amazon-walmart-management": "MANAGEMENT",
  "amazon-listing-optimization": "LISTING OPTIMIZATION",
  "how-we-work": "METHOD AND FEES",
  proof: "PROOF",
  about: "ABOUT",
  contact: "CONTACT",
  privacy: "LEGAL",
  terms: "LEGAL",
  accessibility: "LEGAL",
  "earnings-claims": "LEGAL",
};

export const OG_PAGES: Record<string, OgPage> = {
  home: {
    title: "Build it. Run it. Scale it. On Amazon and Walmart.",
    path: "/",
    eyebrow: "MARKETPLACE OPERATIONS",
  },
  ...Object.fromEntries(
    SITE_MAP.filter((p) => p.status === "live").map((p) => [
      p.slug.slice(1),
      {
        title: p.h1,
        path: p.slug,
        eyebrow: EYEBROWS[p.slug.slice(1)] ?? "HYPRR BRANDS",
      },
    ])
  ),
};

/** Spread into a page's `metadata` for its OG/Twitter image pair.
 *  The route serves PNG — several platforms still render WebP badly
 *  in link previews (ASSETS_HANDOFF §3). */
export function ogImageMeta(slug: string) {
  const page = OG_PAGES[slug];
  const url = `/og/${slug}`;
  return {
    openGraph: {
      images: [{ url, width: 1200, height: 630, alt: page?.title ?? "" }],
    },
    twitter: { card: "summary_large_image" as const, images: [url] },
  };
}

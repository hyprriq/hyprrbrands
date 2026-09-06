import { SITE_MAP } from "./site-map";

/**
 * Share cards — one per page, 1200×630, generated at /og/[slug] from
 * the page's H1 (BUILD_SHEET §3). Canva replacements can land later
 * by swapping the URL; the metadata shape stays.
 */
export interface OgPage {
  title: string;
  path: string;
}

export const OG_PAGES: Record<string, OgPage> = {
  home: {
    title: "Build it. Run it. Scale it. On Amazon and Walmart.",
    path: "/",
  },
  ...Object.fromEntries(
    SITE_MAP.filter((p) => p.status === "live").map((p) => [
      p.slug.slice(1),
      { title: p.h1, path: p.slug },
    ])
  ),
};

/** Spread into a page's `metadata` for its OG/Twitter image pair. */
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

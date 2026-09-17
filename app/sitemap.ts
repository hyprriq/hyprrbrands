import type { MetadataRoute } from "next";
import { livePages, SITE_ORIGIN } from "@/lib/site-map";
import dates from "@/lib/page-dates.json";

/**
 * Generated from lib/site-map.ts so it can never drift from the
 * routes — nine pages plus legal, nothing archived, nothing planned.
 * lastmod comes per page from lib/page-dates.json, which
 * scripts/page-dates.mjs writes from each page file's last commit
 * (PROMPT_24 §7.2); `npm run check` fails when it is stale.
 */
const DATES = dates as Record<string, string>;
const when = (slug: string) => new Date(DATES[slug] ?? DATES["/"]);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_ORIGIN}/`, priority: 1, lastModified: when("/") },
    ...livePages().map((p) => ({
      url: `${SITE_ORIGIN}${p.slug}`,
      priority: p.group === "service" ? 0.8 : p.group === "legal" ? 0.3 : 0.6,
      lastModified: when(p.slug),
    })),
  ];
}

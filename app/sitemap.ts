import type { MetadataRoute } from "next";
import { livePages, SITE_ORIGIN } from "@/lib/site-map";

/**
 * Generated from lib/site-map.ts so it can never drift from the
 * routes — nine pages plus legal, nothing archived, nothing planned.
 */
const LAST_MODIFIED = new Date("2026-09-06");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_ORIGIN}/`, priority: 1, lastModified: LAST_MODIFIED },
    ...livePages().map((p) => ({
      url: `${SITE_ORIGIN}${p.slug}`,
      priority: p.group === "service" ? 0.8 : p.group === "legal" ? 0.3 : 0.6,
      lastModified: LAST_MODIFIED,
    })),
  ];
}

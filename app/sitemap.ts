import type { MetadataRoute } from "next";
import { livePages, SITE_ORIGIN } from "@/lib/site-map";

/** Generated from the manifest — live pages only. A planned URL must
 *  never be emitted. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_ORIGIN}/`, priority: 1 },
    ...livePages().map((p) => ({
      url: `${SITE_ORIGIN}${p.slug}`,
      priority: p.group === "hub" ? 0.8 : 0.7,
    })),
  ];
}

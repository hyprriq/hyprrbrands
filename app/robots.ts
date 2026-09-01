import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site-map";

/** Allow everything — including AI crawlers explicitly, per the GEO
 *  requirements (a default-deny silently removes the site from every
 *  AI answer). No blanket noindex on production. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site-map";

/**
 * DEV_BRIEF §5: allow everything, disallow /api/, declare the sitemap.
 * AI crawlers stay explicitly allowed (a default-deny silently removes
 * the site from every AI answer). Vercel preview deployments get a
 * blanket disallow so the subdomain never competes with the domain —
 * belt and braces on top of the layout's noindex meta and Vercel's
 * own X-Robots-Tag.
 */
export default function robots(): MetadataRoute.Robots {
  const preview =
    !!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

  if (preview) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
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

import type { NextConfig } from "next";
import { REDIRECTS } from "./lib/site-map";

const nextConfig: NextConfig = {
  // One config value governs trailing-slash behaviour everywhere.
  trailingSlash: false,

  // The 301 table from docs/v4/SITEMAP.md — one hop, no chains.
  // `permanent: true` serves 308, the method-preserving successor to
  // 301; Google treats both as permanent.
  async redirects() {
    return REDIRECTS.map((r) => ({
      source: r.source,
      destination: r.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;

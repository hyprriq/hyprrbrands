import type { Metadata } from "next";
import type { EngineKey } from "@/lib/service-pages";

import wholesale from "@/content/services/wholesale-ecommerce";
import privateLabel from "@/content/services/private-label";
import shopifyDtc from "@/content/services/shopify-dtc";
import websiteDev from "@/content/services/ecommerce-website-development";
import ecomGrowth from "@/content/services/ecommerce-growth";
import mktGrowth from "@/content/services/marketplace-growth";
import ppc from "@/content/services/ppc-paid-media";
import ecomOps from "@/content/services/ecommerce-operations";
import mktMgmt from "@/content/services/marketplace-management";
import shopifyMgmt from "@/content/services/shopify-management";

/**
 * Share-card registry — prompt 8 B1. One card design, generated per
 * page from its own H1 at /og/[key]. Keys are looked up here, so the
 * image route cannot be made to render arbitrary text.
 */
export interface OgPage {
  path: string;
  title: string;
  engine: EngineKey | null;
}

const services = [
  wholesale,
  privateLabel,
  shopifyDtc,
  websiteDev,
  ecomGrowth,
  mktGrowth,
  ppc,
  ecomOps,
  mktMgmt,
  shopifyMgmt,
];

export const OG_PAGES: Record<string, OgPage> = {
  home: {
    path: "/",
    title: "You own the business. We run the operation.",
    engine: null,
  },
  ...Object.fromEntries(
    services.map((s) => [
      s.slug.slice(1),
      { path: s.slug, title: s.h1, engine: s.engine },
    ])
  ),
  build: {
    path: "/build",
    title: "Build an ecommerce business that is yours to keep",
    engine: "build",
  },
  grow: {
    path: "/grow",
    title: "Grow demand without breaking the economics",
    engine: "grow",
  },
  operate: {
    path: "/operate",
    title: "Operate: the work that keeps it selling",
    engine: "operate",
  },
  about: {
    path: "/about",
    title: "Who runs the operation",
    engine: null,
  },
  "how-we-work": {
    path: "/how-we-work",
    title: "You decide. We execute.",
    engine: null,
  },
  contact: {
    path: "/contact",
    title: "Tell us what you're trying to build.",
    engine: null,
  },
  "true-cost": {
    path: "/true-cost",
    title: "The true cost of launching a product",
    engine: null,
  },
  scale: {
    path: "/scale",
    title: "Scale: what breaks after it works",
    engine: "grow",
  },
  "where-we-work": {
    path: "/where-we-work",
    title: "Where we work",
    engine: null,
  },
  documents: {
    path: "/documents",
    title: "The documents, ungated",
    engine: null,
  },
  privacy: { path: "/privacy", title: "Privacy policy", engine: null },
  terms: { path: "/terms", title: "Terms of service", engine: null },
  accessibility: {
    path: "/accessibility",
    title: "Accessibility",
    engine: null,
  },
  "earnings-claims": {
    path: "/earnings-claims",
    title: "Earnings claims policy",
    engine: null,
  },
};

/** Metadata fragment adding the share card to a page. Merge into the
 *  page's existing openGraph/twitter blocks. */
export function ogImageMeta(key: string): Pick<Metadata, "openGraph" | "twitter"> {
  const page = OG_PAGES[key];
  const url = `/og/${key}`;
  return {
    openGraph: {
      images: [{ url, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      images: [url],
    },
  };
}

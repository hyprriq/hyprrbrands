/**
 * The single source of truth for every page on the site — Build Spec V1
 * section J. Nav dropdowns, the footer, the sitemap and hub-page card
 * grids all render from this array and LINK only entries with
 * status: "live". Shipping a page is a one-word change plus the route.
 *
 * Names must match Build Spec section D exactly — the same twelve
 * service strings are used in the engine cards, footer, nav and links.
 */

export type Engine = "build" | "grow" | "operate" | null;

export interface SitePage {
  slug: string; // leading slash, no trailing slash
  title: string;
  engine: Engine;
  group: "service" | "hub" | "company" | "support" | "legal";
  status: "live" | "planned";
  priority: number; // build order from section J (lower = sooner)
  oneLine: string;
}

export const SITE_MAP: SitePage[] = [
  // ---- Services (11) — section D one-line definitions ----
  {
    slug: "/wholesale-ecommerce",
    title: "Wholesale ecommerce",
    engine: "build",
    group: "service",
    status: "live",
    priority: 3,
    oneLine:
      "Sourcing, purchasing, listings and account setup for Amazon and Walmart wholesale operations",
  },
  {
    // A1: "& brand building" dropped everywhere — "private label brand
    // building agency" is a measured rejected keyword (returns
    // white-label resellers and personal-branding studios), and the
    // page does not lead with brand building. One string, one source.
    slug: "/private-label",
    title: "Private label",
    engine: "build",
    group: "service",
    status: "live",
    priority: 5,
    oneLine:
      "Product research and validation through supplier sourcing, brand, packaging and marketplace launch",
  },
  {
    slug: "/shopify-dtc",
    title: "Shopify / DTC",
    engine: "build",
    group: "service",
    status: "live",
    priority: 7,
    oneLine:
      "Direct-to-consumer storefront, customer journey and the operation behind it",
  },
  {
    slug: "/ecommerce-website-development",
    title: "Ecommerce website development",
    engine: "build",
    group: "service",
    status: "live",
    priority: 10,
    oneLine:
      "The build itself — Shopify and headless storefronts, conversion structure, integrations",
  },
  {
    slug: "/ecommerce-growth",
    title: "Ecommerce growth",
    engine: "grow",
    group: "service",
    status: "live",
    priority: 9,
    oneLine: "The cross-channel growth plan, measured on contribution margin",
  },
  {
    slug: "/marketplace-growth",
    title: "Marketplace growth",
    engine: "grow",
    group: "service",
    status: "live",
    priority: 8,
    oneLine:
      "Listings, content, ranking, buy box and channel expansion on Amazon and Walmart",
  },
  {
    // Dropped as a standalone page (1 Sep): it duplicated /shopify-dtc
    // and its SERP rewards roundups over service pages. The name stays
    // in every service list; the link is an anchor on the Shopify page.
    slug: "/shopify-dtc#growth",
    title: "DTC growth",
    engine: "grow",
    group: "service",
    status: "live",
    priority: 11,
    oneLine: "Acquisition, conversion and retention on the direct channel",
  },
  {
    slug: "/ppc-paid-media",
    title: "PPC & paid media",
    engine: "grow",
    group: "service",
    status: "live",
    priority: 12,
    oneLine:
      "Amazon and Walmart advertising plus off-platform paid acquisition, judged on margin",
  },
  {
    slug: "/ecommerce-operations",
    title: "Ecommerce operations",
    engine: "operate",
    group: "service",
    status: "live",
    priority: 6,
    oneLine:
      "Purchasing, inventory, orders, cases and reporting as an ongoing operation",
  },
  {
    slug: "/marketplace-management",
    title: "Marketplace management",
    engine: "operate",
    group: "service",
    status: "live",
    priority: 4,
    oneLine:
      "Day-to-day Amazon and Walmart account operation and account health",
  },
  {
    slug: "/shopify-management",
    title: "Shopify management",
    engine: "operate",
    group: "service",
    status: "live",
    priority: 13,
    oneLine:
      "Day-to-day storefront, catalogue, merchandising and fulfilment operations",
  },

  // ---- Hubs (3) ----
  {
    slug: "/build",
    title: "Build",
    engine: "build",
    group: "hub",
    status: "live",
    priority: 0,
    oneLine:
      "Stand the operation up — what to sell, who to buy it from, and the store, listings and accounts it sells through",
  },
  {
    slug: "/grow",
    title: "Grow",
    engine: "grow",
    group: "hub",
    status: "live",
    priority: 0,
    oneLine:
      "Demand, advertising and conversion — run across marketplaces and your own store, and measured on margin rather than revenue",
  },
  {
    slug: "/operate",
    title: "Operate",
    engine: "operate",
    group: "hub",
    status: "live",
    priority: 0,
    oneLine:
      "The daily work — purchase orders, inventory, orders, listings, cases, account health, and the reporting the next decision gets made on",
  },

  // ---- Company (4) ----
  {
    slug: "/how-we-work",
    title: "How we work",
    engine: null,
    group: "company",
    status: "live",
    priority: 1,
    oneLine:
      "The operating cycle, the approval gate, who we say no to, and how the fee structure is calculated",
  },
  {
    slug: "/about",
    title: "About",
    engine: null,
    group: "company",
    status: "planned",
    priority: 0,
    oneLine: "Who runs Hyprr, and where they worked before",
  },
  {
    slug: "/insights",
    title: "Insights",
    engine: null,
    group: "company",
    status: "planned",
    priority: 0,
    oneLine:
      "Practical research on marketplaces, private label, ecommerce operations and the economics behind the business",
  },
  {
    slug: "/contact",
    title: "Contact",
    engine: null,
    group: "company",
    status: "live",
    priority: 1,
    oneLine: "Tell us where you are and what you are trying to build",
  },

  // ---- Support (2) ----
  {
    slug: "/documents",
    title: "Documents",
    engine: null,
    group: "support",
    status: "planned",
    priority: 2,
    oneLine:
      "Sample agreements, fee schedule and reporting example — ungated",
  },
  {
    slug: "/true-cost",
    title: "True cost calculator",
    engine: null,
    group: "support",
    status: "live",
    priority: 2,
    oneLine:
      "Every cost component before a first sale, computed from your own inputs",
  },

  // ---- Legal (4) ----
  {
    slug: "/privacy",
    title: "Privacy policy",
    engine: null,
    group: "legal",
    status: "live",
    priority: 20,
    oneLine: "",
  },
  {
    slug: "/terms",
    title: "Terms of service",
    engine: null,
    group: "legal",
    status: "live",
    priority: 20,
    oneLine: "",
  },
  {
    slug: "/accessibility",
    title: "Accessibility",
    engine: null,
    group: "legal",
    status: "live",
    priority: 20,
    oneLine: "",
  },
  {
    slug: "/earnings-claims",
    title: "Earnings claims policy",
    engine: null,
    group: "legal",
    status: "live",
    priority: 20,
    oneLine: "",
  },
];

export const livePages = () =>
  SITE_MAP.filter((p) => p.status === "live" && !p.slug.includes("#"));

export const pagesByEngine = (engine: Engine) =>
  SITE_MAP.filter((p) => p.engine === engine && p.group === "service");

export const pageFor = (slug: string) =>
  SITE_MAP.find((p) => p.slug === slug);

export const isLive = (slug: string) => {
  const base = slug.split("#")[0];
  return SITE_MAP.some((p) => p.slug.split("#")[0] === base && p.status === "live");
};

/** The production origin. Flip to https://hyprrbrands.com when the
 *  custom domain is connected — canonicals must match the serving host. */
export const SITE_ORIGIN = "https://hyprrbrands.vercel.app";

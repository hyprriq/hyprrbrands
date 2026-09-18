/**
 * The single source of truth for every page on the site — v4 rebuild,
 * docs/v4/DEV_BRIEF.md + docs/v4/SITEMAP.md. Nine pages plus legal.
 * Nav, footer, sitemap.xml, llms.txt and the redirect table all render
 * from this file so none of them can drift from the routes.
 *
 * The gate scripts (scripts/check-*.mjs) parse this file by regex:
 * every entry keeps `slug:` before `status:` in declaration order.
 */

export type Group = "service" | "company" | "legal";
/** Nav grouping (PROMPT_24 §10): the three seller-side services sit
 *  under one "Management ▾" trigger. */
export type NavGroup = "management" | "company";

export interface SitePage {
  slug: string; // leading slash, no trailing slash
  title: string; // short label — nav and footer
  h1: string; // the full keyword-bearing page H1 (BUILD_SHEET §1)
  group: Group;
  status: "live" | "planned";
  priority: number; // build order (lower = sooner)
  oneLine: string;
  navGroup?: NavGroup;
}

export const SITE_MAP: SitePage[] = [
  // ---- The four service pages ----
  {
    slug: "/amazon-private-label",
    title: "Private label",
    h1: "Build a brand, not a listing.",
    group: "service",
    status: "live",
    priority: 2,
    oneLine:
      "Private label brands from an idea, an existing product or an opportunity we find: research, development, sourcing, launch and the operation afterwards",
  },
  {
    slug: "/amazon-wholesale-management",
    title: "Wholesale",
    h1: "We run wholesale operations on Amazon and Walmart.",
    group: "service",
    status: "live",
    priority: 3,
    oneLine:
      "Sourcing from authorized distributors, purchase orders you approve, and the daily work of keeping those lines selling",
  },
  {
    slug: "/amazon-walmart-management",
    title: "Management",
    h1: "You already sell. We run it properly.",
    group: "service",
    navGroup: "management",
    status: "live",
    priority: 4,
    oneLine:
      "Amazon and Walmart account operations, run daily — catalog, growth, inventory and account health",
  },
  {
    slug: "/amazon-listing-optimization",
    title: "Listing optimization",
    h1: "Your listing is where traffic becomes revenue.",
    group: "service",
    navGroup: "management",
    status: "live",
    priority: 6,
    oneLine:
      "Research, content, conversion and indexing on the listings you already have. Fixed price, two weeks",
  },
  {
    // Fifth service page (PPC_AND_CLOSING_BLOCK.md, 6 Sep); in the
    // nav under Management ▾ since PROMPT_24.
    slug: "/amazon-ppc-management",
    title: "PPC",
    h1: "Amazon PPC management that answers to margin, not to spend.",
    group: "service",
    navGroup: "management",
    status: "live",
    priority: 9,
    oneLine:
      "Amazon and Walmart US advertising judged on contribution margin, with bids tied to stock cover. Never paid on your ad spend",
  },

  // ---- Company ----
  {
    slug: "/how-we-work",
    title: "How we work",
    h1: "How we charge and how we work",
    group: "company",
    status: "live",
    priority: 5,
    oneLine:
      "The five steps in full, what you own and approve, and how the fees are structured — both models",
  },
  {
    slug: "/proof",
    title: "Proof",
    h1: "The work",
    group: "company",
    status: "live",
    priority: 7,
    oneLine:
      "The verdict sheet, the landed-cost model, a listing before and after, and a sample monthly report",
  },
  {
    slug: "/about",
    title: "About",
    h1: "Who runs Hyprr Brands",
    group: "company",
    status: "live",
    priority: 8,
    oneLine: "One named operator, how the work is covered, and where we work",
  },
  {
    slug: "/contact",
    title: "Contact",
    h1: "Book a call",
    group: "company",
    status: "live",
    priority: 1,
    oneLine:
      "Twenty minutes, no deck. Or send context first and we come with a view",
  },

  // ---- Legal — footer only, no nav ----
  {
    slug: "/privacy",
    title: "Privacy",
    h1: "Privacy policy",
    group: "legal",
    status: "live",
    priority: 20,
    oneLine: "",
  },
  {
    slug: "/terms",
    title: "Terms",
    h1: "Terms of service",
    group: "legal",
    status: "live",
    priority: 20,
    oneLine: "",
  },
  {
    slug: "/accessibility",
    title: "Accessibility",
    h1: "Accessibility statement",
    group: "legal",
    status: "live",
    priority: 20,
    oneLine: "",
  },
  {
    // Not in SITEMAP.md's three, but the URL exists and the policy is
    // real. In the footer Legal column since PROMPT_24 §7.3.
    slug: "/earnings-claims",
    title: "Earnings claims policy",
    h1: "Earnings claims policy",
    group: "legal",
    status: "live",
    priority: 21,
    oneLine: "",
  },
];

export const livePages = () =>
  SITE_MAP.filter((p) => p.status === "live" && !p.slug.includes("#"));

export const pageFor = (slug: string) =>
  SITE_MAP.find((p) => p.slug === slug);

export const isLive = (slug: string) => {
  const base = slug.split("#")[0];
  return SITE_MAP.some(
    (p) => p.slug.split("#")[0] === base && p.status === "live"
  );
};

/**
 * 301 table — SITEMAP.md. Single hop, no chains. The domain is four
 * years old and its inbound links are its only authority; a deleted
 * URL with no redirect throws that away permanently.
 * Wired into next.config.ts (permanent: true).
 */
export const REDIRECTS: { source: string; destination: string }[] = [
  { source: "/wholesale-ecommerce", destination: "/amazon-wholesale-management" },
  { source: "/private-label", destination: "/amazon-private-label" },
  { source: "/marketplace-management", destination: "/amazon-walmart-management" },
  { source: "/ecommerce-operations", destination: "/amazon-walmart-management" },
  { source: "/shopify-management", destination: "/amazon-walmart-management" },
  { source: "/marketplace-growth", destination: "/amazon-walmart-management#growth" },
  { source: "/ecommerce-growth", destination: "/amazon-walmart-management#growth" },
  // /ppc-paid-media originally pointed at the management #growth
  // anchor; retargeted to the dedicated PPC page the day it shipped
  // (still one hop, and a closer content match).
  { source: "/ppc-paid-media", destination: "/amazon-ppc-management" },
  { source: "/build", destination: "/how-we-work" },
  { source: "/grow", destination: "/how-we-work" },
  { source: "/operate", destination: "/how-we-work" },
  { source: "/scale", destination: "/how-we-work" },
  { source: "/where-we-work", destination: "/how-we-work" },
  { source: "/true-cost", destination: "/how-we-work" },
  { source: "/documents", destination: "/proof" },
  // The other domain does not exist yet — SITEMAP.md says "/" until it does.
  { source: "/shopify-dtc", destination: "/" },
  { source: "/ecommerce-website-development", destination: "/" },
  { source: "/insights", destination: "/" },
];

/**
 * Navigation — PROMPT_24 §10 + 24.1 #1. The header and the mobile
 * menu render from NAV; the footer from FOOTER; both live here so a
 * label can only be changed in one place. Top nav: Private label ·
 * Wholesale · Management ▾ · How we work · Company ▾ · Book a call.
 * "Management" groups the three services for sellers who already
 * sell (navGroup: "management" on their SITE_MAP entries); "Company"
 * groups Proof, About and Contact (restored by PROMPT_24.1 — §10 had
 * dropped it by mistake).
 */
export interface NavChild {
  href: string;
  label: string;
  desc: string;
}
export interface NavItem {
  label: string;
  href?: string; // a plain link…
  children?: NavChild[]; // …or a dropdown / mobile accordion
  group?: NavGroup; // data-feature="nav-<group>-group" on the trigger
}

export const NAV: NavItem[] = [
  { label: "Private label", href: "/amazon-private-label" },
  { label: "Wholesale", href: "/amazon-wholesale-management" },
  {
    label: "Management",
    group: "management",
    children: [
      {
        href: "/amazon-walmart-management",
        label: "Amazon & Walmart management",
        desc: "Daily operation of the accounts you already have",
      },
      {
        href: "/amazon-listing-optimization",
        label: "Listing optimization",
        desc: "Fixed-price rebuild of titles, images and A+",
      },
      {
        href: "/amazon-ppc-management",
        label: "PPC management",
        desc: "Advertising judged on margin, not spend",
      },
    ],
  },
  { label: "How we work", href: "/how-we-work" },
  {
    label: "Company",
    group: "company",
    children: [
      { href: "/proof", label: "Proof", desc: "The documents we produce, ungated" },
      { href: "/about", label: "About", desc: "Who runs Hyprr Brands" },
      { href: "/contact", label: "Contact", desc: "Book a call, or send context first" },
    ],
  },
];

/** Footer columns — all five services; Legal carries the four policies (§7.3). */
export const FOOTER = {
  services: [
    { href: "/amazon-private-label", label: "Amazon private label" },
    { href: "/amazon-wholesale-management", label: "Amazon wholesale management" },
    { href: "/amazon-walmart-management", label: "Amazon and Walmart management" },
    { href: "/amazon-listing-optimization", label: "Amazon listing optimization" },
    { href: "/amazon-ppc-management", label: "Amazon PPC management" },
  ],
  company: [
    { href: "/how-we-work", label: "How we work" },
    { href: "/proof", label: "Proof" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/accessibility", label: "Accessibility" },
    { href: "/earnings-claims", label: "Earnings claims" },
  ],
};

/** The production origin. Canonicals, OG URLs, sitemap and llms.txt
 *  all derive from this. DEV_BRIEF step 2: the real domain, not the
 *  Vercel subdomain. */
export const SITE_ORIGIN = "https://hyprrbrands.com";

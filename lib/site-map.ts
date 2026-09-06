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

export interface SitePage {
  slug: string; // leading slash, no trailing slash
  title: string; // short label — nav and footer
  h1: string; // the full keyword-bearing page H1 (BUILD_SHEET §1)
  group: Group;
  status: "live" | "planned";
  priority: number; // build order (lower = sooner)
  oneLine: string;
}

export const SITE_MAP: SitePage[] = [
  // ---- The four service pages ----
  {
    slug: "/amazon-private-label",
    title: "Private label",
    h1: "Launch a brand. Or run the one you already have.",
    group: "service",
    status: "live",
    priority: 2,
    oneLine:
      "Product research, sourcing, packaging and marketplace launch, then the daily operation after it",
  },
  {
    slug: "/amazon-wholesale-management",
    title: "Wholesale",
    h1: "We run wholesale operations on Amazon and Walmart.",
    group: "service",
    status: "live",
    priority: 3,
    oneLine:
      "Sourcing from authorised distributors, purchase orders you approve, and the daily work of keeping those lines selling",
  },
  {
    slug: "/amazon-walmart-management",
    title: "Management",
    h1: "You already sell. We run it properly.",
    group: "service",
    status: "live",
    priority: 4,
    oneLine:
      "Amazon and Walmart account operations, run daily — catalogue, growth, inventory and account health",
  },
  {
    slug: "/amazon-listing-optimization",
    title: "Listings",
    h1: "Your listing is where traffic becomes revenue.",
    group: "service",
    status: "live",
    priority: 6,
    oneLine:
      "Research, content, conversion and indexing on the listings you already have. Fixed price, two weeks",
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
    // real — kept live rather than deleted (nothing is deleted before
    // the redirects are proven). Footer-omitted; flagged to the owner.
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
  { source: "/ppc-paid-media", destination: "/amazon-walmart-management#growth" },
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

/** The production origin. Canonicals, OG URLs, sitemap and llms.txt
 *  all derive from this. DEV_BRIEF step 2: the real domain, not the
 *  Vercel subdomain. */
export const SITE_ORIGIN = "https://hyprrbrands.com";

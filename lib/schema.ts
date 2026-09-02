import { SITE_ORIGIN } from "@/lib/site-map";

/**
 * JSON-LD graph — Build Spec §M, prompt 6. ONE shared graph: the
 * Organization and WebSite nodes render once in the root layout;
 * pages add WebPage + BreadcrumbList, service pages add Service, and
 * FAQPage appears ONLY where an FAQ is visibly rendered with text
 * matching the visible answers character for character.
 *
 * Publish only what is verified (§P.07 open): no legalName, address,
 * telephone, foundingDate or logo until confirmed; sameAs omitted
 * rather than pointed at empty profiles. No aggregateRating, Review,
 * offers or priceRange anywhere — there are none to describe.
 */

const ORG_ID = `${SITE_ORIGIN}/#organization`;
const SITE_ID = `${SITE_ORIGIN}/#website`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Hyprr Brands",
    url: `${SITE_ORIGIN}/`,
    description:
      "Ecommerce operations agency. Hyprr builds, grows and operates Amazon (US and UK), Walmart (US) and Shopify businesses on behalf of the people who own them. Clients are in the US, UK, Europe and the Middle East. The client owns the accounts, the inventory and the capital, and approves every material purchase.",
    email: "hello@hyprrbrands.com",
    areaServed: [
      "United States",
      "United Kingdom",
      "European Union",
      "Middle East",
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: "Hyprr Brands",
    url: `${SITE_ORIGIN}/`,
    publisher: { "@id": ORG_ID },
  };
}

export function webPageLd(page: {
  path: string;
  title: string;
  description: string;
}) {
  const url = `${SITE_ORIGIN}${page.path === "/" ? "/" : page.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_ORIGIN}${t.path === "/" ? "/" : t.path}`,
    })),
  };
}

export function serviceLd(service: {
  name: string;
  serviceType: string;
  path: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_ORIGIN}${service.path}#service`,
    name: service.name,
    serviceType: service.serviceType,
    url: `${SITE_ORIGIN}${service.path}`,
    description: service.description,
    provider: { "@id": ORG_ID },
    // Marketplaces are US and UK; client regions live on the
    // Organization node.
    areaServed: ["US", "GB"],
  };
}

/** ONLY for pages whose FAQ is visibly rendered — `text` must be the
 *  same string object the page renders. */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Serialize for a <script type="application/ld+json"> block. */
export function ldJson(...nodes: object[]) {
  return nodes
    .map((n) => JSON.stringify(n).replace(/</g, "\\u003c"))
    .join("\n");
}

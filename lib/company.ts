/**
 * Company facts — PROMPT_24 §12. The single source for the legal
 * entity, the one email address and the six locations. The footer,
 * /contact, /about, the legal pages and the Organization JSON-LD all
 * read from here, so a fact can only be changed in one place.
 *
 * No phone number exists and none may be added: it appears nowhere on
 * the site, in the schema or in the brand kit (§12).
 */
export const legalName = "Hyprr Retail LLC";
export const brandName = "Hyprr Brands";
export const entityLine =
  "Hyprr Brands is operated by Hyprr Retail LLC, a Wyoming company based in Easton, Pennsylvania, USA.";
export const email = "hello@hyprrbrands.com";

/** Postal address for the Organization node — locality level only.
 *  There is no street address to publish (§12.6). */
export const address = {
  addressLocality: "Easton",
  addressRegion: "PA",
  addressCountry: "US",
};

export interface Location {
  city: string;
  region: "United States" | "Asia-Pacific" | "Middle East";
  country: string;
  iso2: "US" | "TH" | "SG" | "IN" | "AE";
  hq?: boolean;
  /** secondary line on the contact card ("Headquarters", "West Coast") */
  note?: string;
  /** short label for the footer strip */
  short: string;
}

export const locations: Location[] = [
  {
    city: "Easton, Pennsylvania",
    short: "Easton, PA",
    region: "United States",
    country: "United States",
    iso2: "US",
    hq: true,
    note: "Headquarters",
  },
  {
    city: "California",
    short: "California",
    region: "United States",
    country: "United States",
    iso2: "US",
    note: "West Coast",
  },
  {
    city: "Bangkok, Thailand",
    short: "Bangkok",
    region: "Asia-Pacific",
    country: "Thailand",
    iso2: "TH",
  },
  {
    city: "Singapore",
    short: "Singapore",
    region: "Asia-Pacific",
    country: "Singapore",
    iso2: "SG",
  },
  {
    city: "Hyderabad, India",
    short: "Hyderabad",
    region: "Asia-Pacific",
    country: "India",
    iso2: "IN",
  },
  {
    city: "Dubai, UAE",
    short: "Dubai",
    region: "Middle East",
    country: "United Arab Emirates",
    iso2: "AE",
  },
];

export const regions = ["United States", "Asia-Pacific", "Middle East"] as const;

/** The three facts under the location cards (§12.1). */
export const hoursCovered = "US · UK · Gulf · Asia-Pacific";
export const marketplaces = "Amazon US, UK, EU, Gulf · Walmart US";

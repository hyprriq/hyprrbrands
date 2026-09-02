import type { Metadata } from "next";
import Link from "next/link";
import SitePageShell from "@/components/SitePageShell";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * /where-we-work — PROMPT_17 §9. One global page, not country pages:
 * near-identical /us, /singapore, /middle-east variants are doorway
 * territory. Regions mirror the Organization node's areaServed, and
 * the entity line answers the question the persona review asked
 * unprompted — "which country am I contracting with?" No hreflang:
 * one English page has no localised variants to annotate.
 */
const TITLE = "Where We Work | Hyprr Brands Ecommerce";
const META =
  "Hyprr runs Amazon US & UK, Walmart US and Shopify operations for owners in the United States, the United Kingdom, Europe, the Middle East and APAC.";

export const metadata: Metadata = {
  title: TITLE,
  description: META,
  alternates: { canonical: "/where-we-work" },
  ...ogImageMeta("where-we-work"),
};

const REGIONS: [string, string][] = [
  [
    "United States",
    "The home marketplace set: Amazon US, Walmart US, and Shopify storefronts. Most operating work — purchasing, listings, cases, reporting — runs on US marketplace clocks whichever region the owner is in.",
  ],
  [
    "United Kingdom",
    "Amazon UK is a first-class surface here, run on its own rulebook rather than as a copy of the US account, and UK owners also reach Amazon US and Walmart US through the same desk.",
  ],
  [
    "Europe",
    "Owners across Europe run US and UK marketplace businesses with Hyprr. The marketplaces in scope stay Amazon US & UK and Walmart US — we do not currently operate the EU marketplaces themselves.",
  ],
  [
    "Middle East",
    "A growing share of clients. The engagement is identical: your entity, your accounts, your capital, with the operating desk working US and UK marketplace hours as needed.",
  ],
  [
    "Singapore & APAC",
    "Owners in Singapore and the wider region run the same US and UK marketplace operations. Distance changes the meeting times, not the model.",
  ],
];

export default function Page() {
  return (
    <SitePageShell>
      <JsonLd
        nodes={[
          webPageLd({
            path: "/where-we-work",
            title: TITLE,
            description: META,
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Where we work", path: "/where-we-work" },
          ]),
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,6vw,72px)]">
          <nav aria-label="Breadcrumb">
            <ol className="font-mono type-label text-label normal-case tracking-normal flex gap-2 list-none m-0 p-0">
              <li>
                <Link href="/" className="text-label hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                Where we work
              </li>
            </ol>
          </nav>
          <h1 className="font-display type-h1 text-ink m-0 mt-[18px] max-w-[16ch] text-balance">
            Where we work
          </h1>
          <p className="type-lead text-body m-0 mt-5 max-w-[58ch]">
            The marketplaces are American and British; the owners are not
            always either. One operating model serves all of it, and this
            page says plainly what that means by region.
          </p>
          {/* The entity line — asked unprompted by a first-time reader */}
          <p className="type-body text-ink font-medium mt-6 mb-0 max-w-[62ch] border-l-[3px] border-ink pl-5">
            Wherever you are, every engagement contracts with Hyprr Retail
            LLC, a United States company, and fees are agreed and invoiced
            in USD. The accounts, the inventory and the capital stay in
            your name and your country.
          </p>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,64px)]">
          <h2 className="font-display type-h2 text-ink m-0">By region</h2>
          <div className="grid grid-cols-1 min-[720px]:grid-cols-2 gap-3 mt-7">
            {REGIONS.map(([name, desc]) => (
              <div
                key={name}
                className="bg-white border border-line rounded-md p-[clamp(20px,2.4vw,28px)] grid gap-2.5 content-start"
              >
                <b className="text-ink type-lead font-bold tracking-[-.01em]">
                  {name}
                </b>
                <p className="type-body text-body m-0">{desc}</p>
              </div>
            ))}
          </div>
          <p className="type-body text-body mt-6 mb-0 max-w-[62ch]">
            What the desk actually does is the same everywhere — start with{" "}
            <a
              href="/how-we-work"
              className="text-ink hover:text-ink font-semibold"
            >
              how we work
            </a>
            , or go straight to{" "}
            <a
              href="/wholesale-ecommerce"
              className="text-ink hover:text-ink font-semibold"
            >
              wholesale
            </a>
            ,{" "}
            <a
              href="/private-label"
              className="text-ink hover:text-ink font-semibold"
            >
              private label
            </a>{" "}
            or{" "}
            <a
              href="/marketplace-management"
              className="text-ink hover:text-ink font-semibold"
            >
              account management
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-field text-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(48px,6vw,80px)]">
          <p className="font-display type-h2 text-white m-0 max-w-[18ch] text-balance">
            Tell us where you are, and what you&apos;re building.
          </p>
          <div className="flex gap-[22px] items-center mt-7 flex-wrap">
            <a
              href="/contact"
              className="bg-build text-ink hover:text-ink type-body font-bold px-[22px] py-3.5 rounded-md min-h-12 inline-flex items-center"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

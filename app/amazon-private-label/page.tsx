import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Private label — ported from docs/v4/hyprr-private-label-v3-3.html
 * (final design and copy; the structural template for every other
 * service page). Strings lifted verbatim; wiring only: real hrefs,
 * the SITEMAP.md link map, FAQ via the shared component.
 */
const TITLE = "Amazon Private Label Agency | Product to Launch — Hyprr";
const DESC =
  "We find the product, prove the numbers, build the brand and launch it on Amazon and Walmart. Then we run it. A written verdict before you spend.";
const PATH = "/amazon-private-label";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: PATH,
    siteName: "Hyprr Brands",
    type: "website",
    ...ogImageMeta("amazon-private-label").openGraph,
  },
  ...{ twitter: ogImageMeta("amazon-private-label").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

const FAQS = [
  {
    q: "Is Amazon private label still profitable?",
    a: "On products where the economics survive fees, advertising and returns, yes. Most do not. We score each candidate on landed cost, fees, competition and demand, and give you a written verdict before any money is committed. Profitability is a per-product question, never a category one.",
  },
  {
    q: "How long does a launch take?",
    a: "Research and the verdict take weeks. Sampling and manufacturing take months and depend on your supplier. Plan on a first purchase order somewhere between day 60 and day 90. Anyone promising faster is either using stock inventory or being optimistic.",
  },
  {
    q: "Can you take over a brand that already sells?",
    a: "Yes. Existing brands usually start with listing and catalogue work, then move into full managed operations. You keep the account in your name and we work under permissioned access you can revoke in one click.",
  },
  {
    q: "FBA or FBM for a new product?",
    a: "Most private label products start on FBA, because Prime eligibility and the buy box matter for a listing with no history. FBM makes sense for oversized items, slow movers, or where you already have fulfilment you trust.",
  },
  {
    q: "Do you work on Walmart as well as Amazon?",
    a: "Yes, in the US. Walmart has a different advertising platform, a different fee structure and slower review velocity, so we launch on Amazon first and add Walmart once the product has proven it sells.",
  },
  {
    q: "Who owns the brand and the accounts?",
    a: "You do. The trademark, the brand registry, the seller account and the stock are all in your name. Suppliers invoice you directly. Nothing is ordered without your written approval.",
  },
];

export default function Page() {
  return (
    <main id="main">
      <JsonLd
        nodes={[
          webPageLd({ path: PATH, title: TITLE, description: DESC }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Private label", path: PATH },
          ]),
          serviceLd({
            name: "Amazon private label agency",
            serviceType: "Private label product launch and operations",
            path: PATH,
            description: DESC,
          }),
        ]}
      />

      {/* HERO */}
      <section className="plhero">
        <div className="wrap plhero-grid">
          <div>
            <span className="eyebrow">Private label / Amazon + Walmart</span>
            <h1>Launch a brand. Or run the one you already have.</h1>
            <p>
              We take a private label business from product opportunity and
              sourcing through marketplace launch, then run it every day
              afterwards. If the product does not work on paper, we tell you
              before you spend.
            </p>
            <div className="plchips">
              <span className="chip">PRODUCT RESEARCH</span>
              <span className="chip">SOURCING</span>
              <span className="chip">DEVELOPMENT</span>
              <span className="chip">PACKAGING</span>
              <span className="chip">AMAZON</span>
              <span className="chip">WALMART</span>
            </div>
            <div className="cta-row">
              <a className="btn cit" href={BOOKING}>
                Book a call
              </a>
              <a className="btn line-l" href="#gate">
                See a product verdict
              </a>
            </div>
          </div>
          <div className="product-visual">
            <div className="packshot">
              <div className="box">
                YOUR
                <br />
                PRODUCT
              </div>
            </div>
            <div className="artlabels">
              <span>RESEARCH</span>
              <span>SOURCING</span>
              <span>PACKAGING</span>
              <span>LISTING</span>
              <span>LAUNCH</span>
            </div>
          </div>
        </div>
      </section>

      {/* TWO STARTING POINTS */}
      <section className="start" id="journey">
        <div className="wrap">
          <span className="eyebrow">Two starting points</span>
          <h2>Same destination. Different starting point.</h2>
          <div className="start-grid">
            <div className="start-card new">
              <span className="tag">01 — LAUNCHING</span>
              <h3>You have the idea. Build the brand.</h3>
              <p style={{ margin: "10px 0 0" }}>
                For founders, investors and businesses entering private label.
              </p>
              <ul>
                <li>Research the category and the product opportunity</li>
                <li>Product development, samples and quality spec</li>
                <li>Sourcing, unit cost and a written verdict</li>
                <li>Packaging, compliance and brand</li>
                <li>Listing, launch and first advertising</li>
              </ul>
              <a className="go" href="#build">
                See the build path →
              </a>
            </div>
            <div className="start-card existing">
              <span className="tag">02 — ALREADY SELLING</span>
              <h3>You have the brand. Improve and run it.</h3>
              <p style={{ margin: "10px 0 0" }}>
                For brands with products, listings or marketplace sales already
                in place.
              </p>
              <ul>
                <li>
                  <a href="/amazon-listing-optimization">
                    Listing and catalogue optimization
                  </a>
                </li>
                <li>Inventory, replenishment and stock cover</li>
                <li>Amazon and Walmart account operations</li>
                <li>Advertising, ranking and buy box</li>
                <li>Growth, then expansion into new products</li>
              </ul>
              <a className="go" href="#operate">
                See what we operate →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BUILD PATH */}
      <section className="buildband" id="build">
        <div className="wrap">
          <span className="eyebrow">Build / launch</span>
          <h2>From product opportunity to marketplace-ready.</h2>
          <div className="build-grid">
            <div>
              <p>
                Six stages, in order. Research and development take weeks.
                Sampling and manufacturing take months and depend on the
                supplier. Plan on a first purchase order somewhere between day
                60 and day 90, and treat anyone promising faster as optimistic.
              </p>
              <p style={{ marginBottom: 0 }}>
                <b>This stage is a launch project.</b> Fixed scope, priced and
                agreed in writing before anything starts, and it ends at
                launch.
              </p>
            </div>
            <div className="steps">
              <div className="step">
                <b>01 Research</b>
                <span>MARKET + PRODUCT OPPORTUNITY</span>
              </div>
              <div className="step">
                <b>02 Develop</b>
                <span>PRODUCT + DESIGN + R&amp;D</span>
              </div>
              <div className="step">
                <b>03 Source</b>
                <span>SUPPLIER + SAMPLE + COST</span>
              </div>
              <div className="step">
                <b>04 Package</b>
                <span>PACKAGING + RETAIL READINESS</span>
              </div>
              <div className="step">
                <b>05 Launch</b>
                <span>LISTING + AMAZON + WALMART</span>
              </div>
              <div className="step">
                <b>06 Stabilize</b>
                <span>INVENTORY + OPERATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE GATE */}
      <section className="gate" id="gate">
        <div className="wrap">
          <span className="eyebrow">The decision</span>
          <h2>Between research and sourcing, there is a verdict.</h2>
          <div className="gate-grid">
            <div>
              <p>
                Every product candidate is scored on landed cost, marketplace
                fees, returns, competition and demand. You get one page that
                says buy or do not buy, and the reason. You can read it and
                disagree with it.
              </p>
              <p>
                Most candidates fail. We send you the sheet that shows why, and
                we do not buy them. That is the part that protects your money,
                and it happens before any of it moves.
              </p>
              <p style={{ marginBottom: 0 }}>
                <b style={{ color: "#fff" }}>
                  Nothing is ordered without your approval, in writing.
                </b>{" "}
                <a href="/proof" style={{ color: "#d5e2e0", fontWeight: 600 }}>
                  See a sample verdict →
                </a>
              </p>
            </div>
            <div className="vsheet">
              <div className="hd">
                <span>PRODUCT VERDICT · CANDIDATE 0412</span>
                <span>4 SEP</span>
              </div>
              <div className="r">
                <span>Landed unit cost</span>
                <b>11.40</b>
              </div>
              <div className="r">
                <span>Marketplace fees</span>
                <b>6.85</b>
              </div>
              <div className="r">
                <span>Returns and advertising</span>
                <b>3.10</b>
              </div>
              <div className="r">
                <span>Competing offers</span>
                <b>14</b>
              </div>
              <div className="r out">
                <span>Margin against a 20% floor</span>
                <b>4.8% · DO NOT BUY</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RUN */}
      <section className="run" id="operate">
        <div className="wrap">
          <span className="eyebrow">Run / operate</span>
          <h2>After launch, we keep the business moving.</h2>
          <div className="run-grid">
            <div>
              <p>
                Ongoing marketplace management connects catalogue, inventory,
                account operations, advertising and growth, run by the same
                people who chose the product.
              </p>
              <p style={{ marginBottom: 0 }}>
                <b style={{ color: "#fff" }}>
                  This stage is{" "}
                  <a href="/amazon-walmart-management" style={{ color: "#fff" }}>
                    managed operations
                  </a>
                  .
                </b>{" "}
                Monthly and continuous, with a written report showing margin by
                product.
              </p>
            </div>
            <div className="ops">
              <div className="op">
                <b>Catalog</b>
                <span>
                  Listings, A+ content, attributes, variations and compliance
                </span>
              </div>
              <div className="op">
                <b>Inventory</b>
                <span>
                  Stock cover, replenishment, stranded stock and planning
                </span>
              </div>
              <div className="op">
                <b>Marketplace</b>
                <span>
                  Amazon and Walmart account operations, cases and account
                  health
                </span>
              </div>
              <div className="op">
                <b>Advertising</b>
                <span>PPC, search terms, bids, ranking and buy box</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROW / SCALE */}
      <section className="scaleband">
        <div className="wrap">
          <span className="eyebrow">Grow → scale</span>
          <h2>Build the feedback loop.</h2>
          <p>
            Operations create the data. Optimization finds the opportunities.
            Scale puts more behind what already works, and only when the cash,
            the stock and the margin can carry it.
          </p>
          <div className="scale-flow">
            <div>
              <b>Measure</b>
              <span>Sales, margin and marketplace signals</span>
            </div>
            <div>
              <b>Improve</b>
              <span>Listing, advertising and price</span>
            </div>
            <div>
              <b>Expand</b>
              <span>More products, then Walmart</span>
            </div>
            <div>
              <b>Scale</b>
              <span>Operations and capacity behind the winners</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="fees">
        <div className="wrap">
          <span className="eyebrow">What it costs</span>
          <h2>Two fees, both agreed in writing first.</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>The launch project</b>
              <span>
                A fixed fee, scoped before anything starts. It depends on the
                category, the number of products and whether Walmart is
                included. Stock, tooling and advertising are your costs, paid
                by you directly to the supplier and the marketplace.
              </span>
            </div>
            <div className="fee">
              <b>Managed operations</b>
              <span>
                A monthly fee once the brand is live. Nothing is charged on
                your advertising spend and nothing on your capital, so growing
                the account never makes us more money for spending yours.
              </span>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            <a href="/how-we-work" style={{ fontWeight: 600 }}>
              How we charge, in full →
            </a>
          </p>
        </div>
      </section>

      {/* SEO body copy */}
      <section className="seoband">
        <div className="wrap">
          <h2>Amazon and Walmart private label services</h2>
          <div className="cols">
            <div>
              <p>
                Private label means having a product manufactured and sold
                under your own brand rather than reselling someone else&apos;s.
                You own the listing, the reviews and the margin. You also carry
                the risk if the product does not sell, which is why the
                research has to be honest before the money moves.
              </p>
              <p>
                Our private label service covers product and market research,
                product development, supplier sourcing, samples and quality
                specification, packaging and compliance, listing creation with
                A+ content, and the Amazon and Walmart launch itself.
              </p>
            </div>
            <div>
              <p>
                After launch, the same team runs the account: inventory and
                replenishment, advertising and ranking, cases and account
                health, and a monthly report showing margin by product rather
                than revenue by product.
              </p>
              <p>
                We work on Amazon in the US, UK, Europe and the Gulf, and on
                Walmart in the US. Clients include brand owners, manufacturers
                selling direct, and investors placing capital into US
                marketplaces from outside the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq items={FAQS} />

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <span className="eyebrow">Next step</span>
          <h2>Launching, or already selling?</h2>
          <p>
            Tell us the category you are thinking about, or the brand you
            already run. We will tell you honestly whether it is worth the
            money before you spend any.
          </p>
          <div className="cta-row">
            <a className="btn cit" href={BOOKING}>
              Book a call
            </a>
            <a className="btn line-l" href="/contact#form">
              Send context instead
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

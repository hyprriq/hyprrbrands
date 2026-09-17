import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import Visual from "@/components/Visual";
import ComplianceMatrix from "@/components/ComplianceMatrix";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Private label — v4 structure from docs/v4/hyprr-private-label-v3-3.html,
 * copy and section order per PROMPT_24 §4.1 (final, edited; the
 * compliance gates, direct costs, launch timeline, import and declined
 * products sections are new). Strings verbatim; wiring only.
 */
const TITLE = "Amazon Private Label Agency | Research, Test, Launch | Hyprr";
const DESC =
  "Amazon private label agency. We research, source, test and launch on Amazon and Walmart US. If the numbers or compliance fail, you hear it before you buy.";
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
    ...ogImageMeta("amazon-private-label", [
      "/og/og-amazon-private-label-compliance-gates.png",
    ]).openGraph,
  },
  ...{ twitter: ogImageMeta("amazon-private-label").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

const FAQS = [
  {
    q: "What compliance does a private label product need before it sells in the US?",
    a: "It depends on the category, and we confirm it before the purchase order. Children's products need CPSC-accepted lab testing and a Children's Product Certificate. Supplements need FDA-compliant labels and, on Amazon, third-party verification. Radio devices need FCC authorization, and pest or germ claims need EPA registration. The testing cost goes into the verdict, so you see it before you approve an order.",
  },
  {
    q: "Do I need a trademark before launching?",
    a: "You need one filed before you can enrol in Amazon Brand Registry, which is how you control your listing content and report copies. A filed application is enough to start. We check the name for conflicts first. The filing and your GS1 barcodes are registered to your business.",
  },
  {
    q: "Who is the importer, and who pays duty?",
    a: "Your business is the importer of record, so the customs bond, the duty and the product certificates are in your name. We coordinate the broker and forwarder and check the paperwork before goods ship.",
  },
  {
    // Dev note (PROMPT_24): after 2 Nov 2026, change "From 2 November
    // 2026, Amazon requires" to "Since 2 November 2026, Amazon has
    // required". [verify] — owner confirms in Seller Central (B7).
    q: "Do I need product liability insurance from the start?",
    a: "Often, yes. Amazon requires commercial liability cover once a seller passes its monthly sales threshold. From 2 November 2026, Amazon requires that cover from the first sale in 11 categories, including children's products, supplements, cosmetics and lithium battery products. Walmart has its own insurance policy. We check both against your policy before launch.",
  },
  {
    q: "How do you get the first reviews?",
    a: "Through Amazon's own programs, such as Vine where the listing qualifies, and through a product that earns them. We don't use review groups, rebates, or giveaways in exchange for reviews. They put the account at risk, and the account is yours.",
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

      {/* 1 · HERO — visual 02 (master in a card: petrol band) */}
      <section className="plhero">
        <div className="wrap plhero-grid">
          <div>
            <span className="eyebrow">Private label / Amazon + Walmart US</span>
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
              <span className="chip">WALMART US</span>
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
          <Visual
            variant="hero"
            onDark
            name="amazon-private-label/hero-six-stages"
            alt="Private label journey for an example brand: sketch, technical drawing, prototype, finished bottle and retail box, listed on Amazon and Walmart, above six stages from research to stabilize and a timeline with the first order at day 60–90"
          />
        </div>
      </section>

      {/* 2 · TWO STARTING POINTS */}
      <section className="start" id="journey">
        <div className="wrap">
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
                    Listing and catalog optimization
                  </a>
                </li>
                <li>Inventory, replenishment and stock cover</li>
                <li>Amazon and Walmart US account operations</li>
                <li>Advertising, ranking and the featured offer</li>
                <li>Growth, then expansion into new products</li>
              </ul>
              <a className="go" href="#operate">
                See what we operate →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · BUILD PATH — six stages (compliance moved into Source, §4.1) */}
      <section className="buildband" id="build">
        <div className="wrap">
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
                <span>
                  SUPPLIERS, SAMPLES, TESTING SCOPE AND COST, AGREED BEFORE THE
                  PURCHASE ORDER
                </span>
              </div>
              <div className="step">
                <b>04 Package</b>
                <span>PACKAGING, LABELS AND RETAIL READINESS</span>
              </div>
              <div className="step">
                <b>05 Launch</b>
                <span>LISTING + AMAZON + WALMART US</span>
              </div>
              <div className="step">
                <b>06 Stabilize</b>
                <span>INVENTORY + OPERATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · THE GATE — visual 09 beside the sample verdict (§1a) */}
      <section className="gate" id="gate">
        <div className="wrap">
          <h2>Between research and sourcing, there is a verdict.</h2>
          <div className="visual-side-grid">
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
                <a href="/proof#verdict" style={{ color: "#d5e2e0", fontWeight: 600 }}>
                  See a sample verdict →
                </a>
              </p>
              <div className="vsheet">
                <div className="hd">
                  <span>PRODUCT VERDICT · CANDIDATE 0412 · SEP</span>
                  <span>ILLUSTRATIVE</span>
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
                  <span>Testing and certification</span>
                  <b>QUOTED</b>
                </div>
                <div className="r">
                  <span>Patent and trademark check</span>
                  <b>CLEAR</b>
                </div>
                <div className="r">
                  <span>Competing brands</span>
                  <b>14</b>
                </div>
                <div className="r out">
                  <span>Margin against a 20% floor</span>
                  <b>4.8% · DO NOT BUY</b>
                </div>
              </div>
            </div>
            <Visual
              variant="side"
              onDark
              name="home/verdict-buy-or-do-not-buy"
              alt="Two one-page product verdict sheets, one marked buy and one on top marked do not buy at 4.8% margin against a 20% floor"
            />
          </div>
        </div>
      </section>

      {/* 5 · P0 · COMPLIANCE GATES — replaces the categories photos */}
      <section className="start" id="compliance">
        <div className="wrap">
          <span className="eyebrow">Compliance gates · US marketplaces</span>
          <h2>What gets checked and costed before a purchase order.</h2>
          <p style={{ maxWidth: "70ch" }}>
            Each category has its own rules on Amazon and Walmart in the US.
            We confirm what applies, get the testing quoted and put the cost
            into the verdict before you approve an order.
          </p>
          <ComplianceMatrix />
          <ul className="facts" style={{ marginTop: 28 }}>
            <li>
              <b>Children&apos;s products and toys.</b> Anything made mainly for
              children aged 12 and under needs testing at a CPSC-accepted lab
              and a Children&apos;s Product Certificate. Toys also need age
              grading, small-parts warnings and permanent tracking labels.
            </li>
            <li>
              <b>Dietary supplements.</b> The label must follow FDA rules under
              DSHEA. Amazon also requires third-party verification of the
              product and of the manufacturer&apos;s quality practices.
            </li>
            <li>
              <b>Cosmetics and personal care.</b> The facility and the product
              must be registered and listed with the FDA under MoCRA. We check
              ingredient labeling, drug-like claims and Prop 65 warnings.
            </li>
            <li>
              <b>Kitchen and home.</b> Anything that touches food must be made
              from materials approved for that use. We check Prop 65 and state
              chemical rules before the material spec is signed.
            </li>
            <li>
              <b>Electronics and batteries.</b> Radio devices need FCC
              authorization. Lithium batteries need UN38.3 test results, a
              safety data sheet and Amazon&apos;s dangerous goods review.
            </li>
            <li>
              <b>Pest and germ claims.</b> A product that claims to kill or
              repel pests or germs is a pesticide under federal law and needs
              EPA registration. We usually change the claim or drop the
              product.
            </li>
          </ul>
          <p style={{ marginTop: 22, maxWidth: "76ch" }}>
            <b>Every product:</b> trademark filed for Brand Registry · GS1
            barcodes · country-of-origin marking · pre-shipment inspection ·
            customs bond and ISF · product liability cover.
          </p>
          <p style={{ marginBottom: 0, fontSize: 13.5, color: "var(--muted)" }}>
            <em>
              Illustrative summary for US marketplaces. What applies is
              confirmed per product before the purchase order. As of September
              2026.
            </em>
          </p>
        </div>
      </section>

      {/* 6 · P1 · WHAT YOU PAY FOR DIRECTLY */}
      <section className="buildband" id="direct-costs">
        <div className="wrap">
          <h2>What you pay for directly, besides our fee.</h2>
          <p style={{ maxWidth: "70ch" }}>
            These costs sit with your business because the product, the brand
            and the import are yours. Each one is quoted before you approve it.
          </p>
          <ul className="facts two-col">
            <li>
              <b>Samples and production:</b> paid to the manufacturer on the
              terms you agree.
            </li>
            <li>
              <b>Testing and certification:</b> lab fees for the tests your
              category needs, plus retests if a sample fails.
            </li>
            <li>
              <b>Inspection:</b> a pre-shipment check at the factory before the
              balance is paid.
            </li>
            <li>
              <b>Trademark and barcodes:</b> the filing and the GS1 barcodes,
              both in your business name.
            </li>
            <li>
              <b>Freight, duty and customs:</b> shipping, broker, bond and duty
              at the rates in force when the goods land.
            </li>
            <li>
              <b>Insurance:</b> product liability cover in your name, at the
              limits Amazon and Walmart set.
            </li>
            <li>
              <b>Launch advertising:</b> your ad budget, paid to the
              marketplace. We never take a share of it.
            </li>
          </ul>
        </div>
      </section>

      {/* 7 · P2 · THE LAUNCH TIMELINE — visual 17 */}
      <section className="start" id="timeline">
        <div className="wrap">
          <h2>What you receive at each step.</h2>
          <p style={{ maxWidth: "70ch" }}>
            Most of a launch is spent waiting on factories, labs and ships.
            Every step ends with something you can read.
          </p>
          <Visual
            name="amazon-private-label/launch-timeline"
            alt="Seven launch steps from research to live listing, what the client receives at each step, and the four points where the client makes the call: go or no-go, sign the spec, approve the purchase order, release the balance"
          />
          <ol className="launch-steps">
            <li>
              <b>Research and verdict.</b> A written verdict with the numbers
              and the compliance cost. <em>Your call: go or no-go.</em>
            </li>
            <li>
              <b>Samples and specification.</b> Sample photos, our notes and a
              spec to sign. <em>Your call: sign the spec.</em>
            </li>
            <li>
              <b>Purchase order.</b> The PO, the payment schedule and the
              landed-cost model behind it, usually between day 60 and day 90.{" "}
              <em>Your call: approve it in writing.</em>
            </li>
            <li>
              <b>Production.</b> Factory updates. This is usually the longest
              quiet stretch.
            </li>
            <li>
              <b>Testing and inspection.</b> Lab reports and the inspection
              result. A failed test stops the shipment.{" "}
              <em>Your call: release the balance.</em>
            </li>
            <li>
              <b>Freight and customs.</b> Tracking, the customs entry and the
              duty bill.
            </li>
            <li>
              <b>Live.</b> Stock received, listing live, launch advertising
              starts.
            </li>
          </ol>
          <p style={{ marginTop: 20, marginBottom: 0 }}>
            Plan for the listing to go live months after the purchase order,
            not days.
          </p>
        </div>
      </section>

      {/* 8 · P3 · IMPORT */}
      <section className="buildband" id="import">
        <div className="wrap">
          <h2>Imported in your name, filed correctly.</h2>
          <p style={{ maxWidth: "70ch" }}>
            Your business is the importer of record, so the customs entry, the
            duty and the product certificates are yours. We coordinate the
            broker and the forwarder, and check the paperwork before goods
            leave the factory.
          </p>
          <ul className="facts">
            <li>Customs bond and Importer Security Filing arranged before the goods ship.</li>
            <li>
              Certificate data filed with the CPSC at entry for products under
              a CPSC rule. This has been mandatory since 8 July 2026.
            </li>
            <li>FDA prior notice for supplements and other food products.</li>
            <li>Country-of-origin marking on the product and the packaging.</li>
            <li>Duty checked against the tariff rates in force, not last year&apos;s.</li>
          </ul>
        </div>
      </section>

      {/* 9 · P4 · DECLINED PRODUCTS */}
      <section className="fees" id="declined">
        <div className="wrap">
          <h2>Products we turn down, and why.</h2>
          <ul className="facts">
            <li>Products that need FDA drug approval or medical device clearance.</li>
            <li>Products that rely on a claim the label cannot legally make.</li>
            <li>Pest or germ-killing products with no route to EPA registration.</li>
            <li>
              Children&apos;s products where the budget cannot cover certified
              testing of every version.
            </li>
            <li>Close copies of a product with an active patent or registered design.</li>
            <li>Products where dangerous goods rules make fulfillment uneconomic.</li>
          </ul>
        </div>
      </section>

      {/* 10 · RUN */}
      <section className="run" id="operate">
        <div className="wrap">
          <h2>After launch, we keep the business moving.</h2>
          <div className="run-grid">
            <div>
              <p>
                Ongoing marketplace management connects catalog, inventory,
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
                  Amazon and Walmart US account operations, cases and account
                  health
                </span>
              </div>
              <div className="op">
                <b>Advertising</b>
                <span>PPC, search terms, bids, ranking and the featured offer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 · THE FEEDBACK LOOP — visual 03 */}
      <section className="scaleband">
        <div className="wrap">
          <h2>Build the feedback loop.</h2>
          <p style={{ maxWidth: "70ch" }}>
            Sales data shows which product earns its place. The next product is
            chosen from that data, not from a trend list.
          </p>
          <Visual
            name="amazon-private-label/product-family"
            alt="One proven body wash with its box at the center, expanding into a hand wash, lotion, scrub, refill pouch and bar soap, beside the measure, improve, expand and scale loop"
          />
          <div className="scale-flow" style={{ marginTop: 26 }}>
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
              <span>More products, then Walmart US</span>
            </div>
            <div>
              <b>Scale</b>
              <span>Operations and capacity behind the winners</span>
            </div>
          </div>
        </div>
      </section>

      {/* 12 · FEES */}
      <section className="fees">
        <div className="wrap">
          <h2>Two fees, both agreed in writing first.</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>The launch project</b>
              <span>
                A fixed fee, scoped before anything starts. It depends on the
                category, the number of products and whether Walmart US is
                included. Stock, tooling and advertising are your costs, paid
                by you directly to the supplier and the marketplace.
              </span>
            </div>
            <div className="fee">
              <b>Managed operations</b>
              <span>
                A fixed monthly fee once the brand is live. Nothing is charged
                on your advertising spend and nothing on your capital, so
                growing the account never makes us more money for spending
                yours.
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

      {/* 13 · WHAT AN AGENCY DOES — snippet, with the former SEO block
          merged in as a normal section (§4.1, §6.4) */}
      <section className="buildband" id="what-an-agency-does">
        <div className="wrap">
          <h2>What does an Amazon private label agency do?</h2>
          <div className="snippet">
            <p>
              An Amazon private label agency researches product opportunities,
              verifies the unit economics, sources a manufacturer, builds the
              brand and packaging, creates the listing, and launches the
              product. After launch it runs advertising, inventory and account
              operations.
            </p>
          </div>
          <div className="cols" style={{ marginTop: 26 }}>
            <div>
              <p>
                Private label means having a product manufactured and sold
                under your own brand rather than reselling someone else&apos;s.
                You own the brand and the margin. Brand Registry gives you
                control of the listing content. You also carry the risk if the
                product does not sell, which is why the research has to be
                honest before the money moves.
              </p>
              <p>
                Our private label service covers product and market research,
                product development, supplier sourcing, samples and quality
                specification, packaging and compliance, listing creation with
                A+ content, and the Amazon and Walmart US launch itself.
              </p>
            </div>
            <div>
              <p>
                After launch, the same team runs the account: inventory and
                replenishment, advertising and ranking, cases and account
                health, and a monthly report showing margin by product rather
                than revenue by product.
              </p>
              <p style={{ marginBottom: 0 }}>
                We work on Amazon in the US, UK, Europe and the Gulf, and on
                Walmart in the US. Clients include brand owners, manufacturers
                selling direct, and investors putting capital into Amazon and
                Walmart businesses, wherever they are based.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14 · FAQ */}
      <Faq items={FAQS} />

      {/* 15 · CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
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

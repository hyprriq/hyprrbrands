import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Wholesale — built from docs/v4/hyprr-wireframes-remaining.html
 * (sections 01–12, copy blocks used verbatim where given). The three
 * non-negotiables from the wireframe key: authorised distributors as
 * a rule, an honest timeline, a service not an investment product.
 * FAQ answers are drafted in the site voice pending owner strings —
 * flagged in the build report.
 */
const TITLE = "Amazon Wholesale Management Service — Hyprr Brands";
const DESC =
  "Wholesale operations on Amazon and Walmart. Authorised distributors only, a landed-cost model on every line, purchase orders you approve. Fixed monthly fee.";
const PATH = "/amazon-wholesale-management";

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
    ...ogImageMeta("amazon-wholesale-management").openGraph,
  },
  ...{ twitter: ogImageMeta("amazon-wholesale-management").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

const FAQS = [
  {
    q: "How does Amazon wholesale work?",
    a: "You buy branded products in bulk from the brand or its authorised distributors, at wholesale prices, and resell them on an existing Amazon listing. There is no brand to build and no listing to create — the work is supplier approval, buying decisions, pricing and replenishment, done well and repeatedly.",
  },
  {
    q: "Is FBA still profitable?",
    a: "On lines that clear a margin floor after every fee, yes — and most lines do not. That is why every candidate is modelled to landed cost before a purchase order is raised. Profitability in wholesale comes from the buying discipline, not from the fulfilment method.",
  },
  {
    q: "Does FBA cost money?",
    a: "Yes. Amazon charges fulfilment fees per unit, monthly storage fees, and long-term storage fees for stock that sits. Those costs are in our landed-cost model for every line before we recommend buying it, so nothing about the fee structure arrives as a surprise.",
  },
  {
    q: "How much stock do I need to start?",
    a: "Less than most people expect. First purchase orders are deliberately small — enough to prove a line sells and reorders, not to fill a warehouse. Volume follows the lines that repeat. We size the starting budget with you on the first call.",
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
            { name: "Wholesale", path: PATH },
          ]),
          serviceLd({
            name: "Amazon wholesale management service",
            serviceType: "Wholesale marketplace operations",
            path: PATH,
            description: DESC,
          }),
        ]}
      />

      {/* 01 · HERO */}
      <section className="plhero">
        <div className="wrap plhero-grid">
          <div>
            <span className="eyebrow">Wholesale / Amazon + Walmart</span>
            <h1>We run wholesale operations on Amazon and Walmart.</h1>
            <p>
              Sourcing from authorised distributors, purchase orders you
              approve, and the daily work of keeping those lines selling.
            </p>
            <div className="plchips">
              <span className="chip">MANAGED OPERATIONS</span>
              <span className="chip">AUTHORISED DISTRIBUTORS</span>
              <span className="chip">AMAZON</span>
              <span className="chip">WALMART</span>
            </div>
            <div className="cta-row">
              <a className="btn cit" href={BOOKING}>
                Book a call
              </a>
              <a className="btn line-l" href="#buying">
                See a buying decision
              </a>
            </div>
          </div>
          <figure className="heroimg" style={{ margin: 0 }}>
            <picture>
              <source
                media="(max-width: 760px)"
                srcSet="/img/wh-catalogue-mobile-1080.webp"
                type="image/webp"
                width={1080}
                height={1350}
              />
              <source srcSet="/img/wh-catalogue-1600.webp" type="image/webp" />
              <img
                src="/img/wh-catalogue-1600.png"
                width={1600}
                height={900}
                fetchPriority="high"
                decoding="async"
                alt="A buying catalogue showing six supplier lines with landed cost, fees, margin and a buy or no decision on each"
              />
            </picture>
            <figcaption>
              Representative buying catalogue. Figures illustrate the model,
              not a client account.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 02 · HOW WHOLESALE WORKS — the explainer the SERP demands */}
      <section className="start" id="how-it-works">
        <div className="wrap">
          <h2>How wholesale actually works</h2>
          <p style={{ maxWidth: "66ch" }}>
            Every brand sells its products through more than one route. Some
            sell direct to Amazon. Some sell through distributors. Most also
            sell on their own website. Those routes do not cover every listing,
            every region or every moment of demand, and that gap is where a
            wholesale seller operates: buying genuine stock through an approved
            channel and selling it where the brand is not already serving the
            customer well.
          </p>
          <div className="routediag" role="img" aria-label="Diagram: a brand sells through direct supply, distributors and its own site; the gap those routes leave is where your wholesale account operates">
            <div className="row">
              <div className="node" style={{ gridColumn: "1 / -1" }}>
                The brand
                <em>one product, several routes to the customer</em>
              </div>
            </div>
            <div className="down" aria-hidden="true">
              ↓ ↓ ↓
            </div>
            <div className="row">
              <div className="node">
                Direct to Amazon<em>first-party supply</em>
              </div>
              <div className="node">
                Distributors<em>approved wholesale channel</em>
              </div>
              <div className="node">
                Own website<em>direct to consumer</em>
              </div>
            </div>
            <div className="down" aria-hidden="true">
              ↓
            </div>
            <div className="row">
              <div className="node gap" style={{ gridColumn: "1 / -1" }}>
                The gap
                <em>
                  listings, regions and demand those routes leave uncovered —
                  served from your account, with genuine approved stock
                </em>
              </div>
            </div>
          </div>
          <div className="snippet" style={{ marginTop: 28 }}>
            <h2 style={{ marginBottom: 8, fontSize: "clamp(20px,4vw,26px)" }}>
              What does an Amazon wholesale agency do?
            </h2>
            <p>
              It runs the wholesale operation on your behalf: supplier approval
              and terms, landed-cost modelling on every line, purchase orders
              raised for your written approval, listings, pricing, buy box and
              replenishment — under accounts and supplier relationships that
              stay in your name.
            </p>
          </div>
        </div>
      </section>

      {/* 03 · TWO WAYS IN */}
      <section className="buildband" id="two-ways">
        <div className="wrap">
          <h2>Starting from zero, or already operating.</h2>
          <div className="start-grid">
            <div className="start-card new">
              <span className="tag">01 — STARTING FROM ZERO</span>
              <h3>You have capital and no operation.</h3>
              <p style={{ margin: "10px 0 0" }}>
                We open supplier accounts in your name, build the catalogue,
                model every line and run it.
              </p>
              <ul>
                <li>Seller account and supplier applications</li>
                <li>Catalogue built and modelled to landed cost</li>
                <li>First purchase orders, sized deliberately small</li>
                <li>The daily operation from day one</li>
              </ul>
              <a className="go" href="#first-year">
                See the first year →
              </a>
            </div>
            <div className="start-card existing">
              <span className="tag">02 — ALREADY OPERATING</span>
              <h3>You have suppliers and sales.</h3>
              <p style={{ margin: "10px 0 0" }}>
                We take over the daily work, tighten buying and replenishment,
                and grow the catalogue.
              </p>
              <ul>
                <li>Catalogue and margin review, line by line</li>
                <li>Buying and replenishment discipline</li>
                <li>Buy box, pricing and account health</li>
                <li>New suppliers and new lines</li>
              </ul>
              <a className="go" href="#cycle">
                See the operating cycle →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · AUTHORISED DISTRIBUTORS ONLY — the credibility band */}
      <section className="ruleband" id="authorised">
        <div className="wrap">
          <h2>Authorised distributors only.</h2>
          <p>
            We buy from brands and their authorised distributors. That means
            brand approval, real distributor terms, and invoices issued to you.
            It is slower to set up than buying wherever stock is cheapest, and
            it is the reason accounts survive their second year.
          </p>
          <div className="rulepoints">
            <div>
              <b>Brand approval</b>
              <span>
                The brand, or its named distributor, knows the stock is being
                sold and approved the channel — including ungating where a
                category needs it.
              </span>
            </div>
            <div>
              <b>Distributor terms</b>
              <span>
                Real trade accounts with real terms, opened in your name —
                not gray-market stock from wherever it was cheapest this week.
              </span>
            </div>
            <div>
              <b>Invoices in your name</b>
              <span>
                Every invoice is issued to you. When Amazon asks for proof of
                supply, you have it, and it is yours.
              </span>
            </div>
          </div>
          <figure className="strip">
            <picture>
              <source
                media="(max-width: 760px)"
                srcSet="/img/wh-warehouse-mobile-1080.webp"
                type="image/webp"
                width={1080}
                height={1350}
              />
              <source srcSet="/img/wh-warehouse-1600.webp" type="image/webp" />
              <img
                src="/img/wh-warehouse-1600.png"
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                alt="Cartons stacked and shrink-wrapped on pallets in a distribution warehouse"
              />
            </picture>
          </figure>
        </div>
      </section>

      {/* 05 · THE BUYING DECISION */}
      <section className="gate" id="buying">
        <div className="wrap">
          <h2>Every line is modelled before it is bought.</h2>
          <div className="gate-grid">
            <div>
              <p>
                Every line is modelled to landed cost before it is bought.
                Most fail. You get the sheet that shows why, and we do not buy
                them.
              </p>
              <p style={{ marginBottom: 0 }}>
                <b style={{ color: "#fff" }}>
                  Nothing is ordered without your approval, in writing.
                </b>{" "}
                <a href="/proof" style={{ color: "#d5e2e0", fontWeight: 600 }}>
                  See a sample buying decision →
                </a>
              </p>
            </div>
            <div className="vsheet">
              <div className="hd">
                <span>BUYING DECISION · LINE 0412</span>
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
                <span>Competing offers on the listing</span>
                <b>14</b>
              </div>
              <div className="r out">
                <span>ROI against a 20% floor</span>
                <b>4.8% · DO NOT BUY</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 · THE OPERATING CYCLE */}
      <section className="path" id="cycle">
        <div className="wrap">
          <h2>The operating cycle</h2>
          <p style={{ maxWidth: "62ch" }}>
            A loop rather than a line, because it repeats. This is what is
            included every month.
          </p>
          <div className="loop" role="img" aria-label="The wholesale operating loop: suppliers, catalogue, buying, inventory, Amazon and Walmart, replenishment, back to catalogue">
            <span>SUPPLIERS</span>
            <i aria-hidden="true">→</i>
            <span>CATALOGUE</span>
            <i aria-hidden="true">→</i>
            <span>BUYING</span>
            <i aria-hidden="true">→</i>
            <span>INVENTORY</span>
            <i aria-hidden="true">→</i>
            <span>AMAZON + WALMART</span>
            <i aria-hidden="true">→</i>
            <span>REPLENISHMENT</span>
            <i aria-hidden="true">↺</i>
          </div>
          <div className="ops light" style={{ marginTop: 26 }}>
            <div className="op">
              <b>Suppliers and buying</b>
              <span>
                Applications, terms, landed-cost models and purchase orders for
                your approval
              </span>
            </div>
            <div className="op">
              <b>Catalogue and pricing</b>
              <span>Listings, offers, buy box share and repricing rules</span>
            </div>
            <div className="op">
              <b>Inventory and replenishment</b>
              <span>
                Stock cover, reorder timing, prep and shipments, stranded stock
              </span>
            </div>
            <div className="op">
              <b>Account and reporting</b>
              <span>
                Cases, account health, and the monthly report — margin by line
              </span>
            </div>
          </div>
          <figure className="strip">
            <img
              src="/img/wh-shipment-1600.webp"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              alt="A carton being taped and labelled ready for a marketplace shipment"
            />
          </figure>
        </div>
      </section>

      {/* 07 · THE FIRST YEAR — the honesty section */}
      <section className="buildband" id="first-year">
        <div className="wrap">
          <h2>What the first year looks like</h2>
          <div className="timeline">
            <div>
              <span className="when">WEEKS 1–4</span>
              <b>Set up</b>
              <span>Accounts, supplier applications, catalogue modelling.</span>
            </div>
            <div>
              <span className="when">DAY 60–90</span>
              <b>First purchase order</b>
              <span>Once lines clear the margin floor.</span>
            </div>
            <div>
              <span className="when">MONTHS 3–6</span>
              <b>Rhythm</b>
              <span>
                Reorder rhythm, buy box share, the first lines that repeat.
              </span>
            </div>
            <div>
              <span className="when">MONTHS 6–12</span>
              <b>Compound</b>
              <span>
                More suppliers, more lines, and Walmart alongside Amazon.
              </span>
            </div>
          </div>
          <p style={{ marginTop: 22, marginBottom: 0, maxWidth: "62ch" }}>
            This is a business that compounds. It is not fast, and anyone
            describing it as fast is selling something else.
          </p>
        </div>
      </section>

      {/* 08 · SCALE */}
      <section className="scaleband" id="scale">
        <div className="wrap">
          <h2>To your budget and your goals.</h2>
          <p style={{ maxWidth: "66ch" }}>
            How far this goes depends on the capital you want working and what
            you want the business to be. We size that with you on the first
            call rather than publishing a plan that fits nobody.
          </p>
          <div className="scale-flow">
            <div>
              <b>More lines</b>
              <span>From suppliers already open</span>
            </div>
            <div>
              <b>More suppliers</b>
              <span>New applications, new categories</span>
            </div>
            <div>
              <b>Walmart</b>
              <span>The same catalogue on a second marketplace</span>
            </div>
            <a href="/contact">
              <b>Your sizing →</b>
              <span>We size it with you on the first call</span>
            </a>
          </div>
        </div>
      </section>

      {/* 09 · HANDOVER */}
      <section className="handover" id="handover">
        <div className="wrap">
          <div className="handover-grid">
            <div>
              <h2>Run it with us, or build your own team.</h2>
            </div>
            <div>
              <p>
                Some clients want us running it permanently. Others want an
                in-house team eventually. We will hire, train and hand over to
                that team, and document the operation so it survives the
                handover. Saying so at the start is how you know the work is
                being done properly rather than kept deliberately opaque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 · OWNERSHIP AND FEES */}
      <section className="fees" id="fees">
        <div className="wrap">
          <h2>Yours: the accounts, the stock, the suppliers.</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>What you own</b>
              <span>
                The accounts, the stock and the supplier relationships are
                yours. Suppliers invoice you directly. Nothing is ordered
                without your written approval.
              </span>
            </div>
            <div className="fee">
              <b>What we charge</b>
              <span>
                A fixed monthly fee, with a setup project if you are starting
                from zero. Nothing on your capital and nothing on your ad
                spend.
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

      {/* 11 · FAQ */}
      <Faq items={FAQS} />

      {/* 12 · CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <h2>Send us a supplier list or a product list.</h2>
          <p>
            We will model three lines and tell you what we would do with them.
          </p>
          <div className="cta-row">
            <a className="btn onpetrol" href={BOOKING}>
              Book a call
            </a>
            <a className="btn line-l" href="/contact#form">
              Send a list instead
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import { SITE_ORIGIN } from "@/lib/site-map";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Proof — the verdict sheet, the cost model, the before-and-after.
 * No keyword target; this page exists to be linked from everywhere
 * else. The label rule from the wireframe: illustrative examples say
 * so; real client work is anonymised and says that too. The results
 * slot is designed now and fills when there is something real.
 */
const TITLE = "The Work | Verdict Sheets & Cost Models — Hyprr Brands";
const DESC =
  "Sample documents ungated: a verdict sheet ending in Do not buy, a landed-cost model, a listing before and after, and a monthly report you can read.";
const PATH = "/proof";

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
    ...ogImageMeta("proof").openGraph,
  },
  ...{ twitter: ogImageMeta("proof").twitter },
};

const ARTEFACTS = [
  "Product verdict sheet ending in Do not buy",
  "Landed-cost model ending in Do not buy",
  "Listing before and after",
  "Monthly report page",
  "Purchase order with the approval line",
  "Product and packaging",
];

const creativeWorks = ARTEFACTS.map((name, i) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${SITE_ORIGIN}/proof#artefact-${i + 1}`,
  name,
  creator: { "@id": `${SITE_ORIGIN}/#organization` },
  isPartOf: `${SITE_ORIGIN}/proof`,
}));

export default function Page() {
  return (
    <main id="main">
      <JsonLd
        nodes={[
          webPageLd({ path: PATH, title: TITLE, description: DESC }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Proof", path: PATH },
          ]),
          ...creativeWorks,
        ]}
      />

      {/* 01 · INTRO */}
      <section className="start" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <h1>The work</h1>
          <p style={{ maxWidth: "62ch" }}>
            These are the documents the method produces — read them before you
            talk to us. Where a document is an illustrative sample it says so
            on the document; real client work appears here anonymised, and
            says that too. The method behind them is on{" "}
            <a href="/how-we-work">the how-we-work page</a>.
          </p>
        </div>
      </section>

      {/* 02 · THE ARTEFACTS, ONE PER ROW */}
      <section className="buildband" style={{ paddingTop: 30 }} id="artefacts">
        <div className="wrap">
          <h2 className="sr-only">The documents, one per row</h2>
          <div className="artrows">
            {/* Verdict sheet */}
            <div className="artrow" id="verdict-sheet">
              <div>
                <span className="label-note">Illustrative sample</span>
                <h3>The verdict sheet, ending in Do not buy</h3>
                <p className="cap">
                  Every candidate gets one page: landed cost, fees, returns,
                  competition, demand, and a verdict. This one fails — most
                  do. The sheet is the deliverable whether or not anything is
                  bought, and it is the reason a bad product costs you a
                  reading instead of a purchase order.
                </p>
              </div>
              <div className="doc">
                <div className="dochd">
                  <span>PRODUCT VERDICT · CANDIDATE 0412</span>
                  <span>4 SEP · ILLUSTRATIVE</span>
                </div>
                <div className="docr">
                  <span>Landed unit cost</span>
                  <b>11.40</b>
                </div>
                <div className="docr">
                  <span>Marketplace fees, per unit</span>
                  <b>6.85</b>
                </div>
                <div className="docr">
                  <span>Returns and advertising allowance</span>
                  <b>3.10</b>
                </div>
                <div className="docr">
                  <span>Competing offers on the listing</span>
                  <b>14</b>
                </div>
                <div className="docr">
                  <span>Margin against a 20% floor</span>
                  <b>4.8%</b>
                </div>
                <div className="docr no">
                  <span>Verdict</span>
                  <b>DO NOT BUY</b>
                </div>
              </div>
            </div>

            {/* Landed-cost model */}
            <div className="artrow" id="landed-cost">
              <div>
                <span className="label-note">Illustrative sample</span>
                <h3>The landed-cost model, ending in Do not buy</h3>
                <p className="cap">
                  The arithmetic under the verdict. Every cost between the
                  factory and the customer, per unit, before a cent moves.
                  The number that kills most products is rarely the unit
                  price — it is what stacks on top of it.
                </p>
              </div>
              <div className="doc">
                <div className="dochd">
                  <span>LANDED COST · PER UNIT</span>
                  <span>ILLUSTRATIVE</span>
                </div>
                <div className="docr">
                  <span>Ex-factory unit price</span>
                  <b>6.20</b>
                </div>
                <div className="docr">
                  <span>Freight, duty and prep</span>
                  <b>2.90</b>
                </div>
                <div className="docr">
                  <span>Fulfilment and storage</span>
                  <b>4.35</b>
                </div>
                <div className="docr">
                  <span>Referral fee at the target price</span>
                  <b>3.60</b>
                </div>
                <div className="docr">
                  <span>Returns allowance</span>
                  <b>0.95</b>
                </div>
                <div className="docr no">
                  <span>Left from a 19.99 price</span>
                  <b>1.99 · DO NOT BUY</b>
                </div>
              </div>
            </div>

            {/* Listing before and after */}
            <div className="artrow" id="before-after">
              <div>
                <span className="label-note">Illustrative sample</span>
                <h3>A listing before and after</h3>
                <p className="cap">
                  What changed, marked. The title carries the terms buyers
                  type; the bullets answer questions instead of describing the
                  factory; the backend terms stop repeating the title. The
                  full project runs two weeks at a fixed price —{" "}
                  <a href="/amazon-listing-optimization">
                    the listing optimization page
                  </a>{" "}
                  has the scope.
                </p>
              </div>
              <figure className="strip" style={{ margin: 0 }}>
                <picture>
                  <source
                    media="(max-width: 760px)"
                    srcSet="/img/listing-before-after-mobile-1080.webp"
                    type="image/webp"
                    width={1080}
                    height={1350}
                  />
                  <source
                    srcSet="/img/listing-before-after-1600.webp"
                    type="image/webp"
                  />
                  <img
                    src="/img/listing-before-after-1600.png"
                    width={1600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    alt="The same product listing before and after optimization: a dim, badly cropped photo with a thin title beside a clean product shot with a full title and bullets"
                  />
                </picture>
                <figcaption>
                  The footer figures on each panel — images, A+ status,
                  indexed terms — are illustrative.
                </figcaption>
              </figure>
            </div>

            {/* Monthly report */}
            <div className="artrow" id="monthly-report">
              <div>
                <span className="label-note">Illustrative sample</span>
                <h3>A monthly report page</h3>
                <p className="cap">
                  Margin by product, not revenue by product. Every managed
                  account gets this every month: what sold, what it cost, what
                  was left, what we changed and what happens next month.
                </p>
              </div>
              <div className="doc">
                <div className="dochd">
                  <span>MONTHLY REPORT · AUGUST</span>
                  <span>ILLUSTRATIVE</span>
                </div>
                <div className="docr">
                  <span>Line A · units / margin</span>
                  <b>412 · 22.4%</b>
                </div>
                <div className="docr">
                  <span>Line B · units / margin</span>
                  <b>198 · 17.1%</b>
                </div>
                <div className="docr">
                  <span>Line C · units / margin</span>
                  <b>64 · 6.2% ⚠</b>
                </div>
                <div className="docr">
                  <span>Action on line C</span>
                  <b>REPRICE OR EXIT</b>
                </div>
                <div className="docr yes">
                  <span>Next month</span>
                  <b>WRITTEN AT THE TOP</b>
                </div>
              </div>
            </div>

            {/* Purchase order */}
            <div className="artrow" id="purchase-order">
              <div>
                <span className="label-note">Illustrative sample</span>
                <h3>A purchase order with the approval line</h3>
                <p className="cap">
                  Nothing is ordered without your written approval — so the
                  approval is a line on the document, not a promise on a
                  website. The supplier invoices you directly and the stock is
                  yours from the moment it exists.
                </p>
              </div>
              <div className="doc">
                <div className="dochd">
                  <span>PURCHASE ORDER · PO-0088</span>
                  <span>ILLUSTRATIVE</span>
                </div>
                <div className="docr">
                  <span>Supplier</span>
                  <b>AUTHORISED DISTRIBUTOR</b>
                </div>
                <div className="docr">
                  <span>Lines / units</span>
                  <b>3 / 720</b>
                </div>
                <div className="docr">
                  <span>Invoice issued to</span>
                  <b>THE CLIENT</b>
                </div>
                <div className="docr yes">
                  <span>Approved by client, in writing</span>
                  <b>REQUIRED · BLANK UNTIL SIGNED</b>
                </div>
              </div>
            </div>

            {/* One product family, two SKUs */}
            <div className="artrow" id="product-family">
              <div>
                <span className="label-note">Product render</span>
                <h3>One product family, two SKUs</h3>
                <p className="cap">
                  The dish mat and the faucet mat share the same stone and
                  groove design — designed once, extended deliberately. This
                  is what &ldquo;expand into new products&rdquo; looks like in
                  practice.
                </p>
              </div>
              <figure className="strip" style={{ margin: 0 }}>
                <img
                  src="/img/pl-family-1600.webp"
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  alt="The dish mat and faucet mat, one product family sharing the same stone and groove design"
                />
              </figure>
            </div>

            {/* Product and packaging */}
            <div className="artrow" id="packaging">
              <div>
                <span className="label-note">Illustrative sample</span>
                <h3>A product and its packaging</h3>
                <p className="cap">
                  For a category chosen on purpose. The private label build
                  runs research, sourcing, packaging and launch in that order
                  —{" "}
                  <a href="/amazon-private-label">the private label page</a>{" "}
                  walks the six stages.
                </p>
              </div>
              <div className="doc" aria-hidden="true">
                <div className="dochd">
                  <span>PACKAGING SPEC · EXTRACT</span>
                  <span>ILLUSTRATIVE</span>
                </div>
                <div className="docr">
                  <span>Structure</span>
                  <b>MAILER BOX · FSC</b>
                </div>
                <div className="docr">
                  <span>Print</span>
                  <b>2 COLOUR + SOFT TOUCH</b>
                </div>
                <div className="docr">
                  <span>Compliance</span>
                  <b>LABELS + INSERTS SPEC&apos;D</b>
                </div>
                <div className="docr yes">
                  <span>Retail readiness</span>
                  <b>CHECKLIST ATTACHED</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · RESULTS SLOT */}
      <section className="scaleband" id="results">
        <div className="wrap">
          <h2>Real numbers, when they are real.</h2>
          <p style={{ maxWidth: "62ch" }}>
            This slot holds anonymised results from live accounts: category,
            starting position, what changed, what happened, over what period.
            It is empty on purpose — we are new, and we are not going to show
            you someone else&apos;s results. The documents above are how we
            work; this is where what happened goes.
          </p>
          <div className="artrow" style={{ background: "#fff" }}>
            <div>
              <span className="label-note">Reserved — the result card</span>
              <h3>Category · starting position · what changed</h3>
              <p className="cap">
                What happened, over what period, with the number that mattered
                and the number that did not. Anonymised, dated, and updated
                when the period closes.
              </p>
            </div>
            <div className="doc">
              <div className="dochd">
                <span>RESULT · PENDING FIRST PUBLISHABLE PERIOD</span>
              </div>
              <div className="docr">
                <span>Category</span>
                <b>—</b>
              </div>
              <div className="docr">
                <span>Period</span>
                <b>—</b>
              </div>
              <div className="docr">
                <span>What changed</span>
                <b>—</b>
              </div>
              <div className="docr">
                <span>Outcome</span>
                <b>—</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <h2>Read enough?</h2>
          <p>
            Tell us where you are starting and we will produce one of these
            documents about your situation — that is the first deliverable of
            any engagement.
          </p>
          <div className="cta-row">
            <a
              className="btn onpetrol"
              href={process.env.NEXT_PUBLIC_BOOKING_URL || "/contact"}
            >
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

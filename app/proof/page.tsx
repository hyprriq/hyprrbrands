import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Visual from "@/components/Visual";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import { SITE_ORIGIN } from "@/lib/site-map";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Proof — the verdict sheet, the cost model, the before-and-after.
 * No keyword target; this page exists to be linked from everywhere
 * else. The label rule from the wireframe: illustrative examples say
 * so; real client work is anonymized and says that too. The results
 * slot is a single line until a full reporting period closes (PROMPT_24).
 */
const TITLE = "Sample Work: Verdicts, Reports, Listings | Hyprr Brands";
const DESC =
  "Documents clients get from us, as labeled samples: a verdict sheet, a landed-cost model, a monthly report, a listing rebuild and a purchase order.";
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
            on the document; real client work appears here anonymized, and
            says that too. The method behind them is on{" "}
            <a href="/how-we-work">the how-we-work page</a>.
          </p>
          <Visual
            name="proof/operating-documents"
            alt="Six working documents: verdict sheet, landed-cost model, monthly report, purchase order with a blank approval line, listing analysis and packaging spec"
          />
        </div>
      </section>

      {/* 02 · THE ARTEFACTS, ONE PER ROW */}
      <section className="buildband" style={{ paddingTop: 30 }} id="artefacts">
        <div className="wrap">
          <h2 className="sr-only">The documents, one per row</h2>
          <div className="artrows">
            {/* Verdict sheet */}
            <div className="artrow" id="verdict">
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
                  <span>PRODUCT VERDICT · CANDIDATE 0412 · SEP</span>
                  <span>ILLUSTRATIVE</span>
                </div>
                <div className="docr">
                  <span>Stackable kitchen storage set · sell price</span>
                  <b>22.43</b>
                </div>
                <div className="docr">
                  <span>Landed unit cost</span>
                  <b>11.40</b>
                </div>
                <div className="docr">
                  <span>Marketplace fees (referral 3.36 + fulfillment 3.49)</span>
                  <b>6.85</b>
                </div>
                <div className="docr">
                  <span>Returns and advertising allowance (0.90 + 2.20)</span>
                  <b>3.10</b>
                </div>
                <div className="docr">
                  <span>Left per unit</span>
                  <b>1.08</b>
                </div>
                <div className="docr">
                  <span>Competing offers</span>
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
                  The arithmetic under the verdict. Landed cost means what the
                  unit costs you on arrival; it excludes marketplace fees.
                  The number that kills most products is rarely the unit
                  price — it is what stacks on top of it.
                </p>
              </div>
              <div className="doc">
                <div className="dochd">
                  <span>LANDED COST · CANDIDATE 0412 · PER UNIT</span>
                  <span>ILLUSTRATIVE</span>
                </div>
                <div className="docr">
                  <span>Ex-factory price</span>
                  <b>7.20</b>
                </div>
                <div className="docr">
                  <span>Freight</span>
                  <b>1.35</b>
                </div>
                <div className="docr">
                  <span>Duty and customs</span>
                  <b>1.90</b>
                </div>
                <div className="docr">
                  <span>Testing and inspection</span>
                  <b>0.40</b>
                </div>
                <div className="docr">
                  <span>Prep and inbound</span>
                  <b>0.55</b>
                </div>
                <div className="docr">
                  <span>Landed unit cost</span>
                  <b>11.40</b>
                </div>
                <div className="docr">
                  <span>Marketplace fees</span>
                  <b>6.85</b>
                </div>
                <div className="docr">
                  <span>Returns and advertising allowance</span>
                  <b>3.10</b>
                </div>
                <div className="docr">
                  <span>Left from a 22.43 sell price</span>
                  <b>1.08</b>
                </div>
                <div className="docr no">
                  <span>Margin against a 20% floor</span>
                  <b>4.8% · DO NOT BUY</b>
                </div>
              </div>
            </div>

            {/* Listing before and after */}
            <div className="artrow" id="listing">
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
              <Visual
                name="amazon-listing-optimization/before-after-annotated"
                alt="The same Amazon listing before and after: a dim photo, stuffed title and three generic bullets, rebuilt with a clear title, five factual bullets, seven images and A+ content; indexed terms rise from 19 to 64"
              />
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
                  <b>AUTHORIZED DISTRIBUTOR</b>
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

            {/* One product family (illustrative) — visual 03 */}
            <div className="artrow" id="product-family">
              <div>
                <span className="label-note">Illustrative sample</span>
                <h3>One product family (illustrative)</h3>
                <p className="cap">
                  One proven product, extended into the adjacent products the
                  sales data supports — designed once, extended deliberately.
                  This is what &ldquo;expand into new products&rdquo; looks
                  like in practice.
                </p>
              </div>
              <Visual
                name="amazon-private-label/product-family"
                alt="One proven body wash with its box at the center, expanding into a hand wash, lotion, scrub, refill pouch and bar soap, beside the measure, improve, expand and scale loop"
              />
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
                  <b>2 COLOR + SOFT TOUCH</b>
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
          <p style={{ maxWidth: "62ch", marginBottom: 0 }}>
            No client results are published yet. The first will appear here,
            anonymized and dated, when a full reporting period closes.
          </p>
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

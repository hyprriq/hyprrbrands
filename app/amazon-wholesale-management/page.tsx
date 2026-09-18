import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import Visual from "@/components/Visual";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Wholesale — v4 structure from docs/v4/hyprr-wireframes-remaining.html,
 * copy and section order per PROMPT_24 §4.2 (final, edited). The
 * three non-negotiables from the wireframe key stand: authorized
 * distributors as a rule, an honest timeline, a service not an
 * investment product. New sections: brand risk (W1), gated brands
 * (W3), compliance on resold stock (W4), unsold stock (W5), Walmart
 * US (W6). Line model per §1a: line 04128.
 */
const TITLE = "Amazon Wholesale Management Service | Your Accounts | Hyprr";
const DESC =
  "Amazon wholesale management in your own accounts. Authorized suppliers, brand-risk checks and a costed model on every line before you approve an order.";
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
    q: "Can a brand file a complaint even when my stock is genuine?",
    a: "Yes. A complaint can be filed against authentic goods, and Amazon may remove the offer while it is resolved. That is why brands are screened for complaint history and reseller policy before an account is opened. If a complaint arrives, we respond with your invoices and supplier records. Brands that keep filing are dropped.",
  },
  {
    q: "How do you get approval for gated brands and categories?",
    a: "We apply to Amazon with invoices from the brand or its authorized distributor, issued to your business. We don't buy invoices or use approval services that supply them. Some brands never approve resellers, and you hear that before a supplier account is opened.",
  },
  {
    q: "What happens if a line stops selling?",
    a: "You get the options with the cost of each: reprice within the brand's policy, return to the supplier where terms allow, move the stock to your own warehouse, list it on Walmart US, or liquidate. The decision is yours. First orders are deliberately small.",
  },
  {
    q: "Is wholesale on Walmart the same as on Amazon?",
    a: "No. Walmart has its own seller vetting and brand restrictions, and some distributors authorize one marketplace but not the other. We add Walmart US line by line, only where the supplier and Walmart both allow it.",
  },
  {
    q: "Do resold products still need compliance documents and insurance?",
    a: "Yes. Amazon can ask any seller of a children's product for the manufacturer's certificate. Supplements have to pass Amazon's verification, and batteries or aerosols need a hazmat review. Liability cover is required above Amazon's monthly sales threshold.",
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

      {/* 1 · HERO — visual 04 (master in a card: petrol band) */}
      <section className="plhero">
        <div className="wrap plhero-grid">
          <div>
            <span className="eyebrow">Wholesale / Amazon + Walmart US</span>
            <h1>We run wholesale operations on Amazon and Walmart.</h1>
            <p>
              <b style={{ color: "#fff" }}>
                Not for anyone looking for passive income or a guaranteed
                return.
              </b>
            </p>
            <p>
              Sourcing from authorized distributors, purchase orders you
              approve, and the daily work of keeping those lines selling.
            </p>
            <div className="plchips">
              <span className="chip">MANAGED OPERATIONS</span>
              <span className="chip">AUTHORIZED DISTRIBUTORS</span>
              <span className="chip">AMAZON</span>
              <span className="chip">WALMART US</span>
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
          <Visual
            variant="hero"
            onDark
            name="amazon-wholesale-management/hero-buying-decisions"
            alt="Distributor line sheet with six products modeled for sell price, landed cost, fees, ROI and buy box, three marked buy, two do not buy and one watch, with line 04128 broken down to a 4.8% ROI and a do-not-buy stamp"
          />
        </div>
      </section>

      {/* 2 · HOW WHOLESALE WORKS — visual 15 replaces the HTML diagram */}
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
          <Visual
            name="amazon-wholesale-management/how-wholesale-works"
            caption={null}
            alt="Three routes from a brand to the customer: direct to Amazon, through distributors to authorized wholesale sellers (highlighted), and the brand's own website"
          />
          {/* 3 · SNIPPET */}
          <div className="snippet" style={{ marginTop: 28, maxWidth: "none" }}>
            <h2 style={{ marginBottom: 8, fontSize: "clamp(20px,4vw,26px)" }}>
              What does an Amazon wholesale agency do?
            </h2>
            <p>
              It runs the wholesale operation on your behalf: supplier approval
              and terms, line modeling on every product, purchase orders raised
              for your written approval, listings, pricing, the featured offer
              and replenishment, under accounts and supplier relationships that
              stay in your name.
            </p>
          </div>
        </div>
      </section>

      {/* 4 · TWO WAYS IN */}
      <section className="buildband" id="two-ways">
        <div className="wrap">
          <h2>Starting from zero, or already operating.</h2>
          <div className="start-grid">
            <div className="start-card new">
              <span className="tag">01 — STARTING FROM ZERO</span>
              <h3>You have capital and no operation.</h3>
              <p style={{ margin: "10px 0 0" }}>
                We open supplier accounts in your name, build the catalog,
                model every line and run it.
              </p>
              <ul>
                <li>Seller account and supplier applications</li>
                <li>Catalog built and modeled to landed cost</li>
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
                and grow the catalog.
              </p>
              <ul>
                <li>Catalog and margin review, line by line</li>
                <li>Buying and replenishment discipline</li>
                <li>Featured offer, pricing and account health</li>
                <li>New suppliers and new lines</li>
              </ul>
              <a className="go" href="#cycle">
                See the operating cycle →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · W1 · BRAND RISK — visual 20 */}
      <section className="start" id="brand-risk">
        <div className="wrap">
          <h2>Brand risk is checked before a supplier account is opened.</h2>
          <p style={{ maxWidth: "70ch" }}>
            An authorized supplier does not make a brand safe to sell. We check
            how the brand behaves on Amazon first, and drop brands that would
            put your account at risk.
          </p>
          <Visual
            name="amazon-wholesale-management/brand-risk-screen"
            alt="Brand risk screen for five example brands across IP complaint history, reseller policy, pricing policy, Amazon on the listing, gating and listing match, then the order it happens in: supplier invoice, brand screen, Amazon approval, line model"
          />
          <ul className="facts two-col" style={{ marginTop: 28 }}>
            <li>
              <b>Complaint history:</b> brands known to file IP complaints
              against resellers, even over genuine stock.
            </li>
            <li>
              <b>Reseller policy:</b> whether the brand limits marketplace sales
              to named sellers.
            </li>
            <li>
              <b>Pricing policy:</b> minimum advertised price terms and how
              strictly the brand enforces them.
            </li>
            <li>
              <b>Amazon on the listing:</b> whether Amazon itself sells the
              product and holds the featured offer.
            </li>
            <li>
              <b>Approval status:</b> whether the brand or category is gated,
              and what Amazon will ask for.
            </li>
            <li>
              <b>Listing condition:</b> whether the listing matches what the
              supplier actually ships.
            </li>
          </ul>
        </div>
      </section>

      {/* 6 · AUTHORIZED DISTRIBUTORS ONLY — W2 bullets; visual 05 master in a card */}
      <section className="ruleband" id="authorized">
        <div className="wrap">
          <h2>Authorized distributors only.</h2>
          <p>
            We buy from brands and their authorized distributors. That means
            channel permission, real distributor terms, and invoices issued to
            you. It is slower to set up than buying wherever stock is cheapest,
            and it is the reason accounts survive their second year.
          </p>
          <div className="rulepoints">
            <div>
              <b>Channel permission</b>
              <span>
                The brand or its named distributor confirms in writing that the
                stock may be sold on Amazon. Amazon approval for gated brands
                and categories is a separate step.
              </span>
            </div>
            <div>
              <b>Distributor terms</b>
              <span>
                Real trade accounts with real terms, opened in your name. No
                grey-market stock from whoever was cheapest this week.
              </span>
            </div>
            <div>
              <b>Invoices in your name</b>
              <span>
                Every invoice is issued to your business at the address on
                your seller account. When Amazon asks for proof of supply, you
                have it.
              </span>
            </div>
          </div>
          <Visual
            onDark
            name="amazon-wholesale-management/supply-fulfilment"
            alt="Supply chain from brand to authorized distributor, pallets, prep, FBA or 3PL and live Amazon and Walmart listings, with the letter of authorization, distributor terms and an invoice in the client's name"
          />
        </div>
      </section>

      {/* 7 · W3 · GATED BRANDS */}
      <section className="start" id="gated">
        <div className="wrap">
          <h2>Gated brands and categories are approved on evidence.</h2>
          <p style={{ maxWidth: "70ch", marginBottom: 0 }}>
            Amazon restricts some brands and categories until a seller shows
            where the stock comes from. We apply with invoices from the brand
            or its authorized distributor, in your business name. We don&apos;t
            buy invoices or use approval shortcuts. Some brands never approve
            resellers, and you hear that before a supplier account is opened.
          </p>
        </div>
      </section>

      {/* 8 · THE BUYING DECISION — line 04128 (§1a) */}
      <section className="gate" id="buying">
        <div className="wrap">
          <h2>Every line is modeled before it is bought.</h2>
          <div className="gate-grid">
            <div>
              <p>
                Every line is modeled to landed cost before it is bought. Most
                fail. You get the sheet that shows why, and we do not buy them.
              </p>
              <p style={{ marginBottom: 0 }}>
                <b style={{ color: "#fff" }}>
                  Nothing is ordered without your approval, in writing.
                </b>{" "}
                <a href="/proof#verdict" style={{ color: "#d5e2e0", fontWeight: 600 }}>
                  See a sample buying decision →
                </a>
              </p>
            </div>
            <div className="vsheet">
              <div className="hd">
                <span>BUYING DECISION · LINE 04128 · SEP</span>
                <span>ILLUSTRATIVE</span>
              </div>
              <div className="r">
                <span>Sell price</span>
                <b>18.80</b>
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
                <span>Left per unit</span>
                <b>0.55</b>
              </div>
              <div className="r">
                <span>Brand risk</span>
                <b>CLEAR</b>
              </div>
              <div className="r">
                <span>Amazon approval</span>
                <b>NOT REQUIRED</b>
              </div>
              <div className="r out">
                <span>ROI against a 20% floor</span>
                <b>4.8% · DO NOT BUY</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 · W4 · COMPLIANCE ON RESOLD STOCK */}
      <section className="buildband" id="resold-compliance">
        <div className="wrap">
          <h2>Resold stock still has compliance rules.</h2>
          <p style={{ maxWidth: "70ch" }}>
            An authorized supplier proves where the stock came from. It does
            not cover what Amazon and Walmart require of the seller.
          </p>
          <ul className="facts two-col">
            <li>
              <b>Dangerous goods:</b> aerosols, batteries and flammables need
              Amazon&apos;s hazmat review and a safety data sheet.
            </li>
            <li>
              <b>Expiry dates:</b> Amazon rejects stock with too little shelf
              life left, so dates are checked before buying.
            </li>
            <li>
              <b>Heat-sensitive stock:</b> Amazon limits meltable products in
              FBA during warm months.
            </li>
            <li>
              <b>Children&apos;s products:</b> Amazon can ask any seller for the
              manufacturer&apos;s certificate, so we collect it from the
              supplier first.
            </li>
            <li>
              <b>Supplements and cosmetics:</b> listings must pass Amazon&apos;s
              verification and claims rules, whoever wrote the label.
            </li>
            <li>
              <b>Insurance:</b> cover is required above Amazon&apos;s monthly
              sales threshold. From 2 November 2026, it is required from the
              first sale in 11 categories.
            </li>
          </ul>
        </div>
      </section>

      {/* 10 · THE OPERATING CYCLE */}
      <section className="path" id="cycle">
        <div className="wrap">
          <h2>The operating cycle</h2>
          <p style={{ maxWidth: "62ch" }}>
            A loop rather than a line, because it repeats. This is what is
            included every month.
          </p>
          <div className="loop" role="img" aria-label="The wholesale operating loop: suppliers, catalog, buying, inventory, Amazon and Walmart US, replenishment, back to catalog">
            <span>SUPPLIERS</span>
            <i aria-hidden="true">→</i>
            <span>CATALOG</span>
            <i aria-hidden="true">→</i>
            <span>BUYING</span>
            <i aria-hidden="true">→</i>
            <span>INVENTORY</span>
            <i aria-hidden="true">→</i>
            <span>AMAZON + WALMART US</span>
            <i aria-hidden="true">→</i>
            <span>REPLENISHMENT</span>
            <i aria-hidden="true">↺</i>
          </div>
          <div className="ops light" style={{ marginTop: 26 }}>
            <div className="op">
              <b>Suppliers and buying</b>
              <span>
                Applications, terms, line models and purchase orders for your
                approval
              </span>
            </div>
            <div className="op">
              <b>Catalog and pricing</b>
              <span>Listings, offers, featured offer share and repricing rules</span>
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
                Cases, account health, and the monthly report: margin by line
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 11 · W5 · UNSOLD STOCK */}
      <section className="buildband" id="unsold">
        <div className="wrap">
          <h2>What happens to stock that does not sell.</h2>
          <p style={{ maxWidth: "70ch" }}>
            Every line has a planned exit before it is bought. When a line
            stalls, you get each option with its cost, and you choose.
          </p>
          <ul className="facts">
            <li>Reprice within the brand&apos;s pricing policy.</li>
            <li>Return it to the supplier where the terms allow.</li>
            <li>Move it to your own warehouse before aged-stock surcharges build.</li>
            <li>List it on Walmart US where the brand and Walmart both allow it.</li>
            <li>Liquidate it through Amazon&apos;s liquidation program.</li>
          </ul>
          <p style={{ marginTop: 20, marginBottom: 0 }}>
            First orders are kept small, so a stalled line is a small problem.
          </p>
        </div>
      </section>

      {/* 12 · THE FIRST YEAR — visual 13 */}
      <section className="start" id="first-year">
        <div className="wrap">
          <h2>What the first year looks like</h2>
          <Visual
            name="amazon-wholesale-management/first-year"
            card
            alt="Twelve months of active product lines building up after the first purchase order, above set up, first order, rhythm and compound phases"
          />
          <div className="timeline five">
            <div>
              <span className="when">WEEKS 1–4</span>
              <b>Set up</b>
              <span>Accounts, supplier applications, catalog modeling.</span>
            </div>
            <div>
              <span className="when">WEEKS 5–8</span>
              <b>Approvals</b>
              <span>
                Brand and distributor approvals, credit terms, and the
                documents each brand asks for before it will sell to you.
                This is the part that sets the date, and it is not in our
                hands.
              </span>
            </div>
            <div>
              <span className="when">DAYS 60–90</span>
              <b>First purchase order</b>
              <span>Once lines clear the margin floor.</span>
            </div>
            <div>
              <span className="when">MONTHS 3–6</span>
              <b>Rhythm</b>
              <span>
                Reorder rhythm, featured offer share, the first lines that
                repeat.
              </span>
            </div>
            <div>
              <span className="when">MONTHS 6–12</span>
              <b>Compound</b>
              <span>
                More suppliers, more lines, and Walmart US alongside Amazon.
              </span>
            </div>
          </div>
          <p style={{ marginTop: 22, marginBottom: 0, maxWidth: "62ch" }}>
            This is a business that compounds. It is not fast, and anyone
            describing it as fast is selling something else.
          </p>
        </div>
      </section>

      {/* 13 · W6 · WALMART US */}
      <section className="buildband" id="walmart">
        <div className="wrap">
          <h2>Walmart US is a separate approval, not a copy of Amazon.</h2>
          <p style={{ maxWidth: "70ch" }}>
            Walmart Marketplace has its own seller vetting, brand restrictions
            and fulfillment rules. A line approved on Amazon is not
            automatically sellable on Walmart.
          </p>
          <ul className="facts two-col">
            <li>
              <b>Supplier permission:</b> some distributors authorize Amazon but
              not Walmart, so each channel is confirmed in writing.
            </li>
            <li>
              <b>Item matching:</b> Walmart matches offers by GTIN, so the
              supplier&apos;s barcode must match the listing.
            </li>
            <li>
              <b>Fulfillment:</b> Walmart Fulfillment Services has its own
              prep, labeling and prohibited-item rules.
            </li>
            <li>
              <b>Advertising:</b> Walmart Connect is a separate platform with
              its own bidding.
            </li>
          </ul>
        </div>
      </section>

      {/* 14 · SCALE */}
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
              <b>Walmart US</b>
              <span>Line by line, where the supplier and Walmart allow it</span>
            </div>
            <a href="/contact">
              <b>Your sizing →</b>
              <span>We size it with you on the first call</span>
            </a>
          </div>
        </div>
      </section>

      {/* 15 · HANDOVER */}
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

      {/* 16 · OWNERSHIP AND FEES */}
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

      {/* 17 · FAQ */}
      <Faq items={FAQS} />

      {/* 18 · CTA */}
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

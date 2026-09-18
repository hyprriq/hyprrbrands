import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import Visual from "@/components/Visual";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Amazon & Walmart management — v4 structure from the wireframes,
 * copy and section order per PROMPT_24 §4.4 (final, edited). Carries
 * the #growth, #walmart and #listings anchors that the homepage cards
 * and two service pages link into. The rebuttal renders as the
 * snippet block; the FAQ that repeated it word for word is gone.
 */
const TITLE = "Amazon Seller Account Management | Walmart US | Hyprr";
const DESC =
  "Daily Amazon and Walmart US account operations, run in your name. Listings, PPC, inventory and account health for a fixed monthly fee.";
const PATH = "/amazon-walmart-management";

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
    ...ogImageMeta("amazon-walmart-management").openGraph,
  },
  ...{ twitter: ogImageMeta("amazon-walmart-management").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

/** The rebuttal — the snippet answer under the first H2. */
const REBUTTAL =
  "Not if the agency holds the account. The safe arrangement is that the account stays registered to you, the agency works under permissioned user access you can revoke, and every purchase is approved by you in writing. Access without ownership.";

const FAQS = [
  {
    q: "Do you need my Seller Central password?",
    a: "No. You add us as a user with limited permissions, and you can remove us yourself at any time.",
  },
  {
    q: "Can you fix a suspended account?",
    a: "Listing-level notices, yes. For a full deactivation, you hear on day one whether we should write the appeal or whether you need a specialist. We don't charge for that assessment.",
  },
  {
    q: "Do you take a percentage of FBA reimbursements?",
    a: "No. Claims are filed as part of the fixed monthly fee.",
  },
  {
    q: "Do I have to use WFS to sell on Walmart?",
    a: "No. WFS is optional. We model it against your own fulfillment per SKU first.",
  },
  {
    q: "How do I end the arrangement?",
    a: "Give notice under your agreement and remove our user access. There is no handover fee, and the listings, reports and documents stay with you.",
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
            { name: "Management", path: PATH },
          ]),
          serviceLd({
            name: "Amazon and Walmart US account management",
            serviceType: "Marketplace account management",
            path: PATH,
            description: DESC,
          }),
        ]}
      />

      {/* 1 · HERO — visual 06 (master in a card: petrol band) */}
      <section className="plhero">
        <div className="wrap plhero-grid">
          <div>
            <span className="eyebrow">Management / Amazon + Walmart US</span>
            <h1>You already sell. We run it properly.</h1>
            <p>
              We run Amazon accounts in the US, UK, Europe and the Middle East,
              and Walmart accounts in the US. The account stays registered to you,
              and you can remove our access from your own User Permissions
              page at any time.
            </p>
            <div className="plchips">
              <span className="chip">MANAGED OPERATIONS</span>
              <span className="chip">CATALOG</span>
              <span className="chip">GROWTH</span>
              <span className="chip">INVENTORY</span>
              <span className="chip">ACCOUNT</span>
            </div>
            <div className="cta-row">
              <a className="btn cit" href={BOOKING}>
                Book a call
              </a>
              <a className="btn line-l" href="#week">
                See a week inside your account
              </a>
            </div>
          </div>
          <Visual
            variant="hero"
            onDark
            name="amazon-walmart-management/hero-operator-view"
            alt="One operations console covering catalog, growth, inventory and account health across Amazon US, Amazon UK and Walmart US, with margin by product and the Monday-to-Friday weekly rhythm"
          />
        </div>
      </section>

      {/* 1b · WHERE A RUNNING ACCOUNT LOSES MONEY — moved from the home
          page (PROMPT_26 §6). Same two-column copy, same plate. */}
      <section className="sec band-paper" id="losses" data-feature="loss-section">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Where to look first</div>
              <h2>Where a running account loses money.</h2>
            </div>
            <p>
              These are the two places we look first when we take an account
              over.
            </p>
          </div>
          <div className="loss-cols">
            <p>
              <b>Before the money moves.</b> The wrong product, a supplier
              price that leaves nothing after fees, a category that was a price
              war before you arrived. You lose it once, and it is usually most
              of it.
            </p>
            <p>
              <b>After the money moves.</b> A suppressed listing, stock that
              runs out before the reorder lands, a case unanswered for eleven
              days, advertising against a page that was never built to convert.
              You lose it a little every week.
            </p>
          </div>
          <Visual
            name="home/where-money-is-lost"
            alt="Risks before and after money moves, split by the client's approval: a written verdict prevents the first set, the weekly operation prevents the second"
          />
        </div>
      </section>

      {/* 2 · THE REBUTTAL */}
      <section className="start" id="rebuttal">
        <div className="wrap">
          <h2>Should you let an agency manage your Amazon account?</h2>
          <div className="snippet">
            <p>{REBUTTAL}</p>
          </div>
        </div>
      </section>

      {/* 3 · FOUR LIVE AREAS — areas, not stages; nothing numbered */}
      <section className="run" id="areas">
        <div className="wrap">
          <h2>Four live areas, one operation.</h2>
          <div className="run-grid">
            <div>
              <p>
                Catalog, growth, inventory and account are areas, not stages.
                All four are live every week, and each one feeds the others. A
                suppressed listing is an account problem that becomes a growth
                problem; a late reorder is an inventory problem that becomes a
                ranking problem.
              </p>
              <p style={{ marginBottom: 0 }}>
                <b style={{ color: "#fff" }}>
                  The measure of the work is the monthly report:
                </b>{" "}
                margin by product, not revenue by product.
              </p>
            </div>
            <div className="ops">
              <div className="op">
                <b>Catalog</b>
                <span>
                  Listings, A+ content, attributes, variations, suppressed
                  listings and compliance
                </span>
              </div>
              <div className="op">
                <b>Growth</b>
                <span>
                  Advertising, search terms, bids, ranking, the featured offer
                  and conversion
                </span>
              </div>
              <div className="op">
                <b>Inventory</b>
                <span>
                  Stock cover, replenishment, prep and shipments, stranded
                  stock
                </span>
              </div>
              <div className="op">
                <b>Account</b>
                <span>
                  Cases, reimbursements, policy compliance and account health
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · WHAT WE RUN ON AMAZON */}
      <section className="buildband" id="amazon">
        <div className="wrap">
          <h2>What we run on Amazon.</h2>
          <ul className="facts">
            <li>
              <b>Account health.</b> Account Health Rating and policy notices
              checked every week. Listing-level notices get a written response
              with the evidence you hold. If the whole account is deactivated,
              you hear on day one whether we are the right people to write the
              appeal.
            </li>
            <li>
              <b>Inventory and capacity.</b> Shipments planned against
              Amazon&apos;s FBA capacity limits, with excess and stranded stock
              flagged before it costs storage fees.
            </li>
            <li>
              {/* [verify] reimbursement basis and claim windows (B7) */}
              <b>Reimbursements.</b> Amazon reimburses lost or damaged FBA
              stock at your cost, not your sale price, and claim windows are
              short. Inventory is reconciled every month so claims go in on
              time. Claims are part of the monthly fee, with no percentage of
              what is recovered.
            </li>
            <li>
              <b>Brand Registry tools.</b> If you own the brand: A+ content,
              Brand Story, Brand Analytics search data, Manage Your Experiments
              and Sponsored Brands.
            </li>
            <li>
              <b>Vine.</b> For brand-registered FBA products with few reviews,
              where Amazon&apos;s enrolment fee makes sense, recommended product
              by product. We never ask for reviews any other way.
            </li>
          </ul>
        </div>
      </section>

      {/* 5 · A WEEK INSIDE YOUR ACCOUNT */}
      <section className="path" id="week">
        <div className="wrap">
          <h2>A week inside your account</h2>
          <p style={{ maxWidth: "62ch" }}>
            The real question behind a monthly fee is what you are paying for
            every month. This is the shape of a normal week.
          </p>
          <div className="week">
            <div>
              <span className="d">MON</span>
              <b>Catalog</b>
              <span>
                Listings swept: suppressions, attributes, content, variations.
              </span>
            </div>
            <div>
              <span className="d">TUE</span>
              <b>PPC</b>
              <span>
                Search terms, bids and budgets against last week&apos;s
                numbers.
              </span>
            </div>
            <div>
              <span className="d">WED</span>
              <b>Inventory</b>
              <span>Stock cover, reorders and shipments, before they are
                urgent.</span>
            </div>
            <div>
              <span className="d">THU</span>
              <b>Account</b>
              <span>Cases worked, reimbursements filed, health checked.</span>
            </div>
            <div>
              <span className="d">FRI</span>
              <b>Reporting</b>
              <span>The week written down: what moved and what is next.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · GROWTH — a short block; the full treatment lives on the
          dedicated PPC page */}
      <section className="gate" id="growth">
        <div className="wrap">
          <h2>Conversion first, then traffic.</h2>
          <div className="gate-grid">
            <div>
              <p>
                Convert, rank, advertise, hold. Advertising against a page
                that does not convert buys traffic and burns it, which is why
                the order matters.
              </p>
              <p style={{ marginBottom: 0 }}>
                Agencies paid on ad spend do this backwards.{" "}
                <b style={{ color: "#fff" }}>We are not paid on ad spend.</b>{" "}
                <a
                  href="/amazon-ppc-management"
                  style={{ color: "#d5e2e0", fontWeight: 600 }}
                >
                  Amazon PPC management →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · WALMART US — visual 14 above the four bullets */}
      <section className="buildband" id="walmart">
        <div className="wrap">
          <h2>Walmart US: the same catalog, different rules.</h2>
          <p style={{ maxWidth: "70ch" }}>We run Walmart Marketplace in the US only.</p>
          <Visual
            name="amazon-walmart-management/adding-walmart"
            alt="The same product on Amazon and Walmart, four Walmart setup steps, and how the two platforms differ on ads, fulfillment, fees, reviews and markets"
          />
          <ul className="facts two-col" style={{ marginTop: 28 }}>
            <li>
              <b>Listing Quality.</b> Walmart scores each listing on content,
              discoverability, offer, and ratings and reviews. The
              lowest-scoring items with the most traffic are worked first.
            </li>
            <li>
              <b>Seller performance.</b> On-time delivery, cancellations and
              responsiveness checked weekly, and reported against
              Walmart&apos;s Pro Seller thresholds. Walmart awards the badge,
              so we don&apos;t promise it.
            </li>
            <li>
              <b>WFS.</b> Walmart&apos;s own fulfillment network is optional. We
              model it against your own fulfillment per SKU before any stock
              ships.
            </li>
            <li>
              <b>Walmart Connect.</b> Sponsored Products, Sponsored Brands and
              Sponsored Videos, with their own budget and their own report.
            </li>
          </ul>
        </div>
      </section>

      {/* 8 · FIRST 30 DAYS AND ACCESS — visual 21 */}
      <section className="start" id="first-30-days">
        <div className="wrap">
          <h2>Your first 30 days, and the access we ask for.</h2>
          <p style={{ maxWidth: "70ch" }}>A standard plan, not a promise of results.</p>
          <Visual
            name="amazon-walmart-management/first-30-days"
            alt="A 30-day onboarding plan from access to first report, beside a user permissions panel where inventory, advertising, pricing, reports and cases are granted and payments, account settings and user permissions are not"
          />
          <ul className="facts" style={{ marginTop: 28 }}>
            <li>
              <b>Days 1–3, access.</b> You add us as a user. We confirm what we
              can and cannot see.
            </li>
            <li>
              <b>Days 4–10, audit.</b> Catalog, advertising, inventory and
              account health, written up with costs.
            </li>
            <li>
              <b>Days 11–14, plan.</b> A fix list in priority order. Nothing
              changes until you approve it.
            </li>
            <li>
              <b>Days 15–30, work.</b> The fix list is worked. Weekly notes
              every Friday.
            </li>
            <li>
              <b>Day 30, first report.</b> Margin by product, what changed and
              what happens next month.
            </li>
          </ul>
          <p style={{ maxWidth: "70ch", marginTop: 22, marginBottom: 0 }}>
            We ask to be added as a user in Seller Central and Walmart Seller
            Center, with permissions limited to the areas we run. Advertising
            access is granted separately in Amazon Ads and Walmart Connect. We
            never ask for your primary login, password, bank details or
            verification codes.
          </p>
        </div>
      </section>

      {/* 9 · WHAT WE WILL NOT DO */}
      <section className="handover" id="will-not">
        <div className="wrap">
          <div className="handover-grid">
            <div>
              <h2>What we will not do.</h2>
            </div>
            <div>
              <p style={{ marginBottom: 0 }}>
                We do not buy reviews, offer incentives for them, or ask for
                them outside Amazon&apos;s own programs. We do not guarantee the
                outcome of an appeal. We do not take a percentage of ad spend,
                revenue or reimbursements. We do not hold your account, your
                stock or your supplier relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 · REPORT + OWNERSHIP */}
      <section className="fees" id="ownership">
        <div className="wrap">
          <h2>Margin by product, not revenue by product.</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>The monthly report</b>
              <span>
                Every product, its sales, its costs and its margin, plus what
                changed, what we did about it, and what happens next month.
                Revenue is a vanity number; margin is the business.
              </span>
            </div>
            <div className="fee">
              <b>Ownership</b>
              <span>
                The account is registered to you. We work under permissioned
                user access you can remove at any time from your own User
                Permissions page. A fixed monthly fee: nothing on your ad
                spend, nothing on your revenue.
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

      {/* 11 · HOW IT ENDS — [owner B6] "the notice period written into
          your agreement" becomes "[30] days' notice" once confirmed */}
      <section className="buildband" id="how-it-ends">
        <div className="wrap">
          <h2>How it ends.</h2>
          <p style={{ maxWidth: "70ch", marginBottom: 0 }}>
            The arrangement runs month to month, with the notice period
            written into your agreement. When it ends, you remove our access
            and keep everything we produced: listings, reports and documents.
            There is no handover fee.
          </p>
        </div>
      </section>

      {/* 12 · LISTINGS */}
      <section className="handover" id="listings">
        <div className="wrap">
          <div className="handover-grid">
            <div>
              <h2>If the listings are the problem, start there.</h2>
            </div>
            <div>
              <p>
                Listing optimization is available as a one-off project: fixed
                price, two weeks, and you keep the document either way. If the
                account needs more than listings, this page is what picks up
                afterwards.
              </p>
              <p style={{ marginBottom: 0 }}>
                <a
                  href="/amazon-listing-optimization"
                  style={{ color: "#fff", fontWeight: 600 }}
                >
                  Amazon listing optimization →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13 · FAQ */}
      <Faq items={FAQS} />

      {/* 14 · CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <h2>Give us read access for a week.</h2>
          <p>
            We will look at the catalog, the advertising, the inventory and
            the account health, and send you what we found, whether or not
            you hire us.
          </p>
          <div className="cta-row">
            <a className="btn onpetrol" href={BOOKING}>
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

import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Amazon & Walmart management — built from the wireframes (sections
 * 01–08, copy blocks verbatim where given). Carries the #growth,
 * #walmart and #listings anchors that the homepage cards and two
 * service pages link into. The rebuttal passage is the
 * highest-value 45 words on the site — rendered as a snippet block
 * AND as the first FAQ answer, same string.
 */
const TITLE = "Amazon Marketplace Management Agency — Hyprr Brands";
const DESC =
  "You already sell — we run it properly. Catalogue, growth, inventory and account health on Amazon and Walmart, daily. Your account stays in your name.";
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

/** The rebuttal — one string, rendered visibly twice (snippet + FAQ)
 *  so the FAQPage schema matches the visible text exactly. */
const REBUTTAL =
  "Not if the agency holds the account. The safe arrangement is that the account stays registered to you, the agency works under permissioned user access you can revoke, and every purchase is approved by you in writing. Access without ownership.";

const FAQS = [
  {
    q: "Should you let an agency manage your Amazon account?",
    a: REBUTTAL,
  },
  {
    q: "What is Amazon account management?",
    a: "The daily operation of a Seller Central account: catalogue and listings, advertising, inventory and replenishment, cases, reimbursements and account health. It is operational work, not consulting — the measure of it is a monthly report showing margin by product.",
  },
  {
    q: "Business account or seller account?",
    a: "They are different products. An Amazon Business account is for buying — procurement with business pricing. A seller account, through Seller Central, is for selling. Marketplace management works inside a seller account; if you sell, that is the account being managed.",
  },
  {
    q: "Can you manage Walmart as well as Amazon?",
    a: "Yes, in the US. The same catalogue runs on both marketplaces from one operation, with the differences handled for you: a different advertising platform, a different fee structure and slower review velocity.",
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
            name: "Amazon and Walmart marketplace management",
            serviceType: "Marketplace account management",
            path: PATH,
            description: DESC,
          }),
        ]}
      />

      {/* 01 · HERO */}
      <section className="plhero">
        <div className="wrap plhero-grid">
          <div>
            <span className="eyebrow">Management / Amazon + Walmart</span>
            <h1>You already sell. We run it properly.</h1>
            <p>
              Amazon and Walmart account operations, run daily. Your account
              stays in your name and you can revoke our access in one click.
            </p>
            <div className="plchips">
              <span className="chip">MANAGED OPERATIONS</span>
              <span className="chip">CATALOGUE</span>
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
          <figure className="heroimg" style={{ margin: 0 }}>
            <picture>
              <source
                media="(max-width: 760px)"
                srcSet="/img/mgmt-hero-mobile-1080.webp"
                type="image/webp"
                width={1080}
                height={1350}
              />
              <source srcSet="/img/mgmt-hero-1600.webp" type="image/webp" />
              <img
                src="/img/mgmt-hero-1600.png"
                width={1600}
                height={900}
                fetchPriority="high"
                decoding="async"
                alt="An account health panel showing catalogue, growth, inventory and account figures for a marketplace seller"
              />
            </picture>
            <figcaption>Figures are illustrative.</figcaption>
          </figure>
        </div>
      </section>

      {/* 02 · THE REBUTTAL */}
      <section className="start" id="rebuttal">
        <div className="wrap">
          <span className="eyebrow">The question to ask first</span>
          <h2>Should you let an agency manage your Amazon account?</h2>
          <div className="snippet">
            <p>{REBUTTAL}</p>
          </div>
        </div>
      </section>

      {/* 03 · FOUR LIVE AREAS — areas, not stages; nothing numbered */}
      <section className="run" id="areas">
        <div className="wrap">
          <span className="eyebrow">The work</span>
          <h2>Four live areas, one operation.</h2>
          <div className="run-grid">
            <div>
              <p>
                Catalogue, growth, inventory and account are areas, not stages
                — all four are live every week, and each one feeds the others.
                A suppressed listing is an account problem that becomes a
                growth problem; a late reorder is an inventory problem that
                becomes a ranking problem.
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
                <b>Catalogue</b>
                <span>
                  Listings, A+ content, attributes, variations, suppressed
                  listings and compliance
                </span>
              </div>
              <div className="op">
                <b>Growth</b>
                <span>
                  Advertising, search terms, bids, ranking, buy box and
                  conversion
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

      {/* 04 · A WEEK INSIDE YOUR ACCOUNT */}
      <section className="path" id="week">
        <div className="wrap">
          <span className="eyebrow">What a retainer buys</span>
          <h2>A week inside your account</h2>
          <p style={{ maxWidth: "62ch" }}>
            The real question behind a retainer is what you are paying for
            every month. This is the shape of a normal week.
          </p>
          <div className="week">
            <div>
              <span className="d">MON</span>
              <b>Catalogue</b>
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
              <span>Stock cover, reorders and shipments — before they are
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
              <span>The week written down — what moved and what is next.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05 · GROWTH — a short block; the full treatment lives on the
          dedicated PPC page (PPC_AND_CLOSING_BLOCK.md) */}
      <section className="gate" id="growth">
        <div className="wrap">
          <span className="eyebrow">Growth</span>
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

      {/* 06 · ADDING WALMART */}
      <section className="buildband" id="walmart">
        <div className="wrap">
          <span className="eyebrow">The second marketplace</span>
          <h2>Adding Walmart</h2>
          <div className="build-grid">
            <div>
              <p>
                The same catalogue on a second marketplace, with the
                differences named: a different advertising platform, a
                different fee structure, slower review velocity, and no FBA
                equivalent by default.
              </p>
              <p style={{ marginBottom: 0 }}>
                We run both from one operation, so a product that proves
                itself on Amazon can be live on Walmart without a second
                team, a second agency or a second process.
              </p>
            </div>
            <div className="steps">
              <div className="step">
                <b>Setup</b>
                <span>ACCOUNT + COMPLIANCE + CATALOGUE</span>
              </div>
              <div className="step">
                <b>Listings</b>
                <span>CONTENT MAPPED + RELISTED</span>
              </div>
              <div className="step">
                <b>Fulfilment</b>
                <span>WFS OR YOUR OWN — MODELLED FIRST</span>
              </div>
              <div className="step">
                <b>Advertising</b>
                <span>WALMART CONNECT, SEPARATELY RUN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 · LISTINGS */}
      <section className="handover" id="listings">
        <div className="wrap">
          <span className="eyebrow">Where to start</span>
          <div className="handover-grid">
            <div>
              <h2>If the listings are the problem, start there.</h2>
            </div>
            <div>
              <p>
                Listing optimization is available as a one-off project — fixed
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
          <figure className="strip">
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
          </figure>
        </div>
      </section>

      {/* 08 · REPORT + OWNERSHIP */}
      <section className="fees" id="ownership">
        <div className="wrap">
          <span className="eyebrow">The report, and what stays yours</span>
          <h2>Margin by product, not revenue by product.</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>The monthly report</b>
              <span>
                Every product, its sales, its costs and its margin — plus what
                changed, what we did about it, and what happens next month.
                Revenue is a vanity number; margin is the business.
              </span>
            </div>
            <div className="fee">
              <b>Ownership</b>
              <span>
                The account is registered to you. We work under permissioned
                user access you can revoke in one click. A fixed monthly fee —
                nothing on your ad spend, nothing on your revenue.
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

      {/* FAQ */}
      <Faq items={FAQS} />

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <span className="eyebrow">Next step</span>
          <h2>Give us read access for a week.</h2>
          <p>
            We will look at the catalogue, the advertising, the inventory and
            the account health, and send you what we found — whether or not
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

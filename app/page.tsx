import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Homepage — ported from docs/v4/hyprr-homepage-v3-4.html (final
 * design and copy). Structure and strings lifted verbatim; the only
 * changes are wiring: real hrefs on the CTA buttons and one link to
 * /how-we-work per SITEMAP.md's link map.
 */
const TITLE = "Amazon & Walmart Agency | Build, Operate, Scale — Hyprr";
const DESC =
  "We build, operate and scale Amazon and Walmart businesses. You own the accounts, the stock and every buying decision. Book a call.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "/",
    siteName: "Hyprr Brands",
    type: "website",
    ...ogImageMeta("home").openGraph,
  },
  ...{ twitter: ogImageMeta("home").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

export default function Page() {
  return (
    <main id="main">
      <JsonLd
        nodes={[
          webPageLd({ path: "/", title: TITLE, description: DESC }),
          serviceLd({
            name: "Amazon and Walmart marketplace management",
            serviceType: "Marketplace management",
            path: "/amazon-walmart-management",
            description:
              "Amazon and Walmart account operations, run daily — catalogue, growth, inventory and account health.",
          }),
        ]}
      />

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              Amazon + Walmart / Private label + Wholesale
            </span>
            <h1>
              Build it. Run it. Scale it.
              <br />
              <span className="h1-sub">On Amazon and Walmart.</span>
            </h1>
            <p>
              We build, operate and grow businesses on Amazon and Walmart —
              from new marketplace launches to the daily operation. You own the
              accounts, the stock and every buying decision.
            </p>
            <div className="cta-row">
              <a className="btn dark" href="#services">
                See services →
              </a>
              <a className="btn ghost" href="#how">
                See how we work
              </a>
            </div>
          </div>
          <div className="visual">
            <h3>Product → Marketplace → Growth</h3>
            <div className="mock-photo">
              PRODUCT / PACKAGING / MARKETPLACE VISUAL
            </div>
            <span className="caption">
              HERO COMPOSITE · PRODUCT + AMAZON + WALMART
            </span>
          </div>
        </div>
      </section>

      {/* BUSINESS PATH */}
      <section className="path" id="path">
        <div className="wrap">
          <span className="eyebrow">The business path</span>
          <h2 className="h2-lg">Wherever you start, the route is clear.</h2>
          <p>
            Some clients are launching. Others already sell. The operating path
            connects the two.
          </p>
          <div className="path-grid">
            <div className="path-item">
              <div className="dot">01</div>
              <b>Build</b>
              <p>Product, sourcing, listing and marketplace launch.</p>
            </div>
            <div className="path-item">
              <div className="dot">02</div>
              <b>Operate</b>
              <p>Catalog, inventory, account and day-to-day marketplace work.</p>
            </div>
            <div className="path-item">
              <div className="dot">03</div>
              <b>Grow</b>
              <p>Optimization, advertising, merchandising and conversion.</p>
            </div>
            <div className="path-item">
              <div className="dot">04</div>
              <b>Scale</b>
              <p>Winning products, new channels and stronger operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE ARE YOU TODAY — situation router */}
      <section className="router-band">
        <div className="wrap">
          <span className="eyebrow">Where are you today</span>
          <div className="router">
            <a href="/amazon-private-label">
              <span className="k">START</span>
              <span className="s">
                I want to launch a brand<em>Private label</em>
              </span>
              <span className="arw" aria-hidden="true">
                →
              </span>
            </a>
            <a href="/amazon-walmart-management">
              <span className="k">RUN</span>
              <span className="s">
                I already sell and want it run properly
                <em>Management · Wholesale</em>
              </span>
              <span className="arw" aria-hidden="true">
                →
              </span>
            </a>
            <a href="/amazon-listing-optimization">
              <span className="k">IMPROVE</span>
              <span className="s">
                I sell, but it is not performing<em>Listing optimization</em>
              </span>
              <span className="arw" aria-hidden="true">
                →
              </span>
            </a>
            <a href="/amazon-walmart-management#walmart">
              <span className="k">SCALE</span>
              <span className="s">
                I want to expand<em>Walmart · new products</em>
              </span>
              <span className="arw" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CHOOSE MODEL + ENGAGEMENT MODELS */}
      <section className="choice">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#9aa2a4" }}>
            Choose your business model
          </span>
          <h2 className="h2-lg">Start with what you need.</h2>
          <p>
            Two ways to build a marketplace business. Both end in the same
            place: an operation that runs every day and reports every month.
          </p>
          <div className="cards">
            <div className="card pl">
              <span className="tag">PRIVATE LABEL</span>
              <h3>Launch or run a brand</h3>
              <ul>
                <li>Product and market research</li>
                <li>Sourcing, development and packaging</li>
                <li>Amazon and Walmart launch</li>
                <li>Ongoing marketplace operation</li>
              </ul>
              <a className="go" href="/amazon-private-label">
                Private label →
              </a>
            </div>
            <div className="card wh">
              <span className="tag">WHOLESALE</span>
              <h3>Start or operate wholesale</h3>
              <ul>
                <li>Supplier approval and terms</li>
                <li>Catalogue and landed-cost models</li>
                <li>Amazon and Walmart operations</li>
                <li>Replenishment, growth and scale</li>
              </ul>
              <a className="go" href="/amazon-wholesale-management">
                Wholesale →
              </a>
            </div>
          </div>
          <div className="models">
            <div>
              <b>Launch projects</b>
              <span>
                Fixed scope, priced and paid before we start, finishing on a
                date. Private label launch, account setup, listing
                optimization, Walmart expansion.
              </span>
            </div>
            <div>
              <b>Managed operations</b>
              <span>
                Monthly and continuous, with a written report every month.
                Sourcing, listings, advertising, inventory, cases and account
                health.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES · six capabilities, four pages */}
      <section className="services" id="services">
        <div className="wrap">
          <span className="eyebrow">Core services</span>
          <h2 className="h2-lg">Everything important is visible.</h2>
          <div className="service-grid">
            <a className="service" href="/amazon-walmart-management">
              <span className="bar" style={{ background: "var(--petrol)" }} />
              <b>Amazon operations</b>
              <span>
                Catalog, listings, account workflows, inventory and marketplace
                execution.
              </span>
              <em>Amazon management →</em>
            </a>
            <a className="service" href="/amazon-walmart-management#walmart">
              <span className="bar" style={{ background: "var(--petrol)" }} />
              <b>Walmart marketplace</b>
              <span>
                Setup, catalog, compliance and ongoing marketplace management.
              </span>
              <em>Walmart management →</em>
            </a>
            <a className="service" href="/amazon-listing-optimization">
              <span className="bar" style={{ background: "var(--aqua)" }} />
              <b>Listing optimization</b>
              <span>
                Content, images, attributes, variations and conversion. Fixed
                price, two weeks.
              </span>
              <em>Listings →</em>
            </a>
            <a className="service" href="/amazon-private-label">
              <span className="bar" style={{ background: "var(--citrus)" }} />
              <b>Private label</b>
              <span>
                Research, sourcing, development, packaging, launch and growth.
              </span>
              <em>Private label →</em>
            </a>
            <a className="service" href="/amazon-wholesale-management">
              <span className="bar" style={{ background: "var(--coral)" }} />
              <b>Wholesale</b>
              <span>
                Build and operate a repeatable wholesale marketplace business.
              </span>
              <em>Wholesale management →</em>
            </a>
            <a className="service" href="/amazon-walmart-management#growth">
              <span className="bar" style={{ background: "var(--petrol)" }} />
              <b>Growth and scale</b>
              <span>
                Advertising, ranking, buy box and expansion after launch.
              </span>
              <em>Growth and PPC →</em>
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="how" id="how">
        <div className="wrap">
          <span className="eyebrow">How we work</span>
          <h2 className="h2-lg">Five steps, on every product we touch.</h2>
          <div className="how-grid">
            <div>
              <ol className="method">
                <li>
                  <div>
                    <b>We check the numbers</b>
                    <span>Landed cost, fees, competition, demand.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>We write a verdict</b>
                    <span>One page. Buy or do not buy, and the reason.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>You approve the money</b>
                    <span>Nothing is ordered without your yes, in writing.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>We do the work</b>
                    <span>
                      Sourcing, listings, advertising, inventory, cases.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>You get the report</b>
                    <span>Margin by product, every month.</span>
                  </div>
                </li>
              </ol>
              <p style={{ marginTop: 18, marginBottom: 0 }}>
                <a href="/how-we-work" style={{ fontWeight: 600 }}>
                  How we charge and how we work, in full →
                </a>
              </p>
            </div>
            <div className="verdict">
              <h3>Buy, or do not buy.</h3>
              <p>
                Most products we look at fail. We send you the sheet that shows
                why, and we do not buy them. That is what protects your money.
              </p>
              <div className="vsheet">
                <div className="r">
                  <span>Line 0412 · landed cost</span>
                  <b>11.40</b>
                </div>
                <div className="r">
                  <span>Fees and returns</span>
                  <b>9.95</b>
                </div>
                <div className="r">
                  <span>Competing offers</span>
                  <b>14</b>
                </div>
                <div className="r out">
                  <span>Verdict</span>
                  <b>DO NOT BUY</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="proof" id="proof">
        <div className="wrap">
          <span className="eyebrow">Proof</span>
          <h2 className="h2-lg">Look at the work before you talk to us.</h2>
          <p>
            We are new, and we are not going to show you someone else&apos;s
            results. These are ours.
          </p>
          <div className="artefacts">
            <a className="art" href="/proof">
              <div className="fr">
                <svg
                  viewBox="0 0 160 110"
                  role="img"
                  aria-label="Verdict sheet ending in reject"
                >
                  <rect
                    x="10"
                    y="8"
                    width="140"
                    height="94"
                    rx="7"
                    fill="#fff"
                    stroke="#c6e3dc"
                  />
                  <rect x="24" y="24" width="62" height="6" rx="3" fill="#bcd6cf" />
                  <rect x="24" y="40" width="100" height="5" rx="2.5" fill="#e6f2ee" />
                  <rect x="24" y="52" width="86" height="5" rx="2.5" fill="#e6f2ee" />
                  <rect
                    x="24"
                    y="70"
                    width="112"
                    height="18"
                    rx="5"
                    fill="#fff3f0"
                    stroke="#f3c8bf"
                  />
                  <rect x="32" y="76" width="44" height="6" rx="3" fill="#c1452c" />
                </svg>
              </div>
              <div className="t">
                A product we refused
                <span>with the arithmetic that refused it</span>
              </div>
            </a>
            <a className="art" href="/proof">
              <div className="fr">
                <svg
                  viewBox="0 0 160 110"
                  role="img"
                  aria-label="Listing before and after"
                >
                  <rect
                    x="8"
                    y="10"
                    width="66"
                    height="90"
                    rx="6"
                    fill="#fff"
                    stroke="#c6e3dc"
                  />
                  <rect
                    x="86"
                    y="10"
                    width="66"
                    height="90"
                    rx="6"
                    fill="#fff"
                    stroke="#8ec9bd"
                  />
                  <rect x="18" y="24" width="40" height="5" rx="2.5" fill="#e6f2ee" />
                  <rect x="18" y="36" width="30" height="5" rx="2.5" fill="#e6f2ee" />
                  <rect x="96" y="24" width="46" height="5" rx="2.5" fill="#bde6db" />
                  <rect x="96" y="36" width="40" height="5" rx="2.5" fill="#bde6db" />
                  <rect x="96" y="48" width="44" height="5" rx="2.5" fill="#bde6db" />
                </svg>
              </div>
              <div className="t">
                A listing before and after
                <span>with what changed marked</span>
              </div>
            </a>
            <a className="art" href="/proof">
              <div className="fr">
                <svg
                  viewBox="0 0 160 110"
                  role="img"
                  aria-label="Product and packaging"
                >
                  <ellipse cx="80" cy="96" rx="38" ry="5" fill="#123f46" opacity=".12" />
                  <path
                    d="M53 34 L80 22 L107 34 L107 89 L80 101 L53 89 Z"
                    fill="#123F46"
                  />
                  <path d="M53 34 L80 46 L107 34 L80 22 Z" fill="#1c5b63" />
                  <rect x="63" y="58" width="20" height="4" rx="2" fill="#D7F04A" />
                </svg>
              </div>
              <div className="t">
                A product and its packaging
                <span>for a category we chose on purpose</span>
              </div>
            </a>
          </div>
          <div className="video">
            <div className="play" aria-hidden="true">
              ▶
            </div>
            <small>PLACEHOLDER · 60–75 SEC OVERVIEW FILM · NOT YET SHOT</small>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <div className="wrap why-grid">
          <div>
            <span className="eyebrow" style={{ color: "#4a5520" }}>
              Why Hyprr
            </span>
            <h2 className="h2-lg">
              Two places a marketplace business loses money.
            </h2>
            <p>
              <b>Before the money moves.</b> The wrong product, a supplier
              price that leaves nothing after fees, a category that was a price
              war before you arrived. You lose it once, and it is usually most
              of it.
            </p>
            <p style={{ marginBottom: 0 }}>
              <b>After the money moves.</b> A suppressed listing, stock that
              runs out before the reorder lands, a case unanswered for eleven
              days, advertising against a page that was never built to convert.
              You lose it a little every week.
            </p>
          </div>
          <div className="points">
            <div className="point">A written verdict before you spend</div>
            <div className="point">The daily operation after you do</div>
            <div className="point">
              Paid on a fixed fee, never on your ad spend
            </div>
            <div className="point">Your accounts, your stock, your approvals</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <span className="eyebrow">Next step</span>
          <h2 className="h2-lg">Tell us where you are starting.</h2>
          <p>
            Launching a brand, running an existing one, starting wholesale, or
            improving an operation that is already live. Twenty minutes, and we
            come with a view rather than a questionnaire.
          </p>
          <div className="cta-row">
            <a className="btn onpetrol" href={BOOKING}>
              Book a call
            </a>
            <a className="btn line-l" href="/contact#form">
              Send context instead
            </a>
          </div>
          <div className="who">
            <b>Who we work with</b>
            Brand owners. Investors putting capital into marketplaces, wherever
            they are based. Manufacturers selling direct. Wholesale businesses.
            Sellers who already have an account and need it run. We work across
            US, UK, Gulf and Singapore hours.
          </div>
        </div>
      </section>
    </main>
  );
}

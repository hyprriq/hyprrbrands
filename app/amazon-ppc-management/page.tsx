import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Amazon PPC management — the fifth service page, built from
 * docs/v4/handoff/PPC_AND_CLOSING_BLOCK.md (final approved copy,
 * strings verbatim). Nav stays at five items; this page is reached
 * from the homepage growth card, the footer, and #growth on the
 * management page.
 */
const TITLE = "Amazon PPC Management Agency — Hyprr";
const DESC =
  "We run Amazon and Walmart advertising against inventory, price and margin. Never paid on your ad spend, so growth never means spending more.";
const PATH = "/amazon-ppc-management";

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
    ...ogImageMeta("amazon-ppc-management").openGraph,
  },
  ...{ twitter: ogImageMeta("amazon-ppc-management").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

const FAQS = [
  {
    q: "How much does an Amazon PPC agency typically charge?",
    a: "Most charge a monthly retainer, a percentage of ad spend, or a percentage of revenue. Retainers are commonly in the low thousands per month. A percentage of ad spend pays the agency more when you spend more, which is the arrangement we avoid.",
  },
  {
    q: "What is a good ACoS?",
    a: "There is no universal number. A good ACoS is one that leaves the margin you need after fees, returns and the cost of goods. A 30% ACoS is excellent on a high-margin product and ruinous on a thin one, which is why we look at contribution per unit rather than at ACoS alone.",
  },
  {
    q: "Should I run ads on a new listing?",
    a: "Yes, but only after the listing is finished. Advertising a page that does not convert buys you data about a problem you already know. Fix the page, then buy traffic to it.",
  },
  {
    q: "Do you manage Walmart advertising as well?",
    a: "Yes. Different platform, same team, and budget moves between the two based on what is converting.",
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
            { name: "PPC", path: PATH },
          ]),
          serviceLd({
            name: "Amazon PPC management agency",
            serviceType: "Marketplace advertising management",
            path: PATH,
            description: DESC,
          }),
        ]}
      />

      {/* HERO */}
      <section className="plhero">
        <div className="wrap plhero-grid">
          <div>
            <span className="eyebrow">PPC / Amazon + Walmart</span>
            <h1>Advertising that answers to margin, not to spend.</h1>
            <p>
              We run Amazon and Walmart advertising as part of the operation,
              not next to it. Bids move when stock moves. Budgets move when
              price moves. We are never paid a percentage of what you spend.
            </p>
            <div className="plchips">
              <span className="chip">MANAGED OPERATIONS</span>
              <span className="chip">MONTHLY</span>
            </div>
            <div className="cta-row">
              <a className="btn cit" href={BOOKING}>
                Book a call
              </a>
              <a className="btn line-l" href="/how-we-work">
                See how we charge →
              </a>
            </div>
          </div>
          <figure className="heroimg" style={{ margin: 0 }}>
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
                fetchPriority="high"
                decoding="async"
                alt="The same product listing before and after optimization: a dim, badly cropped photo with a thin title beside a clean product shot with a full title and bullets"
              />
            </picture>
          </figure>
        </div>
      </section>

      {/* WHY MOST AMAZON ADVERTISING LOSES MONEY */}
      <section className="start" id="why">
        <div className="wrap">
          <h2>Why most Amazon advertising loses money</h2>
          <p style={{ maxWidth: "62ch" }}>
            Two reasons, and neither is the bidding.
          </p>
          <div className="fee-grid">
            <div className="fee">
              <b>The page does not convert.</b>
              <span>
                Paying for clicks to a listing that was never built to sell
                makes the loss arrive faster. Conversion comes first, every
                time. If your listings are the problem,{" "}
                <a href="/amazon-listing-optimization">we say so</a> before we
                touch a campaign.
              </span>
            </div>
            <div className="fee">
              <b>Nobody is watching the stock.</b>
              <span>
                Ads that keep running through a stockout burn budget and lose
                the ranking they paid for. Advertising decisions and inventory
                decisions have to be made by the same people, on the same day.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SNIPPET */}
      <section className="buildband" id="what-a-ppc-agency-does">
        <div className="wrap">
          <h2>What does an Amazon PPC agency do?</h2>
          <div className="snippet">
            <p>
              An Amazon PPC agency plans and runs sponsored product, brand and
              display campaigns: keyword and search-term research, bid and
              budget management, negative targeting, and reporting. Good ones
              also connect advertising to inventory, price and margin rather
              than optimising cost-per-click on its own.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE RUN IT */}
      <section className="run" id="how-we-run-it">
        <div className="wrap">
          <h2>How we run it</h2>
          <div className="ops" style={{ marginTop: 24 }}>
            <div className="op">
              <b>Convert</b>
              <span>
                The listing, images and A+ before any budget increases
              </span>
            </div>
            <div className="op">
              <b>Structure</b>
              <span>
                Campaigns separated by intent, not by whim. Exact, phrase and
                discovery kept apart
              </span>
            </div>
            <div className="op">
              <b>Search terms</b>
              <span>
                Harvested weekly. Winners promoted, losers negatived, both
                written down
              </span>
            </div>
            <div className="op">
              <b>Bids and budgets</b>
              <span>
                Moved against margin and stock cover, not against ACoS alone
              </span>
            </div>
            <div className="op">
              <b>Hold</b>
              <span>
                Buy box, price and stock, because losing any of the three
                wastes the whole spend
              </span>
            </div>
            <div className="op">
              <b>Report</b>
              <span>
                What advertising cost, what it returned, and what we would
                change next month
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ADDING WALMART */}
      <section className="buildband" id="walmart-advertising">
        <div className="wrap">
          <h2>Adding Walmart</h2>
          <p style={{ maxWidth: "66ch" }}>
            Walmart advertising is a different platform with different auction
            dynamics, fewer placements and less mature reporting. The same
            catalogue can be advertised on both, and we run them together so
            budget moves to whichever marketplace is converting that week.
          </p>
          <p style={{ marginBottom: 0 }}>
            <a
              href="/amazon-walmart-management#walmart"
              style={{ fontWeight: 600 }}
            >
              Adding Walmart to the operation →
            </a>
          </p>
        </div>
      </section>

      {/* WHAT IT COSTS */}
      <section className="fees" id="fees">
        <div className="wrap">
          <h2>A monthly fee, agreed in writing first.</h2>
          <p style={{ maxWidth: "66ch" }}>
            <b>Nothing is charged on your advertising spend.</b> An agency
            paid a percentage of spend earns more when you spend more, which
            is a conflict that shows up in every recommendation they make.
          </p>
          <p style={{ marginTop: 20, marginBottom: 0 }}>
            <a href="/how-we-work" style={{ fontWeight: 600 }}>
              How we charge, in full →
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <Faq items={FAQS} />

      {/* CLOSE */}
      <section className="cta" id="contact">
        <div className="wrap">
          <h2>Send us your search-term report and one month of advertising data.</h2>
          <p>
            We will tell you where the spend is going and what we would change
            first, before you commit to anything.
          </p>
          <div className="cta-row">
            <a className="btn onpetrol" href={BOOKING}>
              Book a call
            </a>
            <a className="btn line-l" href="/contact#form">
              Send the data instead
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

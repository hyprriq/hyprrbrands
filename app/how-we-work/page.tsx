import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import Visual from "@/components/Visual";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * How we work — the strongest ranking target on the site
 * (SEARCH_TERMS §7: "amazon agency pricing", measured, no AI
 * Overview). The pricing answer sits in the first 45 words under its
 * H2. Every service page's fee line links here rather than repeating
 * it.
 */
const TITLE = "Amazon Agency Fees and How We Work | Hyprr Brands";
const DESC =
  "Fixed fees agreed in writing, never a share of ad spend. Onboarding, access, your first 30 days and how an engagement ends, set out in full.";
const PATH = "/how-we-work";

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
    ...ogImageMeta("how-we-work").openGraph,
  },
  ...{ twitter: ogImageMeta("how-we-work").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

const FAQS = [
  {
    q: "What does the fee not cover?",
    a: "Stock, tooling, testing, freight, duty, insurance and ad spend. Those are paid by you, directly to the supplier or the marketplace.",
  },
  {
    q: "What do you charge?",
    a: "A fixed project fee for launch work — private label launches, account setup, listing optimization, Walmart US expansion — and a fixed monthly fee for managed operations. Both are scoped and agreed in writing before anything starts. The number depends on the scope, which is why it is quoted, not published.",
  },
  {
    q: "Do you take a percentage of ad spend?",
    a: "No. Nothing on your advertising spend, nothing on your revenue and nothing on your capital. Growing your spend must never be what grows our fee — that is the conflict the fixed fee exists to remove.",
  },
  {
    q: "What happens if it does not work?",
    a: "You keep the accounts, the stock, the listings and the documents, and you can remove our access at any time from your own User Permissions page. There is no lock-in that survives the relationship. The verdict sheets exist so that most failures happen on paper, before your money moves.",
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
            { name: "How we work", path: PATH },
          ]),
        ]}
      />

      {/* 01 · HERO + THE FIVE STEPS IN FULL */}
      <section className="start">
        <div className="wrap">
          <h1>How we charge and how we work</h1>
          <p style={{ maxWidth: "60ch" }}>
            The same five steps run on every product we touch, whichever
            service you buy. The fee structure is at the bottom, in plain
            language, because that is the question you actually came with.
          </p>
          <Visual
            name="how-we-work/execution-swimlane"
            alt="Five client decisions in two lanes: Hyprr researches, analyzes, executes and reports; the client decides in writing and reads the report; plus the escalation path when something goes wrong"
          />
          <h2 className="sr-only">Five steps on every buying decision</h2>
          <div className="how-grid" style={{ marginTop: 30 }}>
            <ol className="method">
              <li>
                <div>
                  <b>We check the numbers</b>
                  <span>
                    Landed cost, marketplace fees, returns, competition and
                    demand — modeled per product, before anything else
                    happens. Most ideas end here, which is the point.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <b>We write a verdict</b>
                  <span>
                    One page that says buy or do not buy, and the reason. You
                    can read it and disagree with it — it is your money and
                    your call.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <b>You approve the money</b>
                  <span>
                    Nothing is ordered without your yes, in writing. Suppliers
                    invoice you directly; the capital never passes through us.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <b>We do the work</b>
                  <span>
                    Sourcing, listings, advertising, inventory, cases and
                    account health — the daily operation, run to a weekly
                    rhythm you can see.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <b>You get the report</b>
                  <span>
                    Margin by product, every month — with what changed, what
                    we did about it, and what happens next month.
                  </span>
                </div>
              </li>
            </ol>
            <div className="verdict">
              <h3>Buy, or do not buy.</h3>
              <p>
                Most products we look at fail. We send you the sheet that
                shows why, and we do not buy them. That is what protects your
                money.
              </p>
              <div className="vsheet">
                <div className="hd">
                  <span>CANDIDATE 0412 · SEP</span>
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
                <div className="r out">
                  <span>Margin against a 20% floor</span>
                  <b>4.8% · DO NOT BUY</b>
                </div>
              </div>
              <p style={{ marginTop: 14 }}>
                <a href="/proof#verdict" style={{ color: "#d5e2e0", fontWeight: 600 }}>
                  Read a full sample on the proof page →
                </a>
              </p>
            </div>
          </div>
          <p style={{ maxWidth: "62ch", marginTop: 26, marginBottom: 0 }}>
            For management, listing and advertising work, the same rule
            applies differently: nothing changes in your account until you
            have approved the written plan.
          </p>
        </div>
      </section>

      {/* 02 · WHAT YOU OWN, WHAT YOU APPROVE */}
      <section className="buildband" id="ownership">
        <div className="wrap">
          <h2>What you own, and what you approve</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>You own</b>
              <span>
                The accounts, the stock, the capital, the supplier
                relationships and the brand. Everything is registered in your
                name from day one — there is nothing to hand back later,
                because we never held it.
              </span>
            </div>
            <div className="fee">
              <b>You approve</b>
              <span>
                Every material purchase, in writing, before it happens. We
                work under permissioned user access you can remove at any
                time from your own User Permissions page. Access without
                ownership, on both sides.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02b · RESPONSE TIMES AND DATA — [owner B6] service levels to
          confirm; if unsure, ship the first and third sentences only */}
      <section className="start" id="response-times">
        <div className="wrap">
          <h2>Response times and data.</h2>
          <p style={{ maxWidth: "70ch", marginBottom: 0 }}>
            Messages are answered within one working day. Account health
            notices are picked up the same working day. Weekly notes arrive on
            Fridays. Our users on your accounts have two-step verification and
            only the permissions the work needs. Your data is used only for
            your account.
          </p>
        </div>
      </section>

      {/* 03 · THE PRICING SNIPPET */}
      <section className="buildband" id="pricing">
        <div className="wrap">
          <h2>How much does an Amazon agency charge?</h2>
          <div className="snippet">
            <p>
              Most charge a retainer, a percentage of ad spend, or a
              percentage of revenue. A percentage of ad spend pays the agency
              more when you spend more, which is the conflict we avoid. We
              charge a fixed project fee for launch work and a fixed monthly
              fee for managed operations, agreed in writing before anything
              starts.
            </p>
          </div>
          <div className="fee-grid" style={{ marginTop: 26 }}>
            <div className="fee">
              <b>Launch projects — fixed fee</b>
              <span>
                Private label launch, account setup, listing optimization,
                Walmart US expansion. Scoped, priced and paid before we start,
                finishing on a date. Stock, tooling and advertising are your
                costs, paid by you directly.
              </span>
            </div>
            <div className="fee">
              <b>Managed operations — monthly fee</b>
              <span>
                The daily operation with a written report every month. Fixed
                regardless of your ad spend and your revenue, so growing the
                account never makes us more money for spending yours.
              </span>
            </div>
          </div>
          <p style={{ marginTop: 22, marginBottom: 0, maxWidth: "62ch" }}>
            The number depends on the scope — category, product count, one
            marketplace or two — which is why it is quoted on{" "}
            <a href="/contact" style={{ fontWeight: 600 }}>
              a twenty-minute call
            </a>
            , in writing. It changes only if the scope changes, and any change
            is agreed in writing first.
          </p>
        </div>
      </section>

      {/* 04 · IF IT DOES NOT WORK */}
      <section className="gate" id="exit">
        <div className="wrap">
          <h2>What happens if it does not work</h2>
          <div className="gate-grid">
            <div>
              <p>
                You keep the accounts, the stock, the listings and the
                documents. No lock-in that survives the relationship, no
                handover fee, no hostage data.
              </p>
              <p style={{ marginBottom: 0 }}>
                The services this method runs on:{" "}
                <a
                  href="/amazon-private-label"
                  style={{ color: "#d5e2e0", fontWeight: 600 }}
                >
                  private label
                </a>
                ,{" "}
                <a
                  href="/amazon-wholesale-management"
                  style={{ color: "#d5e2e0", fontWeight: 600 }}
                >
                  wholesale
                </a>
                ,{" "}
                <a
                  href="/amazon-walmart-management"
                  style={{ color: "#d5e2e0", fontWeight: 600 }}
                >
                  management
                </a>{" "}
                and{" "}
                <a
                  href="/amazon-listing-optimization"
                  style={{ color: "#d5e2e0", fontWeight: 600 }}
                >
                  listing optimization
                </a>{" "}
                and{" "}
                <a
                  href="/amazon-ppc-management"
                  style={{ color: "#d5e2e0", fontWeight: 600 }}
                >
                  PPC
                </a>
                .
              </p>
            </div>
            <div className="vsheet">
              <div className="hd">
                <span>WHEN YOU LEAVE</span>
                <span>DAY ONE RULE</span>
              </div>
              <div className="r">
                <span>Accounts</span>
                <b>YOURS</b>
              </div>
              <div className="r">
                <span>Stock and capital</span>
                <b>YOURS</b>
              </div>
              <div className="r">
                <span>Listings and documents</span>
                <b>YOURS</b>
              </div>
              <div className="r out">
                <span>Our access</span>
                <b>REMOVED BY YOU, ANY TIME</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq items={FAQS} heading="The pricing FAQ." />

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <h2>Get the number in writing.</h2>
          <p>
            Twenty minutes, your situation, and a fixed quote in writing.
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

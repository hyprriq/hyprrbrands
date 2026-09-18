import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";
import { entityLine } from "@/lib/company";

/**
 * About — PROMPT_26 §5. The intro is the two "Who runs Hyprr" paragraphs
 * from §3.3; the track record and the client names live here and only
 * here (never on the home page). No founder name, no Person schema, no
 * photograph (§2 copy rules).
 */
const TITLE = "About Hyprr Brands | Who Runs the Work";
const DESC =
  "Hyprr Brands is a founder-led ecommerce team operated by Hyprr Retail LLC in Easton, PA. Who does the work, where the team is, and the public track record.";
const PATH = "/about";

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
    ...ogImageMeta("about").openGraph,
  },
  ...{ twitter: ogImageMeta("about").twitter },
};

const UPWORK = "https://www.upwork.com/freelancers/~01a0049fc5f6a620ee";

/** §5 clients strip — [owner check] spelling and permission before ship. */
const CLIENTS = [
  "League of Ecomm",
  "Opticana",
  "Il Baltinester Jewellery",
  "Lotus Belle",
  "NBTA Ecomm Fund",
  "041 Agency",
  "Medicode",
  "MyShopping AU",
];

export default function Page() {
  return (
    <main id="main">
      <JsonLd
        nodes={[
          webPageLd({ path: PATH, title: TITLE, description: DESC }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: PATH },
          ]),
        ]}
      />

      {/* 01 · WHO RUNS HYPRR */}
      <section className="start">
        <div className="wrap">
          <h1>Who runs Hyprr Brands</h1>
          <div className="person no-photo">
            <div>
              <p>
                Hyprr Brands is a founder-led team that has worked in ecommerce
                since 2010 — wholesale, private label, and client accounts on
                Amazon and Walmart. The person on your first call is one of the
                people who will run the work.
              </p>
              <p>
                Most of our clients come through people we already work with.
                The site is here so you can see how we work before that first
                call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · TRACK RECORD — /about only, never the home page */}
      <section className="sec band-mint" id="track-record" data-feature="track-record">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Track record</div>
              <h2>Fifteen years of ecommerce work.</h2>
            </div>
            <p>
              Fifteen years of ecommerce work, most of it delivered for clients
              who found us through someone they trust. The public record is one
              click away: over 13,000 client hours on Upwork, and operating in
              ecommerce since 2010.
            </p>
          </div>
          <p style={{ marginTop: -16 }}>
            <a
              className="link-arrow"
              href={UPWORK}
              target="_blank"
              rel="noopener"
            >
              See the public record →
            </a>
          </p>
          <div className="kicker" style={{ marginTop: 40 }}>
            Our clientele
          </div>
          <ul className="client-chips" data-feature="client-chips">
            {CLIENTS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="client-more">and many more.</p>
        </div>
      </section>

      {/* 03 · HOW THE WORK IS COVERED */}
      <section className="buildband" id="coverage">
        <div className="wrap">
          <h2>How the work is covered</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>Who does what</b>
              <span>
                The founders make every buying call and every account-risk
                call personally. Listing content, advertising execution and
                inventory administration run to written procedures, so the
                work is inspectable and repeatable rather than dependent on
                memory.
              </span>
            </div>
            <div className="fee">
              <b>When the lead is not available</b>
              <span>
                The operation runs on documented procedures and a team across
                US, Asia-Pacific and Middle East time zones, so the work
                continues when your lead is not available. Buying pauses rather
                than proceeding without approval — nothing is ever bought to
                keep a schedule. You are told, not left wondering.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · WHERE WE WORK */}
      <section className="path" id="where">
        <div className="wrap">
          <h2>Marketplaces and hours</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>Marketplaces</b>
              <span>
                Amazon in the US, UK, Europe and the Middle East. Walmart in
                the US.
              </span>
            </div>
            <div className="fee">
              <b>Hours</b>
              <span>
                Clients across US, UK, Middle East and Asia-Pacific time zones
                — calls are scheduled in yours.
              </span>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            The team works from Easton and California in the US, Bangkok,
            Singapore, Hyderabad and Dubai.
          </p>
          <p style={{ marginBottom: 0 }}>{entityLine}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <h2>Talk to the people who do the work.</h2>
          <p>
            Twenty minutes, no deck, no handoff to a sales team — there is no
            sales team.
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

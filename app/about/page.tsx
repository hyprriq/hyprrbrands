import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, personLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";
import { entityLine } from "@/lib/company";

/**
 * About — one named operator (wireframe 01–03). Written in first
 * person. Photograph, prior role and LinkedIn are owner-gated (B2)
 * and render conditionally the day they arrive — no placeholder, no
 * stock photography, no generated faces (PROMPT_24 §1 #1).
 */
const TITLE = "About Hyprr Brands | Founder Gautam Naidu";
const DESC =
  "Hyprr Brands is run by founder Gautam Naidu, operated by Hyprr Retail LLC in Easton, PA. Who does the work, where the team is, how to reach us.";
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

/** Owner-gated fields render only when set (DEV_BRIEF §8). */
const OPERATOR = {
  name: "Gautam Naidu",
  role: "Founder — runs the operation",
  photo: "" as string, // e.g. "/images/gautam-naidu-portrait.webp"
  photoAlt: "",
  priorRole: "" as string,
  linkedin: "" as string,
};

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
          personLd({
            name: OPERATOR.name,
            jobTitle: OPERATOR.role,
            sameAs: OPERATOR.linkedin ? [OPERATOR.linkedin] : undefined,
          }),
        ]}
      />

      {/* 01 · THE OPERATOR */}
      <section className="start">
        <div className="wrap">
          <h1>Who runs Hyprr Brands</h1>
          <div className={OPERATOR.photo ? "person" : "person no-photo"}>
            {OPERATOR.photo ? (
              <div className="photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={OPERATOR.photo} alt={OPERATOR.photoAlt} />
              </div>
            ) : null}
            <div>
              <h2 style={{ fontSize: "clamp(22px,4.4vw,32px)" }}>
                {OPERATOR.name}
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 2 }}>
                {OPERATOR.role}
                {OPERATOR.priorRole ? ` · previously ${OPERATOR.priorRole}` : ""}
              </p>
              <p>
                I run the client work end to end: what gets bought, which
                accounts we take on, and the call on any purchase that could
                put an account at risk. When you book a call, it is me on it.
              </p>
              <p>
                I started Hyprr because of how this category charges. Most
                firms running Amazon accounts are paid on the money you deploy
                — the fee lands whether or not any of it sold. So we built the
                opposite: fixed fees agreed in writing,{" "}
                <a href="/how-we-work">a verdict before your money moves</a>,
                and a monthly report showing margin by product. The documents
                that method produces are{" "}
                <a href="/proof">on the proof page</a>, ungated.
              </p>
              {OPERATOR.linkedin ? (
                <p>
                  <a
                    href={OPERATOR.linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ fontWeight: 600 }}
                  >
                    LinkedIn →
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* 02 · HOW THE WORK IS COVERED */}
      <section className="buildband" id="coverage">
        <div className="wrap">
          <h2>How the work is covered</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>Who does what</b>
              <span>
                I make every buying call and every account-risk call
                personally. Listing content, advertising execution and
                inventory administration run to written procedures, so the
                work is inspectable and repeatable rather than dependent on
                memory.
              </span>
            </div>
            <div className="fee">
              <b>When I am not available</b>
              <span>
                The operation runs on documented procedures and a team across
                US, Asia-Pacific and Gulf time zones, so the work continues
                when I am not available. Buying pauses rather than proceeding
                without approval — nothing is ever bought to keep a schedule.
                You are told, not left wondering.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · WHERE WE WORK */}
      <section className="path" id="where">
        <div className="wrap">
          <h2>Marketplaces and hours</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>Marketplaces</b>
              <span>
                Amazon in the US, UK, Europe and the Gulf. Walmart in the US.
              </span>
            </div>
            <div className="fee">
              <b>Hours</b>
              <span>
                Clients across US, UK, Gulf and Asia-Pacific time zones — calls
                are scheduled in yours.
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
          <h2>Talk to the person who does the work.</h2>
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

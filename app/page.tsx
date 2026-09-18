import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Visual from "@/components/Visual";
import Phases from "@/components/home/Phases";
import StartRoutes from "@/components/home/StartRoutes";
import WhoRuns from "@/components/home/WhoRuns";
import { serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";
import { SITE_ORIGIN } from "@/lib/site-map";

/**
 * Homepage — ported from docs/v4/hyprr-homepage-v3-4.html (final
 * design and copy). Structure and strings lifted verbatim; the only
 * changes are wiring: real hrefs on the CTA buttons and one link to
 * /how-we-work per SITEMAP.md's link map.
 */
/* Keyword Map v2: the home page targets "ecommerce operations agency";
   "account management" belongs to /amazon-walmart-management. */
const TITLE = "Amazon and Walmart Ecommerce Operations Agency | Hyprr";
const DESC =
  "We build, run and grow businesses on Amazon (US, UK, EU) and Walmart US that stay in your name: private label, wholesale, management, listings and PPC.";

/* §7.1: the home canonical and og:url must be the origin WITH the
   trailing slash, matching the sitemap. Next's metadata resolver
   strips it for the root, so those two tags are rendered in the
   page tree (React hoists them into <head>) instead of via metadata. */
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
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
      <link rel="canonical" href={`${SITE_ORIGIN}/`} />
      <meta property="og:url" content={`${SITE_ORIGIN}/`} />
      <JsonLd
        nodes={[
          webPageLd({ path: "/", title: TITLE, description: DESC }),
          serviceLd({
            name: "Amazon and Walmart US account management",
            serviceType: "Marketplace management",
            path: "/amazon-walmart-management",
            description:
              "Amazon and Walmart account operations, run daily: catalog, growth, inventory and account health.",
          }),
        ]}
      />

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              Amazon + Walmart US · Management · Listings · PPC · Private label
              · Wholesale
            </span>
            {/* §6.1: text-wrap balance plus non-breaking spaces so "it."
                never wraps alone at 1280–1440 */}
            <h1>
              Build&nbsp;it. Run&nbsp;it. Scale&nbsp;it.
              <br />
              <span className="h1-sub">On Amazon and Walmart.</span>
            </h1>
            <p>
              We build, operate and grow businesses on Amazon and Walmart —
              from new marketplace launches to the daily operation. You own the
              accounts, the stock and every buying decision.
            </p>
            <div className="cta-row">
              <a className="btn dark" href="#start">
                See services →
              </a>
              <a className="btn ghost" href="#how">
                See how we work
              </a>
            </div>
          </div>
          {/* 15 Sep hero brief: static artwork base + lightweight
              animation layers (no GIF). Pulses ride the artwork's own
              connector lines; the hub breathes very slightly. Overlay
              is desktop-only and vanishes under prefers-reduced-motion.
              Mobile serves the dedicated 3:4 composition of the same
              artwork (its connector geometry differs, so pulses stay
              desktop-only for now). */}
          <link
            rel="preload"
            as="image"
            href="/img/home-hero-operation-1586.webp"
            media="(min-width: 761px)"
          />
          <link
            rel="preload"
            as="image"
            href="/img/home-hero-operation-mobile-1092.webp"
            media="(max-width: 760px)"
          />
          <figure className="heroimg hero-op" style={{ margin: 0 }}>
            <div className="hero-op-stage">
              <picture>
                <source
                  media="(max-width: 760px)"
                  srcSet="/img/home-hero-operation-mobile-1092.avif"
                  type="image/avif"
                  width={1092}
                  height={1440}
                />
                <source
                  media="(max-width: 760px)"
                  srcSet="/img/home-hero-operation-mobile-1092.webp"
                  type="image/webp"
                  width={1092}
                  height={1440}
                />
                <source
                  srcSet="/img/home-hero-operation-1586.avif"
                  type="image/avif"
                  width={1586}
                  height={992}
                />
                <img
                  src="/img/home-hero-operation-1586.webp"
                  width={1586}
                  height={992}
                  fetchPriority="high"
                  decoding="async"
                  alt="The Hyprr Brands operation — sourcing, private label, wholesale, advertising (PPC), account management, marketplaces, inventory and growth — connected to one hub"
                />
              </picture>
              {/* Traveling pulses along the artwork's connector routes.
                  Paths are calibrated to the 1586×992 composition. */}
              <svg
                className="hero-op-anim"
                viewBox="0 0 1586 992"
                aria-hidden="true"
              >
                {(
                  [
                    // [path, colour, first-fire] — inbound feeds,
                    // outbound results. Each route fires twice per 12s
                    // loop (offset +6s) so 2–3 pulses are always live.
                    ["M505 215 H548 V390 H652", "#66D7D0", 0],
                    ["M785 602 V648", "#6947FF", 0.75],
                    ["M928 472 H1100", "#D7F04A", 1.5],
                    ["M765 298 V342", "#66D7D0", 2.25],
                    ["M928 548 H1025 V645", "#6947FF", 3],
                    ["M505 472 H652", "#D7F04A", 3.75],
                    ["M1010 318 V390 H928", "#66D7D0", 4.5],
                    ["M652 548 H572 V640", "#6947FF", 5.25],
                  ] as const
                ).flatMap(([d, fill, b]) =>
                  [b, b + 6].map((begin) => (
                    <g key={`${d}-${begin}`} opacity="0">
                      <circle r="12" fill={fill} opacity="0.22" />
                      <circle r="7" fill={fill} />
                      <animateMotion
                        dur="12s"
                        repeatCount="indefinite"
                        begin={`${begin}s`}
                        calcMode="linear"
                        keyPoints="0;1;1"
                        keyTimes="0;0.2;1"
                        path={d}
                      />
                      <animate
                        attributeName="opacity"
                        dur="12s"
                        repeatCount="indefinite"
                        begin={`${begin}s`}
                        values="0;1;1;0;0"
                        keyTimes="0;0.02;0.17;0.2;1"
                      />
                    </g>
                  ))
                )}
              </svg>
              {/* Mobile overlay — separate calibration for the 3:4
                  composition, ~50% of desktop intensity (brief). */}
              <svg
                className="hero-op-anim-m"
                viewBox="0 0 1092 1440"
                aria-hidden="true"
              >
                {(
                  [
                    ["M543 400 V560", "#66D7D0", 0],
                    ["M310 703 H395", "#D7F04A", 1.2],
                    ["M543 862 V950", "#6947FF", 2.4],
                    ["M693 703 H768", "#D7F04A", 3.6],
                    ["M378 415 V540", "#66D7D0", 4.8],
                  ] as const
                ).flatMap(([d, fill, b]) =>
                  [b, b + 6].map((begin) => (
                    <g key={`${d}-${begin}`} opacity="0">
                      <circle r="10" fill={fill} opacity="0.22" />
                      <circle r="6" fill={fill} />
                      <animateMotion
                        dur="12s"
                        repeatCount="indefinite"
                        begin={`${begin}s`}
                        calcMode="linear"
                        keyPoints="0;1;1"
                        keyTimes="0;0.18;1"
                        path={d}
                      />
                      <animate
                        attributeName="opacity"
                        dur="12s"
                        repeatCount="indefinite"
                        begin={`${begin}s`}
                        values="0;1;1;0;0"
                        keyTimes="0;0.02;0.15;0.18;1"
                      />
                    </g>
                  ))
                )}
              </svg>
              <span className="hero-op-breath" aria-hidden="true" />
            </div>
          </figure>
        </div>
      </section>

      {/* §3.1 · one router replaces path, router-band, choice and services */}
      <StartRoutes />

      {/* §3.2 · the five phases replace "Five steps"; verdict sample and
          the loss section left the home page */}
      <Phases />

      {/* §3.3 · who runs Hyprr replaces the proof section */}
      <WhoRuns />

      {/* CLOSING BLOCK — kept, moved above the CTA per the target state */}
      <section className="closing">
        <div className="wrap tight">
          <h2>Amazon and Walmart operations, end to end</h2>
          <p style={{ maxWidth: "78ch", lineHeight: 1.7 }}>
            Hyprr Brands is an ecommerce operations team working across Amazon
            and Walmart US. We build{" "}
            <a href="/amazon-private-label">private label brands</a> from
            product research through sourcing, compliance and launch; we build
            and run <a href="/amazon-wholesale-management">Amazon wholesale</a>{" "}
            operations with authorized suppliers opened in the client&rsquo;s
            name; and we take over accounts that already sell through{" "}
            <a href="/amazon-walmart-management">Amazon and Walmart management</a>,
            covering catalog, inventory, pricing, cases and account health.
            Where one part is not working we run fixed-scope projects:{" "}
            <a href="/amazon-listing-optimization">listing optimization</a> and{" "}
            <a href="/amazon-ppc-management">PPC management</a> judged on margin
            rather than spend. We work with brand owners, manufacturers going
            direct, wholesale businesses and investors, on Amazon US, UK and
            Europe and on Walmart US, with a team across the United States,
            Asia-Pacific and the Middle East.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
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
            Brand owners. Investors putting capital into Amazon and Walmart
            businesses, wherever they are based. Manufacturers selling direct.
            Wholesale businesses. Sellers who already have an account and need
            it run. We work across US, UK, Middle East and Asia-Pacific hours.
          </div>
        </div>
      </section>

    </main>
  );
}

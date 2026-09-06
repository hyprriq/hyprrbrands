import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Listing optimization — the entry product. Small cheque, two weeks.
 * Built from the wireframes (sections 01–04). SEARCH_TERMS flags this
 * as the only page without a measured SERP behind it — the SERP read
 * stays on the owner's list; structure follows the wireframe.
 */
const TITLE = "Amazon Listing Optimization Service | Fixed Price — Hyprr";
const DESC =
  "Research, content, conversion and indexing on the listings you already have. Fixed price, two weeks, and you keep the document either way.";
const PATH = "/amazon-listing-optimization";

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
    ...ogImageMeta("amazon-listing-optimization").openGraph,
  },
  ...{ twitter: ogImageMeta("amazon-listing-optimization").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

const FAQS = [
  {
    q: "What does Amazon listing optimization include?",
    a: "An audit of the listing as it stands, keyword and competitor research, rewritten title, bullets and description, image and A+ recommendations, backend search terms, and implementation. You receive the audit and the revised listing as a document you keep either way.",
  },
  {
    q: "How long does it take?",
    a: "Two weeks from access to implementation. The first week is research and the audit; the second is the rewrite, your review and the changes going live. It is a project with an end date, not a retainer.",
  },
  {
    q: "Will it improve ranking or just conversion?",
    a: "Both are worked on, in order. Indexing and relevance decide whether the listing can rank; content and images decide whether the traffic converts. A listing that converts better tends to rank better afterwards, which is why conversion comes first in the work.",
  },
  {
    q: "Do you rewrite A+ content as well?",
    a: "Yes — layout, modules and copy, with image briefs your designer or ours can execute. Where Brand Registry is missing we tell you, because A+ is not available without it.",
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
            { name: "Listing optimization", path: PATH },
          ]),
          serviceLd({
            name: "Amazon listing optimization service",
            serviceType: "Listing optimization",
            path: PATH,
            description: DESC,
          }),
        ]}
      />

      {/* 01 · HERO — the before-and-after is the visual */}
      <section className="plhero">
        <div className="wrap plhero-grid">
          <div>
            <span className="eyebrow">Listing optimization / project</span>
            <h1>Your listing is where traffic becomes revenue.</h1>
            <p>
              Fixed price, two weeks. Research, content, conversion and
              indexing on the listings you already have — and a document you
              keep either way.
            </p>
            <div className="plchips">
              <span className="chip">PROJECT</span>
              <span className="chip">FIXED PRICE</span>
              <span className="chip">TWO WEEKS</span>
            </div>
            <div className="cta-row">
              <a className="btn cit" href={BOOKING}>
                Book a call
              </a>
              <a className="btn line-l" href="#before-after">
                See a before and after
              </a>
            </div>
          </div>
          <figure className="heroimg" style={{ margin: 0 }}>
            <picture>
              <source
                media="(max-width: 760px)"
                srcSet="/img/listing-before-after-mobile-1080.webp"
                type="image/webp"
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

      {/* 02 · WHAT WE OPTIMIZE */}
      <section className="start" id="scope">
        <div className="wrap">
          <span className="eyebrow">The scope</span>
          <h2>What we optimize</h2>
          <div className="ops light" style={{ marginTop: 22 }}>
            <div className="op">
              <b>Research</b>
              <span>
                Keywords, competitors and the search terms the listing should
                be indexed for
              </span>
            </div>
            <div className="op">
              <b>Content</b>
              <span>
                Title, bullets, description and A+ — written against the
                research, not taste
              </span>
            </div>
            <div className="op">
              <b>Conversion</b>
              <span>
                Images, infographics and the order a shopper actually reads
                the page in
              </span>
            </div>
            <div className="op">
              <b>Indexing</b>
              <span>
                Backend search terms, attributes and variations — so the
                content can be found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · BEFORE AND AFTER */}
      <section className="buildband" id="before-after">
        <div className="wrap">
          <span className="eyebrow">The whole page rests on this</span>
          <h2>Before and after, annotated.</h2>
          <div className="ba">
            <div className="before">
              <span className="tag">BEFORE</span>
              <h3>The listing as it arrived</h3>
              <ul>
                <li>Keyword-stuffed title with no dimensions</li>
                <li>Three generic bullets that fit any product</li>
                <li>3 images, no A+ content</li>
                <li>Indexed for 19 search terms</li>
              </ul>
            </div>
            <div className="after">
              <span className="tag">AFTER · 14 DAYS</span>
              <h3>The same listing, rebuilt</h3>
              <ul>
                <li>The format named and the size stated in the title</li>
                <li>Bullets that each carry one fact a buyer needs</li>
                <li>7 images, A+ live</li>
                <li>Indexed for 64 search terms, none of them wasted</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: 18, marginBottom: 0 }}>
            <span className="label-note">
              Illustrative sample — the full pair is on{" "}
            </span>
            <a href="/proof" style={{ fontWeight: 600 }}>
              the proof page →
            </a>
          </p>
        </div>
      </section>

      {/* 04a · WHAT YOU RECEIVE */}
      <section className="path" id="deliverables">
        <div className="wrap">
          <span className="eyebrow">What you receive</span>
          <h2>A document you keep either way.</h2>
          <div className="path-grid">
            <div className="path-item">
              <div className="dot">01</div>
              <b>Audit</b>
              <p>The listing as it stands, scored, with what is costing you.</p>
            </div>
            <div className="path-item">
              <div className="dot">02</div>
              <b>Recommendations</b>
              <p>What changes, why, and in what order.</p>
            </div>
            <div className="path-item">
              <div className="dot">03</div>
              <b>Revised listing</b>
              <p>Title, bullets, description, backend terms — written out.</p>
            </div>
            <div className="path-item">
              <div className="dot">04</div>
              <b>Implementation</b>
              <p>Changes live in your account, with you watching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04b · UPGRADE PATH */}
      <section className="handover" id="upgrade">
        <div className="wrap">
          <span className="eyebrow">If listings are not the only problem</span>
          <div className="handover-grid">
            <div>
              <h2>Management picks up where the project ends.</h2>
            </div>
            <div>
              <p>
                A listing project fixes the page. If the account behind it
                needs running — inventory, advertising, cases, account health
                — that is managed operations, run by the same people who did
                the listing work.
              </p>
              <p style={{ marginBottom: 0 }}>
                <a
                  href="/amazon-walmart-management#listings"
                  style={{ color: "#fff", fontWeight: 600 }}
                >
                  Amazon and Walmart management →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq items={FAQS} />

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <span className="eyebrow">Next step</span>
          <h2>Send us the listing.</h2>
          <p>
            An ASIN is enough. We will tell you what we would change and what
            it costs — fixed, in writing, before anything starts.
          </p>
          <div className="cta-row">
            <a className="btn onpetrol" href={BOOKING}>
              Book a call
            </a>
            <a className="btn line-l" href="/contact#form">
              Send the ASIN instead
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

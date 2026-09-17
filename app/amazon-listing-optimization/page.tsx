import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import Visual from "@/components/Visual";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Listing optimization — the entry product. Small cheque, two weeks.
 * v4 structure from the wireframes; copy and section order per
 * PROMPT_24 §4.5 (final, edited): scope of one project, A+ and Brand
 * Story, compliance before copy, how you know it worked, other
 * marketplaces. Hero is visual 19; the before/after is visual 07.
 * [owner B4] "from $X per parent ASIN" is not published until confirmed.
 */
const TITLE = "Amazon Listing Optimization, Fixed Price | Hyprr Brands";
const DESC =
  "A fixed-price rebuild of your Amazon and Walmart US listings: keywords, copy, images, A+ and backend terms. You keep the audit either way.";
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
    q: "How much does it cost?",
    a: "A fixed price per parent ASIN, quoted in writing before we start. It does not change unless the scope changes.",
  },
  {
    q: "Do you produce the images?",
    a: "The quote says which: briefed for your designer, or produced by us.",
  },
  {
    q: "Can you get Premium A+ for my brand?",
    a: "Amazon decides eligibility. We check yours first and plan standard A+ if you don't qualify yet.",
  },
  {
    q: "Do you optimize Walmart listings?",
    a: "Yes, for Walmart US, working against the Listing Quality score.",
  },
  {
    q: "How will I know it worked?",
    a: "A 30- and 60-day comparison of sessions, conversion and search query performance against the 30 days before.",
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

      {/* 1 · HERO — visual 19 (master in a card: petrol band) */}
      <section className="plhero">
        <div className="wrap plhero-grid">
          <div>
            <span className="eyebrow">Listing optimization / project</span>
            <h1>Your listing is where traffic becomes revenue.</h1>
            <p>
              Fixed price, two weeks. Research, content, conversion and
              indexing on the listings you already have, and a document you
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
          <Visual
            variant="hero"
            onDark
            name="amazon-listing-optimization/hero-listing-anatomy"
            alt="An Amazon listing with seven numbered parts (title, images, bullets, variations, compliance, A+ content and backend search terms) and a Walmart Listing Quality panel"
          />
        </div>
      </section>

      {/* 2 · WHAT WE OPTIMIZE */}
      <section className="start" id="scope">
        <div className="wrap">
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
                Title, bullets, description and A+, written against the
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
                Backend search terms, attributes and variations, so the
                content can be found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · WHAT ONE PROJECT COVERS */}
      <section className="buildband" id="one-project">
        <div className="wrap">
          <h2>What one project covers.</h2>
          <p style={{ maxWidth: "70ch" }}>
            A fixed price per parent ASIN, quoted in writing before we start,
            covering the parent and its variations. One round of your
            revisions is included. The quote states whether images are briefed
            for your designer or produced by us.
          </p>
          <p style={{ maxWidth: "70ch", marginBottom: 0 }}>
            <b>What we need from you:</b> Brand Registry access, product
            specifications, compliance documents, your existing image files
            and your target margin. An ASIN is enough to get a quote.
          </p>
        </div>
      </section>

      {/* 4 · BEFORE AND AFTER — visual 07 */}
      <section className="start" id="before-after">
        <div className="wrap">
          <h2>Before and after, annotated.</h2>
          <Visual
            name="amazon-listing-optimization/before-after-annotated"
            alt="The same Amazon listing before and after: a dim photo, stuffed title and three generic bullets, rebuilt with a clear title, five factual bullets, seven images and A+ content; indexed terms rise from 19 to 64"
          />
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
              Illustrative sample. The full pair is on{" "}
            </span>
            <a href="/proof#listing" style={{ fontWeight: 600 }}>
              the proof page →
            </a>
          </p>
        </div>
      </section>

      {/* 5 · WHAT YOU RECEIVE */}
      <section className="path" id="deliverables">
        <div className="wrap">
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
              <p>Title, bullets, description, backend terms, written out.</p>
            </div>
            <div className="path-item">
              <div className="dot">04</div>
              <b>Implementation</b>
              <p>Changes live in your account, with you watching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · A+, PREMIUM A+ AND BRAND STORY */}
      <section className="buildband" id="a-plus">
        <div className="wrap">
          <h2>A+, Premium A+ and Brand Story.</h2>
          <p style={{ maxWidth: "70ch", marginBottom: 0 }}>
            A+ content needs Brand Registry. Premium A+ has extra eligibility
            rules that Amazon sets and changes, so your account is checked
            before modules are planned. Brand Story appears across every ASIN
            in the brand, so it is written once for the catalog. If Amazon
            rejects a module, we revise and resubmit within the project.
          </p>
        </div>
      </section>

      {/* 7 · COMPLIANCE BEFORE COPY */}
      <section className="start" id="compliance">
        <div className="wrap">
          <h2>Compliance before copy.</h2>
          <p style={{ maxWidth: "70ch", marginBottom: 0 }}>
            A suppressed listing converts nothing. Before rewriting, we check
            the category style guide, the required attributes and the claims
            Amazon restricts, such as unapproved health or pesticide claims.
            Anything that puts the listing at risk comes out first, even if it
            was selling.
          </p>
        </div>
      </section>

      {/* 8 · HOW YOU WILL KNOW IT WORKED */}
      <section className="buildband" id="measurement">
        <div className="wrap">
          <h2>How you will know it worked.</h2>
          <p style={{ maxWidth: "70ch", marginBottom: 0 }}>
            Sessions, unit session percentage and search query performance are
            compared for the 30 days before and the 30 and 60 days after the
            change. Where the brand has Manage Your Experiments, the new title
            or main image is tested against the old one instead of guessed.
          </p>
        </div>
      </section>

      {/* 9 · OTHER MARKETPLACES — [owner B8] per-marketplace writing, no
          translation promise */}
      <section className="start" id="marketplaces">
        <div className="wrap">
          <h2>UK, Europe, the Gulf and Walmart US.</h2>
          <p style={{ maxWidth: "70ch", marginBottom: 0 }}>
            Listings for Amazon UK, Europe and the Gulf are written for each
            marketplace, not copied across. On Walmart US, listings are rebuilt
            against Walmart&apos;s Listing Quality score, which weighs content,
            discoverability, offer, and ratings and reviews.
          </p>
        </div>
      </section>

      {/* 10 · UPGRADE PATH */}
      <section className="handover" id="upgrade">
        <div className="wrap">
          <div className="handover-grid">
            <div>
              <h2>Management picks up where the project ends.</h2>
            </div>
            <div>
              <p>
                When the project ends, the listing needs someone watching it.
                Management keeps the content, the advertising and the stock in
                line with what the rebuild set up. It is optional, and the
                audit document is yours either way.
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

      {/* 11 · FAQ */}
      <Faq
        items={FAQS}
        heading="Clear answers before the call."
        intro="The short version of what a listing project involves, and what it costs."
      />

      {/* 12 · CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <h2>Send us the listing.</h2>
          <p>
            An ASIN is enough. We will tell you what we would change and what
            it costs: fixed, in writing, before anything starts.
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

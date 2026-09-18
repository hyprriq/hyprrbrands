import type { Metadata } from "next";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import RouteTabs from "@/components/RouteTabs";
import Visual from "@/components/Visual";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * How we work — PROMPT_26 §4, built in full from the approved preview
 * (reference/how_we_work_preview.html). Where the ticket and the preview
 * disagree the ticket wins: the fee section is "Three ways to work with
 * us" and the FAQ fee answer names the three structures. The old "five
 * steps in full", the verdict sample and the pricing snippet are gone.
 */
const TITLE = "How We Work | Amazon and Walmart Operations | Hyprr";
const DESC =
  "We start with where your business is: understand, diagnose, plan, execute, review. Routes for new brands, existing accounts and fixed projects.";
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
    q: "How soon can you start?",
    a: "The first call is usually within two working days. A diagnosis takes one to two weeks, and work starts once you approve the plan.",
  },
  {
    q: "Do you need my Seller Central password?",
    a: "No. You add us as a user with limited permissions, and you can remove us yourself at any time.",
  },
  {
    q: "What if I only need one thing fixed?",
    a: "That runs as a fixed-scope project, such as a listing rebuild or an advertising audit. It ends on a date, and you keep the audit either way.",
  },
  {
    q: "Do you work with businesses outside the US?",
    a: "Yes. Amazon in the US, UK and Europe, and Walmart in the US, for owners based anywhere.",
  },
  {
    q: "How are the fees set?",
    a: "By scope, after the diagnosis. There are three structures: a fixed-price project, monthly management from $800 a month, or a launch quoted to your plan. We never take a share of your ad spend, revenue or capital.",
  },
];

/** §4.3 — the five phases, three columns per row. */
const PHASES = [
  {
    n: "01",
    accent: "var(--violet)",
    name: "Understand",
    lead: "We start with your business, not a package.",
    look: {
      label: "What we look at",
      items: [
        "Your business model, products and category",
        "Where you sell today, and how it is going",
        "Your goals, budget and the capital available for stock",
        "Your team, and what you want us to own",
      ],
    },
    facts: [
      ["You get", "A straight answer on fit, and who would lead the work"],
      ["Your part", "30–45 minutes and honest numbers"],
      ["Timing", "The first call, within two working days"],
    ],
  },
  {
    n: "02",
    accent: "var(--aqua)",
    name: "Diagnose",
    lead: "We find out what is actually happening.",
    split: [
      {
        label: "A new business",
        items: [
          "The product opportunity and competition",
          "Landed cost and marketplace fees",
          "Sourcing and compliance",
          "The total investment, in writing",
        ],
      },
      {
        label: "An existing business",
        items: [
          "Sales and margin by product",
          "Catalog, listings and pricing",
          "Inventory and advertising",
          "Account health and operating gaps",
        ],
      },
    ],
    facts: [
      ["You get", "A written diagnosis with a realistic view, including what we would not do"],
      ["Your part", "Read-only access, or your numbers"],
      ["Timing", "One to two weeks"],
    ],
  },
  {
    n: "03",
    accent: "var(--citrus)",
    name: "Plan",
    lead: "What your business needs first, what comes next, what it costs and what we measure.",
    look: {
      label: "Four stages",
      items: [
        ["Foundation.", "Access, catalog, compliance, the basics that everything else depends on"],
        ["Execution.", "The first products, orders or fixes"],
        ["Optimization.", "Listings, advertising and stock tuned on real data"],
        ["Growth.", "More products, more marketplaces, more capacity"],
      ],
    },
    facts: [
      ["You get", "A phased plan with scope, fee and the numbers we report on"],
      ["Your part", "Approve the plan in writing"],
      ["Timing", "About a week"],
    ],
  },
  {
    n: "04",
    accent: "var(--coral)",
    name: "Execute",
    lead: "The service changes. The operating discipline does not.",
    look: {
      label: "Depending on the route",
      items: [
        ["Private label.", "Research, development, sourcing, packaging, launch"],
        ["Wholesale.", "Suppliers, catalog, buying, inventory, replenishment"],
        ["Existing account.", "Catalog, listings, inventory, advertising, cases, account health"],
        ["Project.", "Audit, rebuild, implement, validate"],
      ],
    },
    facts: [
      ["You get", "A note every Friday on what moved and what is next"],
      ["Your part", "Approve purchases in writing. Pay suppliers and ad spend directly"],
    ],
  },
  {
    n: "05",
    accent: "var(--sky)",
    name: "Review and scale",
    lead: "We measure what happened, decide what changes, and put more behind what works.",
    look: {
      label: "What we review",
      items: [
        "Margin by product, inventory and conversion",
        "Advertising against margin",
        "Catalog health",
        "New products, new marketplaces, new channels",
      ],
    },
    facts: [
      ["You get", "A monthly report and call. The plan reviewed every quarter"],
      ["Then", "Back to phase 03, with better numbers"],
    ],
  },
] as const;

type Item = string | readonly [string, string];
function Items({ items }: { items: readonly Item[] }) {
  return (
    <ul>
      {items.map((it) =>
        typeof it === "string" ? (
          <li key={it}>{it}</li>
        ) : (
          <li key={it[0]}>
            <b>{it[0]}</b> {it[1]}
          </li>
        )
      )}
    </ul>
  );
}

/** §4.4 — the three routes, four timeline cards each. */
function Timeline({
  cards,
}: {
  cards: { when: string; title: string; body: string; you: string }[];
}) {
  return (
    <div className="timeline">
      {cards.map((c) => (
        <div className="tl" key={c.title}>
          <div className="when">{c.when}</div>
          <b>{c.title}</b>
          <p>{c.body}</p>
          <div className="you">{c.you}</div>
        </div>
      ))}
    </div>
  );
}

const ROUTES = [
  {
    id: "new",
    title: "New business",
    cards: [
      { when: "Weeks 1–4", title: "Research and verdict", body: "Demand, competition, landed cost and compliance, written up as a verdict.", you: "You decide: go or no-go" },
      { when: "Weeks 4–8", title: "Suppliers and samples", body: "Private label: samples and a spec. Wholesale: supplier accounts and approvals.", you: "You sign the spec or the supplier terms" },
      { when: "Around day 60–90", title: "First order", body: "Deliberately small, modeled line by line, placed in your name.", you: "You approve the order in writing" },
      { when: "After that", title: "Production, freight, launch", body: "The quiet weeks. You still get a note every Friday.", you: "You release the balance after inspection" },
    ],
    aside: (
      <>
        <span>
          Private label launches take months, not days. Wholesale moves faster
          once suppliers approve you.
        </span>
        <span className="route-links">
          <a className="link-arrow" href="/amazon-private-label">
            Private label path →
          </a>
          <a className="link-arrow" href="/amazon-wholesale-management">
            Wholesale cycle →
          </a>
        </span>
      </>
    ),
  },
  {
    id: "existing",
    title: "Existing business",
    cards: [
      { when: "Days 1–14", title: "Access and baseline", body: "You add us as a user. We rebuild the numbers: margin by product, stock, ads, account health.", you: "You get the baseline in writing" },
      { when: "Days 15–30", title: "Stabilize", body: "Stop the leaks: suppressed listings, stock-outs, wasted ad spend, open cases.", you: "No big restructures yet" },
      { when: "Days 31–60", title: "Rebuild", body: "Campaign structure, top listings, the inventory plan.", you: "You sign the 60-day plan" },
      { when: "Days 61–90", title: "Grow what works", body: "More budget behind what is proven. Walmart US if it fits.", you: "Quarterly plan agreed" },
    ],
    aside: (
      <>
        <span>
          <b>In the first 30 days we do not</b> launch new products, rebuild
          every campaign, or change what is working before we have the
          numbers.
        </span>
        <span className="route-links">
          <a className="link-arrow" href="/amazon-walmart-management#first-30-days">
            Management, first 30 days →
          </a>
        </span>
      </>
    ),
  },
  {
    id: "project",
    title: "Specific project",
    cards: [
      { when: "Days 1–3", title: "Scope and price", body: "Fixed scope and a fixed price, in writing, before we start.", you: "You approve the quote" },
      { when: "Week 1", title: "Audit", body: "What is wrong, ranked by what it costs you.", you: "You get the audit either way" },
      { when: "Weeks 1–2", title: "Rebuild and implement", body: "Listings, images and A+, or the campaign structure.", you: "One round of your revisions" },
      { when: "Days 30 and 60", title: "Validate", body: "Sessions, conversion and search terms against the 30 days before.", you: "Optional: hand over to management" },
    ],
    aside: (
      <>
        <span>
          Projects end on a date. If you want the account run afterwards, it
          moves into management.
        </span>
        <span className="route-links">
          <a className="link-arrow" href="/amazon-listing-optimization">
            Listing optimization →
          </a>
          <a className="link-arrow" href="/amazon-ppc-management">
            PPC management →
          </a>
        </span>
      </>
    ),
  },
];

/** §4.9 — the documents. Templates, never client work. */
const DOCUMENTS = [
  ["Product verdict", "The research behind an approve, review or reject decision, with the numbers it was based on."],
  ["Landed cost model", "Unit cost to unit profit: production, freight, duty, marketplace fees, returns and advertising."],
  ["Purchase order", "What is being bought, from whom, at what cost, with your approval recorded against it."],
  ["Monthly report", "Margin by product, what changed, what we are doing next."],
] as const;

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

      {/* 1 · HERO */}
      <section className="sec hww-hero" data-feature="hww-hero">
        <div className="wrap tight">
          <div>
            <div className="kicker">How we work</div>
            <h1>We start with where your business actually is.</h1>
          </div>
          <div>
            <p className="lead">
              Whether you are launching a brand, building wholesale or handing
              over an account that already sells, the first job is the same:
              understand what you have, where you want to go, what you can
              invest and what is in the way. The plan comes after that.
            </p>
            <div className="cta-row">
              <a className="btn dark" href={BOOKING}>
                Book a call
              </a>
              <a className="btn ghost" href="#routes">
                Find your route
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · ENGAGEMENT MAP */}
      <section className="sec flush-top" data-feature="engagement-map">
        <div className="wrap tight">
          <Visual
            name="how-we-work/engagement-map-plate"
            caption={null}
            alt="Three starting points lead into Understand, Diagnose and Plan, then four execution routes (private label, wholesale, existing account, project), then review and scale, which loops back to the plan each quarter."
          />
        </div>
      </section>

      {/* 3 · THE FIVE PHASES */}
      <section className="sec flush-top" id="phases" data-feature="hww-phases">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">The five phases</div>
              <h2>What happens, what you get, what we need from you.</h2>
            </div>
            <p>
              The same five phases on every engagement. What changes is what
              we look at in each one.
            </p>
          </div>
          <div className="rows5">
            {PHASES.map((p) => (
              <div
                className="row5"
                key={p.n}
                style={{ ["--accent" as string]: p.accent }}
              >
                <div>
                  <div className="n" aria-hidden="true">
                    {p.n}
                  </div>
                  <h3>{p.name}</h3>
                  <p className="lead">{p.lead}</p>
                </div>
                {"split" in p ? (
                  <div className="cols2">
                    {p.split.map((s) => (
                      <div key={s.label}>
                        <div className="lbl">{s.label}</div>
                        <Items items={s.items} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <div className="lbl">{p.look.label}</div>
                    <Items items={p.look.items} />
                  </div>
                )}
                <div className="facts">
                  {p.facts.map(([k, v]) => (
                    <div key={k}>
                      <div className="lbl">{k}</div>
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · YOUR FIRST 90 DAYS, BY STARTING POINT */}
      <section className="sec band-mint" id="routes" data-feature="hww-routes">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Routes</div>
              <h2>Your first 90 days, by starting point.</h2>
            </div>
            <p>
              Each service page has the full process. This is the shape of
              the first three months.
            </p>
          </div>
          <RouteTabs
            label="Starting point"
            tabs={ROUTES.map((r) => ({
              id: r.id,
              title: r.title,
              panel: (
                <>
                  <Timeline cards={r.cards} />
                  <div className="aside">{r.aside}</div>
                </>
              ),
            }))}
          />
        </div>
      </section>

      {/* 5 · CADENCE */}
      <section className="sec dark" id="cadence" data-feature="hww-cadence">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Cadence</div>
              <h2>How the work runs, week to week.</h2>
            </div>
            <p>A fixed rhythm, so nothing depends on someone remembering to look.</p>
          </div>
          <div className="cells4">
            <div className="cell">
              <div className="when">Daily</div>
              <b>Account health, stock and pricing</b>
              <p>Notices picked up the same working day.</p>
            </div>
            <div className="cell">
              <div className="when">Every Friday</div>
              <b>A written note</b>
              <p>What moved, what is next, what we need from you.</p>
            </div>
            <div className="cell">
              <div className="when">Monthly</div>
              <b>Report and call</b>
              <p>Margin by product, what changed, the next test.</p>
            </div>
            <div className="cell">
              <div className="when">Quarterly</div>
              <b>The plan, reviewed</b>
              <p>What earns more budget, what earns less, what is next.</p>
            </div>
          </div>
          <p className="footline">Messages answered within one working day.</p>
        </div>
      </section>

      {/* 6 · WHEN IT GOES WRONG */}
      <section className="sec" id="when-it-goes-wrong">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">When it goes wrong</div>
              <h2>What we do when something breaks.</h2>
            </div>
            <p>
              Things go wrong on marketplaces. What matters is how early you
              hear about it and what happens next.
            </p>
          </div>
          <div className="cells3">
            <div className="cell">
              <div className="when">Account notice</div>
              <b>Same-day response, with evidence</b>
              <p>
                Listing-level notices are answered with your invoices and
                records. For a full deactivation, you hear on day one whether
                we should write the appeal.
              </p>
            </div>
            <div className="cell">
              <div className="when">Supplier or sample fails</div>
              <b>A second option, before money moves</b>
              <p>
                A failed sample or test stops the order. We bring the next
                supplier, with the cost of switching.
              </p>
            </div>
            <div className="cell">
              <div className="when">A product misses the plan</div>
              <b>Recalibrate, or stop</b>
              <p>
                At the agreed review we change the plan or recommend stopping.
                You decide, with the numbers in front of you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · WHAT STAYS YOURS / WHAT WE NEED FROM YOU */}
      <section className="sec flush-top" id="ownership">
        <div className="wrap tight two-cols">
          <div>
            <div className="kicker">What stays yours</div>
            <h2>You own everything we build.</h2>
            <p>
              The accounts, the stock, the capital, the supplier relationships,
              the brand, the listings and the reports. All registered to you
              from day one. If we stop working together, you remove our access
              and keep all of it.
            </p>
          </div>
          <div>
            <div className="kicker">What we need from you</div>
            <h2>Access, numbers and decisions.</h2>
            <p>
              User access to each account (never your password), your costs
              and supplier terms, capital for stock and ad spend paid directly,
              and replies on approvals within a couple of working days.
            </p>
          </div>
        </div>
      </section>

      {/* 8 · THREE WAYS TO WORK WITH US */}
      <section className="sec band-mint" id="fees" data-feature="hww-fees">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">How we charge</div>
              <h2>Three ways to work with us.</h2>
            </div>
            <p>
              Which one fits is decided on the call, after the diagnosis, and
              it is in writing before anything starts.
            </p>
          </div>
          <div className="cells3">
            <div className="cell">
              <b>A fixed-price project</b>
              <p>
                One job, one price, agreed before it starts. A listing rebuild,
                an advertising audit, a Walmart setup.
              </p>
            </div>
            <div className="cell">
              <b>Monthly management</b>
              <p>We run the account or the store. From $800 a month, terms apply.</p>
            </div>
            <div className="cell">
              <b>A launch, quoted to the plan</b>
              <p>
                For a new brand or a new wholesale operation: the fee depends
                on the plan we agree after the diagnosis. Quoted after the
                call, in writing before anything starts.
              </p>
            </div>
          </div>
          <div className="fee-lines">
            <p>
              We never take a percentage of your ad spend, your revenue or your
              capital. Stock, freight, testing and advertising are paid by you,
              directly, at cost.
            </p>
            <p>
              Which of the three fits your business is decided on the call, and
              it is in writing before anything starts.
            </p>
          </div>
        </div>
      </section>

      {/* 9 · WHAT YOU RECEIVE */}
      <section className="sec" id="documents" data-feature="hww-documents">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">What you receive</div>
              <h2>The documents that come with the work</h2>
            </div>
            <p>
              Every engagement produces the same written record. These are the
              templates — the figures in them are illustrative.
            </p>
          </div>
          <div className="receive">
            {DOCUMENTS.map(([title, body]) => (
              <div className="doc-card" key={title}>
                <div className="doc-glyph" aria-hidden="true" />
                <b>{title}</b>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <div className="receive-cap">
            <span>Illustrative examples. Every figure in these templates is made up.</span>
            <a className="link-arrow" href="/proof">
              See them in full →
            </a>
          </div>
        </div>
      </section>

      {/* 10 · WHO WE ARE NOT A FIT FOR */}
      <section className="sec flush-top" id="fit">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Fit</div>
              <h2>Who we are not a fit for.</h2>
            </div>
            <p>Saying this early saves both of us time.</p>
          </div>
          <ul className="list2">
            <li>Anyone looking for passive income or a guaranteed return</li>
            <li>Businesses that will not share their numbers</li>
            <li>Sellers who want shortcuts: bought reviews, bought invoices</li>
            <li>Launches without the capital to reorder</li>
          </ul>
        </div>
      </section>

      {/* 11 · FAQ — exactly five; JSON-LD from the same strings */}
      <Faq items={FAQS} heading="Before the call." kicker="Questions" />

      {/* 12 · CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <h2 className="h2-lg">Tell us where you are starting.</h2>
          <p>Twenty minutes. We come with a view rather than a questionnaire.</p>
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

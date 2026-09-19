import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import Visual from "@/components/Visual";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Private label — restructured per PROMPT_33: seven sections, 40–80
 * words of body each, the method kept off the page. Order: hero ·
 * four ways in · selection · the eight stages (#lifecycle) · economics
 * · channels · timing, then the definition snippet (the search
 * answer), the FAQ (seven, FAQPage from the same strings) and the CTA.
 * Copy is final and pasted as written. The URL, title, meta and H1 do
 * not change.
 */
const TITLE = "Private Label Brand Development | Amazon and DTC | Hyprr";
const DESC =
  "We build private label brands from an idea, an existing product or an opportunity we find: research, development, sourcing, launch and the operation after.";
const PATH = "/amazon-private-label";

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
    ...ogImageMeta("amazon-private-label", [
      "/og/og-amazon-private-label-compliance-gates.png",
    ]).openGraph,
  },
  ...{ twitter: ogImageMeta("amazon-private-label").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

const FAQS = [
  {
    q: "What compliance does a private label product need before it sells in the US?",
    a: "It depends on the category, and we confirm it before the purchase order. Children's products need CPSC-accepted lab testing and a Children's Product Certificate. Supplements need FDA-compliant labels and, on Amazon, third-party verification. Radio devices need FCC authorization, and pest or germ claims need EPA registration. The testing cost goes into the verdict, so you see it before you approve an order.",
  },
  {
    q: "Do I need a trademark before launching?",
    a: "You need one filed before you can enrol in Amazon Brand Registry, which is how you control your listing content and report copies. A filed application is enough to start. We check the name for conflicts first. The filing and your GS1 barcodes are registered to your business.",
  },
  {
    q: "Who is the importer, and who pays duty?",
    a: "Your business is the importer of record, so the customs bond, the duty and the product certificates are in your name. We coordinate the broker and forwarder and check the paperwork before goods ship.",
  },
  {
    // Dev note (PROMPT_24): after 2 Nov 2026, change "From 2 November
    // 2026, Amazon requires" to "Since 2 November 2026, Amazon has
    // required". [verify] — owner confirms in Seller Central (B7).
    q: "Do I need product liability insurance from the start?",
    a: "Often, yes. Amazon requires commercial liability cover once a seller passes its monthly sales threshold. From 2 November 2026, Amazon requires that cover from the first sale in 11 categories, including children's products, supplements, cosmetics and lithium battery products. Walmart has its own insurance policy. We check both against your policy before launch.",
  },
  {
    q: "How do you get the first reviews?",
    a: "Through Amazon's own programs, such as Vine where the listing qualifies, and through a product that earns them. We don't use review groups, rebates, or giveaways in exchange for reviews. They put the account at risk, and the account is yours.",
  },
  {
    q: "I already have a brand that sells. Is this still for me?",
    a: "Yes, and it starts differently: a diagnosis of the catalog and the economics before anything is built, then the products and channels that the existing business has earned.",
  },
  {
    q: "Who owns the brand, the IP and the accounts?",
    a: "You do, from the first day. The trademark is filed in your name, the marketplace accounts are registered to you, and the supplier relationships are yours. You can remove our access yourself at any time.",
  },
];

/** §6.2 — the four ways in. */
const WAYS_IN = [
  {
    tag: "You have the idea",
    accent: "var(--violet)",
    h3: "\u201cI know what I want to build.\u201d",
    body: "We pressure-test it before you spend: the demand behind it, who already owns that demand, what it costs landed, and what would have to be true for it to work. If it survives, we build it. If it doesn\u2019t, you get the reasoning and the closest opportunity that does.",
    foot: "Starts at validation",
  },
  {
    tag: "You have a product",
    accent: "var(--citrus)",
    h3: "\u201cI already sell it, or I have the supplier.\u201d",
    body: "An existing product, a supplier relationship or a concept that never became a brand. We assess the opportunity as it stands, fix what the numbers or the positioning will not survive, and build the brand around it.",
    foot: "Starts at the assessment",
  },
  {
    tag: "You have the market",
    accent: "var(--aqua)",
    h3: "\u201cI know the customer. I don\u2019t know the product.\u201d",
    body: "You bring the category, the audience or the channel you understand. We come back with a shortlist inside it \u2014 each with its demand read, the gaps in what is already selling, and the unit economics \u2014 and you choose.",
    foot: "Starts at research",
  },
  {
    tag: "You have a brand",
    accent: "var(--sky)",
    h3: "\u201cIt sells. It should be bigger.\u201d",
    body: "A catalog, customers and history already exist. We read the economics by product, find what is being left on the table, and build the next products and channels on the foundation you have.",
    foot: "Starts at the diagnosis",
  },
];

/** §4 — the eight stages, name and one line each. Accents as shipped;
 *  stage 04 stays petrol. No durations, no columns. */
const STAGES = [
  { stage: "Opportunity", accent: "var(--violet)", line: "Demand first. Products second." },
  { stage: "Validate", accent: "var(--aqua)", line: "The seven tests, and a verdict in writing." },
  { stage: "Product", accent: "var(--citrus)", line: "Specification, suppliers and samples until it is right." },
  { stage: "Brand", accent: "var(--petrol)", line: "Name, trademark, packaging and content \u2014 made once, for every channel." },
  { stage: "Supply chain", accent: "var(--sky)", line: "Production, testing, inspection and import, in your name." },
  { stage: "Launch", accent: "var(--coral)", line: "Listing, content, stock and advertising built for margin." },
  { stage: "Operate", accent: "var(--violet)", line: "Margin by product. Reviews read as product feedback." },
  { stage: "Expand", accent: "var(--aqua)", line: "The next product, and the next channel it has earned." },
];

/** §7 — timing bands, one line each. */
const BANDS = [
  { band: "Your brand on an existing product", range: "3\u20135 months" },
  { band: "A modified product", range: "5\u20139 months" },
  { band: "A developed product", range: "9\u201315 months" },
];

export default function Page() {
  return (
    <main id="main">
      <JsonLd
        nodes={[
          webPageLd({ path: PATH, title: TITLE, description: DESC }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Private label", path: PATH },
          ]),
          serviceLd({
            name: "Private label brand development",
            serviceType: "Private label product development, launch and operations",
            path: PATH,
            description: DESC,
          }),
        ]}
      />

      {/* 1 · HERO — two columns, H1 and both CTAs as DOM text */}
      <section className="plhero-lite" id="top">
        <div className="wrap tight plhero-cols">
          <div>
            <div className="kicker">Private label</div>
            <h1>Build a brand, not a listing.</h1>
            <p className="sub">
              We build consumer brands and put them where their customers
              already are. Amazon is usually the fastest place to find out
              whether a market will pay for something. It is rarely the whole
              plan.
            </p>
            <p className="line">
              Bring an idea, a product, a market you understand, or a brand
              that already sells.
            </p>
            <div className="cta-row">
              <a className="btn dark" href={BOOKING}>
                Book a call
              </a>
              <a className="btn ghost" href="#lifecycle">
                See how it works
              </a>
            </div>
          </div>
          <div className="plhero-art">
            <Image
              src="/img/pl-hero.webp"
              width={946}
              height={748}
              priority
              sizes="(min-width: 1040px) 46vw, 100vw"
              alt="A private label product range on a desk — bottle, cartons, a cap, and a laptop and phone showing the brand's own store — beside the marketplaces it sells in."
            />
          </div>
        </div>
      </section>

      {/* 2 · FOUR WAYS IN — unchanged from PROMPT_31 */}
      <section className="sec band-paper" id="ways-in" data-feature="ways-in">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Where you start</div>
              <h2>Four ways in. The same discipline after that.</h2>
            </div>
            <p>
              Most people arrive with one of four things. None of them is a
              disadvantage &mdash; they just change where the work begins.
            </p>
          </div>
          <div className="routes4">
            {WAYS_IN.map((w) => (
              <article
                key={w.tag}
                className="route"
                style={{ ["--accent" as string]: w.accent }}
              >
                <div className="tag-row">
                  <span className="sq" aria-hidden="true" />
                  <span className="kicker">{w.tag}</span>
                </div>
                <h3>{w.h3}</h3>
                <p className="route-body">{w.body}</p>
                <div className="spacer" />
                <div className="foot">
                  <div className="kicker">{w.foot}</div>
                </div>
              </article>
            ))}
          </div>
          <p className="after-cards">
            Whichever door you come through, nothing is ordered until the
            decision is written down and you have approved it.
          </p>
        </div>
      </section>

      {/* 3 · SELECTION — the seven-tests plate stays; the method does not */}
      <section className="sec" id="selection" data-feature="selection-tests">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Selection</div>
              <h2>Most of what we look at, we don&apos;t build.</h2>
            </div>
            <p>
              Seven tests, run before anything is ordered: the category, the
              barrier to entry, where the demand actually sits, what the
              leaders have left open, how the product behaves on returns, the
              advantage we could build, and the arithmetic at a price the
              market already pays. Most candidates fail. A reject costs a fee.
              Continuing past one costs the inventory.
            </p>
          </div>
          <Visual
            name="amazon-private-label/selection-tests-plate"
            card
            caption={null}
            alt="Seven tests a product has to pass in order — category, niche entry, keyword spread, competitor gaps, returns, advantage and unit economics — narrowing to a written verdict of approve, review or reject."
          />
          <p className="after-cards">
            <a className="link-arrow" href="/proof">
              See a written verdict &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* 4 · ONE PRODUCT OR A BRAND · THE EIGHT STAGES */}
      <section className="sec band-paper" id="lifecycle" data-feature="lifecycle">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">How it works</div>
              <h2>One product can be the business. Or the start of one.</h2>
            </div>
            <p>
              Some clients want one product built properly. Others want a
              position in a market with a range behind it. The method does not
              change between them &mdash; only how many times it runs, and
              what decides the next product.
            </p>
          </div>
          <div className="scope-cols scope-imgs">
            <div>
              <div className="scope-img">
                <Image
                  src="/img/pl-one-product.webp"
                  width={372}
                  height={425}
                  loading="lazy"
                  sizes="280px"
                  alt="A single product built properly: one bottle, photographed on its own."
                />
              </div>
              <div className="kicker">One product</div>
              <p>Built properly, operated properly, and able to stand on its own.</p>
            </div>
            <div>
              <div className="scope-img">
                <Image
                  src="/img/pl-a-brand.webp"
                  width={500}
                  height={360}
                  loading="lazy"
                  sizes="444px"
                  alt="Five products in one brand's range — a jar, a pouch, a bottle, a carton and a tube in the same design language."
                />
              </div>
              <div className="kicker">A brand</div>
              <p>A customer, a position, and a range where each product earns the next.</p>
            </div>
          </div>
          <ol className="stages" data-feature="stages">
            {STAGES.map((s, i) => (
              <li className="stage-row" key={s.stage}>
                <span className="stage-num mono" style={{ color: s.accent }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{s.stage}</h3>
                <p>{s.line}</p>
              </li>
            ))}
          </ol>
          <div className="loop-row">
            <svg width="220" height="24" viewBox="0 0 220 24" aria-hidden="true">
              <path d="M214 12 H12" stroke="var(--violet)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M18 5 L8 12 L18 19" stroke="var(--violet)" strokeWidth="1.5" fill="none" />
            </svg>
            <span>Stage 08 is where the next opportunity comes from.</span>
          </div>
          <p className="after-cards">
            Same eight stages either way. Only the number of times we run
            them changes.
          </p>
        </div>
      </section>

      {/* 5 · ECONOMICS — no image; a visual comes later */}
      <section className="sec" id="economics" data-feature="economics">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Economics</div>
              <h2>What can sell and what can make money are different questions.</h2>
            </div>
            <p>
              Before anything is ordered we model the unit &mdash; landed cost,
              fees, freight, returns and advertising against a price the
              market already pays &mdash; then the cash the first order ties
              up and what the second one will need. A product that cannot
              clear the floor does not get built, however good the idea is.
            </p>
          </div>
        </div>
      </section>

      {/* 6 · CHANNELS — four chips, no cards */}
      <section className="sec band-paper" id="channels" data-feature="channels">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Channels</div>
              <h2>Built for the customer. Not for one channel.</h2>
            </div>
            <p>
              Amazon proves demand faster than anywhere else, and it is a
              channel rather than a business. The brand, the content and the
              packaging are made once and used everywhere &mdash; your own
              store, Walmart, retail, wherever the category actually lives.
              Which channels, and in what order, follows the customer and the
              economics.
            </p>
          </div>
          <ul className="client-chips channel-chips">
            <li>Amazon</li>
            <li>Your own store</li>
            <li>Walmart US</li>
            <li>Where the category lives</li>
          </ul>
        </div>
      </section>

      {/* 7 · TIMING — three bands, one line each; no launch-date promise */}
      <section className="sec" id="timing" data-feature="timing">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Timing</div>
              <h2>It takes as long as the product takes.</h2>
            </div>
            <p>
              What moves the date: sample rounds, tooling, testing and
              certification, factory calendars, freight, and marketplace
              approvals.
            </p>
          </div>
          <div className="cells3">
            {BANDS.map((b) => (
              <div className="cell band-card" key={b.band}>
                <div className="lbl">To the first order live</div>
                <div className="band-range mono">{b.range}</div>
                <p>{b.band}</p>
              </div>
            ))}
          </div>
          <p className="after-cards">
            There is no ninety-day private label launch. Anyone promising one
            is guessing.
          </p>
        </div>
      </section>

      {/* THE SEARCH ANSWER — unchanged (PROMPT_33 §3); snippet with the former SEO block
          merged in as a normal section (§4.1, §6.4) */}
      <section className="buildband" id="what-an-agency-does">
        <div className="wrap">
          <h2>What does an Amazon private label agency do?</h2>
          <div className="snippet">
            <p>
              An Amazon private label agency researches product opportunities,
              verifies the unit economics, sources a manufacturer, builds the
              brand and packaging, creates the listing, and launches the
              product. After launch it runs advertising, inventory and account
              operations.
            </p>
          </div>
          <div className="cols" style={{ marginTop: 26 }}>
            <div>
              <p>
                Private label means having a product manufactured and sold
                under your own brand rather than reselling someone else&apos;s.
                You own the brand and the margin. Brand Registry gives you
                control of the listing content. You also carry the risk if the
                product does not sell, which is why the research has to be
                honest before the money moves.
              </p>
              <p>
                Our private label service covers product and market research,
                product development, supplier sourcing, samples and quality
                specification, packaging and compliance, listing creation with
                A+ content, and the Amazon and Walmart US launch itself.
              </p>
            </div>
            <div>
              <p>
                After launch, the same team runs the account: inventory and
                replenishment, advertising and ranking, cases and account
                health, and a monthly report showing margin by product rather
                than revenue by product.
              </p>
              <p style={{ marginBottom: 0 }}>
                We work on Amazon in the US, UK, Europe and the Middle East, and on
                Walmart in the US. Clients include brand owners, manufacturers
                selling direct, and investors putting capital into Amazon and
                Walmart businesses, wherever they are based.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — seven, unchanged; JSON-LD from the same strings */}
      <Faq items={FAQS} />

      {/* 15 · CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <h2>Launching, or already selling?</h2>
          <p>
            Tell us the category you are thinking about, or the brand you
            already run. We will tell you honestly whether it is worth the
            money before you spend any.
          </p>
          <div className="cta-row">
            <a className="btn cit" href={BOOKING}>
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

import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import Visual from "@/components/Visual";
import ComplianceMatrix from "@/components/ComplianceMatrix";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Private label — rebuilt around the brand lifecycle per PROMPT_31 §6
 * (rev B). Copy is final and pasted as written. Order: hero · four ways
 * in · product or brand · the eight-stage lifecycle (DOM) · stage 02 in
 * detail (seven tests, PROMPT_26/27) · decisions · stage 05 in detail
 * (factory chain) · compliance matrix (PROMPT_24, kept — PROMPT_27
 * depends on it) · floors · channels · range · value · timing · the
 * kept PROMPT_24 sections · the definition snippet · FAQ (5 + 2) · CTA.
 * The URL and the title keyword do not change.
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

/** PROMPT_26 §7 — the seven selection tests, verbatim. */
const SELECTION_TESTS = [
  {
    title: "The category has to be one we will take",
    // PROMPT_27 §1: the compliance matrix is right; this body replaced the
    // "decline outright" version that contradicted it.
    body: "Regulated categories go ahead only when the certification is real and budgeted before production: children's products and toys, supplements, cosmetics, certified electricals. Anything needing FDA drug approval or medical device clearance we decline, along with claims we could not substantiate. If the testing budget is not in the plan, the answer is no.",
  },
  {
    title: "The niche has to be enterable",
    body: "We read the barrier to entry across the best sellers: how many are strong, how old their listings are, how many reviews stand between a new brand and page one. A niche where every leading listing is years old with thousands of reviews is not an opportunity, however good the demand looks.",
  },
  {
    title: "Demand has to be spread, not owned",
    body: "We break the niche into keyword roots — the repeated phrases behind every search. A niche needs several genuine roots, and the top two must not hold most of the search volume. One dominant phrase means one dominant brand, and a new listing has nowhere to rank.",
  },
  {
    title: "The leaders have to have gaps",
    body: "We build a matrix of the top competitors: price, sales, rating, review count, fulfilment, listing age, how many keywords each one holds on page one and how much of the total search volume that covers. What we are looking for is a niche selling well where nobody has covered the keywords properly. That gap is where a new brand ranks.",
  },
  {
    title: "The product has to behave",
    body: "Return rate and out-of-stock rate across the niche. A high return rate is a product problem that marketing cannot fix, and it comes straight out of the margin.",
  },
  {
    title: "There has to be a real advantage",
    body: "Not a colour change. A specific improvement we can name, source and put on the listing — and that the reviews on the leading products show buyers actually want.",
  },
  {
    title: "The numbers have to work before anything is ordered",
    body: "Production, freight, duty, FBA fees, referral fees, storage, returns and advertising, against a realistic selling price — down to unit profit, net margin and the return on the money tied up. The product has to clear our floor on both, at a price the market is already paying.",
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

/** §6.4 — the eight stages. No durations here: timing lives in §6.11.
 *  Accents in the ticket's order; "lime" is not a site token, so stage
 *  04 carries petrol (reported). */
const LIFECYCLE = [
  { stage: "Opportunity", accent: "var(--violet)", what: "Demand, not products. We read what customers are already searching for, buying and complaining about in the space, and where the market is being served badly. Your idea is tested here as one candidate among the others.", get: "A shortlist of opportunities with the demand behind each one", stops: "Nothing in the space clears the demand or the competition read" },
  { stage: "Validate", accent: "var(--aqua)", what: "The seven tests below, run properly: category and compliance, barrier to entry, keyword spread, gaps in the leaders, returns behaviour, the advantage we could build, and the unit economics down to margin and return on the money tied up.", get: "A written verdict: approve, review or reject, with the numbers it was based on", stops: "The economics do not clear the floor at a price the market already pays" },
  { stage: "Product", accent: "var(--citrus)", what: "The specification: what the product has to do better, and what that costs. Suppliers identified and compared, samples ordered, tested and changed. Usually more than one round, and the round that finds the problem is the one that pays for itself.", get: "The specification, the sample record and the costed bill of materials", stops: "Samples cannot hit the specification at a cost that leaves margin" },
  { stage: "Brand", accent: "var(--petrol)", what: "Name, trademark filing, Brand Registry, identity, packaging and the content set \u2014 photography, copy and assets produced once, for every channel the brand will sell in.", get: "The brand system, the IP filings and the content library", stops: "A name or a mark that cannot be cleared, or a claim we could not substantiate" },
  { stage: "Supply chain", accent: "var(--sky)", what: "Supplier agreement and terms, compliance and testing for the category, production, inspection before the goods ship, freight, duty and the importer-of-record file. Your business is the importer, so the documents are yours and they are filed correctly from the first order.", get: "The production, inspection, compliance and import file", stops: "Inspection fails, or a certificate the category needs cannot be obtained" },
  { stage: "Launch", accent: "var(--coral)", what: "Listing, A+ content, brand store, inventory plan and advertising built for margin rather than rank. Deliberately small first order, because the market has not paid for the product yet \u2014 it has only been researched.", get: "The live listing, the launch plan, the advertising budget with what it is expected to buy, and the first read on real demand", stops: "Conversion or cost per sale says the offer is wrong before more stock is committed" },
  { stage: "Operate", accent: "var(--violet)", what: "Margin by product after fees, freight, returns and advertising. Inventory and the cash cycle managed against the reorder date rather than the stockout. Reviews and returns read as product feedback, not as reputation management.", get: "A monthly report, a quarterly plan, and the numbers behind the next decision", stops: "A product that will not reach the margin floor is discontinued rather than propped up" },
  { stage: "Expand", accent: "var(--aqua)", what: "The second product, the third, and the channels the brand has earned \u2014 each decided by what the ones before it taught us, not by what is trending.", get: "The next product or channel, with the case for it in writing", stops: "Expanding before the first product clears its floor, which is how a range becomes a warehouse" },
];

/** §6.6a — the factory chain; the eight steps match the supplied image. */
const CHAIN = [
  { step: "Supplier", what: "Manufacturers found and compared on capability, not on the first quote. Trading companies identified as trading companies. Terms, minimums, lead time and who owns the tooling agreed before a sample is paid for.", artifact: "Supplier comparison and supply agreement" },
  { step: "Sample", what: "Rounds until the sample meets the written specification, with every change recorded against the version that failed. One sample is approved and kept as the reference for everything after it.", artifact: "Technical specification and approved golden sample" },
  { step: "QC / testing", what: "The testing the category requires, at an accredited lab, on the product that will actually be made \u2014 not on a sample built to pass.", artifact: "Test reports and certificates" },
  { step: "Production", what: "The order placed against the approved sample, with the specification attached to the purchase order rather than assumed.", artifact: "Purchase order and production schedule" },
  { step: "Documentation", what: "Inspection before the goods leave the factory, on a defined sampling plan, with the report in hand before the balance is paid. Carton labels, barcodes and country-of-origin marking checked while the run can still be corrected.", artifact: "Pre-shipment inspection report, compliance file, label approval" },
  { step: "Freight", what: "Booking and mode chosen as a margin decision, then duty and customs entry in your company\u2019s name. Your business is the importer of record, so the file belongs to you.", artifact: "Commercial invoice, packing list, bill of lading, customs entry" },
  { step: "Warehouse", what: "Receipt, prep and inbound \u2014 to the marketplace, to a third-party warehouse, or to your own. Counted against the purchase order rather than assumed to have arrived.", artifact: "Inbound plan and receipt reconciliation" },
  { step: "Customer", what: "The first units in customers\u2019 hands, and the first honest read on the product. Reviews and returns come back into stage 02 of the next product.", artifact: "The first reviews and return reasons, read as product feedback" },
];

/** §6.7 — the floors are fields, not figures. */
const FLOORS = [
  { field: "Margin floor", line: "A minimum net margin per unit after fees, freight, returns and advertising, set per category before sourcing starts." },
  { field: "Return on the money tied up", line: "What the cash in stock has to earn per cycle for the line to be worth holding." },
  { field: "Cost of acquisition against value", line: "What a customer may cost against what a customer is worth, measured once there is repeat data rather than assumed at launch." },
  { field: "No single product carrying the brand", line: "A ceiling on how much of revenue one product may represent before the second one becomes urgent." },
  { field: "No single channel carrying the business", line: "The same ceiling by channel. A brand that only exists on one marketplace is worth less, and is one policy change from zero." },
];

/** §6.11 — timing bands and what sets the clock. */
const BANDS = [
  { band: "Existing product, your brand", range: "3\u20135 months", text: "A product that already exists in the market and needs your brand, your packaging and a better offer. No tooling, no new certification path." },
  { band: "Modified product", range: "5\u20139 months", text: "A real change to what is on the market: materials, sizing, a component, a set rather than a single unit. Extra sample rounds, and testing if the change touches a regulated attribute." },
  { band: "Developed product", range: "9\u201315 months", text: "Tooling, engineering drawings, several sample rounds, lab testing and certification. The longest stretch is rarely the making \u2014 it is the waiting between rounds." },
];
const CLOCK = [
  { k: "Sample rounds", v: "Two to six weeks each, including freight, and two rounds is optimistic. The round that finds the problem is the one that saves the launch." },
  { k: "Tooling", v: "Weeks to months, and it is paid before it is proven. This is why the specification is settled first." },
  { k: "Testing and certification", v: "The category decides this, not us. Some certificates take days, some take a quarter." },
  { k: "Factory queue and minimums", v: "A factory\u2019s calendar and its minimum order both move dates. Chinese New Year and peak season move them further." },
  { k: "Freight", v: "Sea is weeks and cheap, air is days and expensive. Which one you use is a margin decision, and it is made with the numbers in front of you." },
  { k: "Marketplace setup", v: "Brand Registry, category approval and listing review run in parallel, and occasionally they are the thing everyone is waiting on." },
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

      {/* 6.1 · HERO — two columns: DOM copy (real H1 and CTAs) beside the
          product-scene crop supplied with PROMPT_32, on the image's own
          ground so its edges do not show a seam. */}
      <section className="plhero-lite" id="top">
        <div className="wrap tight plhero-cols">
          <div>
            <div className="kicker">Private label</div>
            <h1>Build a brand, not a listing.</h1>
            <p className="sub">
              We develop private label products around real customer demand,
              then build the brand, the supply chain and the operation that
              turn one product into a business. Amazon is one of the fastest
              real-world reads on whether the market will pay for a product.
              It is not the whole plan.
            </p>
            <p className="line">
              Bring an idea, a product you already sell, a market you
              understand &mdash; or nothing but the capital and the intent.
            </p>
            <div className="cta-row">
              <a className="btn dark" href={BOOKING}>
                Book a call
              </a>
              <a className="btn ghost" href="#lifecycle">
                See the lifecycle
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

      {/* 6.2 · START WITH WHAT YOU HAVE */}
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

      {/* 6.3 · A PRODUCT, OR A BRAND */}
      <section className="sec" id="scope" data-feature="scope">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Scope</div>
              <h2>One product can be the business. Or it can be the beginning of a brand.</h2>
              <p className="pull">We build for either.</p>
            </div>
            <p>
              Some clients want one product built properly. Others want a brand
              &mdash; a position in a market, with a family of products behind
              it. The difference is not the method. It is how many times the
              method runs, and what decides the next product.
            </p>
          </div>
          <div className="scope-cols">
            <div>
              <div className="kicker">One product</div>
              <p>
                You want a specific product made and sold well. We run the
                lifecycle once, end to end, and operate it afterwards. The
                brand exists to carry that product properly: a name that can
                be owned, packaging that holds up, a listing that converts. If
                the product works and you later want a second, the foundation
                is already built and stage 01 starts again.
              </p>
              <p className="fits">
                <b>Where it fits:</b> a manufacturer going direct &middot; a
                seller with one strong idea &middot; testing a market before
                committing to it.
              </p>
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
            </div>
            <div>
              <div className="kicker">A brand</div>
              <p>
                You want a business in a market, not a single item. We start
                from the customer and the position rather than from a product:
                who it is for, what it stands against, what price band it
                lives in, what it must never sell. Then we run the lifecycle
                for the first product, and again for the second and third
                &mdash; each decided by what the first one taught us.
              </p>
              <p className="fits">
                <b>Where it fits:</b> brand owners building a range &middot;
                investors backing a category &middot; an existing catalog that
                needs a spine.
              </p>
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
            </div>
          </div>
          <p className="third-path">
            <b>An existing brand starts at 07 and works backwards</b> &mdash;
            we read the catalog and the economics first, fix what the numbers
            will not survive, then re-enter the lifecycle at whichever stage
            the next product needs.
          </p>
          <p className="after-cards">
            A brand is not a logo on a product. It is a promise to a specific
            customer, and a reason for the second purchase. That is why it is
            decided before the first product, not after the third.
          </p>
        </div>
      </section>

      {/* 6.4 · THE LIFECYCLE — DOM, no image, no durations */}
      <section className="sec band-paper" id="lifecycle" data-feature="lifecycle">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">The lifecycle</div>
              <h2>From an opportunity to a brand that runs without you.</h2>
            </div>
            <p>
              Eight stages. Each one ends in a decision, and each one can end
              the project &mdash; which is the point. The cheapest failure is
              the one that happens before a purchase order.
            </p>
          </div>
          <div className="rows5 lc-rows">
            {LIFECYCLE.map((s, i) => (
              <div className="row5 lc-row" key={s.stage}>
                <div>
                  <div className="lbl">Step {String(i + 1).padStart(2, "0")}</div>
                  <div className="lc-num" style={{ color: s.accent }} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3>{s.stage}</h3>
                </div>
                <div>
                  <div className="lbl">What happens</div>
                  <p className="lead">{s.what}</p>
                </div>
                <div className="facts">
                  <div>
                    <div className="lbl">You get</div>
                    {s.get}
                  </div>
                  <div>
                    <div className="lbl">What stops it</div>
                    {s.stops}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="loop-row">
            <svg width="220" height="24" viewBox="0 0 220 24" aria-hidden="true">
              <path d="M214 12 H12" stroke="var(--violet)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M18 5 L8 12 L18 19" stroke="var(--violet)" strokeWidth="1.5" fill="none" />
            </svg>
            <span>
              Each product teaches the next one. Stage 08 is where the next
              opportunity comes from.
            </span>
          </div>
        </div>
      </section>

      {/* 6.5 · STAGE 02 IN DETAIL — the seven tests (PROMPT_26 §7 content,
          PROMPT_27 test 01), demoted under the lifecycle per PROMPT_31 §6.5.
          No client, brand or product name appears here. */}
      <section className="sec band-paper stage-detail" id="selection" data-feature="selection-tests">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Stage 02 in detail</div>
              <h3 className="h2-demoted">How we choose a product.</h3>
            </div>
            <p>
              <b>Most candidates fail here, and that is what the stage is for.</b>{" "}
              Most private label failures are decided before anything is
              ordered — the wrong product, in a niche that cannot be entered,
              at a cost that never leaves a margin. Every product we take on
              goes through the same seven tests, and most products do not pass.
            </p>
          </div>
          <Visual
            name="amazon-private-label/selection-tests-plate"
            card
            caption={null}
            alt="Seven tests a product has to pass in order — category, niche entry, keyword spread, competitor gaps, returns, advantage and unit economics — narrowing to a written verdict of approve, review or reject."
          />
          <div className="tests">
            {SELECTION_TESTS.map((t, i) => (
              <div className="test" key={t.title}>
                <div className="n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
          <div className="verdict-block">
            <h4>Then a written verdict: approve, review or reject.</h4>
            <p>
              You get the research, the competitor matrix, the cost model and
              the recommendation, in writing. A reject is a result — it is the
              cheapest one available, and it is the reason clients come back
              for the second product.
            </p>
            <a className="link-arrow" href="/proof">
              See a verdict template →
            </a>
          </div>
        </div>
      </section>

      {/* 6.6 · EVERY STAGE ENDS IN A DECISION */}
      <section className="sec" id="decisions" data-feature="decisions">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">How decisions get made</div>
              <h2>Every investment starts with a decision, in writing.</h2>
            </div>
            <p>
              The same document at every gate: what we looked at, what it
              costs, what we recommend, and what would change the answer. It
              is the record that makes the next decision faster, and the one
              an investor or a buyer can read later.
            </p>
          </div>
          <div className="cells3">
            <div className="cell">
              <b>Approve</b>
              <p>
                The numbers clear the floor and the risks are named. We proceed
                to the next stage, with the budget for it agreed.
              </p>
            </div>
            <div className="cell">
              <b>Review</b>
              <p>
                Something is unresolved &mdash; a cost, a certificate, a
                supplier. We say what would have to be true, and what it will
                take to find out.
              </p>
            </div>
            <div className="cell">
              <b>Reject</b>
              <p>
                We recommend stopping, and say why. A reject costs a fee.
                Continuing past one costs the inventory.
              </p>
            </div>
          </div>
          <p className="after-cards">
            You approve every stage and every purchase order in writing. We
            never buy anything in our own name.{" "}
            <a className="link-arrow" href="/proof">
              See a verdict template &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* 4 · THE GATE — visual 09 beside the sample verdict (§1a) */}
      <section className="gate" id="gate">
        <div className="wrap">
          <h2>Between research and sourcing, there is a verdict.</h2>
          <div className="visual-side-grid">
            <div>
              <p>
                Every product candidate is scored on landed cost, marketplace
                fees, returns, competition and demand. You get one page that
                says buy or do not buy, and the reason. You can read it and
                disagree with it.
              </p>
              <p>
                Most candidates fail. We send you the sheet that shows why, and
                we do not buy them. That is the part that protects your money,
                and it happens before any of it moves.
              </p>
              <p style={{ marginBottom: 0 }}>
                <b style={{ color: "#fff" }}>
                  Nothing is ordered without your approval, in writing.
                </b>{" "}
                <a href="/proof#verdict" style={{ color: "#d5e2e0", fontWeight: 600 }}>
                  See a sample verdict →
                </a>
              </p>
              <div className="vsheet">
                <div className="hd">
                  <span>PRODUCT VERDICT · CANDIDATE 0412 · SEP</span>
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
                <div className="r">
                  <span>Testing and certification</span>
                  <b>QUOTED</b>
                </div>
                <div className="r">
                  <span>Patent and trademark check</span>
                  <b>CLEAR</b>
                </div>
                <div className="r">
                  <span>Competing brands</span>
                  <b>14</b>
                </div>
                <div className="r out">
                  <span>Margin against a 20% floor</span>
                  <b>4.8% · DO NOT BUY</b>
                </div>
              </div>
            </div>
            <Visual
              variant="side"
              onDark
              name="home/verdict-buy-or-do-not-buy"
              alt="Two one-page product verdict sheets, one marked buy and one on top marked do not buy at 4.8% margin against a 20% floor"
            />
          </div>
        </div>
      </section>

      {/* 6.6a · STAGE 05 IN DETAIL — the factory chain, then the supplied
          photographic band (asset A3) on #F9F8F6 */}
      <section className="sec band-paper stage-detail" id="factory-chain" data-feature="factory-chain">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Stage 05 in detail</div>
              <h3 className="h2-demoted">
                From a specification to stock you own, with a document at
                every handover.
              </h3>
            </div>
            <p>
              This is the part clients have usually been burned on, and the
              part a buyer or an investor examines first. A supplier
              relationship that exists only in a chat history is not a supply
              chain.
            </p>
          </div>
          <ol className="chain">
            {CHAIN.map((c, i) => (
              <li className="chain-row" key={c.step}>
                <span className="chain-num mono" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="chain-step">{c.step}</span>
                <span className="chain-what">{c.what}</span>
                <span className="chain-artifact">{c.artifact}</span>
              </li>
            ))}
          </ol>
          <p className="after-cards">
            Nothing here is exotic. It is the ordinary chain done in the
            ordinary order, and it is the difference between owning a product
            and renting one from a supplier who could sell the same mould to
            the next buyer.
          </p>
        </div>
        <figure className="visual pl-bleed">
          <div className="visual-scroll" data-feature="visual-scroll">
            <Image
              src="/img/pl-factory-chain.webp"
              width={1656}
              height={950}
              loading="lazy"
              sizes="(max-width: 767px) 900px, (min-width: 1700px) 1700px, 100vw"
              alt="Eight photographed steps from supplier and sample through testing, production, documentation, freight and warehouse to the customer, with the document each step produces."
            />
          </div>
          <span className="visual-swipe wrap tight" aria-hidden="true">
            Swipe to see the full view &rarr;
          </span>
        </figure>
      </section>

      {/* 5 · P0 · COMPLIANCE GATES — replaces the categories photos */}
      <section className="start" id="compliance">
        <div className="wrap">
          <span className="eyebrow">Compliance gates · US marketplaces</span>
          <h2>What gets checked and costed before a purchase order.</h2>
          <p style={{ maxWidth: "70ch" }}>
            Each category has its own rules on Amazon and Walmart in the US.
            We confirm what applies, get the testing quoted and put the cost
            into the verdict before you approve an order.
          </p>
          <ComplianceMatrix />
          <ul className="facts" style={{ marginTop: 28 }}>
            <li>
              <b>Children&apos;s products and toys.</b> Anything made mainly for
              children aged 12 and under needs testing at a CPSC-accepted lab
              and a Children&apos;s Product Certificate. Toys also need age
              grading, small-parts warnings and permanent tracking labels.
            </li>
            <li>
              <b>Dietary supplements.</b> The label must follow FDA rules under
              DSHEA. Amazon also requires third-party verification of the
              product and of the manufacturer&apos;s quality practices.
            </li>
            <li>
              <b>Cosmetics and personal care.</b> The facility and the product
              must be registered and listed with the FDA under MoCRA. We check
              ingredient labeling, drug-like claims and Prop 65 warnings.
            </li>
            <li>
              <b>Kitchen and home.</b> Anything that touches food must be made
              from materials approved for that use. We check Prop 65 and state
              chemical rules before the material spec is signed.
            </li>
            <li>
              <b>Electronics and batteries.</b> Radio devices need FCC
              authorization. Lithium batteries need UN38.3 test results, a
              safety data sheet and Amazon&apos;s dangerous goods review.
            </li>
            <li>
              <b>Pest and germ claims.</b> A product that claims to kill or
              repel pests or germs is a pesticide under federal law and needs
              EPA registration. We usually change the claim or drop the
              product.
            </li>
          </ul>
          <p style={{ marginTop: 22, maxWidth: "76ch" }}>
            <b>Every product:</b> trademark filed for Brand Registry · GS1
            barcodes · country-of-origin marking · pre-shipment inspection ·
            customs bond and ISF · product liability cover.
          </p>
          <p style={{ marginBottom: 0, fontSize: 13.5, color: "var(--muted)" }}>
            <em>
              Illustrative summary for US marketplaces. What applies is
              confirmed per product before the purchase order. As of September
              2026.
            </em>
          </p>
        </div>
      </section>

      {/* 6.7 · THE NUMBERS WE RUN TO */}
      <section className="sec" id="floors" data-feature="floors">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Operating discipline</div>
              <h2>The floors, stated before the money moves.</h2>
            </div>
            <p>
              These are the thresholds a product has to clear to stay in the
              plan. They are agreed at the start of the engagement and they do
              not move because a launch is exciting.
            </p>
          </div>
          <div className="floors">
            {FLOORS.map((f) => (
              <div className="floor" key={f.field}>
                <div className="floor-field mono">{f.field}</div>
                <p>{f.line}</p>
              </div>
            ))}
          </div>
          <p className="after-cards">
            These are also the fundamentals an investor or an acquirer will
            eventually examine. Building them correctly from the beginning is
            cheaper than retrofitting them later.
          </p>
        </div>
      </section>

      {/* 6.8 · WHERE THE BRAND SELLS */}
      <section className="sec band-paper" id="channels" data-feature="channels">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Channels</div>
              <h2>Build once. Make the brand work everywhere.</h2>
            </div>
            <p>
              Amazon can give you one of the fastest real-world reads on
              whether the market will pay for the product, at a cost of entry
              no other channel matches. It is a proving ground and a revenue
              line &mdash; not a business on its own.
            </p>
          </div>
          <div className="cells4">
            <div className="cell">
              <b>Amazon &mdash; demand and discovery</b>
              <p>
                Where demand is tested first, and where the catalog, the
                reviews and the advertising are run day to day. US, UK and
                Europe.
              </p>
            </div>
            <div className="cell">
              <b>Your own store &mdash; the owned relationship</b>
              <p>
                Where the margin, the customer and the data are yours. Built
                once the product has proven it sells.
              </p>
            </div>
            <div className="cell">
              <b>Walmart US &mdash; retail scale</b>
              <p>
                A separate approval and its own catalog discipline, run from
                the same content.
              </p>
            </div>
            <div className="cell">
              <b>Where the category lives &mdash; chosen, not assumed</b>
              <p>
                Some products belong in a retail buyer&apos;s hands, some in
                short-form video, some in neither. The mix follows the product,
                the customer and the economics, and no brand launches
                everywhere at once.
              </p>
            </div>
          </div>
          <p className="after-cards">
            The photography, the copy and the packaging are produced once and
            used everywhere. Doing it channel by channel is how brands end up
            paying three times for the same asset.
          </p>
        </div>
      </section>

      {/* 6.9 · ONE PRODUCT IS NOT A BRAND */}
      <section className="sec" id="range" data-feature="range">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">The range</div>
              <h2>The second product is planned before the first one ships.</h2>
            </div>
            <p>
              The first product proves the demand. The range is what makes the
              economics work: shared tooling, shared freight, shared audience,
              and a reason for a buyer to come back.
            </p>
          </div>
          <div className="cells4">
            <div className="cell">
              <b>Product 01</b>
              <p>proves the demand and pays for the learning.</p>
            </div>
            <div className="cell">
              <b>Product 02</b>
              <p>
                sells to the same customer, usually decided by what the reviews
                on product 01 ask for.
              </p>
            </div>
            <div className="cell">
              <b>Product 03</b>
              <p>widens the range or the price band.</p>
            </div>
            <div className="cell">
              <b>The range</b>
              <p>
                shared costs, a reason to return, and a business that does not
                rest on one listing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.10 · BUILT TO BE WORTH SOMETHING */}
      <section className="sec band-paper" id="value" data-feature="value">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Value</div>
              <h2>Build it so it can stand on its own.</h2>
              <p className="sub-line">
                Built so it can be sold, or kept, on your terms rather than a
                buyer&apos;s.
              </p>
            </div>
            <p>
              Most ecommerce businesses are built to produce income, and then
              discovered years later to be hard to value. The difference is
              not luck. It is a handful of things that are cheap to do from
              the start and expensive to add afterwards.
            </p>
          </div>
          <div className="two-cols value-cols">
            <div>
              <div className="lbl">What gets a brand valued</div>
              <ul className="facts valued">
                <li>
                  <b>The IP is yours and it is clean.</b> Trademark in your
                  name, Brand Registry enrolled, designs and content owned
                  rather than borrowed from a supplier&apos;s catalog.
                </li>
                <li>
                  <b>The numbers are auditable.</b> Margin by product and by
                  channel, from the first order, in a form someone outside the
                  business can follow without taking your word for it.
                </li>
                <li>
                  <b>The supply chain is documented.</b> Agreements, invoices,
                  certificates and inspection records, filed per product. A
                  supplier relationship that exists only in a chat history is
                  worth less than one on paper.
                </li>
                <li>
                  <b>The business is not one thing.</b> Not one product
                  carrying the revenue, not one channel carrying the product,
                  not one person carrying the operation.
                </li>
              </ul>
            </div>
            <div>
              <div className="lbl">What gets a brand discounted</div>
              <ul className="list2 one-col">
                <li>A single product doing most of the revenue</li>
                <li>A single marketplace doing all of it</li>
                <li>
                  No customer list and no repeat purchase, so every sale is
                  rented from an algorithm
                </li>
                <li>Records that cannot survive a question</li>
              </ul>
            </div>
          </div>
          <p className="after-cards">
            We are not promising you an exit, and nobody credible can. The
            same work that makes a brand valuable to a buyer is the work that
            makes it stable to own &mdash; and we do it in the order that
            costs least.
          </p>
        </div>
      </section>

      {/* 6.11 · HOW LONG IT TAKES — ranges by product type, no launch date */}
      <section className="sec" id="timing" data-feature="timing">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">Timing</div>
              <h2>It takes as long as the product takes.</h2>
            </div>
            <p>
              We can tell you what sets the schedule and what a realistic
              range looks like for the kind of product you are building. We
              cannot tell you a date before we know whether it needs a tool, a
              lab or a certificate &mdash; and anyone who does is guessing.
            </p>
          </div>
          <div className="cells3">
            {BANDS.map((b) => (
              <div className="cell band-card" key={b.band}>
                <div className="lbl">{b.band}</div>
                <div className="band-range mono">{b.range}</div>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
          <div className="lbl" style={{ marginTop: 34 }}>
            What actually sets the clock
          </div>
          <ul className="facts two-col">
            {CLOCK.map((c) => (
              <li key={c.k}>
                <b>{c.k}:</b> {c.v}
              </li>
            ))}
          </ul>
          <p className="after-cards">
            What we will commit to is this: every stage has a date when we
            start it, and if it slips you hear in the week it slips &mdash;
            not at the end.
          </p>
        </div>
      </section>

      {/* 6 · P1 · WHAT YOU PAY FOR DIRECTLY */}
      <section className="buildband" id="direct-costs">
        <div className="wrap">
          <h2>What you pay for directly, besides our fee.</h2>
          <p style={{ maxWidth: "70ch" }}>
            These costs sit with your business because the product, the brand
            and the import are yours. Each one is quoted before you approve it.
          </p>
          <ul className="facts two-col">
            <li>
              <b>Samples and production:</b> paid to the manufacturer on the
              terms you agree.
            </li>
            <li>
              <b>Testing and certification:</b> lab fees for the tests your
              category needs, plus retests if a sample fails.
            </li>
            <li>
              <b>Inspection:</b> a pre-shipment check at the factory before the
              balance is paid.
            </li>
            <li>
              <b>Trademark and barcodes:</b> the filing and the GS1 barcodes,
              both in your business name.
            </li>
            <li>
              <b>Freight, duty and customs:</b> shipping, broker, bond and duty
              at the rates in force when the goods land.
            </li>
            <li>
              <b>Insurance:</b> product liability cover in your name, at the
              limits Amazon and Walmart set.
            </li>
            <li>
              <b>Launch advertising:</b> your ad budget, paid to the
              marketplace. We never take a share of it.
            </li>
          </ul>
        </div>
      </section>

      {/* 8 · P3 · IMPORT */}
      <section className="buildband" id="import">
        <div className="wrap">
          <h2>Imported in your name, filed correctly.</h2>
          <p style={{ maxWidth: "70ch" }}>
            Your business is the importer of record, so the customs entry, the
            duty and the product certificates are yours. We coordinate the
            broker and the forwarder, and check the paperwork before goods
            leave the factory.
          </p>
          <ul className="facts">
            <li>Customs bond and Importer Security Filing arranged before the goods ship.</li>
            <li>
              Certificate data filed with the CPSC at entry for products under
              a CPSC rule. This has been mandatory since 8 July 2026.
            </li>
            <li>FDA prior notice for supplements and other food products.</li>
            <li>Country-of-origin marking on the product and the packaging.</li>
            <li>Duty checked against the tariff rates in force, not last year&apos;s.</li>
          </ul>
        </div>
      </section>

      {/* 9 · P4 · DECLINED PRODUCTS */}
      <section className="fees" id="declined">
        <div className="wrap">
          <h2>Products we turn down, and why.</h2>
          <ul className="facts">
            <li>Products that need FDA drug approval or medical device clearance.</li>
            <li>Products that rely on a claim the label cannot legally make.</li>
            <li>Pest or germ-killing products with no route to EPA registration.</li>
            <li>
              Children&apos;s products where the budget cannot cover certified
              testing of every version.
            </li>
            <li>Close copies of a product with an active patent or registered design.</li>
            <li>Products where dangerous goods rules make fulfillment uneconomic.</li>
          </ul>
        </div>
      </section>

      {/* 10 · RUN */}
      <section className="run" id="operate">
        <div className="wrap">
          <h2>After launch, we keep the business moving.</h2>
          <div className="run-grid">
            <div>
              <p>
                Ongoing marketplace management connects catalog, inventory,
                account operations, advertising and growth, run by the same
                people who chose the product.
              </p>
              <p style={{ marginBottom: 0 }}>
                <b style={{ color: "#fff" }}>
                  This stage is{" "}
                  <a href="/amazon-walmart-management" style={{ color: "#fff" }}>
                    managed operations
                  </a>
                  .
                </b>{" "}
                Monthly and continuous, with a written report showing margin by
                product.
              </p>
            </div>
            <div className="ops">
              <div className="op">
                <b>Catalog</b>
                <span>
                  Listings, A+ content, attributes, variations and compliance
                </span>
              </div>
              <div className="op">
                <b>Inventory</b>
                <span>
                  Stock cover, replenishment, stranded stock and planning
                </span>
              </div>
              <div className="op">
                <b>Marketplace</b>
                <span>
                  Amazon and Walmart US account operations, cases and account
                  health
                </span>
              </div>
              <div className="op">
                <b>Advertising</b>
                <span>PPC, search terms, bids, ranking and the featured offer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 · FEES */}
      <section className="fees">
        <div className="wrap">
          <h2>How the fees work.</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>The launch project</b>
              <span>
                Quoted to your plan, in writing, before anything starts. It
                depends on the category, the number of products and whether
                Walmart US is included. Stock, tooling and advertising are your costs, paid
                by you directly to the supplier and the marketplace.
              </span>
            </div>
            <div className="fee">
              <b>Managed operations</b>
              <span>
                A fixed monthly fee once the brand is live. Nothing is charged
                on your advertising spend and nothing on your capital, so
                growing the account never makes us more money for spending
                yours.
              </span>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            <a href="/how-we-work" style={{ fontWeight: 600 }}>
              How we charge, in full →
            </a>
          </p>
        </div>
      </section>

      {/* 13 · WHAT AN AGENCY DOES — snippet, with the former SEO block
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

      {/* 6.13 · FAQ — five kept, two added; JSON-LD from the same strings */}
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

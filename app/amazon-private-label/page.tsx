import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";
import { Reveal, Stair } from "@/components/pl/Motion";
import {
  ChannelsRail,
  ChannelsTop,
  Converge,
  Gates,
  Junction,
  Merge,
  OneSpine,
  RangeSpines,
  StagesLoop,
  StagesRail,
  TimingPath,
} from "@/components/pl/Diagrams";
import Product from "@/components/pl/Product";
import "./pl.css";

/**
 * Private label — v4 design build (PL_DESIGN_BRIEF, 19 Sep 2026).
 * Copy is the locked content: hero, four ways in, selection, the
 * lifecycle (#lifecycle), economics, channels, timing (stages, no
 * durations), end to end, then the definition snippet, the FAQ
 * (seven, FAQPage from the same strings) and the CTA. The URL, title,
 * meta and H1 do not change. Every section has its own shape; the
 * diagrams are the copy drawn, not decoration. Motion lives in
 * components/pl and respects prefers-reduced-motion.
 *
 * The display face is Bricolage Grotesque, page-scoped for now; it
 * rolls out sitewide as a separate change (brief §6).
 */
const display = Bricolage_Grotesque({
  variable: "--font-pl-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

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

/** The four ways in — label, colour, quote, body. The colours return
 *  as the four converging lines and the four marks at the CTA. */
const WAYS_IN = [
  { tag: "You have the idea", color: "var(--pl-citrus)", q: "“I know what I want to build.”", body: "We pressure-test it before you spend: the demand behind it, who already owns that demand, what it costs landed, and what would have to be true for it to work." },
  { tag: "You have a product", color: "var(--pl-coral)", q: "“I already sell it, or I have the supplier.”", body: "An existing product, a supplier relationship or a concept that never became a brand. We assess it as it stands, fix what the numbers will not survive, and build the brand around it." },
  { tag: "You have the market", color: "var(--pl-aqua)", q: "“I know the customer. I don’t know the product.”", body: "You bring the category, the audience or the channel you understand. We come back with a shortlist inside it, each with its demand read and its unit economics — and you choose." },
  { tag: "You have a brand", color: "var(--pl-sky)", q: "“It sells. It should be bigger.”", body: "A catalog, customers and history already exist. We read the economics by product, find what is being left on the table, and build the next products and channels on the foundation you have." },
];

const STAGES = [
  ["Opportunity", "Demand first. Products second."],
  ["Validate", "The seven tests, and a verdict in writing."],
  ["Product", "Specification, suppliers and samples until it is right."],
  ["Brand", "Name, trademark, packaging and content — made once, for every channel."],
  ["Supply chain", "Production, testing, inspection and import, in your name."],
  ["Launch", "Listing, content, stock and advertising built for margin."],
  ["Operate", "Margin by product. Reviews read as product feedback."],
  ["Expand", "The next product, and the next channel it has earned."],
] as const;

/** The range: the same product story told with real objects. The
 *  moisturiser is the one product on the left and the first of the
 *  range on the right. Renditions come from public/images/_inbox via
 *  `npm run images`; swap the sources there when the packaging is
 *  final and nothing else moves. */
const RANGE = [
  { name: "range-moisturiser", alt: "Daily moisturiser jar beside its retail carton", h: 150 },
  { name: "range-face-mask", alt: "Clay face mask jar beside its sage-green retail carton", h: 150 },
  { name: "range-shower-gel", alt: "Shower gel pump bottle beside its aqua retail carton", h: 203 },
  { name: "range-sunscreen", alt: "SPF 50 sunscreen tube beside its citrus retail carton", h: 173 },
  { name: "range-hair-gel", alt: "Hair gel jar beside its coral retail carton", h: 149 },
];

const CHANNELS = [
  ["Amazon", "discovery and demand", "var(--pl-citrus)"],
  ["Your own store", "the owned customer", "var(--pl-violet)"],
  ["Walmart US", "retail scale", "var(--pl-sky)"],
  ["Where the category lives", "chosen, not assumed", "var(--pl-aqua)"],
] as const;

const LEDGER: [string, string, string?][] = [
  ["", "customer pays", "var(--pl-citrus)"],
  ["−", "product cost, freight and duty"],
  ["−", "marketplace fees"],
  ["−", "advertising"],
  ["−", "returns"],
  ["−", "operations"],
  ["=", "contribution margin", "var(--pl-lime)"],
  ["→", "cash to grow"],
  ["→", "inventory, products, channels"],
];

const nn = (i: number) => String(i + 1).padStart(2, "0");

export default function Page() {
  return (
    <main id="main" className={`pl ${display.variable}`}>
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

      {/* 1 · HERO */}
      <section className="pl-hero">
        <div className="wrap pl-hero-grid">
          <div className="pl-hero-copy">
            <div className="pl-m pl-ink pl-eyebrow">
              <span className="pl-sq" style={{ background: "var(--pl-violet)", width: 10, height: 10, flexBasis: 10, borderRadius: 2 }} />
              Private label
            </div>
            <h1>Build a brand, not a listing.</h1>
            <p className="pl-lead">
              Private label is not the business model. It&apos;s where the business starts. From there: a product that earns its place, a brand around it, the channels it deserves, and numbers you can read by product.
            </p>
            <div className="pl-btns">
              <a className="pl-btn pl-primary" href={BOOKING}>Book a call</a>
              <a className="pl-btn" href="#lifecycle">
                See how it works <span className="pl-mono" aria-hidden="true">&darr;</span>
              </a>
            </div>
          </div>
          <Stair />
        </div>
      </section>

      {/* 2 · WHERE YOU START */}
      <section id="where-you-start">
        <div className="wrap pl-stack">
          <div className="pl-lab">
            <div className="pl-m">Where you start</div>
            <div className="pl-head">
              <h2>Four ways in. The same discipline after that.</h2>
              <p className="pl-sub">There is no single starting point. The starting point changes. The discipline doesn&apos;t.</p>
            </div>
          </div>
          <div className="pl-ways">
            {WAYS_IN.map((w, i) => (
              <Reveal key={w.tag} className="pl-way" delay={i * 0.06}>
                <div className="pl-m pl-ink pl-eyebrow">
                  <span className="pl-sq" style={{ background: w.color }} />
                  {w.tag}
                </div>
                <p className="pl-d7">{w.q}</p>
                <p>{w.body}</p>
              </Reveal>
            ))}
          </div>
          <Converge />
        </div>
      </section>

      {/* 3 · SELECTION */}
      <section id="selection" data-feature="selection-tests">
        <div className="wrap pl-stack">
          <p className="pl-d" style={{ maxWidth: 1040 }}>
            The expensive mistake is never the launch. <span className="pl-violet">It&apos;s the product.</span>
          </p>
          <div className="pl-select">
            <div className="pl-select-copy">
              <h2 className="pl-h2-sm">Most of what we look at, we don&apos;t build.</h2>
              <p>
                Seven tests, run before anything is ordered: the category, the barrier to entry, where the demand actually sits, what the leaders have left open, how the product behaves on returns, the advantage we could build, and the arithmetic at a price the market already pays. Most candidates fail. A reject costs a fee. Continuing past one costs the inventory.
              </p>
              <a className="pl-link" href="/proof">
                See a written verdict <span className="pl-mono" aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <Gates />
          </div>
        </div>
      </section>

      {/* 4 · THE LIFECYCLE */}
      <section id="lifecycle">
        <div className="wrap pl-stack">
          <div className="pl-lab">
            <div className="pl-m">How it works</div>
            <div className="pl-head">
              <h2>One product can be the business. Or the start of one.</h2>
              <p className="pl-sub" style={{ maxWidth: 760 }}>
                Some clients want one product built properly. Others want a position in a market with a range behind it. The method does not change between them &mdash; only how many times it runs, and what decides the next product.
              </p>
            </div>
          </div>

          {/* two states of the same thing */}
          <div className="pl-two">
            <div className="pl-half pl-one">
              <div className="pl-half-head">
                <div className="pl-m pl-ink">One product</div>
                <p>Built properly, operated properly, and able to stand on its own.</p>
              </div>
              <Reveal className="pl-shelf">
                <Product name="range-moisturiser" alt="Daily moisturiser jar beside its retail carton, one product on its own" height={234} priority />
              </Reveal>
              <OneSpine width={300} />
              <Reveal className="pl-tags" delay={0.8}><span className="pl-tag">Amazon</span></Reveal>
            </div>
            <div className="pl-two-rule" />
            <div className="pl-half pl-many">
              <div className="pl-half-head">
                <div className="pl-m pl-ink">A brand</div>
                <p>A customer, a position, and a range where each product earns the next.</p>
              </div>
              <div className="pl-shelf-row">
                {RANGE.map((p, i) => (
                  <Reveal key={p.name} className="pl-slot" delay={0.2 + i * 0.7}>
                    <Product name={p.name} alt={p.alt} height={p.h} />
                  </Reveal>
                ))}
              </div>
              <RangeSpines n={5} width={876} />
              <Reveal className="pl-tags" delay={3.8}>
                {CHANNELS.map(([c], i) => (
                  <span key={c} className={`pl-tag${i === 3 ? " v" : ""}`}>{c}</span>
                ))}
              </Reveal>
            </div>
          </div>

          {/* the eight stages — one list; a track on desktop, a rail on the phone */}
          <div className="pl-stages-wrap">
            <StagesRail />
            <div className="pl-track-line" aria-hidden="true" />
            <ol className="pl-stage-list" data-feature="stages">
              {STAGES.map(([name, line], i) => (
                <li key={name} className={`stage-row pl-stage${i === 7 ? " pl-last" : ""}`}>
                  <span className="pl-n">{nn(i)}</span>
                  <h3>{name}</h3>
                  <p>{line}</p>
                </li>
              ))}
            </ol>
            <StagesLoop />
          </div>
          <p className="pl-d7 pl-stage08">Stage 08 is where the next opportunity comes from.</p>
          <p className="pl-closing">Same eight stages either way. Only the number of times we run them changes.</p>
        </div>
      </section>

      {/* 5 · ECONOMICS */}
      <section id="economics">
        <div className="wrap pl-econ">
          <div className="pl-head">
            <div className="pl-m">Economics</div>
            <h2 className="pl-h2-sm" style={{ fontSize: "clamp(34px, 3.4vw, 48px)" }}>What can sell and what can make money are different questions.</h2>
            <p>
              Before anything is ordered we model the unit &mdash; landed cost, fees, freight, returns and advertising against a price the market already pays &mdash; then the cash the first order ties up and what the second one will need. A product that cannot clear the floor does not get built, however good the idea is.
            </p>
          </div>
          <Reveal className="pl-ledger">
            {LEDGER.map(([sign, label, bg], i) => (
              <div key={label} className={`pl-row${i === 5 ? " pl-sum" : ""}`}>
                <span className={`pl-sign${sign === "−" ? " minus" : sign === "=" ? " eq" : ""}`}>{sign || " "}</span>
                {bg ? <span className="pl-chip" style={{ background: bg }}>{label}</span> : <span>{label}</span>}
              </div>
            ))}
            <div className="pl-row pl-end">
              <span className="pl-sign eq">=</span>
              <span className="pl-chip pl-worth">what the business is worth</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 · CHANNELS */}
      <section id="channels">
        <div className="wrap pl-stack">
          <p className="pl-d pl-d-md" style={{ maxWidth: 1000 }}>Amazon can be where we start. It doesn&apos;t have to be where the brand ends.</p>
          <div className="pl-chan">
            <div className="pl-chan-copy">
              <h2 className="pl-h2-xs">Built for the customer. Not for one channel.</h2>
              <p>
                The brand, the content and the packaging are made once and used everywhere &mdash; your own store, Walmart, retail, wherever the category actually lives. Which channels, and in what order, follows the customer and the economics.
              </p>
            </div>
            <div className="pl-chan-wide">
              <ChannelsTop />
              <div className="pl-chan-grid">
                {CHANNELS.map(([name, line, color], i) => (
                  <Reveal key={name} className="pl-chan-col" delay={0.6 + i * 0.12}>
                    <span className="pl-sq" style={{ background: color }} />
                    <span className="pl-d7">{name}</span>
                    <p>{line}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="pl-chan-list">
              <ChannelsRail />
              <div>
                {CHANNELS.map(([name, line, color]) => (
                  <div key={name} className="pl-chan-item">
                    <span className="pl-sq" style={{ background: color }} />
                    <div>
                      <div className="pl-d7">{name}</div>
                      <p>{line}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · TIMING — stages, no durations */}
      <section id="timing">
        <div className="wrap pl-lab" style={{ alignItems: "start" }}>
          <div className="pl-m">Timing</div>
          <div className="pl-stack" style={{ maxWidth: 900 }}>
            <div className="pl-head">
              <h2>It takes as long as the product takes.</h2>
              <p className="pl-sub" style={{ maxWidth: 780 }}>
                From Stage 01 to launch is Stage 06. How long that takes depends on what you are building &mdash; a product that already exists moves quickly, a product that has to be made from nothing does not. We do not give you a date before we know which one it is.
              </p>
            </div>
            <TimingPath />
            <div className="pl-pace">
              <div className="pl-m">What sets the pace</div>
              <div className="pl-pace-list">
                <span>sample rounds</span><span className="pl-dot">&middot;</span>
                <span>testing and certification</span><span className="pl-dot">&middot;</span>
                <span>factory calendars</span><span className="pl-dot">&middot;</span>
                <span>freight</span><span className="pl-dot">&middot;</span>
                <span>marketplace approvals</span>
              </div>
            </div>
            <p className="pl-d7 pl-timing-close">Every stage gets a start date when we agree the plan. If one slips, you hear in the week it slips &mdash; not at the end.</p>
          </div>
        </div>
      </section>

      {/* 8 · END TO END — two doors, one operation */}
      <section id="end-to-end">
        <div className="wrap pl-stack">
          <div className="pl-lab">
            <div className="pl-m">End to end</div>
            <div className="pl-head">
              <h2>From the idea to the shelf. And everything after the shelf.</h2>
              <p className="pl-sub" style={{ maxWidth: 780 }}>
                We do not hand the brand back at launch. The team that chose the product runs it &mdash; inventory, advertising, account health, margin by product &mdash; and decides what it builds next. Two doors in. One operation.
              </p>
            </div>
          </div>
          <div className="pl-e2e-wide"><Junction /></div>
          <div className="pl-e2e-narrow pl-stack" style={{ gap: 20 }}>
            <div className="pl-rails">
              <div className="pl-rail">
                <div className="pl-m pl-ink">Build</div>
                <p>You bring the idea, the product or the market.</p>
                {[["Choose", "seven tests, a verdict"], ["Build", "product, brand, supply"], ["Launch", "listing, stock, ads"]].map(([a, b]) => (
                  <div key={a} className="pl-rail-step"><span className="pl-d7">{a}</span><span>{b}</span></div>
                ))}
              </div>
              <div className="pl-rail pl-sky">
                <div className="pl-m pl-ink">Take over</div>
                <p>You bring a brand that already sells.</p>
                {[["Diagnose", "catalog and economics read"], ["Fix", "what the numbers will not survive"], ["Relaunch", "content, stock, ads rebuilt"]].map(([a, b]) => (
                  <div key={a} className="pl-rail-step"><span className="pl-d7">{a}</span><span>{b}</span></div>
                ))}
              </div>
            </div>
            <Merge />
            <div className="pl-shared">
              <div className="pl-rail-step"><span className="pl-d7">Operate</span><span>margin by product, monthly</span></div>
              <div className="pl-rail-step"><span className="pl-d7">Expand</span><span>the next product, the next channel</span></div>
              <div className="pl-m" style={{ color: "var(--pl-violet)" }}>Next &darr;</div>
            </div>
          </div>
          <div className="pl-lab" style={{ alignItems: "center" }}>
            <div />
            <div className="pl-own">
              <p className="pl-d7">In your name from the first day: the trademark, the accounts, the suppliers, the data. Remove our access whenever you like.</p>
              <div className="pl-own-side">
                <p>Operating is its own service. Brands we build get it from launch; brands we take over start there.</p>
                <a className="pl-btn pl-sm" href="/amazon-walmart-management">
                  How we run accounts <span className="pl-mono" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SEARCH ANSWER — unchanged (PROMPT_33 §3) */}
      <section id="what-an-agency-does">
        <div className="wrap pl-lab" style={{ alignItems: "start" }}>
          <div />
          <div className="pl-answer">
            <h2 className="pl-h2-xs">What does an Amazon private label agency do?</h2>
            <div className="snippet">
              <p>
                An Amazon private label agency researches product opportunities, verifies the unit economics, sources a manufacturer, builds the brand and packaging, creates the listing, and launches the product. After launch it runs advertising, inventory and account operations.
              </p>
            </div>
            <div className="pl-cols">
              <div>
                <p>
                  Private label means having a product manufactured and sold under your own brand rather than reselling someone else&apos;s. You own the brand and the margin. Brand Registry gives you control of the listing content. You also carry the risk if the product does not sell, which is why the research has to be honest before the money moves.
                </p>
                <p>
                  Our private label service covers product and market research, product development, supplier sourcing, samples and quality specification, packaging and compliance, listing creation with A+ content, and the Amazon and Walmart US launch itself.
                </p>
              </div>
              <div>
                <p>
                  After launch, the same team runs the account: inventory and replenishment, advertising and ranking, cases and account health, and a monthly report showing margin by product rather than revenue by product.
                </p>
                <p>
                  We work on Amazon in the US, UK, Europe and the Middle East, and on Walmart in the US. Clients include brand owners, manufacturers selling direct, and investors putting capital into Amazon and Walmart businesses, wherever they are based.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — seven, unchanged; JSON-LD from the same strings */}
      <Faq items={FAQS} kicker="FAQ" />

      {/* CTA */}
      <section className="pl-cta" id="contact">
        <div className="wrap pl-cta-grid">
          <div className="pl-swatches" aria-hidden="true">
            {WAYS_IN.map((w) => <span key={w.tag} className="pl-sq" style={{ background: w.color }} />)}
          </div>
          <div className="pl-cta-copy">
            <h2>Tell us where you are starting.</h2>
            <p className="pl-sub">
              Tell us the category you are thinking about, or the brand you already run. We will tell you honestly whether it is worth the money before you spend any.
            </p>
            <div className="pl-btns">
              <a className="pl-btn pl-primary" href={BOOKING}>Book a call</a>
              <a className="pl-btn" href="/contact#form">Send context instead</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

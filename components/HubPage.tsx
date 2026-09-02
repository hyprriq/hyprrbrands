import SitePageShell from "@/components/SitePageShell";
import Link from "next/link";
import { pagesByEngine, type Engine } from "@/lib/site-map";

/**
 * Hub page template — design system HubPage: the engine band hero is
 * the whole colour budget, the §11 hub diagram is a wrapping chain
 * inside it, service cards state the business problem, and the page
 * stays under 400 words. Not a service page: no H2 spine, no FAQ, no
 * proof section — it links down, it does not compete.
 *
 * GAP 1: the Grow hub has THREE service cards. DTC growth is an
 * anchored section on /shopify-dtc; its manifest entry is the
 * #growth alias, which hub cards exclude.
 */
const HUBS: Record<
  Exclude<Engine, null>,
  {
    name: string;
    band: string;
    dot: string;
    title: string;
    meta: string;
    h1: string;
    lead: string;
    nodes: string[];
    servicesTitle: string;
    connectsTitle: string;
    connects: string[];
    /** Rendered after the connects paragraphs, with an inline link. */
    connectsLink?: { before: string; href: string; label: string };
  }
> = {
  build: {
    name: "Build",
    band: "bg-build-band",
    dot: "bg-build",
    title: "Build an Ecommerce Business | Hyprr Brands",
    meta: "Four ways to build: wholesale, private label, Shopify/DTC, or the infrastructure underneath. Different problems, the same ownership rules.",
    h1: "Build an ecommerce business that is yours to keep",
    lead: "Four ways to build: buy and operate a catalogue, take a product to market as a brand, build a direct customer journey, or build the commerce infrastructure underneath. Each is a different business problem with the same ownership rules.",
    nodes: ["Wholesale", "Private label", "Shopify / DTC", "Website development"],
    servicesTitle: "Four ways to build",
    connectsTitle: "How Build connects to Grow and Operate",
    connects: [
      "Build decides what the business sells and through what. That decision sets the ceiling on everything after it: a catalogue bought at the wrong landed cost cannot be advertised into profit, and a product that failed validation cannot be operated into demand. Most of what looks like a growth problem in year two was a build decision in month two.",
      "Which is why the same people carry it forward. The economics read that approved a catalogue line becomes the margin floor that growth work respects. The compliance gates cleared at launch become the account health the operations desk monitors. Handing a build to one firm and its consequences to another is how businesses end up with three providers and nobody accountable for the arithmetic.",
    ],
  },
  grow: {
    name: "Grow",
    band: "bg-grow-band",
    dot: "bg-grow",
    title: "Grow an Ecommerce Business | Hyprr Brands",
    meta: "Demand, acquisition, conversion, channel, margin — in that order. Growth the operation can actually fulfil, sequenced against its constraints.",
    h1: "Grow demand without breaking the economics",
    lead: "Demand, acquisition, conversion, channel, margin — in that order. Growth that the operation cannot fulfil is not growth.",
    nodes: ["Demand", "Acquisition", "Conversion", "Channel", "Margin"],
    servicesTitle: "Three ways to grow",
    connectsTitle: "How Grow connects to Build and Operate",
    connects: [
      "Growth is constrained on both sides. What was built decides what can be grown — a catalogue with no margin headroom cannot be advertised into one. What is operated decides how fast — inventory cover, fulfilment capacity and case volume all cap the rate at which more demand is a good idea rather than a problem.",
      "So growth work here is mostly sequencing: identifying which constraint is currently binding, releasing it if that is cheaper than working around it, and taking the next action only when the operation can absorb it. That includes stopping. A growth action that would break fulfilment or push a line below its margin floor does not run, and the recommendation to wait is one we can afford to make because the fee follows realised margin rather than activity.",
    ],
    connectsLink: {
      before: "Direct-to-consumer growth is covered at",
      href: "/shopify-dtc#growth",
      label: "DTC growth",
    },
  },
  operate: {
    name: "Operate",
    band: "bg-operate-band",
    dot: "bg-operate",
    title: "Operate an Ecommerce Business | Hyprr Brands",
    meta: "Purchase, inventory, order, account, report, next decision. A desk with a cadence and a written path for when something goes wrong.",
    h1: "Keep the machine running every day",
    lead: "Purchase, inventory, order, account, report, next decision. Operations is a desk with a cadence and a written path for when something goes wrong.",
    nodes: [
      "Purchase",
      "Inventory",
      "Order",
      "Account",
      "Report",
      "Next decision",
    ],
    servicesTitle: "Three ways to operate",
    connectsTitle: "How Operate connects to Build and Grow",
    connects: [
      "Operations is where the other two are proved or disproved. A build's decisions show up as the desk's daily reality — the supplier terms, the compliance obligations, the platform's maintenance cost. A growth action's consequences arrive here within days: more orders, more cases, less cover.",
      "That is also why the reporting cadence matters more than it sounds. The weekly report is not an update, it is the input to the next build and growth decision — what sold, what stalled, what needs a decision from you. A business where operations reports upward into the same people making the growth calls compounds. One where they are separate providers spends its meetings reconciling versions of the same week.",
    ],
    connectsLink: {
      before: "Reporting detail is at",
      href: "/ecommerce-operations#reporting",
      label: "the weekly report sample",
    },
  },
};

/** Card problem lines — the design's H object strings (§30), not the
 *  manifest one-liners, which serve metadata. */
const PROBLEMS: Record<string, string> = {
  "/wholesale-ecommerce":
    "Buying and operating a catalogue on Amazon and Walmart.",
  "/private-label":
    "Deciding whether a product deserves to exist, then launching it.",
  "/shopify-dtc": "Turning a product into a direct customer journey.",
  "/ecommerce-website-development":
    "Building the technical commerce infrastructure.",
  "/ecommerce-growth":
    "Growth sequenced against inventory, margin and capacity.",
  "/marketplace-growth": "Listing, ranking, buy box and reviews as one loop.",
  "/ppc-paid-media": "Advertising connected to inventory, pricing and margin.",
  "/ecommerce-operations": "The daily operating desk.",
  "/marketplace-management":
    "Account health, compliance and execution on Amazon and Walmart.",
  "/shopify-management": "Running the storefront after launch.",
};

export default function HubPage({ engine }: { engine: Exclude<Engine, null> }) {
  const hub = HUBS[engine];
  // Anchor aliases (DTC growth → /shopify-dtc#growth) are list entries,
  // not pages — they carry no card of their own. A3: cards render only
  // for live pages, so every card is a working link; the hub grows as
  // pages ship.
  const services = pagesByEngine(engine).filter(
    (s) => !s.slug.includes("#") && s.status === "live"
  );

  return (
    <SitePageShell>
      {/* Engine band hero: the whole colour budget */}
      <section className={hub.band}>
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,6vw,80px)]">
          <nav
            aria-label="Breadcrumb"
            className="font-mono type-label text-label normal-case tracking-normal flex gap-2"
          >
            <Link href="/" className="text-label hover:text-ink">
              Home
            </Link>
            <span>/</span>
            <span className="text-ink">{hub.name}</span>
          </nav>
          <h1 className="font-display type-h1 text-ink m-0 mt-4 max-w-[16ch] text-balance">
            {hub.h1}
          </h1>
          <p className="type-lead text-body m-0 mt-5 max-w-[56ch]">
            {hub.lead}
          </p>
          {/* §11 hub diagram — horizontal chain, wrapping on mobile */}
          <div className="flex flex-wrap gap-2 items-center mt-9">
            {hub.nodes.map((n, i) => (
              <div key={n} className="flex gap-2 items-center">
                <span className="bg-white border border-ink/15 rounded-sm px-3.5 py-2.5 font-semibold text-ink type-meta">
                  {n}
                </span>
                {i < hub.nodes.length - 1 && (
                  <span className="text-ink">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White: the service cards — each states the business problem */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,72px)]">
          <h2 className="font-display type-h3 text-ink m-0">
            {hub.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {services.map((s) => (
              <div
                key={s.slug}
                className="border border-line rounded-md p-[22px] grid gap-2.5 content-start hover:border-ink transition-colors"
              >
                <span className={`w-3 h-3 rounded-full ${hub.dot}`} />
                <b className="text-ink type-lead font-bold leading-snug tracking-[-.01em]">
                  {s.title}
                </b>
                <span className="type-meta text-body">
                  {PROBLEMS[s.slug] ?? `${s.oneLine}.`}
                </span>
                <a
                  href={s.slug}
                  className="text-ink hover:text-ink font-medium type-meta mt-1"
                >
                  Read the page →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White: how this engine connects to the other two */}
      <section className="bg-white border-t border-line">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,64px)]">
          <h2 className="font-display type-h3 text-ink m-0">
            {hub.connectsTitle}
          </h2>
          <div className="mt-4 max-w-[62ch] grid gap-3.5">
            {hub.connects.map((p, i) => (
              <p key={i} className="type-body text-body m-0">
                {p}
              </p>
            ))}
            {hub.connectsLink && (
              <p className="type-body text-body m-0">
                {hub.connectsLink.before}{" "}
                <a
                  href={hub.connectsLink.href}
                  className="text-ink hover:text-ink font-semibold"
                >
                  {hub.connectsLink.label} →
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Petrol: CTA */}
      <section className="bg-field text-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(48px,6vw,80px)]">
          <p className="font-display type-h2 text-white m-0 max-w-[16ch] text-balance">
            Not sure which page is yours?
          </p>
          <div className="flex gap-[22px] items-center mt-7 flex-wrap">
            <a
              href="/contact"
              className="bg-build text-ink hover:text-ink type-body font-bold px-[22px] py-3.5 rounded-md min-h-12 inline-flex items-center"
            >
              Let&apos;s talk
            </a>
            <a
              href="/how-we-work"
              className="text-white hover:text-white type-body font-medium"
            >
              See how we work →
            </a>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

export function hubMetadata(engine: Exclude<Engine, null>) {
  const hub = HUBS[engine];
  return {
    title: hub.title,
    description: hub.meta,
    alternates: { canonical: `/${engine}` },
  };
}

import SitePageShell from "@/components/SitePageShell";
import Link from "next/link";
import { pagesByEngine, pageFor, type Engine } from "@/lib/site-map";

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
    h1: string;
    lead: string;
    nodes: string[];
    servicesTitle: string;
  }
> = {
  build: {
    name: "Build",
    band: "bg-build-band",
    dot: "bg-build",
    h1: "Build an ecommerce business that is yours to keep",
    lead: "Four ways to build: buy and operate a catalogue, take a product to market as a brand, build a direct customer journey, or build the commerce infrastructure underneath. Each is a different business problem with the same ownership rules.",
    nodes: ["Wholesale", "Private label", "Shopify / DTC", "Website development"],
    servicesTitle: "Four ways to build",
  },
  grow: {
    name: "Grow",
    band: "bg-grow-band",
    dot: "bg-grow",
    h1: "Grow demand without breaking the economics",
    lead: "Demand, acquisition, conversion, channel, margin — in that order. Growth that the operation cannot fulfil is not growth.",
    nodes: ["Demand", "Acquisition", "Conversion", "Channel", "Margin"],
    servicesTitle: "Three ways to grow",
  },
  operate: {
    name: "Operate",
    band: "bg-operate-band",
    dot: "bg-operate",
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
  },
};

export default function HubPage({ engine }: { engine: Exclude<Engine, null> }) {
  const hub = HUBS[engine];
  // Anchor aliases (DTC growth → /shopify-dtc#growth) are list entries,
  // not pages — they carry no card of their own.
  const services = pagesByEngine(engine).filter((s) => !s.slug.includes("#"));

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
                <div className="flex justify-between items-center">
                  <span className={`w-3 h-3 rounded-full ${hub.dot}`} />
                  <span className="font-mono type-label text-label normal-case tracking-normal">
                    {s.slug}
                  </span>
                </div>
                <b className="text-ink type-lead font-bold leading-snug tracking-[-.01em]">
                  {s.title}
                </b>
                <span className="type-meta text-body">{s.oneLine}.</span>
                {s.status === "live" ? (
                  <a
                    href={s.slug}
                    className="text-ink hover:text-ink font-medium type-meta mt-1"
                  >
                    Read the page →
                  </a>
                ) : (
                  <span className="font-mono type-label text-label normal-case tracking-normal mt-1">
                    page publishing soon
                  </span>
                )}
              </div>
            ))}
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
  const page = pageFor(`/${engine}`)!;
  return {
    title: `${hub.name} | Hyprr Brands`,
    description: page.oneLine,
    alternates: { canonical: `/${engine}` },
  };
}

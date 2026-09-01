import SitePageShell from "@/components/SitePageShell";
import { pagesByEngine, pageFor, type Engine } from "@/lib/site-map";

/**
 * Hub page template — Build Spec section O: H1 naming the engine, a
 * sixty-word definition, the four service cards with one-line
 * definitions from D, one section on how the engine connects to the
 * other two, one CTA. Under 400 words; a hub that competes with its
 * own service pages dilutes them. Service cards link only when the
 * page is live in the manifest.
 */
const HUBS: Record<
  Exclude<Engine, null>,
  { title: string; accent: string; definition: string; connects: string }
> = {
  build: {
    title: "Build",
    accent: "border-t-build",
    definition:
      "Build is where the operation gets stood up: deciding what is worth selling, finding the supplier who can deliver it, and putting the store, listings and marketplace accounts around it. Wholesale on Amazon and Walmart, private label from research to launch, and Shopify for the direct channel — each built to be operated, not just launched.",
    connects:
      "Build decides what the operation sells. Growth then works that catalogue for demand and conversion, and Operations keeps the account healthy and produces the record the next build decision is made on.",
  },
  grow: {
    title: "Grow",
    accent: "border-t-grow",
    definition:
      "Grow is demand, advertising and conversion, run across marketplaces and your own store. Listings and content that rank, PPC judged on contribution margin rather than ad spend, and conversion work on the direct channel. Growth is planned against what the operation can actually carry — stock, cash and account health — not against a traffic target.",
    connects:
      "Growth runs on what Build stood up, and it exposes where the operation strains — which is exactly what Operations exists to absorb, and what the next build decision learns from.",
  },
  operate: {
    title: "Operate",
    accent: "border-t-operate",
    definition:
      "Operate is the daily work: purchase orders raised for your approval, replenishment against sell-through, inventory and stranded-stock checks, orders, returns and open cases, account health, and the monthly report that shows margin by SKU. It is the part of ecommerce nobody advertises and the part that decides whether the business holds.",
    connects:
      "Operations keep what Build created and Grow accelerated actually running — and they produce the record every next decision is made on. That record is the system the three engines share.",
  },
};

export default function HubPage({ engine }: { engine: Exclude<Engine, null> }) {
  const hub = HUBS[engine];
  const services = pagesByEngine(engine);
  const others = (["build", "grow", "operate"] as const).filter(
    (e) => e !== engine
  );

  return (
    <SitePageShell>
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(48px,6vw,88px)] pb-[clamp(40px,5vw,72px)]">
          <p className="type-label text-label uppercase mb-3">
            One of the three engines
          </p>
          <h1 className="font-display type-h1 text-ink m-0 mb-5">
            {hub.title}
          </h1>
          <p className="type-lead text-body m-0 max-w-[62ch]">
            {hub.definition}
          </p>
        </div>
      </section>

      <section className="bg-bone border-t border-line">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,72px)]">
          <h2 className="font-display type-h3 text-ink m-0 mb-6">
            The {hub.title} services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(14px,2vw,22px)]">
            {services.map((s) => (
              <div
                key={s.slug}
                className={`bg-white border border-line border-t-4 ${hub.accent} rounded-md p-6`}
              >
                <div className="type-body font-bold text-ink mb-1.5">
                  {s.status === "live" ? (
                    <a href={s.slug} className="text-ink hover:text-ink">
                      {s.title} →
                    </a>
                  ) : (
                    s.title
                  )}
                </div>
                <p className="type-meta text-body m-0">{s.oneLine}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-line">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,72px)]">
          <h2 className="font-display type-h3 text-ink m-0 mb-4">
            How {hub.title} connects to{" "}
            {others.map((e) => HUBS[e].title).join(" and ")}
          </h2>
          <p className="type-body text-body m-0 mb-8 max-w-[62ch]">
            {hub.connects}
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="/contact"
              className="bg-field text-white hover:text-white type-body font-semibold px-[26px] py-4 rounded-md min-h-12 inline-flex items-center"
            >
              Let&apos;s talk
            </a>
            <a
              href="/how-we-work"
              className="text-ink hover:text-ink type-body font-semibold px-[22px] py-4 rounded-md border border-line min-h-12 inline-flex items-center"
            >
              See how we work
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
    title: `${hub.title} | Hyprr Brands`,
    description: page.oneLine,
    alternates: { canonical: `/${engine}` },
  };
}

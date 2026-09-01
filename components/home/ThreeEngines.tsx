import Reveal from "./Reveal";

const ENGINES = [
  {
    id: "build",
    accent: "border-build border-t-build hover:bg-build/12",
    dot: "bg-build",
    title: "Build",
    copy: "Wholesale ecommerce on Amazon and Walmart, private label, Shopify and DTC storefronts.",
    items: ["Research", "Product", "Brand", "Store", "Marketplace"],
    href: "/wholesale",
    link: "Explore build →",
  },
  {
    id: "grow",
    accent: "border-grow border-t-grow hover:bg-grow/12",
    dot: "bg-grow",
    title: "Grow",
    copy: "Marketplace growth and DTC growth run as one plan, measured on contribution margin.",
    items: ["Demand", "Listings", "Acquisition", "Conversion", "PPC & paid media"],
    href: "/growth",
    link: "Explore growth →",
  },
  {
    id: "operate",
    accent: "border-operate border-t-operate hover:bg-operate/12",
    dot: "bg-operate",
    title: "Operate",
    copy: "Marketplace management, Shopify management and the daily operational work behind them.",
    items: ["Orders", "Inventory", "Cases", "Reporting", "Replenishment"],
    href: "/marketplace-management",
    link: "Explore operations →",
  },
];

/**
 * Three engines on the Bone rest band. Each card carries a 4px engine rule
 * across its top and the engine colour on its border; hover floods the card
 * with its engine colour at 12% (180ms) — colour as information.
 */
export default function ThreeEngines() {
  return (
    <section className="bg-bone">
      <Reveal className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(64px,7vw,110px)] pb-[clamp(28px,4vw,48px)]">
        <div>
          <h2 className="font-display type-h2 text-ink m-0 mb-5">
            Three engines. One operating partner.
          </h2>
          <div className="max-w-[62ch]">
            <p className="type-lead text-body m-0 mb-3">
              Most ecommerce businesses do not fail because they lack another
              strategy deck.
            </p>
            <p className="type-lead text-body m-0">
              They fail somewhere between deciding what to build, getting it to
              market, and keeping the operation healthy. Hyprr brings those
              jobs together.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-[1280px] px-[clamp(24px,4vw,56px)] pb-[clamp(60px,7vw,104px)]">
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-[clamp(14px,1.6vw,20px)] gap-y-[clamp(16px,2vw,22px)] items-stretch">
          {ENGINES.map((e) => (
            <div
              key={e.id}
              id={e.id}
              className={`relative bg-white border border-t-4 ${e.accent} rounded-md pt-[clamp(20px,2.2vw,28px)] px-[clamp(20px,2.2vw,28px)] pb-[clamp(22px,2.4vw,30px)] scroll-mt-[90px] flex flex-col transition-colors duration-[180ms]`}
            >
              <h3 className="font-display type-h3 text-ink m-0 mb-2">
                {e.title}
              </h3>
              <p className="type-body text-body m-0 mb-[22px]">{e.copy}</p>
              <ol className="list-none m-0 mb-6 p-0 grid gap-2.5 flex-1">
                {e.items.map((item) => (
                  <li key={item} className="type-body text-body">
                    {item}
                  </li>
                ))}
              </ol>
              <a href={e.href} className="type-body font-semibold">
                {e.link}
              </a>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-[clamp(22px,2.6vw,32px)] border-t border-line pt-5">
          <div className="flex items-center gap-[clamp(10px,1.6vw,18px)] flex-wrap type-label text-label uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-build" />
              Build
            </span>
            <span className="text-muted">→</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-grow" />
              Grow
            </span>
            <span className="text-muted">→</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-operate" />
              Operate
            </span>
            <span className="text-muted">→</span>
            <span className="flex items-center gap-2 text-ink font-semibold">
              <span className="w-2 h-2 rounded-full bg-ink" />
              Next decision ↺
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

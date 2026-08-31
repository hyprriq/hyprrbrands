import Reveal from "./Reveal";

const ENGINES = [
  {
    id: "build",
    num: "01",
    accent: "bg-citrus",
    gradient: "bg-[linear-gradient(90deg,#FFC84A,rgba(232,230,234,0))]",
    title: "Build",
    copy: "Wholesale ecommerce on Amazon and Walmart, private label, Shopify and DTC storefronts.",
    items: ["Research", "Product", "Brand", "Store", "Marketplace"],
    href: "/wholesale",
    link: "Explore build →",
  },
  {
    id: "grow",
    num: "02",
    accent: "bg-lime",
    gradient: "bg-[linear-gradient(90deg,#B8F34A,rgba(232,230,234,0))]",
    title: "Grow",
    copy: "Marketplace growth and DTC growth run as one plan, measured on contribution margin.",
    items: ["Demand", "Listings", "Acquisition", "Conversion", "PPC & paid media"],
    href: "/growth",
    link: "Explore growth →",
  },
  {
    id: "operate",
    num: "03",
    accent: "bg-aqua",
    gradient: "bg-[linear-gradient(90deg,#45D8C0,rgba(232,230,234,0))]",
    title: "Operate",
    copy: "Marketplace management, Shopify management and the daily operational work behind them.",
    items: ["Orders", "Inventory", "Cases", "Reporting", "Replenishment"],
    href: "/marketplace-management",
    link: "Explore operations →",
  },
];

export default function ThreeEngines() {
  return (
    <>
      <Reveal className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(64px,7vw,110px)] pb-[clamp(28px,4vw,48px)]">
        <div>
          <h2 className="font-display font-bold text-[clamp(30px,3.6vw,52px)] leading-[1.04] tracking-[-.03em] m-0 mb-5">
            Three engines.{" "}
            <span className="border-b-4 border-violet pb-0.5">
              One operating partner.
            </span>
          </h2>
          <div className="max-w-[62ch]">
            <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.65] text-body m-0 mb-3">
              Most ecommerce businesses do not fail because they lack another
              strategy deck.
            </p>
            <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.65] text-body m-0">
              They fail somewhere between deciding what to build, getting it to
              market, and keeping the operation healthy. Hyprr brings those
              jobs together.
            </p>
          </div>
        </div>
      </Reveal>

      <section className="mx-auto max-w-[1280px] px-[clamp(24px,4vw,56px)] pb-[clamp(60px,7vw,104px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-[clamp(14px,1.6vw,20px)] gap-y-[clamp(16px,2vw,22px)] items-stretch border-t border-line pt-4">
          {ENGINES.map((e) => (
            <Reveal
              key={e.id}
              id={e.id}
              className="relative bg-white border border-line rounded-[14px] pt-[clamp(20px,2.2vw,28px)] px-[clamp(20px,2.2vw,28px)] pb-[clamp(22px,2.4vw,30px)] scroll-mt-[90px] flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className={`w-[22px] h-[22px] rounded-md ${e.accent} text-ink font-mono text-[10.5px] flex items-center justify-center flex-none`}
                >
                  {e.num}
                </span>
                <span className={`flex-1 h-px ${e.gradient}`} />
              </div>
              <h3 className="font-display font-semibold text-[clamp(20px,2.2vw,28px)] tracking-[-.022em] m-0 mb-2">
                {e.title}
              </h3>
              <p className="text-base leading-[1.6] text-muted m-0 mb-[22px]">
                {e.copy}
              </p>
              <ol className="list-none m-0 mb-6 p-0 grid gap-[11px] flex-1">
                {e.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-[11px] items-center text-[14.5px]"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${e.accent} flex-none`}
                    />
                    {item}
                  </li>
                ))}
              </ol>
              <a href={e.href} className="text-[15px] font-semibold">
                {e.link}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-[clamp(22px,2.6vw,32px)] border-t border-line pt-5 flex items-center gap-[clamp(10px,1.6vw,18px)] flex-wrap text-[13px] tracking-[.06em] uppercase text-muted">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-[2px] bg-citrus" />
            Build
          </span>
          <span className="text-[#b6b2c0]">→</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-[2px] bg-lime" />
            Grow
          </span>
          <span className="text-[#b6b2c0]">→</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-[2px] bg-aqua" />
            Operate
          </span>
          <span className="text-[#b6b2c0]">→</span>
          <span className="flex items-center gap-2 text-violet font-semibold">
            <span className="w-2 h-2 rounded-[2px] bg-violet" />
            Next decision ↺
          </span>
        </Reveal>
      </section>
    </>
  );
}

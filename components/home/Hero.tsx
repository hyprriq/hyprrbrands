import Reveal from "./Reveal";

/**
 * Hero: headline + the layered "commerce operating system" card with three
 * drifting supporting fragments. Mobile recomposition follows the approved
 * baseline: below 900px the listing/storefront fragments hide and the
 * operations fragment flows in-line under the card; between 900–1179px the
 * side operations fragment hides so the card has room.
 */

const rowClass =
  "grid grid-cols-[96px_1fr_auto] gap-3 items-center border border-line rounded-xl px-3.5 py-3";
const rowLabelClass = "font-mono text-[10.5px] tracking-[.08em] text-muted";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-[clamp(24px,4vw,56px)] pt-[clamp(48px,6vw,96px)] pb-[clamp(44px,5vw,84px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[clamp(32px,4vw,72px)] items-center">
      <div>
        <div className="flex items-center gap-[9px] text-[11.5px] font-semibold tracking-[.14em] uppercase text-muted mb-[26px] flex-wrap">
          <span className="w-[7px] h-[7px] rounded-[2px] bg-citrus" />
          Build
          <span className="w-[7px] h-[7px] rounded-[2px] bg-lime ml-1.5" />
          Grow
          <span className="w-[7px] h-[7px] rounded-[2px] bg-aqua ml-1.5" />
          Operate
        </div>
        <h1 className="font-display font-bold text-[clamp(38px,5.2vw,70px)] leading-[1.02] tracking-[-.032em] m-0 mb-6 max-w-[15ch] text-balance">
          We don&apos;t advise on ecommerce.{" "}
          <span className="bg-[linear-gradient(transparent_62%,rgba(105,71,255,.28)_62%)]">
            We run it.
          </span>
        </h1>
        <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-body m-0 mb-[34px] max-w-[540px]">
          Hyprr builds, grows and operates ecommerce businesses across
          wholesale, private label and DTC — combining strategy, execution and
          ongoing management.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="#talk"
            className="bg-violet text-white hover:text-white font-semibold text-base px-[26px] py-4 rounded-[14px] min-h-12 flex items-center"
          >
            Let&apos;s talk
          </a>
          <a
            href="#how"
            className="text-ink hover:text-ink font-semibold text-base px-[22px] py-4 rounded-[14px] border border-[#d9d6de] min-h-12 flex items-center"
          >
            See how we work
          </a>
        </div>
        <div className="mt-8 flex gap-5 flex-wrap text-[13.5px] text-muted">
          <span>Wholesale · Amazon + Walmart</span>
          <span>Private label</span>
          <span>Shopify / DTC</span>
        </div>
      </div>

      <div className="relative min-w-0 flex flex-col min-[900px]:block py-0 min-[900px]:py-[clamp(86px,8vw,112px)]">
        {/* Fragment 1 — marketplace listing (desktop only) */}
        <div className="hidden min-[900px]:block absolute top-0 right-0 w-[min(300px,72%)] z-[1] opacity-55 bg-white border border-line rounded-[14px] p-4 shadow-[0_18px_40px_-30px_rgba(23,21,31,.5)] [animation:hy-drift_14s_ease-in-out_infinite]">
          <div className="font-mono text-[9.5px] tracking-[.1em] text-slate mb-3">
            MARKETPLACE LISTING
          </div>
          <div className="flex gap-[11px] items-center mb-[13px]">
            <div className="w-[38px] h-[38px] flex-none rounded-lg bg-[repeating-linear-gradient(135deg,#F3F1EC_0_6px,#FAFAF7_6px_12px)]" />
            <div className="min-w-0">
              <div className="text-[12.5px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                Everyday Set — 2pk
              </div>
              <div className="font-mono text-[10px] text-slate">SKU HB-2041</div>
            </div>
          </div>
          <div className="grid gap-[7px] text-[11.5px]">
            <div className="flex justify-between">
              <span className="text-muted">Price</span>
              <span className="font-medium">Set by client</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Inventory</span>
              <span className="font-medium">In stock</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Listing health</span>
              <span className="font-medium text-[#3f8f5f]">Good</span>
            </div>
          </div>
        </div>

        {/* Fragment 2 — storefront admin (desktop only) */}
        <div className="hidden min-[900px]:block absolute bottom-0 left-0 w-[min(268px,64%)] z-[1] opacity-50 bg-white border border-line rounded-[14px] p-4 shadow-[0_18px_40px_-30px_rgba(23,21,31,.5)] [animation:hy-drift-b_17s_ease-in-out_infinite]">
          <div className="font-mono text-[9.5px] tracking-[.1em] text-slate mb-3">
            STOREFRONT ADMIN
          </div>
          <div className="grid grid-cols-2 gap-[9px]">
            <div className="border border-line rounded-[9px] p-[9px]">
              <div className="text-[10px] text-muted mb-1">Orders</div>
              <div className="font-display font-semibold text-[15px]">Today</div>
            </div>
            <div className="border border-line rounded-[9px] p-[9px]">
              <div className="text-[10px] text-muted mb-1">Conversion</div>
              <div className="font-display font-semibold text-[15px]">
                Tracked
              </div>
            </div>
          </div>
          <div className="mt-2.5 h-[5px] rounded-[3px] bg-[linear-gradient(90deg,#45D8C0_0_46%,#E8E6EA_46%)]" />
        </div>

        {/* Fragment 3 — operations: subordinate in-line card AFTER the main
            card on mobile, floating side card on wide desktop, hidden in
            between */}
        <div className="relative w-full mt-4 opacity-85 order-2 min-[900px]:hidden min-[1180px]:block min-[1180px]:absolute min-[1180px]:top-[32%] min-[1180px]:right-[-22px] min-[1180px]:w-[min(184px,50%)] min-[1180px]:mt-0 min-[1180px]:opacity-50 z-[1] bg-ink text-cloud rounded-xl p-3.5 shadow-[0_18px_40px_-28px_rgba(23,21,31,.7)] min-[1180px]:[animation:hy-drift_19s_ease-in-out_infinite_reverse]">
          <div className="font-mono text-[9.5px] tracking-[.1em] text-dim mb-[11px]">
            OPERATIONS
          </div>
          <div className="grid gap-[11px] text-[11.5px] min-[1180px]:text-right">
            <div>
              <div className="text-fog text-[10px]">Orders</div>
              <div>Routed</div>
            </div>
            <div>
              <div className="text-fog text-[10px]">Inventory</div>
              <div className="text-aqua">Healthy</div>
            </div>
            <div>
              <div className="text-fog text-[10px]">Cases</div>
              <div>2 open</div>
            </div>
            <div>
              <div className="text-fog text-[10px]">Replenishment</div>
              <div>Next review</div>
            </div>
          </div>
        </div>

        {/* Main card — the commerce operating system */}
        <Reveal className="relative z-[2] order-1 w-[min(100%,452px)] bg-white border border-line rounded-[22px] p-[clamp(20px,2.4vw,30px)] shadow-[0_34px_80px_-40px_rgba(23,21,31,.5)]">
          <div className="flex justify-between items-center mb-5 gap-3 flex-wrap">
            <div className="text-[11px] font-semibold tracking-[.14em] uppercase text-muted">
              The commerce operating system
            </div>
            <div className="text-[11.5px] text-violet flex items-center gap-[7px]">
              <span className="w-[7px] h-[7px] rounded-full bg-violet [animation:hy-blink_2s_infinite]" />
              Live account
            </div>
          </div>
          <div className="grid gap-[9px]">
            <div className={rowClass}>
              <div className={rowLabelClass}>PRODUCT</div>
              <div className="text-[13.5px] font-medium">
                Opportunity shortlisted
              </div>
              <div className="w-[9px] h-[9px] rounded-[2px] bg-citrus" />
            </div>
            <div className={rowClass}>
              <div className={rowLabelClass}>SUPPLY</div>
              <div className="text-[13.5px] font-medium">
                Supplier terms confirmed
              </div>
              <div className="w-[9px] h-[9px] rounded-[2px] bg-citrus" />
            </div>
            <div className="grid grid-cols-[96px_1fr_auto] gap-3 items-center border border-violet rounded-xl px-3.5 py-[18px] bg-[#EDE8FF] [animation:hy-decide_4.5s_ease-in-out_infinite]">
              <div className="font-mono text-[10.5px] tracking-[.08em] text-violet">
                DECISION
              </div>
              <div className="text-[14.5px] font-semibold">
                Purchase awaiting client approval
              </div>
              <div className="text-[11px] font-semibold text-white bg-violet px-2 py-1 rounded-md">
                You
              </div>
            </div>
            <div className={rowClass}>
              <div className={rowLabelClass}>MARKETPLACE</div>
              <div className="text-[13.5px] font-medium">
                Listings live · Amazon, Walmart
              </div>
              <div className="w-[9px] h-[9px] rounded-[2px] bg-aqua" />
            </div>
            <div className={rowClass}>
              <div className={rowLabelClass}>CUSTOMER</div>
              <div className="text-[13.5px] font-medium">
                Orders routed and fulfilled
              </div>
              <div className="w-[9px] h-[9px] rounded-[2px] bg-aqua" />
            </div>
            <div className={rowClass}>
              <div className={rowLabelClass}>OPERATIONS</div>
              <div className="text-[13.5px] font-medium">
                Inventory and cases managed
              </div>
              <div className="w-[9px] h-[9px] rounded-[2px] bg-aqua" />
            </div>
            <div className={`${rowClass} bg-cloud`}>
              <div className={rowLabelClass}>NEXT</div>
              <div className="text-[13.5px] font-medium">
                Reporting informs the next decision
              </div>
              <div className="text-base text-muted">↻</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

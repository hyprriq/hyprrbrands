import Reveal from "./Reveal";

/**
 * Hero on the White ground. Per the Visual Build Spec: ambient drift
 * deleted, all fragments at full opacity (z-order and shadow do the
 * layering), fragments 1 and 3 visible on mobile stacked under the CTA,
 * primary CTA in Ink fill, and the "You" decision node keeps the single
 * violet moment — one hy-decide pulse on entry, then still.
 */

const rowClass =
  "grid grid-cols-[96px_1fr_auto] gap-3 items-center border border-line rounded-md px-3.5 py-3";
const rowLabelClass = "type-label text-label";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-[clamp(24px,4vw,56px)] pt-[clamp(40px,4.5vw,72px)] pb-[clamp(40px,4vw,64px)] grid grid-cols-1 min-[900px]:grid-cols-[1.15fr_0.85fr] gap-[clamp(32px,4vw,72px)] items-start">
      <div>
        <div className="flex items-center gap-[9px] type-label text-label uppercase mb-[26px] flex-wrap">
          <span className="w-[7px] h-[7px] rounded-full bg-build" />
          Build
          <span className="w-[7px] h-[7px] rounded-full bg-grow ml-1.5" />
          Grow
          <span className="w-[7px] h-[7px] rounded-full bg-operate ml-1.5" />
          Operate
        </div>
        <h1 className="font-display type-h1 text-ink m-0 mb-6 max-w-[18ch]">
          You own the business. We{" "}
          <span className="bg-operate-band px-2 rounded-sm">run the operation</span>.
        </h1>
        <p className="type-lead text-body m-0 mb-[34px] max-w-[540px]">
          Hyprr builds, grows and operates ecommerce businesses across Amazon,
          Walmart, Shopify and the other channels you sell on — wholesale,
          private label and DTC. We handle the research, sourcing, listings,
          launch, advertising and daily operations. You keep the accounts, the
          inventory and the final call on what gets bought.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="/contact"
            className="bg-field text-white hover:text-white type-body font-semibold px-[26px] py-4 rounded-md min-h-12 flex items-center"
          >
            Let&apos;s talk
          </a>
          <a
            href="/how-we-work"
            className="text-ink hover:text-ink type-body font-semibold px-[22px] py-4 rounded-md border border-line min-h-12 flex items-center"
          >
            See how we work
          </a>
        </div>
        <div className="mt-8 flex gap-5 flex-wrap type-meta text-muted">
          <span>Wholesale · Amazon + Walmart</span>
          <span>Private label</span>
          <span>Shopify / DTC</span>
        </div>
      </div>

      <div className="relative min-w-0 flex flex-col min-[900px]:block py-0 min-[900px]:pt-[clamp(8px,1.5vw,24px)]">
        {/* Fragment 1 — marketplace listing: in-flow on mobile, layered on desktop */}
        <div className="relative w-full order-2 mt-4 min-[900px]:mt-0 min-[900px]:absolute min-[900px]:top-0 min-[900px]:right-0 min-[900px]:w-[min(300px,72%)] z-[1] bg-white border border-line rounded-md p-4 shadow-[0_18px_40px_-30px_rgba(23,23,26,.5)]">
          <div className="type-label text-label mb-3">MARKETPLACE LISTING</div>
          <div className="flex gap-[11px] items-center mb-[13px]">
            <div className="w-[38px] h-[38px] flex-none rounded-sm bg-[repeating-linear-gradient(135deg,#EDEBE6_0_6px,#FFFFFF_6px_12px)]" />
            <div className="min-w-0">
              <div className="type-meta font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                Everyday Set — 2pk
              </div>
              <div className="type-label text-label">SKU HB-2041</div>
            </div>
          </div>
          <div className="grid gap-[7px] type-meta">
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
              <span className="font-medium text-ok">Good</span>
            </div>
          </div>
        </div>

        {/* Fragment 2 — storefront admin (desktop only) */}
        <div className="hidden min-[900px]:block absolute bottom-0 left-0 w-[min(268px,64%)] z-[1] bg-white border border-line rounded-md p-4 shadow-[0_18px_40px_-30px_rgba(23,23,26,.5)]">
          <div className="type-label text-label mb-3">STOREFRONT ADMIN</div>
          <div className="grid grid-cols-2 gap-[9px]">
            <div className="border border-line rounded-sm p-[9px]">
              <div className="type-label text-label mb-1">Orders</div>
              <div className="font-display font-bold type-meta">Today</div>
            </div>
            <div className="border border-line rounded-sm p-[9px]">
              <div className="type-label text-label mb-1">Conversion</div>
              <div className="font-display font-bold type-meta">Tracked</div>
            </div>
          </div>
          <div className="mt-2.5 h-[5px] rounded-full bg-[linear-gradient(90deg,#45D8C0_0_46%,#E4E2E8_46%)]" />
        </div>

        {/* Fragment 3 — operations: in-flow on mobile, side card on wide desktop */}
        <div className="relative w-full mt-4 order-3 min-[900px]:hidden z-[1] bg-ink text-white rounded-md p-3.5 shadow-[0_18px_40px_-28px_rgba(23,23,26,.7)]">
          <div className="type-label text-on-ink-mute mb-[11px]">OPERATIONS</div>
          <div className="grid gap-[11px] type-meta">
            <div>
              <div className="type-label text-on-ink-mute">Orders</div>
              <div>Routed</div>
            </div>
            <div>
              <div className="type-label text-on-ink-mute">Inventory</div>
              <div className="text-operate">Healthy</div>
            </div>
            <div>
              <div className="type-label text-on-ink-mute">Cases</div>
              <div>2 open</div>
            </div>
            <div>
              <div className="type-label text-on-ink-mute">Replenishment</div>
              <div>Next review</div>
            </div>
          </div>
        </div>

        {/* Main card — the commerce operating system */}
        <Reveal className="relative z-[2] order-1 w-[min(100%,452px)] bg-white border border-line rounded-lg p-[clamp(20px,2.4vw,30px)] shadow-[0_34px_80px_-40px_rgba(23,23,26,.5)]">
          <div className="flex justify-between items-center mb-5 gap-3 flex-wrap">
            <div className="type-label text-label uppercase">
              The commerce operating system
            </div>
            <div className="type-label text-label flex items-center gap-[7px]">
              <span className="w-[7px] h-[7px] rounded-full bg-operate" />
              Live account
            </div>
          </div>
          <div className="grid gap-[9px]">
            <div className={rowClass}>
              <div className={rowLabelClass}>PRODUCT</div>
              <div className="type-body font-medium">
                Opportunity shortlisted
              </div>
              <div className="w-[9px] h-[9px] rounded-full bg-build" />
            </div>
            <div className={rowClass}>
              <div className={rowLabelClass}>SUPPLY</div>
              <div className="type-body font-medium">
                Supplier terms confirmed
              </div>
              <div className="w-[9px] h-[9px] rounded-full bg-build" />
            </div>
            <div className="grid grid-cols-[96px_1fr_auto] gap-3 items-center border-[1.5px] border-ink rounded-md px-3.5 py-[18px] bg-white [animation:hy-decide_1.6s_ease-in-out_1]">
              <div className="type-label text-label">DECISION</div>
              <div className="type-body font-semibold">
                Purchase awaiting client approval
              </div>
              <div className="type-meta font-semibold text-white bg-link px-2 py-1 rounded-sm">
                You
              </div>
            </div>
            <div className={rowClass}>
              <div className={rowLabelClass}>MARKETPLACE</div>
              <div className="type-body font-medium">
                Listings live · Amazon, Walmart
              </div>
              <div className="w-[9px] h-[9px] rounded-full bg-operate" />
            </div>
            <div className={rowClass}>
              <div className={rowLabelClass}>CUSTOMER</div>
              <div className="type-body font-medium">
                Orders routed and fulfilled
              </div>
              <div className="w-[9px] h-[9px] rounded-full bg-operate" />
            </div>
            <div className={rowClass}>
              <div className={rowLabelClass}>OPERATIONS</div>
              <div className="type-body font-medium">
                Inventory and cases managed
              </div>
              <div className="w-[9px] h-[9px] rounded-full bg-operate" />
            </div>
            <div className={`${rowClass} bg-bone`}>
              <div className={rowLabelClass}>NEXT</div>
              <div className="type-body font-medium">
                Reporting informs the next decision
              </div>
              <div className="type-body text-muted">↻</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

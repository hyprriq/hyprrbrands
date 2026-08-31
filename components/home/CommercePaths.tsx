import Reveal from "./Reveal";

const placeholderTile =
  "bg-[repeating-linear-gradient(135deg,#F3F1EC_0_8px,#FAFAF7_8px_16px)]";

export default function CommercePaths() {
  return (
    <section id="paths" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(64px,7vw,110px)] pb-[clamp(24px,3vw,40px)]">
        <h2 className="font-display font-bold text-[clamp(30px,3.6vw,52px)] leading-[1.04] tracking-[-.03em] m-0 mb-4">
          Choose your{" "}
          <span className="bg-[linear-gradient(transparent_62%,rgba(255,200,74,.5)_62%)]">
            commerce path
          </span>
          .
        </h2>
        <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-body m-0 max-w-[60ch]">
          Three ways to work with Hyprr. Each one can be built from scratch or
          taken over from an existing operation.
        </p>
      </div>

      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pb-[clamp(30px,4vw,56px)]">
        {/* 01 — Wholesale */}
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(28px,4vw,56px)] items-center pb-[clamp(36px,5vw,60px)] border-b border-line">
          <div>
            <div className="font-mono text-xs text-muted mb-3.5">01</div>
            <h3 className="font-display font-bold text-[clamp(26px,2.8vw,38px)] tracking-[-.028em] m-0 mb-1.5">
              Wholesale ecommerce on Amazon and Walmart
            </h3>
            <p className="text-[16.5px] leading-[1.6] text-body m-0 mb-[22px] max-w-[46ch]">
              Build or take over an existing marketplace operation, with
              purchasing and inventory run against real margin.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-x-5 gap-y-2 text-[14.5px] text-body mb-[26px]">
              <div>Research</div>
              <div>Sourcing</div>
              <div>Account setup</div>
              <div>Listings</div>
              <div>Purchasing</div>
              <div>Inventory</div>
              <div>Operations</div>
              <div>Reporting</div>
            </div>
            <a href="/wholesale" className="text-[15.5px] font-semibold">
              Explore wholesale →
            </a>
          </div>
          <div className="bg-cloud border border-line rounded-[20px] p-[clamp(18px,2vw,26px)]">
            <div className="text-[11px] font-semibold tracking-[.14em] uppercase text-muted mb-[18px]">
              Order and replenishment flow
            </div>
            <div className="relative mb-[18px]">
              <div className="h-px bg-[linear-gradient(90deg,rgba(255,200,74,.2),rgba(255,200,74,.75),rgba(255,200,74,.2))]" />
              <div className="absolute top-[-3px] left-0 w-[7px] h-[7px] rounded-full bg-citrus [animation:hy-flow_6s_linear_infinite]" />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2.5">
              {[
                ["PO RAISED", "Approved by client"],
                ["RECEIVED", "Prep and check-in"],
                ["LISTED", "Amazon · Walmart"],
                ["REORDER", "Signalled from sell-through"],
              ].map(([label, text]) => (
                <div
                  key={label}
                  className="border border-line bg-white rounded-xl p-3.5"
                >
                  <div className="font-mono text-[10px] text-muted mb-2">
                    {label}
                  </div>
                  <div className="text-[13px] font-medium">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 02 — Private label */}
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(28px,4vw,56px)] items-center py-[clamp(36px,5vw,60px)] border-b border-line">
          <div className="grid gap-3.5 order-0">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3.5">
              <div
                className={`aspect-[4/5] rounded-[14px] border border-line ${placeholderTile} flex items-end p-3`}
              >
                <span className="font-mono text-[9.5px] text-slate">
                  product sample
                </span>
              </div>
              <div
                className={`aspect-[4/5] rounded-[14px] border border-line ${placeholderTile} flex items-end p-3`}
              >
                <span className="font-mono text-[9.5px] text-slate">
                  packaging
                </span>
              </div>
            </div>
            <div className="border border-line rounded-[14px] p-4 grid gap-2.5">
              <div className="flex justify-between text-[12.5px]">
                <span className="text-muted">Opportunity</span>
                <span className="font-medium">Validated</span>
              </div>
              <div className="h-px bg-line" />
              <div className="flex justify-between text-[12.5px]">
                <span className="text-muted">Supplier</span>
                <span className="font-medium">Shortlisted</span>
              </div>
              <div className="h-px bg-line" />
              <div className="flex justify-between text-[12.5px]">
                <span className="text-muted">Brand</span>
                <span className="font-medium">In development</span>
              </div>
              <div className="h-px bg-line" />
              <div className="flex justify-between text-[12.5px]">
                <span className="text-muted">Launch</span>
                <span className="text-coral font-semibold">
                  Awaiting approval
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="font-mono text-xs text-muted mb-3.5">02</div>
            <h3 className="font-display font-bold text-[clamp(26px,2.8vw,38px)] tracking-[-.028em] m-0 mb-1.5">
              Private label ecommerce from product research to launch
            </h3>
            <p className="text-[16.5px] leading-[1.6] text-body m-0 mb-[22px] max-w-[46ch]">
              From product opportunity to launch — then the ongoing operation
              behind it.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-x-5 gap-y-2 text-[14.5px] text-body mb-[26px]">
              <div>Product research</div>
              <div>Validation</div>
              <div>Supplier sourcing</div>
              <div>Product development</div>
              <div>Manufacturing</div>
              <div>Brand</div>
              <div>Marketplace launch</div>
              <div>Ongoing operations</div>
            </div>
            <a href="/private-label" className="text-[15.5px] font-semibold">
              Explore private label →
            </a>
          </div>
        </Reveal>

        {/* 03 — Shopify / DTC */}
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(28px,4vw,56px)] items-center pt-[clamp(36px,5vw,60px)]">
          <div>
            <div className="font-mono text-xs text-muted mb-3.5">03</div>
            <h3 className="font-display font-bold text-[clamp(26px,2.8vw,38px)] tracking-[-.028em] m-0 mb-1.5">
              Shopify and DTC ecommerce growth
            </h3>
            <p className="text-[16.5px] leading-[1.6] text-body m-0 mb-[22px] max-w-[46ch]">
              Build the direct channel on validated products, then optimise it
              as an operating asset.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-x-5 gap-y-2 text-[14.5px] text-body mb-[26px]">
              <div>Shopify</div>
              <div>Storefront</div>
              <div>Conversion</div>
              <div>Merchandising</div>
              <div>DTC growth</div>
              <div>Operations</div>
              <div>Ongoing optimization</div>
            </div>
            <a href="/shopify-dtc" className="text-[15.5px] font-semibold">
              Explore DTC →
            </a>
          </div>
          <div className="bg-white border border-line rounded-[20px] overflow-hidden shadow-[0_30px_70px_-44px_rgba(23,21,31,.4)]">
            <div className="flex items-center gap-2.5 px-4 py-[13px] border-b border-line">
              <div className="flex gap-[5px] flex-none">
                <span className="w-[9px] h-[9px] rounded-full bg-line" />
                <span className="w-[9px] h-[9px] rounded-full bg-line" />
                <span className="w-[9px] h-[9px] rounded-full bg-line" />
              </div>
              <div className="flex-1 min-w-0 bg-cloud rounded-[7px] text-[11.5px] text-muted px-2.5 py-[5px] overflow-hidden text-ellipsis whitespace-nowrap">
                yourbrand.com / collections
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-3">
                {["Everyday Set", "Refill Duo", "Starter Kit"].map((name) => (
                  <div key={name}>
                    <div
                      className={`aspect-square rounded-xl border border-line ${placeholderTile} flex items-end p-2`}
                    >
                      <span className="font-mono text-[9px] text-slate">
                        product
                      </span>
                    </div>
                    <div className="text-[12.5px] font-medium mt-2">{name}</div>
                  </div>
                ))}
              </div>
              <div className="mt-[18px] flex gap-2.5 flex-wrap items-center">
                <div className="bg-ink text-white text-[12.5px] font-semibold px-4 py-[11px] rounded-[10px]">
                  Add to cart
                </div>
                <div className="border border-aqua text-[12.5px] font-medium px-4 py-[11px] rounded-[10px] text-ink">
                  Subscribe &amp; save
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

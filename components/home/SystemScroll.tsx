/**
 * The signature section: a sticky card stack. Each state is its own
 * content-height card on an engine-band surface, sticking near the top as
 * the next slides over it — the visible stacked edges are the progress
 * indicator. The mechanic is pure CSS (see the #system rules in
 * globals.css): no scroll listeners, no rAF, no mode branching, and no
 * fixed-height pane, so clipping is structurally impossible and the
 * section works identically with JavaScript disabled.
 *
 * Reduced motion: the cards simply stack in normal flow (CSS).
 */

const CARD_META = [
  {
    surface: "bg-build-field",
    accent: "border-t-build",
    eyebrow: "STATE 01 / BUILD",
  },
  {
    surface: "bg-grow-field",
    accent: "border-t-grow",
    eyebrow: "STATE 02 / GROW",
  },
  {
    surface: "bg-operate-field",
    accent: "border-t-operate",
    eyebrow: "STATE 03 / OPERATE",
  },
  {
    surface: "bg-white",
    accent: "border-t-ink",
    eyebrow: "STATE 04 / COMMERCE SYSTEM",
  },
];

const artHeader = "flex justify-between gap-2 type-label text-label";
const artRow =
  "type-meta flex justify-between gap-2.5 border-t border-ink/12 pt-2";

export default function SystemScroll() {
  return (
    <section id="system" className="bg-field">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,110px)]">
        <h2 className="font-display type-h2 text-white m-0 mb-[clamp(28px,4vw,52px)] max-w-[24ch]">
          How Hyprr builds and operates ecommerce businesses
        </h2>

        <div data-stack className="grid gap-6">
          {/* STATE 01 / BUILD */}
          <article data-card="0" className={`${CARD_META[0].surface} text-ink`}>
            <div className="grid min-[900px]:grid-cols-[1.1fr_1fr] gap-[clamp(24px,3vw,48px)] items-center">
              <div>
                <p className={`type-label text-label m-0 mb-3`}>
                  {CARD_META[0].eyebrow}
                </p>
                <h3 className="font-display type-h3 text-ink m-0 mb-4">
                  Build the right commerce <span>foundation</span>.
                </h3>
                <div className="state-chips">
                  <div>Product &amp; supplier research</div>
                  <div>Brand &amp; packaging</div>
                  <div>Storefront build</div>
                  <div>Marketplace setup</div>
                  <div>Listings &amp; content</div>
                </div>
              </div>
              <div
                data-card-art className={`bg-white border border-line border-t-4 ${CARD_META[0].accent} rounded-md p-5 grid gap-3`}
              >
                <div className={artHeader}>
                  <span>RESEARCH SHORTLIST</span>
                  <span>01</span>
                </div>
                <div className="grid gap-2">
                  <div className={`${artRow} border-t-0 pt-0`}>
                    <span>Opportunity 01</span>
                    <span className="font-semibold">Validated</span>
                  </div>
                  <div className={artRow}>
                    <span>Opportunity 02</span>
                    <span className="font-semibold">Shortlisted</span>
                  </div>
                  <div className={artRow}>
                    <span>Opportunity 03</span>
                    <span className="font-semibold">Passed</span>
                  </div>
                </div>
                <div className="type-meta font-medium">
                  Research → supplier → listing → live
                </div>
              </div>
            </div>
          </article>

          {/* STATE 02 / GROW */}
          <article data-card="1" className={`${CARD_META[1].surface} text-ink`}>
            <div className="grid min-[900px]:grid-cols-[1.1fr_1fr] gap-[clamp(24px,3vw,48px)] items-center">
              <div>
                <p className={`type-label text-label m-0 mb-3`}>
                  {CARD_META[1].eyebrow}
                </p>
                <h3 className="font-display type-h3 text-ink m-0 mb-4">
                  Turn the operation into a <span>growth engine</span>.
                </h3>
                <div className="state-chips">
                  <div>Demand &amp; keyword research</div>
                  <div>PPC &amp; paid media</div>
                  <div>Conversion</div>
                  <div>Marketplace growth</div>
                  <div>DTC growth</div>
                </div>
              </div>
              <div
                data-card-art className={`bg-white border border-line border-t-4 ${CARD_META[1].accent} rounded-md p-5 grid gap-3`}
              >
                <div className={artHeader}>
                  <span>LISTING</span>
                  <span>02</span>
                </div>
                <div className="grid gap-2">
                  <div className={`${artRow} border-t-0 pt-0`}>
                    <span>Everyday Set — 2pk</span>
                    <span className="font-semibold">Live</span>
                  </div>
                  <div className={artRow}>
                    <span>PPC bid</span>
                    <span className="font-semibold">Set by client</span>
                  </div>
                  <div className={artRow}>
                    <span>Search terms</span>
                    <span className="font-semibold">Mapped</span>
                  </div>
                </div>
                <div className="type-meta font-medium">
                  Demand → paid media → conversion
                </div>
              </div>
            </div>
          </article>

          {/* STATE 03 / OPERATE */}
          <article data-card="2" className={`${CARD_META[2].surface} text-ink`}>
            <div className="grid min-[900px]:grid-cols-[1.1fr_1fr] gap-[clamp(24px,3vw,48px)] items-center">
              <div>
                <p className={`type-label text-label m-0 mb-3`}>
                  {CARD_META[2].eyebrow}
                </p>
                <h3 className="font-display type-h3 text-ink m-0 mb-4">
                  Keep it running <span>every single day</span>.
                </h3>
                <p className="type-body text-body m-0 mb-4 max-w-[44ch]">
                  Orders, inventory, listings, cases — and the report at the end of it.
                </p>
                <div className="state-chips">
                  <div>Order &amp; inventory management</div>
                  <div>Marketplace management</div>
                  <div>Shopify management</div>
                  <div>Account health</div>
                  <div>Reporting</div>
                </div>
              </div>
              <div
                data-card-art className={`bg-white border border-line border-t-4 ${CARD_META[2].accent} rounded-md p-5 grid gap-3`}
              >
                <div className={artHeader}>
                  <span>PURCHASE ORDER</span>
                  <span>03</span>
                </div>
                <div className="grid gap-2">
                  <div className={`${artRow} border-t-0 pt-0`}>
                    <span>Everyday Set — 2pk</span>
                    <span className="font-semibold">Restock</span>
                  </div>
                  <div className={`${artRow} font-bold`}>
                    <span>Approved by client</span>
                    <span aria-hidden="true">✓</span>
                  </div>
                </div>
                <div className="type-meta font-medium">
                  Purchase → inventory → orders → report
                </div>
              </div>
            </div>
          </article>

          {/* STATE 04 / COMMERCE SYSTEM */}
          <article data-card="3" className={`${CARD_META[3].surface} text-ink`}>
            <div className="grid min-[900px]:grid-cols-[1.1fr_1fr] gap-[clamp(24px,3vw,48px)] items-center">
              <div>
                <p className={`type-label text-label m-0 mb-3`}>
                  {CARD_META[3].eyebrow}
                </p>
                <h3 className="font-display type-h3 text-ink m-0 mb-4">
                  Three engines, one system of record.
                </h3>
                <div className="type-body text-body grid gap-1.5 mb-5">
                  <div>Build decides what the operation sells.</div>
                  <div>Growth exposes where the operation strains.</div>
                  <div>Operations produce the record the next decision is made on.</div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-field text-white hover:text-white type-body font-semibold px-[22px] py-[13px] rounded-md"
                >
                  Talk to the team that runs it
                </a>
              </div>
              <div
                data-card-art className={`bg-bone border border-line border-t-4 ${CARD_META[3].accent} rounded-md p-5 grid gap-3`}
              >
                <div className={artHeader}>
                  <span>COMMERCE SYSTEM</span>
                  <span>04</span>
                </div>
                <div className="grid gap-2">
                  <div className={`${artRow} border-t-0 pt-0`}>
                    <span className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-build" />
                      Build
                    </span>
                    <span aria-hidden="true">↓</span>
                  </div>
                  <div className={artRow}>
                    <span className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-grow" />
                      Grow
                    </span>
                    <span aria-hidden="true">↓</span>
                  </div>
                  <div className={artRow}>
                    <span className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-operate" />
                      Operate
                    </span>
                    <span aria-hidden="true">↓</span>
                  </div>
                  <div className={`${artRow} font-semibold`}>
                    <span className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-ink" />
                      Next decision ↺
                    </span>
                  </div>
                </div>
                <div className="type-meta font-medium">
                  Build ↓ Grow ↓ Operate ↓ Next decision
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

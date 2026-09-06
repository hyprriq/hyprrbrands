import Reveal from "./Reveal";
import { isLive } from "@/lib/site-map";

const placeholderTile =
  "bg-[repeating-linear-gradient(135deg,#EDEBE6_0_8px,#FFFFFF_8px_16px)]";

/** Manifest-aware path CTA: a link once the service page is live. */
function PathCta({ slug, label }: { slug: string; label: string }) {
  return isLive(slug) ? (
    <a href={slug} className="type-body font-semibold">
      {label}
    </a>
  ) : (
    <span className="type-body font-semibold text-muted">{label}</span>
  );
}

/**
 * Commercial paths — A.08. Three engagements; chips are deliverables,
 * not pages. hy-flow stays on the replenishment line.
 */
export default function CommercePaths() {
  return (
    <section id="paths" className="bg-white">
      <Reveal className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(64px,7vw,110px)] pb-[clamp(24px,3vw,40px)]">
        <h2 className="font-display type-h2 text-ink m-0 mb-4">
          Choose your commerce path.
        </h2>
        <p className="type-lead text-body m-0 max-w-[60ch]">
          Three ways to work with Hyprr. Each one can be built from scratch or
          taken over from an operation that already exists.
        </p>
      </Reveal>

      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pb-[clamp(30px,4vw,56px)]">
        {/* 01 — Wholesale (Build) */}
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(28px,4vw,56px)] items-center pb-[clamp(36px,5vw,60px)] border-b border-line">
          <div>
            <p className="type-label text-label m-0 mb-3.5">01</p>
            <h3 className="font-display type-h3 text-ink m-0 mb-1.5">
              Amazon & Walmart wholesale management
            </h3>
            <p className="type-body text-body m-0 mb-[22px] max-w-[46ch]">
              Build a wholesale operation — or take over one that already
              exists — around products and suppliers that make commercial
              sense. We source, buy in your name, list, price, advertise and
              run the account day to day.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-5 gap-y-2 type-body text-body mb-[26px]">
              <div>Product &amp; supplier research</div>
              <div>Supplier outreach</div>
              <div>Purchase orders</div>
              <div>Listings &amp; pricing</div>
              <div>Inventory &amp; replenishment</div>
              <div>Marketplace PPC</div>
              <div>Account health</div>
              <div>Reporting</div>
            </div>
            <PathCta slug="/wholesale-ecommerce" label="Explore wholesale →" />
          </div>
          <div className="bg-bone border border-line rounded-lg p-[clamp(18px,2vw,26px)]">
            <p className="type-label text-label uppercase m-0 mb-[18px]">
              Order and replenishment flow
            </p>
            <div className="relative mb-[18px]">
              <div className="h-px bg-[linear-gradient(90deg,rgba(255,200,74,.2),rgba(255,200,74,.75),rgba(255,200,74,.2))]" />
              <div className="absolute top-[-3px] left-0 w-[7px] h-[7px] rounded-full bg-build [animation:hy-flow_6s_linear_infinite]" />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2.5">
              {[
                ["PO RAISED", "Approved by client"],
                ["RECEIVED", "Prep and check-in"],
                ["LISTED", "Amazon · Walmart"],
                ["REORDER", "Signalled from sell-through"],
              ].map(([label, text]) => (
                <div
                  key={label}
                  className="border border-line bg-white rounded-md p-3.5"
                >
                  <p className="type-label text-label m-0 mb-2">{label}</p>
                  <div className="type-body font-medium">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 02 — Private label (Build) */}
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(28px,4vw,56px)] items-center py-[clamp(36px,5vw,60px)] border-b border-line">
          <div className="grid gap-3.5 order-0">
            <div
              data-media-slot="private-label-product"
              className={`aspect-[4/3] rounded-md border border-build ${placeholderTile} flex items-end gap-4 p-3`}
            >
              <span className="type-label text-label">product sample</span>
              <span className="type-label text-label">packaging</span>
            </div>
            <div className="border border-line bg-white rounded-md p-4 grid gap-2.5">
              <div className="flex justify-between type-meta">
                <span className="text-muted">Opportunity</span>
                <span className="font-medium">Validated</span>
              </div>
              <div className="h-px bg-line" />
              <div className="flex justify-between type-meta">
                <span className="text-muted">Supplier</span>
                <span className="font-medium">Shortlisted</span>
              </div>
              <div className="h-px bg-line" />
              <div className="flex justify-between type-meta">
                <span className="text-muted">Brand</span>
                <span className="font-medium">In development</span>
              </div>
              <div className="h-px bg-line" />
              <div className="flex justify-between type-meta">
                <span className="text-muted">Launch</span>
                <span className="text-warn font-semibold">
                  Awaiting approval
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="type-label text-label m-0 mb-3.5">02</p>
            <h3 className="font-display type-h3 text-ink m-0 mb-1.5">
              Private label, from product research to launch
            </h3>
            <p className="type-body text-body m-0 mb-[22px] max-w-[46ch]">
              Start with the product, not the logo. We research the
              opportunity, check the numbers, source and develop it, build the
              brand, and take it through marketplace launch — then keep
              operating it. If the numbers don&apos;t work, we say so before
              you buy inventory.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-5 gap-y-2 type-body text-body mb-[26px]">
              <div>Product research</div>
              <div>Validation &amp; economics</div>
              <div>Supplier sourcing</div>
              <div>Samples &amp; QC</div>
              <div>Brand &amp; packaging</div>
              <div>Listings &amp; A+ content</div>
              <div>Marketplace launch</div>
              <div>PPC setup &amp; management</div>
            </div>
            <PathCta slug="/private-label" label="Explore private label →" />
          </div>
        </Reveal>

        {/* 03 — Shopify / DTC */}
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(28px,4vw,56px)] items-center pt-[clamp(36px,5vw,60px)]">
          <div>
            <p className="type-label text-label m-0 mb-3.5">03</p>
            <h3 className="font-display type-h3 text-ink m-0 mb-1.5">
              Shopify and DTC growth
            </h3>
            <p className="type-body text-body m-0 mb-[22px] max-w-[46ch]">
              Take a validated product or an existing brand direct. We build
              the site and the customer journey around the brand, then run it
              as an operating channel rather than a website project.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-5 gap-y-2 type-body text-body mb-[26px]">
              <div>Ecommerce website development</div>
              <div>Conversion structure</div>
              <div>Merchandising</div>
              <div>Creative direction</div>
              <div>Paid media &amp; acquisition</div>
              <div>CRO &amp; analytics</div>
              <div>Ongoing optimisation</div>
            </div>
            <PathCta slug="/shopify-dtc" label="Explore DTC →" />
          </div>
          <div className="bg-white border border-line rounded-lg overflow-hidden shadow-[0_30px_70px_-44px_rgba(23,23,26,.4)]">
            <div className="flex items-center gap-2.5 px-4 py-[13px] border-b border-line">
              <div className="flex gap-[5px] flex-none">
                <span className="w-[9px] h-[9px] rounded-full bg-line" />
                <span className="w-[9px] h-[9px] rounded-full bg-line" />
                <span className="w-[9px] h-[9px] rounded-full bg-line" />
              </div>
              <div className="flex-1 min-w-0 bg-bone rounded-sm type-meta text-muted px-2.5 py-[5px] overflow-hidden text-ellipsis whitespace-nowrap">
                yourbrand.com / collections
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-3">
                {["Everyday Set", "Refill Duo", "Starter Kit"].map((name) => (
                  <div key={name}>
                    <div
                      className={`aspect-square rounded-md border border-line ${placeholderTile} flex items-end p-2`}
                    >
                      <span className="type-label text-label">product</span>
                    </div>
                    <div className="type-meta font-medium mt-2">{name}</div>
                  </div>
                ))}
              </div>
              <div className="mt-[18px] flex gap-2.5 flex-wrap items-center">
                <div className="bg-ink text-white type-meta font-semibold px-4 py-[11px] rounded-sm">
                  Add to cart
                </div>
                <div className="border border-operate type-meta font-medium px-4 py-[11px] rounded-sm text-ink">
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

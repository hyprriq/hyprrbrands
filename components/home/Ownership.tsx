import Reveal from "./Reveal";

/**
 * Ownership — the trust argument, on the Ink field. The decision strip
 * carries the three engine colours in order.
 */
export default function Ownership() {
  return (
    <section
      id="ownership"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      {/* Media slot V5 (fill later): full-bleed operational still life —
          cartons on a pallet, 16:9 source crop. The image mounts here as an
          absolutely-positioned cover layer; the 72% ink overlay keeps type
          contrast at spec. Empty, it renders as plain ink — zero CLS. */}
      <div
        data-media-slot="ownership-bg"
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-0 bg-ink/72" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,112px)]">
        <Reveal className="mb-[clamp(36px,5vw,60px)] grid lg:grid-cols-[1.1fr_1fr] gap-[clamp(24px,4vw,64px)] items-end">
          <h2 className="font-display type-h2 text-white m-0 max-w-[24ch]">
            You own it. You approve it. We{" "}
            <span className="text-operate">operate</span> it.
          </h2>
          <p className="type-lead text-on-ink-body m-0 max-w-[46ch]">
            The business stays yours. Accounts, inventory and capital sit with
            you — the operating work sits with us.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(16px,2vw,24px)] mb-[clamp(28px,4vw,40px)]">
          <div className="border border-line-on-ink rounded-[18px] p-[clamp(20px,2.2vw,28px)] bg-ink-raised">
            <div className="type-label text-grow uppercase mb-5">Client</div>
            <div className="grid gap-3.5 type-body">
              {[
                "Owns the business",
                "Owns the inventory",
                "Controls capital",
                "Owns marketplace accounts",
                "Approves purchases",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-on-ink-body">
                  <span className="text-grow">·</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="border border-line-on-ink rounded-[18px] p-[clamp(20px,2.2vw,28px)] bg-ink-raised">
            <div className="type-label text-operate uppercase mb-5">Hyprr</div>
            <div className="grid gap-3.5 type-body">
              {[
                "Researches opportunities",
                "Builds the operation",
                "Executes the work",
                "Manages day-to-day operations",
                "Reports performance and recommends next actions",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-on-ink-body">
                  <span className="text-operate">·</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="border-t border-line-on-ink pt-[clamp(24px,3vw,34px)] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 items-center mb-[clamp(40px,5vw,64px)]">
          <div className="flex items-center gap-3 type-label uppercase text-white">
            <span className="w-[9px] h-[9px] rounded-full bg-build flex-none" />
            Client decision
          </div>
          <div className="flex items-center gap-3 type-label uppercase text-on-ink-mute">
            <span className="w-[9px] h-[9px] rounded-full bg-grow flex-none" />
            Hyprr execution
          </div>
          <div className="flex items-center gap-3 type-label uppercase text-on-ink-mute">
            <span className="w-[9px] h-[9px] rounded-full bg-operate flex-none" />
            Documented result
          </div>
        </Reveal>

        <div className="border-t border-line-on-ink pt-[clamp(34px,4vw,54px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(28px,4vw,56px)] items-center">
          <div>
            <h3 className="font-display type-h3 text-white m-0 mb-[18px]">
              You own the business.
              <br />
              We can <span className="text-operate">run the work</span>.
            </h3>
            <p className="type-body text-on-ink-body m-0 mb-6 max-w-[46ch]">
              You control the business and the capital. Hyprr can take
              responsibility for the execution, management and ongoing
              operation required to move it forward.
            </p>
            <div className="flex gap-2.5 flex-wrap type-meta text-on-ink-body">
              <span className="border border-line-on-ink rounded-lg px-3 py-[7px]">
                Managed ecommerce
              </span>
              <span className="border border-line-on-ink rounded-lg px-3 py-[7px]">
                Full-service execution
              </span>
              <span className="border border-line-on-ink rounded-lg px-3 py-[7px]">
                Ongoing management
              </span>
            </div>
          </div>
          <Reveal className="border border-line-on-ink rounded-[20px] p-[clamp(20px,2.4vw,30px)] bg-ink-raised grid gap-0">
            <div className="grid grid-cols-[34px_1fr] gap-4 items-center pb-[18px]">
              <span className="type-label text-on-ink-mute">01</span>
              <span className="font-display font-bold type-body text-white">
                Strategy
              </span>
            </div>
            <div className="h-px bg-line-on-ink" />
            <div className="grid grid-cols-[34px_1fr] gap-4 items-center py-[18px]">
              <span className="type-label text-on-ink-mute">02</span>
              <span className="font-display font-bold type-body text-white">
                Execution
              </span>
            </div>
            <div className="h-px bg-line-on-ink" />
            <div className="grid grid-cols-[34px_1fr] gap-4 items-center py-[18px]">
              <span className="type-label text-on-ink-mute">03</span>
              <span className="font-display font-bold type-body text-white">
                Management
              </span>
            </div>
            <div className="h-px bg-line-on-ink" />
            <div className="grid grid-cols-[34px_1fr] gap-4 items-center pt-[18px]">
              <span className="type-label text-on-ink-mute">04</span>
              <span className="font-display font-bold type-body text-white">
                Optimization ↺
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

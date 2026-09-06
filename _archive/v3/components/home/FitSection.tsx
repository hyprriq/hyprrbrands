import Reveal from "./Reveal";

/**
 * Fit on White. Good fit / not a fit carry semantic state colours
 * (ok / crit) — separate from the engine colours.
 */
export default function FitSection() {
  return (
    <section id="fit" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,110px)]">
        <Reveal className="mb-[clamp(30px,4vw,48px)]">
          <h2 className="font-display type-h2 text-ink m-0 mb-[18px] max-w-[32ch]">
            Built for operators, founders and brands ready to build properly.
          </h2>
          <p className="type-lead text-body m-0 max-w-[62ch]">
            Existing ecommerce businesses · brands adding marketplaces · founders
            developing private-label products · businesses building a direct
            channel.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(16px,2vw,24px)]">
          <div className="bg-white border border-line border-l-[3px] border-l-ok rounded-md p-[clamp(22px,2.4vw,30px)]">
            <div className="type-label text-label uppercase mb-5">Good fit</div>
            <div className="grid gap-3.5 type-body text-body">
              <div>Capital that matches the plan</div>
              <div>Willing to make decisions</div>
              <div>A long-term operating mindset</div>
              <div>Wants to own the business</div>
            </div>
          </div>
          <div className="bg-white border border-line border-l-[3px] border-l-crit rounded-md p-[clamp(22px,2.4vw,30px)]">
            <div className="type-label text-label uppercase mb-5">
              Not a fit
            </div>
            <div className="grid gap-3.5 type-body text-body">
              <div>Expecting passive income</div>
              <div>Expecting guaranteed returns</div>
              <div>Unwilling to approve purchases</div>
              <div>Wants someone else to carry the risk</div>
            </div>
          </div>
        </Reveal>
        <div className="mt-7">
          <a href="/how-we-work" className="type-body font-semibold">
            How we work →
          </a>
        </div>
      </div>
    </section>
  );
}

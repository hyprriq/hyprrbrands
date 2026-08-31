export default function FitSection() {
  return (
    <section id="fit" className="bg-cloud">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,110px)]">
        <h2 className="font-display font-bold text-[clamp(30px,3.6vw,52px)] leading-[1.04] tracking-[-.03em] m-0 mb-[18px] max-w-[32ch] text-balance">
          Built for operators, founders and brands ready to build properly.
        </h2>
        <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-body m-0 mb-[clamp(30px,4vw,48px)] max-w-[60ch]">
          Existing ecommerce businesses · brands expanding marketplaces ·
          founders developing private-label products · businesses building DTC
          channels.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(16px,2vw,24px)]">
          <div className="bg-white border border-line border-l-[3px] border-l-lime rounded-2xl p-[clamp(22px,2.4vw,30px)]">
            <div className="text-[11px] font-semibold tracking-[.16em] uppercase text-ink mb-5">
              Good fit
            </div>
            <div className="grid gap-3.5 text-base leading-[1.5]">
              <div>Realistic capital</div>
              <div>Willingness to make decisions</div>
              <div>Long-term operating mindset</div>
              <div>Willingness to own the business</div>
            </div>
          </div>
          <div className="bg-white border border-line border-l-[3px] border-l-coral rounded-2xl p-[clamp(22px,2.4vw,30px)]">
            <div className="text-[11px] font-semibold tracking-[.16em] uppercase text-ink mb-5">
              Not a fit
            </div>
            <div className="grid gap-3.5 text-base leading-[1.5] text-body">
              <div>Passive-income expectations</div>
              <div>Guaranteed-return expectations</div>
              <div>Unwillingness to approve purchases</div>
              <div>Looking for someone else to own the risk</div>
            </div>
          </div>
        </div>
        <div className="mt-7 flex gap-[22px] flex-wrap items-center">
          <a href="/fit" className="text-[15.5px] font-semibold">
            Who we say no to →
          </a>
          <a href="/vs-automation" className="text-[15.5px] font-semibold">
            Not an automation company →
          </a>
        </div>
      </div>
    </section>
  );
}

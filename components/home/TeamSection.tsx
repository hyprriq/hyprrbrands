/**
 * Team section. Final portraits are not yet supplied — each card keeps the
 * approved design's placeholder treatment (striped tile + caption) until
 * real photography lands in /public.
 */
export default function TeamSection() {
  return (
    <section id="team" className="bg-white border-t border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,110px)]">
        <div className="mb-[clamp(30px,4vw,48px)]">
          <h2 className="font-display font-bold text-[clamp(30px,3.6vw,52px)] leading-[1.04] tracking-[-.03em] m-0 mb-4">
            People who actually run the operation.
          </h2>
          <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-body m-0 max-w-[62ch]">
            Hyprr is built around accountable people, not a faceless delivery
            model.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(20px,2.4vw,30px)]">
          {[1, 2, 3].map((n) => (
            <div key={n}>
              <div className="w-full h-[320px] rounded-2xl border border-line bg-[repeating-linear-gradient(135deg,#F3F1EC_0_8px,#FAFAF7_8px_16px)] flex items-end p-3">
                <span className="font-mono text-[9.5px] text-slate">
                  portrait — team member {n}
                </span>
              </div>
              <div className="mt-4 font-mono text-[10.5px] tracking-[.08em] text-slate">
                NAME TO BE SUPPLIED
              </div>
              <div className="font-display font-semibold text-[19px] tracking-[-.02em] mt-1.5">
                Role · Responsibility
              </div>
              <p className="text-base leading-[1.6] text-body mt-2 mb-2.5">
                Two-line bio covering what this person is accountable for day
                to day.
              </p>
              <a href="/team" className="text-sm font-semibold">
                LinkedIn →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

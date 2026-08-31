import Reveal from "./Reveal";

export default function Principles() {
  return (
    <section className="bg-white border-t border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,110px)]">
        <div className="mb-[clamp(30px,4vw,48px)]">
          <h2 className="font-display font-bold text-[clamp(30px,3.6vw,52px)] leading-[1.04] tracking-[-.03em] m-0 mb-4">
            Built <span className="text-violet">differently</span>.
          </h2>
          <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-body m-0 max-w-[62ch]">
            The operating model is the product. These are the terms it runs on.
          </p>
        </div>
        <Reveal className="bg-ink text-cloud rounded-3xl p-[clamp(24px,3vw,44px)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-0">
            <div className="py-[22px] pr-6 border-b border-cloud/10">
              <div className="font-mono text-[10.5px] tracking-[.1em] text-dim mb-3">
                PRINCIPLE 01
              </div>
              <div className="font-display font-semibold text-[19px] tracking-[-.02em]">
                Client-owned accounts
              </div>
            </div>
            <div className="py-[22px] px-6 border-b border-cloud/10">
              <div className="font-mono text-[10.5px] tracking-[.1em] text-dim mb-3">
                PRINCIPLE 02
              </div>
              <div className="font-display font-semibold text-[19px] tracking-[-.02em]">
                Client-approved purchases
              </div>
            </div>
            <div className="py-[22px] pl-6 border-b border-cloud/10">
              <div className="font-mono text-[10.5px] tracking-[.1em] text-dim mb-3">
                PRINCIPLE 03
              </div>
              <div className="font-display font-semibold text-[19px] tracking-[-.02em]">
                Direct vendor → client invoicing
              </div>
            </div>
            <div className="pt-[22px] pr-6">
              <div className="font-mono text-[10.5px] tracking-[.1em] text-dim mb-3">
                PRINCIPLE 04
              </div>
              <div className="font-display font-semibold text-[19px] tracking-[-.02em]">
                Realised-margin economics
              </div>
            </div>
            <div className="pt-[22px] px-6">
              <div className="font-mono text-[10.5px] tracking-[.1em] text-dim mb-3">
                PRINCIPLE 05
              </div>
              <div className="font-display font-semibold text-[19px] tracking-[-.02em] text-coral">
                No guaranteed outcomes
              </div>
            </div>
            <div className="pt-[22px] pl-6 flex items-end">
              <a
                href="/vs-automation"
                className="text-[15px] font-semibold text-cloud hover:text-cloud border-b border-cloud/30 pb-[3px]"
              >
                Why we&apos;re not an automation company →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

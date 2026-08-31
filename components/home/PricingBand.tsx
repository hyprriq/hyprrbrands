export default function PricingBand() {
  return (
    <section id="pricing" className="bg-cloud border-t border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(44px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(20px,3vw,40px)] items-center">
        <div>
          <h2 className="font-display font-bold text-[clamp(24px,2.4vw,34px)] tracking-[-.026em] m-0 mb-2.5">
            See how we&apos;re paid.
          </h2>
          <p className="text-base leading-[1.6] text-body m-0 max-w-[46ch]">
            Clear build fees. Clear operating economics. No hidden retainer
            logic.
          </p>
        </div>
        <div className="flex justify-start gap-3.5 flex-wrap">
          <a
            href="/pricing"
            className="bg-ink text-white hover:text-white font-semibold text-[15.5px] px-6 py-[15px] rounded-[14px] min-h-12 flex items-center"
          >
            View pricing →
          </a>
        </div>
      </div>
    </section>
  );
}

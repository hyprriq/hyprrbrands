/**
 * How we're paid — fees tied to realised margin, so the section earns the
 * Grow band ground. Primary CTA is Ink fill on a light ground.
 */
export default function PricingBand() {
  return (
    <section id="pricing" className="bg-grow-band">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(44px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(20px,3vw,40px)] items-center">
        <div>
          <h2 className="font-display type-h2 text-ink m-0 mb-2.5">
            See how we&apos;re paid.
          </h2>
          <p className="type-body text-body m-0 max-w-[46ch]">
            Clear build fees. Clear operating economics. No hidden retainer
            logic.
          </p>
        </div>
        <div className="flex justify-start gap-3.5 flex-wrap">
          <a
            href="/pricing"
            className="bg-field text-white hover:text-white type-body font-semibold px-6 py-[15px] rounded-md min-h-12 flex items-center"
          >
            View pricing →
          </a>
        </div>
      </div>
    </section>
  );
}

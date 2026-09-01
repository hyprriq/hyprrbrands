/**
 * How we're paid — A.21. The last sentence is the commercial argument
 * in eleven words; content freeze applies. Grow band ground (fees tied
 * to realised margin); primary CTA is Ink on a band ground per the
 * dark-panel rule.
 */
export default function PricingBand() {
  return (
    <section id="pricing" className="bg-grow-band">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(44px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(20px,3vw,40px)] items-center">
        <div>
          <h2 className="font-display type-h2 text-ink m-0 mb-2.5">
            How we&apos;re paid.
          </h2>
          <p className="type-body text-body m-0 max-w-[52ch]">
            A fee to build the operation, and — where it applies — a share of
            the margin the business realises after goods actually sell. No
            monthly retainer. No fee on the capital you deploy. If the margin
            isn&apos;t there, neither is our share of it.
          </p>
        </div>
        <div className="flex justify-start gap-3.5 flex-wrap">
          <a
            href="/how-we-work#fees"
            className="bg-ink text-white hover:text-white type-body font-semibold px-6 py-[15px] rounded-md min-h-12 flex items-center"
          >
            See the full structure →
          </a>
        </div>
      </div>
    </section>
  );
}

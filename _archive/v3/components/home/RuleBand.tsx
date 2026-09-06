/**
 * Slot 4 on the homepage (PHASE1_VISUAL_MAP: "homepage gets slot 4,
 * once") — the full-bleed Petrol rule card. The sentence is the brand
 * line the whole page argues for; it already exists in the hero and
 * the share card, so the card promotes it rather than adding a claim.
 * A <p>, not a heading, so the homepage outline is untouched.
 */
export default function RuleBand() {
  return (
    <section className="bg-field text-white">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(44px,6vw,76px)]">
        <p className="font-display type-h2 text-white m-0 max-w-[24ch] text-balance">
          You own the business. We run the operation.
        </p>
        <p className="type-meta text-on-field-body mt-4 mb-0 max-w-[62ch]">
          Proven in the ownership split above — accounts, inventory and
          capital, all in your name.
        </p>
      </div>
    </section>
  );
}

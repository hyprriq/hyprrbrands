import Reveal from "./Reveal";

/**
 * True cost on the Ink field. Bars are neutral except "Build / service" —
 * Citrus — which draws LAST (data-order), so the visitor watches the fee
 * turn out to be the small one. No axis, no values, no percentages.
 */
const BARS: { label: string; w: number; color: string; order: number }[] = [
  { label: "Build / service", w: 68, color: "bg-build", order: 7 },
  { label: "Inventory", w: 92, color: "bg-white/40", order: 0 },
  { label: "Freight", w: 44, color: "bg-white/40", order: 1 },
  { label: "Duties", w: 30, color: "bg-white/40", order: 2 },
  { label: "Testing", w: 22, color: "bg-white/40", order: 3 },
  { label: "Trademark", w: 18, color: "bg-white/40", order: 4 },
  { label: "Prep", w: 26, color: "bg-white/40", order: 5 },
  { label: "Insurance", w: 14, color: "bg-white/40", order: 6 },
];

export default function CostSection() {
  return (
    <section
      id="cost"
      className="relative isolate overflow-hidden bg-field text-white"
    >
      {/* Media slot V6 (fill later): full-bleed prep-bench still life,
          21:9 source crop, mounted as an absolute cover layer under a 78%
          ink overlay. Empty, it renders as plain ink — zero CLS. */}
      <div
        data-media-slot="cost-bg"
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-0 bg-field/78" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,112px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(30px,5vw,64px)] items-center">
        <div>
          <h2 className="font-display type-h2 text-white m-0 mb-5">
            What does an ecommerce business actually cost?
          </h2>
          <p className="type-lead text-on-field-body m-0 mb-[30px] max-w-[46ch]">
            The service fee is rarely the biggest line. Before the first sale you
            may also be funding inventory, freight, duties, testing,
            photography, trademarks, prep and insurance. The calculator breaks
            down every component so you can see the real number before you
            commit to any of it — including us.
          </p>
          <a
            href="/true-cost"
            className="inline-flex items-center mt-6 bg-build text-ink hover:text-ink type-body font-semibold px-6 py-3.5 rounded-md min-h-12"
          >
            Calculate the real cost →
          </a>
        </div>
        <Reveal className="border border-line-on-field rounded-lg p-[clamp(20px,2.4vw,30px)] bg-field-raised">
          <div className="flex justify-between items-center mb-[22px] gap-3 flex-wrap">
            <div className="type-label text-on-field-mute uppercase">
              Cost stack
            </div>
            <div className="type-label text-build">
              EXAMPLE STRUCTURE · NOT A QUOTE
            </div>
          </div>
          <div className="grid gap-[9px]">
            {BARS.map((b) => (
              <div
                key={b.label}
                className="grid grid-cols-[130px_1fr] gap-3.5 items-center"
              >
                <span className="type-meta text-on-field-body">{b.label}</span>
                <div className="h-3.5 rounded-full bg-white/8 overflow-hidden">
                  <div
                    data-cost="1"
                    data-w={b.w}
                    data-order={b.order}
                    className={`h-full w-0 ${b.color} transition-[width] duration-700 ease-[cubic-bezier(.4,0,.2,1)]`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 type-meta text-on-field-mute">
            Relative proportions shown for illustration. Your figures are
            calculated from your own product, channel and volume inputs.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

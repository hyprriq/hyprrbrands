import Reveal from "./Reveal";

const BARS: { label: string; w: number; color: string }[] = [
  { label: "Build / service", w: 68, color: "bg-citrus" },
  { label: "Inventory", w: 92, color: "bg-lime" },
  { label: "Freight", w: 44, color: "bg-aqua" },
  { label: "Duties", w: 30, color: "bg-sky" },
  { label: "Testing", w: 22, color: "bg-rose" },
  { label: "Trademark", w: 18, color: "bg-coral" },
  { label: "Prep", w: 26, color: "bg-violet" },
  { label: "Insurance", w: 14, color: "bg-dim" },
];

export default function CostSection() {
  return (
    <section id="cost" className="bg-ink text-cloud">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,112px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(30px,5vw,64px)] items-center">
        <div>
          <h2 className="font-display font-bold text-[clamp(30px,3.6vw,52px)] leading-[1.03] tracking-[-.032em] m-0 mb-5">
            What does an ecommerce business actually{" "}
            <span className="text-citrus">cost</span>?
          </h2>
          <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-mist m-0 mb-[30px] max-w-[46ch]">
            The number is rarely just the service fee. The calculator breaks
            down every component before the first sale.
          </p>
          <a
            href="/true-cost"
            className="bg-violet text-white hover:text-white font-semibold text-base px-[26px] py-4 rounded-[14px] min-h-12 inline-flex items-center"
          >
            Calculate the real cost →
          </a>
        </div>
        <Reveal className="border border-cloud/12 rounded-[20px] p-[clamp(20px,2.4vw,30px)] bg-aubergine/60">
          <div className="flex justify-between items-center mb-[22px] gap-3 flex-wrap">
            <div className="text-[11px] font-semibold tracking-[.16em] uppercase text-dim">
              Cost stack
            </div>
            <div className="font-mono text-[10.5px] text-citrus">
              EXAMPLE STRUCTURE · NOT A QUOTE
            </div>
          </div>
          <div className="grid gap-[9px]">
            {BARS.map((b) => (
              <div
                key={b.label}
                className="grid grid-cols-[120px_1fr] gap-3.5 items-center"
              >
                <span className="text-[13.5px] text-mist">{b.label}</span>
                <div className="h-3.5 rounded-[4px] bg-cloud/8 overflow-hidden">
                  <div
                    data-cost="1"
                    data-w={b.w}
                    className={`h-full w-0 ${b.color} transition-[width] duration-700 ease-[cubic-bezier(.4,0,.2,1)]`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 text-[12.5px] text-dim leading-[1.5]">
            Relative proportions shown for illustration. Your figures are
            calculated from your own product, channel and volume inputs.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

const STEPS: { num: string; label: string; dot: string; strong?: boolean }[] = [
  { num: "01", label: "Product", dot: "bg-build" },
  { num: "02", label: "Brand", dot: "bg-build" },
  { num: "03", label: "Store", dot: "bg-build" },
  { num: "04", label: "Marketplace", dot: "bg-grow" },
  { num: "05", label: "Paid media", dot: "bg-grow" },
  { num: "06", label: "Customer", dot: "bg-grow" },
  { num: "07", label: "Order", dot: "bg-operate" },
  { num: "08", label: "Operations", dot: "bg-operate" },
  { num: "09", label: "Reporting", dot: "bg-operate" },
  { num: "10", label: "Next decision ↺", dot: "bg-ink", strong: true },
];

export default function EverythingConnects() {
  return (
    <section id="stack" className="bg-bone border-t border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(24px,4vw,56px)] py-[clamp(60px,7vw,104px)]">
        <Reveal className="mb-[clamp(32px,4vw,52px)]">
          <h2 className="font-display type-h2 text-ink m-0 mb-4">
            Everything connects.
          </h2>
          <p className="type-lead text-body m-0 max-w-[62ch]">
            Build, growth and operations are one commercial system. Every stage
            produces the input the next one runs on — which is why we would
            rather not take just one of them.
          </p>
        </Reveal>

        <Reveal className="bg-white border border-line rounded-lg p-[clamp(20px,2.6vw,34px)]">
          <div className="h-0.5 bg-line rounded-sm overflow-hidden mb-6">
            <div
              data-draw="1"
              className="h-full w-0 bg-[linear-gradient(90deg,#FFC84A,#B8F34A_45%,#45D8C0)] transition-[width] duration-[1800ms] ease-[cubic-bezier(.4,0,.2,1)]"
            />
          </div>
          <ol className="list-none m-0 p-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[clamp(12px,1.4vw,18px)]">
            {STEPS.map((s) => (
              <li key={s.num} className="grid gap-2">
                <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                <span className="type-label text-label">{s.num}</span>
                <span
                  className={
                    s.strong
                      ? "type-body font-semibold text-ink"
                      : "type-body font-medium"
                  }
                >
                  {s.label}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

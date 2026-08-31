import Reveal from "./Reveal";

const STEPS: { num: string; label: string; dot: string; violet?: boolean }[] = [
  { num: "01", label: "Product", dot: "bg-citrus" },
  { num: "02", label: "Brand", dot: "bg-citrus" },
  { num: "03", label: "Store", dot: "bg-citrus" },
  { num: "04", label: "Marketplace", dot: "bg-lime" },
  { num: "05", label: "Paid media", dot: "bg-lime" },
  { num: "06", label: "Customer", dot: "bg-lime" },
  { num: "07", label: "Order", dot: "bg-aqua" },
  { num: "08", label: "Operations", dot: "bg-aqua" },
  { num: "09", label: "Reporting", dot: "bg-aqua" },
  { num: "10", label: "Next decision ↺", dot: "bg-violet", violet: true },
];

export default function EverythingConnects() {
  return (
    <section id="stack" className="bg-cloud border-t border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(24px,4vw,56px)] py-[clamp(60px,7vw,104px)]">
        <div className="mb-[clamp(32px,4vw,52px)]">
          <h2 className="font-display font-bold text-[clamp(30px,3.6vw,52px)] leading-[1.04] tracking-[-.03em] m-0 mb-4">
            Everything{" "}
            <span className="border-b-4 border-violet pb-0.5">connects</span>.
          </h2>
          <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-body m-0 max-w-[62ch]">
            Build, growth and operations are one commercial system. Every stage
            produces the input for the next.
          </p>
        </div>

        <Reveal className="bg-white border border-line rounded-[20px] p-[clamp(20px,2.6vw,34px)]">
          <div className="h-0.5 bg-line rounded-sm overflow-hidden mb-6">
            <div
              data-draw="1"
              className="h-full w-0 bg-[linear-gradient(90deg,#FFC84A,#B8F34A_42%,#45D8C0_74%,#6947FF)] transition-[width] duration-[1800ms] ease-[cubic-bezier(.4,0,.2,1)]"
            />
          </div>
          <ol className="list-none m-0 p-0 grid grid-cols-[repeat(auto-fit,minmax(112px,1fr))] gap-[clamp(12px,1.4vw,18px)]">
            {STEPS.map((s) => (
              <li key={s.num} className="grid gap-2">
                <span className={`w-2 h-2 rounded-[2px] ${s.dot}`} />
                <span className="font-mono text-[10px] tracking-[.08em] text-slate">
                  {s.num}
                </span>
                <span
                  className={
                    s.violet
                      ? "text-[15px] font-semibold text-violet"
                      : "text-[15px] font-medium"
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

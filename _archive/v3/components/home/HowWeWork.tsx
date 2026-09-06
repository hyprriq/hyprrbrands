import Reveal from "./Reveal";

/**
 * Explicit column counts only — per-position padding inside an auto-fit
 * grid produced a staircase indent when the column count changed.
 */
const STEPS = [
  {
    num: "01",
    title: "Commercial read",
    copy: "We look at the numbers before the ideas — margin, channel economics, demand, and what the account can realistically carry.",
  },
  {
    num: "02",
    title: "Plan with owners",
    copy: "A written plan with named people against each outcome, ours and yours, and the order things happen in.",
  },
  {
    num: "03",
    title: "Execute",
    copy: "We do the build and growth work — sourcing, listings, site, launch, advertising — in defined pieces with dates on them, not an open-ended retainer.",
  },
  {
    num: "04",
    title: "Operate & report",
    copy: "We stay on the account. You get a regular record of what was bought, what sold, what changed, and what we recommend next.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,112px)]">
        <Reveal className="mb-[clamp(36px,5vw,56px)]">
          <h2 className="font-display type-h2 text-ink m-0 mb-4">
            From decision to operation.
          </h2>
          <p className="type-lead text-body m-0 max-w-[62ch]">
            Strategy sits inside the work — it isn&apos;t a separate invoice.
            Every engagement runs the same four steps, because each one
            produces what the next needs: the commercial read decides whether
            to plan, the plan decides what gets executed, and the operation
            produces the record the next decision is made on.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-7 border-t border-line mb-[clamp(40px,5vw,64px)]">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="py-7 lg:border-r lg:border-line lg:last:border-r-0 lg:pr-6"
            >
              <div className="type-label text-label mb-[18px]">{s.num}</div>
              <h3 className="font-display type-h3 text-ink m-0 mb-2.5">
                {s.title}
              </h3>
              <p className="type-body text-body m-0">{s.copy}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="bg-white border border-line rounded-lg p-[clamp(22px,3vw,36px)]">
          <div className="type-label text-label uppercase mb-6">
            The operating loop
          </div>
          <div className="h-0.5 bg-line rounded-sm overflow-hidden mb-5">
            <div
              data-draw="1"
              className="h-full w-0 bg-[linear-gradient(90deg,#FFC84A,#B8F34A_45%,#45D8C0)] transition-[width] duration-[1600ms] ease-[cubic-bezier(.4,0,.2,1)]"
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3.5">
            <div className="type-body font-medium">Research</div>
            <div className="type-body font-medium">Decision</div>
            <div className="type-body font-medium">Build</div>
            <div className="type-body font-medium">Launch</div>
            <div className="type-body font-medium">Operate</div>
            <div className="type-body font-semibold text-ink">Improve ↻</div>
          </div>
          <div className="mt-[26px]">
            <a href="/how-we-work" className="type-body font-semibold">
              See how we work →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

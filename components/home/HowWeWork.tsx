import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Commercial read",
    copy: "Margin, channel and demand reality.",
    pad: "py-7 pr-6 pb-[30px] border-r border-line",
  },
  {
    num: "02",
    title: "Plan with owners",
    copy: "Named people against each outcome — ours and yours.",
    pad: "pt-7 px-6 pb-[30px] border-r border-line",
  },
  {
    num: "03",
    title: "Execute",
    copy: "Done-for-you build and growth work, shipped in sprints.",
    pad: "pt-7 px-6 pb-[30px] border-r border-line",
  },
  {
    num: "04",
    title: "Operate & report",
    copy: "We stay on the account and report on the work.",
    pad: "py-7 pl-6 pb-[30px]",
  },
];

export default function HowWeWork() {
  return (
    <section id="how" className="bg-cloud">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,112px)]">
        <div className="mb-[clamp(36px,5vw,56px)]">
          <h2 className="font-display font-bold text-[clamp(30px,3.6vw,52px)] leading-[1.04] tracking-[-.03em] m-0 mb-4">
            From decision to{" "}
            <span className="border-b-4 border-violet pb-0.5">operation</span>.
          </h2>
          <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-body m-0 max-w-[62ch]">
            Strategy sits inside the work. It isn&apos;t a separate invoice.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-0 border-t border-line mb-[clamp(40px,5vw,64px)]">
          {STEPS.map((s) => (
            <div key={s.num} className={s.pad}>
              <div className="font-mono text-xs text-violet mb-[18px]">
                {s.num}
              </div>
              <h3 className="font-display font-semibold text-xl tracking-[-.02em] m-0 mb-2.5">
                {s.title}
              </h3>
              <p className="text-base leading-[1.6] text-body m-0">{s.copy}</p>
            </div>
          ))}
        </div>

        <Reveal className="bg-white border border-line rounded-[20px] p-[clamp(22px,3vw,36px)]">
          <div className="text-[11px] font-semibold tracking-[.16em] uppercase text-muted mb-6">
            The operating loop
          </div>
          <div className="h-0.5 bg-line rounded-sm overflow-hidden mb-5">
            <div
              data-draw="1"
              className="h-full w-0 bg-violet transition-[width] duration-[1600ms] ease-[cubic-bezier(.4,0,.2,1)]"
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3.5">
            <div className="text-[14.5px] font-medium">Research</div>
            <div className="text-[14.5px] font-medium">Decision</div>
            <div className="text-[14.5px] font-medium">Build</div>
            <div className="text-[14.5px] font-medium">Launch</div>
            <div className="text-[14.5px] font-medium">Operate</div>
            <div className="text-[14.5px] font-medium text-violet">
              Improve ↻
            </div>
          </div>
          <div className="mt-[26px]">
            <a href="/how-it-works" className="text-[15.5px] font-semibold">
              See how we work →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

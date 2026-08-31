const CARDS = [
  ["PRICING", "Published structure."],
  ["OWNERSHIP", "The client owns the business and inventory."],
  ["PURCHASING", "Material purchases require client approval."],
  ["CONTRACTS", "Sample documents are available."],
  [
    "PERFORMANCE",
    "Performance-based fees are tied to realised margin where applicable.",
  ],
  ["CLAIMS", "No guaranteed returns."],
];

export default function Transparency() {
  return (
    <section className="bg-[#EDE8FF]">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(60px,7vw,104px)]">
        <h2 className="font-display font-bold text-[clamp(30px,3.6vw,52px)] leading-[1.04] tracking-[-.03em] m-0 mb-[clamp(30px,4vw,48px)] max-w-[16ch]">
          Nothing important is{" "}
          <span className="bg-white px-2 rounded-md">hidden</span>.
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(16px,2vw,24px)] mb-[clamp(28px,4vw,40px)]">
          {CARDS.map(([label, text]) => (
            <div key={label} className="bg-white rounded-[14px] p-[22px]">
              <div className="font-mono text-[10.5px] tracking-[.1em] text-muted mb-2.5">
                {label}
              </div>
              <div className="text-base leading-[1.55]">{text}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-3.5 flex-wrap">
          <a
            href="/pricing"
            className="bg-violet text-white hover:text-white font-semibold text-[15.5px] px-6 py-[15px] rounded-[14px] min-h-12 flex items-center"
          >
            See how we charge
          </a>
          <a
            href="/documents"
            className="text-ink hover:text-ink font-semibold text-[15.5px] px-[22px] py-[15px] rounded-[14px] border border-ink/18 min-h-12 flex items-center"
          >
            View our documents
          </a>
        </div>
      </div>
    </section>
  );
}

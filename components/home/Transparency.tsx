import Reveal from "./Reveal";

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

/**
 * Nothing is hidden — a section about the operation running in the open,
 * on the Operate band.
 */
export default function Transparency() {
  return (
    <section className="bg-operate-band">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(60px,7vw,104px)]">
        <Reveal className="mb-[clamp(30px,4vw,48px)]">
          <h2 className="font-display type-h2 text-ink m-0 max-w-[16ch]">
            Nothing important is{" "}
            <span className="bg-white px-2 rounded-md">hidden</span>.
          </h2>
        </Reveal>
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(16px,2vw,24px)] mb-[clamp(28px,4vw,40px)]">
          {CARDS.map(([label, text]) => (
            <div key={label} className="bg-white rounded-md p-[22px]">
              <div className="type-label text-label mb-2.5">{label}</div>
              <div className="type-body text-body">{text}</div>
            </div>
          ))}
        </Reveal>
        <div className="flex gap-3.5 flex-wrap">
          <a
            href="/pricing"
            className="bg-field text-white hover:text-white type-body font-semibold px-6 py-[15px] rounded-md min-h-12 flex items-center"
          >
            See how we charge
          </a>
          <a
            href="/documents"
            className="text-ink hover:text-ink type-body font-semibold px-[22px] py-[15px] rounded-md border border-line bg-white min-h-12 flex items-center"
          >
            View our documents
          </a>
        </div>
      </div>
    </section>
  );
}

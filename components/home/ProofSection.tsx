import Reveal from "./Reveal";

const ITEMS = [
  "Operating model",
  "Client ownership",
  "Approval workflow",
  "Documented process",
  "Transparent pricing",
  "Reporting",
  "Research methodology",
];

export default function ProofSection() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(56px,6vw,96px)]">
        <Reveal className="mb-[clamp(28px,4vw,44px)]">
          <h2 className="font-display type-h2 text-white m-0 mb-4">
            Proof before promises.
          </h2>
          <p className="type-lead text-on-ink-body m-0 max-w-[62ch]">
            We publish the model rather than claims. Case results will appear
            here as client work becomes publishable.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px bg-line-on-ink border border-line-on-ink rounded-[18px] overflow-hidden">
          {ITEMS.map((item, i) => (
            <div key={item} className="bg-ink-raised p-6">
              <div className="type-label text-on-ink-mute mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="type-body font-medium text-white">{item}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

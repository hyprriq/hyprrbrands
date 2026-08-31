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
    <section className="bg-ink text-cloud">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(56px,6vw,96px)]">
        <div className="mb-[clamp(28px,4vw,44px)]">
          <h2 className="font-display font-bold text-[clamp(28px,3.2vw,46px)] leading-[1.05] tracking-[-.03em] m-0 mb-4">
            Proof before promises.
          </h2>
          <p className="text-[16.5px] leading-[1.6] text-mist m-0 max-w-[62ch]">
            We publish the model rather than claims. Case results will appear
            here as client work becomes publishable.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px bg-cloud/10 border border-cloud/10 rounded-[18px] overflow-hidden">
          {ITEMS.map((item, i) => (
            <div key={item} className="bg-ink p-6">
              <div className="font-mono text-[10.5px] text-dim mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-base font-medium">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

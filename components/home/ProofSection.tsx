import Reveal from "./Reveal";

/**
 * Proof before promises. Explicit 2/4 columns so seven items plus the
 * section CTA fill a 4x2 grid exactly — no orphaned dark cells. Numbers
 * carry the engine palette (cycling in threes); labels stay white.
 */
const ITEMS: { label: string; color: string }[] = [
  { label: "Operating model", color: "text-build" },
  { label: "Client ownership", color: "text-build" },
  { label: "Approval workflow", color: "text-build" },
  { label: "Documented process", color: "text-grow" },
  { label: "Transparent pricing", color: "text-grow" },
  { label: "Reporting", color: "text-operate" },
  { label: "Research methodology", color: "text-operate" },
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
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line-on-ink border border-line-on-ink rounded-[18px] overflow-hidden">
          {ITEMS.map((item, i) => (
            <div key={item.label} className="bg-ink-raised p-6">
              <div className={`type-body font-bold ${item.color} mb-3`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="type-body font-medium text-white">
                {item.label}
              </div>
            </div>
          ))}
          <a
            href="/documents"
            className="bg-ink-raised p-6 flex items-end type-body font-semibold text-link-on-ink hover:text-link-on-ink"
          >
            Read the documents →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

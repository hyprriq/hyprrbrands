import Reveal from "./Reveal";
import { isLive } from "@/lib/site-map";
import { DataArtefact } from "@/components/pages/VisualSystem";

/**
 * Proof before promises — A.18. Seven checkable things (numbers
 * neutral per the contrast patch), and the eighth tile is the section
 * CTA. It points at /how-we-work — the page that carries the operating
 * model — until /documents is live, when it switches to the documents.
 */
const ITEMS = [
  "The operating model, published",
  "Sample agreements, ungated",
  "A recorded approval on every purchase",
  "Named people with verifiable work history",
  "The fee structure and how it is calculated",
  "A real reporting sample, not a mockup",
  "Reference calls, not written testimonials",
];

export default function ProofSection() {
  return (
    <section className="bg-field text-white">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(56px,6vw,96px)]">
        <Reveal className="mb-[clamp(28px,4vw,44px)]">
          <h2 className="font-display type-h2 text-white m-0 mb-4">
            Proof before promises.
          </h2>
          <p className="type-lead text-on-field-body m-0 max-w-[62ch]">
            We are new. We are not going to borrow someone else&apos;s results
            or dress a projection up as a track record. Case studies will
            appear here as client work becomes publishable. Until then, here
            is what you can check.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line-on-field border border-line-on-field rounded-md overflow-hidden">
          {ITEMS.map((item, i) => (
            <div key={item} className="bg-field-raised p-6">
              <div className="type-body font-bold text-on-field-mute mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="type-body font-medium text-white">{item}</div>
            </div>
          ))}
          <a
            href={isLive("/documents") ? "/documents" : "/how-we-work"}
            className="bg-operate-field p-6 flex items-end type-body font-semibold text-ink hover:text-ink"
          >
            {isLive("/documents")
              ? "Read the documents →"
              : "See the operating model →"}
          </a>
        </Reveal>
        {/* PROMPT_21 §2 — three lines from the buying model, one of
            them refused. Publishing the refusal is the one asset no
            competitor copies without publishing their own buying
            decisions. */}
        <Reveal className="mt-[clamp(28px,4vw,44px)]">
          <DataArtefact
            data={{
              title: "The buying decision · three lines from the model",
              ground: "field",
              cols: ["COGS", "Buy box", "Profit / unit", "ROI"],
              rows: [
                {
                  name: "Climbing hardware — ascender",
                  cells: ["$36.00", "$70.00", "$17.90", "49.7%"],
                  order: "240 units",
                },
                {
                  name: "Kitchen — slow cooker",
                  cells: ["$37.00", "$89.00", "$21.28", "57.5%"],
                  order: "60 units",
                },
                {
                  name: "Garden — nursery pot, 8 inch",
                  cells: ["$0.60", "$8.01", "$0.03", "4.8%"],
                  note: "ROI 4.8% against a 20% floor",
                },
              ],
              orderLabel: "Order",
              footnote:
                "Illustrative figures in the real model's structure — the refused row is the point, and nothing here is a claim about a live line.",
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { isLive } from "@/lib/site-map";

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
      </div>
    </section>
  );
}

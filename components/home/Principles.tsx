import Reveal from "./Reveal";

const PRINCIPLES: [string, string][] = [
  [
    "Client-owned accounts.",
    "Your Seller Central and Walmart accounts stay in your name. We work through permissioned access, never shared credentials.",
  ],
  [
    "Client-approved purchases.",
    "No purchase order goes out without your recorded approval. It is a step in the process, not a line in a document.",
  ],
  [
    "Direct vendor-to-client invoicing.",
    "Suppliers invoice you directly. We do not buy stock in our own name and resell it to you.",
  ],
  [
    "Realised-margin economics.",
    "Where a performance fee applies, it is calculated on margin actually realised after goods sell — not on gross sales, and not on the capital you deploy.",
  ],
  [
    "No guaranteed outcomes.",
    "We don't promise sales, profit or returns. We promise an operation you can check.",
  ],
];

/**
 * Built differently — five principles about how the operation is built,
 * so the section earns the Build band ground.
 *
 * Layout rule: the grid uses EXPLICIT column counts (1/2/3) because the
 * items carry per-position styling — auto-fit decides its own column
 * count at runtime and broke the padding rhythm at four columns.
 */
export default function Principles() {
  return (
    <section className="bg-build-band">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,110px)]">
        <Reveal className="mb-[clamp(30px,4vw,48px)]">
          <h2 className="font-display type-h2 text-ink m-0 mb-4">
            Built differently.
          </h2>
          <p className="type-lead text-body m-0 max-w-[62ch]">
            The operating model is the product. These are the terms it runs on.
          </p>
        </Reveal>
        <Reveal className="bg-ink text-white rounded-lg p-[clamp(24px,3vw,44px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7">
            {PRINCIPLES.map(([title, body], i) => (
              <div key={title} className="py-[22px]">
                <p className="type-label text-on-ink-mute m-0 mb-3">
                  PRINCIPLE {String(i + 1).padStart(2, "0")}
                </p>
                <div className="type-body font-bold mb-2">{title}</div>
                <p className="type-body text-on-ink-body m-0">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-line-on-ink pt-6">
            <a
              href="/how-we-work"
              className="type-body font-semibold text-link-on-ink hover:text-link-on-ink"
            >
              See the operating model →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

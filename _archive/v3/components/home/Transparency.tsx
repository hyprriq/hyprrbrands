import Reveal from "./Reveal";

/**
 * Nothing important is hidden — A.14. The CONTRACTS row is CUT per the
 * spec's own commitment rule: it requires at least one real, ungated
 * document live at /documents, which does not exist yet (P.02).
 * Restore the row when the document ships. The documents CTA is
 * likewise held back until /documents is live.
 */
const CARDS = [
  [
    "FEES",
    "The fee structure is explained in full — how it is calculated, and what it is calculated on.",
  ],
  [
    "OWNERSHIP",
    "You own the business, the inventory and the marketplace accounts.",
  ],
  [
    "PURCHASING",
    "Material purchases need your approval before they are placed.",
  ],
  [
    "PERFORMANCE",
    "Performance fees are tied to realised margin, where they apply at all.",
  ],
  [
    "CLAIMS",
    "No guaranteed returns, and no earnings figures anywhere on this site.",
  ],
];

export default function Transparency() {
  return (
    <section className="bg-white border-t border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(60px,7vw,104px)]">
        <Reveal className="mb-[clamp(30px,4vw,48px)]">
          <h2 className="font-display type-h2 text-ink m-0 mb-4 max-w-[16ch]">
            Nothing important is{" "}
            <span className="bg-bone px-2 rounded-sm">hidden</span>.
          </h2>
          <p className="type-lead text-body m-0 max-w-[62ch]">
            Everything a client would want to check before signing is stated
            on this site before the first conversation: who owns what, how
            approval works, how we are paid, and what we refuse to promise.
            The rows below are the summary; each links to the page that
            carries the detail.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(16px,2vw,24px)] mb-[clamp(28px,4vw,40px)]">
          {CARDS.map(([label, text]) => (
            <div
              key={label}
              className="bg-white border border-line rounded-md p-[22px]"
            >
              <p className="type-label text-label m-0 mb-2.5">{label}</p>
              <div className="type-body text-body">{text}</div>
            </div>
          ))}
        </Reveal>
        <div className="flex gap-3.5 flex-wrap">
          <a
            href="/how-we-work#fees"
            className="bg-field text-white hover:text-white type-body font-semibold px-6 py-[15px] rounded-md min-h-12 flex items-center"
          >
            See how we&apos;re paid
          </a>
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

/**
 * A.09 — Fully managed operation. The one new section in Build Spec V1:
 * a four-column cadence matrix that answers "can you actually run this
 * for me" with a work schedule rather than an adjective. Type-led,
 * monospace labels, rules between columns, NO ICONS. Four columns at
 * desktop, two at 768, one at 375. Carries ~40 operational terms —
 * do not compress the lists.
 */
const COLUMNS: { n: string; label: string; items: string[] }[] = [
  {
    n: "01",
    label: "Before you buy",
    items: [
      "Product and category research",
      "Supplier identification and outreach",
      "Landed cost and margin modelling",
      "Competitor and demand check",
      "A written recommendation with a clear verdict",
    ],
  },
  {
    n: "02",
    label: "Setting it up",
    items: [
      "Marketplace accounts and permissions",
      "Supplier terms and onboarding",
      "Listings, pricing and A+ content",
      "Brand, packaging and site where it applies",
      "Launch plan and advertising setup",
    ],
  },
  {
    n: "03",
    label: "Every week",
    items: [
      "Purchase orders raised for your approval",
      "Replenishment against sell-through",
      "Inventory and stranded-stock checks",
      "PPC bids, search terms and budget",
      "Buy box, pricing and competitor moves",
      "Orders, returns and open cases",
    ],
  },
  {
    n: "04",
    label: "Every month",
    items: [
      "Account health review",
      "Margin by SKU, not revenue by SKU",
      "What we bought, what sold, what didn't",
      "Supplier performance and terms",
      "What we recommend next, and why",
    ],
  },
];

export default function FullyManaged() {
  return (
    <section id="managed" className="bg-white border-t border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,110px)]">
        <Reveal className="mb-[clamp(30px,4vw,48px)]">
          <p className="type-label text-label uppercase m-0 mb-3">
            Fully managed
          </p>
          <h2 className="font-display type-h2 text-ink m-0 mb-4 max-w-[24ch]">
            This is what{" "}
            <span className="bg-build-band px-2 rounded-sm">
              fully managed
            </span>{" "}
            actually means.
          </h2>
          <p className="type-lead text-body m-0 max-w-[62ch]">
            Not a dashboard you log into. A named team doing the work on a
            schedule, and telling you what they did.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 border-t border-line pt-8 mb-[clamp(36px,4vw,56px)]">
          {COLUMNS.map((col) => (
            <div
              key={col.n}
              className="lg:border-r lg:border-line lg:last:border-r-0 lg:pr-6"
            >
              <p className="type-label text-label m-0 mb-1.5">{col.n}</p>
              <h3 className="font-display type-h3 text-ink m-0 mb-4">
                {col.label}
              </h3>
              <ul className="list-none m-0 p-0 grid gap-2.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="type-body text-body border-t border-line/70 pt-2.5 first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal className="border-t border-line pt-[clamp(28px,3vw,40px)]">
          <p className="font-display type-h3 text-ink m-0 mb-3 max-w-[24ch]">
            You stay in the decisions. You stay out of the day.
          </p>
          <p className="type-body text-body m-0 mb-6 max-w-[62ch]">
            The only thing we need from you regularly is a decision on what to
            buy. Everything above happens whether or not you are watching it
            happen.
          </p>
          <a href="/how-we-work" className="type-body font-semibold">
            See how we work →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

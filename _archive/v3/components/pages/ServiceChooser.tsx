import { isLive } from "@/lib/site-map";

/**
 * PROMPT_17 §1 — the chooser. The single biggest reason a qualified
 * first-time visitor leaves is that wholesale and private label read
 * as the same product twice and neither page names the alternative.
 * Column copy is the ticket's, verbatim; the capital lines are
 * dev-written (figure-free by the copy gate) and flagged for review.
 *
 * Renders directly after the hero on the three build pages and on
 * /build. The current page's column is marked rather than linked.
 */
const PATHS: {
  slug: string;
  name: string;
  desc: string;
  chooseIf: string[];
  capital: string;
}[] = [
  {
    slug: "/wholesale-ecommerce",
    name: "Wholesale",
    desc: "You buy products that already exist and already sell, from the brands that make them, and resell them. Lower risk, thinner margin, more of your capital working at once.",
    chooseIf: [
      "you want a business running sooner",
      "you would rather buy proven demand than create it",
      "you have capital to keep moving",
    ],
    capital:
      "Capital: most of it goes into stock, and it keeps moving — deployed, sold, redeployed.",
  },
  {
    slug: "/private-label",
    name: "Private label",
    desc: "You create your own product and your own brand. Higher margin, and you own something at the end. Slower, and more can go wrong before the first sale.",
    chooseIf: [
      "you want an asset rather than a trading business",
      "you can wait months before revenue",
      "you accept most product ideas will be rejected",
    ],
    capital:
      "Capital: spent up front on research, samples, compliance and a production run before the first sale.",
  },
  {
    slug: "/shopify-dtc",
    name: "Shopify / DTC",
    desc: "Your own store rather than a marketplace. You own the customer and the data; you also have to bring the traffic.",
    chooseIf: [
      "you want to own the customer relationship",
      "your product deserves its own storefront",
      "you can fund the traffic as well as the build",
    ],
    capital:
      "Capital: the build, plus the advertising that brings the traffic — the store earns nothing without it.",
  },
];

export default function ServiceChooser({
  current,
  note,
}: {
  current?: string;
  /** One line under the grid — /build uses it to reconcile the fourth
   *  card (website development) with the three-model comparison
   *  (PROMPT_20 item 6). */
  note?: string;
}) {
  return (
    <section
      aria-label="Which of these is for you"
      data-feature="chooser"
      className="bg-white border-y border-line"
    >
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(28px,3.5vw,44px)]">
        {/* Countless phrasing on purpose: /build's cards say "Four ways
            to build" and this compares the three business MODELS — a
            numbered kicker read as a contradiction (PROMPT_20 item 6). */}
        <p className="font-mono type-label text-label uppercase m-0 mb-5">
          Wholesale, private label or DTC — which one is yours?
        </p>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-3">
          {PATHS.filter((p) => isLive(p.slug)).map((p) => {
            const here = p.slug === current;
            return (
              <div
                key={p.slug}
                className={`rounded-md p-[clamp(18px,2vw,24px)] grid gap-3 content-start border ${
                  here ? "border-ink border-2" : "border-line"
                }`}
              >
                <b className="text-ink type-lead font-bold tracking-[-.01em]">
                  {p.name}
                </b>
                <p className="type-meta text-body m-0">{p.desc}</p>
                <div className="grid gap-1.5">
                  <span className="font-mono type-label text-label uppercase">
                    Choose this if
                  </span>
                  {p.chooseIf.map((c) => (
                    <span key={c} className="type-meta text-body flex gap-2">
                      <span className="flex-none w-1.5 h-1.5 rounded-full bg-ink mt-2" />
                      {c}
                    </span>
                  ))}
                </div>
                <p className="type-meta text-body m-0 border-t border-line/60 pt-2.5">
                  {p.capital}
                </p>
                {here ? (
                  <span className="font-mono type-label text-label normal-case tracking-normal">
                    you are reading this one
                  </span>
                ) : (
                  <a
                    href={p.slug}
                    className="text-ink hover:text-ink type-meta font-semibold"
                  >
                    Read the {p.name} page →
                  </a>
                )}
              </div>
            );
          })}
        </div>
        {note && (
          <p className="type-meta text-body mt-5 mb-0 max-w-[62ch]">{note}</p>
        )}
      </div>
    </section>
  );
}

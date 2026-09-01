import Reveal from "./Reveal";
import { pagesByEngine, type Engine } from "@/lib/site-map";

/**
 * A.05 introduction + A.06 engine cards. The three cards are the site
 * map: four chips per card, each a service page from the manifest —
 * rendered as a link only when that page is live, plain text until
 * then (no dead CTAs). The fourth Operate chip is a descriptor, not a
 * page, and never links to its own page.
 */
const CARDS: {
  engine: Exclude<Engine, null>;
  num: string;
  title: string;
  accent: string;
  copy: string;
  hub: string;
  cta: string;
}[] = [
  {
    engine: "build",
    num: "01",
    title: "Build",
    accent: "border-build border-t-build hover:bg-build/12",
    copy: "Stand the operation up — what to sell, who to buy it from, and the store, listings and accounts it sells through.",
    hub: "/build",
    cta: "Explore build →",
  },
  {
    engine: "grow",
    num: "02",
    title: "Grow",
    accent: "border-grow border-t-grow hover:bg-grow/12",
    copy: "Demand, advertising and conversion — run across marketplaces and your own store, and measured on margin rather than revenue.",
    hub: "/grow",
    cta: "Explore growth →",
  },
  {
    engine: "operate",
    num: "03",
    title: "Operate",
    accent: "border-operate border-t-operate hover:bg-operate/12",
    copy: "The daily work — purchase orders, inventory, orders, listings, cases, account health, and the reporting the next decision gets made on.",
    hub: "/operate",
    cta: "Explore operations →",
  },
];

export default function ThreeEngines() {
  return (
    <section className="bg-bone">
      <Reveal className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(64px,7vw,110px)] pb-[clamp(28px,4vw,48px)]">
        <div>
          <h2 className="font-display type-h2 text-ink m-0 mb-5 max-w-[26ch]">
            Most ecommerce businesses don&apos;t fail on strategy. They fail
            on <span className="bg-operate-band px-2 rounded-sm">operations</span>.
          </h2>
          <p className="type-lead text-body m-0 mb-4 max-w-[62ch]">
            Finding a product is the easy part. Deciding what is actually
            worth buying, getting a supplier to take you seriously, pricing it
            so it survives fees and freight, launching it, running the ads,
            keeping stock in and the account healthy — that is the work, and
            it does not stop. We don&apos;t advise on ecommerce. We run it.
          </p>
          <a href="/how-we-work" className="type-body font-semibold text-link-on-bone hover:text-link-on-bone">
            How we work →
          </a>
        </div>
      </Reveal>

      <div className="mx-auto max-w-[1280px] px-[clamp(24px,4vw,56px)] pb-[clamp(60px,7vw,104px)]">
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-[clamp(14px,1.6vw,20px)] gap-y-[clamp(16px,2vw,22px)] items-stretch">
          {CARDS.map((card) => {
            const services = pagesByEngine(card.engine);
            return (
              <div
                key={card.engine}
                id={card.engine}
                className={`relative bg-white border border-t-4 ${card.accent} rounded-md pt-[clamp(20px,2.2vw,28px)] px-[clamp(20px,2.2vw,28px)] pb-[clamp(22px,2.4vw,30px)] scroll-mt-[90px] flex flex-col transition-colors duration-[180ms]`}
              >
                <p className="type-label text-label m-0 mb-2">{card.num}</p>
                <h3 className="font-display type-h3 text-ink m-0 mb-2">
                  {card.title}
                </h3>
                <p className="type-body text-body m-0 mb-[22px]">
                  {card.copy}
                </p>
                <ul className="list-none m-0 mb-6 p-0 grid gap-2.5 flex-1">
                  {services.map((s) => (
                    <li key={s.slug} className="type-body">
                      {s.status === "live" ? (
                        <a href={s.slug} className="text-body hover:text-ink">
                          {s.title}
                        </a>
                      ) : (
                        <span className="text-body">{s.title}</span>
                      )}
                    </li>
                  ))}
                  {card.engine === "operate" && (
                    <li className="type-body text-body">
                      Reporting &amp; performance
                    </li>
                  )}
                </ul>
                <a href={card.hub} className="type-body font-semibold">
                  {card.cta}
                </a>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="mt-[clamp(22px,2.6vw,32px)] border-t border-line pt-5">
          <div className="flex items-center gap-[clamp(10px,1.6vw,18px)] flex-wrap type-label text-label uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-build" />
              Build
            </span>
            <span className="text-muted">→</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-grow" />
              Grow
            </span>
            <span className="text-muted">→</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-operate" />
              Operate
            </span>
            <span className="text-muted">→</span>
            <span className="flex items-center gap-2 text-ink font-semibold">
              <span className="w-2 h-2 rounded-full bg-ink" />
              Next decision ↺
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

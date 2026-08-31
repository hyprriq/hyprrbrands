import Reveal from "./Reveal";

const ARTICLES = [
  {
    href: "/insights/amazon-automation-truth",
    tag: "Amazon automation truth",
    title: "Is Amazon automation actually passive?",
    copy: "What the operating work looks like when someone else runs your marketplace account.",
  },
  {
    href: "/insights/marketplace-management-cost",
    tag: "Walmart marketplace",
    title: "What should marketplace management cost?",
    copy: "How fee structures compare, and what each model incentivises.",
  },
  {
    href: "/insights/account-suspension",
    tag: "Account health",
    title: "What happens when a seller account gets suspended?",
    copy: "The operational sequence, and what reduces the risk of it happening.",
  },
  {
    href: "/insights/private-label-cost",
    tag: "Transparency economics",
    title: "What does private label really cost before the first sale?",
    copy: "Every line item between product research and a live listing.",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="bg-cloud">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,110px)]">
        <div className="mb-[clamp(30px,4vw,48px)]">
          <h2 className="font-display font-bold text-[clamp(30px,3.6vw,52px)] leading-[1.04] tracking-[-.03em] m-0 mb-4">
            What we&apos;re seeing in{" "}
            <span className="border-b-4 border-sky pb-0.5">commerce</span>.
          </h2>
          <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-body m-0 max-w-[62ch]">
            Practical research on marketplaces, private label, ecommerce
            operations and the economics behind the business.
          </p>
        </div>
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[clamp(18px,2vw,26px)]">
          {ARTICLES.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="text-ink hover:text-ink bg-white border border-line rounded-2xl p-6 flex flex-col gap-3"
            >
              <div className="h-[5px] w-11 bg-sky rounded-[3px]" />
              <div className="text-[11px] tracking-[.14em] uppercase text-muted">
                {a.tag}
              </div>
              <h3 className="font-display font-semibold text-xl leading-[1.25] tracking-[-.02em] m-0">
                {a.title}
              </h3>
              <p className="text-base leading-[1.6] text-body m-0 flex-1">
                {a.copy}
              </p>
              <span className="text-sm font-semibold text-violet">
                Read article →
              </span>
            </a>
          ))}
        </Reveal>
        <div className="mt-7">
          <a href="/insights" className="text-[15.5px] font-semibold">
            All insights →
          </a>
        </div>
      </div>
    </section>
  );
}

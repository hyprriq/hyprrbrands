const COLUMNS: { title: string; links: [string, string][] }[] = [
  {
    title: "Build",
    links: [
      ["/wholesale", "Wholesale ecommerce"],
      ["/private-label", "Private label / brand building"],
      ["/shopify-dtc", "Shopify / DTC"],
      ["/website-development", "Website development"],
    ],
  },
  {
    title: "Grow",
    links: [
      ["/growth", "Ecommerce growth"],
      ["/marketplace-growth", "Marketplace growth"],
      ["/dtc-growth", "DTC growth"],
      ["/growth-marketing", "Growth marketing"],
    ],
  },
  {
    title: "Operate",
    links: [
      ["/operations", "Ecommerce operations"],
      ["/marketplace-management", "Marketplace management"],
      ["/order-inventory", "Order & inventory management"],
      ["/reporting", "Reporting & performance"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About"],
      ["/how-it-works", "How we work"],
      ["/insights", "Insights"],
      ["/pricing", "Pricing"],
      ["/careers", "Careers"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["/research", "Research"],
      ["/true-cost", "True cost calculator"],
      ["/documents", "Documents"],
      ["#faq", "FAQ"],
      ["/fit", "Who we say no to"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["/apply", "Let's talk"],
      ["mailto:hello@hyprrbrands.com", "hello@hyprrbrands.com"],
      ["tel:+18338906367", "+1 (833) 890-6367"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-fog">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(48px,5vw,72px)] pb-9 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[clamp(24px,3vw,40px)]">
        <div className="min-w-[200px]">
          <div className="font-display font-bold text-xl text-cloud tracking-[-.02em] mb-3.5">
            hyprr <span className="font-normal text-muted">brands</span>
          </div>
          <p className="text-base leading-[1.6] m-0 max-w-[32ch]">
            The ecommerce operations partner for ambitious brands.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="text-[11px] tracking-[.14em] uppercase text-cloud mb-4">
              {col.title}
            </div>
            <div className="grid gap-2.5 text-[13.5px]">
              {col.links.map(([href, label]) => (
                <a key={href} href={href} className="text-fog hover:text-cloud">
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-6 pb-11 text-[12.5px] flex justify-between gap-[18px] flex-wrap border-t border-cloud/8">
        <span>© 2026 Hyprr Retail LLC</span>
        <div className="flex gap-5 flex-wrap">
          <a href="/privacy" className="text-fog hover:text-cloud">
            Privacy policy
          </a>
          <a href="/terms" className="text-fog hover:text-cloud">
            Terms of service
          </a>
          <a href="/disclosure" className="text-fog hover:text-cloud">
            Disclosure
          </a>
          <a href="/accessibility" className="text-fog hover:text-cloud">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
}

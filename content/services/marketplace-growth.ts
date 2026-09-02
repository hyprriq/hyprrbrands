import type { ServicePageData } from "@/lib/service-pages";

/**
 * /marketplace-growth — Grow engine, wholesale composition with the
 * GAP 2 substitutions: the catalogue table is replaced by the
 * optimisation loop, and the approval gate by the channel-expansion
 * split (Amazon vs Walmart, assembled from the page's own body copy).
 * Copy from docs/content/marketplace-growth.md (2 Sep).
 */
const data: ServicePageData = {
  slug: "/marketplace-growth",
  engine: "grow",
  serviceType: "Amazon & Walmart marketplace growth",
  name: "Marketplace growth",
  short: "marketplace growth",
  metaTitle: "Amazon & Walmart Marketplace Growth Agency | Hyprr Brands",
  metaDescription:
    "Listings, ranking, buy box and review velocity worked as one loop across Amazon US & UK and Walmart US — one catalogue, two rulebooks, one operation.",

  h1: "Amazon & Walmart marketplace growth",
  answer:
    "Hyprr grows marketplace sales by working listings, content, ranking, buy box and review velocity as a single loop across Amazon in the US and UK, and Walmart in the US. One catalogue, run against two different rulebooks, by the same people who see your inventory and margin. The accounts stay yours and every growth action is proposed before it runs.",
  disqualifier:
    "Not for you if you want a ranking promised before anyone has read your listings.",

  involvesLead:
    "Marketplace growth is a loop, not a launch. Every pass through it produces the input for the next one.",
  involvesBody: [
    "Marketplace growth has a specific shape because the marketplace decides what is visible, and the marketplace's decision is made from data you produce.",
    "The loop runs: listing → traffic → conversion → ranking → buy box → data → listing. A listing that converts earns traffic; traffic that converts earns ranking; ranking earns the buy box; the buy box produces the sales data that feeds the next listing decision. Break the loop anywhere and everything downstream stalls, which is why working one part in isolation — a content refresh, a bid change — produces the frustrating result of effort without movement.",
    "Listings and content are the input, not the finish. Title, bullets, imagery, A+ content, backend terms and the attributes that decide which filters you appear in. Most catalogues have listings that were written once and are now a ranking ceiling.",
    "Ranking follows relevance and conversion, not effort. A listing ranks because customers who saw it bought it, so the work is conversion first and visibility second — the opposite of the usual order.",
    "Buy box is the one that surprises people. On a shared listing you can hold ranking and still not sell, because price, fulfilment method, seller metrics and stock position decide who the button belongs to. Growth work that ignores buy box share is growth work measuring the wrong thing.",
    "Review velocity compounds and cannot be rushed honestly. It comes from selling, from the marketplace's own request mechanisms, and from a product that does not disappoint. Anything faster than that is a policy risk that costs more than it gains.",
    "Channel expansion — one catalogue across Amazon US, Amazon UK and Walmart US. The catalogue is shared; almost nothing else is. Different content rules, different advertising, different case handling, different policy thresholds, and Walmart's smaller traffic often converts differently because the competitive set is thinner. Treating it as an Amazon copy is how it underperforms.",
  ],

  involvesSubheads: ["One catalogue, two rulebooks", "Ranking without discounting"],

  visual: {
    kind: "loop",
    title: "The optimisation loop",
    items: ["Listing", "Traffic", "Conversion", "Ranking", "Buy box", "Data"],
    back: "↺ back to listing",
  },

  deliverables: [
    "Listings and content rebuilt as ranking and conversion assets, not descriptions",
    "The loop operated weekly — listing, traffic, conversion, ranking, buy box, data",
    "Buy box share monitored and defended as a metric in its own right",
    "Channel expansion run against each marketplace's own rules, not copied across",
  ],
  artefact: {
    kind: "split",
    cols: [
      {
        name: "Amazon",
        items: [
          ["Shared", "Catalogue, brand assets, pricing floor"],
          ["Differs", "Content rules and A+ formats"],
          ["Differs", "Advertising surface and campaign types"],
          ["Differs", "Case handling and policy cadence"],
        ],
      },
      {
        name: "Walmart",
        items: [
          ["Shared", "Catalogue, brand assets, pricing floor"],
          ["Differs", "Listing quality standards"],
          ["Differs", "Thinner competitive set — conversion behaves differently"],
          ["Differs", "Policy thresholds and enforcement"],
        ],
      },
    ],
  },

  artefactNote:
    "One catalogue, two rulebooks. The same product needs different content, different ranking work and different advertising on each marketplace — and the split is where most single-channel agencies stop being useful.",
  fitFor: [
    "You already sell on at least one marketplace and want the catalogue working harder",
    "You want the same people seeing inventory, margin and rank",
    "You want Walmart run properly rather than as an afterthought",
  ],
  notFor: [
    "You want a rank or a revenue figure promised up front",
    "Your listings are not yet accurate",
    "You want review velocity accelerated by means the marketplace prohibits",
  ],

  phases: [
    {
      days: "Days 0–30",
      title: "Read the catalogue",
      body: "Every listing audited for content, attributes, imagery and backend terms. Current ranking and buy box share established per line. Account health and any policy issues surfaced. Walmart assessed separately rather than assumed. Output is a written read of where the ceiling actually is — which is usually the listings, not the advertising.",
    },
    {
      days: "Days 31–60",
      title: "First loop",
      body: "Highest-leverage listings rebuilt, conversion measured before traffic is bought. Buy box position addressed where price or fulfilment is losing it. Backend terms and attributes corrected — the unglamorous work that moves filter visibility.",
    },
    {
      days: "Days 61–90",
      title: "Expand and repeat",
      body: "Second loop with the constraint from the first released. Channel expansion where the catalogue supports it, built to each marketplace's rules. Weekly cadence established, monthly written next decision.",
    },
  ],
  hwwTitle: "The loop, run weekly",
  hww: {
    kind: "chain",
    items: [
      { label: "Listing", sub: "content + attributes" },
      { label: "Traffic", sub: "organic + paid" },
      { label: "Conversion", sub: "measured" },
      { label: "Ranking", sub: "earned" },
      { label: "Buy box", sub: "defended" },
      { label: "Data", sub: "next decision" },
    ],
  },

  yoursIntro:
    "The most-voted answer on the Reddit thread that ranks for this term warns about agency claims. That is fair, and the answer is not a better claim — it is a structure where the claim does not matter because you hold everything.",
  yours: [
    "Seller accounts on both marketplaces",
    "Listings and catalogue",
    "Inventory and capital",
    "Brand registry and content",
    "Every growth decision",
  ],
  hyprrWork: [
    "Listing and content rebuilds",
    "Loop operation and ranking work",
    "Buy box monitoring and defence",
    "Channel expansion and reporting",
  ],
  yoursOutro:
    "We work through permissioned access in your accounts, never with your credentials. If we stop, the listings we rebuilt stay rebuilt, in your catalogue, under your name.",
  managedLead:
    "Ranking, buy box and reviews move on their own schedules, so these are worked at different intervals rather than reviewed together once a month. The intervals are the deliverable.",
  managed: [
    ["Listings and content", "ongoing"],
    ["Ranking work", "weekly"],
    ["Buy box", "monitored daily"],
    ["Review velocity", "within policy"],
    ["Channel expansion", "per catalogue"],
    ["Reporting", "weekly"],
  ],

  fees: [
    "Realised margin per line, after marketplace fees, advertising and returns. Not revenue — revenue growth on a line whose buy box was won by cutting price is not growth, and a revenue-based fee would reward it.",
  ],
  faqs: [
    {
      q: "How long does ranking actually take?",
      a: "Longer than most agency pages imply and it depends on the category's velocity. Ranking follows conversion history, so the honest sequence is: fix the listing, prove conversion on the traffic you already have, then buy visibility — and each of those has its own clock. What we can commit to is that you will see the loop's inputs weekly and know which stage is binding. Anyone quoting you a timeline before reading your listings is quoting an average.",
    },
    {
      q: "Will you promise a ranking position?",
      a: "No, and we would treat any firm that does with suspicion. Ranking is decided by the marketplace using signals no third party controls, and the mechanisms that produce fast artificial movement are policy violations that cost the account. What we commit to is the work and the reporting, per line, weekly.",
    },
    {
      q: "How do you handle review velocity?",
      a: "Through the marketplace's own request mechanisms, on a consistent cadence, and by selling more of a product that does not disappoint. Nothing else. Incentivised reviews, review groups and gated feedback are policy violations, and the account risk is not proportionate to the gain. If a product's reviews are poor for a reason, that is a product problem and we will say so rather than trying to bury it.",
    },
    {
      q: "Is Walmart worth it?",
      a: "Often yes, and for a different reason than people expect — not traffic volume, but a thinner competitive set in many categories, which changes what a given listing quality is worth. It is not a copy-paste of your Amazon catalogue: different content rules, different advertising, different case handling, different policy thresholds. Run properly it can carry margin that Amazon's competition has compressed. Run as an afterthought it produces the disappointing result most sellers report.",
    },
  ],

  nextStep: {
    engine: "operate",
    h3: "Ranking is worth nothing on a suspended account.",
    body: "The work that wins the buy box and the work that keeps the account sellable are different jobs on different clocks. Account health, policy and cases run daily underneath everything on this page.",
    links: [
      { label: "Marketplace management", href: "/marketplace-management" },
      { label: "The Operate engine", href: "/operate" },
    ],
  },
  related: [
    {
      name: "Ecommerce growth",
      slug: "/ecommerce-growth",
      engine: "grow",
    },
    {
      name: "Wholesale ecommerce",
      slug: "/wholesale-ecommerce",
      engine: "build",
    },
  ],
  insight: "Amazon/Walmart growth: one catalogue, two rulebooks",
};

export default data;

import type { ServicePageData } from "@/lib/service-pages";

/**
 * /ppc-paid-media — Grow engine, ppc composition. Copy from
 * docs/content/ppc-paid-media.md (2 Sep). Built for the visitor
 * already on the site, not for the SERP (Reddit ranks #1 there).
 */
const data: ServicePageData = {
  slug: "/ppc-paid-media",
  engine: "grow",
  serviceType: "Amazon & Walmart PPC management",
  name: "PPC & paid media",
  short: "PPC and paid media",
  metaTitle: "Amazon & Walmart PPC Management | Judged on Margin",
  metaDescription:
    "Advertising run inside the operation that also controls inventory, pricing and listings — and reported on contribution margin, not ACoS alone.",

  h1: "Amazon & Walmart PPC, run inside the operation",
  answer:
    "Hyprr runs advertising as part of the operation, not beside it. Bids, search terms, budgets and creative are managed against inventory, listing quality, pricing and margin, because each one changes what advertising can do. The ad accounts are yours, the spend is yours to approve, and the reporting shows the whole stack, not ACoS alone.",
  disqualifier:
    "Not for you if you want advertising managed in isolation from inventory, pricing and margin.",

  involvesLead:
    "Advertising is connected to inventory, listings, price and margin in both directions. Managing it alone is managing half the system.",
  involvesBody: [
    "The reason most marketplace advertising underperforms has little to do with the advertising.",
    "Bids, search terms, budgets and creative are the visible work, and they matter. But each one is downstream of something the advertiser usually cannot see. A bid is only correct relative to the margin on that line — and margin moves with landed cost, fee changes and returns. A budget is only correct relative to inventory cover; spending into a line with three weeks of stock buys a stockout, and a stockout costs ranking that takes months to rebuild. Creative only converts if the listing behind it converts. And price position decides whether the traffic you bought reaches a buy box you hold.",
    "So an advertising agency working from an ads dashboard is optimising one layer of a six-layer stack, with no visibility of the five that constrain it. It will produce an efficient-looking account and a business that is not better off. That is not incompetence; it is a scope problem, and it is structural.",
    "The work itself, once that is understood: campaign structure built around the catalogue rather than around ad types. Bids set against margin per line, not against rank. Search terms harvested and negated on a fixed weekly cadence, which is unglamorous and is most of the actual gain. Budgets capped by inventory cover and approved by you. Creative tested where conversion is the read, not clicks.",
    "Amazon — in the US and UK — and Walmart in the US, plus off-platform where a product genuinely warrants it — and honestly, most do not until the marketplace channel is saturated.",
    "The reporting difference is the whole point. You get the stack: spend, sales, ACoS, and then contribution margin after cost of goods, fees and returns, per line, alongside inventory cover and buy box share on the same page. What it cost, what it made, and whether it should have run at all.",
  ],

  involvesSubheads: ["Judged on margin, not ACoS", "When advertising is the wrong answer"],

  visual: {
    kind: "stack",
    title: "The two-way stack",
    items: [
      ["Inventory", "cover"],
      ["Listing", "quality"],
      ["Price", "position"],
      ["Advertising", "bids · terms · budget · creative"],
      ["Conversion", "rate"],
      ["Margin", "after ads"],
    ],
  },

  deliverables: [
    "Ad accounts run in your name with your approval on spend",
    "Bids, search terms, budgets and creative managed weekly",
    "Every advertising decision checked against inventory and margin",
    "Reporting that shows the stack, not a single ratio",
  ],
  artefact: {
    kind: "levers",
    items: [
      ["Bids", "Set against margin, not against rank alone."],
      ["Search terms", "Harvested and negated on a fixed cadence."],
      ["Budgets", "Capped by inventory cover, approved by you."],
      ["Creative", "Tested where conversion, not clicks, is the read."],
    ],
  },

  artefactNote:
    "Four levers, and only the first is what most agencies mean by PPC management. The other three are why advertising sits inside the operation rather than beside it — a bid change is worth nothing if the inventory behind it runs out.",
  fitFor: [
    "You already sell and want advertising to earn its place",
    "You want spend approved, not discovered",
    "You want ads managed by the people who see your inventory",
  ],
  notFor: [
    "You want ACoS as the only measure",
    "You want ads run on an agency-owned account",
    "Your listings are not yet ready to convert",
  ],
  fitNote:
    "If your listings do not convert the traffic they already get, advertising will make that more expensive rather than less. We will say so before taking a budget, and the listing work comes first.",

  phases: [
    {
      days: "Days 0–30",
      title: "Read the account and the stack",
      body: "Existing campaign structure, search term history and wasted spend. Then the parts an ads-only audit misses: margin per line, inventory cover, buy box share, listing conversion. Output is a written read of what advertising can and cannot fix here — which sometimes concludes that the budget should go to listings first.",
    },
    {
      days: "Days 31–60",
      title: "Restructure and cap",
      body: "Campaign structure rebuilt around the catalogue. Bids reset against margin floors. Budgets capped by inventory cover per line. Weekly search term harvest and negation begins. Spend approval process agreed with you.",
    },
    {
      days: "Days 61–90",
      title: "Test and report the stack",
      body: "Creative testing where conversion is measurable. The full-stack report replaces the ACoS report. By day 90 you should be reading advertising decisions against margin and cover rather than against a ratio.",
    },
  ],
  hwwTitle: "Why ACoS alone is a poor measure",
  hww: {
    kind: "statements",
    items: [
      [
        "Inventory",
        "A low ACoS on a line that is about to stock out is spend that should have stopped.",
      ],
      [
        "Price",
        "A campaign can look efficient while the price position is losing the buy box.",
      ],
      [
        "Margin",
        "Ads are judged after margin, per line, or they are not judged at all.",
      ],
    ],
  },

  yoursIntro:
    "Advertising accounts are the most commonly agency-held asset in this category, and the one that costs most to lose. Here is where they sit.",
  yours: [
    "Advertising accounts",
    "Spend approval",
    "Seller account",
    "Customer and search data",
  ],
  hyprrWork: [
    "Campaign structure and bids",
    "Search term work and creative",
    "Budget and inventory alignment",
    "Weekly stack reporting",
  ],
  yoursOutro:
    "The ad accounts are registered to your business and billed to your card. We are users on them, added by you and removable by you. The search term history — years of it, and genuinely valuable — stays in your account.",
  managedLead:
    "Advertising is operated weekly because the things that break it — a stockout, a price change, a lost buy box — move weekly. Budgets are capped against inventory rather than against a target spend.",
  managed: [
    ["Campaign structure", "built · maintained"],
    ["Bids", "weekly"],
    ["Search terms", "weekly"],
    ["Budgets", "inventory-capped"],
    ["Creative", "tested"],
    ["Reporting", "weekly"],
  ],

  fees: [
    "Realised margin, and no part of the fee is a percentage of ad spend. This is the single most common fee model in marketplace advertising and it is the one with the worst incentive: the agency's income rises with your spend whether or not the spend worked. A margin fee falls when advertising is unprofitable, which means recommending less spend is a recommendation we can actually afford to make.",
  ],
  faqs: [
    {
      q: "Why not just report ACoS?",
      a: "Because ACoS tells you what advertising cost as a share of what it sold, and nothing about whether the sale was worth making. A line advertising at a comfortable ACoS can still be losing money once cost of goods, fees and returns come off — and a line at an uncomfortable ACoS can be the right spend if it is defending a ranking position worth more than the gap. We report ACoS, because you will want to compare it to what you have seen before. Then we report contribution margin after everything, per line, next to inventory cover and buy box share. That is the number decisions get made on.",
    },
    {
      q: "Who approves advertising spend?",
      a: "You do, at the budget level, and the budgets are capped by inventory cover before they reach you. Day-to-day bid and search-term work happens inside those caps without asking, because waiting a week to negate a wasteful term costs more than the autonomy is worth. Anything that changes total spend comes to you. The card is yours and the platform bills you directly.",
    },
    {
      q: "Do you manage advertising on Amazon and on Walmart?",
      a: "Both — Amazon Ads in the US and UK, and Walmart Connect in the US — managed as separate accounts with separate logic rather than mirrored. Walmart's advertising has a thinner competitive set in many categories, which changes what a bid is worth, and its campaign types and reporting are not Amazon's. Off-platform — paid social, search — where a product genuinely warrants it, though for most marketplace businesses the marketplace channel is not yet saturated enough to justify it.",
    },
    {
      q: "What if advertising and inventory disagree?",
      a: "Inventory wins, every time. If a line is advertising efficiently and cover is falling toward a stockout, spend on it is throttled or stopped — even though the campaign looks like the best performer in the account. The reason is arithmetic: a stockout costs ranking, ranking is expensive and slow to rebuild, and a few days of foregone orders is cheaper than a quarter of recovery. This is the decision an ads-only agency structurally cannot make, because it cannot see the cover.",
    },
  ],

  nextStep: {
    engine: "operate",
    h3: "Advertising is the fastest way to find an operations problem.",
    body: "Spend rises and the stockouts, the pricing errors and the case backlog all surface at once. Running ads inside the operation means the budget is capped by what the business can actually ship, not by a target.",
    links: [
      { label: "Marketplace management", href: "/marketplace-management" },
      { label: "The Operate engine", href: "/operate" },
    ],
  },
  related: [
    { name: "Marketplace growth", slug: "/marketplace-growth", engine: "grow" },
    { name: "Ecommerce growth", slug: "/ecommerce-growth", engine: "grow" },
  ],
  insight: "PPC economics: the number that is not ACoS",
};

export default data;

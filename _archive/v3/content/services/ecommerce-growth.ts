import type { ServicePageData } from "@/lib/service-pages";

/**
 * /ecommerce-growth — Grow engine, grow composition. Copy from
 * docs/content/ecommerce-growth.md (2 Sep). Written to be CITED by
 * the AI Overview for "ecommerce growth agency": definitional
 * opening, a comparison block matching the Overview's own shape, and
 * an explicit when-to-hire section including when not to.
 */
const data: ServicePageData = {
  slug: "/ecommerce-growth",
  engine: "grow",
  serviceType: "Ecommerce growth management",
  name: "Ecommerce growth",
  short: "ecommerce growth",
  metaTitle: "Ecommerce Growth Agency | Growth You Can Fulfil",
  metaDescription:
    "Demand, conversion, inventory, margin and capacity worked as one set of operating questions, sequenced against what the business can actually ship.",

  h1: "Ecommerce growth agency — growth the operation can actually deliver",
  answer:
    "Hyprr grows demand without breaking the economics or the operation behind it. Growth is run as a set of operating questions — demand, conversion, inventory, margin, capacity — and sequenced against what the business can actually fulfil. No growth action is taken that inventory, cash or the team cannot absorb.",
  disqualifier:
    "Not for you if you want growth targets without the operational constraints attached.",

  involvesLead:
    "Growth is a sequence of decisions, each one checked against inventory, margin and capacity before it is taken.",
  involvesBody: [
    "An ecommerce growth agency is a firm that increases a business's sales while managing the constraints that sales create — inventory cover, cash, fulfilment capacity and contribution margin. It differs from a marketing agency in scope: marketing produces demand, growth work decides which demand the business can profitably absorb and in what order.",
    "Growth is easy to buy and hard to survive. Most of what is sold as ecommerce growth is demand generation with the consequences left to the client — advertising that produces orders the warehouse cannot fill, a promotion that sells three months of cover in a fortnight, a channel launch that arrives before the catalogue is ready. Each of those is a growth success and an operational failure, and they are the same event.",
    "So growth runs on five questions, in order, and each has an answer before an action is taken. Demand — is there more demand than we are capturing, and where is it? Search, category, channel. Conversion — does what already arrives convert? Improving this is free relative to buying more traffic, and it is almost always where the first month goes. Inventory — can we fulfil what growth brings, with what cover, on what lead time? Margin — does the additional order still make money after fees, advertising and returns, per line rather than on average? Capacity — can the operation absorb the next step: the case volume, the fulfilment, the people?",
    "A growth action passes all five or it waits. Frequently the answer is that the constraint is not demand at all, and the honest recommendation is to fix conversion or cover before spending anything on acquisition.",
    "The work is then run as a loop rather than a campaign: listing, traffic, conversion, ranking, buy box, data — and back to listing. Each pass produces a written next decision.",
  ],

  comparison: {
    title: "Traditional agency vs growth agency",
    cols: ["Traditional marketing agency", "Growth agency, as Hyprr runs it"],
    rows: [
      [
        "Scope",
        "Demand generation — traffic, ads, content",
        "Demand plus the constraints it creates",
      ],
      ["Measures on", "Revenue, ROAS, traffic", "Contribution margin, per line"],
      ["Inventory", "Client's problem", "A gate on every growth action"],
      [
        "Fulfilment capacity",
        "Not in scope",
        "A gate on every growth action",
      ],
      [
        "When it stops",
        "When budget stops",
        "When the operation cannot absorb more",
      ],
      [
        "Fee basis",
        "Retainer, or a percentage of ad spend",
        "Realised margin — no component on spend",
      ],
    ],
    closing:
      "A percentage-of-spend fee makes spending more the agency's best outcome. A retainer makes activity the agency's best outcome. Neither is dishonest, but both put the agency's interest a step away from the client's. A fee on realised margin puts them in the same place: if the growth action did not make money, neither did we.",
  },

  involvesSubheads: ["Finding the binding constraint", "Knowing when to stop"],

  diagram: {
    kind: "five-questions",
    caption:
      "Five questions in the order they bind — the work starts at whichever one binds now.",
  },
  ruleCard: {
    text: "Growth you cannot fulfil is not growth.",
    source:
      "Proven in the five operating questions, in the order they bind.",
  },

  layout: "constraint-lever",
  connectedStack: true,
  stopping: {
    title: "When we recommend stopping",
    body: "A growth action passes all five constraints or it waits — and frequently the honest answer is that the constraint is not demand at all. An action that would break fulfilment or push a line below its margin floor does not run. The fee follows realised margin rather than activity, which is why the recommendation to stop is one we can afford to make.",
  },

  visual: {
    kind: "panel",
    title: "Growth control panel · questions, not scores",
    items: [
      {
        k: "Demand",
        q: "Is there more demand than we are capturing?",
        state: "Reviewing search + traffic",
      },
      {
        k: "Conversion",
        q: "Does the listing or page convert what arrives?",
        state: "Baseline set",
      },
      {
        k: "Inventory",
        q: "Can we fulfil what growth brings?",
        state: "Cover confirmed",
      },
      {
        k: "Margin",
        q: "Does each extra order still make money?",
        state: "Within target",
      },
      {
        k: "Capacity",
        q: "Can the operation absorb the next step?",
        state: "Constrained · flagged",
      },
    ],
  },

  deliverables: [
    "A growth plan sequenced against inventory and capacity",
    "Listing, traffic and conversion worked as one loop",
    "Margin read on every growth action before it is taken",
    "A written next decision each month",
  ],
  artefact: {
    kind: "loop",
    items: ["Listing", "Traffic", "Conversion", "Ranking", "Buy box", "Data"],
  },

  artefactNote:
    "The loop has no entry point marked, deliberately. Growth work starts wherever the binding constraint is — often conversion or margin rather than traffic — and the sequence only matters once you know which one it is.",
  whenToHire: {
    title: "When to hire a growth agency",
    body: [
      "Hire one when you have a business that already sells, demand you are not capturing, and no one whose job is deciding what to do about it in what order. That is the real trigger: not a revenue target, but an absence of sequencing.",
      "Do not hire one when you are not yet fulfilling current orders comfortably — growth will make that worse and you will blame the wrong thing. Do not hire one before a product has proven it sells. And do not hire one that will not tell you when the answer is to stop.",
    ],
  },
  fitFor: [
    "You have an operating business that is ready to grow",
    "You want growth that the operation can actually deliver",
    "You want to decide, not be told",
  ],
  notFor: [
    "You want a percentage promised up front",
    "You are not yet fulfilling current orders comfortably",
    "You want advertising alone treated as growth",
  ],

  phases: [
    {
      days: "Days 0–30",
      title: "Baseline",
      body: "Inventory cover, margin floor per line, fulfilment capacity and current conversion measured before any action. This is the month that decides whether the rest is real. No growth action is taken in it, which is unusual enough that clients ask; the answer is that a growth plan without a baseline is a guess with a schedule attached.",
    },
    {
      days: "Days 31–60",
      title: "First loop",
      body: "The cheapest wins first, which is almost always conversion on traffic you already have. Listing and content work, then traffic, measured against the baseline. Each action carries a margin read before it runs.",
    },
    {
      days: "Days 61–90",
      title: "Sequence and cadence",
      body: "The loop repeats with the constraint that bound last time released or accepted. Monthly written next decision begins. By day 90 you should be able to name your binding constraint without looking it up.",
    },
  ],
  hwwTitle: "Sequencing growth against operational capacity",
  hww: {
    kind: "statements",
    items: [
      [
        "First",
        "Baseline the operation: inventory cover, margin floor, team capacity.",
      ],
      [
        "Then",
        "Take the growth actions the baseline can absorb, one loop at a time.",
      ],
      [
        "Always",
        "Stop a growth action before it breaks fulfilment or margin.",
      ],
    ],
  },

  yoursIntro:
    "Growth work touches every account you have. What it does not touch is who owns them or who decides.",
  yours: [
    "Seller and store accounts",
    "Customer and sales data",
    "Inventory and capital",
    "Every growth decision",
  ],
  hyprrWork: [
    "Demand and conversion analysis",
    "Growth sequencing and execution",
    "Margin and capacity checks",
    "Monthly next-decision report",
  ],
  yoursOutro:
    "Every growth action is proposed with its margin and capacity read attached, and approved by you before it runs. Nothing scales without a decision.",
  managedLead:
    "Growth work runs continuously rather than in campaigns, so the list below is a cadence rather than a scope. What changes month to month is which constraint is binding, not which of these we are doing.",
  managed: [
    ["Listing optimisation", "ongoing"],
    ["Traffic & ranking", "operated"],
    ["Conversion", "tested"],
    ["Margin read", "per action"],
    ["Capacity check", "per action"],
    ["Reporting", "monthly"],
  ],

  fees: [
    "Realised margin, not revenue and not ad spend. In growth work this is the whole argument: a fee on spend rewards spending, a fee on revenue rewards discounting, and a retainer rewards activity. A fee on what a growth action actually made after costs is the only one that agrees with the recommendation to stop.",
  ],
  faqs: [
    {
      q: "How is growth measured without promising a number?",
      a: "By contribution margin per line, month over month, against a baseline set before anything started. We will not promise a percentage, because the number depends on your category, your inventory position and your cash — none of which an agency controls, and all of which a promise would require us to pretend we do. What you get instead is a measured baseline, a margin read on every action before it runs, and a written monthly statement of what moved and what it cost. That is checkable in a way a forecast is not.",
    },
    {
      q: "What happens if growth outruns inventory?",
      a: "It should not, because inventory cover is a gate on every growth action rather than a report we read afterwards. If it does happen — a supplier misses, a line moves faster than any read predicted — the response is to throttle acquisition on that line immediately rather than let it run to a stockout. A stockout costs ranking, and ranking is expensive to recover. Throttling costs a few days of orders. That trade is made the same way every time.",
    },
    {
      q: "Do you run advertising as part of growth?",
      a: "Yes, but advertising is one lever inside the loop rather than the loop itself. If conversion on existing traffic is the binding constraint, spending on more traffic makes the problem more expensive, and we will say so before taking the budget. The advertising detail — bids, search terms, budgets, creative — is on the PPC and paid media page.",
    },
    {
      q: "How does this differ from marketplace growth?",
      a: "Scope. This page is cross-channel: marketplaces, your own store, and the sequencing between them, with the constraint reads that span both. Marketplace growth is the marketplaces specifically — Amazon in the US and UK, and Walmart in the US — listings, ranking, buy box, review velocity, channel expansion inside those rulebooks. If your business is marketplace-only, that page is the more precise answer. If you run both a store and marketplaces and the question is which gets the next pound, this one is.",
    },
  ],

  nextStep: {
    engine: "operate",
    h3: "Growth you cannot fulfil is not growth.",
    body: "Every growth action lands on an operation that has to absorb it — more orders, more stock, more cases, more that can go wrong. The daily desk is what keeps the result from unwinding, and it is why we will recommend waiting.",
    links: [
      { label: "Scale", href: "/scale" },
      { label: "Ecommerce operations", href: "/ecommerce-operations" },
      { label: "The Operate engine", href: "/operate" },
    ],
  },
  related: [
    { name: "Marketplace growth", slug: "/marketplace-growth", engine: "grow" },
    { name: "PPC & paid media", slug: "/ppc-paid-media", engine: "grow" },
  ],
  insight: "Growth economics: why margin is the constraint that matters",
};

export default data;

import type { ServicePageData } from "@/lib/service-pages";

/**
 * /private-label — Build engine, private-label composition (gated
 * sequence visual, verdict-sheet artefact, compliance stops).
 */
const data: ServicePageData = {
  slug: "/private-label",
  engine: "build",
  name: "Private label",
  short: "private label",
  metaTitle: "Private Label Product Development & Launch | Hyprr Brands",
  metaDescription:
    "Hyprr decides with you whether a product deserves to exist, then takes it to market: research, validation, supplier, packaging, compliance and launch. The brand stays yours.",

  h1: "Private Label Product Development & Launch",
  answer:
    "Hyprr decides with you whether a product deserves to exist, then takes it to market: research, validation, supplier and sample, packaging and compliance, listing and launch. Every product gets a written verdict before money is committed. You fund inventory, testing and trademark; the brand, the listings and the supplier relationships are yours.",
  disqualifier:
    "Not for you if you are looking for a product to be picked for you without a verdict you can read.",

  involvesLead:
    "Private label is a decision first and a supply chain second. Most ideas should be rejected before a sample is ordered.",
  involvesBody: [
    "The work starts before the product exists. Research and validation are a filter, not a formality: demand that survives seasonality, competition you can actually displace, a price point that carries fees, freight and advertising, and a category whose review structure a new entrant can live in. Each criterion gets its own verdict on a sheet you can read, and a single honest Reject at this stage is worth more than a launch that dies at month four.",
    "When a product clears validation, the supply chain begins: supplier shortlisting and negotiation, a sample round with a written quality check, and the compliance gates the category demands — liability insurance, lab testing, certification, a responsible importer of record, and the trademark filing that makes the brand defensible. Each gate is a stop. Nothing proceeds to a production order until the gate before it is cleared and recorded, because unwinding a compliance problem after stock lands costs multiples of preventing it.",
    "Then the launch itself: packaging and brand assets, the listing built for the category's actual search behaviour, launch pricing and advertising, and the first replenishment decision. After launch the product moves into ongoing operation — ours if you want it, yours if you don't — with the full record of every decision that got it there.",
  ],

  visual: {
    kind: "sequence",
    title: "From product to brand · gated sequence",
    steps: [
      ["Product idea", "open"],
      ["Research", "gate 1"],
      ["Validation", "gate 2"],
      ["Sample", "gate 3"],
      ["Packaging", "gate 4"],
      ["Listing", "gate 5"],
      ["Launch", "go"],
    ],
  },

  deliverables: [
    "A product verdict sheet — Approve, Review or Reject — with the reasoning",
    "Supplier, sample and QC coordinated on your behalf",
    "Packaging, compliance and listing built to launch",
    "Launch run and handed into ongoing operation",
  ],
  artefact: {
    kind: "verdict",
    rows: [
      ["Demand", "approve"],
      ["Competition", "review"],
      ["Pricing", "approve"],
      ["Reviews", "approve"],
      ["Search behaviour", "review"],
      ["Category structure", "approve"],
      ["Marketplace fit", "approve"],
      ["DTC potential", "reject"],
    ],
  },

  fitFor: [
    "You have a category in mind and want it tested before it is funded",
    "You will hold the trademark and the supplier relationship",
    "You want the Reject verdicts as much as the Approves",
  ],
  notFor: [
    "You want a product chosen and launched without a written verdict",
    "You want the brand registered in someone else's name",
    "You need a launch date before validation",
  ],

  phases: [
    {
      days: "Days 0–30",
      title: "Baseline",
      body: "We agree the category territory, the capital envelope and the criteria a product must clear — margin floor, competitive ceiling, compliance exposure you are willing to carry. Research begins immediately: category mapping, demand and seasonality reads, competitor and review-structure analysis. The first candidate products reach their verdict sheets inside the month, and some of them are rejected there. That is the system working, not failing.",
    },
    {
      days: "Days 31–60",
      title: "Build the loop",
      body: "The strongest candidate goes into validation and then into the supply chain: supplier shortlist, quotes and negotiation, sample orders and the written sample assessment. Trademark filing and the compliance gates start in parallel because they are the longest lead items — testing and certification run on the lab's calendar, not ours. Packaging and brand direction begin once the sample confirms what is actually being sold.",
    },
    {
      days: "Days 61–90",
      title: "Operating cadence",
      body: "Compliance gates close out, the production order is placed with your approval, and the listing is built while stock is on the water. Launch mechanics — pricing, early advertising, review strategy inside the marketplace's terms of service — are set before the first unit arrives. By day 90 the product is launched or has a dated launch plan, and the operating record that will drive replenishment and the next product decision already exists.",
    },
  ],
  hwwTitle: "Compliance gates · drawn as stops",
  hww: {
    kind: "stops",
    items: [
      ["Liability", "insurance"],
      ["Testing", "lab"],
      ["Certification", "category"],
      ["Importer", "responsible party"],
      ["IP / trademark", "filed"],
    ],
  },

  yours: [
    "Brand and trademark",
    "Supplier relationships",
    "Inventory",
    "Listings and storefront",
    "Every launch decision",
  ],
  hyprrWork: [
    "Research and the verdict sheet",
    "Supplier, sample and QC coordination",
    "Packaging, compliance and listing build",
    "Launch and transition into operation",
  ],
  managed: [
    ["Research & verdict", "per product"],
    ["Supplier & sample", "coordinated"],
    ["Compliance gates", "tracked"],
    ["Packaging & listing", "built"],
    ["Launch", "run"],
    ["Operation", "handover"],
  ],

  fees: [
    "A fee for the development work — research, validation, supplier and sample coordination, compliance and launch — stated in writing before the engagement starts. You fund the product's own costs directly: inventory, lab testing, certification, trademark filing and advertising are paid by you, at cost, with no markup passing through us. Where the product moves into ongoing operation, the operating fee structure applies from that point — the mechanic is the same one described on the how-we-work page, and there are no figures published at soft launch.",
  ],
  faqs: [
    {
      q: "What do I fund, and what does Hyprr do?",
      a: "You fund the things you end up owning: inventory, lab testing and certification, the trademark filing, packaging production and launch advertising — all invoiced to you directly, at cost. Hyprr does the work around that spending: the research and the verdict sheet, supplier negotiation and sample assessment, compliance coordination, packaging and listing build, and the launch itself. The line is deliberate. Money that buys an asset comes from you and the asset lands in your name; money that buys work pays us, and the work is documented so you can see what it bought.",
    },
    {
      q: "How many products get rejected?",
      a: "Most of them, and that is the point of the sheet. A verdict process that approves everything is a sales process wearing a lab coat. Rejections happen for ordinary reasons — demand that is really seasonality, a price point that cannot carry fees and freight, a review moat a new entrant cannot cross, a compliance burden out of proportion to the opportunity. Every Reject comes with its reasoning, which does two things: it saves the capital the product would have burned, and it sharpens the read on the category so the next candidate starts further ahead.",
    },
    {
      q: "Who owns the trademark?",
      a: "You do. The trademark is filed in your name — or your company's — from the first application, and the same is true of the brand registry entry that hangs off it, the supplier agreements, the listings and the packaging artwork. Nothing about the brand routes through Hyprr's name at any stage, which means nothing has to be transferred back to you later. Agencies that register the brand themselves have created a dependency, whatever the contract says about ownership. We would rather the dependency never exist.",
    },
    {
      q: "What happens after launch?",
      a: "The product needs operating: replenishment against sell-through, advertising against margin, listing maintenance, account health, and the monthly read on whether it earns its place. You can take that over — the handover includes the full record, the supplier contacts and the operating calendar — or move it into Hyprr's operations service and keep the same people on it. Either way the decision point is explicit, made after launch when you can see how the product actually behaves, not bundled into the development engagement as an assumption.",
    },
  ],

  related: [
    { name: "Shopify / DTC", slug: "/shopify-dtc", engine: "build" },
    { name: "Marketplace growth", slug: "/marketplace-growth", engine: "grow" },
  ],
  insight: "The real cost of a private label product",
};

export default data;

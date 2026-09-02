import type { ServicePageData } from "@/lib/service-pages";

/**
 * /private-label — Build engine, private-label composition.
 * Copy from docs/content/private-label.md (2 Sep). Primary keyword:
 * "amazon private label agency".
 */
const data: ServicePageData = {
  slug: "/private-label",
  engine: "build",
  serviceType: "Private label product development",
  name: "Private label",
  short: "private label",
  metaTitle: "Amazon Private Label Agency | Research to Launch | Hyprr",
  metaDescription:
    "We decide with you whether a product deserves to exist, then take it to market. Every product gets a written verdict before money is committed.",

  h1: "Amazon private label: research, sourcing and launch",
  answer:
    "Hyprr decides with you whether a product deserves to exist, then takes it to market on Amazon in the US and UK, or Walmart in the US: research, validation, supplier and sample, packaging and compliance, listing and launch. Every product gets a written verdict before money is committed. You fund inventory, testing and trademark; the brand, the listings and the supplier relationships are yours.",
  disqualifier:
    "Not for you if you are looking for a product to be picked for you without a verdict you can read.",

  involvesLead:
    "Private label is a decision first and a supply chain second. Most ideas should be rejected before a sample is ordered.",
  involvesBody: [
    "The expensive mistake in private label is not choosing badly. It is choosing quickly and finding out eighteen months later, with the money already in a warehouse.",
    "So the first work is a verdict, not a search. A category gets read on seven or eight axes — real demand rather than search volume, how the incumbents are actually positioned, what the price band tolerates once fees and freight are off it, whether the review counts at the top are reachable, how customers describe the product in their own words, whether the category structure gives a new entrant anywhere to sit, and whether the thing can be shipped and stored without eating the margin. Each axis produces approve, review or reject. A single reject on the wrong axis ends it.",
    "The categories we decline are worth naming, because they are the ones that look best on a spreadsheet. Anything ingestible or applied to skin, because the testing and liability load changes the economics entirely. Anything electrical or battery-powered without a certification route already established. Anything where a dominant brand owns the category's language, because you are then buying advertising to teach customers a word they already associate with someone else. Anything with a patent thicket. Anything seasonal enough that a single missed window is the whole year.",
    "If a product survives, the supply chain starts: supplier identification and vetting, samples, a quality specification written before production rather than discovered after it, packaging, and the compliance gates. Those gates are stops rather than steps — product liability insurance, lab testing where the category requires it, certification, an importer of record who is legally responsible for the goods entering the country, and the trademark filed before a brand name goes on anything. Nothing proceeds to production until each is cleared and recorded.",
    "Then launch: listing built, A+ content, advertising to establish the initial ranking, and the transition into ongoing operation.",
    "You fund inventory, testing, certification, trademark and advertising directly. Hyprr does the research, the coordination, the build and the launch.",
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
    "Launch run on Amazon, Walmart or both, and handed into ongoing operation",
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
      ["Marketplace fit — assessed per marketplace, separately", "approve"],
      ["DTC potential", "reject"],
    ],
  },
  artefactNote:
    "The sheet is the deliverable, not the product. You are paying for the reasoning, which is what lets you disagree with it. A research service that only ever produces winners is producing marketing, not research.",

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
      title: "Research and verdict",
      body: "Category and candidate products assessed on every axis. You receive verdict sheets, not a shortlist — including for the products we are rejecting and why. Trademark search runs in parallel, because a name that cannot be registered is not a name. Most engagements reject their first candidate here, and that is the month working correctly.",
    },
    {
      days: "Days 31–60",
      title: "Supplier and sample",
      body: "Suppliers identified and vetted for the approved product. Samples ordered against a written specification. QC criteria agreed before production rather than after. Packaging and brand assets begin. Compliance route confirmed: what testing this category needs, who the importer of record will be, what certification applies. Trademark filed.",
    },
    {
      days: "Days 61–90",
      title: "Compliance and build",
      body: "Compliance gates cleared and recorded one by one. Production order placed against your approval. Listing, imagery and A+ content built while the goods are in transit. Launch plan and advertising structure ready before inventory lands, so nothing waits. The launch surface is decided here on the verdict sheet's marketplace-fit axis rather than by default: Amazon first for most categories, Walmart first where the category is under-served there and the review moat on Amazon is unreachable for a new brand, and both where the catalogue and the inventory support two listings from day one.",
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

  yoursIntro:
    "In private label the brand is the asset, and the question worth asking any provider is whose name goes on the registration. Here is the arrangement.",
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
  yoursOutro:
    "The trademark is filed in your name from the start, not transferred later. The supplier knows you as the client. If we stop working together, the brand does not change hands.",
  managed: [
    ["Research & verdict", "per product"],
    ["Supplier & sample", "coordinated"],
    ["Compliance gates", "tracked"],
    ["Packaging & listing", "built"],
    ["Launch", "run"],
    ["Operation", "handover"],
  ],

  // $14,999 ships only here, adjacent to the itemised scope and the
  // zero-markup pass-through sentence — never alone, never in the
  // hero, the meta description or a card.
  fees: [
    "The private label build is $14,999, and it is the only money that reaches Hyprr during the build. Inventory, samples, freight, duties, testing, certification, trademark and advertising are paid by you, directly to the supplier, lab, attorney or marketplace, at the price they invoice — Hyprr takes no margin, no commission and no rebate anywhere in that chain. After launch the operation is paid on realised margin at 30%, the same split as every other Hyprr service and the same at every band.",
  ],
  faqs: [
    {
      q: "What do I fund, and what does Hyprr do?",
      a: "You fund everything that leaves the business as money: inventory, samples, freight, duties, lab testing, certification, trademark filing, and advertising spend. Those are paid by you to the supplier, lab, attorney or marketplace directly — Hyprr is never in the payment chain. Hyprr does the work: research and verdicts, supplier identification and vetting, sample and QC coordination, packaging and compliance management, listing and A+ build, launch, and the handover into operation. The split is deliberate. A provider who marks up your inventory has a reason to want more of it.",
    },
    {
      q: "How many products get rejected?",
      a: "Most of them, and the number varies too much by category to quote honestly. What matters more is that the reject is written down with its reasoning, so you can disagree with it. We reject on a single failed axis rather than an average score — a product with strong demand and an unreachable review moat is not a marginal case, it is a no. If you find yourself receiving only approvals, that is a signal about the research, not about your luck.",
    },
    {
      q: "Who owns the trademark?",
      a: "You do, filed in your business's name at the outset rather than assigned later. The search runs during the first month because a name that cannot be registered is not a name, whatever it looks like on packaging. Hyprr coordinates the filing and tracks it to registration; the mark, the classes and the renewal obligation are yours. We are not the applicant, the correspondent or the owner, and we hold no security interest in it.",
    },
    {
      q: "What happens after launch?",
      a: "The product moves from a build engagement into an operating one, and the work changes shape: replenishment against sell-through, listing and content maintenance, advertising managed against margin, account health, and weekly reporting. That transition is a specific handover with a document behind it, not a drift. If you would rather run it yourself from that point, the handover is the same either way — everything is already in your name.",
    },
    {
      q: "Do you launch private label products on Walmart as well as Amazon?",
      a: "Yes, and the choice is made at research rather than assumed. Marketplace fit is one of the axes on the verdict sheet, assessed separately for Amazon US, Amazon UK and Walmart US, because the same product can be a clear approve on one and a reject on the other. Amazon has the demand; Walmart has thinner competition in a lot of categories and a review moat a new brand can actually cross. Most launches start on Amazon, some start on Walmart because that is where the product has a route, and some run both from day one. The catalogue, the brand and the accounts are yours on either.",
    },
    {
      q: "Which categories do you decline, and why?",
      a: "Ingestibles and anything applied to skin, where testing and liability change the economics past the point most first products can carry. Electrical and battery-powered goods without an established certification route. Categories where one brand owns the customer's vocabulary, because your advertising then teaches a word that helps them. Patent-dense categories. And anything seasonal enough that missing one window costs the year. These are declined at research, before a sample is ordered, and the reasoning is written down. Several of them look excellent on demand data alone, which is why the axis test matters.",
    },
  ],

  related: [
    { name: "Shopify / DTC", slug: "/shopify-dtc", engine: "build" },
    { name: "Marketplace growth", slug: "/marketplace-growth", engine: "grow" },
  ],
  insight: "The real cost of a private label product",
};

export default data;

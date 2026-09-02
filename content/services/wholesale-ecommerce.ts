import type { ServicePageData } from "@/lib/service-pages";

/**
 * /wholesale-ecommerce — Build engine, wholesale composition (table
 * visual, approval gate, weekly calendar chain, New build vs Takeover
 * toggle). Copy blocks marked in the design as content-team work are
 * written here to the shortest length that covers the ground.
 */
const data: ServicePageData = {
  slug: "/wholesale-ecommerce",
  engine: "build",
  name: "Wholesale ecommerce",
  short: "wholesale ecommerce",
  metaTitle: "Amazon & Walmart Wholesale Ecommerce Management | Hyprr Brands",
  metaDescription:
    "Hyprr sources, vets and operates a wholesale catalogue on Amazon and Walmart under your accounts. You approve every purchase; the inventory and capital stay yours.",

  h1: "Amazon & Walmart Wholesale Ecommerce Management",
  answer:
    "Hyprr runs a wholesale ecommerce business on your behalf: sourcing brands and suppliers, working the economics of each catalogue line, recommending what to buy, and operating listings, purchasing and replenishment on Amazon and Walmart. You approve every purchase. The seller account, the inventory and the capital stay in your name throughout.",
  disqualifier:
    "Not for you if you want us to hold the account, the capital or the final purchase decision.",

  involvesLead:
    "A wholesale business is a buying system. Find the catalogue, decide what deserves capital, operate the replenishment loop.",
  involvesBody: [
    "The first part of the work is sourcing: finding brands and authorised distributors who will open an account, hold price files against them, and vetting each one — authenticity, reliability, terms — before a single line is considered. A wholesale catalogue is built supplier by supplier, and most conversations end without an order.",
    "The second part is the economics. Every candidate line gets a written read before money moves: landed cost against current sell price, marketplace fees, freight, expected velocity, and where the margin actually settles once everything is counted. The read ends in one of three verdicts — Approve, Review or Do not buy — and the reasoning travels with the verdict so you can challenge it.",
    "The third part is the operation itself: listings created and kept accurate, purchase orders raised for your approval, replenishment run against sell-through rather than habit, and cases and account health worked as they arise. The catalogue is re-read continuously — a line that earned its place in March can lose it by June, and the system is designed to notice.",
  ],
  toggle: {
    a: {
      label: "New build",
      items: [
        "Account setup in your name",
        "Supplier sourcing from zero",
        "Catalogue built line by line",
        "First purchase orders around day 60",
      ],
    },
    b: {
      label: "Takeover",
      items: [
        "Baseline the existing account and catalogue",
        "Re-read every line's economics",
        "Keep what earns, stop what doesn't",
        "Cadence installed by day 30",
      ],
    },
  },

  visual: {
    kind: "table",
    title: "The wholesale operating desk · catalogue",
    cols: [
      "Brand",
      "SKU",
      "Supplier",
      "Cost",
      "MOQ",
      "Lead time",
      "Margin",
      "Status",
    ],
    rows: [
      {
        cells: [
          "BRAND-01",
          "SKU-0421",
          "Confirmed",
          "Quoted",
          "Met",
          "Confirmed",
          "Within target",
        ],
        status: "Approved by client",
        tone: "ok",
      },
      {
        cells: [
          "BRAND-01",
          "SKU-0437",
          "Confirmed",
          "Quoted",
          "Met",
          "Confirmed",
          "Within target",
        ],
        status: "Approved by client",
        tone: "ok",
      },
      {
        cells: [
          "BRAND-02",
          "SKU-1108",
          "In review",
          "Quoted",
          "Below",
          "Pending",
          "Marginal",
        ],
        status: "Review",
        tone: "warn",
      },
      {
        cells: [
          "BRAND-03",
          "SKU-0092",
          "Confirmed",
          "Quoted",
          "Met",
          "Long",
          "Below floor",
        ],
        status: "Do not buy",
        tone: "crit",
      },
      {
        cells: ["BRAND-04", "SKU-2210", "Sourcing", "Awaiting", "—", "—", "—"],
        status: "Research",
        tone: "warn",
      },
    ],
  },

  deliverables: [
    "A sourced and vetted supplier and catalogue base",
    "A per-line economics read before anything is bought",
    "A written recommendation with a three-way verdict on every line",
    "Listings, purchasing and replenishment run week to week",
  ],
  artefact: {
    kind: "gate",
    steps: ["Research", "Economics", "Hyprr recommendation"],
    last: "Purchase order",
  },

  fitFor: [
    "You have capital to deploy and want it working in a catalogue, not a course",
    "You want to own the account and approve each purchase",
    "You want an operator, not a consultant",
  ],
  notFor: [
    "You want Hyprr to take the account or the capital",
    "You want a return promised before you start",
    "You need a decision taken out of your hands",
  ],

  phases: [
    {
      days: "Days 0–30",
      title: "Baseline",
      body: "The account is set up in your name, or an existing one is baselined: what is selling, at what margin, under which suppliers, with what problems open. We agree the margin floor every future line will be judged against, the capital available to work with, and the approval path — who signs off, how fast, in what form. Supplier outreach starts in week one, because supplier lead time is the slowest part of everything that follows.",
    },
    {
      days: "Days 31–60",
      title: "Build the loop",
      body: "The first supplier accounts open and the first catalogue lines go through the economics read. You start receiving written recommendations with verdicts attached, and the first client-approved purchase orders go out — usually around day 60 on a new build, earlier on a takeover. Listings go live or get corrected as stock is confirmed, and the purchasing → inventory → listing loop runs end to end for the first time.",
    },
    {
      days: "Days 61–90",
      title: "Operating cadence",
      body: "The desk settles into its weekly calendar: purchase orders and inventory at the start of the week, listings and cases midweek, the written report at the end of it. Replenishment is now running against sell-through, the catalogue has its first re-reads behind it, and the next sourcing round is underway. From day 90 the engagement is an operating rhythm, not a project.",
    },
  ],
  hwwTitle: "Weekly operating calendar · from day 90",
  hww: {
    kind: "chain",
    items: [
      { label: "Day 0", sub: "baseline" },
      { label: "Day 30", sub: "supplier + catalogue" },
      { label: "Day 60", sub: "listings + purchasing" },
      { label: "Day 90", sub: "operating cadence" },
      { label: "Mon", sub: "POs · inventory" },
      { label: "Wed", sub: "listings · cases" },
      { label: "Fri", sub: "report" },
    ],
  },

  yours: [
    "Seller account",
    "Inventory",
    "Capital",
    "Bank account",
    "Final purchase decision",
  ],
  hyprrWork: [
    "Sourcing and supplier coordination",
    "Catalogue economics and recommendations",
    "Listings, purchasing and replenishment",
    "Cases, account health and reporting",
  ],
  managed: [
    ["Supplier sourcing", "ongoing"],
    ["Catalogue economics", "per line"],
    ["Purchase orders", "client-approved"],
    ["Listings", "Amazon · Walmart"],
    ["Replenishment", "weekly"],
    ["Account health & cases", "monitored"],
    ["Reporting", "weekly"],
  ],

  fees: [
    "A fee to build the operation — the sourcing, the account and catalogue work, the first purchasing cycles — and, where it applies, a share of the margin the catalogue realises after goods actually sell and the marketplace settles. There is no monthly retainer, and no fee calculated on the capital you deploy: your buying budget buys inventory, not our attention. Fees are stated in writing before the engagement starts, not discovered inside it.",
  ],
  faqs: [
    {
      q: "Who holds the Amazon and Walmart seller accounts?",
      a: "You do, from the first day. The accounts are registered in your name, on your email, with your bank account receiving settlements. Hyprr works through permissioned user access that you grant and can revoke — never a shared login, and never an account registered to us that you 'get access to'. This is not a courtesy; it is the structural difference between owning a business and renting one. If we stop working together, you change nothing: the account, its history and its performance record were yours throughout.",
    },
    {
      q: "Can Hyprr buy inventory without my approval?",
      a: "No. Every material purchase order goes to you as a written recommendation — the line, the supplier, the landed cost, the margin read, and a verdict — and nothing is ordered until you approve it, in a form that leaves a record. Suppliers invoice you directly; we do not buy stock in our own name and resell it to you. The practical effect is that you always know exactly where your capital is, and the record of every buying decision is in your hands, not ours.",
    },
    {
      q: "How does a takeover of an existing wholesale account work?",
      a: "It starts with a baseline, not a plan: what the account is actually selling, at what realised margin per line, under which supplier terms, and what problems are open — stranded inventory, pricing drift, cases, suspended listings. Then every line gets the same economics read a new line would get. Lines that earn their place stay and get properly replenished; lines that don't are run down deliberately rather than reordered out of habit. The operating cadence is usually installed inside the first month, because the account already exists — the work is making it honest.",
    },
    {
      q: "What happens to the catalogue if we stop working together?",
      a: "Everything stays where it always was: the seller account, the supplier relationships and accounts, the inventory, the listings and the full record of what was bought and why. We hand over the working documents — the catalogue sheet, the supplier contacts, the economics reads — and revoke our own access. There is no transfer process because nothing was ever ours to transfer. The engagement is designed so that ending it is an administrative step, not a negotiation.",
    },
  ],

  related: [
    {
      name: "Marketplace management",
      slug: "/marketplace-management",
      engine: "operate",
    },
    { name: "Marketplace growth", slug: "/marketplace-growth", engine: "grow" },
  ],
  insight:
    "Amazon account ownership: why the seller account should never be the agency's",
};

export default data;

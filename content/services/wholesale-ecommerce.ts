import type { ServicePageData } from "@/lib/service-pages";
import { SPLIT, PUBLISH_SPLIT } from "@/lib/fees";

/**
 * /wholesale-ecommerce — Build engine, wholesale composition.
 * Copy from docs/content/wholesale-ecommerce.md (2 Sep). Primary
 * keyword: "amazon wholesale management service"; the rejected
 * "wholesale ecommerce management" appears nowhere on the page.
 */
const data: ServicePageData = {
  slug: "/wholesale-ecommerce",
  engine: "build",
  serviceType: "Amazon wholesale management",
  name: "Wholesale ecommerce",
  short: "wholesale ecommerce",
  metaTitle: "Amazon Wholesale Management Service | Hyprr Brands",
  metaDescription:
    "We source, buy and operate wholesale catalogues on Amazon and Walmart. You own the account and approve every purchase. Read the operating model first.",

  h1: "Amazon & Walmart wholesale management",
  answer:
    "Hyprr runs a wholesale ecommerce business on your behalf: sourcing brands and suppliers, working the economics of each catalogue line, recommending what to buy, and operating listings, purchasing and replenishment on Amazon in the US and UK, and Walmart in the US. You approve every purchase. The seller account, the inventory and the capital stay in your name throughout.",
  disqualifier:
    "Not for you if you want us to hold the account, the capital or the final purchase decision.",

  involvesLead:
    "A wholesale business is a buying system. Find the catalogue, decide what deserves capital, operate the replenishment loop.",
  involvesBody: [
    "Wholesale is not a marketing business. Nothing you do to a listing matters if the buying decision behind it was wrong, and most of the work happens before any inventory exists.",
    "It starts with supplier access. Brands and distributors decide who they sell to, and getting approved is a process rather than a purchase — a business entity, a resale certificate, a credible reason to be carrying the line, and usually a conversation. Some brands will not open an account for Amazon resale at all. Establishing which will, and on what terms, is the first real piece of work.",
    "Then the category has to be open to you. Amazon gates many brands and categories, and being approved by a supplier does not mean being approved to list. Ungating needs invoices from an authorised source, sometimes brand permission, and occasionally nothing will open it. A catalogue line that cannot be listed is not a catalogue line, whatever the margin says.",
    "Only then do the economics decide anything. Landed cost, marketplace fees, storage, returns and advertising come off the price before there is a margin, and the buy box decides whether you sell at that price at all — a line shared with the brand and four other sellers behaves differently from one where you are the only approved reseller. Minimum order quantities and lead times turn a per-unit margin into a capital commitment measured in weeks.",
    "What follows is a loop rather than a launch: buy, list, sell, read the sell-through, buy again against what actually moved. Stock that does not move is the failure mode of this business — it is capital sitting in a warehouse accruing storage fees, and the honest answer is that it gets marked down, liquidated or written off, which is why the decision at the front matters more than anything downstream.",
    "Hyprr does that work. You keep the accounts and the money, and you make the call on every purchase.",
  ],
  toggle: {
    a: {
      label: "New build",
      items: [
        "Supplier research and outreach from zero",
        "Entity, resale certificate and account setup",
        "First ungating applications",
        "Catalogue built line by line",
        "First purchase order at day 60–90",
      ],
    },
    b: {
      label: "Takeover",
      items: [
        "Audit of the existing catalogue against current economics",
        "Supplier terms reviewed and renegotiated where they are below market",
        "Stranded and slow-moving stock identified in week one",
        "Account health and policy review",
        "First Hyprr-recommended purchase order at day 30",
      ],
    },
  },

  involvesSubheads: ["Where the margin actually is", "What we refuse to buy"],

  visual: {
    kind: "table",
    title: "The wholesale operating desk · catalogue",
    mobileCaption:
      "Three lines from a live catalogue view. Not every line gets bought.",
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
  artefactNote:
    "The verdict is three-way on purpose. A recommendation that only ever says buy is not a recommendation. Do not buy is a real output of this process and you should expect to see it on lines that look attractive until the landed cost and the buy box are read together.",

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
      body: "Entity, resale certificate and marketplace accounts confirmed in your name. Supplier research begins and the first outreach goes out. If this is a takeover, the existing catalogue is audited against current economics and stranded stock is identified. Nothing is bought in this period, and for most of it nothing visible happens — supplier approval runs on the supplier's timetable, not ours. Expect the first month to look quiet from the outside.",
    },
    {
      days: "Days 31–60",
      title: "Supplier and catalogue",
      body: "Approved suppliers convert into a working catalogue. Each line gets a landed-cost model: unit cost, freight, duties, prep, marketplace fees, storage. Ungating applications go in where a brand or category needs them. You receive the first recommendation set with three-way verdicts. You approve, review or decline each line. The first purchase order follows your approval, not ours.",
    },
    {
      days: "Days 61–90",
      title: "Listings and purchasing",
      body: "Approved lines are listed on the marketplaces in scope — Amazon US, Amazon UK, Walmart US — priced against the buy box, and inbound. The weekly cadence starts: purchase orders raised for approval on Monday, listings and cases Wednesday, report Friday. By day 90 the business is running the loop rather than being set up.",
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

  yoursIntro:
    "The most common warning about agencies in this category is that the account ends up in someone else's name. Here is the arrangement, in the order it matters.",
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
  // Owner check pending: the three clauses below are claims about the
  // client agreement (also published on the homepage). Confirm against
  // the agreement before launch.
  yoursOutro:
    "Hyprr works inside your account through permissioned service-provider access. We are never the registered seller, we never hold your login credentials, and the supplier invoices you directly.",
  managedLead:
    "The only thing we need from you regularly is a decision on what to buy. Everything in this list happens on a schedule whether or not you are watching it happen, and the Friday report tells you what was done rather than asking you to go and find out.",
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
    `A build fee, set by the capital you plan to deploy monthly and agreed in writing before anything starts, and ${SPLIT} of realised margin — what a catalogue line actually made after landed cost, marketplace fees, advertising and returns, once it has sold. Not on revenue, and not on the capital itself: no part of the fee is calculated from what you spend on inventory. That matters here more than in any other service, because a fee tied to purchase volume rewards recommending more buying, which is exactly the incentive this business should not have.`,
    ...(PUBLISH_SPLIT
      ? [
          "The split is 30% at every band — a larger build fee buys more work, never a better split.",
        ]
      : []),
    "The full mechanic, including how realised margin is calculated and a worked example, is on the how-we-work page.",
  ],
  faqs: [
    {
      q: "Who holds the Amazon and the Walmart seller accounts?",
      a: "You do. The accounts are registered to your business entity, with your bank details and your tax information, and they stay that way for the life of the engagement and after it. Hyprr works inside them through the permissioned service-provider access both marketplaces provide for exactly this purpose — we are granted specific rights by you, and you can revoke them from your own account settings without involving us. We do not hold your login credentials. This is the same on Amazon US, Amazon UK and Walmart US. If the arrangement ends, nothing needs to be transferred, because nothing was ever in our name.",
    },
    {
      q: "Can Hyprr buy inventory without my approval?",
      a: "No. Every purchase order goes to you with the research, the landed-cost model and a written recommendation carrying one of three verdicts: approve, review, or do not buy. You decide. The supplier invoices you directly and payment goes from your account to theirs — Hyprr is never in the payment chain, which means the approval is structural rather than a courtesy. If you decline a line, it does not get bought.",
    },
    {
      q: "What happens to stock that does not sell?",
      a: "It is the real risk in wholesale and it is worth being plain about. Slow-moving stock is identified in the weekly review against sell-through rather than at quarter end, and there are four responses: reprice against the buy box, run advertising against it if the margin still supports it, mark it down, or liquidate. Which one depends on storage cost, age and whether the line has a future. Long-term storage fees make waiting the most expensive option, so the decision gets made early. We recommend; you decide. We do not promise that every line sells, and any provider who does is describing something other than wholesale.",
    },
    {
      q: "How does ungating and brand approval work?",
      a: "Two separate gates that are often confused. Supplier approval is the brand or distributor agreeing to sell to you — an entity, a resale certificate, and usually a conversation about how the line will be sold. Category or brand ungating is Amazon agreeing to let you list, and it needs invoices from an authorised source, sometimes written brand permission, and a review that can take weeks. Passing one does not pass the other. Some brands will not approve Amazon resale at all, and some categories stay closed. We find that out before you commit capital, not after.",
    },
    {
      q: "How does a takeover of an existing wholesale account work?",
      a: "Differently from a new build, and faster. The first month is an audit rather than a setup: current catalogue against current economics, supplier terms against what is available now, stranded and aged stock, account health and any open policy issues. You get a written read of what is working, what is losing money, and what should stop. Access is granted the same way as any engagement — permissioned, revocable, in your account. The first Hyprr-recommended purchase order usually lands around day 30 rather than day 90, because the catalogue already exists.",
    },
    {
      q: "What happens to the catalogue if we stop working together?",
      a: "Nothing moves. The seller account, the listings, the supplier relationships and the inventory are yours and stay in your name. We hand over the catalogue economics models, the supplier contact records, the current purchase-order state and the reporting history, then our access is removed — by you, from your account. There is no transfer process because there is nothing to transfer, and there is no clause that makes leaving expensive.",
    },
  ],

  nextStep: {
    engine: "grow",
    h3: "A catalogue that sells is the start, not the finish.",
    body: "Once lines are live and replenishing, the work changes shape: which listings earn the buy box, where advertising is worth running, and which lines to stop buying. That is the Grow side, and it is the same desk.",
    links: [
      { label: "Marketplace growth", href: "/marketplace-growth" },
      { label: "The Grow engine", href: "/grow" },
    ],
  },
  related: [
    {
      name: "Private label",
      slug: "/private-label",
      engine: "build",
    },
    {
      name: "Marketplace management",
      slug: "/marketplace-management",
      engine: "operate",
    },
  ],
  insight:
    "Amazon account ownership: why the seller account should never be the agency's",
};

export default data;

import type { ServicePageData } from "@/lib/service-pages";

/**
 * /shopify-management — Operate engine, operations composition with
 * the GAP 2 substitution: the daily desk, store-scoped. Copy from
 * docs/content/shopify-management.md (2 Sep). The desk table's
 * states are illustrative in the same idiom as the design's own
 * sample rows.
 */
const data: ServicePageData = {
  slug: "/shopify-management",
  engine: "operate",
  serviceType: "Shopify store management",
  name: "Shopify management",
  short: "Shopify store management",
  metaTitle: "Shopify Store Management Services | Run, Not Rented",
  metaDescription:
    "Catalogue, merchandising, fulfilment, apps and theme maintenance run to a cadence by a named team you can reach, not a ticket queue. The store is yours.",

  h1: "Shopify store management",
  answer:
    "Hyprr runs your Shopify store day to day: catalogue and merchandising, fulfilment and orders, apps and integrations, theme maintenance and performance, and the reporting that ends in decisions. It is an operation with a cadence rather than a retainer with a ticket queue. The store, the code, the data and the accounts stay yours.",
  disqualifier:
    "Not for you if you want ad-hoc tasks done cheaply. That is a freelancer, and for some businesses that is the right answer.",

  involvesLead:
    "Running a store is a cadence, not a queue. The work that keeps it healthy is the work nobody asks for.",
  involvesBody: [
    "Can you hire someone to manage a Shopify store? Yes, and there are three different things being sold under that description, which is why the price range you will find is so wide.",
    "A freelancer or gig does defined tasks: upload these products, fix this template, install this app. Cheap, fast, and correct for a business with someone in-house directing the work. The limitation is that nobody is watching between tasks.",
    "A web agency retainer holds hours for changes you request. Better continuity, but still reactive — the agency does what is asked, and what is not asked does not get done.",
    "An operation runs a cadence whether or not you ask. That is the difference and it is most of the value, because the work that keeps a store healthy is work nobody thinks to request.",
    "What that cadence covers: catalogue — product data quality, variants, inventory sync accuracy, the drift that accumulates as products are added by different people over time. Merchandising — collections, ordering, what the homepage and category pages actually promote, seasonal changes made on time rather than late. Fulfilment and orders — exceptions, delays, returns, anything becoming a customer problem. Apps and integrations — every app is a performance cost and a maintenance obligation; they get reviewed, and removed when they stop earning their place. Theme and performance — updates applied and tested, performance budget watched, because a store gets slower one app at a time until conversion drops and nobody knows why. Reporting — monthly, written, ending in decisions.",
    "The difference from a web agency retainer is the direction of initiative. A retainer waits to be asked. An operation notices that a collection has been out of season for three weeks, that a third of the app stack is unused, and that page speed has degraded since March.",
  ],

  involvesSubheads: ["What a retainer misses", "Maintenance nobody asks for"],

  diagram: {
    kind: "reactive-operated",
    caption:
      "A ticket queue and an operating cadence on the same time axis — one waits, one notices.",
  },
  ruleCard: {
    text: "A retainer waits to be asked. An operation notices.",
    source:
      "Proven in the comparison this page draws between the two models.",
  },

  visual: {
    kind: "table",
    title: "The store desk · store-scoped",
    cols: ["Desk item", "Cadence", "Owner", "State"],
    rows: [
      {
        cells: ["Catalogue", "Weekly", "Hyprr"],
        status: "Data current",
        tone: "ok",
      },
      {
        cells: ["Merchandising", "Ongoing", "Hyprr"],
        status: "In season",
        tone: "ok",
      },
      {
        cells: ["Fulfilment exceptions", "Daily", "Hyprr"],
        status: "One open",
        tone: "warn",
      },
      {
        cells: ["Apps & integrations", "Monthly", "Hyprr"],
        status: "Review due",
        tone: "warn",
      },
      {
        cells: ["Theme & performance", "Monitored", "Hyprr"],
        status: "Within budget",
        tone: "ok",
      },
      {
        cells: ["Reporting", "Monthly", "Hyprr"],
        status: "Sent",
        tone: "ok",
      },
    ],
  },

  deliverables: [
    "A store operated to a cadence, with an owner and a state for every recurring item",
    "App and integration stack reviewed for cost, performance and actual use",
    "Theme and platform updates applied and tested, not deferred indefinitely",
    "Monthly written reporting that ends in decisions rather than screenshots",
  ],
  artefact: {
    kind: "report",
    rows: [
      { k: "Catalogue", v: "Data corrected · 3 variants", tone: "ok" },
      { k: "Merchandising", v: "Seasonal change live", tone: "ok" },
      { k: "Fulfilment", v: "Clear", tone: "ok" },
      { k: "App stack", v: "2 unused · removal proposed", tone: "warn" },
      { k: "Performance", v: "Within budget", tone: "ok" },
      { k: "Decisions needed", v: "1 · listed below", tone: "warn" },
    ],
  },
  artefactNote:
    "The monthly report ends in the decisions that need you, not in screenshots. Everything above that line is context for it.",

  fitFor: [
    "You have a live store and no one whose job is looking after it",
    "You want someone noticing things you have not asked about",
    "You want the store, code and data to stay yours",
  ],
  notFor: [
    "You need occasional tasks done as cheaply as possible",
    "You have an in-house team already running the cadence",
    "Your store is pre-launch — that is a build, not management",
  ],
  fitNote:
    "If defined tasks at the lowest price is genuinely what you need, a freelance marketplace will serve you better than we will, and we would rather say so now.",

  phases: [
    {
      days: "Days 0–30",
      title: "Audit and take over",
      body: "Collaborator access on your Shopify account. Full audit: catalogue data quality, app stack against actual use, theme customisations and what will break on update, performance baseline, fulfilment exception rate, integration health. Written current state, usually including several apps nobody remembers installing.",
    },
    {
      days: "Days 31–60",
      title: "Clean and stabilise",
      body: "Catalogue data corrected. App stack reduced where things are unused or duplicated — this is usually the fastest performance gain available. Theme updates applied and tested. Merchandising brought current.",
    },
    {
      days: "Days 61–90",
      title: "Cadence",
      body: "The recurring desk runs. Monthly reporting begins. By day 90 there should be no unknowns in the stack and no deferred updates.",
    },
  ],
  hwwTitle: "The recurring desk · from day 90",
  hww: {
    kind: "chain",
    items: [
      { label: "Catalogue", sub: "weekly" },
      { label: "Merchandising", sub: "ongoing" },
      { label: "Fulfilment", sub: "daily" },
      { label: "Apps", sub: "monthly review" },
      { label: "Theme", sub: "updated · tested" },
      { label: "Report", sub: "monthly" },
    ],
  },

  yoursIntro:
    "A store is easy to hold hostage — through the account, the theme code, or an app nobody else can configure. None of that applies here.",
  yours: [
    "Shopify account and billing",
    "Theme code and repository",
    "Customer and order data",
    "Apps, under your account",
    "Domain",
  ],
  hyprrWork: [
    "Catalogue and merchandising",
    "Fulfilment exceptions and orders",
    "App, theme and performance maintenance",
    "Monthly reporting",
  ],
  yoursOutro:
    "We are collaborators on your Shopify account, added and removable by you. Apps are installed under your account and billed to you. Nothing we build requires us to keep running.",
  managedLead:
    "The difference from a retainer is direction of initiative, and this list is what that looks like: work that happens because the calendar says so, not because someone raised a ticket.",
  managed: [
    ["Catalogue", "weekly"],
    ["Merchandising", "ongoing"],
    ["Fulfilment exceptions", "daily"],
    ["Apps and integrations", "monthly review"],
    ["Theme and platform updates", "applied and tested"],
    ["Performance", "monitored"],
    ["Reporting", "monthly"],
  ],

  fees: [
    "Realised margin on the store's trading, not an hourly rate and not a task price. On a page whose neighbouring search results are priced per hour, the distinction matters: hourly work is paid for time spent, and the goal of store management is that less goes wrong.",
  ],
  faqs: [
    {
      q: "Can I hire someone to manage my Shopify store?",
      a: "Yes, and it is worth knowing which of three things you are buying. A freelancer does defined tasks cheaply and does not watch between them. An agency retainer holds hours for changes you request, which is better but still reactive. An operation runs a cadence whether or not you ask — catalogue, merchandising, fulfilment exceptions, app hygiene, theme updates, performance — and reports monthly. The right answer depends on whether you have someone in-house directing the work. If you do, a freelancer is often better value. If you do not, task-based help tends to mean the important maintenance simply never happens.",
    },
    {
      q: "How is this different from a web agency retainer?",
      a: "Direction of initiative. A retainer responds to requests; an operation notices. In practice the difference shows up in what nobody asked for — the collection still promoting a finished season, the four apps installed for a test two years ago still loading on every page, the theme two versions behind. Those are the things that quietly cost conversion, and they are exactly the things that never make it onto a request list.",
    },
    {
      q: "Who owns the store and the apps?",
      a: "You do. The Shopify account is registered and billed to your business, and we are collaborators on it, added and removable by you. Apps are installed under your account and billed to you directly. The theme code is in your repository. There is nothing in the arrangement that requires our continued involvement, which is deliberate.",
    },
    {
      q: "Do you also handle the marketplaces?",
      a: "Yes, and it is usually better if the same people do. A store and a marketplace catalogue share inventory, and decisions made in one — a promotion, a price change, a stock allocation — change what is possible in the other. When those are managed by different providers, the coordination cost lands on you. Marketplace management and marketplace growth are the adjacent pages.",
    },
  ],

  nextStep: {
    engine: "operate",
    h3: "An operation you can audit from the outside.",
    body: "The monthly read covers what was maintained, what was noticed without being asked, and what it made after costs — which is the difference between an operation and a queue of tickets someone worked through.",
    links: [
      { label: "How the reporting works", href: "/how-we-work#reporting" },
      { label: "How we are paid", href: "/how-we-work#fees" },
    ],
  },
  related: [
    {
      name: "Shopify / DTC",
      slug: "/shopify-dtc",
      engine: "build",
    },
    {
      name: "Ecommerce website development",
      slug: "/ecommerce-website-development",
      engine: "build",
    },
    {
      name: "Ecommerce operations",
      slug: "/ecommerce-operations",
      engine: "operate",
    },
  ],
  insight: "Store ownership: code, data, accounts",
};

export default data;

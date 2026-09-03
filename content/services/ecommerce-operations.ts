import type { ServicePageData } from "@/lib/service-pages";

/**
 * /ecommerce-operations — Operate engine, operations composition.
 * Copy from docs/content/ecommerce-operations.md (2 Sep). Conversion
 * page, not an acquisition page: the homepage owns "ecommerce
 * operations agency" and this page deliberately does not use it in
 * H1, title or meta. The #reporting anchor is linked from the
 * homepage engine chip and lands on the sample report artefact.
 */
const data: ServicePageData = {
  slug: "/ecommerce-operations",
  engine: "operate",
  serviceType: "Ecommerce operations management",
  name: "Ecommerce operations",
  short: "ecommerce operations",
  metaTitle: "Outsourced Ecommerce Operations for Sellers",
  metaDescription:
    "Hire a desk that works your purchase orders, inventory, orders, cases and listings to a fixed daily cadence, on marketplace accounts that stay yours.",

  h1: "Ecommerce operations: the daily desk",
  answer:
    "Hyprr keeps the machine running every day: purchase orders, inventory, orders, cases, listings, account health and reporting, worked to a fixed daily and weekly cadence. When something goes wrong there is a written path from signal to report, and the decision is yours. The accounts, the inventory and the records stay in your name.",
  disqualifier:
    "Not for you if you want a dashboard instead of people doing the work.",

  involvesLead:
    "Operations is a desk with a cadence. Every item on it has an owner, a day and a state.",
  involvesBody: [
    "Operations is the least glamorous part of an ecommerce business and the part that quietly decides whether it works. It is also the part most often described in abstractions, so here it is as a desk.",
    "Purchase orders, daily. Raised against sell-through and cover, sent to you with the economics attached, placed on your approval. Never placed without it.",
    "Inventory, daily. Cover per line, inbound in transit, stranded and aged stock, reorder points that move as velocity moves. The failure here is not running out — it is running out without having seen it coming, which is a reporting failure rather than a supply one.",
    "Orders and fulfilment, daily. Exceptions, delays, returns, anything that will become a case if it is not handled today. Cases, daily. Marketplace cases, supplier disputes, customer escalations. Cases have clocks, and a case worked on day one is a different case from the same one worked on day five.",
    "Listings, weekly. Suppressed listings, attribute errors, content drift, anything that quietly stopped being visible. Account health, daily. Policy notifications, performance metrics, anything that could threaten selling privileges — monitored daily specifically because the cost of noticing late is disproportionate. Reporting, weekly. Written, five minutes to read, ending in the decisions that need you.",
    "Behind all of it is a written escalation path, because things go wrong in ecommerce as a matter of routine rather than exception: signal → escalate same day → assess options → your decision → we execute → documented → in the weekly report. The step that matters is the fourth. An operations provider that resolves things without telling you is convenient right up until the resolution is one you would not have chosen.",
    "What this is not is software. There is no dashboard that raises a purchase order, argues a case or notices that a listing quietly went inactive.",
  ],

  involvesSubheads: ["The daily cadence", "When something goes wrong"],

  diagram: {
    kind: "cadence-grid",
    caption:
      "A week at the desk: what runs daily, what runs weekly, what runs monthly.",
  },
  ruleCard: {
    text: "Most operational damage comes from the day nobody looked.",
    source:
      "Proven in the daily cadence — the desk exists so every day gets looked at.",
  },

  layout: "cadence-desk",
  week: [
    {
      label: "Monday",
      sub: "Purchase orders raised and sent to you with the economics attached; inventory cover reviewed",
    },
    {
      label: "Tue–Thu",
      sub: "Orders, cases, exceptions and account health, worked daily",
    },
    {
      label: "Wednesday",
      sub: "The weekly listings sweep — suppressed listings, attribute errors, content drift",
    },
    {
      label: "Friday",
      sub: "The written report, five minutes to read, ending in the decisions that need you",
    },
    {
      label: "Any day",
      sub: "Anything that arrives with a clock on it is handled the day it arrives",
    },
  ],

  dataArtefactMid: {
    title: "The purchase-order trail \u00b7 what the desk keeps",
    ground: "bone",
    cols: ["Cost / unit", "Qty", "Total", "Invoice", "Status"],
    rows: [
      {
        name: "Power tools \u2014 screwdriver set",
        cells: ["$28.29", "75", "$2,121.41", "40611", "In stock"],
        order: "PO-114",
      },
      {
        name: "Power tools \u2014 impact wrench",
        cells: ["$100.17", "10", "$1,001.71", "40611", "In stock"],
        order: "PO-114",
      },
      {
        name: "Personal care \u2014 waxing kit",
        cells: ["$2.25", "1,000", "$2,250.00", "40173", "In stock"],
        order: "PO-102",
      },
      {
        name: "Personal care \u2014 wax strips",
        cells: ["$2.25", "600", "$0.00", "40173", "Refunded"],
        order: "PO-102",
        tone: "crit",
        note: "short-shipped \u2014 refund chased and recovered by the desk",
      },
      {
        name: "Inbound shipping & prep",
        cells: ["\u2014", "\u2014", "$837.00", "3PL", "Billed"],
        order: "PO-102",
      },
    ],
    orderLabel: "PO",
    footnote:
      "Illustrative rows in the tracker's structure \u2014 every purchase traceable to an approval, an invoice and a state, including the one that went wrong.",
  },
  statRow: {
    title: "The cadence, in four fixtures",
    note:
      "The desk's fixed points \u2014 illustrative of the standing weekly shape, not a report from a live account.",
    stats: [
      { k: "Purchase orders", v: "Mon", sub: "raised and sent for your approval" },
      { k: "Listings sweep", v: "Wed", sub: "suppressed listings and drift" },
      { k: "Written report", v: "Fri", sub: "five minutes, ends in decisions" },
      { k: "Escalation", v: "Same day", sub: "whenever something breaks" },
    ],
  },

  visual: {
    kind: "table",
    title: "The daily operating desk",
    cols: ["Desk item", "Cadence", "Owner", "State"],
    rows: [
      {
        cells: ["Purchase orders", "Daily", "Hyprr · you approve"],
        status: "Two awaiting approval",
        tone: "warn",
      },
      {
        cells: ["Inventory", "Daily", "Hyprr"],
        status: "Cover confirmed",
        tone: "ok",
      },
      { cells: ["Orders", "Daily", "Hyprr"], status: "Clear", tone: "ok" },
      {
        cells: ["Cases", "Daily", "Hyprr"],
        status: "One open · escalated",
        tone: "warn",
      },
      { cells: ["Listings", "Weekly", "Hyprr"], status: "Active", tone: "ok" },
      {
        cells: ["Account health", "Daily", "Hyprr"],
        status: "Monitored · clear",
        tone: "ok",
      },
      {
        cells: ["Reporting", "Weekly", "Hyprr"],
        status: "Sent Friday",
        tone: "ok",
      },
    ],
  },

  deliverables: [
    "A daily desk with an owner and a state for every item",
    "Weekly written reporting you can read in five minutes",
    "A written escalation path when something goes wrong",
    "Records of every material purchase and decision",
  ],
  artefact: {
    kind: "report",
    rows: [
      { k: "Purchasing", v: "Approved · placed", tone: "ok" },
      { k: "Inventory", v: "Restock recommended · 2 lines", tone: "warn" },
      { k: "Orders & fulfilment", v: "Clear", tone: "ok" },
      { k: "Cases", v: "1 open · with marketplace", tone: "warn" },
      { k: "Account health", v: "Policy clear", tone: "ok" },
      { k: "Decisions needed", v: "2 · listed below", tone: "warn" },
    ],
  },
  artefactNote:
    "The last row is the point. A report that ends in \"all good\" is a report you stop reading. This one ends in what needs you, so the five minutes it takes has a purpose. Everything above it is context for that.",

  fitFor: [
    "You have a live business and no one whose job is the desk",
    "You want to make the decisions, not do the work",
    "You want records, not reassurance",
  ],
  notFor: [
    "You want operations automated away with a tool",
    "You want decisions taken without you",
    "You are pre-launch with nothing yet to operate",
  ],

  phases: [
    {
      days: "Days 0–30",
      title: "Take the desk",
      body: "Access granted through permissioned service-provider roles. Current state documented: open cases, stranded stock, suppressed listings, account health, supplier terms, reorder points. Most takeovers surface something the client did not know — usually aged inventory or a listing that has been inactive for months. The cadence starts in week two.",
    },
    {
      days: "Days 31–60",
      title: "Run and correct",
      body: "The desk runs daily. The backlog found in month one is worked down in priority order — account risk first, then money, then tidiness. Reporting cadence beds in and you tell us what you want more or less of in it, which is the only part of the report we expect to change. Your part is the purchase approvals and any decision that costs money; everything else runs without you. By the end of this phase the backlog should be measurably smaller and you should have stopped being surprised by what is in the weekly.",
    },
    {
      days: "Days 61–90",
      title: "Steady",
      body: "The desk is routine. The escalation path has usually been tested at least once by now, which is the useful part — you learn what it feels like when something goes wrong before it goes badly wrong. Reporting is monthly on top of the weekly, and ends in a decision rather than a dashboard. By day 90 the checkable state is a negative one: no unknown open cases, no stranded stock nobody has looked at, no listing that quietly stopped selling. Quiet is the deliverable.",
    },
  ],
  hwwTitle: "Signature block · what happens when something goes wrong",
  hww: {
    kind: "chain",
    items: [
      { label: "Signal", sub: "detected" },
      { label: "Escalate", sub: "same day" },
      { label: "Assess", sub: "options" },
      { label: "Client decision", sub: "yours", dark: true },
      { label: "Execute", sub: "Hyprr" },
      { label: "Document", sub: "recorded" },
      { label: "Report", sub: "weekly" },
    ],
  },

  yoursIntro:
    "Operations means someone else touching your business every day. That makes the question of what they can and cannot do more important here than anywhere else.",
  yours: [
    "Seller and store accounts",
    "Inventory",
    "Bank and payment accounts",
    "Every material decision",
    "The records",
  ],
  hyprrWork: [
    "Purchase orders and replenishment",
    "Orders, cases and listings",
    "Account health monitoring",
    "Escalation, documentation, reporting",
  ],
  yoursOutro:
    "We work under permissioned access you grant and can revoke. We do not hold credentials, we cannot move money, and we cannot place a purchase order without your approval. The records are generated in your accounts, not ours.",
  managedLead:
    "These four run every working day whether or not anything is wrong, which is the point — most operational damage comes from the day nobody looked, not from the day something broke.",
  managed: [
    ["Purchase orders", "daily · approved"],
    ["Inventory", "daily"],
    ["Orders", "daily"],
    ["Cases", "daily"],
    ["Listings", "weekly"],
    ["Account health", "daily"],
    ["Reporting", "weekly"],
  ],

  fees: [
    "Realised margin on the business the desk is operating. Not hourly, and this is worth saying plainly on a page whose adjacent search results are priced by the hour: an hourly operations service is paid for time spent, which is the wrong incentive for work whose goal is fewer problems.",
  ],
  faqs: [
    {
      q: "What does a normal week look like?",
      a: "Monday: purchase orders raised and sent to you with economics attached; inventory cover reviewed. Tuesday to Thursday: orders, cases, exceptions, listing corrections, account health, each daily. Wednesday adds the weekly listing sweep. Friday: the written report, ending in the decisions that need you. Between those, anything that arrives with a clock on it is handled the day it arrives rather than at the next scheduled point. The cadence is deliberately boring — the value of an operations desk is that the same things happen on the same days, so what is missing is visible.",
    },
    {
      q: "What happens when something goes wrong?",
      a: "There is one path and it does not vary. The signal is detected, usually by monitoring rather than by you noticing. It is escalated to you the same day, even if we already know what we would recommend. We assess the options and put them in front of you with the trade-offs. You decide. We execute your decision, document what happened, and it appears in the weekly report. The step people are surprised by is the same-day escalation for problems we could quietly fix — we tell you anyway, because a provider who only reports resolved problems is training you not to look.",
    },
    {
      q: "How much do I need to be involved?",
      a: "Purchase approvals, which are the material decisions, and about five minutes on Friday. Anything urgent reaches you the day it happens. Beyond that the desk runs without you, and clients who want more involvement usually want it in the first month and less after. If you want to be in the daily detail, that works too — the reporting exists at that level, it is just not pushed at you.",
    },
    {
      q: "Can you take over an operation mid-flight?",
      a: "Yes, and most engagements are exactly that. The first month is documentation before change: what is open, what is stranded, what is suppressed, what the supplier terms actually say. We do not restructure anything in week one, because a takeover that starts by changing things cannot tell which problems it inherited and which it created. You get the written current state first.",
    },
  ],

  nextStep: {
    engine: "operate",
    h3: "The cadence ends in a decision, not a dashboard.",
    body: "Every cycle closes with a written read on what the period actually made and what to do differently — the same reconciliation the fee is calculated from, which is why the arithmetic is checkable rather than asserted.",
    links: [
      { label: "How the reporting works", href: "/how-we-work#reporting" },
      { label: "How we are paid", href: "/how-we-work#fees" },
    ],
  },
  related: [
    {
      name: "Marketplace management",
      slug: "/marketplace-management",
      engine: "operate",
    },
    {
      name: "Shopify management",
      slug: "/shopify-management",
      engine: "operate",
    },
    {
      name: "Ecommerce growth",
      slug: "/ecommerce-growth",
      engine: "grow",
    },
  ],
  insight: "The operating model: how the desk actually runs",
};

export default data;

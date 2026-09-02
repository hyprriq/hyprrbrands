import type { ServicePageData } from "@/lib/service-pages";

/**
 * /shopify-dtc — Build engine, shopify composition. Absorbs the
 * dropped /dtc-growth as the #growth section; chips and footer point
 * at /shopify-dtc#growth. Copy from docs/content/shopify-dtc.md.
 */
const data: ServicePageData = {
  slug: "/shopify-dtc",
  engine: "build",
  name: "Shopify / DTC",
  short: "Shopify and DTC",
  metaTitle: "DTC & Shopify Ecommerce Agency | Build and Run | Hyprr",
  metaDescription:
    "We build the direct customer journey around your product — storefront, conversion, acquisition, retention — and you own the store, the code and the data.",

  h1: "DTC and Shopify: build the customer journey, not just the store",
  answer:
    "Hyprr builds and runs the direct customer journey around your product: the offer, the storefront, merchandising, checkout, acquisition and retention. The storefront is one part of a system that starts at the ad and ends at the repeat purchase. The store, the code, the customer data and the accounts are yours from day one.",
  disqualifier:
    "Not for you if you want a storefront without an acquisition plan behind it.",

  involvesLead:
    "The storefront is only one part. Product, merchandising, storefront, conversion, acquisition and retention are built together or not at all.",
  involvesBody: [
    "Most DTC projects fail in a predictable order. The store gets built, it looks good, and then nobody comes — because acquisition was scoped as a later phase, and by the time it starts the build budget is spent.",
    "So the honest framing first: DTC works best on a product that has already proven it sells somewhere. If a product moves on a marketplace, you have demand evidence, review language, price tolerance and search data before you spend anything on a storefront. Starting with DTC means buying that evidence with advertising, which is the most expensive way to learn it. This is not an argument against DTC. It is an argument about sequence, and it is the opposite of what most agencies selling storefronts will tell you.",
    "When it is the right move, six things get built as one system. Product — what is actually sold, how it is priced, what bundles exist, whether there is a reason to buy more than one. Merchandising — collections, the order things appear in, what the homepage is actually for. Storefront — theme, page structure, performance, accessibility; the parts that decide whether a paid visitor stays. Conversion — offer through page to checkout, tested as one path rather than as isolated buttons. Acquisition — paid media, creative, landing pages, and the honest arithmetic of what a customer costs to acquire against what they are worth. Retention — email, lifecycle, the second and third purchase, which is where DTC economics actually live.",
    "Change one and the others move. A bundle changes the ad that works. A checkout change moves the acquisition cost. Treating them as separate workstreams is how a storefront ends up beautiful and unprofitable.",
    "Hyprr builds them together, then either hands over with documentation or keeps operating it. Both are real options and the handover is a specific step with a runbook, not an implied one.",
  ],

  visual: {
    kind: "journey",
    title: "The customer journey",
    nodes: [
      ["Ad", "paid · creative"],
      ["Landing", "offer"],
      ["Product", "page"],
      ["Cart", "merch"],
      ["Checkout", "payments"],
      ["Customer", "email"],
      ["Repeat", "lifecycle"],
    ],
  },

  deliverables: [
    "A storefront built as a conversion system, not a theme install",
    "Acquisition and retention designed alongside the store",
    "Documentation and handover so you can run it without us",
    "Ongoing operation if you want it — handover either way",
  ],
  artefact: {
    kind: "layers",
    items: [
      ["Product", "What is sold, how it is priced and bundled."],
      ["Merchandising", "Collections, offers, how the range is presented."],
      ["Storefront", "Theme, pages, performance, accessibility."],
      ["Conversion", "Offer → page → checkout, tested as a system."],
      ["Acquisition", "Paid media, creative, landing pages."],
      ["Retention", "Email, lifecycle, repeat purchase."],
    ],
  },

  fitFor: [
    "You have a product or brand that deserves a direct relationship with its customers",
    "You want to own the store, the code and the data",
    "You are ready to fund acquisition, not just a build",
  ],
  notFor: [
    "You want a store and no plan to bring people to it",
    "You want the site on an agency-owned account",
    "You are not yet sure the product sells anywhere",
  ],

  phases: [
    {
      days: "Days 0–30",
      title: "Offer and architecture",
      body: "Product, pricing and bundle structure decided before any design. Store architecture, collections and page inventory. Acquisition channels chosen and accounts set up in your name. Nothing visible is built in the first three weeks, which is the part clients find hardest and the part that decides whether the rest works.",
    },
    {
      days: "Days 31–60",
      title: "Build and test",
      body: "Storefront built, merchandising in, checkout configured, performance budget enforced. Conversion path tested end to end before traffic. Email and lifecycle flows written. Creative produced for the acquisition channels.",
    },
    {
      days: "Days 61–90",
      title: "Launch and read",
      body: "Acquisition turns on at a deliberately small spend, and the first read is about the conversion path rather than the return. Adjust, then scale what the arithmetic supports. Documentation and runbook written during this period, not after.",
    },
  ],
  hwwTitle: "Build → operate · handover is a step, not the end",
  hww: {
    kind: "chain",
    items: [
      { label: "Build", sub: "store + system" },
      { label: "Test", sub: "conversion" },
      { label: "Launch", sub: "acquisition on" },
      { label: "Document", sub: "runbook" },
      { label: "Handover", sub: "your team", dark: true },
      { label: "Operate", sub: "if wanted" },
    ],
  },

  yoursIntro:
    "In DTC the customer data is the asset and it is the thing most often held hostage. Here is what sits where.",
  yours: [
    "Shopify store and theme code",
    "Customer data",
    "Ad and email accounts",
    "Domain and content",
    "Every offer decision",
  ],
  hyprrWork: [
    "Store architecture and build",
    "Merchandising and conversion system",
    "Acquisition and retention setup",
    "Documentation, handover, operation",
  ],
  yoursOutro:
    "The store is on your Shopify account, the domain is registered to you, the ad and email accounts are yours with us added as users, and the customer list is exportable at any time.",
  managed: [
    ["Storefront", "built · maintained"],
    ["Merchandising", "ongoing"],
    ["Conversion testing", "ongoing"],
    ["Paid acquisition", "operated"],
    ["Retention / email", "operated"],
    ["Reporting", "monthly"],
  ],

  fees: [
    "The build is scoped and priced before it starts. Ongoing operation is paid on realised margin — what the store actually made after cost of goods, fulfilment, payment fees and advertising. Advertising spend goes from your account to the platform; no part of the fee is calculated on it, which matters in DTC more than anywhere else, because a fee on ad spend rewards spending.",
  ],
  faqs: [
    {
      q: "Do I need to be on Shopify?",
      a: "No, but it is usually the right answer for this kind of business and we will say so if it is not. The platform question is decided on what you sell, how you fulfil, what integrations the operation needs, and who maintains it afterwards — not on preference. If you are already on something else and it works, the answer may be to improve it rather than migrate. A migration you did not need is the most expensive kind of build.",
    },
    {
      q: "Who owns the store and the customer data?",
      a: "You do, both, without qualification. The Shopify account is yours and billed to you; we are collaborators on it. The theme code is in your repository. The customer list, order history and email subscribers are yours and exportable whenever you want, without asking. The ad accounts are registered to your business with us added as users. Nothing here needs transferring at the end because nothing was ever in our name.",
    },
    {
      q: "What does it cost to acquire a customer?",
      a: "We cannot answer that before we know your product, price, margin and category, and any agency that quotes a number without those is quoting someone else's business. What we can tell you is how it gets decided: acquisition cost has to sit inside contribution margin after cost of goods, fulfilment and payment fees, with enough left that the first purchase is not a loss you are hoping to recover later. If the second purchase is doing that work, we say so explicitly rather than folding it into an average.",
    },
    {
      q: "Can you take over an existing store?",
      a: "Yes, and it is a different first month — an audit rather than a build. Current conversion path, merchandising, performance, acquisition efficiency and retention flows, read against what the product and margin can support. You get a written read of what is working, what is losing money and what should stop, before anything is rebuilt. Some takeovers need less than the client expected.",
    },
  ],

  extraSection: {
    id: "growth",
    title: "DTC growth",
    body: [
      "Growth in DTC is not more traffic. It is acquisition cost, conversion, and repeat purchase moving in the right direction relative to contribution margin — and the third one is where the business is actually made. A brand acquiring at breakeven on first purchase with a strong second-purchase rate is healthier than one profitable on first purchase with none, and the two look identical on a revenue chart.",
      "So growth work runs on three questions in order. Can we convert more of what already arrives — because that is free relative to buying more of it. Can we acquire more without pushing cost past the margin floor. Can we bring more customers back, and how much is that worth.",
      "Where DTC differs from marketplace: you own the customer relationship, so retention is available to you in a way it is not on Amazon; and you own the whole cost stack, so nothing is hidden inside a marketplace fee. Both cut the other way too — there is no built-in demand, and every visitor is bought.",
      "Growth actions are checked against inventory and fulfilment capacity before they are taken, the same rule as every other Hyprr service. Growth the operation cannot deliver is a refund queue.",
    ],
  },

  related: [
    {
      name: "Ecommerce website development",
      slug: "/ecommerce-website-development",
      engine: "build",
    },
    { name: "Ecommerce growth", slug: "/ecommerce-growth", engine: "grow" },
  ],
  insight: "DTC versus marketplace: which one first",
};

export default data;

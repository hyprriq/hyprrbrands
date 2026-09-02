import type { ServicePageData } from "@/lib/service-pages";

/**
 * /ecommerce-website-development — Build engine, shopify composition
 * with the GAP 2 substitution: the customer-journey visual becomes
 * the §8 infrastructure stack. The layers artefact carries the same
 * stack with one-line descriptions assembled from the body copy.
 * Written to DISQUALIFY the project-only buyer — the SERP's intent
 * points the wrong way, and the disqualification appears four times.
 */
const data: ServicePageData = {
  slug: "/ecommerce-website-development",
  engine: "build",
  serviceType: "Ecommerce website development",
  name: "Ecommerce website development",
  short: "ecommerce website development",
  metaTitle: "Ecommerce Website Development Company | Hyprr",
  metaDescription:
    "We build storefronts, integrations and payments for operations we also run. If you want a standalone site project with no operation behind it, we pass.",

  h1: "Ecommerce website development — for operations we also run",
  answer:
    "Hyprr builds the technical commerce infrastructure underneath a business we operate: storefront, CMS, payments, integrations, and the connections to marketplaces and reporting. We do not take standalone website projects. The code, the store, the data and the accounts are yours, and the build is designed for the operation that runs after launch.",
  disqualifier:
    "Not for you if you want a website built and handed over with no operation behind it. We will refer you elsewhere rather than take the project.",

  involvesLead:
    "A commerce build is infrastructure, not a website. The question is not what it looks like on launch day but what it costs to run in year two.",
  involvesBody: [
    "Most ecommerce builds are quoted as a project and lived with as a system. The quote covers design and build; the cost that follows covers integrations that break, a platform decision nobody can undo, and a performance budget that quietly disappears as apps accumulate.",
    "Platform choice, and why. Shopify for most businesses that sell products and want to stop thinking about infrastructure. Custom or headless only when there is a specific reason — a catalogue structure Shopify genuinely cannot express, a fulfilment or pricing model that needs its own logic, or an existing system that must stay authoritative. \"Headless because it is modern\" is how a business ends up paying developers to maintain something a themed store did better. We will talk you out of a custom build more often than into one.",
    "What is in a build, and what is not. In: information architecture, templates, product data structure, checkout configuration, payments, the integrations the operation actually needs, a performance budget that is enforced rather than aspirational, accessibility, analytics, and documentation. Not in: content nobody has written yet, a migration whose data quality has not been assessed, or an integration to a system that has not been chosen.",
    "Integrations and migrations. Every integration is a permanent maintenance obligation, so each one has to earn its place. Migrations are scoped against the data as it actually is — URL structure, redirects, historic orders, customer accounts, SEO equity — rather than as the previous agency described it.",
    "Who owns the code and the store. You do. The repository is yours, the Shopify or hosting account is billed to you, and the domain is registered to your business.",
    "Handover. A documented step with a runbook, an architecture note and a walkthrough — so that another developer can pick it up, whether or not that developer is us.",
  ],

  involvesSubheads: ["Built for an operation", "What we do not take on"],

  diagram: {
    kind: "scope-boundary",
    caption:
      "The boundary is the point: the left column exists only for operations we also run.",
  },
  ruleCard: {
    text: "We build storefronts for operations we also run.",
    source:
      "Proven in the scope boundary above — the disqualifier, drawn as a line.",
  },

  visual: {
    kind: "stack",
    title: "The infrastructure stack",
    items: [
      ["Product", "data structure"],
      ["Store", "templates · theme"],
      ["CMS", "content"],
      ["Payments", "checkout"],
      ["ERP / operations", "integrations"],
      ["Marketplaces", "connections"],
      ["Analytics", "reporting"],
    ],
  },

  deliverables: [
    "A platform decision with the reasoning written down, including the case against",
    "A built storefront with an enforced performance budget, not an aspirational one",
    "Integrations scoped as maintenance obligations, each one justified",
    "A documented handover any competent developer can pick up",
  ],
  artefact: {
    kind: "layers",
    items: [
      ["Product", "Catalogue and product data structure, decided first."],
      ["Store", "Templates and theme, built to the platform's conventions."],
      ["CMS", "Content structure the team can actually maintain."],
      ["Payments", "Checkout configuration and payment providers."],
      ["ERP / operations", "The integrations the operation genuinely needs."],
      ["Marketplaces", "Connections to the channels the catalogue sells on."],
      ["Analytics", "Measurement wired in before launch, not after."],
    ],
  },

  artefactNote:
    "Each layer is only maintained while the operation above it is running. Open them in order and the point emerges: this is a build defined by what happens after it, which is why we do not take standalone website projects.",
  fitFor: [
    "You are building or running an operation and the store is part of it",
    "You want to own the code, the accounts and the data",
    "You want the build scoped against what it costs to run, not just to launch",
  ],
  notFor: [
    "You want a standalone website project with nobody operating it afterwards",
    "You are choosing on build price alone",
    "You want the site hosted on an agency account",
    "You need a quote before anyone has seen the catalogue",
  ],
  fitNote:
    "We say no to standalone build projects more often than we take them. If that is what you need, a specialist web development firm will serve you better and cost less, and we will name one.",

  phases: [
    {
      days: "Days 0–30",
      title: "Decide",
      body: "Platform decision with the reasoning documented, including why the alternatives were rejected. Data and catalogue assessment. Integration inventory — what exists, what is needed, what is being carried out of habit. Performance budget agreed as a number before any code.",
    },
    {
      days: "Days 31–60",
      title: "Build",
      body: "Templates, product data structure, checkout and payments. Integrations built one at a time against the inventory. The performance budget is checked at each merge, not at the end, because it is unrecoverable if left.",
    },
    {
      days: "Days 61–90",
      title: "Test, launch, document",
      body: "Migration rehearsed against real data with redirects mapped before launch. Accessibility and performance verified. Runbook and architecture note written. Handover walkthrough with whoever will run it.",
    },
  ],
  hwwTitle: "Build → operate · handover is a step, not the end",
  hww: {
    kind: "chain",
    items: [
      { label: "Build", sub: "infrastructure" },
      { label: "Test", sub: "performance + a11y" },
      { label: "Launch", sub: "redirects mapped" },
      { label: "Document", sub: "runbook" },
      { label: "Handover", sub: "walkthrough", dark: true },
      { label: "Operate", sub: "optional" },
    ],
  },

  yoursIntro:
    "The question that separates a build you own from one you rent: where does the code live, and whose name is on the hosting?",
  yours: [
    "The repository and all code",
    "The Shopify or hosting account",
    "The domain",
    "Customer and order data",
    "Analytics accounts",
  ],
  hyprrWork: [
    "Architecture and platform decision",
    "Build and integrations",
    "Migration and launch",
    "Documentation and handover",
  ],
  yoursOutro:
    "Nothing we build is licensed to you. There is no proprietary framework you would lose access to, and no part of the stack requires us to keep running.",
  managedLead:
    "A build is scoped and finite; everything after it is only maintained if we are also running the operation. If we are not, the work below ends cleanly at handover.",
  managed: [
    ["Storefront build", "scoped"],
    ["Integrations", "maintained if operating"],
    ["Performance budget", "enforced"],
    ["Migration", "rehearsed"],
    ["Documentation", "delivered"],
    ["Post-launch operation", "optional"],
  ],

  fees: [
    "The build is a scoped fee agreed before it starts, with the scope written down and change handled explicitly rather than absorbed. If the operation continues with us afterwards, that runs on realised margin like every other service. If it does not, the build ends cleanly and you owe nothing ongoing.",
  ],
  faqs: [
    {
      q: "How is this different from hiring a web agency?",
      a: "A web agency's engagement ends at launch, which is the correct model for a brochure site and the wrong one for a commerce system. The decisions that matter most in a build — platform, data structure, which integrations exist — are the ones you live with in year two, and an agency that will not be there has no stake in them. We build for operations we run, so the maintenance cost of every decision lands on us too. That is the whole difference, and it is why we decline standalone projects.",
    },
    {
      q: "Who owns the code and the store?",
      a: "You do. The repository is yours from the first commit, not transferred at the end. The Shopify or hosting account is registered and billed to your business. The domain is yours. We build with the platform's own conventions rather than a proprietary framework, so any competent developer can take it on — which is the practical test of ownership, not the contractual one.",
    },
    {
      q: "Can you migrate an existing store?",
      a: "Yes, and the assessment comes before the quote. Migrations are priced on the data as it actually is: catalogue quality, URL structure, redirect mapping, historic orders, customer accounts, and the SEO equity currently attached to the old URLs. Migrations that go wrong usually go wrong on redirects, so those are mapped and rehearsed before launch rather than fixed after traffic drops.",
    },
    {
      q: "What does an ecommerce website cost to build?",
      a: "We are not going to give you a number on this page, and any firm that does before seeing your catalogue is quoting a template. The more useful answer is what drives it: catalogue size and data quality, how many integrations the operation genuinely needs, whether it is a migration, and whether content exists. What we can say is that we do not take builds as standalone projects — so if a build price is the only question, we are the wrong call and we will say so on the first conversation.",
    },
  ],

  nextStep: {
    engine: "grow",
    h3: "A built storefront is infrastructure, not demand.",
    body: "The site being fast and correct does not by itself bring anyone to it. What follows is the demand and conversion work the build was scoped to support — and if that work is not happening, the build was the wrong purchase.",
    links: [
      { label: "Ecommerce growth", href: "/ecommerce-growth" },
      { label: "The Grow engine", href: "/grow" },
    ],
  },
  related: [
    {
      name: "Shopify / DTC",
      slug: "/shopify-dtc",
      engine: "build",
    },
    {
      name: "Shopify management",
      slug: "/shopify-management",
      engine: "operate",
    },
  ],
  insight: "Store ownership: code, data, accounts",
};

export default data;

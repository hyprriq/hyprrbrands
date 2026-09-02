import type { ServicePageData } from "@/lib/service-pages";

/**
 * /marketplace-management — Operate engine, marketplace composition.
 * Copy from docs/content/marketplace-management.md (2 Sep). The
 * measured objection — Google's AI Overview cites Reddit advising
 * against third-party account management — is named in the hero and
 * answered by the Petrol section, which is this page's rebuttal.
 */
const data: ServicePageData = {
  slug: "/marketplace-management",
  engine: "operate",
  serviceType: "Amazon & Walmart seller account management",
  name: "Marketplace management",
  short: "marketplace management",
  faqShort: "seller account management",
  metaTitle: "Amazon & Walmart Seller Account Management | You Own It",
  metaDescription:
    "Day-to-day account health, compliance and execution under permissioned access in your own account. We never hold your credentials.",

  h1: "Amazon & Walmart seller account management",
  answer:
    "Hyprr manages your seller accounts — Amazon in the US and UK, and Walmart in the US — for health, compliance and execution: listings, cases, inventory review, policy and account health, worked daily. Access is permissioned under your account; credentials are never shared. Each marketplace is run on its own rules, not one page with the name swapped.",
  disqualifier:
    "Not for you if you want to hand over your login and hear from us quarterly.",
  heroObjection: {
    text: "If you have read that you should never let a third party manage your seller account, that advice is largely right.",
    anchorLabel: "What stays yours",
    anchor: "yours",
  },

  involvesLead:
    "Marketplace management is account health, compliance and execution, in that order. The marketplaces share a catalogue and little else.",
  involvesBody: [
    "Account health first, because everything else is contingent on it. Policy notifications, performance metrics, intellectual property complaints, listing suppressions, and the slow-moving indicators that precede a suspension. These are monitored daily rather than reviewed monthly, because the gap between a warning and an enforcement is often days, and the cost of missing it is the whole business rather than a bad month.",
    "Compliance second. Category requirements, listing rules, restricted claims, and the marketplace's own moving definitions of what is acceptable. Most account problems are not fraud — they are a listing written eighteen months ago under rules that have since changed.",
    "Execution third, and only third. Listings, cases, inventory review, day-to-day operations. It is the visible work and it is the least dangerous.",
    "Where Walmart genuinely differs from Amazon — and this is not a noun swap; running it as one is why most sellers report Walmart underperforming. Item setup is a different data model with different required attributes, and content that passes on Amazon is regularly rejected there. Case handling runs on a different system with different response expectations and different escalation routes. Performance metrics are scored differently — the thresholds are not Amazon's, and the on-time delivery and cancellation metrics carry more weight than sellers expect. Pricing rules are more actively enforced: Walmart will suppress an item for being priced above other retailers in a way Amazon does not. Buy box logic weighs the competitive set differently, and that set is thinner. Fulfilment options are separate, with their own requirements. And policy notifications arrive through different channels, so monitoring Amazon's dashboard tells you nothing about Walmart's.",
    "The catalogue is shared. Almost nothing else is.",
    "Access. Both marketplaces provide permissioned service-provider access designed exactly for this. We are granted specific rights by you, from your account. We do not use your login. You can revoke it yourself without involving us.",
  ],

  involvesSubheads: ["Keeping the account sellable", "Cases and clocks"],

  visual: {
    kind: "states",
    title: "Marketplace control room · operational states",
    items: [
      { label: "Account health", state: "monitored · clear", tone: "ok" },
      { label: "Listings", state: "active", tone: "ok" },
      { label: "Cases", state: "one open", tone: "warn" },
      { label: "Inventory", state: "review due", tone: "warn" },
      { label: "Policy", state: "clear", tone: "ok" },
    ],
  },

  deliverables: [
    "Account health monitored daily on both marketplaces, with alerts escalated to you the same day",
    "Policy and compliance reviewed against current rules, not the rules the listing was written under",
    "Cases opened, worked and escalated with clocks tracked",
    "Each marketplace run as a separate operation against a shared catalogue",
  ],
  artefact: {
    kind: "split",
    cols: [
      {
        name: "Amazon",
        items: [
          ["Shared", "Catalogue, product data, brand"],
          ["Differs", "Item setup data model"],
          ["Differs", "Case system and escalation routes"],
          ["Differs", "Performance thresholds and buy box logic"],
        ],
      },
      {
        name: "Walmart",
        items: [
          ["Shared", "Catalogue, product data, brand"],
          ["Differs", "Pricing enforcement — active suppression"],
          ["Differs", "Fulfilment options and requirements"],
          ["Differs", "Notification channels"],
        ],
      },
    ],
  },

  artefactNote:
    "The same two columns, doing a different job here: this is not what grows on each marketplace but what can suspend you on each. The rules diverge more on compliance than they do on ranking.",
  fitFor: [
    "You sell on Amazon, Walmart or both and nobody watches account health daily",
    "You want the account to stay yours in every sense",
    "You want Walmart run properly rather than mirrored",
  ],
  notFor: [
    "You want to hand over the login and stop thinking about it",
    "You want a provider registered as the seller",
    "You want policy problems handled without being told about them",
  ],

  phases: [
    {
      days: "Days 0–30",
      title: "Access and audit",
      body: "Permissioned access granted by you, per marketplace. Full account health audit: open cases, policy notifications, suppressed listings, metric performance against each marketplace's own thresholds, IP complaints. Walmart audited separately. You receive a written current state, including anything that is closer to enforcement than you realised.",
    },
    {
      days: "Days 31–60",
      title: "Clear and correct",
      body: "Backlog worked in risk order — policy and health before execution, always. Listings brought to current rules. Cases opened where a resolution is available and worth pursuing.",
    },
    {
      days: "Days 61–90",
      title: "Steady monitoring",
      body: "Daily monitoring routine, weekly reporting, escalation path tested. By day 90 the account should have no unknown risks — which is a different and more valuable state than having no problems.",
    },
  ],
  hwwTitle: "Permissioned access model · why credentials are never shared",
  hww: {
    kind: "statements",
    items: [
      ["You own", "The account, the registration, the bank and tax details."],
      [
        "Hyprr is granted",
        "Specific user permissions, by you, from your account.",
      ],
      [
        "Never",
        "Your login credentials, never registered as the seller, never able to change your bank details.",
      ],
    ],
  },

  // The page's most important paragraph — the rebuttal to the measured
  // objection Google's own AI Overview carries for this search.
  yoursIntro:
    "Google's own AI summary for this search cites a Reddit thread advising sellers not to hand a new account to third-party management. The most-voted answer on the ownership question is \"don't trust any agencies.\" That advice is largely correct, and the reason it exists is that a lot of providers in this category do register themselves as the seller. Here is the arrangement that makes the advice inapplicable rather than an argument against it.",
  yours: [
    "The seller account and its registration",
    "Your bank and tax details",
    "Inventory and capital",
    "Brand registry",
    "Every material decision",
  ],
  hyprrWork: [
    "Daily account health and policy monitoring",
    "Compliance review against current rules",
    "Case handling and escalation",
    "Listings and execution",
  ],
  // Owner check pending: "we never hold your credentials" is a claim
  // about how the engagement actually operates — confirm before launch.
  yoursOutro:
    "You register the account. Your bank details, your tax information. We are added as a user with specific permissions, by you, from inside your own account settings — and you can remove us the same way in under a minute without contacting us. We never hold your credentials, and we are never the registered seller. If we stop working together, nothing transfers, because nothing was ever ours.",
  managedLead:
    "This is the work that keeps an account sellable, and almost none of it is visible when it is going well. The cadence exists so that a policy change is found by us in a sweep rather than by you in a suspension.",
  managed: [
    ["Account health", "daily, both marketplaces"],
    ["Policy and compliance", "reviewed against current rules"],
    ["Cases", "opened and worked, clocks tracked"],
    ["Listings", "weekly sweep"],
    ["Inventory review", "weekly"],
    ["Reporting", "weekly"],
  ],

  fees: [
    "Realised margin on the account being managed. Not a flat monthly fee, which would be paid identically whether the account was healthy or one notification from suspension.",
  ],
  faqs: [
    {
      q: "Should I let anyone manage my seller account?",
      a: "Be careful, and the widely-repeated warning is fair. The arrangement to avoid is a provider registered as the seller on an account they control, because at that point the business is theirs and your leverage is a conversation. What both marketplaces actually provide is permissioned service-provider access: you own the account, you add a user, you set what they can do, and you remove them yourself. That is the arrangement here, and it is worth asking any provider you speak to — including us — to state plainly which of the two they are proposing. The answer should not require a follow-up question.",
    },
    {
      q: "How does permissioned access work in practice?",
      a: "You add us as a user from your own account settings and assign specific permissions — the marketplaces let you scope this quite precisely. We never receive your password and never log in as you. Every action taken is attributable to our user rather than to the account owner, which is also better for you if anything is ever disputed. Removing access is a setting you change, not a request you make.",
    },
    {
      q: "What happens if the account gets a policy warning?",
      a: "You hear about it the same day, before we have decided anything. Then we assess: what the notification actually says, what the marketplace is likely to want, what the options are and what each risks. You decide the response. We draft and submit it and track the clock. Policy problems escalate quickly when they are answered late or answered wrongly, and both of those are more common than the underlying issue being unfixable.",
    },
    {
      q: "How is Walmart different from Amazon here?",
      a: "Materially, and this is where mirrored management fails. Different item setup data model with different required attributes. A separate case system with its own escalation routes and response expectations. Performance thresholds scored differently, with on-time delivery and cancellation weighted more heavily than most sellers expect. Pricing rules actively enforced — Walmart will suppress an item priced above other retailers in a way Amazon will not. Different fulfilment options and requirements. And notifications arrive through a different channel entirely, so watching one dashboard tells you nothing about the other.",
    },
  ],

  nextStep: {
    engine: "operate",
    h3: "What a quiet month should look like in writing.",
    body: "Account health work is mostly invisible when it is going well, so the reporting is what makes it checkable — what was swept, what was found, what was opened and closed, and what changed in the rules.",
    links: [
      { label: "How the reporting works", href: "/how-we-work#reporting" },
      { label: "How we are paid", href: "/how-we-work#fees" },
    ],
  },
  related: [
    {
      name: "Wholesale ecommerce",
      slug: "/wholesale-ecommerce",
      engine: "build",
    },
    { name: "Marketplace growth", slug: "/marketplace-growth", engine: "grow" },
  ],
  insight: "Seller account ownership: the question to ask any agency",
};

export default data;

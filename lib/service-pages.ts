/**
 * ServicePageData — the shape of one service page, lifted from the
 * design system's own `F` object in ServicePage.dc.html. Ten URLs
 * share seven compositions; each page is a DATA FILE in
 * content/services/, not a page build. The variants below are
 * compositions, not URLs — do not invent an eighth.
 */

export type EngineKey = "build" | "grow" | "operate";
export type Tone = "ok" | "warn" | "crit";
export type VerdictKey = "approve" | "review" | "no" | "reject";

/** Primary visual — section 2, Bone ground. */
export type ServiceVisual =
  | {
      kind: "table"; // Wholesale catalogue · Operations desk
      title: string;
      cols: string[];
      rows: { cells: string[]; status: string; tone: Tone }[];
      /** Mobile-only caption under the reduced stack (prompt 13 B). */
      mobileCaption?: string;
    }
  | { kind: "sequence"; title: string; steps: [string, string][] } // Private label
  | { kind: "journey"; title: string; nodes: [string, string][] } // Shopify / DTC
  | {
      kind: "panel"; // Grow — questions, not scores
      title: string;
      items: { k: string; q: string; state: string }[];
    }
  | { kind: "stack"; title: string; items: [string, string][] } // PPC two-way stack
  | {
      kind: "states"; // Marketplace management control room
      title: string;
      items: { label: string; state: string; tone: Tone }[];
    }
  | {
      kind: "loop"; // Marketplace growth — the optimisation loop
      title: string;
      items: string[];
      back: string;
    };

/** Artefact beside the deliverables — section 4, engine field tint. */
export type ServiceArtefact =
  | { kind: "gate"; steps: string[]; last: string }
  | { kind: "verdict"; rows: [string, VerdictKey][] }
  | { kind: "layers"; items: [string, string][] }
  | { kind: "loop"; items: string[] }
  | { kind: "levers"; items: [string, string][] }
  | { kind: "report"; rows: { k: string; v: string; tone: Tone }[] }
  | {
      kind: "split";
      cols: { name: string; items: [string, string][] }[];
    };

/** Slot 3 — one mechanism diagram per page, assigned in
 *  docs/PHASE1_VISUAL_MAP.md. The SVG lives in MechanismDiagram.tsx
 *  keyed by `kind`; the caption is the map's "what it shows" line. */
export type DiagramKind =
  | "buy-decision"
  | "verdict-axes"
  | "six-layers"
  | "scope-boundary"
  | "five-questions"
  | "two-rulebooks"
  | "ads-stack"
  | "cadence-grid"
  | "suspension-path"
  | "reactive-operated";

/** PROMPT_18 — the five page archetypes. The eight-H2 spine, ids and
 *  grounds stay identical; the archetype changes what fills the middle
 *  of the page. Unset = the pre-archetype default rendering. */
export type ServiceLayout =
  | "trading-loop" // wholesale — capital velocity is the whole game
  | "gated-project" // private label — linear with stops, fork at launch
  | "build-run" // shopify-dtc, website-dev — two buyers, two paths
  | "cadence-desk" // ops, marketplace-mgmt, shopify-mgmt — a normal week
  | "constraint-lever"; // growth, marketplace-growth, ppc

/** PROMPT_19 — one photographic image (static, real products). `src`
 *  is the base path with no width suffix or extension
 *  (`/images/<page-slug>/<subject>-<variant>`); the build step emits
 *  `-640/-1280/-1920.webp` beside it and records dimensions in
 *  lib/image-manifest.json. `card` is the flat-UI overlay from the
 *  visual plan — a white card with the site's border and radius over
 *  the image corner. */
export interface ServiceImage {
  src: string;
  alt: string;
  caption?: string;
  card?: { k: string; v: string };
}

/** PROMPT_21 §3.1 — the segmented cost bar. Sum of segments must be
 *  the stated total; the retained segment renders in Lime. Figures
 *  are illustrative and the required footnote says so. */
export interface CostBarData {
  title: string;
  total: string;
  segments: { label: string; value: string; share: number; retained?: boolean }[];
  footnote: string;
}

/** PROMPT_21 — a floated cut-out object with its dressing (§7.3):
 *  every object gets a Petrol-tinted contact shadow and sits on a
 *  band; the spec card carries ONE fact in 6–10 words. */
export interface ObjectImage extends ServiceImage {
  /** Cap the rendered width (small sources never upscale — §7.2). */
  maxW?: number;
  specCard?: { k: string; v: string };
}

/** PROMPT_21 — a band of floated objects. Bands are the §0 grounds
 *  rule made structural: never White. */
export interface ObjectBand {
  position: "hero" | "mid" | "late";
  ground: "field" | "bone";
  objects: ObjectImage[];
  caption?: string;
  /** Concept-render disclosure, rendered small beside the caption. */
  note?: string;
}

/** PROMPT_21 §2 — the native data artefact. The pixels of the source
 *  spreadsheet are discarded; this is the structure. `footnote` is
 *  required because the figures are illustrative and must say so. */
export interface DataArtefactData {
  title: string;
  ground: "field" | "bone";
  cols: string[];
  rows: {
    name: string;
    cells: string[];
    /** The Order column — blank means NOT BOUGHT, the whole point. */
    order?: string;
    tone?: Tone;
    /** Margin annotation on one refused row, e.g. the ROI reason. */
    note?: string;
  }[];
  orderLabel: string;
  /** Text for a blank Order cell (default "not bought"; /scale: "cut"). */
  refusedLabel?: string;
  footnote: string;
}

/** Family insert inside "the first 90 days" — section 6, Bone. */
export type ServiceHww =
  | { kind: "chain"; items: { label: string; sub: string; dark?: boolean }[] }
  | { kind: "stops"; items: [string, string][] }
  | { kind: "statements"; items: [string, string][] };

export interface ServicePageData {
  slug: string;
  engine: EngineKey;
  /** PROMPT_18 archetype. Optional: unset renders exactly as before. */
  layout?: ServiceLayout;
  /** 17 §1 — render the wholesale / private-label / DTC chooser. */
  chooser?: boolean;
  /** 18 B — one sentence stated early, directly under the answer
   *  (e.g. the rejection rate on private label). */
  earlyLine?: string;
  /** 18 C — two explicit paths from the hero, anchoring into the page. */
  heroPaths?: { label: string; desc: string; anchor: string }[];
  /** 18 A — "what we refuse to buy" as its own band inside #for. */
  refuse?: { title: string; items: string[] };
  /** 18 E — "when we recommend stopping" as a named block in #days. */
  stopping?: { title: string; body: string };
  /** 18 B/C — the fork at the end of #days: what happens at launch /
   *  handover, as the section's climax rather than a footnote. */
  launchFork?: {
    title: string;
    body: string;
    links: { label: string; href: string }[];
  };
  /** 18 D — a normal week, rendered as the #days board. */
  week?: { label: string; sub: string }[];
  /** 17 §3 — page-specific line inside the shared money box (e.g. what
   *  the private-label build fee bought if the verdict is Reject). */
  moneyNote?: string;
  /** 17 §5 — the low-commitment second CTA beside "Let's talk". */
  sampleDoc?: { label: string; href: string };
  /** 17 §8 — render the connected-stack section after the FAQ. */
  connectedStack?: boolean;
  /** PROMPT_19 — the photographic slots. Optional: every route
   *  renders unchanged until a page's images land. Clusters of 3+
   *  never sit on White (the §0 chroma mitigation): midPage renders
   *  on a Bone band, section on a Petrol band. */
  images?: {
    hero?: ServiceImage;
    midPage?: ServiceImage[];
    section?: (ServiceImage & { slot: string })[];
  };
  /** PROMPT_21 — floated object bands (hero / mid / late). */
  objectBands?: ObjectBand[];
  /** PROMPT_21 §2 — replaces the section-2 visual when set. */
  dataArtefact?: DataArtefactData;
  /** PROMPT_21 §2 — a second data artefact rendered mid-page. */
  dataArtefactMid?: DataArtefactData;
  /** PROMPT_21 §3 — the cost-breakdown bar, in the fee section. */
  costBar?: CostBarData;
  /** PROMPT_21 §3 — four-stat card row, rendered after #managed. */
  statRow?: { title: string; note?: string; stats: { k: string; v: string; sub: string }[] };
  /** PROMPT_21 §3 — three-panel breakdown, rendered after the FAQ. */
  panel3?: { title: string; panels: { kicker: string; items: string[] }[] };
  /** PROMPT_21 §3.4 — the mat dimension drawing (private label). */
  dimensionDrawing?: boolean;
  /** PROMPT_21 (rewritten) §5 — the generated scene, three-layer
   *  composition. Optional: all 25 routes render unchanged until a
   *  page's scene lands. The alt is decorative and may not contain a
   *  figure (check-images enforces it); every readable number lives
   *  in `panels`, in the DOM. */
  scene?: {
    src: string;
    alt: string;
    archetype: "operation" | "working" | "product" | "object";
    band: "petrol" | "bone" | "build" | "grow" | "operate";
    panels?: { kicker: string; value: string; context?: string; anchor?: "tl" | "tr" | "bl" | "br" }[];
  };
  /** Schema.org Service.serviceType — from the content files' schema notes. */
  serviceType: string;
  name: string;
  /** lower-case, mid-sentence form: "Questions about {short}" */
  short: string;
  metaTitle: string;
  metaDescription: string;

  h1: string;
  /** ~60 words — the direct answer under the H1. */
  answer: string;
  /** One line, mirrored from the disqualification column. */
  disqualifier: string;
  /** The measured objection, named in the hero, anchoring to a section. */
  heroObjection?: { text: string; anchorLabel: string; anchor: string };

  involvesLead: string;
  /** 250–400 words as paragraphs. */
  involvesBody: string[];
  /** Short H3s before paragraphs 3 and 5 — three movements, not one
   *  block (prompt 13 C). Copy from the drop; do not write these. */
  involvesSubheads?: string[];
  /** §32 exception — the only tabbed control on a service page. */
  toggle?: {
    a: { label: string; items: string[] };
    b: { label: string; items: string[] };
  };

  /** GEO comparison block (matches the AI Overview's own shape). */
  comparison?: {
    title: string;
    note?: string;
    cols: [string, string];
    rows: [string, string, string][];
    closing?: string;
  };

  /** Slot 3 — rendered inside `involves` after ¶2, with a caption. */
  diagram: { kind: DiagramKind; caption: string };
  /** Slot 4 — the full-bleed Petrol rule card between `involves` and
   *  the fit columns: one sentence promoted from this page's own copy
   *  (≤15 words), plus one line naming where it is proven. */
  ruleCard: { text: string; source: string };

  visual: ServiceVisual;

  deliverables: string[];
  artefact: ServiceArtefact;
  /** Paragraph under the artefact — the framing the design left striped. */
  artefactNote?: string;

  /** "When to hire one" block, before the fit columns. */
  whenToHire?: { title: string; body: string[] };
  fitFor: string[];
  notFor: string[];
  /** Explicit line under the Ink panel. */
  fitNote?: string;

  /** Three phases, 100–150 words each. Titles are fixed by the design. */
  phases: { days: string; title: string; body: string }[];
  hwwTitle: string;
  hww: ServiceHww;

  /** Framing line above / closing line below the two Petrol columns. */
  yoursIntro?: string;
  yoursOutro?: string;
  yours: string[];
  hyprrWork: string[];
  managedLead?: string;
  managed: [string, string][];

  /** Fee paragraphs. The full mechanic lives at /how-we-work#fees. */
  fees: string[];
  /** Noun for "Questions about X" when it differs from `short`. */
  faqShort?: string;
  /** Answers 100–150 words, unique to this page. */
  faqs: { q: string; a: string }[];
  /** Anchored subsection after the FAQ (e.g. /shopify-dtc#growth). */
  extraSection?: { id: string; title: string; body: string[] };

  /** The engine progression — renders above the related grid, kicker
   *  in the NEXT engine's colour (prompt 14 B2 / 13 E). */
  nextStep?: {
    engine: EngineKey;
    h3: string;
    body: string;
    links: { label: string; href: string }[];
  };
  related: { name: string; slug: string; engine: EngineKey }[];
  /** Insight title — rendered as text until /insights is live. */
  insight: string;
}

export const ENGINE_META: Record<
  EngineKey,
  {
    hub: string;
    hubUrl: string;
    dot: string;
    topRule: string;
    fieldClass: string;
    bandClass: string;
  }
> = {
  build: {
    hub: "Build",
    hubUrl: "/build",
    dot: "bg-build",
    topRule: "border-t-build",
    fieldClass: "bg-build-field",
    bandClass: "bg-build-band",
  },
  grow: {
    hub: "Grow",
    hubUrl: "/grow",
    dot: "bg-grow",
    topRule: "border-t-grow",
    fieldClass: "bg-grow-field",
    bandClass: "bg-grow-band",
  },
  operate: {
    hub: "Operate",
    hubUrl: "/operate",
    dot: "bg-operate",
    topRule: "border-t-operate",
    fieldClass: "bg-operate-field",
    bandClass: "bg-operate-band",
  },
};

export const VERDICTS: Record<
  VerdictKey,
  { label: string; chipClass: string }
> = {
  approve: { label: "Approve", chipClass: "bg-grow-field text-ink" },
  review: { label: "Review", chipClass: "bg-build-field text-ink" },
  no: { label: "Do not buy", chipClass: "bg-ink text-white" },
  reject: { label: "Reject", chipClass: "bg-ink text-white" },
};

export const TONE_DOT: Record<Tone, string> = {
  ok: "bg-ok",
  warn: "bg-warn",
  crit: "bg-crit",
};

/** Archetype-specific overrides for the #days slot. Ids, order and
 *  count never change — only the heading text and nav label, where the
 *  archetype's mandate says so (PROMPT_18: cadence work has no "first
 *  90 days"; a trading loop is a cycle, not a timeline). */
export const LAYOUT_META: Record<
  ServiceLayout,
  { daysHeading?: string; daysNav?: string }
> = {
  "trading-loop": {
    daysHeading: "How we work: the capital cycle",
    daysNav: "Capital cycle",
  },
  "gated-project": {},
  "build-run": {},
  "cadence-desk": {
    daysHeading: "How we work: a normal week",
    daysNav: "A normal week",
  },
  "constraint-lever": {},
};

/** The eight H2s in fixed order — also the section nav. */
export const SERVICE_SECTIONS: [string, string][] = [
  ["involves", "Involves"],
  ["get", "What you get"],
  ["for", "Who it’s for"],
  ["days", "First 90 days"],
  ["yours", "Stays yours"],
  ["managed", "Managed"],
  ["fees", "Fees"],
  ["faq", "Questions"],
];

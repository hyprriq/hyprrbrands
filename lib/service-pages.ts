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

/** Family insert inside "the first 90 days" — section 6, Bone. */
export type ServiceHww =
  | { kind: "chain"; items: { label: string; sub: string; dark?: boolean }[] }
  | { kind: "stops"; items: [string, string][] }
  | { kind: "statements"; items: [string, string][] };

export interface ServicePageData {
  slug: string;
  engine: EngineKey;
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
  /** Published band table (wholesale) — header + rows, rendered
   *  inside its own overflow container. */
  feesTable?: { header: string[]; rows: string[][]; note?: string };
  /** Noun for "Questions about X" when it differs from `short`. */
  faqShort?: string;
  /** Answers 100–150 words, unique to this page. */
  faqs: { q: string; a: string }[];
  /** Anchored subsection after the FAQ (e.g. /shopify-dtc#growth). */
  extraSection?: { id: string; title: string; body: string[] };

  related: { name: string; slug: string; engine: EngineKey }[];
  /** Insight title — rendered as text until /insights is live. */
  insight: string;
}

export const ENGINE_META: Record<
  EngineKey,
  { hub: string; hubUrl: string; dot: string; fieldClass: string; bandClass: string }
> = {
  build: {
    hub: "Build",
    hubUrl: "/build",
    dot: "bg-build",
    fieldClass: "bg-build-field",
    bandClass: "bg-build-band",
  },
  grow: {
    hub: "Grow",
    hubUrl: "/grow",
    dot: "bg-grow",
    fieldClass: "bg-grow-field",
    bandClass: "bg-grow-band",
  },
  operate: {
    hub: "Operate",
    hubUrl: "/operate",
    dot: "bg-operate",
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

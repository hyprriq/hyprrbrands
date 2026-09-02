import type { ServiceLayout, ServicePageData } from "@/lib/service-pages";

/**
 * Slot 3 — the mechanism diagrams (PHASE1_VISUAL_MAP), one per service
 * page, plus the homepage margin-calculation diagram and the hub
 * three-engine diagram. All inline SVG with real <text> — selectable,
 * translatable, crawlable — and no motion, so prefers-reduced-motion
 * is honoured by construction.
 *
 * Every diagram is drawn portrait at viewBox width 360 and rendered at
 * w-full max-w-[420px]: at 375px viewport it displays near 1:1, so the
 * smallest label (10px) stays legible without pinch-zoom. Structure is
 * Ink on White (AA both grounds); engine colours appear only as filled
 * marks, never as load-bearing strokes — Citrus/Lime/Aqua all fail
 * 3:1 non-text contrast on White, so the ink carries the meaning and
 * the mark carries the identity.
 */

const SVG = "w-full max-w-[420px] h-auto";
const CARD = "fill-white stroke-line";
const CARD_STRONG = "fill-white stroke-ink";
const T = "fill-ink";
const TSUB = "fill-body font-mono";

function Arrowhead({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0,0 L8,4 L0,8 z" className="fill-ink" />
      </marker>
    </defs>
  );
}

function BuyDecision() {
  const steps = [
    "Supplier line identified",
    "Gate check",
    "Margin floor",
    "Your approval",
    "Purchase order",
  ];
  return (
    <svg viewBox="0 0 360 312" className={SVG}>
      {steps.map((label, i) => {
        const y = 10 + i * 62;
        return (
          <g key={label}>
            <rect x="8" y={y} width="220" height="44" rx="8" className={CARD} />
            <text x="22" y={y + 27} fontSize="14" fontWeight="600" className={T}>
              {label}
            </text>
            {i < steps.length - 1 && (
              <line
                x1="118"
                y1={y + 44}
                x2="118"
                y2={y + 62}
                className="stroke-ink"
                strokeWidth="1.5"
              />
            )}
          </g>
        );
      })}
      {[1, 2].map((i) => {
        const y = 10 + i * 62;
        return (
          <g key={i}>
            <line
              x1="228"
              y1={y + 22}
              x2="252"
              y2={y + 22}
              className="stroke-crit"
              strokeWidth="1.5"
            />
            <rect
              x="252"
              y={y + 6}
              width="100"
              height="32"
              rx="6"
              className="fill-white stroke-crit"
            />
            <text x="266" y={y + 26} fontSize="11" className="fill-ink font-mono">
              stops here
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function VerdictAxes({ data }: { data: ServicePageData }) {
  const rows =
    data.artefact.kind === "verdict"
      ? data.artefact.rows
      : ([] as [string, string][]);
  return (
    <svg viewBox="0 0 360 340" className={SVG}>
      {rows.map(([label, v], i) => {
        const y = 10 + i * 34;
        const fail = v === "reject" || v === "no";
        const w = fail ? 36 : v === "review" ? 90 : 150;
        return (
          <g key={label}>
            <text x="8" y={y + 16} fontSize="12" fontWeight="500" className={T}>
              {label.split(" — ")[0]}
            </text>
            <rect
              x="170"
              y={y + 8}
              width="150"
              height="8"
              rx="4"
              className="fill-line"
            />
            <rect
              x="170"
              y={y + 8}
              width={w}
              height="8"
              rx="4"
              className={fail ? "fill-crit" : "fill-ink"}
            />
            {fail && (
              <text x={170 + w + 10} y={y + 17} fontSize="11" className="fill-ink font-mono">
                fails
              </text>
            )}
          </g>
        );
      })}
      <line x1="8" y1="292" x2="352" y2="292" className="stroke-line" />
      <text x="8" y="316" fontSize="12" className="fill-ink font-mono">
        One failed axis rejects the product — no averaging.
      </text>
    </svg>
  );
}

function SixLayers() {
  const layers = [
    "Retention",
    "Acquisition",
    "Checkout",
    "Storefront",
    "Pricing",
    "Offer — decided first",
  ];
  return (
    <svg viewBox="0 0 360 300" className={SVG}>
      <Arrowhead id="md-up" />
      {layers.map((label, i) => {
        const y = 10 + i * 48;
        const base = i === layers.length - 1;
        return (
          <g key={label}>
            <rect
              x="8"
              y={y}
              width="244"
              height="38"
              rx="8"
              className={base ? CARD_STRONG : CARD}
              strokeWidth={base ? 2 : 1}
            />
            <text x="22" y={y + 24} fontSize="14" fontWeight="600" className={T}>
              {label}
            </text>
          </g>
        );
      })}
      <line
        x1="290"
        y1="270"
        x2="290"
        y2="30"
        className="stroke-ink"
        strokeWidth="1.5"
        markerEnd="url(#md-up)"
      />
      <text
        transform="rotate(-90 316 150)"
        x="316"
        y="150"
        fontSize="11"
        textAnchor="middle"
        className={TSUB}
      >
        read bottom-up
      </text>
    </svg>
  );
}

function ScopeBoundary() {
  const inScope = ["Storefront build", "Integrations", "Payments", "Analytics & data"];
  const outScope = [
    "Standalone site projects",
    "Build-and-hand-over",
    "No operation behind it",
  ];
  return (
    <svg viewBox="0 0 360 224" className={SVG}>
      <text x="8" y="22" fontSize="11" className="fill-ink font-mono" letterSpacing=".08em">
        WE BUILD
      </text>
      <text x="196" y="22" fontSize="11" className={TSUB} letterSpacing=".08em">
        WE DO NOT TAKE
      </text>
      <line
        x1="181"
        y1="10"
        x2="181"
        y2="216"
        className="stroke-ink"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      {inScope.map((label, i) => {
        const y = 38 + i * 44;
        return (
          <g key={label}>
            <rect x="8" y={y} width="158" height="34" rx="6" className={CARD_STRONG} />
            <text x="20" y={y + 22} fontSize="12" fontWeight="600" className={T}>
              {label}
            </text>
          </g>
        );
      })}
      {outScope.map((label, i) => {
        const y = 38 + i * 44;
        return (
          <g key={label}>
            <rect
              x="196"
              y={y}
              width="156"
              height="34"
              rx="6"
              className={CARD}
              strokeDasharray="4 4"
            />
            <text x="206" y={y + 22} fontSize="11.5" className="fill-body">
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function FiveQuestions() {
  const qs = ["Demand", "Conversion", "Inventory", "Margin", "Capacity"];
  return (
    <svg viewBox="0 0 360 300" className={SVG}>
      {qs.map((label, i) => {
        const y = 10 + i * 58;
        const bind = i === 2;
        return (
          <g key={label}>
            <rect
              x="8"
              y={y}
              width="200"
              height="40"
              rx="8"
              className={bind ? CARD_STRONG : CARD}
              strokeWidth={bind ? 2.5 : 1}
            />
            <text x="22" y={y + 25} fontSize="14" fontWeight="600" className={T}>
              {label}
            </text>
            {i < qs.length - 1 && (
              <line
                x1="108"
                y1={y + 40}
                x2="108"
                y2={y + 58}
                className="stroke-ink"
                strokeWidth="1.5"
              />
            )}
          </g>
        );
      })}
      <line x1="208" y1="146" x2="238" y2="146" className="stroke-ink" strokeWidth="1.5" />
      <rect x="238" y="130" width="114" height="32" rx="6" className={CARD_STRONG} />
      <circle cx="252" cy="146" r="4" className="fill-grow" />
      <text x="262" y="150" fontSize="10" className="fill-ink font-mono">
        binding today
      </text>
    </svg>
  );
}

function TwoRulebooks() {
  return (
    <svg viewBox="0 0 360 270" className={SVG}>
      <rect x="90" y="10" width="180" height="40" rx="8" className={CARD_STRONG} />
      <text x="180" y="35" fontSize="14" fontWeight="600" textAnchor="middle" className={T}>
        One catalogue
      </text>
      <line x1="150" y1="50" x2="90" y2="96" className="stroke-ink" strokeWidth="1.5" />
      <line x1="210" y1="50" x2="270" y2="96" className="stroke-ink" strokeWidth="1.5" />
      {[
        { x: 8, name: "Amazon US & UK", rule: "its own rulebook" },
        { x: 187, name: "Walmart US", rule: "its own rulebook" },
      ].map((p) => (
        <g key={p.name}>
          <rect x={p.x} y="96" width="165" height="88" rx="8" className={CARD} />
          <text x={p.x + 14} y="120" fontSize="13" fontWeight="600" className={T}>
            {p.name}
          </text>
          <text x={p.x + 14} y="140" fontSize="10" className={TSUB}>
            {p.rule}
          </text>
          <text x={p.x + 14} y="160" fontSize="10" className={TSUB}>
            listings · ranking
          </text>
          <text x={p.x + 14} y="174" fontSize="10" className={TSUB}>
            buy box · reviews
          </text>
        </g>
      ))}
      <line x1="90" y1="184" x2="150" y2="222" className="stroke-ink" strokeWidth="1.5" />
      <line x1="270" y1="184" x2="210" y2="222" className="stroke-ink" strokeWidth="1.5" />
      <rect x="90" y="222" width="180" height="40" rx="8" className={CARD_STRONG} />
      <text x="180" y="247" fontSize="14" fontWeight="600" textAnchor="middle" className={T}>
        One team, one loop
      </text>
    </svg>
  );
}

function AdsStack() {
  const below = ["Listings", "Pricing", "Inventory", "Margin", "Reporting cadence"];
  return (
    <svg viewBox="0 0 360 330" className={SVG}>
      <rect x="8" y="10" width="244" height="40" rx="8" className={CARD_STRONG} strokeWidth="2" />
      <text x="22" y="35" fontSize="14" fontWeight="600" className={T}>
        Advertising
      </text>
      <line
        x1="8"
        y1="64"
        x2="352"
        y2="64"
        className="stroke-crit"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      <text x="352" y="82" fontSize="10" textAnchor="end" className="fill-ink font-mono">
        an ads-only agency sees to here
      </text>
      {below.map((label, i) => {
        const y = 94 + i * 48;
        return (
          <g key={label}>
            <rect x="8" y={y} width="244" height="38" rx="8" className={CARD} />
            <text x="22" y={y + 24} fontSize="14" fontWeight="600" className={T}>
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function CadenceGrid() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const rows: { label: string; dots: number[] }[] = [
    { label: "The desk", dots: [0, 1, 2, 3, 4] },
    { label: "Report", dots: [0] },
    { label: "Review", dots: [0] },
  ];
  const cadence = ["daily", "weekly", "monthly"];
  return (
    <svg viewBox="0 0 360 200" className={SVG}>
      {days.map((d, i) => (
        <text
          key={i}
          x={116 + i * 34}
          y="24"
          fontSize="11"
          textAnchor="middle"
          className={TSUB}
        >
          {d}
        </text>
      ))}
      {rows.map((r, ri) => {
        const y = 58 + ri * 46;
        return (
          <g key={r.label}>
            <text x="8" y={y + 4} fontSize="12" fontWeight="600" className={T}>
              {r.label}
            </text>
            <text x="8" y={y + 19} fontSize="10" className={TSUB}>
              {cadence[ri]}
            </text>
            <line x1="104" y1={y} x2="352" y2={y} className="stroke-line" />
            {r.dots.map((d) => (
              <circle key={d} cx={116 + d * 34} cy={y} r="5" className="fill-ink" />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function SuspensionPath() {
  const chain = [
    "Policy change",
    "Weeks unnoticed",
    "Listing deactivated",
    "Account review",
  ];
  return (
    <svg viewBox="0 0 360 312" className={SVG}>
      <Arrowhead id="md-sweep" />
      {chain.map((label, i) => {
        const y = 10 + i * 62;
        const first = i === 0;
        return (
          <g key={label}>
            <rect
              x="8"
              y={y}
              width="210"
              height="40"
              rx="8"
              className={CARD}
              strokeDasharray={first ? undefined : "4 4"}
            />
            <text
              x="22"
              y={y + 25}
              fontSize="13.5"
              fontWeight={first ? "600" : "500"}
              className={first ? T : "fill-body"}
            >
              {label}
            </text>
            <line
              x1="113"
              y1={y + 40}
              x2="113"
              y2={y + 62}
              className={first ? "stroke-ink" : "stroke-line"}
              strokeWidth="1.5"
              strokeDasharray={first ? undefined : "4 4"}
            />
          </g>
        );
      })}
      {/* Terminal box drawn light with a crit rule — SVG rect grounds
          are invisible to ancestor-compositing contrast tools, so text
          never sits on a sibling-painted dark ground here. */}
      <rect x="8" y="258" width="210" height="40" rx="8" className="fill-white stroke-crit" strokeWidth="2" />
      <rect x="22" y="272" width="12" height="12" className="fill-crit" />
      <text x="44" y="283" fontSize="13.5" fontWeight="600" className={T}>
        Suspension
      </text>
      <rect x="248" y="36" width="104" height="48" rx="8" className={CARD_STRONG} strokeWidth="2" />
      <circle cx="264" cy="54" r="4" className="fill-ok" />
      <text x="274" y="58" fontSize="12" fontWeight="600" className={T}>
        Daily sweep
      </text>
      <text x="262" y="74" fontSize="10" className={TSUB}>
        caught here
      </text>
      <line
        x1="248"
        y1="60"
        x2="122"
        y2="60"
        className="stroke-ink"
        strokeWidth="1.5"
        markerEnd="url(#md-sweep)"
      />
    </svg>
  );
}

function ReactiveOperated() {
  return (
    <svg viewBox="0 0 360 190" className={SVG}>
      <text x="8" y="48" fontSize="12" fontWeight="600" className={T}>
        A retainer
      </text>
      <line x1="8" y1="64" x2="352" y2="64" className="stroke-line" />
      {[120, 300].map((x) => (
        <rect key={x} x={x - 4} y="58" width="9" height="9" className="fill-ink" />
      ))}
      <text x="8" y="86" fontSize="10" className={TSUB}>
        acts when asked
      </text>
      <text x="8" y="118" fontSize="12" fontWeight="600" className={T}>
        An operation
      </text>
      <line x1="8" y1="134" x2="352" y2="134" className="stroke-line" />
      {Array.from({ length: 14 }, (_, i) => (
        <circle key={i} cx={20 + i * 24} cy="134" r="4" className="fill-ink" />
      ))}
      <text x="8" y="156" fontSize="10" className={TSUB}>
        notices on cadence
      </text>
      <text x="180" y="182" fontSize="10" textAnchor="middle" className={TSUB}>
        the same 30 days
      </text>
    </svg>
  );
}

export default function MechanismDiagram({ data }: { data: ServicePageData }) {
  switch (data.diagram.kind) {
    case "buy-decision":
      return <BuyDecision />;
    case "verdict-axes":
      return <VerdictAxes data={data} />;
    case "six-layers":
      return <SixLayers />;
    case "scope-boundary":
      return <ScopeBoundary />;
    case "five-questions":
      return <FiveQuestions />;
    case "two-rulebooks":
      return <TwoRulebooks />;
    case "ads-stack":
      return <AdsStack />;
    case "cadence-grid":
      return <CadenceGrid />;
    case "suspension-path":
      return <SuspensionPath />;
    case "reactive-operated":
      return <ReactiveOperated />;
  }
}

/* ------------- archetype hero figures (PROMPT_18) ------------------
   One per archetype, no two alike (acceptance 3): a loop, a gated
   funnel, a fork, a week, a bar-and-lever. Compact — they sit under
   the at-a-glance panel and teach the page's shape before a word is
   read. Same rules as every diagram: real <text>, ink structure,
   engine colour only as a filled mark. */

function HeroLoop() {
  const stops: [number, number, string][] = [
    [180, 22, "Deploy capital"],
    [296, 90, "Stock inbound"],
    [180, 158, "Sell"],
    [64, 90, "Settle · read"],
  ];
  return (
    <svg viewBox="0 0 360 180" className={SVG} role="img" aria-label="The wholesale capital cycle: deploy capital, stock inbound, sell, settle and read, repeat">
      <Arrowhead id="hl-a" />
      <ellipse cx="180" cy="90" rx="130" ry="62" fill="none" className="stroke-ink" strokeWidth="1.5" markerEnd="url(#hl-a)" />
      {stops.map(([cx, cy, label]) => (
        <g key={label}>
          <rect x={cx - 54} y={cy - 13} width="108" height="26" rx="6" className="fill-white stroke-line" />
          <text x={cx} y={cy + 4} fontSize="11.5" fontWeight="600" textAnchor="middle" className="fill-ink">
            {label}
          </text>
        </g>
      ))}
      <text x="180" y="94" fontSize="10" textAnchor="middle" className="fill-body font-mono">
        the loop, weekly
      </text>
    </svg>
  );
}

function HeroGates() {
  const gates = ["Idea", "Verdict", "Sample", "Comply", "Launch"];
  return (
    <svg viewBox="0 0 360 120" className={SVG} role="img" aria-label="A gated project: idea to launch through verdict, sample and compliance gates — most candidates stop at the verdict">
      <line x1="16" y1="48" x2="344" y2="48" className="stroke-line" strokeWidth="1.5" />
      {gates.map((g, i) => {
        const cx = 32 + i * 74;
        return (
          <g key={g}>
            <circle cx={cx} cy="48" r={i === gates.length - 1 ? 9 : 7} className={i === gates.length - 1 ? "fill-ink" : "fill-white stroke-ink"} strokeWidth="1.5" />
            <text x={cx} y="78" fontSize="10.5" fontWeight="600" textAnchor="middle" className="fill-ink">
              {g}
            </text>
          </g>
        );
      })}
      <line x1="106" y1="41" x2="106" y2="20" className="stroke-crit" strokeWidth="1.5" />
      <text x="106" y="14" fontSize="9.5" textAnchor="middle" className="fill-ink font-mono">
        most stop here
      </text>
      <text x="180" y="108" fontSize="10" textAnchor="middle" className="fill-body font-mono">
        a stop at any gate ends it
      </text>
    </svg>
  );
}

function HeroFork() {
  return (
    <svg viewBox="0 0 360 140" className={SVG} role="img" aria-label="Build then run: one build, then either an operation we keep running or a clean handover">
      <rect x="8" y="52" width="110" height="34" rx="7" className="fill-white stroke-ink" strokeWidth="1.5" />
      <text x="63" y="73" fontSize="12.5" fontWeight="600" textAnchor="middle" className="fill-ink">
        The build
      </text>
      <line x1="118" y1="62" x2="216" y2="30" className="stroke-ink" strokeWidth="1.5" />
      <line x1="118" y1="76" x2="216" y2="108" className="stroke-ink" strokeWidth="1.5" />
      <rect x="216" y="14" width="136" height="32" rx="7" className="fill-white stroke-line" />
      <text x="284" y="34" fontSize="11.5" fontWeight="600" textAnchor="middle" className="fill-ink">
        Run as an operation
      </text>
      <rect x="216" y="92" width="136" height="32" rx="7" className="fill-white stroke-line" strokeDasharray="4 4" />
      <text x="284" y="112" fontSize="11.5" fontWeight="600" textAnchor="middle" className="fill-ink">
        Clean handover
      </text>
      <text x="180" y="76" fontSize="10" textAnchor="middle" className="fill-body font-mono">
        two ways in
      </text>
    </svg>
  );
}

function HeroWeek() {
  const days = ["M", "T", "W", "T", "F"];
  return (
    <svg viewBox="0 0 360 120" className={SVG} role="img" aria-label="A cadence desk: the same work on the same days, every week">
      {days.map((d, i) => {
        const x = 24 + i * 66;
        return (
          <g key={i}>
            <rect x={x} y="16" width="54" height="64" rx="7" className="fill-white stroke-line" />
            <text x={x + 27} y="36" fontSize="11" textAnchor="middle" className="fill-body font-mono">
              {d}
            </text>
            <circle cx={x + 27} cy="56" r="5" className="fill-ink" />
          </g>
        );
      })}
      <text x="180" y="106" fontSize="10" textAnchor="middle" className="fill-body font-mono">
        the same work on the same days
      </text>
    </svg>
  );
}

function HeroConstraint() {
  const bars: [string, number][] = [
    ["Demand", 62],
    ["Convert", 46],
    ["Cover", 22],
    ["Margin", 50],
    ["Capacity", 40],
  ];
  return (
    <svg viewBox="0 0 360 140" className={SVG} role="img" aria-label="Constraint and lever: five constraints, the shortest one binds, and the work releases it">
      {bars.map(([label, h], i) => {
        const x = 26 + i * 66;
        const bind = i === 2;
        return (
          <g key={label}>
            <rect x={x} y={92 - h} width="40" height={h} rx="4" className={bind ? "fill-crit" : "fill-ink"} />
            <text x={x + 20} y="110" fontSize="10" textAnchor="middle" className="fill-ink" fontWeight={bind ? 700 : 400}>
              {label}
            </text>
          </g>
        );
      })}
      <line x1="26" y1="92" x2="352" y2="92" className="stroke-line" strokeWidth="1.5" />
      <text x="180" y="130" fontSize="10" textAnchor="middle" className="fill-body font-mono">
        the shortest bar binds — the work releases it
      </text>
    </svg>
  );
}

export function HeroFigure({ layout }: { layout: ServiceLayout }) {
  switch (layout) {
    case "trading-loop":
      return <HeroLoop />;
    case "gated-project":
      return <HeroGates />;
    case "build-run":
      return <HeroFork />;
    case "cadence-desk":
      return <HeroWeek />;
    case "constraint-lever":
      return <HeroConstraint />;
  }
}

/** Archetype A's #days centrepiece — the capital cycle drawn full
 *  size, replacing the linear timeline as the section's lead visual. */
export function CapitalCycleDiagram() {
  const stops: [number, number, string, string][] = [
    [180, 26, "Deploy capital", "your approval first"],
    [292, 105, "Stock inbound", "landed, prepped"],
    [180, 184, "Sell", "priced to the buy box"],
    [68, 105, "Settle & read", "sell-through, weekly"],
  ];
  return (
    <svg viewBox="0 0 360 210" className={SVG} role="img" aria-label="The capital cycle: deploy capital on your approval, stock inbound, sell against the buy box, settle and read sell-through, then redeploy">
      <Arrowhead id="cc-a" />
      <ellipse cx="180" cy="105" rx="136" ry="76" fill="none" className="stroke-ink" strokeWidth="1.5" markerEnd="url(#cc-a)" />
      {stops.map(([cx, cy, label, sub]) => (
        <g key={label}>
          <rect x={cx - 62} y={cy - 20} width="124" height="40" rx="7" className="fill-white stroke-line" />
          <text x={cx} y={cy - 2} fontSize="12.5" fontWeight="600" textAnchor="middle" className="fill-ink">
            {label}
          </text>
          <text x={cx} y={cy + 13} fontSize="9.5" textAnchor="middle" className="fill-body font-mono">
            {sub}
          </text>
        </g>
      ))}
      <text x="180" y="109" fontSize="10" textAnchor="middle" className="fill-body font-mono">
        weekly
      </text>
    </svg>
  );
}

/** Homepage — the margin-calculation diagram for the pricing strip.
 *  Mirrors the worked example on /how-we-work#fees, without figures. */
export function MarginCalcDiagram() {
  const rows: [string, string][] = [
    ["Net settlement total", "after marketplace fees and refunds"],
    ["− Cost of goods sold", "landed cost of the units that sold"],
    ["− Attributable ad spend", "the advertising behind those units"],
    ["= Realised margin", "the share is calculated on this, at the agreed rate"],
  ];
  return (
    <svg viewBox="0 0 360 278" className={SVG}>
      {rows.map(([label, sub], i) => {
        const y = 10 + i * 68;
        const last = i === rows.length - 1;
        return (
          <g key={label}>
            <rect
              x="24"
              y={y}
              width="312"
              height="52"
              rx="8"
              className={last ? CARD_STRONG : CARD}
              strokeWidth={last ? 2 : 1}
            />
            <text x="40" y={y + 22} fontSize="14" fontWeight="600" className={T}>
              {label}
            </text>
            <text x="40" y={y + 40} fontSize="10" className={TSUB}>
              {sub}
            </text>
            {!last && (
              <line
                x1="180"
                y1={y + 52}
                x2="180"
                y2={y + 68}
                className="stroke-ink"
                strokeWidth="1.5"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

/** Hubs — the three-engine relationship with the current hub
 *  highlighted. The nodes ARE the hub-to-hub links. */
export function ThreeEngineDiagram({
  current,
}: {
  current: "build" | "grow" | "operate";
}) {
  const nodes = [
    { key: "build", label: "Build", x: 8, band: "fill-build-band" },
    { key: "grow", label: "Grow", x: 128, band: "fill-grow-band" },
    { key: "operate", label: "Operate", x: 248, band: "fill-operate-band" },
  ] as const;
  return (
    <svg viewBox="0 0 360 140" className={SVG}>
      <Arrowhead id="ted-fwd" />
      {nodes.map((n) => {
        const cx = n.x + 52;
        const isCurrent = n.key === current;
        const box = (
          <>
            <rect
              x={n.x}
              y="20"
              width="104"
              height="52"
              rx="10"
              className={isCurrent ? `${n.band} stroke-ink` : CARD}
              strokeWidth={isCurrent ? 2 : 1}
            />
            <text
              x={cx}
              y="51"
              fontSize="15"
              fontWeight="700"
              textAnchor="middle"
              className={T}
              textDecoration={isCurrent ? undefined : "underline"}
            >
              {n.label}
            </text>
          </>
        );
        return isCurrent ? (
          <g key={n.key} aria-current="page">
            {box}
          </g>
        ) : (
          <a key={n.key} href={`/${n.key}`} aria-label={`${n.label} hub`}>
            {box}
          </a>
        );
      })}
      <line x1="112" y1="46" x2="126" y2="46" className="stroke-ink" strokeWidth="1.5" markerEnd="url(#ted-fwd)" />
      <line x1="232" y1="46" x2="246" y2="46" className="stroke-ink" strokeWidth="1.5" markerEnd="url(#ted-fwd)" />
      <path
        d="M300,72 L300,104 L60,104 L60,74"
        fill="none"
        className="stroke-ink"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        markerEnd="url(#ted-fwd)"
      />
      <text x="180" y="126" fontSize="10" textAnchor="middle" className={TSUB}>
        reporting feeds the next decision
      </text>
    </svg>
  );
}

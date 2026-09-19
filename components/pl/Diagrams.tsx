"use client";

import { Draw, Pop } from "./Motion";

/* Palette — mirrors pl.css; SVG attributes cannot read CSS variables
   in every renderer, so the hex values are repeated here. */
const INK = "#17151F";
const VIOLET = "#6947FF";
const LIME = "#B8F34A";
const CITRUS = "#FFC84A";
const AQUA = "#45D8C0";
const CORAL = "#FF735F";
const SKY = "#73B7FF";
const LINE = "#E6E4EC";
const MUTED = "#5E5A6E";
const MONO = { fontFamily: "var(--pl-mono)", fontWeight: 500 } as const;

/* ---------------------------------------------------------------
   Four ways in converge into one discipline (below the four rows).
   --------------------------------------------------------------- */
export function Converge() {
  const cols = [CITRUS, CORAL, AQUA, SKY];
  return (
    <svg viewBox="0 0 1216 110" className="pl-converge" aria-hidden="true">
      {cols.map((c, i) => (
        <Draw key={c} d={`M0 ${8 + i * 30} C 300 ${8 + i * 30}, 360 55, 640 55`} stroke={c} width={3} delay={i * 0.08} />
      ))}
      <Draw d="M640 55 H 1216" stroke={INK} width={3} delay={0.5} duration={0.7} />
      <Pop delay={0.5}><circle cx="640" cy="55" r="7" fill={INK} /></Pop>
    </svg>
  );
}

/* ---------------------------------------------------------------
   Seven gates. Candidates enter from the left; most stop at a gate
   (coral); one clears all seven (violet line, lime mark). Labels are
   abbreviations of the seven tests in the body copy.
   --------------------------------------------------------------- */
const GATES = ["Category", "Barrier", "Demand", "Left open", "Returns", "Advantage", "Arithmetic"];
const GATE_X = [60, 150, 240, 330, 420, 510, 600];
// [y, stops at gate index | null = clears]
const CANDIDATES: [number, number | null][] = [
  [60, 1], [95, 4], [130, 0], [165, null], [200, 6], [235, 2], [270, 5],
];

export function Gates() {
  return (
    <svg
      viewBox="0 0 680 390"
      className="pl-gates"
      data-feature="seven-gates"
      role="img"
      aria-label="Seven candidates enter seven tests; six stop at a test, one clears all seven"
    >
      <g fill={LINE}>
        {GATE_X.map((x) => <rect key={x} x={x - 3} y="30" width="6" height="280" rx="3" />)}
      </g>
      {CANDIDATES.map(([y, stop], i) => {
        const clears = stop === null;
        const endX = clears ? 660 : GATE_X[stop];
        const delay = 0.1 + i * 0.15;
        return (
          <g key={y}>
            <Draw d={`M0 ${y} H ${endX}`} stroke={clears ? VIOLET : INK} width={clears ? 3 : 2} delay={delay} duration={clears ? 1.4 : 0.9} />
            <Pop delay={delay + (clears ? 1.3 : 0.85)}>
              {clears
                ? <circle cx={endX} cy={y} r="10" fill={LIME} stroke={INK} strokeWidth="2" />
                : <circle cx={endX} cy={y} r="7" fill={CORAL} />}
            </Pop>
          </g>
        );
      })}
      <g fontSize="10" fill={MUTED} textAnchor="middle" letterSpacing="1" style={MONO}>
        {GATES.map((g, i) => (
          <g key={g}>
            <text x={GATE_X[i]} y="340">{String(i + 1).padStart(2, "0")}</text>
            <text x={GATE_X[i]} y="356">{g.toUpperCase()}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------
   The eight-stop process line under a product. Identical under every
   product: same eight dots, same violet 08.
   --------------------------------------------------------------- */
function Spine({ x0, y, pitch, delay, labels, terminal }: {
  x0: number; y: number; pitch: number; delay: number; labels?: boolean; terminal?: boolean;
}) {
  const xs = Array.from({ length: 8 }, (_, i) => x0 + i * pitch);
  const r = Math.max(3, pitch * 0.25);
  const last = xs[7];
  return (
    <g>
      <Draw d={`M${xs[0]} ${y} H ${last}`} stroke={INK} width={2} delay={delay} duration={0.6} />
      {xs.slice(0, 7).map((cx) => <circle key={cx} cx={cx} cy={y} r={r} fill="#fff" stroke={INK} strokeWidth="2" />)}
      <Pop delay={delay + 0.5}><circle cx={last} cy={y} r={r + 1.5} fill={VIOLET} /></Pop>
      {labels ? (
        <g fontSize="10" letterSpacing="1" textAnchor="middle" style={MONO}>
          <text x={xs[0]} y={y + 20} fill={MUTED}>01</text>
          <text x={last} y={y + 20} fill={VIOLET}>08</text>
        </g>
      ) : null}
      {terminal ? (
        <Pop delay={delay + 0.6}>
          <path d={`M${last + r + 2} ${y} H ${last + 16}`} stroke={INK} strokeWidth="2" />
          <rect x={last + 16} y={y - 5} width="10" height="10" fill={INK} />
        </Pop>
      ) : null}
    </g>
  );
}

function Arc({ x1, x2, y, depth, delay }: { x1: number; x2: number; y: number; depth: number; delay: number }) {
  return (
    <g>
      <Draw d={`M${x1} ${y} C ${x1 + 14} ${y + depth}, ${x2 - 14} ${y + depth}, ${x2} ${y - 2}`} stroke={VIOLET} width={2.5} delay={delay} duration={0.45} />
      <Pop delay={delay + 0.4}>
        <path d={`M${x2 - 8} ${y + 6} L${x2} ${y - 3} L${x2 + 2} ${y + 8}`} fill="none" stroke={VIOLET} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </Pop>
    </g>
  );
}

/** One product: one spine, a terminal mark. */
export function OneSpine({ width }: { width: number }) {
  const pitch = 12;
  return (
    <svg viewBox={`0 0 ${width} 96`} className="pl-spines" aria-hidden="true">
      <Spine x0={width / 2 - 42} y={10} pitch={pitch} delay={0.1} labels terminal />
      <text x={width / 2} y="86" fontSize="11" letterSpacing="1.5" textAnchor="middle" fill={MUTED} style={MONO}>RUN ONCE</text>
    </svg>
  );
}

/** A range: n identical spines, each 08 arcing into the next 01, the
 *  last arc running off the edge. */
export function RangeSpines({ n, width, pitch = 12, depth = 40 }: { n: number; width: number; pitch?: number; depth?: number }) {
  const half = (pitch * 7) / 2;
  const cell = width / n;
  const centres = Array.from({ length: n }, (_, i) => cell * i + cell / 2);
  return (
    <svg viewBox={`0 0 ${width} 96`} className="pl-spines" aria-hidden="true">
      {centres.map((c, i) => (
        <g key={i}>
          <Spine x0={c - half} y={10} pitch={pitch} delay={0.1 + i * 0.7} labels={i === 0} />
          <Arc x1={c + half} x2={i < n - 1 ? centres[i + 1] - half : width - 2} y={10} depth={depth} delay={0.7 + i * 0.7} />
        </g>
      ))}
      <text x={width / 2} y="86" fontSize="11" letterSpacing="1.5" textAnchor="middle" fill={MUTED} style={MONO}>
        RUN AGAIN · EACH RUN DECIDES THE NEXT
      </text>
    </svg>
  );
}

/* ---------------------------------------------------------------
   The eight stages: the return from 08 to 01.
   --------------------------------------------------------------- */
export function StagesLoop() {
  return (
    <svg viewBox="0 0 1216 96" className="pl-loop" aria-hidden="true">
      <Draw d="M1140 0 V 58 Q 1140 70 1128 70 H 88 Q 76 70 76 58 V 22" stroke={VIOLET} width={3} duration={1.6} />
      <Pop delay={1.5}><path d="M66 32 L76 20 L86 32" fill="none" stroke={VIOLET} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></Pop>
      <circle cx="1140" cy="0" r="6" fill={VIOLET} />
    </svg>
  );
}

export function StagesRail() {
  return (
    <svg viewBox="0 0 28 700" preserveAspectRatio="none" className="pl-stages-rail" aria-hidden="true">
      <path d="M14 8 V 692" stroke={INK} strokeWidth="2" />
      <Draw d="M14 660 H 4 V 40 H 14" stroke={VIOLET} width={3} duration={1.6} />
      <Pop delay={1.5}><path d="M8 46 L14 38 L20 46" fill="none" stroke={VIOLET} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></Pop>
    </svg>
  );
}

/* ---------------------------------------------------------------
   Channels: one brand, four drops.
   --------------------------------------------------------------- */
export function ChannelsTop() {
  return (
    <svg viewBox="0 0 680 56" aria-hidden="true">
      <Draw d="M0 8 H 680" stroke={INK} width={2} />
      <circle cx="0" cy="8" r="6" fill={INK} />
      {[85, 255, 425, 595].map((x, i) => <Draw key={x} d={`M${x} 8 V 56`} stroke={INK} width={2} delay={0.5 + i * 0.12} duration={0.4} />)}
    </svg>
  );
}

export function ChannelsRail() {
  return (
    <svg viewBox="0 0 28 260" preserveAspectRatio="none" className="pl-chan-rail" aria-hidden="true">
      <circle cx="8" cy="8" r="6" fill={INK} />
      <Draw d="M8 8 V 236" stroke={INK} width={2} />
      {[40, 104, 168, 232].map((y, i) => <Draw key={y} d={`M8 ${y} H 28`} stroke={INK} width={2} delay={0.4 + i * 0.12} duration={0.3} />)}
    </svg>
  );
}

/* ---------------------------------------------------------------
   Timing: the path, shown. 01–06 is launch; 07 and 08 are the business.
   --------------------------------------------------------------- */
export function TimingPath() {
  const xs = [8, 134, 260, 386, 512, 640, 766, 892];
  return (
    <svg viewBox="0 0 900 118" className="pl-path" role="img" aria-label="Stages 01 to 06 lead to launch; stages 07 and 08 are the business">
      <Draw d="M8 40 H 640" stroke={INK} width={2.5} duration={1.1} />
      <Draw d="M640 40 H 892" stroke={VIOLET} width={2.5} delay={1.1} duration={0.5} />
      {xs.slice(0, 5).map((x) => <circle key={x} cx={x} cy="40" r="7" fill="#fff" stroke={INK} strokeWidth="2.5" />)}
      <Pop delay={1.05}><circle cx="640" cy="40" r="10" fill={LIME} stroke={INK} strokeWidth="2.5" /></Pop>
      <Pop delay={1.4}><circle cx="766" cy="40" r="7" fill={VIOLET} /></Pop>
      <Pop delay={1.6}><circle cx="892" cy="40" r="7" fill={VIOLET} /></Pop>
      <g fontSize="12" letterSpacing="1.2" textAnchor="middle" style={MONO}>
        {xs.map((x, i) => (
          <text key={x} x={x} y="16" fill={i > 5 ? VIOLET : INK}>{String(i + 1).padStart(2, "0")}</text>
        ))}
      </g>
      <path d="M8 68 V 80 H 640 V 68" fill="none" stroke={INK} strokeWidth="1.5" />
      <path d="M680 68 V 80 H 892 V 68" fill="none" stroke={VIOLET} strokeWidth="1.5" />
      <g fontSize="12" letterSpacing="1.2" textAnchor="middle" style={MONO}>
        <text x="324" y="106" fill={INK}>STAGE 01 → STAGE 06 IS LAUNCH</text>
        <text x="786" y="106" fill={VIOLET}>07 AND 08 ARE THE BUSINESS</text>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------
   End to end: two rails, one operation (desktop).
   --------------------------------------------------------------- */
const STEP = { fontFamily: "var(--pl-display)", fontWeight: 700, letterSpacing: "-0.3px" } as const;

export function Junction() {
  const sub = { fontSize: 13, fill: "#4A4756", textAnchor: "middle" as const };
  return (
    <svg viewBox="0 0 1216 330" className="pl-junction" role="img" aria-label="Two rails, build and take over, join at Operate and continue to Expand">
      <g fontSize="12" letterSpacing="1.2" style={MONO} fill={INK}>
        <text x="0" y="58">BUILD</text>
        <text x="0" y="248">TAKE OVER</text>
      </g>
      <g fontSize="13" fill="#4A4756">
        <text x="0" y="80">You bring the idea, the product</text><text x="0" y="98">or the market.</text>
        <text x="0" y="270">You bring a brand that</text><text x="0" y="288">already sells.</text>
      </g>
      <Draw d="M290 70 H 640 C 700 70, 700 160, 760 160" stroke={INK} width={2.5} duration={1.2} />
      <Draw d="M290 260 H 640 C 700 260, 700 160, 760 160" stroke={SKY} width={2.5} delay={0.2} duration={1.2} />
      <Draw d="M760 160 H 1150" stroke={VIOLET} width={3} delay={1.3} duration={0.8} />
      <Pop delay={2}><path d="M1140 150 L1152 160 L1140 170" fill="none" stroke={VIOLET} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></Pop>
      <g fill="#fff" stroke={INK} strokeWidth="2.5">
        {[300, 470, 640].map((x) => <circle key={x} cx={x} cy="70" r="8" />)}
      </g>
      <g fill="#fff" stroke={SKY} strokeWidth="2.5">
        {[300, 470, 640].map((x) => <circle key={x} cx={x} cy="260" r="8" />)}
      </g>
      <Pop delay={1.3}><circle cx="760" cy="160" r="11" fill={VIOLET} /></Pop>
      <Pop delay={1.7}><circle cx="960" cy="160" r="8" fill="#fff" stroke={VIOLET} strokeWidth="3" /></Pop>
      <g fontSize="19" fill={INK} textAnchor="middle" style={STEP}>
        <text x="300" y="46">Choose</text><text x="470" y="46">Build</text><text x="640" y="46">Launch</text>
        <text x="300" y="300">Diagnose</text><text x="470" y="300">Fix</text><text x="640" y="300">Relaunch</text>
        <text x="760" y="200" fill={VIOLET}>Operate</text><text x="960" y="200" fill={VIOLET}>Expand</text>
      </g>
      <g {...sub}>
        {([
          [300, 112, ["seven tests,", "a verdict"]],
          [470, 112, ["product, brand,", "supply"]],
          [640, 112, ["listing, stock,", "ads"]],
          [300, 224, ["catalog and", "economics read"]],
          [470, 224, ["what the numbers", "will not survive"]],
          [640, 224, ["content, stock,", "ads rebuilt"]],
          [760, 222, ["margin by product,", "monthly"]],
          [960, 222, ["the next product,", "the next channel"]],
        ] as [number, number, string[]][]).map(([x, y, lines]) => (
          <text key={`${x}-${y}`} x={x} y={y}>
            {lines.map((l, i) => <tspan key={l} x={x} dy={i === 0 ? 0 : 16}>{l}</tspan>)}
          </text>
        ))}
      </g>
      <text x="1164" y="164" fontSize="12" letterSpacing="1.2" fill={VIOLET} style={MONO}>NEXT</text>
    </svg>
  );
}

export function Merge() {
  return (
    <svg viewBox="0 0 350 64" className="pl-merge" aria-hidden="true">
      <Draw d="M1 0 C 1 40, 175 20, 175 60" stroke={INK} width={2.5} />
      <Draw d="M184 0 C 184 40, 175 20, 175 60" stroke={SKY} width={2.5} delay={0.15} />
      <Pop delay={0.8}><circle cx="175" cy="60" r="4" fill={VIOLET} /></Pop>
    </svg>
  );
}

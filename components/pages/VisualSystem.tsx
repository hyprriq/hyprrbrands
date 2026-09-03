import manifest from "@/lib/image-manifest.json";
import type {
  CostBarData,
  DataArtefactData,
  ObjectBand,
  ObjectImage,
} from "@/lib/service-pages";
import { TONE_DOT } from "@/lib/service-pages";
import type { ReactNode } from "react";

/**
 * PROMPT_21 — the visual system extracted from the owner's uploads.
 * Per VISUAL_EXTRACTION_PLAN, almost nothing here is a placed image:
 * data structures are rebuilt native, layout patterns are rebuilt as
 * components, and only cut-out product objects ship as photographs.
 *
 * §7.3 dressing is enforced here, not left to page code: every object
 * carries the Petrol-tinted contact shadow (drop-shadow follows the
 * alpha, one light direction site-wide), sits on a Bone or Petrol
 * band, and overlaps the band edge — that overlap is what makes it
 * read as placed in a composition rather than sitting in a box.
 */
const DIMS = manifest as Record<string, { w: number; h: number }>;
const WIDTHS = [640, 1280, 1920] as const;
/** §7.3.1 — one shadow, one light direction, everywhere. */
const CONTACT_SHADOW =
  "drop-shadow(0px 18px 24px rgba(10,78,92,0.35))";

/* ------------------- FloatingObject + SpecCard --------------------- */

export function FloatingObject({
  img,
  sizes,
  eager,
}: {
  img: ObjectImage;
  sizes: string;
  eager?: boolean;
}) {
  const dims = DIMS[img.src];
  if (!dims) return null;
  // Definite width on the wrapper (capped by the viewport): an
  // inline-block wrapper sized by a w-full child is circular and
  // collapses to 0 before the lazy image loads — which then never
  // intersects and never loads.
  const w = Math.min(img.maxW ?? 640, dims.w);
  return (
    <div className="relative max-w-full" style={{ width: `${w}px` }}>
      <img
        src={`${img.src}-1280.webp`}
        srcSet={WIDTHS.map((w) => `${img.src}-${w}.webp ${w}w`).join(", ")}
        sizes={sizes}
        alt={img.alt}
        width={dims.w}
        height={dims.h}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        className="w-full h-auto"
        style={{ filter: CONTACT_SHADOW }}
      />
      {img.specCard && (
        <div className="absolute bottom-[6%] right-[-4%] bg-white border border-line rounded-md px-4 py-2.5 grid gap-0.5 shadow-[0_10px_26px_-16px_rgba(23,23,26,.5)] max-w-[220px]">
          <span className="font-mono type-label text-label uppercase">
            {img.specCard.k}
          </span>
          <b className="text-ink type-meta">{img.specCard.v}</b>
        </div>
      )}
    </div>
  );
}

/** A band of floated objects — never on White (§0). Objects overlap
 *  the band's top edge by ~10% via negative margin. */
export function ObjectBandSection({ band }: { band: ObjectBand }) {
  const built = band.objects.filter((o) => DIMS[o.src]);
  if (built.length === 0) return null;
  const field = band.ground === "field";
  return (
    <section
      aria-label="Product objects"
      className={field ? "bg-field" : "bg-bone"}
    >
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pb-[clamp(32px,4vw,52px)]">
        <div className="flex flex-wrap items-end justify-center gap-x-[clamp(24px,4vw,56px)] gap-y-6 -mt-[clamp(18px,3vw,44px)]">
          {built.map((o) => (
            <FloatingObject
              key={o.src}
              img={o}
              sizes={
                built.length > 1
                  ? "(min-width: 900px) 28vw, 70vw"
                  : "(min-width: 900px) 620px, 88vw"
              }
            />
          ))}
        </div>
        {(band.caption || band.note) && (
          <p
            className={`type-meta mt-5 mb-0 max-w-[62ch] ${
              field ? "text-on-field-body" : "text-body"
            }`}
          >
            {band.caption}
            {band.note && (
              <span
                className={`font-mono type-label normal-case tracking-normal ${
                  field ? "text-on-field-mute" : "text-label"
                }`}
              >
                {" "}
                {band.note}
              </span>
            )}
          </p>
        )}
      </div>
    </section>
  );
}

/* --------------------------- DataArtefact -------------------------- */

/** §2 — the strongest material in the upload, rebuilt as a real HTML
 *  table: selectable, crawlable, crisp at every size, sticky first
 *  column under 900px. Blank Order cells are the argument. */
export function DataArtefact({ data }: { data: DataArtefactData }) {
  const field = data.ground === "field";
  return (
    <figure data-worked-example className="m-0 grid gap-3">
      <div
        className={`rounded-md overflow-x-auto border ${
          field ? "border-line-on-field" : "border-line"
        } bg-white`}
      >
        <table className="w-full min-w-[860px] border-collapse type-meta">
          <caption className="text-left px-5 py-3.5 border-b border-line font-mono type-label text-label uppercase">
            {data.title}
          </caption>
          <thead>
            <tr className="border-b border-line bg-bone/50">
              <th className="sticky left-0 bg-bone text-left px-5 py-3 font-mono type-label text-label uppercase min-w-[190px]">
                Product
              </th>
              {data.cols.map((c) => (
                <th
                  key={c}
                  className="text-right px-4 py-3 font-mono type-label text-label uppercase whitespace-nowrap"
                >
                  {c}
                </th>
              ))}
              <th className="text-right px-5 py-3 font-mono type-label text-ink uppercase whitespace-nowrap">
                {data.orderLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((r) => {
              const refused = !r.order || r.tone === "crit";
              return (
                <tr
                  key={r.name}
                  className={`border-b border-line/60 last:border-b-0 align-top ${
                    refused ? "bg-crit/5" : ""
                  }`}
                >
                  <th
                    className={`sticky left-0 text-left px-5 py-3.5 font-semibold ${
                      refused ? "bg-[#faf3f1] text-body" : "bg-white text-ink"
                    }`}
                  >
                    <span className="flex gap-2.5 items-start">
                      <span
                        className={`flex-none w-2 h-2 rounded-full mt-1.5 ${
                          refused ? TONE_DOT.crit : TONE_DOT.ok
                        }`}
                      />
                      <span>
                        {r.name}
                        {r.note && (
                          <span className="block font-mono type-label text-crit normal-case tracking-normal font-normal mt-1 whitespace-normal min-w-[160px]">
                            {r.note}
                          </span>
                        )}
                      </span>
                    </span>
                  </th>
                  {r.cells.map((cell, i) => (
                    <td
                      key={i}
                      className={`text-right px-4 py-3.5 font-mono whitespace-nowrap ${
                        refused ? "text-body" : "text-ink"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                  <td className="text-right px-5 py-3.5 whitespace-nowrap">
                    {r.order ? (
                      <b className="font-mono text-ink">{r.order}</b>
                    ) : (
                      <span className="font-mono type-label text-crit uppercase">
                        {data.refusedLabel ?? "not bought"}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <figcaption
        className={`font-mono type-label normal-case tracking-normal ${
          field ? "text-on-field-mute" : "text-label"
        }`}
      >
        {data.footnote}
      </figcaption>
    </figure>
  );
}

/* ----------------------------- CostBar ----------------------------- */

/** §3.1 — one horizontal bar, segmented by where the money goes.
 *  Cost segments neutral, the retained segment in Lime. */
export function CostBar({ data }: { data: CostBarData }) {
  return (
    <figure data-worked-example className="m-0 grid gap-3 max-w-[860px]">
      <div className="flex justify-between items-baseline gap-4 flex-wrap">
        <span className="font-mono type-label text-label uppercase">
          {data.title}
        </span>
        <span className="font-mono type-meta text-ink font-semibold">
          {data.total}
        </span>
      </div>
      <div className="flex rounded-md overflow-hidden border border-line min-h-[52px]">
        {data.segments.map((s, i) => (
          <div
            key={s.label}
            className={`grid content-center px-2 py-2.5 min-w-0 ${
              s.retained
                ? "bg-grow"
                : i % 2 === 0
                  ? "bg-ink/[.08]"
                  : "bg-ink/[.16]"
            }`}
            style={{ flexGrow: Math.max(s.share, 6), flexBasis: 0 }}
          >
            <span className="font-mono type-label text-ink text-center whitespace-nowrap overflow-hidden text-ellipsis">
              {s.value}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-x-5 gap-y-1.5 flex-wrap">
        {data.segments.map((s) => (
          <span
            key={s.label}
            className="flex gap-2 items-center font-mono type-label text-body normal-case tracking-normal"
          >
            <span
              className={`w-2.5 h-2.5 rounded-[2px] ${
                s.retained ? "bg-grow border border-ink/30" : "bg-ink/20"
              }`}
            />
            {s.label} · {s.value}
          </span>
        ))}
      </div>
      <figcaption className="font-mono type-label text-label normal-case tracking-normal">
        {data.footnote}
      </figcaption>
    </figure>
  );
}

/* ----------------------------- StatRow ----------------------------- */

export function StatRow({
  title,
  note,
  stats,
}: {
  title: string;
  note?: string;
  stats: { k: string; v: string; sub: string }[];
}) {
  // A worked-example figure: stat figures are illustrative and the
  // note says so, which is what the copy gate checks for.
  return (
    <figure data-worked-example className="m-0 grid gap-3">
      <span className="font-mono type-label text-label uppercase">{title}</span>
      <div className="grid grid-cols-2 min-[900px]:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.k}
            className="border border-line rounded-md bg-white px-5 py-4 grid gap-1 content-start"
          >
            <span className="font-mono type-label text-label uppercase">
              {s.k}
            </span>
            <b className="font-mono type-h3 text-ink">{s.v}</b>
            <span className="type-meta text-body">{s.sub}</span>
          </div>
        ))}
      </div>
      {note && (
        <figcaption className="font-mono type-label text-label normal-case tracking-normal m-0">
          {note}
        </figcaption>
      )}
    </figure>
  );
}

/* ------------------------------ Panel3 ----------------------------- */

export function Panel3({
  title,
  panels,
}: {
  title: string;
  panels: { kicker: string; items: string[] }[];
}) {
  return (
    <div className="grid gap-3">
      <span className="font-mono type-label text-label uppercase">{title}</span>
      <div className="grid grid-cols-1 min-[720px]:grid-cols-3 gap-3">
        {panels.map((p) => (
          <div
            key={p.kicker}
            className="border border-line rounded-md bg-white px-5 py-4 grid gap-2 content-start"
          >
            <span className="font-mono type-label text-ink uppercase">
              {p.kicker}
            </span>
            {p.items.map((it) => (
              <span key={it} className="type-meta text-body flex gap-2">
                <span className="flex-none w-1.5 h-1.5 rounded-full bg-ink mt-2" />
                {it}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- BrowserFrame -------------------------- */

/** §4 — window chrome that makes a screenshot read as a real page.
 *  Built and ready; it lights up when the first capture that clears
 *  the brand/face/claims rules lands (a blurred Seller Central or
 *  Shopify admin view). The label bar is OUR text, never a URL from
 *  a source file. */
export function BrowserFrame({
  label,
  children,
  fade,
}: {
  label: string;
  children: ReactNode;
  fade?: boolean;
}) {
  return (
    <div className="rounded-lg border border-line bg-white overflow-hidden shadow-[0_24px_60px_-40px_rgba(23,23,26,.5)]">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-line bg-bone/60">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-crit/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-warn/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-ok/70" />
        </span>
        <span className="flex-1 bg-white border border-line rounded-sm px-3 py-1 font-mono type-label text-label normal-case tracking-normal overflow-hidden whitespace-nowrap text-ellipsis">
          {label}
        </span>
      </div>
      <div className="relative">
        {children}
        {fade && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"
          />
        )}
      </div>
    </div>
  );
}

/* --------------------------- AnnotatedCrop ------------------------- */

/** §4 — the corner chip that turns a screenshot into an explanation. */
export function AnnotatedCrop({
  chip,
  children,
}: {
  chip: string;
  children: ReactNode;
}) {
  return (
    <div className="relative rounded-md border border-line overflow-hidden">
      {children}
      <span className="absolute bottom-3 left-3 bg-ink text-white font-mono type-label uppercase px-3 py-1.5 rounded-sm">
        {chip}
      </span>
    </div>
  );
}

/* ----------------------- Dimension drawing (§3.4) ------------------ */

/** The stone mat's technical drawing, rebuilt as inline SVG with real
 *  <text> from the PDF's own dimension pages (24in × 16in, panels
 *  6/12/6, living-hinge webs). Reads as engineering, not marketing. */
export function DimensionDrawing() {
  const T = "fill-ink";
  const M = "fill-body font-mono";
  return (
    <svg
      viewBox="0 0 360 260"
      className="w-full max-w-[460px] h-auto"
      role="img"
      aria-label="Technical drawing of the three-panel stone bath mat: 24 inches wide by 16 inches deep, panels of 6, 12 and 6 inches joined by living hinges"
    >
      <defs>
        <marker id="dd-a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 z" className="fill-ink" />
        </marker>
      </defs>
      {/* mat outline: 24in wide -> 288px, 16in tall -> 192px */}
      <rect x="36" y="40" width="288" height="164" rx="10" className="fill-white stroke-ink" strokeWidth="1.8" />
      {/* panel splits at 6in and 18in */}
      <line x1="108" y1="44" x2="108" y2="200" className="stroke-ink" strokeWidth="1.2" />
      <line x1="252" y1="44" x2="252" y2="200" className="stroke-ink" strokeWidth="1.2" />
      {/* width dimension */}
      <line x1="36" y1="24" x2="324" y2="24" className="stroke-ink" strokeWidth="1" markerStart="url(#dd-a)" markerEnd="url(#dd-a)" />
      <rect x="163" y="14" width="36" height="18" className="fill-white" />
      <text x="181" y="27" fontSize="11" textAnchor="middle" className={`${T} font-mono`}>24 in</text>
      {/* height dimension */}
      <line x1="340" y1="40" x2="340" y2="204" className="stroke-ink" strokeWidth="1" markerStart="url(#dd-a)" markerEnd="url(#dd-a)" />
      <rect x="326" y="112" width="30" height="16" className="fill-white" />
      <text x="341" y="124" fontSize="11" textAnchor="middle" className={`${T} font-mono`}>16 in</text>
      {/* panel widths */}
      {[
        [36, 108, "6 in"],
        [108, 252, "12 in"],
        [252, 324, "6 in"],
      ].map(([a, b, label]) => (
        <g key={label as string}>
          <line x1={a as number} y1="222" x2={b as number} y2="222" className="stroke-ink" strokeWidth="1" markerStart="url(#dd-a)" markerEnd="url(#dd-a)" />
          <text x={((a as number) + (b as number)) / 2} y="240" fontSize="10" textAnchor="middle" className={M}>
            {label}
          </text>
        </g>
      ))}
      {/* hinge callouts */}
      <line x1="108" y1="60" x2="70" y2="60" className="stroke-line" strokeWidth="1" />
      <text x="66" y="63" fontSize="9" textAnchor="end" className={M}>living hinge</text>
      <line x1="252" y1="60" x2="290" y2="60" className="stroke-line" strokeWidth="1" />
      <text x="294" y="63" fontSize="9" className={M}>living hinge</text>
      <text x="180" y="128" fontSize="9" textAnchor="middle" className={M}>support ribs · cross-brace grid</text>
    </svg>
  );
}

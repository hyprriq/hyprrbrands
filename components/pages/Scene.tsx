import manifest from "@/lib/image-manifest.json";
import type { ReactNode } from "react";

/**
 * PROMPT_21 (rewritten) §1–§2 — the scene system's container layer.
 *
 * Three layers per visual, and the model never writes a word:
 *   Layer 3 · BAND    CSS ground (petrol / bone / accent), from props.
 *   Layer 2 · PANELS  DOM — real text, translucent cards, connectors.
 *   Layer 1 · SCENE   the generated image. Decorative; short alt with
 *                     NO figures in it (check-images enforces this via
 *                     the data-scene attribute).
 *
 * Built empty on purpose: nothing here is blocked on the images
 * existing. A scene whose renditions have not been through the build
 * step renders the band and the panels alone — which is also the
 * image-blocked fallback the acceptance demands: the hero must still
 * read as a designed block with no image at all.
 *
 * Panels sit against the scene's right third on desktop (every prompt
 * reserves that negative space); on mobile the scene crops to its
 * left two-thirds and panels stack beneath. Panels never float or
 * parallax — static placement satisfies prefers-reduced-motion by
 * construction.
 */
const DIMS = manifest as Record<string, { w: number; h: number }>;
const WIDTHS = [640, 1280, 1920] as const;

export type SceneBand = "petrol" | "bone" | "build" | "grow" | "operate";
export type SceneArchetype = "operation" | "working" | "product" | "object";

const BAND_CLASS: Record<SceneBand, string> = {
  petrol: "bg-field",
  bone: "bg-bone",
  build: "bg-build-band",
  grow: "bg-grow-band",
  operate: "bg-operate-band",
};

export interface ScenePanelSpec {
  kicker: string;
  value: string;
  context?: string;
  anchor?: "tl" | "tr" | "bl" | "br";
}

/** §2 — the overlay primitive: translucent card over the scene. On a
 *  dark band it blurs the render behind it; `solid` is the fallback
 *  for panels that would sit over a light region of a scene, so the
 *  4.5:1 measurement against the SCENE (not the band) always has a
 *  passing configuration available. */
export function Panel({
  kicker,
  value,
  context,
  onDark = true,
  solid = false,
}: {
  kicker: string;
  value: string;
  context?: string;
  onDark?: boolean;
  solid?: boolean;
}) {
  const ground = solid
    ? "bg-white border-line"
    : onDark
      ? "bg-white/10 backdrop-blur-[12px] border-line-on-field"
      : "bg-white/70 backdrop-blur-[12px] border-line";
  const text = solid || !onDark ? "text-ink" : "text-white";
  const mute =
    solid || !onDark ? "text-label" : "text-on-field-mute";
  const body = solid || !onDark ? "text-body" : "text-on-field-body";
  return (
    <div
      className={`border rounded-md px-5 py-4 grid gap-1 content-start min-w-[170px] max-w-[260px] ${ground}`}
    >
      <span className={`font-mono type-label uppercase ${mute}`}>{kicker}</span>
      <b className={`font-mono type-h3 ${text}`}>{value}</b>
      {context && <span className={`type-meta ${body}`}>{context}</span>}
    </div>
  );
}

export default function Scene({
  src,
  alt,
  archetype,
  band,
  overflow,
  panels,
  children,
}: {
  /** Base path, no width suffix — the build step's convention. */
  src: string;
  /** Short and honest; decorative. Never contains a figure. */
  alt: string;
  archetype: SceneArchetype;
  band: SceneBand;
  /** Scene crosses the band edge (default true for "object"). */
  overflow?: boolean;
  panels?: ScenePanelSpec[];
  children?: ReactNode;
}) {
  const dims = DIMS[src];
  const dark = band === "petrol";
  const spill = overflow ?? archetype === "object";
  return (
    <section
      aria-label="Scene"
      data-scene-band={band}
      className={`${BAND_CLASS[band]} ${dark ? "text-white" : ""} relative`}
    >
      <div
        className={`mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(28px,4vw,48px)] grid min-[900px]:grid-cols-[1fr_minmax(240px,32%)] gap-x-8 gap-y-6 items-center ${
          spill ? "-mt-[clamp(16px,2.5vw,36px)]" : ""
        }`}
      >
        <div className={`relative min-w-0 ${spill ? "min-[900px]:-mb-[clamp(16px,2.5vw,36px)]" : ""}`}>
          {dims ? (
            <img
              data-scene
              src={`${src}-1280.webp`}
              srcSet={WIDTHS.map((w) => `${src}-${w}.webp ${w}w`).join(", ")}
              sizes="(min-width: 900px) 62vw, 100vw"
              alt={alt}
              width={dims.w}
              height={dims.h}
              loading={archetype === "object" ? "lazy" : "eager"}
              fetchPriority={archetype === "object" ? undefined : "high"}
              className="w-full h-auto rounded-lg min-[900px]:[clip-path:none] max-[899px]:object-cover max-[899px]:object-left"
            />
          ) : (
            // No scene yet: the band still composes as a designed
            // block — a quiet plane where the render will land.
            <div
              aria-hidden="true"
              className={`rounded-lg min-h-[180px] min-[900px]:min-h-[240px] border ${
                dark ? "border-line-on-field bg-field-raised/60" : "border-line bg-white/50"
              }`}
            />
          )}
        </div>
        <div className="grid gap-3 content-center justify-items-start min-[900px]:justify-items-end">
          {panels?.map((p) => (
            <Panel
              key={p.kicker + p.value}
              kicker={p.kicker}
              value={p.value}
              context={p.context}
              onDark={dark}
              solid={!dark}
            />
          ))}
          {children}
        </div>
      </div>
    </section>
  );
}

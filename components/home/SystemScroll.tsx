"use client";

import { useEffect, useRef } from "react";

/**
 * Signature pinned scroll section: 01 Build → 02 Grow → 03 Operate →
 * 04 Commerce System. Direct port of the approved baseline's scroll logic —
 * the section pins for 320vh while copy, panel fills and the grid tracks
 * interpolate continuously between the four states.
 *
 * Fallback: below 900px, or under prefers-reduced-motion, the section
 * recomposes into a static stacked layout (no pinning, all states visible).
 *
 * This component intentionally uses inline styles + imperative style writes:
 * the paint loop drives colors, grid tracks and opacities per frame, exactly
 * as the approved design does.
 */

const SCROLL_LEN = 320; // vh

const ACCENTS: { rgb: [number, number, number]; fg: [number, number, number] }[] = [
  { rgb: [255, 200, 74], fg: [23, 21, 31] },
  { rgb: [184, 243, 74], fg: [23, 21, 31] },
  { rgb: [69, 216, 192], fg: [23, 21, 31] },
  { rgb: [105, 71, 255], fg: [255, 255, 255] },
];
const BASE: [number, number, number] = [23, 21, 31]; // Ink card on the Aubergine field
// Approved per-state pastel surfaces: citrus, lime, aqua, lavender. The
// active panel fills with its pastel; inactive panels sit on an ink surface
// carrying a faint tint of the same hue, so each box keeps its identity
// while staying subdued against the Aubergine field.
const PASTELS: [number, number, number][] = [
  [255, 238, 199], // citrus pastel
  [237, 248, 206], // lime pastel
  [217, 244, 238], // aqua pastel
  [233, 228, 255], // violet/lavender pastel
];
const INK: [number, number, number] = [23, 21, 31];
const DIM: [number, number, number] = [142, 137, 160];
const tint = (n: number): [number, number, number] => [
  BASE[0] + (PASTELS[n][0] - BASE[0]) * 0.14,
  BASE[1] + (PASTELS[n][1] - BASE[1]) * 0.14,
  BASE[2] + (PASTELS[n][2] - BASE[2]) * 0.14,
];
// [col1, col2, row1, row2] per state — interpolated continuously
const GRID = [
  [1.55, 1, 1.55, 1],
  [1, 1.55, 1.55, 1],
  [1.55, 1, 1, 1.55],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const ease = (v: number) => v * v * (3 - 2 * v);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const mix = (a: number[], b: number[], t: number) =>
  "rgb(" +
  Math.round(lerp(a[0], b[0], t)) +
  "," +
  Math.round(lerp(a[1], b[1], t)) +
  "," +
  Math.round(lerp(a[2], b[2], t)) +
  ")";

export default function SystemScroll() {
  const wrapRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let stacked: boolean | null = null;
    let modeKey: string | null = null;
    let raf = 0;

    const isStacked = () =>
      window.matchMedia("(max-width: 900px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const applyMode = () => {
      const s = isStacked();
      const key = String(s);
      if (key === modeKey) return;
      modeKey = key;
      stacked = s;
      lastP = -1; // repaint from scratch after a mode switch
      const pane = wrap.querySelector<HTMLElement>("[data-pane]");
      const stage = wrap.querySelector<HTMLElement>("[data-stage]");
      const grid = wrap.querySelector<HTMLElement>("[data-grid]");
      const rail = wrap.querySelector<HTMLElement>("[data-rail]");
      const cue = wrap.querySelector<HTMLElement>("[data-cue]");
      const copywrap = wrap.querySelector<HTMLElement>("[data-copywrap]");
      const copies = wrap.querySelectorAll<HTMLElement>("[data-copy]");
      if (s) {
        wrap.style.height = "auto";
        if (pane) {
          pane.style.position = "static";
          pane.style.height = "auto";
          pane.style.overflow = "visible";
        }
        if (stage) {
          stage.style.display = "block";
          stage.style.padding = "0 20px 8px";
        }
        if (grid) grid.style.display = "none";
        if (rail) rail.style.display = "none";
        if (cue) cue.style.display = "none";
        if (copywrap) {
          copywrap.style.position = "static";
          copywrap.style.minHeight = "0";
        }
        copies.forEach((el, i) => {
          el.style.position = "static";
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.padding = "30px 0";
          el.style.borderTop =
            i === 0 ? "none" : "1px solid rgba(250,250,247,.12)";
        });
      } else {
        wrap.style.height = SCROLL_LEN + "vh";
        if (pane) {
          pane.style.position = "sticky";
          pane.style.height = "100vh";
          pane.style.overflow = "hidden";
        }
        if (stage) {
          stage.style.display = "grid";
          stage.style.padding = "0 clamp(20px,3vw,40px)";
        }
        if (grid) grid.style.display = "grid";
        if (rail) rail.style.display = "block";
        if (cue) cue.style.display = "flex";
        if (copywrap) {
          copywrap.style.position = "relative";
          copywrap.style.minHeight = "clamp(220px,40vh,330px)";
        }
        copies.forEach((el) => {
          el.style.position = "absolute";
          el.style.padding = "0";
          el.style.borderTop = "none";
        });
      }
    };

    const paint = (p: number) => {
      // continuous position across the four states: hold, ease, hold
      const t = Math.min(2.9999, p * 3);
      const i = Math.floor(t);
      const raw = clamp01((t - i - 0.28) / 0.44);
      const f = ease(raw); // grid tracks travel across the whole window
      // copy + panel fill hand off sequentially: outgoing clears before incoming arrives
      const weight = [0, 0, 0, 0];
      // fast at the swap boundary (not smoothstep-flat) so the copy never goes blank between states
      const xo = clamp01(raw / 0.5),
        xi = clamp01((raw - 0.5) / 0.5);
      weight[i] = Math.pow(1 - xo, 0.4);
      weight[i + 1] = Math.pow(xi, 0.4);
      const lead = raw < 0.5 ? i : i + 1;
      // panels never all go neutral: the leading engine holds a readable Cloud fill through the handoff
      const pw = weight.slice();
      pw[lead] = Math.max(pw[lead], 0.62);
      const conv = weight[3];

      const g = gridRef.current;
      if (g) {
        const c1 = lerp(GRID[i][0], GRID[i + 1][0], f),
          c2 = lerp(GRID[i][1], GRID[i + 1][1], f);
        const r1 = lerp(GRID[i][2], GRID[i + 1][2], f),
          r2 = lerp(GRID[i][3], GRID[i + 1][3], f);
        g.style.gridTemplateColumns = c1.toFixed(3) + "fr " + c2.toFixed(3) + "fr";
        g.style.gridTemplateRows = r1.toFixed(3) + "fr " + r2.toFixed(3) + "fr";
        g.style.gap = (14 - 8 * conv).toFixed(1) + "px";
      }

      wrap.querySelectorAll<HTMLElement>("[data-panel]").forEach((el) => {
        const n = +el.dataset.panel!;
        const a = ACCENTS[n];
        const act = pw[n];
        const rgba = (o: number) =>
          "rgba(" + a.rgb.join(",") + "," + o.toFixed(3) + ")";
        // active = the state's pastel surface with an accent edge; inactive
        // keeps a faint tint of the same hue on the ink surface
        el.style.background = mix(tint(n), PASTELS[n], act);
        el.style.color = mix(DIM, INK, clamp01(act * 1.5));
        el.style.borderColor = rgba(0.2 + 0.3 * conv + 0.8 * act);
        el.style.boxShadow =
          act > 0.01 ? "inset 0 3px 0 0 " + rgba(act) : "none";
        el.style.opacity = (0.62 + 0.38 * Math.max(act, conv)).toFixed(3);
        const num = el.querySelector<HTMLElement>("[data-num]");
        if (num) num.style.color = act > 0.4 ? rgba(1) : "inherit";
        const mini = el.querySelector<HTMLElement>('[data-mini="' + n + '"]');
        if (mini) mini.style.opacity = Math.max(act, conv * 0.9).toFixed(3);
        el.querySelectorAll<HTMLElement>("[data-mini] > div").forEach((b) => {
          b.style.background = rgba(act > 0.5 ? 0.85 : 0.2 + 0.3 * conv);
        });
      });

      wrap.querySelectorAll<HTMLElement>("[data-copy]").forEach((el) => {
        const n = +el.dataset.copy!;
        const o = weight[n];
        el.style.opacity = o.toFixed(3);
        el.style.transform = "translateY(" + ((1 - o) * 14).toFixed(1) + "px)";
        el.style.pointerEvents = o > 0.5 ? "auto" : "none";
      });

      const loop = wrap.querySelector<HTMLElement>("[data-loop]");
      if (loop) loop.style.opacity = (conv * conv).toFixed(3);

      const bar = barRef.current;
      if (bar) {
        bar.style.width = (p * 100).toFixed(2) + "%";
        bar.style.background = mix(ACCENTS[i].rgb, ACCENTS[i + 1]?.rgb ?? ACCENTS[i].rgb, f);
      }
      const cue = cueRef.current;
      if (cue) cue.style.opacity = Math.max(0, 1 - p * 24).toFixed(2);

      wrap.querySelectorAll<HTMLElement>("[data-tick]").forEach((el) => {
        const n = +el.dataset.tick!;
        el.style.color = n <= lead ? "#FAFAF7" : "#6f6a80";
        el.style.opacity = n === lead ? "1" : n < lead ? ".75" : ".55";
      });
    };

    let lastP = -1;
    const onScroll = () => {
      applyMode();
      if (stacked) return;
      const rect = wrap.getBoundingClientRect();
      const span = wrap.offsetHeight - window.innerHeight;
      const p = span <= 0 ? 0 : Math.max(0, Math.min(1, -rect.top / span));
      // paint is a pure function of p — skip DOM writes when scroll is idle
      if (p === lastP) return;
      lastP = p;
      paint(p);
    };

    const tick = () => {
      onScroll();
      raf = requestAnimationFrame(tick);
    };
    const resume = () => {
      cancelAnimationFrame(raf);
      onScroll();
      raf = requestAnimationFrame(tick);
    };

    applyMode();
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("visibilitychange", resume);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", resume);
    };
  }, []);

  // Initial (pre-JS) surfaces mirror paint() at p=0: Build active on its
  // citrus pastel, the rest on faintly-tinted ink.
  const ssrBg = (n: number, active = false) => {
    const c = active ? PASTELS[n] : tint(n);
    return `rgb(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])})`;
  };
  const panelBase: React.CSSProperties = {
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    color: "#8e89a0",
    border: "1px solid rgba(250,250,247,.08)",
  };

  const copyBase: React.CSSProperties = { position: "absolute", inset: 0 };
  const stateLabel: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: ".18em",
    marginBottom: "clamp(8px,1.8vh,16px)",
  };
  const stateHeading: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(24px,4vh,44px)",
    lineHeight: 1.04,
    letterSpacing: "-.03em",
    margin: "0 0 clamp(10px,1.8vh,18px)",
  };
  const stateList: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
    gap: "clamp(5px,1.1vh,10px) 20px",
    fontSize: "clamp(12.5px,1.7vh,15px)",
    color: "#c7c3d2",
  };

  return (
    <section
      id="system"
      ref={wrapRef}
      style={{ position: "relative", height: `${SCROLL_LEN}vh`, background: "#25172F" }}
    >
      <div
        data-pane="1"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          color: "#FAFAF7",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
            padding: "clamp(14px,2.6vh,30px) clamp(20px,3vw,40px) 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          <h2
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#8e89a0",
              margin: 0,
            }}
          >
            How Hyprr builds and operates ecommerce businesses
          </h2>
          <div
            data-cue="1"
            ref={cueRef}
            style={{
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#8e89a0",
              display: "flex",
              alignItems: "center",
              gap: 8,
              flex: "none",
            }}
          >
            Scroll <span style={{ animation: "hy-blink 1.6s infinite" }}>↓</span>
          </div>
        </div>

        <div
          data-stage="1"
          style={{
            flex: 1,
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
            padding: "0 clamp(20px,3vw,40px)",
            display: "grid",
            gridTemplateColumns: ".86fr 1.14fr",
            gap: "clamp(24px,4vw,56px)",
            alignItems: "center",
          }}
        >
          <div
            data-copywrap="1"
            style={{ position: "relative", minHeight: "clamp(220px,40vh,330px)" }}
          >
            <div data-copy="0" style={copyBase}>
              <div style={{ ...stateLabel, color: "#FFC84A" }}>STATE 01 / BUILD</div>
              <h3 style={stateHeading}>
                Build the right commerce{" "}
                <span style={{ color: "#FFC84A" }}>foundation</span>.
              </h3>
              <div style={stateList}>
                <div>Product research</div>
                <div>Supplier research</div>
                <div>Brand development</div>
                <div>Marketplace setup</div>
                <div>Shopify / DTC setup</div>
                <div>Listings and creative</div>
              </div>
            </div>
            <div data-copy="1" style={{ ...copyBase, opacity: 0 }}>
              <div style={{ ...stateLabel, color: "#B8F34A" }}>STATE 02 / GROW</div>
              <h3 style={stateHeading}>
                Turn the operation into a{" "}
                <span style={{ color: "#B8F34A" }}>growth engine</span>.
              </h3>
              <div style={stateList}>
                <div>Ecommerce growth</div>
                <div>Marketplace growth</div>
                <div>DTC growth</div>
                <div>PPC &amp; paid media</div>
                <div>Conversion</div>
                <div>Channel expansion</div>
              </div>
            </div>
            <div data-copy="2" style={{ ...copyBase, opacity: 0 }}>
              <div style={{ ...stateLabel, color: "#45D8C0" }}>
                STATE 03 / OPERATE
              </div>
              <h3 style={stateHeading}>
                Keep it running{" "}
                <span style={{ color: "#45D8C0" }}>every single day</span>.
              </h3>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "#c7c3d2",
                  margin: "0 0 clamp(10px,2vh,18px)",
                  maxWidth: 440,
                }}
              >
                Orders, inventory, listings, cases, reporting.
              </p>
              <div style={stateList}>
                <div>Marketplace management</div>
                <div>Shopify management</div>
                <div>Inventory coordination</div>
                <div>Account health</div>
                <div>Reporting</div>
              </div>
            </div>
            <div data-copy="3" style={{ ...copyBase, opacity: 0 }}>
              <div style={{ ...stateLabel, color: "#8f77ff" }}>
                STATE 04 / COMMERCE SYSTEM
              </div>
              <h3 style={stateHeading}>
                Three engines, one{" "}
                <span style={{ color: "#8f77ff" }}>system of record</span>.
              </h3>
              <div
                style={{
                  display: "grid",
                  gap: "clamp(4px,1vh,8px)",
                  fontSize: "clamp(12.5px,1.8vh,15px)",
                  color: "#c7c3d2",
                  marginBottom: "clamp(12px,2.4vh,22px)",
                }}
              >
                <div>Build informs growth.</div>
                <div>Growth exposes operational limits.</div>
                <div>Operations feed the next build.</div>
              </div>
              <a
                href="#talk"
                style={{
                  display: "inline-block",
                  background: "#6947FF",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "13px 22px",
                  borderRadius: 14,
                }}
              >
                Talk to the team that runs it
              </a>
            </div>
          </div>

          <div
            data-grid="1"
            ref={gridRef}
            style={{
              display: "grid",
              gridTemplateColumns: "1.55fr 1fr",
              gridTemplateRows: "1.55fr 1fr",
              gap: 14,
              height: "clamp(230px,48vh,430px)",
              position: "relative",
            }}
          >
            <div
              data-panel="0"
              style={{
                ...panelBase,
                padding: "clamp(12px,1.8vh,20px)",
                background: ssrBg(0, true),
                color: "#17151F",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(16px,2.7vh,26px)",
                    letterSpacing: "-.02em",
                  }}
                >
                  Build
                </div>
                <div
                  data-num="0"
                  style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".14em" }}
                >
                  01
                </div>
              </div>
              <div>
                <div
                  data-mini="0"
                  style={{
                    display: "flex",
                    gap: 6,
                    alignItems: "flex-end",
                    height: "clamp(18px,3.4vh,32px)",
                    marginBottom: "clamp(7px,1.4vh,12px)",
                    opacity: 0,
                  }}
                >
                  <div style={{ width: 24, height: "100%", borderRadius: 5, background: "rgba(23,21,31,.18)" }} />
                  <div style={{ width: 24, height: "74%", borderRadius: 5, background: "rgba(23,21,31,.18)" }} />
                  <div style={{ width: 24, height: "86%", borderRadius: 5, background: "rgba(23,21,31,.18)" }} />
                  <div style={{ width: 24, height: "60%", borderRadius: 5, background: "rgba(23,21,31,.18)" }} />
                </div>
                <div
                  style={{
                    fontSize: "clamp(10.5px,1.65vh,13px)",
                    lineHeight: 1.4,
                    fontWeight: 500,
                  }}
                >
                  Product → brand → store → marketplace
                </div>
              </div>
            </div>
            <div
              data-panel="1"
              style={{
                ...panelBase,
                padding: "clamp(11px,1.6vh,18px)",
                background: ssrBg(1),
                opacity: 0.6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(15px,2.5vh,22px)",
                    letterSpacing: "-.02em",
                  }}
                >
                  Grow
                </div>
                <div
                  data-num="1"
                  style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".14em" }}
                >
                  02
                </div>
              </div>
              <div>
                <div
                  data-mini="1"
                  style={{
                    display: "flex",
                    gap: 6,
                    alignItems: "flex-end",
                    height: "clamp(16px,2.8vh,28px)",
                    marginBottom: "clamp(6px,1.2vh,10px)",
                    opacity: 0,
                  }}
                >
                  <div style={{ width: 18, height: "44%", borderRadius: 5, background: "rgba(23,21,31,.18)" }} />
                  <div style={{ width: 18, height: "62%", borderRadius: 5, background: "rgba(23,21,31,.18)" }} />
                  <div style={{ width: 18, height: "80%", borderRadius: 5, background: "rgba(23,21,31,.18)" }} />
                  <div style={{ width: 18, height: "100%", borderRadius: 5, background: "rgba(23,21,31,.18)" }} />
                </div>
                <div
                  style={{
                    fontSize: "clamp(10.5px,1.65vh,12.5px)",
                    lineHeight: 1.4,
                    fontWeight: 500,
                  }}
                >
                  Demand → paid media → conversion
                </div>
              </div>
            </div>
            <div
              data-panel="2"
              style={{
                ...panelBase,
                padding: "clamp(11px,1.6vh,18px)",
                background: ssrBg(2),
                opacity: 0.6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(15px,2.5vh,22px)",
                    letterSpacing: "-.02em",
                  }}
                >
                  Operate
                </div>
                <div
                  data-num="2"
                  style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".14em" }}
                >
                  03
                </div>
              </div>
              <div>
                <div
                  data-mini="2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    marginBottom: "clamp(6px,1.2vh,12px)",
                    opacity: 0,
                  }}
                >
                  <div style={{ height: "clamp(5px,1.1vh,7px)", width: "100%", borderRadius: 4, background: "rgba(23,21,31,.18)" }} />
                  <div style={{ height: "clamp(5px,1.1vh,7px)", width: "72%", borderRadius: 4, background: "rgba(23,21,31,.18)" }} />
                  <div style={{ height: "clamp(5px,1.1vh,7px)", width: "88%", borderRadius: 4, background: "rgba(23,21,31,.18)" }} />
                </div>
                <div
                  style={{
                    fontSize: "clamp(10.5px,1.65vh,12.5px)",
                    lineHeight: 1.4,
                    fontWeight: 500,
                  }}
                >
                  Orders → inventory → reporting
                </div>
              </div>
            </div>
            <div
              data-panel="3"
              style={{
                ...panelBase,
                padding: "clamp(11px,1.6vh,18px)",
                background: ssrBg(3),
                opacity: 0.6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(15px,2.5vh,22px)",
                    letterSpacing: "-.02em",
                    maxWidth: "9ch",
                    lineHeight: 1.05,
                  }}
                >
                  Commerce system
                </div>
                <div
                  data-num="3"
                  style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".14em" }}
                >
                  04
                </div>
              </div>
              <div>
                <div
                  data-mini="3"
                  style={{
                    display: "flex",
                    gap: 6,
                    marginBottom: "clamp(7px,1.4vh,12px)",
                    opacity: 0,
                  }}
                >
                  <div style={{ width: "clamp(13px,2.4vh,22px)", height: "clamp(13px,2.4vh,22px)", borderRadius: 6, background: "rgba(255,255,255,.24)" }} />
                  <div style={{ width: "clamp(13px,2.4vh,22px)", height: "clamp(13px,2.4vh,22px)", borderRadius: 6, background: "rgba(255,255,255,.24)" }} />
                  <div style={{ width: "clamp(13px,2.4vh,22px)", height: "clamp(13px,2.4vh,22px)", borderRadius: 6, background: "rgba(255,255,255,.24)" }} />
                </div>
                <div
                  style={{
                    fontSize: "clamp(10.5px,1.65vh,12.5px)",
                    lineHeight: 1.4,
                    fontWeight: 500,
                  }}
                >
                  Build ↓ Grow ↓ Operate ↓ Next decision
                </div>
              </div>
            </div>

            <div
              data-loop="1"
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
                opacity: 0,
              }}
            >
              <div
                style={{
                  background: "rgba(23,21,31,.9)",
                  border: "1px solid rgba(105,71,255,.4)",
                  borderRadius: 16,
                  padding: "clamp(14px,2.4vh,24px) clamp(18px,2.6vw,30px)",
                  display: "grid",
                  gap: "clamp(6px,1.2vh,12px)",
                  justifyItems: "center",
                  textAlign: "center",
                  backdropFilter: "blur(3px)",
                }}
              >
                {(
                  [
                    ["Build", "#FFC84A"],
                    ["Grow", "#B8F34A"],
                    ["Operate", "#45D8C0"],
                    ["Next decision ↺", "#8f77ff"],
                  ] as const
                ).map(([label, color], n) => (
                  <div key={label} style={{ display: "contents" }}>
                    {n > 0 && (
                      <div
                        style={{
                          width: 1,
                          height: "clamp(8px,1.6vh,16px)",
                          background: "rgba(250,250,247,.28)",
                        }}
                      />
                    )}
                    <div
                      data-loopnode={n}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: "clamp(13px,2vh,18px)",
                        letterSpacing: "-.01em",
                        color,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          data-rail="1"
          style={{
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
            padding: "0 clamp(20px,3vw,40px) clamp(12px,2.2vh,26px)",
          }}
        >
          <div
            style={{
              height: 2,
              background: "rgba(250,250,247,.12)",
              borderRadius: 2,
              overflow: "hidden",
              marginBottom: "clamp(8px,1.6vh,14px)",
            }}
          >
            <div
              data-bar="1"
              ref={barRef}
              style={{ height: "100%", width: "0%", background: "#FFC84A" }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 8,
              fontSize: "clamp(9px,1.2vh,11px)",
              fontWeight: 600,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#6f6a80",
            }}
          >
            <div data-tick="0">01 Build</div>
            <div data-tick="1">02 Grow</div>
            <div data-tick="2">03 Operate</div>
            <div data-tick="3">04 System</div>
          </div>
        </div>
      </div>
    </section>
  );
}

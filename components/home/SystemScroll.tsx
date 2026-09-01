"use client";

import { useEffect, useRef } from "react";

/**
 * Signature pinned scroll section — Visual Build Spec part 5.
 *
 * - Pinned mechanic kept; progress passes through dwell() so 55% of each
 *   segment holds a state still before the 45% handoff animates.
 * - Ink field (#17171A). Active panel fills with its engine band colour;
 *   inactive panels are translucent white on ink.
 * - Section H2 promoted to the h2 step above the state content.
 * - Rail ticks are real buttons that scroll to each state's hold zone;
 *   a persistent "Skip to commerce paths" link exits the pin.
 * - Below 900px the states become a horizontal snap carousel with dot
 *   indicators (native scrolling, no scroll-jacking).
 * - Server markup renders all four states as a readable stacked list, so
 *   the section is complete with JavaScript disabled; reduced-motion
 *   keeps that stacked list.
 */

const SCROLL_LEN = 320; // vh

const N = 4; // states
const HOLD = 0.55; // share of each segment held still
const EDGE = HOLD / 2;

const ACCENTS: [number, number, number][] = [
  [255, 200, 74], // Build — Citrus
  [184, 243, 74], // Grow — Lime
  [69, 216, 192], // Operate — Aqua
  [255, 255, 255], // System — white
];
// Active panel surfaces: the engine band colours; White for state 04.
const BANDS: [number, number, number][] = [
  [255, 243, 214], // --color-build-band
  [238, 249, 217], // --color-grow-band
  [224, 244, 240], // --color-operate-band
  [255, 255, 255],
];
// Translucent white on ink, resolved to solids for interpolation.
const INACTIVE: [number, number, number] = [37, 37, 40]; // white 6% over ink
const INACTIVE_BORDER: [number, number, number] = [61, 61, 64]; // white 16% over ink
const INK: [number, number, number] = [23, 23, 26];
const MUTE: [number, number, number] = [142, 137, 160]; // --color-on-ink-mute

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

// Dwell remap: still, then move, then still — 55% of each segment holds.
function dwell(p: number) {
  const seg = clamp01(p) * (N - 1); // 0 → 3
  const i = Math.min(Math.floor(seg), N - 2);
  const t = seg - i; // 0 → 1 inside this handoff
  const k = clamp01((t - EDGE) / (1 - HOLD));
  return (i + ease(k)) / (N - 1);
}

type Mode = "pinned" | "carousel" | "stacked";

export default function SystemScroll() {
  const wrapRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const jumpTo = (i: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const top = wrap.getBoundingClientRect().top + window.scrollY;
    const span = wrap.offsetHeight - window.innerHeight;
    if (span > 0) {
      window.scrollTo({ top: top + (i / (N - 1)) * span, behavior: "smooth" });
    } else {
      // carousel / stacked: bring the state into view instead
      wrap
        .querySelectorAll<HTMLElement>("[data-copy]")
        [i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let mode: Mode | null = null;
    let raf = 0;
    let lastP = -1;

    const q = <T extends HTMLElement>(sel: string) =>
      wrap.querySelector<T>(sel);
    const qa = (sel: string) => wrap.querySelectorAll<HTMLElement>(sel);

    const currentMode = (): Mode => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return "stacked";
      if (window.matchMedia("(max-width: 900px)").matches) return "carousel";
      return "pinned";
    };

    const applyMode = () => {
      const m = currentMode();
      if (m === mode) return;
      mode = m;
      lastP = -1;
      const pane = q("[data-pane]");
      const stage = q("[data-stage]");
      const grid = q("[data-grid]");
      const rail = q("[data-rail]");
      const dots = q("[data-dots]");
      const skip = q("[data-skip]");
      const copywrap = q("[data-copywrap]");
      const copies = qa("[data-copy]");

      if (m === "pinned") {
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
        if (dots) dots.style.display = "none";
        if (skip) skip.style.display = "inline-flex";
        if (copywrap) {
          copywrap.style.display = "block";
          copywrap.style.position = "relative";
          copywrap.style.minHeight = "clamp(240px,38vh,460px)";
          copywrap.style.overflowX = "visible";
          copywrap.style.scrollSnapType = "";
        }
        copies.forEach((el) => {
          el.style.position = "absolute";
          el.style.inset = "0";
          el.style.flex = "";
          el.style.width = "";
          el.style.scrollSnapAlign = "";
          el.style.padding = "0";
          el.style.borderTop = "none";
        });
      } else if (m === "carousel") {
        wrap.style.height = "auto";
        if (pane) {
          pane.style.position = "static";
          pane.style.height = "auto";
          pane.style.overflow = "visible";
        }
        if (stage) {
          stage.style.display = "block";
          stage.style.padding = "0";
        }
        if (grid) grid.style.display = "none";
        if (rail) rail.style.display = "none";
        if (dots) dots.style.display = "flex";
        if (skip) skip.style.display = "none";
        if (copywrap) {
          copywrap.style.display = "flex";
          copywrap.style.position = "static";
          copywrap.style.minHeight = "0";
          copywrap.style.overflowX = "auto";
          copywrap.style.scrollSnapType = "x mandatory";
          copywrap.style.gap = "16px";
          copywrap.style.padding = "8px 6vw 8px";
          copywrap.style.scrollPaddingInline = "6vw";
        }
        copies.forEach((el) => {
          el.style.position = "static";
          el.style.inset = "auto";
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.pointerEvents = "auto";
          el.style.flex = "0 0 88vw";
          el.style.width = "88vw";
          el.style.scrollSnapAlign = "center";
          el.style.padding = "22px 0 26px";
          el.style.borderTop = "none";
        });
      } else {
        // stacked — reduced motion and the no-JS baseline
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
        if (dots) dots.style.display = "none";
        if (skip) skip.style.display = "none";
        if (copywrap) {
          copywrap.style.display = "block";
          copywrap.style.position = "static";
          copywrap.style.minHeight = "0";
          copywrap.style.overflowX = "visible";
          copywrap.style.scrollSnapType = "";
        }
        copies.forEach((el, i) => {
          el.style.position = "static";
          el.style.inset = "auto";
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.pointerEvents = "auto";
          el.style.flex = "";
          el.style.width = "";
          el.style.scrollSnapAlign = "";
          el.style.padding = "30px 0";
          el.style.borderTop =
            i === 0 ? "none" : "1px solid rgb(255 255 255 / .16)";
        });
      }
    };

    const paint = (p: number) => {
      const t = Math.min(2.9999, p * 3);
      const i = Math.floor(t);
      const raw = clamp01((t - i - 0.28) / 0.44);
      const f = ease(raw);
      const weight = [0, 0, 0, 0];
      const xo = clamp01(raw / 0.5),
        xi = clamp01((raw - 0.5) / 0.5);
      weight[i] = Math.pow(1 - xo, 0.4);
      weight[i + 1] = Math.pow(xi, 0.4);
      const lead = raw < 0.5 ? i : i + 1;
      const pw = weight.slice();
      pw[lead] = Math.max(pw[lead], 0.62);
      const conv = weight[3];

      const g = gridRef.current;
      if (g) {
        const c1 = lerp(GRID[i][0], GRID[i + 1][0], f),
          c2 = lerp(GRID[i][1], GRID[i + 1][1], f);
        const r1 = lerp(GRID[i][2], GRID[i + 1][2], f),
          r2 = lerp(GRID[i][3], GRID[i + 1][3], f);
        g.style.gridTemplateColumns =
          c1.toFixed(3) + "fr " + c2.toFixed(3) + "fr";
        g.style.gridTemplateRows = r1.toFixed(3) + "fr " + r2.toFixed(3) + "fr";
        g.style.gap = (14 - 8 * conv).toFixed(1) + "px";
      }

      qa("[data-panel]").forEach((el) => {
        const n = +el.dataset.panel!;
        const act = pw[n];
        const a = ACCENTS[n];
        const rgba = (o: number) =>
          "rgba(" + a.join(",") + "," + o.toFixed(3) + ")";
        el.style.background = mix(INACTIVE, BANDS[n], act);
        el.style.color = mix(MUTE, INK, clamp01(act * 1.5));
        el.style.borderColor = mix(INACTIVE_BORDER, a, act);
        el.style.boxShadow =
          act > 0.01 ? "inset 0 3px 0 0 " + rgba(act) : "none";
        el.style.opacity = (0.62 + 0.38 * Math.max(act, conv)).toFixed(3);
        const num = el.querySelector<HTMLElement>("[data-num]");
        if (num) num.style.color = act > 0.4 ? rgba(1) : "inherit";
      });

      qa("[data-copy]").forEach((el) => {
        const n = +el.dataset.copy!;
        const o = weight[n];
        el.style.opacity = o.toFixed(3);
        el.style.transform = "translateY(" + ((1 - o) * 14).toFixed(1) + "px)";
        el.style.pointerEvents = o > 0.5 ? "auto" : "none";
      });

      const loop = q("[data-loop]");
      if (loop) loop.style.opacity = (conv * conv).toFixed(3);

      const bar = barRef.current;
      if (bar) {
        bar.style.width = (p * 100).toFixed(2) + "%";
        bar.style.background = mix(
          ACCENTS[i],
          ACCENTS[i + 1] ?? ACCENTS[i],
          f
        );
      }

      qa("[data-tick]").forEach((el) => {
        const n = +el.dataset.tick!;
        el.style.color = n <= lead ? "#FFFFFF" : "#8E89A0";
        el.style.opacity = n === lead ? "1" : n < lead ? ".75" : ".55";
      });
    };

    const onScroll = () => {
      applyMode();
      if (mode !== "pinned") return;
      const rect = wrap.getBoundingClientRect();
      const span = wrap.offsetHeight - window.innerHeight;
      const raw = span <= 0 ? 0 : Math.max(0, Math.min(1, -rect.top / span));
      const p = dwell(raw);
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

    // Carousel dot indicators track the visible slide — driven by the
    // container's own scroll position (nearest slide centre wins).
    const copies = Array.from(qa("[data-copy]"));
    const dotEls = Array.from(qa("[data-dot]"));
    const slider = q("[data-copywrap]");
    const setDot = (active: number) => {
      dotEls.forEach((d, n) => {
        d.style.background =
          n === active ? "#FFFFFF" : "rgb(255 255 255 / .3)";
        d.setAttribute("aria-current", n === active ? "true" : "false");
      });
    };
    setDot(0);
    const onSlide = () => {
      if (!slider) return;
      const center = slider.scrollLeft + slider.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      copies.forEach((c, n) => {
        const cc = c.offsetLeft - slider.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(cc - center);
        if (d < bestDist) {
          bestDist = d;
          best = n;
        }
      });
      setDot(best);
    };
    slider?.addEventListener("scroll", onSlide, { passive: true });

    // Mode must not depend on the rAF loop (suspended in hidden tabs) —
    // react to the media queries directly.
    const mqNarrow = window.matchMedia("(max-width: 900px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => {
      applyMode();
      onScroll();
    };
    mqNarrow.addEventListener("change", onMq);
    mqReduced.addEventListener("change", onMq);

    applyMode();
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", onScroll);
    document.addEventListener("visibilitychange", resume);

    return () => {
      cancelAnimationFrame(raf);
      slider?.removeEventListener("scroll", onSlide);
      mqNarrow.removeEventListener("change", onMq);
      mqReduced.removeEventListener("change", onMq);
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", resume);
    };
  }, []);

  // ---- static styles ------------------------------------------------------
  // Server-rendered styles are the readable stacked baseline; applyMode()
  // upgrades to the pinned or carousel composition after hydration.
  const panelBase: React.CSSProperties = {
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 12,
    overflow: "hidden",
    background: "rgb(255 255 255 / .06)",
    color: "#8E89A0",
    border: "1px solid rgb(255 255 255 / .16)",
    padding: "clamp(12px,1.8vh,20px)",
  };
  const copyBase: React.CSSProperties = { padding: "30px 0" };
  const stateHeading: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(24px,2.2vw,32px)",
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: "-.02em",
    color: "#FFFFFF",
    margin: "0 0 14px",
  };
  const stateList: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
    gap: "8px 20px",
    fontSize: 17,
    lineHeight: 1.5,
    color: "#C7C3D2",
  };
  const artRow: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    fontSize: 15,
    lineHeight: 1.45,
    borderTop: "1px solid rgb(127 127 127 / .25)",
    paddingTop: 7,
  };

  return (
    <section
      id="system"
      ref={wrapRef}
      style={{ position: "relative", background: "#17171A" }}
    >
      <div
        data-pane="1"
        style={{
          position: "static",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Heading + stage travel as ONE vertically-centered cluster so the
            H2 stays attached to the content it titles at any pane height. */}
        <div
          data-mid="1"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: 0,
            padding: "clamp(18px,3vh,34px) 0 clamp(8px,1.6vh,18px)",
          }}
        >
        <div
          style={{
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
            padding: "0 clamp(20px,3vw,40px)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
            marginBottom: "clamp(16px,3.2vh,44px)",
          }}
        >
          <h2
            className="font-display type-h2"
            style={{ color: "#FFFFFF", margin: 0, maxWidth: "24ch" }}
          >
            How Hyprr builds and operates ecommerce businesses
          </h2>
          <a
            data-skip="1"
            href="#paths"
            className="type-meta text-on-ink-body hover:text-white"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, flex: "none", paddingBottom: 6 }}
          >
            Skip to commerce paths ↓
          </a>
        </div>

        <div
          data-stage="1"
          style={{
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
            padding: "0 clamp(20px,3vw,40px)",
            display: "block",
            gridTemplateColumns: ".86fr 1.14fr",
            gap: "clamp(24px,4vw,56px)",
            alignItems: "center",
          }}
        >
          <div data-copywrap="1" style={{ position: "static" }}>
            <div data-copy="0" style={copyBase}>
              <div className="type-label" style={{ color: "#FFC84A", marginBottom: 12 }}>
                STATE 01 / BUILD
              </div>
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
            <div data-copy="1" style={copyBase}>
              <div className="type-label" style={{ color: "#B8F34A", marginBottom: 12 }}>
                STATE 02 / GROW
              </div>
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
            <div data-copy="2" style={copyBase}>
              <div className="type-label" style={{ color: "#45D8C0", marginBottom: 12 }}>
                STATE 03 / OPERATE
              </div>
              <h3 style={stateHeading}>
                Keep it running{" "}
                <span style={{ color: "#45D8C0" }}>every single day</span>.
              </h3>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: "#C7C3D2",
                  margin: "0 0 14px",
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
            <div data-copy="3" style={copyBase}>
              <div className="type-label" style={{ color: "#FFFFFF", marginBottom: 12 }}>
                STATE 04 / COMMERCE SYSTEM
              </div>
              <h3 style={stateHeading}>Three engines, one system of record.</h3>
              <div
                style={{
                  display: "grid",
                  gap: 6,
                  fontSize: 17,
                  lineHeight: 1.5,
                  color: "#C7C3D2",
                  marginBottom: 18,
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
                  background: "#FFC84A",
                  color: "#17171A",
                  fontWeight: 600,
                  fontSize: 17,
                  padding: "13px 22px",
                  borderRadius: 14,
                }}
              >
                Talk to the team that runs it
              </a>
            </div>
          </div>

          {/* The four panels — each carries one legible artefact */}
          <div
            data-grid="1"
            ref={gridRef}
            style={{
              display: "grid",
              gridTemplateColumns: "1.55fr 1fr",
              gridTemplateRows: "1.55fr 1fr",
              gap: 14,
              height: "clamp(260px,50vh,600px)",
              position: "relative",
              margin: "18px 0",
            }}
          >
            {/* 01 — research shortlist */}
            <div
              data-panel="0"
              style={{
                ...panelBase,
                background: "#FFF3D6",
                color: "#17171A",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <div className="type-label">RESEARCH SHORTLIST</div>
                <div data-num="0" className="type-label">
                  01
                </div>
              </div>
              <div style={{ display: "grid", gap: 7 }}>
                <div style={{ ...artRow, borderTop: "none", paddingTop: 0 }}>
                  <span>Opportunity 01</span>
                  <span style={{ fontWeight: 600 }}>Validated</span>
                </div>
                <div style={artRow}>
                  <span>Opportunity 02</span>
                  <span style={{ fontWeight: 600 }}>Shortlisted</span>
                </div>
                <div style={artRow}>
                  <span>Opportunity 03</span>
                  <span style={{ fontWeight: 600 }}>Passed</span>
                </div>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.4 }}>
                Product → brand → store → marketplace
              </div>
            </div>

            {/* 02 — listing with bid and search-term rows */}
            <div data-panel="1" style={{ ...panelBase, opacity: 0.62 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <div className="type-label">LISTING</div>
                <div data-num="1" className="type-label">
                  02
                </div>
              </div>
              <div style={{ display: "grid", gap: 7 }}>
                <div style={{ ...artRow, borderTop: "none", paddingTop: 0 }}>
                  <span>Everyday Set — 2pk</span>
                  <span style={{ fontWeight: 600 }}>Live</span>
                </div>
                <div style={artRow}>
                  <span>PPC bid</span>
                  <span style={{ fontWeight: 600 }}>Set by client</span>
                </div>
                <div style={artRow}>
                  <span>Search terms</span>
                  <span style={{ fontWeight: 600 }}>Mapped</span>
                </div>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.4 }}>
                Demand → paid media → conversion
              </div>
            </div>

            {/* 03 — the purchase order: the argument of the business */}
            <div data-panel="2" style={{ ...panelBase, opacity: 0.62 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <div className="type-label">PURCHASE ORDER</div>
                <div data-num="2" className="type-label">
                  03
                </div>
              </div>
              <div style={{ display: "grid", gap: 7 }}>
                <div style={{ ...artRow, borderTop: "none", paddingTop: 0 }}>
                  <span>Everyday Set — 2pk</span>
                  <span style={{ fontWeight: 600 }}>Restock</span>
                </div>
                <div style={{ ...artRow, fontWeight: 700 }}>
                  <span>Approved by client</span>
                  <span aria-hidden="true">✓</span>
                </div>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.4 }}>
                Orders → inventory → reporting
              </div>
            </div>

            {/* 04 — the system */}
            <div data-panel="3" style={{ ...panelBase, opacity: 0.62 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(17px,1.6vw,22px)",
                    letterSpacing: "-.02em",
                    lineHeight: 1.1,
                    maxWidth: "9ch",
                  }}
                >
                  Commerce system
                </div>
                <div data-num="3" className="type-label">
                  04
                </div>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.4 }}>
                Build ↓ Grow ↓ Operate ↓ Next decision
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
                  background: "rgba(23,23,26,.92)",
                  border: "1px solid rgb(255 255 255 / .16)",
                  borderRadius: 16,
                  padding: "clamp(14px,2.4vh,24px) clamp(18px,2.6vw,30px)",
                  display: "grid",
                  gap: "clamp(6px,1.2vh,12px)",
                  justifyItems: "center",
                  textAlign: "center",
                }}
              >
                {(
                  [
                    ["Build", "#FFC84A"],
                    ["Grow", "#B8F34A"],
                    ["Operate", "#45D8C0"],
                    ["Next decision ↺", "#FFFFFF"],
                  ] as const
                ).map(([label, color], n) => (
                  <div key={label} style={{ display: "contents" }}>
                    {n > 0 && (
                      <div
                        style={{
                          width: 1,
                          height: "clamp(8px,1.6vh,16px)",
                          background: "rgb(255 255 255 / .28)",
                        }}
                      />
                    )}
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: 17,
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
        </div>

        {/* Carousel dot indicators (mobile) */}
        <div
          data-dots="1"
          style={{
            display: "none",
            justifyContent: "center",
            gap: 10,
            padding: "4px 0 26px",
          }}
        >
          {[0, 1, 2, 3].map((n) => (
            <button
              key={n}
              data-dot={n}
              type="button"
              aria-label={`Go to state ${n + 1}`}
              onClick={() => jumpTo(n)}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: 0,
                padding: 0,
                cursor: "pointer",
                background: "rgb(255 255 255 / .3)",
              }}
            />
          ))}
        </div>

        {/* Progress rail — ticks are real controls */}
        <div
          data-rail="1"
          style={{
            display: "none",
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
            padding: "0 clamp(20px,3vw,40px) clamp(12px,2.2vh,26px)",
          }}
        >
          <div
            style={{
              height: 2,
              background: "rgb(255 255 255 / .12)",
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
            }}
          >
            {["01 Build", "02 Grow", "03 Operate", "04 System"].map(
              (label, n) => (
                <button
                  key={label}
                  data-tick={n}
                  type="button"
                  onClick={() => jumpTo(n)}
                  className="type-label"
                  style={{
                    background: "none",
                    border: 0,
                    padding: "6px 0",
                    cursor: "pointer",
                    textAlign: "left",
                    textTransform: "uppercase",
                    color: "#8E89A0",
                  }}
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

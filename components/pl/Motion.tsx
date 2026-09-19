"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import { type ReactNode, useSyncExternalStore } from "react";

/**
 * Motion primitives for the private label page (PL_DESIGN_BRIEF §6).
 * Every animation here explains a sentence that is on the page:
 * lines draw in the order the copy reads, products appear in the
 * order the range grows, the return arc runs 08 → 01. Nothing moves
 * for decoration. Only transform, opacity and stroke animate, and
 * `prefers-reduced-motion` renders the finished state at once.
 *
 * Server render and the first client render are the finished state
 * too (`useStatic`), so the page is complete without JavaScript and
 * hydration never starts from an invisible element (brief §6).
 */
const EASE = [0.16, 1, 0.3, 1] as const;
const VIEW = { once: true, amount: 0.35 } as const;

/** true on the server, on the first client render, and whenever the
 *  visitor prefers reduced motion — every case that must show the
 *  finished state. */
const subscribeNoop = () => () => {};
function useStatic() {
  const reduce = useReducedMotion();
  // false on the server and during hydration, true once mounted —
  // without a setState-in-effect (react-hooks/set-state-in-effect).
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  return !mounted || reduce;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "span";
}) {
  const reduce = useStatic();
  const M = motion[as];
  if (reduce) {
    const T = as;
    return <T className={className}>{children}</T>;
  }
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </M>
  );
}

/** A stroke that draws itself when scrolled into view. */
export function Draw({
  d,
  stroke,
  width = 2,
  delay = 0,
  duration = 0.9,
  className,
}: {
  d: string;
  stroke: string;
  width?: number;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const reduce = useStatic();
  const t: Transition = { duration, delay, ease: EASE };
  if (reduce) {
    return <path d={d} fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" className={className} />;
  }
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      className={className}
      initial={{ pathLength: 0, opacity: 1 }}
      whileInView={{ pathLength: 1 }}
      viewport={VIEW}
      transition={t}
    />
  );
}

/** A mark that pops in after the line reaches it. */
export function Pop({
  delay = 0,
  children,
}: {
  delay?: number;
  children: ReactNode;
}) {
  const reduce = useStatic();
  if (reduce) return <g>{children}</g>;
  return (
    <motion.g
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      initial={{ scale: 0.4, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={VIEW}
      transition={{ duration: 0.35, delay, ease: EASE }}
    >
      {children}
    </motion.g>
  );
}

/** The hero chain: Product → Brand → Channels → Business, each word
 *  larger than the last, arriving in order. Runs on load, not scroll —
 *  it is the first thing on the page. */
export function Stair() {
  const reduce = useStatic();
  const words = [
    ["Product", "w1"],
    ["Brand", "w2"],
    ["Channels", "w3"],
    ["Business", "w4"],
  ] as const;
  return (
    <div className="pl-stair" aria-label="Product, then brand, then channels, then business" role="img">
      {words.map(([w, cls], i) => {
        const row = (
          <>
            <span className="pl-arrow" aria-hidden="true">{i === 0 ? " " : "→"}</span>
            <span className={`pl-word ${cls}`}>{w}</span>
          </>
        );
        return reduce ? (
          <div className="pl-step" key={w}>{row}</div>
        ) : (
          <motion.div
            className="pl-step"
            key={w}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.18, ease: EASE }}
          >
            {row}
          </motion.div>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
import { TRUE_COST_INPUTS } from "@/lib/true-cost";

/**
 * /true-cost calculator — ten inputs, one total. The Ink running total
 * is the only dark object on the page and sticky on desktop. The
 * user's own numbers are the only figures anywhere on the site;
 * nothing is stored, and no projected return is shown.
 */
export default function TrueCostCalculator() {
  const [vals, setVals] = useState<Record<number, string>>({});

  const num = (s: string | undefined) => {
    const n = parseFloat(String(s ?? "").replace(/[^0-9.]/g, ""));
    return isNaN(n) ? 0 : n;
  };
  const fmt = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const total = TRUE_COST_INPUTS.reduce((a, _, i) => a + num(vals[i]), 0);
  const filled = TRUE_COST_INPUTS.map((d, i) => ({
    label: d.label,
    v: num(vals[i]),
  })).filter((f) => f.v > 0);

  return (
    <div className="flex flex-wrap gap-6 items-start">
      {/* Bone input panel */}
      <div className="flex-[1_1_380px] bg-bone rounded-md p-[clamp(18px,2.4vw,28px)] grid gap-0.5">
        {TRUE_COST_INPUTS.map((d, i) => (
          <label
            key={d.label}
            className="grid grid-cols-[32px_1fr_140px] max-[520px]:grid-cols-[24px_1fr] gap-3 items-center py-2.5 border-b border-ink/10 last:border-b-0"
          >
            <span className="font-mono type-label text-label">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="grid gap-0.5">
              <b className="text-ink type-meta font-semibold">{d.label}</b>
              <span className="type-meta text-muted">{d.help}</span>
            </span>
            <input
              type="text"
              inputMode="decimal"
              placeholder="0"
              value={vals[i] ?? ""}
              onChange={(e) =>
                setVals((v) => ({ ...v, [i]: e.target.value }))
              }
              aria-label={`${d.label} amount`}
              className="h-11 border border-line rounded-sm px-3 text-right font-mono type-meta text-ink bg-white w-full box-border max-[520px]:col-span-2"
            />
          </label>
        ))}
      </div>

      {/* Ink running total — the only dark object on the page */}
      <div className="flex-[1_1_280px] max-w-[380px] sticky top-[88px] bg-ink text-white rounded-lg p-[clamp(24px,3vw,36px)] grid gap-[18px]">
        <span className="font-mono type-label text-on-ink-mute uppercase">
          Running total · what you will spend
        </span>
        <div className="font-mono type-h2 font-semibold [font-variant-numeric:tabular-nums] leading-none">
          {total > 0 ? fmt(total) : "—"}
        </div>
        <div className="grid gap-2 border-t border-line-on-ink pt-4">
          {filled.length ? (
            filled.map((f) => (
              <div
                key={f.label}
                className="flex justify-between gap-3 type-meta"
              >
                <span className="text-on-ink-body">{f.label}</span>
                <span className="font-mono text-white">{fmt(f.v)}</span>
              </div>
            ))
          ) : (
            <div className="type-meta text-on-ink-body">
              Enter any input to start
            </div>
          )}
        </div>
        <p className="type-meta text-on-ink-mute m-0">
          Your inputs, your currency, nothing stored. No projected return is
          shown anywhere on this page.
        </p>
      </div>
    </div>
  );
}

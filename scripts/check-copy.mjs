/**
 * CI gate 4 — the copy gates, v4 (DEV_BRIEF §6). Measured from the
 * SERVED body copy (<main>, scripts stripped).
 *
 *  1. Banned-phrase grep — the scam-adjacent vocabulary. Any hit
 *     fails (the v3 approved-negation carve-outs shipped with copy
 *     that no longer exists).
 *  2. `$` followed by a digit — allowed only inside
 *     [data-worked-example] blocks that visibly carry an
 *     arbitrary/illustrative label. v4 copy publishes no $-figures.
 *  3. Walmart geography — Walmart is US-only. Fail any sentence that
 *     contains "Walmart" together with UK, Europe, EU, Gulf, UAE or
 *     Singapore, unless the sentence itself scopes it with
 *     "Walmart in the US" (the approved construction, e.g. "Amazon in
 *     the US, UK, Europe and the Gulf, and on Walmart in the US").
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.CHECK_BASE || "http://localhost:3000";
const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const problems = [];

const BANNED =
  /guaranteed (profit|sales|roi|return|ranking)|passive income|risk-free|hands-free|turnkey|set and forget|done.for.you|we do everything|unlock|seamless|effortless|elevate|transform|holistic|end-to-end solution|supercharge|[0-9]+% (roi|return|growth|increase)/gi;

const src = readFileSync(join(ROOT, "lib/site-map.ts"), "utf8");
const live = [...src.matchAll(/slug: "([^"]+)"[\s\S]*?status: "(live|planned)"/g)]
  .filter((m) => m[2] === "live" && !m[1].includes("#"))
  .map((m) => m[1]);

const GEO = /\b(UK|United Kingdom|Europe|European|EU|Gulf|UAE|United Arab Emirates|Singapore)\b/i;

for (const r of ["/", ...live]) {
  const res = await fetch(BASE + r);
  if (res.status !== 200) {
    problems.push(`route ${r} -> ${res.status}`);
    continue;
  }
  const h = await res.text();
  const main = h.split(/<main[\s>]/)[1]?.split("</main>")[0] ?? "";
  // Worked-example blocks may carry figures only with a visible label.
  const weBlocks =
    main.match(/<figure[^>]*data-worked-example[^>]*>[\s\S]*?<\/figure>/g) ??
    [];
  for (const b of weBlocks) {
    if (!/arbitrar|illustrativ/i.test(b))
      problems.push(`${r}: worked-example block without the arbitrary label`);
  }
  const text = main
    .replace(/<figure[^>]*data-worked-example[^>]*>[\s\S]*?<\/figure>/g, " ")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, " ");

  for (const m of text.matchAll(BANNED)) {
    const ctx = text.slice(Math.max(0, m.index - 40), m.index + 50).trim();
    problems.push(`${r}: banned phrase "${m[0]}" in: …${ctx}…`);
  }

  if (/\$[0-9]/.test(text))
    problems.push(`${r}: $-figure in body copy outside a labelled worked example`);

  // Walmart geography — per sentence, over the full served HTML text
  // (metas and JSON-LD included: the v3 bug shipped in sixteen files).
  const fullText = h
    .replace(/<script[^>]*>[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");
  for (const sentence of fullText.split(/(?<=[.!?])\s+/)) {
    if (!/walmart/i.test(sentence)) continue;
    if (!GEO.test(sentence)) continue;
    if (/Walmart(?:,| is)? (?:only )?in the US/i.test(sentence)) continue;
    if (/Walmart US\b/.test(sentence)) continue;
    problems.push(
      `${r}: "Walmart" beside a non-US geography: …${sentence.trim().slice(0, 120)}…`
    );
  }
}

if (problems.length) {
  console.error("check-copy FAIL:\n" + problems.join("\n"));
  process.exit(1);
}
console.log(
  "check-copy OK — no banned phrases, no unlabelled figures, Walmart stays US-only"
);

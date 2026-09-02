/**
 * CI gate 4 (PROMPT_16 step 4) — the copy gates, all measured from the
 * SERVED body copy (<main>, scripts stripped — the RSC flight payload
 * and JSON-LD mirror head strings and are out of scope by the 2 Sep
 * meta ruling):
 *  1. The Build Spec §Q banned-phrase grep. It must return ONLY the
 *     three approved negations — no negation carve-out in the regex;
 *     the approved list is checked hit by hit, here and by eye.
 *  2. `$` followed by a digit — allowed only on /how-we-work (the
 *     labelled worked example), /true-cost (the calculator's own
 *     arithmetic, computed from user inputs, not published pricing),
 *     and inside [data-worked-example] blocks that visibly carry the
 *     arbitrary/illustrative label (PROMPT_17 §3 money boxes and the
 *     /documents samples). An unlabelled worked-example block fails.
 *  3. Unqualified "Amazon and Walmart".
 *  4. "Walmart UK" in any casing, anywhere in the served HTML.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.CHECK_BASE || "http://localhost:3000";
const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const problems = [];

const BANNED =
  /guaranteed (profit|sales|roi|return|ranking)|passive income|risk-free|hands-free|turnkey|set and forget|done.for.you|we do everything|unlock|seamless|effortless|elevate|transform|holistic|end-to-end solution|supercharge|[0-9]+% (roi|return|growth|increase)/gi;
const APPROVED = [
  "No guaranteed returns",
  "Expecting passive income",
  "Expecting guaranteed returns",
];

const src = readFileSync(join(ROOT, "lib/site-map.ts"), "utf8");
const live = [...src.matchAll(/slug: "([^"]+)"[\s\S]*?status: "(live|planned)"/g)]
  .filter((m) => m[2] === "live" && !m[1].includes("#"))
  .map((m) => m[1]);

let approvedCount = 0;
for (const r of ["/", ...live]) {
  const res = await fetch(BASE + r);
  if (res.status !== 200) {
    problems.push(`route ${r} -> ${res.status}`);
    continue;
  }
  const h = await res.text();
  const main = h.split(/<main[\s>]/)[1]?.split("</main>")[0] ?? "";
  // Worked-example blocks: figures allowed, but only when the block
  // itself carries the arbitrary/illustrative label the reader sees.
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
    .replace(/&#x27;/g, "'");

  for (const m of text.matchAll(BANNED)) {
    const ctx = text.slice(Math.max(0, m.index - 40), m.index + 50).trim();
    if (APPROVED.some((a) => ctx.includes(a))) approvedCount++;
    else problems.push(`${r}: banned phrase "${m[0]}" in: …${ctx}…`);
  }
  if (/\$[0-9]/.test(text) && r !== "/how-we-work" && r !== "/true-cost")
    problems.push(`${r}: $-figure in body copy`);
  if (/Amazon and Walmart(?! U)/.test(text))
    problems.push(`${r}: unqualified "Amazon and Walmart" in body copy`);
  if (/walmart\s+uk/i.test(h)) problems.push(`${r}: "Walmart UK" present`);
}

// The three negations ship on the homepage only; a fourth appearing
// anywhere is a new negation nobody approved.
if (approvedCount !== APPROVED.length)
  problems.push(
    `expected exactly ${APPROVED.length} approved negations sitewide, found ${approvedCount}`
  );

if (problems.length) {
  console.error("check-copy FAIL:\n" + problems.join("\n"));
  process.exit(1);
}
console.log(
  `check-copy OK — ${APPROVED.length} approved negations exactly, no figures, no unqualified channel claims`
);

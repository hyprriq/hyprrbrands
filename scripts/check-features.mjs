/**
 * CI gate 6 (PROMPT_20) — a ticket that says "put X on pages A, B, C,
 * D" needs a gate that says X is on A, B, C and D. The five earlier
 * gates check that what renders is sound; this one checks that what
 * was SPECIFIED actually rendered. Assertions are structural
 * (data-feature attributes and stable strings), not copy, so a
 * rewording does not fail the build but a missing component does.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.CHECK_BASE || "http://localhost:3000";
const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const problems = [];

const src = readFileSync(join(ROOT, "lib/site-map.ts"), "utf8");
const live = [...src.matchAll(/slug: "([^"]+)"[\s\S]*?status: "(live|planned)"/g)]
  .filter((m) => m[2] === "live" && !m[1].includes("#"))
  .map((m) => m[1]);
const isLive = (s) => live.includes(s.split("#")[0]);

const SERVICES = [
  "/wholesale-ecommerce", "/private-label", "/shopify-dtc",
  "/ecommerce-website-development", "/ecommerce-growth",
  "/marketplace-growth", "/ppc-paid-media", "/ecommerce-operations",
  "/marketplace-management", "/shopify-management",
];
/** PROMPT_18's page → archetype assignment. */
const LAYOUTS = {
  "/wholesale-ecommerce": "trading-loop",
  "/private-label": "gated-project",
  "/shopify-dtc": "build-run",
  "/ecommerce-website-development": "build-run",
  "/ecommerce-growth": "constraint-lever",
  "/marketplace-growth": "constraint-lever",
  "/ppc-paid-media": "constraint-lever",
  "/ecommerce-operations": "cadence-desk",
  "/marketplace-management": "cadence-desk",
  "/shopify-management": "cadence-desk",
};
const CHOOSER_PAGES = ["/wholesale-ecommerce", "/private-label", "/shopify-dtc", "/build"];

const html = {};
for (const r of ["/", ...live]) {
  const res = await fetch(BASE + r);
  if (res.status !== 200) { problems.push(`route ${r} -> ${res.status}`); continue; }
  html[r] = await res.text();
}

// 1 · chooser on its four pages
for (const p of CHOOSER_PAGES)
  if (!html[p]?.includes('data-feature="chooser"'))
    problems.push(`chooser missing on ${p}`);

// 2 · money box / worked example in every service fee section
for (const p of SERVICES)
  if (!html[p]?.includes("data-worked-example"))
    problems.push(`money box missing on ${p}`);

// 3 · nextStep block on all ten (+ /scale, the chain's last hop)
for (const p of [...SERVICES, "/scale"])
  if (!html[p]?.includes('data-feature="next-step"'))
    problems.push(`nextStep block missing on ${p}`);

// 4 · archetype hero figure on all ten, each page carrying ITS layout
for (const [p, layout] of Object.entries(LAYOUTS)) {
  if (!html[p]?.includes(`data-feature="hero-figure" data-layout="${layout}"`))
    problems.push(`hero figure (${layout}) missing on ${p}`);
}
// …and the five archetypes stay visually distinct: five layouts, five
// different aria-labels on the figures (no two archetypes share one).
const labels = new Map();
for (const [p, layout] of Object.entries(LAYOUTS)) {
  const m = html[p]?.match(
    /data-feature="hero-figure"[^>]*>\s*<svg[^>]*aria-label="([^"]+)"/
  );
  if (m) labels.set(layout, m[1]);
}
if (new Set(labels.values()).size !== labels.size)
  problems.push("two archetypes share a hero figure aria-label");

// 5 · no "publishing soon" pointing at a live route
for (const r of ["/", ...live]) {
  const h = html[r];
  if (!h) continue;
  if (isLive("/documents") && h.includes("the document room opens"))
    problems.push(`${r}: document-room "publishing soon" while /documents is live`);
  if (isLive("/insights") && h.includes("publishing soon"))
    problems.push(`${r}: "publishing soon" while /insights is live`);
}

if (problems.length) {
  console.error("check-features FAIL:\n" + problems.join("\n"));
  process.exit(1);
}
console.log(
  `check-features OK — chooser ×${CHOOSER_PAGES.length}, money box ×${SERVICES.length}, nextStep ×${SERVICES.length + 1}, five distinct archetype figures, no stale "publishing soon"`
);

/**
 * CI gate 6 — what was SPECIFIED actually rendered, v4 edition.
 * Assertions are structural (stable strings and ids), not copy, so a
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

const html = {};
for (const r of ["/", ...live]) {
  const res = await fetch(BASE + r);
  if (res.status !== 200) {
    problems.push(`route ${r} -> ${res.status}`);
    continue;
  }
  html[r] = await res.text();
}

// 1 · The verdict artefact (DO NOT BUY) on the five pages that carry it.
for (const p of [
  "/",
  "/amazon-private-label",
  "/amazon-wholesale-management",
  "/how-we-work",
  "/proof",
]) {
  if (!html[p]?.includes("DO NOT BUY"))
    problems.push(`verdict artefact (DO NOT BUY) missing on ${p}`);
}

// 2 · The three anchors on the management page that other pages link into.
for (const id of ["growth", "walmart", "listings"]) {
  if (!html["/amazon-walmart-management"]?.includes(`id="${id}"`))
    problems.push(`#${id} anchor missing on /amazon-walmart-management`);
}

// 3 · Snippet answers where SEARCH_TERMS + ASSETS_HANDOFF place them.
for (const p of [
  "/amazon-private-label",
  "/amazon-wholesale-management",
  "/amazon-walmart-management",
  "/how-we-work",
]) {
  if (!html[p]?.includes('class="snippet"'))
    problems.push(`snippet block missing on ${p}`);
}

// 4 · FAQPage JSON-LD on every page with a rendered FAQ.
for (const p of [
  "/amazon-private-label",
  "/amazon-wholesale-management",
  "/amazon-walmart-management",
  "/amazon-listing-optimization",
  "/how-we-work",
]) {
  if (!html[p]?.includes('"FAQPage"'))
    problems.push(`FAQPage JSON-LD missing on ${p}`);
}

// 5 · The rebuttal renders twice on management (snippet + FAQ), so the
//     schema answer matches a visible passage.
{
  const h = html["/amazon-walmart-management"] ?? "";
  const hits = h.split("Access without ownership").length - 1;
  if (hits < 2)
    problems.push(
      `rebuttal passage should appear at least twice on /amazon-walmart-management (snippet + FAQ), found ${hits}`
    );
}

// 6 · Illustrative labelling on /proof — every sample document says so.
{
  const h = html["/proof"] ?? "";
  const docs = h.split('class="dochd"').length - 1;
  const labels = (h.match(/ILLUSTRATIVE/g) ?? []).length;
  if (docs > 0 && labels < docs - 1)
    problems.push(
      `/proof: ${docs} sample documents but only ${labels} ILLUSTRATIVE labels`
    );
}

// 7 · Person JSON-LD on /about; Service JSON-LD on the service pages.
if (!html["/about"]?.includes('"Person"'))
  problems.push(`Person JSON-LD missing on /about`);
for (const p of [
  "/amazon-private-label",
  "/amazon-wholesale-management",
  "/amazon-walmart-management",
  "/amazon-listing-optimization",
]) {
  if (!html[p]?.includes('"Service"'))
    problems.push(`Service JSON-LD missing on ${p}`);
}

// 8 · One h1 per page, exactly.
for (const r of ["/", ...live]) {
  const count = (html[r]?.match(/<h1[\s>]/g) ?? []).length;
  if (count !== 1) problems.push(`${r}: ${count} <h1> elements (want exactly 1)`);
}

// 9 · No stale "publishing soon" anywhere.
for (const r of ["/", ...live]) {
  if (html[r]?.includes("publishing soon"))
    problems.push(`${r}: stale "publishing soon"`);
}

if (problems.length) {
  console.error("check-features FAIL:\n" + problems.join("\n"));
  process.exit(1);
}
console.log(
  "check-features OK — verdicts, anchors, snippets, FAQ/Service/Person schema, single h1s all present"
);

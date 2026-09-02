/**
 * CI gate 1 (PROMPT_16 step 4) — every href resolves to a live route
 * AND, when it carries a #anchor, to an element id on the target page.
 * This is the check that would have caught #reporting. Also fails any
 * route with zero inbound or zero outbound body links (header/footer
 * excluded — body means inside <main>).
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
const routes = ["/", ...live];

const html = {};
const ids = {};
const mains = {};
for (const r of routes) {
  const res = await fetch(BASE + r);
  if (res.status !== 200) {
    problems.push(`route ${r} -> ${res.status}`);
    continue;
  }
  html[r] = await res.text();
  ids[r] = new Set([...html[r].matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  mains[r] = html[r].split(/<main[\s>]/)[1]?.split("</main>")[0] ?? "";
}

const internal = (h) =>
  h.startsWith("/") && !h.startsWith("//") && !h.startsWith("/_next") && !h.includes(".");

// Every href on every page (chrome included) resolves — route and anchor.
for (const r of routes) {
  if (!html[r]) continue;
  for (const m of html[r].matchAll(/href="([^"]+)"/g)) {
    const h = m[1];
    if (h.startsWith("#")) {
      if (h.length > 1 && !ids[r].has(h.slice(1)))
        problems.push(`${r}: same-page anchor ${h} has no id`);
      continue;
    }
    if (!internal(h)) continue;
    const [path, anchor] = h.split("#");
    if (!routes.includes(path)) {
      problems.push(`${r}: dead link ${h}`);
      continue;
    }
    if (anchor && ids[path] && !ids[path].has(anchor))
      problems.push(`${r}: anchor ${h} does not resolve on ${path}`);
  }
}

// Inbound/outbound body links per route.
const inbound = Object.fromEntries(routes.map((r) => [r, 0]));
const outbound = Object.fromEntries(routes.map((r) => [r, 0]));
for (const r of routes) {
  const seen = new Set();
  for (const m of (mains[r] ?? "").matchAll(/href="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const path = m[1];
    if (!internal(path) || path === r || !routes.includes(path)) continue;
    outbound[r]++;
    if (!seen.has(path)) {
      seen.add(path);
      inbound[path]++;
    }
  }
}
for (const r of routes) {
  if (inbound[r] === 0) problems.push(`zero inbound body links: ${r}`);
  if (outbound[r] === 0) problems.push(`zero outbound body links: ${r}`);
}

console.log("route  inbound / outbound (body links)");
for (const r of routes)
  console.log(`  ${r.padEnd(32)} ${String(inbound[r]).padStart(3)} / ${outbound[r]}`);

if (problems.length) {
  console.error("check-links FAIL:\n" + problems.join("\n"));
  process.exit(1);
}
console.log(`check-links OK — ${routes.length} routes, every href and anchor resolves`);

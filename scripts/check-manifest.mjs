/**
 * CI gate 2 (PROMPT_16 step 4) — the manifest, the routes, the sitemap
 * and /llms.txt must agree in both directions. Requires a server
 * (`next start`) at CHECK_BASE (default http://localhost:3000).
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.CHECK_BASE || "http://localhost:3000";
const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const problems = [];

// Parse lib/site-map.ts — slug/status pairs in declaration order.
const src = readFileSync(join(ROOT, "lib/site-map.ts"), "utf8");
const entries = [...src.matchAll(/slug: "([^"]+)"[\s\S]*?status: "(live|planned)"/g)].map(
  (m) => ({ slug: m[1], status: m[2] })
);
if (entries.length < 15) problems.push(`manifest parse suspicious: ${entries.length} entries`);
const live = entries.filter((e) => e.status === "live" && !e.slug.includes("#")).map((e) => e.slug);
const planned = entries.filter((e) => e.status === "planned").map((e) => e.slug);

// Direction 1: every live slug has a route directory.
for (const slug of live) {
  if (!existsSync(join(ROOT, "app", slug.slice(1), "page.tsx")))
    problems.push(`live in manifest, no route: ${slug}`);
}
// Direction 2: every route directory is a live manifest slug.
for (const dir of readdirSync(join(ROOT, "app"), { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  if (!existsSync(join(ROOT, "app", dir.name, "page.tsx"))) continue; // og/, llms.txt/
  if (!live.includes("/" + dir.name))
    problems.push(`route exists, not live in manifest: /${dir.name}`);
}
// Planned entries must not have shipped routes.
for (const slug of planned) {
  if (existsSync(join(ROOT, "app", slug.split("#")[0].slice(1), "page.tsx")))
    problems.push(`planned in manifest but route exists: ${slug}`);
}

// Sitemap and llms.txt carry every live route and nothing dead.
const sitemap = await (await fetch(BASE + "/sitemap.xml")).text();
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  new URL(m[1]).pathname.replace(/\/$/, "") || "/"
);
const llms = await (await fetch(BASE + "/llms.txt")).text();
for (const slug of ["/", ...live]) {
  if (!locs.includes(slug)) problems.push(`missing from sitemap: ${slug}`);
  if (slug !== "/" && !llms.includes(slug)) problems.push(`missing from llms.txt: ${slug}`);
}
for (const loc of locs)
  if (loc !== "/" && !live.includes(loc)) problems.push(`sitemap lists non-live: ${loc}`);

// /documents and /insights absent from all four surfaces.
for (const gone of ["/documents", "/insights"]) {
  if (live.includes(gone)) problems.push(`${gone} is live in manifest`);
  if (existsSync(join(ROOT, "app", gone.slice(1), "page.tsx")))
    problems.push(`${gone} route exists`);
  if (locs.includes(gone)) problems.push(`${gone} in sitemap`);
  if (llms.includes(gone)) problems.push(`${gone} in llms.txt`);
}

if (problems.length) {
  console.error("check-manifest FAIL:\n" + problems.join("\n"));
  process.exit(1);
}
console.log(`check-manifest OK — ${live.length} live routes + / agree across manifest, app/, sitemap, llms.txt`);

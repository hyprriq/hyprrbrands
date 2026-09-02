/**
 * CI gate 3 (PROMPT_16 step 4) — titles and metas are MEASURED from
 * the served HTML, never trusted from an annotation. Fails outside
 * 30–60 / 120–158, and fails when og:/twitter: descriptions disagree
 * with the meta description.
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

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#x26;/g, "&");

const grab = (h, re) => {
  const m = h.match(re);
  return m ? decode(m[1]) : null;
};

for (const r of routes) {
  const res = await fetch(BASE + r);
  if (res.status !== 200) {
    problems.push(`route ${r} -> ${res.status}`);
    continue;
  }
  const h = await res.text();
  const title = grab(h, /<title>([^<]*)<\/title>/);
  const desc = grab(h, /name="description" content="([^"]*)"/);
  const og = grab(h, /property="og:description" content="([^"]*)"/);
  const tw = grab(h, /name="twitter:description" content="([^"]*)"/);
  if (title == null) problems.push(`${r}: no <title>`);
  else if (title.length < 30 || title.length > 60)
    problems.push(`${r}: title length ${title.length} ("${title}")`);
  if (desc == null) problems.push(`${r}: no meta description`);
  else if (desc.length < 120 || desc.length > 158)
    problems.push(`${r}: meta length ${desc.length}`);
  if (og != null && desc != null && og !== desc)
    problems.push(`${r}: og:description disagrees with meta description`);
  if (tw != null && desc != null && tw !== desc)
    problems.push(`${r}: twitter:description disagrees with meta description`);
  console.log(`  ${r.padEnd(32)} title ${String(title?.length).padStart(2)} · meta ${desc?.length}`);
}

if (problems.length) {
  console.error("check-meta FAIL:\n" + problems.join("\n"));
  process.exit(1);
}
console.log(`check-meta OK — ${routes.length} routes measured within 30–60 / 120–158`);

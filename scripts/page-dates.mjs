/**
 * Sitemap lastmod per page (PROMPT_24 §7.2). Writes lib/page-dates.json
 * with, for every route, the date of the last commit that touched its
 * page file — or today when the file has uncommitted changes, so the
 * date is right the moment the change is committed.
 *
 * The file is committed rather than computed at build time because
 * Vercel builds from a shallow clone, where `git log` would report
 * the clone boundary, not the real last change.
 *
 *   node scripts/page-dates.mjs          write the file
 *   node scripts/page-dates.mjs --check  fail if it is stale (npm run check)
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const OUT = join(ROOT, "lib/page-dates.json");
const src = readFileSync(join(ROOT, "lib/site-map.ts"), "utf8");
const live = [...src.matchAll(/slug: "([^"]+)"[\s\S]*?status: "(live|planned)"/g)]
  .filter((m) => m[2] === "live" && !m[1].includes("#"))
  .map((m) => m[1]);

const git = (cmd) => execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
const today = new Date().toISOString().slice(0, 10);

const dates = {};
for (const slug of ["/", ...live]) {
  const file = slug === "/" ? "app/page.tsx" : `app${slug}/page.tsx`;
  const dirty = git(`git status --porcelain -- ${file}`) !== "";
  const committed = git(`git log -1 --format=%cs -- ${file}`);
  dates[slug] = dirty || !committed ? today : committed;
}

const next = JSON.stringify(dates, null, 2) + "\n";
if (process.argv.includes("--check")) {
  const current = existsSync(OUT) ? readFileSync(OUT, "utf8") : "";
  if (current !== next) {
    console.error("page-dates STALE — run `npm run dates` and commit lib/page-dates.json");
    process.exit(1);
  }
  console.log(`page-dates OK — ${Object.keys(dates).length} routes dated`);
} else {
  writeFileSync(OUT, next);
  console.log(`page-dates written — ${Object.keys(dates).length} routes`);
}

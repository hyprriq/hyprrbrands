/**
 * CI gate 5 (PROMPT_19 step 3) — image discipline, measured from the
 * served HTML. Alt text is a ranking surface and an AI-answer passage,
 * so it is gated like the metas.
 *
 * Strict rules apply to pipeline images (src under /images/): alt
 * present and ≥ 20 characters; alt not just "image/photo/screenshot/
 * picture"; hyphenated-word filenames; width+height set; srcset at
 * three widths with sizes. Other images (the 46px channel marks) are
 * identity marks — they need only a non-empty alt.
 *
 * Also enforces the 200KB budget on every committed 1280 rendition,
 * so a heavy file fails CI even if the build step was skipped.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.CHECK_BASE || "http://localhost:3000";
const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const problems = [];

const src = readFileSync(join(ROOT, "lib/site-map.ts"), "utf8");
const live = [...src.matchAll(/slug: "([^"]+)"[\s\S]*?status: "(live|planned)"/g)]
  .filter((m) => m[2] === "live" && !m[1].includes("#"))
  .map((m) => m[1]);

const GENERIC = /^(image|photo|photograph|screenshot|picture)s?$/i;
let imgCount = 0;
let pipelineCount = 0;

for (const r of ["/", ...live]) {
  const res = await fetch(BASE + r);
  if (res.status !== 200) {
    problems.push(`route ${r} -> ${res.status}`);
    continue;
  }
  const h = await res.text();
  for (const m of h.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    imgCount++;
    const attr = (name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
    const alt = attr("alt");
    const srcAttr = attr("src") ?? "";
    if (alt == null || alt.trim() === "")
      problems.push(`${r}: <img> with missing/empty alt (${srcAttr.slice(0, 60)})`);
    const isPipeline = srcAttr.startsWith("/images/") || /\/images\//.test(srcAttr);
    if (!isPipeline) continue;
    pipelineCount++;
    if (alt && alt.trim().length < 20)
      problems.push(`${r}: alt under 20 chars: "${alt}"`);
    if (alt && GENERIC.test(alt.trim()))
      problems.push(`${r}: generic alt: "${alt}"`);
    const base = srcAttr.split("/").pop() ?? "";
    if (!/^[a-z0-9]+(-[a-z0-9]+)+\.webp$/.test(base))
      problems.push(`${r}: filename not hyphenated words: ${base}`);
    if (!attr("width") || !attr("height"))
      problems.push(`${r}: missing width/height on ${base}`);
    const srcset = attr("srcset") ?? attr("srcSet");
    if (!srcset || srcset.split(",").length < 3)
      problems.push(`${r}: srcset missing or under three widths on ${base}`);
    if (!attr("sizes")) problems.push(`${r}: sizes missing on ${base}`);
  }
}

// Committed 1280 renditions inside the 200KB budget.
const IMAGES = join(ROOT, "public/images");
if (existsSync(IMAGES)) {
  const walk = (dir) => {
    for (const d of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, d.name);
      if (d.isDirectory()) {
        if (d.name !== "_inbox") walk(p);
      } else if (/-1280\.webp$/.test(d.name) && statSync(p).size > 200 * 1024)
        problems.push(`over budget: ${d.name} = ${Math.round(statSync(p).size / 1024)}KB`);
    }
  };
  walk(IMAGES);
}

if (problems.length) {
  console.error("check-images FAIL:\n" + problems.join("\n"));
  process.exit(1);
}
console.log(
  `check-images OK — ${imgCount} <img> checked (${pipelineCount} pipeline), alt/srcset/dimensions/budget clean`
);

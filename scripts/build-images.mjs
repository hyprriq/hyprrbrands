/**
 * PROMPT_19 step 2 — the build-time image step.
 *
 * Sources land in public/images/_inbox/ from the owner, named
 *   <page-slug>__<subject>-<variant>.<jpg|jpeg|png|webp>
 * e.g. private-label__skincare-packaging-flatlay.jpg
 *
 * For each source this script writes
 *   public/images/<page-slug>/<subject>-<variant>-{640,1280,1920}.webp
 * and records the 1280 rendition's dimensions in
 * lib/image-manifest.json — the component refuses to render an image
 * that is not in the manifest, so width/height are always set.
 *
 * The 1280 rendition must land under 200KB: quality steps down
 * 80 → 65 → 50, and if it is still over, the script EXITS 1 — a slow
 * hero is worse than no hero. _inbox/ is gitignored, so the heavy
 * source files never deploy ("kept out of public/" in effect: what is
 * not committed is not served in production).
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const INBOX = join(ROOT, "public/images/_inbox");
const OUT = join(ROOT, "public/images");
const MANIFEST = join(ROOT, "lib/image-manifest.json");
const WIDTHS = [640, 1280, 1920];
const BUDGET = 200 * 1024;

if (!existsSync(INBOX)) {
  console.log("build-images: no _inbox directory — nothing to do");
  process.exit(0);
}
const sources = readdirSync(INBOX).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
if (sources.length === 0) {
  console.log("build-images: _inbox empty — nothing to do");
  process.exit(0);
}

const manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));
let failed = false;

for (const file of sources) {
  const m = file.match(/^([a-z0-9-]+)__([a-z0-9-]+)\.(jpe?g|png|webp)$/i);
  if (!m) {
    console.error(`SKIP ${file}: name must be <page-slug>__<subject-variant>.<ext>, hyphenated words`);
    failed = true;
    continue;
  }
  const [, page, name] = m;
  const dir = join(OUT, page);
  mkdirSync(dir, { recursive: true });
  const src = sharp(join(INBOX, file)).rotate();
  const meta = await src.metadata();

  for (const w of WIDTHS) {
    const outPath = join(dir, `${name}-${w}.webp`);
    const width = Math.min(w, meta.width ?? w);
    let quality = 80;
    let info;
    for (;;) {
      info = await src
        .clone()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality })
        .toFile(outPath);
      if (w !== 1280 || info.size <= BUDGET || quality <= 50) break;
      quality = quality === 80 ? 65 : 50;
    }
    if (w === 1280) {
      if (info.size > BUDGET) {
        console.error(`FAIL ${file}: 1280 rendition is ${Math.round(info.size / 1024)}KB (> 200KB) even at q50`);
        failed = true;
      }
      manifest[`/images/${page}/${name}`] = { w: info.width, h: info.height };
      console.log(`${page}/${name}: 1280 → ${Math.round(info.size / 1024)}KB (q${quality}), ${info.width}×${info.height}`);
    }
  }
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
if (failed) process.exit(1);
console.log(`build-images OK — ${sources.length} source(s) processed, manifest updated`);

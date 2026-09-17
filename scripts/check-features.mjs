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
  "/amazon-ppc-management",
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
  "/amazon-ppc-management",
  "/how-we-work",
]) {
  if (!html[p]?.includes('"FAQPage"'))
    problems.push(`FAQPage JSON-LD missing on ${p}`);
}

// 5 · The rebuttal renders as the snippet on management (PROMPT_24
//     dropped the FAQ that repeated it word for word).
{
  const h = html["/amazon-walmart-management"] ?? "";
  const hits = h.split("Access without ownership").length - 1;
  if (hits < 1)
    problems.push(
      `rebuttal passage missing on /amazon-walmart-management (snippet), found ${hits}`
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
  "/amazon-ppc-management",
]) {
  if (!html[p]?.includes('"Service"'))
    problems.push(`Service JSON-LD missing on ${p}`);
}

// 7b · PROMPT_24 §2 — every infographic slot renders inside the mobile
//      scroll wrapper, and the expected count is on each route.
const VISUAL_SLOTS = {
  "/": 3,
  "/amazon-private-label": 4,
  "/amazon-wholesale-management": 5,
  "/amazon-walmart-management": 3,
  "/amazon-listing-optimization": 2,
  "/amazon-ppc-management": 2,
  "/how-we-work": 1,
  "/proof": 3,
};
for (const [p, n] of Object.entries(VISUAL_SLOTS)) {
  const got = (html[p]?.match(/data-feature="visual-scroll"/g) ?? []).length;
  if (got !== n) problems.push(`${p}: ${got} visual-scroll slots (want ${n})`);
}

// 7c · PROMPT_24 §10 — "Management" is a dropdown button holding the
//      three seller-side services; "Listings" is no longer top-level.
{
  const h = html["/"] ?? "";
  const nav = h.split("<nav")[1]?.split("</nav>")[0] ?? "";
  if (!/<button[^>]*aria-haspopup="menu"[^>]*>Management/.test(nav))
    problems.push("nav: Management dropdown button missing");
  if (!nav.includes('data-feature="nav-management-group"'))
    problems.push("nav: data-feature=nav-management-group missing from the trigger");
  for (const href of ["/amazon-walmart-management", "/amazon-listing-optimization", "/amazon-ppc-management"])
    if (!nav.includes(`href="${href}"`)) problems.push(`nav: ${href} missing from the Management menu`);
  if (new RegExp('<a[^>]*href="/amazon-listing-optimization"[^>]*>Listings<').test(nav))
    problems.push("nav: Listings still a top-level link");
}

// 7d · PROMPT_24 §4.1 P0 — the compliance gates are an HTML table.
if (!/<table[^>]*>/.test(html["/amazon-private-label"]?.split('data-feature="compliance-matrix"')[1] ?? ""))
  problems.push("/amazon-private-label: compliance-matrix table missing");

// 7e · PROMPT_24 §3 — every service page shows exactly five FAQs, and
//      the FAQPage JSON-LD carries the same five.
for (const p of [
  "/amazon-private-label",
  "/amazon-wholesale-management",
  "/amazon-walmart-management",
  "/amazon-listing-optimization",
  "/amazon-ppc-management",
]) {
  const h = html[p] ?? "";
  const visible = (h.match(/<details/g) ?? []).length;
  const schema = (h.match(/"@type":"Question"/g) ?? []).length;
  if (visible !== 5 || schema !== 5)
    problems.push(`${p}: ${visible} visible FAQs / ${schema} in FAQPage (want 5 / 5)`);
}

// 7f · PROMPT_24 §12 — the header wordmark is the inline outlined SVG,
//      the footer carries the entity line, and no phone number renders.
{
  const h = html["/"] ?? "";
  const nav = h.split("<nav")[1]?.split("</nav>")[0] ?? "";
  if (/<img[^>]*logo/i.test(nav)) problems.push("nav: logo is an <img>, expected the inline SVG");
  if (!/<svg[^>]*aria-label="Hyprr Brands"/.test(nav)) problems.push("nav: inline wordmark missing");
  if (!h.includes("operated by Hyprr Retail LLC")) problems.push("footer: entity line missing");
  if (!h.includes("hello@hyprrbrands.com")) problems.push("footer: hello@ missing");
}
for (const r of ["/", ...live]) {
  const text = (html[r] ?? "").replace(/<script[^>]*>[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ");
  if (/\b\+?1?[\s(-]*\d{3}[\s)-]*\d{3}[\s-]*\d{4}\b/.test(text) || /tel:/.test(html[r] ?? ""))
    problems.push(`${r}: a phone number renders`);
  for (const gone of [
    "PHOTOGRAPH TO COME",
    "under owner review",
    "04124",
    "Product customization",
    "Singapore hours",
    "one click",
    "no FBA equivalent",
    "Categories we develop and buy in",
    "hyprr@hyprrbrands.com",
    "shared desk",
    "registration details join",
  ])
    if ((html[r] ?? "").includes(gone)) problems.push(`${r}: stale "${gone}" still renders`);
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

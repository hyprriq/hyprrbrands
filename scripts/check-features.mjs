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

// 1 · The verdict artefact (DO NOT BUY) on the pages that carry it.
//     PROMPT_26 moved it off "/" and /how-we-work (no image in the home
//     phases section; /how-we-work links to /proof for the template).
for (const p of [
  "/amazon-private-label",
  "/amazon-wholesale-management",
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

// 7 · Service JSON-LD on the service pages. (PROMPT_26 §2: no founder
//     name anywhere, so the Person node on /about is gone on purpose.)
if (html["/about"]?.includes('"Person"'))
  problems.push(`Person JSON-LD still on /about (PROMPT_26 §2)`);
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
  "/": 0,
  "/amazon-private-label": 5,
  "/amazon-wholesale-management": 5,
  "/amazon-walmart-management": 4,
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
  // PROMPT_24.1 #1 — Company ▾ (Proof, About, Contact) after Management ▾.
  if (!/<button[^>]*aria-haspopup="menu"[^>]*data-feature="nav-company-group"[^>]*>Company/.test(nav))
    problems.push("nav: Company dropdown button missing");
  for (const href of ["/proof", "/about", "/contact"])
    if (!nav.includes(`href="${href}"`)) problems.push(`nav: ${href} missing from the Company menu`);
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
    "no FBA equivalent",
    "Categories we develop and buy in",
    "hyprr@hyprrbrands.com",
    "shared desk",
    "registration details join",
  ])
    if ((html[r] ?? "").includes(gone)) problems.push(`${r}: stale "${gone}" still renders`);
}

// 7g · PROMPT_26 — home router, phases, who-runs and the footer FAQ;
//      /how-we-work built in full; the moved sections on the service
//      pages; the track record on /about only.
{
  const h = html["/"] ?? "";
  if (!h.includes('id="start"')) problems.push("/: #start router missing");
  const routes = (h.match(/<article class="route"/g) ?? []).length;
  if (routes !== 4) problems.push(`/: ${routes} route cards (want 4)`);
  if (!h.includes('data-feature="home-phases"')) problems.push("/: home-phases missing");
  const phasesHtml = h.split('data-feature="home-phases"')[1]?.split("</section>")[0] ?? "";
  if (/<img|<picture/.test(phasesHtml)) problems.push("/: an image renders inside the home phases section");
  if (!h.includes('data-feature="home-who-runs"')) problems.push("/: home-who-runs missing");
  if (!h.includes('data-feature="footer-faq"')) problems.push("/: footer FAQ missing");
  if (!h.includes('"FAQPage"')) problems.push("/: footer FAQPage JSON-LD missing");
  const faqQs = (h.match(/"@type":"Question"/g) ?? []).length;
  const faqH3 = (h.split('data-feature="footer-faq"')[1]?.split("</div></div>")[0]?.match(/<h3/g) ?? []).length;
  if (faqQs !== 5 || faqH3 !== 5) problems.push(`/: ${faqH3} footer FAQ questions / ${faqQs} in FAQPage (want 5 / 5)`);
  for (const [text, where] of [
    ["13,000", "track record"],
    ["upwork.com", "Upwork link"],
    ["League of Ecomm", "client names"],
  ])
    if (h.includes(text)) problems.push(`/: ${where} must live on /about only`);
  // Section order: hero, router, phases, statement, who-runs.
  const order = ['class="hero"', 'id="start"', 'id="how"', 'data-feature="home-statement"', 'id="who"'].map((k) => h.indexOf(k));
  if (order.some((i) => i < 0) || order.some((i, k) => k && i < order[k - 1]))
    problems.push("/: sections out of order (hero, router, phases, statement, who-runs)");
}
{
  const h = html["/how-we-work"] ?? "";
  const panels = (h.match(/data-feature="route-panel"/g) ?? []).length;
  if (panels !== 3) problems.push(`/how-we-work: ${panels} route panels in server HTML (want 3)`);
  if (!h.includes('id="routes"')) problems.push("/how-we-work: #routes missing");
  if (!h.includes('data-feature="engagement-map"')) problems.push("/how-we-work: engagement map missing");
  for (const id of ["phases", "cadence", "fees", "documents", "faq"])
    if (!h.includes(`id="${id}"`)) problems.push(`/how-we-work: #${id} missing`);
  if ((h.match(/<details/g) ?? []).length !== 5 || (h.match(/"@type":"Question"/g) ?? []).length !== 5)
    problems.push("/how-we-work: want exactly 5 FAQs in DOM and FAQPage");
}
{
  const a = html["/about"] ?? "";
  for (const [text, where] of [["13,000", "track record"], ["upwork.com", "Upwork link"], ["League of Ecomm", "client chips"]])
    if (!a.includes(text)) problems.push(`/about: ${where} missing`);
  const upwork = a.match(/<a[^>]*upwork\.com[^>]*>/)?.[0] ?? "";
  if (!upwork || !/rel="noopener[^"]*"/.test(upwork) || !/target="_blank"/.test(upwork))
    problems.push("/about: Upwork link must carry rel=noopener");
  if (!html["/amazon-walmart-management"]?.includes('data-feature="loss-section"'))
    problems.push("/amazon-walmart-management: loss section missing");
  const pl = html["/amazon-private-label"] ?? "";
  if (!pl.includes('data-feature="selection-tests"')) problems.push("/amazon-private-label: selection section missing");
  const tests = (pl.split('data-feature="selection-tests"')[1]?.split("</section>")[0]?.match(/<div class="test"/g) ?? []).length;
  if (tests !== 7) problems.push(`/amazon-private-label: ${tests} selection tests (want 7)`);
  if (pl.indexOf('id="selection"') > pl.indexOf('id="build"')) problems.push("/amazon-private-label: selection must sit above #build");
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
  "check-features OK — verdicts, anchors, snippets, FAQ/Service schema, PROMPT_26 sections, single h1s all present"
);

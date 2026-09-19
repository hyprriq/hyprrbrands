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
//     PROMPT_33 moved the private label verdict behind the /proof link.
for (const p of [
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
  "/amazon-private-label": 1,
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

// 7d · PROMPT_33 §2.6 — the compliance matrix left the private label page.
if (html["/amazon-private-label"]?.includes('data-feature="compliance-matrix"'))
  problems.push("/amazon-private-label: compliance matrix still renders");

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
  // PROMPT_31 §6.13 adds two to private label: seven there, five elsewhere.
  const want = p === "/amazon-private-label" ? 7 : 5;
  if (visible !== want || schema !== want)
    problems.push(`${p}: ${visible} visible FAQs / ${schema} in FAQPage (want ${want} / ${want})`);
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
  // PROMPT_32 §1 — the footer FAQ and its FAQPage are gone from every
  // page; the home page carries no FAQ and no FAQPage at all.
  for (const r of ["/", ...live]) {
    if (html[r]?.includes('data-feature="footer-faq"')) problems.push(`${r}: footer FAQ still renders`);
  }
  if (h.includes('"FAQPage"')) problems.push("/: a FAQPage JSON-LD renders on the home page");
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
  // PROMPT_33 — seven sections. Selection keeps the plate and links to
  // /proof; the eight stages are name + one line, no columns, no
  // durations, no image inside the rows; the hero H1 and CTAs are DOM
  // text; the factory chain, the seven-test rows, the decisions cards,
  // the floors, the value section and the fee sections are gone.
  if (!pl.includes('data-feature="selection-tests"')) problems.push("/amazon-private-label: selection section missing");
  if (!pl.includes("selection-tests-plate")) problems.push("/amazon-private-label: seven-tests plate missing");
  if (!pl.includes('id="lifecycle"')) problems.push("/amazon-private-label: #lifecycle missing");
  const stagesHtml = pl.split('data-feature="stages"')[1]?.split("</ol>")[0] ?? "";
  const stages = (stagesHtml.match(/class="stage-row"/g) ?? []).length;
  if (stages !== 8) problems.push(`/amazon-private-label: ${stages} stage rows (want 8)`);
  for (const name of ["Opportunity", "Validate", "Product", "Brand", "Supply chain", "Launch", "Operate", "Expand"])
    if (!stagesHtml.includes(`<h3>${name}</h3>`)) problems.push(`/amazon-private-label: stage "${name}" missing`);
  if (/<img/.test(stagesHtml)) problems.push("/amazon-private-label: an image renders inside the stage rows");
  if (/\b(weeks?|months?|days?)\b/i.test(stagesHtml.replace(/<[^>]+>/g, " ")))
    problems.push("/amazon-private-label: a duration appears inside the stage rows");
  for (const gone of ['data-feature="factory-chain"', 'class="chain-row"', 'class="test"', 'data-feature="decisions"', 'data-feature="floors"', 'data-feature="value"', 'id="direct-costs"', 'id="import"', 'id="declined"', 'id="operate"', "pl-factory-chain"])
    if (pl.includes(gone)) problems.push(`/amazon-private-label: deleted block still renders (${gone})`);
  const plText = pl.replace(/<script[^>]*>[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ")
    .split("There is no ninety-day private label launch.").join(" ");
  if (/ninety[- ]day|90[- ]day|60[\u2013-]90|day 60/i.test(plText))
    problems.push("/amazon-private-label: a ninety-day / launch-date claim renders");
  if (!/<h1[^>]*>Build a brand, not a listing\.<\/h1>/.test(pl)) problems.push("/amazon-private-label: hero H1 is not DOM text");
  if ((pl.match(/Build a brand, not a listing\.<\/h1>/g) ?? []).length !== 1) problems.push("/amazon-private-label: the H1 must appear exactly once");
  if (!pl.includes('href="#lifecycle"')) problems.push("/amazon-private-label: hero CTA to #lifecycle missing");
  if (!pl.includes('class="snippet"')) problems.push("/amazon-private-label: the search-answer block is missing");
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

import { SITE_MAP, SITE_ORIGIN, isLive } from "@/lib/site-map";

/**
 * /llms.txt — §N. Generated from the site manifest, like the sitemap,
 * so it lists only live pages and cannot drift. The robots.txt AI
 * crawler policy is the companion piece.
 */
export const dynamic = "force-static";

export function GET() {
  const byGroup = (group: string) =>
    SITE_MAP.filter(
      (p) => p.group === group && isLive(p.slug) && !p.slug.includes("#")
    );
  const entry = (p: { title: string; slug: string; oneLine: string }) =>
    `- [${p.title}](${SITE_ORIGIN}${p.slug})${
      p.oneLine
        ? `: ${p.oneLine.charAt(0).toLowerCase()}${p.oneLine.slice(1)}`
        : ""
    }`;

  // PROMPT_16 step 4: check-manifest requires every live route here,
  // so the file lists all groups — not a curated subset that drifts.
  const lines: string[] = [
    "# Hyprr Brands",
    "",
    "> Ecommerce operations agency. We build, grow and operate Amazon (US and UK), Walmart (US) and Shopify",
    "> businesses on behalf of the people who own them. The client owns the accounts, the",
    "> inventory and the capital, and approves every material purchase.",
    "",
    "## The three engines",
    ...byGroup("hub").map(entry),
    "",
    "## Services",
    ...byGroup("service").map(entry),
    "",
    "## How we work",
    `- [How we work](${SITE_ORIGIN}/how-we-work): the operating cycle, approval gate and fee mechanic`,
  ];
  if (isLive("/documents")) {
    lines.push(
      `- [Documents](${SITE_ORIGIN}/documents): the paperwork, ungated`
    );
  }
  lines.push(
    `- [True cost calculator](${SITE_ORIGIN}/true-cost): what launching a product costs, from your own inputs`,
    "",
    "## Company",
    `- [About](${SITE_ORIGIN}/about): who runs the operation, and the company facts you can check`,
    `- [Contact](${SITE_ORIGIN}/contact): tell us what you are trying to build`,
    "",
    "## Policies",
    `- [Privacy policy](${SITE_ORIGIN}/privacy)`,
    `- [Terms of service](${SITE_ORIGIN}/terms)`,
    `- [Accessibility statement](${SITE_ORIGIN}/accessibility)`,
    `- [Earnings claims policy](${SITE_ORIGIN}/earnings-claims): no income figures, no projected returns, in writing`,
    "",
    "## Notes",
    "- Clients are in the US, UK, Europe and the Middle East, selling on Amazon US, Amazon UK and Walmart US.",
    "- Hyprr publishes no earnings claims, income figures or projected returns.",
    ""
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

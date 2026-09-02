import { SITE_MAP, SITE_ORIGIN, isLive } from "@/lib/site-map";

/**
 * /llms.txt — §N. Generated from the site manifest, like the sitemap,
 * so it lists only live pages and cannot drift. The robots.txt AI
 * crawler policy is the companion piece.
 */
export const dynamic = "force-static";

export function GET() {
  const services = SITE_MAP.filter(
    (p) => p.group === "service" && isLive(p.slug) && !p.slug.includes("#")
  );

  const lines: string[] = [
    "# Hyprr Brands",
    "",
    "> Ecommerce operations agency. We build, grow and operate Amazon (US and UK), Walmart (US) and Shopify",
    "> businesses on behalf of the people who own them. The client owns the accounts, the",
    "> inventory and the capital, and approves every material purchase.",
    "",
    "## Services",
    ...services.map(
      (p) =>
        `- [${p.title}](${SITE_ORIGIN}${p.slug}): ${p.oneLine.charAt(0).toLowerCase()}${p.oneLine.slice(1)}`
    ),
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
    "## Notes",
    "- Clients are in the US, UK, Europe and the Middle East, selling on Amazon US, Amazon UK and Walmart US.",
    "- Hyprr publishes no earnings claims, income figures or projected returns.",
    ""
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

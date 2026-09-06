import { SITE_MAP, SITE_ORIGIN } from "@/lib/site-map";

/**
 * /llms.txt — generated from the site manifest, like the sitemap, so
 * it lists only live pages and cannot drift. The robots.txt AI
 * crawler policy is the companion piece.
 */
export const dynamic = "force-static";

export function GET() {
  const byGroup = (group: string) =>
    SITE_MAP.filter((p) => p.group === group && p.status === "live");
  const entry = (p: { title: string; slug: string; oneLine: string }) =>
    `- [${p.title}](${SITE_ORIGIN}${p.slug})${
      p.oneLine
        ? `: ${p.oneLine.charAt(0).toLowerCase()}${p.oneLine.slice(1)}`
        : ""
    }`;

  const lines: string[] = [
    "# Hyprr Brands",
    "",
    "> Amazon and Walmart marketplace operations. We build, operate and scale",
    "> businesses on Amazon and Walmart — private label, wholesale, listing",
    "> optimization and account management. The client owns the accounts, the",
    "> stock and every buying decision, and approves every material purchase.",
    "",
    `- [Home](${SITE_ORIGIN}/): build it, run it, scale it — on Amazon and Walmart`,
    "",
    "## Services",
    ...byGroup("service").map(entry),
    "",
    "## Company",
    ...byGroup("company").map(entry),
    "",
    "## Policies",
    ...byGroup("legal").map(
      (p) => `- [${p.h1}](${SITE_ORIGIN}${p.slug})`
    ),
    "",
    "## Notes",
    "- Amazon in the US, UK, Europe and the Gulf. Walmart in the US.",
    "- Hyprr publishes no earnings claims, income figures or projected returns.",
    "- Fees are fixed — never a percentage of advertising spend or of capital.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

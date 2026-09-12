import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { OG_PAGES } from "@/lib/og-pages";

/**
 * Share card — replicates the 6 Sep handoff card design so the
 * dynamic route can ship instead of the static PNG folder: petrol
 * gradient ground, mono eyebrow, Space Grotesk headline (final
 * sentence in citrus, citrus dash under it), logo bottom left,
 * "Amazon · Walmart" bottom right. PNG out, per the handoff.
 */
export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(OG_PAGES).map((slug) => ({ slug }));
}

/** Last sentence renders citrus, everything before it white —
 *  matching og-home / og-private-label in the handoff. */
function splitHeadline(title: string): { white: string; citrus: string } {
  const sentences = title.match(/[^.!?]+[.!?]+(?:\s|$)/g)?.map((s) => s.trim());
  if (!sentences || sentences.length < 2) return { white: title, citrus: "" };
  return {
    white: sentences.slice(0, -1).join(" "),
    citrus: sentences[sentences.length - 1],
  };
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const page = OG_PAGES[slug];
  if (!page) return new Response("Not found", { status: 404 });

  const [grotesk, mono, logo] = await Promise.all([
    readFile(path.join(process.cwd(), "assets/fonts/Inter-Bold.ttf")),
    readFile(
      path.join(process.cwd(), "assets/fonts/JetBrainsMono-Regular.ttf")
    ),
    readFile(
      path.join(process.cwd(), "public/brand/hyprr-logo-on-petrol-512.png")
    ),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const { white, citrus } = splitHeadline(page.title);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0B2D33 0%, #123F46 55%, #0B2D33 100%)",
          padding: "72px 76px",
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            letterSpacing: "0.12em",
            color: "#8FADAB",
          }}
        >
          {page.eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 64,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {white}
          </div>
          {citrus ? (
            <div
              style={{
                fontFamily: "Inter",
                fontSize: 64,
                fontWeight: 700,
                color: "#D7F04A",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                maxWidth: 1000,
              }}
            >
              {citrus}
            </div>
          ) : null}
          <div
            style={{
              width: 96,
              height: 8,
              background: "#D7F04A",
              borderRadius: 4,
              marginTop: 28,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={236} height={60} alt="" />
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 24,
              color: "#9FBCB9",
            }}
          >
            Amazon · Walmart
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: grotesk, weight: 700, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  );
}

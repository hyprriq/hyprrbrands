import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { OG_PAGES } from "@/lib/og-pages";

/**
 * Share card — one design, generated per page from its own H1.
 * v4 skin: petrol ground, citrus rule, Space Grotesk. No stock
 * imagery, no gradients, no generated faces.
 */
export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(OG_PAGES).map((slug) => ({ slug }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const page = OG_PAGES[slug];
  if (!page) return new Response("Not found", { status: 404 });

  const [grotesk, mono] = await Promise.all([
    readFile(path.join(process.cwd(), "assets/fonts/SpaceGrotesk-Bold.ttf")),
    readFile(
      path.join(process.cwd(), "assets/fonts/JetBrainsMono-Regular.ttf")
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#123F46",
        }}
      >
        <div style={{ width: "100%", height: 8, background: "#D7F04A" }} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 68,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 1040,
            }}
          >
            {page.title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 80px 56px",
          }}
        >
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 32,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            hyprr. brands
          </div>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 24,
              color: "#9FBCB9",
            }}
          >
            {page.path}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Space Grotesk", data: grotesk, weight: 700, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  );
}

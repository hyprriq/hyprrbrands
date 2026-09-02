import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { OG_PAGES } from "@/lib/og-pages";

/**
 * Share card — prompt 8 B1. One design, generated per page from its
 * own H1: Petrol ground, a 6px engine rule (all three engines for
 * non-engine pages), the H1 in Archivo ExtraBold, the wordmark and
 * the URL path. No stock imagery, no gradients, no generated faces.
 */
export const dynamic = "force-static";

const ENGINE_COLOR = {
  build: "#FFC84A",
  grow: "#B8F34A",
  operate: "#45D8C0",
} as const;

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

  const [archivo, mono] = await Promise.all([
    readFile(path.join(process.cwd(), "assets/fonts/Archivo-ExtraBold.ttf")),
    readFile(
      path.join(process.cwd(), "assets/fonts/JetBrainsMono-Regular.ttf")
    ),
  ]);

  const rule = page.engine ? (
    <div
      style={{
        width: "100%",
        height: 6,
        background: ENGINE_COLOR[page.engine],
        display: "flex",
      }}
    />
  ) : (
    <div style={{ width: "100%", height: 6, display: "flex" }}>
      <div style={{ flex: 1, background: ENGINE_COLOR.build }} />
      <div style={{ flex: 1, background: ENGINE_COLOR.grow }} />
      <div style={{ flex: 1, background: ENGINE_COLOR.operate }} />
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0A4E5C",
        }}
      >
        {rule}
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
              fontFamily: "Archivo",
              fontSize: 72,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
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
              fontFamily: "Archivo",
              fontSize: 32,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            hyprr brands
          </div>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 24,
              color: "#B6D6DC",
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
        { name: "Archivo", data: archivo, weight: 800, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  );
}

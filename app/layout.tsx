import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE_ORIGIN } from "@/lib/site-map";
import JsonLd from "@/components/JsonLd";
import { organizationLd, websiteLd } from "@/lib/schema";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Dock from "@/components/Dock";
import "./globals.css";

/* Self-hosted via next/font — the browser never contacts Google.
   TYPOGRAPHY_TICKET §1: one family. Inter carries headings and body;
   Space Grotesk survives only inside the logo SVG (outlined paths,
   no webfont needed). JetBrains Mono stays for data. */
const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

/* Icons come from the file conventions — app/favicon.ico, app/icon.svg
   and app/apple-icon.png are the v2.0 kit files (PROMPT_24 §11.2);
   the manifest and its 192/512/maskable icons sit in public/. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Amazon and Walmart Ecommerce Operations Agency | Hyprr",
  description:
    "We run Amazon (US, UK, EU, Gulf) and Walmart US accounts that stay in your name. Listings, PPC and operations for a fixed fee.",
  openGraph: { type: "website", siteName: "Hyprr Brands" },
  twitter: { card: "summary_large_image" },
  manifest: "/site.webmanifest",
  // Vercel previews must never compete with the domain.
  ...(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production"
    ? { robots: { index: false, follow: false } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#17151F",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${body.variable} ${mono.variable}`}
    >
      <body>
        <JsonLd nodes={[organizationLd(), websiteLd()]} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Dock />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Amazon & Walmart Agency | Build, Operate, Scale — Hyprr",
  description:
    "We build, operate and scale Amazon and Walmart businesses. You own the accounts, the stock and every buying decision. Book a call.",
  openGraph: { type: "website", siteName: "Hyprr Brands" },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/brand/favicon.ico",
    apple: "/brand/hyprr-icon-petrol-180.png",
  },
  // Vercel previews must never compete with the domain.
  ...(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production"
    ? { robots: { index: false, follow: false } }
    : {}),
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

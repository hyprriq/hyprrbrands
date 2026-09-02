import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { SITE_ORIGIN } from "@/lib/site-map";
import JsonLd from "@/components/JsonLd";
import { organizationLd, websiteLd } from "@/lib/schema";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Ecommerce Operations Agency | Hyprr Brands",
  description:
    "Hyprr builds, grows and operates ecommerce businesses on Amazon US & UK, Walmart US and Shopify. You own the accounts and the inventory. We run the operation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "You own the business. We run the operation.",
    description:
      "Ecommerce operations across Amazon US & UK, Walmart US and Shopify — wholesale, private label and DTC.",
    type: "website",
    url: "/",
    siteName: "Hyprr Brands",
    images: [
      {
        url: "/og/home",
        width: 1200,
        height: 630,
        alt: "You own the business. We run the operation.",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og/home"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${archivo.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd nodes={[organizationLd(), websiteLd()]} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

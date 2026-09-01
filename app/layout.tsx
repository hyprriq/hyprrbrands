import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { SITE_ORIGIN } from "@/lib/site-map";
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
  title: "Hyprr Brands | Ecommerce Operations, Wholesale, Private Label & DTC",
  description:
    "Hyprr builds, grows and operates ecommerce businesses on Amazon, Walmart and Shopify — wholesale, private label and DTC. You own the accounts and the inventory. We run the operation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "You own the business. We run the operation.",
    description:
      "Ecommerce operations across Amazon, Walmart and Shopify — wholesale, private label and DTC.",
    type: "website",
    url: "/",
    siteName: "Hyprr Brands",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${archivo.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { ogImageMeta } from "@/lib/og-pages";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Hyprr Brands",
  description:
    "The terms that apply to using this website. Engagement terms live in the written agreement each client signs.",
  alternates: { canonical: "/terms" },
  ...ogImageMeta("terms"),
};

export default function Page() {
  return (
    <LegalPage title="Terms of service" version="v0.1 · 2 September 2026 · under owner review">
      <p>
        These terms cover the use of this website. The terms of an actual
        engagement with Hyprr Retail LLC are set out in the written
        agreement each client signs — nothing on this site forms part of
        that agreement or amends it.
      </p>
      <h2>What this site is</h2>
      <p>
        The site describes how Hyprr works and what its services involve.
        It is informational: nothing here is legal, tax, accounting or
        investment advice, and nothing here is an offer capable of
        acceptance. Whether a service fits your situation is established in
        conversation and recorded in writing, not inferred from a web page.
      </p>
      <h2>No promised outcomes</h2>
      <p>
        The site publishes no earnings figures and promises no results.
        Business outcomes depend on capital, market conditions, marketplace
        policy and decisions that remain yours. Our earnings claims policy
        sets this out in full.
      </p>
      <h2>Content and marks</h2>
      <p>
        The content and branding on this site belong to Hyprr Retail LLC.
        You may quote it with attribution; you may not present it as your
        own or use the Hyprr name to imply a relationship that does not
        exist.
      </p>
      <h2>Contact</h2>
      <p>Questions about these terms: hello@hyprrbrands.com.</p>
    </LegalPage>
  );
}

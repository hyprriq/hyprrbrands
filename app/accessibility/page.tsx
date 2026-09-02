import type { Metadata } from "next";
import { ogImageMeta } from "@/lib/og-pages";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility | Hyprr Brands",
  description:
    "The accessibility standard this site is built to, what that means in practice, and how to report a problem.",
  alternates: { canonical: "/accessibility" },
  ...ogImageMeta("accessibility"),
};

export default function Page() {
  return (
    <LegalPage
      path="/accessibility"
      description="The accessibility standard this site is built to, what that means in practice, and how to report a problem."
      title="Accessibility" version="v0.1 · 2 September 2026">
      <p>
        This site is built to WCAG 2.1 AA as a working target, and the
        checks run against every release rather than once at launch.
      </p>
      <h2>What that means here</h2>
      <ul>
        <li>
          Text contrast is verified against its actual composited background
          on every page, at desktop and mobile sizes, as a release gate.
        </li>
        <li>
          The site works without JavaScript: content, navigation and FAQ
          answers are in the served HTML.
        </li>
        <li>
          Interactive targets are at least 44px, headings follow a strict
          outline, and the reduced-motion preference disables animation
          entirely.
        </li>
        <li>Every page is usable by keyboard, with visible focus states.</li>
      </ul>
      <h2>Found a problem?</h2>
      <p>
        Tell us at hello@hyprrbrands.com and it goes into the same fix queue
        as any other defect. Accessibility issues are treated as bugs, not
        feedback.
      </p>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { ogImageMeta } from "@/lib/og-pages";
import { email } from "@/lib/company";

const TITLE = "Accessibility Statement | Hyprr Brands Website";
const DESC =
  "The standard this site is built to, WCAG 2.1 AA, the gaps we already know about, and how to report a barrier you hit on any page of it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/accessibility" },
  ...ogImageMeta("accessibility"),
};

export default function Page() {
  return (
    <LegalPage
      path="/accessibility"
      description={DESC}
      title="Accessibility statement"
      version="v0.3 · 17 September 2026"
    >
      <p>
        This site is built to WCAG 2.1 AA as a working target, and the checks
        run against every release rather than once at launch.
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
      <h2>Known gaps</h2>
      <ul>
        <li>
          The infographics on the service pages are images. Each carries a
          full text alternative, and the facts they show are also written in
          the surrounding copy, but the diagrams themselves are not navigable
          as text.
        </li>
        <li>
          On phones those infographics scroll sideways inside their own
          frame, with a visible &ldquo;swipe&rdquo; hint. Screen magnifier
          users may find the horizontal scroll awkward; the same content is
          in the text beside each one.
        </li>
        <li>
          The compliance table on the private label page becomes a set of
          cards on narrow screens; the column headings are repeated inside
          each card so it reads in order.
        </li>
      </ul>
      <h2>Found a problem?</h2>
      <p>
        Tell us at {email} and it goes into the same fix queue as any other
        defect. Accessibility issues are treated as bugs, not feedback.
      </p>
    </LegalPage>
  );
}

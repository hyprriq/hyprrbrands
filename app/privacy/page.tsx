import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { ogImageMeta } from "@/lib/og-pages";

const TITLE = "Privacy Policy | Hyprr Brands — What We Collect";
const DESC =
  "What this site collects, what the contact form is used for, how long anything is kept, who processes it, and how to reach us about your data.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/privacy" },
  ...ogImageMeta("privacy"),
};

export default function Page() {
  return (
    <LegalPage
      path="/privacy"
      description={DESC}
      title="Privacy policy"
      version="v0.2 · 6 September 2026 · under owner review"
    >
      <p>
        This policy covers hyprrbrands.com, operated by Hyprr Retail LLC. It
        is written to be read, and it describes what actually happens rather
        than everything the law would permit.
      </p>
      <h2>What we collect</h2>
      <p>
        The contact form asks for your name, email address and the context
        you choose to write. Sending it delivers your message to
        hyprr@hyprrbrands.com through our email provider, Resend, and sends
        you a confirmation copy; if delivery is not configured, the form
        opens an email from your own mail client instead and the site stores
        nothing. Our hosting provider keeps standard server logs (IP address,
        pages requested, timestamps) for operating and securing the site.
      </p>
      <h2>What we use it for</h2>
      <p>
        What you send us is used to reply to you and to prepare for a
        conversation you asked for — nothing else. No newsletter, no sales
        sequence, no sharing or selling of your details to anyone.
      </p>
      <h2>Your choices</h2>
      <p>
        Email hello@hyprrbrands.com to ask what we hold about you, to correct
        it, or to have it deleted. If you emailed us, deleting the
        correspondence is a single request away.
      </p>
    </LegalPage>
  );
}

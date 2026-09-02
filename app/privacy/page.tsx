import type { Metadata } from "next";
import { ogImageMeta } from "@/lib/og-pages";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Hyprr Brands",
  description:
    "What this site collects, what the contact form is used for, and how to reach us about your data.",
  alternates: { canonical: "/privacy" },
  ...ogImageMeta("privacy"),
};

export default function Page() {
  return (
    <LegalPage
      path="/privacy"
      description="What this site collects, what the contact form is used for, and how to reach us about your data."
      title="Privacy policy" version="v0.1 · 2 September 2026 · under owner review">
      <p>
        This policy covers hyprrbrands.vercel.app, operated by Hyprr Retail
        LLC. It is written to be read, and it describes what actually
        happens rather than everything the law would permit.
      </p>
      <h2>What we collect</h2>
      <p>
        The contact form asks for your name, email address, company and the
        context you choose to write. Sending it composes an email from your
        own mail client to hello@hyprrbrands.com — the site itself does not
        store what you type. Our hosting provider keeps standard server logs
        (IP address, pages requested, timestamps) for operating and securing
        the site.
      </p>
      <h2>What we use it for</h2>
      <p>
        What you send us is used to reply to you and to prepare for a
        conversation you asked for — nothing else. No newsletter, no sales
        sequence, no sharing or selling of your details to anyone.
      </p>
      <h2>The true cost calculator</h2>
      <p>
        Numbers you enter on the true cost page stay in your browser. They
        are not transmitted to us and not stored.
      </p>
      <h2>Your choices</h2>
      <p>
        Email hello@hyprrbrands.com to ask what we hold about you, to
        correct it, or to have it deleted. If you emailed us, deleting the
        correspondence is a single request away.
      </p>
    </LegalPage>
  );
}

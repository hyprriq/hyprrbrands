import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { ogImageMeta } from "@/lib/og-pages";
import { email, legalName } from "@/lib/company";

const TITLE = "Privacy Policy | Hyprr Brands — What We Collect";
const DESC =
  "What this site collects, what the contact form is used for, how long anything is kept, who processes it, and how to reach us about your data.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/privacy" },
  ...ogImageMeta("privacy"),
};

/* [owner B7] the retention period is not yet confirmed; the policy
   says so rather than inventing a number. */
export default function Page() {
  return (
    <LegalPage
      path="/privacy"
      description={DESC}
      title="Privacy policy"
      version="v0.3 · 17 September 2026"
    >
      <p>
        This policy covers hyprrbrands.com, operated by {legalName}, a Wyoming
        company based in Easton, Pennsylvania, USA. It is written to be read,
        and it describes what actually happens rather than everything the law
        would permit.
      </p>
      <h2>What we collect</h2>
      <p>
        The contact form asks for your name and email address, and optionally
        your brand or company, a store or ASIN link, the marketplaces you
        sell on, your closest situation, what you have already tried, and a
        message. Sending it delivers your message to {email} through our
        email provider, Resend, and sends you a confirmation copy. The site
        itself stores nothing you type.
      </p>
      <p>
        The site is hosted on Vercel, whose servers keep standard logs (IP
        address, pages requested, timestamps) for operating and securing the
        site. Calls are booked through Cal.com, which handles the details you
        enter there under its own policy.
      </p>
      <h2>What we use it for</h2>
      <p>
        What you send us is used to reply to you and to prepare for a
        conversation you asked for — nothing else. No newsletter, no sales
        sequence, no sharing or selling of your details to anyone.
      </p>
      <h2>How long we keep it</h2>
      <p>
        Correspondence is kept for as long as it is needed to answer you and
        to run any engagement that follows, and deleted on request. A fixed
        retention period will be stated here once it is confirmed.
      </p>
      <h2>Your choices</h2>
      <p>
        Email {email} to ask what we hold about you, to correct it, or to
        have it deleted. If you emailed us, deleting the correspondence is a
        single request away.
      </p>
    </LegalPage>
  );
}

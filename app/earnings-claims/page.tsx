import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { ogImageMeta } from "@/lib/og-pages";
import { email } from "@/lib/company";

const TITLE = "Earnings Claims Policy | Hyprr Brands in Writing";
const DESC =
  "Hyprr publishes no income figures, no projected returns and no results promises. What we say instead, and how to report a breach.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/earnings-claims" },
  ...ogImageMeta("earnings-claims"),
};

export default function Page() {
  return (
    <LegalPage
      path="/earnings-claims"
      description={DESC}
      title="Earnings claims policy"
      version="v0.3 · 17 September 2026"
    >
      <p>
        This site publishes no earnings figures, income examples, projections
        or typical-results claims — not in copy, not in testimonials, not in
        case studies, and not in conversation before an engagement.
      </p>
      <h2>Why</h2>
      <p>
        Ecommerce outcomes depend on capital, product selection, market
        conditions, marketplace policy and the decisions a client makes.
        Presenting anyone&apos;s past numbers as an indication of yours would
        be misleading, whatever the disclaimer under it says. The industry
        this policy pushes against sells projected returns; we would rather
        show you the paperwork.
      </p>
      <h2>What we say instead</h2>
      <ul>
        <li>
          We describe the work and the mechanic of how we are paid, without
          figures, at <a href="/how-we-work">/how-we-work</a>.
        </li>
        <li>
          Sample documents — a verdict sheet, a landed-cost model, a monthly
          report — are published ungated at <a href="/proof">/proof</a>,
          clearly labeled as illustrative.
        </li>
        <li>
          Where case studies appear in future, they will be publishable
          client work with the client&apos;s consent — evidence, not
          advertising arithmetic.
        </li>
      </ul>
      <h2>If you see us break it</h2>
      <p>
        If anything on this site or said by anyone representing Hyprr reads
        as a promised or implied result, report it to {email}. It will be
        corrected, not defended.
      </p>
    </LegalPage>
  );
}

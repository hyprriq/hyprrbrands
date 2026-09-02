import type { Metadata } from "next";
import { ogImageMeta } from "@/lib/og-pages";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Earnings Claims Policy | Hyprr Brands",
  description:
    "Hyprr publishes no earnings figures and promises no results. This page is the policy behind that, in writing, and what it commits us to.",
  alternates: { canonical: "/earnings-claims" },
  ...ogImageMeta("earnings-claims"),
};

export default function Page() {
  return (
    <LegalPage
      path="/earnings-claims"
      description="Hyprr publishes no earnings figures and promises no results. This page is the policy behind that, in writing, and what it commits us to."
      title="Earnings claims policy"
      version="v0.1 · 2 September 2026"
    >
      <p>
        This site publishes no earnings figures, income examples,
        projections or typical-results claims — not in copy, not in
        testimonials, not in case studies, and not in conversation before an
        engagement.
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
          figures, at /how-we-work.
        </li>
        <li>
          The true cost calculator computes what you will spend from your
          own inputs. It shows no revenue side at all.
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
        as a promised or implied result, report it to hello@hyprrbrands.com.
        It will be corrected, not defended.
      </p>
    </LegalPage>
  );
}

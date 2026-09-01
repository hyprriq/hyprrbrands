import type { Metadata } from "next";
import SitePageShell from "@/components/SitePageShell";

export const metadata: Metadata = {
  title: "How we work | Hyprr Brands",
  description:
    "The operating cycle, the approval gate, who we say no to, and how the fee structure is calculated — no figures, the mechanic in full.",
  alternates: { canonical: "/how-we-work" },
};

/**
 * How we work — the page five homepage CTAs point at. Carries the
 * operating cycle, the approval gate, the fit filter ("who we say no
 * to") and the "not an automation company" argument folded in per the
 * Build Spec section J resolution, plus the #fees mechanic. Soft
 * launch: no figures, no earnings claims.
 */
const STEPS = [
  {
    n: "01",
    t: "Commercial read",
    d: "We look at the numbers before the ideas — margin, channel economics, demand, and what the account can realistically carry. If the numbers don't work, we say so before you buy inventory.",
  },
  {
    n: "02",
    t: "Plan with owners",
    d: "A written plan with named people against each outcome, ours and yours, and the order things happen in.",
  },
  {
    n: "03",
    t: "Execute",
    d: "We do the build and growth work — sourcing, listings, site, launch, advertising — in defined pieces with dates on them, not an open-ended retainer.",
  },
  {
    n: "04",
    t: "Operate & report",
    d: "We stay on the account. You get a regular record of what was bought, what sold, what changed, and what we recommend next.",
  },
];

export default function Page() {
  return (
    <SitePageShell>
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(48px,6vw,88px)] pb-[clamp(40px,5vw,64px)]">
          <h1 className="font-display type-h1 text-ink m-0 mb-5 max-w-[18ch]">
            How we work.
          </h1>
          <p className="type-lead text-body m-0 max-w-[62ch]">
            Hyprr builds, grows and operates ecommerce businesses that stay
            owned by their clients. You keep the accounts, the inventory and
            the final call on what gets bought; we take responsibility for the
            research, the build and the daily operation. This page sets out
            the cycle, the approval gate, who the model fits, and how we are
            paid.
          </p>
        </div>
      </section>

      <section className="bg-bone border-t border-line">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,72px)]">
          <h2 className="font-display type-h2 text-ink m-0 mb-8">
            The operating cycle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-7">
            {STEPS.map((s) => (
              <div key={s.n} className="py-2">
                <div className="type-label text-label mb-3">{s.n}</div>
                <h3 className="font-display type-h3 text-ink m-0 mb-2.5">
                  {s.t}
                </h3>
                <p className="type-body text-body m-0">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-line">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,72px)]">
          <h2 className="font-display type-h2 text-ink m-0 mb-4">
            The approval gate
          </h2>
          <p className="type-body text-body m-0 mb-4 max-w-[62ch]">
            No material purchase order goes out without your recorded
            approval. We research the opportunity, model the landed cost and
            margin, and give you a written recommendation with a clear
            verdict — but the decision, and the record of it, are yours. Your
            marketplace accounts stay registered in your name and we work
            through permissioned access, never shared credentials. Suppliers
            invoice you directly; we do not buy stock in our own name and
            resell it to you.
          </p>
          <p className="type-body text-body m-0 max-w-[62ch]">
            This is also why we are not an automation company. Automation
            operators buy in their own name, hold the account, and promise a
            passive result. Everything in our model runs the other way: your
            ownership, your approvals, our work — documented.
          </p>
        </div>
      </section>

      <section className="bg-bone border-t border-line">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,72px)]">
          <h2 className="font-display type-h2 text-ink m-0 mb-4">
            Who we say no to
          </h2>
          <p className="type-body text-body m-0 mb-6 max-w-[62ch]">
            The model works for operators, founders and brands who want to own
            a business and make its decisions. It does not work for everyone,
            and saying so up front saves both sides a bad engagement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(14px,2vw,22px)] max-w-[900px]">
            <div className="bg-white border border-line border-l-[3px] border-l-ok rounded-md p-6">
              <p className="type-label text-label uppercase m-0 mb-4">
                Good fit
              </p>
              <div className="grid gap-3 type-body text-body">
                <div>Capital that matches the plan</div>
                <div>Willing to make decisions</div>
                <div>A long-term operating mindset</div>
                <div>Wants to own the business</div>
              </div>
            </div>
            <div className="bg-white border border-line border-l-[3px] border-l-crit rounded-md p-6">
              <p className="type-label text-label uppercase m-0 mb-4">
                Not a fit
              </p>
              <div className="grid gap-3 type-body text-body">
                <div>Expecting passive income</div>
                <div>Expecting guaranteed returns</div>
                <div>Unwilling to approve purchases</div>
                <div>Wants someone else to carry the risk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="fees"
        className="bg-field text-white [scroll-margin-top:calc(var(--stack-top)+8px)]"
      >
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(48px,6vw,88px)]">
          <h2 className="font-display type-h2 text-white m-0 mb-4">
            How we&apos;re paid
          </h2>
          <div className="max-w-[62ch] grid gap-4">
            <p className="type-lead text-on-field-body m-0">
              A fee to build the operation, and — where it applies — a share
              of the margin the business realises after goods actually sell.
            </p>
            <p className="type-body text-on-field-body m-0">
              <strong className="text-white">What it is calculated on:</strong>{" "}
              realised margin means the margin left after the goods have sold
              and the marketplace has settled — sale proceeds less the cost of
              goods, freight, duties, marketplace fees and advertising
              attributable to those goods. It is not calculated on gross
              sales, on projected sales, or on the capital you deploy.
            </p>
            <p className="type-body text-on-field-body m-0">
              <strong className="text-white">How it is calculated:</strong>{" "}
              the share applies only to margin actually realised in the
              period, reconciled against your own settlement data — which you
              hold, because the accounts are yours. If goods have not sold,
              no performance fee has accrued on them.
            </p>
            <p className="type-body text-on-field-body m-0">
              There is no monthly retainer, and no fee calculated on the
              capital you deploy. If the margin isn&apos;t there, neither is
              our share of it.
            </p>
            <p className="type-meta text-on-field-mute m-0">
              No pricing figures are published while engagements are
              individually scoped. We do not publish earnings figures, and we
              do not guarantee sales, profit or returns.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/contact"
              className="bg-build text-ink hover:text-ink type-body font-semibold px-[26px] py-4 rounded-md min-h-12 inline-flex items-center"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

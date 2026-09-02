import type { Metadata } from "next";
import { ogImageMeta } from "@/lib/og-pages";
import Link from "next/link";
import SitePageShell from "@/components/SitePageShell";
import { isLive } from "@/lib/site-map";

export const metadata: Metadata = {
  title: "How we work | Hyprr Brands",
  description:
    "You decide. We execute. What happens in an engagement, who decides, what gets written down, and how we are paid — the mechanic, no figures.",
  alternates: { canonical: "/how-we-work" },
  ...ogImageMeta("how-we-work"),
};

/**
 * /how-we-work — Template 3: White → Bone → Petrol (#fees) → White →
 * Petrol CTA; the two Petrol sections are separated by a White one.
 * The four-step sequence is numbered because it is a real sequence;
 * numbers appear nowhere else on the page. #fees keeps the cleared
 * mechanic copy from the content ticket rather than a placeholder.
 */
const STEPS = [
  {
    n: "01",
    title: "Commercial read",
    desc: "We read your situation and tell you whether Hyprr is a fit before anything is signed.",
  },
  {
    n: "02",
    title: "Plan with owners",
    desc: "A written plan, each decision assigned to you or to us.",
  },
  {
    n: "03",
    title: "Execute",
    desc: "We do the work under your accounts, with your approval on every material purchase.",
  },
  {
    n: "04",
    title: "Operate & report",
    desc: "A fixed cadence, a written report, and a next decision every cycle.",
  },
];

const COMMITMENTS: [string, string][] = [
  [
    "You decide",
    "Every material decision in the engagement is yours, made on a written recommendation you can read and challenge. We bring the research, the economics and a clear verdict; you bring the yes or the no, and the record shows which was which. A decision made without you is a breach of the model, not a time-saver.",
  ],
  [
    "We execute",
    "Once a decision is made, the work is ours: sourcing, listings, purchasing, advertising, cases, reporting. We do it under your accounts, in defined pieces with dates on them, and the weekly record shows what was done and what it changed. You stay in the decisions and out of the day.",
  ],
  [
    "Every material purchase is recorded",
    "No material purchase order goes out without your recorded approval. Suppliers invoice you directly; we do not buy stock in our own name and resell it to you. The practical effect is that you always know where your capital is, and the paper trail of every buying decision belongs to you.",
  ],
  [
    "What happens when something goes wrong",
    "There is a written path from signal to report: the problem is escalated the day it is detected, assessed with options attached, decided by you, executed by us, documented, and carried into the weekly report. Problems are part of operating; an undocumented problem is the only kind we treat as a failure. The path is the same whether the issue is a stranded shipment, a policy warning or a supplier who stopped answering.",
  ],
];

const FEE_RULES = [
  "Fees are stated before the engagement, not discovered in it",
  "No fee is tied to a projected return",
  "Every material purchase is approved by you and recorded",
  "The fee structure is explained in full before anything is signed",
];

const NO_TO = [
  "Anyone who wants the account held in Hyprr's name",
  "Anyone who needs a return promised to start",
  "Anyone who wants decisions taken without them",
];

const NO_GUARANTEE = [
  "Revenue, growth or ranking outcomes",
  "Marketplace policy decisions we do not control",
  "That every product idea survives validation",
];

export default function Page() {
  return (
    <SitePageShell>
      {/* White: hero + the four-step sequence */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,6vw,72px)]">
          <nav aria-label="Breadcrumb">
            <ol className="font-mono type-label text-label normal-case tracking-normal flex gap-2 list-none m-0 p-0">
              <li>
                <Link href="/" className="text-label hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                How we work
              </li>
            </ol>
          </nav>
          <h1 className="font-display type-h1 text-ink m-0 mt-[18px] max-w-[14ch] text-balance">
            You decide. We execute.
          </h1>
          <p className="type-lead text-body m-0 mt-5 max-w-[56ch]">
            Every engagement runs the same way, whatever the service. This
            page is the documentary version: what happens, who decides, what
            gets written down, and how we are paid.
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="flex-[1_1_200px] border-t-2 border-ink pt-4 grid gap-2 content-start"
              >
                <span className="font-mono type-label text-label tracking-[.08em]">
                  {s.n}
                </span>
                <b className="text-ink type-lead font-bold leading-snug tracking-[-.01em]">
                  {s.title}
                </b>
                <span className="type-meta text-body">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bone: the operating commitments */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,72px)]">
          <h2 className="font-display type-h2 text-ink m-0 max-w-[18ch] text-balance">
            What we commit to in writing
          </h2>
          <div className="flex flex-wrap gap-2 mt-7">
            {COMMITMENTS.map(([title, body]) => (
              <div
                key={title}
                className="flex-[1_1_280px] bg-white border border-line rounded-md p-[22px] grid gap-2 content-start"
              >
                <b className="text-ink type-lead font-bold leading-snug tracking-[-.01em]">
                  {title}
                </b>
                <p className="type-meta text-body m-0">{body}</p>
              </div>
            ))}
            <div className="flex-[1_1_280px] bg-white border border-line rounded-md p-[22px] grid gap-2 content-start">
              <b className="text-ink type-lead font-bold leading-snug tracking-[-.01em]">
                Who we say no to
              </b>
              <p className="type-meta text-body m-0">
                Named plainly, below on this page — because saying it up front
                saves both sides a bad engagement.
              </p>
            </div>
            <div className="flex-[1_1_280px] bg-white border border-line rounded-md p-[22px] grid gap-2 content-start">
              <b className="text-ink type-lead font-bold leading-snug tracking-[-.01em]">
                What we don&apos;t guarantee
              </b>
              <p className="type-meta text-body m-0">
                Also below, in the same list form the agreement uses. If a
                promise is not in writing, we are not making it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Petrol: #fees — the section people arrive for */}
      <section
        id="fees"
        className="bg-field text-white [scroll-margin-top:100px]"
      >
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(48px,6vw,88px)]">
          <h2 className="font-display type-h2 text-white m-0 max-w-[16ch] text-balance">
            How we are paid
          </h2>
          <div className="flex flex-wrap gap-x-12 gap-y-8 mt-8">
            <div className="flex-[1_1_320px] max-w-[60ch] grid gap-3.5">
              <p className="type-lead text-on-field-body m-0">
                A fee to build the operation, and — where it applies — a share
                of the margin the business realises after goods actually sell.
              </p>
              <p className="type-body text-on-field-body m-0">
                <strong className="text-white">
                  What it is calculated on:
                </strong>{" "}
                realised margin means the margin left after the goods have
                sold and the marketplace has settled — sale proceeds less the
                cost of goods, freight, duties, marketplace fees and
                advertising attributable to those goods. It is not calculated
                on gross sales, on projected sales, or on the capital you
                deploy.
              </p>
              <p className="type-body text-on-field-body m-0">
                <strong className="text-white">How it is calculated:</strong>{" "}
                the share applies only to margin actually realised in the
                period, reconciled against your own settlement data — which
                you hold, because the accounts are yours. If goods have not
                sold, no performance fee has accrued on them.
              </p>
              <p className="type-body text-on-field-body m-0">
                There is no monthly retainer, and no fee calculated on the
                capital you deploy. If the margin isn&apos;t there, neither is
                our share of it.
              </p>
              <p className="type-meta text-on-field-mute m-0">
                No pricing figures are published while engagements are
                individually scoped, and no earnings figures appear anywhere
                on this site.
              </p>
            </div>
            <div className="flex-[1_1_280px] grid content-start">
              {FEE_RULES.map((r) => (
                <div
                  key={r}
                  className="flex gap-3.5 items-start py-3.5 border-b border-line-on-field font-medium type-body"
                >
                  <span className="flex-none w-3.5 h-3.5 rounded-full bg-operate mt-1.5" />
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White: who we say no to · what we don't guarantee · documents */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,72px)]">
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div className="flex-[1_1_300px] grid gap-3 content-start">
              <h2 className="font-display type-h3 text-ink m-0">
                Who we say no to
              </h2>
              <p className="type-body text-body m-0 max-w-[52ch]">
                The model only works for people who want to own a business
                and make its decisions. Saying who it does not fit, before a
                conversation starts, saves both sides a bad engagement — and
                these three refusals are structural, not negotiable.
              </p>
              {NO_TO.map((n) => (
                <div
                  key={n}
                  className="flex gap-3.5 py-3 border-b border-line/60 text-ink type-body"
                >
                  <span className="flex-none w-3 h-3 rounded-[2px] bg-ink mt-2" />
                  {n}
                </div>
              ))}
            </div>
            <div className="flex-[1_1_300px] grid gap-3 content-start">
              <h2 className="font-display type-h3 text-ink m-0">
                What we don&apos;t guarantee
              </h2>
              <p className="type-body text-body m-0 max-w-[52ch]">
                Outcomes in ecommerce depend on capital, market conditions
                and marketplace policy — things no provider controls. Rather
                than promise around that, we name what is outside anyone&apos;s
                control, in the same list form the agreement uses.
              </p>
              {NO_GUARANTEE.map((n) => (
                <div
                  key={n}
                  className="flex gap-3.5 py-3 border-b border-line/60 text-ink type-body"
                >
                  <span className="flex-none w-3 h-3 rounded-[2px] bg-ink mt-2" />
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 border border-line rounded-md px-6 py-5 flex justify-between gap-4 flex-wrap items-center">
            <span className="text-ink font-semibold type-body">
              Read the paperwork this page describes
            </span>
            {isLive("/documents") ? (
              <a
                href="/documents"
                className="text-ink hover:text-ink font-medium type-body"
              >
                Read the documents →
              </a>
            ) : (
              <span className="font-mono type-label text-label normal-case tracking-normal">
                document room publishing soon
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Petrol: CTA */}
      <section className="bg-field text-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(48px,6vw,80px)]">
          <p className="font-display type-h2 text-white m-0 max-w-[16ch] text-balance">
            Tell us what you&apos;re trying to build.
          </p>
          <div className="flex gap-[22px] items-center mt-7 flex-wrap">
            <a
              href="/contact"
              className="bg-build text-ink hover:text-ink type-body font-bold px-[22px] py-3.5 rounded-md min-h-12 inline-flex items-center"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import SitePageShell from "@/components/SitePageShell";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";
import { VERDICTS } from "@/lib/service-pages";

/**
 * /documents — PROMPT_17 §5: the low-commitment step. The pages sell
 * judgement and never showed a verdict; these two samples are the
 * verdict, readable before anyone is on a call. Both are ILLUSTRATIVE
 * documents with invented data and say so in a visible label — that
 * label is an asset, not a weakness (PHASE2_PLAN §1). Every $ figure
 * sits inside a [data-worked-example] block with the arbitrary-numbers
 * label, same as the fee mechanic's worked example.
 *
 * Prompt-11 rule honoured: the manifest entry, this route and the
 * homepage proof tile all return together.
 */
const TITLE = "Sample Documents, Ungated | Hyprr Brands";
const META =
  "A sample product verdict sheet and a sample landed-cost model, published with invented data so you can read the judgement before any conversation.";

export const metadata: Metadata = {
  title: TITLE,
  description: META,
  alternates: { canonical: "/documents" },
  ...ogImageMeta("documents"),
};

const AXES: [string, "approve" | "review" | "reject", string][] = [
  ["Demand", "approve", "Search demand is real, repeatable and non-seasonal"],
  ["Competition", "review", "Top of category crowded, but positioning is split"],
  ["Pricing", "approve", "The price band tolerates fees and freight"],
  [
    "Reviews",
    "reject",
    "Incumbent review moat unreachable for a new entrant at viable spend",
  ],
  ["Search behaviour", "approve", "Customers search the problem, not a brand"],
  ["Category structure", "review", "One incumbent owns part of the vocabulary"],
  ["Marketplace fit", "approve", "Walmart US viable; Amazon US contested"],
  ["DTC potential", "review", "Own-store economics unproven at this AOV"],
];

function SampleLabel({ text }: { text: string }) {
  return (
    <p className="font-mono type-label text-ink uppercase m-0 bg-bone border border-line rounded-sm px-3.5 py-2.5 inline-block">
      {text}
    </p>
  );
}

export default function Page() {
  return (
    <SitePageShell>
      <JsonLd
        nodes={[
          webPageLd({ path: "/documents", title: TITLE, description: META }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Documents", path: "/documents" },
          ]),
        ]}
      />

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
                Documents
              </li>
            </ol>
          </nav>
          <h1 className="font-display type-h1 text-ink m-0 mt-[18px] max-w-[16ch] text-balance">
            The documents, ungated
          </h1>
          <p className="type-lead text-body m-0 mt-5 max-w-[58ch]">
            The service pages say every product gets a written verdict and
            every purchase gets an economics read. Here is what those
            documents look like — published with invented data, no email
            gate, no call required.
          </p>
          <p className="type-body text-body mt-4 mb-0 max-w-[58ch]">
            Both samples are illustrative and labelled as such. Firms that
            want your money rarely show you the document that says
            &ldquo;do not buy&rdquo; — that is exactly why these two do.
          </p>
        </div>
      </section>

      {/* Sample 1 — the verdict sheet */}
      <section
        id="sample-verdict"
        className="bg-bone [scroll-margin-top:140px]"
      >
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,64px)]">
          <h2 className="font-display type-h2 text-ink m-0 max-w-[20ch] text-balance">
            Sample product verdict sheet
          </h2>
          <p className="type-body text-body mt-3 mb-5 max-w-[62ch]">
            The private-label deliverable: eight axes, each with a written
            reason, and a verdict decided by the single worst axis rather
            than an average. This sample ends in Reject on purpose — most
            candidates should.
          </p>
          <SampleLabel text="Sample — illustrative document, invented category data. Not a client deliverable." />
          <div className="bg-white border border-line rounded-md overflow-hidden mt-4 max-w-[860px]">
            <div className="px-[22px] py-3.5 border-b border-line flex justify-between gap-3 flex-wrap font-mono type-label text-label uppercase">
              <span>Product verdict sheet · home &amp; kitchen (example category)</span>
              <span>sample · ungated</span>
            </div>
            {AXES.map(([axis, v, reason]) => (
              <div
                key={axis}
                className="grid grid-cols-1 min-[720px]:grid-cols-[170px_110px_1fr] gap-x-4 gap-y-1.5 px-[22px] py-3.5 border-b border-line/60 items-center"
              >
                <b className="text-ink type-meta">{axis}</b>
                <span
                  className={`font-mono type-label uppercase px-2.5 py-1 rounded-sm justify-self-start ${VERDICTS[v].chipClass}`}
                >
                  {VERDICTS[v].label}
                </span>
                <span className="type-meta text-body">{reason}</span>
              </div>
            ))}
            <div className="px-[22px] py-4 bg-ink text-white flex justify-between gap-3 flex-wrap items-center">
              <b className="type-body">Verdict: Reject</b>
              <span className="font-mono type-label text-on-ink-mute normal-case tracking-normal">
                one failed axis ends it — no averaging
              </span>
            </div>
          </div>
          <p className="type-meta text-body mt-4 mb-0 max-w-[62ch]">
            The reasoning is the deliverable: it is what lets you disagree
            with the verdict. The full process is on the{" "}
            <a
              href="/private-label"
              className="text-ink hover:text-ink font-semibold"
            >
              private label page
            </a>
            .
          </p>
        </div>
      </section>

      {/* Sample 2 — the landed-cost model */}
      <section
        id="sample-landed-cost"
        className="bg-white [scroll-margin-top:140px]"
      >
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,64px)]">
          <h2 className="font-display type-h2 text-ink m-0 max-w-[20ch] text-balance">
            Sample landed-cost model
          </h2>
          <p className="type-body text-body mt-3 mb-5 max-w-[62ch]">
            The wholesale read on one catalogue line, ending in the
            purchase-order recommendation. This sample ends in Do not buy —
            the line looks attractive until the landed cost and the buy box
            are read together.
          </p>
          <SampleLabel text="Sample — the numbers are arbitrary and demonstrate the calculation only. Not a projection." />
          <figure
            data-worked-example
            className="m-0 mt-4 bg-white border border-line rounded-md overflow-hidden max-w-[720px]"
          >
            <figcaption className="px-[22px] py-3.5 border-b border-line flex justify-between gap-3 flex-wrap font-mono type-label text-label uppercase">
              <span>Landed-cost model · one line, per unit</span>
              <span>sample · arbitrary numbers</span>
            </figcaption>
            {(
              [
                ["Supplier unit cost", "$18.00"],
                ["Freight and duties", "$2.40"],
                ["Prep — labelling to marketplace spec", "$0.60"],
                ["Landed cost", "$21.00"],
                ["Sale price, against the current buy box", "$30.00"],
                ["Marketplace fees", "−$4.50"],
                ["Storage and returns, averaged", "−$1.20"],
                ["Advertising attributable to the line", "−$1.50"],
              ] as const
            ).map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between gap-4 px-[22px] py-3 border-b border-line/60 type-meta"
              >
                <span className="text-ink">{k}</span>
                <span className="font-mono text-ink">{v}</span>
              </div>
            ))}
            <div className="flex justify-between gap-4 px-[22px] py-3.5 type-meta bg-bone/60">
              <b className="text-ink">Margin per unit</b>
              <b className="font-mono text-ink">$1.80 · 6% of price</b>
            </div>
            <div className="px-[22px] py-4 bg-ink text-white flex justify-between gap-3 flex-wrap items-center">
              <b className="type-body">Recommendation: Do not buy</b>
              <span className="font-mono type-label text-on-ink-mute normal-case tracking-normal">
                below the margin floor · buy box shared five ways
              </span>
            </div>
          </figure>
          <p className="type-meta text-body mt-4 mb-0 max-w-[62ch]">
            Every line gets this model before anything is bought, and the
            three-way verdict goes to the client with the reasoning. The
            full process is on the{" "}
            <a
              href="/wholesale-ecommerce"
              className="text-ink hover:text-ink font-semibold"
            >
              wholesale page
            </a>
            .
          </p>
        </div>
      </section>

      {/* What publishes next */}
      <section className="bg-white border-t border-line">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(36px,4vw,56px)]">
          <h2 className="font-display type-h3 text-ink m-0">
            What publishes next
          </h2>
          <p className="type-body text-body mt-3 mb-0 max-w-[62ch]">
            The sample agreement and a full reporting example are being
            prepared and publish here, in the same ungated form. The fee
            mechanic and its worked example are already public on{" "}
            <a
              href="/how-we-work#fees"
              className="text-ink hover:text-ink font-semibold"
            >
              how we work
            </a>
            .
          </p>
        </div>
      </section>

      {/* Petrol: CTA */}
      <section className="bg-field text-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(48px,6vw,80px)]">
          <p className="font-display type-h2 text-white m-0 max-w-[18ch] text-balance">
            Read first. Talk after.
          </p>
          <div className="flex gap-[22px] items-center mt-7 flex-wrap">
            <a
              href="/contact"
              className="bg-build text-ink hover:text-ink type-body font-bold px-[22px] py-3.5 rounded-md min-h-12 inline-flex items-center"
            >
              Let&apos;s talk
            </a>
            <a
              href="/how-we-work"
              className="text-white hover:text-white type-body font-medium"
            >
              See how we work →
            </a>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

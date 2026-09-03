import { SPLIT, PUBLISH_SPLIT } from "@/lib/fees";
import { CostBar } from "@/components/pages/VisualSystem";

/**
 * How we're paid — A.21. The last sentence is the commercial argument
 * in eleven words; content freeze applies. Grow band ground (fees tied
 * to realised margin); primary CTA is Ink on a band ground per the
 * dark-panel rule.
 */
export default function PricingBand() {
  return (
    <section id="pricing" className="bg-grow-band">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(44px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(20px,3vw,40px)] items-center">
        <div>
          <h2 className="font-display type-h2 text-ink m-0 mb-2.5">
            How we&apos;re paid.
          </h2>
          <p className="type-body text-body m-0 max-w-[52ch]">
            A build fee agreed before anything starts, and {SPLIT} of the
            margin the business realises after goods actually sell.
            {PUBLISH_SPLIT &&
              " The split is 30% at every band, and it steps down over time."}{" "}
            No fee on
            the capital you deploy. No fee on your ad spend.
          </p>
        </div>
        {/* PROMPT_21 §3.1 — the cost bar replaces the margin-calc
            diagram: the same unit economics, read in one glance. The
            fee is a share of the Lime segment only. */}
        <div className="grid gap-3">
          <CostBar
            data={{
              title: "Where one unit's sale price goes",
              total: "$30.00 sale",
              segments: [
                { label: "Landed cost", value: "$21.00", share: 70 },
                { label: "Marketplace fees", value: "$4.50", share: 15 },
                { label: "Storage & returns", value: "$1.20", share: 4 },
                { label: "Advertising", value: "$1.50", share: 5 },
                { label: "Margin", value: "$1.80", share: 6, retained: true },
              ],
              footnote:
                "Arbitrary numbers demonstrating the read — the fee is a share of the margin segment only, after goods sell, never of the capital you deploy.",
            }}
          />
        </div>
        <div className="flex justify-start gap-3.5 flex-wrap">
          <a
            href="/how-we-work#fees"
            className="bg-ink text-white hover:text-white type-body font-semibold px-6 py-[15px] rounded-md min-h-12 flex items-center"
          >
            See the full structure →
          </a>
        </div>
      </div>
    </section>
  );
}

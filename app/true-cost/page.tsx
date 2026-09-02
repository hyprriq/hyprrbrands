import type { Metadata } from "next";
import Link from "next/link";
import SitePageShell from "@/components/SitePageShell";
import TrueCostCalculator from "@/components/TrueCostCalculator";
import { TRUE_COST_INPUTS } from "@/lib/true-cost";
import { isLive } from "@/lib/site-map";

export const metadata: Metadata = {
  title: "The True Cost of Launching a Product | Hyprr Brands",
  description:
    "Ten inputs, one total, and an explanation of every line. It calculates what you will spend to launch a product. It does not project what you might make.",
  alternates: { canonical: "/true-cost" },
};

/**
 * /true-cost — Template 5: White, Bone for the input panel, Ink for
 * the running total. No projected return, no "you could make", no
 * benchmark comparison — the page says so in the total panel.
 */
export default function Page() {
  return (
    <SitePageShell>
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(40px,6vw,72px)] pb-[clamp(24px,3vw,40px)]">
          <nav
            aria-label="Breadcrumb"
            className="font-mono type-label text-label normal-case tracking-normal flex gap-2"
          >
            <Link href="/" className="text-label hover:text-ink">
              Home
            </Link>
            <span>/</span>
            <span className="text-ink">True cost</span>
          </nav>
          <h1 className="font-display type-h1 text-ink m-0 mt-[18px] max-w-[16ch] text-balance">
            The true cost of launching a product
          </h1>
          <p className="type-lead text-body m-0 mt-[18px] max-w-[56ch]">
            Ten inputs, one total, and an explanation of every line. It
            calculates what you will spend. It does not project what you might
            make.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pb-[clamp(40px,5vw,72px)]">
          <TrueCostCalculator />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pb-[clamp(40px,5vw,72px)]">
          <h2 className="font-display type-h3 text-ink m-0">
            Every input, explained
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-5">
            {TRUE_COST_INPUTS.map((d, i) => (
              <div
                key={d.label}
                className="flex-[1_1_300px] grid gap-1.5 py-3.5 border-b border-line/60"
              >
                <b className="text-ink type-body">
                  {String(i + 1).padStart(2, "0")} · {d.label}
                </b>
                <p className="type-meta text-body m-0">{d.explain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-field text-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(48px,6vw,80px)]">
          <p className="font-display type-h2 text-white m-0 max-w-[16ch] text-balance">
            Want a second pair of eyes on the numbers?
          </p>
          <div className="flex gap-[22px] items-center mt-7 flex-wrap">
            <a
              href="/contact"
              className="bg-build text-ink hover:text-ink type-body font-bold px-[22px] py-3.5 rounded-md min-h-12 inline-flex items-center"
            >
              Let&apos;s talk
            </a>
            {isLive("/private-label") && (
              <a
                href="/private-label"
                className="text-white hover:text-white type-body font-medium"
              >
                Private label, the service →
              </a>
            )}
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

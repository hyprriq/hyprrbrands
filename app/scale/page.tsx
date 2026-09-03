import type { Metadata } from "next";
import Link from "next/link";
import SitePageShell from "@/components/SitePageShell";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";
import { CostBar, DataArtefact } from "@/components/pages/VisualSystem";

/**
 * /scale — PROMPT_17 §7. A page inside Grow, not a fourth engine: no
 * new colour, no new hub, and the buyer it addresses is the seller
 * already doing volume. Copy is dev-authored from claims the site
 * already makes (the growth page's constraint argument, the fee
 * mechanic, the operations desk) — flagged for the audit side's
 * content-depth pass. The nextStep chain reads Build → Grow → Scale →
 * Operate; the three grow pages link here.
 */
const TITLE = "Scale an Ecommerce Business | Hyprr Brands";
const META =
  "What breaks when a selling business grows past its systems — cash, cover, fulfilment and margin — and how the binding constraint is found and released.";

export const metadata: Metadata = {
  title: TITLE,
  description: META,
  alternates: { canonical: "/scale" },
  ...ogImageMeta("scale"),
};

const BREAKS: [string, string][] = [
  [
    "Cash conversion",
    "Every reorder is bigger than the last, and settlement pays back on the marketplace's clock, not yours. Growth eats cash before it returns it, and the business that scaled fastest is often the one that runs out first.",
  ],
  [
    "Inventory cover",
    "Velocity outruns replenishment. Reorder points set at last quarter's speed produce this quarter's stockouts — and a stockout costs ranking that is slow and expensive to rebuild.",
  ],
  [
    "Fulfilment and cases",
    "Orders, returns, exceptions and cases scale with volume, and each one has a clock. The desk that handled last year's volume by attention alone needs a cadence to handle this year's.",
  ],
  [
    "Margin",
    "Advertising, storage and returns all creep as volume grows. Revenue that doubles while contribution margin thins is not scale — it is the same profit carried with more risk.",
  ],
];

export default function Page() {
  return (
    <SitePageShell>
      <JsonLd
        nodes={[
          webPageLd({ path: "/scale", title: TITLE, description: META }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Grow", path: "/grow" },
            { name: "Scale", path: "/scale" },
          ]),
        ]}
      />

      {/* Grow band hero */}
      <section className="bg-grow-band">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,6vw,80px)]">
          <nav aria-label="Breadcrumb">
            <ol className="font-mono type-label text-label normal-case tracking-normal flex gap-2 list-none m-0 p-0">
              <li>
                <Link href="/" className="text-label hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a href="/grow" className="text-label hover:text-ink">
                  Grow
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                Scale
              </li>
            </ol>
          </nav>
          <h1 className="font-display type-h1 text-ink m-0 mt-4 max-w-[16ch] text-balance">
            Scale: what breaks after it works
          </h1>
          <p className="type-lead text-body m-0 mt-5 max-w-[58ch]">
            This page is for the seller already doing volume. Past a certain
            size the constraint stops being demand and starts being the
            operation underneath it — cash, cover, fulfilment, margin — and
            more spend on a constrained operation returns less, not more.
          </p>
        </div>
      </section>

      {/* White: what breaks first */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,72px)]">
          <h2 className="font-display type-h2 text-ink m-0 max-w-[18ch] text-balance">
            What breaks at the next level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
            {BREAKS.map(([t, d]) => (
              <div
                key={t}
                className="border border-line rounded-md p-[clamp(20px,2.4vw,28px)] grid gap-2.5 content-start"
              >
                <b className="text-ink type-lead font-bold tracking-[-.01em]">
                  {t}
                </b>
                <p className="type-body text-body m-0">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bone: the constraint moves */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,64px)]">
          <h2 className="font-display type-h2 text-ink m-0 max-w-[18ch] text-balance">
            The constraint moves — the work follows it
          </h2>
          <div className="mt-5 max-w-[62ch] grid gap-3.5">
            <p className="type-body text-body m-0">
              At launch the binding constraint is demand, and growth work is
              acquisition. Past volume it moves: to cash, because reorders
              outgrow settlements; to fulfilment, because exceptions scale
              faster than orders; to margin, because every incremental
              dollar of revenue costs a little more than the one before it.
              Scaling work is finding which constraint binds now, releasing
              it, and taking the next action only when the operation can
              absorb it.
            </p>
            <p className="type-body text-body m-0">
              That includes not spending. Advertising into a stockout,
              discounting into a thin margin, or pushing volume through a
              desk that is already dropping cases converts growth into
              damage. Growth you cannot fulfil is not growth — and because
              the fee here follows realised margin rather than spend or
              activity, the recommendation to wait is one we can afford to
              make.
            </p>
            <p className="type-body text-body m-0">
              At volume the read is often subtraction: the catalogue that
              got you here is carrying lines that no longer earn their
              working capital, and cutting them funds the ones that do.
            </p>
          </div>
          {/* PROMPT_21 §2 — the reduction read, as a decision column */}
          <div className="mt-7 max-w-[860px]">
            <DataArtefact
              data={{
                title: "The scale read · four lines, one decision each",
                ground: "bone",
                cols: ["Profit / unit", "ROI", "Velocity"],
                rows: [
                  {
                    name: "Line A — carries the catalogue",
                    cells: ["$29.01", "56.9%", "daily"],
                    order: "scale up",
                  },
                  {
                    name: "Line B — steady",
                    cells: ["$17.90", "49.7%", "daily"],
                    order: "hold",
                  },
                  {
                    name: "Line C — margin thinning",
                    cells: ["$7.89", "52.6%", "weekly"],
                    order: "watch",
                  },
                  {
                    name: "Line D — capital parked",
                    cells: ["$0.38", "14.1%", "monthly"],
                    note: "working capital freed for the lines that earn it",
                  },
                ],
                orderLabel: "Decision",
                refusedLabel: "cut",
                footnote:
                  "Illustrative figures in the catalogue read's structure — scale work is deciding per line, and one of the honest decisions is cut.",
              }}
            />
          </div>
          <div className="mt-7 max-w-[860px]">
            <CostBar
              data={{
                title: "The unit that has to survive scaling",
                total: "$30.00 sale",
                segments: [
                  { label: "Landed cost", value: "$21.00", share: 70 },
                  { label: "Marketplace fees", value: "$4.50", share: 15 },
                  { label: "Storage & returns", value: "$1.20", share: 4 },
                  { label: "Advertising", value: "$1.50", share: 5 },
                  { label: "Margin", value: "$1.80", share: 6, retained: true },
                ],
                footnote:
                  "Arbitrary numbers demonstrating the read — every segment except the last grows with volume unless someone is watching it.",
              }}
            />
          </div>
          <div className="mt-7 max-w-[62ch] grid gap-3.5">
            <p className="type-body text-body m-0">
              The reads that find the constraint live in{" "}
              <a
                href="/ecommerce-growth"
                className="text-ink hover:text-ink font-semibold"
              >
                Ecommerce growth
              </a>
              ; the desk that absorbs the result is{" "}
              <a
                href="/ecommerce-operations"
                className="text-ink hover:text-ink font-semibold"
              >
                Ecommerce operations
              </a>
              , and the rest of that engine is on{" "}
              <a href="/operate" className="text-ink hover:text-ink font-semibold">
                Operate
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* White: who this is for */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(36px,4vw,56px)]">
          <h2 className="font-display type-h3 text-ink m-0">
            Who this page is for
          </h2>
          <p className="type-body text-body mt-3 mb-0 max-w-[62ch]">
            A business that already sells and is feeling one of the four
            breaks above. If you are pre-launch, start with{" "}
            <a href="/build" className="text-ink hover:text-ink font-semibold">
              Build
            </a>
            ; if you have demand you are not capturing yet, start with{" "}
            <a href="/grow" className="text-ink hover:text-ink font-semibold">
              Grow
            </a>
            . Scale work assumes the machine exists and asks what stops it
            going faster.
          </p>
        </div>
      </section>

      {/* PROMPT_20 item 8 — the chain's last hop as a proper block:
          Build → Grow → Scale → Operate closes here, not mid-paragraph. */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(36px,4.5vw,56px)]">
          <div data-feature="next-step" className="max-w-[62ch]">
            <p className="font-mono type-label text-label uppercase m-0 mb-3 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-operate" />
              What comes next
            </p>
            <h2 className="font-display type-h3 text-ink m-0 mb-3">
              Scale is absorbed by the desk, or it unwinds.
            </h2>
            <p className="type-body text-body m-0 mb-4">
              Every released constraint lands as volume on the operation —
              more purchase orders, more cover to hold, more cases with
              clocks. The daily desk is what keeps the result, and its
              reporting is what finds the next constraint.
            </p>
            <div className="flex gap-[22px] flex-wrap">
              <a
                href="/ecommerce-operations"
                className="text-ink hover:text-ink type-body font-semibold"
              >
                Ecommerce operations →
              </a>
              <a
                href="/operate"
                className="text-ink hover:text-ink type-body font-semibold"
              >
                The Operate engine →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Petrol: CTA */}
      <section className="bg-field text-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(48px,6vw,80px)]">
          <p className="font-display type-h2 text-white m-0 max-w-[18ch] text-balance">
            Tell us what is binding.
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

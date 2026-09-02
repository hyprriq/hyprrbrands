import { isLive } from "@/lib/site-map";

/**
 * PROMPT_17 §8 — the connected stack. A visitor currently cannot tell
 * that ads, social, content or CRO exist at all; this section says
 * "we do this" without pretending depth the site does not yet carry.
 * Depth stays on the marketplace side by design. Chips link only
 * where a live page exists.
 */
const STACK: { label: string; note: string; href?: string }[] = [
  { label: "Storefront", note: "built and run", href: "/shopify-management" },
  { label: "Merchandising", note: "on a cadence", href: "/shopify-management" },
  { label: "CRO", note: "conversion worked, not guessed", href: "/shopify-dtc" },
  { label: "Paid social", note: "off-platform acquisition", href: "/ppc-paid-media" },
  { label: "Content", note: "listings and store pages" },
  { label: "Email", note: "retention, owned" },
  { label: "Marketplace ads", note: "judged on margin", href: "/ppc-paid-media" },
  { label: "SEO", note: "the storefront side" },
];

export default function ConnectedStack({
  heading = "h3",
}: {
  heading?: "h2" | "h3";
}) {
  const H = heading;
  return (
    <section id="whole-stack" className="bg-white border-t border-line [scroll-margin-top:140px]">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,64px)]">
        <H className="font-display type-h3 text-ink m-0">
          The whole stack, one operation
        </H>
        <p className="type-body text-body mt-3 mb-0 max-w-[62ch]">
          Marketplace and direct-to-consumer work run as one connected
          operation, not as separate agencies stapled together. The depth on
          this site sits on the marketplace side, because that is where the
          judgement calls are hardest — the rest of the stack runs inside the
          same desk, reported in the same weekly report.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {STACK.map((s) => {
            const linked = s.href && isLive(s.href);
            const inner = (
              <>
                <b className="text-ink type-meta">{s.label}</b>
                <span className="font-mono type-label text-label normal-case tracking-normal">
                  {s.note}
                </span>
              </>
            );
            return linked ? (
              <a
                key={s.label}
                href={s.href}
                className="border border-line hover:border-ink rounded-sm px-4 py-3 grid gap-1 min-w-[150px] transition-colors"
              >
                {inner}
              </a>
            ) : (
              <span
                key={s.label}
                className="border border-line rounded-sm px-4 py-3 grid gap-1 min-w-[150px]"
              >
                {inner}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

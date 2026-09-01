import type { ReactNode } from "react";

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "What does Hyprr actually do?",
    a: "We build, grow and operate ecommerce businesses across wholesale, private label and Shopify/DTC — including the ongoing daily operation.",
  },
  {
    q: "Does Hyprr build Amazon and Walmart businesses?",
    a: "Yes — wholesale operations on both marketplaces, built from scratch or taken over from an existing account.",
  },
  {
    q: "Does Hyprr offer private label?",
    a: "Yes — from product research and validation through manufacturing, brand and marketplace launch.",
  },
  {
    q: "Does Hyprr manage Shopify and DTC?",
    a: "Yes — storefront build, conversion work, merchandising and ongoing DTC operations.",
  },
  {
    q: "Who owns the inventory?",
    a: "The client. Accounts, inventory and capital stay with the client throughout.",
  },
  {
    q: "Who approves purchases?",
    a: "Material purchases require client approval before they are placed.",
  },
  {
    q: "How does Hyprr charge?",
    a: (
      <>
        Published build fees and operating economics, with performance-based
        fees tied to realised margin where applicable. Full structure is on the{" "}
        <a href="/pricing">pricing page</a>.
      </>
    ),
  },
  {
    q: "Do you guarantee results?",
    a: "No. We don't offer guaranteed returns or passive income. We publish the operating model instead.",
  },
  {
    q: "What happens before a client starts?",
    a: "A commercial read of the business, a plan with named owners, and sample documents to review before anything is signed.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="bg-white border-t border-line [scroll-margin-top:calc(var(--stack-top)+8px)]"
    >
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(56px,6vw,96px)] grid grid-cols-1 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] gap-[clamp(24px,4vw,56px)] items-start">
        <h2 className="font-display type-h2 text-ink m-0 lg:sticky lg:top-[calc(var(--stack-top))] lg:self-start">
          Questions we get asked first.
        </h2>
        <div className="grid gap-0 border-t border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="border-b border-line py-[18px]">
              <summary className="cursor-pointer font-display type-h3 font-semibold list-none flex justify-between gap-4">
                {f.q}
                <span className="text-link">+</span>
              </summary>
              <p className="type-body text-body mt-3 mb-0">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

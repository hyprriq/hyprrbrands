/**
 * FAQ — A.20. Nine items in the spec's order: service discovery and
 * ownership first. Questions are real H3s inside <summary> so the
 * outline is clean and the accordion works without JavaScript. Answer
 * text is frozen copy — it must match any future FAQPage schema `text`
 * word for word.
 */
import type { ReactNode } from "react";

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "What does Hyprr Brands do?",
    a: "Hyprr builds, grows and operates ecommerce businesses. That covers three things: building the operation — product and supplier research, sourcing, brand, storefront and marketplace setup; growing it — listings, advertising, conversion and channel expansion; and operating it day to day — purchasing, inventory, orders, account health and reporting. You own the business throughout.",
  },
  {
    q: "Which ecommerce channels do you work across?",
    a: "Amazon and Walmart for marketplace wholesale and private label, Shopify for direct-to-consumer, and eBay, TikTok Shop and Target as additional channels where the catalogue and margin support them. Most engagements start on one channel and add a second once the first is stable.",
  },
  {
    q: "Do you build private label brands and Shopify stores as well as wholesale?",
    a: "Yes. Private label runs from product research and validation through supplier sourcing, samples, brand and packaging, to marketplace launch and the operation afterwards. Shopify and DTC work covers the website build, conversion structure, merchandising, paid acquisition and ongoing optimisation.",
  },
  {
    q: "Do you run Amazon and Walmart advertising?",
    a: "Yes. PPC and paid media are part of how we grow an account, not a separate service you buy on its own. We manage bids, search terms, budgets and creative, and we judge advertising on contribution margin rather than on ad spend or ACoS in isolation.",
  },
  {
    q: "Who owns the seller account when Hyprr runs it?",
    a: "You do. Your Amazon Seller Central and Walmart Marketplace accounts are registered in your name and stay there. We operate through permissioned access granted to us as a service provider, which is how marketplace provider access is designed to work. We do not hold your login credentials, and if we stop working together the account is unaffected because it was never ours.",
  },
  {
    q: "Who owns the inventory and the capital?",
    a: "You do. Inventory is bought in your business's name — the supplier invoices you directly, and we do not buy stock in our own name to resell to you. Capital stays in your bank account and we have no signing authority over it.",
  },
  {
    q: "Who approves purchases?",
    a: "You do. Every material purchase order requires your recorded approval before it is placed. We research the opportunity, model the landed cost and margin, and give you a written recommendation — but the decision, and the record of it, are yours.",
  },
  {
    q: "How does Hyprr charge?",
    a: (
      <>
        A build fee, published, and a 30% share of the margin the business
        realises after goods actually sell. The split is 30% at every band —
        a larger build fee buys more work, never a better split. No fee is
        calculated on the capital you deploy or on your ad spend. A $500
        monthly minimum applies to operating engagements and is credited
        against the share. Full figures and a worked example are on the{" "}
        <a href="/how-we-work#fees">How we work page</a>.
      </>
    ),
  },
  {
    q: "Do you guarantee sales or profit?",
    a: "No. We do not make guarantees about sales, profit, returns or rankings, and we do not publish earnings figures. What we provide is research, an operating process, and reporting you can check against your own settlement data.",
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
              <summary className="cursor-pointer list-none flex justify-between gap-4">
                <h3 className="font-display type-h3 font-semibold text-ink m-0">
                  {f.q}
                </h3>
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

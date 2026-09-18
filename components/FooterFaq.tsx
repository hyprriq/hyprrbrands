"use client";

import { usePathname } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { faqLd } from "@/lib/schema";

/**
 * Footer FAQ — PROMPT_26 §3.5. The five questions people ask first, above
 * the footer columns, with FAQPage JSON-LD generated from the same
 * strings so the schema cannot drift from the text.
 *
 * Renders on the home page only: the service pages carry their own
 * five-question FAQPage (check-features 7e) and Google reads one
 * FAQPage per URL. usePathname resolves during SSR, so the block and
 * its schema are in the server HTML for "/".
 */
export const FOOTER_FAQS = [
  {
    q: "What does it cost?",
    a: "Three structures: a fixed-price project, monthly management from $800 a month, or a launch fee plus a share of the profit. Quoted after the call, in writing before anything starts.",
  },
  {
    q: "Do you need my Seller Central password?",
    a: "No. You add us as a user with limited permissions, and you can remove us yourself at any time.",
  },
  {
    q: "How soon can you start?",
    a: "The first call is usually within two working days. A diagnosis takes one to two weeks.",
  },
  {
    q: "Will you change things before you understand my account?",
    a: "No. The first thirty days are for baselining the numbers.",
  },
  {
    q: "Do you work with businesses outside the US?",
    a: "Yes. Amazon in the US, UK and Europe, and Walmart in the US, for owners based anywhere.",
  },
] as const;

export default function FooterFaq() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  const items = FOOTER_FAQS.map((f) => ({ q: f.q, a: f.a }));
  return (
    <div className="footer-faq" data-feature="footer-faq">
      <JsonLd nodes={[faqLd(items)]} />
      <div className="kicker">Questions people ask first</div>
      <div className="qa">
        {items.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

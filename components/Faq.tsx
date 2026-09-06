import JsonLd from "./JsonLd";
import { faqLd } from "@/lib/schema";

/**
 * FAQ band — the FAQPage JSON-LD is generated from the same strings
 * the reader sees, so the schema can never drift from the visible
 * text (DEV_BRIEF §5).
 */
export default function Faq({
  items,
  heading = "Clear answers before the call.",
  eyebrow = "FAQ",
}: {
  items: { q: string; a: string }[];
  heading?: string;
  eyebrow?: string;
}) {
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <JsonLd nodes={[faqLd(items)]} />
        <span className="eyebrow">{eyebrow}</span>
        <h2>{heading}</h2>
        <div className="faq-list">
          {items.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                <span className="plus" aria-hidden="true"></span>
                {f.q}
              </summary>
              <div className="a">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

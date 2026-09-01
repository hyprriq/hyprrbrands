import type { Metadata } from "next";
import SitePageShell from "@/components/SitePageShell";

export const metadata: Metadata = {
  title: "Contact | Hyprr Brands",
  description:
    "Tell us where you are, what you are trying to build, and what you have already tried. No pressure to sign, and no deadline attached to the conversation.",
  alternates: { canonical: "/contact" },
};

/** Contact — the primary CTA's destination. */
export default function Page() {
  return (
    <SitePageShell>
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(48px,6vw,88px)] pb-[clamp(48px,6vw,96px)] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[clamp(32px,5vw,72px)] items-start">
          <div>
            <h1 className="font-display type-h1 text-ink m-0 mb-5 max-w-[16ch]">
              If it&apos;s a fit, let&apos;s talk.
            </h1>
            <p className="type-lead text-body m-0 mb-8 max-w-[52ch]">
              Tell us where you are, what you are trying to build, and what
              you have already tried. We will look at the situation before we
              recommend a path. No pressure to sign, and no deadline attached
              to the conversation.
            </p>
            <div className="grid gap-3 type-body">
              <a
                href="mailto:hello@hyprrbrands.com"
                className="font-semibold"
              >
                hello@hyprrbrands.com
              </a>
              <a href="tel:+18338906367" className="font-semibold">
                +1 (833) 890-6367
              </a>
            </div>
          </div>
          <div className="border border-line rounded-lg p-[clamp(22px,2.4vw,30px)] bg-bone">
            <p className="type-label text-label uppercase m-0 mb-5">
              What happens next
            </p>
            <div className="grid gap-4 type-body text-body">
              <div className="flex gap-3.5">
                <span className="type-label text-label pt-[3px] flex-none">
                  01
                </span>
                <span>
                  You send context — channels, products, capital, and what is
                  stuck.
                </span>
              </div>
              <div className="flex gap-3.5">
                <span className="type-label text-label pt-[3px] flex-none">
                  02
                </span>
                <span>We come to the call with a view, not a questionnaire.</span>
              </div>
              <div className="flex gap-3.5">
                <span className="type-label text-label pt-[3px] flex-none">
                  03
                </span>
                <span>
                  You get a written plan and the sample documents to review.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

import type { Metadata } from "next";
import { ogImageMeta } from "@/lib/og-pages";
import SitePageShell from "@/components/SitePageShell";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Hyprr Brands | Start a Conversation",
  description:
    "Tell us what you are trying to build. We read the context, come prepared, and tell you whether Hyprr is a fit — including when we are not.",
  alternates: { canonical: "/contact" },
  ...ogImageMeta("contact"),
};

/**
 * /contact — Template 4, exactly as §18: White form, Petrol "what
 * happens next" beside it on desktop, below it on mobile. No closing
 * CTA band — the page is the CTA. One primary control: Send.
 */
const NEXT: [string, string, string][] = [
  [
    "01",
    "We review the context",
    "Someone reads what you wrote, looks at your accounts if you shared them, and prepares.",
  ],
  [
    "02",
    "We come prepared",
    "The first conversation starts from your situation, not from a pitch.",
  ],
  [
    "03",
    "We tell you whether Hyprr is a fit",
    "And if it isn't, we say so and point you somewhere useful.",
  ],
];

export default function Page() {
  return (
    <SitePageShell>
      <JsonLd
        nodes={[
          {
            ...webPageLd({
              path: "/contact",
              title: "Contact Hyprr Brands | Start a Conversation",
              description:
                "Tell us what you are trying to build. We read the context, come prepared, and tell you whether Hyprr is a fit — including when we are not.",
            }),
            "@type": "ContactPage",
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,6vw,72px)]">
          <h1 className="font-display type-h1 text-ink m-0 max-w-[16ch] text-balance">
            Tell us what you&apos;re trying to build.
          </h1>
          <p className="type-lead text-body m-0 mt-[18px] max-w-[52ch]">
            The more context you give, the more useful the first conversation
            is. We read everything before we reply.
          </p>

          <div className="flex flex-wrap gap-x-14 gap-y-10 mt-10 items-start">
            <ContactForm />

            {/* Petrol: what happens next — the conversion block */}
            <div className="flex-[1_1_300px] max-w-[420px] bg-field text-white rounded-lg p-[clamp(24px,3vw,36px)] grid gap-[22px] content-start">
              <h2 className="font-mono type-label text-on-field-mute uppercase m-0 font-semibold">
                What happens next
              </h2>
              {NEXT.map(([n, title, desc]) => (
                <div
                  key={n}
                  className="grid grid-cols-[32px_1fr] gap-3.5 items-start"
                >
                  <span className="font-mono type-label text-on-field-mute pt-1">
                    {n}
                  </span>
                  <div className="grid gap-1">
                    <b className="type-lead font-bold leading-tight tracking-[-.01em]">
                      {title}
                    </b>
                    <span className="text-on-field-body type-meta">{desc}</span>
                  </div>
                </div>
              ))}
              <div className="border-t border-line-on-field pt-[18px] type-meta text-on-field-body">
                Prefer to read first?{" "}
                <a
                  href="/how-we-work"
                  className="text-white hover:text-white font-semibold"
                >
                  How we work →
                </a>
              </div>
              <div className="type-meta text-on-field-body">
                Who you will be talking to is on{" "}
                <a
                  href="/about"
                  className="text-white hover:text-white font-semibold"
                >
                  the About page
                </a>
                .
              </div>
              <div className="type-meta text-on-field-body">
                We work with clients across US, UK, European and Gulf time
                zones — a working week that includes Sunday is not a problem.
              </div>
              <div className="type-meta text-on-field-body">
                Or directly:{" "}
                <a
                  href="mailto:hello@hyprrbrands.com"
                  className="text-white hover:text-white font-semibold"
                >
                  hello@hyprrbrands.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

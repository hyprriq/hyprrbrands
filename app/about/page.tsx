import type { Metadata } from "next";
import Link from "next/link";
import SitePageShell from "@/components/SitePageShell";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

export const metadata: Metadata = {
  title: "About Hyprr Brands | Who Runs the Operation",
  description:
    "Why Hyprr exists, who is accountable for what, and the company facts you can verify. No stock photography and no team-of-experts copy.",
  alternates: { canonical: "/about" },
  ...ogImageMeta("about"),
};

/**
 * /about — the no-faces version (prompt 11). Grounds: White, Bone for
 * the people grid, Petrol CTA; no engine colour, this page is not
 * engine-scoped. One real card beats three empty ones: no placeholder
 * names, no second card until there is a second real person, and no
 * image slot or reserved aspect ratio — reserving space for an asset
 * with no delivery date is the mistake that already cost the homepage
 * team section. No Person JSON-LD until there is a live LinkedIn URL
 * to put in sameAs.
 */
interface Person {
  name: string;
  role: string;
  handles: string;
  priorEmployer?: string; // renders only when set
  linkedin?: string; // renders only when set
}

const PEOPLE: Person[] = [
  {
    name: "Gautam Naidu",
    role: "Runs the operation",
    handles:
      "Client engagements end to end — what gets bought, which accounts we take on, and the call on any purchase that could put an account at risk.",
  },
];

const PRINCIPLES: [string, string][] = [
  [
    "You decide, we execute",
    "Every material decision is the client's, in writing.",
  ],
  [
    "Everything in your name",
    "Accounts, inventory, capital, records.",
  ],
  [
    "Evidence over claims",
    "Documents you can read before you talk to us; no figures we cannot show.",
  ],
];

export default function Page() {
  return (
    <SitePageShell>
      <JsonLd
        nodes={[
          webPageLd({
            path: "/about",
            title: "About Hyprr Brands | Who Runs the Operation",
            description:
              "Why Hyprr exists, who is accountable for what, and the company facts you can verify. No stock photography and no team-of-experts copy.",
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      {/* White: hero + founder point of view */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,6vw,72px)]">
          <nav aria-label="Breadcrumb">
            <ol className="font-mono type-label text-label normal-case tracking-normal flex gap-2 list-none m-0 p-0">
              <li>
                <Link href="/" className="text-label hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                About
              </li>
            </ol>
          </nav>
          <h1 className="font-display type-h1 text-ink m-0 mt-[18px] max-w-[16ch] text-balance">
            Who runs the operation
          </h1>
          <p className="type-lead text-body m-0 mt-5 max-w-[56ch]">
            Hyprr is an ecommerce operations business. We buy, list, advertise
            and run marketplace and store businesses on behalf of the people
            who own them. This page is who is accountable for what, and the
            facts you can check.
          </p>

          <div className="mt-10 max-w-[62ch] grid gap-3.5">
            <h2 className="font-display type-h3 text-ink m-0">
              Why Hyprr exists
            </h2>
            <p className="type-body text-body m-0">
              I started Hyprr because of how this category charges. Most firms
              running Amazon accounts take a share of the money you deploy —
              you wire the capital, you buy the stock, and the fee lands
              whether or not any of it sold. The incentive that creates is
              obvious once you have seen it up close: more buying is better
              for them, and it is not always better for you.
            </p>
            <p className="type-body text-body m-0">
              So we built the opposite. We are paid on margin the business
              actually realises after goods sell. If the stock sits, we do not
              get paid on it.
            </p>
            <p className="type-body text-body m-0">
              The second thing is account safety. Where protecting the account
              and protecting this month&apos;s margin conflict, we protect the
              account and take the smaller fee. I would rather hold back a
              purchase order than explain a suspension.
            </p>
          </div>
        </div>
      </section>

      {/* Bone: people — no photographs */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,72px)]">
          <h2 className="font-display type-h2 text-ink m-0">People</h2>
          <p className="type-body text-body mt-3 mb-0 max-w-[60ch]">
            No stock photography and no generated faces. When there are
            photographs of the actual people, they will go here. Until then
            the names, the roles and the profiles are the substance, and
            those are checkable now.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            {PEOPLE.map((p) => (
              <div
                key={p.name}
                className="flex-[1_1_300px] max-w-[420px] bg-white border border-line rounded-lg p-[clamp(22px,2.5vw,30px)] grid gap-2 content-start"
              >
                <b className="text-ink type-lead font-bold tracking-[-.01em]">
                  {p.name}
                </b>
                <span className="type-meta text-body">{p.role}</span>
                <p className="type-meta text-body m-0">
                  <span className="font-mono type-label text-label uppercase">
                    Responsible for ·
                  </span>{" "}
                  {p.handles}
                </p>
                {p.priorEmployer && (
                  <span className="type-meta text-muted">
                    {p.priorEmployer}
                  </span>
                )}
                {p.linkedin && (
                  <a
                    href={p.linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-ink hover:text-ink font-medium type-meta"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White: operating philosophy */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,64px)]">
          <h2 className="font-display type-h3 text-ink m-0">
            Operating philosophy
          </h2>
          <div className="mt-4 max-w-[62ch] grid">
            {PRINCIPLES.map(([t, d]) => (
              <div
                key={t}
                className="grid gap-1 py-3.5 border-t border-line"
              >
                <b className="text-ink type-body">{t}</b>
                <span className="type-meta text-body">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Petrol: CTA */}
      <section className="bg-field text-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(48px,6vw,80px)]">
          <p className="font-display type-h2 text-white m-0 max-w-[16ch] text-balance">
            Tell us what you&apos;re trying to build.
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

import type { ReactNode } from "react";
import Link from "next/link";
import SitePageShell from "@/components/SitePageShell";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

const LEGAL_PAGES: [string, string][] = [
  ["/privacy", "Privacy policy"],
  ["/terms", "Terms of service"],
  ["/accessibility", "Accessibility"],
  ["/earnings-claims", "Earnings claims policy"],
];

/**
 * Legal pages — White only, the article type stack with a version and
 * date line. No template beyond that; flat URLs.
 */
export default function LegalPage({
  title,
  version,
  path,
  description,
  children,
}: {
  title: string;
  version: string;
  path: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <SitePageShell>
      <JsonLd
        nodes={[
          webPageLd({ path, title, description }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: title, path },
          ]),
        ]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,6vw,72px)]">
          <nav aria-label="Breadcrumb">
            <ol className="font-mono type-label text-label normal-case tracking-normal flex gap-2 list-none m-0 p-0 mb-[18px]">
              <li>
                <Link href="/" className="text-label hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {title}
              </li>
            </ol>
          </nav>
          <h1 className="font-display type-h1 text-ink m-0 max-w-[18ch] text-balance">
            {title}
          </h1>
          <p className="font-mono type-label text-label normal-case tracking-normal mt-4 mb-0">
            {version}
          </p>
          <div className="mt-8 max-w-[68ch] grid gap-4 [&_h2]:font-display [&_h2]:type-h3 [&_h2]:text-ink [&_h2]:m-0 [&_h2]:mt-4 [&_p]:type-body [&_p]:text-body [&_p]:m-0 [&_ul]:type-body [&_ul]:text-body [&_ul]:m-0 [&_ul]:pl-5 [&_li]:mb-1.5">
            {children}
          </div>
          <p className="type-meta text-muted mt-10 mb-0 border-t border-line pt-5 max-w-[68ch]">
            The other policies:{" "}
            {LEGAL_PAGES.filter(([p]) => p !== path).map(([p, label], i, arr) => (
              <span key={p}>
                <a href={p} className="hover:text-ink">
                  {label}
                </a>
                {i < arr.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      </section>
    </SitePageShell>
  );
}

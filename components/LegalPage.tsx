import type { ReactNode } from "react";
import SitePageShell from "@/components/SitePageShell";

/**
 * Legal pages — White only, the article type stack with a version and
 * date line. No template beyond that; flat URLs.
 */
export default function LegalPage({
  title,
  version,
  children,
}: {
  title: string;
  version: string;
  children: ReactNode;
}) {
  return (
    <SitePageShell>
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,6vw,72px)]">
          <h1 className="font-display type-h1 text-ink m-0 max-w-[18ch] text-balance">
            {title}
          </h1>
          <p className="font-mono type-label text-label normal-case tracking-normal mt-4 mb-0">
            {version}
          </p>
          <div className="mt-8 max-w-[68ch] grid gap-4 [&_h2]:font-display [&_h2]:type-h3 [&_h2]:text-ink [&_h2]:m-0 [&_h2]:mt-4 [&_p]:type-body [&_p]:text-body [&_p]:m-0 [&_ul]:type-body [&_ul]:text-body [&_ul]:m-0 [&_ul]:pl-5 [&_li]:mb-1.5">
            {children}
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

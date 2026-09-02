"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { isLive, pagesByEngine, type Engine } from "@/lib/site-map";

/**
 * Navigation renders from the site manifest: hub links for the three
 * engines (with dropdowns listing their LIVE service pages once any
 * exist), plus the company pages that are live. Nothing here links to
 * a page that does not exist; Insights and About appear automatically
 * when their manifest entries flip to live.
 */
const ENGINES: { engine: Exclude<Engine, null>; label: string; hub: string }[] =
  [
    { engine: "build", label: "Build", hub: "/build" },
    { engine: "grow", label: "Grow", hub: "/grow" },
    { engine: "operate", label: "Operate", hub: "/operate" },
  ];

const COMPANY: [string, string][] = [
  ["/how-we-work", "How we work"],
  ["/insights", "Insights"],
  ["/about", "About"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const companyLive = COMPANY.filter(([slug]) => isLive(slug));

  return (
    <>
      <div className="w-full bg-ink text-on-ink-body type-body py-2.5 px-5 text-center">
        Client-owned accounts. Client-approved purchases. Documented
        operations.{" "}
        <Link
          href="/#ownership"
          className="text-link-on-ink hover:text-link-on-ink whitespace-nowrap"
        >
          How that works
        </Link>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-[14px] border-b border-line">
        <div className="mx-auto max-w-[1280px] px-[clamp(16px,3vw,40px)] min-h-[72px] flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display font-extrabold type-body tracking-[-.02em] text-ink hover:text-ink flex-none"
            onClick={() => setOpen(false)}
          >
            hyprr <span className="font-normal text-muted">brands</span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main"
            className="hidden md:flex items-center gap-[clamp(14px,1.8vw,28px)] type-meta font-medium py-3"
          >
            {ENGINES.map(({ engine, label, hub }) => {
              const services = pagesByEngine(engine).filter(
                (s) => s.status === "live"
              );
              return (
                <div key={hub} className="relative group">
                  <a
                    href={hub}
                    aria-current={pathname === hub ? "page" : undefined}
                    className={`text-ink hover:text-ink whitespace-nowrap ${pathname === hub ? "font-semibold underline underline-offset-8" : ""}`}
                  >
                    {label}
                  </a>
                  {services.length > 0 && (
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block">
                      <div className="bg-white border border-line rounded-md shadow-[0_18px_40px_-24px_rgba(23,23,26,.4)] p-2 min-w-[260px] grid gap-0.5">
                        {services.map((s) => (
                          <a
                            key={s.slug}
                            href={s.slug}
                            className="text-ink hover:text-ink type-meta px-3 py-2 rounded-sm hover:bg-bone"
                          >
                            {s.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {companyLive.map(([slug, label]) => (
              <a
                key={slug}
                href={slug}
                aria-current={pathname === slug ? "page" : undefined}
                className={`text-ink hover:text-ink whitespace-nowrap ${pathname === slug ? "font-semibold underline underline-offset-8" : ""}`}
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-field text-white hover:text-white px-[18px] py-3 rounded-md whitespace-nowrap min-h-11 flex items-center"
            >
              Let&apos;s talk
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 -mr-2 rounded-sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-[20px] h-[2px] bg-ink rounded transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-[20px] h-[2px] bg-ink rounded transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[20px] h-[2px] bg-ink rounded transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile navigation panel */}
        <nav
          id="mobile-nav"
          aria-label="Main"
          className={`md:hidden border-t border-line bg-white ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="px-[clamp(16px,3vw,40px)] py-3 grid gap-0.5">
            {[
              ...ENGINES.map((e): [string, string] => [e.hub, e.label]),
              ...companyLive,
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className="text-ink hover:text-ink type-body font-medium py-3 border-b border-line/70 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-3 mb-2 bg-field text-white hover:text-white type-body font-semibold px-[18px] py-3 rounded-md min-h-11 flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

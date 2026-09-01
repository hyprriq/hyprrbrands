"use client";

import { useState } from "react";

const NAV_LINKS: [string, string][] = [
  ["#build", "Build"],
  ["#grow", "Grow"],
  ["#operate", "Operate"],
  ["#insights", "Insights"],
  ["#how", "How we work"],
  ["#pricing", "Pricing"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-ink text-on-ink-body type-body py-2.5 px-5 text-center">
        Client-owned accounts. Client-approved purchases. Documented
        operations.{" "}
        <a
          href="#ownership"
          className="text-link-on-ink hover:text-link-on-ink whitespace-nowrap"
        >
          How that works
        </a>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-[14px] border-b border-line">
        <div className="mx-auto max-w-[1280px] px-[clamp(16px,3vw,40px)] min-h-[72px] flex items-center justify-between gap-4">
          <a
            href="#top"
            className="font-display font-extrabold type-body tracking-[-.02em] text-ink hover:text-ink flex-none"
            onClick={() => setOpen(false)}
          >
            hyprr <span className="font-normal text-muted">brands</span>
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-[clamp(14px,1.8vw,28px)] type-meta font-medium py-3"
          >
            {NAV_LINKS.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-ink hover:text-ink whitespace-nowrap"
              >
                {label}
              </a>
            ))}
            <a
              href="#talk"
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
          aria-label="Primary"
          className={`md:hidden border-t border-line bg-white ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="px-[clamp(16px,3vw,40px)] py-3 grid gap-0.5">
            {NAV_LINKS.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-ink hover:text-ink type-body font-medium py-3 border-b border-line/70 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#talk"
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

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Header — SITEMAP.md navigation. Short labels in the nav; the full
 * keyword-bearing names live in each page's H1. Company ▾ holds
 * Proof · About · Contact. Book a call uses the booking URL when the
 * env var is set, otherwise the contact page.
 */
const LINKS = [
  { href: "/amazon-private-label", label: "Private label" },
  { href: "/amazon-wholesale-management", label: "Wholesale" },
  { href: "/amazon-walmart-management", label: "Management" },
  { href: "/amazon-listing-optimization", label: "Listings" },
  { href: "/how-we-work", label: "How we work" },
];

const COMPANY = [
  { href: "/proof", label: "Proof" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // Close menus on route change.
  useEffect(() => {
    setOpen(false);
    setDrop(false);
  }, [pathname]);

  // Close the dropdown on outside click / Escape.
  useEffect(() => {
    if (!drop) return;
    const onClick = (e: MouseEvent) => {
      if (!dropRef.current?.contains(e.target as Node)) setDrop(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrop(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [drop]);

  return (
    <nav className="site" aria-label="Main">
      <div className="wrap navin">
        <a href="/" aria-label="Hyprr Brands home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="logo"
            src="/hyprr-brands-logo-transparent.png"
            alt="Hyprr Brands"
            width={167}
            height={34}
          />
        </a>
        <div className="links">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
          <div className="navdrop" ref={dropRef}>
            <button
              type="button"
              aria-expanded={drop}
              aria-haspopup="true"
              onClick={() => setDrop((d) => !d)}
            >
              Company <span aria-hidden="true">▾</span>
            </button>
            {drop && (
              <div className="navdrop-panel">
                {COMPANY.map((l) => (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a className="btn dark" href={BOOKING}>
            Book a call
          </a>
          <button
            type="button"
            className="mtoggle"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="mmenu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          {COMPANY.map((l) => (
            <a key={l.href} href={l.href} className="sub">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

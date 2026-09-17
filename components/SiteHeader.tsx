"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site-map";
import NavDropdown from "./NavDropdown";
import Logo from "./Logo";

/**
 * Header — renders from NAV in lib/site-map.ts. Plain items are
 * links; items with children are dropdowns on desktop and accordions
 * in the mobile menu (collapsed by default). The logo is the v2.0
 * outlined wordmark, inline (PROMPT_24 §11). Book a call uses the
 * booking URL when the env var is set, otherwise the contact page.
 */
const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  return (
    <nav className="site" aria-label="Main">
      <div className="wrap navin">
        <a href="/" aria-label="Hyprr Brands home" className="logo-link">
          <Logo className="logo" />
        </a>
        <div className="links">
          {NAV.map((item) =>
            item.children ? (
              <NavDropdown
                key={item.label}
                label={item.label}
                items={item.children}
                pathname={pathname}
                feature={item.group ? `nav-${item.group}-group` : undefined}
              />
            ) : (
              <a
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            )
          )}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a className="btn dark" href={BOOKING}>
            Book a call
          </a>
          <button
            type="button"
            className="mtoggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
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
        <div className="mmenu" id="mobile-menu">
          {NAV.map((item) => {
            if (!item.children) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            }
            const isOpen = expanded === item.label;
            const id = `macc-${item.label.toLowerCase()}`;
            return (
              <div className="macc" key={item.label}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                >
                  {item.label}
                  <span aria-hidden="true" className="caret">
                    ▾
                  </span>
                </button>
                <div id={id} className="macc-panel" hidden={!isOpen}>
                  {item.children.map((c) => (
                    <a
                      key={c.href}
                      href={c.href}
                      aria-current={pathname === c.href ? "page" : undefined}
                    >
                      <b>{c.label}</b>
                      <span>{c.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}

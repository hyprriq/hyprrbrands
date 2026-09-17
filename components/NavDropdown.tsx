"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { NavChild } from "@/lib/site-map";

/**
 * Top-nav dropdown (Management ▾, Company ▾). The trigger is a
 * <button>, never a link. Opens on hover and on click; Escape closes;
 * arrow keys move between rows; aria-expanded / aria-haspopup /
 * aria-controls are set. Shows the active underline when the current
 * route is one of its children.
 */
export default function NavDropdown({
  label,
  items,
  pathname,
}: {
  label: string;
  items: NavChild[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const closeTimer = useRef<number | null>(null);
  const hovering = useRef(false);
  const active = items.some((i) => pathname === i.href);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  const links = () =>
    Array.from(root.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const list = links();
    const idx = list.indexOf(document.activeElement as HTMLAnchorElement);
    switch (e.key) {
      case "Escape":
        setOpen(false);
        root.current?.querySelector("button")?.focus();
        e.preventDefault();
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!open) setOpen(true);
        setTimeout(
          () => links()[idx < 0 ? 0 : Math.min(idx + 1, list.length - 1)]?.focus(),
          0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        if (idx <= 0) {
          setOpen(false);
          root.current?.querySelector("button")?.focus();
        } else list[idx - 1]?.focus();
        break;
      case "Home":
        if (open) {
          e.preventDefault();
          list[0]?.focus();
        }
        break;
      case "End":
        if (open) {
          e.preventDefault();
          list[list.length - 1]?.focus();
        }
        break;
    }
  };

  // Hover with a short grace so moving from button to panel never closes it.
  const hoverOpen = () => {
    hovering.current = true;
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hoverClose = () => {
    hovering.current = false;
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };
  // A click on a hover-opened menu must not snap it shut; it only
  // toggles when the pointer is not resting on the trigger.
  const onClick = () => setOpen((o) => (o && hovering.current ? true : !o));

  return (
    <div
      className="navdrop"
      ref={root}
      onKeyDown={onKeyDown}
      onMouseEnter={hoverOpen}
      onMouseLeave={hoverClose}
      onBlur={(e) => {
        if (!root.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={panelId}
        aria-current={active ? "page" : undefined}
        className={active ? "is-active" : undefined}
        onClick={onClick}
      >
        {label}{" "}
        <span aria-hidden="true" className="caret">
          ▾
        </span>
      </button>
      <div
        id={panelId}
        role="menu"
        aria-label={label}
        className="navdrop-panel"
        hidden={!open}
      >
        {items.map((i) => (
          <a
            key={i.href}
            href={i.href}
            role="menuitem"
            aria-current={pathname === i.href ? "page" : undefined}
          >
            <b>{i.label}</b>
            <span>{i.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

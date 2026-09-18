"use client";

import { useId, useState, type KeyboardEvent, type ReactNode } from "react";

/**
 * Tablist for /how-we-work §4.4 (PROMPT_26). All panels are rendered in
 * the server HTML; the inactive ones carry the `hidden` attribute, so
 * crawlers and readers without JS see every route. Left/Right/Home/End
 * move between tabs (WAI-ARIA tabs pattern, automatic activation).
 */
export default function RouteTabs({
  label,
  tabs,
}: {
  label: string;
  tabs: { id: string; title: string; panel: ReactNode }[];
}) {
  const [active, setActive] = useState(0);
  const base = useId();

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`${base}-tab-${tabs[next].id}`)?.focus();
  }

  return (
    <div data-feature="route-tabs">
      <div className="tabs" role="tablist" aria-label={label}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            id={`${base}-tab-${t.id}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${base}-panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {t.title}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          id={`${base}-panel-${t.id}`}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${t.id}`}
          hidden={i !== active}
          data-feature="route-panel"
        >
          {t.panel}
        </div>
      ))}
    </div>
  );
}

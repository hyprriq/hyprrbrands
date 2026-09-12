import type { ReactNode } from "react";
import JsonLd from "./JsonLd";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

/**
 * Legal page shell — v4. Footer-only pages: one H1, a version line,
 * prose, and a related-policies row so the legal set cross-links in
 * the body (the footer does not count as body links).
 */
const POLICIES = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/earnings-claims", label: "Earnings claims" },
];

export default function LegalPage({
  path,
  title,
  description,
  version,
  children,
}: {
  path: string;
  title: string;
  description: string;
  version: string;
  children: ReactNode;
}) {
  return (
    <main id="main">
      <JsonLd
        nodes={[
          webPageLd({ path, title, description }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: title, path },
          ]),
        ]}
      />
      <section className="legal-band">
        <div className="wrap">
          <h1>{title}</h1>
          <p className="legal-meta">{version}</p>
          <div className="prose">{children}</div>
          <p style={{ marginTop: 34, fontSize: 14.5 }}>
            Related:{" "}
            {POLICIES.filter((p) => p.href !== path).map((p, i, arr) => (
              <span key={p.href}>
                <a href={p.href} style={{ fontWeight: 600 }}>
                  {p.label}
                </a>
                {i < arr.length - 1 ? " · " : ""}
              </span>
            ))}{" "}
            · <a href="/contact" style={{ fontWeight: 600 }}>Contact</a>
          </p>
        </div>
      </section>
    </main>
  );
}

/**
 * Footer — SITEMAP.md: the four services, the three company pages,
 * the three legal pages. Legal lives here and nowhere else.
 */
import { FOOTER } from "@/lib/site-map";

const { services: SERVICES, company: COMPANY, legal: LEGAL } = FOOTER;

export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="cols">
          <div>
            <b>Services</b>
            {SERVICES.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <b>Company</b>
            {COMPANY.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <b>Legal</b>
            {LEGAL.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="base">
          <span>HYPRR BRANDS — AMAZON + WALMART COMMERCE</span>
          <span>PRIVATE LABEL · WHOLESALE · MANAGEMENT · LISTINGS</span>
        </div>
      </div>
    </footer>
  );
}

/**
 * Footer — SITEMAP.md: the four services, the three company pages,
 * the three legal pages. Legal lives here and nowhere else.
 */
const SERVICES = [
  { href: "/amazon-private-label", label: "Amazon private label" },
  { href: "/amazon-wholesale-management", label: "Amazon wholesale management" },
  { href: "/amazon-walmart-management", label: "Amazon and Walmart management" },
  { href: "/amazon-listing-optimization", label: "Amazon listing optimization" },
  { href: "/amazon-ppc-management", label: "Amazon PPC management" },
];

const COMPANY = [
  { href: "/how-we-work", label: "How we work" },
  { href: "/proof", label: "Proof" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
];

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

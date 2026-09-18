/**
 * Footer — the five services, the four company pages, the four legal
 * pages (FOOTER in lib/site-map.ts), then the locations strip with
 * flags, the entity line and the email address (PROMPT_24 §7.3,
 * §12.3). Legal lives here and nowhere else. The wordmark is the
 * white-lime version: the violet full stop disappears on ink.
 */
import Link from "next/link";
import { FOOTER } from "@/lib/site-map";
import { email, entityLine, locations } from "@/lib/company";
import Flag from "./Flag";
import FooterFaq from "./FooterFaq";
import Logo from "./Logo";

const { services: SERVICES, company: COMPANY, legal: LEGAL } = FOOTER;

export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <FooterFaq />
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
        <div className="locations-strip" data-feature="footer-locations">
          <Link href="/" aria-label="Hyprr Brands home" className="footer-logo">
            <Logo variant="white-lime" />
          </Link>
          <ul aria-label="Where we work">
            {locations.map((l) => (
              <li key={l.short}>
                <Flag iso2={l.iso2} size="strip" />
                {l.short}
              </li>
            ))}
          </ul>
        </div>
        <div className="base">
          <span className="entity">{entityLine}</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </footer>
  );
}

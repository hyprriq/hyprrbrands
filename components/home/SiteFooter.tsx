import Link from "next/link";
import { pagesByEngine, SITE_MAP, isLive } from "@/lib/site-map";

/**
 * Footer — A.23, rendered from the site manifest so its columns match
 * the service architecture in section D exactly. Every service name is
 * VISIBLE (the entity's service list must be crawlable text), but only
 * live pages render as links — planned pages are plain text until they
 * ship. Company/legal entries behave the same way.
 */
function FooterItem({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  return isLive(slug) ? (
    <a href={slug} className="text-on-field-body hover:text-white">
      {title}
    </a>
  ) : (
    <span className="text-on-field-mute">{title}</span>
  );
}

export default function SiteFooter() {
  const build = pagesByEngine("build");
  const grow = pagesByEngine("grow");
  const operate = pagesByEngine("operate");
  const company = SITE_MAP.filter((p) => p.group === "company");
  const resources = SITE_MAP.filter((p) => p.group === "support");
  const legal = SITE_MAP.filter((p) => p.group === "legal");

  return (
    <footer className="bg-field text-on-field-body border-t border-line-on-field">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-[clamp(48px,5vw,72px)] pb-9 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[clamp(24px,3vw,40px)]">
        <div className="min-w-[200px]">
          <div className="font-display font-extrabold type-body text-white tracking-[-.02em] mb-2">
            hyprr <span className="font-normal text-on-field-mute">brands</span>
          </div>
          <p className="type-body font-semibold text-white m-0 mb-1.5">
            Build. Grow. Operate.
          </p>
          <p className="type-body m-0 max-w-[32ch]">
            Ecommerce strategy, execution and operations across marketplaces
            and DTC.
          </p>
        </div>
        {(
          [
            ["Build", build],
            ["Grow", grow],
            ["Operate", operate],
          ] as const
        ).map(([title, pages]) => (
          <div key={title}>
            <p className="type-label text-on-field-mute uppercase m-0 mb-4">
              {title}
            </p>
            <div className="grid gap-2.5 type-meta">
              {pages.map((p) => (
                <FooterItem key={p.slug} slug={p.slug} title={p.title} />
              ))}
              {title === "Operate" && (
                <span className="text-on-field-mute">
                  Reporting &amp; performance
                </span>
              )}
            </div>
          </div>
        ))}
        <div>
          <p className="type-label text-on-field-mute uppercase m-0 mb-4">
            Company
          </p>
          <div className="grid gap-2.5 type-meta">
            {company.map((p) => (
              <FooterItem key={p.slug} slug={p.slug} title={p.title} />
            ))}
          </div>
        </div>
        <div>
          <p className="type-label text-on-field-mute uppercase m-0 mb-4">
            Resources
          </p>
          <div className="grid gap-2.5 type-meta">
            {resources.map((p) => (
              <FooterItem key={p.slug} slug={p.slug} title={p.title} />
            ))}
            <Link href="/#faq" className="text-on-field-body hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
        <div>
          <p className="type-label text-on-field-mute uppercase m-0 mb-4">
            Legal
          </p>
          <div className="grid gap-2.5 type-meta">
            {legal.map((p) => (
              <FooterItem key={p.slug} slug={p.slug} title={p.title} />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] pt-6 pb-11 type-meta flex justify-between gap-[18px] flex-wrap border-t border-line-on-field">
        <span>© 2026 Hyprr Retail LLC</span>
        <div className="flex gap-5 flex-wrap">
          <a
            href="mailto:hello@hyprrbrands.com"
            className="text-on-field-body hover:text-white"
          >
            hello@hyprrbrands.com
          </a>
          <a
            href="tel:+18338906367"
            className="text-on-field-body hover:text-white"
          >
            +1 (833) 890-6367
          </a>
        </div>
      </div>
    </footer>
  );
}

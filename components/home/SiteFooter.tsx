import Link from "next/link";
import { pagesByEngine, SITE_MAP, isLive } from "@/lib/site-map";

/**
 * Footer — A.23, rendered from the site manifest so its columns match
 * the service architecture in section D exactly. A4 (2 Sep audit):
 * only live pages render at all — every footer entry is a working
 * link, and the columns grow as pages ship. The machine-readable
 * "these are our services" claim lives in the Organization schema,
 * not in unlinked footer text.
 */
function FooterItem({ slug, title }: { slug: string; title: string }) {
  return (
    <a href={slug} className="text-on-field-body hover:text-white">
      {title}
    </a>
  );
}

export default function SiteFooter() {
  // isLive resolves anchor aliases (/shopify-dtc#growth) to the page
  // that carries them, so DTC growth appears once /shopify-dtc ships.
  const live = (p: { slug: string }) => isLive(p.slug);
  const build = pagesByEngine("build").filter(live);
  const grow = pagesByEngine("grow").filter(live);
  const operate = pagesByEngine("operate").filter(live);
  const company = SITE_MAP.filter((p) => p.group === "company" && live(p));
  const resources = SITE_MAP.filter((p) => p.group === "support" && live(p));
  const legal = SITE_MAP.filter((p) => p.group === "legal" && live(p));

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
              {title === "Operate" && isLive("/ecommerce-operations") && (
                <FooterItem
                  slug="/ecommerce-operations#reporting"
                  title="Reporting & performance"
                />
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

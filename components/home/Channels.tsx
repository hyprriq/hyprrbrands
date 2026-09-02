import Image from "next/image";

/**
 * Commerce channels — A.04. Each mark carries a micro-label naming what
 * Hyprr does there: six crawlable service phrases, and the thing that
 * stops the row reading as a logo wall. Marks are ink-neutral
 * (grayscale) at rest and take their brand colour on hover.
 *
 * P.04: every micro-label must be true on launch day — eBay, TikTok
 * Shop and Target are the three to verify with the business.
 */
const CHANNELS = [
  { name: "Amazon", src: "/channels/amazon.jpeg", label: "Wholesale, private label, PPC" },
  { name: "Walmart", src: "/channels/walmart.jpeg", label: "Marketplace management" },
  { name: "eBay", src: "/channels/ebay.jpeg", label: "Listings and operations" },
  { name: "TikTok Shop", src: "/channels/tiktok.svg", label: "Social commerce" },
  { name: "Shopify", src: "/channels/shopify.png", label: "Storefront and DTC" },
  { name: "Target", src: "/channels/target.png", label: "Marketplace" },
];

export default function Channels() {
  return (
    <section className="bg-white border-t border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(24px,4vw,56px)] py-[clamp(32px,4vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-[clamp(16px,3vw,40px)] items-center justify-between">
        <div>
          <p className="type-label text-label uppercase m-0 mb-2">
            Commerce channels
          </p>
          <h2 className="font-display type-h2 text-ink m-0 mb-3 max-w-[20ch]">
            We operate where your customers already buy.
          </h2>
          <p className="type-body text-muted m-0 max-w-[52ch]">
            Marketplaces and storefronts, built and run under one operation
            rather than six disconnected ones. We work with sellers in the
            US, UK, Europe and the Middle East, selling on US and UK
            marketplaces.
          </p>
        </div>
        <ul
          aria-label="Channels Hyprr builds and operates on"
          className="list-none m-0 p-0 grid grid-cols-2 sm:grid-cols-3 gap-x-[clamp(18px,2.4vw,36px)] gap-y-5 min-w-0"
        >
          {CHANNELS.map((c) => (
            <li key={c.name} className="group flex flex-col items-start gap-1.5 min-w-0">
              <Image
                src={c.src}
                alt={c.name}
                width={46}
                height={46}
                className="w-[46px] h-[46px] flex-none rounded-sm object-contain grayscale group-hover:grayscale-0 transition-[filter] duration-[180ms]"
              />
              <span className="type-label text-label transition-transform duration-[180ms] group-hover:-translate-y-[2px]">
                {c.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

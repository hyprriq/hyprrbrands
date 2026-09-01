import Image from "next/image";

const CHANNELS = [
  { name: "Amazon", src: "/channels/amazon.jpeg" },
  { name: "Walmart", src: "/channels/walmart.jpeg" },
  { name: "eBay", src: "/channels/ebay.jpeg" },
  { name: "TikTok Shop", src: "/channels/tiktok.svg" },
  { name: "Shopify", src: "/channels/shopify.png" },
  { name: "Target", src: "/channels/target.png" },
];

/**
 * Channel marks: ink-neutral (grayscale) at rest, full brand colour on
 * hover; micro-label rises 2px, 180ms. White ground, hairline top.
 */
export default function Channels() {
  return (
    <section className="bg-white border-t border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(24px,4vw,56px)] py-[clamp(32px,4vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-[clamp(16px,3vw,40px)] items-center justify-between">
        <div>
          <p className="type-label text-label uppercase m-0 mb-2">
            Commerce channels
          </p>
          <h2 className="font-display type-h2 text-ink m-0 max-w-[24ch]">
            We build and operate across the channels ecommerce businesses
            actually sell on.
          </h2>
        </div>
        <ul
          aria-label="Channels Hyprr builds and operates on"
          className="list-none m-0 p-0 flex flex-wrap items-start justify-start gap-x-[clamp(14px,2.2vw,30px)] gap-y-3 min-w-0"
        >
          {CHANNELS.map((c) => (
            <li key={c.name} className="group flex flex-col items-center gap-1.5 min-w-0">
              <Image
                src={c.src}
                alt={c.name}
                width={46}
                height={46}
                className="w-[46px] h-[46px] flex-none rounded-[10px] object-contain grayscale group-hover:grayscale-0 transition-[filter] duration-[180ms]"
              />
              <span className="type-meta text-muted transition-transform duration-[180ms] group-hover:-translate-y-[2px]">
                {c.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

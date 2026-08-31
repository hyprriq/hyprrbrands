import Image from "next/image";

const CHANNELS = [
  { name: "Amazon", src: "/channels/amazon.jpeg" },
  { name: "Walmart", src: "/channels/walmart.jpeg" },
  { name: "eBay", src: "/channels/ebay.jpeg" },
  { name: "TikTok Shop", src: "/channels/tiktok.svg" },
  { name: "Shopify", src: "/channels/shopify.png" },
  { name: "Target", src: "/channels/target.png" },
];

export default function Channels() {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(24px,4vw,56px)] py-[clamp(16px,2vw,22px)] grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-[clamp(16px,3vw,40px)] items-center justify-between">
        <div>
          <h2 className="text-[11px] font-semibold tracking-[.16em] uppercase text-muted m-0 mb-2">
            Commerce channels
          </h2>
          <div className="text-base text-muted leading-[1.5]">
            We build and operate across the channels ecommerce businesses
            actually sell on.
          </div>
        </div>
        <ul
          aria-label="Channels Hyprr builds and operates on"
          className="list-none m-0 p-0 flex flex-nowrap items-center justify-start gap-[clamp(12px,2.2vw,30px)] min-w-0"
        >
          {CHANNELS.map((c) => (
            <li
              key={c.name}
              title={c.name}
              className="flex items-center justify-center min-w-0"
            >
              <Image
                src={c.src}
                alt={c.name}
                width={46}
                height={46}
                className="w-[46px] h-[46px] flex-none rounded-[10px] object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

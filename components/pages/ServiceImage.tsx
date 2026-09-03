import manifest from "@/lib/image-manifest.json";
import type { ServiceImage } from "@/lib/service-pages";

/**
 * PROMPT_19 step 1 — the image component and its cluster bands.
 *
 * Every image emits srcset at 640/1280/1920 with a slot-matched
 * `sizes`, explicit width/height from the build step's manifest (no
 * layout shift), lazy below the fold, and the flat-card overlay from
 * the visual plan — a white UI card over a photographic object is the
 * reference's look, and without it the images read as stock.
 *
 * The §0 chroma mitigations live HERE, not in page code: any cluster
 * of three or more renders on a Bone band (midPage) or a Petrol band
 * (section) — never on White — so six photographs per page do not
 * walk the low pages under the 0.018 floor. An image whose dimensions
 * are not in the manifest renders nothing: the build step is the only
 * way an image reaches a page, so width/height are always set.
 */
const WIDTHS = [640, 1280, 1920] as const;
const DIMS = manifest as Record<string, { w: number; h: number }>;

export function Pic({
  img,
  sizes,
  eager,
  className = "",
}: {
  img: ServiceImage;
  /** Must match the slot's rendered width. */
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  const dims = DIMS[img.src];
  if (!dims) return null; // no manifest entry: the file has not been built
  return (
    <figure className={`m-0 grid gap-3 ${className}`}>
      <div className="relative">
        <img
          src={`${img.src}-1280.webp`}
          srcSet={WIDTHS.map((w) => `${img.src}-${w}.webp ${w}w`).join(", ")}
          sizes={sizes}
          alt={img.alt}
          width={dims.w}
          height={dims.h}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          className="w-full h-auto rounded-lg border border-line"
        />
        {img.card && (
          <div className="absolute bottom-3 left-3 bg-white border border-line rounded-md px-4 py-2.5 grid gap-0.5 shadow-[0_10px_26px_-16px_rgba(23,23,26,.5)]">
            <span className="font-mono type-label text-label uppercase">
              {img.card.k}
            </span>
            <b className="text-ink type-meta">{img.card.v}</b>
          </div>
        )}
      </div>
      {img.caption && (
        <figcaption className="type-meta text-body max-w-[56ch]">
          {img.caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Mid-page cluster — Bone band, 2–3 columns. Renders nothing until
 *  at least one image has been through the build step. */
export function MidPageImages({ images }: { images: ServiceImage[] }) {
  const built = images.filter((i) => DIMS[i.src]);
  if (built.length === 0) return null;
  return (
    <section aria-label="In the operation" className="bg-bone">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(36px,4.5vw,60px)]">
        <div
          className={`grid gap-4 ${
            built.length >= 3
              ? "min-[720px]:grid-cols-3"
              : "min-[720px]:grid-cols-2"
          }`}
        >
          {built.map((img) => (
            <Pic
              key={img.src}
              img={img}
              sizes="(min-width: 720px) 30vw, 92vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Section cluster — Petrol band (§0 mitigation 2: the extra Petrol
 *  band per page, the same trade the rule card already proved). */
export function SectionImages({
  images,
}: {
  images: (ServiceImage & { slot: string })[];
}) {
  const built = images.filter((i) => DIMS[i.src]);
  if (built.length === 0) return null;
  return (
    <section aria-label="From the work" className="bg-field text-white">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(40px,5vw,64px)]">
        <div
          className={`grid gap-4 ${
            built.length >= 2 ? "min-[720px]:grid-cols-2" : ""
          } max-w-[980px]`}
        >
          {built.map((img) => (
            <Pic
              key={img.src}
              img={img}
              sizes="(min-width: 720px) 44vw, 92vw"
              className="[&_figcaption]:text-on-field-body"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

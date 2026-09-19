import manifest from "@/lib/image-manifest.json";

const MANIFEST = manifest as Record<string, { w: number; h: number }>;

/**
 * One product cut-out from the private label range (build-images
 * renditions, transparent WebP). Height-driven so a row of products
 * shares a baseline; width follows the manifest ratio, so the box is
 * reserved before the image loads (CLS 0). Alt text describes the
 * object, as check-images requires.
 */
export default function Product({
  name,
  alt,
  height,
  priority = false,
}: {
  /** manifest key after /images/amazon-private-label/, e.g. "range-moisturiser" */
  name: string;
  alt: string;
  /** rendered height in px at desktop; scales down with the slot */
  height: number;
  priority?: boolean;
}) {
  const key = `/images/amazon-private-label/${name}`;
  const dims = MANIFEST[key];
  if (!dims) throw new Error(`Product: ${key} is not in lib/image-manifest.json`);
  const width = Math.round((dims.w * height) / dims.h);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${key}-1280.webp`}
      srcSet={`${key}-640.webp 640w, ${key}-1280.webp 1280w, ${key}-1920.webp 1920w`}
      sizes={`${width}px`}
      width={dims.w}
      height={dims.h}
      style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: height }}
      alt={alt}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}

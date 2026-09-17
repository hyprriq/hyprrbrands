import { US, TH, SG, IN, AE } from "country-flag-icons/react/3x2";
import type { Location } from "@/lib/company";

/**
 * Country flag as inline SVG (country-flag-icons, MIT, 3:2). Emoji
 * flags render as two letters on Windows, so they are never used
 * (PROMPT_24 §12.2). The flag is decorative; the city name beside it
 * is the accessible label.
 */
const FLAGS = { US, TH, SG, IN, AE } as const;

export default function Flag({
  iso2,
  size = "card",
}: {
  iso2: Location["iso2"];
  /** card 34×23 (contact) · strip 20×13 (footer) */
  size?: "card" | "strip";
}) {
  const Svg = FLAGS[iso2];
  const w = size === "card" ? 34 : 20;
  return (
    <span className={`flag flag-${size}`} aria-hidden="true">
      <Svg width={w} height={Math.round((w * 2) / 3)} />
    </span>
  );
}

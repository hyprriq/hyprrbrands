import Reveal from "./Reveal";

const PRINCIPLES = [
  "Client-owned accounts",
  "Client-approved purchases",
  "Direct vendor → client invoicing",
  "Realised-margin economics",
  "No guaranteed outcomes",
];

/**
 * Built differently — five principles about how the operation is built,
 * so the section earns the Build band ground.
 *
 * Layout rule: the grid uses EXPLICIT column counts (1/2/3) because the
 * items carry per-position styling — auto-fit decides its own column
 * count at runtime and broke the padding rhythm at four columns.
 */
export default function Principles() {
  return (
    <section className="bg-build-band">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,110px)]">
        <Reveal className="mb-[clamp(30px,4vw,48px)]">
          <h2 className="font-display type-h2 text-ink m-0 mb-4">
            Built differently.
          </h2>
          <p className="type-lead text-body m-0 max-w-[62ch]">
            The operating model is the product. These are the terms it runs on.
          </p>
        </Reveal>
        <Reveal className="bg-field text-white rounded-lg p-[clamp(24px,3vw,44px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7">
            {PRINCIPLES.map((title, i) => (
              <div key={title} className="py-[22px]">
                <div className="type-label text-on-field-mute mb-3">
                  PRINCIPLE {String(i + 1).padStart(2, "0")}
                </div>
                <div className="type-body font-bold">{title}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-line-on-field pt-6">
            <a
              href="/vs-automation"
              className="type-body font-semibold text-link-on-field hover:text-link-on-field"
            >
              Why we&apos;re not an automation company →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

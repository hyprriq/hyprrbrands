import Reveal from "./Reveal";

/**
 * Built differently — five principles about how the operation is built,
 * so the section earns the Build band ground.
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
        <Reveal className="bg-ink text-white rounded-3xl p-[clamp(24px,3vw,44px)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-0">
            <div className="py-[22px] pr-6 border-b border-line-on-ink">
              <div className="type-label text-on-ink-mute mb-3">
                PRINCIPLE 01
              </div>
              <div className="type-body font-bold">Client-owned accounts</div>
            </div>
            <div className="py-[22px] px-6 border-b border-line-on-ink">
              <div className="type-label text-on-ink-mute mb-3">
                PRINCIPLE 02
              </div>
              <div className="type-body font-bold">
                Client-approved purchases
              </div>
            </div>
            <div className="py-[22px] pl-6 border-b border-line-on-ink">
              <div className="type-label text-on-ink-mute mb-3">
                PRINCIPLE 03
              </div>
              <div className="type-body font-bold">
                Direct vendor → client invoicing
              </div>
            </div>
            <div className="pt-[22px] pr-6">
              <div className="type-label text-on-ink-mute mb-3">
                PRINCIPLE 04
              </div>
              <div className="type-body font-bold">
                Realised-margin economics
              </div>
            </div>
            <div className="pt-[22px] px-6">
              <div className="type-label text-on-ink-mute mb-3">
                PRINCIPLE 05
              </div>
              <div className="type-body font-bold text-white">
                No guaranteed outcomes
              </div>
            </div>
            <div className="pt-[22px] pl-6 flex items-end">
              <a
                href="/vs-automation"
                className="type-body font-semibold text-link-on-ink hover:text-link-on-ink"
              >
                Why we&apos;re not an automation company →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

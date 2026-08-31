/**
 * Final CTA on the Ink field — primary CTA is Citrus fill with ink text
 * (the button rule for dark grounds), secondary is a translucent white edge.
 */
export default function CtaSection() {
  return (
    <section id="talk" className="bg-ink text-white">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(70px,8vw,124px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(32px,5vw,68px)] items-center">
        <div>
          <h2 className="font-display type-h2 text-white m-0 mb-[22px]">
            Ready to build, grow and operate your ecommerce business?
          </h2>
          <p className="type-lead text-on-ink-body m-0 mb-8 max-w-[48ch]">
            Tell us where you are, what you&apos;re trying to build and what
            needs to happen next.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="/apply"
              className="bg-build text-ink hover:text-ink type-body font-semibold px-7 py-4 rounded-[14px] min-h-12 flex items-center"
            >
              Let&apos;s talk
            </a>
            <a
              href="#how"
              className="text-white hover:text-white type-body font-semibold px-6 py-4 rounded-[14px] border border-white/30 min-h-12 flex items-center"
            >
              See how we work
            </a>
          </div>
        </div>
        <div className="border border-line-on-ink rounded-[20px] p-[clamp(22px,2.4vw,30px)] bg-ink-raised">
          <div className="type-label text-on-ink-mute uppercase mb-[22px]">
            What happens next
          </div>
          <div className="grid gap-[18px] type-body text-on-ink-body">
            <div className="flex gap-3.5">
              <span className="type-label text-on-ink-mute pt-[3px] flex-none">
                01
              </span>
              <span>
                You send context — channels, products, what&apos;s stuck.
              </span>
            </div>
            <div className="flex gap-3.5">
              <span className="type-label text-on-ink-mute pt-[3px] flex-none">
                02
              </span>
              <span>We come to the call with a view, not a questionnaire.</span>
            </div>
            <div className="flex gap-3.5">
              <span className="type-label text-on-ink-mute pt-[3px] flex-none">
                03
              </span>
              <span>
                You get a written plan and sample documents to review.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

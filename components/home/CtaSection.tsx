/**
 * Final CTA — A.22. "No pressure to sign, and no deadline attached to
 * the conversation" stays even if the paragraph is trimmed.
 */
export default function CtaSection() {
  return (
    <section id="talk" className="bg-field text-white">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(70px,8vw,124px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(32px,5vw,68px)] items-center">
        <div>
          <h2 className="font-display type-h2 text-white m-0 mb-[22px]">
            If it&apos;s a fit, let&apos;s talk.
          </h2>
          <p className="type-lead text-on-field-body m-0 mb-8 max-w-[48ch]">
            Tell us where you are, what you are trying to build, and what you
            have already tried. We will look at the situation before we
            recommend a path. No pressure to sign, and no deadline attached to
            the conversation.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="/contact"
              className="bg-build text-ink hover:text-ink type-body font-semibold px-7 py-4 rounded-md min-h-12 flex items-center"
            >
              Let&apos;s talk
            </a>
            <a
              href="/how-we-work"
              className="text-white hover:text-white type-body font-semibold px-6 py-4 rounded-md border border-white/30 min-h-12 flex items-center"
            >
              See how we work first
            </a>
          </div>
        </div>
        <div className="border border-line-on-field rounded-lg p-[clamp(22px,2.4vw,30px)] bg-field-raised">
          <p className="type-label text-on-field-mute uppercase m-0 mb-[22px]">
            What happens next
          </p>
          <div className="grid gap-[18px] type-body text-on-field-body">
            <div className="flex gap-3.5">
              <span className="type-label text-on-field-mute pt-[3px] flex-none">
                01
              </span>
              <span>
                You send context — channels, products, capital, and what is
                stuck.
              </span>
            </div>
            <div className="flex gap-3.5">
              <span className="type-label text-on-field-mute pt-[3px] flex-none">
                02
              </span>
              <span>We come to the call with a view, not a questionnaire.</span>
            </div>
            <div className="flex gap-3.5">
              <span className="type-label text-on-field-mute pt-[3px] flex-none">
                03
              </span>
              <span>
                You get a written plan and the sample documents to review.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

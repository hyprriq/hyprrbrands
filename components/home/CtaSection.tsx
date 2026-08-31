export default function CtaSection() {
  return (
    <section id="talk" className="bg-aubergine text-cloud">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(70px,8vw,124px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(32px,5vw,68px)] items-center">
        <div>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,58px)] leading-[1.02] tracking-[-.034em] m-0 mb-[22px]">
            Ready to build, grow and operate your ecommerce business?
          </h2>
          <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-mist m-0 mb-8 max-w-[48ch]">
            Tell us where you are, what you&apos;re trying to build and what
            needs to happen next.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="/apply"
              className="bg-violet text-white hover:text-white font-semibold text-base px-7 py-4 rounded-[14px] min-h-12 flex items-center"
            >
              Let&apos;s talk
            </a>
            <a
              href="#how"
              className="text-cloud hover:text-cloud font-semibold text-base px-6 py-4 rounded-[14px] border border-cloud/22 min-h-12 flex items-center"
            >
              See how we work
            </a>
          </div>
        </div>
        <div className="border border-cloud/12 rounded-[20px] p-[clamp(22px,2.4vw,30px)] bg-ink/40">
          <div className="text-[11px] font-semibold tracking-[.16em] uppercase text-dim mb-[22px]">
            What happens next
          </div>
          <div className="grid gap-[18px] text-base leading-[1.5]">
            <div className="flex gap-3.5">
              <span className="text-lime font-mono text-[12.5px] pt-[3px] flex-none">
                01
              </span>
              <span>You send context — channels, products, what&apos;s stuck.</span>
            </div>
            <div className="flex gap-3.5">
              <span className="text-lime font-mono text-[12.5px] pt-[3px] flex-none">
                02
              </span>
              <span>We come to the call with a view, not a questionnaire.</span>
            </div>
            <div className="flex gap-3.5">
              <span className="text-lime font-mono text-[12.5px] pt-[3px] flex-none">
                03
              </span>
              <span>You get a written plan and sample documents to review.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

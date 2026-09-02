/**
 * Final CTA — A.22, made bookable (prompt 9 B). The primary control
 * is Book a call → NEXT_PUBLIC_BOOKING_URL; if the env var is unset
 * (the scheduler account is not set up yet), the primary falls back
 * to Let's talk → /contact and the secondary is not rendered — the
 * build must never ship a booking button that goes nowhere. No
 * scheduler iframe: link out in a new tab. "No pressure to sign, and
 * no deadline attached to the conversation" stays — it does more
 * work with a scheduler on the page, not less.
 */
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

const STEPS_BOOKED: [string, string][] = [
  [
    "01",
    "You pick a time and answer four questions on the booking screen — channels, capital, whose name the accounts are in, and what is stuck.",
  ],
  [
    "02",
    "We come to the call having read them, with a view rather than a questionnaire.",
  ],
  // /documents is not live: the sample-documents clause stays out
  // until it is. Do not promise a route that 404s.
  ["03", "You get a written plan and the fee that applies to your band."],
];

const STEPS_CONTACT: [string, string][] = [
  [
    "01",
    "You send context — channels, products, capital, and what is stuck.",
  ],
  ["02", "We come to the call with a view, not a questionnaire."],
  ["03", "You get a written plan and the fee that applies to your band."],
];

export default function CtaSection() {
  const bookable = Boolean(BOOKING_URL);
  const steps = bookable ? STEPS_BOOKED : STEPS_CONTACT;

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
            {bookable ? (
              <>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-build text-ink hover:text-ink type-body font-semibold px-7 py-4 rounded-md min-h-12 flex items-center"
                >
                  Book a call
                </a>
                <a
                  href="/contact"
                  className="text-white hover:text-white type-body font-semibold px-6 py-4 rounded-md border border-white/30 min-h-12 flex items-center"
                >
                  Send context instead
                </a>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
        <div className="border border-line-on-field rounded-lg p-[clamp(22px,2.4vw,30px)] bg-field-raised">
          <p className="type-label text-on-field-mute uppercase m-0 mb-[22px]">
            What happens next
          </p>
          <div className="grid gap-[18px] type-body text-on-field-body">
            {steps.map(([n, text]) => (
              <div key={n} className="flex gap-3.5">
                <span className="type-label text-on-field-mute pt-[3px] flex-none">
                  {n}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

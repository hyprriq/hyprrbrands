/**
 * Home §3.2 (PROMPT_26) — "Every route runs the same way." Replaces the
 * live "Five steps" section. DOM only: type, rules and numerals, no
 * artwork. One white card with five columns divided by vertical rules,
 * the quarterly loop line inside it, an ink bar under it, then the
 * statement band. Keeps id="how" so the hero's "See how we work" anchor
 * still resolves.
 */
export const PHASES = [
  {
    n: "01",
    accent: "var(--violet)",
    name: "Understand",
    body: "Your model, your products, your goals, your budget, and what you want us to own.",
    get: "A straight answer on fit",
    when: "First call, 2 working days",
  },
  {
    n: "02",
    accent: "var(--aqua)",
    name: "Diagnose",
    body: "The real numbers: what a new product would cost, or what an existing account is actually doing.",
    get: "A written diagnosis",
    when: "1–2 weeks",
  },
  {
    n: "03",
    accent: "var(--citrus)",
    name: "Plan",
    body: "Foundation, execution, optimization, growth — with scope, fees and the numbers we report on.",
    get: "A plan you approve in writing",
    when: "About a week",
  },
  {
    n: "04",
    // The live palette has no lime token; coral is its fourth accent.
    accent: "var(--coral)",
    name: "Execute",
    body: "The work itself, on the route that fits: private label, wholesale, a handover or a fixed project.",
    get: "A note every Friday",
    when: "Ongoing",
  },
  {
    n: "05",
    accent: "var(--sky)",
    name: "Review and scale",
    body: "Margin, inventory, advertising and catalog reviewed — then more behind whatever is working.",
    get: "A monthly report and call",
    when: "Every month",
  },
] as const;

export default function Phases() {
  return (
    <>
      <section className="sec" id="how" data-feature="home-phases">
        <div className="wrap tight">
          <div className="sec-head">
            <div>
              <div className="kicker">How we work</div>
              <h2>Every route runs the same way.</h2>
            </div>
            <p>
              We start with where the business actually is. The plan comes
              after the numbers, not before.
            </p>
          </div>

          <div className="phase-card">
            <div className="phase-cols">
              {PHASES.map((p) => (
                <div
                  key={p.n}
                  className="phase"
                  style={{ ["--accent" as string]: p.accent }}
                >
                  <div className="n" aria-hidden="true">
                    {p.n}
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.body}</p>
                  <div className="spacer" />
                  <div className="get">
                    <div className="kicker">You get</div>
                    <b>{p.get}</b>
                    <span className="when">{p.when}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="loop-row">
              <svg viewBox="0 0 220 24" aria-hidden="true">
                <path
                  d="M214 4 L214 14 Q214 20 206 20 L14 20 Q6 20 6 14 L6 6"
                  fill="none"
                  stroke="var(--violet)"
                  strokeWidth="1.6"
                  strokeDasharray="6 5"
                />
                <path d="M2 10 L6 4 L10 10 Z" fill="var(--violet)" />
              </svg>
              <span>Review feeds back into the plan every quarter.</span>
            </div>
          </div>

          <div className="ink-bar">
            <b>You approve the plan, and every purchase, in writing.</b>
            <a href="/how-we-work">How we work, in full →</a>
          </div>
        </div>
      </section>

      <section className="sec band-paper" data-feature="home-statement">
        <div className="wrap tight">
          <div className="statement">
            <div className="kicker">How we think</div>
            <h2>
              We don&rsquo;t launch trending products. We build products that
              earn their demand.
            </h2>
            <p>
              Then we put more behind whatever sells. It is slower to start,
              and it is the reason accounts are still with us years later.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

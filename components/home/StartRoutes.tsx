/**
 * Home §3.1 (PROMPT_26) — "Where is your business today?" One section
 * replaces the four live routers (path, router-band, choice, services).
 * Four route cards, then the Walmart strip. The link texts carry the
 * service keywords the deleted sections used to carry — keep them
 * exactly. The only money figure on the site lives in the HAND OVER
 * card and the footer FAQ.
 */
const ROUTES = [
  {
    tag: "Launch",
    accent: "var(--violet)",
    h3: "“I want to build a brand.”",
    bullets: [
      "Product research and a written verdict",
      "Sourcing, samples, packaging and compliance",
      "Launch on Amazon and Walmart US, then the daily operation",
    ],
    shape: "Launch project, then monthly",
    links: [{ href: "/amazon-private-label", label: "Amazon private label" }],
  },
  {
    tag: "Build",
    accent: "var(--citrus)",
    h3: "“I want a wholesale business run properly.”",
    bullets: [
      "Authorized suppliers, opened in your name",
      "Every line modeled before it is bought",
      "Buying, prep, repricing and replenishment",
    ],
    shape: "Setup, then monthly",
    links: [
      { href: "/amazon-wholesale-management", label: "Amazon wholesale management" },
    ],
  },
  {
    tag: "Hand over",
    accent: "var(--aqua)",
    h3: "“I already sell and need an operator.”",
    bullets: [
      "The numbers baselined in the first two weeks",
      "Catalog, inventory, advertising, cases and account health",
      "A note every Friday, a margin report every month",
    ],
    shape: "From $800 a month",
    links: [
      { href: "/amazon-walmart-management", label: "Amazon and Walmart management" },
    ],
  },
  {
    tag: "Fix",
    accent: "var(--sky)",
    h3: "“One part of it is not working.”",
    bullets: [
      "Listing rebuilds at a fixed price",
      "Advertising judged on margin, not spend",
      "A clear route into management if you want it",
    ],
    shape: "Fixed-scope project",
    links: [
      { href: "/amazon-listing-optimization", label: "Listing optimization" },
      { href: "/amazon-ppc-management", label: "PPC management" },
    ],
  },
] as const;

export default function StartRoutes() {
  return (
    <section className="sec band-paper" id="start" data-feature="start-routes">
      <div className="wrap tight">
        <div className="sec-head">
          <div>
            <div className="kicker">Where to start</div>
            <h2>Where is your business today?</h2>
          </div>
          <p>
            Most clients come to us in one of four situations. Each has its
            own route. Every route runs the same way, with the same reporting
            and the same rule on money.
          </p>
        </div>

        <div className="routes4">
          {ROUTES.map((r) => (
            <article
              key={r.tag}
              className="route"
              style={{ ["--accent" as string]: r.accent }}
            >
              <div className="tag-row">
                <span className="sq" aria-hidden="true" />
                <span className="kicker">{r.tag}</span>
              </div>
              <h3>{r.h3}</h3>
              <ul>
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="spacer" />
              <div className="foot">
                <div className="kicker">{r.shape}</div>
                <div className="route-links">
                  {r.links.map((l) => (
                    <a key={l.href} className="link-arrow" href={l.href}>
                      {l.label} →
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="strip-mint">
          <b>Already selling on Amazon and adding Walmart US?</b>
          <span>That runs as part of management, with its own setup phase.</span>
          <a className="link-arrow" href="/amazon-walmart-management#walmart">
            Walmart US →
          </a>
        </div>
      </div>
    </section>
  );
}

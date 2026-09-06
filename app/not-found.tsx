export default function NotFound() {
  return (
    <main id="main">
      <section>
        <div className="wrap">
          <span className="eyebrow">404</span>
          <h1>That page is not here.</h1>
          <p style={{ maxWidth: "56ch" }}>
            The site was rebuilt in September 2026 and every old address now
            forwards to its replacement. If you typed this one by hand, start
            from the homepage — everything is at most two clicks from it.
          </p>
          <div className="cta-row">
            <a className="btn dark" href="/">
              Go to the homepage
            </a>
            <a className="btn ghost" href="/contact">
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

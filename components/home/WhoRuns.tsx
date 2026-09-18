import Flag from "@/components/Flag";
import { locations } from "@/lib/company";

/**
 * Home §3.3 (PROMPT_26) — "Who runs Hyprr". Replaces the live proof
 * section. Copy left, the six locations right. No photo, no name, no
 * initials placeholder. The experience line is the verbatim one from
 * §2 and the locations come from lib/company so they can only change
 * in one place.
 */
export default function WhoRuns() {
  return (
    <section className="sec" id="who" data-feature="home-who-runs">
      <div className="wrap tight who-grid">
        <div>
          <div className="kicker">Who runs Hyprr</div>
          <h2>A founder-led team of people who only do ecommerce.</h2>
          <p style={{ marginTop: 20 }}>
            Hyprr Brands is a founder-led team that has worked in ecommerce
            since 2010 — wholesale, private label, and client accounts on
            Amazon and Walmart. The person on your first call is one of the
            people who will run the work.
          </p>
          <p style={{ marginTop: 14 }}>
            Most of our clients come through people we already work with. The
            site is here so you can see how we work before that first call.
          </p>
          <a className="link-arrow" href="/about">
            About Hyprr Brands →
          </a>
        </div>
        <div>
          <div className="kicker">Where the team is</div>
          <ul className="loc-list">
            {locations.map((l) => (
              <li key={l.short}>
                <Flag iso2={l.iso2} size="strip" />
                {l.short}
              </li>
            ))}
          </ul>
          <p className="loc-note">
            We cover US, UK, Middle East and Asia-Pacific hours.
          </p>
        </div>
      </div>
    </section>
  );
}

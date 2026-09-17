import {
  email,
  entityLine,
  hoursCovered,
  locations,
  marketplaces,
  regions,
} from "@/lib/company";
import Flag from "./Flag";

/**
 * "Where we work" — /contact, PROMPT_24 §12.1, built from
 * reference/contact__locations-reference.png. Three region cards with
 * a flag per city (Easton carries the HQ chip), then one strip with
 * the three facts. Below 768px the cards stack (CSS).
 */
export default function Locations() {
  return (
    <section className="locations" id="where-we-work" data-feature="locations">
      <div className="wrap">
        <span className="eyebrow">Where we work</span>
        <h2>Six locations, one team.</h2>
        <p style={{ maxWidth: "70ch" }}>{entityLine}</p>
        <div className="loc-cards">
          {regions.map((region) => (
            <div className="loc-card" key={region}>
              <b>{region}</b>
              <ul>
                {locations
                  .filter((l) => l.region === region)
                  .map((l) => (
                    <li key={l.city}>
                      <Flag iso2={l.iso2} />
                      <span className="loc-name">
                        {l.city}
                        {l.note ? <small>{l.note}</small> : null}
                      </span>
                      {l.hq ? <span className="hq">HQ</span> : null}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <dl className="loc-facts">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${email}`}>{email}</a>
            </dd>
          </div>
          <div>
            <dt>Hours covered</dt>
            <dd>{hoursCovered}</dd>
          </div>
          <div>
            <dt>Marketplaces</dt>
            <dd>{marketplaces}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

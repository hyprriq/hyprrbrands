import Reveal from "./Reveal";

/**
 * Team on the Bone rest band. Until founder photography lands (imagery
 * brief asset 01), the fallback is typographic: an engine-colour field
 * with a large set number — never a silhouette, never a generated face.
 */
const CARDS = [
  { n: "01", field: "bg-build" },
  { n: "02", field: "bg-grow" },
  { n: "03", field: "bg-operate" },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-bone border-t border-line">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,110px)]">
        <Reveal className="mb-[clamp(30px,4vw,48px)]">
          <h2 className="font-display type-h2 text-ink m-0 mb-4">
            People who actually run the operation.
          </h2>
          <p className="type-lead text-body m-0 max-w-[62ch]">
            Hyprr is built around accountable people, not a faceless delivery
            model.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(20px,2.4vw,30px)]">
          {CARDS.map((c) => (
            <div key={c.n}>
              {/* Media slot V8 (fill later): 1:1 portrait — aspect ratio
                  reserved so photography drops in with zero relayout. Until
                  then: engine-colour field, never a silhouette or face. */}
              <div
                data-media-slot={`portrait-${c.n}`}
                className={`w-full aspect-square rounded-2xl ${c.field} flex items-end justify-between p-5`}
              >
                <span className="type-label text-ink uppercase">
                  Portrait to follow
                </span>
                <span className="font-display font-extrabold text-ink type-h2">
                  {c.n}
                </span>
              </div>
              <div className="mt-4 type-label text-label">
                NAME TO BE SUPPLIED
              </div>
              <div className="font-display font-bold type-body text-ink mt-1.5">
                Role · Responsibility
              </div>
              <p className="type-body text-body mt-2 mb-2.5">
                Two-line bio covering what this person is accountable for day
                to day.
              </p>
              <a href="/team" className="type-meta font-semibold">
                LinkedIn →
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

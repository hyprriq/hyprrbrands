import { pageFor } from "@/lib/site-map";

/** Not a bare 404 — offers the three hubs and contact. */
export default function NotFound() {
  const hubs = ["/build", "/grow", "/operate"].map((s) => pageFor(s)!);
  return (
    <main className="min-h-[70vh] bg-white flex items-center">
      <div className="mx-auto max-w-[720px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,8vw,120px)]">
        <p className="type-label text-label uppercase mb-3">404</p>
        <h1 className="font-display type-h2 text-ink m-0 mb-4">
          That page isn&apos;t here.
        </h1>
        <p className="type-body text-body m-0 mb-8">
          It may not exist yet — the site grows as pages are ready. Start from
          one of the three engines, or talk to us directly.
        </p>
        <div className="grid gap-3 mb-8">
          {hubs.map((h) => (
            <a
              key={h.slug}
              href={h.slug}
              className="type-body font-semibold text-ink hover:text-ink border border-line rounded-md px-5 py-4"
            >
              {h.title} — <span className="font-normal text-body">{h.oneLine}</span>
            </a>
          ))}
        </div>
        <a
          href="/contact"
          className="inline-flex items-center bg-field text-white hover:text-white type-body font-semibold px-[26px] py-4 rounded-md"
        >
          Let&apos;s talk
        </a>
      </div>
    </main>
  );
}

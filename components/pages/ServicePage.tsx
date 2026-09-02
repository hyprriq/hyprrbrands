import type { Metadata } from "next";
import Link from "next/link";
import SitePageShell from "@/components/SitePageShell";
import { isLive } from "@/lib/site-map";
import { ogImageMeta } from "@/lib/og-pages";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, faqLd, serviceLd, webPageLd } from "@/lib/schema";
import {
  ENGINE_META,
  SERVICE_SECTIONS,
  TONE_DOT,
  VERDICTS,
  type ServicePageData,
  type ServiceArtefact,
  type ServiceHww,
  type ServiceVisual,
} from "@/lib/service-pages";

/**
 * Service page template — one component, ten URLs, seven compositions.
 * The spine is fixed: White hero → section nav → Bone visual → the
 * eight H2s on the 13-ground sequence, closing on Petrol. Only the
 * engine field tint under "What you get" carries colour. Three CTA
 * moments, all "Let's talk". The mobile sticky CTA bar is pure CSS —
 * sticky bottom, placed mid-spine, checkbox dismiss.
 */

const CONTAINER = "mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)]";
const SECTION_PAD = "py-[clamp(40px,5vw,72px)]";
const ANCHOR = "[scroll-margin-top:140px]";

function PetrolCta({ note }: { note?: string }) {
  return (
    <div className="flex gap-[22px] items-center mt-9 flex-wrap">
      <a
        href="/contact"
        className="bg-field text-white hover:text-white type-body font-semibold px-[22px] py-3.5 rounded-md min-h-12 inline-flex items-center"
      >
        Let&apos;s talk
      </a>
      {note && (
        <span className="font-mono type-label text-label normal-case tracking-normal">
          {note}
        </span>
      )}
    </div>
  );
}

/* ---------------- primary visuals (section 2 · Bone) ---------------- */

function Visual({ visual, dot }: { visual: ServiceVisual; dot: string }) {
  switch (visual.kind) {
    case "table":
      return (
        <>
          {/* Desktop: full-width table, status column widest */}
          <div className="hidden min-[900px]:block bg-white border border-line rounded-md overflow-x-auto">
            <div
              className="grid gap-0 px-5 py-3 min-w-[720px] border-b border-line font-mono type-label text-label uppercase"
              style={{
                gridTemplateColumns: `repeat(${visual.cols.length - 1}, 1fr) 1.4fr`,
              }}
            >
              {visual.cols.map((c) => (
                <div key={c}>{c}</div>
              ))}
            </div>
            {visual.rows.map((r, i) => (
              <div
                key={i}
                className="grid px-5 py-3.5 min-w-[720px] border-b border-line/60 last:border-b-0 items-center"
                style={{
                  gridTemplateColumns: `repeat(${visual.cols.length - 1}, 1fr) 1.4fr`,
                }}
              >
                {r.cells.map((cell, j) => (
                  <div key={j} className="font-mono type-meta text-ink">
                    {cell}
                  </div>
                ))}
                <div className="flex gap-2 items-center type-meta font-semibold text-ink">
                  <span
                    className={`w-2.5 h-2.5 rounded-full flex-none ${TONE_DOT[r.tone]}`}
                  />
                  {r.status}
                </div>
              </div>
            ))}
          </div>
          {/* Mobile: stacked cards, one row per card, label–value pairs */}
          <div className="min-[900px]:hidden grid gap-3">
            {visual.rows.map((r, i) => (
              <div
                key={i}
                className="bg-white border border-line rounded-md p-4 grid gap-2 type-meta"
              >
                <div className="flex justify-between items-center pb-2 border-b border-line/60">
                  <b className="text-ink font-mono">{r.cells[0]}</b>
                  <span className="flex gap-2 items-center font-semibold text-ink">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${TONE_DOT[r.tone]}`}
                    />
                    {r.status}
                  </span>
                </div>
                {r.cells.slice(1).map((v, j) => (
                  <div key={j} className="flex justify-between gap-3">
                    <span className="font-mono type-label text-label uppercase">
                      {visual.cols[j + 1]}
                    </span>
                    <span className="text-ink font-mono">{v}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      );
    case "sequence":
      return (
        <div className="grid max-w-[560px]">
          {visual.steps.map(([label, gate], i) => (
            <div key={label} className="grid grid-cols-[28px_1fr] gap-4">
              <div className="flex flex-col items-center">
                <span className={`w-3 h-3 rounded-full ${dot} mt-[22px] flex-none`} />
                {i < visual.steps.length - 1 && (
                  <span className="w-[2px] flex-1 bg-line mt-1.5" />
                )}
              </div>
              <div className="bg-white border border-line rounded-md px-5 py-4 mb-2.5 flex justify-between gap-3 items-center">
                <b className="text-ink type-body">{label}</b>
                <span className="font-mono type-label text-label uppercase">
                  {gate}
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    case "journey":
      return (
        <>
          <div
            className="hidden min-[900px]:grid items-center"
            style={{
              gridTemplateColumns: `repeat(${visual.nodes.length}, minmax(0,1fr))`,
            }}
          >
            {visual.nodes.map(([label, sub], i) => (
              <div key={label} className="flex items-center">
                <div className="flex-1 bg-white border border-line rounded-md px-3 py-4 text-center min-h-24 flex flex-col justify-center gap-1.5">
                  <b className="text-ink type-meta leading-tight">{label}</b>
                  <span className="font-mono type-label text-label normal-case tracking-normal">
                    {sub}
                  </span>
                </div>
                {i < visual.nodes.length - 1 && (
                  <span className="w-3.5 h-[2px] bg-ink flex-none" />
                )}
              </div>
            ))}
          </div>
          <div className="min-[900px]:hidden grid justify-items-center">
            {visual.nodes.map(([label, sub], i) => (
              <div key={label} className="grid justify-items-center w-full">
                <div className="w-full bg-white border border-line rounded-md px-4 py-4 flex justify-between items-center gap-3">
                  <b className="text-ink type-meta">{label}</b>
                  <span className="font-mono type-label text-label normal-case tracking-normal">
                    {sub}
                  </span>
                </div>
                {i < visual.nodes.length - 1 && (
                  <span className="w-[2px] h-4 bg-ink" />
                )}
              </div>
            ))}
          </div>
        </>
      );
    case "panel":
      return (
        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-3">
          {visual.items.map((p) => (
            <div
              key={p.k}
              className="bg-white border border-line rounded-md px-5 py-5 grid gap-2.5 content-start"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono type-label text-label uppercase">
                  {p.k}
                </span>
                <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
              </div>
              <b className="text-ink type-body leading-snug tracking-[-.01em]">
                {p.q}
              </b>
              <span className="font-mono type-label text-body normal-case tracking-normal font-normal">
                {p.state}
              </span>
            </div>
          ))}
        </div>
      );
    case "stack":
      return (
        <div className="grid max-w-[520px] mx-auto">
          {visual.items.map(([label, sub], i) => (
            <div key={label} className="grid justify-items-center">
              <div className="w-full bg-white border border-line rounded-md px-5 py-4 flex justify-between items-center gap-3">
                <b className="text-ink type-body">{label}</b>
                <span className="font-mono type-label text-label normal-case tracking-normal">
                  {sub}
                </span>
              </div>
              {i < visual.items.length - 1 && (
                <span className="font-mono text-ink leading-none py-1">↕</span>
              )}
            </div>
          ))}
        </div>
      );
    case "states":
      return (
        <div className="bg-ink text-white rounded-md py-2 max-w-[720px]">
          {visual.items.map((s) => (
            <div
              key={s.label}
              className="flex justify-between items-center gap-4 px-5 py-3.5 border-b border-line-on-ink last:border-b-0"
            >
              <span className="flex gap-3 items-center type-body font-semibold">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${s.tone === "ok" ? "bg-operate" : "bg-build"}`}
                />
                {s.label}
              </span>
              <span className="font-mono type-label text-on-ink-mute uppercase">
                {s.state}
              </span>
            </div>
          ))}
        </div>
      );
    case "loop":
      return (
        <div className="bg-white border border-line rounded-md p-[22px] flex flex-wrap gap-2.5 items-center max-w-[860px]">
          {visual.items.map((l) => (
            <span key={l} className="inline-flex gap-2.5 items-center">
              <b className="text-ink border border-line rounded-sm px-3.5 py-2.5 type-body">
                {l}
              </b>
              <span className="text-label">→</span>
            </span>
          ))}
          <span className="font-mono type-label text-label normal-case tracking-normal">
            {visual.back}
          </span>
        </div>
      );
  }
}

/* ------------- artefacts (section 4 · engine field tint) ------------- */

function Artefact({ artefact }: { artefact: ServiceArtefact }) {
  switch (artefact.kind) {
    case "gate":
      return (
        <div className="bg-white rounded-md p-[22px] grid gap-2">
          {artefact.steps.map((s, i) => (
            <div key={s} className="flex gap-3 items-center type-meta">
              <span className="font-mono type-label text-label w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <b className="text-ink">{s}</b>
            </div>
          ))}
          <div className="flex gap-2 flex-wrap my-1.5 ml-9">
            {(["approve", "review", "no"] as const).map((v) => (
              <span
                key={v}
                className={`font-mono type-label uppercase px-2.5 py-1.5 rounded-sm ${VERDICTS[v].chipClass}`}
              >
                {VERDICTS[v].label}
              </span>
            ))}
          </div>
          <div className="flex gap-3 items-center type-meta">
            <span className="font-mono type-label text-label w-6">
              {String(artefact.steps.length + 2).padStart(2, "0")}
            </span>
            <b className="text-ink">{artefact.last}</b>
            <span className="font-mono type-label text-label normal-case tracking-normal ml-auto">
              client decision first
            </span>
          </div>
        </div>
      );
    case "verdict":
      return (
        <div className="bg-white rounded-md overflow-hidden">
          <div className="px-[22px] py-3.5 border-b border-line flex justify-between font-mono type-label text-label uppercase">
            <span>Product verdict sheet</span>
            <span>v1 · draft</span>
          </div>
          {artefact.rows.map(([k, v]) => (
            <div
              key={k}
              className="flex justify-between gap-3 px-[22px] py-3 border-b border-line/60 last:border-b-0 type-meta"
            >
              <span className="text-ink">{k}</span>
              <span
                className={`font-mono type-label uppercase px-2.5 py-1 rounded-sm ${VERDICTS[v].chipClass}`}
              >
                {VERDICTS[v].label}
              </span>
            </div>
          ))}
        </div>
      );
    case "layers":
      return (
        <div className="grid gap-1.5">
          {artefact.items.map(([label, desc], i) => (
            <details
              key={label}
              open={i === 2}
              className="group bg-white rounded-md open:bg-ink open:text-white"
            >
              <summary className="cursor-pointer px-5 py-3.5 flex justify-between items-center gap-3">
                <b className="type-body">{label}</b>
                <span className="font-mono type-label opacity-70 normal-case tracking-normal">
                  layer {String(i + 1).padStart(2, "0")}
                </span>
              </summary>
              <div className="px-5 pb-4 type-meta text-body group-open:text-on-ink-body">
                {desc}
              </div>
            </details>
          ))}
        </div>
      );
    case "loop":
      return (
        <div className="bg-white rounded-md p-[22px] flex flex-wrap gap-2 items-center">
          {artefact.items.map((l) => (
            <span key={l} className="inline-flex gap-2 items-center">
              <b className="text-ink border border-line rounded-sm px-3 py-2 type-meta">
                {l}
              </b>
              <span className="text-label">→</span>
            </span>
          ))}
          <span className="font-mono type-label text-label normal-case tracking-normal">
            ↺ back to listing
          </span>
        </div>
      );
    case "levers":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {artefact.items.map(([k, v]) => (
            <div key={k} className="bg-white rounded-md px-5 py-[18px] grid gap-1.5">
              <b className="text-ink type-body">{k}</b>
              <span className="type-meta text-body">{v}</span>
            </div>
          ))}
        </div>
      );
    case "report":
      return (
        <div
          id="reporting"
          className="bg-white rounded-md overflow-hidden [scroll-margin-top:140px]"
        >
          <div className="px-[22px] py-3.5 border-b border-line flex justify-between font-mono type-label text-label uppercase">
            <span>Operating report · sample</span>
            <span>#reporting</span>
          </div>
          {artefact.rows.map((r) => (
            <div
              key={r.k}
              className="flex justify-between gap-3 px-[22px] py-3 border-b border-line/60 last:border-b-0 type-meta"
            >
              <span className="text-ink">{r.k}</span>
              <span className="flex gap-2 items-center font-mono type-label text-body normal-case tracking-normal font-normal">
                <span className={`w-2 h-2 rounded-full ${TONE_DOT[r.tone]}`} />
                {r.v}
              </span>
            </div>
          ))}
        </div>
      );
    case "split":
      return (
        <>
          {/* Desktop: two columns, shared rows aligned */}
          <div className="hidden min-[900px]:grid grid-cols-2 gap-2">
            {artefact.cols.map((col) => (
              <div
                key={col.name}
                className="bg-white rounded-md px-[22px] py-5 grid gap-2.5 content-start"
              >
                <b className="text-ink type-lead font-bold tracking-[-.01em]">
                  {col.name}
                </b>
                {col.items.map(([tag, t], i) => (
                  <div key={i} className="flex gap-2.5 type-meta items-start">
                    <span className="flex-none font-mono type-label text-label uppercase w-14 mt-0.5">
                      {tag}
                    </span>
                    <span className="text-ink">{t}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Mobile: two-state toggle, shared rows repeat in both states */}
          <div className="cc-tabs min-[900px]:hidden bg-white rounded-md overflow-hidden relative">
            <input
              type="radio"
              name="svc-split"
              id="svc-split-a"
              defaultChecked
            />
            <input type="radio" name="svc-split" id="svc-split-b" />
            <div className="grid grid-cols-2 border-b border-line">
              <label
                htmlFor="svc-split-a"
                data-tab-label="a"
                className="py-3 text-center type-meta font-semibold"
              >
                {artefact.cols[0].name}
              </label>
              <label
                htmlFor="svc-split-b"
                data-tab-label="b"
                className="py-3 text-center type-meta font-semibold"
              >
                {artefact.cols[1].name}
              </label>
            </div>
            {(["a", "b"] as const).map((key, ci) => (
              <div
                key={key}
                data-tab-panel={key}
                className="px-5 py-[18px] gap-2.5"
              >
                {artefact.cols[ci].items.map(([tag, t], i) => (
                  <div key={i} className="flex gap-2.5 type-meta items-start">
                    <span className="flex-none font-mono type-label text-label uppercase w-14 mt-0.5">
                      {tag}
                    </span>
                    <span className="text-ink">{t}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      );
  }
}

/* ------------- family insert in "first 90 days" (section 6) ---------- */

function HwwInsert({ hww }: { hww: ServiceHww }) {
  switch (hww.kind) {
    case "chain":
      return (
        <div className="flex flex-wrap gap-2 items-stretch">
          {hww.items.map((c, i) => (
            <div
              key={c.label}
              className="flex-[1_1_130px] flex gap-2 items-center min-w-0"
            >
              <div
                className={`flex-1 border border-line rounded-sm px-3.5 py-3 grid gap-1 min-h-[74px] content-center ${
                  c.dark ? "bg-ink text-white" : "bg-white text-ink"
                }`}
              >
                <b className="type-meta leading-tight">{c.label}</b>
                <span
                  className={`font-mono type-label normal-case tracking-normal font-normal ${
                    c.dark ? "text-on-ink-body" : "text-label"
                  }`}
                >
                  {c.sub}
                </span>
              </div>
              {i < hww.items.length - 1 && (
                <span className="text-ink flex-none">→</span>
              )}
            </div>
          ))}
        </div>
      );
    case "stops":
      return (
        <>
          <div className="flex flex-wrap gap-2">
            {hww.items.map(([label, sub]) => (
              <div
                key={label}
                className="flex-[1_1_160px] bg-white border-2 border-ink rounded-sm px-4 py-3.5 grid gap-1.5"
              >
                <div className="flex justify-between items-center">
                  <b className="text-ink type-meta">{label}</b>
                  <span className="w-3 h-3 rounded-[2px] bg-crit" />
                </div>
                <span className="font-mono type-label text-label uppercase">
                  stop · {sub}
                </span>
              </div>
            ))}
          </div>
          <p className="type-meta text-body mt-3 mb-0 max-w-[60ch]">
            Each gate is a stop, not a step: nothing proceeds to production
            until it is cleared and recorded.
          </p>
        </>
      );
    case "statements":
      return (
        <div className="flex flex-wrap gap-2">
          {hww.items.map(([k, v]) => (
            <div
              key={k}
              className="flex-[1_1_240px] bg-white border border-line rounded-md px-5 py-5 grid gap-2 content-start"
            >
              <span className="font-mono type-label text-label uppercase">
                {k}
              </span>
              <span className="text-ink font-medium type-body">{v}</span>
            </div>
          ))}
        </div>
      );
  }
}

/* ------------------------------ page ------------------------------- */

export default function ServicePage({ data }: { data: ServicePageData }) {
  const e = ENGINE_META[data.engine];
  const sentences = data.answer.match(/[^.]+\./g) ?? [data.answer];
  const answerFirst = sentences[0].trim();

  return (
    <SitePageShell>
      <JsonLd
        nodes={[
          webPageLd({
            path: data.slug,
            title: data.metaTitle,
            description: data.metaDescription,
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: e.hub, path: e.hubUrl },
            { name: data.name, path: data.slug },
          ]),
          serviceLd({
            name: data.name,
            serviceType: data.serviceType,
            path: data.slug,
            description: data.metaDescription,
          }),
          // FAQPage only because the FAQ below renders these exact
          // strings — schema text and visible text are the same object.
          faqLd(data.faqs),
        ]}
      />
      {/* 1 · White: breadcrumb · hero · direct answer */}
      <section className="bg-white">
        <div
          className={`${CONTAINER} pt-[clamp(28px,4vw,56px)] pb-[clamp(32px,4vw,56px)]`}
        >
          <nav aria-label="Breadcrumb">
            <ol className="font-mono type-label text-label normal-case tracking-normal flex gap-2 flex-wrap list-none m-0 p-0">
              <li>
                <Link href="/" className="text-label hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a href={e.hubUrl} className="text-label hover:text-ink">
                  {e.hub}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {data.name}
              </li>
            </ol>
          </nav>
          <h1 className="font-display type-h1 text-ink m-0 mt-4 max-w-[18ch] text-balance">
            {data.h1}
          </h1>
          {/* Mobile above the fold: first sentence + one CTA */}
          <p className="type-lead text-body m-0 mt-5 max-w-[62ch] min-[900px]:hidden">
            {answerFirst}
          </p>
          <a
            href="/contact"
            className="min-[900px]:hidden bg-field text-white hover:text-white type-body font-semibold px-[22px] py-3.5 rounded-md min-h-12 flex items-center justify-center mt-5"
          >
            Let&apos;s talk
          </a>
          <p className="type-lead text-body m-0 mt-6 max-w-[62ch] max-[899px]:mt-7 max-[899px]:hidden">
            {data.answer}
          </p>
          <p className="type-body text-body m-0 mt-6 max-w-[62ch] min-[900px]:hidden">
            {sentences.slice(1).join(" ").trim()}
          </p>
          <p className="type-body text-ink font-medium mt-4 mb-0 max-w-[62ch] flex gap-2.5 items-start">
            <span className="flex-none w-3 h-3 rounded-[2px] bg-ink mt-1.5" />
            <span>{data.disqualifier}</span>
          </p>
          {data.heroObjection && (
            <p className="type-body text-body mt-4 mb-0 max-w-[62ch]">
              {data.heroObjection.text}{" "}
              <a
                href={`#${data.heroObjection.anchor}`}
                className="text-ink hover:text-ink font-semibold whitespace-nowrap"
              >
                {data.heroObjection.anchorLabel} →
              </a>
            </p>
          )}
          <div className="hidden min-[900px]:flex gap-[22px] items-center mt-7 flex-wrap">
            <a
              href="/contact"
              className="bg-field text-white hover:text-white type-body font-semibold px-[22px] py-3.5 rounded-md min-h-12 inline-flex items-center"
            >
              Let&apos;s talk
            </a>
            <a
              href="/how-we-work"
              className="text-ink hover:text-ink type-body font-medium"
            >
              See how we work →
            </a>
          </div>
          <a
            href="/how-we-work"
            className="min-[900px]:hidden text-ink hover:text-ink type-body font-medium inline-block mt-5"
          >
            See how we work →
          </a>
        </div>
      </section>

      {/* Section nav — sticky ≥900px when the viewport shows it whole */}
      <nav
        aria-label="On this page"
        className="service-nav hidden min-[900px]:block bg-white/95 backdrop-blur-lg border-y border-line"
      >
        <div
          className={`${CONTAINER} flex gap-[22px] overflow-x-auto whitespace-nowrap font-mono type-label text-label normal-case tracking-[.04em]`}
        >
          {SERVICE_SECTIONS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="py-3 text-label hover:text-ink border-b-2 border-transparent hover:border-ink"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
      <details className="min-[900px]:hidden mx-5 border border-line rounded-sm">
        <summary className="cursor-pointer px-3.5 py-3 flex justify-between font-mono type-label text-ink uppercase">
          <span>Jump to section</span>
          <span>▾</span>
        </summary>
        <div className="grid px-3.5 pb-3 type-meta">
          {SERVICE_SECTIONS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="py-2 text-ink hover:text-ink border-b border-line/60 last:border-b-0"
            >
              {label}
            </a>
          ))}
        </div>
      </details>

      {/* 2 · Bone: primary visual */}
      <section className="bg-bone mt-[clamp(20px,3vw,0px)]">
        <div className={`${CONTAINER} py-[clamp(36px,5vw,64px)]`}>
          <div className="font-mono type-label text-label normal-case tracking-[.08em] mb-[18px] flex gap-2.5 items-center">
            <span className={`w-2.5 h-2.5 rounded-full ${e.dot}`} />
            {data.visual.title}
          </div>
          <Visual visual={data.visual} dot={e.dot} />
        </div>
      </section>

      {/* 3 · White: what it actually involves */}
      <section id="involves" className={`bg-white ${ANCHOR}`}>
        <div className={`${CONTAINER} ${SECTION_PAD}`}>
          <h2 className="font-display type-h2 text-ink m-0 max-w-[20ch] text-balance">
            What {data.short} actually involves
          </h2>
          <div className="flex flex-wrap gap-x-12 gap-y-8 mt-7 items-start">
            <div className="flex-[1_1_320px] max-w-[62ch] grid gap-3.5">
              <p className="type-body text-ink font-medium m-0">
                {data.involvesLead}
              </p>
              {data.involvesBody.map((p, i) => (
                <p key={i} className="type-body text-body m-0">
                  {p}
                </p>
              ))}
            </div>
            {data.comparison && (
              <div className="flex-[1_1_100%] min-w-0 max-w-[900px]">
                <h3 className="font-display type-h3 text-ink m-0 mb-4">
                  {data.comparison.title}
                </h3>
                <div className="overflow-x-auto border border-line rounded-md">
                  <table className="w-full min-w-[560px] border-collapse type-meta">
                    <thead>
                      <tr className="border-b border-line bg-bone/50">
                        <th className="text-left p-3.5 font-mono type-label text-label uppercase" />
                        <th className="text-left p-3.5 font-mono type-label text-label uppercase">
                          {data.comparison.cols[0]}
                        </th>
                        <th className="text-left p-3.5 font-mono type-label text-label uppercase">
                          {data.comparison.cols[1]}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.comparison.rows.map(([k, a, b]) => (
                        <tr
                          key={k}
                          className="border-b border-line/60 last:border-b-0 align-top"
                        >
                          <th className="text-left p-3.5 text-ink font-semibold">
                            {k}
                          </th>
                          <td className="p-3.5 text-body">{a}</td>
                          <td className="p-3.5 text-ink">{b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {data.comparison.closing && (
                  <p className="type-body text-body mt-4 mb-0 max-w-[62ch]">
                    {data.comparison.closing}
                  </p>
                )}
              </div>
            )}
            {data.toggle && (
              <div className="cc-tabs flex-[1_1_300px] max-w-[420px] border border-line rounded-md overflow-hidden relative">
                <input
                  type="radio"
                  name="svc-toggle"
                  id="svc-toggle-a"
                  defaultChecked
                />
                <input type="radio" name="svc-toggle" id="svc-toggle-b" />
                <div className="grid grid-cols-2 bg-bone/60 border-b border-line">
                  <label
                    htmlFor="svc-toggle-a"
                    data-tab-label="a"
                    className="py-3.5 text-center type-meta font-semibold"
                  >
                    {data.toggle.a.label}
                  </label>
                  <label
                    htmlFor="svc-toggle-b"
                    data-tab-label="b"
                    className="py-3.5 text-center type-meta font-semibold"
                  >
                    {data.toggle.b.label}
                  </label>
                </div>
                {(["a", "b"] as const).map((key) => (
                  <div
                    key={key}
                    data-tab-panel={key}
                    className="px-[22px] py-5 gap-2.5"
                  >
                    {data.toggle![key].items.map((t) => (
                      <div key={t} className="flex gap-3 type-meta text-body">
                        <span
                          className={`flex-none w-2 h-2 rounded-full ${e.dot} mt-2`}
                        />
                        {t}
                      </div>
                    ))}
                  </div>
                ))}
                <div className="px-[22px] pb-4 font-mono type-label text-label normal-case tracking-normal">
                  §32 exception · two genuine operating states
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4 · Engine field tint: what you get + CTA 1 */}
      <section id="get" className={`${e.fieldClass} ${ANCHOR}`}>
        <div className={`${CONTAINER} ${SECTION_PAD}`}>
          <h2 className="font-display type-h2 text-ink m-0">What you get</h2>
          <div className="flex flex-wrap gap-x-12 gap-y-8 mt-7 items-start">
            <div className="flex-[1_1_280px] grid gap-3 max-w-[52ch]">
              {data.deliverables.map((d) => (
                <div
                  key={d}
                  className="flex gap-3.5 items-start py-3.5 border-b border-ink/15"
                >
                  <span className="flex-none w-3 h-3 rounded-[2px] bg-ink mt-1.5" />
                  <span className="text-ink font-medium type-body">{d}</span>
                </div>
              ))}
            </div>
            <div className="flex-[1_1_360px] min-w-0">
              <Artefact artefact={data.artefact} />
              {data.artefactNote && (
                <p className="type-meta text-body mt-3.5 mb-0 max-w-[56ch]">
                  {data.artefactNote}
                </p>
              )}
            </div>
          </div>
          <PetrolCta note="CTA moment 1 of 3 · scope is now known" />
        </div>
      </section>

      {/* 5 · White + Ink panel: who this is for */}
      <section id="for" className={`bg-white ${ANCHOR}`}>
        <div className={`${CONTAINER} ${SECTION_PAD}`}>
          <h2 className="font-display type-h2 text-ink m-0 max-w-[18ch] text-balance">
            Who this is for — and who it isn&apos;t
          </h2>
          {data.whenToHire && (
            <div className="mt-6 max-w-[62ch] grid gap-3.5">
              <h3 className="font-display type-h3 text-ink m-0">
                {data.whenToHire.title}
              </h3>
              {data.whenToHire.body.map((p, i) => (
                <p key={i} className="type-body text-body m-0">
                  {p}
                </p>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-6 mt-7 items-stretch">
            <div className="flex-[1_1_300px] grid gap-1 content-start pt-2">
              <div className="font-mono type-label text-label uppercase mb-2">
                A fit when
              </div>
              {data.fitFor.map((f) => (
                <div
                  key={f}
                  className="flex gap-3.5 py-3 border-b border-line/60 text-ink type-body"
                >
                  <span
                    className={`flex-none w-2.5 h-2.5 rounded-full ${e.dot} mt-2`}
                  />
                  {f}
                </div>
              ))}
            </div>
            <div className="flex-[1_1_300px] bg-ink text-white rounded-lg p-[clamp(24px,3vw,36px)] grid gap-1 content-start">
              <div className="font-mono type-label text-on-ink-mute uppercase mb-2">
                Not for you if
              </div>
              {data.notFor.map((f) => (
                <div
                  key={f}
                  className="flex gap-3.5 py-3 border-b border-line-on-ink font-medium type-body"
                >
                  <span className="flex-none w-2.5 h-2.5 rounded-[2px] bg-white mt-2" />
                  {f}
                </div>
              ))}
            </div>
          </div>
          {data.fitNote && (
            <p className="type-body text-body mt-6 mb-0 max-w-[62ch]">
              {data.fitNote}
            </p>
          )}
        </div>
      </section>

      {/* Sections 6–9 share a wrapper so the mobile sticky CTA bar
          appears mid-page and leaves before the FAQ — pure CSS. */}
      <div className="relative">
        {/* 6 · Bone: first 90 days + family insert + CTA 2 */}
        <section id="days" className={`bg-bone ${ANCHOR}`}>
          <div className={`${CONTAINER} ${SECTION_PAD}`}>
            <h2 className="font-display type-h2 text-ink m-0 max-w-[18ch] text-balance">
              How we work: the first 90 days
            </h2>
            <div className="flex flex-wrap gap-3 mt-7">
              {data.phases.map((ph) => (
                <div
                  key={ph.days}
                  className="flex-[1_1_240px] bg-white border border-line rounded-md p-[22px] grid gap-2.5 content-start"
                >
                  <span className="font-mono type-label text-label tracking-[.08em]">
                    {ph.days}
                  </span>
                  <b className="text-ink font-display type-h3">{ph.title}</b>
                  <p className="type-meta text-body m-0">{ph.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <div className="font-mono type-label text-label tracking-[.08em] mb-3.5">
                {data.hwwTitle}
              </div>
              <HwwInsert hww={data.hww} />
            </div>
            <PetrolCta note="CTA moment 2 of 3 · process is now trusted" />
          </div>
        </section>

        {/* 7 · Petrol: what stays yours */}
        <section
          id="yours"
          className={`bg-field text-white ${ANCHOR}`}
        >
          <div className={`${CONTAINER} py-[clamp(48px,6vw,88px)]`}>
            <h2 className="font-display type-h2 text-white m-0">
              What stays yours
            </h2>
            {data.yoursIntro && (
              <p className="type-lead text-on-field-body mt-4 mb-0 max-w-[62ch]">
                {data.yoursIntro}
              </p>
            )}
            <div className="flex flex-wrap gap-x-12 gap-y-8 mt-8">
              <div className="flex-[1_1_300px] grid content-start">
                <div className="font-mono type-label text-on-field-mute uppercase mb-2.5">
                  Yours, in your name
                </div>
                {data.yours.map((y) => (
                  <div
                    key={y}
                    className="flex gap-3.5 items-center py-3.5 border-b border-line-on-field type-lead font-semibold"
                  >
                    <span className="flex-none w-3.5 h-3.5 rounded-full bg-operate" />
                    {y}
                  </div>
                ))}
              </div>
              <div className="flex-[1_1_300px] grid content-start">
                <div className="font-mono type-label text-on-field-mute uppercase mb-2.5">
                  Hyprr&apos;s operational work
                </div>
                {data.hyprrWork.map((w) => (
                  <div
                    key={w}
                    className="flex gap-3.5 items-start py-3 border-b border-line-on-field text-on-field-body type-body"
                  >
                    <span className="flex-none w-2.5 h-2.5 rounded-[2px] bg-white mt-2" />
                    {w}
                  </div>
                ))}
              </div>
            </div>
            {data.yoursOutro && (
              <p className="type-body text-on-field-body mt-8 mb-0 max-w-[62ch] border-t border-line-on-field pt-6">
                {data.yoursOutro}
              </p>
            )}
          </div>
        </section>

        {/* 8 · White: what's fully managed */}
        <section id="managed" className={`bg-white ${ANCHOR}`}>
          <div className={`${CONTAINER} ${SECTION_PAD}`}>
            <h2 className="font-display type-h2 text-ink m-0">
              What&apos;s fully managed
            </h2>
            {data.managedLead && (
              <p className="type-body text-body mt-4 mb-0 max-w-[62ch]">
                {data.managedLead}
              </p>
            )}
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-7">
              {data.managed.map(([k, v]) => (
                <div
                  key={k}
                  className="flex-[1_1_260px] flex justify-between gap-3 py-4 border-b border-line/60"
                >
                  <b className="text-ink type-body">{k}</b>
                  <span className="font-mono type-label text-label normal-case tracking-[.04em] text-right self-center">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9 · Petrol: evidence, not claims — same ground as the
            homepage's proof section (2 Sep consistency ruling) */}
        <section className="bg-field text-white">
          <div className={`${CONTAINER} ${SECTION_PAD}`}>
            <h3 className="font-display type-h3 text-white m-0">
              Evidence, not claims
            </h3>
            <p className="type-body text-on-field-body mt-3 mb-0 max-w-[60ch]">
              No figures at soft launch. The evidence on this page is the
              paperwork the engagement runs on, readable before you speak to
              anyone.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                "Sample agreement",
                "Reporting example",
                "Operating model",
              ].map((k) => (
                <div
                  key={k}
                  className="flex-[1_1_220px] bg-field-raised rounded-md px-5 py-[18px] flex justify-between gap-3 items-center"
                >
                  <b className="text-white type-body">{k}</b>
                  {isLive("/documents") ? (
                    <a
                      href="/documents"
                      className="font-mono type-label text-on-field-mute normal-case tracking-normal hover:text-white"
                    >
                      Read →
                    </a>
                  ) : (
                    <span className="font-mono type-label text-on-field-mute normal-case tracking-normal">
                      publishing soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile sticky CTA bar — sticky bottom, checkbox dismiss */}
        <div className="cta-bar-dismiss sticky bottom-0 z-30 min-[900px]:hidden">
          <input
            type="checkbox"
            id="cta-bar-x"
            className="absolute opacity-0 pointer-events-none"
          />
          <div className="px-4 pt-2.5 pb-3.5 bg-gradient-to-t from-white via-white/95 to-white/80 flex gap-2.5 items-center">
            <a
              href="/contact"
              className="flex-1 bg-field text-white hover:text-white type-body font-semibold py-3.5 rounded-md text-center"
            >
              Let&apos;s talk
            </a>
            <label
              htmlFor="cta-bar-x"
              aria-label="Dismiss"
              className="w-11 h-11 rounded-sm border border-line bg-white flex items-center justify-center text-ink cursor-pointer"
            >
              ×
            </label>
          </div>
        </div>
      </div>

      {/* 10 · White: how we're paid */}
      <section id="fees" className={`bg-white ${ANCHOR}`}>
        <div className={`${CONTAINER} ${SECTION_PAD}`}>
          <h2 className="font-display type-h2 text-ink m-0 max-w-[16ch] text-balance">
            How we&apos;re paid for this
          </h2>
          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-6 items-start">
            <div className="flex-[1_1_320px] min-w-0 max-w-[68ch] grid gap-3.5">
              {data.fees.map((p, i) => (
                <p key={i} className="type-body text-body m-0">
                  {p}
                </p>
              ))}
              {data.feesTable && (
                <>
                  <div className="overflow-x-auto border border-line rounded-md">
                    <table className="w-full min-w-[480px] border-collapse type-meta">
                      <thead>
                        <tr className="border-b border-line bg-bone/50">
                          {data.feesTable.header.map((h) => (
                            <th
                              key={h}
                              className="text-left p-3.5 font-mono type-label text-label uppercase"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.feesTable.rows.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-line/60 last:border-b-0"
                          >
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className={`p-3.5 ${
                                  j === 0
                                    ? "text-ink font-semibold"
                                    : j >= 2
                                      ? "text-ink font-semibold font-mono"
                                      : "text-body"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {data.feesTable.note && (
                    <p className="type-body text-body m-0">
                      {data.feesTable.note}
                    </p>
                  )}
                </>
              )}
            </div>
            <a
              href="/how-we-work#fees"
              className="flex-none text-ink hover:text-ink type-body font-medium"
            >
              Full fee mechanic →
            </a>
          </div>
        </div>
      </section>

      {/* 11 · White: questions */}
      <section id="faq" className={`bg-white ${ANCHOR}`}>
        <div className={`${CONTAINER} pb-[clamp(40px,5vw,72px)]`}>
          <h2 className="font-display type-h2 text-ink m-0 max-w-[18ch] text-balance">
            Questions about {data.faqShort ?? data.short}
          </h2>
          <div className="mt-6 border-t border-line max-w-[760px]">
            {data.faqs.map((f) => (
              <details key={f.q} className="border-b border-line group">
                <summary className="cursor-pointer py-[18px] flex justify-between gap-4 items-center">
                  <h3 className="font-display type-body font-semibold text-ink m-0">
                    {f.q}
                  </h3>
                  <span className="flex-none w-6 h-6 rounded-sm border border-line inline-flex items-center justify-center text-label group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="type-body text-body m-0 pb-[18px] max-w-[62ch]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Anchored subsection (e.g. /shopify-dtc#growth — the absorbed
          DTC growth content; chips and footer point here) */}
      {data.extraSection && (
        <section
          id={data.extraSection.id}
          className={`bg-white border-t border-line ${ANCHOR}`}
        >
          <div className={`${CONTAINER} ${SECTION_PAD}`}>
            <h3 className="font-display type-h3 text-ink m-0">
              {data.extraSection.title}
            </h3>
            <div className="mt-4 max-w-[62ch] grid gap-3.5">
              {data.extraSection.body.map((p, i) => (
                <p key={i} className="type-body text-body m-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12 · Bone: related */}
      <section className="bg-bone">
        <div className={`${CONTAINER} py-[clamp(40px,5vw,64px)]`}>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex-[1_1_320px] grid gap-2 content-start">
              <div className="font-mono type-label text-label uppercase mb-1.5">
                Related services
              </div>
              {[
                ...data.related,
                { name: `${e.hub} hub`, slug: e.hubUrl, engine: data.engine },
              ].map((r) => (
                <div
                  key={r.slug}
                  className="bg-white border border-line rounded-md px-5 py-4 flex justify-between gap-3 items-center"
                >
                  <span className="flex gap-3 items-center text-ink font-semibold type-body">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${ENGINE_META[r.engine].dot}`}
                    />
                    {isLive(r.slug) ? (
                      <a href={r.slug} className="text-ink hover:text-ink">
                        {r.name}
                      </a>
                    ) : (
                      r.name
                    )}
                  </span>
                  {isLive(r.slug) && <span className="text-label">→</span>}
                </div>
              ))}
            </div>
            <div className="flex-[1_1_280px] grid gap-2 content-start">
              <div className="font-mono type-label text-label uppercase mb-1.5">
                Related insight
              </div>
              <div className="bg-white border border-line rounded-md p-[22px] grid gap-2">
                <span className="font-mono type-label text-label uppercase">
                  Insight
                </span>
                <b className="text-ink type-lead font-bold leading-snug tracking-[-.01em]">
                  {data.insight}
                </b>
                {isLive("/insights") ? (
                  <a
                    href="/insights"
                    className="text-ink hover:text-ink type-meta font-medium"
                  >
                    Read →
                  </a>
                ) : (
                  <span className="font-mono type-label text-label normal-case tracking-normal">
                    publishing soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13 · Petrol: close */}
      <section className="bg-field text-white">
        <div className={`${CONTAINER} py-[clamp(48px,6vw,88px)]`}>
          <p className="font-display type-h2 text-white m-0 max-w-[16ch] text-balance">
            Tell us what you&apos;re trying to build.
          </p>
          <p className="type-body text-on-field-body mt-4 mb-0 max-w-[52ch]">
            We read the context, come prepared, and tell you whether Hyprr is
            a fit.
          </p>
          <div className="flex gap-[22px] items-center mt-7 flex-wrap">
            <a
              href="/contact"
              className="bg-build text-ink hover:text-ink type-body font-bold px-[22px] py-3.5 rounded-md min-h-12 inline-flex items-center"
            >
              Let&apos;s talk
            </a>
            <a
              href="/how-we-work"
              className="text-white hover:text-white type-body font-medium"
            >
              See how we work →
            </a>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

export function serviceMetadata(data: ServicePageData): Metadata {
  const og = ogImageMeta(data.slug.slice(1));
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: data.slug },
    openGraph: {
      title: data.h1,
      description: data.metaDescription,
      url: data.slug,
      type: "website",
      siteName: "Hyprr Brands",
      ...og.openGraph,
    },
    twitter: og.twitter,
  };
}

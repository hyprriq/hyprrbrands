"use client";

import { useState } from "react";

/**
 * Contact form — §18 + prompt 8 B4. Required: name, email, and "What
 * would you like to discuss?". Optional: company and the two context
 * fields. The five-option radio set has no default and is not
 * required — forcing a category before someone knows which one they
 * are is the wrong friction. No backend at soft launch: Send composes
 * an email to hello@ with the structured context in the body.
 */
const KINDS = [
  "Wholesale",
  "Private label",
  "Shopify / DTC",
  "Growth",
  "Operations",
];

const LONGS: [string, string, string, boolean][] = [
  [
    "Current situation",
    "Where the business is today: selling, pre-launch, stuck.",
    "Two or three sentences is plenty.",
    false,
  ],
  [
    "What have you already tried?",
    "Agencies, tools, courses, doing it yourself.",
    "This saves the first twenty minutes.",
    false,
  ],
  [
    "What would you like to discuss?",
    "The decision you are trying to make.",
    "",
    true,
  ],
];

export default function ContactForm() {
  const [kind, setKind] = useState<number | null>(null);
  const [basics, setBasics] = useState(["", "", ""]);
  const [longs, setLongs] = useState(["", "", ""]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!basics[0].trim()) e.name = "Add your name so we know who to reply to.";
    if (!basics[1].trim()) {
      e.email = "Add the email address the reply should go to.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(basics[1].trim())) {
      e.email = "That email address doesn't look complete — check the domain.";
    }
    if (!longs[2].trim())
      e.discuss =
        "Tell us what you'd like to discuss — one sentence is enough.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const send = () => {
    if (!validate()) return;
    const body = [
      `Name: ${basics[0]}`,
      `Company: ${basics[2] || "—"}`,
      `Looking to build: ${kind === null ? "—" : KINDS[kind]}`,
      "",
      `Current situation:\n${longs[0] || "—"}`,
      "",
      `Already tried:\n${longs[1] || "—"}`,
      "",
      `Would like to discuss:\n${longs[2]}`,
    ].join("\n");
    const subject = `Context from ${basics[0]}${kind === null ? "" : ` · ${KINDS[kind]}`}`;
    window.location.href = `mailto:hello@hyprrbrands.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const errorText = (key: string) =>
    errors[key] ? (
      <span role="alert" className="type-meta text-crit">
        {errors[key]}
      </span>
    ) : null;

  return (
    <div className="flex-[1_1_380px] grid gap-[22px] max-w-[620px]">
      <div className="flex flex-wrap gap-4">
        {(
          [
            ["Name", "text", "name", "Your name", "name", true],
            ["Email", "email", "email", "you@company.com", "email", true],
            [
              "Company",
              "text",
              "organization",
              "Company or brand",
              "company",
              false,
            ],
          ] as const
        ).map(([label, type, auto, ph, key, req], i) => (
          <label key={label} className="flex-[1_1_180px] grid gap-1.5">
            <span className="font-mono type-label text-label uppercase">
              {label}
              {!req && (
                <span className="normal-case tracking-normal font-normal">
                  {" "}
                  · optional
                </span>
              )}
            </span>
            <input
              type={type}
              autoComplete={auto}
              placeholder={ph}
              required={req}
              aria-invalid={!!errors[key]}
              value={basics[i]}
              onChange={(e) =>
                setBasics((b) => b.map((v, j) => (j === i ? e.target.value : v)))
              }
              className={`h-12 border rounded-sm px-3.5 text-ink bg-white w-full box-border type-body ${
                errors[key] ? "border-crit" : "border-line"
              }`}
            />
            {errorText(key)}
          </label>
        ))}
      </div>

      <fieldset className="grid gap-2.5 border-0 p-0 m-0">
        <legend className="font-mono type-label text-label uppercase mb-2.5 p-0">
          What are you looking to build?{" "}
          <span className="normal-case tracking-normal font-normal">
            · optional
          </span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {KINDS.map((label, i) => {
            const on = kind === i;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={on}
                onClick={() => setKind(on ? null : i)}
                className={`flex gap-2.5 items-center min-h-11 px-4 rounded-sm border cursor-pointer text-ink font-medium type-body ${
                  on ? "border-ink bg-bone/50" : "border-line bg-white"
                }`}
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full border-2 border-ink box-border ${
                    on ? "bg-ink" : "bg-white"
                  }`}
                />
                {label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {LONGS.map(([label, ph, help, req], i) => (
        <label key={label} className="grid gap-1.5">
          <span className="font-mono type-label text-label uppercase">
            {label}
            {!req && (
              <span className="normal-case tracking-normal font-normal">
                {" "}
                · optional
              </span>
            )}
          </span>
          <textarea
            rows={3}
            placeholder={ph}
            required={req}
            aria-invalid={i === 2 && !!errors.discuss}
            value={longs[i]}
            onChange={(e) =>
              setLongs((l) => l.map((v, j) => (j === i ? e.target.value : v)))
            }
            className={`border rounded-sm px-3.5 py-3 text-ink bg-white resize-y w-full box-border type-body ${
              i === 2 && errors.discuss ? "border-crit" : "border-line"
            }`}
          />
          {help && <span className="type-meta text-muted">{help}</span>}
          {i === 2 && errorText("discuss")}
        </label>
      ))}

      <p className="type-meta text-muted m-0">
        What you send here is used to reply to you, and for nothing else —{" "}
        <a href="/privacy" className="hover:text-ink">
          the privacy policy
        </a>{" "}
        says so in writing.
      </p>

      <div className="flex gap-[18px] items-center flex-wrap">
        <button
          type="button"
          onClick={send}
          className="bg-field text-white font-semibold px-6 py-[15px] rounded-sm cursor-pointer border-0 type-body min-h-12"
        >
          Send
        </button>
        <span className="type-meta text-muted">
          No newsletter. No sales sequence. One reply.
        </span>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

/**
 * Contact form — §18. No backend at soft launch: Send composes an
 * email to hello@ with the structured context in the body, so the
 * "we read everything before we reply" promise is mechanically true.
 * Labels visible, helper text persistent, 44px+ targets.
 */
const KINDS = [
  "Wholesale",
  "Private label",
  "Shopify / DTC",
  "Growth",
  "Operations",
];

const LONGS: [string, string, string][] = [
  [
    "Current situation",
    "Where the business is today: selling, pre-launch, stuck.",
    "Two or three sentences is plenty.",
  ],
  [
    "What have you already tried?",
    "Agencies, tools, courses, doing it yourself.",
    "This saves the first twenty minutes.",
  ],
  [
    "What would you like to discuss?",
    "The decision you are trying to make.",
    "",
  ],
];

export default function ContactForm() {
  const [kind, setKind] = useState(0);
  const [basics, setBasics] = useState(["", "", ""]);
  const [longs, setLongs] = useState(["", "", ""]);

  const send = () => {
    const body = [
      `Name: ${basics[0]}`,
      `Company: ${basics[2]}`,
      `Looking to build: ${KINDS[kind]}`,
      "",
      `Current situation:\n${longs[0]}`,
      "",
      `Already tried:\n${longs[1]}`,
      "",
      `Would like to discuss:\n${longs[2]}`,
    ].join("\n");
    const subject = `Context from ${basics[0] || "the website"} · ${KINDS[kind]}`;
    window.location.href = `mailto:hello@hyprrbrands.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex-[1_1_380px] grid gap-[22px] max-w-[620px]">
      <div className="flex flex-wrap gap-4">
        {(
          [
            ["Name", "text", "name", "Your name"],
            ["Email", "email", "email", "you@company.com"],
            ["Company", "text", "organization", "Company or brand"],
          ] as const
        ).map(([label, type, auto, ph], i) => (
          <label key={label} className="flex-[1_1_180px] grid gap-1.5">
            <span className="font-mono type-label text-label uppercase">
              {label}
            </span>
            <input
              type={type}
              autoComplete={auto}
              placeholder={ph}
              value={basics[i]}
              onChange={(e) =>
                setBasics((b) => b.map((v, j) => (j === i ? e.target.value : v)))
              }
              className="h-12 border border-line rounded-sm px-3.5 text-ink bg-white w-full box-border type-body"
            />
          </label>
        ))}
      </div>

      <fieldset className="grid gap-2.5 border-0 p-0 m-0">
        <legend className="font-mono type-label text-label uppercase mb-2.5 p-0">
          What are you looking to build?
        </legend>
        <div className="flex flex-wrap gap-2">
          {KINDS.map((label, i) => {
            const on = kind === i;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={on}
                onClick={() => setKind(i)}
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

      {LONGS.map(([label, ph, help], i) => (
        <label key={label} className="grid gap-1.5">
          <span className="font-mono type-label text-label uppercase">
            {label}
          </span>
          <textarea
            rows={3}
            placeholder={ph}
            value={longs[i]}
            onChange={(e) =>
              setLongs((l) => l.map((v, j) => (j === i ? e.target.value : v)))
            }
            className="border border-line rounded-sm px-3.5 py-3 text-ink bg-white resize-y w-full box-border type-body"
          />
          {help && <span className="type-meta text-muted">{help}</span>}
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

"use client";

import { useState } from "react";

/**
 * Contact form — six fields, a real backend (/api/contact → Resend),
 * a success state, an auto-reply. When the backend returns 503 (no
 * RESEND_API_KEY yet) the send falls back to composing an email so
 * nothing breaks before the owner adds the key.
 */
const MARKETPLACES = [
  "Amazon US",
  "Amazon UK",
  "Amazon Europe",
  "Amazon Gulf",
  "Walmart US",
  "Not sure yet",
];

const SITUATIONS = [
  "Launching a brand",
  "Already selling — want it run properly",
  "Starting wholesale",
  "Listings underperforming",
  "Existing brand adding a marketplace",
  "Something else",
];

type Status = "idle" | "sending" | "sent" | "fallback";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    marketplace: "",
    situation: "",
    tried: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Add your name so we know who to reply to.";
    if (!form.email.trim())
      e.email = "Add the email address the reply should go to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "That email address doesn't look complete — check the domain.";
    if (!form.message.trim())
      e.message = "Tell us what you'd like to discuss — one sentence is enough.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const mailtoFallback = () => {
    const body = [
      `Name: ${form.name}`,
      `Marketplace: ${form.marketplace || "—"}`,
      `Situation: ${form.situation || "—"}`,
      "",
      `Already tried:\n${form.tried || "—"}`,
      "",
      `Message:\n${form.message}`,
    ].join("\n");
    window.location.href = `mailto:hello@hyprrbrands.com?subject=${encodeURIComponent(
      `Context from ${form.name}`
    )}&body=${encodeURIComponent(body)}`;
    setStatus("fallback");
  };

  const send = async () => {
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      if (res.status === 422) {
        const data = await res.json();
        setErrors(data.errors ?? {});
        setStatus("idle");
        return;
      }
      // 503 / 502 — no key or delivery failure: compose an email instead.
      mailtoFallback();
    } catch {
      mailtoFallback();
    }
  };

  if (status === "sent") {
    return (
      <div className="form-ok" role="status">
        <b>Sent. A person reads it next.</b>
        <p style={{ marginBottom: 0 }}>
          You will hear back within one working day — usually sooner. A
          confirmation is on its way to {form.email.trim()}.
        </p>
      </div>
    );
  }

  return (
    <form
      className="cform"
      onSubmit={(e) => {
        e.preventDefault();
        void send();
      }}
      noValidate
    >
      <div className="row2">
        <label>
          <span className="flabel">Name</span>
          <input
            type="text"
            autoComplete="name"
            value={form.name}
            aria-invalid={!!errors.name}
            onChange={(e) => set("name")(e.target.value)}
            required
          />
          {errors.name && (
            <span className="err" role="alert">
              {errors.name}
            </span>
          )}
        </label>
        <label>
          <span className="flabel">Email</span>
          <input
            type="email"
            autoComplete="email"
            value={form.email}
            aria-invalid={!!errors.email}
            onChange={(e) => set("email")(e.target.value)}
            required
          />
          {errors.email && (
            <span className="err" role="alert">
              {errors.email}
            </span>
          )}
        </label>
      </div>
      <div className="row2">
        <label>
          <span className="flabel">Which marketplace · optional</span>
          <select
            value={form.marketplace}
            onChange={(e) => set("marketplace")(e.target.value)}
          >
            <option value="">Choose one</option>
            {MARKETPLACES.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="flabel">Closest situation · optional</span>
          <select
            value={form.situation}
            onChange={(e) => set("situation")(e.target.value)}
          >
            <option value="">Choose one</option>
            {SITUATIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span className="flabel">What have you already tried · optional</span>
        <textarea
          rows={3}
          value={form.tried}
          onChange={(e) => set("tried")(e.target.value)}
          placeholder="Agencies, tools, courses, doing it yourself. This saves the first twenty minutes."
        />
      </label>
      <label>
        <span className="flabel">Message</span>
        <textarea
          rows={4}
          value={form.message}
          aria-invalid={!!errors.message}
          onChange={(e) => set("message")(e.target.value)}
          placeholder="The decision you are trying to make."
          required
        />
        {errors.message && (
          <span className="err" role="alert">
            {errors.message}
          </span>
        )}
      </label>
      <p style={{ fontSize: 13.5, color: "var(--muted)", margin: 0 }}>
        What you send here is used to reply to you, and for nothing else —{" "}
        <a href="/privacy">the privacy policy</a> says so in writing.
      </p>
      <div className="cta-row">
        <button type="submit" className="btn dark" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        <span style={{ fontSize: 13.5, color: "var(--muted)" }}>
          No newsletter. No sales sequence. One reply.
        </span>
      </div>
      {status === "fallback" && (
        <p style={{ fontSize: 13.5, color: "var(--muted)", margin: 0 }} role="status">
          Direct sending is not switched on yet, so your email app opened with
          the message ready to go — press send there and it reaches us the
          same way.
        </p>
      )}
    </form>
  );
}

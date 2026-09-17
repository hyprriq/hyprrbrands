"use client";

import { useState } from "react";
import { email as CONTACT_EMAIL } from "@/lib/company";

/**
 * Contact form — a real backend (/api/contact → Resend), a success
 * state, an auto-reply. Fields (PROMPT_24 §4.8): name, email, brand or
 * company (optional), store or ASIN link (optional), marketplaces
 * (multi-select, optional), situation (optional), what you've tried
 * (optional), message. /privacy lists the same set. When the backend
 * returns 503 (no RESEND_API_KEY) the send falls back to composing an
 * email so nothing breaks before the owner adds the key.
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
    company: "",
    link: "",
    marketplaces: [] as string[],
    situation: "",
    tried: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));
  const toggleMarketplace = (m: string) =>
    setForm((f) => ({
      ...f,
      marketplaces: f.marketplaces.includes(m)
        ? f.marketplaces.filter((x) => x !== m)
        : [...f.marketplaces, m],
    }));

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
      `Brand or company: ${form.company || "—"}`,
      `Store or ASIN link: ${form.link || "—"}`,
      `Marketplaces: ${form.marketplaces.join(", ") || "—"}`,
      `Situation: ${form.situation || "—"}`,
      "",
      `Already tried:\n${form.tried || "—"}`,
      "",
      `Message:\n${form.message}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
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
          <span className="flabel">Brand or company · optional</span>
          <input
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => set("company")(e.target.value)}
          />
        </label>
        <label>
          <span className="flabel">Store or ASIN link · optional</span>
          <input
            type="text"
            inputMode="url"
            value={form.link}
            onChange={(e) => set("link")(e.target.value)}
            placeholder="An ASIN, a storefront or a product URL"
          />
        </label>
      </div>
      <fieldset className="fchecks">
        <legend className="flabel">Which marketplaces · optional</legend>
        <div className="fcheck-grid">
          {MARKETPLACES.map((m) => (
            <label key={m} className="fcheck">
              <input
                type="checkbox"
                name="marketplaces"
                value={m}
                checked={form.marketplaces.includes(m)}
                onChange={() => toggleMarketplace(m)}
              />
              <span>{m}</span>
            </label>
          ))}
        </div>
      </fieldset>
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

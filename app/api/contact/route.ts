import { NextResponse } from "next/server";

/**
 * Contact form backend — DEV_BRIEF step 2. Server-side validation,
 * Resend delivery, auto-reply to the sender. Reads RESEND_API_KEY
 * from env; returns 503 when unset so the client can fall back
 * cleanly (mailto compose) and nothing breaks before the owner adds
 * the key.
 */
/* DEV_NOTES_NEXT §1: notifications land at hyprr@; Resend is verified
   on send.hyprrbrands.com, so the from address lives there. */
const TO = "hyprr@hyprrbrands.com";
const FROM = "Hyprr Brands <hello@send.hyprrbrands.com>";

interface Payload {
  name?: string;
  email?: string;
  marketplace?: string;
  situation?: string;
  tried?: string;
  message?: string;
}

const MAX = 4000;
const clean = (v: unknown, max = MAX) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(data.name, 200);
  const email = clean(data.email, 320);
  const marketplace = clean(data.marketplace, 100);
  const situation = clean(data.situation, 200);
  const tried = clean(data.tried);
  const message = clean(data.message);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Add your name so we know who to reply to.";
  if (!email) errors.email = "Add the email address the reply should go to.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "That email address doesn't look complete.";
  if (!message) errors.message = "Tell us what you'd like to discuss.";
  if (Object.keys(errors).length)
    return NextResponse.json({ errors }, { status: 422 });

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // No key configured — the client falls back to composing an email.
    return NextResponse.json(
      { error: "Mail delivery is not configured.", fallback: true },
      { status: 503 }
    );
  }

  const send = (payload: object) =>
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Marketplace: ${marketplace || "—"}`,
    `Situation: ${situation || "—"}`,
    "",
    `Already tried:\n${tried || "—"}`,
    "",
    `Message:\n${message}`,
  ].join("\n");

  const inbound = await send({
    from: FROM,
    to: [TO],
    reply_to: email,
    subject: `Contact form — ${name}${situation ? ` · ${situation}` : ""}`,
    text: lines,
  });

  if (!inbound.ok) {
    return NextResponse.json(
      { error: "Sending failed. Email us directly instead.", fallback: true },
      { status: 502 }
    );
  }

  // Auto-reply — best effort; a failure here must not fail the submit.
  // reply_to points at the real inbox so a lead replying lands there.
  await send({
    from: FROM,
    to: [email],
    reply_to: TO,
    subject: "Received — Hyprr Brands",
    text: [
      `Hi ${name},`,
      "",
      "Your message arrived. A person reads every one, and you will hear",
      "back within one working day — usually sooner.",
      "",
      "If it is time-sensitive, reply to this email and say so.",
      "",
      "Hyprr Brands",
      "Amazon + Walmart commerce",
    ].join("\n"),
  }).catch(() => {});

  return NextResponse.json({ ok: true });
}

import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import Locations from "@/components/Locations";
import { breadcrumbLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";
import { email } from "@/lib/company";

/**
 * Contact — the only page whose job is a single action. Booking
 * first, form second (wireframe 01–03), then "Where we work"
 * (PROMPT_24 §12.1). The booking block renders only when
 * NEXT_PUBLIC_BOOKING_URL is set. The email address is shown here
 * and in the footer; there is no phone number.
 */
const TITLE = "Contact Hyprr Brands | Book a 20-Minute Call";
const DESC =
  "Book a 20-minute call or send your ASIN or store link. A person replies within one working day. Email hello@hyprrbrands.com.";
const PATH = "/contact";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: PATH,
    siteName: "Hyprr Brands",
    type: "website",
    ...ogImageMeta("contact").openGraph,
  },
  ...{ twitter: ogImageMeta("contact").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL;

export default function Page() {
  return (
    <main id="main">
      <JsonLd
        nodes={[
          webPageLd({ path: PATH, title: TITLE, description: DESC }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: PATH },
          ]),
        ]}
      />

      <section className="start">
        <div className="wrap">
          <h1>Book a call</h1>
          <p style={{ maxWidth: "56ch" }}>
            Twenty minutes. Send what you have first —{" "}
            <a href="/proof">or read the work</a> — and we come with a view
            rather than a questionnaire. Or email{" "}
            <a href={`mailto:${email}`} style={{ fontWeight: 600 }}>
              {email}
            </a>
            .
          </p>

          {BOOKING ? (
            <div className="booking">
              <h2 style={{ fontSize: "clamp(20px,4vw,26px)" }}>
                Pick a time that suits you
              </h2>
              <p>Open the calendar to see live times.</p>
              <a className="btn dark" href={BOOKING}>
                Open the calendar →
              </a>
            </div>
          ) : null}

          <div id="form">
            <h2 style={{ fontSize: "clamp(20px,4vw,26px)", marginTop: 26 }}>
              Or send context first
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="buildband" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 style={{ fontSize: "clamp(22px,2.4vw,28px)" }}>What happens next</h2>
          <div className="timeline" style={{ marginTop: 18 }}>
            <div>
              <span className="when">WITHIN A MINUTE</span>
              <b>A confirmation</b>
              <span>An auto-reply confirms your message arrived.</span>
            </div>
            <div>
              <span className="when">WITHIN A WORKING DAY</span>
              <b>A person replies</b>
              <span>
                <a href="/about">The operator</a> reads every message — no
                sales team, no sequence.
              </span>
            </div>
            <div>
              <span className="when">ON THE CALL</span>
              <b>A view, not a pitch</b>
              <span>
                What we would do with your situation, including when the honest
                answer is not us. <a href="/how-we-work">How we work</a> covers
                the fees.
              </span>
            </div>
          </div>
        </div>
      </section>

      <Locations />
    </main>
  );
}

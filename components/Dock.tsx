/** Sticky mobile dock — hidden from 760px up (CSS). */
const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

export default function Dock() {
  return (
    <div className="dock">
      <a className="btn dark" href={BOOKING}>
        Book a call
      </a>
      <small>20 min, no deck</small>
    </div>
  );
}

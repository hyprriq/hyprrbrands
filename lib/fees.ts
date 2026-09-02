/**
 * Fee-copy switches — prompt 12. Currency figures are OUT by owner
 * decision (2 Sep); the mechanic stays. The split is the borderline
 * case, isolated here so the decision is reversible in one line:
 * flipping PUBLISH_SPLIT to false removes every "30%", the step-down
 * and FEE_RULES' split rule across the site in one pass.
 *
 * docs/content/fees-and-pricing.md remains the record of what the
 * figures were and why — it is a reference document, not a build spec.
 */
export const PUBLISH_SPLIT = true;

/** The share, as it may be named in copy. */
export const SPLIT = PUBLISH_SPLIT ? "30%" : "the agreed share";

/** "at 30%" / "at the agreed rate" — for mid-sentence use. */
export const AT_SPLIT = PUBLISH_SPLIT ? "at 30%" : "at the rate agreed in writing";

# Agreements, legal and compliance — deliberately after the site

**Owner ruling, 2 Sep 2026:** build the website first. Compliance and agreements are handled
afterwards, and the client meets them at agreement stage, not on a service page.

This file exists so that nothing in this list is lost, and so nothing in it re-enters the build
queue. **None of it blocks a page from shipping.** `docs/NEXT.md` is the build queue and contains
none of this.

---

## Why this split is the right one

A visitor on a service page is deciding whether Hyprr does what they need and whether it can be
trusted. They are not reading a disclosure document, and putting one in front of them at that
moment does not increase trust — it reads as a business that is nervous. The site's trust
argument is made by what it publishes (fees, the split, what is refused, whose name things are in)
and by being checkable, not by publishing paperwork early.

The paperwork matters at the point money and obligations move. That is agreement stage, and it is
a different piece of work with a different reader.

---

## The list

### Contract and agreement stage

- **The three ownership clauses** currently asserted on `/wholesale-ecommerce` and
  `/marketplace-management` — accounts in the client's name, credentials never held, every
  material purchase approved and recorded. These are already decided policy. **The site states
  them; the agreement has to match them when it is drafted.** The dependency runs that way round,
  not the other.
- The Direct Invoice Rule — client entity is buyer of record on every invoice, Hyprr acting as
  agent, never buying and reselling.
- Fee schedule as an annexe: bands, the 30% at every band, the $500 minimum credited against the
  share, the step-down, six-month minimum then 30 days' notice.
- The net-settlement definition of realised margin, including the tax term.
- Suspension handling by cause, the dispute route, and the invoice dispute window.
- Zero-markup pass-through wording for everything the client pays third parties directly.

### Regulatory, when there are clients to sign

- FTC Business Opportunity Rule position and the prescribed Appendix A disclosure form.
- State registrations and the cleared-states list.
- Earnings Claims Policy as a standing document.
- Case Study & Reference Consent, before any team-experience case study is published.

### Privacy and data, once the site is taking real enquiries

- `/privacy` to state lawful basis, named processors, retention and data-subject rights. The page
  exists and is not empty; this is an upgrade, not a gap.
- Prior opt-in consent for any non-essential cookie or analytics script, if one is ever added.
- Whether a UK/EU Art. 27 representative is required, and the DPA chain with the scheduler and
  email processors. **Counsel question.**

---

## The one thing that is not on this list, and why

**The VAT term in the realised-margin formula is not a compliance item.** It is arithmetic that is
wrong: on a UK account, taking 30% of a VAT-inclusive settlement overcharges the client by 5% of
gross sales. That is a bug in the published mechanic, it is one sentence to fix, and it stays in
the build queue where it belongs.

The same test separates everything else. **Absent is a design problem with a good answer. Wrong is
a bug.** Compliance paperwork is absent, deliberately, and that is fine. A false sentence on a
live page is wrong, and that is not.

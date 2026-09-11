# Dev notes — three items

**8 Sep 2026.** Verified against live production before writing this. Everything below is real.

---

## 1 · Contact form destination

Change from `hello@hyprrbrands.com` to **`hyprr@hyprrbrands.com`**.

- `app/api/contact/route.ts` — the recipient constant.
- The auto-reply `reply-to` header, so a lead replying lands in the same inbox.
- Any `mailto:` on `/contact` or in the footer.

`RESEND_API_KEY` is already set in Vercel via the Resend integration. Resend is verified on the
subdomain **`send.hyprrbrands.com`**, so the from address should be on that subdomain, e.g.
`Hyprr Brands <hello@send.hyprrbrands.com>`, with reply-to set to `hyprr@hyprrbrands.com`.

**Test after deploy:** submit the form, confirm the notification reaches `hyprr@hyprrbrands.com`,
confirm the auto-reply arrives, and confirm replying to it lands in the right inbox.

---

## 2 · Hero images — replace, same filenames

**Both heroes were built wrong and I have rebuilt them. This is my correction, not a build fault.**

The old versions were standalone posters — each had its own eyebrow, headline and Hyprr wordmark
baked into the image. Placed next to the page's H1, with the site logo in the header directly
above, the visitor saw the wordmark twice and a headline twice. That is why the hero read as small
and badly fitted rather than filling its section.

The replacements are **pure visual** — no text, no logo, no headline. Just the interface.

| File | Old | New |
|---|---|---|
| `home-hero-1600` | 1600×900, poster | **1600×1200**, visual only |
| `home-hero-mobile-1080` | 1080×1350 | **1080×1080**, visual only |
| `mgmt-hero-1600` | 1600×900, poster | **1600×1200**, visual only |
| `mgmt-hero-mobile-1080` | 1080×1350 | **1080×1080**, visual only |

**The dimensions changed, so the markup must change too.** Update `width` and `height` on both the
`<img>` and the mobile `<source>`, or the browser will reserve the wrong box and the layout will
shift as it loads.

Desktop is now 4:3 and mobile is square. Both suit a hero column better than 16:9, which was
leaving the image short against the copy beside it.

**Also:** let the hero image fill the full width of its column, edge to edge, with no inner
padding. It is a designed frame already — a margin around it wastes the space that made it look
small.

Alt text is unchanged.

---

## 3 · Stone mat photography — not doing this, and why

The request was to find a similar stone mat photo on Amazon or elsewhere online and use it.

**I have not done that and would advise against it.** Those listing photos belong to the sellers
and brands who shot them. Using one on a page about products Hyprr designs is someone else's
copyrighted image representing your own work, and it is the one claim on the site a competitor
would recognise instantly — the mats may look alike to us, but the seller who paid for that shoot
knows their own photograph.

**Three routes that work instead, in order:**

1. **Keep the existing render.** It is from the real development thread, it is yours, and it is
   already the strongest visual on the site.
2. **Canva Pro stock**, which is licensed for commercial use. Search `diatomite bath mat`,
   `stone mat kitchen`, `absorbent stone tray`. Pick one, send it to me, I will grade and composite
   it like the warehouse and category images.
3. **Buy one mat and photograph it.** Twenty dollars and an afternoon. A real object on a real
   counter beats every stock alternative and it is genuinely yours.

Nothing is blocked by this. The private label page has the render, the process strip, the family
shot and the category strip already.

---

## 4 · Homepage hero — final

**Supersedes every earlier homepage hero.** The management hero from item 2 stands unchanged.

| File | Size | Note |
|---|---|---|
| `home-hero-1600` | **1600×1000** | Static. Ship this |
| `home-hero-mobile-1080` | **1080×1350** | Static, under 760px |
| `home-hero-animated.webp` | 1200×750, 149KB | Optional, see below |

**The concept.** Eight operational areas in a grid — sourcing, listings, advertising, inventory,
orders, margin, Amazon, Walmart — wired into Hyprr at the centre on orthogonal circuit-style
routes. Data moves along the traces in **both directions**, because the operation is not one-way:
sourcing feeds listings, orders feed margin, margin feeds the next buying decision.

**Icons only. No product photography anywhere in it.** That was deliberate — the previous versions
used the stone mat, and the site was starting to look as though it had been built around a single
job.

**On the animated file.** Dots travel along the traces, alternating direction per path, looping.
It suits this composition better than it suited the last one because the movement *is* the message.
Still weigh it: 149KB against 42KB static, it counts toward Largest Contentful Paint, and a loop in
the hero competes with the headline. If you ship it, wrap it so `prefers-reduced-motion` falls back
to the static file.

**Dimensions changed** — update `width` and `height` on the `<img>` and the mobile `<source>`.

**Alt text:** *Eight areas of a marketplace operation — sourcing, listings, advertising, inventory,
orders, margin, Amazon and Walmart — connected to Hyprr at the centre.*

---

## 5 · The stone mat appears too often — reduce it

Currently on: the private label hero, the process strip, the family shot, the listing
before-and-after, and the homepage proof row. Five placements of one product reads as one job.

**Recommendation:** keep it on `/amazon-private-label` and `/proof`, where it proves design
capability and is the point. **Remove the process strip from the homepage proof row** — the
homepage already has three proof cards without it. One change, and the impression goes.

import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import Visual from "@/components/Visual";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/schema";
import { ogImageMeta } from "@/lib/og-pages";

/**
 * Amazon PPC management — the fifth service page. Original copy from
 * docs/v4/handoff/PPC_AND_CLOSING_BLOCK.md; expanded and reordered per
 * PROMPT_24 §4.3 (final, edited): what we manage, contribution
 * margin, the rhythm, stock cover, product stage, Walmart US, the
 * monthly report (visual 18), ownership, fee scope, fit, and the
 * questions to ask any agency. DSP/AMC is not mentioned (owner B5).
 */
const TITLE = "Amazon PPC Management Agency | Amazon & Walmart Ads | Hyprr";
const DESC =
  "Amazon PPC management judged on contribution margin, with bids tied to stock cover and Walmart Connect run by the same team. Fixed monthly fee.";
const PATH = "/amazon-ppc-management";

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
    ...ogImageMeta("amazon-ppc-management").openGraph,
  },
  ...{ twitter: ogImageMeta("amazon-ppc-management").twitter },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

const FAQS = [
  {
    q: "How much does an Amazon PPC agency charge?",
    a: "An agency paid a percentage of your ad spend earns more when you spend more. We are paid a monthly fee that does not move with the budget, so the advice you get is about margin rather than volume.",
  },
  {
    q: "What is a good ACoS?",
    a: "One below the product's own break-even ACoS, which is what the product leaves before advertising divided by its price. A 30% ACoS is profitable on a product with a 38% break-even and loses money on one with 20%. There is no good ACoS without the margin behind it.",
  },
  {
    q: "What is the difference between ACoS and TACoS?",
    a: "ACoS is ad spend divided by the sales the ads claimed. TACoS is ad spend divided by all sales, paid and organic. ACoS shows how efficient the ads are. TACoS shows whether advertising is building the business or replacing sales you would have had anyway.",
  },
  {
    // [verify] attribution windows — owner confirms in the Ads console (B7).
    q: "How long do PPC changes take to show results?",
    a: "Cost changes show within days. Sales and organic rank take longer, so a change is judged on several weeks of data. Amazon credits a sale to an ad for up to 7 days after the click on Sponsored Products and 14 days on Sponsored Brands and Sponsored Display, so the most recent days in any report are always incomplete.",
  },
  {
    q: "Who owns the ad account and the data?",
    a: "You do. We work as an invited user in your advertising accounts. If we stop working together, everything stays in your account, documented.",
  },
];

export default function Page() {
  return (
    <main id="main">
      <JsonLd
        nodes={[
          webPageLd({ path: PATH, title: TITLE, description: DESC }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "PPC", path: PATH },
          ]),
          serviceLd({
            name: "Amazon PPC management agency",
            serviceType: "Marketplace advertising management",
            path: PATH,
            description: DESC,
          }),
        ]}
      />

      {/* 1 · HERO — visual 08 (master in a card: petrol band) */}
      <section className="plhero">
        <div className="wrap plhero-grid">
          <div>
            <span className="eyebrow">PPC / Amazon + Walmart US</span>
            <h1>Amazon PPC management that answers to margin, not to spend.</h1>
            <p>
              We run Amazon and Walmart US advertising as part of the
              operation, not next to it. Bids move when stock moves. Budgets
              move when price moves. We are never paid a percentage of what
              you spend.
            </p>
            <div className="plchips">
              <span className="chip">MANAGED OPERATIONS</span>
              <span className="chip">MONTHLY</span>
            </div>
            <div className="cta-row">
              <a className="btn cit" href={BOOKING}>
                Book a call
              </a>
              <a className="btn line-l" href="/how-we-work">
                See how we charge →
              </a>
            </div>
          </div>
          <Visual
            variant="hero"
            onDark
            name="amazon-ppc-management/hero-profitability-engine"
            alt="Advertising funnel from impressions to contribution, a waterfall showing where a $20 sale goes with a 40.5% break-even ACoS, and two products at the same 30% ACoS, one profitable and one losing money"
          />
        </div>
      </section>

      {/* 2 · WHY MOST AMAZON ADVERTISING LOSES MONEY */}
      <section className="start" id="why">
        <div className="wrap">
          <h2>Why most Amazon advertising loses money</h2>
          <p style={{ maxWidth: "62ch" }}>
            Two reasons, and neither is the bidding.
          </p>
          <div className="fee-grid">
            <div className="fee">
              <b>The page does not convert.</b>
              <span>
                Paying for clicks to a listing that was never built to sell
                makes the loss arrive faster. Conversion comes first, every
                time. If your listings are the problem,{" "}
                <a href="/amazon-listing-optimization">we say so</a> before we
                touch a campaign.
              </span>
            </div>
            <div className="fee">
              <b>Nobody is watching the stock.</b>
              <span>
                Ads that keep running through a stockout burn budget and lose
                the ranking they paid for. Advertising decisions and inventory
                decisions have to be made by the same people, on the same day.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · SNIPPET */}
      <section className="buildband" id="what-a-ppc-agency-does">
        <div className="wrap">
          <h2>What does an Amazon PPC agency do?</h2>
          <div className="snippet">
            <p>
              An Amazon PPC agency plans and runs sponsored product, brand and
              display campaigns: keyword and search-term research, bid and
              budget management, negative targeting, and reporting. Good ones
              also connect advertising to inventory, price and margin rather
              than optimizing cost-per-click on its own.
            </p>
          </div>
        </div>
      </section>

      {/* 4 · WHAT WE MANAGE */}
      <section className="start" id="what-we-manage">
        <div className="wrap">
          <h2>The ad types we manage, chosen product by product.</h2>
          <p style={{ maxWidth: "70ch" }}>
            We don&apos;t switch everything on at once. Each product gets the
            formats its margin and stage can pay for.
          </p>
          <ul className="facts">
            <li>
              <b>Sponsored Products.</b> Keyword and product targeting in search
              results and on product pages. Most budgets sit here because most
              ad sales come from here.
            </li>
            <li>
              <b>Sponsored Brands, including video.</b> Placements at the top
              of and within search results, for brand-registered sellers. We
              use them on your brand terms, on category terms where you have a
              range to show, and as video where the product is easier to show
              than describe.
            </li>
            <li>
              <b>Sponsored Display.</b> Targets product pages and shoppers who
              viewed your product and did not buy. Useful for defending your
              own pages and for retargeting.
            </li>
            <li>
              <b>Stores.</b> Not paid media, but Sponsored Brands traffic often
              lands there, so the Store is treated as part of the same job.
            </li>
            <li>
              <b>Walmart Sponsored Search.</b> Sponsored Products, Sponsored
              Brands and Sponsored Videos for Walmart Marketplace sellers in
              the US.
            </li>
          </ul>
        </div>
      </section>

      {/* 5 · MANAGED TO CONTRIBUTION MARGIN — the table is HTML, labelled
          illustrative so the $-figures pass the copy gate */}
      <section className="buildband" id="contribution-margin">
        <div className="wrap">
          <h2>
            ACoS and TACoS are inputs. What each sale leaves after every cost
            decides the bid.
          </h2>
          <p style={{ maxWidth: "70ch" }}>
            ACoS compares ad cost with the sales the ads claimed. TACoS
            compares ad cost with all your sales. Neither says whether you
            made money. Contribution margin does: price, less cost of goods,
            marketplace fees, returns and advertising.
          </p>
          <p style={{ maxWidth: "70ch" }}>
            Each product gets its own break-even ACoS, worked out from its own
            costs, and a target set below it. A product with room gets pushed.
            A product without room gets defended, repriced or left to sell
            organically.
          </p>
          <figure className="acos" data-worked-example>
            <figcaption>Illustrative example, not a client:</figcaption>
            <table>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Line</span>
                  </th>
                  <th scope="col">Product A</th>
                  <th scope="col">Product B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Price</th>
                  <td>$30.00</td>
                  <td>$30.00</td>
                </tr>
                <tr>
                  <th scope="row">Cost of goods</th>
                  <td>$8.00</td>
                  <td>$12.00</td>
                </tr>
                <tr>
                  <th scope="row">Marketplace fees</th>
                  <td>$10.50</td>
                  <td>$10.50</td>
                </tr>
                <tr>
                  <th scope="row">Returns allowance</th>
                  <td>$0.00</td>
                  <td>$1.50</td>
                </tr>
                <tr>
                  <th scope="row">Left before advertising</th>
                  <td>$11.50</td>
                  <td>$6.00</td>
                </tr>
                <tr>
                  <th scope="row">Break-even ACoS</th>
                  <td>38%</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <th scope="row">At 30% ACoS, per ad-driven sale</th>
                  <td className="yes">keeps $2.50</td>
                  <td className="no">loses $3.00</td>
                </tr>
              </tbody>
            </table>
          </figure>
          <p style={{ maxWidth: "70ch" }}>
            Same ACoS, opposite results. That is why a report that only shows
            ACoS is not enough.
          </p>
          <p style={{ maxWidth: "70ch", marginBottom: 0 }}>
            TACoS still matters. If it falls while total sales rise,
            advertising is feeding organic sales. If it rises while total
            sales stay flat, you are paying for sales you would have made
            anyway.
          </p>
        </div>
      </section>

      {/* 6 · HOW WE RUN IT */}
      <section className="run" id="how-we-run-it">
        <div className="wrap">
          <h2>How we run it</h2>
          <div className="ops" style={{ marginTop: 24 }}>
            <div className="op">
              <b>Convert</b>
              <span>
                The listing, images and A+ before any budget increases
              </span>
            </div>
            <div className="op">
              <b>Structure</b>
              <span>
                Campaigns separated by intent, not by whim. Exact, phrase and
                discovery kept apart
              </span>
            </div>
            <div className="op">
              <b>Search terms</b>
              <span>
                Harvested weekly. Winners promoted, losers negated, both
                written down
              </span>
            </div>
            <div className="op">
              <b>Bids and budgets</b>
              <span>
                Moved against margin and stock cover, not against ACoS alone
              </span>
            </div>
            <div className="op">
              <b>Hold</b>
              <span>
                Featured offer, price and stock, because losing any of the
                three wastes the whole spend
              </span>
            </div>
            <div className="op">
              <b>Report</b>
              <span>
                What advertising cost, what it returned, and what we would
                change next month
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · THE WEEKLY AND MONTHLY RHYTHM */}
      <section className="start" id="rhythm">
        <div className="wrap">
          <h2>
            The work runs on a fixed rhythm, so nothing depends on someone
            remembering to look.
          </h2>
          <ul className="facts">
            <li>
              <b>Weekly:</b> search terms harvested, with winners promoted and
              losers negated, each change logged with its reason. Bids moved
              against margin and stock. Placements compared on conversion and
              adjusted.
            </li>
            <li>
              <b>Monthly:</b> the report and a call, a structure review, and
              one test for next month. One test at a time, so the result means
              something.
            </li>
            <li>
              <b>Quarterly:</b> which products earn more budget, which earn
              less, and how spend splits between Amazon and Walmart US.
            </li>
          </ul>
          <p style={{ maxWidth: "70ch", marginTop: 22 }}>
            <b>On dayparting:</b> hours are cut only where hourly data shows
            conversion really drops. On most accounts it doesn&apos;t, and
            switching ads off at night hands those shoppers to a competitor.
          </p>
          <p style={{ maxWidth: "70ch", marginBottom: 0 }}>
            <b>On automation:</b> rules handle repeatable arithmetic. A person
            sets the targets and the structure, and decides when a change in
            stock or price should override a rule.
          </p>
        </div>
      </section>

      {/* 8 · BIDS FOLLOW STOCK COVER */}
      <section className="buildband" id="stock-cover">
        <div className="wrap">
          <h2>
            Advertising into a stockout costs you twice: once in wasted
            clicks, then again in lost organic rank.
          </h2>
          <ul className="facts">
            <li>
              <b>Enough stock to last until the next delivery:</b> spend to the
              margin target.
            </li>
            <li>
              <b>Stock that runs out before the next delivery:</b> cut
              discovery and competitor targeting first, keep brand terms and
              proven exact-match terms running, and slow the sell-through.
            </li>
            <li>
              <b>Overstock or aging stock:</b> accept a thinner ad margin when
              that costs less than storage fees or a clearance sale.
            </li>
          </ul>
          <p style={{ maxWidth: "70ch", marginTop: 20, marginBottom: 0 }}>
            The thresholds depend on your supplier lead times, so they are set
            with you during onboarding.
          </p>
        </div>
      </section>

      {/* 9 · ADVERTISING CHANGES WITH THE PRODUCT'S STAGE */}
      <section className="start" id="stage">
        <div className="wrap">
          <h2>
            A launch, an established product and a product under attack need
            different advertising.
          </h2>
          <ul className="facts">
            <li>
              <b>Launch.</b> The listing is finished first. Discovery starts
              with a small set of exact-match terms and automatic campaigns.
              ACoS runs higher for a while, so the ceiling and the end date are
              agreed in writing before spending.
            </li>
            <li>
              <b>Established.</b> Search terms harvested, waste cut, budget
              moved to the terms that make margin. When spend comes down, we
              check whether organic rank holds.
            </li>
            <li>
              <b>Defend.</b> Your brand terms and product pages are the
              cheapest sales you can buy, and competitors bid on them. We cover
              them first. Competitor products are targeted only where your
              offer wins on price, reviews or rating.
            </li>
          </ul>
        </div>
      </section>

      {/* 10 · WALMART US */}
      <section className="buildband" id="walmart-advertising">
        <div className="wrap">
          <h2>Walmart US is a different auction, run as one.</h2>
          <p style={{ maxWidth: "70ch" }}>
            Walmart Connect has fewer placements, different reporting and
            different shopper behavior. Copying Amazon campaigns across usually
            wastes the first month.
          </p>
          <p style={{ maxWidth: "70ch" }}>
            The same team runs your Amazon campaigns, so budget moves to
            whichever marketplace is converting that week, and one
            product&apos;s stock is managed across both. Walmart advertising is
            run for Walmart Marketplace in the US only.
          </p>
          <p style={{ marginBottom: 0 }}>
            <a
              href="/amazon-walmart-management#walmart"
              style={{ fontWeight: 600 }}
            >
              Adding Walmart US to the operation →
            </a>
          </p>
        </div>
      </section>

      {/* 11 · WHAT THE MONTHLY REPORT SHOWS — visual 18 */}
      <section className="start" id="report">
        <div className="wrap">
          <h2>What the monthly report shows.</h2>
          <p style={{ maxWidth: "70ch" }}>
            One page of conclusions first, with the detail behind it. When a
            number moves, the report says why.
          </p>
          <Visual
            name="amazon-ppc-management/monthly-report"
            alt="Sample monthly advertising report with conclusions first, spend and TACoS by marketplace, contribution after ads by product, search terms promoted and negated with reasons, stock cover against a 14-day guard, and next month's test"
          />
          <ul className="facts" style={{ marginTop: 28 }}>
            <li>Spend, ad sales, ACoS and TACoS by marketplace</li>
            <li>Contribution after advertising, by product</li>
            <li>Search terms promoted and negated, with the reason for each</li>
            <li>Stock cover against planned spend</li>
            <li>One test for next month, and why</li>
          </ul>
        </div>
      </section>

      {/* 12 · YOUR ACCOUNT, YOUR CAMPAIGNS */}
      <section className="handover" id="ownership">
        <div className="wrap">
          <div className="handover-grid">
            <div>
              <h2>Your account, your data, your campaigns.</h2>
            </div>
            <div>
              <p style={{ marginBottom: 0 }}>
                We work inside your Amazon Ads and Walmart Connect accounts as
                an invited user. We never ask for your password, and we never
                move campaigns into an account we control. If we stop working
                together, the campaigns, history and naming stay where they
                are, documented, so whoever comes next can pick them up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13 · WHAT IT COSTS */}
      <section className="fees" id="fees">
        <div className="wrap">
          <h2>A monthly fee, agreed in writing first.</h2>
          <p style={{ maxWidth: "66ch" }}>
            <b>Nothing is charged on your advertising spend.</b> An agency
            paid a percentage of spend earns more when you spend more, which
            is a conflict that shows up in every recommendation they make.
          </p>
          <p style={{ maxWidth: "70ch" }}>
            <b>The fee covers</b> the advertising management described above,
            on Amazon and Walmart US, plus the monthly report and call.
          </p>
          <p style={{ maxWidth: "70ch" }}>
            <b>It does not cover</b> the ad spend itself, which you pay to
            Amazon or Walmart from your own account, or listing rebuilds, which
            are quoted separately.
          </p>
          <p style={{ maxWidth: "70ch" }}>
            The fee is set by catalog size and the number of marketplaces,
            never by how much you spend.
          </p>
          <p style={{ marginTop: 20, marginBottom: 0 }}>
            <a href="/how-we-work" style={{ fontWeight: 600 }}>
              How we charge, in full →
            </a>
          </p>
        </div>
      </section>

      {/* 14 · WHO THIS SUITS */}
      <section className="buildband" id="fit">
        <div className="wrap">
          <h2>Who this suits, and who it doesn&apos;t.</h2>
          <div className="fee-grid">
            <div className="fee">
              <b>A good fit</b>
              <span>
                Brand owners and wholesale sellers whose products already sell,
                who know their landed costs, and who want Amazon and Walmart US
                run together.
              </span>
            </div>
            <div className="fee">
              <b>Not a fit</b>
              <span>
                Accounts that want a lower ACoS whatever it does to sales,
                owners who won&apos;t allow listing changes, and accounts whose
                ad spend is too small for a fixed fee to pay for itself.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 15 · QUESTIONS TO ASK ANY PPC AGENCY */}
      <section className="start" id="questions">
        <div className="wrap">
          <h2>Questions to ask any PPC agency, including us</h2>
          <ol className="questions">
            <li>How are you paid, and does your fee change if we spend more?</li>
            <li>What number do you manage to, and how do you work out our break-even?</li>
            <li>Who does the work each week, and how many other accounts do they run?</li>
            <li>What happens to our campaigns and data if we leave?</li>
            <li>What do you do when a product is about to run out of stock?</li>
            <li>Will you tell us when the listing is the problem, not the ads?</li>
          </ol>
        </div>
      </section>

      {/* 16 · FAQ */}
      <Faq items={FAQS} />

      {/* 17 · CLOSE */}
      <section className="cta" id="contact">
        <div className="wrap">
          <h2>Send us your search-term report and one month of advertising data.</h2>
          <p>
            We will tell you where the spend is going and what we would change
            first, before you commit to anything.
          </p>
          <div className="cta-row">
            <a className="btn onpetrol" href={BOOKING}>
              Book a call
            </a>
            <a className="btn line-l" href="/contact#form">
              Send the data instead
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

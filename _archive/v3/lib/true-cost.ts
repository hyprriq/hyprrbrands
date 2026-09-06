/**
 * /true-cost inputs — §14, copy from docs/content/true-cost.md
 * (2 Sep). Numbered because the order is the argument: money leaves
 * in roughly this sequence. The page calculates what you will spend
 * and projects nothing.
 */
export const TRUE_COST_INPUTS: {
  label: string;
  help: string;
  explain: string;
}[] = [
  {
    label: "Product",
    help: "Unit cost × first order",
    explain:
      "The number most people start and stop at. Unit cost is only meaningful against minimum order quantity: a supplier quoting a low per-unit price at a 5,000-unit MOQ is quoting a different commitment from one quoting higher at 500. Use the total of your realistic first order, not the per-unit figure, and use the quoted price rather than the target you hope to negotiate to.",
  },
  {
    label: "Inventory",
    help: "Buffer stock beyond the first order",
    explain:
      "The second order usually has to be placed before the first has sold through, because lead times do not pause. Businesses that budget only for the first order hit a stockout at exactly the moment demand is proving itself, which is the most expensive possible time. Budget the buffer as a real line rather than as something that will come out of revenue.",
  },
  {
    label: "Freight",
    help: "Origin to warehouse",
    explain:
      "Moves with mode, season and volume, and quotes age quickly. Sea freight is cheaper and slower, air is the reverse, and the decision is usually made under time pressure at the worst rate. Include the last leg — port to warehouse is a separate cost from the ocean or air line and is regularly left out of a landed-cost model entirely.",
  },
  {
    label: "Duties",
    help: "Tariffs and brokerage",
    explain:
      "Determined by the goods' classification, which is a specific code rather than a category, and by origin. Get the classification confirmed before you order, not at the border. Include customs brokerage and any handling fees, which are small individually and add up. A misclassification found later is a bill plus a correction process.",
  },
  {
    label: "Testing",
    help: "Lab testing and certification",
    explain:
      "Category-dependent and the line most often discovered late. Children's products, anything ingestible, anything electrical, anything with a battery, and anything making a safety claim will need testing before it can be sold legally. The cost is per product and sometimes per variant. Finding out after production means retesting or writing off the run.",
  },
  {
    label: "Advertising",
    help: "Launch period budget",
    explain:
      "A new listing has no sales history, so it starts with no visibility, and the first period of advertising is buying the data that earns ranking rather than buying profit. Budget it as a launch cost with an end date rather than as ongoing marketing. Treating it as optional is why launches stall at the point they most need momentum.",
  },
  {
    label: "Trademark",
    help: "Filing and counsel",
    explain:
      "Filing fees plus, in most cases, counsel to run the search and prepare it properly. The search is the part that matters — filing a mark that collides is money spent on a refusal. It also gates marketplace brand registry, which gates the content and protection tools you will want from day one. File early; registration takes months.",
  },
  {
    label: "Prep",
    help: "Labelling, bundling, inbound",
    explain:
      "Labelling, polybagging, bundling, inspection, and inbound shipping to the marketplace's own warehouses. Charged per unit, so it scales with volume in a way that surprises people modelling on a per-order basis. Marketplace requirements are specific and non-negotiable, and non-compliant inbound gets refused or reworked at your cost.",
  },
  {
    label: "Insurance",
    help: "Product liability",
    explain:
      "Usually required by the marketplace above a revenue threshold and required by common sense below it. Premiums vary by category and claims history, and some categories are difficult or expensive to place at all. Worth quoting before committing to a category rather than after, because for some products it is the line that decides viability.",
  },
  {
    label: "Service",
    help: "Hyprr fee for the engagement",
    explain:
      "Included so the total is honest. Whatever a provider charges — us or anyone else — is part of what launching costs, and a cost calculator that omits it is doing the same thing as a supplier quoting ex-works. Enter what you are being quoted. If you are talking to us, the mechanic is on the how-we-work page, under fees.",
  },
];

/** Rendered under the running total. */
export const UNDER_TOTAL =
  "This is what leaving the ground costs. It is not a business case: it says nothing about whether the product sells, at what price, or how long the inventory takes to turn. Those are the questions worth asking next, and no calculator answers them.";

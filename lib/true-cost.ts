/**
 * /true-cost inputs — §14. Numbered because their order is the order
 * of the explanation section. Explanations 60–90 words each; the page
 * calculates what you will spend and projects nothing.
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
      "The first production or wholesale order: unit cost multiplied by the quantity the supplier will actually accept. Minimum order quantities are set by the supplier, not by your plan, and the negotiated unit price usually depends on hitting them. Use the quoted price for the quantity you will genuinely order — not the price break two tiers up that you hope to reach later.",
  },
  {
    label: "Inventory",
    help: "Buffer stock beyond the first order",
    explain:
      "Stock beyond the first order that you will hold so a good launch does not end in a stockout. Replenishment lead time is the driver: if the supplier needs eight weeks and the launch works, the reorder has to be funded before the first order has finished selling. Many first-time budgets treat the initial order as the whole inventory cost. It rarely is.",
  },
  {
    label: "Freight",
    help: "Origin to warehouse",
    explain:
      "Moving the goods from the supplier to your warehouse or the marketplace's: origin handling, the sea or air leg, destination handling and the final mile inbound. Sea is cheaper and slower; air is faster and can consume the margin of a low-priced product entirely. Quote it per order, not per year, because every reorder pays it again.",
  },
  {
    label: "Duties",
    help: "Tariffs and brokerage",
    explain:
      "Import duty at the product's tariff classification, plus customs brokerage and any category-specific tariff measures in force when the goods land. Rates change with trade policy and are payable on the customs value, broadly the goods plus freight. Classify the product properly before ordering — the difference between two plausible tariff codes can be the difference between a workable margin and none.",
  },
  {
    label: "Testing",
    help: "Lab testing and certification",
    explain:
      "Laboratory testing and certification for the product's category: safety standards, materials testing, labelling requirements, children's product certification where it applies. This is a compliance gate, not an option — marketplaces ask for the paperwork, and a listing can be suppressed until it is produced. The cost depends on the category and the number of variants, since each variant may need its own test report.",
  },
  {
    label: "Advertising",
    help: "Launch period budget",
    explain:
      "The advertising spend for the launch window, before the product has organic ranking or reviews to carry it. A new listing earns almost nothing on its own; paid traffic is how the first sales, and therefore the first ranking signals, are bought. Budget the launch period as spend you expect to consume, not as spend that pays for itself immediately.",
  },
  {
    label: "Trademark",
    help: "Filing and counsel",
    explain:
      "The trademark application in your launch market, plus counsel for the search and filing. The mark is what makes the brand defensible and opens the marketplace's brand registry, which in turn gates listing protections and advertising formats. Filing early matters: registration takes months, and the application must be underway before some protections apply. File it in your name, not an agency's.",
  },
  {
    label: "Prep",
    help: "Labelling, bundling, inbound",
    explain:
      "The unglamorous handling between the factory and the shelf: barcode labelling, poly-bagging, bundling, carton compliance and inbound placement fees. Per unit it looks trivial; multiplied across the first order it is a real line. Marketplaces charge for inbound handling and penalise non-compliant cartons, so prep done wrong is paid twice — once to do it, once in fees.",
  },
  {
    label: "Insurance",
    help: "Product liability",
    explain:
      "Product liability cover for the categories and marketplaces you sell in. Marketplaces require it above certain sales thresholds and can ask for the certificate at any time; category risk sets the premium. It is an annual cost that exists whether or not the launch succeeds, which is exactly why it belongs in the pre-launch arithmetic rather than in the surprise column.",
  },
  {
    label: "Service",
    help: "Hyprr fee for the engagement",
    explain:
      "What you pay Hyprr for the engagement, entered by you because it is agreed with you in writing before anything starts. We publish the mechanic rather than figures at soft launch: a fee for the build work, and where it applies a share of realised margin after goods actually sell. The full structure is on the how-we-work page, under fees.",
  },
];

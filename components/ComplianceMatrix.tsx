/**
 * Compliance gates — PROMPT_24 §4.1 P0, built as an HTML table from
 * visual 16 (reference only, never placed). Every cell carries its
 * state as text (Required / Depends / Not usually) with the detail
 * under it; colour is a second signal, never the only one. Below
 * 768px each row becomes a card of label/value pairs (CSS).
 */
type State = "Required" | "Depends" | "Not usually";
type Cell = [State, string];

const COLUMNS = [
  "Testing",
  "Certificate / registration",
  "Label + claims",
  "Marketplace review",
  "Import + customs",
] as const;

const ROWS: { category: string; cells: Cell[]; effect: string }[] = [
  {
    category: "Children's products + toys",
    cells: [
      ["Required", "CPSC-accepted lab"],
      ["Required", "Children's Product Certificate"],
      ["Required", "Age grade · tracking label"],
      ["Required", "CPC + test reports"],
      ["Required", "CPSC eFiling at entry"],
    ],
    effect: "Adds lab time",
  },
  {
    category: "Dietary supplements",
    cells: [
      ["Required", "Third-party verification"],
      ["Required", "FDA facility registration"],
      ["Required", "Supplement Facts · DSHEA"],
      ["Required", "Amazon verification"],
      ["Required", "FDA prior notice"],
    ],
    effect: "Claims rewritten",
  },
  {
    category: "Cosmetics + personal care",
    cells: [
      ["Depends", "Where claims need it"],
      ["Required", "MoCRA listing"],
      ["Required", "Ingredients · Prop 65"],
      ["Depends", "Some subcategories"],
      ["Depends", "FDA may examine"],
    ],
    effect: "Claims rewritten",
  },
  {
    category: "Kitchen + home",
    cells: [
      ["Depends", "Food-contact testing"],
      ["Depends", "Where a CPSC rule applies"],
      ["Required", "Prop 65 · origin"],
      ["Not usually", "Standard"],
      ["Depends", "Food-contact goods"],
    ],
    effect: "Material spec",
  },
  {
    category: "Electronics + batteries",
    cells: [
      ["Required", "EMC lab · UN38.3"],
      ["Required", "FCC ID or SDoC"],
      ["Required", "Battery warnings"],
      ["Required", "Dangerous goods"],
      ["Required", "Battery shipping papers"],
    ],
    effect: "Hazmat review",
  },
  {
    category: "Pest + germ claims",
    cells: [
      ["Required", "Efficacy data"],
      ["Required", "EPA registration"],
      ["Required", "EPA numbers on label"],
      ["Required", "Pesticide review"],
      ["Required", "EPA Notice of Arrival"],
    ],
    effect: "Often declined",
  },
];

const stateClass: Record<State, string> = {
  Required: "req",
  Depends: "dep",
  "Not usually": "no",
};

export default function ComplianceMatrix() {
  return (
    <div className="compliance" data-feature="compliance-matrix">
      <table>
        <caption className="sr-only">
          What is checked and costed per category before a purchase order:
          testing, certificate or registration, label and claims,
          marketplace review, import and customs, and the effect on the
          verdict
        </caption>
        <thead>
          <tr>
            <th scope="col">Category</th>
            {COLUMNS.map((c) => (
              <th scope="col" key={c}>
                {c}
              </th>
            ))}
            <th scope="col">Verdict effect</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.category}>
              <th scope="row">{r.category}</th>
              {r.cells.map(([state, detail], i) => (
                <td key={COLUMNS[i]} className={stateClass[state]}>
                  <span className="cl">{COLUMNS[i]}</span>
                  <b>{state}</b>
                  <span>{detail}</span>
                </td>
              ))}
              <td className="effect">
                <span className="cl">Verdict effect</span>
                <em>{r.effect}</em>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="compliance-key" aria-hidden="true">
        <span className="req">Required</span>
        <span className="dep">Depends on product</span>
        <span className="no">Not usually</span>
      </p>
    </div>
  );
}

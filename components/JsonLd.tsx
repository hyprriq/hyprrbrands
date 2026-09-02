/** Renders JSON-LD nodes as individual script blocks. */
export default function JsonLd({ nodes }: { nodes: object[] }) {
  return (
    <>
      {nodes.map((n, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(n).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

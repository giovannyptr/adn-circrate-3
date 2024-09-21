

const ProductSpecification = () => {
  const specifications = [
    { feature: "Raw Material Source", value: "Locally sourced waste marine clay (abundant and low-value)" },
    { feature: "Cement Type (EN 197-1)", value: "CEM III/A-Q (6–20% cement replacement)\nCEM III/B-Q (21–35% cement replacement)" },
    { feature: "Product Compatibility", value: "Compatible with all constituents of concrete mix materials" },
    { feature: "Carbon Emission in Production", value: "Up to 70% reduction as compared to normal cement" },
    { feature: "Permissible Concrete Strength", value: "Up to Grade 60" },
    { feature: "Chloride Ion Penetrability (ASTM C 1202)", value: "28-day: Moderate (vs High for normal concrete)\n90-day: Low (vs Moderate/High for normal concrete)" },
    { feature: "Durability & Service Life", value: "More than 300% improvement" },
    { feature: "Carbon Reduction in Life-Cycle of Asset", value: "Up to 60% reduction in life-cycle embodied carbon" },
  ];

  return (
    <section style={{ backgroundColor: "#F1F5EB", padding: "60px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#134832", marginBottom: "40px" }}>
          PRODUCT SPECIFICATION
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <div style={{ display: "contents", fontWeight: "bold" }}>
            <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRight: "1px solid #e0e0e0" }}>FEATURES</div>
            <div style={{ padding: "20px" }}>VALUE</div>
          </div>
          {specifications.map((item, index) => (
            <div key={index} style={{ display: "contents" }}>
              <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRight: "1px solid #e0e0e0", borderTop: "1px solid #e0e0e0" }}>
                {item.feature}
              </div>
              <div style={{ padding: "20px", borderTop: "1px solid #e0e0e0", whiteSpace: "pre-wrap" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSpecification;

import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f5f7fb",   // 🔥 oq fon
        color: "#111",
        padding: "90px 20px 30px",
        borderTop: "1px solid #eee",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",

          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "70px",
          alignItems: "start",
        }}
      >

        {/* BRAND */}
        <div>
          <h2 style={{ fontSize: "22px", marginBottom: "15px", fontWeight: "700" }}>
            Apple Insights
          </h2>
          <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.7" }}>
            Modern comparison platform for Apple and competitors.
            Clean, fast and minimal design for tech insights.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "16px" }}>Quick Links</h3>
          <p style={{ color: "#666", marginBottom: "8px", cursor: "pointer" }}>Home</p>
          <p style={{ color: "#666", marginBottom: "8px", cursor: "pointer" }}>Comparison</p>
          <p style={{ color: "#666", marginBottom: "8px", cursor: "pointer" }}>FAQ</p>
          <p style={{ color: "#666", marginBottom: "8px", cursor: "pointer" }}>Problemsr</p>
        </div>

        {/* FEATURES */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "16px" }}>Features</h3>
          <p style={{ color: "#666", marginBottom: "8px" }}>Apple Analysis</p>
          <p style={{ color: "#666", marginBottom: "8px" }}>Competitor Table</p>
          <p style={{ color: "#666", marginBottom: "8px" }}>Tech Insights</p>
          <p style={{ color: "#666", marginBottom: "8px" }}>Market Data</p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "16px" }}>Contact</h3>
          <p style={{ color: "#666", marginBottom: "8px" }}>
            support@appleinsights.com
          </p>
          <p style={{ color: "#666" }}>
            Tashkent, Uzbekistan
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div
        style={{
          marginTop: "70px",
          textAlign: "center",
          color: "#999",
          fontSize: "13px",
          borderTop: "1px solid #eee",
          paddingTop: "20px",
        }}
      >
        © {new Date().getFullYear()} Apple Insights. All rights reserved.
      </div>
    </footer>
  );
}
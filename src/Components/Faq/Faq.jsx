import React from "react";

export default function Recommendations() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "120px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <span
          style={{
            fontSize: "13px",
            letterSpacing: "1px",
            color: "#888",
          }}
        >
          RECOMMENDATIONS
        </span>

        <h1
          style={{
            fontSize: "48px",
            margin: "20px 0 30px",
            color: "#111",
          }}
        >
          Future Improvements
        </h1>

        <p style={{ fontSize: "19px", lineHeight: "1.8", color: "#444" }}>
         If I were the CEO, I would change two things. First, I would lower the prices of batteries and screen repairs. The company should improve its repair policy by making spare parts cheaper and available to all users, not just those with AppleCare. Second, I would stop forcing software updates on old phones. Each new iOS version slows down older devices. Instead, I would offer security-only updates for three more years.

        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.8",
            color: "#444",
            marginTop: "20px",
          }}
        >
          My clear recommendation is: Apple must reduce repair costs and stop slowing down old phones with forced updates. These changes will keep customers longer and reduce electronic waste. People will trust Apple more if they feel they own their devices, not just rent them.
        </p>
      </div>
    </section>         
  );
}         
import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const styles = {
      section: {
        background: "#f5f7fb",   // 🔥 OQ FON
        color: "#111",
        padding: "120px 20px",
      },

      container: {
        maxWidth: "1200px",
        margin: "auto",
      },

      title: {
        textAlign: "center",
        fontSize: "42px",
        marginBottom: "10px",
        fontWeight: "800",
      },

      desc: {
        textAlign: "center",
        color: "#666",
        marginBottom: "50px",
        fontSize: "15px",
      },

      table: {
        borderRadius: "20px",
        overflow: "hidden",
        background: "#fff",   // 🔥 OQ CARD
        boxShadow: "0 30px 80px rgba(0,0,0,0.08)",
      },

      row: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        padding: "22px",
        textAlign: "center",
        fontSize: "15px",
        borderBottom: "1px solid #eee",
      },

      head: {
        background: "#f9fafc",
        fontWeight: "bold",
        color: "#888",
      },

      apple: {
        background: "#eef5ff",  // 🔥 Apple highlight
      },

      barWrap: {
        width: "80%",
        height: "6px",
        background: "#eee",
        borderRadius: "10px",
        margin: "6px auto 0",
      },

      barHigh: {
        width: "100%",
        height: "6px",
        background: "#4da3ff",
        borderRadius: "10px",
      },

      barMed: {
        width: "65%",
        height: "6px",
        background: "#f5a623",
        borderRadius: "10px",
      },

      barLow: {
        width: "35%",
        height: "6px",
        background: "#ff4d4f",
        borderRadius: "10px",
      },
    };

    return (
      <section style={styles.section}>
        <div style={styles.container}>

          <h2 style={styles.title}>
            Competitor Comparison
          </h2>

          <p style={styles.desc}>
            Apple vs Samsung vs Xiaomi vs Competitors — performance, price and popularity
          </p>

          <div style={styles.table}>

            {/* HEADER */}
            <div style={{ ...styles.row, ...styles.head }}>
              <div>Company</div>
              <div>Price</div>
              <div>Quality</div>
              <div>Popularity</div>
            </div>

            {/* APPLE */}
            <div style={{ ...styles.row, ...styles.apple }}>
              <div style={{ color: "#4da3ff", fontWeight: "bold" }}>
                Apple
              </div>

              <div>
                High
                <div style={styles.barWrap}>
                  <div style={styles.barHigh}></div>
                </div>
              </div>

              <div>
                High
                <div style={styles.barWrap}>
                  <div style={styles.barHigh}></div>
                </div>
              </div>

              <div>
                High
                <div style={styles.barWrap}>
                  <div style={styles.barHigh}></div>
                </div>
              </div>
            </div>

            {/* SAMSUNG */}
            <div style={styles.row}>
              <div>Samsung</div>

              <div>
                Medium
                <div style={styles.barWrap}>
                  <div style={styles.barMed}></div>
                </div>
              </div>

              <div>
                High
                <div style={styles.barWrap}>
                  <div style={styles.barHigh}></div>
                </div>
              </div>

              <div>
                High
                <div style={styles.barWrap}>
                  <div style={styles.barHigh}></div>
                </div>
              </div>
            </div>

            {/* XIAOMI */}
            <div style={styles.row}>
              <div>Xiaomi</div>

              <div>
                Low
                <div style={styles.barWrap}>
                  <div style={styles.barLow}></div>
                </div>
              </div>

              <div>
                Medium
                <div style={styles.barWrap}>
                  <div style={styles.barMed}></div>
                </div>
              </div>

              <div>
                High
                <div style={styles.barWrap}>
                  <div style={styles.barHigh}></div>
                </div>
              </div>
            </div>

            {/* COMPETITOR */}
            <div style={styles.row}>
              <div>Competitor</div>

              <div>
                Medium
                <div style={styles.barWrap}>
                  <div style={styles.barMed}></div>
                </div>
              </div>

              <div>
                Medium
                <div style={styles.barWrap}>
                  <div style={styles.barMed}></div>
                </div>
              </div>

              <div>
                Medium
                <div style={styles.barWrap}>
                  <div style={styles.barMed}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
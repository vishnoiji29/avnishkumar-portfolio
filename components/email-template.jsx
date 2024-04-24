import * as React from "react";

export const EmailTemplate = ({ messageData, name, email }) => (
  <section style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
    <section style={{ maxWidth: "600px", margin: "0 auto" }}>
      <section
        style={{
          background: "#fff",
          border: "1px solid #dedede",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#6c757d" }}>Name: {name}</h2>
        <h2 style={{ color: "#6c757d" }}>Email: {email}</h2>
        <p style={{ fontSize: "1rem", color: "#6c757d" }}>
          <strong>Message:</strong> {messageData}
        </p>
        <a
          href="#"
          style={{
            display: "inline-block",
            color: "#fff",
            backgroundColor: "#007bff",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "3px",
          }}
        >
          Visit Portfolio
        </a>
        <p style={{ fontSize: "0.875rem", color: "#6c757d" }}>
          Thank you for your time,
        </p>
        <p style={{ fontSize: "0.875rem", color: "#6c757d" }}>Avnish Kumar</p>
      </section>
      <p style={{ textAlign: "center", color: "#6c757d" }}>
        © 2024 Avnish Kumar. All rights reserved.
      </p>
    </section>
  </section>
);

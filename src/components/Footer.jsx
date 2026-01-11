import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#0c0c0c",
        color: "#fff",
        boxShadow: "0 -2px 10px rgba(255,255,255,0.05)",
      }}
    >
      <p style={{ marginBottom: "10px" }}>
        📞 Kontakt:{" "}
        <a
          href="tel:0652440990"
          style={{ color: "#FFD700", textDecoration: "none" }}
        >
          0652440990
        </a>{" "}
        |{" "}
        <a
          href="tel:0653070330"
          style={{ color: "#FFD700", textDecoration: "none" }}
        >
          0653070330
        </a>
      </p>

      <p style={{ marginBottom: "10px" }}>
        📸 Instagram:{" "}
        <a
          href="https://www.instagram.com/pmevent_barskistolovi_nis/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFD700", textDecoration: "none" }}
        >
          @pmevent_barskistolovi_nis
        </a>
      </p>

      <p style={{ opacity: 0.6 }}>&copy; 2026 PM EVENT</p>
    </footer>
  );
};

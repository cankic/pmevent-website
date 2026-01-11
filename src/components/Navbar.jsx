// components/Navbar.jsx
import React from "react";

export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#111",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>PM EVENT</div>
      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#services" style={{ color: "#fff", textDecoration: "none" }}>Usluge</a>
        <a href="#delivery" style={{ color: "#fff", textDecoration: "none" }}>Dostava</a>
        <a href="#equipment" style={{ color: "#fff", textDecoration: "none" }}>Oprema</a>
        <a href="#location" style={{ color: "#fff", textDecoration: "none" }}>Lokacija</a>
        <a href="#reviews" style={{ color: "#fff", textDecoration: "none" }}>Utisci</a>
      </div>
      <a
        href="tel:0652440990"
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#FFD700",
          color: "#111",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Pozovi
      </a>
    </nav>
  );
};

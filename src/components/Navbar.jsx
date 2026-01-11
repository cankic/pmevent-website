import React from "react";

export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#111",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "24px" }}>
        PM EVENT
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#services">Naše usluge</a>
        <a href="#event">Event</a>
        <a href="#delivery">Dostava</a>
        <a href="#equipment">Oprema</a>
        <a href="#reviews">Utisci</a>
        <a href="#location">Lokacija</a>
      </div>

      <a href="tel:0652440990" className="call-button">
        Pozovi
      </a>
    </nav>
  );
};

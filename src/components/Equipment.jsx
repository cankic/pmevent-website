import React from "react";
import equipImg from "../assets/equipment.jpg"; // varijabla mora da pokazuje na fajl koji postoji

export const Equipment = () => {
  return (
    <section
      id="equipment"
      style={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#0f0f0f",
        color: "#fff",
      }}
    >
      <h2>Oprema</h2>
      <img
        src={equipImg} // obavezno koristi varijablu iz importa
        alt="Oprema PM EVENT"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "12px", margin: "20px 0" }}
      />
      <p>U našoj ponudi možete pronaći:</p>
      <ul style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
        <li>Barske stolove Ø60, Ø80</li>
        <li>Barske stolice</li>
        <li>Vatromet</li>
        <li>Tende 3x3m</li>
        <li>Suncobrane Ø2.7m</li>
        <li>Ketering stolove 180x75cm</li>
        <li>Kible</li>
        <li>Rashladne vitrine</li>
        <li>Disko rasveta</li>
        <li>Dekorativna rasveta</li>
        <li>Tabla dobrodošlice</li>
        <li>Pergola za slikanje</li>
        <li>Pepeljare</li>
        <li>Kutija za koverte</li>
        <li>Korpe za kićanke</li>
        <li>Ketering</li>
        <li>Led</li>
      </ul>
      <p>
        Napomena: Naša firma isporučuje opremu u besprekornom stanju. Eventualna oštećenja prilikom povratka moraju biti prijavljena i može biti primenjena naknada za popravku ili zamenu. Vaš, PM EVENT.
      </p>
    </section>
  );
};

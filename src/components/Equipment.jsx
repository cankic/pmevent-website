import React from "react";
import { motion } from "framer-motion";

const equipmentList = [
  "Barski stolovi Ø60, Ø80",
  "Barske stolice",
  "Tende 3x3m",
  "Suncobrani Ø2.7m",
  "Ketering stolovi 180x75cm",
  "Kible",
  "Rashladne vitrine",
  "Disko rasveta",
  "Dekorativna rasveta",
  "Tabla dobrodošlice",
  "Pergola za slikanje",
  "Pepeljare",
  "Kutija za koverte",
  "Korpe za kićanke",
  "Ketering",
  "Led",
];

export const Equipment = () => {
  return (
    <section
      id="equipment"
      style={{
        padding: "80px 20px",
        backgroundColor: "#0f0f0f",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "36px", marginBottom: "40px" }}
      >
        Oprema
      </motion.h2>

      {/* GRID OPREME */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {equipmentList.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "#111",
              padding: "18px",
              borderRadius: "14px",
              fontSize: "15px",
              boxShadow: "0 0 10px rgba(255,255,255,0.05)",
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* NAPOMENA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          maxWidth: "900px",
          margin: "60px auto 0",
          background: "#111",
          padding: "30px",
          borderRadius: "16px",
          textAlign: "left",
          boxShadow: "0 0 15px rgba(255,255,255,0.05)",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>Napomena</h3>
        <p style={{ lineHeight: "1.6", opacity: 0.85 }}>
          Naša firma isporučuje opremu u besprekornom stanju, bez ikakvih oštećenja,
          kako bi osigurala Vaše zadovoljstvo i profesionalni ugled. Međutim,
          prilikom vraćanja opreme neophodna je temeljna kontrola. Eventualna
          oštećenja moraju biti prijavljena i u skladu sa standardnim uslovima može
          biti primenjena odgovarajuća naknada za popravku ili zamenu oštećenih
          delova. Ova praksa osigurava da oprema ostane u optimalnom stanju za sve
          naše klijente.
        </p>

        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          Vaš, PM EVENT
        </p>
      </motion.div>
    </section>
  );
};

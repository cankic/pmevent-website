import React from "react";
import { motion } from "framer-motion";

export const Equipment = () => {
  const equipmentItems = [
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
        style={{ fontSize: "36px", marginBottom: "40px", color: "#fff" }}
      >
        Oprema
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {equipmentItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 0 15px rgba(255,255,255,0.05)",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

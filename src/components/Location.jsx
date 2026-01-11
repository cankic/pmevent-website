import React from "react";
import { motion } from "framer-motion";

export const Location = () => {
  return (
    <section
      id="location"
      style={{
        padding: "80px 20px",
        backgroundColor: "#0f0f0f",
        color: "white",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "36px", marginBottom: "30px" }}
      >
        Lokacija
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#111",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 0 15px rgba(255,255,255,0.05)",
          textAlign: "left",
        }}
      >
        <p style={{ lineHeight: "1.6", opacity: 0.85 }}>
          Nalazimo se na teritoriji grada Niša, te našu opremu možete iznajmiti na toj lokaciji uključujući i okolinu do 30km. Za dalja mesta – poseban upit i dogovor.
        </p>

        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          Vaš, PM EVENT
        </p>
      </motion.div>

      {/* MAPA - mesto za ubacivanje Google Maps ili slike */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          maxWidth: "900px",
          margin: "40px auto 0 auto",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 0 15px rgba(255,255,255,0.05)",
        }}
      >
        {/* OVDE UBACI SLIKU MAPE ILI IFRAME */}
        <img
          src="/src/assets/map.jpg"  // <-- Ubaci svoju mapu ili screenshot Google Maps
          alt="Lokacija Niš"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </motion.div>
    </section>
  );
};

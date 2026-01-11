import React from "react";
import { motion } from "framer-motion";

export const Delivery = () => {
  return (
    <section
      id="delivery"
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
        Dostava i montaža
      </motion.h2>

      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#111",
          borderRadius: "18px",
          padding: "30px",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 20px rgba(255,255,255,0.05)",
        }}
      >
        {/* TEKST */}
        <div style={{ maxWidth: "460px", textAlign: "left" }}>
          <h3 style={{ marginBottom: "15px" }}>Brza i pouzdana dostava</h3>

          <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
            Dostava se vrši na teritoriji Niša i okoline (do 30km).
            U cenu je uračunata montaža i demontaža stolova.
            Za udaljenije lokacije – poseban dogovor.
          </p>

          <p style={{ marginTop: "15px", fontWeight: "bold" }}>
            Kontakt: 065 / 30-70-330
          </p>

          <p style={{ marginTop: "10px", opacity: 0.7 }}>
            Vaš, PM EVENT
          </p>
        </div>

        {/* SLIKA */}
        <img
          src="/src/assets/delivery.jpg"
          alt="Dostava opreme"
          style={{
            width: "420px",
            maxWidth: "100%",
            height: "260px",
            objectFit: "cover",
            borderRadius: "14px",
          }}
        />
      </motion.div>
    </section>
  );
};

import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#111",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* POZADINSKA SLIKA */}
      <img
        src="/src/assets/hero.jpg" // <-- OVDE ubaci svoju sliku
        alt="PM EVENT"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 0,
          filter: "brightness(0.5)", // tamnija pozadina za bolji kontrast teksta
        }}
      />

      {/* TEKST I DUGME */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#f5f5f5",
          }}
        >
          PM EVENT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ fontSize: "20px", marginBottom: "40px", opacity: 0.85 }}
        >
          Iznajmljivanje barskih stolova i kompletna oprema za Vaš događaj
        </motion.p>

        <motion.a
          href="tel:0652440990"
          whileHover={{ scale: 1.05 }}
          style={{
            display: "inline-block",
            padding: "15px 35px",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            color: "#111",
            fontWeight: "bold",
            fontSize: "18px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Pozovi
        </motion.a>
      </motion.div>
    </section>
  );
};

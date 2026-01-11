import React from "react";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section
      id="services"
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
        Naše usluge
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* KARTICA 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: "#111",
            padding: "25px",
            borderRadius: "16px",
            boxShadow: "0 0 15px rgba(255,255,255,0.05)",
          }}
        >
          <img
            src="/src/assets/usluga1.jpg"   // <-- OVDE ubaci svoju sliku
            alt="Barski stolovi"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          />
          <h3>Najam barskih stolova</h3>
          <p>Moderan i stabilan inventar za sve vrste proslava i događaja.</p>
        </motion.div>

        {/* KARTICA 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: "#111",
            padding: "25px",
            borderRadius: "16px",
            boxShadow: "0 0 15px rgba(255,255,255,0.05)",
          }}
        >
          <img
            src="/src/assets/usluga2.jpg"   // <-- OVDE ubaci svoju sliku
            alt="Event oprema"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          />
          <h3>Kompletna event oprema</h3>
          <p>Sve što vam je potrebno za profesionalan događaj na jednom mestu.</p>
        </motion.div>

        {/* KARTICA 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: "#111",
            padding: "25px",
            borderRadius: "16px",
            boxShadow: "0 0 15px rgba(255,255,255,0.05)",
          }}
        >
          <img
            src="/src/assets/usluga3.jpg"   // <-- OVDE ubaci svoju sliku
            alt="Dostava i montaža"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          />
          <h3>Dostava i montaža</h3>
          <p>Brza isporuka, profesionalna montaža i demontaža opreme.</p>
        </motion.div>
      </div>
    </section>
  );
};

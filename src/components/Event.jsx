import React from "react";
import { motion } from "framer-motion";

export const Event = () => {
  return (
    <section
      id="event"
      style={{
        padding: "80px 20px",
        backgroundColor: "#0c0c0c",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "36px", marginBottom: "40px" }}
      >
        Event organizacija
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
        {/* EVENT 1 */}
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
            src="/src/assets/event1.jpg"
            alt="Proslave i rođendani"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          />
          <h3>Proslave i rođendani</h3>
          <p>Kompletna organizacija privatnih i porodičnih proslava.</p>
        </motion.div>

        {/* EVENT 2 */}
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
            src="/src/assets/event2.jpg"
            alt="Korporativni eventi"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          />
          <h3>Korporativni eventi</h3>
          <p>Profesionalna organizacija poslovnih događaja i prezentacija.</p>
        </motion.div>

        {/* EVENT 3 */}
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
            src="/src/assets/event3.jpg"
            alt="Festivali i manifestacije"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          />
          <h3>Manifestacije i koncerti</h3>
          <p>Ozvučenje, rasveta i kompletna tehnička podrška.</p>
        </motion.div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { motion } from "framer-motion";

export const Reviews = () => {
  const [review, setReview] = useState("");
  const [reviewsList, setReviewsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() !== "") {
      setReviewsList([review, ...reviewsList]);
      setReview("");
    }
  };

  return (
    <section
      id="reviews"
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
        style={{ fontSize: "36px", marginBottom: "20px" }}
      >
        Utisci
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ marginBottom: "30px", opacity: 0.8 }}
      >
        Ovde možete ubaciti komentare i utiske klijenata.
      </motion.p>

      {/* FORMA */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          maxWidth: "700px",
          margin: "0 auto 40px auto",
        }}
      >
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Upišite svoj utisak ovde..."
          rows={4}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #333",
            backgroundColor: "#111",
            color: "#fff",
            resize: "none",
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "10px 25px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#FFD700",
            color: "#111",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e6c200")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FFD700")}
        >
          Pošalji
        </button>
      </motion.form>

      {/* LISTA UTISAKA */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {reviewsList.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ gridColumn: "1/-1", opacity: 0.7 }}
          >
            Još nema utisaka.
          </motion.p>
        ) : (
          reviewsList.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: "#111",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 0 15px rgba(255,255,255,0.05)",
                color: "#fff",
              }}
            >
              {r}
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

import React from "react";
import deliveryImg from "../assets/delivery.jpg"; // dodaj svoju sliku

export const Delivery = () => {
  return (
    <section
      id="delivery"
      style={{
        padding: "50px 20px",
        backgroundColor: "#111",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2>Dostava</h2>
      <img
        src={deliveryImg}
        alt="Dostava"
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          borderRadius: "12px",
          margin: "20px 0",
        }}
      />
      <p>
        Dostava se vrši na teritoriji Niša i okoline (do 30km). U cenu je uračunata montaža i demontaža stolova. Za dalja mesta posebni upit i dogovor.
      </p>
      <p>Kontakt: 065/30-70-330</p>
      <p>Vaš, PM EVENT</p>
    </section>
  );
};

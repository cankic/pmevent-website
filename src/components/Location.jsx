import React from "react";
import locationImg from "../assets/location.jpg"; // proveri da li je fajl tu

export const Location = () => {
  return (
    <section id="location" style={{ padding: "80px 20px", backgroundColor: "#111", textAlign: "center", color: "#fff" }}>
      <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>Lokacija</h2>
      <img src={locationImg} alt="Lokacija" style={{ width: "100%", maxWidth: "800px", borderRadius: "16px", marginBottom: "30px" }} />
      <p>Nalazimo se na teritoriji grada Niša, uključujući okolinu do 30km. Za dalja mesta poseban upit i dogovor.</p>
      <p>Vaš, PM EVENT</p>
    </section>
  );
};

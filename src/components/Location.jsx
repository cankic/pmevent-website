import React from "react";
import locationImg from "../assets/location.jpg"; // ovo je ok ako fajl postoji

export const Location = () => {
  return (
    <section
      id="location"
      style={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#0f0f0f",
        color: "#fff",
      }}
    >
      <h2>Lokacija</h2>
      <img
        src={locationImg} // obavezno koristimo varijablu iz importa
        alt="Lokacija PM EVENT"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "12px", margin: "20px 0" }}
      />
      <p>
        Nalazimo se na teritoriji grada Niša te našu opremu možete iznajmiti na toj lokaciji uključujući i okolinu do 30km. Za dalja mesta poseban upit i dogovor.
      </p>
      <p>Vaš, PM EVENT</p>
    </section>
  );
};

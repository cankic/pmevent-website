// App.jsx
import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Delivery } from "./components/Delivery";
import { Equipment } from "./components/Equipment";
import { Location } from "./components/Location";
import { Reviews } from "./components/Reviews";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Delivery />
      <Equipment />
      <Location />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;

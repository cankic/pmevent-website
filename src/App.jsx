import React from "react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Delivery } from "./components/Delivery";
import { Equipment } from "./components/Equipment";
import { Location } from "./components/Location";

function App() {
  return (
    <>
      <Hero />
      <Services />
      <Delivery />
      <Equipment />
      <Location />
    </>
  );
}

export default App;

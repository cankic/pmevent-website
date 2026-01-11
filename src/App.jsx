import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Event } from "./components/Event";
import { Delivery } from "./components/Delivery";
import { Equipment } from "./components/Equipment";
import { Reviews } from "./components/Reviews";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Event />
      <Delivery />
      <Equipment />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
};

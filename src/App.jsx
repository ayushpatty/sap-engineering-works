import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Industries from "./components/Industries";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import CTA from "./components/CTA";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <Industries />
      <Gallery />
      <Stats />
      <CTA />
      <Contact />
      <WhatsApp />
      <Footer />
    </>
  );
}

export default App;
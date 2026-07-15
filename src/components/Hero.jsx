import { FaArrowRight, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-container">
  <div className="hero-content">

        <span className="hero-tag">
          ESTABLISHED 2023 • HYDERABAD • PAN INDIA
        </span>

        <h1>
          Engineering Excellence
          <br />
          Built for Modern Industries
        </h1>

        <p>
          Manufacturers of Industrial Pipe Fittings, Flanges,
          Steel Fabrication, Pipe Spooling, IBR & Non-IBR Components
          and Custom Engineering Solutions for projects across India.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="btn btn-primary">
            Get Free Quote
            <FaArrowRight />
          </a>

          <a
            href="https://wa.me/918919923633"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>

        <div className="hero-features">

          <span><FaCheckCircle /> IBR & Non-IBR</span>

          <span><FaCheckCircle /> Pan India Supply</span>

          <span><FaCheckCircle /> Steel Fabrication</span>

          <span><FaCheckCircle /> Custom Manufacturing</span>

        </div>

            </div>
    </div>
    </section>
  );
}

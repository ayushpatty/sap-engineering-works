import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* CTA SECTION */}

      <section className="cta-section">

        <div className="container cta-container">

          <h2>
            Ready to Discuss Your Next Project?
          </h2>

          <p>
            Precision Pipe Fittings • Steel Fabrication • Pipe Spooling •
            Engineering Solutions
          </p>

          <div className="cta-buttons">

            <a
              href="#contact"
              className="btn btn-primary"
            >
              Request Quote
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

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="container footer-grid">

          <div>

            <h3>SAP Engineering Works</h3>

            <p>
              Manufacturers of premium Industrial Pipe Fittings,
              Flanges, Steel Fabrication, Pipe Spooling and
              Engineering Solutions.
            </p>

          </div>

          <div>

            <h4>Quick Links</h4>

            <ul>

              <li><a href="#about">About</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#products">Products</a></li>

              <li><a href="#gallery">Gallery</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          <div>

            <h4>Contact</h4>

            <p>
              <FaMapMarkerAlt /> Hyderabad, Telangana
            </p>

            <p>
              <FaPhoneAlt /> +91 8919923633
            </p>

            <p>
              <FaEnvelope /> pppatnaikt3s@gmail.com
            </p>

          </div>

        </div>

        <div className="footer-bottom">

          © 2026 SAP Engineering Works. All Rights Reserved.

        </div>

      </footer>
    </>
  );
}
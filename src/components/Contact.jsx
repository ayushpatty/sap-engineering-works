import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <h2 className="section-title">
          Get In Touch
        </h2>

        <p className="section-subtitle">
          We'd love to discuss your industrial engineering requirements.
        </p>

        <div className="contact-grid">

          <div className="contact-card">

            <div className="contact-item">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <p>+91 8919923633</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>pppatnaikt3s@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Address</h4>
                <p>
                  Road No. 3<br />
                  Alkapuri Colony<br />
                  Kothapet<br />
                  Hyderabad, Telangana - 500035
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaClock />
              <div>
                <h4>Working Hours</h4>
                <p>
                  Monday - Saturday
                  <br />
                  10:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="contact-buttons">
              <a
                href="tel:+918919923633"
                className="btn btn-outline"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918919923633"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>

          </div>

          <div className="map-card">
            <iframe
              title="SAP Engineering Works"
              src="https://www.google.com/maps?q=Kothapet,Hyderabad&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
}
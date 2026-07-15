import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <h2 className="section-title">Get In Touch</h2>

        <p className="section-subtitle">
          We'd love to discuss your industrial engineering requirements.
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <FaPhoneAlt />
            <h3>Phone</h3>
            <p>+91 8919923633</p>
          </div>

          <div className="contact-card">
            <FaEnvelope />
            <h3>Email</h3>
            <p>pppatnaikt3s@gmail.com</p>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />
            <h3>Address</h3>
            <p>
              Road No.3<br />
              Alkapuri Colony<br />
              Kothapet<br />
              Hyderabad, Telangana - 500035
            </p>
          </div>

          <div className="contact-card">
            <FaClock />
            <h3>Working Hours</h3>
            <p>
              Monday – Saturday
              <br />
              10:00 AM – 6:00 PM
            </p>
          </div>

        </div>

        {/* Google Map */}

        <div className="map-container">

          <iframe
            title="SAP Engineering Works"
            src="https://www.google.com/maps?q=Kothapet+Hyderabad&output=embed"
            width="100%"
            height="420"
            style={{
              border: 0,
              borderRadius: "18px",
            }}
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}
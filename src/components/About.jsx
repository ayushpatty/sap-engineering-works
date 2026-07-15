import aboutImage from "../assets/images/product17.png";
import {
  FaCheckCircle,
  FaIndustry,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <div className="container">

        <div className="about-grid">

          <div className="about-content">

            <span className="about-tag">
              ABOUT SAP ENGINEERING WORKS
            </span>

            <h2>
              Engineering Excellence
              <br />
              Built on Quality
            </h2>

            <p>
              SAP Engineering Works is a trusted manufacturer
              and supplier of Industrial Pipe Fittings,
              Flanges, Steel Fabrication, Pipe Spooling,
              IBR & Non-IBR Components and Custom Engineering
              Solutions.
            </p>

            <p>
              We combine precision manufacturing,
              experienced workmanship and timely delivery
              to provide reliable engineering products for
              industries across India.
            </p>

            <div className="about-features">

              <div>
                <FaCheckCircle />
                ISO Quality Standards
              </div>

              <div>
                <FaCheckCircle />
                Pan India Supply
              </div>

              <div>
                <FaCheckCircle />
                Custom Manufacturing
              </div>

              <div>
                <FaCheckCircle />
                On-Time Delivery
              </div>

            </div>

            <div className="about-stats">

              <div className="stat-box">
                <FaUsers />
                <h3>40+</h3>
                <p>Employees</p>
              </div>

              <div className="stat-box">
                <FaCalendarAlt />
                <h3>2023</h3>
                <p>Established</p>
              </div>

              <div className="stat-box">
                <FaIndustry />
                <h3>India</h3>
                <p>Supply Network</p>
              </div>

              <div className="stat-box">
                <FaCheckCircle />
                <h3>100%</h3>
                <p>Quality Focused</p>
              </div>

            </div>

          </div>

          <div className="about-image">

            <img
              src={aboutImage}
              alt="SAP Engineering Works Factory"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
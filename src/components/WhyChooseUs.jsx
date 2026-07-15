import {
  FaAward,
  FaTruck,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaAward />,
    title: "Quality Assured",
    desc: "Premium quality industrial piping products manufactured with precision and strict quality control.",
  },
  {
    icon: <FaTruck />,
    title: "Pan India Supply",
    desc: "Reliable logistics and timely delivery supporting projects across India.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    desc: "Efficient production planning ensures every order reaches you on schedule.",
  },
  {
    icon: <FaUsers />,
    title: "Experienced Team",
    desc: "Dedicated engineers and fabrication professionals committed to excellence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why">

      <div className="container">

        <h2 className="section-title">
          Why Choose SAP Engineering Works
        </h2>

        <p className="section-subtitle">
          Trusted by industries for quality, reliability and engineering excellence.
        </p>

        <div className="choose-grid">

          {reasons.map((item, index) => (

            <div className="choose-card" key={index}>

              <div className="choose-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
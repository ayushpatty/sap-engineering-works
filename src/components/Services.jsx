import {
  FaIndustry,
  FaTools,
  FaFire,
  FaCogs,
  FaHardHat,
  FaDraftingCompass,
} from "react-icons/fa";

const services = [
  {
    icon: <FaIndustry />,
    title: "IBR & Non-IBR Pipe Fittings",
    desc: "Precision engineered industrial pipe fittings manufactured to the highest industry standards.",
  },
  {
    icon: <FaTools />,
    title: "Steel Fabrication",
    desc: "Custom steel fabrication for industrial, structural and process applications.",
  },
  {
    icon: <FaFire />,
    title: "Fire Fighting Systems",
    desc: "Reliable piping and fabrication solutions for industrial fire protection systems.",
  },
  {
    icon: <FaCogs />,
    title: "Pipe Spooling",
    desc: "Workshop fabricated pipe spools ensuring faster installation and superior accuracy.",
  },
  {
    icon: <FaHardHat />,
    title: "Industrial Maintenance",
    desc: "Preventive and corrective maintenance support for industrial piping infrastructure.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Custom Engineering",
    desc: "Manufacturing solutions built exactly to customer drawings and project specifications.",
  },
];

export default function Services() {
  return (
    <section id="services">

      <div className="container">

        <h2 className="section-title">
          Our Services
        </h2>

        <p className="section-subtitle">
          Complete industrial engineering and fabrication solutions.
        </p>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
import {
  FaIndustry,
  FaFire,
  FaTools,
  FaCogs,
  FaHardHat,
  FaProjectDiagram,
} from "react-icons/fa";

const services = [
  {
    icon: <FaIndustry />,
    title: "IBR & Non-IBR Pipe Fittings",
    desc: "Precision engineered industrial pipe fittings manufactured to industry standards.",
  },
  {
    icon: <FaTools />,
    title: "Steel Fabrication",
    desc: "Custom fabrication for industrial, structural and process applications.",
  },
  {
    icon: <FaFire />,
    title: "Fire Fighting Systems",
    desc: "Reliable fabrication and piping solutions for fire protection systems.",
  },
  {
    icon: <FaCogs />,
    title: "Pipe Spooling",
    desc: "Workshop fabricated pipe spools for faster and accurate site installation.",
  },
  {
    icon: <FaHardHat />,
    title: "Industrial Maintenance",
    desc: "Maintenance support for piping systems and industrial infrastructure.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Custom Engineering",
    desc: "Manufacturing solutions designed according to customer drawings and specifications.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">

        <h2 className="section-title">Our Services</h2>

        <p className="section-subtitle">
          Complete industrial engineering and fabrication solutions.
        </p>

        <div className="services-grid">

          {services.map((service) => (
            <div className="service-card" key={service.title}>

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
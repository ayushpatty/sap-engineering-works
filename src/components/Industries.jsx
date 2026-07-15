import {
  FaIndustry,
  FaBolt,
  FaOilCan,
  FaBuilding,
  FaWater,
  FaCogs,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaIndustry />,
    title: "Steel Plants",
    desc: "Precision piping and fabrication for steel manufacturing."
  },
  {
    icon: <FaBolt />,
    title: "Power Plants",
    desc: "Reliable industrial components for power generation."
  },
  {
    icon: <FaOilCan />,
    title: "Oil & Gas",
    desc: "High-performance fittings for demanding environments."
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Buildings",
    desc: "Engineering solutions for commercial infrastructure."
  },
  {
    icon: <FaWater />,
    title: "Water Treatment",
    desc: "Pipe systems for water and utility projects."
  },
  {
    icon: <FaCogs />,
    title: "Manufacturing",
    desc: "Custom fabrication for industrial production facilities."
  },
];

export default function Industries() {
  return (
    <section id="industries">
      <div className="container">

        <h2 className="section-title">Industries We Serve</h2>

        <p className="section-subtitle">
          Delivering dependable engineering solutions across multiple sectors.
        </p>

        <div className="industries-grid">
          {industries.map((item) => (
            <div className="industry-card" key={item.title}>

              <div className="industry-icon">
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
import {
  FaAward,
  FaTruck,
  FaClock,
  FaUsers
} from "react-icons/fa";

const data = [
  {
    icon: <FaAward />,
    title: "Quality Assured",
    text: "Premium quality industrial piping products manufactured with precision."
  },
  {
    icon: <FaTruck />,
    title: "Pan India Supply",
    text: "Reliable delivery network serving projects across India."
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    text: "Committed production schedules with timely dispatch."
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    text: "Experienced engineers and skilled fabrication professionals."
  }
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

<div className="services-grid">

{data.map((item)=>(
<div className="service-card" key={item.title}>

<div className="service-icon">
{item.icon}
</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>
))}

</div>

</div>

</section>

  );

}
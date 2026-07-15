import product1 from "../assets/images/product1.jpeg";
import product2 from "../assets/images/product2.jpeg";
import product3 from "../assets/images/product3.jpeg";
import product4 from "../assets/images/product4.jpeg";
import product5 from "../assets/images/product5.jpeg";
import product6 from "../assets/images/product6.jpeg";

const products = [
  {
    name: "Industrial Flanges",
    image: product1,
    desc: "High-quality forged and fabricated flanges.",
  },
  {
    name: "Pipe Elbows",
    image: product2,
    desc: "Precision elbows for industrial piping systems.",
  },
  {
    name: "Reducers",
    image: product3,
    desc: "Reliable reducers for seamless flow transition.",
  },
  {
    name: "Blind Flanges",
    image: product4,
    desc: "Strong sealing solutions for pressure systems.",
  },
  {
    name: "Pipe Fittings",
    image: product5,
    desc: "Complete range of industrial pipe fittings.",
  },
  {
    name: "Custom Fabrication",
    image: product6,
    desc: "Built according to your engineering drawings.",
  },
];

export default function Products() {
  return (
    <section id="products">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>

        <p className="section-subtitle">
          Precision manufactured industrial products for diverse applications.
        </p>

        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.name}>
              <img src={item.image} alt={item.name} />

              <div className="product-content">
                <h3>{item.name}</h3>

                <p>{item.desc}</p>

                <a href="#contact" className="btn btn-primary">
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
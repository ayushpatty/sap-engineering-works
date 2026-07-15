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
    desc: "High-quality forged and fabricated flanges for industrial applications.",
  },
  {
    name: "Pipe Elbows",
    image: product2,
    desc: "Precision manufactured elbows for industrial piping systems.",
  },
  {
    name: "Reducers",
    image: product3,
    desc: "Reliable reducers for seamless flow transition in pipelines.",
  },
  {
    name: "Blind Flanges",
    image: product4,
    desc: "Strong sealing solutions for high-pressure industrial systems.",
  },
  {
    name: "Pipe Fittings",
    image: product5,
    desc: "Complete range of industrial pipe fittings for multiple industries.",
  },
  {
    name: "Custom Fabrication",
    image: product6,
    desc: "Engineering solutions manufactured as per customer drawings.",
  },
];

export default function Products() {
  return (
    <section id="products">
      <div className="container">

        <h2 className="section-title">Featured Products</h2>

        <p className="section-subtitle">
          Precision engineered products built for industrial excellence.
        </p>

        <div className="product-grid">

          {products.map((product) => (

            <div className="product-card" key={product.name}>

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="product-content">

                <h3>{product.name}</h3>

                <p>{product.desc}</p>

                <a
                  href="#contact"
                  className="btn btn-primary"
                >
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
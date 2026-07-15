import f1 from "../assets/images/Factory1.jpeg";
import f2 from "../assets/images/Factory2.jpeg";
import f3 from "../assets/images/Factory3.jpeg";
import f4 from "../assets/images/Factory4.jpeg";
import f5 from "../assets/images/Factory5.jpeg";
import f6 from "../assets/images/Factory6.jpeg";

const images = [f1, f2, f3, f4, f5, f6];

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container">
        <h2 className="section-title">Factory Gallery</h2>

        <p className="section-subtitle">
          Inside SAP Engineering Works.
        </p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Factory ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
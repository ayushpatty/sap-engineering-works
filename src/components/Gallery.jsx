import { useState } from "react";

import factory1 from "../assets/images/Factory1.jpeg";
import factory2 from "../assets/images/Factory2.jpeg";
import factory3 from "../assets/images/Factory3.jpeg";
import factory4 from "../assets/images/Factory4.jpeg";
import factory5 from "../assets/images/Factory5.jpeg";
import factory6 from "../assets/images/Factory6.jpeg";

const gallery = [
  factory1,
  factory2,
  factory3,
  factory4,
  factory5,
  factory6,
];

export default function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery">

      <div className="container">

        <h2 className="section-title">
          Factory Gallery
        </h2>

        <p className="section-subtitle">
          Take a look inside our manufacturing facility and fabrication workshop.
        </p>

        <div className="gallery-grid">

          {gallery.map((img, index) => (

            <div
              key={index}
              className="gallery-card"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Factory ${index + 1}`}
                className="gallery-image"
              />
            </div>

          ))}

        </div>

      </div>

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <span className="close-btn">&times;</span>

          <img
            src={selectedImage}
            alt="Factory"
            className="lightbox-image"
          />

        </div>

      )}

    </section>
  );
}
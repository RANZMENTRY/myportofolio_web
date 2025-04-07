import React from "react";
import Marquee from "react-fast-marquee"; 
import "./memories.css"; // << sambungkan file css

const Memories = () => {
  const images = [
    "/pict1.jpeg",
    "/pict1.jpeg",
    "/pict1.jpeg",
    "/pict1.jpeg",
    "/pict1.jpeg",
    "/pict1.jpeg",
    "/pict1.jpeg",
    "/pict1.jpeg",
    "/pict1.jpeg",
  ];

  return (
    <section id="memories-section" className="memories-section">
      <h2 className="memories-title">
        My <span className="highlight">Memories</span>
      </h2>

      <Marquee speed={50} gradient={false}>
        {images.map((imgSrc, index) => (
          <div key={index} className="memory-image-wrapper">
            <img 
              src={imgSrc} 
              alt={`memory-${index}`} 
              className="memory-image"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Memories;

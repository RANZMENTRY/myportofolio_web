import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./sertif.css";

const sertifData = [
  {
    id: 1,
    image: "/sertif1.jpg",
    title: "Intro to Software Engineering",
    subtitle: "REVOU INDONESIA",
    date: "3 Desember 2024",
  },
  {
    id: 2,
    image: "/sertif2.jpg",
    title: "Frontend Developer Bootcamp",
    subtitle: "Code Academy",
    date: "10 Januari 2025",
  },
  {
    id: 3,
    image: "/sertif3.jpg",
    title: "Data Analysis Course",
    subtitle: "DataCamp",
    date: "15 Februari 2025",
  },
  {
    id: 4,
    image: "/sertif4.jpg",
    title: "UI/UX Designer Certificate",
    subtitle: "Google",
    date: "25 Maret 2025",
  },
];

const Sertif = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const swiperRef = useRef(null);

  const handleView = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
    setSelectedImage("");
  };

  return (
    <div id="sertificate-section" className="sertif-section">
      <h2 className="sertif-title">
        My <span className="span">Sertificate</span>
      </h2>

      <div className="sertif-container">
        <button onClick={() => swiperRef.current.slidePrev()} className="arrow left">&#9664;</button>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[EffectCoverflow, Navigation]}
          className="sertif-swiper"
        >
          {sertifData.map((item) => (
            <SwiperSlide key={item.id} className="sertif-slide">
              <div className="card">
                <img src={item.image} alt={item.title} className="card-img" />
                <h3 className="card-title">{item.title}</h3>
                <h4 className="card-subtitle">{item.subtitle}</h4>
                <p className="card-date">{item.date}</p>
                <button className="view-button" onClick={() => handleView(item.image)}>
                  View
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button onClick={() => swiperRef.current.slideNext()} className="arrow right">&#9654;</button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
            <img src={selectedImage} alt="Certificate" className="popup-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sertif;

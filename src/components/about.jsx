import React from "react";
import "./about.css";
import myPhoto from "../assets/image/human2.png"; // kamu sesuaikan path gambar kamu yaa

function About() {
  return (
    <section className="about-section" id="about-section">
      <div className="container-about">
        <div className="about-image">
          <img src={myPhoto} alt="About Me" />
        </div>
        <div className="about-text">
          <h2>
            <span className="red">About</span><span className="white"> Me</span>
          </h2>
          <p>
            Halo! Aku adalah seorang pengembang web yang penuh semangat dalam menciptakan karya kreatif dan fungsional.
            (ini nanti kamu ganti sesuai deskripsi kamu ya!)
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

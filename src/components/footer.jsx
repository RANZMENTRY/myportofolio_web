import React from "react";
import "./Footer.css";
import Logo from "../assets/image/logo.png";
import FooterBg from "../assets/image/me.png"; // tambahin gambar background

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="footer-section"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="footer-content">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <h2 className="footer-title">RKRYSMENTARYS</h2>
        <p className="footer-subtitle">
          Thanks for stopping by! Let’s connect and create something amazing together
        </p>
      </div>
      <div className="footer-bottom">
        <p>© 2025 All rights reserved | by RKRYSMENTARYS</p>
        <div className="footer-links">
          <button onClick={scrollToTop}>Home</button>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Compliances</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

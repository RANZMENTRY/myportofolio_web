import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "../assets/image/logo.png";
import human from "../assets/image/human.png";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Biar langsung ngecek pas load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    

    <div className="home-section">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
  <a href="#home-section" onClick={(e) => handleLinkClick(e, "home-section")}>Home</a>
  <a href="#about-section" onClick={(e) => handleLinkClick(e, "about-section")}>About</a>
  <a href="#memories-section" onClick={(e) => handleLinkClick(e, "memories-section")}>Memories</a>
  
  <div className="all-menu">
    <button onClick={toggleMenu}>All ▸</button>
    {isOpen && (
      <div className="submenu">
        <a href="#skills-section" onClick={(e) => handleLinkClick(e, "skills-section")}>Skills </a>
        <a href="#certificate-section" onClick={(e) => handleLinkClick(e, "certificate-section")}>Certificate</a>
        <a href="#project-section" onClick={(e) => handleLinkClick(e, "project-section")}>My Project</a>
        <a href="#contact-section" onClick={(e) => handleLinkClick(e, "contact-section")}>Contact</a>
      </div>
    )}
  </div>
</div>

      </nav>

      {/* Main Content */}
      
      <div className="content" id="home-section">
        <div className="text">
          <h1>Welcome to my creative space!</h1>
          <h2>Hi, I'm <span>Ranika!</span></h2>
          <p>"Is not about possible and impossible I'm do it because I want to"</p>
          <p>Digital Artist | UI/UX Designer | Graphic Design | Front-End Developer</p>
        </div>
        <div className="image">
          <img src={human} alt="My Pict" />
        </div>
      </div>






    </div>
  );
}

export default Home;

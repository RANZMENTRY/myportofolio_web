import React, { useState } from "react";
import "./Project.css";

const projects = [
  { id: 1, title: "Project 1", img: "/img1.jpg", link: "#" },
  { id: 2, title: "Project 2", img: "/img2.jpg", link: "#" },
  { id: 3, title: "Project 3", img: "/img3.jpg", link: "#" },
  { id: 4, title: "Project 4", img: "/img4.jpg", link: "#" },
];

function ProjectSection() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("website");
  const [selectedImage, setSelectedImage] = useState(null); // <<< BUAT GAMBAR YANG DIKLIK

  const handleAllProjectClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null); // kalau modal utama ditutup, reset zoom
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleCloseImageZoom = () => {
    setSelectedImage(null);
  };

  return (
    <section id="project-section" className="project-section">
      <h2 className="section-title">
        My <span className="red-text">Project</span>
      </h2>

      <div className="project-container">
        <div className="project-cards">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.img} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <a href={project.link} className="view-button">
                View
              </a>
            </div>
          ))}
        </div>

        <div className="bottom-bar">
          <span className="left-text">My Projects</span>
          <button className="all-project-button" onClick={handleAllProjectClick}>
            All Project
          </button>
        </div>
      </div>

      {/* Modal Besar */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Project</h2>
              <button className="close-button" onClick={handleCloseModal}>✕</button>
            </div>
            <div className="modal-line" />

            <div className="modal-tabs">
              <button 
                className={`tab-button ${activeTab === "website" ? "active" : ""}`}
                onClick={() => setActiveTab("website")}
              >
                Website
              </button>
              <button 
                className={`tab-button ${activeTab === "gallery" ? "active" : ""}`}
                onClick={() => setActiveTab("gallery")}
              >
                Gallery
              </button>
            </div>

            <div className="modal-projects">
              {activeTab === "website" ? (
                <div className="project-cards">
                  {projects.map((project) => (
                    <div key={project.id} className="project-card">
                      <img src={project.img} alt={project.title} className="project-image" />
                      <h3 className="project-title">{project.title}</h3>
                      <a href={project.link} className="view-button">
                        View
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="gallery-grid">
                  {projects.map((project) => (
                    <div key={project.id} className="gallery-item">
                      <div 
                        className="image-container"
                        onClick={() => handleImageClick(project.img)}
                      >
                        <img src={project.img} alt={project.title} className="gallery-img" />
                        <div className="hover-overlay">
                          <span className="hover-title">{project.title}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Modal Zoom Image */}
          {selectedImage && (
            <div className="image-zoom-overlay" onClick={handleCloseImageZoom}>
              <div className="image-zoom-content">
                <img src={selectedImage} alt="Zoom" className="zoomed-image" />
                <button className="close-zoom-button" onClick={handleCloseImageZoom}>✕</button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default ProjectSection;

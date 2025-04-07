import React, { useState } from "react";
import "./contact.css";


function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    window.location.href = `mailto:krismantarirani17@gmail.com?subject=Contact from ${formData.name}&body=${formData.message} (${formData.email})`;
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="top-banner">
        "Is not about possible and Impossible I'm do it because I want to"
      </div>

      <div className="contact-container">
        {/* Kiri */}
        <div className="form-box">
          <h4><span className="highlight">Contact</span> Me</h4>
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              value={formData.name} 
              onChange={handleChange} 
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email address" 
              value={formData.email} 
              onChange={handleChange} 
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <textarea 
              name="message" 
              placeholder="Enter your message" 
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
            <button type="submit">SUBMIT</button>
          </form>
        </div>

        {/* Kanan */}
        <div className="info-box">
          <h3>Ada saran atau pertanyaan?</h3>
          <p>Jangan ragu untuk menghubungi saya! Saya selalu terbuka untuk diskusi, kolaborasi, atau sekedar berbagi ide keren.</p>

          <div className="contact-icons">
            <div className="icon-link">
              <img src="/email-icon.png" alt="Email" />
              <div>
                <strong>Email</strong>
                <p>krismantarirani17@gmail.com</p>
              </div>
            </div>

            <div className="icon-link" onClick={() => window.open("https://github.com/Kranzz", "_blank")}>
              <img src="/github-icon.png" alt="GitHub" />
              <div>
                <strong>GitHub</strong>
                <p>Kranzz</p>
              </div>
            </div>

            <div className="icon-link" onClick={() => window.open("https://instagram.com/Kranzz", "_blank")}>
              <img src="/instagram-icon.png" alt="Instagram" />
              <div>
                <strong>Instagram</strong>
                <p>Kranzz</p>
              </div>
            </div>

            <div className="icon-link" onClick={() => window.open("https://linkedin.com/in/krysmentarysl728", "_blank")}>
              <img src="/linkedin-icon.png" alt="LinkedIn" />
              <div>
                <strong>LinkedIn</strong>
                <p>krysmentarysl728</p>
              </div>
            </div>

            <div className="icon-link">
              <img src="/phone-icon.png" alt="Phone" />
              <div>
                <strong>Telp</strong>
                <p>62+82258266128</p>
              </div>
            </div>

            <div className="icon-link" onClick={() => window.open("https://tiktok.com/@kranzz17", "_blank")}>
              <img src="/tiktok-icon.png" alt="Tiktok" />
              <div>
                <strong>Tiktok</strong>
                <p>Kranzz17</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

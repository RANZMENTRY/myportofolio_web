import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from './components/About';
import Memories from "./components/memories";
import Skills from "./components/skill";
import Sertif from "./components/sertif";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";

 // <<< tambahin import project

function App() {
  return (
    <div>
      <Home />
      <About />
      <Memories />
      <Skills />
      <Sertif />
      <Project /> {/* <<< tambahkan Project di sini */}
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

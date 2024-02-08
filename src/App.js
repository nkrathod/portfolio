import React from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Project } from "./components/project";
import "./App.css";
import { Contact } from "./components/contact";
import { Modal } from "./components/modal";

function App() {
  
  return (
    <div>
      {/* header */}
      <div id="header">
        <div className="container">
          <Navbar />
          <Home />
        </div>
      </div>
      <i className="fa-solid fa-circle-up" onClick={() => window.location.href = '#'}></i>
      <i className="fa-regular fa-circle-up" onClick={() => window.location.href = '#'}></i>
      {/* about */}
      <About />
      {/* services */}
      <Services />
      {/* project */}
      <Project />
      {/* contact */}
      <Contact />
    </div>
  );
}

export default App;

import React from "react";

function NavbarComponent() {
  const closemenu = () => {};
  const openmenu = () => {};

  return (
    <nav>
      <h1 className="logo">
        <span style={{color:"#ff004f"}}>Port</span>folio
      </h1>
      <ul id="sidemenu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <i className="fa-solid fa-xmark" onClick={() => closemenu()}></i>
      </ul>
      <i className="fa-sharp fa-solid fa-bars" onClick={() => openmenu()}></i>
    </nav>
  );
}

export const Navbar = React.memo(NavbarComponent);

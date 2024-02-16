import React from "react";
import ResumePDF from "../assets/Nitesh_Software_Dev.pdf";

function HomeComponent() {
  return (
    <div className="header-text">
      <p>
        ME<span>R</span>N Stack Developer
      </p>
      <h1>
        Hi, I'm <span>Nitesh</span>
        <br />
        Rathod From Pune, <span>India</span>
      </h1>
      <a
        href={ResumePDF}
        rel="noreferrer"
        target="_blank"
        download
        className="more-btn btn2"
      >
        Download CV <i className="fa-solid fa-cloud-arrow-down"></i>
      </a>
    </div>
  );
}

export const Home = React.memo(HomeComponent);

import React from "react";

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
      <a href="Nitesh_Software_Engineer.pdf" download className="more-btn btn2">
        Download CV <i className="fa-solid fa-cloud-arrow-down"></i>
      </a>
    </div>
  );
}

export const Home = React.memo(HomeComponent);

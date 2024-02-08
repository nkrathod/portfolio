import React, { useState } from "react";
import ProfilePic from "../assets/ProfilePic.JPG";

function AboutComponent() {
  const [content, setContent] = useState("skills");

  let tabLinks = document.getElementsByClassName("tab-links");
  const openTab = (event, tabName) => {
    for (let tabLink of tabLinks) {
      tabLink.classList.remove("active-links");
    }
    event.currentTarget.classList.add("active-links");
    setContent(tabName);
  }

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={ProfilePic} alt="Nitesh Rathod" />
            {/* <img src="assets/sitbg1.png" alt="Nitesh Rathod"> */}
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">
              About <span>Me</span>
            </h1>
            <p>
              I am Nitesh Rathod. I have 4+ years of experience in Web
              development using React, Redux, JavaScript, TypeScript, Node JS,
              Express JS, MongoDB, Material UI, Bootstrap, Git and AWS. I have
              worked in different domains such as Retail, Ecommerce, EdTech,
              Social and Insurance.
            </p>
            <div className="tab-titles">
              <p
                className="tab-links active-links"
                onClick={(e) => openTab(e, "skills")}
              >
                Skills
              </p>
              <p
                className="tab-links"
                onClick={(e) => openTab(e, "experience")}
              >
                Experience
              </p>
              <p className="tab-links" onClick={(e) => openTab(e, "education")}>
                Education
              </p>
            </div>
            {content === "skills" && (
              <div className="tab-contents active-tab" id="skills">
                <ul>
                  <li>
                    <span>
                      <b>React</b>
                    </span>
                    <br />
                    Developed web application using React JS
                  </li>
                  <li>
                    <span>
                      <b>Redux</b>
                    </span>
                    <br />
                    JavaScript library for managing and centralizing application
                    state.
                  </li>
                  <li>
                    <span>
                      <b>JavaScript</b>
                    </span>
                    <br />
                    Developed web application
                  </li>
                  <li>
                    <span>
                      <b>Node</b>
                    </span>
                    <br />
                    Building Restful APIs using Node js, Express js and AWS API
                    Gateway.
                  </li>
                  <li>
                    <span>
                      <b>AWS</b>
                    </span>
                    <br />
                    Developed serverless application using Node and AWS Lambda.
                  </li>
                </ul>
              </div>
            )}
            {content === "experience" && (
              <div className="tab-contents" id="experience">
                <ul>
                  <li>
                    <span>
                      <b>Accenture</b> ( Jan 2022 - Current )
                    </span>
                    <br />
                    Custom Software Engineering Senior Analyst
                  </li>
                  <li>
                    <span>
                      <b>Randstad Technologies</b> ( Jun 2022- Dec 22 )
                    </span>
                    <br />
                    Senior Software Developer
                  </li>
                  <li>
                    <span>
                      <b>K12 Techno Services Pvt. Ltd</b> ( Jan 2021- Jun 22 )
                    </span>
                    <br />
                    Senior Software Developer
                  </li>
                  <li>
                    <span>
                      <b>AdroitCoders</b> ( Jun 2020 - Jan 2021 )
                    </span>
                    <br />
                    Software Developer
                  </li>
                  <li>
                    <span>
                      <b>Nvidia</b> ( Dec 2017 - Jun 2019 )
                    </span>
                    <br />
                    Process Executive
                  </li>
                </ul>
              </div>
            )}
            {content === "education" && (
              <div className="tab-contents" id="education">
                <ul>
                  <li>
                    <span>
                      <b>VPKBIET</b>, Baramati
                    </span>
                    <br />
                    BE in Computer Engineering
                  </li>
                  <li>
                    <span>
                      <b>HSC</b>, Chhatrapati Sambhaji Nagar
                    </span>
                    <br />
                    Science
                  </li>
                  <li>
                    <span>
                      <b>SSC</b>, Chhatrapati Sambhaji Nagar
                    </span>
                    <br />
                    Marathi medium
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const About = React.memo(AboutComponent);

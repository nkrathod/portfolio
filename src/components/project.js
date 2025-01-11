import React from "react";
import Grid from "@mui/material/Grid";
import WealthyAffiliateImg from "../assets/WealthyAffiliate.webp";
import aolImg from "../assets/aol.webp";
import letseduvateImg from "../assets/letseduvate.png";
import sparkleboxImg from "../assets/sparklebox.jpg";

const myProject = [
  {
    id: 1,
    title: "Affiliate Marketing Web app",
    description:
      "The app connect you the talented people around the world. Download it from play store.",
    url: "https://my.wealthyaffiliate.com/home",
    imageUrl: WealthyAffiliateImg,
  },
  {
    id: 2,
    title: "Lets Eduvate App",
    description:
      "Eduvate is a school management software providing integrated Curriculum for Schools, tools and resources for teachers, and classroom managment solutions.",
    url: "https://letseduvate.com/",
    imageUrl: letseduvateImg,
  },
  {
    id: 3,
    title: "Always On Learning",
    description: "Always On Learning is the best virtual school in India.",
    url: "https://alwaysonlearning.com/",
    imageUrl: aolImg,
  },
  {
    id: 4,
    title: "Sparkle box Web app",
    description:
      "It consists of an activity-based curriculum for your children between the age of 2 - 6 yrs.",
    url: "https://sparklebox.co.in/",
    imageUrl: sparkleboxImg,
  },
];
function ProjectComponent() {
  const [project, setProject] = React.useState(3);

  const showLess = () => {
    setProject(3);
  };
  const showMore = () => {
    setProject(4);
  };

  return (
    <div id="project">
      <div className="container">
        <h1 className="sub-title" style={{ marginBottom: "20px" }}>
          My <span>Project</span>
        </h1>
        <Grid container spacing={2} className="work-list">
          {myProject.slice(0, project).map((project, i) => (
            <Grid item xs={12} md={4} key={i}>
              <div className="work">
                <img src={project.imageUrl} alt={project.title} />
                <div className="layer">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <i className="fa-sharp fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        {project === 3 ? (
          <button className="more-btn" onClick={() => showMore()}>
            Show more
          </button>
        ) : (
          <button className="more-btn" onClick={() => showLess()}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export const Project = React.memo(ProjectComponent);

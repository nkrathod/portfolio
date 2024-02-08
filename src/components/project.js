import React from "react";

function ProjectComponent() {
  return (
    <div id="project">
      <div className="container">
        <h1 className="sub-title">
          My <span>Project</span>
        </h1>
        <div className="work-list" id="work-list">
          <div className="work">
            <img src="assets/work_1.jpg" />
            <div className="layer">
              <h3>Affiliate Marketing Web app</h3>
              <p>
                The app connect you the talented people around the world.
                Download it from play store
              </p>
              <a href="https://my.wealthyaffiliate.com/home" target="_blank">
                <i className="fa-sharp fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="https://alwaysonlearning.com/wp-content/uploads/2022/10/cropped-cropped-AOL-FINAL_-jpg.png" />
            <div className="layer">
              <h3>Always On Learning</h3>
              <p>Always On Learning is the best virtual school in India</p>
              <a href="https://alwaysonlearning.com/">
                <i className="fa-sharp fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="https://erp.letseduvate.com/static/media/logo.56aee486.png" />
            <div className="layer">
              <h3>Lets Eduvate App</h3>
              <p>
                Eduvate is a school management software providing integrated
                Curriculum for Schools, tools and resources for teachers, and
                classroom managment solutions.
              </p>
              <a href="https://erp.letseduvate.com/" target="_blank">
                <i className="fa-sharp fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <button className="more-btn" onclick="showMore()" id="show_more">
          Show more
        </button>
        <button className="more-btn" onclick="showLess()" id="show_less">
          Show Less
        </button>
      </div>
    </div>
  );
}

export const Project = React.memo(ProjectComponent);

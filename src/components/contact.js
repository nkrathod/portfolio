import React from "react";

function ContactComponent() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">
              Contact <span>Me</span>
            </h1>
            <p>
              <i className="fa-solid fa-envelope"></i>
              <span className="tip">
                Email Id
                <span className="tooltiptext" id="tooltip">
                  Email Id copied
                </span>
              </span>
              <h6
                className="tooltip"
                title="Copy Email Id"
                id="emailId"
                onClick={() => console.log("copyText('emailId')")}
              >
                nkrsoft.tech@gmail.com
              </h6>
            </p>
            <p>
              <i className="fa-solid fa-mobile-screen-button"></i>
              <span className="tip">
                Mobile No.
                <span className="tooltiptext" id="tooltip1">
                  Mobile no copied
                </span>
              </span>
              <h6
                className="tooltip"
                title="Copy Mobile no"
                id="mobileNo"
                onClick={() => console.log("copyText('mobileNo')")}
              >
                +91 8007800858
              </h6>
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/nitesh-rathod-8841b09b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/NiteshRathod007" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/nitesh.rathod.5076"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/niteshkumar_rathod/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/nkrathod" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <a
              href="Nitesh_Software_Engineer.pdf"
              download
              className="more-btn btn2"
            >
              Download CV
            </a>
          </div>
          <div className="contact-rigth">
            <form name="submit-to-google-sheet">
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Enter Your Email Id"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Enter Your Message"
              ></textarea>
              <span id="msg"></span>
              <button type="submit" className="more-btn btn2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Contact = React.memo(ContactComponent);

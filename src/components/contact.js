import React, { useState } from "react";
import ResumePDF from "../assets/Nitesh_Software_Dev.pdf";
import Loader from "./loader";

function ContactComponent() {
  const [resMsg, setResMsg] = useState("");
  const [resMsgClr, setResMsgClr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resumeURL =
    "https://www.overleaf.com/download/project/5c43268e45b91847469e5a7d/build/19441b2f40f-ee328c8b03797c0e/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-n2d-c-f-kd9c&enable_pdf_caching=true&popupDownload=true";

  const handleDownload = () => {
    // Simulate a click on an anchor element to trigger the download
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "Nitesh Rathod Resume.pdf"; // This is the file name to save as
    link.click();
  };

  const handleSubmit = async () => {
    setIsLoading(true)
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzMJxEdpNVXE6OO0SRV1qmZNLglxuCrhiS8HrQ4jJwWXnkpdN4dxDKWJ3trjz94tSrjpA/exec";
    const form = document.forms["submit-to-google-sheet"];

    await fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        setResMsgClr("#61b752");
        setResMsg(
          "Message sent successfully..! Thank you for contacting me..!"
        );
        setIsLoading(false);
        setTimeout(() => {
          setResMsg("");
        }, 5000);
        form.reset();
      })
      .catch((error) => {
        setResMsgClr("#ff004f");
        setResMsg("Something went wrong try again later..!");
        setTimeout(() => {
          setResMsg("");
        }, 5000);
      });
  };

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
              href={ResumePDF}
              download
              className="more-btn btn2"
            >
              Download CV
            </a>
            {/* <button onClick={handleDownload} className="more-btn btn2">
              Download CV <i className="fa-solid fa-cloud-arrow-down"></i>
            </button> */}
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
              {isLoading && (<Loader />)}
              {resMsg && (
                <span id="msg" style={{ color: resMsgClr }}>
                  {resMsg}
                </span>
              )}
              <button
                type="button"
                onClick={handleSubmit}
                className="more-btn btn2"
              >
                {isLoading ? 'Loading ...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Contact = React.memo(ContactComponent);

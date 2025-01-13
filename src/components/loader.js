import React from "react";
import "./loader.css";
import nIcon from "../assets/icon.png"

const Loader = () => {
  return (
    <div class="card">
      <div class="loader">
        <div>
            <img src={nIcon} alt="nlogo" className="nlogo"/>
        </div>
        <div class="bounce"></div>
      </div>
    </div>
  );
};
export default Loader;

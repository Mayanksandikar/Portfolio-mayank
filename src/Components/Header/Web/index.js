import React from "react";
import "./Web.css";
const Web = () => {
  return (
    <div className="web"> 
      <div className="web-option">
        <a href="#project">
            Project
        </a>
      </div>
      <div className="web-option">
        <a href="#skill">Skill</a>
      </div>
      <div className="web-option">
        <a href="#aboutme">Aboutme</a>
      </div>
      <div className="web-option">
        <a href="#contact">Contact </a>
      </div>
    </div>
  );
};

export default Web;

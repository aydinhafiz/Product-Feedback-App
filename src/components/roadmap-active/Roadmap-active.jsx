import React from "react";
import "./roadmap-active.css";
////////////IMAGES/////////////////////////////////////////////////
import leftArrow from "../assets/shared/icon-arrow-left.svg";
import upArrow from "../assets/shared/icon-arrow-up.svg";
import iconPlus from "../assets/shared/icon-plus.svg";
import comments from "../assets/shared/icon-comments.svg";
///////////////////////////////////////////////////////////////////
import { useNavigate } from "react-router-dom";

function RoadmapActive() {
  const navigate = useNavigate();
  return (
    <div className="roadmap-active">
      <div className="roadmap-header">
        <div className="roadmap-header-left-side">
          <button
            onClick={() => navigate(-1)}
            className="roadmap-active__go-back-button"
          >
            <img src={leftArrow} alt="leftArrow" /> Go Back
          </button>
          <h2 className="roadmap-title">Roadmap</h2>
        </div>

        <div className="right-side">
          <button className="add-feedback-button">
            <img src={iconPlus} alt="plus" /> Add Feedback
          </button>
        </div>
      </div>

      <div className="roadmap-list">
        <div className="roadmap-content-bar-planned">
          <h3 className="roadmap-content-bar-title"> Planned (2)</h3>
          <h3 className="roadmap-content-bar-description">
            Ideas prioritized for research
          </h3>
          <div className="roadmap-box">
            <div className="box-color"></div>
            <span className="box-actuall-status">Planned</span>
            <h2 className="box-title">More comprehensive reports</h2>
            <p className="box-description">
              It would be great to see a more detailed breakdown of solutions.
            </p>
            <button className="box-category">Feature</button>
            <div className="box-likes-and-comments-info">
              <button className="box-likes-info">
                {" "}
                <img src={upArrow} alt="" /> 123{" "}
              </button>
              <span className="box-comments-info">
                {" "}
                <img src={comments} alt="" /> 2{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapActive;

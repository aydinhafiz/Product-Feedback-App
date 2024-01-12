import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEditFeedbackComponent } from "./edit-feedback.styles";
import "./edit-feedback.css";
//////////////IMAGES//////////////////////////////////////////////////
import leftArrow from "../assets/shared/icon-arrow-left.svg";

import editFeedback from "../assets/shared/icon-edit-feedback.svg";
import CustomSelect from "../../shared/custom-select";

function EditFeedback() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("Feature");
  const [status, setStatus] = useState("Planned");

  const categoryOptions = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  const statusOptions = ["Planned", "In-Progress", "Live", "Suggestions"];

  return (
    <SEditFeedbackComponent>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="go-back-button"
      >
        <img src={leftArrow} alt="" />
        Go Back
      </button>

      <div className="edit-feedback__content">
        <div className="edit-feedback-header">
          <h2 className="edit-feedback-title">
            Editing ‘Add a dark theme option’
          </h2>
          <img src={editFeedback} alt="editFeedback" />
        </div>

        <div className="edit-feedback-form" action="">
          <div className="edit-feedback-title-input">
            <div className="input-write-info">
              <h2 className="input-title">Feedback Title</h2>
              <span className="feedback-description">
                Add a short, descriptive headline
              </span>
            </div>
            <input
              type="text"
              placeholder="Please add a dark theme option"
              className="feedback-title-input"
            />
          </div>

          <CustomSelect
            value={category}
            handleChange={setCategory}
            label="Category"
            description="Choose a ategory for your feedback"
            options={categoryOptions}
          />
          <CustomSelect
            value={status}
            handleChange={setStatus}
            label="Update Status"
            description="Change feedback state"
            options={statusOptions}
          />

          <div className="edit-feedback-title-input">
            <div className="input-write-info">
              <h2 className="input-title">Feedback Detail</h2>
              <span className="feedback-description">
                Include any specific comments on what should be improved, added,
                etc.
              </span>
            </div>
            <textarea
              className="textarea-feedback"
              placeholder="It would help people with light sensitivities and who prefer dark mode."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
    </SEditFeedbackComponent>
  );
}

export default EditFeedback;

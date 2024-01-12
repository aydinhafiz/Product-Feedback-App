import React, { useContext, useState } from "react";
import {
  SAddDeedbackDetail,
  SAddFeedbackButton,
  SCancelButton,
  SCancelOrAddFeedback,
  SContentNewFeedback,
  SNewFeedbackTitle,
  SWriteFeedbackTitle,
} from "./add-feedback-form.styles";
import { AuthContext } from "../../contexts/auth-context";
import axios from "axios";
import CustomSelect from "../../shared/custom-select";
///////////////////// IMAGES////////////////////////////////////////////
import group from "../../components/assets/user-images/group4.png";

function AddFeedbackForm() {
  const { token, user } = useContext(AuthContext);

  const [category, setCategory] = useState("Feature");

  const [inputFeedbackTitle, setInputFeedbackTitle] = useState("");
  const [feedbackDetail, setFeedbackDetail] = useState("");

  const categoryOptions = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  async function addFeedback() {
    try {
      const config = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": `application/json`,
        },
      };
      const data = await axios.post(
        "https://tutorial-apis.herokuapp.com/api/v1/feedbacks",
        {
          title: inputFeedbackTitle,
          category,
          description: feedbackDetail,
          user: user,
        },
        config
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SContentNewFeedback>
      <img className="group-image" src={group} alt="" />
      <SNewFeedbackTitle>Create New Feedback</SNewFeedbackTitle>
      <SWriteFeedbackTitle>
        <span>Feedback Title</span>
        <p>Add a short, descriptive headline</p>
        <input
          value={inputFeedbackTitle}
          onChange={(event) => {
            setInputFeedbackTitle(event.target.value);
          }}
          className="feedback-title-input"
          type="text"
        />
      </SWriteFeedbackTitle>

      <CustomSelect
        value={category}
        handleChange={setCategory}
        label="Category"
        description="Choose a ategory for your feedback"
        options={categoryOptions}
      />

      <SAddDeedbackDetail>
        <span>Feedback Detail</span>
        <p>
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          value={feedbackDetail}
          onChange={(event) => {
            setFeedbackDetail(event.target.value);
          }}
          className="feedback-detail-textarea"
          type="text"
          name=""
          id=""
          cols=""
          rows=""
        ></textarea>
      </SAddDeedbackDetail>
      <SCancelOrAddFeedback>
        <SCancelButton>Cancel</SCancelButton>
        <SAddFeedbackButton onClick={addFeedback}>
          Add Feedback
        </SAddFeedbackButton>
      </SCancelOrAddFeedback>
    </SContentNewFeedback>
  );
}

export default AddFeedbackForm;

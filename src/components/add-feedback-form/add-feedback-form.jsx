import React, { useContext, useState } from "react";
import {
  SAddFeedbackDetail,
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
import { useFormik } from "formik";

function AddFeedbackForm() {
  const { token, user } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      title: "",
      detail: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
    <SContentNewFeedback onSubmit={formik.handleSubmit}>
      <img className="group-image" src={group} alt="" />
      <SNewFeedbackTitle>Create New Feedback</SNewFeedbackTitle>
      <SWriteFeedbackTitle>
        <span>Feedback Title</span>
        <p>Add a short, descriptive headline</p>
        <input
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
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

      <SAddFeedbackDetail>
        <span>Feedback Detail</span>
        <p>
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          value={formik.values.detail}
          onChange={formik.handleChange}
          className="feedback-detail-textarea"
          type="text"
          name="detail"
          id=""
          cols=""
          rows=""
        ></textarea>
      </SAddFeedbackDetail>
      <SCancelOrAddFeedback>
        <SCancelButton>Cancel</SCancelButton>
        <SAddFeedbackButton>Add Feedback</SAddFeedbackButton>
      </SCancelOrAddFeedback>
    </SContentNewFeedback>
  );
}

export default AddFeedbackForm;

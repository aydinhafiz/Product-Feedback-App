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
import { useForm } from "react-hook-form";
///////////////////// IMAGES////////////////////////////////////////////
import group from "../../components/assets/user-images/group4.png";

function AddFeedbackForm() {
  const { token, user } = useContext(AuthContext);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      title: "",
      category: "Feature",
      description: "",
    },  
  });

  const [category, setCategory] = useState("Feature");

  const [inputFeedbackTitle, setInputFeedbackTitle] = useState("");
  const [feedbackDetail, setFeedbackDetail] = useState("");

  const categoryOptions = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  async function addFeedback(feedbackData) {
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
          title: feedbackData.title,
          category,
          description: feedbackData.detail,
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
    <SContentNewFeedback onSubmit={handleSubmit(addFeedback)}>
      <img className="group-image" src={group} alt="" />
      <SNewFeedbackTitle>Create New Feedback</SNewFeedbackTitle>
      <SWriteFeedbackTitle>
        <span>Feedback Title</span>
        <p>Add a short, descriptive headline</p>
        <input
          name="title"
          className="feedback-title-input"
          type="text"
          {...register("title")}
        />
      </SWriteFeedbackTitle>

      <CustomSelect
        // value={category}
        // handleChange={setCategory}
        control={control}
        name="category"
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
          {...register("detail")}
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

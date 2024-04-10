import React, { useContext, useEffect, useRef, useState } from "react";
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
import SharedInput from "../../shared/shared-input";

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
  const nameInputRef = useRef(null);

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
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   if (nameInputRef.current) {
  //     nameInputRef.current.focus();
  //   }
  // });

  return (
    <SContentNewFeedback onSubmit={handleSubmit(addFeedback)}>
      <img className="group-image" src={group} alt="" />
      <SNewFeedbackTitle>Create New Feedback</SNewFeedbackTitle>
      {/* <SWriteFeedbackTitle>
        <span>Feedback Title</span>
        <p>Add a short, descriptive headline</p>
        <input
          name="title"
          className="feedback-title-input"
          type="text"
          ref={nameInputRef}
          {...register("title")}
        />
      </SWriteFeedbackTitle> */}

      <SharedInput
        control={control}
        name="title"
        label="Feedback Title"
        description="Add a short, descriptrive headline"
      />

      <CustomSelect
        // value={category}
        // handleChange={setCategory}
        control={control}
        name="category"
        label="Category"
        description="Choose a ategory for your feedback"
        options={categoryOptions}
      />

      <SharedInput
        control={control}
        isMultiple={true}
        rows={3}
        name="description"
        description="Include any specific comments on what should be improved, added, etc."
        label="Feedback Detail"
      />

      <SCancelOrAddFeedback>
        <SCancelButton>Cancel</SCancelButton>
        <SAddFeedbackButton>Add Feedback</SAddFeedbackButton>
      </SCancelOrAddFeedback>
    </SContentNewFeedback>
  );
}

export default AddFeedbackForm;

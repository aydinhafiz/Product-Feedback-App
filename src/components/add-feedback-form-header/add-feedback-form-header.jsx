import React from "react";

import { useNavigate } from "react-router-dom";
import { SNavbarLeftButton } from "./add-feedback-form-header.styles";

///////////////////// IMAGES////////////////////////////////////////////
import leftArrow from "../../components/assets/user-images/arrow-left.png";

function AddFeedbackFormHeader() {
  const navigate = useNavigate();
  return (
    <SNavbarLeftButton>
      <img src={leftArrow} alt="" />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </SNavbarLeftButton>
  );
}
export default AddFeedbackFormHeader;

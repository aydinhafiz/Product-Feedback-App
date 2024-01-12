import React from "react";
import styled from "styled-components";

import AddFeedbackForm from "../components/add-feedback-form/add-feedback-form.jsx";
import AddFeedbackFormHeader from "../components/add-feedback-form-header/add-feedback-form-header.jsx";

const SCreateNewFeedback = styled.div`
  max-width: 540px;
  margin: 0 auto;
`;
function NewFeedback() {
  return (
    <SCreateNewFeedback>
      <AddFeedbackFormHeader />
      <AddFeedbackForm />
    </SCreateNewFeedback>
  );
}
export default NewFeedback;

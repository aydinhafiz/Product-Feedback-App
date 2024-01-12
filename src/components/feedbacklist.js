import React, { useContext } from "react";

import Feedback from "../components/feedbacks/feedback";
import { FeedbackContext } from "../contexts/feedback-context";

function FeedbackList() {
  const { productRequests, upvoteRequest } = useContext(FeedbackContext);

  return (
    <div className="feedbacks ">
      {productRequests.map(function (request) {
        return <Feedback key={request.id} id={request.id} {...request} />;
      })}
    </div>
  );
}

export default FeedbackList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Feedback from "../components/feedbacks/feedback";
import Navbar from "../components/feedback-details-components/navbar/navbar";
import axios from "axios";
import { SAddCommentBar } from "./feedback-details.styles";

function FeedbackDetails(props) {
  const { feedbackId } = useParams();
  // const navigate = useNavigate();
  const [addCommentInput, setAddCommentinput] = useState(" ");

  // const feedback = productRequestsData.find(function (feedback) {
  //   return feedback.id === Number(feedbackId);
  // });

  const [request, setRequest] = useState(null);

  useEffect(() => {
    async function getData() {
      let data;
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODc3Yzg3M2ZlNjY2Y2E0ZTFjOTUwNyIsImlhdCI6MTY4NjY4MjIwMSwiZXhwIjoxNjk0NDU4MjAxfQ.i1aSRJVpc0FD-z3o_hVmwE0XrqK7zPWTEDwOwJd58T0`,
          "Content-Type": `application/json`,
        },
      };
      try {
        data = await axios.get(
          `https://tutorial-apis.herokuapp.com/api/v1/feedbacks/${feedbackId}`,
          config
        );
        setRequest(data.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  console.log(request?.upvotesUsers);
  return (
    <div className="container-list">
      <Navbar />

      <Feedback
        id={request?.id}
        upvotesUsers={request ? request.upvotesUsers : []}
        title={request?.title}
        category={request?.category}
        comments={request?.comments}
        upvotes={request?.upvotes}
        description={request?.description}
        isupvoted={request?.isupvoted}
      />

      {/* <Comments comments={feedback.comments}/> */}

      <SAddCommentBar>
        <div className="add-comment-write">
          <h2>Add Comment</h2>
          <div className="write-something">
            <textarea
              className="textarea-write"
              value={addCommentInput}
              onChange={(e) => setAddCommentinput(e.target.value)}
              type="text"
              placeholder="Type your comment here"
              
              name=""
              id=""
              cols="0"
              rows="0"
            ></textarea>
          </div>

          <div className="add-comment-state">
            <span className="characters-left">250 Characters left</span>
            <button className="post-comment">Post Comment</button>
          </div>
        </div>
      </SAddCommentBar>
    </div>
  );
}
export default FeedbackDetails;

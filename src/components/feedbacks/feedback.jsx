import { Link } from "react-router-dom";
import { SCommentsCount, SFeedback } from "./feedbacks.styles";

import { FeedbackContext } from "../../contexts/feedback-context";
import { AuthContext } from "../../contexts/auth-context";
import { useContext } from "react";
import axios from "axios";
////////////////////////////IMAGES///////////////////////////////////////
import arrowUp from "../../components/assets/shared/icon-arrow-up.svg";
import comment from "../../components/assets/shared/icon-comments.svg";
import whiteArrowUp from "../../components/assets/shared/white-arrow-up.png";

function Feedback(props) {
  const { getData } = useContext(FeedbackContext);
  const { token, user } = useContext(AuthContext);
  const { upvotes, title, description, category, comments, id, upvotesUsers } =
    props;

  console.log(id);

  function commentsData() {
    let count = 0;

    comments?.forEach(function (comment) {
      count = count + 1;
      if (comment.replies) {
        comment.replies.forEach(function (reply) {
          count = count + 1;
        });
      }
    });
    return count;
  }
  const commentsCount = commentsData(props);

  async function getUpvote() {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": `applicaion/json`,
      },
    };
    try {
      const data = await axios.get(
        `https://tutorial-apis.herokuapp.com/api/v1/feedbacks/upvote/${id}`,
        config
      );
      if (data.data.status === "success") {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(upvotesUsers);
  return (
    <SFeedback>
      {/* <div
        className={
          upvotesUsers.includes(user.id)
            ? " likes-bar-upvote upvoted"
            : "likes-bar "
        }
        onClick={() => {
          getUpvote(id);
        }}
      >
        {upvotesUsers.includes(user.id) ? (
          <img src={whiteArrowUp} alt="" />
        ) : (
          <img src={arrowUp} alt="" />
        )}
        <span>{upvotes}</span>
      </div> */}



      <UpvoteBox
        upvotesUsers={upvotesUsers}
        user={user}
        getUpvote={getUpvote}
        upvotes={upvotes}
        id={id}
      />

      <div className="info-bar">
        <div className="title">
          <Link to={`/feedbacks/${id}`}>
            <h2>{title}</h2>
          </Link>
        </div>
        <p>{description}</p>
        <button>{category}</button>
      </div>
      <div className="comments-bar">
        <img src={comment} alt="" />
        <SCommentsCount isZero={commentsCount === 0}>
          {commentsCount}
        </SCommentsCount>
      </div>
    </SFeedback>
  );
}

export default Feedback;

function UpvoteBox({ upvotesUsers, user, getUpvote, upvotes, id }) {
  return (
    <div
      className={
        upvotesUsers.includes(user.id)
          ? " likes-bar-upvote upvoted"
          : "likes-bar "
      }
      onClick={() => {
        getUpvote(id);
      }}
    >
      {upvotesUsers.includes(user.id) ? (
        <img src={whiteArrowUp} alt="" />
      ) : (
        <img src={arrowUp} alt="" />
      )}
      <span>{upvotes}</span>
    </div>
  );
}

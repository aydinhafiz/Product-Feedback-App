import React from "react";

////////////////////////////IMAGES///////////////////////////////////////
import Comment from "./comment";

function Comments(props) {
  // function commentsData() {
  //   let count = 0;

  //   comments?.forEach(function (comment) {
  //     count = count + 1;
  //     if (comment.replies) {
  //       comment.replies.forEach(function (reply) {
  //         count = count + 1;
  //       });
  //     }
  //   });
  //   return count;
  // }

  const { comments } = props;

  return (
    <div className="comments-content">
      <div className="comment-of-numbers">
        <h2>
          {/* {commentsData()} <span>Comments</span>{" "} */}
        </h2>
      </div>
      <div className="main-comment">
        {comments.map(function (comment) {
          return (
            <Comment
              key={comment.id}
              content={comment.content}
              userImg={comment.user.image}
              username={comment.user.name}
              userFullName={comment.user.username}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Comments;

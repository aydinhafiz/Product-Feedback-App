import React from "react";

////////////////////////////IMAGES///////////////////////////////////////


function Comment(props) {
  return (
    <div className="comment">
      <span className="first-name">{props.userFullName}</span>
      <div className="main-order">
        <div className="main-info">
          <img
            src={props.userImg.replace(".", "")}
            alt=""
            className="profile-img"
          />
          <span className="user-name">@{props.username}</span>
        </div>
        <button className="reply-button">Reply</button>
      </div>
      <div className="description-paragraph">
        <p>{props.content}</p>
      </div>
    </div>
  );
}
export default Comment;

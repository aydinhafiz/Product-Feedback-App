import React from "react";

import notFoundImg from "../assets/user-images/image-zena.jpg";
import { SContainerNotFound, SContentNotFound } from "./not-found.styles";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <SContainerNotFound>
      <SContentNotFound>
        <img src={notFoundImg} alt="" className="not-found-img" />
        <h2 className="no-feedback-yet">There is no feedback yet.</h2>
        <p className="not-found-info">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Link to="/new">
          <button className="add-feedback-button">+ Add Feedback</button>
        </Link>
      </SContentNotFound>
    </SContainerNotFound>
  );
}
export default NotFound;

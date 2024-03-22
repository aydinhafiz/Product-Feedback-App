import React, { useContext, useEffect, useState } from "react";
import { FeedbackContext } from "../contexts/feedback-context";
import axios from "axios";
import { AuthContext } from "../contexts/auth-context";

function FeedbackProvider(props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [productRequests, setProductRequests] = useState([]);
  const { token } = useContext(AuthContext);
  function filterRequests() {}
  function upvoteRequest() {}

  // async function getData() {
  //   let data;
  //   const config = {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token} `,
  //       "Content-Type": `application/json`,
  //     },
  //   };
  //   try {
  //     data = await axios.get(
  //       "https://tutorial-apis.herokuapp.com/api/v1/feedbacks",
  //       config
  //     );
  //     setProductRequests(data.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   if (token) {
  //     getData();
  //   }
  // }, [token]);
  return (
    <FeedbackContext.Provider
      value={{
        setActiveCategory,
        activeCategory,
        upvoteRequest,
        productRequests,
        filterRequests,
        // getData,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
}
export default FeedbackProvider;

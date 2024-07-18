import { useContext } from "react";
import styled from "styled-components";

import "../App.css";

import Header from "../components/header/header";
import Sidebar from "../components/sidebars/sidebar";
import FeedbackList from "../components/feedbacklist";
import NotFound from "../components/not-found/not-found";
import { FeedbackContext } from "../contexts/feedback-context";
import { AuthContext } from "../contexts/auth-context";
import axios from "axios";
import { useQuery } from "react-query";
import { getAll } from "../components/services";

const SContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  max-width: 1110px;
  margin: 0 auto;
  margin-top: 94px;

  @media only screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`;
const Scontent = styled.div`
  flex: 1;
  margin-left: 20px;
  @media only screen and (max-width: 950px) {
    margin-left: 0;
  }
  width: 100%;
`;


function Home() {
  const authObjString = localStorage.getItem("authObj");
  let authObj;
  if (authObjString) {
    authObj = JSON.parse(authObjString);
  }

  const token = authObj?.token;

  const { isLoading, error, data } = useQuery("feedbacks", getAll, {
    refetchInterval: 500,
  });

  console.log(data);

  return (
    <SContainer>
      <Sidebar />
      <Scontent>
        <Header />
        {data?.data.length > 0 ? (
          <FeedbackList productRequests={data?.data} />
        ) : (
          <NotFound />
        )}
      </Scontent>
    </SContainer>
  );
}
export default Home;

import { useContext } from "react";
import styled from "styled-components";

import "../App.css";

import Header from "../components/header/header";
import Sidebar from "../components/sidebars/sidebar";
import FeedbackList from "../components/feedbacklist";
import NotFound from "../components/not-found/not-found";
import { FeedbackContext } from "../contexts/feedback-context";

const SContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  max-width: 1110px;
  margin: 0 auto;
  margin-top: 94px;

  @media only screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Scontent = styled.div`
  flex: 1;
  margin-left: 20px;
`;

function Home() {
  const { productRequests } = useContext(FeedbackContext);

  return (
    <SContainer>
      <Sidebar />
      <Scontent>
        <Header />
        {productRequests.length > 0 ? <FeedbackList /> : <NotFound />}
      </Scontent>
    </SContainer>
  );
}
export default Home;

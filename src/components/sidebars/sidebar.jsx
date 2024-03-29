import styled from "styled-components";

import Buttons from "./buttons";
import Roadmap from "./roadmap/roadmap";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

const SSidebar = styled.div`
  @media only screen and (max-width: 950px) {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
    gap: 16px;
    /* margin-bottom: 20px;
    margin-right: 30px;  */
  }

  @media only screen and (max-width: 800px) {
    gap: 30px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

const SLogOutButton = styled.button`
  margin-top: 30px;
  padding: 12.5px 25px;
  border-radius: 10px;
  margin-left: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  font-family: "Jost";
  border: none;
  background: #ad1fea;
  text-decoration: none;
  color: #f2f4fe;
  cursor: pointer;

  :hover {
    background: #c75af6;
    border-radius: 10px;
  }

  @media only screen and (max-width: 950px) {
    margin-top: 0;
    padding: 8.5px 15px;
    max-height: 50px;
    margin-left: 0px;
    display: none;
  }
`;

const SFeedbackBoard = styled.div`
  padding-bottom: 46px;
  padding-top: 62px;
  padding-left: 24px;
  /* padding-right: 77px; */

  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  border-radius: 10px;

  @media only screen and (max-width: 950px) {
    max-height: 165px;
    width: 223px;
  }

  @media only screen and (min-width: 950px) {
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 800px) {
    max-height: 170px;
    width: 180px;
    padding: 90px 0px 0px 15px;
  }

  @media only screen and (max-width: 680px) {
    max-height: 150px;
    width: 150px;
    padding: 80px 0px 0px 15px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 50px 0px 30px 20px;
    border-radius: 0;
    display: flex;
    justify-content: space-between;
  }

  padding-top: 62px;
  padding-left: 24px;
  padding-bottom: 46px;

  h2 {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.25px;
    color: #ffffff;

    @media only screen and (max-width: 680px) {
      font-size: 17px;
    }
  }

  span {
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.75;
    @media only screen and (max-width: 680px) {
      font-size: 13px;
    }
  }

  .hum-img {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .hum-img {
      width: 50px;
      display: block;
    }
  }
`;

function Sidebar() {
  const { handleLogoutState } = useContext(AuthContext);
  return (
    <SSidebar>
      <SFeedbackBoard>
        <div className="feedback-board__leftside">
          <h2>Frontend Mentor</h2>
          <span>Feedback Board</span>
        </div>

        <div className="hum-box">
          <img src="/assets/shared/hum-button.png" alt="" className="hum-img" />
        </div>
      </SFeedbackBoard>
      <Buttons />
      <Roadmap />
      <SLogOutButton onClick={handleLogoutState} className="logout-button">
        Log Out
      </SLogOutButton>
    </SSidebar>
  );
}

export default Sidebar;

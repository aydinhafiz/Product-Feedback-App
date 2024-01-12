import styled from "styled-components";

import Buttons from "./buttons";
import Roadmap from "./roadmap/roadmap";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

const SLogOutButton = styled.button`
  margin-top: 30px;
  padding: 12.5px 25px;
  border: none;
  background: #ad1fea;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 5px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: #f2f4fe;

  :hover {
    background: #c75af6;
    border-radius: 10px;
  }
`;

const SFeedbackBoard = styled.div`
  margin-bottom: 24px;
  padding-bottom: 46px;
  padding-top: 62px;
  /* padding-right: 77px; */
  padding-left: 24px;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  border-radius: 10px;

  h2 {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.25px;
    color: #ffffff;
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
  }
`;

function Sidebar() {
  const { handleLogoutState } = useContext(AuthContext);
  return (
    <div className="side-bar">
      <SFeedbackBoard>
        <h2>Frontend Mentor</h2>
        <span>Feedback Board</span>
      </SFeedbackBoard>
      <Buttons />
      <Roadmap />
      <SLogOutButton onClick={handleLogoutState} className="logout-button">
        Log Out
      </SLogOutButton>
    </div>
  );
}

export default Sidebar;

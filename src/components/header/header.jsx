import { Link } from "react-router-dom";
import { SHeader } from "./header.styles";

////////////////////////////IMAGES///////////////////////////////////////
import bulb2 from "../../components/assets/user-images/bulb2.png";
import plus from "../../components/assets/shared/icon-plus.svg";
import SortSelect from "../sort-select/sort-select";
import { useContext } from "react";
import { FeedbackContext } from "../../contexts/feedback-context";
import { AuthContext } from "../../contexts/auth-context";
function Header() {
  const { productRequests } = useContext(FeedbackContext);
  const { handleLogoutState } = useContext(AuthContext);
  return (
    <SHeader>
      <div className="left-header">
        <div className="left-side">
          <img src={bulb2} alt="" />
          <span className="suggestions">
            {" "}
            {productRequests.length} Suggestions
          </span>
        </div>
        <SortSelect />
      </div>


      <div className="right-header">
        <button className="log-out-header" onClick={handleLogoutState}>
          Log Out
        </button>
        <Link to="/new" className="add-feedback">
          <img src={plus} alt="" />
          <span>Add Feedback</span>
        </Link>
      </div>
    </SHeader>
  );
}

export default Header;

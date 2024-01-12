import { useContext } from "react";
import { FeedbackContext } from "../../contexts/feedback-context";
import { SCategories } from "./buttons.styles";

function Buttons() {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const { setActiveCategory, activeCategory, filterRequests } =
    useContext(FeedbackContext);
  return (
    <SCategories>
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={`category ${
              category === activeCategory ? "category--active" : ""
            } `}
            onClick={() => {
              setActiveCategory(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </SCategories>
  );
}
export default Buttons;

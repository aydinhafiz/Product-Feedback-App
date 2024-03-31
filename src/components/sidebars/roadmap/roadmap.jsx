import RoadmapItem from "./roadmap-item";
import { useContext, useEffect } from "react";
import { FeedbackContext } from "../../../contexts/feedback-context";
import { SRoadmap } from "./roadmap.style";
import { Link } from "react-router-dom";
import axios from "axios";

function Roadmap() {
  const { productRequests } = useContext(FeedbackContext);

  const statuses = ["planned", "in-progress", "live"];
  const requestCountsByStatus = productRequests.reduce((acc, curValue) => {
    if (statuses.includes(curValue.status)) {
      if (acc[curValue.status]) {
        acc[curValue.status] = acc[curValue.status] + 1;
      } else {
        acc[curValue.status] = 1;
      }
    }
    return acc;
  }, {});
  // "roadmap-view"

  useEffect(() => {
    let response;
    async function getData() {
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODc3Yzg3M2ZlNjY2Y2E0ZTFjOTUwNyIsImlhdCI6MTY4NjY4MjIwMSwiZXhwIjoxNjk0NDU4MjAxfQ.i1aSRJVpc0FD-z3o_hVmwE0XrqK7zPWTEDwOwJd58T0`,
          "Content-Type": `application/json`,
        },
      };
      try {
        response = await axios.get(
          "https://tutorial-apis.herokuapp.com/api/v1/feedbacks",
          config
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <SRoadmap>
      <div className="nav-bar">
        <h2>Roadmap</h2>

        <Link to="/roadmap-active">
          <button
            className={
              productRequests.length === 0
                ? "roadmap-view-no-feedback"
                : "roadmap-view"
            }
          >
            View
          </button>
        </Link>
      </div>
      <div className="">
        {statuses.map(function (status) {
          return (
            <RoadmapItem
              key={status}
              label={status}
              count={requestCountsByStatus[status]}
            />
          );
        })}
      </div>
    </SRoadmap>
  );
}

export default Roadmap;

import React, { useContext, useState } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./login";
import SignUp from "./signup-feedback";
import Home from "./home";
import NewFeedback from "./create-feedback";
import FeedbackDetails from "./feedback-details";
import { AuthContext } from "../contexts/auth-context";
import EditFeedback from "../components/edit-feedback/edit-feedback";
import RoadmapActive from "../components/roadmap-active/Roadmap-active";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

const protectedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <NewFeedback />,
  },
  {
    path: "/feedbacks/:feedbackId",
    element: <FeedbackDetails />,
  },
  {
    path: "/edit-feedback",
    element: <EditFeedback />,
  },
  {
    path: "/roadmap-active",
    element: <RoadmapActive />,
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

function Router() {
  const [isLogged, setIsLogged] = useState(true);
  const { token } = useContext(AuthContext);
  return <RouterProvider router={token ? protectedRouter : router} />;
}
export default Router;

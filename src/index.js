import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";

// import RequestDetails from "./routes/request-details";
import GlobalStyle from "./components/global-styles/global-styles";
import Router from "./routes/router";
import FeedbackProvider from "./providers/feedback-provider";
import AuthProvider from "./providers/auth-provider";

const theme = {
  primary: "#c75af6",
};

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider>
      <FeedbackProvider>
        <Router />
      </FeedbackProvider>
    </AuthProvider>
  </ThemeProvider>
);

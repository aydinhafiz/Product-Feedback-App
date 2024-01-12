import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SLoginHeader } from "../components/login/login.styles";
import axios from "axios";
import { AuthContext } from "../contexts/auth-context";

function Login() {
  const { handleLoginState } = useContext(AuthContext);
  const [username, setUsername] = useState("aydin2@gmail.com");
  const [password, setPassword] = useState("123456");

  async function login() {
    const response = await axios.post(
      "https://tutorial-apis.herokuapp.com/api/v1/auth/login",
      {
        username,
        password,
      },
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.data.status === "success") {
      handleLoginState(response.data.token, response.data.user);
    }
  }

  return (
    <SLoginHeader>
      <div className="login-page">
        <h2 className="title-login">Login</h2>
        <div className="login-info">
          <input
            className="login-email"
            type="email"
            placeholder="Email address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={login} className="login-your-account">
          Login to your account
        </button>
        <h3 className="dont-have-account">
          Don’t have an account?{" "}
          <Link to={"/signup"}>
            <span className="sign-up">Sign Up</span>
          </Link>
        </h3>
      </div>
    </SLoginHeader>
  );
}
export default Login;

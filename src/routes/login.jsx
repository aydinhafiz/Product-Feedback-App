import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SLoginContainer } from "../components/login/login.styles";
import axios from "axios";
import { AuthContext } from "../contexts/auth-context";

import { useForm } from "react-hook-form";

function Login() {
  const { handleLoginState } = useContext(AuthContext);
  const [username, setUsername] = useState("aydin2@gmail.com");
  const [password, setPassword] = useState("123456");

  const { register, handleSubmit } = useForm();

  async function login(credentials) {
    console.log(credentials);
    const response = await axios.post(
      "https://tutorial-apis.herokuapp.com/api/v1/auth/login",
      {
        username: credentials.email,
        password: credentials.password,
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
    <SLoginContainer onSubmit={handleSubmit(login)}>
      <div className="login-page">
        <h2 className="title-login">Login</h2>
        <div className="login-info">
          <div>
            <input type="text" {...register("email")} />

            <input type="password" {...register("password")} />
          </div>
        </div>
        <button type="submit" className="login-your-account">
          Login to your account
        </button>
        <h3 className="dont-have-account">
          Don’t have an account?{" "}
          <Link to={"/signup"}>
            <span className="sign-up">Sign Up</span>
          </Link>
        </h3>
      </div>
    </SLoginContainer>
  );
}

export default Login;

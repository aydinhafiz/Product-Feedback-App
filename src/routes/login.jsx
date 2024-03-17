import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SLoginContainer } from "../components/login/login.styles";
import axios from "axios";
import { AuthContext } from "../contexts/auth-context";

import { useForm } from "react-hook-form";

function Login() {
  const { handleLoginState } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "aydin@gmail.com",
      password: "123456",
    },
  });

  async function login(credentials) {
    console.log(credentials);
    setLoading(true);
    try {
      const response = await axios.post(
        "https://tutorial-apis.herokuapp.com/api/v1/auth/login",
        {
          username: credentials.username,
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
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <SLoginContainer onSubmit={handleSubmit(login)}>
      <div className="login-page">
        <h2 className="title-login">Login</h2>
        <div className="login-info">
          <div>
            <input
              className="primary-input mb-24 pt-15"
              placeholder={"Email"}
              type={"email"}
              {...register("username")}
            />

            <input
              className="primary-input"
              placeholder={"Password"}
              type={"password"}
              {...register("password")}
            />
          </div>
        </div>
        <button disabled={loading} type="submit" className="login-your-account">
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

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SLoginHeader } from "../components/login/login.styles";
import axios from "axios";
import { AuthContext } from "../contexts/auth-context";
import { useFormik } from "formik";

function Login() {
  const { handleLoginState } = useContext(AuthContext);
  const [username, setUsername] = useState("aydin2@gmail.com");
  const [password, setPassword] = useState("123456");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
    <SLoginHeader onSubmit={formik.handleSubmit}>
      <div className="login-page">
        <h2 className="title-login">Login</h2>
        <div className="login-info">
          <input
            className="login-email"
            type="email"
            name="email"
            placeholder="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <input
            className="login-password"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
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

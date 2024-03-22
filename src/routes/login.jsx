import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SLoginContainer } from "../components/login/login.styles";
import axios from "axios";
import { AuthContext } from "../contexts/auth-context";

import { useForm } from "react-hook-form";

function Login() {
  const { handleLoginState } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "aydin2@gmail.com",
      password: "123456",
    },
  });

  async function login(credentials) {
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

  console.log(formik.errors);

  return (
    <SLoginContainer onSubmit={handleSubmit(login)}>
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

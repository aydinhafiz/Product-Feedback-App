import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SSignUpHeader } from "../components/sign-up/signup.styles";
import axios from "axios";
import { useFormik } from "formik";

function SignUp() {
  const [name, setname] = useState("Elvin");
  const [surname, setsurname] = useState("Beytullazada");
  const [email, setEmail] = useState("aydin4@gmail.com");
  const [password, setPassword] = useState("123456");
  const [repeatPassword, setRepeatPassword] = useState("123456");

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  async function signUp() {
    const response = await axios.post(
      "https://tutorial-apis.herokuapp.com/api/v1/auth/register",
      {
        name,
        surname,
        username: email,
        role: "user",
        passwordConfirm: repeatPassword,
        password,
      },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  }

  return (
    <SSignUpHeader onSubmit={formik.handleSubmit}>
      <div className="signup-page">
        <h2 className="title-signup">Sign Up</h2>
        <input
          className="signup-name"
          type="text"
          placeholder="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          className="signup-surname"
          type="text"
          placeholder="surname"
          onChange={formik.handleChange}
          value={formik.values.surname}
        />
        <input
          className="signup-email"
          type="email"
          placeholder="Email address"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div className="signup-info">
          <input
            className="signup-password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <input
            className="repeat-password"
            type="password"
            placeholder="Repeat password"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
          />
        </div>
        <button onClick={signUp} className="login-your-account">
          Create an account
        </button>
        <h3 className="dont-have-account">
          Already have an account?{" "}
          <Link to={"/login"}>
            {" "}
            <span className="login">Login</span>
          </Link>
        </h3>
      </div>
    </SSignUpHeader>
  );
}
export default SignUp;

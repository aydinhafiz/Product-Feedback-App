import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SSignUpHeader } from "../components/sign-up/signup.styles";
import axios from "axios";
import { useFormik } from "formik";
import { useForm } from "react-hook-form";

function SignUp() {
  const [name, setname] = useState("Elvin");
  const [surname, setsurname] = useState("Beytullazada");
  const [email, setEmail] = useState("aydin4@gmail.com");
  const [password, setPassword] = useState("123456");
  const [repeatPassword, setRepeatPassword] = useState("123456");

  const { register, handleSubmit, watch } = useForm();

  async function signUp(signUpInfo) {
    const response = await axios.post(
      "https://tutorial-apis.herokuapp.com/api/v1/auth/register",
      {
        name: signUpInfo.name,
        surname: signUpInfo.surname,
        username: signUpInfo.email,
        role: "user",
        password: signUpInfo.password,
        passwordConfirm: signUpInfo.repeatPassword,
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
    <SSignUpHeader onSubmit={handleSubmit(signUp)}>
      <div className="signup-page">
        <h2 className="title-signup">Sign Up</h2>
        <input
          className="signup-name"
          type="text"
          placeholder="name"
          {...register("name")}
        />
        <input
          className="signup-surname"
          type="text"
          placeholder="surname"
          {...register("surname")}
        />
        <input
          className="signup-email"
          type="email"
          placeholder="Email address"
          {...register("email")}
        />
        <div className="signup-info">
          <input
            className="signup-password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <input
            className="repeat-password"
            type="password"
            placeholder="Repeat password"
            {...register("repeatPassword")}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SSignUpHeader } from "../components/sign-up/signup.styles";
import { useForm } from "react-hook-form";
import axios from "axios";
import InputLogin from "../shared/custom-input";

function SignUp() {
  const { handleSubmit, control } = useForm();

  async function signUp(signUpInfo) {
    const response = await axios.post(
      "https://tutorial-apis.herokuapp.com/api/v1/auth/register",
      {
        name: signUpInfo.name,
        surname: signUpInfo.surname,
        username: signUpInfo.email,
        password: signUpInfo.password,
        passwordConfirm: signUpInfo.repeatPassword,
        role: "user",
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
        <InputLogin
          placeholder={"Name"}
          type={"text"}
          name={"name"}
          control={control}
          extraStyles={`margin-bottom:24px;`}
        />

        <InputLogin
          placeholder={"Surname"}
          type={"text"}
          name={"surname"}
          control={control}
          extraStyles={`margin-bottom:24px;`}
        />

        <InputLogin
          placeholder={"Email address"}
          type={"email"}
          name={"email"}
          control={control}
          extraStyles={`margin-bottom:24px;`}
        />

        <div className="signup-info">
          <InputLogin
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            control={control}
            extraStyles={`margin-bottom:24px;`}
          />

          <InputLogin
            placeholder={"Repeat password"}
            type={"password"}
            name={"repeatPassword"}
            control={control}
          />
        </div>
        <button type="submit" className="login-your-account">
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

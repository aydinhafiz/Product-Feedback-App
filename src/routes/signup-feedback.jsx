import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SSignUpHeader } from "../components/sign-up/signup.styles";
import axios from "axios";
import { useForm } from "react-hook-form";
import SInput from "../shared/input-signup/input-signup.styles";

function SignUp() {
  const { handleSubmit, control } = useForm();

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
        <SInput
          placeholder={"Name"}
          type={"text"}
          name={"name"}
          control={control}
          extraStyles={`margin-bottom:24px;`}
        />

        <SInput
          placeholder={"Surname"}
          type={"text"}
          name={"surname"}
          control={control}
          extraStyles={`margin-bottom:24px;`}
        />

        <SInput
          placeholder={"Email address"}
          type={"email"}
          name={"email"}
          control={control}
          extraStyles={`margin-bottom:24px;`}
        />

        <div className="signup-info">
          <SInput
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            control={control}
            extraStyles={`margin-bottom:24px;`}
          />

          <SInput
            placeholder={"Repeat password"}
            type={"password"}
            name={"repeatPassword"}
            control={control}
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

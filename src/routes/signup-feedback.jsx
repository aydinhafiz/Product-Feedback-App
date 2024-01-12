import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SSignUpHeader } from "../components/sign-up/signup.styles";
import axios from "axios";

function SignUp() {
  const [name, setname] = useState("Elvin");
  const [surname, setsurname] = useState("Beytullazada");
  const [email, setEmail] = useState("aydin4@gmail.com");
  const [password, setPassword] = useState("123456");
  const [repeatPassword, setRepeatPassword] = useState("123456");

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
    <SSignUpHeader>
      <div className="signup-page">
        <h2 className="title-signup">Sign Up</h2>
        <input
          className="signup-name"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          className="signup-surname"
          type="text"
          placeholder="surname"
          value={surname}
          onChange={(e) => {
            setsurname(e.target.value);
          }}
        />
        <input
          className="signup-email"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="signup-info">
          <input
            className="signup-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className="repeat-password"
            type="password"
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
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

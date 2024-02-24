import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SLoginHeader } from "../components/login/login.styles";
import axios from "axios";
import { AuthContext } from "../contexts/auth-context";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useForm, SubmitHandler, useForm } from "react-hook-form";

function Login() {
  const { handleLoginState } = useContext(AuthContext);
  const [username, setUsername] = useState("aydin2@gmail.com");
  const [password, setPassword] = useState("123456");

  //   const {
  //     login,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm<Inputs>()
  //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  //   console.log(watch("example")) // watch input value by passing the name of it

  // return (
  //   /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     {/* login your input into the hook by invoking the "login" function */}
  //     <input defaultValue="test" {...login("example")} />

  //     {/* include validation with required or other standard HTML validation rules */}
  //     <input {...login("exampleRequired", { required: true })} />
  //     {/* errors will return when field validation fails  */}
  //     {errors.password && <span>This field is required</span>}

  //     <input type="submit" />
  //   </form>
  // )

  // const useForm = useForm({});

  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: LoginSchema,
  });

  async function login() {
    const response = await axios.post(
      "https://tutorial-apis.herokuapp.com/api/v1/auth/login",
      {
        // username,
        // password,
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

  console.log(formik.touched);

  return (
    <SLoginHeader onSubmit={handleSubmit(onSubmit)}>
      <div className="login-page">
        <h2 className="title-login">Login</h2>
        <div className="login-info">
          <div>
            <input
              className="login-email"
              type="email"
              name="email"
              placeholder="Email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}

            <input
              className="login-password"
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...login("exampleRequired", { required: true })}
              defaultValue="test"
              {...login("example")}
            />
            {/* {formik.touched.password && formik.errors.password && (
              <p style={{ color: "red" }}>{formik.errors.password}</p>)} */}

            {errors.password && (
              <p style={{ color: "red" }}>This field is required</p>
            )}
          </div>
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

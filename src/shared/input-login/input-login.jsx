import React from "react";
import { useForm, Controller } from "react-hook-form";

const { handleSubmit, control } = useForm();

function InputLogin({ designName, placeholder, type, name }) {
  return (
    <Controller
      control={control}
      name="ReactDatepicker"
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <input
          className="login-password"
          placeholder="Password"
          type="password"
          {...register("password")}
        />
      )}
    />
  );
}

export default InputLogin;

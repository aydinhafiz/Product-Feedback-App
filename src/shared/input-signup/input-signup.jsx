import React from "react";
import { Controller } from "react-hook-form";
import SInput from "./input-signup.styles";

function InputLogin({ extraStyles, placeholder, type, name, control }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <SInput
          extraStyles={extraStyles}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
        />
      )}
    />
  );
}

export default InputLogin;

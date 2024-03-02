import React from "react";
import { useForm, Controller } from "react-hook-form";

function InputLogin({ designName, placeholder, type, name }) {
  const { handleSubmit, control } = useForm();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <input className={designName} placeholder={placeholder} type={type} />
      )}
    />
  );
}

export default InputLogin;

import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export const SLoginInput = styled.input`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #3a4374;

  padding: 0px 18px;
  width: 100%;
  border: none;
  background: none;
  border-bottom: 1px solid #4661e6;
  padding-bottom: 17px;
  mix-blend-mode: normal;

  outline: none;

  ${({ extraStyles }) => (extraStyles ? `${extraStyles}` : "")}
`;

function Inputlogin({ placeholder, type, registerKey, extraStyles }) {
  const { register } = useForm({});

  return (
    <SLoginInput
      placeholder={placeholder}
      type={type}
      {...register({ registerKey })}
      extraStyles={extraStyles}
    />
  );
}

export default Inputlogin;

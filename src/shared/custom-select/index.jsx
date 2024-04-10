import {
  SCustomSelect,
  SCustomSelectInput,
  SSelectItem,
  SSelectItemsBox,
} from "./custom-select.styled";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

import OutsideClickHandler from "react-outside-click-handler";

import arrowDown from "../../components/assets/shared/icon-arrow-down.svg";
import arrowUp from "../../components/assets/shared/icon-arrow-up.svg";

import iconCheck from "../../components/assets/shared/icon-check.svg";
function CustomSelect({
  options,
  label,
  description,
  handleChange,
  control,
  name,
}) {
  const [isOptionsBoxOpen, setIsOptionsBoxOpen] = useState(false);

  function handleOptionItemClick(option) {
    handleChange(option);
    setIsOptionsBoxOpen(false);
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOptionsBoxOpen(false);
      }}
    >
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <SCustomSelect>
            <span>{label}</span>
            <p>{description}</p>
            <SCustomSelectInput
              onClick={() => setIsOptionsBoxOpen(!isOptionsBoxOpen)}
            >
              <button>{value}</button>
              <img
                src={isOptionsBoxOpen ? arrowDown : arrowUp}
                alt="arrow icon"
              />
            </SCustomSelectInput>
            {isOptionsBoxOpen && (
              <SSelectItemsBox>
                {options.map((option) => (
                  <SSelectItem
                    onClick={() => {
                      onChange(option);
                      setIsOptionsBoxOpen(false);
                    }}
                    key={option}
                  >
                    {" "}
                    {option}
                    {value === option && <img src={iconCheck} alt="" />}
                  </SSelectItem>
                ))}
              </SSelectItemsBox>
            )}
          </SCustomSelect>
        )}
      />
    </OutsideClickHandler>
  );
}

export default CustomSelect;

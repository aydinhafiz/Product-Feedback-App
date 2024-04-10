import React from "react";
import { Controller } from "react-hook-form";
import { SWriteFeedbackTitle } from "../../components/add-feedback-form/add-feedback-form.styles";

function SharedInput({
  extraStyles,
  placeholder,
  type,
  name,
  label,
  description,
  control,
  rows,
  isMultiple = false,
}) {
  return (
    <SWriteFeedbackTitle>
      <span>{label}</span>
      {description && <p>{description}</p>}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) =>
          isMultiple ? (
            <textarea
              className="feedback-detail-textarea"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              type={type}
              name="detail"
              id=""
              cols=""
              rows={rows}
            ></textarea>
          ) : (
            <input
              // name="title"
              className="feedback-title-input"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              type={type}
              // type="text"
              // ref={nameInputRef}
              // {...register("title")}
            />
          )
        }
      />
    </SWriteFeedbackTitle>
  );
}

export default SharedInput;

import React from "react";
import { useFormContext } from "react-hook-form";
import { StyledRadioContainer } from "./RadioButton.styled";

export default function RadioButton({
  label,
  value,
  onChange,
  id,
  state,
  name,
}) {
  const formContext = useFormContext();
  return (
    <StyledRadioContainer>
      <label>
        <input
          type="radio"
          id={id}
          checked={state === value}
          onChange={onChange}
          value={value}
          {...formContext.register(name)}
        />
        <p>{label}</p>
      </label>
    </StyledRadioContainer>
  );
}

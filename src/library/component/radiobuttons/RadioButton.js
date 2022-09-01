import React from "react";
import { StyledRadioContainer } from "./RadioButton.styled";

export default function RadioButton({
  label,
  value,
  onChange,
  id,
  isSelected,
}) {
  return (
    <StyledRadioContainer>
      <input
        type="radio"
        checked={isSelected === value}
        id={id}
        onChange={onChange}
        value={value}
      />
      <p>{label}</p>
    </StyledRadioContainer>
  );
}

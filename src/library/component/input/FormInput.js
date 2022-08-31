import React from "react";
import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledInputMessage,
  StyledInput,
} from "./FormInput.styled";

const FormInput = ({
  name,
  label,
  register,
  hintMessage,
  placeholder,
  margin,
  width = "363.4px",
  errors,
}) => (
  <StyledInputWrapper margin={margin} errors={errors?.[name]}>
    {label && <StyledInputLabel>{label}</StyledInputLabel>}
    <StyledInput
      width={width}
      type="text"
      placeholder={placeholder}
      {...register(name)}
    />
    {(errors?.[name] && (
      <StyledInputMessage>{errors?.[name].message}</StyledInputMessage>
    )) ||
      (hintMessage && <StyledInputMessage>{hintMessage}</StyledInputMessage>)}
  </StyledInputWrapper>
);

export default FormInput;

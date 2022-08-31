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
  width,
  errors,
}) => (
  <StyledInputWrapper margin={margin} errors={errors?.[label]}>
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

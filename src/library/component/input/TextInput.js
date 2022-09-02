import React from "react";
import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledInputMessage,
  StyledInput,
} from "./TextInput.styled";

const TextInput = ({
  name,
  label,
  register,
  hintMessage,
  placeholder,
  margin,
  width = "363.4px",
  errors,
}) => (
  <StyledInputWrapper width={width} margin={margin} errors={errors?.[name]}>
    {label && <StyledInputLabel>{label}</StyledInputLabel>}
    <StyledInput type="text" placeholder={placeholder} {...register(name)} />
    {(errors?.[name] && (
      <StyledInputMessage>{errors?.[name].message}</StyledInputMessage>
    )) ||
      (hintMessage && <StyledInputMessage>{hintMessage}</StyledInputMessage>)}
  </StyledInputWrapper>
);
export default TextInput;

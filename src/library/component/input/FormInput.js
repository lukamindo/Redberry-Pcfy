import React from "react";
import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledInputMessage,
  StyledInput,
} from "./FormInput.styled";

const FormInput = ({ label, register, required, hintMessage, placeholder }) => (
  <StyledInputWrapper>
    {label && <StyledInputLabel>{label}</StyledInputLabel>}
    <StyledInput placeholder={placeholder} {...register(label, { required })} />
    {hintMessage && <StyledInputMessage>{hintMessage}</StyledInputMessage>}
  </StyledInputWrapper>
);

export default FormInput;

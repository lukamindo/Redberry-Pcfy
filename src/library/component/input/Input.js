import React from "react";
import { StyledInput } from "./Input.styled";

const Input = ({
  type = "text",
  register,
  label,
  validationText,
  placeholder,
}) => {
  return (
    <>
      <input type={type} placeholder={placeholder}></input>
    </>
  );
};

export default Input;

import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({
  border = "none",
  backgroundColor = "#62A1EB",
  children,
  onClick,
  radius = "8px",
  width = "387px",
  height = "60px",
  font = "20px",
  fontColor = "#ffffff",
  margin,
  textAlign = "center",
  type = "button",
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      border={border}
      backgroundColor={backgroundColor}
      radius={radius}
      width={width}
      height={height}
      font={font}
      fontColor={fontColor}
      margin={margin}
      textAlign={textAlign}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

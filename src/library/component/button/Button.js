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
}) => {
  return (
    <StyledButton
      onClick={onClick}
      border={border}
      backgroundColor={backgroundColor}
      radius={radius}
      width={width}
      height={height}
      font={font}
      fontColor={fontColor}
      margin={margin}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

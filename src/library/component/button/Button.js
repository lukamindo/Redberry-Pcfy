import React from "react";

const Button = ({
  border = "none",
  color = "#62A1EB",
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
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        fontSize: font,
        color: fontColor,
        margin,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

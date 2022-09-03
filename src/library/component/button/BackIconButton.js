import React from "react";
import backbutton from "assets/imgs/backbutton.svg";
import { StyledBackIconButton } from "./BackIconButton.styled";

const BackIconButton = ({ onClickHandler }) => {
  return (
    <>
      <StyledBackIconButton onClick={onClickHandler}>
        <img src={backbutton} alt="redberry-pcfy"></img>
      </StyledBackIconButton>
    </>
  );
};

export default BackIconButton;
